var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../00core/baseCol", "./../../01core/Ioc", "react"], function (require, exports, basecolFile, iocFile, React) {
    "use strict";
    var BaseColReact = basecolFile.Core.BaseColReact;
    var BaseColVm = basecolFile.Core.BaseColVm;
    var BaseColProps = basecolFile.Core.BaseColProps;
    var BaseColStates = basecolFile.Core.BaseColStates;
    var BaseColAction = basecolFile.Core.BaseColAction;
    var ui;
    (function (ui) {
        var CheckBoxAction = (function (_super) {
            __extends(CheckBoxAction, _super);
            function CheckBoxAction() {
                _super.apply(this, arguments);
            }
            return CheckBoxAction;
        }(BaseColAction));
        ui.CheckBoxAction = CheckBoxAction;
        var CheckBoxReact = (function (_super) {
            __extends(CheckBoxReact, _super);
            function CheckBoxReact() {
                _super.apply(this, arguments);
            }
            CheckBoxReact.prototype.pComponentDidUpdate = function (prevProps, prevState, prevContext) {
                //更新后的
                if (!(prevProps.Vm === this.props.Vm)) {
                    this.pUnInstall(prevProps.Vm);
                    this.pInstall();
                    console.log(this.props.Vm.getRegName() + "重新注册");
                }
            };
            CheckBoxReact.prototype.fOnClick = function (a, i) {
                this.props.Vm.ItemList[i].Select = !(this.props.Vm.ItemList[i].Select);
                var _selectArr = [];
                this.props.Vm.ItemList.map(function (b, j) {
                    if (b.Select) {
                        _selectArr.push("\"" + b.Value + "\"");
                    }
                });
                var _val = _selectArr.toString();
                var _act = new CheckBoxAction();
                _act.DataValue = _val;
                this.pDispatcher(_act);
                this.props.Vm.reactDataValueSet(_val);
            };
            CheckBoxReact.prototype.pSender = function () {
                var _this = this;
                var _valArr = this.props.Vm.reactDataValueGet().replace(/\"/g, "").split(',');
                this.props.Vm.ItemList.map(function (a, i) {
                    a.Select = false;
                    _valArr.forEach(function (_b, _j) {
                        if (a.Value == _b) {
                            a.Select = true;
                        }
                    });
                });
                if (this.props.Vm.ItemList.length == 0) {
                    return React.DOM.div(null, ".");
                }
                var _checkBox = this.props.Vm.ItemList.map(function (a, i) {
                    //return React.DOM.li({
                    //    className: "Hu-pointer left" + (a.Select ? " acsMultiSelectorItem Hz-selected " : ""),
                    //    value: a.Value,
                    //    onClick: () => { this.fOnClick(a,i); },
                    //}, a.Text,
                    //    a.Select ? React.DOM.em(null) : null,
                    //    a.Select ? React.DOM.i({ className: "fa fa-check" }) : null)
                    return React.createElement("li", {className: "nav-item Hu-pointer Hc-multi-selector pull-left" + (a.Select ? "  Hz-selected " : ""), value: a.Value, onClick: function () { _this.fOnClick(a, i); return false; }}, a.Text, a.Select ? React.DOM.em(null) : null, a.Select ? React.DOM.i({ className: "icon-check fa fa-check" }) : null);
                });
                //return React.DOM.ul({ className: "acsList clearfix" }, _checkBox);
                return React.createElement("ul", {className: "nav nav-tabs clearfix"}, _checkBox);
            };
            return CheckBoxReact;
        }(BaseColReact));
        ui.CheckBoxReact = CheckBoxReact;
        var CheckBoxProps = (function (_super) {
            __extends(CheckBoxProps, _super);
            function CheckBoxProps() {
                _super.apply(this, arguments);
            }
            return CheckBoxProps;
        }(BaseColProps));
        ui.CheckBoxProps = CheckBoxProps;
        var CheckBoxVm = (function (_super) {
            __extends(CheckBoxVm, _super);
            function CheckBoxVm() {
                _super.apply(this, arguments);
                this.pRegName = "多选按钮";
                this.ReactType = CheckBoxReact;
                this.ItemList = new Array();
            }
            CheckBoxVm.prototype.dataValueSet = function (val) {
                var _arr = val.replace(/\"/g, "").split(',');
                this.ItemList.map(function (a, i) {
                    a.Select = false;
                    _arr.forEach(function (_b, _j) {
                        if (a.Value == _b) {
                            a.Select = true;
                        }
                    });
                });
                _super.prototype.dataValueSet.call(this, val);
            };
            CheckBoxVm.Test = function (num) {
                if (num == undefined)
                    num = 7;
                var bean = new CheckBoxVm();
                for (var i = 0; i < num; i++) {
                    bean.ItemList = bean.ItemList.concat({ Value: i.toString(), Text: "选项 " + i, Select: false });
                }
                bean.initDataValue("\"1\",\"2\"");
                return bean;
            };
            return CheckBoxVm;
        }(BaseColVm));
        ui.CheckBoxVm = CheckBoxVm;
        var CheckBoxStates = (function (_super) {
            __extends(CheckBoxStates, _super);
            function CheckBoxStates() {
                _super.apply(this, arguments);
            }
            return CheckBoxStates;
        }(BaseColStates));
        ui.CheckBoxStates = CheckBoxStates;
        iocFile.Core.Ioc.Current().RegisterType("CheckBoxVm", BaseColVm, CheckBoxVm);
    })(ui = exports.ui || (exports.ui = {}));
});
