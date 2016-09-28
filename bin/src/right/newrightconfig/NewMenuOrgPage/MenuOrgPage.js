var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/Ioc", "./../../../04page/BaseWebPage", "react"], function (require, exports, iocFile, basewedPageFile, React) {
    "use strict";
    var MenuOrgPage;
    (function (MenuOrgPage) {
        var MenuOrgPageAction = (function (_super) {
            __extends(MenuOrgPageAction, _super);
            function MenuOrgPageAction() {
                _super.apply(this, arguments);
            }
            return MenuOrgPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        MenuOrgPage.MenuOrgPageAction = MenuOrgPageAction;
        var MenuOrgPageReact = (function (_super) {
            __extends(MenuOrgPageReact, _super);
            function MenuOrgPageReact() {
                _super.apply(this, arguments);
                this.state = new MenuOrgPageStates();
            }
            MenuOrgPageReact.prototype.pSender = function () {
                return React.createElement("table", {className: "acs-table acs-table-tree"}, "123");
            };
            return MenuOrgPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        MenuOrgPage.MenuOrgPageReact = MenuOrgPageReact;
        var MenuOrgPageVm = (function (_super) {
            __extends(MenuOrgPageVm, _super);
            function MenuOrgPageVm() {
                _super.apply(this, arguments);
                this.ReactType = MenuOrgPageReact;
            }
            return MenuOrgPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        MenuOrgPage.MenuOrgPageVm = MenuOrgPageVm;
        var MenuOrgPageStates = (function (_super) {
            __extends(MenuOrgPageStates, _super);
            function MenuOrgPageStates() {
                _super.apply(this, arguments);
            }
            return MenuOrgPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        MenuOrgPage.MenuOrgPageStates = MenuOrgPageStates;
        var MenuOrgPageProps = (function (_super) {
            __extends(MenuOrgPageProps, _super);
            function MenuOrgPageProps() {
                _super.apply(this, arguments);
            }
            return MenuOrgPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        MenuOrgPage.MenuOrgPageProps = MenuOrgPageProps;
        iocFile.Core.Ioc.Current().RegisterType("MENUUSERROLEPAGE", basewedPageFile.Web.BaseWebPageVm, MenuOrgPageVm);
    })(MenuOrgPage = exports.MenuOrgPage || (exports.MenuOrgPage = {}));
});
