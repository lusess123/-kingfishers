var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../01core/0Dom", "react"], function (require, exports, domFile, React) {
    "use strict";
    var test;
    (function (test) {
        var TestAction = (function (_super) {
            __extends(TestAction, _super);
            function TestAction() {
                _super.apply(this, arguments);
            }
            return TestAction;
        }(domFile.Core.DomAction));
        test.TestAction = TestAction;
        var TestStates = (function (_super) {
            __extends(TestStates, _super);
            function TestStates() {
                _super.apply(this, arguments);
                // LogList: Array<string>;
                this.IsShow = false;
            }
            return TestStates;
        }(domFile.Core.DomStates));
        test.TestStates = TestStates;
        var TestReact = (function (_super) {
            __extends(TestReact, _super);
            function TestReact() {
                _super.apply(this, arguments);
                this.state = new TestStates();
            }
            TestReact.prototype.fun_btn_getOri = function () {
                this.props.Vm.SetValByColObjOriValue();
            };
            TestReact.prototype.fun_btn_getColObjValue = function () {
                this.props.Vm.SetValByColObjValue();
            };
            TestReact.prototype.fun_btn_setVal = function () {
                this.props.Vm.SetColVal();
            };
            TestReact.prototype.fun_btn_legal = function () {
                this.props.Vm.ControlObj.legal();
            };
            TestReact.prototype.fun_btn_clear = function () {
                this.props.Vm.LogList = [];
                this.forceUpdate();
            };
            TestReact.prototype.fun_textareaChange = function (e) {
                var _val = e.target["value"];
                this.props.Vm.ValTxt = _val;
                this.props.Vm.forceUpdate("");
            };
            TestReact.prototype.pSender = function () {
                var _this = this;
                var _ul = this.props.Vm.LogList.map(function (a) {
                    return React.DOM.div(null, a);
                });
                var _btn = React.createElement("div", {className: "Hg-margin-t btn-group-sm"}, React.createElement("button", {role: "button", className: "btn btn-sm btn-primary", onClick: function () { _this.fun_btn_getOri(); return false; }}, "获取原始值"), React.createElement("button", {role: "button", className: "btn btn-sm btn-success", onClick: function () { _this.fun_btn_getColObjValue(); return false; }}, "获取值"), React.createElement("button", {role: "button", className: "btn btn-sm btn-primary", onClick: function () { _this.fun_btn_setVal(); return false; }}, "设置值"), React.createElement("button", {role: "button", className: "btn btn-sm btn-primary", onClick: function () { _this.fun_btn_setVal(); return false; }}, "设置值"), React.createElement("button", {role: "button", className: "btn btn-sm btn-primary", onClick: function () { _this.fun_btn_legal(); return false; }}, "验证"), React.createElement("button", {className: "btn btn-sm btn-primary"}, "销毁"), React.createElement("button", {className: "btn btn-sm btn-primary"}, "重建"), React.createElement("button", {role: "button", className: "btn btn-sm btn-primary", onClick: function () { _this.fun_btn_clear(); }}, "清空日志"));
                return React.createElement("div", {className: "panel"}, React.createElement("div", {className: "Hc-list-num"}, this.props.children), React.createElement("div", {className: "Hu-pointer", onClick: function () { _this.fun_PanelShow(); }}, React.createElement("h6", {className: "panel-title"}, React.createElement("a", {className: (this.props.Vm.IsShow ? " icon-caret-up fa fa-caret-square-o-up" : " icon-caret-down fa fa-caret-square-o-down") + "  "}, this.props.Vm.ControlObj.getRegName() + " (" + this.props.Vm.VmName + ")"))), React.createElement("div", {className: ("Hc-list-item " + (this.props.Vm.IsShow ? " " : "hide"))}, React.createElement("div", null, this.props.Vm.ControlObj.intoDom(), _btn, React.createElement("div", {className: "panel"}, React.createElement("textarea", {value: this.props.Vm.ValTxt, onChange: function (e) { _this.fun_textareaChange(e); return false; }})))), React.createElement("ul", null, _ul));
            };
            TestReact.prototype.fun_PanelShow = function () {
                this.props.Vm.IsShow = !this.props.Vm.IsShow;
                this.forceUpdate();
            };
            return TestReact;
        }(domFile.Core.DomReact));
        test.TestReact = TestReact;
        var TestVm = (function (_super) {
            __extends(TestVm, _super);
            function TestVm(controlObj) {
                var _this = this;
                _super.call(this);
                this.ReactType = TestReact;
                this.LogList = new Array();
                this.ValTxt = "";
                this.VmName = "";
                this.ControlObj = controlObj;
                this.pRegName = "测试控件的控件";
                //  var _this = this;
                this.ControlObj.ChangeEventFun = function (val, col) {
                    var _val = val;
                    //alert(_val);
                    _this.LogList = _this.LogList.concat("于" + new Date().toLocaleString() + "   更新了新值:  " + _val);
                    _this.forceUpdate("");
                    return true;
                };
            }
            TestVm.prototype.SetValByColObjOriValue = function () {
                var _val = this.ControlObj.getOriValue();
                //   alert(_val);
                this.ValTxt = _val;
                this.LogList = this.LogList.concat("该控件的原始值是：  " + _val);
                this.forceUpdate("");
            };
            TestVm.prototype.SetValByColObjValue = function () {
                var _val = this.ControlObj.vmDataValueGet();
                //   alert(_val);
                this.ValTxt = _val;
                this.forceUpdate("");
            };
            TestVm.prototype.SetColVal = function () {
                this.ControlObj.vmDataValueSet(this.ValTxt);
                this.forceUpdate("");
            };
            return TestVm;
        }(domFile.Core.DomVm));
        test.TestVm = TestVm;
        var TestProps = (function (_super) {
            __extends(TestProps, _super);
            function TestProps() {
                _super.apply(this, arguments);
            }
            return TestProps;
        }(domFile.Core.DomProps));
        test.TestProps = TestProps;
    })(test = exports.test || (exports.test = {}));
});
