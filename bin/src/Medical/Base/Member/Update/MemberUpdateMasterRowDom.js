var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../../01core/Ioc", "./../../../../01core/Util", "./../../../Common/Data", "./../../../../02col/00core/BaseCol"], function (require, exports, React, domFile, iocFile, utilFile, constantData, baseColFile) {
    "use strict";
    var domCore = domFile.Core;
    var MemberUpdateMasterRowDom;
    (function (MemberUpdateMasterRowDom) {
        var MemberUpdateMasterRowDomAction = (function (_super) {
            __extends(MemberUpdateMasterRowDomAction, _super);
            function MemberUpdateMasterRowDomAction() {
                _super.apply(this, arguments);
            }
            return MemberUpdateMasterRowDomAction;
        }(domCore.DomAction));
        MemberUpdateMasterRowDom.MemberUpdateMasterRowDomAction = MemberUpdateMasterRowDomAction;
        var MemberUpdateMasterRowDomReact = (function (_super) {
            __extends(MemberUpdateMasterRowDomReact, _super);
            function MemberUpdateMasterRowDomReact() {
                _super.apply(this, arguments);
                this.state = new MemberUpdateMasterRowDomStates();
            }
            MemberUpdateMasterRowDomReact.prototype.pSender = function () {
                var _this = this;
                return (React.createElement("div", {className: "panel"}, React.createElement("div", {className: "panel-heading"}, React.createElement("h4", {className: "panel-title"}, React.createElement("a", {onClick: function () { _this.fun_titleMasterClick(); }}, "会员明细", React.createElement("i", {className: "fa fa-angle-" + (this.props.Vm.IsMasterHide ? "up" : "down")})))), React.createElement("div", {className: "panel-collapse collapse in"}, React.createElement("div", {className: "content active " + (this.props.Vm.IsMasterHide ? "hide" : "")}, React.createElement("div", {className: "Hm-form clearfix"}, React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "档案编码：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {className: "pull-left"}, this.props.Vm.RowData.FileNumber))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "单位名称：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {className: "pull-left"}, this.props.Vm.RowData.UnitName))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "姓名：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {className: "pull-left"}, this.props.Vm.ColVmObjList["Name"].intoDom()))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "性别：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {className: "pull-left"}, this.props.Vm.ColVmObjList["Gender"].intoDom()))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "婚姻状况：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {className: "pull-left"}, this.props.Vm.ColVmObjList["MaritalStatus"].intoDom()))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "民族：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {className: "pull-left"}, this.props.Vm.ColVmObjList["Nation"].intoDom()))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "会员类型：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {className: "pull-left"}, this.props.Vm.ColVmObjList["MemberType"].intoDom()))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "年龄：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {className: "pull-left"}, this.props.Vm.ColVmObjList["Age"].intoDom()))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "出生日期：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {className: "pull-left"}, this.props.Vm.ColVmObjList["BirthDate"].intoDom()))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "联系方式：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {className: "pull-left"}, this.props.Vm.ColVmObjList["Phone"].intoDom()))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "身份证：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {className: "pull-left"}, this.props.Vm.ColVmObjList["IDCard"].intoDom()))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "工作单位：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {className: "pull-left"}, this.props.Vm.ColVmObjList["WorkUnit"].intoDom()))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "职业：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {className: "pull-left"}, this.props.Vm.ColVmObjList["Job"].intoDom()))))))));
            };
            MemberUpdateMasterRowDomReact.prototype.fun_OnChange = function (e, fName) {
                var _val = e.target["value"];
                this.props.Vm.RowData[fName] = _val;
                this.forceUpdate();
            };
            MemberUpdateMasterRowDomReact.prototype.fun_titleMasterClick = function () {
                this.props.Vm.IsMasterHide = !this.props.Vm.IsMasterHide;
                this.forceUpdate();
            };
            MemberUpdateMasterRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return MemberUpdateMasterRowDomReact;
        }(domCore.DomReact));
        MemberUpdateMasterRowDom.MemberUpdateMasterRowDomReact = MemberUpdateMasterRowDomReact;
        var MemberUpdateMasterRowDomVm = (function (_super) {
            __extends(MemberUpdateMasterRowDomVm, _super);
            function MemberUpdateMasterRowDomVm(config) {
                _super.call(this);
                this.ReactType = MemberUpdateMasterRowDomReact;
                this.RowData = {};
                this.ColVmObjList = {};
                if (config) {
                    this.RowData = config.RowData;
                    this.initColVm("IDCard", "TextVm", "IDCardLegal");
                    this.initColVm("Name", "TextVm", "notNull");
                    this.initColVm("Gender", "ComboVm", "notNull");
                    this.initColVm("Age", "TextVm", "notNull");
                    this.initColVm("BirthDate", "DateVm", "notNull");
                    this.initColVm("Nation", "ComboVm", "notNull");
                    this.initColVm("MaritalStatus", "ComboVm", "notNull");
                    this.initColVm("MemberType", "ComboVm", "notNull");
                    this.initColVm("Phone", "TextVm", "MobilePhoneLegal");
                    this.initColVm("WorkUnit", "TextVm", "notNull");
                    this.initColVm("Job", "ComboVm", "Null");
                }
            }
            MemberUpdateMasterRowDomVm.prototype.initColVm = function (colName, colType, legal) {
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
                    var _val = this.RowData[colName];
                    _exciteBean.dataValue(this.RowData[colName]);
                    _exciteBean.setOriValue(this.RowData[colName]);
                    _exciteBean.onChangeHandle(function (val) {
                        _this.RowData[colName] = val;
                        return true;
                    });
                    if (colType == "ComboVm") {
                        this.initCombo(colName, utilFile.Core.Util.Cast(_exciteBean));
                    }
                    this.ColVmObjList[_name] = _exciteBean;
                }
            };
            MemberUpdateMasterRowDomVm.prototype.initCombo = function (colName, comboVm) {
                var str = this.RowData[colName] == null ? "0" : String(this.RowData[colName]);
                switch (colName) {
                    case "Gender":
                        comboVm.ItemList = constantData.Data.GenderTypeData;
                        comboVm.dataValue(str);
                        comboVm.setOriValue(str);
                        break;
                    case "Nation":
                        comboVm.ItemList = constantData.Data.NationTypeData;
                        comboVm.dataValueSet(str);
                        comboVm.setOriValue(str);
                        break;
                    case "MaritalStatus":
                        comboVm.ItemList = constantData.Data.MaritalTypeData;
                        comboVm.dataValueSet(str);
                        comboVm.setOriValue(str);
                        break;
                    case "MemberType":
                        comboVm.ItemList = constantData.Data.MemberTypeData;
                        comboVm.dataValueSet(str);
                        comboVm.setOriValue(str);
                        break;
                    case "Job":
                        comboVm.ItemList = constantData.Data.JobTypeData;
                        comboVm.dataValueSet(str);
                        comboVm.setOriValue(str);
                        break;
                    case "ExamType":
                        comboVm.ItemList = constantData.Data.ExamTypeData;
                        comboVm.dataValueSet(str);
                        comboVm.setOriValue(str);
                        break;
                }
            };
            MemberUpdateMasterRowDomVm.prototype.toChange = function () {
                this.IsChange = true;
                for (var n in this.ColVmObjList) {
                    this.ColVmObjList[n].IsChange = true;
                }
            };
            MemberUpdateMasterRowDomVm.prototype.legal = function () {
                var _res = true;
                for (var vn in this.ColVmObjList) {
                    var _obj = this.ColVmObjList[vn];
                    if (_obj) {
                        _res = _res && _obj.legal();
                    }
                }
                return _res;
            };
            return MemberUpdateMasterRowDomVm;
        }(domCore.DomVm));
        MemberUpdateMasterRowDom.MemberUpdateMasterRowDomVm = MemberUpdateMasterRowDomVm;
        var MemberUpdateMasterRowDomStates = (function (_super) {
            __extends(MemberUpdateMasterRowDomStates, _super);
            function MemberUpdateMasterRowDomStates() {
                _super.apply(this, arguments);
            }
            return MemberUpdateMasterRowDomStates;
        }(domCore.DomStates));
        MemberUpdateMasterRowDom.MemberUpdateMasterRowDomStates = MemberUpdateMasterRowDomStates;
        var MemberUpdateMasterRowDomProps = (function (_super) {
            __extends(MemberUpdateMasterRowDomProps, _super);
            function MemberUpdateMasterRowDomProps() {
                _super.apply(this, arguments);
            }
            return MemberUpdateMasterRowDomProps;
        }(domCore.DomProps));
        MemberUpdateMasterRowDom.MemberUpdateMasterRowDomProps = MemberUpdateMasterRowDomProps;
    })(MemberUpdateMasterRowDom = exports.MemberUpdateMasterRowDom || (exports.MemberUpdateMasterRowDom = {}));
});
