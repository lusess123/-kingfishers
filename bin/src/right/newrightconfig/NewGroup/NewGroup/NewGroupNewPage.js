var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/Ioc", "./../../../../01core/Util", "./../../../../01core/Url", "./../../../../04page/BaseWebPage", "./NewGroupNewRow"], function (require, exports, React, iocFile, utilFile, urlFile, basewedPageFile, groupNewRowFile) {
    "use strict";
    var Right;
    (function (Right) {
        var NewGroupNewPageAction = (function (_super) {
            __extends(NewGroupNewPageAction, _super);
            function NewGroupNewPageAction() {
                _super.apply(this, arguments);
            }
            return NewGroupNewPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        Right.NewGroupNewPageAction = NewGroupNewPageAction;
        var NewGroupNewPageReact = (function (_super) {
            __extends(NewGroupNewPageReact, _super);
            function NewGroupNewPageReact() {
                _super.apply(this, arguments);
                this.state = new NewGroupNewPageStates();
            }
            NewGroupNewPageReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "Hm-modals"}, React.createElement("h4", null, "新增组织机构"), React.createElement("div", null, this.props.Vm.GroupRowList.map(function (l) {
                    return l.intoDom();
                })), React.createElement("div", {className: "text-center"}, React.createElement("span", {className: "btn btn-xs btn-primary", onClick: function () { _this.fun_submitBtn(); }}, "提交")));
            };
            NewGroupNewPageReact.prototype.fun_submitBtn = function () {
                this.props.Vm.submit();
            };
            return NewGroupNewPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        Right.NewGroupNewPageReact = NewGroupNewPageReact;
        var NewGroupNewPageVm = (function (_super) {
            __extends(NewGroupNewPageVm, _super);
            function NewGroupNewPageVm() {
                _super.call(this);
                this.ReactType = NewGroupNewPageReact;
                this.GroupRowList = [];
                this.GroupRowList.push(new groupNewRowFile.NewGroupNewRow.NewGroupNewRowVm());
            }
            NewGroupNewPageVm.prototype.submit = function () {
                var postData = [];
                var groupInsertRow = this.GroupRowList[0].GroupMasterObj;
                var groupData = groupInsertRow.GroupData;
                groupData.PID = groupInsertRow.ParentSelector.vmDataValueGet();
                groupData.RCG_Code = groupInsertRow.GroupCodeTextVm.vmDataValueGet();
                groupData.RCG_Name = groupInsertRow.GroupNameTextVm.vmDataValueGet();
                //groupData.ProductFIDs = groupInsertRow.GroupProductSelect.vmDataValueGet();
                postData.push(groupData);
                var groups = JSON.stringify(postData);
                var name = groupData.RCG_Name;
                var Code = groupData.RCG_Code;
                var PID = groupData.PID;
                var is = groupData;
                var _res = true;
                // alert(menus);
                var _isSuccess = groupInsertRow.legal();
                if (_isSuccess) {
                    //提交按钮
                    urlFile.Core.AkPost("/RightCloud/NewRightConfig/Groupsubmit", {
                        group: groups
                    }, function (a) {
                        if (a == "0") {
                            urlFile.Core.AkUrl.Current().openUrl("$NewRightMainPage$", true);
                            utilFile.Core.Util.Noty("数据新增成功");
                        }
                        else if (a == "1") {
                            utilFile.Core.Util.Noty("机构名称已存在");
                        }
                        else if (a == "2") {
                            utilFile.Core.Util.Noty("机构编码已存在");
                        }
                        else {
                            utilFile.Core.Util.Noty("数据新增失败");
                        }
                        //if (a.Content == "ok") {
                        //    var _list: string[] = a.Data;
                        //    var _strs: string = _list.join(",");
                        //    urlFile.Core.AkUrl.Current().openUrl("$winroledetail$" + _strs + "$", true);
                        //    urlFile.Core.AkUrl.Current().openUrl("$group$" + _strs + "$", false);
                        //}
                        //else {
                        //    utilFile.Core.Util.Noty("数据新增失败");
                        //}
                    });
                }
            };
            return NewGroupNewPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        Right.NewGroupNewPageVm = NewGroupNewPageVm;
        var NewGroupNewPageStates = (function (_super) {
            __extends(NewGroupNewPageStates, _super);
            function NewGroupNewPageStates() {
                _super.apply(this, arguments);
            }
            return NewGroupNewPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        Right.NewGroupNewPageStates = NewGroupNewPageStates;
        var NewGroupNewPageProps = (function (_super) {
            __extends(NewGroupNewPageProps, _super);
            function NewGroupNewPageProps() {
                _super.apply(this, arguments);
            }
            return NewGroupNewPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        Right.NewGroupNewPageProps = NewGroupNewPageProps;
        iocFile.Core.Ioc.Current().RegisterType("NewGroupNewPage", basewedPageFile.Web.BaseWebPageVm, NewGroupNewPageVm);
    })(Right = exports.Right || (exports.Right = {}));
});
