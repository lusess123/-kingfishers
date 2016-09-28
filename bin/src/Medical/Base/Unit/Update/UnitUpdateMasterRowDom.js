var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../../02col/01single/Text", "./../../../../02col/02Mulite/Combo", "./../../../Common/Data"], function (require, exports, React, domFile, textFile, comboFile, constantData) {
    "use strict";
    var domCore = domFile.Core;
    var UnitUpdateMasterRowDom;
    (function (UnitUpdateMasterRowDom) {
        var UnitUpdateMasterRowDomAction = (function (_super) {
            __extends(UnitUpdateMasterRowDomAction, _super);
            function UnitUpdateMasterRowDomAction() {
                _super.apply(this, arguments);
            }
            return UnitUpdateMasterRowDomAction;
        }(domCore.DomAction));
        UnitUpdateMasterRowDom.UnitUpdateMasterRowDomAction = UnitUpdateMasterRowDomAction;
        var UnitUpdateMasterRowDomReact = (function (_super) {
            __extends(UnitUpdateMasterRowDomReact, _super);
            function UnitUpdateMasterRowDomReact() {
                _super.apply(this, arguments);
                this.state = new UnitUpdateMasterRowDomStates();
            }
            UnitUpdateMasterRowDomReact.prototype.pSender = function () {
                var _this = this;
                return (React.createElement("div", {className: "panel"}, React.createElement("div", {className: "panel-heading"}, React.createElement("h4", {className: "panel-title"}, React.createElement("a", {onClick: function () { _this.fun_titleMasterClick(); }}, "单位信息", React.createElement("i", {className: "fa fa-angle-" + (this.props.Vm.IsMasterHide ? "up" : "down")})))), React.createElement("div", {className: "panel-collapse collapse in"}, React.createElement("div", {className: "content active " + (this.props.Vm.IsMasterHide ? "hide" : "")}, React.createElement("div", {className: "Hm-form clearfix"}, React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required"}, "单位编码：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["Code"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required"}, "单位名称：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["Name"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required"}, "单位联系人：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["ContactPerson"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required"}, "联系电话：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["Phone"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required"}, "传真：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["Fax"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required"}, "邮箱：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["Email"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required"}, "单位类型：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TypeCombo.intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required"}, "单位地址：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["Address"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "单位简介：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("textarea", {placeholder: "..", value: this.props.Vm.RowData.Description, onChange: function (e) { _this.fun_OnChange(e, "Description"); }}))))))));
            };
            UnitUpdateMasterRowDomReact.prototype.fun_OnChange = function (e, fName) {
                var _val = e.target["value"];
                this.props.Vm.RowData[fName] = _val;
                this.forceUpdate();
            };
            UnitUpdateMasterRowDomReact.prototype.fun_titleMasterClick = function () {
                this.props.Vm.IsMasterHide = !this.props.Vm.IsMasterHide;
                this.forceUpdate();
            };
            UnitUpdateMasterRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return UnitUpdateMasterRowDomReact;
        }(domCore.DomReact));
        UnitUpdateMasterRowDom.UnitUpdateMasterRowDomReact = UnitUpdateMasterRowDomReact;
        var UnitUpdateMasterRowDomVm = (function (_super) {
            __extends(UnitUpdateMasterRowDomVm, _super);
            function UnitUpdateMasterRowDomVm(config) {
                _super.call(this);
                this.ReactType = UnitUpdateMasterRowDomReact;
                this.RowData = {};
                this.TextVmObjList = {};
                this.fIsChangeRow = false;
                if (config) {
                    this.RowData = config.RowData;
                    this.DescriptionOgi = this.RowData.Description;
                    this.TypeOrgin = this.RowData.Type;
                    this.TypeCombo = new comboFile.ui.ComboVm();
                    var List = constantData.Data.UnitTypeData;
                    var itemList = [];
                    for (var index = 0; index < List.length; index++) {
                        itemList.push(List[index]);
                    }
                    this.TypeCombo.ItemList = itemList;
                    this.TypeCombo.dataValue(this.TypeOrgin.toString());
                    this.initTextVm("Code", "notNull");
                    this.initTextVm("Name", "notNull");
                    this.initTextVm("Phone", "MobilePhoneLegal");
                    this.initTextVm("ContactPerson", "notNull");
                    this.initTextVm("Fax", "FaxLegalNull");
                    this.initTextVm("Email", "EmailLegalNull");
                    this.initTextVm("Address");
                }
            }
            UnitUpdateMasterRowDomVm.prototype.initTextVm = function (colName, legal) {
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
            UnitUpdateMasterRowDomVm.prototype.toChange = function () {
                this.IsChange = true;
                for (var n in this.TextVmObjList) {
                    this.TextVmObjList[n].IsChange = true;
                }
            };
            UnitUpdateMasterRowDomVm.prototype.legal = function () {
                var l1 = this.TextVmObjList["Name"].legal();
                var l2 = this.TextVmObjList["Code"].legal();
                var l3 = this.TextVmObjList["Phone"].legal();
                var l4 = this.TextVmObjList["ContactPerson"].legal();
                var l5 = this.TextVmObjList["Fax"].legal();
                var l6 = this.TextVmObjList["Email"].legal();
                var _res = l1 && l2 && l3 && l4 && l5 && l6;
                return _res;
            };
            UnitUpdateMasterRowDomVm.prototype.getData = function () {
                var _this = this;
                var _obj = {};
                _obj.Type = this.RowData.Type;
                this.TextVmObjList["Code"].getChangeValFun(function (isChange, val) {
                    if (isChange) {
                        _this.fIsChangeRow = true;
                        _obj.Code = val;
                    }
                });
                this.TextVmObjList["Name"].getChangeValFun(function (isChange, val) {
                    if (isChange) {
                        _this.fIsChangeRow = true;
                        _obj.Name = val;
                    }
                });
                this.TextVmObjList["ContactPerson"].getChangeValFun(function (isChange, val) {
                    if (isChange) {
                        _this.fIsChangeRow = true;
                        _obj.ContactPerson = val;
                    }
                });
                this.TextVmObjList["Phone"].getChangeValFun(function (isChange, val) {
                    if (isChange) {
                        _this.fIsChangeRow = true;
                        _obj.Phone = val;
                    }
                });
                this.TextVmObjList["Fax"].getChangeValFun(function (isChange, val) {
                    if (isChange) {
                        _this.fIsChangeRow = true;
                        _obj.Fax = val;
                    }
                });
                this.TextVmObjList["Address"].getChangeValFun(function (isChange, val) {
                    if (isChange) {
                        _this.fIsChangeRow = true;
                        _obj.Address = val;
                    }
                });
                this.TextVmObjList["Email"].getChangeValFun(function (isChange, val) {
                    if (isChange) {
                        _this.fIsChangeRow = true;
                        _obj.Email = val;
                    }
                });
                this.TypeCombo.getChangeValFun(function (isChange, val) {
                    if (isChange) {
                        _this.fIsChangeRow = true;
                        _obj.Type = Number(val);
                    }
                });
                _obj.Description = this.DescriptionOgi;
                if (this.RowData.Description != this.DescriptionOgi) {
                    this.fIsChangeRow = true;
                    _obj.Description = this.RowData.Description;
                }
                if (this.fIsChangeRow) {
                    _obj.FID = this.RowData.FID;
                }
                this.fIsChangeRow = false;
                return _obj;
            };
            return UnitUpdateMasterRowDomVm;
        }(domCore.DomVm));
        UnitUpdateMasterRowDom.UnitUpdateMasterRowDomVm = UnitUpdateMasterRowDomVm;
        var UnitUpdateMasterRowDomStates = (function (_super) {
            __extends(UnitUpdateMasterRowDomStates, _super);
            function UnitUpdateMasterRowDomStates() {
                _super.apply(this, arguments);
            }
            return UnitUpdateMasterRowDomStates;
        }(domCore.DomStates));
        UnitUpdateMasterRowDom.UnitUpdateMasterRowDomStates = UnitUpdateMasterRowDomStates;
        var UnitUpdateMasterRowDomProps = (function (_super) {
            __extends(UnitUpdateMasterRowDomProps, _super);
            function UnitUpdateMasterRowDomProps() {
                _super.apply(this, arguments);
            }
            return UnitUpdateMasterRowDomProps;
        }(domCore.DomProps));
        UnitUpdateMasterRowDom.UnitUpdateMasterRowDomProps = UnitUpdateMasterRowDomProps;
    })(UnitUpdateMasterRowDom = exports.UnitUpdateMasterRowDom || (exports.UnitUpdateMasterRowDom = {}));
});
