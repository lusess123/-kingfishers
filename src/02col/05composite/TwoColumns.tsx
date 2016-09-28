import domFile = require("./../../01core/0Dom"); import basecolFile = require("./../00core/baseCol"); import BaseColReact = basecolFile.Core.BaseColReact; import BaseColVm = basecolFile.Core.BaseColVm; import BaseColProps = basecolFile.Core.BaseColProps; import BaseColStates = basecolFile.Core.BaseColStates; import BaseColAction = basecolFile.Core.BaseColAction;
import iocFile = require("./../../01core/Ioc");
import utilFile = require("./../../01core/Util");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");

export module ui {

    export class NumMoney {
        public Num: string;//规定是16位的
        public Money: string;
        public isCheck: boolean = true;
    }

    export class TwoColumnsAction extends BaseColAction {

    }

    export class TwoColumnsProps extends BaseColProps<TwoColumnsVm>
    {

    }

    export class TwoColumnsVm extends BaseColVm {
        public ReactType: any = TwoColumsReact;
        protected pRegName = "双字段控价";


        public constructor() {
            super();
        }

        public static Test(): TwoColumnsVm {
            var _bean: TwoColumnsVm = new TwoColumnsVm();
            return _bean;
        }
    }

    export class TwoColumsStates extends BaseColStates {
        public ItemList: Array<NumMoney> = new Array<NumMoney>();//将添加的数据写这里在页面循环
        public SumMoney: number = 0;//总金额
        public fristMoney: string;//第一个输入的金额
        public fristNum: string;//第一个输入的票号
        public isCheck: boolean = true;
        public isAllOk: boolean = true;

    }

    export class TwoColumsReact extends BaseColReact<TwoColumnsProps, TwoColumsStates, TwoColumnsAction> implements domFile.Core.IReact {
        public state = this.getInitialState();

        protected getInitialState(): TwoColumsStates {
            var _beam = new TwoColumsStates();
            return _beam;
        }
        //添加票号
        protected addNumMoney(e: React.FormEvent) {
            var bean = new NumMoney();
            //将数据分成两份
            this.state.isCheck = this.CheckMoney(this.state.fristMoney) && this.CheckNum(this.state.fristNum);
            if (this.state.isCheck) {
                //成功
                if (this.state.ItemList.length == 0) {
                    var _valArr = this.state.fristNum.split(" ");
                } else {
                    var _valArr = this.state.ItemList[this.state.ItemList.length - 1].Num.split(" ");
                }

                if (_valArr.length > 1) {
                    var _newVal = parseInt(_valArr[1]) + 1;
                    var n = _valArr[0].length;
                    var _newStr = (Array(n).join("0") + _newVal).slice(-n);
                    var Num = _valArr[0] + " " + _newStr
                    bean.Num = Num;
                }
                bean.Money = this.state.fristMoney;
                this.state.ItemList.push(bean);
                //更新总数据
                this.pSetSumMoney();
            }

            this.forceUpdate();

        }
        //移除票号
        protected removeNmMoney(a: NumMoney) {
            //将点击的数据删除
            for (var i = 0; i < this.state.ItemList.length; i++) {
                if (a.Num == this.state.ItemList[i].Num) {
                    this.state.ItemList.splice(i, 1);
                }
            }
            //更新总数据
            this.pSetSumMoney();
            this.forceUpdate();
        }

        protected pNumInputOnBlur(e: React.FormEvent) {
            var value = e.target["value"];
            value = this.NumFormat(value);
            this.state.isCheck = this.CheckNum(value);
            if (!this.state.isCheck) {
                this.state.isAllOk = false;
            } else {
                this.state.isAllOk = true;
            }
            this.state.fristNum = value;
            this.forceUpdate();
        }

        protected pNumInputOnChange(e: React.FormEvent) {
            var _val = e.target["value"];
            this.setState(this.state.fristNum = _val)
        }
        //对金额进行验证的时候将 
        protected pMoneyInputOnChange(e: React.FormEvent) {
            var _val = e.target["value"];
            var value = _val.replace(/[^0-9]/ig, "");
            this.state.fristMoney = value;
            this.state.SumMoney = parseInt(value);
            this.forceUpdate();
        }

        protected pItemNumOnBuler(e: React.FormEvent, a: NumMoney) {
            for (var i = 0; i < this.state.ItemList.length; i++) {
                if (this.state.ItemList[i].Num == a.Num) {
                    var _val = e.target["value"];
                    var value = _val.replace(/[^0-9]/ig, "");
                    a.Num = value;
                    this.state.ItemList[i].Num = this.NumFormat(value);
                    if (!this.CheckNumNumMoney(a)) {
                        this.state.ItemList[i].isCheck = false;
                        this.state.isAllOk = false;
                    } else {
                        this.state.ItemList[i].isCheck = true;
                    }
                }
            }

            this.forceUpdate();
        }

        protected pItemNumOnChange(e: React.FormEvent, a: NumMoney) {
            for (var i = 0; i < this.state.ItemList.length; i++) {
                if (this.state.ItemList[i].Num == a.Num) {
                    this.setState(this.state.ItemList[i].Num = e.target["value"]);
                }
            }
        }

        protected pItemMoneyOnBuler(e: React.FormEvent, a: NumMoney) {
            for (var i = 0; i < this.state.ItemList.length; i++) {
                if (this.state.ItemList[i].Num == a.Num) {
                    var value = e.target["value"];
                    a.Money = value;
                    this.state.ItemList[i].Money = this.NumFormat(value);
                    if (!this.CheckNumNumMoney(a)) {
                        this.state.ItemList[i].isCheck = false;
                        this.state.isAllOk = false;
                    } else {
                        this.state.ItemList[i].isCheck = true;
                    }
                }   
            }
            this.pSetSumMoney();
            this.forceUpdate();
        }

        protected pItemMoneyOnChage(e: React.FormEvent, a: NumMoney) {
            for (var i = 0; i < this.state.ItemList.length; i++) {
                if (this.state.ItemList[i].Num == a.Num) {
                    this.setState(this.state.ItemList[i].Money = e.target["value"]);
                }
            }
        }

        protected pAddItemList(num: string, Money: string) {
            var _bean = new NumMoney();
            _bean.Num = num;
            _bean.Money = Money;
            this.state.ItemList.push(_bean);
        }
        //计算总金额
        protected pSetSumMoney() {
            this.state.SumMoney = parseInt(this.state.fristMoney);
            if (this.state.ItemList.length >= 1) {
                for (var i = 0; i < this.state.ItemList.length; i++) {
                    this.state.SumMoney = this.state.SumMoney + parseInt(this.state.ItemList[i].Money);
                }
            }
        }

        protected NumFormat(a: string): string {
            //字符串过滤 或者是去空格
            var Num = a.replace(/\s/g, "");
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

        //检查输入的票号是否合格
        protected CheckNumNumMoney(a: NumMoney): boolean {
            //将空格去掉 然后判断是否是16位的
            var isMoney = this.CheckMoney(a.Money);
            var isNum = this.CheckNum(a.Num);
            return isMoney && isNum;
        }


        protected CheckMoney(a: string): boolean {
            var reg = /^[0-9]+.?[0-9]*$/;
            //不能为空 小数点之后不能超过6位
            if (a != undefined && a != "" && this.fucCheckNUM(a)) {
                return true;
            } else {
                return false;
            }
        }

        protected CheckNum(a: string): boolean {
            //去掉空格看是否是16位
            var Num = a.replace(/\s/g, "");
            if (Num.length == 16 && this.fucCheckNUM(Num)) {
                return true;
            } else {
                return false;
            }
        }
        //
        protected fucCheckNUM(NUM: string): boolean {
            var i, j, strTemp;
            strTemp = "0123456789";
            if (NUM.length == 0)
                return false
            for (i = 0; i < NUM.length; i++) {
                j = strTemp.indexOf(NUM.charAt(i));
                if (j == -1) {
                    //说明有字符不是数字
                    return false;
                }
            }
            //说明是数字
            return true;
        }

        //金额四舍五入，保留N位小数 基本上保留6位小数
        protected getAmountVal(val: number, n: number): number {
            var vv = Math.pow(10, n);
            return Math.round(val * vv) / vv;
        }

        public pSender(): React.ReactElement<any> {


            //return React.DOM.div(null,
            //    React.DOM.table({ id: "acsPlus" },
            //        //头部标签
            //        React.DOM.thead(null
            //            , React.DOM.tr(null
            //                , React.DOM.th(null, "票号")
            //                , React.DOM.th(null, "金额")
            //                , React.DOM.th())
            //        ),
            //        //内容
            //        React.DOM.tbody(null,
            //            React.DOM.tr(null
            //                , React.DOM.td(null, React.DOM.input({
            //                    type: "text"
            //                    , value: this.state.fristNum
            //                    , className: this.state.isCheck ? "" : "error"
            //                    , onBlur: (e) => this.pNumInputOnBlur(e)
            //                    , onChange: (e) => this.pNumInputOnChange(e)
            //                }, null))
            //                , React.DOM.td(null, React.DOM.input({
            //                    type: "text"
            //                    , className: this.state.isCheck ? "" : "error"
            //                    , onChange: (e) => this.pMoneyInputOnChange(e)
            //                    , value: this.state.fristMoney
            //                }, null))
            //                , React.DOM.td(null, React.DOM.i({ className: "Hu-pointer fa fa-plus-circle acsFontSize1-2", onClick: (e) => { this.addNumMoney(e); } }))
            //            ), this.state.ItemList.map((a) => {
            //                return React.DOM.tr(null
            //                    , React.DOM.td(null, React.DOM.input({ type: "text", className: a.isCheck ? "" : "error", value: a.Num, onChange: (e) => { this.pItemNumOnChange(e, a) }, onBlur: (e) => { this.pItemNumOnBuler(e, a) } }))
            //                    , React.DOM.td(null, React.DOM.input({ type: "text", className: a.isCheck ? "" : "error", value: a.Money, onChange: (e) => { this.pItemMoneyOnChage(e, a) }, onBlur: (e) => { this.pItemMoneyOnBuler(e, a) } }))
            //                    , React.DOM.td(null, React.DOM.i({ className: "Hu-pointer fa fa-minus-circle acsFontSize1-2 acsMinusBtn", classID: a.Num, onClick: () => { this.removeNmMoney(a) } }))
            //                )
            //            })
            //        ),

            //        React.DOM.span(null, "总金额：" + this.state.SumMoney),
            //        React.DOM.span(null, this.state.isAllOk ? " " : "    票号为16位 金额不能为空")

            //    )//----table
            //)

            return <div className="table-responsive">
                <table className="table table-bordered table-striped">
                             <thead className="thead-default">
                                    <tr>
                                            <th>票号</th>
                                            <th>金额</th>
                                            <th></th>
                                    </tr>
                              </thead>
                              <tbody>
                                    <tr>
                                        <td>
                                            <input type="text" value={this.state.fristNum}
                                                className={"Hg-width " + (this.state.isCheck ? "" : "error")}
                                                onBlur={(e) => { this.pNumInputOnBlur(e); return false;  } }
                                                onChange={(e) => { this.pNumInputOnChange(e); return false;  } }>
                                            </input>
                                        </td>
                                        <td>
                                             <input type="text" value={this.state.fristMoney}
                                                 className={"Hg-width " + (this.state.isCheck ? "" : "error")}
                                                 onChange={(e) => { this.pMoneyInputOnChange(e); return false;  } }>
                                                 </input>
                                        </td>
                                        <td>
                                                <i className="Hu-pointer icon-plus fa fa-plus-circle acsFontSize1-2"
                                    onClick={(e) => { this.addNumMoney(e); return false; }}   ></i>
                                        </td>
                                        </tr>
                                        {
                                               this.state.ItemList.length <= 0 ? null :
                                                          this.state.ItemList.map((a) => {
                                                                return <tr>
                                                                         <td>
                                                                           <input type="text" value={a.Num}
                                                                           className={"Hg-width " + (this.state.isCheck ? "" : "error")}
                                                                           onChange={(e) => { this.pItemNumOnChange(e, a); return false;} }
                                                                           onBlur={(e) => { this.pItemNumOnBuler(e, a); return false; }}
                                                                            >
                                                                               </input> 
                                                                      </td>        
                                                                       <td>
                                                                           <input type="text" value={a.Money}
                                                                               className={"Hg-width " + (this.state.isCheck ? "" : "error")}
                                                                               onChange={(e) => { this.pItemMoneyOnChage(e, a); return false;  } }
                                                                               onBlur={(e) => { this.pItemMoneyOnBuler(e, a); return false;  } }
                                                                               >
                                                                               </input>
                                                                        </td>  
                                                                     <td>
                                                                        <i className="Hu-pointer icon-minus fa fa-minus-circle acsFontSize1-2 acsMinusBtn"
                                                                            classID={a.Num}
                                                                            onClick={(e) => { this.removeNmMoney(a); return false; } }   ></i>
                                                                        </td>  
                                                                 </tr>
                                            
                                                         })  
                                        }
                                        <span>{"总金额:" + this.state.SumMoney}</span>
                                        <span>{this.state.isAllOk ? " " : "    票号为16位 金额不能为空"}</span>
                                </tbody>
                        </table>
                    </div>
        }
    }


    iocFile.Core.Ioc.Current().RegisterType("TwoColumnsVm", BaseColVm, TwoColumnsVm);
} 