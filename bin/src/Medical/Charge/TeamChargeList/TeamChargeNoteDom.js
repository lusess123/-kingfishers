var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "./../../../01core/Url", "react", "./../../../02col/01single/Text"], function (require, exports, domFile, urlFile, React, TextFile) {
    "use strict";
    var domCore = domFile.Core;
    var TeamChargeNoteDom;
    (function (TeamChargeNoteDom) {
        var TeamChargeNoteDomAction = (function (_super) {
            __extends(TeamChargeNoteDomAction, _super);
            function TeamChargeNoteDomAction() {
                _super.apply(this, arguments);
            }
            return TeamChargeNoteDomAction;
        }(domCore.DomAction));
        TeamChargeNoteDom.TeamChargeNoteDomAction = TeamChargeNoteDomAction;
        var TeamChargeNoteDomReact = (function (_super) {
            __extends(TeamChargeNoteDomReact, _super);
            function TeamChargeNoteDomReact() {
                _super.apply(this, arguments);
            }
            TeamChargeNoteDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "YSm-bill"}, React.createElement("div", {className: "form-group  form-inline clearfix"}, React.createElement("label", {className: "form-control-label pull-left"}, "是否需要发票："), React.createElement("div", {className: "form-control-label pull-left"}, React.createElement("div", {className: "radio pull-left"}, React.createElement("label", null, React.createElement("input", {type: "radio", name: "select", value: "1", checked: this.props.Vm.Data.isPrintInvoice == "1" ? "checked" : "", onChange: function (a) { _this.props.Vm.print(a); }}), "是")), React.createElement("div", {className: "radio pull-left"}, React.createElement("label", null, React.createElement("input", {type: "radio", name: "select", value: "0", checked: this.props.Vm.Data.isPrintInvoice == "0" ? "checked" : "", onChange: function (a) { _this.props.Vm.print(a); }}), "否")))), React.createElement("form", {className: "clearfix " + (this.props.Vm.isHide ? " hide " : "")}, React.createElement("div", {className: "col-lg-3 col-md-3 form-group  form-inline clearfix"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label  text-right"}, "发票金额："), React.createElement("div", {className: "col-md-7 col-sm-9"}, this.props.Vm.invoiceAmout.intoDom())), React.createElement("div", {className: "col-lg-3 col-md-3 form-group  form-inline clearfix"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label  text-right"}, "发票类型："), React.createElement("div", {className: "col-md-7 col-sm-9"}, this.props.Vm.invoiceType.intoDom())), React.createElement("div", {className: "col-lg-3 col-md-3 form-group  form-inline clearfix"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label  text-right"}, "发票号："), React.createElement("div", {className: "col-md-7 col-sm-9"}, this.props.Vm.invoiceNum.intoDom())), React.createElement("div", {className: "col-lg-3 col-md-3 form-group  form-inline clearfix"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label  text-right"}, "发票抬头："), React.createElement("div", {className: "col-md-7 col-sm-9"}, this.props.Vm.invoiceTitle.intoDom()))));
                ;
            };
            TeamChargeNoteDomReact.prototype.pComponentDidMount = function () { _super.prototype.pComponentDidMount.call(this); };
            return TeamChargeNoteDomReact;
        }(domCore.DomReact));
        TeamChargeNoteDom.TeamChargeNoteDomReact = TeamChargeNoteDomReact;
        var TeamChargeNoteDomVm = (function (_super) {
            __extends(TeamChargeNoteDomVm, _super);
            function TeamChargeNoteDomVm(config) {
                _super.call(this);
                this.ReactType = TeamChargeNoteDomReact;
                this.isHide = true;
                this.Data = { Amount: "", ChargeId: "", InvoiceType: "", isPrintInvoice: "0", Number: "", Title: "", Type: "" };
                this.invoiceAmout = new TextFile.ui.TextVm();
                this.invoiceType = new TextFile.ui.TextVm();
                this.invoiceNum = new TextFile.ui.TextVm();
                this.invoiceTitle = new TextFile.ui.TextVm();
            }
            TeamChargeNoteDomVm.prototype.print = function (a) {
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
                this.forceUpdate("");
            };
            TeamChargeNoteDomVm.prototype.confirmCharge = function (Fid) {
                //发送请求就可以了
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
            TeamChargeNoteDomVm.prototype.submit = function (Fid) {
                this.Data.ChargeId = Fid;
                this.Data.Amount = this.invoiceAmout.dataValue();
                this.Data.Type = "1"; //团体
                this.Data.Number = this.invoiceNum.dataValue();
                this.Data.Title = this.invoiceTitle.dataValue();
                this.Data.InvoiceType = this.invoiceType.dataValue();
                urlFile.Core.AkPost("/MedicalCenter/InvoiceCharge/AddTeam", { data: JSON.stringify(this.Data) }, function (data) {
                    //跳回原来的页面
                    if (data.Content == "ok") {
                        urlFile.Core.AkUrl.Current().openUrl("$TeamPayMentPAGE$", false);
                    }
                });
            };
            return TeamChargeNoteDomVm;
        }(domCore.DomVm));
        TeamChargeNoteDom.TeamChargeNoteDomVm = TeamChargeNoteDomVm;
        var TeamChargeNoteDomStates = (function (_super) {
            __extends(TeamChargeNoteDomStates, _super);
            function TeamChargeNoteDomStates() {
                _super.apply(this, arguments);
            }
            return TeamChargeNoteDomStates;
        }(domCore.DomStates));
        TeamChargeNoteDom.TeamChargeNoteDomStates = TeamChargeNoteDomStates;
        var TeamChargeNoteDomProps = (function (_super) {
            __extends(TeamChargeNoteDomProps, _super);
            function TeamChargeNoteDomProps() {
                _super.apply(this, arguments);
            }
            return TeamChargeNoteDomProps;
        }(domCore.DomProps));
        TeamChargeNoteDom.TeamChargeNoteDomProps = TeamChargeNoteDomProps;
    })(TeamChargeNoteDom = exports.TeamChargeNoteDom || (exports.TeamChargeNoteDom = {}));
});
