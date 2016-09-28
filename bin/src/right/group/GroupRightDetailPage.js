var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../01core/Ioc", "./../../01core/Url", "./../../04page/BaseWebPage", "./../../02col/03selector/BaseTree"], function (require, exports, React, iocFile, urlFile, basewedPageFile, baseTreeFile) {
    "use strict";
    var GroupRightDetailPage;
    (function (GroupRightDetailPage) {
        var GroupRightDetailPageAction = (function (_super) {
            __extends(GroupRightDetailPageAction, _super);
            function GroupRightDetailPageAction() {
                _super.apply(this, arguments);
            }
            return GroupRightDetailPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        GroupRightDetailPage.GroupRightDetailPageAction = GroupRightDetailPageAction;
        var GroupRightDetailPageReact = (function (_super) {
            __extends(GroupRightDetailPageReact, _super);
            function GroupRightDetailPageReact() {
                _super.apply(this, arguments);
                this.state = new GroupRightDetailPageStates();
            }
            GroupRightDetailPageReact.prototype.fun_grantRight = function () {
                this.props.Vm.fun_grantRight();
            };
            GroupRightDetailPageReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: ""}, React.createElement("div", {className: "Hm-modals Hg-overflow-auto"}, !this.props.Vm.RightTreeObj ? "正在载入权限树" : this.props.Vm.RightTreeObj.intoDom()), React.createElement("br", null), React.createElement("br", null), React.createElement("div", {className: "text-center"}, React.createElement("a", {className: "btn btn-sm btn-primary", onClick: function () { _this.fun_grantRight(); }}, "点击分配权限")));
            };
            return GroupRightDetailPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        GroupRightDetailPage.GroupRightDetailPageReact = GroupRightDetailPageReact;
        var GroupRightDetailPageVm = (function (_super) {
            __extends(GroupRightDetailPageVm, _super);
            function GroupRightDetailPageVm(config) {
                _super.call(this);
                this.ReactType = GroupRightDetailPageReact;
                if (config) {
                    this.RightTreeObj = new baseTreeFile.ui.BaseTreeVm(config.RightTree);
                }
            }
            GroupRightDetailPageVm.prototype.fun_grantRight = function () {
                urlFile.Core.AkUrl.Current().openUrl("$panelGROUPGRANT$" + this.Param1 + "$");
            };
            GroupRightDetailPageVm.prototype.loadPage = function (callback) {
                this.RightTreeObj = new baseTreeFile.ui.BaseTreeVm({
                    RegName: "RightByOrgIdCodeTable-" + this.Param1,
                    NullReactFun: function (vm) {
                        return React.createElement("div", null, "该组织未分配权限");
                    }
                });
                if (callback) {
                    callback();
                }
            };
            return GroupRightDetailPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        GroupRightDetailPage.GroupRightDetailPageVm = GroupRightDetailPageVm;
        var GroupRightDetailPageStates = (function (_super) {
            __extends(GroupRightDetailPageStates, _super);
            function GroupRightDetailPageStates() {
                _super.apply(this, arguments);
            }
            return GroupRightDetailPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        GroupRightDetailPage.GroupRightDetailPageStates = GroupRightDetailPageStates;
        var GroupRightDetailPageProps = (function (_super) {
            __extends(GroupRightDetailPageProps, _super);
            function GroupRightDetailPageProps() {
                _super.apply(this, arguments);
            }
            return GroupRightDetailPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        GroupRightDetailPage.GroupRightDetailPageProps = GroupRightDetailPageProps;
        iocFile.Core.Ioc.Current().RegisterType("GROUPRIGHTDETAILPAGE`", basewedPageFile.Web.BaseWebPageVm, GroupRightDetailPageVm);
    })(GroupRightDetailPage = exports.GroupRightDetailPage || (exports.GroupRightDetailPage = {}));
});
