var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react"], function (require, exports, domFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var PersonChargeBottomDom;
    (function (PersonChargeBottomDom) {
        var PersonChargeBottomDomAction = (function (_super) {
            __extends(PersonChargeBottomDomAction, _super);
            function PersonChargeBottomDomAction() {
                _super.apply(this, arguments);
            }
            return PersonChargeBottomDomAction;
        }(domCore.DomAction));
        PersonChargeBottomDom.PersonChargeBottomDomAction = PersonChargeBottomDomAction;
        var PersonChargeBottomDomReact = (function (_super) {
            __extends(PersonChargeBottomDomReact, _super);
            function PersonChargeBottomDomReact() {
                _super.apply(this, arguments);
                this.state = new PersonChargeBottomDomStates();
            }
            PersonChargeBottomDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: (this.props.Vm.Is10 ? " col-lg-12 col-md-12 Hg-default-left " : " col-lg-10 col-md-10 ") + "YSm-fixed-bottom"}, React.createElement("div", {className: "col-lg-12 col-md-12 clearfix"}, React.createElement("div", {className: "pull-left"}, React.createElement("span", null, "收费金额", React.createElement("b", null, this.props.Vm.Amout), "元，缴纳费用 ", React.createElement("b", null, React.createElement("input", {type: "text", value: this.props.Vm.Money, onChange: function (a) { _this.props.Vm.textChange(a); }})), "元，应找零", React.createElement("b", null, this.props.Vm.ChageMoney), "元")), React.createElement("div", {className: "pull-right"}, React.createElement("a", {className: "btn btn-danger", onClick: function () { _this.props.Vm.ConfirmCharge(); }}, "确认收费"))));
            };
            PersonChargeBottomDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return PersonChargeBottomDomReact;
        }(domCore.DomReact));
        PersonChargeBottomDom.PersonChargeBottomDomReact = PersonChargeBottomDomReact;
        var PersonChargeBottomDomVm = (function (_super) {
            __extends(PersonChargeBottomDomVm, _super);
            function PersonChargeBottomDomVm(config) {
                _super.call(this);
                this.ReactType = PersonChargeBottomDomReact;
                this.Amout = "0";
                this.Is10 = window["LeftMenuStatus"];
                this.ChageMoney = "0";
                if (config) {
                    this.Amout = config.Amout;
                    this.UniId = config.UniId;
                }
                this.listenPageButtom();
            }
            PersonChargeBottomDomVm.prototype.listenPageButtom = function () {
                var _this = this;
                this.listenAppEvent("pageButtom", "page", function (is10) {
                    if (_this.Is10 != is10) {
                        _this.Is10 = is10;
                        _this.forceUpdate("");
                    }
                });
            };
            PersonChargeBottomDomVm.prototype.ConfirmCharge = function () {
                this.emitAppEvent("medical/Charge/PersonChargeBottomDom", this.UniId);
            };
            PersonChargeBottomDomVm.prototype.textChange = function (a) {
                this.Money = a.target["value"];
                try {
                    if (isNaN(parseFloat(this.Money))) {
                        this.ChageMoney = "0";
                    }
                    else {
                        this.ChageMoney = (parseFloat(this.Money) - parseFloat(this.Amout)).toString();
                    }
                }
                catch (e) {
                    this.ChageMoney = "0";
                }
                this.forceUpdate("");
            };
            return PersonChargeBottomDomVm;
        }(domCore.DomVm));
        PersonChargeBottomDom.PersonChargeBottomDomVm = PersonChargeBottomDomVm;
        var PersonChargeBottomDomStates = (function (_super) {
            __extends(PersonChargeBottomDomStates, _super);
            function PersonChargeBottomDomStates() {
                _super.apply(this, arguments);
            }
            return PersonChargeBottomDomStates;
        }(domCore.DomStates));
        PersonChargeBottomDom.PersonChargeBottomDomStates = PersonChargeBottomDomStates;
        var PersonChargeBottomDomProps = (function (_super) {
            __extends(PersonChargeBottomDomProps, _super);
            function PersonChargeBottomDomProps() {
                _super.apply(this, arguments);
            }
            return PersonChargeBottomDomProps;
        }(domCore.DomProps));
        PersonChargeBottomDom.PersonChargeBottomDomProps = PersonChargeBottomDomProps;
    })(PersonChargeBottomDom = exports.PersonChargeBottomDom || (exports.PersonChargeBottomDom = {}));
});
