import domFile = require("./../../01core/0Dom");
import basecolFile = require("./../00core/baseCol");
import BaseColReact = basecolFile.Core.BaseColReact;
import BaseColVm = basecolFile.Core.BaseColVm;
import BaseColProps = basecolFile.Core.BaseColProps;
import BaseColStates = basecolFile.Core.BaseColStates;
import BaseColAction = basecolFile.Core.BaseColAction;
import iocFile = require("./../../01core/Ioc");
import utilFile = require("./../../01core/Util");
import kvFile = require("./../../07data/Kv");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module ui {


    export class ComboAction extends BaseColAction {
        public SelectText: string;
    }



    export class ComboReact extends BaseColReact<ComboProps, ComboStates, ComboAction> implements domFile.Core.IReact {


        private fOnChange(e) {
            var _op = e.target.options[e.target.selectedIndex];
            var _val = _op.value;
            var _act = new ComboAction();
            _act.DataValue = _val;
            _act.SelectText = _op.text;

            this.pDispatcher(_act);

            //this.props.onChange1(this);
            this.props.Vm.reactDataValueSet(_val);

        }

        public pSender(): React.ReactElement<any> {
            super.pSender();
            var _select = this.props.Vm.ItemList.map(function (a, i) {
                //return React.DOM.option({ className:"Hu-pointer",value: a.Value, key: i }, a.Text);
                return <option className="Hu-pointer" value={a.Value} key={i}>{a.Text}</option>
            });

            //return React.DOM.select(
            //    {
            //        className:"Hu-pointer",
            //        value: this.props.Vm.reactDataValueGet(),
            //        onChange: (e) => { this.fOnChange(e) }
            //    },
            //    React.DOM.option({ className:"Hu-pointer", value:""}, "请选择"),
            //    _select)

            return <select className="form-control Hu-pointer Hg-width" value={this.props.Vm.reactDataValueGet() }
                onChange={(e) => { this.fOnChange(e); return false; } } >
                {_select}
            </select>
        }

    }



    export class ComboProps extends BaseColProps<ComboVm> {




    }

    //export interface ICodeRow
    //{
    //    CODE_VALUE: string;
    //    CODE_TEXT: string;
    //    CODE_INDEX: number;
    //}

    //export interface ICodeTableData
    //{
    //    Table: Array<ICodeRow>;
    //    SelectIndex: Array<number>;
    //}

    export interface IComboVmConfig
    {
        ItemList?: kvFile.data.KV[];
    }


    export class ComboVm extends BaseColVm {

        public ReactType: any = ComboReact;

        public ItemList: Array<kvFile.data.KV> = new Array<kvFile.data.KV>();
        //SelectValue: string;
        public SelectText: string;
        // public RegName: string;
        //  public CodeTable: Array<ICodeRow> = new Array<ICodeRow>();

        constructor(config?: IComboVmConfig) {
            super();
            this.pRegName = "下拉框控件";
            if (config) {
                if (config.ItemList) {
                    this.ItemList = config.ItemList;
                }
            }
        }

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

        static Test(num?: number): ComboVm {
            if (num == undefined)
                num = 15;
            var bean: ComboVm = new ComboVm();
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
    export class ComboStates extends BaseColStates {

    }

    iocFile.Core.Ioc.Current().RegisterType("ComboVm", BaseColVm, ComboVm);
} 