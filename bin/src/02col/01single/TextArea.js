/// <reference path="../../../typings/jquery/jquery.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../00core/baseCol", "./../../01core/Ioc", "./../../01core/Util", "react", "react-dom"], function (require, exports, basecolFile, iocFile, utilFile, React, ReactDOM) {
    "use strict";
    var BaseColReact = basecolFile.Core.BaseColReact;
    var BaseColVm = basecolFile.Core.BaseColVm;
    var BaseColProps = basecolFile.Core.BaseColProps;
    var BaseColStates = basecolFile.Core.BaseColStates;
    var BaseColAction = basecolFile.Core.BaseColAction;
    var ui;
    (function (ui) {
        var TextAreaAction = (function (_super) {
            __extends(TextAreaAction, _super);
            function TextAreaAction() {
                _super.apply(this, arguments);
            }
            return TextAreaAction;
        }(BaseColAction));
        ui.TextAreaAction = TextAreaAction;
        var TextAreaReact = (function (_super) {
            __extends(TextAreaReact, _super);
            function TextAreaReact() {
                _super.apply(this, arguments);
            }
            TextAreaReact.prototype.pInputOnChange = function (e) {
                //生成action ,并且广播
                var _val = e.target["value"];
                var _ac = new TextAreaAction();
                _ac.DataValue = _val;
                this.pDispatcher(_ac);
                //调用Object的设置
                this.props.Vm.reactDataValueSet(_val);
            };
            TextAreaReact.prototype.pSender = function () {
                //return React.DOM.div(null, React.DOM.textarea({
                //    className:"Hg-width",
                //    ref:"textarea",
                //    value: this.props.Vm.reactDataValueGet(),
                var _this = this;
                //    onChange: (e) => { this.pInputOnChange(e) }
                //}, ""));
                return React.createElement("div", null, React.createElement("textarea", {className: "Hg-width", ref: "textarea", value: this.props.Vm.reactDataValueGet(), onChange: function (e) { _this.onChangeEvent(e); }}));
            };
            TextAreaReact.prototype.onChangeEvent = function (e) {
                this.props.Vm.isReadOnly ? null : this.pInputOnChange(e);
                return false;
            };
            TextAreaReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
                var _val = this.props.Vm.reactDataValueGet();
                var __this = this;
                utilFile.Core.Util.AsyncJs(["/AtawStatic/lib/03Extend/autosize/jquery.autosize.js"], function () {
                    var _$dom = __this.fGetTextAreaDom();
                    //_$dom["autosize"]();
                    _$dom.autosize();
                });
            };
            ;
            TextAreaReact.prototype.fGetTextAreaDom = function () {
                var _reactObj = this.refs["textarea"];
                var _dom = ReactDOM.findDOMNode(_reactObj);
                var _$dom = $(_dom);
                return _$dom;
            };
            TextAreaReact.prototype.pComponentWillUnmount = function () {
                _super.prototype.pComponentWillUnmount.call(this);
                this.fGetTextAreaDom().trigger("autosize.destroy");
            };
            ;
            return TextAreaReact;
        }(BaseColReact));
        ui.TextAreaReact = TextAreaReact;
        var TextAreaProps = (function (_super) {
            __extends(TextAreaProps, _super);
            function TextAreaProps() {
                _super.apply(this, arguments);
            }
            return TextAreaProps;
        }(BaseColProps));
        ui.TextAreaProps = TextAreaProps;
        var TextAreaStates = (function (_super) {
            __extends(TextAreaStates, _super);
            function TextAreaStates() {
                _super.apply(this, arguments);
            }
            return TextAreaStates;
        }(BaseColStates));
        ui.TextAreaStates = TextAreaStates;
        var TextAreaVm = (function (_super) {
            __extends(TextAreaVm, _super);
            function TextAreaVm() {
                _super.call(this);
                this.ReactType = TextAreaReact;
                this.pRegName = "多文本控件";
                this.isReadOnly = false;
            }
            TextAreaVm.Test = function () {
                var _bean = new TextAreaVm();
                _bean.initDataValue("初始化的多文本");
                // _bean.pRegName = "文本";
                // _bean.TopDom = top;
                return _bean;
            };
            return TextAreaVm;
        }(BaseColVm));
        ui.TextAreaVm = TextAreaVm;
        iocFile.Core.Ioc.Current().RegisterType("TextAreaVm", BaseColVm, TextAreaVm);
    })(ui = exports.ui || (exports.ui = {}));
});
