var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react", "./../../../02col/03selector/TreeSelector", "./../../../02col/01single/Text"], function (require, exports, domFile, React, treeSelectorFile, textFile) {
    "use strict";
    var domCore = domFile.Core;
    var RoleInsertRow;
    (function (RoleInsertRow) {
        var RoleInsertRowAction = (function (_super) {
            __extends(RoleInsertRowAction, _super);
            function RoleInsertRowAction() {
                _super.apply(this, arguments);
            }
            return RoleInsertRowAction;
        }(domCore.DomAction));
        RoleInsertRow.RoleInsertRowAction = RoleInsertRowAction;
        var RoleInsertRowReact = (function (_super) {
            __extends(RoleInsertRowReact, _super);
            function RoleInsertRowReact() {
                _super.apply(this, arguments);
                this.state = new RoleInsertRowStates();
            }
            RoleInsertRowReact.prototype.fun_OnChange = function (e, fName) {
                var _val = e.target["value"];
                this.props.Vm.RowData[fName] = _val;
                this.forceUpdate();
            };
            RoleInsertRowReact.prototype.fun_titleMasterClick = function () {
                this.props.Vm.IsMasterHide = !this.props.Vm.IsMasterHide;
                this.forceUpdate();
            };
            RoleInsertRowReact.prototype.inputRoleName = function () {
                var _this = this;
                var _vm = this.getInputVm(this.props.Vm.RowData.RoleName, "TitleLegal");
                this.props.Vm.RoleNameTextVm = _vm;
                _vm.onChangeHandle(function (str) {
                    _this.props.Vm.RowData.RoleName = str;
                    return true;
                });
                return _vm.intoDom();
            };
            RoleInsertRowReact.prototype.inputRoleSign = function () {
                var _this = this;
                var _vm = this.getInputVm(this.props.Vm.RowData.RoleSign, "TitleLegal");
                this.props.Vm.RoleSignTextVm = _vm;
                _vm.onChangeHandle(function (str) {
                    _this.props.Vm.RowData.RoleSign = str;
                    return true;
                });
                return _vm.intoDom();
            };
            RoleInsertRowReact.prototype.getInputVm = function (val, legalKind, fun) {
                var _bean = new textFile.ui.TextVm();
                _bean.dataValueSet(val);
                _bean.LegalObj.Kind = legalKind;
                return _bean;
            };
            RoleInsertRowReact.prototype.pSender = function () {
                var _this = this;
                return (React.createElement("div", {className: "1"}, React.createElement("div", {className: "panel"}, React.createElement("div", {className: "panel-heading"}, React.createElement("h4", {className: "panel-title"}, React.createElement("a", {onClick: function () { _this.fun_titleMasterClick(); }}, "角色", React.createElement("i", {className: "fa fa-angle-" + (this.props.Vm.IsMasterHide ? "up" : "down")})))), React.createElement("div", {className: "panel-collapse" + (this.props.Vm.IsMasterHide ? " hide" : "")}, React.createElement("div", {className: "content active "}, React.createElement("div", {className: "Hm-form clearfix"}, React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "角色标识：")), React.createElement("div", {className: " Hu-input"}, this.inputRoleSign())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "角色名称：")), React.createElement("div", {className: "Hu-input"}, this.inputRoleName())), React.createElement("div", {className: "col-lg-12 col-sm-12 col-xs-12"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "组织机构：")), React.createElement("div", {className: "Hu-input"}, this.props.Vm.OrgSelector.intoDom())), React.createElement("div", {className: "col-lg-12 col-sm-12 col-xs-12"}, React.createElement("div", {className: " Hu-label"}, React.createElement("label", null, "描述：")), React.createElement("div", {className: "Hu-input"}, React.createElement("textarea", {placeholder: "..", value: this.props.Vm.RowData.Description, onChange: function (e) { _this.fun_OnChange(e, "Description"); }})))))))));
            };
            RoleInsertRowReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return RoleInsertRowReact;
        }(domCore.DomReact));
        RoleInsertRow.RoleInsertRowReact = RoleInsertRowReact;
        var RoleInsertRowVm = (function (_super) {
            __extends(RoleInsertRowVm, _super);
            // public IsDetailHide: boolean;
            function RoleInsertRowVm(config) {
                _super.call(this);
                this.ReactType = RoleInsertRowReact;
                this.RowData = { RoleID: "", RoleSign: "", RoleName: "", FControlUnitName: "11", Description: "", FControlUnitID: "11" };
                this.OrgSelector = new treeSelectorFile.ui.TreeSingleSelectorVm();
                this.OrgSelector.RegName = "GroupCodeTable";
                var Name = "1";
                var ID = "";
                if (config) {
                    ID = config.GroupData.GroupID;
                    Name = config.GroupData.GroupName;
                    this.OrgSelector.dataValueSet(ID);
                    this.OrgSelector.Text = Name;
                }
            }
            RoleInsertRowVm.prototype.init = function () {
                this.OrgSelector.dataValueSet(this.RowData.FControlUnitID);
                this.OrgSelector.Text = this.RowData.FControlUnitName;
            };
            RoleInsertRowVm.prototype.legal = function () {
                var nameLegal = this.RoleNameTextVm.legal();
                var signLegal = this.RoleSignTextVm.legal();
                var mess = "";
                var name = this.RoleNameTextVm.TempDataValue;
                var sign = this.RoleSignTextVm.TempDataValue;
                var description = this.RowData.Description;
                var mess = "";
                if (sign.length > 50 && sign != undefined) {
                    mess = "角色标识长度不能大于50\n\r";
                }
                if (name.length > 50 && name != undefined) {
                    mess += "角色名称长度不能大于50\n\r";
                }
                if (description != undefined && description.length > 200) {
                    mess += "描述长度不能大于200\n\r";
                }
                if (mess != "") {
                    alert(mess);
                    return false;
                }
                return nameLegal && signLegal;
            };
            return RoleInsertRowVm;
        }(domCore.DomVm));
        RoleInsertRow.RoleInsertRowVm = RoleInsertRowVm;
        var RoleInsertRowStates = (function (_super) {
            __extends(RoleInsertRowStates, _super);
            function RoleInsertRowStates() {
                _super.apply(this, arguments);
            }
            return RoleInsertRowStates;
        }(domCore.DomStates));
        RoleInsertRow.RoleInsertRowStates = RoleInsertRowStates;
        var RoleInsertRowProps = (function (_super) {
            __extends(RoleInsertRowProps, _super);
            function RoleInsertRowProps() {
                _super.apply(this, arguments);
            }
            return RoleInsertRowProps;
        }(domCore.DomProps));
        RoleInsertRow.RoleInsertRowProps = RoleInsertRowProps;
    })(RoleInsertRow = exports.RoleInsertRow || (exports.RoleInsertRow = {}));
});
