var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../01core/Ioc", "./../../01core/Url", "./../../04page/BaseWebPage", "./MenuUserRolePage/MenuUserRole", "./../H/tool/OrgTree"], function (require, exports, React, iocFile, urlFile, basewedPageFile, menuuserrolepage, OrgTreeFile) {
    "use strict";
    var OrgTreeVm = OrgTreeFile.OrgTree.OrgTreeVm;
    var RightlinkPage;
    (function (RightlinkPage) {
        var RightlinkPageAction = (function (_super) {
            __extends(RightlinkPageAction, _super);
            function RightlinkPageAction() {
                _super.apply(this, arguments);
            }
            return RightlinkPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        RightlinkPage.RightlinkPageAction = RightlinkPageAction;
        var RightlinkPageReact = (function (_super) {
            __extends(RightlinkPageReact, _super);
            function RightlinkPageReact() {
                _super.apply(this, arguments);
                this.state = new RightlinkPageStates();
            }
            RightlinkPageReact.prototype.pSender = function () {
                return React.createElement("div", null, React.createElement("div", {className: "Hm-toggle-menu text-left acsTop"}, this.props.Vm.OrgTreeObj.intoDom()), React.createElement("div", {className: "main acsTop0  acs-main"}, React.createElement("div", {className: "acsPaddingLR0-5 acsMarginT0-5 acsGrayBg"}, React.createElement("div", {className: "acs-table Hg-width"}, this.props.Vm.menuuserrole.intoDom()))));
            };
            return RightlinkPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        RightlinkPage.RightlinkPageReact = RightlinkPageReact;
        var RightlinkPageVm = (function (_super) {
            __extends(RightlinkPageVm, _super);
            function RightlinkPageVm() {
                _super.call(this);
                this.ReactType = RightlinkPageReact;
                this.OrgTreeObj = new OrgTreeVm();
                this.menuuserrole = new menuuserrolepage.MenuUserRole.MenuUserRoleVm();
            }
            RightlinkPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                urlFile.Core.AkPost("/core/WebService/Method?resolver=JsonMethod", { json: "RightPalform.json" }, function (a) {
                    _this.menuuserrole.table.RoleData = a.RoleData;
                    _this.menuuserrole.table.MenuData = a.MenuData;
                    _this.menuuserrole.table.UserData = a.UserData;
                    _this.menuuserrole.table.UserRoleData = a.UserRoleData;
                    if (callback) {
                        callback();
                    }
                });
            };
            RightlinkPageVm.prototype.ReceivePageSend = function (config, obj) {
                _super.prototype.ReceivePageSend.call(this, config, obj);
                switch (config.FromModulename) {
                    case "NEWROLEPAGE":
                        if (obj.RoleSign) {
                            var _obj = obj;
                            //this.menuuserrole.table.RoleData.push({ FID: "", RoleName: obj.RoleName, RoleSign: obj.RoleSign })
                            //this.UserMenuRoleObj.addRole(_obj);
                            this.menuuserrole.table.addRole(_obj);
                        }
                        break;
                    case "NEWUSERPAGE":
                        if (obj.UserSign) {
                            var obj_ = obj;
                            this.menuuserrole.table.addUser(obj_);
                        }
                        //this.UserMenuRoleObj.addUser(obj);
                        //this.UserMenuRoleObj.forceUpdate("");
                        break;
                    case "NEWORGPAGE":
                        //this.OrgTreeObj.addNodeByName(obj);
                        break;
                    case "NEWNODEPAGE":
                        this.menuuserrole.table.addMenu(obj.MenuName);
                        break;
                    default:
                        break;
                }
            };
            return RightlinkPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        RightlinkPage.RightlinkPageVm = RightlinkPageVm;
        var RightlinkPageStates = (function (_super) {
            __extends(RightlinkPageStates, _super);
            function RightlinkPageStates() {
                _super.apply(this, arguments);
            }
            return RightlinkPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        RightlinkPage.RightlinkPageStates = RightlinkPageStates;
        var RightlinkPageProps = (function (_super) {
            __extends(RightlinkPageProps, _super);
            function RightlinkPageProps() {
                _super.apply(this, arguments);
            }
            return RightlinkPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        RightlinkPage.RightlinkPageProps = RightlinkPageProps;
        iocFile.Core.Ioc.Current().RegisterType("RIGHTLINK", basewedPageFile.Web.BaseWebPageVm, RightlinkPageVm);
    })(RightlinkPage = exports.RightlinkPage || (exports.RightlinkPage = {}));
});
