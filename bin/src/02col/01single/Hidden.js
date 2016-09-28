var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../00core/baseCol", "./../../01core/Ioc", "./Text", "react"], function (require, exports, basecolFile, iocFile, textFile, React) {
    "use strict";
    var BaseColReact = basecolFile.Core.BaseColReact;
    var BaseColVm = basecolFile.Core.BaseColVm;
    var ui;
    (function (ui) {
        var HiddenReact = (function (_super) {
            __extends(HiddenReact, _super);
            function HiddenReact() {
                _super.apply(this, arguments);
            }
            //-----------
            HiddenReact.prototype.pInputOnChange = function (e) {
                //生成action ,并且广播
                var _val = e.target["value"];
                var _ac = new textFile.ui.TextAction();
                _ac.DataValue = _val;
                this.pDispatcher(_ac);
                //调用Object的设置
                this.props.Vm.reactDataValueSet(_val);
            };
            HiddenReact.prototype.pSender = function () {
                //return React.DOM.div(null, React.DOM.input({
                //    value: this.props.Vm.reactDataValueGet(),
                //    onChange: (e) => { this.pInputOnChange(e) },
                //    type: "hidden"
                var _this = this;
                //}, ""));
                return React.createElement("div", null, React.createElement("input", {value: this.props.Vm.reactDataValueGet(), onChange: function (e) { _this.pInputOnChange(e); return false; }, type: "hidden"}));
            };
            return HiddenReact;
        }(BaseColReact));
        ui.HiddenReact = HiddenReact;
        var HiddenVm = (function (_super) {
            __extends(HiddenVm, _super);
            function HiddenVm() {
                _super.call(this);
                this.ReactType = HiddenReact;
                this.pRegName = "隐藏控件";
            }
            HiddenVm.Test = function () {
                var _bean = new HiddenVm();
                _bean.initDataValue("我隐藏了");
                return _bean;
            };
            return HiddenVm;
        }(BaseColVm));
        ui.HiddenVm = HiddenVm;
        iocFile.Core.Ioc.Current().RegisterType("HiddenVm", BaseColVm, HiddenVm);
    })(ui = exports.ui || (exports.ui = {}));
});
