var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react"], function (require, exports, domFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var PersonPaymentSearchFormDom;
    (function (PersonPaymentSearchFormDom) {
        var PersonPaymentSearchFormDomAction = (function (_super) {
            __extends(PersonPaymentSearchFormDomAction, _super);
            function PersonPaymentSearchFormDomAction() {
                _super.apply(this, arguments);
            }
            return PersonPaymentSearchFormDomAction;
        }(domCore.DomAction));
        PersonPaymentSearchFormDom.PersonPaymentSearchFormDomAction = PersonPaymentSearchFormDomAction;
        var PersonPaymentSearchFormDomReact = (function (_super) {
            __extends(PersonPaymentSearchFormDomReact, _super);
            function PersonPaymentSearchFormDomReact() {
                _super.apply(this, arguments);
                this.state = new PersonPaymentSearchFormDomStates();
            }
            PersonPaymentSearchFormDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "YSm-handle clearfix"}, React.createElement("div", {className: "col-lg-6 col-md-6 YSm-search"}, React.createElement("input", {className: "col-lg-11 col-md-10 YSu-border-blue ", type: "text", placeholder: "输入身份证、体检号", onChange: function (a) { _this.props.Vm.ChageSreach(a); }, value: this.props.Vm.SreachName}), React.createElement("a", {className: "col-lg-1 col-md-2 btn btn-primary", onClick: function () { _this.props.Vm.Sreach(); }}, "查询")));
            };
            PersonPaymentSearchFormDomReact.prototype.pComponentDidMount = function () { _super.prototype.pComponentDidMount.call(this); };
            return PersonPaymentSearchFormDomReact;
        }(domCore.DomReact));
        PersonPaymentSearchFormDom.PersonPaymentSearchFormDomReact = PersonPaymentSearchFormDomReact;
        var PersonPaymentSearchFormDomVm = (function (_super) {
            __extends(PersonPaymentSearchFormDomVm, _super);
            function PersonPaymentSearchFormDomVm(config) {
                _super.call(this);
                this.ReactType = PersonPaymentSearchFormDomReact;
                this.SreachName = "";
                if (config) {
                    this.UniId = config.Unid;
                }
            }
            PersonPaymentSearchFormDomVm.prototype.Sreach = function () {
                this.emitAppEvent("Medical/charge/PersonPayment/Search", this.UniId, this.SreachName.trim());
            };
            PersonPaymentSearchFormDomVm.prototype.ChageSreach = function (a) {
                this.SreachName = a.target["value"];
                this.IsMulit = true;
                this.forceUpdate("");
            };
            return PersonPaymentSearchFormDomVm;
        }(domCore.DomVm));
        PersonPaymentSearchFormDom.PersonPaymentSearchFormDomVm = PersonPaymentSearchFormDomVm;
        var PersonPaymentSearchFormDomStates = (function (_super) {
            __extends(PersonPaymentSearchFormDomStates, _super);
            function PersonPaymentSearchFormDomStates() {
                _super.apply(this, arguments);
            }
            return PersonPaymentSearchFormDomStates;
        }(domCore.DomStates));
        PersonPaymentSearchFormDom.PersonPaymentSearchFormDomStates = PersonPaymentSearchFormDomStates;
        var PersonPaymentSearchFormDomProps = (function (_super) {
            __extends(PersonPaymentSearchFormDomProps, _super);
            function PersonPaymentSearchFormDomProps() {
                _super.apply(this, arguments);
            }
            return PersonPaymentSearchFormDomProps;
        }(domCore.DomProps));
        PersonPaymentSearchFormDom.PersonPaymentSearchFormDomProps = PersonPaymentSearchFormDomProps;
    })(PersonPaymentSearchFormDom = exports.PersonPaymentSearchFormDom || (exports.PersonPaymentSearchFormDom = {}));
});
