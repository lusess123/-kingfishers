var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../Common/Data", "./../../../../02col/01single/Text", "./../../../../02col/02Mulite/Combo"], function (require, exports, React, domFile, constantData, textFile, comboFile) {
    "use strict";
    var domCore = domFile.Core;
    var UnitInsertMasterRowDom;
    (function (UnitInsertMasterRowDom) {
        var UnitInsertMasterRowDomAction = (function (_super) {
            __extends(UnitInsertMasterRowDomAction, _super);
            function UnitInsertMasterRowDomAction() {
                _super.apply(this, arguments);
            }
            return UnitInsertMasterRowDomAction;
        }(domCore.DomAction));
        UnitInsertMasterRowDom.UnitInsertMasterRowDomAction = UnitInsertMasterRowDomAction;
        var UnitInsertMasterRowDomReact = (function (_super) {
            __extends(UnitInsertMasterRowDomReact, _super);
            function UnitInsertMasterRowDomReact() {
                _super.apply(this, arguments);
                this.state = new UnitInsertMasterRowDomStates();
            }
            UnitInsertMasterRowDomReact.prototype.pSender = function () {
                var _this = this;
                return (React.createElement("div", {className: "panel"}, React.createElement("div", {className: "panel-heading"}, React.createElement("h4", {className: "panel-title"}, React.createElement("a", {onClick: function () { _this.fun_titleMasterClick(); }}, "单位信息", React.createElement("i", {className: "fa fa-angle-" + (this.props.Vm.IsMasterHide ? "up" : "down")})))), React.createElement("div", {className: "panel-collapse collapse in"}, React.createElement("div", {className: "content active " + (this.props.Vm.IsMasterHide ? "hide" : "")}, React.createElement("div", {className: "Hm-form clearfix"}, React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required"}, "单位编码：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["Code"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required"}, "单位名称：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["Name"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required"}, "单位联系人：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["ContactPerson"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required"}, "联系电话：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["Phone"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required"}, "传真：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["Fax"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required"}, "邮箱：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["Email"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required"}, "单位类型：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TypeCombo.intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required"}, "单位地址：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["Address"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "单位简介：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("textarea", {placeholder: "..", value: this.props.Vm.RowData.Description, onChange: function (e) { _this.fun_OnChange(e, "Description"); }}))))))));
            };
            UnitInsertMasterRowDomReact.prototype.fun_OnChange = function (e, fName) {
                var _val = e.target["value"];
                this.props.Vm.RowData[fName] = _val;
                this.forceUpdate();
            };
            UnitInsertMasterRowDomReact.prototype.fun_titleMasterClick = function () {
                this.props.Vm.IsMasterHide = !this.props.Vm.IsMasterHide;
                this.forceUpdate();
            };
            UnitInsertMasterRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return UnitInsertMasterRowDomReact;
        }(domCore.DomReact));
        UnitInsertMasterRowDom.UnitInsertMasterRowDomReact = UnitInsertMasterRowDomReact;
        var UnitInsertMasterRowDomVm = (function (_super) {
            __extends(UnitInsertMasterRowDomVm, _super);
            function UnitInsertMasterRowDomVm(config) {
                _super.call(this);
                this.ReactType = UnitInsertMasterRowDomReact;
                this.RowData = {};
                this.TextVmObjList = {};
                this.TypeCombo = new comboFile.ui.ComboVm();
                var List = constantData.Data.UnitTypeData;
                var itemList = [];
                for (var index = 0; index < List.length; index++) {
                    itemList.push(List[index]);
                }
                this.TypeCombo.ItemList = itemList;
                this.RowData.Type = 0;
                this.initTextVm("Code", "notNull");
                this.initTextVm("Name", "notNull");
                this.initTextVm("Phone", "MobilePhoneLegal");
                this.initTextVm("ContactPerson", "notNull");
                this.initTextVm("Fax", "FaxLegalNull");
                this.initTextVm("Email", "EmailLegal");
                this.initTextVm("Address");
            }
            UnitInsertMasterRowDomVm.prototype.legal = function () {
                var l1 = this.TextVmObjList["Name"].legal();
                var l2 = this.TextVmObjList["Code"].legal();
                var l3 = this.TextVmObjList["Phone"].legal();
                var l4 = this.TextVmObjList["ContactPerson"].legal();
                var l5 = this.TextVmObjList["Fax"].legal();
                var l6 = this.TextVmObjList["Email"].legal();
                var _res = l1 && l2 && l3 && l4 && l5 && l6;
                return _res;
            };
            UnitInsertMasterRowDomVm.prototype.initTextVm = function (colName, legal) {
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
            UnitInsertMasterRowDomVm.prototype.toChange = function () {
                this.IsChange = true;
                for (var n in this.TextVmObjList) {
                    this.TextVmObjList[n].IsChange = true;
                }
            };
            return UnitInsertMasterRowDomVm;
        }(domCore.DomVm));
        UnitInsertMasterRowDom.UnitInsertMasterRowDomVm = UnitInsertMasterRowDomVm;
        var UnitInsertMasterRowDomStates = (function (_super) {
            __extends(UnitInsertMasterRowDomStates, _super);
            function UnitInsertMasterRowDomStates() {
                _super.apply(this, arguments);
            }
            return UnitInsertMasterRowDomStates;
        }(domCore.DomStates));
        UnitInsertMasterRowDom.UnitInsertMasterRowDomStates = UnitInsertMasterRowDomStates;
        var UnitInsertMasterRowDomProps = (function (_super) {
            __extends(UnitInsertMasterRowDomProps, _super);
            function UnitInsertMasterRowDomProps() {
                _super.apply(this, arguments);
            }
            return UnitInsertMasterRowDomProps;
        }(domCore.DomProps));
        UnitInsertMasterRowDom.UnitInsertMasterRowDomProps = UnitInsertMasterRowDomProps;
    })(UnitInsertMasterRowDom = exports.UnitInsertMasterRowDom || (exports.UnitInsertMasterRowDom = {}));
});
