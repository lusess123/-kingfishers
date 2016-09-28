var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/0Dom", "react"], function (require, exports, domFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var FillMenuDom;
    (function (FillMenuDom) {
        var FillMenuDomAction = (function (_super) {
            __extends(FillMenuDomAction, _super);
            function FillMenuDomAction() {
                _super.apply(this, arguments);
            }
            return FillMenuDomAction;
        }(domCore.DomAction));
        FillMenuDom.FillMenuDomAction = FillMenuDomAction;
        var FillMenuDomReact = (function (_super) {
            __extends(FillMenuDomReact, _super);
            function FillMenuDomReact() {
                _super.apply(this, arguments);
                this.state = new FillMenuDomStates();
                this.pIsSetScreenMaxHeight = true;
            }
            FillMenuDomReact.prototype.onClickLiSetValue = function (item) {
                this.props.Vm.onSelected({ Key: item.Key, Text: this._text(item.Text) });
            };
            FillMenuDomReact.prototype.onMoreFun = function () {
                this.props.Vm.onMore();
            };
            FillMenuDomReact.prototype._text = function (str) {
                try {
                    var _texts = $(str).text();
                    if (_texts == "") {
                        return str;
                    }
                    else
                        return _texts;
                }
                catch (ff) {
                    return str;
                }
            };
            FillMenuDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("ul", {className: "col-lg-9 col-md-8 col-sm-8 Hu-select-content Hz-scroll ACT-FillMenuDom"}, this.props.Vm.SelectorItemList.map(function (a) {
                    return React.createElement("li", {dangerouslySetInnerHTML: { __html: a.Text }, className: "Hu-pointer " + (a.Key == _this.props.Vm.Key ? "active" : ""), key: a.Key, onClick: function () { _this.onClickLiSetValue(a); return false; }});
                }), React.createElement("li", {className: "Hu-pointer "}, React.createElement("a", {onClick: function () { _this.onMoreFun(); return false; }}, "查看更多...")));
            };
            FillMenuDomReact.prototype.pComponentWillUnmount = function () {
                _super.prototype.pComponentWillUnmount.call(this);
                $("body").unbind("click", this.fclickFun);
            };
            FillMenuDomReact.prototype.pComponentDidMount = function () {
                var _this = this;
                _super.prototype.pComponentDidMount.call(this);
                this.fclickFun = function (a) {
                    var _$tar = $(a.target);
                    //  alert(2);
                    if (!_$tar.hasClass("ACT-FillMenuDom") && !_$tar.parents().hasClass("ACT-FillMenuDom") && !_$tar.hasClass("ACT-SELECTOR-INPUT")) {
                        _this.props.Vm.onClose();
                    }
                    return true;
                };
                $("body").bind("click", this.fclickFun);
            };
            return FillMenuDomReact;
        }(domCore.DomReact));
        FillMenuDom.FillMenuDomReact = FillMenuDomReact;
        var FillMenuDomVm = (function (_super) {
            __extends(FillMenuDomVm, _super);
            function FillMenuDomVm(config) {
                _super.call(this);
                this.ReactType = FillMenuDomReact;
                if (config) {
                    if (config.SelectorItemList) {
                        this.SelectorItemList = config.SelectorItemList.map(function (a) {
                            return a;
                        });
                    }
                    if (config.UniId) {
                        this.UniId = config.UniId;
                    }
                }
            }
            FillMenuDomVm.prototype.onSelected = function (item) {
                this.emitAppEvent("FillMenuDom-onSelected", this.UniId, { Key: item.Key, Text: item.Text });
            };
            FillMenuDomVm.prototype.onClose = function () {
                this.emitAppEvent("FillMenuDom-onClose", this.UniId);
            };
            FillMenuDomVm.prototype.onMore = function () {
                alert(123);
                this.emitAppEvent("PickDom-ModalOpen", this.UniId);
                // this.onClose();
            };
            FillMenuDomVm.prototype.registSelected = function (fun, dom) {
                this.pRegistAppEventByDom({
                    Fun: fun,
                    Name: "FillMenuDom-onSelected",
                    //UniId: this.UniId,
                    DomObj: dom
                });
            };
            FillMenuDomVm.prototype.registClose = function (fun, dom) {
                this.pRegistAppEventByDom({
                    Fun: fun,
                    Name: "FillMenuDom-onSelected",
                    //UniId: this.UniId,
                    DomObj: dom
                });
            };
            return FillMenuDomVm;
        }(domCore.DomVm));
        FillMenuDom.FillMenuDomVm = FillMenuDomVm;
        var FillMenuDomStates = (function (_super) {
            __extends(FillMenuDomStates, _super);
            function FillMenuDomStates() {
                _super.apply(this, arguments);
            }
            return FillMenuDomStates;
        }(domCore.DomStates));
        FillMenuDom.FillMenuDomStates = FillMenuDomStates;
        var FillMenuDomProps = (function (_super) {
            __extends(FillMenuDomProps, _super);
            function FillMenuDomProps() {
                _super.apply(this, arguments);
            }
            return FillMenuDomProps;
        }(domCore.DomProps));
        FillMenuDom.FillMenuDomProps = FillMenuDomProps;
    })(FillMenuDom = exports.FillMenuDom || (exports.FillMenuDom = {}));
});
