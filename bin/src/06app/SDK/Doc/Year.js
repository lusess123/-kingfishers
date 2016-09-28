var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react", "./Week"], function (require, exports, domFile, React, weekFile) {
    "use strict";
    var domCore = domFile.Core;
    var Year;
    (function (Year) {
        var YearAction = (function (_super) {
            __extends(YearAction, _super);
            function YearAction() {
                _super.apply(this, arguments);
            }
            return YearAction;
        }(domCore.DomAction));
        Year.YearAction = YearAction;
        var YearReact = (function (_super) {
            __extends(YearReact, _super);
            function YearReact() {
                _super.apply(this, arguments);
                this.state = new YearStates();
            }
            YearReact.prototype.pSender = function () {
                return React.createElement("div", null, React.createElement("div", {className: "Hu-year"}, this.props.Vm.Year), React.createElement("ul", null, this.props.Vm.WeekList.map(function (weekVm) { return weekVm.intoDom(); })));
            };
            YearReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return YearReact;
        }(domCore.DomReact));
        Year.YearReact = YearReact;
        var YearVm = (function (_super) {
            __extends(YearVm, _super);
            function YearVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = YearReact;
                this.WeekList = [];
                if (config) {
                    this.Year = config.Year;
                    config.Weeks.forEach(function (week) {
                        _this.WeekList.push(new weekFile.Week.WeekVm(week));
                    });
                }
            }
            return YearVm;
        }(domCore.DomVm));
        Year.YearVm = YearVm;
        var YearStates = (function (_super) {
            __extends(YearStates, _super);
            function YearStates() {
                _super.apply(this, arguments);
            }
            return YearStates;
        }(domCore.DomStates));
        Year.YearStates = YearStates;
        var YearProps = (function (_super) {
            __extends(YearProps, _super);
            function YearProps() {
                _super.apply(this, arguments);
            }
            return YearProps;
        }(domCore.DomProps));
        Year.YearProps = YearProps;
    })(Year = exports.Year || (exports.Year = {}));
});
