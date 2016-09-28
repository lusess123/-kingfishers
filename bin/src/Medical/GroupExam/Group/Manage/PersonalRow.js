var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "./../../../../01core/Url", "react", "./../../../Common/Data", "./../../../../02col/02Mulite/SingleCheckBox"], function (require, exports, domFile, urlFile, React, constantData, singleCheckFile) {
    "use strict";
    var domCore = domFile.Core;
    var PersonalRowDom;
    (function (PersonalRowDom) {
        var PersonalRowDomAction = (function (_super) {
            __extends(PersonalRowDomAction, _super);
            function PersonalRowDomAction() {
                _super.apply(this, arguments);
            }
            return PersonalRowDomAction;
        }(domCore.DomAction));
        PersonalRowDom.PersonalRowDomAction = PersonalRowDomAction;
        var PersonalRowDomReact = (function (_super) {
            __extends(PersonalRowDomReact, _super);
            function PersonalRowDomReact() {
                _super.apply(this, arguments);
                this.state = new PersonalRowDomStates();
            }
            PersonalRowDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("tr", null, React.createElement("td", {className: (this.props.Vm.IsAcsRelative ? "  Hf-relative Hf-table-td " : ""), style: { left: this.props.Vm.LeftNum }}, React.createElement("span", null, this.createSingleCheckBox(), React.createElement("span", null, this.props.Vm.RowNumber + 1))), React.createElement("td", null, this.props.Vm.RowData.GroupName), React.createElement("td", null, this.props.Vm.RowData.Name), React.createElement("td", null, this.props.Vm.RowData.IDCard), React.createElement("td", null, this.props.Vm.RowData.Age), React.createElement("td", null, this.props.Vm.GetText(constantData.Data.GenderTypeData, this.props.Vm.RowData.Gender)), React.createElement("td", null, this.props.Vm.GetText(constantData.Data.MaritalTypeData, this.props.Vm.RowData.MaritalStatus)), React.createElement("td", null, React.createElement("a", {className: "text-primary", onClick: function () { _this.props.Vm.updateOpt(_this.props.Vm.RowData.MemberId); }}, "修改"), React.createElement("a", {className: "text-danger", onClick: function () { _this.props.Vm.delOpt(_this.props.Vm.RowData.FID); }}, "删除")));
            };
            PersonalRowDomReact.prototype.createSingleCheckBox = function () {
                return this.props.Vm.SingleCheckVm.intoDom();
            };
            PersonalRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return PersonalRowDomReact;
        }(domCore.DomReact));
        PersonalRowDom.PersonalRowDomReact = PersonalRowDomReact;
        var PersonalRowDomVm = (function (_super) {
            __extends(PersonalRowDomVm, _super);
            function PersonalRowDomVm(config) {
                _super.call(this);
                this.ReactType = PersonalRowDomReact;
                this.ColVmObjList = {};
                this.IsAcsRelative = false;
                this.LeftNum = 0;
                this.SingleCheckVm = new singleCheckFile.ui.SingleCheckBoxVm();
                if (config) {
                    this.RowData = config.RowData;
                    this.IsAcsRelative = config.IsAcsRelative;
                    this.LeftNum = config.LeftNum;
                    this.UniId = config.UniId;
                    this.BatchId = config.BatchId;
                }
            }
            PersonalRowDomVm.prototype.GetText = function (List, Id) {
                for (var index = 0; index < List.length; index++) {
                    if (List[index].Value == Id) {
                        return List[index].Text;
                    }
                }
                return "";
            };
            PersonalRowDomVm.prototype.updateOpt = function (vals) {
                vals = vals + "," + this.BatchId;
                urlFile.Core.AkUrl.Current().openUrl("$WINMemberUPDATEPAGE$" + vals + "$", true);
            };
            PersonalRowDomVm.prototype.delOpt = function (vals) {
                var _this = this;
                if (confirm("你确定要删除 所选中的数据吗 ？？")) {
                    urlFile.Core.AkPost("/MedicalCenter/NewGroup/RemoveMember", { fids: vals }, function (data) {
                        var _data = data.Content;
                        if (_data == "ok") {
                            _this.emitAppEvent("Manage/GroupRuleTable/loadPageData", _this.UniId, "PersonalManage");
                        }
                    });
                }
            };
            //private initColVm(colName: string, colType: string, legal?: string) {
            //    var _name = colName.toString()
            //    var isexcite = false;
            //    for (var vn in this.ColVmObjList) {
            //        var _obj = this.ColVmObjList[_name];
            //        if (_obj) {
            //            isexcite = true;
            //            _exciteBean = _obj;
            //        }
            //    }
            //    if (!isexcite) {
            //        var _exciteBean = iocFile.Core.Ioc.Current().FetchInstance<baseColFile.Core.BaseColVm>(colType, baseColFile.Core.BaseColVm);
            //        if (this.RowData[colName] != undefined || this.RowData[colName] != null) {
            //            _exciteBean.dataValueSet(this.RowData[colName]);
            //        }
            //        _exciteBean.Tag = colName;
            //        _exciteBean.LegalObj.Kind = legal ? legal : "";
            //        _exciteBean.onChangeHandle((val) => {
            //            this.RowData[colName] = val;
            //            return true;
            //        });
            //        if (colType == "ComboVm") {
            //            this.initCombo(colName, utilFile.Core.Util.Cast<comboFile.ui.ComboVm>(_exciteBean));
            //        }
            //        //if (colType == "SelectorVm")
            //        //{
            //        //    this.initSelector(colName, utilFile.Core.Util.Cast<Selector.ui.SelectorVm>(_exciteBean));
            //        //}
            //        this.ColVmObjList[_name] = _exciteBean;
            //    }
            //}
            //public initSelector(colName: string, selectVm: Selector.ui.SelectorVm) {
            //    selectVm.RegName = "UnitDataTable";
            //    selectVm.OnPostDataSetFun = function (ds) {
            //        var _rows = ds["UnitGroupTable"] = [];
            //        var _row = { UnitId: "001" };
            //        _rows.push(_row);
            //        return ds;
            //    } 
            //}
            //public initCombo(colName: string, comboVm: comboFile.ui.ComboVm) {
            //    switch (colName) {
            //        case "Gender":
            //            comboVm.ItemList = constantData.Data.GenderTypeData;
            //            comboVm.dataValue(String(this.RowData[colName]));
            //            break;
            //        case "MaritalStatus":
            //            comboVm.ItemList = constantData.Data.MaritalTypeData;
            //            comboVm.dataValue(String(this.RowData[colName]));
            //            break;
            //        case "Job":
            //            comboVm.ItemList = constantData.Data.JobTypeData;
            //            comboVm.dataValue(String(this.RowData[colName]));
            //            break;
            //        case "Term":
            //            comboVm.ItemList = constantData.Data.JobTypeData;
            //            comboVm.dataValue(String(this.RowData[colName]));
            //            break;
            //        case "Pay":
            //            comboVm.ItemList = constantData.Data.ExamBanlanceKindData;
            //            comboVm.dataValue(String(this.RowData[colName]));
            //            break;
            //        case "Price":
            //            comboVm.ItemList = constantData.Data.JobTypeData;
            //            comboVm.dataValue(this.RowData[colName]);
            //            break;
            //        default:
            //            break;
            //    }
            //}
            PersonalRowDomVm.prototype.legal = function () {
                //  var l1 = this.initColVm["BatchName"].legal();
                // var l2 = this.initColVm["BeginDate"].legal();
                //   var l3 = this.initColVm["EndDate"].legal();
                //  var l4 = this.initColVm["PreNumber"].legal();
                //  var _res = l1 && l2 && l3 && l4;
                return true;
            };
            return PersonalRowDomVm;
        }(domCore.DomVm));
        PersonalRowDom.PersonalRowDomVm = PersonalRowDomVm;
        var PersonalRowDomStates = (function (_super) {
            __extends(PersonalRowDomStates, _super);
            function PersonalRowDomStates() {
                _super.apply(this, arguments);
            }
            return PersonalRowDomStates;
        }(domCore.DomStates));
        PersonalRowDom.PersonalRowDomStates = PersonalRowDomStates;
        var PersonalRowDomProps = (function (_super) {
            __extends(PersonalRowDomProps, _super);
            function PersonalRowDomProps() {
                _super.apply(this, arguments);
            }
            return PersonalRowDomProps;
        }(domCore.DomProps));
        PersonalRowDom.PersonalRowDomProps = PersonalRowDomProps;
    })(PersonalRowDom = exports.PersonalRowDom || (exports.PersonalRowDom = {}));
});
