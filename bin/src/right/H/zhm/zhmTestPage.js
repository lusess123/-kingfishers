var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../01core/Ioc", "./../../../01core/Url", "./../../../04page/BaseWebPage", "./../../../05tool/Pagination", "./../../../05tool/Tree", "./UserRole/UserRole"], function (require, exports, React, iocFile, urlFile, basewedPageFile, PaginationFile, toolTreeFile, UserRoleFile) {
    "use strict";
    var UserRoleVm = UserRoleFile.UserRole.UserRoleVm;
    var zhmTestPage;
    (function (zhmTestPage) {
        var zhmTestPageAction = (function (_super) {
            __extends(zhmTestPageAction, _super);
            function zhmTestPageAction() {
                _super.apply(this, arguments);
            }
            return zhmTestPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        zhmTestPage.zhmTestPageAction = zhmTestPageAction;
        var zhmTestPageReact = (function (_super) {
            __extends(zhmTestPageReact, _super);
            function zhmTestPageReact() {
                _super.apply(this, arguments);
                this.state = new zhmTestPageStates();
            }
            zhmTestPageReact.prototype.pSender = function () {
                return React.createElement("div", {className: "acs-table-absolute-org"}, this.props.Vm.UserRoleObj.intoDom(), this.props.Vm.UserRoleObj.table.rUserRoleHeadSender, this.props.Vm.UserRoleObj.table.rUserRoleSender);
            };
            zhmTestPageReact.prototype.fun_TabsClick = function (index) {
                this.props.Vm.TabCurrentIndex = index;
                this.forceUpdate();
            };
            return zhmTestPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        zhmTestPage.zhmTestPageReact = zhmTestPageReact;
        var zhmTestPageVm = (function (_super) {
            __extends(zhmTestPageVm, _super);
            function zhmTestPageVm() {
                _super.call(this);
                this.ReactType = zhmTestPageReact;
                this.TabCurrentIndex = 0;
                var pagerVm = this.PageObj = new PaginationFile.tool.PaginationVm();
                pagerVm.PageNo = 0;
                pagerVm.PageSize = 20;
                pagerVm.TotalCount = 80;
                pagerVm.PageClickEvent = function (pageIndex) {
                    pagerVm.PageNo = pageIndex;
                    pagerVm.IsChange = true;
                    pagerVm.forceUpdate("");
                };
                this.NaviTree = new toolTreeFile.ui.TreeVm();
                this.NaviTree.NodeTplFun = function (node) {
                    return [(React.createElement("span", null, node.Text, React.createElement("span", null, "+"), React.createElement("span", null, "X")))];
                };
            }
            zhmTestPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                urlFile.Core.AkPost("/core/WebService/Method?resolver=JsonMethod", { json: "RightPalform.json" }, function (a) {
                    if (a) {
                        var _config = { UserRole: { MenuUserTable: { RoleData: [], UserData: [] } } };
                        _config.UserRole = a;
                        _this.UserRoleObj = new UserRoleVm(_config.UserRole);
                    }
                    if (callback)
                        callback();
                });
            };
            zhmTestPageVm.prototype.getNaviGroupTreeFId = function () {
                var _str = this.NaviTree.dataValue();
                return _str;
            };
            zhmTestPageVm.prototype.ReceivePageSend = function (config, obj) {
                _super.prototype.ReceivePageSend.call(this, config, obj);
                switch (config.FromModulename) {
                    case "NEWUSERROLEPAGE":
                        if (obj.RoleSign) {
                            var _obj = obj;
                            this.UserRoleObj.table.addRole(_obj);
                            this.UserRoleObj.table.forceUpdate("");
                        }
                    case "NEWUSERPAGE":
                        if (obj.UserSign) {
                            var obj_ = obj;
                            this.UserRoleObj.table.addUser(obj_);
                        }
                        //this.UserMenuRoleObj.addUser(obj);
                        //this.UserMenuRoleObj.forceUpdate("");
                        break;
                    default:
                        break;
                }
            };
            return zhmTestPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        zhmTestPage.zhmTestPageVm = zhmTestPageVm;
        var zhmTestPageStates = (function (_super) {
            __extends(zhmTestPageStates, _super);
            function zhmTestPageStates() {
                _super.apply(this, arguments);
            }
            return zhmTestPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        zhmTestPage.zhmTestPageStates = zhmTestPageStates;
        var zhmTestPageProps = (function (_super) {
            __extends(zhmTestPageProps, _super);
            function zhmTestPageProps() {
                _super.apply(this, arguments);
            }
            return zhmTestPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        zhmTestPage.zhmTestPageProps = zhmTestPageProps;
        iocFile.Core.Ioc.Current().RegisterType("ZHMTESTPAGE", basewedPageFile.Web.BaseWebPageVm, zhmTestPageVm);
    })(zhmTestPage = exports.zhmTestPage || (exports.zhmTestPage = {}));
});
