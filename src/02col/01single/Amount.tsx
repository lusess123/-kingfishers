/// <reference path="../../../typings/0type/type.d.ts" />
import domFile = require("./../../01core/0Dom"); import basecolFile = require("./../00core/baseCol"); import BaseColReact = basecolFile.Core.BaseColReact; import BaseColVm = basecolFile.Core.BaseColVm; import BaseColProps = basecolFile.Core.BaseColProps; import BaseColStates = basecolFile.Core.BaseColStates; import BaseColAction = basecolFile.Core.BaseColAction;
import domCore = domFile.Core;
import iocFile = require("./../../01core/Ioc");
import utilFile = require("./../../01core/Util");

/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");

export module ui {


    export class AmountAction extends BaseColAction {
    }

    export class AmountReact extends BaseColReact<AmountProps, AmountStates, AmountAction> implements domCore.IReact {
        private IsChangeInput: boolean = false;
        private fMiniAmount: string = "";
        private fBigAmount: string = "";
        private IsFir: boolean = true;
        private IsOnBlur: boolean = false;

        protected pInputOnChange(e: React.FormEvent) {
            //生成action ,并且广播
            var _val = e.target["value"];

            this.fMiniAmount = _val;
            this.forceUpdate();
            ////调用Object的设置
            //this.props.Vm.reactDataValueSet(_val);
        }

        public pSender(): React.ReactElement<any> {
            var _val = this.props.Vm.reactDataValueGet();
            var _amount = this.fGetAmountStr(_val);
            if (this.IsFir) {
                this.IsFir = false;
                this.fConvertToBig(_amount, true, null);
            } else {
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


            return <div>
                    <input ref="amount" className="ACT-MINI Hg-width" placeholder={this.fGetPlaceholder() }
                        value={this.fMiniAmount}
                        onChange={(e) => { this.IsChangeInput = true; this.pInputOnChange(e); return false; } }
                        onBlur={(e) => { this.IsChangeInput = false; this.IsOnBlur = true; this.fMiniAmountOnBlur(e); alert("Blur"); return false; } }>
                </input>
                                     <div className="ACT-BIG" ref="amountText">{this.fBigAmount}</div>
                        
                </div>


        }

        //根据金额单位设置提示
        private fGetPlaceholder() {
            if (this.props.Vm.Unit == "W") {
                return "输入万单位的金额...";
            }
            return "请输入小写金额...";
        }

        //文本框失去焦点后触发
        private fMiniAmountOnBlur(e: React.FormEvent) {
            //生成action ,并且广播
            var _val = e.target["value"];
            var _ac: AmountAction = new AmountAction();
            _ac.DataValue = _val;
            _ac.Vm = this.props.Vm;
            this.pDispatcher(_ac);

            //调用Object的设置
            var _amount = this.fGetAmountStr(_val);
            this.props.Vm.reactDataValueSet(this.fGetAmountValue(_amount));
            this.forceUpdate();
        }

        //验证输入的金额格式，只能输入数字或小数
        private fGetAmountStr(val) {
            if (this.IsChangeInput) {
                return val.replace(/[\s￥,万元]+/g, "")
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
        }

        //获取金额的实际保存值
        private fGetAmountValue(val) {
            if (this.props.Vm.Unit == "W") {
                return (parseFloat(val) * 10000).toString();
            }
            return val;
        }

        //金额大小写格式转换，并赋值给文本框
        private fConvertToBig(val, isW, fun) {
            var __this = this;

            utilFile.Core.Util.AsyncJs(["/AtawStatic/lib/03Extend/amount/amountconvert.js"], function () {
                var _val = val;
                if (_val == "") {
                    __this.fBigAmount = "";
                    __this.fMiniAmount = _val;
                }
                else {
                    if (isW) {//实际保存的值
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
                    else {//文本框输入
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
        }

        //金额四舍五入，保留n位小数位数
        private fDecimalAmount(amount, n) {
            var vv = Math.pow(10, n);
            return Math.round(amount * vv) / vv;
        }

        //获取金额控件
        private fGetAmountDom(ref: string): JQuery {
            var _reactObj = this.refs[ref];
            var _dom = ReactDOM.findDOMNode(_reactObj);
            var _$dom = $(_dom);
            return _$dom;
        }

    }

    export class AmountProps extends BaseColProps<AmountVm> {

    }

    export class AmountStates extends BaseColStates {

    }

    export class AmountVm extends BaseColVm {
        public ReactType: any = AmountReact;
        protected pRegName = "金额控件";

        public Unit: string = "";//单位，空为默认， W 表示以万为单位

        public constructor() {
            super();
        }

        public dataValueGet(): string {
            var _val = this.pDataValue;
            var vv = Math.pow(10, 2);
            var _amount = Math.round(parseFloat(_val) * vv) / vv;
            if (isNaN(_amount)) {
                _amount = 0;
            }
            return _amount.toString();
        }

        public static Test(): AmountVm {

            var _bean: AmountVm = new AmountVm();
            _bean.initDataValue("2");
            _bean.Unit = "W";

            return _bean;
        }
    }

    iocFile.Core.Ioc.Current().RegisterType("AmountVm", BaseColVm, AmountVm);
}


