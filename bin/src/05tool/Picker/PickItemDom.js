var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/0Dom", "react"], function (require, exports, domFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var PickItemDom;
    (function (PickItemDom) {
        var PickItemDomAction = (function (_super) {
            __extends(PickItemDomAction, _super);
            function PickItemDomAction() {
                _super.apply(this, arguments);
            }
            return PickItemDomAction;
        }(domCore.DomAction));
        PickItemDom.PickItemDomAction = PickItemDomAction;
        var PickItemDomReact = (function (_super) {
            __extends(PickItemDomReact, _super);
            function PickItemDomReact() {
                _super.apply(this, arguments);
                this.state = new PickItemDomStates();
            }
            PickItemDomReact.prototype._text = function (str) {
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
            PickItemDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("li", {className: "nav-item Hc-multi-selector  Hz-selected"}, React.createElement("a", {onClick: function () { _this.close_fun(_this.props.Vm.Key); }}, this._text(this.props.Vm.Text), React.createElement("em", null), React.createElement("i", {className: "icon-remove fa fa-close"})));
            };
            PickItemDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            PickItemDomReact.prototype.close_fun = function (key) {
                this.props.Vm.delItem(key);
            };
            return PickItemDomReact;
        }(domCore.DomReact));
        PickItemDom.PickItemDomReact = PickItemDomReact;
        var PickItemDomVm = (function (_super) {
            __extends(PickItemDomVm, _super);
            function PickItemDomVm(config) {
                _super.call(this);
                this.ReactType = PickItemDomReact;
                this.IsMulit = true;
                if (config) {
                    if (config.Text) {
                        this.Text = config.Text;
                    }
                    if (config.Key) {
                        this.Key = config.Key;
                    }
                    if (config.UniId) {
                        this.UniId = config.UniId;
                    }
                }
            }
            PickItemDomVm.prototype.delItem = function (k) {
                this.emitAppEvent("pickerContainerDelItem", this.UniId, k);
            };
            return PickItemDomVm;
        }(domCore.DomVm));
        PickItemDom.PickItemDomVm = PickItemDomVm;
        var PickItemDomStates = (function (_super) {
            __extends(PickItemDomStates, _super);
            function PickItemDomStates() {
                _super.apply(this, arguments);
            }
            return PickItemDomStates;
        }(domCore.DomStates));
        PickItemDom.PickItemDomStates = PickItemDomStates;
        var PickItemDomProps = (function (_super) {
            __extends(PickItemDomProps, _super);
            function PickItemDomProps() {
                _super.apply(this, arguments);
            }
            return PickItemDomProps;
        }(domCore.DomProps));
        PickItemDom.PickItemDomProps = PickItemDomProps;
    })(PickItemDom = exports.PickItemDom || (exports.PickItemDom = {}));
});
