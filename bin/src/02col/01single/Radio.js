/// <reference path="../../../typings/0type/Data.d.ts" />
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
        var RadioAction = (function (_super) {
            __extends(RadioAction, _super);
            function RadioAction() {
                _super.apply(this, arguments);
            }
            return RadioAction;
        }(BaseColAction));
        ui.RadioAction = RadioAction;
        var RadioReact = (function (_super) {
            __extends(RadioReact, _super);
            function RadioReact() {
                _super.apply(this, arguments);
            }
            RadioReact.prototype.fOnClick = function (a) {
                var _val = a.Value;
                var _act = new RadioAction();
                _act.DataValue = _val;
                _act.SelectText = a.Text;
                this.pDispatcher(_act);
                this.props.Vm.reactDataValueSet(_val);
            };
            RadioReact.prototype.pSender = function () {
                var _this = this;
                _super.prototype.pSender.call(this);
                var _select = this.props.Vm.ItemList.map(function (a, i) {
                    //return React.DOM.li({
                    //    className: "acsSingleSelectorItem left " + (a.Text == this.props.Vm.SelectText ? "selected" : ""),
                    //    value: a.Value,
                    //    onClick: () => { this.fOnClick(a); }
                    //}, a.Text,
                    //    a.Text == this.props.Vm.SelectText ? React.DOM.em(null) : null,
                    //    a.Text == this.props.Vm.SelectText ? React.DOM.i({ className: "fa fa-check" }) : null);
                    return React.createElement("li", {className: "nav-item Hu-pointer Hc-single-selector " + (a.Text == _this.props.Vm.SelectText ? "Hz-selected" : ""), value: a.Value, onClick: function () { _this.fOnClick(a); return false; }}, a.Text, a.Text == _this.props.Vm.SelectText ? React.DOM.em(null) : null, a.Text == _this.props.Vm.SelectText ? React.DOM.i({ className: " icon-ok fa fa-check" }) : null);
                });
                //return React.DOM.ul({ className: " clearfix" }, _select);
                return React.createElement("ul", {className: "nav nav-tabs Hc-radio-list clearfix"}, _select);
            };
            return RadioReact;
        }(BaseColReact));
        ui.RadioReact = RadioReact;
        var RadioProps = (function (_super) {
            __extends(RadioProps, _super);
            function RadioProps() {
                _super.apply(this, arguments);
            }
            return RadioProps;
        }(BaseColProps));
        ui.RadioProps = RadioProps;
        var RadioStates = (function (_super) {
            __extends(RadioStates, _super);
            function RadioStates() {
                _super.apply(this, arguments);
            }
            return RadioStates;
        }(BaseColStates));
        ui.RadioStates = RadioStates;
        var RadioVm = (function (_super) {
            __extends(RadioVm, _super);
            function RadioVm() {
                _super.apply(this, arguments);
                this.ReactType = RadioReact;
                this.pRegName = "单选控件";
                this.ItemList = new Array();
            }
            RadioVm.prototype.dataValueGet = function () {
                return this.pDataValue;
            };
            RadioVm.prototype.pOnchange = function (val) {
                var isCheck = _super.prototype.pOnchange.call(this, val);
                if (isCheck) {
                    this.pDataValue = val;
                    for (var i = 0; i < this.ItemList.length; i++) {
                        if (this.ItemList[i].Value == val) {
                            this.SelectText = this.ItemList[i].Text;
                            break;
                        }
                    }
                }
                return isCheck;
            };
            RadioVm.Test = function (num) {
                if (num == undefined)
                    num = 7;
                var bean = new RadioVm();
                for (var i = 0; i < num; i++) {
                    bean.ItemList = bean.ItemList.concat({ Value: i.toString(), Text: "选项 " + i });
                }
                bean.initDataValue((num - 1).toString());
                var _item = bean.ItemList[num - 1];
                if (_item)
                    bean.SelectText = (_item).Text;
                return bean;
            };
            return RadioVm;
        }(BaseColVm));
        ui.RadioVm = RadioVm;
        iocFile.Core.Ioc.Current().RegisterType("RadioVm", BaseColVm, RadioVm);
    })(ui = exports.ui || (exports.ui = {}));
});
