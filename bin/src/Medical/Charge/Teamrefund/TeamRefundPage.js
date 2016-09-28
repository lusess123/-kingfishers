var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/Ioc", "./../../../01core/Url", "./../../../04page/BaseWebPage", "react", "./../../../02col/01single/Text", "./../../../02col/01single/TextArea"], function (require, exports, iocFile, urlFile, basewedPageFile, React, textFile, textareaFile) {
    "use strict";
    var TeamRefundPage;
    (function (TeamRefundPage) {
        var TeamRefundPageAction = (function (_super) {
            __extends(TeamRefundPageAction, _super);
            function TeamRefundPageAction() {
                _super.apply(this, arguments);
            }
            return TeamRefundPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        TeamRefundPage.TeamRefundPageAction = TeamRefundPageAction;
        var TeamRefundPageReact = (function (_super) {
            __extends(TeamRefundPageReact, _super);
            function TeamRefundPageReact() {
                _super.apply(this, arguments);
                this.state = new TeamRefundPageStates();
            }
            TeamRefundPageReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "p-a-lg Hg-w60 Hg-m-auto"}, React.createElement("div", {className: "form-group form-inline clearfix"}, React.createElement("label", {className: "col-md-4 col-sm-3  form-control-label text-right"}, "退款原因："), React.createElement("div", {className: "col-md-7 col-sm-9 "}, this._tDom(this.props.Vm.RefundReason))), React.createElement("div", {className: "form-group form-inline clearfix"}, React.createElement("label", {className: "col-md-4 col-sm-3  form-control-label text-right"}, "退款金额："), React.createElement("div", {className: "col-md-7 col-sm-9 "}, this._tDom(this.props.Vm.RefundAmount))), React.createElement("div", {className: "m-t text-center"}, React.createElement("a", {className: "btn btn-sm btn-primary", onClick: function () { _this.props.Vm.refund(); }}, "确定退款")));
            };
            return TeamRefundPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        TeamRefundPage.TeamRefundPageReact = TeamRefundPageReact;
        var TeamRefundPageVm = (function (_super) {
            __extends(TeamRefundPageVm, _super);
            function TeamRefundPageVm(config) {
                _super.call(this);
                this.ReactType = TeamRefundPageReact;
                this.RefundReason = new textareaFile.ui.TextAreaVm();
                this.Title = "团体退费";
            }
            TeamRefundPageVm.prototype.init = function (config) { };
            TeamRefundPageVm.prototype.loadPage = function (callback) {
                var unitChagerId = this.Param1;
                var isAmout = this.Param2;
                this.RefundAmount = new textFile.ui.TextVm();
                this.RefundAmount.dataValueSet(this.Param2);
                if (callback) {
                    callback();
                }
            };
            TeamRefundPageVm.prototype.refund = function () {
                var _this = this;
                this.submitData = { ChargeFID: this.Param1, RefundAmount: this.Param2, RefundReason: this.RefundReason.dataValueGet() };
                urlFile.Core.AkPost("/MedicalCenter/TeamCharge/TeamRefund", { data: JSON.stringify(this.submitData) }, function (a) {
                    //刷新页面
                    if (a.Data) {
                        alert("退款成功，请到退款记录中查询详情");
                        _this.SendPageActor({ ToPanelName: "", ToModuleName: "TeamPayMentPAGE" }, { success: true });
                    }
                    else {
                        alert("退款失败，请联系管理员");
                    }
                });
                this.closePage();
            };
            return TeamRefundPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        TeamRefundPage.TeamRefundPageVm = TeamRefundPageVm;
        var TeamRefundPageStates = (function (_super) {
            __extends(TeamRefundPageStates, _super);
            function TeamRefundPageStates() {
                _super.apply(this, arguments);
            }
            return TeamRefundPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        TeamRefundPage.TeamRefundPageStates = TeamRefundPageStates;
        var TeamRefundPageProps = (function (_super) {
            __extends(TeamRefundPageProps, _super);
            function TeamRefundPageProps() {
                _super.apply(this, arguments);
            }
            return TeamRefundPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        TeamRefundPage.TeamRefundPageProps = TeamRefundPageProps;
        iocFile.Core.Ioc.Current().RegisterType("TEAMREFUNDPAGE", basewedPageFile.Web.BaseWebPageVm, TeamRefundPageVm);
    })(TeamRefundPage = exports.TeamRefundPage || (exports.TeamRefundPage = {}));
});
