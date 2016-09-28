
import domFile = require("./../../01core/0Dom"); import basecolFile = require("./../../02col/00core/baseCol"); import BaseColReact = basecolFile.Core.BaseColReact; import BaseColVm = basecolFile.Core.BaseColVm; import BaseColProps = basecolFile.Core.BaseColProps; import BaseColStates = basecolFile.Core.BaseColStates; import BaseColAction = basecolFile.Core.BaseColAction;

import iocFile = require("./../../01core/Ioc");
import utilFile = require("./../../01core/Util");
import urlFile = require("./../../01core/Url");
import BaseColumn = require("./BaseColumn");
import BaseForm = require("./BaseForm");
import PageView = require("./../07data/PageView");
import baseRow = require("./BaseRow");
import page = require("./../../04page/Page");
import post = require("./../../01core/post");
import kvFile = require("./../../07data/Kv");
import buttonFile = require("./../../05tool/Button");
import baseColMakerFile = require("./col/BaseColMaker");
import radio = require("./col/RadioMaker");
import comBo = require("./col/ComboMaker");
import checkBox = require("./col/CheckBoxMaker");
import singleImageUpload = require("./col/SingleImageUploadMaker");
import singleFileUpload = require("./col/SingleFileUploadMaker");
import multiImageUpload = require("./col/MultiImageUploadMaker");
import multiFileUpload = require("./col/MultiFileUploadMaker");
import selector = require("./col/SelectMaker");
import mulselectorMaker = require("./col/MulselectorMaker");
import momeryControlMaker = require("./col/MomeryControlMaker");
import treeSelectorMaker = require("./col/TreeSelectorMaker");
import listMaker = require("./col/ListBoxMaker");
import detailMaker = require("./col/DetailMaker");
import startScore = require("./col/StarScoreMaker");
import jsonFormMaker = require("./col/JsonFormMaker");
import BaseColumnGroup = require("./BaseColumnGroup");
import normalColumnGroup = require("./../../03form/Norml/NormalColumnGroup");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
import EventFile = require("./../../01core/Event");

export module ui {

    baseColMakerFile.ui; 
    radio.ui;
    comBo.ui;
    checkBox.ui;
    singleFileUpload.ui;
    singleImageUpload.ui;
    multiFileUpload.ui;
    multiImageUpload.ui;
    selector.ui;
    mulselectorMaker.ui;
    momeryControlMaker.ui;
    treeSelectorMaker.ui;
    detailMaker.ui;
    listMaker.ui;
    startScore.ui;
    normalColumnGroup.ui;
    jsonFormMaker.ui;


    export class BasePageAction extends domFile.Core.DomAction {
      
    }
    class GolbSign {
        public static IsAnimate: boolean = false;
    }

    export interface IPageSubmitData
    {
        IsLegalResult: boolean;
        Ds: post.Post.IDataSet;
        IsChange: boolean;
    }

    export class BasePageReact<P extends BasePageProps<BasePageVm>, S extends BasePageStates, A extends BasePageAction> extends domFile.Core.DomReact<P, S, A> implements domFile.Core.IReact {

        protected senderEachForm(form:BaseForm.ui.BaseFormVm): React.ReactElement<any> {
            return form.intoDom();
        };
    
        protected senderMain(): React.ReactElement<any>[]
        {
            return this.props.Vm.FormObjList.map((form, i) => {
                form.key = i;
                return this.senderEachForm(form);
            });
        }

        protected pSenderBottom(): React.ReactElement<any>{
            return null; 
        }

        protected pSendError(): React.ReactElement<any> {
            var _error = this.props.Vm.HeaderVail.IsValid ? null :
                <div className="text-center panel">
                    <i className="icon-question-sign fa fa-frown-o  "></i>
                    {$(this.props.Vm.HeaderVail.Message).text() }
                </div>;
            return _error;
        }

        public pSender(): React.ReactElement<any> {

            var _animate = !GolbSign.IsAnimate ? " Ha-right-left" : " Ha-right-left2";

          


            return <div className=" AK-PAGE    Hg-overflow-auto Hz-scroll "  key={this.props.Vm.key}> 
                            {
                            [this.pSenderBottom(),
                                (this.props.Vm.HeaderVail.IsValid ?
                                    this.senderMain() : this.pSendError()),
                                this.pSenderBottom() 
                            ]}
                    </div>

        }

    }

    export class BasePageProps<V extends BasePageVm> extends domFile.Core.DomProps<V>{
    }

    export class BasePageVm extends domFile.Core.DomVm {
        public ReactType :any  =page.ui.PageReact;

        public PageView: PageView.data.IPageView;

        public FormObjList: Array<BaseForm.ui.BaseFormVm> = new Array<BaseForm.ui.BaseFormVm>();
        public HeaderVail: PageView.data.IHeader;
        public pRegName = "BasePage";
        public Xml: string;
        public ButtonObjList: Array<buttonFile.ui.ButtonVm> = [];
        public KeyValue: string;
        public HookId: string;



        //选择器
        //是否是选择器
        public isSelecor: boolean = false;
        //是否是多选
        public isSingleCheck: boolean = false;

        public IDSign: string;
        public TextSign: string;

        public SingleSelectEvent: baseRow.ui.ISingleSaveEvent;


        public getButtonVm(): Array<buttonFile.ui.ButtonVm> {
          return  getButton(this.PageView.PageButtons,this.PageView.DataButtons);
        }

       

        public checkBtns() {
        }

        public deleteFun(keys?: string[]) {
           
        }
        public updateFun(keys?: string[]) {
            var _keys =  keys ;
            if (_keys.length > 0) {
                var _strs = _keys.join(",");
                // if(_strs == )
                urlFile.Core.AkUrl.Current().openUrl("$WINDEFAULT$" + this.Xml + "$Update$" + _strs, true);
            }
            else {
                utilFile.Core.Util.Noty("请选择要编辑的记录");
            }
        }
        public detailFun(keys?: string[]) {
            var _keys = keys ;
            if (_keys.length > 0) {
                var _strs = _keys.join(",");
                urlFile.Core.AkUrl.Current().openUrl("$WINDEFAULT$" + this.Xml + "$Detail$" + _strs, true);
            }
            else {
                utilFile.Core.Util.Noty("请选择要查看的记录");
            }
        }

        public buttonCommd(name: string, keys?: string[]) {
            //if (!keys) {
            //    keys = this.getSelectKeysByListForm();
            //}
            //alert(name + "  /r/n " + $.toJSON(key));
            this.emitAppEvent("pPageButton", this.HookId, { right: name, keys: keys });
            // this.emitAppEvent("buttonCommd", this.UniId, { name: name, key: key });
        }

        public singleButtonClick(right: string, key: string[]) {
           
            switch (right) {
                case "Update":
                    this.updateFun(key);
                    break;
                case "Delete":
                    this.deleteFun(key);
                    break;
                case "Detail":
                    this.detailFun(key);
                    break;

                default:
                    this.buttonCommd(right, key);
                    break;
            }
        }

        protected pDispose() {
            if (this.HookId) {
                this.emitAppEvent("dispose", this.HookId);
            }
            super.pDispose();
        }

        public getPageSubmitData(forms: Array<BaseForm.ui.BaseFormVm>): IPageSubmitData {
            var isRes: boolean = true;
            var isChange: boolean = false;
            var sdList = new Array<post.Post.ISubmitData>();

            forms.forEach((form) => {
                if (form.RowObjList) {
                    form.RowObjList.forEach((row) => {

                        row.ColumnObjList.forEach((col) => {
                            // colGroup.ColumnObjList.forEach((col) => {
                            if (col.ControlObj) {
                                var vl = col.ControlObj.vmDataValueGet();
                                if (!isChange && !col.ControlObj.IsKey && col.ControlObj.IsDataValueChange)
                                    isChange = true;
                                //  col.ControlObj.
                                var _res = col.ControlObj.legal();
                                if (isRes && !_res) {
                                    isRes = false;
                                }
                                if (col.ControlObj.getRegName() != "" && col.ControlObj.IsDataValueChange) {
                                    sdList.push({
                                        SubmitSign: col.SubmitSign,
                                        DataValue: vl
                                    });
                                }
                            }

                            // })
                        })
                    });
                }
            });
            // this.props.Vm.SearchForm
            var _ds: post.Post.IDataSet = {};
            forms.forEach((form) => {
                if (form.DelKeyList) {
                    var _tblName = form.TableName + "_OPERATION";
                    _ds[_tblName] = [];
                    form.DelKeyList.forEach((dk) => {
                        if (!isRes) {
                            isRes = true;

                        }
                        if (!isChange) {
                            isChange = true;
                        }
                        //-----------
                        _ds[_tblName].push({ OperationName: "Delete", KeyValue: dk, Data: null });
                        //_row.OperationName = "Delete";
                        //_row.KeyValue = val;
                    });
                }
            });

            if (isRes) {
                var ds = post.Post.Util.createDataSet(sdList);
                ds = $.extend(ds, _ds);
                //console.log(ds);
                // alert(JSON.stringify(ds));
                return { IsLegalResult: isRes, Ds: ds, IsChange: isChange };
            }
            else {
                return { IsLegalResult: isRes, Ds: {}, IsChange: isChange };
            }
        }

        public createSysPage(pageStyle: string) {
            return { KeyValue: this.KeyValue, PageStyle: pageStyle };
        }


        public createRow(
            dataRow: PageView.data.IDataRow,
            index:number,
           // formType: string,
           // dataButtons: PageView.data.IDataButtons,
           // formConfig: PageView.data.IForm,
            form: BaseForm.ui.BaseFormVm,
            pageView:PageView.data.IPageView
        ) {
            //---------------创建一个空的row
            var _row: baseRow.ui.BaseRowVm;


            _row = iocFile.Core.Ioc.Current().FetchInstance<baseRow.ui.BaseRowVm>(form.FormConfig.FormType, baseRow.ui.BaseRowVm);
            _row.Index = index;
            _row.UniId = this.UniId;
            _row.getEmit().addListener("row_click", () => {
               // alert(1);
                this.checkBtns();
            });
          //  alert("创建");
            _row.getEmit().addListener("row_del", (row: baseRow.ui.BaseRowVm) => {
                var _index = -1;
               // alert();
                    form.RowObjList.forEach((r,index) => {
                        if (r == row) {
                            _index = index;
                            if (row.KeyColumnObj && row.KeyColumnObj.ControlObj) {
                                var _val = row.KeyColumnObj.ControlObj.vmDataValueGet();
                                if (!post.Post.Util.IsEmpty(_val)) {
                                    form.DelKeyList.push(_val);
                                }
                            }

                            return;
                        }
                    });
                   
                     
                    //form.RowObjList.forEach((rr) => {
                    //    rr.getEmit().on("row_click", () => {
                    //        //alert(2);
                    //        this.checkBtns();
                    //    });
                    //});
                   // alert(_index);
                    if (_index >= 0) {
                        form.RowObjList[_index].dispose();
                        form.RowObjList.splice(_index, 1);
                        form.IsChange = true;
                        form.RowObjList.forEach((r) => {
                            r.IsChange = true;
                            r.ColumnObjGruop.forEach((colGroup) => {
                                colGroup.ColumnObjList.forEach((col=> {
                                    col.IsChange = true;
                                    if (col.ControlObj) {
                                        col.ControlObj.IsChange = true;
                                    }
                                }));
                            })
                        });
                        form.forceUpdate("");
                        this.checkBtns();
                     }
               
            });
            //处理权限
            var _btRight = dataRow["BUTTON_RIGHT"];
            if (_btRight) {
                var _bts = _btRight.toString().split("|");
                _row.RowHandObj.ButtonList = getDataButton(_bts, pageView.DataButtons);

                //_row.RowHandObj.getEmit().addListener("singleButtonClick", (name:string,keys:string[]) => {
                //    this.singleButtonClick(name,keys);
                //})
                _row.RowHandObj.ButtonList.forEach((bt) => {
                    bt.ClickFun = () => {
                        //alert(bt.Right + "  " +  _row.KeyColumnObj.ControlObj.vmDataValueGet() );
                        this.singleButtonClick(bt.Right, [_row.KeyColumnObj.ControlObj.vmDataValueGet()]);
                    }
                });
            }
            //----------------------sq添加的两个属性难带还是添加事件--------------------------------
            _row.RowHandObj.isSelector = this.isSelecor;
            _row.RowHandObj.isSingleSelector = this.isSingleCheck;
            _row.IsSelector = this.isSelecor;
            _row.IsSingleSelect = this.isSingleCheck;
            _row.IDSign = this.IDSign;
            _row.TextSign = this.TextSign;
            _row.SingleSaveEvent = this.SingleSelectEvent;
            //_row.SaveEvent=
            _row.IsChange = true;
            //-----------------------初始化row
            _row.RowData = dataRow;
            _row.RowConfig = form.FormConfig;

            form.RowObjList.push(_row);
            _row.FormVm = form;

            //-----------填充每一个组 在每一个组里面填充没一个字段

            var _colGroups = form.FormConfig.ColumnGroups;
            if (_colGroups&&_colGroups.length!=0) {
                _colGroups.forEach((g, i) => {
                    var _columnGroup: BaseColumnGroup.ui.BaseColumnGroupVm;
                    //获取行的group的实例
                    _columnGroup = iocFile.Core.Ioc.Current().FetchInstance<BaseColumnGroup.ui.BaseColumnGroupVm>(form.FormConfig.FormType + "ColumnGroupVm", BaseColumnGroup.ui.BaseColumnGroupVm);
                    if (_columnGroup) {
                        _columnGroup.ColumGroupCofing = g;
                        //-------------------------------填充每一个字段---------
                        var _cols = g.Columns;
                        if (_cols) {
                            _cols.forEach((c, i) => {
                                var _column: BaseColumn.ui.BaseColumnVm;
                                _column = iocFile.Core.Ioc.Current().FetchInstance<BaseColumn.ui.BaseColumnVm>(form.FormConfig.FormType, BaseColumn.ui.BaseColumnVm);
                                _column.SubmitSign = form.TableName + "." + index.toString() + "." + c.Name;
                                _column.UniId = this.UniId;
                                if (c.Options) {
                                    _column.IsKey = c.Options.IsKey;
                                }
                                else {
                                    // debugger;
                                }
                                _column.ColumnConfig = c;
                                _row.ColumnObjList.push(_column);
                                var _val = dataRow[c.Name];

                                _columnGroup.ColumnObjList.push(_column);
                               
                               //每个控件单独处理
                                this.InitMaker(c, _column, _val, pageView);
                            });
                            _row.ColumnObjGruop.push(_columnGroup);
                        }
                    } //说明是GridColumGroupVm的类型 然后就不用管他了

                }
                )
            }
            else {
                //-------------------------------填充每一个字段---------
                var _cols = form.FormConfig.Columns;
                _cols.forEach((c, i) => {
                    var _column: BaseColumn.ui.BaseColumnVm;
                    _column = iocFile.Core.Ioc.Current().FetchInstance<BaseColumn.ui.BaseColumnVm>(form.FormConfig.FormType, BaseColumn.ui.BaseColumnVm);
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
                    
            ////-------------------------------填充每一个字段---------
            //var _cols = form.FormConfig.Columns;
            //_cols.forEach((c, i) => {
            //    var _column: BaseColumn.ui.BaseColumnVm;
            //    _column = iocFile.Core.Ioc.Current().FetchInstance<BaseColumn.ui.BaseColumnVm>(form.FormConfig.FormType, BaseColumn.ui.BaseColumnVm);
            //    _column.SubmitSign = form.TableName + "." + index.toString() + "." + c.Name;
            //    if (c.Options) {
            //        _column.IsKey = c.Options.IsKey;
            //    }
            //    else {
            //        // debugger;
            //    }
            //    _column.ColumnConfig = c;
            //    _row.ColumnObjList.push(_column);
            //    var _val = dataRow[c.Name];
            //    //-----------------------------------------每个控件单独处理------------------
            //    // _column.d
            //    var tv: domFile.Core.BaseColVm = iocFile.Core.Ioc.Current().FetchInstance<domFile.Core.BaseColVm>(c.ControlType + "Vm", domFile.Core.BaseColVm);
            //    if (tv != null) {
                 
            //        //------------------baseCol---------------
            //        //--ioc--
            //        var baseColMaker: baseColMakerFile.ui.IColMaker = iocFile.Core.Ioc.Current().FetchInstance<baseColMakerFile.ui.IColMaker>(c.ControlType, "IColMaker");
            //        if (baseColMaker == null) {
            //            baseColMaker = new baseColMakerFile.ui.DefaultBaseColMaker();    
                       
            //        }
            //        if (baseColMaker != null) {
            //            baseColMaker.BaseColVm = tv;
            //            baseColMaker.ColumnVm = _column;
            //            baseColMaker.ColumnConfig = c;
            //            baseColMaker.Val = _val;
            //            baseColMaker.PageView = pageView;
            //            baseColMaker.maker();
            //        }
                   
            //    }
            //});
        }


        //每个控件初始化Maker
        public InitMaker(c: PageView.data.IColumn, _column: BaseColumn.ui.BaseColumnVm, _val: string | number, pageView:PageView.data.IPageView)
        {
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

        protected pSetForeachForm(form: BaseForm.ui.BaseFormVm)
        {
        }

        protected pSetFormConfig(formConfig: PageView.data.IForm):void
        {
           // return 
        }

        public create(_pageView: PageView.data.IPageView) {
            //----------

            this.PageView = _pageView;
            this.ButtonObjList = this.getButtonVm();
            this.KeyValue = _pageView.KeyValue;
            //var _page = this;
            this.FormObjList = new Array<BaseForm.ui.BaseFormVm>();
            this.HeaderVail = _pageView.Header;
            if (this.HeaderVail) {
                this.IsChange = true;
                this.Xml = _pageView.RegName;
                for (var formName in _pageView.Forms) {
                    var _name: string = formName;
                    if (_name.lastIndexOf("_INSERT") >=0 )
                        continue;
                    var _formConfig = _pageView.Forms[formName];
                    if (_formConfig) {
                        this.pSetFormConfig(_formConfig);
                        var _formNameStr: string = formName;
                        var _form: BaseForm.ui.BaseFormVm;
                        if (_formConfig.FormType == "Album") _formConfig.FormType = "Grid";
                        _form = iocFile.Core.Ioc.Current().FetchInstance<BaseForm.ui.BaseFormVm>(_formConfig.FormType, BaseForm.ui.BaseFormVm);
                        if (!_form)
                        {
                            throw "找不到名称为 " + _formConfig.FormType + "的表单类型";
                        }
                        _form.Id = "form" + EventFile.App.getUniId();
                        _form.UniId = this.UniId;
                        this.pSetForeachForm(_form);

                        _form.getEmit().addListener("createRow", (formVm: BaseForm.ui.BaseFormVm) => {
                            this.createRow({}, formVm.RowObjList.length, formVm, _pageView);
                            formVm.IsChange = true;
                            //alert();
                            this.forceUpdate("");
                        });
                        _form.FormConfig = _formConfig;
                         

                        // if()
                        _form.IsChange = true;
                        _form.Name = _formConfig.Name;
                        _form.TableName = _formConfig.TableName;
                        this.FormObjList.push(_form);
                        //var _cols = _formConfig.Columns;
                        //_cols.forEach((col) => {
                        //    var _colconfig: BaseForm.ui.ColumnConfig = new BaseForm.ui.ColumnConfig();
                        //    _colconfig.DisplayName = col.DisplayName;
                        //    _colconfig.Name = col.Name;
                        //    _colconfig.ControlType = col.ControlType;
                        //    _form.Columns.push(_colconfig);
                        //});
                        //----------------------------

                        //------------------给每个组中的每个值附上数据
                        var _colGroups = _formConfig.ColumnGroups;
                        if (_colGroups&&_colGroups.length!=0) {
                            _colGroups.forEach((g) => {
                                var _colGroupconfig: BaseColumnGroup.ui.ColumnGroupConfig = new  BaseColumnGroup.ui.ColumnGroupConfig();
                                _colGroupconfig.DisplayName = g.DisplayName;
                                 _colGroupconfig.ColumnLength = _colGroups.length;
                                g.Columns.forEach((col) => {
                                    var _colconfig: BaseColumnGroup.ui.ColumnConfig = new BaseColumnGroup.ui.ColumnConfig();
                                    _colconfig.DisplayName = col.DisplayName;
                                    _colconfig.Name = col.Name;
                                    _colconfig.ControlType = col.ControlType;
                                    _form.Columns.push(_colconfig);
                                    _colGroupconfig.Columns.push(_colconfig);
                                })
                                _form.ColumnsGroup.push(_colGroupconfig);
                            })
                        } else {
                            //要将数据填充进去
                            var _cols = _formConfig.Columns;
                            _cols.forEach((col) => {
                                var _colconfig: BaseColumnGroup.ui.ColumnConfig = new BaseColumnGroup.ui.ColumnConfig();
                                _colconfig.DisplayName = col.DisplayName;
                                _colconfig.Name = col.Name;
                                _colconfig.ControlType = col.ControlType;
                                _form.Columns.push(_colconfig);
                            });
                        }



                        var _dt = _pageView.Data[_formConfig.TableName];
                        if (_dt) {
                            _form.FormData = _dt;
                            //alert(_dt.length);
                            _dt.forEach((r, index) => {
                              //  var _row: baseRow.ui.BaseRowVm;
                                this.createRow(r, index,  _form, _pageView);
                          
                            });

                        }
                    }
                }
                this.FormObjList.sort((a, b) => {
                    //a.
                    if (a.Name.indexOf("_SEARCH") > 0) {
                        return -1;
                    }
                    if (b.Name.indexOf("_SEARCH") > 0) {
                        return 1;
                    }
                    return 0;
                });
                this.IsChange = true;
            }
          //  return _page;
            this.link();
        }


  
        public link()
        {


            this.FormObjList.forEach((form) => {
                form.link();
            });
        }

        protected  pRefresh()
        {

        }
        public deleteRows(tableName: string, keys: string[])
        {
            var ds = this.setDeleteRowsDs(tableName,keys);
            urlFile.Core.AkPost("/module/ModuleMerge", {
                xml: this.Xml,
               // form: formName,
                //pageStyle: "List",
                ds: JSON.stringify(ds)
            }, (data) => {
                if (data.LegalException) {
                    utilFile.Core.Util.Noty(data.Error);
                }
                else {

                    if (data.res > 0) {
                        utilFile.Core.Util.Noty("删除操作成功","success");
                        this.pRefresh();

                       // utilFile.Core.Util.Noty(res.Error);
                       // Ataw.msgbox.show("操作成功！", 4, 2000);
                        //_this.afterPostData();

                    } else {
                       // Ataw.msgbox.show("操作失败,请核实！", 5, 2000);
                        utilFile.Core.Util.Noty("操作失败,请核实！","error");
                    }
                }
                });
        }

        public setDeleteRowsDs(tableName: string, keys: string[]): PageView.data.IDataSet
        {
            var _ds: PageView.data.IDataSet = {};
            var _tblName = tableName + "_OPERATION";
            var _tb = _ds[_tblName] = [];
            keys.forEach((k) => {
                _tb.push({ OperationName: "Delete", KeyValue: k, Data: null });
            });
            return _ds;
            //= [{ OperationName: "", KeyValue: key, Data: null }];
        }
    }

    export class BasePageStates extends domFile.Core.DomStates {
    }

    function getDataButton(rights: string[], dataButtons: PageView.data.IDataButtons): Array<buttonFile.ui.ButtonVm>
    {
        var _res = new Array<buttonFile.ui.ButtonVm>();
        rights.forEach((r) => {
            
            var _bt = dataButtons[r];
            if (r != "" && _bt) {

                var _IconCss: string = "";
                var _faCss: string = "";
                var _KindCss: string = "btn-secondary btn-xs";
                switch (_bt.Name) {
                    case "Detail":
                        _IconCss = "table";
                        _faCss = "table";
                        break;
                    case "Delete":
                        _IconCss = "trash";
                        _faCss = "trash";
                        break;
                    case "Update":
                        _IconCss = "edit";
                        _faCss = "edit";
                        break;
                    default:
                        break;
                }



                //----------
                var bt: buttonFile.ui.ButtonVm = new buttonFile.ui.ButtonVm(
                    {
                        FaCss: _faCss,
                        IconCss: _IconCss,
                        KindCss: _KindCss
                    }
                );
                bt.DisplayName = _bt.Text;
                bt.Name = _bt.Name;
                bt.NoEnable = false;
                bt.Right = _bt.Name;
               

                _res.push(bt);
               
            }

        });

        return _res;
    }

    function getButton(pageButtons: PageView.data.IDataButtons,  dataButtons: PageView.data.IDataButtons ): Array<buttonFile.ui.ButtonVm>
    {
        var _res = new Array<buttonFile.ui.ButtonVm>();
        for (var n in pageButtons) {
            var _bt = pageButtons[n];
            var bt: buttonFile.ui.ButtonVm = new buttonFile.ui.ButtonVm();
            bt.DisplayName = _bt.Text;
            bt.Name = _bt.Name;
            bt.NoEnable = false;
            bt.Right = _bt.Name;
           // bt.Tag = "page";
            _res.push(bt);
        }
        for (var n in dataButtons) {
            var _bt = dataButtons[n];
            var bt: buttonFile.ui.ButtonVm = new buttonFile.ui.ButtonVm();
            bt.DisplayName = _bt.Text;
            bt.Name = _bt.Name;
            bt.NoEnable = true;
            bt.Right = _bt.Name;
            bt.IsData = true;
            _res.push(bt);
        }
        return _res;

    }

}