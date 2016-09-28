var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/0Dom", "react"], function (require, exports, domFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var PickListBaseDom;
    (function (PickListBaseDom) {
        var PickListBaseDomAction = (function (_super) {
            __extends(PickListBaseDomAction, _super);
            function PickListBaseDomAction() {
                _super.apply(this, arguments);
            }
            return PickListBaseDomAction;
        }(domCore.DomAction));
        PickListBaseDom.PickListBaseDomAction = PickListBaseDomAction;
        var PickListBaseDomReact = (function (_super) {
            __extends(PickListBaseDomReact, _super);
            function PickListBaseDomReact() {
                _super.apply(this, arguments);
                this.state = new PickListBaseDomStates();
            }
            PickListBaseDomReact.prototype.li_clickFun = function (item) {
                this.props.Vm.addItem(item);
            };
            PickListBaseDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "Hc-list-item  "}, React.createElement("ul", {className: "nav nav-tabs clearfix"}, this.props.Vm.PickList.map(function (item) {
                    return React.createElement("li", {className: "nav-item Hu-pointer Hc-multi-selector pull-left   " + (item.IsSelect ? "Hz-selected" : "")}, React.createElement("a", {onClick: function () { _this.li_clickFun(item); }}, item.Text, item.IsSelect ? React.createElement("em", null) : null, item.IsSelect ? React.createElement("i", {className: "icon-ok fa fa-check"}) : null));
                })));
            };
            PickListBaseDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return PickListBaseDomReact;
        }(domCore.DomReact));
        PickListBaseDom.PickListBaseDomReact = PickListBaseDomReact;
        var PickListBaseDomVm = (function (_super) {
            __extends(PickListBaseDomVm, _super);
            function PickListBaseDomVm(config) {
                _super.call(this);
                this.ReactType = PickListBaseDomReact;
                this.PickList = [];
                this.SelectPickList = [];
                if (config) {
                    if (config.UniId) {
                        this.UniId = config.UniId;
                        this.fRegAppEvent();
                    }
                }
            }
            PickListBaseDomVm.prototype.addSelect = function (item) {
                var _res = this.SelectPickList.filter(function (a) {
                    return a.Key == item.Key;
                });
                if (_res.length == 0) {
                    // alert(window["xxx"].PickItemList);
                    this.SelectPickList.push(item);
                }
            };
            PickListBaseDomVm.prototype.regAppEvent = function () {
                if (this.UniId) {
                    this.pRegAppEvent();
                }
            };
            PickListBaseDomVm.prototype.pRegAppEvent = function () {
                this.fRegAppEvent();
            };
            PickListBaseDomVm.prototype.fRegAppEvent = function () {
                var _this = this;
                this.listenAppEvent("PickDom-SetSelect", this.UniId, function (keys) {
                    _this.PickList.forEach(function (i) {
                        if (keys.indexOf(i.Key) >= 0) {
                            i.IsSelect = true;
                        }
                    });
                });
                this.listenAppEvent("pickerContainerDelItem", this.UniId, function (k) {
                    var _index = -1;
                    _this.PickList.forEach(function (r, i) {
                        if (r.Key == k) {
                            r.IsSelect = false;
                        }
                    });
                    _this.removeSelect(k);
                    _this.forceUpdate("");
                    // this.emitAppEvent("pickerContainerDelItemForce", this.UniId);
                });
            };
            PickListBaseDomVm.prototype.removeSelect = function (k) {
                var _index = -1;
                this.SelectPickList.forEach(function (r, i) {
                    if (r.Key == k) {
                        _index = i;
                    }
                });
                if (_index >= 0) {
                    this.SelectPickList.splice(_index, 1);
                }
            };
            PickListBaseDomVm.prototype.sysLoadDom = function (items, callback) {
                this.loadDom(items, callback);
            };
            PickListBaseDomVm.prototype.loadDom = function (items, callback) {
                this.PickList = [];
                for (var i = 0; i < 100; i++) {
                    var _item = { Text: "文本项" + i, Key: "key" + i, IsSelect: false };
                    if (items.filter(function (a) { return a.Key == _item.Key; }).length > 0) {
                        _item.IsSelect = true;
                    }
                    this.PickList.push(_item);
                }
                this.IsChange = true;
                callback();
            };
            PickListBaseDomVm.prototype.addItem = function (item) {
                if (!item.IsSelect) {
                    item.IsSelect = true;
                    this.addSelect({ Text: item.Text, Key: item.Key });
                    this.forceUpdate("");
                    this.emitAppEvent("pickerContainerAddItem", this.UniId, { Text: item.Text, Key: item.Key });
                }
                else {
                    item.IsSelect = false;
                    this.removeSelect(item.Key);
                    this.forceUpdate("");
                    this.emitAppEvent("pickerContainerDelItem", this.UniId, item.Key);
                }
            };
            return PickListBaseDomVm;
        }(domCore.DomVm));
        PickListBaseDom.PickListBaseDomVm = PickListBaseDomVm;
        var PickListBaseDomStates = (function (_super) {
            __extends(PickListBaseDomStates, _super);
            function PickListBaseDomStates() {
                _super.apply(this, arguments);
            }
            return PickListBaseDomStates;
        }(domCore.DomStates));
        PickListBaseDom.PickListBaseDomStates = PickListBaseDomStates;
        var PickListBaseDomProps = (function (_super) {
            __extends(PickListBaseDomProps, _super);
            function PickListBaseDomProps() {
                _super.apply(this, arguments);
            }
            return PickListBaseDomProps;
        }(domCore.DomProps));
        PickListBaseDom.PickListBaseDomProps = PickListBaseDomProps;
    })(PickListBaseDom = exports.PickListBaseDom || (exports.PickListBaseDom = {}));
});
