var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react", "./TeamPayMentRowDom", "./../../../02col/02Mulite/SingleCheckBox", "./../../../01core/event"], function (require, exports, domFile, React, row, singleCheckFile, eventFile) {
    "use strict";
    var domCore = domFile.Core;
    var TeamPayMentGridFormDom;
    (function (TeamPayMentGridFormDom) {
        var TeamPayMentGridFormDomAction = (function (_super) {
            __extends(TeamPayMentGridFormDomAction, _super);
            function TeamPayMentGridFormDomAction() {
                _super.apply(this, arguments);
            }
            return TeamPayMentGridFormDomAction;
        }(domCore.DomAction));
        TeamPayMentGridFormDom.TeamPayMentGridFormDomAction = TeamPayMentGridFormDomAction;
        var TeamPayMentGridFormDomReact = (function (_super) {
            __extends(TeamPayMentGridFormDomReact, _super);
            function TeamPayMentGridFormDomReact() {
                _super.apply(this, arguments);
                this.state = new TeamPayMentGridFormDomStates();
            }
            TeamPayMentGridFormDomReact.prototype.pSender = function () {
                return React.createElement("table", {className: "table table-striped table-bordered table-hover"}, React.createElement("thead", {className: "thead-default"}, React.createElement("tr", null, React.createElement("th", null, this.props.Vm.AllCheck.intoDom()), React.createElement("th", null, "批次"), React.createElement("th", null, "体检时间"), React.createElement("th", null, "缴费时间"), React.createElement("th", {className: "text-right"}, "缴费金额（元）"), React.createElement("th", null, "单位"), React.createElement("th", null, "状态"))), React.createElement("tbody", null, this.props.Vm.rowList ?
                    this.props.Vm.rowList.map(function (row, index) {
                        return row.intoDom();
                    }) : null));
            };
            TeamPayMentGridFormDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return TeamPayMentGridFormDomReact;
        }(domCore.DomReact));
        TeamPayMentGridFormDom.TeamPayMentGridFormDomReact = TeamPayMentGridFormDomReact;
        var TeamPayMentGridFormDomVm = (function (_super) {
            __extends(TeamPayMentGridFormDomVm, _super);
            function TeamPayMentGridFormDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = TeamPayMentGridFormDomReact;
                this.UniId = eventFile.App.getUniId().toString();
                if (config && config.Data) {
                    this.List = config.Data;
                    this.rowList = new Array();
                    config.Data.forEach(function (a, number) {
                        var rowdata = { data: a, number: number + 1, Unid: _this.UniId };
                        rowdata.data = a;
                        var dd = new row.TeamPayMentRowDom.TeamPayMentRowDomVm(rowdata);
                        _this.rowList.push(dd);
                    });
                }
                this.AllCheck = new singleCheckFile.ui.SingleCheckBoxVm();
                this.AllCheck.ChangeEventFun = function (val, col) {
                    _this.allselect(val);
                    return true;
                };
                this.listenAppEvent("medical/teampayment/Row", this.UniId, function () {
                    _this.rowList.forEach(function (a) {
                        a.IsChange = true;
                    });
                    //this.IsMulit = true;
                    //this.IsChange = true;
                    _this.forceUpdate("");
                });
            }
            TeamPayMentGridFormDomVm.prototype.allselect = function (select) {
                var val;
                if (select == "true") {
                    val = "1";
                }
                else if (select == "false") {
                    val = "0";
                }
                this.List.forEach(function (a) {
                    a.isSelect = val;
                });
                this.rowList.forEach(function (a) {
                    if (val == "1") {
                        a.AllCheck.dataValueSet("true");
                    }
                    else if (val == "0") {
                        a.AllCheck.dataValueSet("false");
                    }
                });
            };
            return TeamPayMentGridFormDomVm;
        }(domCore.DomVm));
        TeamPayMentGridFormDom.TeamPayMentGridFormDomVm = TeamPayMentGridFormDomVm;
        var TeamPayMentGridFormDomStates = (function (_super) {
            __extends(TeamPayMentGridFormDomStates, _super);
            function TeamPayMentGridFormDomStates() {
                _super.apply(this, arguments);
            }
            return TeamPayMentGridFormDomStates;
        }(domCore.DomStates));
        TeamPayMentGridFormDom.TeamPayMentGridFormDomStates = TeamPayMentGridFormDomStates;
        var TeamPayMentGridFormDomProps = (function (_super) {
            __extends(TeamPayMentGridFormDomProps, _super);
            function TeamPayMentGridFormDomProps() {
                _super.apply(this, arguments);
            }
            return TeamPayMentGridFormDomProps;
        }(domCore.DomProps));
        TeamPayMentGridFormDom.TeamPayMentGridFormDomProps = TeamPayMentGridFormDomProps;
    })(TeamPayMentGridFormDom = exports.TeamPayMentGridFormDom || (exports.TeamPayMentGridFormDom = {}));
});
