var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/0Dom", "react", "./PickItemDom"], function (require, exports, domFile, React, pickItemDomFile) {
    "use strict";
    var domCore = domFile.Core;
    var PickerContainer;
    (function (PickerContainer) {
        var PickerContainerAction = (function (_super) {
            __extends(PickerContainerAction, _super);
            function PickerContainerAction() {
                _super.apply(this, arguments);
            }
            return PickerContainerAction;
        }(domCore.DomAction));
        PickerContainer.PickerContainerAction = PickerContainerAction;
        var PickerContainerReact = (function (_super) {
            __extends(PickerContainerReact, _super);
            function PickerContainerReact() {
                _super.apply(this, arguments);
                this.state = new PickerContainerStates();
                this.pIsSetScreenHeight = true;
            }
            PickerContainerReact.prototype.fPickSure_fun = function () {
                this.props.Vm.PickSure();
            };
            PickerContainerReact.prototype._text = function (str) {
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
            PickerContainerReact.prototype.fInitSingle = function () {
                var _this = this;
                return React.createElement("div", {className: "Hm-picker clearfix"}, React.createElement("div", {className: this.props.Vm.IsPickSelectHide ? " hide " : ""}, React.createElement("div", null, "（已经选中" + this.props.Vm.PickItemList.length + "个）"), React.createElement("ul", {className: "nav nav-tabs clearfix"}, this.props.Vm.PickItemList.map(function (p) {
                    return p.intoDom();
                })), this.props.Vm.PickItemList.length == 0 ? React.createElement("button", {onClick: function () { _this.fPickSure_fun(); }}, "确定") : null), React.createElement("div", null, this._tDom(this.props.Vm.LeftDomVmObj, { nullNode: React.createElement("span", null, React.createElement("i", {className: "icon-spinner icon-spin fa  fa-spinner fa-spin "}), "等待载入待选区域...") })));
            };
            PickerContainerReact.prototype.fInitMulti = function () {
                var _this = this;
                return React.createElement("div", {className: "Hm-picker"}, React.createElement("div", {className: "col-sm-8 col-lg-" + this.isRightClassName() + " col-xl-" + this.isRightClassName() + "  Hm-picker-left"}, this._tDom(this.props.Vm.LeftDomVmObj, { nullNode: React.createElement("span", null, React.createElement("i", {className: "icon-spinner icon-spin fa  fa-spinner fa-spin "}), "等待载入待选区域...") })), React.createElement("div", {className: " col-sm-4 col-lg-4 col-xl-4 Hm-picker-right " + (this.props.Vm.IsPickSelectHide ? " hide " : "")}, React.createElement("div", null, "（已经选中" + this.props.Vm.PickItemList.length + "个）"), React.createElement("ul", {className: "nav nav-pills clearfix"}, this.props.Vm.PickItemList.map(function (p) {
                    return p.intoDom();
                })), React.createElement("div", {className: "text-center"}, React.createElement("a", {className: "btn btn-sm btn-primary", onClick: function () { _this.fPickSure_fun(); }}, "确定"))));
            };
            PickerContainerReact.prototype.isRightClassName = function () {
                return this.props.Vm.isRightEmpty ? "12" : "8";
            };
            PickerContainerReact.prototype.pSender = function () {
                return React.createElement("div", {className: "row"}, " ", this.props.Vm.IsSingle ? this.fInitSingle() : this.fInitMulti(), " ");
            };
            PickerContainerReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return PickerContainerReact;
        }(domCore.DomReact));
        PickerContainer.PickerContainerReact = PickerContainerReact;
        var PickerContainerVm = (function (_super) {
            __extends(PickerContainerVm, _super);
            function PickerContainerVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = PickerContainerReact;
                this.PickItemList = [];
                this.isRightEmpty = false;
                if (config) {
                    if (config.LeftDomVmObj) {
                        this.LeftDomVmObj = config.LeftDomVmObj;
                        this.LeftDomVmObj.IsSingle = config.IsSingle;
                    }
                    if (config.IsSingle) {
                        this.IsSingle = config.IsSingle;
                    }
                    if (config.IsPickSelectHide) {
                        this.IsPickSelectHide = config.IsPickSelectHide;
                    }
                    if (config.UniId) {
                        this.UniId = config.UniId;
                        this.fRegAppEvent();
                    }
                    if (config.isRightEmpty) {
                        this.isRightEmpty = config.isRightEmpty;
                    }
                    if (config.PickItemList) {
                        config.PickItemList.forEach(function (item) {
                            item.UniId = _this.UniId;
                            _this.PickItemList.push(new pickItemDomFile.PickItemDom.PickItemDomVm(item));
                        });
                    }
                }
            }
            PickerContainerVm.prototype.regAppEvent = function () {
                if (this.UniId) {
                    this.fRegAppEvent();
                }
            };
            PickerContainerVm.prototype.fRegAppEvent = function () {
                var _this = this;
                this.listenAppEvent("pickerContainerAddItem", this.UniId, function (item) {
                    //  alert("增加");
                    var _vm = new pickItemDomFile.PickItemDom.PickItemDomVm({
                        Key: item.Key,
                        Text: item.Text,
                        UniId: _this.UniId
                    });
                    for (var index = 0; index < _this.PickItemList.length; index++) {
                        if (_this.PickItemList[index].Key == item.Key) {
                            alert("此项已添加！");
                            return;
                        }
                    }
                    if (_this.IsSingle) {
                        _this.PickItemList = [_vm];
                        _this.PickSure();
                    }
                    else {
                        _this.PickItemList.push(_vm);
                    }
                    _this.forceUpdate("");
                    // this.emitAppEvent("pickerContainerDelItemForce", this.UniId);
                });
                this.listenAppEvent("call-PickDom-SetSelect", this.UniId, function () {
                    _this.emitAppEvent("PickDom-SetSelect", _this.UniId, _this.PickItemList.map(function (p) {
                        return p.Key;
                    }));
                });
                this.listenAppEvent("pickerSelect-HideOrShow", this.UniId, function (isShow) {
                    _this.IsPickSelectHide = !isShow;
                    _this.forceUpdate("");
                });
                this.listenAppEvent("pickerContainerDelItem", this.UniId, function (k) {
                    var _index = -1;
                    _this.PickItemList.forEach(function (r, i) {
                        if (r.Key == k) {
                            _index = i;
                        }
                    });
                    if (_index >= 0) {
                        _this.PickItemList.splice(_index, 1);
                        _this.PickItemList.forEach(function (r, i) {
                            r.toChange();
                        });
                    }
                    _this.forceUpdate("");
                    // this.emitAppEvent("pickerContainerDelItemForce", this.UniId);
                });
                this.listenAppEvent("pickerContainerClearItem", this.UniId, function () {
                    _this.PickItemList = [];
                    _this.forceUpdate("");
                });
            };
            PickerContainerVm.prototype.loadDom = function (pickItemList, callback) {
                var _this = this;
                this.PickItemList = [];
                pickItemList.forEach(function (item) {
                    item.UniId = _this.UniId;
                    _this.PickItemList.push(new pickItemDomFile.PickItemDom.PickItemDomVm(item));
                });
                this.IsChange = true;
                //  this.LeftDomVmObj.IsChange = tr
                this.LeftDomVmObj.sysLoadDom(pickItemList, callback);
            };
            PickerContainerVm.prototype.pSetSureCustomerObj = function (_items) {
                if (this.SetSureCustomerObjFun) {
                    return this.SetSureCustomerObjFun(_items);
                }
            };
            PickerContainerVm.prototype.PickSure = function () {
                this.emitAppEvent("modal-close", this.UniId);
                var _items = this.PickItemList.map(function (item) {
                    return { Key: item.Key, Text: item.Text };
                });
                // this.LeftDomVmObj = null;
                //  this.PickItemList = [];
                this.emitAppEvent("picker-sure", this.UniId, _items, this.pSetSureCustomerObj(_items));
            };
            PickerContainerVm.prototype.PickCancleSelect = function (k) {
            };
            PickerContainerVm.prototype.PickSelect = function (k) {
            };
            return PickerContainerVm;
        }(domCore.DomVm));
        PickerContainer.PickerContainerVm = PickerContainerVm;
        var PickerContainerStates = (function (_super) {
            __extends(PickerContainerStates, _super);
            function PickerContainerStates() {
                _super.apply(this, arguments);
            }
            return PickerContainerStates;
        }(domCore.DomStates));
        PickerContainer.PickerContainerStates = PickerContainerStates;
        var PickerContainerProps = (function (_super) {
            __extends(PickerContainerProps, _super);
            function PickerContainerProps() {
                _super.apply(this, arguments);
            }
            return PickerContainerProps;
        }(domCore.DomProps));
        PickerContainer.PickerContainerProps = PickerContainerProps;
    })(PickerContainer = exports.PickerContainer || (exports.PickerContainer = {}));
});
