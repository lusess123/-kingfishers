
import iocFile = require("./../../01core/Ioc");
import utilFile = require("./../../01core/Util");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../01core/0Dom"); import basecolFile = require("./../00core/baseCol"); import BaseColReact = basecolFile.Core.BaseColReact; import BaseColVm = basecolFile.Core.BaseColVm; import BaseColProps = basecolFile.Core.BaseColProps; import BaseColStates = basecolFile.Core.BaseColStates; import BaseColAction = basecolFile.Core.BaseColAction;
export module ui {


    export class AmountDetailAction extends BaseColAction {

    }


    export class AmountDetailReact extends BaseColReact<AmountDetailProps, AmountDetailStates, AmountDetailAction> implements domFile.Core.IReact {
        private fBigAmount: string = "";
        private fMiniAmount: string = "";

        protected pInputOnChange(e: React.FormEvent) {
            //生成action ,并且广播
            var _val = e.target["value"];
            var _ac: AmountDetailAction = new AmountDetailAction();
            _ac.DataValue = _val;
            this.pDispatcher(_ac);

            //调用Object的设置
            this.props.Vm.reactDataValueSet(_val);
        }

        public pSender(): React.ReactElement<any> {
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

            return <div>
                        <label ref="amount" className="ACT-MINI" readOnly="true">{this.fMiniAmount}</label>
                        <div ref="amountText" className="ACT-BIG">{this.fBigAmount}</div>
                    </div>
        }

        //金额大小写格式转换，并赋值给文本框
        private fConvertToBig(val, fun) {
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
        }

        //验证输入的金额格式，只能输入数字或小数
        private fGetAmountStr(val) {
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
        }

        //获取金额控件
        private fGetAmountDom(ref: string): JQuery {
            var _reactObj = this.refs[ref];
            var _dom = ReactDOM.findDOMNode(_reactObj);
            var _$dom = $(_dom);
            return _$dom;
        }

        //金额四舍五入，保留n位小数位数
        private fDecimalAmount(amount, n) {
            var vv = Math.pow(10, n);
            return Math.round(amount * vv) / vv;
        } 0

    }

    export class AmountDetailProps extends BaseColProps<AmountDetailVm> {

    }

    export class AmountDetailStates extends BaseColStates {

    }

    export class AmountDetailVm extends BaseColVm {
        public ReactType: any = AmountDetailReact;
        protected pRegName = "金额详情控件";

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

        public static Test(): AmountDetailVm {
            var _bean: AmountDetailVm = new AmountDetailVm();
            _bean.initDataValue("2");
            _bean.Unit = "W";
            return _bean;
        }
    }

   iocFile.Core.Ioc.Current().RegisterType("AmountDetailVm", BaseColVm, AmountDetailVm);
}


