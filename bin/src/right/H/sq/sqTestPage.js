var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../01core/Ioc", "./../../../01core/Url", "./../../../04page/BaseWebPage"], function (require, exports, React, iocFile, urlFile, basewedPageFile) {
    "use strict";
    var sqTestPage;
    (function (sqTestPage) {
        var sqTestPageAction = (function (_super) {
            __extends(sqTestPageAction, _super);
            function sqTestPageAction() {
                _super.apply(this, arguments);
            }
            return sqTestPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        sqTestPage.sqTestPageAction = sqTestPageAction;
        var sqTestPageReact = (function (_super) {
            __extends(sqTestPageReact, _super);
            function sqTestPageReact() {
                _super.apply(this, arguments);
                this.state = new sqTestPageStates();
            }
            sqTestPageReact.prototype.pSender = function () {
                return React.createElement("div", null, this.props.Vm.UserMenuRoleObj.intoDom());
            };
            return sqTestPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        sqTestPage.sqTestPageReact = sqTestPageReact;
        var sqTestPageVm = (function (_super) {
            __extends(sqTestPageVm, _super);
            function sqTestPageVm(config) {
                _super.call(this);
                this.ReactType = sqTestPageReact;
            }
            sqTestPageVm.prototype.loadPage = function (callback) {
                urlFile.Core.AkPost("/core/WebService/Method?resolver=JsonMethod", { json: "RightPalform.json" }, function (a) {
                    if (a) {
                    }
                });
            };
            sqTestPageVm.prototype.ReceivePageSend = function (config, obj) {
                _super.prototype.ReceivePageSend.call(this, config, obj);
                debugger;
                switch (config.FromModulename) {
                    case "NEWROLEPAGE":
                        if (obj.RoleSign) {
                            debugger;
                            var _obj = obj;
                            //this.menuuserrole.table.RoleData.push({ FID: "", RoleName: obj.RoleName, RoleSign: obj.RoleSign })
                            //this.UserMenuRoleObj.addRole(_obj);
                            this.UserMenuRoleObj.table.addRole(_obj);
                            this.UserMenuRoleObj.table.forceUpdate("");
                        }
                        break;
                    case "NEWUSERPAGE":
                        if (obj.UserSign) {
                            var obj_ = obj;
                            this.UserMenuRoleObj.table.addUser(obj_);
                        }
                        //this.UserMenuRoleObj.addUser(obj);
                        //this.UserMenuRoleObj.forceUpdate("");
                        break;
                    case "NEWORGPAGE":
                        //this.OrgTreeObj.addNodeByName(obj);
                        break;
                    //case "MENUNEWPAGE":
                    //    var _objMenu: Data1.Menu.IMenuSimpleData = obj;
                    //    this.OrgMenuObj.table.addMenu(_objMenu.CODE_TEXT, _objMenu.Type);
                    //    break;
                    case "NEWNODEPAGE":
                        debugger;
                        this.UserMenuRoleObj.table.addMenu(obj.MenuName);
                        break;
                    case "ADDMENUORBUTTONPAGE":
                        debugger;
                        if (obj.Type == "Node") {
                            this.UserMenuRoleObj.table.addMenu(obj.MenuName);
                        }
                        else if (obj.Type = "Button") {
                            this.UserMenuRoleObj.table.addButton(obj.MenuName);
                        }
                        break;
                    default:
                        break;
                }
            };
            return sqTestPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        sqTestPage.sqTestPageVm = sqTestPageVm;
        var sqTestPageStates = (function (_super) {
            __extends(sqTestPageStates, _super);
            function sqTestPageStates() {
                _super.apply(this, arguments);
            }
            return sqTestPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        sqTestPage.sqTestPageStates = sqTestPageStates;
        var sqTestPageProps = (function (_super) {
            __extends(sqTestPageProps, _super);
            function sqTestPageProps() {
                _super.apply(this, arguments);
            }
            return sqTestPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        sqTestPage.sqTestPageProps = sqTestPageProps;
        iocFile.Core.Ioc.Current().RegisterType("SQTESTPAGE", basewedPageFile.Web.BaseWebPageVm, sqTestPageVm);
    })(sqTestPage = exports.sqTestPage || (exports.sqTestPage = {}));
});
