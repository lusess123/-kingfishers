var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react", "./../../../02col/02Mulite/SingleCheckBox"], function (require, exports, domFile, React, singleCheckFile) {
    "use strict";
    var domCore = domFile.Core;
    var PersonPaymentRowDom;
    (function (PersonPaymentRowDom) {
        var PersonPaymentRowDomAction = (function (_super) {
            __extends(PersonPaymentRowDomAction, _super);
            function PersonPaymentRowDomAction() {
                _super.apply(this, arguments);
            }
            return PersonPaymentRowDomAction;
        }(domCore.DomAction));
        PersonPaymentRowDom.PersonPaymentRowDomAction = PersonPaymentRowDomAction;
        var PersonPaymentRowDomReact = (function (_super) {
            __extends(PersonPaymentRowDomReact, _super);
            function PersonPaymentRowDomReact() {
                _super.apply(this, arguments);
                this.state = new PersonPaymentRowDomStates();
            }
            PersonPaymentRowDomReact.prototype.pSender = function () {
                return React.createElement("tr", {className: this.props.Vm.data.isSelect == "1" ? " Hs-tr-checked" : ""}, React.createElement("td", null, this.props.Vm.AllCheck.intoDom(), React.createElement("span", null, this.props.Vm.RowNumber)), React.createElement("td", null, this.props.Vm.data.MemberName), React.createElement("td", null, this.props.Vm.data.ExamDate), React.createElement("td", null, this.props.Vm.data.ChargeTime), React.createElement("td", {className: "text-right"}, this.props.Vm.data.ReceivableAmount), React.createElement("td", null, this.props.Vm.data.UnitName), React.createElement("td", null, this.Sender(this.props.Vm.data.ChargeStatus)));
            };
            PersonPaymentRowDomReact.prototype.Sender = function (num) {
                switch (num) {
                    case "2": return React.createElement("span", {className: "label label-default"}, "已退费");
                    case "1": return React.createElement("span", {className: "label label-default"}, "已缴费");
                    case "0": return React.createElement("span", {className: "label label-warning"}, "待缴费");
                    default: "";
                }
            };
            PersonPaymentRowDomReact.prototype.pComponentDidMount = function () { _super.prototype.pComponentDidMount.call(this); };
            return PersonPaymentRowDomReact;
        }(domCore.DomReact));
        PersonPaymentRowDom.PersonPaymentRowDomReact = PersonPaymentRowDomReact;
        var PersonPaymentRowDomVm = (function (_super) {
            __extends(PersonPaymentRowDomVm, _super);
            function PersonPaymentRowDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = PersonPaymentRowDomReact;
                this.RowNumber = config.number.toString();
                this.AllCheck = new singleCheckFile.ui.SingleCheckBoxVm();
                if (config) {
                    this.data = config.data;
                    this.UniId = config.Unid;
                }
                this.data.isSelect == undefined || this.data.isSelect == "0" ? this.AllCheck.dataValue("false") : this.AllCheck.dataValue("true");
                this.AllCheck.ChangeEventFun = function (val, col) {
                    if (val == "true") {
                        _this.data.isSelect = "1";
                    }
                    else if (val == "false") {
                        _this.data.isSelect = "0";
                    }
                    _this.emitAppEvent("medical/personpayment/Row", _this.UniId);
                    return true;
                };
            }
            return PersonPaymentRowDomVm;
        }(domCore.DomVm));
        PersonPaymentRowDom.PersonPaymentRowDomVm = PersonPaymentRowDomVm;
        var PersonPaymentRowDomStates = (function (_super) {
            __extends(PersonPaymentRowDomStates, _super);
            function PersonPaymentRowDomStates() {
                _super.apply(this, arguments);
            }
            return PersonPaymentRowDomStates;
        }(domCore.DomStates));
        PersonPaymentRowDom.PersonPaymentRowDomStates = PersonPaymentRowDomStates;
        var PersonPaymentRowDomProps = (function (_super) {
            __extends(PersonPaymentRowDomProps, _super);
            function PersonPaymentRowDomProps() {
                _super.apply(this, arguments);
            }
            return PersonPaymentRowDomProps;
        }(domCore.DomProps));
        PersonPaymentRowDom.PersonPaymentRowDomProps = PersonPaymentRowDomProps;
    })(PersonPaymentRowDom = exports.PersonPaymentRowDom || (exports.PersonPaymentRowDom = {}));
});
