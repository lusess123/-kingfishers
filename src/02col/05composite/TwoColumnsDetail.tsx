import domFile = require("./../../01core/0Dom"); import basecolFile = require("./../00core/baseCol"); import BaseColReact = basecolFile.Core.BaseColReact; import BaseColVm = basecolFile.Core.BaseColVm; import BaseColProps = basecolFile.Core.BaseColProps; import BaseColStates = basecolFile.Core.BaseColStates; import BaseColAction = basecolFile.Core.BaseColAction;
import iocFile = require("./../../01core/Ioc");
import utilFile = require("./../../01core/Util");
import NumMoney = require("./../../../Typings/0Type/Entity");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module ui{

    export class TwoColumnsDetailAction extends BaseColAction
    {

    }

    export class TwoColumnsDetailProps extends BaseColProps<TwoColumnsDetailVm>
    {
    }

    export class TwoColumnsDetailStates extends BaseColStates
    {
        
       
    }

    export class TwoColumnsDetailVm extends BaseColVm
    {
        public ReactType: any = TwoColumnsDetailReact;

        protected pRegName = "双字段详情控件";

        ItemList: Array<NumMoney.entity.NumMoney> = new Array<NumMoney.entity.NumMoney>();

        public SumMoney: number = 0;//总金额
      

        public constructor() {
            super();
        }
  

        public static Test(): TwoColumnsDetailVm {
            var _bean: TwoColumnsDetailVm = new TwoColumnsDetailVm();
            //将测试的值填充到数据中，然后显示的时候处理
            for (var i = 0; i < 3; i++)
            {
               var nummoney: NumMoney.entity.NumMoney = new NumMoney.entity.NumMoney();
                 nummoney.Num = "1515151zhd51515151" + i;
                 nummoney.Money = "2.266";
                 nummoney.isCheck = true;
                 _bean.ItemList.push(nummoney);
            }

            //设置到原始值当中
            var value: string = "";
            for (var i = 0; i < _bean.ItemList.length; i++) {
                value = '"' + _bean.ItemList[i].Num + "  " + _bean.ItemList[i].Money + '"' + value;
            }

            _bean.dataValueSet(value);
            //this.prototype.vmDataValueSet(value);

            return _bean;
        }
    }

    export class TwoColumnsDetailReact extends BaseColReact<TwoColumnsDetailProps, TwoColumnsDetailStates, TwoColumnsDetailAction> implements domFile.Core.IReact
    {
       
        public pSender(): React.ReactElement<any>
        {
          
            //可以在这里先进行格式化 对金额进行
            this.props.Vm.ItemList.forEach((a=> {
                this.props.Vm.SumMoney = this.fDecimalAmount(a.Money, 4) + this.props.Vm.SumMoney;
            }));
            

            //return React.DOM.div(null, this.props.Vm.ItemList.length != 0 ? this.props.Vm.ItemList.map((a) => {
            //    return React.DOM.div(null,
            //        React.DOM.label({ ref: "amount" }, this.NumFormat(a.Num)),
            //        React.DOM.label({ ref: "amount" }, this.fDecimalAmount(a.Money, 4)))
            //}) : "", React.DOM.label(null, "总金额" + this.props.Vm.SumMoney))

            return <div>
                        {
                        this.props.Vm.ItemList.length != 0 ? this.props.Vm.ItemList.map((a) => {
                            return <div className="Hu-two-columns-detail">
                                <label ref="amount">{this.NumFormat(a.Num) }</label> 
                                <label ref="amount">{this.fDecimalAmount(a.Money, 4)}</label>    
                            </div>
                            }) : ""
                        }
                        <label>
                            {"总金额" + this.props.Vm.SumMoney}
                        </label>
                     </div>
        }

        //对数据格式化
        protected NumFormat(a: string): string {
            //字符串过滤 或者是去空格 /[^\.\d]/g, "" /\s/g, ""
            var Num = a.replace(/[^\.\d]/g, "");
            var valueList = Num.split('');
            if (valueList.length > 8) {
                for (var i = 7; i < valueList.length; i = i + 8) {
                    valueList[i] += " ";
                }
                var value = valueList.join('');
                return value;
            } else {
                return Num;
            }

        }

        //金额四舍五入，保留n位小数位数
        private fDecimalAmount(amount, n) {
            var amount = amount.replace(/[^\.\d]/g, "");
            var vv = Math.pow(10, n);
            return Math.round(amount * vv) / vv;
        } 0

    }

    iocFile.Core.Ioc.Current().RegisterType("TwoColumnsDetailVm", BaseColVm, TwoColumnsDetailVm);
}