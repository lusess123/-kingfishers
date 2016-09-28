var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../00core/baseCol", "./../../01core/Ioc", "./Text", "react"], function (require, exports, basecolFile, iocFile, Text, React) {
    "use strict";
    var BaseColReact = basecolFile.Core.BaseColReact;
    var BaseColVm = basecolFile.Core.BaseColVm;
    var ui;
    (function (ui) {
        var PasswordReact = (function (_super) {
            __extends(PasswordReact, _super);
            function PasswordReact() {
                _super.apply(this, arguments);
            }
            //-----------
            PasswordReact.prototype.pInputOnChange = function (e) {
                //生成action ,并且广播
                var _val = e.target["value"];
                // $ ["r"]["pdom"] = this.props;
                var _ac = new Text.ui.TextAction();
                _ac.DataValue = _val;
                //_ac.Obj = this.props.Obj;
                this.pDispatcher(_ac);
                //调用Object的设置
                this.props.Vm.reactDataValueSet(_val);
            };
            PasswordReact.prototype.pSender = function () {
                //return React.DOM.div(null, React.DOM.input({
                //    className:"Hg-width",
                //    value: this.props.Vm.reactDataValueGet(),
                //    onChange: (e) => { this.pInputOnChange(e) },
                //    type: "password"
                //}, ""));
                var _this = this;
                return React.createElement("div", null, React.createElement("input", {className: "Hg-width", value: this.props.Vm.reactDataValueGet(), onChange: function (e) { _this.pInputOnChange(e); return false; }, type: "password"}));
            };
            return PasswordReact;
        }(BaseColReact));
        ui.PasswordReact = PasswordReact;
        var PasswordVm = (function (_super) {
            __extends(PasswordVm, _super);
            function PasswordVm() {
                _super.call(this);
                this.ReactType = PasswordReact;
                this.pRegName = "密码控件";
            }
            PasswordVm.Test = function () {
                var _bean = new PasswordVm();
                _bean.initDataValue("123456");
                return _bean;
            };
            return PasswordVm;
        }(BaseColVm));
        ui.PasswordVm = PasswordVm;
        iocFile.Core.Ioc.Current().RegisterType("PasswordVm", BaseColVm, PasswordVm);
    })(ui = exports.ui || (exports.ui = {}));
});
