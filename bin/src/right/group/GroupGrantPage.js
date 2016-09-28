var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../01core/Ioc", "./../../01core/Util", "./../../01core/Url", "./../../04page/BaseWebPage", "./../../02col/03selector/BaseTree"], function (require, exports, React, iocFile, utilFile, urlFile, basewedPageFile, baseTreeFile) {
    "use strict";
    var GroupGrantPage;
    (function (GroupGrantPage) {
        var GroupGrantPageAction = (function (_super) {
            __extends(GroupGrantPageAction, _super);
            function GroupGrantPageAction() {
                _super.apply(this, arguments);
            }
            return GroupGrantPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        GroupGrantPage.GroupGrantPageAction = GroupGrantPageAction;
        var GroupGrantPageReact = (function (_super) {
            __extends(GroupGrantPageReact, _super);
            function GroupGrantPageReact() {
                _super.apply(this, arguments);
                this.state = new GroupGrantPageStates();
            }
            GroupGrantPageReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "Hm-modals"}, React.createElement("h4", null, "分配组织权限"), this.initRightTree(), React.createElement("div", {className: "text-center"}, React.createElement("span", {className: "btn btn-sm btn-primary", onClick: function () { _this.fun_submitBtn(); }}, "提交")));
            };
            GroupGrantPageReact.prototype.fun_submitBtn = function () {
                this.props.Vm.submit();
            };
            GroupGrantPageReact.prototype.fun_returnBtn = function () {
                //this.props.Vm.submit();
            };
            GroupGrantPageReact.prototype.initRightTree = function () {
                var treeVm = this.props.Vm.RightTree = new baseTreeFile.ui.BaseTreeVm({ IsAllTree: true });
                treeVm.Tree.IsMultiSelect = true;
                treeVm.Tree.IsYesParent = true;
                treeVm.Tree.IsYesChild = true;
                treeVm.Tree.IsNoChild = true;
                //treeVm.isa
                treeVm.RegName = "RightCloudGroupColdeTable";
                var newArr = [];
                this.props.Vm.GroupsRightIds.forEach(function (id) {
                    newArr.push(id.RightID);
                });
                treeVm.dataValueSet(newArr.join(","));
                return treeVm.intoDom();
            };
            ;
            return GroupGrantPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        GroupGrantPage.GroupGrantPageReact = GroupGrantPageReact;
        var GroupGrantPageVm = (function (_super) {
            __extends(GroupGrantPageVm, _super);
            function GroupGrantPageVm() {
                _super.call(this);
                this.ReactType = GroupGrantPageReact;
            }
            GroupGrantPageVm.prototype.loadPage = function (callback) {
                //urlFile.Core.AkPost("/RightCloud/Group/InitRightsTree", null, (a) => {
                //    // var _data: menuDataFile.Menu.MenuPagerListData = a.Data;
                //    // this.getData(_data);
                //}); 
                var _this = this;
                urlFile.Core.AkPost("/RightCloud/Group/GetGroupRightTree", { fControlUnitID: this.Param1, onlyId: true }, function (a) {
                    _this.GroupsRightIds = a.Data.List;
                    if (callback) {
                        callback();
                    }
                });
                //还要将他原来的权限给拿过来  
            };
            GroupGrantPageVm.prototype.submit = function () {
                var _this = this;
                var selectedVal = this.RightTree.vmDataValueGet();
                //var rightIds = [];
                //selectedVal.split(",").forEach((id) => {
                //    rightIds.push(id.replace(/\"/g, ""));
                //});
                // alert(rightIds);
                urlFile.Core.AkPost("/RightCloud/Group/GroupGrant", {
                    rightIds: selectedVal.replace(/\"/g, "'"),
                    //权限的ID 传过去
                    groupIds: this.Param1
                }, function (a) {
                    if (a.Data == "ok") {
                        utilFile.Core.Util.Noty("分配成功");
                        urlFile.Core.AkUrl.Current().openUrl("$panelGROUPRIGHTDETAILPAGE$" + _this.Param1 + "$");
                    }
                    else {
                        utilFile.Core.Util.Noty("分配权限失败 " + a.Content);
                    }
                });
            };
            return GroupGrantPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        GroupGrantPage.GroupGrantPageVm = GroupGrantPageVm;
        var GroupGrantPageStates = (function (_super) {
            __extends(GroupGrantPageStates, _super);
            function GroupGrantPageStates() {
                _super.apply(this, arguments);
            }
            return GroupGrantPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        GroupGrantPage.GroupGrantPageStates = GroupGrantPageStates;
        var GroupGrantPageProps = (function (_super) {
            __extends(GroupGrantPageProps, _super);
            function GroupGrantPageProps() {
                _super.apply(this, arguments);
            }
            return GroupGrantPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        GroupGrantPage.GroupGrantPageProps = GroupGrantPageProps;
        iocFile.Core.Ioc.Current().RegisterType("GROUPGRANT", basewedPageFile.Web.BaseWebPageVm, GroupGrantPageVm);
    })(GroupGrantPage = exports.GroupGrantPage || (exports.GroupGrantPage = {}));
});
