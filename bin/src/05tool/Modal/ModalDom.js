var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/0Dom", "react", "react-dom"], function (require, exports, domFile, React, ReactDOM) {
    "use strict";
    var domCore = domFile.Core;
    var ModalDom;
    (function (ModalDom) {
        var ModalDomAction = (function (_super) {
            __extends(ModalDomAction, _super);
            function ModalDomAction() {
                _super.apply(this, arguments);
            }
            return ModalDomAction;
        }(domCore.DomAction));
        ModalDom.ModalDomAction = ModalDomAction;
        var ModalDomReact = (function (_super) {
            __extends(ModalDomReact, _super);
            function ModalDomReact() {
                _super.apply(this, arguments);
                this.state = new ModalDomStates();
            }
            //protected pIsSetScreenHeight: boolean = true;
            ModalDomReact.prototype.open_fun = function () {
                this.props.Vm.open();
            };
            ModalDomReact.prototype.close_fun = function () {
                this.props.Vm.close();
            };
            ModalDomReact.prototype.setStyle = function () {
                if (this.props.Vm.Width) {
                    return { width: this.props.Vm.Width, top: this.props.Vm.ModalTop.toString() + 'px' };
                }
                return { top: this.props.Vm.ModalTop.toString() + 'px' };
            };
            ModalDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", null, React.createElement("div", {className: (!this.props.Vm.IsDebug ? "hide" : "")}, React.createElement("button", {onClick: function () { _this.open_fun(); }}, "弹出")), React.createElement("div", {className: "  Hm-modals-bg Hg-width Hg-max-width  Hc-control-modal " + (this.props.Vm.IsModalShow ? "show ACT-HAS-MPDAL " : "hide")}, React.createElement("div", {className: "Hm-modals Hg-relative Hg-default-top Hm-modals-shape  Hs-fff  " + (this.props.Vm.IsModalShow ? "show Hf-overflow " : "hide ") + (this.props.Vm.ClassName ? this.props.Vm.ClassName : ""), style: this.setStyle()}, React.createElement("div", {className: "Hu-naiv"}, this.props.Vm.Title ? React.createElement("h3", {className: "Hu-modals-title pull-left"}, this.props.Vm.Title) : null, React.createElement("a", {className: " Hu-close Hu-pointer pull-right", onClick: function () { _this.close_fun(); }}, React.createElement("i", {className: "icon-remove fa fa-close acsPointer "}))), React.createElement("div", {className: "ACT-MODAL-CONTENT Hm-modals-content"}, this._tDom(this.props.Vm.DomObj, { nullNode: React.createElement("span", null, " ", React.createElement("i", {className: "icon-spinner icon-spin fa  fa-spinner fa-spin "}), "等待载入内容") })))));
            };
            ModalDomReact.prototype.pComponentDidMount = function () {
                var _this = this;
                _super.prototype.pComponentDidMount.call(this);
                if ($(".ACT-HAS-MPDAL").length > 0) {
                    $("body").addClass("Hf-overflow ");
                }
                $(window).resize(function () {
                    _this.setWidth();
                });
                this.setWidth();
            };
            ModalDomReact.prototype.setWidth = function () {
                var _dom = ReactDOM.findDOMNode(this);
                if (_dom) {
                    var _$dom = $(_dom).find(".ACT-MODAL-CONTENT");
                    // _$dom.children(".Hc-modals-list").height($(window).height() - 60 - 30 - 30);
                    // _$dom.children(".Hc-modals-list").addClass("Hg-overflow-auto");
                    _$dom.css("height", ($(window).height() - 60 - 30 - 30 - 20) * 0.95 + "px").addClass("Hz-scroll Hg-overflow-auto");
                }
            };
            ModalDomReact.prototype.pInstall = function () {
                _super.prototype.pInstall.call(this);
                if (this.props.Vm.IsModalShow) {
                    if ($(".ACT-HAS-MPDAL").length > 0) {
                        $("body").addClass("Hf-overflow ");
                    }
                    else {
                    }
                }
            };
            return ModalDomReact;
        }(domCore.DomReact));
        ModalDom.ModalDomReact = ModalDomReact;
        var ModalDomVm = (function (_super) {
            __extends(ModalDomVm, _super);
            function ModalDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = ModalDomReact;
                this.ModalTop = 0;
                this.IsNoFirst = false;
                this.IsDebug = false;
                this.IsMulit = true;
                if (config) {
                    if (config) {
                        if (config.IsModalShow) {
                            this.IsModalShow = config.IsModalShow;
                        }
                        if (config.ModalTop) {
                            this.ModalTop = config.ModalTop;
                        }
                        if (config.Title) {
                            this.Title = config.Title;
                        }
                        if (config.ModalShowingFun) {
                            this.ModalShowFun = config.ModalShowingFun;
                        }
                        if (config.ModalCloseFun) {
                            this.ModalCloseFun = config.ModalCloseFun;
                        }
                        if (config.IsDebug) {
                            this.IsDebug = config.IsDebug;
                        }
                        if (config.ClassName) {
                            this.ClassName = config.ClassName;
                        }
                        if (config.UniId) {
                            this.UniId = config.UniId;
                            this.listenAppEvent("modal-close", this.UniId, function () {
                                _this.close();
                            });
                        }
                        if (config.DomObj) {
                            this.DomObj = config.DomObj;
                        }
                        if (config.Width) {
                            this.Width = config.Width;
                        }
                        if (config.Zindex) {
                            this.Zindex = config.Zindex;
                        }
                    }
                }
            }
            ModalDomVm.prototype.open = function () {
                var _this = this;
                this.IsModalShow = true;
                if (this.ModalShowFun) {
                    this.ModalShowFun(this, function () {
                        if (!_this.IsNoFirst)
                            _this.IsNoFirst = true;
                        _this.forceUpdate("", function () {
                            if ($(".ACT-HAS-MPDAL").length > 0) {
                                $("body").addClass("Hf-overflow ");
                            }
                            else {
                                $("body").removeClass("Hf-overflow ");
                            }
                        });
                    });
                }
                else {
                    if (!this.IsNoFirst)
                        this.IsNoFirst = true;
                    this.forceUpdate("", function () {
                        if ($(".ACT-HAS-MPDAL").length > 0) {
                            $("body").addClass("Hf-overflow ");
                        }
                        else {
                            $("body").removeClass("Hf-overflow ");
                        }
                    });
                }
            };
            ModalDomVm.prototype.close = function () {
                var _this = this;
                // this.listenAppEvent("ModalDom-close", this.UniId);
                this.IsModalShow = false;
                if (this.ModalCloseFun) {
                    this.ModalCloseFun(this, function () {
                    });
                }
                this.DomObj = null;
                this.forceUpdate("", function () {
                    if ($(".ACT-HAS-MPDAL").length > 0) {
                        $("body").addClass("Hf-overflow ");
                    }
                    else {
                        $("body").removeClass("Hf-overflow ");
                    }
                    _this.IsChange = true;
                });
            };
            return ModalDomVm;
        }(domCore.DomVm));
        ModalDom.ModalDomVm = ModalDomVm;
        var ModalDomStates = (function (_super) {
            __extends(ModalDomStates, _super);
            function ModalDomStates() {
                _super.apply(this, arguments);
            }
            return ModalDomStates;
        }(domCore.DomStates));
        ModalDom.ModalDomStates = ModalDomStates;
        var ModalDomProps = (function (_super) {
            __extends(ModalDomProps, _super);
            function ModalDomProps() {
                _super.apply(this, arguments);
            }
            return ModalDomProps;
        }(domCore.DomProps));
        ModalDom.ModalDomProps = ModalDomProps;
    })(ModalDom = exports.ModalDom || (exports.ModalDom = {}));
});
