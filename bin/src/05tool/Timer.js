var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../01core/0Dom"], function (require, exports, React, domFile) {
    "use strict";
    var domCore = domFile.Core;
    var Timer;
    (function (Timer) {
        var TimerAction = (function (_super) {
            __extends(TimerAction, _super);
            function TimerAction() {
                _super.apply(this, arguments);
            }
            return TimerAction;
        }(domCore.DomAction));
        Timer.TimerAction = TimerAction;
        var TimerReact = (function (_super) {
            __extends(TimerReact, _super);
            function TimerReact() {
                _super.apply(this, arguments);
                this.state = new TimerStates();
            }
            TimerReact.prototype.pSender = function () {
                return React.createElement("span", {className: this.props.Vm.ClassName}, this.props.Vm.timerLength);
            };
            TimerReact.prototype.pComponentDidMount = function () {
                var _this = this;
                _super.prototype.pComponentDidMount.call(this);
                this._funInterval = setInterval(function () {
                    _this.props.Vm.interVal();
                    _this.forceUpdate();
                }, 100);
            };
            TimerReact.prototype.pComponentWillUnmount = function () {
                _super.prototype.pComponentWillUnmount.call(this);
                if (this._funInterval) {
                    clearInterval(this._funInterval);
                }
            };
            ;
            return TimerReact;
        }(domCore.DomReact));
        Timer.TimerReact = TimerReact;
        var TimerVm = (function (_super) {
            __extends(TimerVm, _super);
            function TimerVm() {
                _super.apply(this, arguments);
                this.ReactType = TimerReact;
                this.timerLength = 0;
            }
            TimerVm.prototype.interVal = function () {
                this.timerLength = this.timerLength + 1;
            };
            return TimerVm;
        }(domCore.DomVm));
        Timer.TimerVm = TimerVm;
        var TimerStates = (function (_super) {
            __extends(TimerStates, _super);
            function TimerStates() {
                _super.apply(this, arguments);
            }
            return TimerStates;
        }(domCore.DomStates));
        Timer.TimerStates = TimerStates;
        var TimerProps = (function (_super) {
            __extends(TimerProps, _super);
            function TimerProps() {
                _super.apply(this, arguments);
            }
            return TimerProps;
        }(domCore.DomProps));
        Timer.TimerProps = TimerProps;
    })(Timer = exports.Timer || (exports.Timer = {}));
});
