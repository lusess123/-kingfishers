var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react"], function (require, exports, domFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var TimePointRowDom;
    (function (TimePointRowDom) {
        var TimePointRowDomAction = (function (_super) {
            __extends(TimePointRowDomAction, _super);
            function TimePointRowDomAction() {
                _super.apply(this, arguments);
            }
            return TimePointRowDomAction;
        }(domCore.DomAction));
        TimePointRowDom.TimePointRowDomAction = TimePointRowDomAction;
        var TimePointRowDomReact = (function (_super) {
            __extends(TimePointRowDomReact, _super);
            function TimePointRowDomReact() {
                _super.apply(this, arguments);
                this.state = new TimePointRowDomStates();
            }
            TimePointRowDomReact.prototype.pSender = function () {
                return React.createElement("tr", null, React.createElement("td", null, this.props.Vm.Name), React.createElement("td", null, this.props.Vm.Text), React.createElement("td", null, this.props.Vm.Time), React.createElement("td", null, this.props.Vm.CostTime));
            };
            TimePointRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return TimePointRowDomReact;
        }(domCore.DomReact));
        TimePointRowDom.TimePointRowDomReact = TimePointRowDomReact;
        var TimePointRowDomVm = (function (_super) {
            __extends(TimePointRowDomVm, _super);
            function TimePointRowDomVm(config) {
                _super.call(this);
                this.ReactType = TimePointRowDomReact;
                if (config) {
                    if (config.Name) {
                        this.Name = config.Name;
                    }
                    if (config.Text) {
                        this.Text = config.Text;
                    }
                    if (config.Time) {
                        this.Time = config.Time;
                    }
                    if (config.CostTime) {
                        this.CostTime = config.CostTime;
                    }
                }
            }
            return TimePointRowDomVm;
        }(domCore.DomVm));
        TimePointRowDom.TimePointRowDomVm = TimePointRowDomVm;
        var TimePointRowDomStates = (function (_super) {
            __extends(TimePointRowDomStates, _super);
            function TimePointRowDomStates() {
                _super.apply(this, arguments);
            }
            return TimePointRowDomStates;
        }(domCore.DomStates));
        TimePointRowDom.TimePointRowDomStates = TimePointRowDomStates;
        var TimePointRowDomProps = (function (_super) {
            __extends(TimePointRowDomProps, _super);
            function TimePointRowDomProps() {
                _super.apply(this, arguments);
            }
            return TimePointRowDomProps;
        }(domCore.DomProps));
        TimePointRowDom.TimePointRowDomProps = TimePointRowDomProps;
    })(TimePointRowDom = exports.TimePointRowDom || (exports.TimePointRowDom = {}));
});
