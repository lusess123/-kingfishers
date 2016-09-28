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
        var MenuOrgTrailReact = (function (_super) {
            __extends(MenuOrgTrailReact, _super);
            function MenuOrgTrailReact() {
                _super.apply(this, arguments);
            }
            MenuOrgTrailReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "Hm-header-btn btn-group-sm clearfix"}, !this.props.Vm.ChageFlag ?
                    React.createElement("input", {type: "button", value: "保存3", className: "btn btn-primary  pull-right", disabled: "disabled"}) :
                    React.createElement("a", {className: "btn btn-sm btn-primary pull-right", onClick: function () { _this.props.Vm.fun_Save(); }}, "保存2"));
            };
            return MenuOrgTrailReact;
        }(domCore.DomReact));
        Menu.MenuOrgTrailReact = MenuOrgTrailReact;
    })(Menu = exports.Menu || (exports.Menu = {}));
});
