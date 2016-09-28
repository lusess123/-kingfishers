var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react"], function (require, exports, domFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var TeamPayMentRowBtnDom;
    (function (TeamPayMentRowBtnDom) {
        var TeamPayMentRowBtnDomAction = (function (_super) {
            __extends(TeamPayMentRowBtnDomAction, _super);
            function TeamPayMentRowBtnDomAction() {
                _super.apply(this, arguments);
            }
            return TeamPayMentRowBtnDomAction;
        }(domCore.DomAction));
        TeamPayMentRowBtnDom.TeamPayMentRowBtnDomAction = TeamPayMentRowBtnDomAction;
        var TeamPayMentRowBtnDomReact = (function (_super) {
            __extends(TeamPayMentRowBtnDomReact, _super);
            function TeamPayMentRowBtnDomReact() {
                _super.apply(this, arguments);
                this.state = new TeamPayMentRowBtnDomStates();
            }
            TeamPayMentRowBtnDomReact.prototype.pSender = function () {
                return React.createElement("div", {className: "YSm-table-btngroup"}, React.createElement("a", {className: "btn btn-sm btn-danger"}, "￥缴费"), React.createElement("a", {className: "btn btn-sm btn-secondary"}, "团体退款"), React.createElement("div", {className: "btn-group btn-group-sm"}, React.createElement("a", {type: "button", className: "btn btn-primary-outline"}, "删除")));
            };
            TeamPayMentRowBtnDomReact.prototype.pComponentDidMount = function () { _super.prototype.pComponentDidMount.call(this); };
            return TeamPayMentRowBtnDomReact;
        }(domCore.DomReact));
        TeamPayMentRowBtnDom.TeamPayMentRowBtnDomReact = TeamPayMentRowBtnDomReact;
        var TeamPayMentRowBtnDomVm = (function (_super) {
            __extends(TeamPayMentRowBtnDomVm, _super);
            function TeamPayMentRowBtnDomVm(config) {
                _super.call(this);
                this.ReactType = TeamPayMentRowBtnDomReact;
                if (config) {
                    this.UniId = config.UniId;
                }
            }
            return TeamPayMentRowBtnDomVm;
        }(domCore.DomVm));
        TeamPayMentRowBtnDom.TeamPayMentRowBtnDomVm = TeamPayMentRowBtnDomVm;
        var TeamPayMentRowBtnDomStates = (function (_super) {
            __extends(TeamPayMentRowBtnDomStates, _super);
            function TeamPayMentRowBtnDomStates() {
                _super.apply(this, arguments);
            }
            return TeamPayMentRowBtnDomStates;
        }(domCore.DomStates));
        TeamPayMentRowBtnDom.TeamPayMentRowBtnDomStates = TeamPayMentRowBtnDomStates;
        var TeamPayMentRowBtnDomProps = (function (_super) {
            __extends(TeamPayMentRowBtnDomProps, _super);
            function TeamPayMentRowBtnDomProps() {
                _super.apply(this, arguments);
            }
            return TeamPayMentRowBtnDomProps;
        }(domCore.DomProps));
        TeamPayMentRowBtnDom.TeamPayMentRowBtnDomProps = TeamPayMentRowBtnDomProps;
    })(TeamPayMentRowBtnDom = exports.TeamPayMentRowBtnDom || (exports.TeamPayMentRowBtnDom = {}));
});
