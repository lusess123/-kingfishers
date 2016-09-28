var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react", "./../../../02col/02Mulite/SingleCheckBox"], function (require, exports, domFile, React, singleCheckFile) {
    "use strict";
    var domCore = domFile.Core;
    var TeamPayMentRowDom;
    (function (TeamPayMentRowDom) {
        var TeamPayMentRowDomAction = (function (_super) {
            __extends(TeamPayMentRowDomAction, _super);
            function TeamPayMentRowDomAction() {
                _super.apply(this, arguments);
            }
            return TeamPayMentRowDomAction;
        }(domCore.DomAction));
        TeamPayMentRowDom.TeamPayMentRowDomAction = TeamPayMentRowDomAction;
        var TeamPayMentRowDomReact = (function (_super) {
            __extends(TeamPayMentRowDomReact, _super);
            function TeamPayMentRowDomReact() {
                _super.apply(this, arguments);
                this.state = new TeamPayMentRowDomStates();
            }
            TeamPayMentRowDomReact.prototype.pSender = function () {
                return React.createElement("tr", {className: this.props.Vm.data.isSelect == "1" ? " Hs-tr-checked" : ""}, React.createElement("td", null, this.props.Vm.AllCheck.intoDom(), React.createElement("span", null, this.props.Vm.RowNumber)), React.createElement("td", null, this.props.Vm.data.Bath), React.createElement("td", null, this.props.Vm.data.ExamDate), React.createElement("td", null, this.props.Vm.data.ChargeTime), React.createElement("td", {className: "text-right"}, this.props.Vm.data.ReceivableAmount), React.createElement("td", null, this.props.Vm.data.UnitName), React.createElement("td", null, this.Sender(this.props.Vm.data.ChargeStatus)));
            };
            //      <td>{this.ExamSender(this.props.Vm.data.ExamStatus) }</td>
            TeamPayMentRowDomReact.prototype.Sender = function (num) {
                switch (num) {
                    case "2": return React.createElement("span", {className: "label label-default"}, "已退费");
                    case "1": return React.createElement("span", {className: "label label-default"}, "已缴费");
                    case "0": return React.createElement("span", {className: "label label-warning"}, "待缴费");
                    default: "";
                }
            };
            TeamPayMentRowDomReact.prototype.ExamSender = function (num) {
                switch (num) {
                    case "4": return React.createElement("span", {className: "label label-default"}, "正在体检");
                    case "5": return React.createElement("span", {className: "label label-default"}, "待总检");
                    case "6": return React.createElement("span", {className: "label label-warning"}, "已总检");
                    case "6": return React.createElement("span", {className: "label label-warning"}, "已审查");
                    default: return React.createElement("span", {className: "label label-warning"}, "未完成");
                }
            };
            TeamPayMentRowDomReact.prototype.pComponentDidMount = function () { _super.prototype.pComponentDidMount.call(this); };
            return TeamPayMentRowDomReact;
        }(domCore.DomReact));
        TeamPayMentRowDom.TeamPayMentRowDomReact = TeamPayMentRowDomReact;
        var TeamPayMentRowDomVm = (function (_super) {
            __extends(TeamPayMentRowDomVm, _super);
            function TeamPayMentRowDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = TeamPayMentRowDomReact;
                this.data = config.data;
                this.UniId = config.Unid;
                this.RowNumber = config.number.toString();
                this.AllCheck = new singleCheckFile.ui.SingleCheckBoxVm();
                this.data.isSelect == undefined || this.data.isSelect == "0" ? this.AllCheck.dataValue("false") : this.AllCheck.dataValue("true");
                this.AllCheck.ChangeEventFun = function (val, col) {
                    if (val == "true") {
                        _this.data.isSelect = "1";
                    }
                    else if (val == "false") {
                        _this.data.isSelect = "0";
                    }
                    _this.emitAppEvent("medical/teampayment/Row", _this.UniId);
                    return true;
                };
            }
            return TeamPayMentRowDomVm;
        }(domCore.DomVm));
        TeamPayMentRowDom.TeamPayMentRowDomVm = TeamPayMentRowDomVm;
        var TeamPayMentRowDomStates = (function (_super) {
            __extends(TeamPayMentRowDomStates, _super);
            function TeamPayMentRowDomStates() {
                _super.apply(this, arguments);
            }
            return TeamPayMentRowDomStates;
        }(domCore.DomStates));
        TeamPayMentRowDom.TeamPayMentRowDomStates = TeamPayMentRowDomStates;
        var TeamPayMentRowDomProps = (function (_super) {
            __extends(TeamPayMentRowDomProps, _super);
            function TeamPayMentRowDomProps() {
                _super.apply(this, arguments);
            }
            return TeamPayMentRowDomProps;
        }(domCore.DomProps));
        TeamPayMentRowDom.TeamPayMentRowDomProps = TeamPayMentRowDomProps;
    })(TeamPayMentRowDom = exports.TeamPayMentRowDom || (exports.TeamPayMentRowDom = {}));
});
