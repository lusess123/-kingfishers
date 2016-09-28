var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../01core/Ioc", "./../../../01core/Util", "./../../../01core/Url", "./../../../04page/BaseWebPage", "./MenuUpdateRow"], function (require, exports, React, iocFile, utilFile, urlFile, basewedPageFile, menuUpdateRowFile) {
    "use strict";
    var MenuUpdatePage;
    (function (MenuUpdatePage) {
        var MenuUpdatePageAction = (function (_super) {
            __extends(MenuUpdatePageAction, _super);
            function MenuUpdatePageAction() {
                _super.apply(this, arguments);
            }
            return MenuUpdatePageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        MenuUpdatePage.MenuUpdatePageAction = MenuUpdatePageAction;
        var MenuUpdatePageReact = (function (_super) {
            __extends(MenuUpdatePageReact, _super);
            function MenuUpdatePageReact() {
                _super.apply(this, arguments);
                this.state = new MenuUpdatePageStates();
            }
            MenuUpdatePageReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "Hm-modals"}, React.createElement("div", {className: "Hc-modals-list"}, this.props.Vm.MenuRowList.map(function (row, i) {
                    row.Index = i;
                    return row.intoDom();
                })), React.createElement("div", {className: "text-center"}, React.createElement("span", {className: "btn btn-sm btn-primary", onClick: function () { _this.fun_submitBtn(); }}, "提交")));
            };
            MenuUpdatePageReact.prototype.fun_submitBtn = function () {
                this.props.Vm.submit();
            };
            return MenuUpdatePageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        MenuUpdatePage.MenuUpdatePageReact = MenuUpdatePageReact;
        var MenuUpdatePageVm = (function (_super) {
            __extends(MenuUpdatePageVm, _super);
            function MenuUpdatePageVm(config) {
                _super.call(this);
                this.ReactType = MenuUpdatePageReact;
                this.MenuRowList = [];
                this.Title = "编辑菜单";
                if (config) {
                    this.init(config);
                }
            }
            MenuUpdatePageVm.prototype.init = function (config) {
                var _this = this;
                config.MenuRowConfigList.forEach(function (r, l) {
                    // this.MenuRowList.push(new );
                    var _row = new menuUpdateRowFile.MenuUpdateRow.MenuUpdateRowVm(r);
                    _row.Index = l;
                    _this.MenuRowList.push(_row);
                });
            };
            MenuUpdatePageVm.prototype.loadPage = function (callback) {
                var _this = this;
                var _keys = this.Param1;
                urlFile.Core.AkPost("/RightCloud/Menu/getMenuDetail", { fids: _keys }, function (data) {
                    var _data = data.Data;
                    if (_data) {
                        _this.MenuRowList = [];
                        var _config = { MenuRowConfigList: [] };
                        _config.MenuRowConfigList = _data.map(function (r, index) {
                            if (!r.MenuButtonList)
                                r.MenuButtonList = [];
                            return ({
                                MenuButtonRowConfigList: (r.MenuButtonList.map(function (bt) {
                                    return {
                                        ButtonData: {
                                            FID: bt.FID,
                                            FName: bt.FName,
                                            FKey: bt.FKey,
                                            FValue: bt.FValue,
                                            OrderId: bt.OrderId,
                                            ParentRightValue: bt.ParentRightValue
                                        }
                                    };
                                })),
                                MenuMasterConfig: {
                                    MenuData: {
                                        FID: r.FID,
                                        MenuName: r.MenuName,
                                        ParentId: r.ParentId,
                                        ParentName: r.ParentName,
                                        MenuKindId: r.MenuKindId,
                                        MenuKindName: r.MenuKindName,
                                        Key: r.Key,
                                        OrderId: r.OrderId,
                                        RightDesc: r.RightDesc
                                    }
                                }
                            });
                        });
                        _this.init(_config);
                        callback();
                    }
                });
            };
            MenuUpdatePageVm.prototype.legal = function () {
                var _isRes = true;
                this.MenuRowList.forEach(function (row) {
                    if (!row.legal()) {
                        _isRes = false;
                    }
                });
                return _isRes;
            };
            MenuUpdatePageVm.prototype.submit = function () {
                if (this.legal()) {
                    var dt = this.getData();
                    if (dt) {
                        var str = JSON.stringify(dt);
                        //  alert(str);
                        urlFile.Core.AkPost("/RightCloud/Menu/updateMenu", { menus: str }, function (a) {
                            if (a.Content == "ok") {
                                var _list = a.Data;
                                if (_list.length > 0) {
                                    var _strs = _list.join(",");
                                    utilFile.Core.Util.Noty("数据编辑成功");
                                    urlFile.Core.AkUrl.Current().openUrl("$menuPage$" + _strs + "$", false, function () {
                                        urlFile.Core.AkUrl.Current().openUrl("$panelmenudetail$" + _strs + "$", true);
                                    });
                                }
                                else {
                                    utilFile.Core.Util.Noty("数据未更新");
                                }
                            }
                            else {
                                utilFile.Core.Util.Noty("数据编辑失败");
                            }
                        });
                    }
                    else {
                        utilFile.Core.Util.Noty("没有可提交的数据");
                    }
                }
            };
            MenuUpdatePageVm.prototype.getData = function () {
                var _ds = [];
                this.MenuRowList.forEach(function (row) {
                    var _o = row.getData();
                    if (!utilFile.Core.Util.IsPure(_o)) {
                        _ds.push(_o);
                    }
                });
                if (_ds.length == 0) {
                    return null;
                }
                //alert(JSON.stringify(_ds));
                return _ds;
            };
            MenuUpdatePageVm.prototype.postUpdateData = function (menus) {
                if (menus.length > 0) {
                    var _str = JSON.stringify(menus);
                    urlFile.Core.AkPost("/RightCloud/Menu/updateMenu", { menus: _str }, function (d) {
                        alert(JSON.stringify(d));
                    });
                }
            };
            return MenuUpdatePageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        MenuUpdatePage.MenuUpdatePageVm = MenuUpdatePageVm;
        var MenuUpdatePageStates = (function (_super) {
            __extends(MenuUpdatePageStates, _super);
            function MenuUpdatePageStates() {
                _super.apply(this, arguments);
            }
            return MenuUpdatePageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        MenuUpdatePage.MenuUpdatePageStates = MenuUpdatePageStates;
        var MenuUpdatePageProps = (function (_super) {
            __extends(MenuUpdatePageProps, _super);
            function MenuUpdatePageProps() {
                _super.apply(this, arguments);
            }
            return MenuUpdatePageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        MenuUpdatePage.MenuUpdatePageProps = MenuUpdatePageProps;
        iocFile.Core.Ioc.Current().RegisterType("MENUUPDATE", basewedPageFile.Web.BaseWebPageVm, MenuUpdatePageVm);
    })(MenuUpdatePage = exports.MenuUpdatePage || (exports.MenuUpdatePage = {}));
});
