var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "./../../../01core/Url", "react"], function (require, exports, domFile, urlFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var PersonPaymentRowBtnDom;
    (function (PersonPaymentRowBtnDom) {
        var PersonPaymentRowBtnDomAction = (function (_super) {
            __extends(PersonPaymentRowBtnDomAction, _super);
            function PersonPaymentRowBtnDomAction() {
                _super.apply(this, arguments);
            }
            return PersonPaymentRowBtnDomAction;
        }(domCore.DomAction));
        PersonPaymentRowBtnDom.PersonPaymentRowBtnDomAction = PersonPaymentRowBtnDomAction;
        var PersonPaymentRowBtnDomReact = (function (_super) {
            __extends(PersonPaymentRowBtnDomReact, _super);
            function PersonPaymentRowBtnDomReact() {
                _super.apply(this, arguments);
                this.state = new PersonPaymentRowBtnDomStates();
            }
            PersonPaymentRowBtnDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "YSm-table-btngroup"}, React.createElement("a", {className: "btn btn-sm btn-danger", onClick: function () { _this.props.Vm.payment(); }}, "￥缴费"), React.createElement("div", {className: "btn-group btn-group-sm"}, React.createElement("a", {className: "btn btn-primary-outline"}, "删除")), React.createElement("div", {className: "btn-group btn-group-sm"}, React.createElement("a", {className: "btn btn-primary-outline"}, "个人退款")));
            };
            PersonPaymentRowBtnDomReact.prototype.pComponentDidMount = function () { _super.prototype.pComponentDidMount.call(this); };
            return PersonPaymentRowBtnDomReact;
        }(domCore.DomReact));
        PersonPaymentRowBtnDom.PersonPaymentRowBtnDomReact = PersonPaymentRowBtnDomReact;
        var PersonPaymentRowBtnDomVm = (function (_super) {
            __extends(PersonPaymentRowBtnDomVm, _super);
            function PersonPaymentRowBtnDomVm(config) {
                _super.call(this);
                this.ReactType = PersonPaymentRowBtnDomReact;
            }
            PersonPaymentRowBtnDomVm.prototype.payment = function () {
                urlFile.Core.AkUrl.Current().openUrl("$PERSONCHARGEPAGE$", true);
            };
            PersonPaymentRowBtnDomVm.prototype.refund = function () {
            };
            return PersonPaymentRowBtnDomVm;
        }(domCore.DomVm));
        PersonPaymentRowBtnDom.PersonPaymentRowBtnDomVm = PersonPaymentRowBtnDomVm;
        var PersonPaymentRowBtnDomStates = (function (_super) {
            __extends(PersonPaymentRowBtnDomStates, _super);
            function PersonPaymentRowBtnDomStates() {
                _super.apply(this, arguments);
            }
            return PersonPaymentRowBtnDomStates;
        }(domCore.DomStates));
        PersonPaymentRowBtnDom.PersonPaymentRowBtnDomStates = PersonPaymentRowBtnDomStates;
        var PersonPaymentRowBtnDomProps = (function (_super) {
            __extends(PersonPaymentRowBtnDomProps, _super);
            function PersonPaymentRowBtnDomProps() {
                _super.apply(this, arguments);
            }
            return PersonPaymentRowBtnDomProps;
        }(domCore.DomProps));
        PersonPaymentRowBtnDom.PersonPaymentRowBtnDomProps = PersonPaymentRowBtnDomProps;
    })(PersonPaymentRowBtnDom = exports.PersonPaymentRowBtnDom || (exports.PersonPaymentRowBtnDom = {}));
});
