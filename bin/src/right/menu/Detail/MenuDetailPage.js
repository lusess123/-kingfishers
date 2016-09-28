var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../01core/Ioc", "./../../../01core/Url", "./../../../04page/BaseWebPage", "./RowDom"], function (require, exports, React, iocFile, urlFile, basewedPageFile, rowDomFile) {
    "use strict";
    var MenuDetailPage;
    (function (MenuDetailPage) {
        var MenuDetailPageAction = (function (_super) {
            __extends(MenuDetailPageAction, _super);
            function MenuDetailPageAction() {
                _super.apply(this, arguments);
            }
            return MenuDetailPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        MenuDetailPage.MenuDetailPageAction = MenuDetailPageAction;
        var MenuDetailPageReact = (function (_super) {
            __extends(MenuDetailPageReact, _super);
            function MenuDetailPageReact() {
                _super.apply(this, arguments);
                this.state = new MenuDetailPageStates();
            }
            MenuDetailPageReact.prototype.pSender = function () {
                return React.createElement("div", {className: "Hm-modals"}, React.createElement("div", null, this.props.Vm.RowList.map(function (_row) {
                    return _row.intoDom();
                })));
            };
            return MenuDetailPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        MenuDetailPage.MenuDetailPageReact = MenuDetailPageReact;
        var MenuDetailPageVm = (function (_super) {
            __extends(MenuDetailPageVm, _super);
            function MenuDetailPageVm() {
                _super.apply(this, arguments);
                this.ReactType = MenuDetailPageReact;
                this.RowList = [];
                this.Title = "菜单详情";
            }
            MenuDetailPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                var _keys = this.Param1;
                urlFile.Core.AkPost("/RightCloud/Menu/getMenuDetail", { fids: _keys }, function (data) {
                    var _data = data.Data;
                    if (_data) {
                        _this.RowList = [];
                        _data.forEach(function (r, index) {
                            _this.Title = _this.Title + "-" + r.MenuName;
                            var _row = new rowDomFile.Row.RowVm();
                            _row.MasterDomObj.Data = r;
                            _row.Index = index;
                            index == 0 ? _row.IsItemFormHide = false : _row.IsItemFormHide = true;
                            if (r.MenuButtonList) {
                                _row.MenuButtonList = r.MenuButtonList;
                            }
                            _this.RowList.push(_row);
                        });
                        callback();
                    }
                });
            };
            return MenuDetailPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        MenuDetailPage.MenuDetailPageVm = MenuDetailPageVm;
        var MenuDetailPageStates = (function (_super) {
            __extends(MenuDetailPageStates, _super);
            function MenuDetailPageStates() {
                _super.apply(this, arguments);
            }
            return MenuDetailPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        MenuDetailPage.MenuDetailPageStates = MenuDetailPageStates;
        var MenuDetailPageProps = (function (_super) {
            __extends(MenuDetailPageProps, _super);
            function MenuDetailPageProps() {
                _super.apply(this, arguments);
            }
            return MenuDetailPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        MenuDetailPage.MenuDetailPageProps = MenuDetailPageProps;
        iocFile.Core.Ioc.Current().RegisterType("menudetail", basewedPageFile.Web.BaseWebPageVm, MenuDetailPageVm);
    })(MenuDetailPage = exports.MenuDetailPage || (exports.MenuDetailPage = {}));
});
