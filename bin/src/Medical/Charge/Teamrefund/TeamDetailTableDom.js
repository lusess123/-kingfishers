var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react", "./TeamDetailRowDom"], function (require, exports, domFile, React, RowDom) {
    "use strict";
    var domCore = domFile.Core;
    var TeamDetailTableDom;
    (function (TeamDetailTableDom) {
        var TeamDetailTableDomAction = (function (_super) {
            __extends(TeamDetailTableDomAction, _super);
            function TeamDetailTableDomAction() {
                _super.apply(this, arguments);
            }
            return TeamDetailTableDomAction;
        }(domCore.DomAction));
        TeamDetailTableDom.TeamDetailTableDomAction = TeamDetailTableDomAction;
        var TeamDetailTableDomReact = (function (_super) {
            __extends(TeamDetailTableDomReact, _super);
            function TeamDetailTableDomReact() {
                _super.apply(this, arguments);
                this.state = new TeamDetailTableDomStates();
            }
            TeamDetailTableDomReact.prototype.pSender = function () {
                return React.createElement("div", null, React.createElement("table", {className: "table table-striped table-bordered table-hover"}, React.createElement("thead", {className: "thead-default"}, React.createElement("th", null, "名字"), React.createElement("th", null, "组名"), React.createElement("th", null, "体检编号"), React.createElement("th", null, "状态")), React.createElement("tbody", null, this.props.Vm.RowList.map(function (a) {
                    return a.intoDom();
                }))));
            };
            TeamDetailTableDomReact.prototype.pComponentDidMount = function () { _super.prototype.pComponentDidMount.call(this); };
            return TeamDetailTableDomReact;
        }(domCore.DomReact));
        TeamDetailTableDom.TeamDetailTableDomReact = TeamDetailTableDomReact;
        var TeamDetailTableDomVm = (function (_super) {
            __extends(TeamDetailTableDomVm, _super);
            function TeamDetailTableDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = TeamDetailTableDomReact;
                this.DataList = [];
                this.RowList = [];
                if (config) {
                    this.DataList = config.Data;
                    this.DataList.forEach(function (a, index) {
                        var config = { Data: a, index: index };
                        _this.row = new RowDom.TeamDetailRowDom.TeamDetailRowDomVm(config);
                        _this.RowList.push(_this.row);
                    });
                }
            }
            return TeamDetailTableDomVm;
        }(domCore.DomVm));
        TeamDetailTableDom.TeamDetailTableDomVm = TeamDetailTableDomVm;
        var TeamDetailTableDomStates = (function (_super) {
            __extends(TeamDetailTableDomStates, _super);
            function TeamDetailTableDomStates() {
                _super.apply(this, arguments);
            }
            return TeamDetailTableDomStates;
        }(domCore.DomStates));
        TeamDetailTableDom.TeamDetailTableDomStates = TeamDetailTableDomStates;
        var TeamDetailTableDomProps = (function (_super) {
            __extends(TeamDetailTableDomProps, _super);
            function TeamDetailTableDomProps() {
                _super.apply(this, arguments);
            }
            return TeamDetailTableDomProps;
        }(domCore.DomProps));
        TeamDetailTableDom.TeamDetailTableDomProps = TeamDetailTableDomProps;
    })(TeamDetailTableDom = exports.TeamDetailTableDom || (exports.TeamDetailTableDom = {}));
});
