var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "./../../../01core/Url", "react", "./../../../02col/01single/Text"], function (require, exports, domFile, urlFile, React, TextFile) {
    "use strict";
    var domCore = domFile.Core;
    var PersonChargeNoteDom;
    (function (PersonChargeNoteDom) {
        var PersonChargeNoteDomAction = (function (_super) {
            __extends(PersonChargeNoteDomAction, _super);
            function PersonChargeNoteDomAction() {
                _super.apply(this, arguments);
            }
            return PersonChargeNoteDomAction;
        }(domCore.DomAction));
        PersonChargeNoteDom.PersonChargeNoteDomAction = PersonChargeNoteDomAction;
        var PersonChargeNoteDomReact = (function (_super) {
            __extends(PersonChargeNoteDomReact, _super);
            function PersonChargeNoteDomReact() {
                _super.apply(this, arguments);
                this.state = new PersonChargeNoteDomStates();
            }
            PersonChargeNoteDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "YSm-bill"}, React.createElement("div", {className: "form-group  form-inline clearfix"}, React.createElement("label", {className: "form-control-label pull-left"}, "是否需要发票："), React.createElement("div", {className: "form-control-label pull-left"}, React.createElement("div", {className: "radio pull-left"}, React.createElement("label", null, React.createElement("input", {type: "radio", value: "1", name: "select", checked: this.props.Vm.Data.isPrintInvoice == "1" ? "checked" : "", onChange: function (a) { _this.props.Vm.print(a); }}), "是")), React.createElement("div", {className: "radio pull-left"}, React.createElement("label", null, React.createElement("input", {type: "radio", value: "0", name: "select", checked: this.props.Vm.Data.isPrintInvoice == "0" ? "checked" : "", onChange: function (a) { _this.props.Vm.print(a); }}), "否")))), React.createElement("form", {className: " clearfix " + (this.props.Vm.isHide ? " hide " : "")}, React.createElement("div", {className: "col-lg-3 col-md-3 form-group  form-inline clearfix"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label  text-right"}, "发票金额："), React.createElement("div", {className: "col-md-7 col-sm-9"}, this.props.Vm.invoiceAmout.intoDom())), React.createElement("div", {className: "col-lg-3 col-md-3 form-group  form-inline clearfix"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label  text-right"}, "发票类型："), React.createElement("div", {className: "col-md-7 col-sm-9"}, this.props.Vm.invoiceType.intoDom())), React.createElement("div", {className: "col-lg-3 col-md-3 form-group  form-inline clearfix"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label  text-right"}, "发票号："), React.createElement("div", {className: "col-md-7 col-sm-9"}, this.props.Vm.invoiceNum.intoDom())), React.createElement("div", {className: "col-lg-3 col-md-3 form-group  form-inline clearfix"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label  text-right"}, "发票抬头："), React.createElement("div", {className: "col-md-7 col-sm-9"}, this.props.Vm.invoiceTitle.intoDom()))));
            };
            PersonChargeNoteDomReact.prototype.pComponentDidMount = function () { _super.prototype.pComponentDidMount.call(this); };
            return PersonChargeNoteDomReact;
        }(domCore.DomReact));
        PersonChargeNoteDom.PersonChargeNoteDomReact = PersonChargeNoteDomReact;
        var PersonChargeNoteDomVm = (function (_super) {
            __extends(PersonChargeNoteDomVm, _super);
            function PersonChargeNoteDomVm(config) {
                _super.call(this);
                this.ReactType = PersonChargeNoteDomReact;
                this.isHide = true;
                this.invoiceAmout = new TextFile.ui.TextVm();
                this.invoiceType = new TextFile.ui.TextVm();
                this.invoiceNum = new TextFile.ui.TextVm();
                this.invoiceTitle = new TextFile.ui.TextVm();
                this.Data = { Amount: "", ChargeId: "", InvoiceType: "", isPrintInvoice: "0", Number: "", Title: "", Type: "" };
            }
            PersonChargeNoteDomVm.prototype.print = function (a) {
                this.Data.isPrintInvoice = a.target["value"];
                if (a.target["value"] == "1") {
                    this.isHide = false;
                    this.invoiceTitle.LegalObj.Kind = "notNull";
                    this.invoiceNum.LegalObj.Kind = "notNull";
                    this.invoiceType.LegalObj.Kind = "notNull";
                    this.invoiceAmout.LegalObj.Kind = "notNull";
                }
                else if (a.target["value"] == "0") {
                    this.isHide = true;
                }
                //this.isHide = this.isHide;
                this.IsMulit = true;
                this.forceUpdate("");
            };
            PersonChargeNoteDomVm.prototype.confirmCharge = function (Fid) {
                if (this.isHide) {
                    this.submit(Fid);
                }
                else {
                    this.invoiceTitle.legal();
                    this.invoiceNum.legal();
                    this.invoiceType.legal();
                    this.invoiceAmout.legal();
                    if (this.invoiceTitle.legal() && this.invoiceNum.legal() && this.invoiceType.legal() && this.invoiceAmout.legal()) {
                        this.submit(Fid);
                    }
                }
            };
            PersonChargeNoteDomVm.prototype.submit = function (Fid) {
                this.Data.ChargeId = Fid;
                this.Data.Amount = this.invoiceAmout.dataValue();
                this.Data.Type = "0"; //个人
                this.Data.Number = this.invoiceNum.dataValue();
                this.Data.Title = this.invoiceTitle.dataValue();
                this.Data.InvoiceType = this.invoiceType.dataValue();
                urlFile.Core.AkPost("/MedicalCenter/InvoiceCharge/AddMenber", { data: JSON.stringify(this.Data) }, function (data) {
                    //跳回原来的页面
                    if (data.Content == "ok") {
                        urlFile.Core.AkUrl.Current().openUrl("$PERSONPAYMENTPAGE$", false);
                    }
                });
            };
            return PersonChargeNoteDomVm;
        }(domCore.DomVm));
        PersonChargeNoteDom.PersonChargeNoteDomVm = PersonChargeNoteDomVm;
        var PersonChargeNoteDomStates = (function (_super) {
            __extends(PersonChargeNoteDomStates, _super);
            function PersonChargeNoteDomStates() {
                _super.apply(this, arguments);
            }
            return PersonChargeNoteDomStates;
        }(domCore.DomStates));
        PersonChargeNoteDom.PersonChargeNoteDomStates = PersonChargeNoteDomStates;
        var PersonChargeNoteDomProps = (function (_super) {
            __extends(PersonChargeNoteDomProps, _super);
            function PersonChargeNoteDomProps() {
                _super.apply(this, arguments);
            }
            return PersonChargeNoteDomProps;
        }(domCore.DomProps));
        PersonChargeNoteDom.PersonChargeNoteDomProps = PersonChargeNoteDomProps;
    })(PersonChargeNoteDom = exports.PersonChargeNoteDom || (exports.PersonChargeNoteDom = {}));
});
