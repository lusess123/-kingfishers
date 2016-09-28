var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "./../../../../01core/Util", "./../../../../01core/Ioc", "./../../../../01core/Url", "react", "./../../../../02col/00core/BaseCol", "./../../../Common/Data", "./../../../../02col/02Mulite/SingleCheckBox"], function (require, exports, domFile, utilFile, iocFile, urlFile, React, baseColFile, constantData, singleCheckFile) {
    "use strict";
    var domCore = domFile.Core;
    var AccountRowDom;
    (function (AccountRowDom) {
        var AccountRowDomAction = (function (_super) {
            __extends(AccountRowDomAction, _super);
            function AccountRowDomAction() {
                _super.apply(this, arguments);
            }
            return AccountRowDomAction;
        }(domCore.DomAction));
        AccountRowDom.AccountRowDomAction = AccountRowDomAction;
        var AccountRowDomReact = (function (_super) {
            __extends(AccountRowDomReact, _super);
            function AccountRowDomReact() {
                _super.apply(this, arguments);
                this.state = new AccountRowDomStates();
            }
            AccountRowDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("tr", null, React.createElement("td", {className: (this.props.Vm.IsAcsRelative ? "  Hf-relative Hf-table-td " : ""), style: { left: this.props.Vm.LeftNum }}, React.createElement("span", null, this.createSingleCheckBox(), React.createElement("span", null, this.props.Vm.RowNumber + 1))), React.createElement("td", null, this.props.Vm.RowData.UnitName), React.createElement("td", null, this.props.Vm.RowData.BatchId), React.createElement("td", null, this.props.Vm.RowData.ReservationCount), React.createElement("td", null, this.props.Vm.RowData.RealCount), React.createElement("td", null, this.props.Vm.RowData.Fee), React.createElement("td", null, React.createElement("a", {className: "text-primary", onClick: function () { _this.props.Vm.updateOpt(); }}, "修改")));
            };
            AccountRowDomReact.prototype.createSingleCheckBox = function () {
                return this.props.Vm.SingleCheckVm.intoDom();
            };
            AccountRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return AccountRowDomReact;
        }(domCore.DomReact));
        AccountRowDom.AccountRowDomReact = AccountRowDomReact;
        var AccountRowDomVm = (function (_super) {
            __extends(AccountRowDomVm, _super);
            function AccountRowDomVm(config) {
                _super.call(this);
                this.ReactType = AccountRowDomReact;
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
                this.initColVm("GroupName", "SelectorVm", "notNull");
                this.initColVm("Name", "TextVm", "notNull");
                this.initColVm("IDCard", "TextVm", "notNull");
                this.initColVm("Age", "TextVm", "notNull");
                this.initColVm("Gender", "ComboVm");
                this.initColVm("MaritalStatus", "ComboVm");
                this.initColVm("Job", "ComboVm");
            }
            AccountRowDomVm.prototype.GetText = function (List, Id) {
                for (var index = 0; index < List.length; index++) {
                    if (List[index].Value == Id) {
                        return List[index].Text;
                    }
                }
                return "";
            };
            AccountRowDomVm.prototype.updateOpt = function () {
                var vals = this.BatchId;
                urlFile.Core.AkUrl.Current().openUrl("$WINUpdateAccountPage$" + vals + "$", true);
            };
            AccountRowDomVm.prototype.initColVm = function (colName, colType, legal) {
                var _this = this;
                var _name = colName.toString();
                var isexcite = false;
                for (var vn in this.ColVmObjList) {
                    var _obj = this.ColVmObjList[_name];
                    if (_obj) {
                        isexcite = true;
                        _exciteBean = _obj;
                    }
                }
                if (!isexcite) {
                    var _exciteBean = iocFile.Core.Ioc.Current().FetchInstance(colType, baseColFile.Core.BaseColVm);
                    if (this.RowData[colName] != undefined || this.RowData[colName] != null) {
                        _exciteBean.dataValueSet(this.RowData[colName]);
                    }
                    _exciteBean.Tag = colName;
                    _exciteBean.LegalObj.Kind = legal ? legal : "";
                    _exciteBean.onChangeHandle(function (val) {
                        _this.RowData[colName] = val;
                        return true;
                    });
                    _exciteBean.IsMulit = true;
                    if (colType == "ComboVm") {
                        this.initCombo(colName, utilFile.Core.Util.Cast(_exciteBean));
                    }
                    if (colType == "SelectorVm") {
                        this.initSelector(colName, utilFile.Core.Util.Cast(_exciteBean));
                    }
                    this.ColVmObjList[_name] = _exciteBean;
                }
            };
            AccountRowDomVm.prototype.initSelector = function (colName, selectVm) {
                selectVm.RegName = "UnitDataTable";
                selectVm.OnPostDataSetFun = function (ds) {
                    var _rows = ds["UnitGroupTable"] = [];
                    var _row = { UnitId: "001" };
                    _rows.push(_row);
                    return ds;
                };
            };
            AccountRowDomVm.prototype.initCombo = function (colName, comboVm) {
                switch (colName) {
                    case "Gender":
                        comboVm.ItemList = constantData.Data.GenderTypeData;
                        comboVm.dataValue(this.RowData[colName]);
                        break;
                    case "MaritalStatus":
                        comboVm.ItemList = constantData.Data.MaritalTypeData;
                        comboVm.dataValue(this.RowData[colName]);
                        break;
                    case "Job":
                        comboVm.ItemList = constantData.Data.JobTypeData;
                        comboVm.dataValue(this.RowData[colName]);
                        break;
                    case "Term":
                        comboVm.ItemList = constantData.Data.JobTypeData;
                        comboVm.dataValue(this.RowData[colName]);
                        break;
                    case "Pay":
                        comboVm.ItemList = constantData.Data.ExamBanlanceKindData;
                        comboVm.dataValue(this.RowData[colName]);
                        break;
                    case "Price":
                        comboVm.ItemList = constantData.Data.JobTypeData;
                        comboVm.dataValue(this.RowData[colName]);
                        break;
                    default:
                        break;
                }
            };
            AccountRowDomVm.prototype.legal = function () {
                //  var l1 = this.initColVm["BatchName"].legal();
                // var l2 = this.initColVm["BeginDate"].legal();
                //   var l3 = this.initColVm["EndDate"].legal();
                //  var l4 = this.initColVm["PreNumber"].legal();
                //  var _res = l1 && l2 && l3 && l4;
                return true;
            };
            return AccountRowDomVm;
        }(domCore.DomVm));
        AccountRowDom.AccountRowDomVm = AccountRowDomVm;
        var AccountRowDomStates = (function (_super) {
            __extends(AccountRowDomStates, _super);
            function AccountRowDomStates() {
                _super.apply(this, arguments);
            }
            return AccountRowDomStates;
        }(domCore.DomStates));
        AccountRowDom.AccountRowDomStates = AccountRowDomStates;
        var AccountRowDomProps = (function (_super) {
            __extends(AccountRowDomProps, _super);
            function AccountRowDomProps() {
                _super.apply(this, arguments);
            }
            return AccountRowDomProps;
        }(domCore.DomProps));
        AccountRowDom.AccountRowDomProps = AccountRowDomProps;
    })(AccountRowDom = exports.AccountRowDom || (exports.AccountRowDom = {}));
});
