var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "./../../../../01core/Util", "react"], function (require, exports, domFile, utilFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var Day;
    (function (Day) {
        var DayAction = (function (_super) {
            __extends(DayAction, _super);
            function DayAction() {
                _super.apply(this, arguments);
            }
            return DayAction;
        }(domCore.DomAction));
        Day.DayAction = DayAction;
        var DayReact = (function (_super) {
            __extends(DayReact, _super);
            function DayReact() {
                _super.apply(this, arguments);
                this.state = new DayStates();
            }
            DayReact.prototype.pSender = function () {
                return React.createElement("ul", null, React.createElement("div", {className: "Hu-ym-date "}, React.createElement("div", null, utilFile.Core.Util.DateFormat(new Date(Date.parse(this.props.Vm.DayString.replace(/\-/g, "/"))), "yyyy年")), React.createElement("div", null, utilFile.Core.Util.DateFormat(new Date(Date.parse(this.props.Vm.DayString.replace(/\-/g, "/"))), "MM月dd日"))), this.props.Vm.NewList.map(function (neVM, i) {
                    return React.createElement("li", null, neVM.intoDom(), React.createElement("em", null));
                }));
            };
            DayReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return DayReact;
        }(domCore.DomReact));
        Day.DayReact = DayReact;
        var DayVm = (function (_super) {
            __extends(DayVm, _super);
            function DayVm() {
                _super.apply(this, arguments);
                this.ReactType = DayReact;
                this.NewList = [];
            }
            return DayVm;
        }(domCore.DomVm));
        Day.DayVm = DayVm;
        var DayStates = (function (_super) {
            __extends(DayStates, _super);
            function DayStates() {
                _super.apply(this, arguments);
            }
            return DayStates;
        }(domCore.DomStates));
        Day.DayStates = DayStates;
        var DayProps = (function (_super) {
            __extends(DayProps, _super);
            function DayProps() {
                _super.apply(this, arguments);
            }
            return DayProps;
        }(domCore.DomProps));
        Day.DayProps = DayProps;
    })(Day = exports.Day || (exports.Day = {}));
});
