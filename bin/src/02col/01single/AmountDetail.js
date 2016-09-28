var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/Ioc", "./../../01core/Util", "react", "react-dom", "./../00core/baseCol"], function (require, exports, iocFile, utilFile, React, ReactDOM, basecolFile) {
    "use strict";
    var BaseColReact = basecolFile.Core.BaseColReact;
    var BaseColVm = basecolFile.Core.BaseColVm;
    var BaseColProps = basecolFile.Core.BaseColProps;
    var BaseColStates = basecolFile.Core.BaseColStates;
    var BaseColAction = basecolFile.Core.BaseColAction;
    var ui;
    (function (ui) {
        var AmountDetailAction = (function (_super) {
            __extends(AmountDetailAction, _super);
            function AmountDetailAction() {
                _super.apply(this, arguments);
            }
            return AmountDetailAction;
        }(BaseColAction));
        ui.AmountDetailAction = AmountDetailAction;
        var AmountDetailReact = (function (_super) {
            __extends(AmountDetailReact, _super);
            function AmountDetailReact() {
                _super.apply(this, arguments);
                this.fBigAmount = "";
                this.fMiniAmount = "";
            }
            AmountDetailReact.prototype.pInputOnChange = function (e) {
                //生成action ,并且广播
                var _val = e.target["value"];
                var _ac = new AmountDetailAction();
                _ac.DataValue = _val;
                this.pDispatcher(_ac);
                //调用Object的设置
                this.props.Vm.reactDataValueSet(_val);
            };
            AmountDetailReact.prototype.pSender = function () {
                var _val = this.props.Vm.reactDataValueGet();
                var _amount = this.fGetAmountStr(_val);
                this.fConvertToBig(_amount, null);
                //return React.DOM.div(null,
                //        React.DOM.label({
                //            ref: "amount",
                //            className: "ACT-MINI",
                //            readOnly: true
                //        }, this.fMiniAmount),
                //        React.DOM.div({
                //            ref: "amountText",
                //            className: "ACT-BIG"
                //        }, this.fBigAmount)
                //    );
                return React.createElement("div", null, React.createElement("label", {ref: "amount", className: "ACT-MINI", readOnly: "true"}, this.fMiniAmount), React.createElement("div", {ref: "amountText", className: "ACT-BIG"}, this.fBigAmount));
            };
            //金额大小写格式转换，并赋值给文本框
            AmountDetailReact.prototype.fConvertToBig = function (val, fun) {
                var __this = this;
                utilFile.Core.Util.AsyncJs(["/AtawStatic/lib/03Extend/amount/amountconvert.js"], function () {
                    var _val = val;
                    if (_val == "") {
                        __this.fBigAmount = "";
                        __this.fMiniAmount = _val;
                    }
                    else {
                        if (__this.props.Vm.Unit == "W") {
                            _val = parseFloat(val) / 10000;
                            //四舍五入，保留6位小数
                            _val = __this.fDecimalAmount(_val, 6);
                            __this.fMiniAmount = formatValue(_val) + "万元";
                        }
                        else {
                            _val = __this.fDecimalAmount(_val, 2);
                            __this.fMiniAmount = formatValue(_val) + "元";
                        }
                        __this.fBigAmount = atoc(val);
                    }
                    __this.fGetAmountDom("amount").text(__this.fMiniAmount);
                    __this.fGetAmountDom("amountText").text(__this.fBigAmount);
                    if (fun) {
                        fun.call(__this);
                    }
                });
                return true;
            };
            //验证输入的金额格式，只能输入数字或小数
            AmountDetailReact.prototype.fGetAmountStr = function (val) {
                var n = 2;
                if (this.props.Vm.Unit == "W") {
                    n = 6;
                }
                var _val = val.replace(/[^\.\d]/g, "");
                if (_val == "") {
                    return "0";
                }
                var arr = _val.split(".");
                var amountStr = _val;
                if (arr.length > 1) {
                    amountStr = arr[0] + "." + arr[1].substring(0, n);
                }
                return amountStr;
            };
            //获取金额控件
            AmountDetailReact.prototype.fGetAmountDom = function (ref) {
                var _reactObj = this.refs[ref];
                var _dom = ReactDOM.findDOMNode(_reactObj);
                var _$dom = $(_dom);
                return _$dom;
            };
            //金额四舍五入，保留n位小数位数
            AmountDetailReact.prototype.fDecimalAmount = function (amount, n) {
                var vv = Math.pow(10, n);
                return Math.round(amount * vv) / vv;
            };
            return AmountDetailReact;
        }(BaseColReact));
        ui.AmountDetailReact = AmountDetailReact;
        var AmountDetailProps = (function (_super) {
            __extends(AmountDetailProps, _super);
            function AmountDetailProps() {
                _super.apply(this, arguments);
            }
            return AmountDetailProps;
        }(BaseColProps));
        ui.AmountDetailProps = AmountDetailProps;
        var AmountDetailStates = (function (_super) {
            __extends(AmountDetailStates, _super);
            function AmountDetailStates() {
                _super.apply(this, arguments);
            }
            return AmountDetailStates;
        }(BaseColStates));
        ui.AmountDetailStates = AmountDetailStates;
        var AmountDetailVm = (function (_super) {
            __extends(AmountDetailVm, _super);
            function AmountDetailVm() {
                _super.call(this);
                this.ReactType = AmountDetailReact;
                this.pRegName = "金额详情控件";
                this.Unit = ""; //单位，空为默认， W 表示以万为单位
            }
            AmountDetailVm.prototype.dataValueGet = function () {
                var _val = this.pDataValue;
                var vv = Math.pow(10, 2);
                var _amount = Math.round(parseFloat(_val) * vv) / vv;
                if (isNaN(_amount)) {
                    _amount = 0;
                }
                return _amount.toString();
            };
            AmountDetailVm.Test = function () {
                var _bean = new AmountDetailVm();
                _bean.initDataValue("2");
                _bean.Unit = "W";
                return _bean;
            };
            return AmountDetailVm;
        }(BaseColVm));
        ui.AmountDetailVm = AmountDetailVm;
        iocFile.Core.Ioc.Current().RegisterType("AmountDetailVm", BaseColVm, AmountDetailVm);
    })(ui = exports.ui || (exports.ui = {}));
});
