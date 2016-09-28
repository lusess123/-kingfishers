var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react", "./TimePointRowDom"], function (require, exports, domFile, React, timePointRow) {
    "use strict";
    var domCore = domFile.Core;
    var TimePointDom;
    (function (TimePointDom) {
        var TimePointDomAction = (function (_super) {
            __extends(TimePointDomAction, _super);
            function TimePointDomAction() {
                _super.apply(this, arguments);
            }
            return TimePointDomAction;
        }(domCore.DomAction));
        TimePointDom.TimePointDomAction = TimePointDomAction;
        var TimePointDomReact = (function (_super) {
            __extends(TimePointDomReact, _super);
            function TimePointDomReact() {
                _super.apply(this, arguments);
                this.state = new TimePointDomStates();
            }
            TimePointDomReact.prototype.pSender = function () {
                return React.createElement("div", {className: "Hg-relative"}, this._initPlugTable());
            };
            TimePointDomReact.prototype._initPlugTable = function () {
                return React.createElement("div", {className: "Hm-plug-table"}, React.createElement("table", {className: "table"}, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "名称"), React.createElement("th", null, "文字信息"), React.createElement("th", null, "时间"), React.createElement("th", null, "耗时(ms)"))), React.createElement("tbody", null, this.props.Vm.TimePointRowList.map(function (a) { return a.intoDom(); }))));
            };
            TimePointDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return TimePointDomReact;
        }(domCore.DomReact));
        TimePointDom.TimePointDomReact = TimePointDomReact;
        var TimePointDomVm = (function (_super) {
            __extends(TimePointDomVm, _super);
            function TimePointDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = TimePointDomReact;
                this.TimePointRowList = [];
                if (config.TimePointRowList) {
                    this.Data = config.TimePointRowList;
                    this.Data.forEach(function (a) {
                        var config = { Name: a.Name, Text: a.Text, Time: a.Time, CostTime: a.CostTime };
                        _this.Row = new timePointRow.TimePointRowDom.TimePointRowDomVm(config);
                        _this.TimePointRowList.push(_this.Row);
                    });
                }
            }
            return TimePointDomVm;
        }(domCore.DomVm));
        TimePointDom.TimePointDomVm = TimePointDomVm;
        var TimePointDomStates = (function (_super) {
            __extends(TimePointDomStates, _super);
            function TimePointDomStates() {
                _super.apply(this, arguments);
            }
            return TimePointDomStates;
        }(domCore.DomStates));
        TimePointDom.TimePointDomStates = TimePointDomStates;
        var TimePointDomProps = (function (_super) {
            __extends(TimePointDomProps, _super);
            function TimePointDomProps() {
                _super.apply(this, arguments);
            }
            return TimePointDomProps;
        }(domCore.DomProps));
        TimePointDom.TimePointDomProps = TimePointDomProps;
    })(TimePointDom = exports.TimePointDom || (exports.TimePointDom = {}));
});
