var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/0Dom", "./../../01core/Url", "react", "react-dom"], function (require, exports, domFile, urlFile, React, ReactDOM) {
    "use strict";
    var domCore = domFile.Core;
    var BreadItemDom;
    (function (BreadItemDom) {
        var BreadItemDomAction = (function (_super) {
            __extends(BreadItemDomAction, _super);
            function BreadItemDomAction() {
                _super.apply(this, arguments);
            }
            return BreadItemDomAction;
        }(domCore.DomAction));
        BreadItemDom.BreadItemDomAction = BreadItemDomAction;
        var BreadItemDomReact = (function (_super) {
            __extends(BreadItemDomReact, _super);
            function BreadItemDomReact() {
                _super.apply(this, arguments);
                this.state = new BreadItemDomStates();
            }
            BreadItemDomReact.prototype._linkClickFun = function (val) {
                //   var _isMenu = val.length >= 6 && val.toUpperCase().indexOf("$MENU$") == 0;
                // urlFile.Core.AkUrl.Current().openUrl(a.Value, _isMenu);
                if (val == "0")
                    val = this.props.Vm.HomeUrl;
                urlFile.Core.AkUrl.Current().openUrlByNoMenu(val);
            };
            BreadItemDomReact.prototype._clickEapandFun = function () {
                this.props.Vm.IsExpand = !this.props.Vm.IsExpand;
                this.forceUpdate();
            };
            BreadItemDomReact.prototype._senderUL = function () {
                var _this = this;
                if (this.props.Vm.LinkList && this.props.Vm.LinkList.length > 0) {
                    return React.createElement("ul", {className: "nav  ACT-MENU-ITEMS Hz-scroll clearfix " + (this.props.Vm.IsExpand ? "" : "hide")}, this.props.Vm.LinkList.map(function (item, i) {
                        return React.createElement("li", {className: "col-lg-3 col-md-3 col-sm-4 col-xs-6 ", key: i}, React.createElement("a", {onClick: function () { _this._linkClickFun(item.Value); }}, item.Text));
                    }));
                }
                else
                    return null;
            };
            BreadItemDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("li", {key: this.props.Vm.key, className: ((this.props.Vm.LinkList && this.props.Vm.LinkList.length > 0) ? "" : "active")}, React.createElement("a", {onClick: function () { _this._linkClickFun(_this.props.Vm.Value); }}, this.props.Vm.Text), React.createElement("a", {className: "Hu-icon " + ((this.props.Vm.LinkList && this.props.Vm.LinkList.length > 0) ? "" : "hide"), onClick: function () { _this._clickEapandFun(); }}, React.createElement("i", {className: ("icon-caret-") + (this.props.Vm.IsExpand ? "down " : "right ") + ("fa fa-caret-") + (this.props.Vm.IsExpand ? "down " : "right ")})), this._senderUL());
            };
            BreadItemDomReact.prototype.pComponentWillUnmount = function () {
                _super.prototype.pComponentWillUnmount.call(this);
                $("body").unbind("click", this.fExpandFun);
            };
            BreadItemDomReact.prototype.pComponentDidMount = function () {
                var _this = this;
                _super.prototype.pComponentDidMount.call(this);
                this.fExpandFun = function (a) {
                    var _$tar = $(a.target);
                    //  alert(2);
                    if (!_$tar.hasClass("ACT-BREAD-UL") && !_$tar.parents().hasClass("ACT-BREAD-UL")) {
                        if (_this.props.Vm.IsExpand) {
                            _this.props.Vm.IsExpand = false;
                            _this.forceUpdate();
                        }
                    }
                    return true;
                };
                $("body").bind("click", this.fExpandFun);
                var _dom = ReactDOM.findDOMNode(this);
                if (_dom) {
                    var _$dom = $(_dom);
                    var _w = $(window).width();
                    var _h = $(window).height();
                    _$dom.find(".ACT-MENU-ITEMS").css("width", _w * 0.5).css("max-height", _h - 60 - 30 - 30).css("min-height", _h / 3);
                }
            };
            BreadItemDomReact.prototype.pInstall = function () {
                _super.prototype.pInstall.call(this);
                var _dom = ReactDOM.findDOMNode(this);
                if (_dom) {
                    var _$dom = $(_dom);
                    var _w = $(window).width();
                    var _h = $(window).height();
                    _$dom.find(".ACT-MENU-ITEMS").css("width", _w * 0.5).css("max-height", _h - 60 - 30 - 30).css("min-height", _h / 3);
                }
            };
            return BreadItemDomReact;
        }(domCore.DomReact));
        BreadItemDom.BreadItemDomReact = BreadItemDomReact;
        var BreadItemDomVm = (function (_super) {
            __extends(BreadItemDomVm, _super);
            function BreadItemDomVm(config) {
                _super.call(this);
                this.ReactType = BreadItemDomReact;
                this.IsExpand = false;
                this.LinkList = [];
                this.HomeUrl = "$FEED$";
                this.IsMulit = true;
                if (config) {
                    this.Text = config.Text;
                    this.Value = config.Value;
                    this.IsExpand = config.IsExpand;
                    this.LinkList = config.LinkList;
                    if (config.HomeUrl) {
                        this.HomeUrl = config.HomeUrl;
                    }
                }
            }
            return BreadItemDomVm;
        }(domCore.DomVm));
        BreadItemDom.BreadItemDomVm = BreadItemDomVm;
        var BreadItemDomStates = (function (_super) {
            __extends(BreadItemDomStates, _super);
            function BreadItemDomStates() {
                _super.apply(this, arguments);
            }
            return BreadItemDomStates;
        }(domCore.DomStates));
        BreadItemDom.BreadItemDomStates = BreadItemDomStates;
        var BreadItemDomProps = (function (_super) {
            __extends(BreadItemDomProps, _super);
            function BreadItemDomProps() {
                _super.apply(this, arguments);
            }
            return BreadItemDomProps;
        }(domCore.DomProps));
        BreadItemDom.BreadItemDomProps = BreadItemDomProps;
    })(BreadItemDom = exports.BreadItemDom || (exports.BreadItemDom = {}));
});
