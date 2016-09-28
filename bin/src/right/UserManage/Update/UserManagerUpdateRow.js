var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react", "./../../../01core/Ioc", "./../../../02col/01single/Text", "./../../../02col/02Mulite/Combo", "./../../../02col/02Mulite/SingleCheckBox", "./../../../02col/03selector/TreeSelector", "./../../../04page/BaseWebPage", "./../../../02col/01single/Hidden"], function (require, exports, domFile, React, iocFile, textFile, comboFile, singcheckFile, selecotrFile, basewedPageFile, HideFile) {
    "use strict";
    var domCore = domFile.Core;
    var UserManagerUpdateRow;
    (function (UserManagerUpdateRow) {
        var UserManagerUpdateRowAction = (function (_super) {
            __extends(UserManagerUpdateRowAction, _super);
            function UserManagerUpdateRowAction() {
                _super.apply(this, arguments);
            }
            return UserManagerUpdateRowAction;
        }(domCore.DomAction));
        UserManagerUpdateRow.UserManagerUpdateRowAction = UserManagerUpdateRowAction;
        var UserManagerUpdateRowReact = (function (_super) {
            __extends(UserManagerUpdateRowReact, _super);
            function UserManagerUpdateRowReact() {
                _super.apply(this, arguments);
                this.state = new UserManagerUpdateRowStates();
            }
            UserManagerUpdateRowReact.prototype.pSender = function () {
                var _this = this;
                return (React.createElement("div", {className: "panel"}, React.createElement("div", {className: "panel-heading"}, React.createElement("h4", {className: "panel-title"}, React.createElement("a", {onClick: function () { _this.fun_titleClick(); }}, "用户管理明细编辑", React.createElement("i", {className: "fa fa-angle-" + (this.props.Vm.IsFormHide ? "right" : "down")})))), React.createElement("div", {className: "panel-collapse" + (this.props.Vm.IsFormHide ? " hide" : "")}, React.createElement("div", {className: "content active "}, React.createElement("div", {className: "Hm-form clearfix"}, React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "姓名：")), React.createElement("div", {className: "Hu-input"}, this.props.Vm.UserNickName.intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: " Hu-label"}, React.createElement("label", null, "登录名：")), React.createElement("div", {className: "Hu-input"}, this.props.Vm.UserUserName.intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: " Hu-label"}, React.createElement("label", null, "所在地区：")), React.createElement("div", {className: " Hu-input"}, this.props.Vm.Area.intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: " Hu-label"}, React.createElement("label", null, "用户类型：")), React.createElement("div", {className: " Hu-input"}, React.createElement("label", null, this.props.Vm.UserKind.intoDom()))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "创建时间：")), React.createElement("div", {className: "Hu-input"}, React.createElement("label", null, this.props.Vm.Data.CreateTime))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "启用账号：")), React.createElement("div", {className: "Hu-input"}, React.createElement("label", null, this.props.Vm.isActive.intoDom()))), React.createElement("div", {className: "col-lg-12 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "创建人：")), React.createElement("div", {className: "Hu-input"}, React.createElement("label", null, this.props.Vm.Data.CreaterName == null ? "(空)" : $(this.props.Vm.Data.CreaterName).text()))), React.createElement("div", {className: "col-lg-12 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "描述：")), React.createElement("div", {className: "Hu-input"}, this.props.Vm.Remark.intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "手机MDIE号：")), React.createElement("div", {className: "Hu-input"}, this.props.Vm.MEID.intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: " Hu-label"}, React.createElement("label", null, "组织结构: ")), React.createElement("div", {className: "Hu-input"}, this.props.Vm.FControlUnitID.intoDom())))))));
                ;
            };
            UserManagerUpdateRowReact.prototype.fun_titleClick = function () {
                this.props.Vm.IsFormHide = !this.props.Vm.IsFormHide;
                this.forceUpdate();
            };
            UserManagerUpdateRowReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return UserManagerUpdateRowReact;
        }(domCore.DomReact));
        UserManagerUpdateRow.UserManagerUpdateRowReact = UserManagerUpdateRowReact;
        var UserManagerUpdateRowVm = (function (_super) {
            __extends(UserManagerUpdateRowVm, _super);
            function UserManagerUpdateRowVm() {
                _super.call(this);
                this.ReactType = UserManagerUpdateRowReact;
                this.UserID = new HideFile.ui.HiddenVm;
                this.UserNickName = new textFile.ui.TextVm;
                this.UserUserName = new textFile.ui.TextVm;
                this.Area = new textFile.ui.TextVm;
                this.UserKind = new comboFile.ui.ComboVm;
                this.isActive = new singcheckFile.ui.SingleCheckBoxVm;
                this.Remark = new textFile.ui.TextVm;
                this.MEID = new textFile.ui.TextVm;
                this.FControlUnitID = new selecotrFile.ui.TreeSingleSelectorVm;
                var itemList = [];
                itemList.push({ Value: 0, Text: "系统用户" });
                itemList.push({ Value: 1, Text: "企业管理员" });
                itemList.push({ Value: 2, Text: "普通用户" });
                itemList.push({ Value: 3, Text: "其他" });
                this.UserKind.ItemList = itemList;
                this.isActive = new singcheckFile.ui.SingleCheckBoxVm;
                this.Remark = new textFile.ui.TextVm;
                this.MEID = new textFile.ui.TextVm;
                this.FControlUnitID = new selecotrFile.ui.TreeSingleSelectorVm;
                this.FControlUnitID.RegName = "GroupCodeTable";
            }
            UserManagerUpdateRowVm.prototype.initData = function () {
                this.UserID.dataValueSet(this.Data.UserID);
                this.UserNickName.dataValueSet(this.Data.NickName);
                this.UserUserName.dataValueSet(this.Data.UserName);
                this.Area.dataValueSet(this.Data.Area);
                this.UserKind.dataValueSet(this.Data.UserKindId);
                this.isActive.dataValueSet(this.Data.IsActive ? "true" : "false");
                this.Remark.dataValueSet(this.Data.Remark);
                this.MEID.dataValueSet(this.Data.MEID);
                this.FControlUnitID.Text = this.Data.FControlUnitName;
                this.FControlUnitID.dataValueSet(this.Data.FControlUnitID);
            };
            return UserManagerUpdateRowVm;
        }(domCore.DomVm));
        UserManagerUpdateRow.UserManagerUpdateRowVm = UserManagerUpdateRowVm;
        var UserManagerUpdateRowStates = (function (_super) {
            __extends(UserManagerUpdateRowStates, _super);
            function UserManagerUpdateRowStates() {
                _super.apply(this, arguments);
            }
            return UserManagerUpdateRowStates;
        }(domCore.DomStates));
        UserManagerUpdateRow.UserManagerUpdateRowStates = UserManagerUpdateRowStates;
        var UserManagerUpdateRowProps = (function (_super) {
            __extends(UserManagerUpdateRowProps, _super);
            function UserManagerUpdateRowProps() {
                _super.apply(this, arguments);
            }
            return UserManagerUpdateRowProps;
        }(domCore.DomProps));
        UserManagerUpdateRow.UserManagerUpdateRowProps = UserManagerUpdateRowProps;
        iocFile.Core.Ioc.Current().RegisterType("UserManageUpdateRow", basewedPageFile.Web.BaseWebPageVm, UserManagerUpdateRowVm);
    })(UserManagerUpdateRow = exports.UserManagerUpdateRow || (exports.UserManagerUpdateRow = {}));
});
