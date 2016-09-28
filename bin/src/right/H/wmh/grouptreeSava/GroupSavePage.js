var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../01core/Ioc", "./../../../01core/Util", "./../../../01core/Url", "./../../../04page/BaseWebPage", "./../../../05tool/EditSpan"], function (require, exports, React, iocFile, utilFile, urlFile, basewedPageFile, EditSpanFile) {
    "use strict";
    var GroupSavePage;
    (function (GroupSavePage) {
        var GroupSavePageAction = (function (_super) {
            __extends(GroupSavePageAction, _super);
            function GroupSavePageAction() {
                _super.apply(this, arguments);
            }
            return GroupSavePageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        GroupSavePage.GroupSavePageAction = GroupSavePageAction;
        var GroupSavePageReact = (function (_super) {
            __extends(GroupSavePageReact, _super);
            function GroupSavePageReact() {
                _super.apply(this, arguments);
                this.state = new GroupSavePageStates();
            }
            GroupSavePageReact.prototype.pSender = function () {
                return React.createElement("div", {className: "acs-org-edit"}, React.createElement("div", {className: "acsLightGrayBg acsBoxShadow acs-org-title clearfix"}, this.props.Vm.OrgNameESObj.intoDom(), React.createElement("b", null, "编码：", this.props.Vm.OrgCodeESObj.intoDom()), React.createElement("a", {className: "button tiny default", onClick: this.fun_submit()}, "保存")));
            };
            GroupSavePageReact.prototype.fun_submit = function () {
                //this.props.Vm.submit();
            };
            return GroupSavePageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        GroupSavePage.GroupSavePageReact = GroupSavePageReact;
        var GroupSavePageVm = (function (_super) {
            __extends(GroupSavePageVm, _super);
            //public UniId: string;
            function GroupSavePageVm(config) {
                _super.call(this);
                this.ReactType = GroupSavePageReact;
                this.OrgNameESObj = new EditSpanFile.EditSpan.EditSpanVm();
                this.OrgCodeESObj = new EditSpanFile.EditSpan.EditSpanVm();
                //this.UniId = eventFile.App.getUniId().toString();
                //if (config) {
                //this.init(config);
                //}
            }
            GroupSavePageVm.prototype.loadPage = function (callback) {
                var _this = this;
                //var _keys = this.Param1;
                var _keys = "20160324111837400A2DCA6584B97D4C96A63E750A2CE969CA";
                urlFile.Core.AkPost("/RightCloud/Group/getGroupDetail", { fids: _keys }, function (a) {
                    var _data = a.Data;
                    if (_data) {
                        _this.OrgNameESObj.Content = _data[0].GroupName;
                        _this.OrgCodeESObj.Content = _data[0].GroupCode;
                    }
                    _super.prototype.loadPage.call(_this, callback);
                });
            };
            GroupSavePageVm.prototype.submit = function () {
                var postData = [];
                var groupDataName = this.GroupData[0].GroupName = this.OrgNameESObj.Content;
                var groupDataCode = this.GroupData[0].GroupCode = this.OrgCodeESObj.Content;
                postData.push(groupDataName);
                postData.push(groupDataCode);
                var groups = JSON.stringify(postData);
                urlFile.Core.AkPost("/RightCloud/Group/Updata", {
                    group: groups
                }, function (a) {
                    if (a.Content == "ok") {
                        //var _list: string[] = a.Data;
                        //var _strs: string = _list.join(",");
                        //urlFile.Core.AkUrl.Current().openUrl("$wingroupdetail$" + _strs + "$", true);
                        //urlFile.Core.AkUrl.Current().openUrl("$group$" + _strs + "$", false);
                        utilFile.Core.Util.Noty("数据修改成功");
                    }
                    else {
                        utilFile.Core.Util.Noty("数据修改失败");
                    }
                });
            };
            GroupSavePageVm.prototype.init = function (config) {
                config.GroupSaveConfig.forEach(function (r) {
                    var _row = new GroupSavePage.GroupSavePageVm(r);
                });
            };
            return GroupSavePageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        GroupSavePage.GroupSavePageVm = GroupSavePageVm;
        var GroupSavePageStates = (function (_super) {
            __extends(GroupSavePageStates, _super);
            function GroupSavePageStates() {
                _super.apply(this, arguments);
            }
            return GroupSavePageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        GroupSavePage.GroupSavePageStates = GroupSavePageStates;
        var GroupSavePageProps = (function (_super) {
            __extends(GroupSavePageProps, _super);
            function GroupSavePageProps() {
                _super.apply(this, arguments);
            }
            return GroupSavePageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        GroupSavePage.GroupSavePageProps = GroupSavePageProps;
        iocFile.Core.Ioc.Current().RegisterType("GROUPSAVE", basewedPageFile.Web.BaseWebPageVm, GroupSavePageVm);
    })(GroupSavePage = exports.GroupSavePage || (exports.GroupSavePage = {}));
});
