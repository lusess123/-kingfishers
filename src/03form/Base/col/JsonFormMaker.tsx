import domFile = require("./../../../01core/0Dom");
import iocFile = require("./../../../01core/Ioc");
import baseColMakerFile = require("./BaseColMaker");
import pageView = require("./../../../07data/PageView");
import baseForm = require("./../../../03form/Base/BaseForm");
import gridForm = require("./../../../03form/Grid/GridForm");
import gridRow = require("./../../../03form/Grid/GridRow");
import basecolFile = require("./../../../02col/00core/baseCol");
import BaseColVm = basecolFile.Core.BaseColVm;
import eventFile = require("./../../../01core/Event");
import baseRow = require("./../../../03form/Base/BaseRow");
import baseColumn = require("./../../../03form/Base/BaseColumn");
import baseColumnGroup = require("./../../../03form/Base/BaseColumnGroup");
import utilFile = require("./../../../01core/Util");
import jsonFormCol = require("./../../../02col/01single/JsonForm");

export module ui {

    export class JsonFormMaker extends baseColMakerFile.ui.BaseColMaker<jsonFormCol.ui.JsonFormVm> {
        public maker() {
            super.maker()
            var _pageView = this.PageView;
            var _config = this.ColumnConfig;
            if (_pageView) {
                var _dt = _pageView.Data["JsonPageView"];
                if (_dt && _dt.length > 0 && _dt[0][_config.Name + "_PageView"]) {
                    var _res: pageView.data.IPageView = $.parseJSON(_dt[0][_config.Name + "_PageView"].toString());
                    this.ColVm.PageView = _res;
                }
            }
            this.initForm();
        }

        public initForm() {
            var _jsonForm = utilFile.Core.Util.Cast<jsonFormCol.ui.JsonFormVm>(this.BaseColVm);
            var _pageView = _jsonForm.PageView;
            if (!_pageView)
                return;
            var _formConfig = null;
            for (var formName in _pageView.Forms) {
                var _name: string = formName;
                if (_name.lastIndexOf("_INSERT") >= 0)
                    continue;
                if (_formConfig == null) {
                    _formConfig = _pageView.Forms[_name];
                }
            }
            if (_formConfig) {
                var _formNameStr: string = formName;
                var _form: baseForm.ui.BaseFormVm;
                if (_formConfig.FormType == "Album") _formConfig.FormType = "Grid";
                _form = iocFile.Core.Ioc.Current().FetchInstance<baseForm.ui.BaseFormVm>(_formConfig.FormType, baseForm.ui.BaseFormVm);
                if (!_form) {
                    throw "找不到名称为 " + _formConfig.FormType + "的表单类型";
                }
                if (_formConfig.FormType == "Grid") {
                    var _gridForm = utilFile.Core.Util.Cast<gridForm.ui.GridFormVm>(_form);
                    _gridForm.IsOnlyTable = true;
                    _gridForm.IsNoAllCheck = true;

                }
                var _id = eventFile.App.getUniId();
                _form.Id = "form" + _id;
                _form.UniId = _id.toString();

                _form.getEmit().addListener("createRow", (formVm: baseForm.ui.BaseFormVm) => {
                    this.createRow({}, formVm.RowObjList.length, formVm, _pageView);
                    formVm.IsChange = true;
                    formVm.forceUpdate("");
                });
                _form.FormConfig = _formConfig;
                _form.IsChange = true;
                _form.Name = _formConfig.Name;
                _form.TableName = _formConfig.TableName;
                _form.IsNoAdd = !_formConfig.HasBatchInsert;
                if (_formConfig.Action == "Detail") {
                    _form.IsNoDel = true;
                }
                _form.HasNoBorder = true;
                var _cols = _formConfig.Columns;
                _cols.forEach((col) => {
                    var _colconfig: baseColumnGroup.ui.ColumnConfig = new baseColumnGroup.ui.ColumnConfig();
                    _colconfig.DisplayName = col.DisplayName;
                    _colconfig.Name = col.Name;
                    _colconfig.ControlType = col.ControlType;
                    _form.Columns.push(_colconfig);
                });
                if (this.Val && this.Val != "") {
                    var _val = $.parseJSON(this.Val);
                    _form.FormData = _val[_formConfig.TableName] ? _val[_formConfig.TableName] : [];
                    _form.FormData.forEach((r, index) => {
                        this.createRow(r, index, _form, _pageView);

                    });
                }
                _form.link();
                _form.RowObjList.forEach((r) => {
                    r.getEmit().addListener("BaseRowVm_change", () => {
                        this.BaseColVm.IsDataValueChange = true;
                    });
                });
                _jsonForm.Form = _form;
            }
        }

        private createRow(
            dataRow: pageView.data.IDataRow,
            index: number,
            form: baseForm.ui.BaseFormVm,
            pageView: pageView.data.IPageView
        ) {
            //---------------创建一个空的row
            var _row: baseRow.ui.BaseRowVm;


            _row = iocFile.Core.Ioc.Current().FetchInstance<baseRow.ui.BaseRowVm>(form.FormConfig.FormType, baseRow.ui.BaseRowVm);
            if (form.FormConfig.FormType == "Grid") {
                var _gridRow = utilFile.Core.Util.Cast<gridRow.ui.GridRowVm>(_row);
                _gridRow.IsNoRowHandObj = true;
            }
            _row.Index = index;
            _row.UniId = form.UniId;
            _row.getEmit().addListener("row_del", (row: baseRow.ui.BaseRowVm) => {
                var _index = -1;
                form.RowObjList.forEach((r, index) => {
                    if (r == row) {
                        _index = index;
                        return;
                    }
                });
                if (_index >= 0) {
                    form.RowObjList[_index].dispose();
                    form.RowObjList.splice(_index, 1);
                    form.IsChange = true;
                    form.RowObjList.forEach((r, i) => {
                        if (i >= _index)
                            r.IsChange = true;
                        r.ColumnObjList.forEach((col) => {
                            col.IsChange = true;
                            if (col.ControlObj) {
                                col.ControlObj.IsChange = true;
                            }
                        });
                    });
                    form.forceUpdate("");
                }

            });
            _row.IsChange = true;
            //-----------------------初始化row
            _row.RowData = dataRow;
            _row.RowConfig = form.FormConfig;

            form.RowObjList.push(_row);
            _row.FormVm = form;


            //-------------------------------填充每一个字段---------
            var _cols = form.FormConfig.Columns;
            _cols.forEach((c, i) => {
                var _column: baseColumn.ui.BaseColumnVm;
                _column = iocFile.Core.Ioc.Current().FetchInstance<baseColumn.ui.BaseColumnVm>(form.FormConfig.FormType, baseColumn.ui.BaseColumnVm);
                _column.SubmitSign = form.TableName + "." + index.toString() + "." + c.Name;
                if (c.Options) {
                    _column.IsKey = c.Options.IsKey;
                }
                else {
                    // debugger;
                }
                _column.ColumnConfig = c;
                _row.ColumnObjList.push(_column);
                var _val = dataRow[c.Name];
                //每个控件单独处理
                this.InitMaker(c, _column, _val, pageView);
            });

        }

        private InitMaker(c: pageView.data.IColumn, _column: baseColumn.ui.BaseColumnVm, _val: string | number, pageView: pageView.data.IPageView) {
            //-----------------------------------------每个控件单独处理------------------
            // _column.d
            var tv: BaseColVm = iocFile.Core.Ioc.Current().FetchInstance<BaseColVm>(c.ControlType + "Vm", BaseColVm);
            if (tv != null) {

                //------------------baseCol---------------
                //--ioc--
                var baseColMaker: baseColMakerFile.ui.IColMaker = iocFile.Core.Ioc.Current().FetchInstance<baseColMakerFile.ui.IColMaker>(c.ControlType, "IColMaker");
                if (baseColMaker == null) {
                    baseColMaker = new baseColMakerFile.ui.DefaultBaseColMaker();

                }
                if (baseColMaker != null) {
                    baseColMaker.BaseColVm = tv;
                    baseColMaker.ColumnVm = _column;
                    baseColMaker.ColumnConfig = c;
                    baseColMaker.Val = _val;
                    baseColMaker.PageView = pageView;
                    baseColMaker.maker();
                }

            }
        }
    }

    export class DafaultJsonFormMaker extends JsonFormMaker {

    }

    iocFile.Core.Ioc.Current().RegisterType("JsonForm", "IColMaker", DafaultJsonFormMaker);
}