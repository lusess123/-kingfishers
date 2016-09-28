var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/Ioc", "./../../../../04page/BaseWebPage", "./MenuNewRow"], function (require, exports, React, iocFile, basewedPageFile, MenuNewRowFile) {
    "use strict";
    var MenuNewVm = MenuNewRowFile.MenuNewRow.MenuNewRowVm;
    var MenuNewPage;
    (function (MenuNewPage) {
        var MenuNewPageAction = (function (_super) {
            __extends(MenuNewPageAction, _super);
            function MenuNewPageAction() {
                _super.apply(this, arguments);
            }
            return MenuNewPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        MenuNewPage.MenuNewPageAction = MenuNewPageAction;
        var MenuNewPageReact = (function (_super) {
            __extends(MenuNewPageReact, _super);
            function MenuNewPageReact() {
                _super.apply(this, arguments);
                this.state = new MenuNewPageStates();
            }
            MenuNewPageReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "Hm-modals"}, React.createElement("h4", null, "新增"), this.props.Vm.MenuRowObj.intoDom(), React.createElement("div", {className: "text-center"}, React.createElement("a", {className: "btn btn-sm btn-primary", onClick: function () { _this.fun_submitBtn(); }}, "提交")));
            };
            MenuNewPageReact.prototype.fun_submitBtn = function () {
                this.props.Vm.submit();
            };
            return MenuNewPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        MenuNewPage.MenuNewPageReact = MenuNewPageReact;
        var MenuNewPageVm = (function (_super) {
            __extends(MenuNewPageVm, _super);
            function MenuNewPageVm() {
                _super.call(this);
                this.ReactType = MenuNewPageReact;
                this.type = "All";
                this.MenuRowObj = new MenuNewVm();
                this.MenuRowObj = new MenuNewVm();
            }
            MenuNewPageVm.prototype.submit = function () {
                var menuInsert = this.MenuRowObj.menuMasterObj;
                // var isSuccess = menuInsert.legal();
                if (true) {
                    //debugger
                    this.Name = menuInsert.NameData.Name;
                    if (this.type == "All") {
                        this.type = menuInsert.NameData.RowType;
                    }
                    this.SendPageActor({ ToPanelName: "", ToModuleName: "NewRightMainPage" }, { MenuName: this.Name, Type: this.type, RightValue: menuInsert.NameData.RightValue });
                    this.closePage();
                }
            };
            MenuNewPageVm.prototype.loadPage = function (callback) {
                var _keys = this.Param1;
                this.type = _keys;
                var _config = { MenuNew: { MenuNewRow: { rowType: _keys } } };
                this.MenuRowObj = new MenuNewVm(_config.MenuNew);
                if (callback) {
                    callback();
                }
            };
            return MenuNewPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        MenuNewPage.MenuNewPageVm = MenuNewPageVm;
        var MenuNewPageStates = (function (_super) {
            __extends(MenuNewPageStates, _super);
            function MenuNewPageStates() {
                _super.apply(this, arguments);
            }
            return MenuNewPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        MenuNewPage.MenuNewPageStates = MenuNewPageStates;
        var MenuNewPageProps = (function (_super) {
            __extends(MenuNewPageProps, _super);
            function MenuNewPageProps() {
                _super.apply(this, arguments);
            }
            return MenuNewPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        MenuNewPage.MenuNewPageProps = MenuNewPageProps;
        iocFile.Core.Ioc.Current().RegisterType("NWEMENUNEWPAGE", basewedPageFile.Web.BaseWebPageVm, MenuNewPageVm);
    })(MenuNewPage = exports.MenuNewPage || (exports.MenuNewPage = {}));
});
