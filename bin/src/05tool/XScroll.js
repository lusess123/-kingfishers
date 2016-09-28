var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../01core/0Dom", "react", "react-dom"], function (require, exports, domFile, React, ReactDOM) {
    "use strict";
    var domCore = domFile.Core;
    var XScroll;
    (function (XScroll) {
        var XScrollAction = (function (_super) {
            __extends(XScrollAction, _super);
            function XScrollAction() {
                _super.apply(this, arguments);
            }
            return XScrollAction;
        }(domCore.DomAction));
        XScroll.XScrollAction = XScrollAction;
        var XScrollReact = (function (_super) {
            __extends(XScrollReact, _super);
            function XScrollReact() {
                _super.apply(this, arguments);
                this.state = new XScrollStates();
                this.NumIndex = new Array(200);
            }
            XScrollReact.prototype.fun_left_click = function () {
                this.props.Vm.left();
            };
            XScrollReact.prototype.fun_right_click = function () {
                this.props.Vm.right();
            };
            XScrollReact.prototype.setWidth = function () {
                var elem = ReactDOM.findDOMNode(this);
                var _$div = $(elem);
                _$div = _$div.parent();
                var _$contain = _$div.find(".Hf-menu-scroll");
                var _$inner = _$div.find(".inner");
                var _w1 = _$contain.width();
                var _w0 = _$inner.width() + this.props.Vm.ScrollNum;
                this.props.Vm.Width = _w0 - _w1;
            };
            XScrollReact.prototype.fun_mouseDown = function (e) {
                this.props.Vm.IsFirstMove = true;
                this.props.Vm.IsMove = true;
                //if (this.props.Vm.X0 == 0) {
                this.props.Vm.X0 = e["screenX"];
                //}
                // else {
                //     this.props.Vm.X0 = 0;
                // }
            };
            XScrollReact.prototype.fun_mouseUp = function () {
                this.props.Vm.IsMove = false;
                this.props.Vm.X0 = 0;
            };
            XScrollReact.prototype.fun_touch_begin = function (e) {
                this.props.Vm.IsMove = true;
                this.props.Vm.X0 = e.touches[0].screenX;
                this.props.Vm.IsFirstMove = true;
            };
            XScrollReact.prototype.fun_touch_end = function (e) {
                this.props.Vm.IsMove = false;
                this.props.Vm.X0 = 0;
            };
            XScrollReact.prototype.fun_touch_move = function (e) {
                this.move(e.touches[0].screenX);
            };
            XScrollReact.prototype.move = function (clientX) {
                //if (this.props.Vm.Width == 0) {
                //    this.setWidth();
                //}
                var x1 = clientX;
                if (this.props.Vm.IsFirstMove) {
                    this.props.Vm.X0 = x1;
                }
                if (!this.props.Vm.IsFirstMove && this.props.Vm.X0 > 0 && this.props.Vm.IsMove && this.props.Vm.Width > 0) {
                    if ((((-1) * this.props.Vm.Width) <= this.props.Vm.ScrollNum) && (this.props.Vm.ScrollNum <= 0)) {
                        var x = x1 - this.props.Vm.X0;
                        console.info(" x1 : " + x1 + " -  " + " x0: " + this.props.Vm.X0 + " =" + x + "  ScrollNum: " + this.props.Vm.ScrollNum);
                        this.props.Vm.ScrollNum = this.props.Vm.ScrollNum + x;
                        if (this.props.Vm.ScrollNum <= ((-1) * this.props.Vm.Width))
                            this.props.Vm.ScrollNum = ((-1) * this.props.Vm.Width);
                        if (this.props.Vm.ScrollNum > 0)
                            this.props.Vm.ScrollNum = 0;
                        this.forceUpdate(function () {
                        });
                    }
                    this.props.Vm.X0 = clientX;
                }
                this.props.Vm.IsFirstMove = false;
            };
            XScrollReact.prototype.fun_mouseMove = function (e) {
                this.move(e["clientX"]);
            };
            XScrollReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "Hf-menu-scroll"}, React.createElement("div", {className: "inner ", style: { marginLeft: this.props.Vm.ScrollNum }, onMouseDown: function (e) { _this.fun_mouseDown(e); }, onMouseUp: function () { _this.fun_mouseUp(); }, onMouseMove: function (e) { _this.fun_mouseMove(e); }, onMouseEnter: function (e) { _this.fun_mouseDown(e); }, onMouseLeave: function (e) { _this.fun_mouseUp(); }, onTouchMove: function (e) { _this.fun_touch_move(e); }, onTouchStart: function (e) { _this.fun_touch_begin(e); }, onTouchEnd: function (e) { _this.fun_touch_end(e); }, onTouchCancel: function (e) { _this.fun_touch_end(e); }}, this.props.Vm.FunSetInnerContent ? this.props.Vm.FunSetInnerContent() : "无内容"));
            };
            XScrollReact.prototype.pInstall = function () {
                var _this = this;
                _super.prototype.pInstall.call(this);
                this._resizeFun = function () {
                    _this.props.Vm.ScrollNum = 0;
                    _this.forceUpdate(function () {
                        _this.setWidth();
                    });
                };
                $(window).bind("resize", this._resizeFun);
                if (this.IsFirst) {
                    this.setWidth();
                }
            };
            XScrollReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
                this.setWidth();
            };
            XScrollReact.prototype.pUnInstall = function () {
                _super.prototype.pUnInstall.call(this);
                if (this._resizeFun) {
                    $(window).unbind("resize", this._resizeFun);
                }
            };
            return XScrollReact;
        }(domCore.DomReact));
        XScroll.XScrollReact = XScrollReact;
        var XScrollVm = (function (_super) {
            __extends(XScrollVm, _super);
            function XScrollVm(config) {
                _super.call(this);
                this.ReactType = XScrollReact;
                this.Size = 10;
                this.ScrollNum = 0;
                this.ScrollStep = 15;
                this.IsMove = false;
                this.IsFirstMove = false;
                this.Index = 200;
                this.List = [];
                //for (var i = 0; i < this.Index; i++) {
                //    this.List.push(i);
                //}
                if (config) {
                    if (config.Size) {
                        this.Size = config.Size;
                    }
                    if (config.FunSetInnerContent) {
                        this.FunSetInnerContent = config.FunSetInnerContent;
                    }
                }
            }
            XScrollVm.prototype.reStart = function () {
                this.ScrollNum = 0;
                this.X0 = 0;
                this.IsMove = false;
                this.Width = 0;
            };
            XScrollVm.prototype.left = function () {
                this.ScrollNum = this.ScrollNum + this.ScrollStep;
                this.forceUpdate("");
            };
            XScrollVm.prototype.right = function () {
                this.ScrollNum = this.ScrollNum - this.ScrollStep;
                this.forceUpdate("");
            };
            return XScrollVm;
        }(domCore.DomVm));
        XScroll.XScrollVm = XScrollVm;
        var XScrollStates = (function (_super) {
            __extends(XScrollStates, _super);
            function XScrollStates() {
                _super.apply(this, arguments);
            }
            return XScrollStates;
        }(domCore.DomStates));
        XScroll.XScrollStates = XScrollStates;
        var XScrollProps = (function (_super) {
            __extends(XScrollProps, _super);
            function XScrollProps() {
                _super.apply(this, arguments);
            }
            return XScrollProps;
        }(domCore.DomProps));
        XScroll.XScrollProps = XScrollProps;
    })(XScroll = exports.XScroll || (exports.XScroll = {}));
});
