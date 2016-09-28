var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react"], function (require, exports, domFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var Menu;
    (function (Menu) {
        var MenuRoleButtonReact = (function (_super) {
            __extends(MenuRoleButtonReact, _super);
            function MenuRoleButtonReact() {
                _super.apply(this, arguments);
            }
            MenuRoleButtonReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "Hm-header-btn btn-group-sm clearfix"}, this.props.Vm.ischage ?
                    React.createElement("a", {className: "btn btn-sm btn-primary pull-right", onClick: function () { _this.props.Vm.submit(); }}, "保存1") : React.createElement("input", {type: "button", value: "保存4", className: "acs-input-button pull-right", disabled: "disabled"}), React.createElement("a", {className: "btn btn-sm btn-primary pull-right"}, "设置表头"));
            };
            MenuRoleButtonReact.prototype.pInstall = function () {
                var _this = this;
                this.props.Vm.getEmit("React").addListener("forceUpdate_MenuRoleButton", function (callback) {
                    _this.forceUpdate(callback);
                });
                _super.prototype.pInstall.call(this);
            };
            return MenuRoleButtonReact;
        }(domCore.DomReact));
        Menu.MenuRoleButtonReact = MenuRoleButtonReact;
    })(Menu = exports.Menu || (exports.Menu = {}));
});
