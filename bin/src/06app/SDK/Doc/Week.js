var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react"], function (require, exports, domFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var Week;
    (function (Week) {
        var WeekAction = (function (_super) {
            __extends(WeekAction, _super);
            function WeekAction() {
                _super.apply(this, arguments);
            }
            return WeekAction;
        }(domCore.DomAction));
        Week.WeekAction = WeekAction;
        var WeekReact = (function (_super) {
            __extends(WeekReact, _super);
            function WeekReact() {
                _super.apply(this, arguments);
                this.state = new WeekStates();
            }
            //  {this.props.Vm.WeekList.map((a) => { return this.week(a); }) }
            WeekReact.prototype.pSender = function () {
                return React.createElement("li", null, React.createElement("div", {className: "Hu-date"}, this.props.Vm.Date), React.createElement("div", {className: "Hu-line-item "}, React.createElement("div", {className: "Hu-triangle"}), React.createElement("div", null, React.createElement("ol", null, this.fSendItems(this.props.Vm.Old))), React.createElement("div", null, React.createElement("ol", null, this.fSendItems(this.props.Vm.New))), React.createElement("em", null)));
            };
            WeekReact.prototype.fSendItems = function (list) {
                return list.map(function (a) {
                    if (a.Item) {
                        return React.createElement("li", null, a.Item);
                    }
                    return null;
                });
            };
            WeekReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return WeekReact;
        }(domCore.DomReact));
        Week.WeekReact = WeekReact;
        var WeekVm = (function (_super) {
            __extends(WeekVm, _super);
            function WeekVm(config) {
                _super.call(this);
                this.ReactType = WeekReact;
                this.Old = [];
                this.New = [];
                if (config) {
                    this.Date = config.Date;
                    this.Old = config.Old;
                    this.New = config.New;
                }
            }
            return WeekVm;
        }(domCore.DomVm));
        Week.WeekVm = WeekVm;
        var WeekStates = (function (_super) {
            __extends(WeekStates, _super);
            function WeekStates() {
                _super.apply(this, arguments);
            }
            return WeekStates;
        }(domCore.DomStates));
        Week.WeekStates = WeekStates;
        var WeekProps = (function (_super) {
            __extends(WeekProps, _super);
            function WeekProps() {
                _super.apply(this, arguments);
            }
            return WeekProps;
        }(domCore.DomProps));
        Week.WeekProps = WeekProps;
    })(Week = exports.Week || (exports.Week = {}));
});
