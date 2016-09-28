var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react"], function (require, exports, domFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var TeamChargeBottomDom;
    (function (TeamChargeBottomDom) {
        var TeamChargeBottomDomAction = (function (_super) {
            __extends(TeamChargeBottomDomAction, _super);
            function TeamChargeBottomDomAction() {
                _super.apply(this, arguments);
            }
            return TeamChargeBottomDomAction;
        }(domCore.DomAction));
        TeamChargeBottomDom.TeamChargeBottomDomAction = TeamChargeBottomDomAction;
        var TeamChargeBottomDomReact = (function (_super) {
            __extends(TeamChargeBottomDomReact, _super);
            function TeamChargeBottomDomReact() {
                _super.apply(this, arguments);
                this.state = new TeamChargeBottomDomStates();
            }
            TeamChargeBottomDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: (this.props.Vm.Is10 ? " col-lg-12 col-md-12 Hg-default-left " : " col-lg-10 col-md-10 ") + "YSm-fixed-bottom"}, React.createElement("div", {className: "col-lg-12 col-md-12 clearfix"}, React.createElement("div", {className: "pull-left"}, React.createElement("span", null, "收费金额", React.createElement("b", null, this.props.Vm.Amount), "元，缴纳费用 ", React.createElement("b", null, React.createElement("input", {type: "text", value: this.props.Vm.Money, onChange: function (a) { _this.props.Vm.textChange(a); }})), "元，应找零", React.createElement("b", null, this.props.Vm.ChageMoney), "元")), React.createElement("div", {className: "pull-right"}, React.createElement("a", {className: "btn btn-danger", onClick: function () { _this.props.Vm.confirmCharge(); }}, "确认收费"))));
            };
            TeamChargeBottomDomReact.prototype.pComponentDidMount = function () { _super.prototype.pComponentDidMount.call(this); };
            return TeamChargeBottomDomReact;
        }(domCore.DomReact));
        TeamChargeBottomDom.TeamChargeBottomDomReact = TeamChargeBottomDomReact;
        var TeamChargeBottomDomVm = (function (_super) {
            __extends(TeamChargeBottomDomVm, _super);
            function TeamChargeBottomDomVm(config) {
                _super.call(this);
                this.ReactType = TeamChargeBottomDomReact;
                this.ChageMoney = "0";
                this.Is10 = window["LeftMenuStatus"];
                if (config) {
                    this.Amount = config.Amount;
                    this.UniId = config.UniId;
                }
                this.listenPageButtom();
            }
            TeamChargeBottomDomVm.prototype.listenPageButtom = function () {
                var _this = this;
                this.listenAppEvent("pageButtom", "page", function (is10) {
                    if (_this.Is10 != is10) {
                        _this.Is10 = is10;
                        _this.forceUpdate("");
                    }
                });
            };
            TeamChargeBottomDomVm.prototype.textChange = function (a) {
                this.Money = a.target["value"];
                try {
                    if (isNaN(parseFloat(this.Money))) {
                        this.ChageMoney = "0";
                    }
                    else {
                        this.ChageMoney = (parseFloat(this.Money) - parseFloat(this.Amount)).toString();
                    }
                }
                catch (e) {
                    this.ChageMoney = "0";
                }
                this.forceUpdate("");
            };
            TeamChargeBottomDomVm.prototype.confirmCharge = function () {
                this.emitAppEvent("medical/Charge/Team", this.UniId);
            };
            return TeamChargeBottomDomVm;
        }(domCore.DomVm));
        TeamChargeBottomDom.TeamChargeBottomDomVm = TeamChargeBottomDomVm;
        var TeamChargeBottomDomStates = (function (_super) {
            __extends(TeamChargeBottomDomStates, _super);
            function TeamChargeBottomDomStates() {
                _super.apply(this, arguments);
            }
            return TeamChargeBottomDomStates;
        }(domCore.DomStates));
        TeamChargeBottomDom.TeamChargeBottomDomStates = TeamChargeBottomDomStates;
        var TeamChargeBottomDomProps = (function (_super) {
            __extends(TeamChargeBottomDomProps, _super);
            function TeamChargeBottomDomProps() {
                _super.apply(this, arguments);
            }
            return TeamChargeBottomDomProps;
        }(domCore.DomProps));
        TeamChargeBottomDom.TeamChargeBottomDomProps = TeamChargeBottomDomProps;
    })(TeamChargeBottomDom = exports.TeamChargeBottomDom || (exports.TeamChargeBottomDom = {}));
});
