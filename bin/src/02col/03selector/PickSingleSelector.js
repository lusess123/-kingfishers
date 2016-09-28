var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/Ioc", "react", "./../00core/baseCol", "./PickSelector"], function (require, exports, iocFile, React, basecolFile, PickSelectorFile) {
    "use strict";
    var BaseColReact = basecolFile.Core.BaseColReact;
    var BaseColVm = basecolFile.Core.BaseColVm;
    var BaseColProps = basecolFile.Core.BaseColProps;
    var BaseColStates = basecolFile.Core.BaseColStates;
    var BaseColAction = basecolFile.Core.BaseColAction;
    var PickSingleSelector;
    (function (PickSingleSelector) {
        var PickSingleSelectorAction = (function (_super) {
            __extends(PickSingleSelectorAction, _super);
            function PickSingleSelectorAction() {
                _super.apply(this, arguments);
            }
            return PickSingleSelectorAction;
        }(BaseColAction));
        PickSingleSelector.PickSingleSelectorAction = PickSingleSelectorAction;
        var PickSingleSelectorReact = (function (_super) {
            __extends(PickSingleSelectorReact, _super);
            function PickSingleSelectorReact() {
                _super.apply(this, arguments);
                this.state = new PickSingleSelectorStates();
            }
            PickSingleSelectorReact.prototype.pSender = function () {
                return React.createElement("div", null, this._tDom(this.props.Vm.PickDomObj));
            };
            PickSingleSelectorReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return PickSingleSelectorReact;
        }(BaseColReact));
        PickSingleSelector.PickSingleSelectorReact = PickSingleSelectorReact;
        var PickSingleSelectorVm = (function (_super) {
            __extends(PickSingleSelectorVm, _super);
            function PickSingleSelectorVm(config) {
                //this.IsSingle = true;
                _super.call(this, config, true);
                this.ReactType = PickSingleSelectorReact;
                this.IsSingle = true;
                this.pRegName = "筛选器单选控件";
            }
            PickSingleSelectorVm.Test = function () {
                var _bean = new PickSingleSelectorVm({
                    PickItemList: [
                        { Key: "key1", Text: "文本项1" }
                    ]
                });
                return _bean;
            };
            return PickSingleSelectorVm;
        }(PickSelectorFile.PickSelector.PickSelectorVm));
        PickSingleSelector.PickSingleSelectorVm = PickSingleSelectorVm;
        var PickSingleSelectorStates = (function (_super) {
            __extends(PickSingleSelectorStates, _super);
            function PickSingleSelectorStates() {
                _super.apply(this, arguments);
            }
            return PickSingleSelectorStates;
        }(BaseColStates));
        PickSingleSelector.PickSingleSelectorStates = PickSingleSelectorStates;
        var PickSingleSelectorProps = (function (_super) {
            __extends(PickSingleSelectorProps, _super);
            function PickSingleSelectorProps() {
                _super.apply(this, arguments);
            }
            return PickSingleSelectorProps;
        }(BaseColProps));
        PickSingleSelector.PickSingleSelectorProps = PickSingleSelectorProps;
        iocFile.Core.Ioc.Current().RegisterType("PickSingleSelectorVm", BaseColVm, PickSingleSelectorVm);
    })(PickSingleSelector = exports.PickSingleSelector || (exports.PickSingleSelector = {}));
});
