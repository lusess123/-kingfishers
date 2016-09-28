var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react", "./../../../02col/03selector/TreeSelector", "./../../../02col/01single/Text"], function (require, exports, domFile, React, treeSelectorFile, textFile) {
    "use strict";
    var domCore = domFile.Core;
    var RoleUpdateRow;
    (function (RoleUpdateRow) {
        var RoleUpdateRowAction = (function (_super) {
            __extends(RoleUpdateRowAction, _super);
            function RoleUpdateRowAction() {
                _super.apply(this, arguments);
            }
            return RoleUpdateRowAction;
        }(domCore.DomAction));
        RoleUpdateRow.RoleUpdateRowAction = RoleUpdateRowAction;
        var RoleUpdateRowReact = (function (_super) {
            __extends(RoleUpdateRowReact, _super);
            function RoleUpdateRowReact() {
                _super.apply(this, arguments);
                this.state = new RoleUpdateRowStates();
            }
            RoleUpdateRowReact.prototype.fun_titleMasterClick = function () {
                this.props.Vm.IsMasterHide = !this.props.Vm.IsMasterHide;
                this.forceUpdate();
            };
            RoleUpdateRowReact.prototype.inputRoleName = function () {
                var _this = this;
                var _vm = this.getInputVm(this.props.Vm.RowData.RoleName, "TitleLegal");
                this.props.Vm.RoleNameTextVm = _vm;
                _vm.onChangeHandle(function (str) {
                    _this.props.Vm.RowData.RoleName = str;
                    _this.forceUpdate();
                    return true;
                });
                return _vm.intoDom();
            };
            RoleUpdateRowReact.prototype.inputRoleSign = function () {
                var _this = this;
                var _vm = this.getInputVm(this.props.Vm.RowData.RoleSign, "TitleLegal");
                this.props.Vm.RoleSignTextVm = _vm;
                _vm.onChangeHandle(function (str) {
                    _this.props.Vm.RowData.RoleSign = str;
                    _this.forceUpdate();
                    return true;
                });
                return _vm.intoDom();
            };
            RoleUpdateRowReact.prototype.inputDescription = function () {
                var _this = this;
                var _vm = this.getInputVm(this.props.Vm.RowData.Description, "");
                this.props.Vm.DescriptionTextVm = _vm;
                _vm.onChangeHandle(function (str) {
                    _this.props.Vm.RowData.Description = str;
                    _this.forceUpdate();
                    return true;
                });
                return _vm.intoDom();
            };
            RoleUpdateRowReact.prototype.getInputVm = function (val, legalKind, fun) {
                var _bean = new textFile.ui.TextVm();
                _bean.dataValueSet(val);
                _bean.LegalObj.Kind = legalKind;
                return _bean;
            };
            RoleUpdateRowReact.prototype.fun_itemTitleClick = function () {
                this.props.Vm.IsItemFormHide = !this.props.Vm.IsItemFormHide;
                this.forceUpdate();
            };
            RoleUpdateRowReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", null, React.createElement("div", {className: "Hu-row-title Hu-pointer", onClick: function () { _this.fun_itemTitleClick(); }}, this.props.Vm.Index + 1, React.createElement("i", {className: "fa fa-angle-double-" + (this.props.Vm.IsItemFormHide ? "right" : "down")})), React.createElement("div", {className: this.props.Vm.IsItemFormHide ? "hide" : ""}, this.createRow()));
            };
            RoleUpdateRowReact.prototype.createRow = function () {
                var _this = this;
                return (React.createElement("div", {className: "panel"}, React.createElement("div", {className: "panel-heading"}, React.createElement("h4", {className: "panel-title"}, React.createElement("a", {onClick: function () { _this.fun_titleMasterClick(); }}, "角色", React.createElement("i", {className: "fa fa-angle-" + (this.props.Vm.IsMasterHide ? "up" : "down")})))), React.createElement("div", {className: "panel-collapse" + (this.props.Vm.IsMasterHide ? " hide" : "")}, React.createElement("div", {className: "content active "}, React.createElement("div", {className: "Hm-form clearfix"}, React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", {className: "required"}, "角色标识：")), React.createElement("div", {className: "Hu-input"}, this.inputRoleSign())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", {className: "required"}, "角色名称：")), React.createElement("div", {className: "Hu-input"}, this.inputRoleName())), React.createElement("div", {className: "col-lg-12 col-sm-12 col-xs-12"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "组织机构：")), React.createElement("div", {className: "Hu-input"}, this.props.Vm.OrgSelector.intoDom())), React.createElement("div", {className: "col-lg-12 col-sm-12 col-xs-12"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "描述：")), React.createElement("div", {className: "Hu-input"}, this.inputDescription())))))));
            };
            RoleUpdateRowReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return RoleUpdateRowReact;
        }(domCore.DomReact));
        RoleUpdateRow.RoleUpdateRowReact = RoleUpdateRowReact;
        var RoleUpdateRowVm = (function (_super) {
            __extends(RoleUpdateRowVm, _super);
            function RoleUpdateRowVm() {
                _super.call(this);
                this.ReactType = RoleUpdateRowReact;
                this.RowData = { RoleID: "", RoleSign: "", RoleName: "", FControlUnitName: "", Description: "", FControlUnitID: "" };
                this.OrgSelector = new treeSelectorFile.ui.TreeSingleSelectorVm();
                this.OrgSelector.RegName = "GroupCodeTable";
            }
            RoleUpdateRowVm.prototype.init = function () {
                this.OrgSelector.dataValueSet(this.RowData.FControlUnitID);
                this.OrgSelector.Text = this.RowData.FControlUnitName;
            };
            RoleUpdateRowVm.prototype.legal = function () {
                var nameLegal = this.RoleNameTextVm.legal();
                var signLegal = this.RoleSignTextVm.legal();
                var Name = this.RoleNameTextVm.TempDataValue;
                var Sign = this.RoleSignTextVm.TempDataValue;
                var Desc = this.DescriptionTextVm.TempDataValue;
                var mess = "";
                if (Sign.length > 50 && Sign != undefined) {
                    mess = "角色标识长度不能大于50\n\r";
                }
                if (Name.length > 50 && Name != undefined) {
                    mess += "角色名称长度不能大于50\n\r";
                }
                if (Desc != undefined && Desc.length > 200) {
                    mess += "描述长度不能大于200\n\r";
                }
                if (mess != "") {
                    alert(mess);
                    return false;
                }
                this.RowData.RoleName = String(Name);
                this.RowData.RoleSign = String(Sign);
                this.RowData.Description = String(Desc);
                return nameLegal && signLegal;
            };
            return RoleUpdateRowVm;
        }(domCore.DomVm));
        RoleUpdateRow.RoleUpdateRowVm = RoleUpdateRowVm;
        var RoleUpdateRowStates = (function (_super) {
            __extends(RoleUpdateRowStates, _super);
            function RoleUpdateRowStates() {
                _super.apply(this, arguments);
            }
            return RoleUpdateRowStates;
        }(domCore.DomStates));
        RoleUpdateRow.RoleUpdateRowStates = RoleUpdateRowStates;
        var RoleUpdateRowProps = (function (_super) {
            __extends(RoleUpdateRowProps, _super);
            function RoleUpdateRowProps() {
                _super.apply(this, arguments);
            }
            return RoleUpdateRowProps;
        }(domCore.DomProps));
        RoleUpdateRow.RoleUpdateRowProps = RoleUpdateRowProps;
    })(RoleUpdateRow = exports.RoleUpdateRow || (exports.RoleUpdateRow = {}));
});
