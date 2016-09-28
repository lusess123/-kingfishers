var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/Ioc", "./../../../01core/Url", "./../../../04page/BaseWebPage", "react", "./../../../02col/01single/Text"], function (require, exports, iocFile, urlFile, basewedPageFile, React, textFile) {
    "use strict";
    var PersonrefundPage;
    (function (PersonrefundPage) {
        var PersonrefundPageAction = (function (_super) {
            __extends(PersonrefundPageAction, _super);
            function PersonrefundPageAction() {
                _super.apply(this, arguments);
            }
            return PersonrefundPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        PersonrefundPage.PersonrefundPageAction = PersonrefundPageAction;
        var PersonrefundPageReact = (function (_super) {
            __extends(PersonrefundPageReact, _super);
            function PersonrefundPageReact() {
                _super.apply(this, arguments);
                this.state = new PersonrefundPageStates();
            }
            PersonrefundPageReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "p-a-lg Hg-w60 Hg-m-auto"}, React.createElement("div", {className: "form-group form-inline clearfix"}, React.createElement("label", {className: "col-md-4 col-sm-3  form-control-label text-right"}, "退款原因："), React.createElement("div", {className: "col-md-7 col-sm-9 "}, this._tDom(this.props.Vm.RefundReason))), React.createElement("div", null, React.createElement("label", {className: "col-md-4 col-sm-3  form-control-label text-right"}, "退款金额："), React.createElement("div", {className: "col-md-7 col-sm-9 "}, this._tDom(this.props.Vm.RefundAmount))), React.createElement("div", {className: "m-t text-center"}, React.createElement("a", {className: "btn  btn-sm  btn-primary", onClick: function () { _this.props.Vm.refund(); }}, "确定退款")));
            };
            return PersonrefundPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        PersonrefundPage.PersonrefundPageReact = PersonrefundPageReact;
        var PersonrefundPageVm = (function (_super) {
            __extends(PersonrefundPageVm, _super);
            function PersonrefundPageVm(config) {
                _super.call(this);
                this.ReactType = PersonrefundPageReact;
                this.RefundReason = new textFile.ui.TextVm();
            }
            PersonrefundPageVm.prototype.refund = function () {
                var _this = this;
                this.submitData = { ChargeFID: this.data.FID, ExamNumber: this.data.ExamNumber, RefundAmount: this.data.ReceiveAmount, RefundReason: this.RefundReason.dataValueGet() };
                //this.submitData.ChargeFID = this.data.FID;
                //this.submitData.ExamNumber = this.data.ExamNumber;
                //this.submitData.RefundAmount = this.data.ReceiveAmount;
                //this.submitData.RefundReason = this.RefundReason.dataValueGet();
                urlFile.Core.AkPost("/MedicalCenter/MemberCharge/MemberRefund", { data: JSON.stringify(this.submitData) }, function (a) {
                    if (a.Data) {
                        alert("退款成功，请到退款记录中查询详情");
                        _this.SendPageActor({ ToPanelName: "", ToModuleName: "PERSONPAYMENTPAGE" }, { success: true });
                    }
                    else {
                        alert("退款失败，请联系管理员");
                    }
                });
                this.closePage();
            };
            PersonrefundPageVm.prototype.init = function (config) { };
            PersonrefundPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                urlFile.Core.AkPost("/MedicalCenter/MemberCharge/GetMemberRefund", { fid: this.Param1 }, function (a) {
                    _this.data = a.Data;
                    _this.RefundAmount = new textFile.ui.TextVm();
                    _this.RefundAmount.dataValueSet(_this.data.ReceiveAmount);
                    if (callback) {
                        callback();
                    }
                });
            };
            return PersonrefundPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        PersonrefundPage.PersonrefundPageVm = PersonrefundPageVm;
        var PersonrefundPageStates = (function (_super) {
            __extends(PersonrefundPageStates, _super);
            function PersonrefundPageStates() {
                _super.apply(this, arguments);
            }
            return PersonrefundPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        PersonrefundPage.PersonrefundPageStates = PersonrefundPageStates;
        var PersonrefundPageProps = (function (_super) {
            __extends(PersonrefundPageProps, _super);
            function PersonrefundPageProps() {
                _super.apply(this, arguments);
            }
            return PersonrefundPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        PersonrefundPage.PersonrefundPageProps = PersonrefundPageProps;
        iocFile.Core.Ioc.Current().RegisterType("PERSONREFUNDPAGE", basewedPageFile.Web.BaseWebPageVm, PersonrefundPageVm);
    })(PersonrefundPage = exports.PersonrefundPage || (exports.PersonrefundPage = {}));
});
