var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../01core/Ioc", "./../../01core/Url", "./../../04page/BaseWebPage", "./../../02col/03selector/BaseTree"], function (require, exports, React, iocFile, urlFile, basewedPageFile, baseTreeFile) {
    "use strict";
    var RoleRightDetailPage;
    (function (RoleRightDetailPage) {
        var RoleRightDetailPageAction = (function (_super) {
            __extends(RoleRightDetailPageAction, _super);
            function RoleRightDetailPageAction() {
                _super.apply(this, arguments);
            }
            return RoleRightDetailPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        RoleRightDetailPage.RoleRightDetailPageAction = RoleRightDetailPageAction;
        var RoleRightDetailPageReact = (function (_super) {
            __extends(RoleRightDetailPageReact, _super);
            function RoleRightDetailPageReact() {
                _super.apply(this, arguments);
                this.state = new RoleRightDetailPageStates();
            }
            RoleRightDetailPageReact.prototype.pSender = function () {
                return React.createElement("div", {className: "acs-modals-panel"}, React.createElement("h4", null, "查看角色权限"), React.createElement("div", null, this.initRightTree()));
            };
            //public rightPage() {
            //    urlFile.Core.AkUrl.Current().openUrl("$panelrolegrant$" + this.props.Vm.Param1 + "$", true);
            //}
            RoleRightDetailPageReact.prototype.initRightTree = function () {
                var treeVm = this.props.Vm.RightTree = new baseTreeFile.ui.BaseTreeVm();
                treeVm.Tree.IsMultiSelect = true;
                treeVm.RegName = "RoleTreeCodeTable" + "-" + this.props.Vm.RoleRightIds;
                var newArr = [];
                //还要再发送一次请求 将Role中的权限带过来
                this.props.Vm.RoleRightIds.forEach(function (id) {
                    newArr.push("\"" + id + "\"");
                });
                //treeVm.dataValueSet(newArr.join(","));
                return treeVm.intoDom();
            };
            ;
            return RoleRightDetailPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        RoleRightDetailPage.RoleRightDetailPageReact = RoleRightDetailPageReact;
        var RoleRightDetailPageVm = (function (_super) {
            __extends(RoleRightDetailPageVm, _super);
            function RoleRightDetailPageVm() {
                _super.apply(this, arguments);
                this.ReactType = RoleRightDetailPageReact;
            }
            RoleRightDetailPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                urlFile.Core.AkPost("/RightCloud/User/GetUserRole", { userid: this.Param1 }, function (a) {
                    // var _data: menuDataFile.Menu.MenuPagerListData = a.Data;
                    // this.getData(_data);var bToObj=JSON.parse(b);
                    _this.RoleRightIds = a.Data;
                    alert(_this.RoleRightIds);
                    if (callback) {
                        callback();
                    }
                });
            };
            return RoleRightDetailPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        RoleRightDetailPage.RoleRightDetailPageVm = RoleRightDetailPageVm;
        var RoleRightDetailPageStates = (function (_super) {
            __extends(RoleRightDetailPageStates, _super);
            function RoleRightDetailPageStates() {
                _super.apply(this, arguments);
            }
            return RoleRightDetailPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        RoleRightDetailPage.RoleRightDetailPageStates = RoleRightDetailPageStates;
        var RoleRightDetailPageProps = (function (_super) {
            __extends(RoleRightDetailPageProps, _super);
            function RoleRightDetailPageProps() {
                _super.apply(this, arguments);
            }
            return RoleRightDetailPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        RoleRightDetailPage.RoleRightDetailPageProps = RoleRightDetailPageProps;
        iocFile.Core.Ioc.Current().RegisterType("ROLERIGHTDETAILPAGE", basewedPageFile.Web.BaseWebPageVm, RoleRightDetailPageVm);
    })(RoleRightDetailPage = exports.RoleRightDetailPage || (exports.RoleRightDetailPage = {}));
});
