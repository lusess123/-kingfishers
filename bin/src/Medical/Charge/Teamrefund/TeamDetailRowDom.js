var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react"], function (require, exports, domFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var TeamDetailRowDom;
    (function (TeamDetailRowDom) {
        var TeamDetailRowDomAction = (function (_super) {
            __extends(TeamDetailRowDomAction, _super);
            function TeamDetailRowDomAction() {
                _super.apply(this, arguments);
            }
            return TeamDetailRowDomAction;
        }(domCore.DomAction));
        TeamDetailRowDom.TeamDetailRowDomAction = TeamDetailRowDomAction;
        var TeamDetailRowDomReact = (function (_super) {
            __extends(TeamDetailRowDomReact, _super);
            function TeamDetailRowDomReact() {
                _super.apply(this, arguments);
                this.state = new TeamDetailRowDomStates();
            }
            TeamDetailRowDomReact.prototype.pSender = function () {
                return React.createElement("tr", null, React.createElement("td", null, this.props.Vm.Data.MemberName), React.createElement("td", null, this.props.Vm.Data.GroupName), React.createElement("td", null, this.props.Vm.Data.ExamNumber), React.createElement("td", null, this.Send(this.props.Vm.Data.status)));
            };
            TeamDetailRowDomReact.prototype.Send = function (num) {
                switch (num) {
                    case null:
                    case "0": return React.createElement("span", {className: "label label-warning"}, "未检");
                    case "1": return React.createElement("span", {className: "label label-warning"}, "已预约");
                    case "2": return React.createElement("span", {className: "label label-warning"}, "未缴费");
                    case "3": return React.createElement("span", {className: "label label-warning"}, "未开始");
                    case "4": return React.createElement("span", {className: "label label-warning"}, "体检中");
                    case "5": return React.createElement("span", {className: "label label-warning"}, "待总检");
                    case "6": return React.createElement("span", {className: "label label-warning"}, "已总检");
                    case "7": return React.createElement("span", {className: "label label-default"}, "已退款");
                    case "8": return React.createElement("span", {className: "label label-default"}, "已审查");
                }
            };
            TeamDetailRowDomReact.prototype.pComponentDidMount = function () { _super.prototype.pComponentDidMount.call(this); };
            return TeamDetailRowDomReact;
        }(domCore.DomReact));
        TeamDetailRowDom.TeamDetailRowDomReact = TeamDetailRowDomReact;
        var TeamDetailRowDomVm = (function (_super) {
            __extends(TeamDetailRowDomVm, _super);
            function TeamDetailRowDomVm(config) {
                _super.call(this);
                this.ReactType = TeamDetailRowDomReact;
                if (config) {
                    this.Data = config.Data;
                }
            }
            return TeamDetailRowDomVm;
        }(domCore.DomVm));
        TeamDetailRowDom.TeamDetailRowDomVm = TeamDetailRowDomVm;
        var TeamDetailRowDomStates = (function (_super) {
            __extends(TeamDetailRowDomStates, _super);
            function TeamDetailRowDomStates() {
                _super.apply(this, arguments);
            }
            return TeamDetailRowDomStates;
        }(domCore.DomStates));
        TeamDetailRowDom.TeamDetailRowDomStates = TeamDetailRowDomStates;
        var TeamDetailRowDomProps = (function (_super) {
            __extends(TeamDetailRowDomProps, _super);
            function TeamDetailRowDomProps() {
                _super.apply(this, arguments);
            }
            return TeamDetailRowDomProps;
        }(domCore.DomProps));
        TeamDetailRowDom.TeamDetailRowDomProps = TeamDetailRowDomProps;
    })(TeamDetailRowDom = exports.TeamDetailRowDom || (exports.TeamDetailRowDom = {}));
});
