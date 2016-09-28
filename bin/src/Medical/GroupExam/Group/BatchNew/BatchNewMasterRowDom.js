var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../../01core/Ioc", "./../../../../01core/Util", "./../../../Common/Data", "./../../../../02col/00core/BaseCol"], function (require, exports, React, domFile, iocFile, utilFile, constantData, baseColFile) {
    "use strict";
    var domCore = domFile.Core;
    var BatchNewMasterRowDom;
    (function (BatchNewMasterRowDom) {
        var BatchNewMasterRowDomAction = (function (_super) {
            __extends(BatchNewMasterRowDomAction, _super);
            function BatchNewMasterRowDomAction() {
                _super.apply(this, arguments);
            }
            return BatchNewMasterRowDomAction;
        }(domCore.DomAction));
        BatchNewMasterRowDom.BatchNewMasterRowDomAction = BatchNewMasterRowDomAction;
        var BatchNewMasterRowDomReact = (function (_super) {
            __extends(BatchNewMasterRowDomReact, _super);
            function BatchNewMasterRowDomReact() {
                _super.apply(this, arguments);
                this.state = new BatchNewMasterRowDomStates();
            }
            BatchNewMasterRowDomReact.prototype.pSender = function () {
                return React.createElement("div", {className: "YSm-modal-body clearfix"}, React.createElement("form", {className: "col-lg-7 col-md-7 col-sm-12 col-xs-12"}, React.createElement("div", {className: "form-group  form-inline clearfix"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label  text-right"}, "批次名称："), React.createElement("div", {className: "col-md-7 col-sm-9"}, this.props.Vm.ColVmObjList["Name"].intoDom())), React.createElement("div", {className: "form-group  form-inline clearfix"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label text-right"}, "开始时间："), React.createElement("div", {className: "col-md-7 col-sm-9"}, this.props.Vm.ColVmObjList["BeginDate"].intoDom())), React.createElement("div", {className: "form-group  form-inline clearfix"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label text-right"}, "体检人数："), React.createElement("div", {className: "col-md-7 col-sm-9"}, this.props.Vm.ColVmObjList["PreNumber"].intoDom())), React.createElement("div", {className: "form-group  form-inline clearfix"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label text-right"}, "结算方式："), React.createElement("div", {className: "col-md-7 col-sm-9"}, this.props.Vm.ColVmObjList["BanlanceKind"].intoDom()))));
            };
            BatchNewMasterRowDomReact.prototype.fun_detailTitleClick = function () {
                this.props.Vm.IsDetailHide = !this.props.Vm.IsDetailHide;
                this.forceUpdate();
            };
            BatchNewMasterRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return BatchNewMasterRowDomReact;
        }(domCore.DomReact));
        BatchNewMasterRowDom.BatchNewMasterRowDomReact = BatchNewMasterRowDomReact;
        var BatchNewMasterRowDomVm = (function (_super) {
            __extends(BatchNewMasterRowDomVm, _super);
            function BatchNewMasterRowDomVm(config) {
                _super.call(this);
                this.ReactType = BatchNewMasterRowDomReact;
                this.ColVmObjList = {};
                this.RowData = {};
                this.initColVm("Name", "TextVm", "notNull");
                this.initColVm("BeginDate", "DateTimeVm", "custom");
                //this.initColVm("EndDate", "DateTimeVm", "custom");           
                this.initColVm("PreNumber", "TextVm", "SeatLegal");
                this.initColVm("BanlanceKind", "ComboVm");
                // this.initColVm("Status", "ComboVm");
            }
            BatchNewMasterRowDomVm.prototype.initColVm = function (colName, colType, legal) {
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
                    _exciteBean.Tag = colName;
                    _exciteBean.LegalObj.Kind = legal ? legal : "";
                    _exciteBean.onChangeHandle(function (val) {
                        _this.RowData[colName] = val;
                        return true;
                    });
                    if (legal == "custom") {
                        _exciteBean.LegalObj.CustomLegalFun = function (col) {
                            return _this.compareSize(colName, _exciteBean.TempDataValue, utilFile.Core.Util.Cast(_exciteBean));
                        };
                    }
                    if (colName == "BeginDate") {
                        var dateTimeT = utilFile.Core.Util.Cast(_exciteBean);
                        dateTimeT.IsInAndAfterToday = false;
                    }
                    if (colType == "ComboVm") {
                        this.initCombo(colName, utilFile.Core.Util.Cast(_exciteBean));
                    }
                    this.ColVmObjList[_name] = _exciteBean;
                }
            };
            BatchNewMasterRowDomVm.prototype.FormatDate = function (strTime) {
                var date = new Date(strTime);
                return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
            };
            BatchNewMasterRowDomVm.prototype.compareSize = function (colName, endDate, textVm) {
                if (colName == "BeginDate") {
                    if (endDate == undefined || endDate == "") {
                        textVm.LegalObj.LegalResult = true;
                        textVm.LegalObj.ErrMsg = "开始时间不能为空";
                        return "开始时间不能为空！";
                    }
                    var date = new Date(endDate);
                    var today = new Date();
                    if (date <= today) {
                        textVm.LegalObj.LegalResult = true;
                        textVm.LegalObj.ErrMsg = "开始时间大于现在时间";
                        return "开始时间大于现在时间！";
                    }
                    else {
                        textVm.LegalObj.LegalResult = false;
                        textVm.showLegal();
                        return "";
                    }
                }
            };
            BatchNewMasterRowDomVm.prototype.initCombo = function (colName, comboVm) {
                switch (colName) {
                    case "BanlanceKind":
                        comboVm.ItemList = constantData.Data.ExamBanlanceKindData;
                        this.RowData[colName] = "0";
                        break;
                    //case "Status":
                    //    comboVm.ItemList = constantData.Data.ExamStatusData;
                    //    this.RowData[colName] = "0";
                    //    break;
                    default:
                        break;
                }
            };
            BatchNewMasterRowDomVm.prototype.toChange = function () {
                this.IsChange = true;
                for (var n in this.ColVmObjList) {
                    this.ColVmObjList[n].IsChange = true;
                }
            };
            BatchNewMasterRowDomVm.prototype.legal = function () {
                var _res = true;
                for (var vn in this.ColVmObjList) {
                    var _obj = this.ColVmObjList[vn];
                    if (_obj) {
                        _res = _res && _obj.legal();
                    }
                }
                return _res;
            };
            return BatchNewMasterRowDomVm;
        }(domCore.DomVm));
        BatchNewMasterRowDom.BatchNewMasterRowDomVm = BatchNewMasterRowDomVm;
        var BatchNewMasterRowDomStates = (function (_super) {
            __extends(BatchNewMasterRowDomStates, _super);
            function BatchNewMasterRowDomStates() {
                _super.apply(this, arguments);
            }
            return BatchNewMasterRowDomStates;
        }(domCore.DomStates));
        BatchNewMasterRowDom.BatchNewMasterRowDomStates = BatchNewMasterRowDomStates;
        var BatchNewMasterRowDomProps = (function (_super) {
            __extends(BatchNewMasterRowDomProps, _super);
            function BatchNewMasterRowDomProps() {
                _super.apply(this, arguments);
            }
            return BatchNewMasterRowDomProps;
        }(domCore.DomProps));
        BatchNewMasterRowDom.BatchNewMasterRowDomProps = BatchNewMasterRowDomProps;
    })(BatchNewMasterRowDom = exports.BatchNewMasterRowDom || (exports.BatchNewMasterRowDom = {}));
});
