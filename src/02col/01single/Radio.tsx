/// <reference path="../../../typings/0type/Data.d.ts" />

/*import domFile = require("./../../01core/0Dom"); import basecolFile = require("./../00core/baseCol"); import BaseColReact = basecolFile.Core.BaseColReact; import BaseColVm = basecolFile.Core.BaseColVm; import BaseColProps = basecolFile.Core.BaseColProps; import BaseColStates = basecolFile.Core.BaseColStates; import BaseColAction = basecolFile.Core.BaseColAction;
import iocFile = require("./../../01core/Ioc");
import utilFile = require("./../../01core/Util");
import Entity = require("./../../../Typings/0Type/Entity");

export module ui {
    export class RadioAction extends BaseColAction {
        public SelectText: string;
    }

    export class RadioReact extends BaseColReact<RadioProps, RadioStates, RadioAction> implements domFile.Core.IReact {

        protected pRadioOnChange(a: Entity.entity.SelectorItem)
        {  
            var _val = a.Key;
            //alert(_val);
            for (var i = 0; i < this.props.Vm.ItemList.length; i++)
            {
                if (this.props.Vm.ItemList[i].Key == _val) {
                    this.props.Vm.ItemList[i].IsSelect = true;
                } else
                {
                    this.props.Vm.ItemList[i].IsSelect = false;
                }
                
            }
            //var _ac: RadioAction = new RadioAction();
            //_ac.DataValue = _val;
            //this.pDispatcher(_ac);
            //this.props.Vm.reactDataValueSet(_val);
            //this.forceUpdate();
            var _action = new RadioAction();
            _action.DataValue = _val;

            this.pDispatcher(_action);
            this.props.Vm.dataValueSet(_val);
        }


        public pSender(): React.ReactElement<any> {
            var _this = this;
            
            for (var i = 0; i < this.props.Vm.ItemList.length; i++) {
                if (this.props.Vm.dataValueGet().indexOf(this.props.Vm.ItemList[i].Key) != -1) {
                    this.props.Vm.ItemList[i].IsSelect = true;
                } else {
                    this.props.Vm.ItemList[i].IsSelect = false;
                }
            }

            var _select = this.props.Vm.ItemList.map(
                function (a) {
                    return React.DOM.li({
                        className: "acsSingleSelectorItem left " + (a.IsSelect ? "selected" : ""),
                        value: a.Key,
                        onClick : () => {
                            _this.pRadioOnChange(a);
                        } 
                    }, a.Text,
                    a.IsSelect ? React.DOM.em(null) : null,
                    a.IsSelect ? React.DOM.i({ className: "fa fa-check" }) : null)
                }
                )
            return React.DOM.ul({ className:" clearfix"},_select);
        }
    }

    export class RadioProps extends BaseColProps<RadioVm>
    {
       
    }

    export class RadioStates extends BaseColStates {

    }

    export class RadioVm extends BaseColVm {

        public ReactType: any = RadioReact;

        protected pRegName = "单选控件";

        ItemList: Array<Entity.entity.SelectorItem> = new Array<Entity.entity.SelectorItem>();

        SelectText: string;

        public constructor() {
            super();
        }

        public dataValueGet(): string {
            return this.pDataValue;
        }

        public static Test(): RadioVm {
            var _bean: RadioVm = new RadioVm();

            _bean.dataValueSet("初始化的文本这是Radio控件");

            //给radio的选项赋值
            for (var i = 0; i <3; i++) {
                var a: Entity.entity.SelectorItem = new Entity.entity.SelectorItem();
                a.Key = i.toString();
                a.Text = "radio" + i;
                if (_bean.dataValueGet().indexOf(a.Key) != -1) {
                    a.IsSelect = true;
                } else {
                    a.IsSelect = false;
                }
                _bean.ItemList.push(a);
            }


            _bean.dataValueSet("0");
            return _bean;

        }
    }


   iocFile.Core.Ioc.Current().RegisterType("RadioVm", BaseColVm, RadioVm);
} */

import domFile = require("./../../01core/0Dom"); import basecolFile = require("./../00core/baseCol"); import BaseColReact = basecolFile.Core.BaseColReact; import BaseColVm = basecolFile.Core.BaseColVm; import BaseColProps = basecolFile.Core.BaseColProps; import BaseColStates = basecolFile.Core.BaseColStates; import BaseColAction = basecolFile.Core.BaseColAction;
import iocFile = require("./../../01core/Ioc");
import utilFile = require("./../../01core/Util");
import kvFile = require("./../../07data/Kv");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module ui {
    export class RadioAction extends BaseColAction {
        public SelectText: string;
    }

    export class RadioReact extends BaseColReact<RadioProps, RadioStates, RadioAction> implements domFile.Core.IReact {

        private fOnClick(a) {
            var _val = a.Value;
            var _act = new RadioAction();
            _act.DataValue = _val;
            _act.SelectText = a.Text;

            this.pDispatcher(_act);
            this.props.Vm.reactDataValueSet(_val);
        }

        public pSender(): React.ReactElement<any> {
            super.pSender();
            var _select = this.props.Vm.ItemList.map((a, i)=> {
                //return React.DOM.li({
                //    className: "acsSingleSelectorItem left " + (a.Text == this.props.Vm.SelectText ? "selected" : ""),
                //    value: a.Value,
                //    onClick: () => { this.fOnClick(a); }
                //}, a.Text,
                //    a.Text == this.props.Vm.SelectText ? React.DOM.em(null) : null,
                //    a.Text == this.props.Vm.SelectText ? React.DOM.i({ className: "fa fa-check" }) : null);
                return <li
                    className={"nav-item Hu-pointer Hc-single-selector " + (a.Text == this.props.Vm.SelectText ? "Hz-selected" : "") }
                    value={a.Value}
                    onClick={() => { this.fOnClick(a); return false;}}
                    >
                    {a.Text}
                    {a.Text == this.props.Vm.SelectText ? React.DOM.em(null) : null}
                    {a.Text == this.props.Vm.SelectText ? React.DOM.i({ className: " icon-ok fa fa-check" }) : null}
                    </li>
                
                
            });
            //return React.DOM.ul({ className: " clearfix" }, _select);
            return <ul className="nav nav-tabs Hc-radio-list clearfix">{_select}</ul>
        }

    }

    export class RadioProps extends BaseColProps<RadioVm>
    {

    }

    export class RadioStates extends BaseColStates {

    }

    export class RadioVm extends BaseColVm {

        public ReactType: any = RadioReact;
        protected pRegName = "单选控件";
        public ItemList: Array<kvFile.data.KV> = new Array<kvFile.data.KV>();
        public SelectText: string;

        public dataValueGet(): string {
            return this.pDataValue;
        }

        protected pOnchange(val: string): boolean {
            var isCheck: boolean = super.pOnchange(val);
            if (isCheck) {
                this.pDataValue = val;
                for (var i = 0; i < this.ItemList.length; i++) {
                    if (this.ItemList[i].Value == val) {
                        this.SelectText = this.ItemList[i].Text;
                        break;
                    }
                }
            }
            return isCheck;
        }

        public static Test(num?: number): RadioVm {
            if (num == undefined)
                num = 7;
            var bean: RadioVm = new RadioVm();
            for (var i = 0; i < num; i++) {

                bean.ItemList = bean.ItemList.concat(
                    { Value: i.toString(), Text: "选项 " + i }
                );

            }
            bean.initDataValue((num - 1).toString());
            var _item = bean.ItemList[num - 1];
            if (_item)
                bean.SelectText = (_item).Text;
            return bean;
        }

    }

    iocFile.Core.Ioc.Current().RegisterType("RadioVm", BaseColVm, RadioVm);
}
