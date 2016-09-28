var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/0Dom", "react"], function (require, exports, domFile, React) {
    "use strict";
    var ui;
    (function (ui) {
        //export interface IButtonData {
        //    DisplayName: string;
        //    Name?: string;
        //    ClickFun?: Function;
        //}
        var RowHandAction = (function (_super) {
            __extends(RowHandAction, _super);
            function RowHandAction() {
                _super.apply(this, arguments);
            }
            return RowHandAction;
        }(domFile.Core.DomAction));
        ui.RowHandAction = RowHandAction;
        var RowHandReact = (function (_super) {
            __extends(RowHandReact, _super);
            function RowHandReact() {
                _super.apply(this, arguments);
            }
            RowHandReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "isExpend ButtonBar " + ((this.props.Vm.IsExpand && (this.props.Vm.ButtonList.length > 0 || this.props.Vm.Content)) ? "" : "hide") + "  text-left "}, this.props.Vm.Content, React.createElement("div", null, this.props.Vm.ButtonList.map(function (a) {
                    return a.intoDom();
                }), React.createElement("i", {className: "  icon-double-angle-up fa fa-angle-double-up Hu-pointer acsMarginL0-2", onClick: function () {
                    // alert("这又是在什么时候执行的呢？");
                    _this.fun_checkboxClick();
                }})));
            };
            ;
            //  public ff = "RowHandReact";
            RowHandReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
                //alert(this.props.Vm.isSingleSelector)
            };
            RowHandReact.prototype.fun_checkboxClick = function () {
                //if (!this.props.Vm.IsExpand) {
                this.props.Vm.IsExpand = !this.props.Vm.IsExpand;
                // this.props.Vm.BaseRowObj.
                //this.props.Vm.getEmit().emit("RowHandExpand");
                this.props.Vm.forceUpdate("");
                // }
            };
            return RowHandReact;
        }(domFile.Core.DomReact));
        ui.RowHandReact = RowHandReact;
        var RowHandSelectorReact = (function (_super) {
            __extends(RowHandSelectorReact, _super);
            function RowHandSelectorReact() {
                _super.apply(this, arguments);
                this.ff = "RowHandSelectorReact";
            }
            RowHandSelectorReact.prototype.fun_checkboxClick = function () {
                //if (!this.props.Vm.IsExpand) {
                this.props.Vm.IsExpand = !this.props.Vm.IsExpand;
                // this.props.Vm.BaseRowObj.
                //this.props.Vm.getEmit().emit("RowHandExpand");
                this.props.Vm.forceUpdate("");
                // }
            };
            RowHandSelectorReact.prototype._classNameI = function () {
                var _Mulitcheck = this.props.Vm.IsSelect ? "check-" : "";
                var _SingleCheck = this.props.Vm.IsSelect ? "" : "-o";
                return ((this.props.Vm.isSelector && this.props.Vm.isSingleSelector ? "acsWidth1 icon-circle fa fa-circle" + _SingleCheck + "  Hu-pointer   " : "acsWidth1 fa fa-" + _Mulitcheck + "square-o Hu-pointer   ") + ((this.props.Vm.IsHide && !this.props.Vm.IsSelect) ? "hidden" : ""));
            };
            RowHandSelectorReact.prototype._expandI = function () {
                var _plus = !this.props.Vm.IsExpand ? "plus" : "minus";
                return ("fa fa-" + _plus + "-square Hu-pointer " + (((!this.props.Vm.IsHide || this.props.Vm.IsExpand) && ((this.props.Vm.ButtonList.length > 0) || (this.props.Vm.Content))) ? "" : "hidden"));
            };
            RowHandSelectorReact.prototype.initIndexNum = function () {
                if (this.props.Vm.Index < 10) {
                    return "0" + this.props.Vm.Index;
                }
                else {
                    return this.props.Vm.Index + "";
                }
            };
            RowHandSelectorReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", null, React.createElement("i", {className: this._classNameI()}), React.createElement("span", {className: "acsWidth1"}, this.initIndexNum()), React.createElement("i", {className: this._expandI(), onClick: function (e) { _this.fun_checkboxClick(); e.stopPropagation(); return false; }}, " "));
            };
            return RowHandSelectorReact;
        }(domFile.Core.DomReact));
        ui.RowHandSelectorReact = RowHandSelectorReact;
        var RowHandNormalReact = (function (_super) {
            __extends(RowHandNormalReact, _super);
            function RowHandNormalReact() {
                _super.apply(this, arguments);
            }
            RowHandNormalReact.prototype._classNameI = function () {
                var _Mulitcheck = this.props.Vm.IsSelect ? "check-" : "";
                var _SingleCheck = this.props.Vm.IsSelect ? "" : "-o";
                return ((this.props.Vm.isSelector && this.props.Vm.isSingleSelector ? "acsWidth1 icon-circle fa fa-circle" + _SingleCheck + "  Hu-pointer   " : "acsWidth1 fa fa-" + _Mulitcheck + "square-o Hu-pointer   ") + ((this.props.Vm.IsHide && !this.props.Vm.IsSelect) ? "hidden" : ""));
            };
            RowHandNormalReact.prototype.pSender = function () {
                return React.createElement("div", null, React.createElement("i", {className: this._classNameI()}), this.props.Vm.ButtonList.map(function (a) {
                    return a.intoDom();
                }));
            };
            ;
            return RowHandNormalReact;
        }(domFile.Core.DomReact));
        ui.RowHandNormalReact = RowHandNormalReact;
        var RowHandVm = (function (_super) {
            __extends(RowHandVm, _super);
            function RowHandVm() {
                _super.apply(this, arguments);
                this.IsHide = true;
                this.IsMulit = true;
                this.IsExpand = false;
                this.IsSelect = false;
                this.Index = 0;
                this.ReactType = RowHandReact;
                this.pRegName = "RowHandVm";
                this.ButtonList = [];
                //是不是单选 默认为false
                this.isSingleSelector = false;
                //是不是
                this.isSelector = false;
            }
            RowHandVm.prototype.rHandSelectorSender = function () {
                return this.intoDomR(RowHandSelectorReact);
            };
            RowHandVm.prototype.rHandNormalSender = function () {
                return this.intoDomR(RowHandNormalReact);
            };
            return RowHandVm;
        }(domFile.Core.DomVm));
        ui.RowHandVm = RowHandVm;
        var RowHandProps = (function (_super) {
            __extends(RowHandProps, _super);
            function RowHandProps() {
                _super.apply(this, arguments);
            }
            return RowHandProps;
        }(domFile.Core.DomProps));
        ui.RowHandProps = RowHandProps;
        var RowHandStates = (function (_super) {
            __extends(RowHandStates, _super);
            function RowHandStates() {
                _super.apply(this, arguments);
            }
            return RowHandStates;
        }(domFile.Core.DomStates));
        ui.RowHandStates = RowHandStates;
    })(ui = exports.ui || (exports.ui = {}));
});
