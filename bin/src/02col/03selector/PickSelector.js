var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/Ioc", "react", "./../../01core/Event", "./../00core/baseCol", "./../../05tool/Picker/PickDom", "./../../05tool/Picker/PickListBaseDom", "./../../05tool/Picker/PickProtalBaseDom"], function (require, exports, iocFile, React, eventFile, basecolFile, PickDomFile, PickListBaseDomFile, PickProtalBaseDomFile) {
    "use strict";
    var BaseColReact = basecolFile.Core.BaseColReact;
    var BaseColVm = basecolFile.Core.BaseColVm;
    var BaseColProps = basecolFile.Core.BaseColProps;
    var BaseColStates = basecolFile.Core.BaseColStates;
    var BaseColAction = basecolFile.Core.BaseColAction;
    var PickSelector;
    (function (PickSelector) {
        var PickSelectorAction = (function (_super) {
            __extends(PickSelectorAction, _super);
            function PickSelectorAction() {
                _super.apply(this, arguments);
            }
            return PickSelectorAction;
        }(BaseColAction));
        PickSelector.PickSelectorAction = PickSelectorAction;
        var PickSelectorReact = (function (_super) {
            __extends(PickSelectorReact, _super);
            function PickSelectorReact() {
                _super.apply(this, arguments);
                this.state = new PickSelectorStates();
            }
            PickSelectorReact.prototype.pSender = function () {
                return React.createElement("div", null, this._tDom(this.props.Vm.PickDomObj));
            };
            PickSelectorReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return PickSelectorReact;
        }(BaseColReact));
        PickSelector.PickSelectorReact = PickSelectorReact;
        var PickSelectorVm = (function (_super) {
            __extends(PickSelectorVm, _super);
            function PickSelectorVm(config, isSingle) {
                _super.call(this);
                this.ReactType = PickSelectorReact;
                this.pRegName = "筛选器多选控件";
                //  config.IsSingle = false;
                this.init(config, isSingle);
            }
            PickSelectorVm.prototype.init = function (config, isSingle) {
                var _this = this;
                var _itemList = [];
                var _PortalNode = null;
                var _LeftDomVmObj = null;
                if (config) {
                    if (config.UniId) {
                        this.UniId = config.UniId;
                    }
                    if (config.PickItemList) {
                        _itemList = config.PickItemList;
                    }
                    if (config.PortalNode) {
                        _PortalNode = config.PortalNode;
                    }
                    if (config.LeftDomVmObj) {
                        _LeftDomVmObj = config.LeftDomVmObj;
                    }
                }
                if (!this.UniId) {
                    this.UniId = "PickSelectorVm" + eventFile.App.getUniId();
                }
                if (!_LeftDomVmObj) {
                    _LeftDomVmObj = new PickListBaseDomFile.PickListBaseDom.PickListBaseDomVm({
                        UniId: this.UniId
                    });
                }
                if (!_PortalNode) {
                    _PortalNode = new PickProtalBaseDomFile.PickProtalBaseDom.PickProtalBaseDomVm({
                        UniId: this.UniId,
                        PickItemList: _itemList
                    });
                }
                //   alert(this.IsSingle);
                this.PickDomObj = new PickDomFile.PickDom.PickDomVm({
                    IsSingle: isSingle,
                    UniId: this.UniId,
                    PortalNode: _PortalNode,
                    PickItemList: _itemList,
                    PickerContainer: {
                        UniId: this.UniId,
                        IsSingle: true,
                        LeftDomVmObj: _LeftDomVmObj
                    }
                });
                if (isSingle) {
                    this.listenAppEvent("picker-sure", this.UniId, function (items) {
                        if (items.length > 0) {
                            _this.reactDataValueSet(items[0].Key);
                        }
                        else {
                            _this.reactDataValueSet("");
                        }
                    });
                }
                else {
                    this.listenAppEvent("picker-sure", this.UniId, function (items) {
                        var _strs = items.map(function (item) {
                            return "\"" + item.Key + "\"";
                        }).join(",");
                        _this.reactDataValueSet(_strs);
                    });
                }
            };
            PickSelectorVm.Test = function () {
                var _bean = new PickSelectorVm({
                    PickItemList: [
                        { Key: "key1", Text: "文本项1" },
                        { Key: "key22", Text: "文本项22" },
                        { Key: "key13", Text: "文本项13" }
                    ]
                });
                return _bean;
            };
            return PickSelectorVm;
        }(BaseColVm));
        PickSelector.PickSelectorVm = PickSelectorVm;
        var PickSelectorStates = (function (_super) {
            __extends(PickSelectorStates, _super);
            function PickSelectorStates() {
                _super.apply(this, arguments);
            }
            return PickSelectorStates;
        }(BaseColStates));
        PickSelector.PickSelectorStates = PickSelectorStates;
        var PickSelectorProps = (function (_super) {
            __extends(PickSelectorProps, _super);
            function PickSelectorProps() {
                _super.apply(this, arguments);
            }
            return PickSelectorProps;
        }(BaseColProps));
        PickSelector.PickSelectorProps = PickSelectorProps;
        iocFile.Core.Ioc.Current().RegisterType("PickSelectorVm", BaseColVm, PickSelectorVm);
    })(PickSelector = exports.PickSelector || (exports.PickSelector = {}));
});
