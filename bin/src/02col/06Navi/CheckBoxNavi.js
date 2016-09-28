var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../00core/baseCol", "./../../01core/Ioc", "./../../02col/02Mulite/CheckBox", "react"], function (require, exports, basecolFile, iocFile, checkBoxFile, React) {
    "use strict";
    var BaseColReact = basecolFile.Core.BaseColReact;
    var BaseColVm = basecolFile.Core.BaseColVm;
    var BaseColProps = basecolFile.Core.BaseColProps;
    var BaseColStates = basecolFile.Core.BaseColStates;
    var BaseColAction = basecolFile.Core.BaseColAction;
    var CheckBoxNavi;
    (function (CheckBoxNavi) {
        var CheckBoxNaviAction = (function (_super) {
            __extends(CheckBoxNaviAction, _super);
            function CheckBoxNaviAction() {
                _super.apply(this, arguments);
            }
            return CheckBoxNaviAction;
        }(BaseColAction));
        CheckBoxNavi.CheckBoxNaviAction = CheckBoxNaviAction;
        var CheckBoxNaviReact = (function (_super) {
            __extends(CheckBoxNaviReact, _super);
            function CheckBoxNaviReact() {
                _super.apply(this, arguments);
                this.state = new CheckBoxNaviStates();
            }
            CheckBoxNaviReact.prototype.pSender = function () {
                return React.createElement("div", null, this._T_(this.props.Vm.CheckBoxObj.intoDom()));
            };
            CheckBoxNaviReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return CheckBoxNaviReact;
        }(BaseColReact));
        CheckBoxNavi.CheckBoxNaviReact = CheckBoxNaviReact;
        var CheckBoxNaviVm = (function (_super) {
            __extends(CheckBoxNaviVm, _super);
            function CheckBoxNaviVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = CheckBoxNaviReact;
                this.CheckBoxObj = new checkBoxFile.ui.CheckBoxVm();
                if (config) {
                    if (config.ItemList) {
                        this.CheckBoxObj.ItemList = config.ItemList;
                    }
                }
                this.CheckBoxObj.onChangeHandle(function (a) {
                    //  alert(a);
                    _this.pDataValueSet(a);
                    return true;
                });
            }
            CheckBoxNaviVm.prototype.pMakerInNavi = function (config) {
                _super.prototype.pMakerInNavi.call(this, config);
                if (config) {
                    var kvs = [];
                    var _cd = config.DataSet[config.NavigationColumnConfig.Options.RegName];
                    if (_cd) {
                        _cd.forEach(function (cdr, cdi) {
                            kvs.push({
                                Text: cdr["CODE_TEXT"].toString(),
                                Value: cdr["CODE_VALUE"].toString(),
                                Select: false
                            });
                        });
                        this.CheckBoxObj.ItemList = kvs;
                    }
                }
            };
            return CheckBoxNaviVm;
        }(BaseColVm));
        CheckBoxNavi.CheckBoxNaviVm = CheckBoxNaviVm;
        var CheckBoxNaviStates = (function (_super) {
            __extends(CheckBoxNaviStates, _super);
            function CheckBoxNaviStates() {
                _super.apply(this, arguments);
            }
            return CheckBoxNaviStates;
        }(BaseColStates));
        CheckBoxNavi.CheckBoxNaviStates = CheckBoxNaviStates;
        var CheckBoxNaviProps = (function (_super) {
            __extends(CheckBoxNaviProps, _super);
            function CheckBoxNaviProps() {
                _super.apply(this, arguments);
            }
            return CheckBoxNaviProps;
        }(BaseColProps));
        CheckBoxNavi.CheckBoxNaviProps = CheckBoxNaviProps;
        //---------------------------item-------------------------------------------------
        iocFile.Core.Ioc.Current().RegisterType("CheckBoxNaviVm", BaseColVm, CheckBoxNaviVm);
    })(CheckBoxNavi = exports.CheckBoxNavi || (exports.CheckBoxNavi = {}));
});
