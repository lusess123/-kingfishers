var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../Data", "./../../../../02col/01single/Text", "./../../../../02col/02Mulite/Combo"], function (require, exports, React, domFile, dataFile, textFile, comboFile) {
    "use strict";
    var domCore = domFile.Core;
    var ExamPackageUpdateMasterRowDom;
    (function (ExamPackageUpdateMasterRowDom) {
        var ExamPackageUpdateMasterRowDomAction = (function (_super) {
            __extends(ExamPackageUpdateMasterRowDomAction, _super);
            function ExamPackageUpdateMasterRowDomAction() {
                _super.apply(this, arguments);
            }
            return ExamPackageUpdateMasterRowDomAction;
        }(domCore.DomAction));
        ExamPackageUpdateMasterRowDom.ExamPackageUpdateMasterRowDomAction = ExamPackageUpdateMasterRowDomAction;
        var ExamPackageUpdateMasterRowDomReact = (function (_super) {
            __extends(ExamPackageUpdateMasterRowDomReact, _super);
            function ExamPackageUpdateMasterRowDomReact() {
                _super.apply(this, arguments);
                this.state = new ExamPackageUpdateMasterRowDomStates();
            }
            ExamPackageUpdateMasterRowDomReact.prototype.pSender = function () {
                var _this = this;
                return (React.createElement("div", {className: "panel"}, React.createElement("div", {className: "panel-heading"}, React.createElement("h4", {className: "panel-title"}, React.createElement("a", {onClick: function () { _this.fun_titleMasterClick(); }}, "体检套餐", React.createElement("i", {className: "fa fa-angle-" + (this.props.Vm.IsMasterHide ? "up" : "down")})))), React.createElement("div", {className: "panel-collapse collapse in"}, React.createElement("div", {className: "content active " + (this.props.Vm.IsMasterHide ? "hide" : "")}, React.createElement("div", {className: "Hm-form clearfix"}, React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required"}, "简码：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["SimpleCode"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required"}, "名称：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["Name"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required"}, "团体价格\t：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["GroupPrice"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required"}, "个人价格：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["IndividualPrice"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required"}, "年龄上限：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["AgeUpperLimit"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required"}, "年龄下限：")), React.createElement("div", {className: "pull-left Hu-input"}, this.inputAgeLowerLimit())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required"}, "适用性别：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.SexTypeCombo.intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "备注：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("textarea", {placeholder: "..", value: this.props.Vm.RowData.Remark, onChange: function (e) { _this.fun_OnChange(e, "Remark"); }}))))))));
            };
            ExamPackageUpdateMasterRowDomReact.prototype.inputAgeLowerLimit = function () {
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
            ExamPackageUpdateMasterRowDomReact.prototype.getInputVm = function (val, legalKind, fun) {
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
            ExamPackageUpdateMasterRowDomReact.prototype.fun_OnChange = function (e, fName) {
                var _val = e.target["value"];
                this.props.Vm.RowData[fName] = _val;
                this.forceUpdate();
            };
            ExamPackageUpdateMasterRowDomReact.prototype.fun_titleMasterClick = function () {
                this.props.Vm.IsMasterHide = !this.props.Vm.IsMasterHide;
                this.forceUpdate();
            };
            ExamPackageUpdateMasterRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return ExamPackageUpdateMasterRowDomReact;
        }(domCore.DomReact));
        ExamPackageUpdateMasterRowDom.ExamPackageUpdateMasterRowDomReact = ExamPackageUpdateMasterRowDomReact;
        var ExamPackageUpdateMasterRowDomVm = (function (_super) {
            __extends(ExamPackageUpdateMasterRowDomVm, _super);
            function ExamPackageUpdateMasterRowDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = ExamPackageUpdateMasterRowDomReact;
                this.RowData = {};
                this.TextVmObjList = {};
                this.fIsChangeRow = false;
                if (config) {
                    this.RowData = config.RowData;
                    this.RemarkOgi = this.RowData.Remark;
                    this.GenderOgi = this.RowData.Gender;
                    this.inputAgeLowerOi = this.RowData.AgeLowerLimit;
                    if (config.UniId) {
                        this.UniId = config.UniId;
                    }
                    this.SexTypeCombo = new comboFile.ui.ComboVm();
                    var List = dataFile.ExamPackage.ExamPackageGenderData;
                    var itemList = [];
                    for (var index = 0; index < List.length; index++) {
                        itemList.push(List[index]);
                    }
                    this.SexTypeCombo.ItemList = itemList;
                    this.SexTypeCombo.dataValueSet(this.RowData.Gender.toString());
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
            }
            ExamPackageUpdateMasterRowDomVm.prototype.compareSize = function (num1, num2, textVm) {
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
            ExamPackageUpdateMasterRowDomVm.prototype.getData = function (isDetailChange) {
                var _this = this;
                var _obj = {};
                _obj.Remark = this.RowData.Remark;
                _obj.Gender = this.RowData.Gender;
                _obj.AgeLowerLimit = this.RowData.AgeLowerLimit;
                this.TextVmObjList["SimpleCode"].getChangeValFun(function (isChange, val) {
                    if (isChange) {
                        _this.fIsChangeRow = true;
                        _obj.SimpleCode = val;
                    }
                });
                this.TextVmObjList["Name"].getChangeValFun(function (isChange, val) {
                    if (isChange) {
                        _this.fIsChangeRow = true;
                        _obj.Name = val;
                    }
                });
                this.TextVmObjList["GroupPrice"].getChangeValFun(function (isChange, val) {
                    if (isChange) {
                        _this.fIsChangeRow = true;
                        _obj.GroupPrice = Number(val);
                    }
                });
                this.TextVmObjList["IndividualPrice"].getChangeValFun(function (isChange, val) {
                    if (isChange) {
                        _this.fIsChangeRow = true;
                        _obj.IndividualPrice = Number(val);
                    }
                });
                if (this.RowData.Remark != this.RemarkOgi) {
                    this.fIsChangeRow = true;
                    _obj.Remark = this.RowData.Remark;
                }
                if (this.RowData.Gender != this.GenderOgi) {
                    this.fIsChangeRow = true;
                    _obj.Gender = this.RowData.Gender;
                }
                this.TextVmObjList["AgeUpperLimit"].getChangeValFun(function (isChange, val) {
                    if (isChange) {
                        _this.fIsChangeRow = true;
                        _obj.AgeUpperLimit = Number(val);
                    }
                });
                if (this.RowData.AgeLowerLimit != this.inputAgeLowerOi) {
                    this.fIsChangeRow = true;
                    _obj.AgeLowerLimit = this.RowData.AgeLowerLimit;
                }
                if (this.fIsChangeRow || isDetailChange) {
                    _obj.FID = this.RowData.FID;
                }
                this.fIsChangeRow = false;
                return _obj;
            };
            ExamPackageUpdateMasterRowDomVm.prototype.initTextVm = function (colName, legal) {
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
                    _exciteBean.dataValueSet(this.RowData[colName]);
                    _exciteBean.LegalObj.Kind = legal ? legal : "";
                    _exciteBean.onChangeHandle(function (val) {
                        _this.RowData[colName] = val;
                        return true;
                    });
                    this.TextVmObjList[_name] = _exciteBean;
                }
            };
            ExamPackageUpdateMasterRowDomVm.prototype.toChange = function () {
                this.IsChange = true;
                for (var n in this.TextVmObjList) {
                    this.TextVmObjList[n].IsChange = true;
                }
            };
            ExamPackageUpdateMasterRowDomVm.prototype.legal = function () {
                var l1 = this.TextVmObjList["Name"].legal();
                var l2 = this.TextVmObjList["SimpleCode"].legal();
                var l3 = this.TextVmObjList["GroupPrice"].legal();
                var l4 = this.TextVmObjList["IndividualPrice"].legal();
                var l5 = this.TextVmObjList["AgeUpperLimit"].legal();
                var l6 = this.AgeLowerLimitVm.legal();
                var _res = l1 && l2 && l3 && l4 && l5 && l6;
                return _res;
            };
            return ExamPackageUpdateMasterRowDomVm;
        }(domCore.DomVm));
        ExamPackageUpdateMasterRowDom.ExamPackageUpdateMasterRowDomVm = ExamPackageUpdateMasterRowDomVm;
        var ExamPackageUpdateMasterRowDomStates = (function (_super) {
            __extends(ExamPackageUpdateMasterRowDomStates, _super);
            function ExamPackageUpdateMasterRowDomStates() {
                _super.apply(this, arguments);
            }
            return ExamPackageUpdateMasterRowDomStates;
        }(domCore.DomStates));
        ExamPackageUpdateMasterRowDom.ExamPackageUpdateMasterRowDomStates = ExamPackageUpdateMasterRowDomStates;
        var ExamPackageUpdateMasterRowDomProps = (function (_super) {
            __extends(ExamPackageUpdateMasterRowDomProps, _super);
            function ExamPackageUpdateMasterRowDomProps() {
                _super.apply(this, arguments);
            }
            return ExamPackageUpdateMasterRowDomProps;
        }(domCore.DomProps));
        ExamPackageUpdateMasterRowDom.ExamPackageUpdateMasterRowDomProps = ExamPackageUpdateMasterRowDomProps;
    })(ExamPackageUpdateMasterRowDom = exports.ExamPackageUpdateMasterRowDom || (exports.ExamPackageUpdateMasterRowDom = {}));
});
