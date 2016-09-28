var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../01core/Ioc", "./../../../01core/Util", "./../../../01core/Url", "./../../../04page/BaseWebPage", "./MenuNewRow"], function (require, exports, React, iocFile, utilFile, urlFile, basewedPageFile, menuNewRowFile) {
    "use strict";
    var Right;
    (function (Right) {
        var MenuNewPageAction = (function (_super) {
            __extends(MenuNewPageAction, _super);
            function MenuNewPageAction() {
                _super.apply(this, arguments);
            }
            return MenuNewPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        Right.MenuNewPageAction = MenuNewPageAction;
        var MenuNewPageReact = (function (_super) {
            __extends(MenuNewPageReact, _super);
            function MenuNewPageReact() {
                _super.apply(this, arguments);
                this.state = new MenuNewPageStates();
            }
            MenuNewPageReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "Hm-modals"}, React.createElement("div", null, this.props.Vm.MenuRowList.map(function (l) {
                    return l.intoDom();
                })), React.createElement("div", {className: "text-center"}, React.createElement("span", {className: "btn btn-sm btn-primary", onClick: function () { _this.fun_submitBtn(); }}, "提交")));
            };
            MenuNewPageReact.prototype.fun_submitBtn = function () {
                this.props.Vm.submit();
            };
            return MenuNewPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        Right.MenuNewPageReact = MenuNewPageReact;
        var MenuNewPageVm = (function (_super) {
            __extends(MenuNewPageVm, _super);
            function MenuNewPageVm() {
                _super.call(this);
                this.ReactType = MenuNewPageReact;
                this.MenuRowList = [];
                this.Title = "菜单新增";
                //this.MenuRowObj = new menuRowFile.MenuRow.MenuRowVm();
                //this.MenuRowObj.MenuDetaiObj = new menuDetailFile.MenuDetail.MenuDetailVm();
                this.MenuRowList.push(new menuNewRowFile.MenuNewRow.MenuNewRowVm());
                //this.MenuRowOList.push(new menuRowFile.MenuRow.MenuRowVm());
            }
            MenuNewPageVm.prototype.submit = function () {
                var postData = [];
                var menuInsertRow = this.MenuRowList[0].MenuMasterObj;
                var menuData = menuInsertRow.MenuData;
                menuData.ParentId = menuInsertRow.ParentSelector.vmDataValueGet();
                menuData.MenuKindId = menuInsertRow.MenuTypeCombo.vmDataValueGet();
                menuData.MenuButtonList = [];
                menuInsertRow.MenuButtonRowList.forEach(function (btnRow) {
                    menuData.MenuButtonList.push(btnRow.ButtonData);
                });
                postData.push(menuData);
                var menus = JSON.stringify(postData);
                // alert(menus);
                var _isSuccess = menuInsertRow.legal();
                if (_isSuccess) {
                    urlFile.Core.AkPost("/RightCloud/Menu/newMenu", {
                        menus: menus
                    }, function (a) {
                        if (a.Content == "ok") {
                            var _list = a.Data;
                            var _strs = _list.join(",");
                        }
                        else {
                            utilFile.Core.Util.Noty("数据新增失败");
                        }
                    });
                }
            };
            MenuNewPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                var _keys = this.Param1;
                urlFile.Core.AkPost("/RightCloud/Menu/getParentMenuDetail", { fids: _keys }, function (data) {
                    var _data = data.Data;
                    var _row = new menuNewRowFile.MenuNewRow.MenuNewRowVm();
                    _this.MenuRowList.push(_row);
                    _row.MenuMasterObj.initData(_data);
                    //_row.initData(_data);
                });
                callback();
            };
            return MenuNewPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        Right.MenuNewPageVm = MenuNewPageVm;
        var MenuNewPageStates = (function (_super) {
            __extends(MenuNewPageStates, _super);
            function MenuNewPageStates() {
                _super.apply(this, arguments);
            }
            return MenuNewPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        Right.MenuNewPageStates = MenuNewPageStates;
        var MenuNewPageProps = (function (_super) {
            __extends(MenuNewPageProps, _super);
            function MenuNewPageProps() {
                _super.apply(this, arguments);
            }
            return MenuNewPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        Right.MenuNewPageProps = MenuNewPageProps;
        iocFile.Core.Ioc.Current().RegisterType("MENUNEW", basewedPageFile.Web.BaseWebPageVm, MenuNewPageVm);
    })(Right = exports.Right || (exports.Right = {}));
});
