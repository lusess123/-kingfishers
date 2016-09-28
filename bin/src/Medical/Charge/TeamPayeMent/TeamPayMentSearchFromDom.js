var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react"], function (require, exports, domFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var TeamPayMentSearchFormDom;
    (function (TeamPayMentSearchFormDom) {
        var TeamPayMentSearchFormDomAction = (function (_super) {
            __extends(TeamPayMentSearchFormDomAction, _super);
            function TeamPayMentSearchFormDomAction() {
                _super.apply(this, arguments);
            }
            return TeamPayMentSearchFormDomAction;
        }(domCore.DomAction));
        TeamPayMentSearchFormDom.TeamPayMentSearchFormDomAction = TeamPayMentSearchFormDomAction;
        var TeamPayMentSearchFormDomReact = (function (_super) {
            __extends(TeamPayMentSearchFormDomReact, _super);
            function TeamPayMentSearchFormDomReact() {
                _super.apply(this, arguments);
                this.state = new TeamPayMentSearchFormDomStates();
            }
            TeamPayMentSearchFormDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "YSm-handle clearfix"}, React.createElement("div", {className: "col-lg-6 col-md-6 YSm-search"}, React.createElement("input", {className: "col-lg-11 col-md-10 YSu-border-blue ", type: this.props.Vm.SreachName, onChange: function (a) { _this.props.Vm.ChageSreach(a); }, placeholder: "输入组织名称或者编号"}), React.createElement("a", {className: "col-lg-1 col-md-2 btn btn-primary", onClick: function () {
                    _this.props.Vm.Sreach();
                }}, "查询")));
            };
            TeamPayMentSearchFormDomReact.prototype.pComponentDidMount = function () { _super.prototype.pComponentDidMount.call(this); };
            return TeamPayMentSearchFormDomReact;
        }(domCore.DomReact));
        TeamPayMentSearchFormDom.TeamPayMentSearchFormDomReact = TeamPayMentSearchFormDomReact;
        var TeamPayMentSearchFormDomVm = (function (_super) {
            __extends(TeamPayMentSearchFormDomVm, _super);
            function TeamPayMentSearchFormDomVm(config) {
                _super.call(this);
                this.ReactType = TeamPayMentSearchFormDomReact;
                this.SreachName = "";
                if (config) {
                    this.UniId = config.Unid;
                }
            }
            TeamPayMentSearchFormDomVm.prototype.ChageSreach = function (a) {
                this.SreachName = a.target["value"];
                this.IsMulit = true;
                this.forceUpdate("");
            };
            TeamPayMentSearchFormDomVm.prototype.Sreach = function () {
                this.emitAppEvent("Medical/charge/TeamPayment/Search", this.UniId, this.SreachName.trim());
            };
            return TeamPayMentSearchFormDomVm;
        }(domCore.DomVm));
        TeamPayMentSearchFormDom.TeamPayMentSearchFormDomVm = TeamPayMentSearchFormDomVm;
        var TeamPayMentSearchFormDomStates = (function (_super) {
            __extends(TeamPayMentSearchFormDomStates, _super);
            function TeamPayMentSearchFormDomStates() {
                _super.apply(this, arguments);
            }
            return TeamPayMentSearchFormDomStates;
        }(domCore.DomStates));
        TeamPayMentSearchFormDom.TeamPayMentSearchFormDomStates = TeamPayMentSearchFormDomStates;
        var TeamPayMentSearchFormDomProps = (function (_super) {
            __extends(TeamPayMentSearchFormDomProps, _super);
            function TeamPayMentSearchFormDomProps() {
                _super.apply(this, arguments);
            }
            return TeamPayMentSearchFormDomProps;
        }(domCore.DomProps));
        TeamPayMentSearchFormDom.TeamPayMentSearchFormDomProps = TeamPayMentSearchFormDomProps;
    })(TeamPayMentSearchFormDom = exports.TeamPayMentSearchFormDom || (exports.TeamPayMentSearchFormDom = {}));
});
