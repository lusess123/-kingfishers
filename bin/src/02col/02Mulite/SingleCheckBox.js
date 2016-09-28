/// <reference path="../../../typings/jquery/jquery.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../00core/baseCol", "./../../01core/Ioc", "react", "react-dom"], function (require, exports, basecolFile, iocFile, React, ReactDOM) {
    "use strict";
    var BaseColReact = basecolFile.Core.BaseColReact;
    var BaseColVm = basecolFile.Core.BaseColVm;
    var BaseColProps = basecolFile.Core.BaseColProps;
    var BaseColStates = basecolFile.Core.BaseColStates;
    var BaseColAction = basecolFile.Core.BaseColAction;
    var ui;
    (function (ui) {
        var SingleCheckBoxAction = (function (_super) {
            __extends(SingleCheckBoxAction, _super);
            function SingleCheckBoxAction() {
                _super.apply(this, arguments);
            }
            return SingleCheckBoxAction;
        }(BaseColAction));
        ui.SingleCheckBoxAction = SingleCheckBoxAction;
        var SingleCheckBoxReact = (function (_super) {
            __extends(SingleCheckBoxReact, _super);
            function SingleCheckBoxReact() {
                _super.apply(this, arguments);
                this.$CheckBox = $("<a/>");
                this.IsCheck = false;
                this.CheckBoxObj = null;
            }
            SingleCheckBoxReact.prototype.pInputOnChange = function (e) {
                //生成action ,并且广播
                var _val = e.target["value"];
                var _ac = new SingleCheckBoxAction();
                _ac.DataValue = _val;
                this.pDispatcher(_ac);
                //调用Object的设置
                this.props.Vm.reactDataValueSet(_val);
            };
            SingleCheckBoxReact.prototype.pSender = function () {
                var __this = this;
                var _dateval = __this.props.Vm.reactDataValueGet();
                if (!(_dateval == "true" || _dateval == "false" || _dateval == "")) {
                    alert("输入的数据格式不正确");
                }
                else {
                    __this.IsCheck = _dateval == "true" ? true : false;
                }
                //return React.DOM.div(null, React.DOM.i({
                //    ref: "singlecheckbox",
                //    className: __this.IsCheck ? "fa fa-check-square-o Hu-pointer" :"fa fa-square-o Hu-pointer",
                //    value: __this.IsCheck?"true":"false",
                //    onClick: function () { __this.singleCheckBoxClick(); }
                //}, ""));
                return React.createElement("span", null, React.createElement("i", {ref: "singlecheckbox", className: "Hu-checkbox Hu-pointer " + (__this.IsCheck ? "icon-check fa fa-check-square-o " : "icon-check-empty fa fa-square-o"), value: __this.IsCheck ? "true" : "false", onClick: function () { __this.singleCheckBoxClick(); return false; }}));
            };
            SingleCheckBoxReact.prototype.singleCheckBoxClick = function () {
                var _$dom = this.fGetSingleCheckBoxDom();
                if (this.IsCheck) {
                    this.IsCheck = false;
                    _$dom.removeClass("icon-check fa fa-check-square-o");
                    _$dom.addClass("icon-check-empty fa fa-square-o");
                    this.props.Vm.reactDataValueSet("false");
                }
                else {
                    this.IsCheck = true;
                    _$dom.removeClass("icon-check-empty fa fa-square-o");
                    _$dom.addClass("icon-check fa fa-check-square-o");
                    this.props.Vm.reactDataValueSet("true");
                }
            };
            SingleCheckBoxReact.prototype.fGetSingleCheckBoxDom = function () {
                var _reactObj = this.refs["singlecheckbox"];
                var _dom = ReactDOM.findDOMNode(_reactObj);
                var _$dom = $(_dom);
                return _$dom;
            };
            return SingleCheckBoxReact;
        }(BaseColReact));
        ui.SingleCheckBoxReact = SingleCheckBoxReact;
        var SingleCheckBoxProps = (function (_super) {
            __extends(SingleCheckBoxProps, _super);
            function SingleCheckBoxProps() {
                _super.apply(this, arguments);
            }
            return SingleCheckBoxProps;
        }(BaseColProps));
        ui.SingleCheckBoxProps = SingleCheckBoxProps;
        var SingleCheckBoxStates = (function (_super) {
            __extends(SingleCheckBoxStates, _super);
            function SingleCheckBoxStates() {
                _super.apply(this, arguments);
            }
            return SingleCheckBoxStates;
        }(BaseColStates));
        ui.SingleCheckBoxStates = SingleCheckBoxStates;
        var SingleCheckBoxVm = (function (_super) {
            __extends(SingleCheckBoxVm, _super);
            function SingleCheckBoxVm() {
                _super.call(this);
                this.ReactType = SingleCheckBoxReact;
                this.pRegName = "打勾";
            }
            SingleCheckBoxVm.Test = function () {
                var _bean = new SingleCheckBoxVm();
                //var dateVal = new Date().toLocaleDateString();
                //dateVal = dateVal.replace(/\//g, "-");
                //_bean.dataValueSet(dateVal);
                return _bean;
            };
            return SingleCheckBoxVm;
        }(BaseColVm));
        ui.SingleCheckBoxVm = SingleCheckBoxVm;
        iocFile.Core.Ioc.Current().RegisterType("SingleCheckBoxVm", BaseColVm, SingleCheckBoxVm);
    })(ui = exports.ui || (exports.ui = {}));
});
