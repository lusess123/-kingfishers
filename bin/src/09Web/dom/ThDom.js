var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/0Dom", "react", "react-dom"], function (require, exports, domFile, React, ReactDOM) {
    "use strict";
    var domCore = domFile.Core;
    var Web;
    (function (Web) {
        var ThDomAction = (function (_super) {
            __extends(ThDomAction, _super);
            function ThDomAction() {
                _super.apply(this, arguments);
            }
            return ThDomAction;
        }(domCore.DomAction));
        Web.ThDomAction = ThDomAction;
        var ThDomReact = (function (_super) {
            __extends(ThDomReact, _super);
            function ThDomReact() {
                _super.apply(this, arguments);
                this.state = new ThDomStates();
            }
            ThDomReact.prototype.pSender = function () {
                var _this = this;
                return (React.createElement("th", {style: { "width": this.props.Vm.Width }}, this.props.children, React.createElement("div", {className: "handle", draggable: true, onDragStart: function (t) {
                    _this.x0 = t["screenX"];
                    _this.props.Vm.getEmit().emit("table_width");
                }, onDrag: function (t) {
                    _this.onThDrag(t);
                }})));
            };
            ThDomReact.prototype.pInstall = function () {
                var _this = this;
                _super.prototype.pInstall.call(this);
                this.props.Vm.getEmit().addListener("fixWidth", function () {
                    _this.pFixWidth();
                });
            };
            ;
            ThDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            ThDomReact.prototype.onDrag = function (e) {
                //debugger;
            };
            ThDomReact.prototype.onThDrag = function (t) {
                this.x1 = t["screenX"];
                var _x = this.x0 - this.x1;
                this.pFixWidth();
                this.x0 = this.x0 - _x;
                this.props.Vm.Width = this.props.Vm.Width - _x;
                console.log(this.x0 + "-" + this.x1 + "=" + (this.x0 - this.x1).toString());
                this.props.Vm.forceUpdate("");
                this.props.Vm.getEmit().emit("width_fix");
            };
            ThDomReact.prototype.getWidth = function () {
                var elem = ReactDOM.findDOMNode(this);
                var _$th = $(elem);
                return _$th.innerWidth() + 2;
            };
            ThDomReact.prototype.pFixWidth = function () {
                if (this.props.Vm.Width <= 0) {
                    this.props.Vm.Width = this.getWidth();
                }
            };
            ThDomReact.prototype.fixWidth = function () {
                this.pFixWidth();
            };
            return ThDomReact;
        }(domCore.DomReact));
        Web.ThDomReact = ThDomReact;
        var ThDomVm = (function (_super) {
            __extends(ThDomVm, _super);
            function ThDomVm() {
                _super.apply(this, arguments);
                this.ReactType = ThDomReact;
                this.Width = 0;
            }
            ThDomVm.prototype.fixWidth = function () {
                //this.pFixWidth();
                this.getEmit().emit("fixWidth");
            };
            return ThDomVm;
        }(domCore.DomVm));
        Web.ThDomVm = ThDomVm;
        var ThDomStates = (function (_super) {
            __extends(ThDomStates, _super);
            function ThDomStates() {
                _super.apply(this, arguments);
            }
            return ThDomStates;
        }(domCore.DomStates));
        Web.ThDomStates = ThDomStates;
        var ThDomProps = (function (_super) {
            __extends(ThDomProps, _super);
            function ThDomProps() {
                _super.apply(this, arguments);
            }
            return ThDomProps;
        }(domCore.DomProps));
        Web.ThDomProps = ThDomProps;
    })(Web = exports.Web || (exports.Web = {}));
});
