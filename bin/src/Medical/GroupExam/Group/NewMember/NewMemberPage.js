var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/Ioc", "./../../../../01core/Util", "./../../../../01core/Url", "./../../../../04page/BaseWebPage", "react", "./NewMemberRowDom"], function (require, exports, iocFile, utilFile, urlFile, basewedPageFile, React, NewMemberRowDom) {
    "use strict";
    var NewMemberPage;
    (function (NewMemberPage) {
        var NewMemberPageAction = (function (_super) {
            __extends(NewMemberPageAction, _super);
            function NewMemberPageAction() {
                _super.apply(this, arguments);
            }
            return NewMemberPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        NewMemberPage.NewMemberPageAction = NewMemberPageAction;
        var NewMemberPageReact = (function (_super) {
            __extends(NewMemberPageReact, _super);
            function NewMemberPageReact() {
                _super.apply(this, arguments);
                this.state = new NewMemberPageStates();
            }
            NewMemberPageReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "YSm-modals"}, React.createElement("h4", {className: "YSu-modal-title"}, "添加人员"), React.createElement("div", {className: "YSm-modal-header"}), this.props.Vm.NewMemberRowDomVm.intoDom(), React.createElement("div", {className: "YSm-modal-footer text-center"}, React.createElement("a", {className: "btn btn-sm btn-secondary", onClick: function () { _this.props.Vm.PageClose(); }}, "取消"), React.createElement("a", {className: "btn btn-sm btn-primary", onClick: function () { _this.submit(); }}, "提交")));
            };
            NewMemberPageReact.prototype.submit = function () {
                this.props.Vm.SubmitData();
            };
            return NewMemberPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        NewMemberPage.NewMemberPageReact = NewMemberPageReact;
        var NewMemberPageVm = (function (_super) {
            __extends(NewMemberPageVm, _super);
            function NewMemberPageVm(config) {
                _super.call(this);
                this.ReactType = NewMemberPageReact;
            }
            NewMemberPageVm.prototype.PageClose = function () {
                // this.SendPageActor({ ToPanelName: "", ToModuleName: "GroupManagePage" }, { Select: "PersonalManage" });
                this.closePage();
            };
            NewMemberPageVm.prototype.SubmitData = function () {
                var _this = this;
                var master = this.NewMemberRowDomVm.MasterRow;
                var postData = [];
                var resultcommonData = master.RowData;
                // postData.push(resultcommonData);
                var jsonData = JSON.stringify(resultcommonData);
                var isSuccess = master.legal();
                if (isSuccess) {
                    var str = JSON.stringify("");
                    urlFile.Core.AkPost("/MedicalCenter/NewGroup/AddGroupMember", { member: jsonData, batch: this.BatchId }, function (a) {
                        if (a.Content == "ok") {
                            var _list = a.Data;
                            utilFile.Core.Util.Noty("添加成功！");
                            _this.SendPageActor({ ToPanelName: "", ToModuleName: "GroupManagePage" }, { Select: "PersonalManage" });
                            _this.closePage();
                        }
                        else {
                            utilFile.Core.Util.Noty("添加失败！");
                        }
                    });
                }
            };
            NewMemberPageVm.prototype.init = function (config) {
            };
            NewMemberPageVm.prototype.loadPage = function (callback) {
                var fids = this.Param1.split(',');
                var selectId = fids[0];
                var batchId = fids[1];
                this.BatchId = batchId;
                var config1 = { selectId: selectId, batchId: batchId };
                this.NewMemberRowDomVm = new NewMemberRowDom.NewMemberRowDom.NewMemberRowDomVm(config1);
                if (callback) {
                    callback();
                }
            };
            return NewMemberPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        NewMemberPage.NewMemberPageVm = NewMemberPageVm;
        var NewMemberPageStates = (function (_super) {
            __extends(NewMemberPageStates, _super);
            function NewMemberPageStates() {
                _super.apply(this, arguments);
            }
            return NewMemberPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        NewMemberPage.NewMemberPageStates = NewMemberPageStates;
        var NewMemberPageProps = (function (_super) {
            __extends(NewMemberPageProps, _super);
            function NewMemberPageProps() {
                _super.apply(this, arguments);
            }
            return NewMemberPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        NewMemberPage.NewMemberPageProps = NewMemberPageProps;
        iocFile.Core.Ioc.Current().RegisterType("NewMemberPAGE", basewedPageFile.Web.BaseWebPageVm, NewMemberPageVm);
    })(NewMemberPage = exports.NewMemberPage || (exports.NewMemberPage = {}));
});
