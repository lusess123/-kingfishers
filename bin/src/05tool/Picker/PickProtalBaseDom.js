var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/0Dom", "react"], function (require, exports, domFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var PickProtalBaseDom;
    (function (PickProtalBaseDom) {
        var PickProtalBaseDomAction = (function (_super) {
            __extends(PickProtalBaseDomAction, _super);
            function PickProtalBaseDomAction() {
                _super.apply(this, arguments);
            }
            return PickProtalBaseDomAction;
        }(domCore.DomAction));
        PickProtalBaseDom.PickProtalBaseDomAction = PickProtalBaseDomAction;
        var PickProtalBaseDomReact = (function (_super) {
            __extends(PickProtalBaseDomReact, _super);
            function PickProtalBaseDomReact() {
                _super.apply(this, arguments);
                this.state = new PickProtalBaseDomStates();
            }
            PickProtalBaseDomReact.prototype.getInputVal = function () {
                var _list = this.props.Vm.PickItemList.map(function (m) { return m.Text; });
                return _list.join(",");
            };
            PickProtalBaseDomReact.prototype.pSender = function () {
                return React.createElement("input", {className: "form-control", ref: "input", value: this.getInputVal(), readOnly: "true"});
            };
            PickProtalBaseDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return PickProtalBaseDomReact;
        }(domCore.DomReact));
        PickProtalBaseDom.PickProtalBaseDomReact = PickProtalBaseDomReact;
        var PickProtalBaseDomVm = (function (_super) {
            __extends(PickProtalBaseDomVm, _super);
            function PickProtalBaseDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = PickProtalBaseDomReact;
                //  public TextAreaText: string;
                this.PickItemList = [];
                if (config) {
                    if (config.PickItemList) {
                        this.PickItemList = config.PickItemList.map(function (c) {
                            return { Text: c.Text, Key: c.Key };
                        });
                    }
                    if (config.UniId) {
                        this.UniId = config.UniId;
                        this.listenAppEvent("picker-sure", this.UniId, function (items) {
                            //--------
                            _this.pPickerSure(items);
                        });
                    }
                }
            }
            PickProtalBaseDomVm.prototype.pPickerSure = function (items) {
                if (this.pCheckItemEq(items)) {
                    //没有更新不需要操作
                    this.forceUpdate("");
                }
                else {
                    this.PickItemList = items;
                    this.forceUpdate("");
                }
            };
            PickProtalBaseDomVm.prototype.pCheckItemEq = function (items) {
                var _isCheck = true;
                if (items.length == this.PickItemList.length) {
                    for (var i = 0; i < items.length; i++) {
                        var it = items[i];
                        if (this.PickItemList.filter(function (v) { return v.Key == it.Key; }).length > 0) {
                        }
                        else {
                            _isCheck = false;
                            break;
                        }
                    }
                }
                else {
                    _isCheck = false;
                }
                return _isCheck;
            };
            return PickProtalBaseDomVm;
        }(domCore.DomVm));
        PickProtalBaseDom.PickProtalBaseDomVm = PickProtalBaseDomVm;
        var PickProtalBaseDomStates = (function (_super) {
            __extends(PickProtalBaseDomStates, _super);
            function PickProtalBaseDomStates() {
                _super.apply(this, arguments);
            }
            return PickProtalBaseDomStates;
        }(domCore.DomStates));
        PickProtalBaseDom.PickProtalBaseDomStates = PickProtalBaseDomStates;
        var PickProtalBaseDomProps = (function (_super) {
            __extends(PickProtalBaseDomProps, _super);
            function PickProtalBaseDomProps() {
                _super.apply(this, arguments);
            }
            return PickProtalBaseDomProps;
        }(domCore.DomProps));
        PickProtalBaseDom.PickProtalBaseDomProps = PickProtalBaseDomProps;
    })(PickProtalBaseDom = exports.PickProtalBaseDom || (exports.PickProtalBaseDom = {}));
});
