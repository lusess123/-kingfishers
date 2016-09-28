var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../01core/Ioc", "./../../01core/Util", "./../../01core/Url", "./../../04page/BaseWebPage", "./../../02col/03selector/BaseTree"], function (require, exports, React, iocFile, utilFile, urlFile, basewedPageFile, baseTreeFile) {
    "use strict";
    var Role;
    (function (Role) {
        var RoleGrantPageAction = (function (_super) {
            __extends(RoleGrantPageAction, _super);
            function RoleGrantPageAction() {
                _super.apply(this, arguments);
            }
            return RoleGrantPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        Role.RoleGrantPageAction = RoleGrantPageAction;
        var RoleGrantPageReact = (function (_super) {
            __extends(RoleGrantPageReact, _super);
            function RoleGrantPageReact() {
                _super.apply(this, arguments);
                this.state = new RoleGrantPageStates();
            }
            RoleGrantPageReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "Hm-modals"}, React.createElement("h4", null, "分配角色权限"), React.createElement("div", {className: ""}, this.initRightTree()), React.createElement("div", {className: "text-center"}, React.createElement("span", {className: "btn btn-sm btn-primary", onClick: function () { _this.fun_submitBtn(); }}, "提交")));
            };
            RoleGrantPageReact.prototype.fun_submitBtn = function () {
                this.props.Vm.submit();
            };
            RoleGrantPageReact.prototype.fun_returnBtn = function () {
                //this.props.Vm.submit();
            };
            RoleGrantPageReact.prototype.initRightTree = function () {
                var treeVm = this.props.Vm.RightTree = new baseTreeFile.ui.BaseTreeVm();
                treeVm.Tree.IsMultiSelect = true;
                treeVm.Tree.IsYesParent = true;
                treeVm.Tree.IsNoChild = true;
                treeVm.RegName = "RoleTreeCodeTable" + "-" + this.props.Vm.Param1;
                var newArr = [];
                this.props.Vm.RoleRightIds.forEach(function (id) {
                    newArr.push("\"" + id + "\"");
                });
                treeVm.dataValueSet(newArr.join(","));
                return treeVm.intoDom();
            };
            ;
            return RoleGrantPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        Role.RoleGrantPageReact = RoleGrantPageReact;
        var RoleGrantPageVm = (function (_super) {
            __extends(RoleGrantPageVm, _super);
            function RoleGrantPageVm() {
                _super.call(this);
                this.ReactType = RoleGrantPageReact;
            }
            RoleGrantPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                urlFile.Core.AkPost("/RightCloud/Role/GetRoleRightsList", { roleid: this.Param1 }, function (a) {
                    // var _data: menuDataFile.Menu.MenuPagerListData = a.Data;
                    // this.getData(_data);var bToObj=JSON.parse(b);
                    _this.RoleRightIds = a.Data;
                    if (callback) {
                        callback();
                    }
                });
            };
            RoleGrantPageVm.prototype.submit = function () {
                var selectedVal = this.RightTree.vmDataValueGet();
                var rightIds = [];
                selectedVal.split(",").forEach(function (id) {
                    rightIds.push(id.replace(/\"/g, ""));
                });
                urlFile.Core.AkPost("/RightCloud/Role/RoleGrant", {
                    rightIds: rightIds.join(","),
                    roleId: this.Param1
                }, function (a) {
                    if (a.Content == "ok") {
                        utilFile.Core.Util.Noty("分配成功");
                        urlFile.Core.AkUrl.Current().openUrl("$role$", false);
                    }
                    else {
                        utilFile.Core.Util.Noty("分配权限失败");
                    }
                });
            };
            return RoleGrantPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        Role.RoleGrantPageVm = RoleGrantPageVm;
        var RoleGrantPageStates = (function (_super) {
            __extends(RoleGrantPageStates, _super);
            function RoleGrantPageStates() {
                _super.apply(this, arguments);
            }
            return RoleGrantPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        Role.RoleGrantPageStates = RoleGrantPageStates;
        var RoleGrantPageProps = (function (_super) {
            __extends(RoleGrantPageProps, _super);
            function RoleGrantPageProps() {
                _super.apply(this, arguments);
            }
            return RoleGrantPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        Role.RoleGrantPageProps = RoleGrantPageProps;
        iocFile.Core.Ioc.Current().RegisterType("ROLEGRANT", basewedPageFile.Web.BaseWebPageVm, RoleGrantPageVm);
    })(Role = exports.Role || (exports.Role = {}));
});
