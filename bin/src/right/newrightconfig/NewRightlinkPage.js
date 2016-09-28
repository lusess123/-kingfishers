var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../01core/Ioc", "./../../04page/BaseWebPage", "./../H/tool/OrgTree"], function (require, exports, React, iocFile, basewedPageFile, OrgTreeFile) {
    "use strict";
    var OrgTreeVm = OrgTreeFile.OrgTree.OrgTreeVm;
    var NewRightlinkPage;
    (function (NewRightlinkPage) {
        var NewRightlinkPageAction = (function (_super) {
            __extends(NewRightlinkPageAction, _super);
            function NewRightlinkPageAction() {
                _super.apply(this, arguments);
            }
            return NewRightlinkPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        NewRightlinkPage.NewRightlinkPageAction = NewRightlinkPageAction;
        var NewRightlinkPageReact = (function (_super) {
            __extends(NewRightlinkPageReact, _super);
            function NewRightlinkPageReact() {
                _super.apply(this, arguments);
                this.state = new NewRightlinkPageStates();
            }
            NewRightlinkPageReact.prototype.pSender = function () {
                return React.createElement("div", null, React.createElement("div", {className: "Hm-toggle-menu text-left acsTop"}, this.props.Vm.OrgTreeObj.intoDom()), React.createElement("div", {className: "main acsTop0  acs-main"}, React.createElement("div", {className: "acsPaddingLR0-5 acsMarginT0-5 acsGrayBg"}, React.createElement("div", {className: "acs-table Hg-width"}))));
            };
            return NewRightlinkPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        NewRightlinkPage.NewRightlinkPageReact = NewRightlinkPageReact;
        var NewRightlinkPageVm = (function (_super) {
            __extends(NewRightlinkPageVm, _super);
            function NewRightlinkPageVm() {
                _super.call(this);
                //public menuuserrole: menuuserrolepage.MenuUserRole.MenuUserRoleVm;
                this.ReactType = NewRightlinkPageReact;
                this.OrgTreeObj = new OrgTreeVm();
                //this.menuuserrole = new menuuserrolepage.MenuUserRole.MenuUserRoleVm();
            }
            NewRightlinkPageVm.prototype.loadPage = function (callback) {
                //urlFile.Core.AkPost("/core/WebService/Method?resolver=JsonMethod", { json: "RightPalform.json" }, (a) => {
                //    this.menuuserrole.table.RoleData = a.RoleData;
                //    this.menuuserrole.table.MenuData = a.MenuData;
                //    this.menuuserrole.table.UserData = a.UserData;
                //    this.menuuserrole.table.UserRoleData = a.UserRoleData;
                //    if (callback) {
                //        callback();
                //    }
                //});
            };
            NewRightlinkPageVm.prototype.ReceivePageSend = function (config, obj) {
                _super.prototype.ReceivePageSend.call(this, config, obj);
                switch (config.FromModulename) {
                    //case "NEWROLEPAGE":
                    //    if (obj.RoleSign) {
                    //        var _obj: Data.Menu.RoleActorData = obj;
                    //        //this.menuuserrole.table.RoleData.push({ FID: "", RoleName: obj.RoleName, RoleSign: obj.RoleSign })
                    //        //this.UserMenuRoleObj.addRole(_obj);
                    //        this.menuuserrole.table.addRole(_obj);
                    //    }
                    //    break;
                    //case "NEWUSERPAGE":
                    //    if (obj.UserSign) {
                    //        var obj_: Data.Menu.UserActorData = obj;
                    //        this.menuuserrole.table.addUser(obj_);
                    //    }
                    //    //this.UserMenuRoleObj.addUser(obj);
                    //    //this.UserMenuRoleObj.forceUpdate("");
                    //    break;
                    case "NEWORGPAGE":
                        //this.OrgTreeObj.addNodeByName(obj);
                        break;
                    //case "NEWNODEPAGE":
                    //    this.menuuserrole.table.addMenu(obj.MenuName);
                    //    break;
                    default:
                        break;
                }
            };
            return NewRightlinkPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        NewRightlinkPage.NewRightlinkPageVm = NewRightlinkPageVm;
        var NewRightlinkPageStates = (function (_super) {
            __extends(NewRightlinkPageStates, _super);
            function NewRightlinkPageStates() {
                _super.apply(this, arguments);
            }
            return NewRightlinkPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        NewRightlinkPage.NewRightlinkPageStates = NewRightlinkPageStates;
        var NewRightlinkPageProps = (function (_super) {
            __extends(NewRightlinkPageProps, _super);
            function NewRightlinkPageProps() {
                _super.apply(this, arguments);
            }
            return NewRightlinkPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        NewRightlinkPage.NewRightlinkPageProps = NewRightlinkPageProps;
        iocFile.Core.Ioc.Current().RegisterType("RIGHTLINK", basewedPageFile.Web.BaseWebPageVm, NewRightlinkPageVm);
    })(NewRightlinkPage = exports.NewRightlinkPage || (exports.NewRightlinkPage = {}));
});
