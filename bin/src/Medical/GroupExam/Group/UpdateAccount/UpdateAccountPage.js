var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/Ioc", "./../../../../01core/Util", "./../../../../01core/Url", "./../../../../04page/BaseWebPage", "react", "./UpdateAccountRowDom"], function (require, exports, iocFile, utilFile, urlFile, basewedPageFile, React, UpdateAccountRowDom) {
    "use strict";
    var UpdateAccountPage;
    (function (UpdateAccountPage) {
        var UpdateAccountPageAction = (function (_super) {
            __extends(UpdateAccountPageAction, _super);
            function UpdateAccountPageAction() {
                _super.apply(this, arguments);
            }
            return UpdateAccountPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        UpdateAccountPage.UpdateAccountPageAction = UpdateAccountPageAction;
        var UpdateAccountPageReact = (function (_super) {
            __extends(UpdateAccountPageReact, _super);
            function UpdateAccountPageReact() {
                _super.apply(this, arguments);
                this.state = new UpdateAccountPageStates();
            }
            UpdateAccountPageReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "YSm-modals"}, React.createElement("h4", {className: "YSu-modal-title"}, "编辑应收款管理"), React.createElement("div", {className: "YSm-modal-header"}), this.props.Vm.UpdateAccountRowDomVm.intoDom(), React.createElement("div", {className: "YSm-modal-footer text-center"}, React.createElement("a", {className: "btn btn-sm btn-secondary"}, "取消"), React.createElement("a", {className: "btn btn-sm btn-primary", onClick: function () { _this.submit(); }}, "提交")));
            };
            UpdateAccountPageReact.prototype.submit = function () {
                this.props.Vm.SubmitData();
            };
            return UpdateAccountPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        UpdateAccountPage.UpdateAccountPageReact = UpdateAccountPageReact;
        var UpdateAccountPageVm = (function (_super) {
            __extends(UpdateAccountPageVm, _super);
            function UpdateAccountPageVm(config) {
                _super.call(this);
                this.ReactType = UpdateAccountPageReact;
            }
            UpdateAccountPageVm.prototype.SubmitData = function () {
                var _this = this;
                var master = this.UpdateAccountRowDomVm.MasterRow;
                var postData = [];
                var resultcommonData = master.RowData;
                var jsonData = JSON.stringify(resultcommonData);
                var isSuccess = master.legal();
                if (isSuccess) {
                    urlFile.Core.AkPost("/MedicalCenter/NewGroup/ModifyAccount", { account: jsonData, batchId: this.batchId }, function (a) {
                        if (a.Content == "ok") {
                            var _list = a.Data;
                            utilFile.Core.Util.Noty("编辑成功！");
                            _this.SendPageActor({ ToPanelName: "", ToModuleName: "GroupManagePage" }, { Select: "AccountManage" });
                            _this.closePage();
                        }
                        else {
                            utilFile.Core.Util.Noty("编辑失败！");
                        }
                    });
                }
            };
            UpdateAccountPageVm.prototype.init = function (config) {
            };
            UpdateAccountPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                var selectId = this.Param1;
                this.batchId = this.Param1;
                urlFile.Core.AkPost("/MedicalCenter/NewGroup/FetchDetailBatch", { fids: this.Param1 }, function (a) {
                    if (a) {
                        var config = { Data: a.Data[0].accountData[0], BatchId: _this.Param1 };
                        _this.UpdateAccountRowDomVm = new UpdateAccountRowDom.UpdateAccountRowDom.UpdateAccountRowDomVm(config);
                        if (callback) {
                            callback();
                        }
                    }
                });
            };
            return UpdateAccountPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        UpdateAccountPage.UpdateAccountPageVm = UpdateAccountPageVm;
        var UpdateAccountPageStates = (function (_super) {
            __extends(UpdateAccountPageStates, _super);
            function UpdateAccountPageStates() {
                _super.apply(this, arguments);
            }
            return UpdateAccountPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        UpdateAccountPage.UpdateAccountPageStates = UpdateAccountPageStates;
        var UpdateAccountPageProps = (function (_super) {
            __extends(UpdateAccountPageProps, _super);
            function UpdateAccountPageProps() {
                _super.apply(this, arguments);
            }
            return UpdateAccountPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        UpdateAccountPage.UpdateAccountPageProps = UpdateAccountPageProps;
        iocFile.Core.Ioc.Current().RegisterType("UpdateAccountPAGE", basewedPageFile.Web.BaseWebPageVm, UpdateAccountPageVm);
    })(UpdateAccountPage = exports.UpdateAccountPage || (exports.UpdateAccountPage = {}));
});
