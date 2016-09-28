var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../00core/baseCol", "./../../01core/Ioc", "./../../01core/Util", "react"], function (require, exports, basecolFile, iocFile, utilFile, React) {
    "use strict";
    var BaseColReact = basecolFile.Core.BaseColReact;
    var BaseColVm = basecolFile.Core.BaseColVm;
    var BaseColProps = basecolFile.Core.BaseColProps;
    var BaseColStates = basecolFile.Core.BaseColStates;
    var BaseColAction = basecolFile.Core.BaseColAction;
    var ui;
    (function (ui) {
        var DetailDateAction = (function (_super) {
            __extends(DetailDateAction, _super);
            function DetailDateAction() {
                _super.apply(this, arguments);
            }
            return DetailDateAction;
        }(BaseColAction));
        ui.DetailDateAction = DetailDateAction;
        var DetailDateReact = (function (_super) {
            __extends(DetailDateReact, _super);
            function DetailDateReact() {
                _super.apply(this, arguments);
            }
            DetailDateReact.prototype.pInputOnChange = function (e) {
                //生成action ,并且广播
                var _val = e.target["value"];
                var _ac = new DetailDateAction();
                _ac.DataValue = _val;
                this.pDispatcher(_ac);
                //调用Object的设置
                this.props.Vm.reactDataValueSet(_val);
            };
            DetailDateReact.prototype.pSender = function () {
                //return React.DOM.div(null, React.DOM.label ({
                //    ref: "detaildate",
                //    readOnly:true
                //}, this.fValueFormat(this.props.Vm.reactDataValueGet())));
                return React.createElement("div", null, React.createElement("label", {ref: "detaildate", readOnly: "true"}, this.fValueFormat(this.props.Vm.reactDataValueGet())));
            };
            DetailDateReact.prototype.fValueFormat = function (val) {
                if (utilFile.Core.Util.isDate(val)) {
                    var _dateVal = utilFile.Core.Util.parse(val);
                    var _res = _dateVal.getFullYear() + "年" + (_dateVal.getMonth() + 1) + "月" + _dateVal.getDate() + "日";
                    return _res.toString();
                }
                else {
                    return "(空)";
                }
            };
            return DetailDateReact;
        }(BaseColReact));
        ui.DetailDateReact = DetailDateReact;
        var DetailDateProps = (function (_super) {
            __extends(DetailDateProps, _super);
            function DetailDateProps() {
                _super.apply(this, arguments);
            }
            return DetailDateProps;
        }(BaseColProps));
        ui.DetailDateProps = DetailDateProps;
        var DetailDateStates = (function (_super) {
            __extends(DetailDateStates, _super);
            function DetailDateStates() {
                _super.apply(this, arguments);
            }
            return DetailDateStates;
        }(BaseColStates));
        ui.DetailDateStates = DetailDateStates;
        var DetailDateVm = (function (_super) {
            __extends(DetailDateVm, _super);
            function DetailDateVm() {
                _super.call(this);
                this.ReactType = DetailDateReact;
                this.pRegName = "日期显示控件";
            }
            DetailDateVm.Test = function () {
                var _bean = new DetailDateVm();
                _bean.initDataValue(new Date().toLocaleDateString());
                return _bean;
            };
            return DetailDateVm;
        }(BaseColVm));
        ui.DetailDateVm = DetailDateVm;
        iocFile.Core.Ioc.Current().RegisterType("DetailDateVm", BaseColVm, DetailDateVm);
    })(ui = exports.ui || (exports.ui = {}));
});
