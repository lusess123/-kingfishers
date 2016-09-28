var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../Data", "./../../../../02col/01single/Text", "./../../../../02col/02Mulite/Combo"], function (require, exports, React, domFile, dataFile, textFile, comboFile) {
    "use strict";
    var domCore = domFile.Core;
    var ExamPackageInsertMasterRowDom;
    (function (ExamPackageInsertMasterRowDom) {
        var ExamPackageInsertMasterRowDomAction = (function (_super) {
            __extends(ExamPackageInsertMasterRowDomAction, _super);
            function ExamPackageInsertMasterRowDomAction() {
                _super.apply(this, arguments);
            }
            return ExamPackageInsertMasterRowDomAction;
        }(domCore.DomAction));
        ExamPackageInsertMasterRowDom.ExamPackageInsertMasterRowDomAction = ExamPackageInsertMasterRowDomAction;
        var ExamPackageInsertMasterRowDomReact = (function (_super) {
            __extends(ExamPackageInsertMasterRowDomReact, _super);
            function ExamPackageInsertMasterRowDomReact() {
                _super.apply(this, arguments);
                this.state = new ExamPackageInsertMasterRowDomStates();
            }
            ExamPackageInsertMasterRowDomReact.prototype.pSender = function () {
                var _this = this;
                return (React.createElement("div", {className: "panel"}, React.createElement("div", {className: "panel-heading"}, React.createElement("h4", {className: "panel-title"}, React.createElement("a", {onClick: function () { _this.fun_titleMasterClick(); }}, "体检套餐", React.createElement("i", {className: "fa fa-angle-" + (this.props.Vm.IsMasterHide ? "up" : "down")})))), React.createElement("div", {className: "panel-collapse collapse in"}, React.createElement("div", {className: "content active " + (this.props.Vm.IsMasterHide ? "hide" : "")}, React.createElement("div", {className: "Hm-form clearfix"}, React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required"}, "简码：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["SimpleCode"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required"}, "名称：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["Name"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required"}, "团体价格\t：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["GroupPrice"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required"}, "个人价格：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["IndividualPrice"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required"}, "年龄上限：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["AgeUpperLimit"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required"}, "年龄下限：")), React.createElement("div", {className: "pull-left Hu-input"}, this.inputAgeLowerLimit())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required"}, "适用性别：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.SexTypeCombo.intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "备注：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("textarea", {placeholder: "..", value: this.props.Vm.RowData.Remark, onChange: function (e) { _this.fun_OnChange(e, "Remark"); }}))))))));
            };
            ExamPackageInsertMasterRowDomReact.prototype.inputAgeLowerLimit = function () {
                var _this = this;
                var _vm = this.props.Vm.AgeLowerLimitVm;
                if (!_vm) {
                    this.props.Vm.AgeLowerLimitVm = _vm = this.getInputVm(this.props.Vm.RowData.AgeLowerLimit, "custom");
                    _vm.LegalObj.CustomLegalFun = function (col) {
                        return _this.props.Vm.compareSize(_this.props.Vm.RowData.AgeUpperLimit, _vm.TempDataValue, _vm);
                    };
                    _vm.onChangeHandle(function (str) {
                        _this.props.Vm.RowData.AgeLowerLimit = Number(str);
                        return true;
                    });
                }
                return _vm.intoDom();
            };
            ExamPackageInsertMasterRowDomReact.prototype.getInputVm = function (val, legalKind, fun) {
                var _bean = new textFile.ui.TextVm();
                var str = "";
                if (val == null || val == undefined) {
                    str = "";
                }
                else {
                    str = val.toString();
                }
                _bean.vmdataValue(str);
                _bean.LegalObj.Kind = legalKind;
                return _bean;
            };
            ExamPackageInsertMasterRowDomReact.prototype.fun_OnChange = function (e, fName) {
                var _val = e.target["value"];
                this.props.Vm.RowData[fName] = _val;
                this.forceUpdate();
            };
            ExamPackageInsertMasterRowDomReact.prototype.fun_titleMasterClick = function () {
                this.props.Vm.IsMasterHide = !this.props.Vm.IsMasterHide;
                this.forceUpdate();
            };
            ExamPackageInsertMasterRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return ExamPackageInsertMasterRowDomReact;
        }(domCore.DomReact));
        ExamPackageInsertMasterRowDom.ExamPackageInsertMasterRowDomReact = ExamPackageInsertMasterRowDomReact;
        var ExamPackageInsertMasterRowDomVm = (function (_super) {
            __extends(ExamPackageInsertMasterRowDomVm, _super);
            function ExamPackageInsertMasterRowDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = ExamPackageInsertMasterRowDomReact;
                this.RowData = {};
                this.TextVmObjList = {};
                this.SexTypeCombo = new comboFile.ui.ComboVm();
                var List = dataFile.ExamPackage.ExamPackageGenderData;
                var itemList = [];
                for (var index = 0; index < List.length; index++) {
                    itemList.push(List[index]);
                }
                this.SexTypeCombo.ItemList = itemList;
                this.RowData.Gender = 0;
                this.SexTypeCombo.onChangeHandle(function (str) {
                    _this.RowData.Gender = Number(str);
                    return true;
                });
                this.initTextVm("SimpleCode", "notNull");
                this.initTextVm("Name", "notNull");
                this.initTextVm("AgeUpperLimit", "SeatLegalNull");
                this.initTextVm("GroupPrice", "SeatLegal");
                this.initTextVm("IndividualPrice", "SeatLegal");
            }
            ExamPackageInsertMasterRowDomVm.prototype.compareSize = function (num1, num2, textVm) {
                var re = /^[0-9]*[1-9][0-9]*$/;
                if (!re.test(num2)) {
                    textVm.LegalObj.LegalResult = true;
                    textVm.LegalObj.ErrMsg = "输入整数";
                    return "输入整数！";
                }
                var num = Number(num2);
                if (num1 > num) {
                    textVm.LegalObj.LegalResult = true;
                    textVm.LegalObj.ErrMsg = "年龄上限不能大于年龄下限";
                    return "年龄下限大于年龄上限！";
                }
                else {
                    textVm.LegalObj.LegalResult = false;
                    textVm.showLegal();
                    return "";
                }
            };
            ExamPackageInsertMasterRowDomVm.prototype.initTextVm = function (colName, legal) {
                var _this = this;
                var _name = colName.toString();
                var isexcite = false;
                for (var vn in this.TextVmObjList) {
                    var _obj = this.TextVmObjList[_name];
                    if (_obj) {
                        isexcite = true;
                        _exciteBean = _obj;
                    }
                }
                if (!isexcite) {
                    var _exciteBean = new textFile.ui.TextVm;
                    _exciteBean.Tag = colName;
                    _exciteBean.LegalObj.Kind = legal ? legal : "";
                    _exciteBean.onChangeHandle(function (val) {
                        _this.RowData[colName] = val;
                        return true;
                    });
                    this.TextVmObjList[_name] = _exciteBean;
                }
            };
            ExamPackageInsertMasterRowDomVm.prototype.toChange = function () {
                this.IsChange = true;
                for (var n in this.TextVmObjList) {
                    this.TextVmObjList[n].IsChange = true;
                }
            };
            return ExamPackageInsertMasterRowDomVm;
        }(domCore.DomVm));
        ExamPackageInsertMasterRowDom.ExamPackageInsertMasterRowDomVm = ExamPackageInsertMasterRowDomVm;
        var ExamPackageInsertMasterRowDomStates = (function (_super) {
            __extends(ExamPackageInsertMasterRowDomStates, _super);
            function ExamPackageInsertMasterRowDomStates() {
                _super.apply(this, arguments);
            }
            return ExamPackageInsertMasterRowDomStates;
        }(domCore.DomStates));
        ExamPackageInsertMasterRowDom.ExamPackageInsertMasterRowDomStates = ExamPackageInsertMasterRowDomStates;
        var ExamPackageInsertMasterRowDomProps = (function (_super) {
            __extends(ExamPackageInsertMasterRowDomProps, _super);
            function ExamPackageInsertMasterRowDomProps() {
                _super.apply(this, arguments);
            }
            return ExamPackageInsertMasterRowDomProps;
        }(domCore.DomProps));
        ExamPackageInsertMasterRowDom.ExamPackageInsertMasterRowDomProps = ExamPackageInsertMasterRowDomProps;
    })(ExamPackageInsertMasterRowDom = exports.ExamPackageInsertMasterRowDom || (exports.ExamPackageInsertMasterRowDom = {}));
});
