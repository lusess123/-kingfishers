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
        var MenuOrgHeadReact = (function (_super) {
            __extends(MenuOrgHeadReact, _super);
            function MenuOrgHeadReact() {
                _super.apply(this, arguments);
            }
            MenuOrgHeadReact.prototype.pSender = function () {
                return React.createElement("thead", {className: "thead-default"}, React.createElement("tr", null, React.createElement("th", {className: "acsWidth16"}, " ", React.createElement("span", null, "菜单 / 组织机构 "), " "), this.props.Vm.OrgData.map(function (a) {
                    return React.createElement("th", null, a.OrgName, " ");
                })));
            };
            return MenuOrgHeadReact;
        }(domCore.DomReact));
        Menu.MenuOrgHeadReact = MenuOrgHeadReact;
    })(Menu = exports.Menu || (exports.Menu = {}));
});
