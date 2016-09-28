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
        var AmountAction = (function (_super) {
            __extends(AmountAction, _super);
            function AmountAction() {
                _super.apply(this, arguments);
            }
            return AmountAction;
        }(BaseColAction));
        ui.AmountAction = AmountAction;
        var AmountReact = (function (_super) {
            __extends(AmountReact, _super);
            function AmountReact() {
                _super.apply(this, arguments);
                this.IsChangeInput = false;
                this.fMiniAmount = "";
                this.fBigAmount = "";
                this.IsFir = true;
                this.IsOnBlur = false;
            }
            AmountReact.prototype.pInputOnChange = function (e) {
                //生成action ,并且广播
                var _val = e.target["value"];
                this.fMiniAmount = _val;
                this.forceUpdate();
                ////调用Object的设置
                //this.props.Vm.reactDataValueSet(_val);
            };
            AmountReact.prototype.pSender = function () {
                var _this = this;
                var _val = this.props.Vm.reactDataValueGet();
                var _amount = this.fGetAmountStr(_val);
                if (this.IsFir) {
                    this.IsFir = false;
                    this.fConvertToBig(_amount, true, null);
                }
                else {
                    if (this.IsChangeInput) {
                        this.IsChangeInput = false;
                    }
                    else {
                        if (this.IsOnBlur) {
                            this.IsOnBlur = false;
                        }
                        this.fConvertToBig(_amount, true, null);
                    }
                }
                //return React.DOM.div(null, React.DOM.input({
                //    ref: "amount",
                //    className: "ACT-MINI Hg-width",
                //    placeholder: this.fGetPlaceholder(),
                //    value: this.fMiniAmount,
                //    onChange: (e) => { this.IsChangeInput = true; this.pInputOnChange(e); },
                //    onBlur: (e) => { this.IsChangeInput = false; this.IsOnBlur = true; this.fMiniAmountOnBlur(e); }
                //}, React.DOM.div({
                //    ref: "amountText",
                //    className: "ACT-BIG"
                //}, this.fBigAmount)));
                //return React.DOM.div(null, React.DOM.input({
                //    ref: "amount",
                //    className: "ACT-MINI Hg-width",
                //    placeholder: this.fGetPlaceholder(),
                //    value: this.fMiniAmount,
                //    onChange: (e) => { this.IsChangeInput = true; this.pInputOnChange(e); },
                //    onBlur: (e) => { this.IsChangeInput = false; this.IsOnBlur = true; this.fMiniAmountOnBlur(e); }
                //}, <div className="ACT-BIG" ref="amountText">{this.fBigAmount}</div>));
                return React.createElement("div", null, React.createElement("input", {ref: "amount", className: "ACT-MINI Hg-width", placeholder: this.fGetPlaceholder(), value: this.fMiniAmount, onChange: function (e) { _this.IsChangeInput = true; _this.pInputOnChange(e); return false; }, onBlur: function (e) { _this.IsChangeInput = false; _this.IsOnBlur = true; _this.fMiniAmountOnBlur(e); alert("Blur"); return false; }}), React.createElement("div", {className: "ACT-BIG", ref: "amountText"}, this.fBigAmount));
            };
            //根据金额单位设置提示
            AmountReact.prototype.fGetPlaceholder = function () {
                if (this.props.Vm.Unit == "W") {
                    return "输入万单位的金额...";
                }
                return "请输入小写金额...";
            };
            //文本框失去焦点后触发
            AmountReact.prototype.fMiniAmountOnBlur = function (e) {
                //生成action ,并且广播
                var _val = e.target["value"];
                var _ac = new AmountAction();
                _ac.DataValue = _val;
                _ac.Vm = this.props.Vm;
                this.pDispatcher(_ac);
                //调用Object的设置
                var _amount = this.fGetAmountStr(_val);
                this.props.Vm.reactDataValueSet(this.fGetAmountValue(_amount));
                this.forceUpdate();
            };
            //验证输入的金额格式，只能输入数字或小数
            AmountReact.prototype.fGetAmountStr = function (val) {
                if (this.IsChangeInput) {
                    return val.replace(/[\s￥,万元]+/g, "");
                }
                else {
                    var n = 2;
                    if (this.props.Vm.Unit == "W") {
                        n = 6;
                    }
                    var _val = val.replace(/[^\.\d]/g, "");
                    var arr = _val.split(".");
                    var amountStr = _val;
                    if (arr.length > 1) {
                        amountStr = arr[0] + "." + arr[1].substring(0, n);
                    }
                    return amountStr;
                }
            };
            //获取金额的实际保存值
            AmountReact.prototype.fGetAmountValue = function (val) {
                if (this.props.Vm.Unit == "W") {
                    return (parseFloat(val) * 10000).toString();
                }
                return val;
            };
            //金额大小写格式转换，并赋值给文本框
            AmountReact.prototype.fConvertToBig = function (val, isW, fun) {
                var __this = this;
                utilFile.Core.Util.AsyncJs(["/AtawStatic/lib/03Extend/amount/amountconvert.js"], function () {
                    var _val = val;
                    if (_val == "") {
                        __this.fBigAmount = "";
                        __this.fMiniAmount = _val;
                    }
                    else {
                        if (isW) {
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
                        else {
                            _val = formatValue(_val);
                            if (__this.props.Vm.Unit == "W") {
                                __this.fMiniAmount = _val + "万元";
                                __this.fBigAmount = atoc(parseFloat(val) * 10000);
                            }
                            else {
                                __this.fMiniAmount = _val + "元";
                                __this.fBigAmount = atoc(parseFloat(val));
                            }
                        }
                    }
                    __this.fGetAmountDom("amount").val(__this.fMiniAmount);
                    __this.fGetAmountDom("amountText").text(__this.fBigAmount);
                    if (fun) {
                        fun.call(__this);
                    }
                });
                return true;
            };
            //金额四舍五入，保留n位小数位数
            AmountReact.prototype.fDecimalAmount = function (amount, n) {
                var vv = Math.pow(10, n);
                return Math.round(amount * vv) / vv;
            };
            //获取金额控件
            AmountReact.prototype.fGetAmountDom = function (ref) {
                var _reactObj = this.refs[ref];
                var _dom = ReactDOM.findDOMNode(_reactObj);
                var _$dom = $(_dom);
                return _$dom;
            };
            return AmountReact;
        }(BaseColReact));
        ui.AmountReact = AmountReact;
        var AmountProps = (function (_super) {
            __extends(AmountProps, _super);
            function AmountProps() {
                _super.apply(this, arguments);
            }
            return AmountProps;
        }(BaseColProps));
        ui.AmountProps = AmountProps;
        var AmountStates = (function (_super) {
            __extends(AmountStates, _super);
            function AmountStates() {
                _super.apply(this, arguments);
            }
            return AmountStates;
        }(BaseColStates));
        ui.AmountStates = AmountStates;
        var AmountVm = (function (_super) {
            __extends(AmountVm, _super);
            function AmountVm() {
                _super.call(this);
                this.ReactType = AmountReact;
                this.pRegName = "金额控件";
                this.Unit = ""; //单位，空为默认， W 表示以万为单位
            }
            AmountVm.prototype.dataValueGet = function () {
                var _val = this.pDataValue;
                var vv = Math.pow(10, 2);
                var _amount = Math.round(parseFloat(_val) * vv) / vv;
                if (isNaN(_amount)) {
                    _amount = 0;
                }
                return _amount.toString();
            };
            AmountVm.Test = function () {
                var _bean = new AmountVm();
                _bean.initDataValue("2");
                _bean.Unit = "W";
                return _bean;
            };
            return AmountVm;
        }(BaseColVm));
        ui.AmountVm = AmountVm;
        iocFile.Core.Ioc.Current().RegisterType("AmountVm", BaseColVm, AmountVm);
    })(ui = exports.ui || (exports.ui = {}));
});
