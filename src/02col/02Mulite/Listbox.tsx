import domFile = require("./../../01core/0Dom"); import basecolFile = require("./../00core/baseCol"); import BaseColReact = basecolFile.Core.BaseColReact; import BaseColVm = basecolFile.Core.BaseColVm; import BaseColProps = basecolFile.Core.BaseColProps; import BaseColStates = basecolFile.Core.BaseColStates; import BaseColAction = basecolFile.Core.BaseColAction;
import iocFile = require("./../../01core/Ioc");
import utilFile = require("./../../01core/Util");
import kvFile = require("./../../07data/Kv");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module ui {

    export class ListboxAction extends BaseColAction {

    }

    export class ListboxStates extends BaseColStates {

    }

    export class ListboxProps extends BaseColProps<ListboxVm>{

    }

    export class ListboxVm extends BaseColVm
    {
        public ReactType: any = ListBoxReact;

        public pRegName = "选取控件";

        //左边的选项
        public ItemList: Array<kvFile.data.KVS> = new Array<kvFile.data.KVS>();

        //右边的选项
        public rightItemList: Array<kvFile.data.KVS> = new Array<kvFile.data.KVS>();


        public static Test(num?:number): ListboxVm
        {
            var bean = new ListboxVm();

            if (num == undefined)
            {
                num=7
            }
            //给元素添加
            for (var i = 0; i <= num; i++)
            {
                bean.ItemList = bean.ItemList.concat(
                    { Value: i.toString(), Text: "选项 " + i, Select:false}
                );
            }

            return bean;
        }


        protected pOnchange(val: string): boolean {
            var isCheck: boolean = super.pOnchange(val);
            if (isCheck) {
                this.pDataValue = val;
                //先将所有的item都会到左边  然后重新把右边的放回去
                var _valArr = val.replace(/\'/g, "").split(',');
                if (this.rightItemList.length != 0) {
                    for (var i = 0; i < this.rightItemList.length;) {
                        this.ItemList.push(this.rightItemList[i]);
                        this.rightItemList.splice(i, 1);
                    }
                }

                    _valArr.forEach((_b, _j) => {
                        this.ItemList.map((a, i) => {
                            if (a.Value == _b)
                            {
                                a.Select = false;
                                this.rightItemList.push(a);
                                this.ItemList.splice(i, 1);
                            }
                        });
                    });
                }
            
            return isCheck;
        }

    }

    export class ListBoxReact extends BaseColReact<ListboxProps, ListboxStates, ListboxAction> implements domFile.Core.IReact
    {
        public onButtonItmeClick(e: kvFile.data.KVS)
        {
            e.Select = e.Select ? false : true;
            this.forceUpdate();
        }

        public onLeftToRight()
        {
            for (var i = 0; i < this.props.Vm.ItemList.length;) {
                if (this.props.Vm.ItemList[i].Select == true) {
                    this.props.Vm.ItemList[i].Select = false;
                    this.props.Vm.rightItemList.push(this.props.Vm.ItemList[i]);
                    this.props.Vm.ItemList.splice(i, 1);
                } else {
                    i++;
                }
            }

            var value: string = "";
            for (var i = 0; i < this.props.Vm.rightItemList.length; i++)
            {
                value = value+"'" + this.props.Vm.rightItemList[i].Value + "',";
            }

            this.props.Vm.dataValueSet(value);
            this.props.Vm.IsChange = true;
            this.forceUpdate();
        }

        public onRightToLeft()
        {
            for (var i = 0; i < this.props.Vm.rightItemList.length; ) {
                if (this.props.Vm.rightItemList[i].Select == true) {
                    this.props.Vm.rightItemList[i].Select = false;
                    this.props.Vm.ItemList.push(this.props.Vm.rightItemList[i]);
                    this.props.Vm.rightItemList.splice(i, 1);
                } else {
                    i++;
                }
            }

            var value: string = "";
            for (var i = 0; i < this.props.Vm.rightItemList.length; i++) {
                value = value+"'" + this.props.Vm.rightItemList[i].Value + "',";
            }

            this.props.Vm.dataValueSet(value);
            this.props.Vm.IsChange = true;
            this.forceUpdate();
        }

        public pSender(): React.ReactElement<any>
        {

            var _valArr = this.props.Vm.reactDataValueGet().replace(/\'/g, "").split(',');
            
            //在这里讲左边的集合中的元素 如果等于_valArr中的元素的话 那就放到右边集合中去

            //this.props.Vm.rightItemList.length = 0;
            //this.props.Vm.ItemList.map((a, i) => {
            //    _valArr.forEach((_b, _j) => {
            //        if (a.Value == _b) {
            //           //将a集合
            //            a.Select = false;
            //            this.props.Vm.rightItemList.push(a);
            //            this.props.Vm.ItemList.splice(i, 1);    
            //        }
            //    });
            //});

            return <div className="clearfix">
                <div className="col-lg-12 Hc-listbox " style={{ marginTop: 1 + "rem" }}>
                    <div className="col-lg-5  Hc-listbox-left">
                        <p>待添加</p>
                        <ul>
                        {
                        this.props.Vm.ItemList.map((a) => {
                            return <li value={a.Value}
                                    className={a.Select ? "on" : ""}
                                    onClick={() => { this.onButtonItmeClick(a); return false;} }>
                                        {a.Text}
                                    </li>
                            })
                        }
                        </ul>
                    </div>
                    <div className="col-lg-2  Hc-listbox-btn">
                      <button className="btn btn-xs btn-primary" onClick={() => { this.onLeftToRight(); return false;}}>{">>"}</button>
                      <button className="btn btn-xs btn-primary" onClick={() => { this.onRightToLeft(); return false;}}>{"<<"}</button>
                    </div>
                    <div className="col-lg-5 Hc-listbox-right">
                        <p>已添加</p>
                        <ul>
                        {
                            this.props.Vm.rightItemList.length != 0 ? this.props.Vm.rightItemList.map((a) => {
                            return <li value={a.Value}
                                       className={a.Select ? "on" : ""}
                                       onClick={() => { this.onButtonItmeClick(a); return false; } }>{a.Text}</li>
                            }) : ""
                        }
                        </ul>
                     </div>
                     </div> 
             </div>
        }
    }

    iocFile.Core.Ioc.Current().RegisterType("ListBoxVm", BaseColVm, ListboxVm);

}