import domFile = require("./../../01core/0Dom"); import basecolFile = require("./../00core/baseCol"); import BaseColReact = basecolFile.Core.BaseColReact; import BaseColVm = basecolFile.Core.BaseColVm; import BaseColProps = basecolFile.Core.BaseColProps; import BaseColStates = basecolFile.Core.BaseColStates; import BaseColAction = basecolFile.Core.BaseColAction;
import iocFile = require("./../../01core/Ioc");
import utilFile = require("./../../01core/Util");
import kvFile = require("./../../07data/Kv");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module ui {
    export class CheckBoxAction extends BaseColAction {

    }

    export class CheckBoxReact extends BaseColReact<CheckBoxProps, CheckBoxStates, CheckBoxAction> implements domFile.Core.IReact {

        protected pComponentDidUpdate(prevProps: CheckBoxProps , prevState: CheckBoxStates , prevContext: any): void {
            //更新后的
            if (!(prevProps.Vm === this.props.Vm)) {
                this.pUnInstall(prevProps.Vm);
                this.pInstall();

                console.log(this.props.Vm.getRegName() + "重新注册");
            }
        }

        private fOnClick(a, i) {
            this.props.Vm.ItemList[i].Select = !(this.props.Vm.ItemList[i].Select);
            var _selectArr = [];
            this.props.Vm.ItemList.map((b, j) => {
                if (b.Select) {
                    _selectArr.push("\"" + b.Value+"\"");
                }
            });

            var _val = _selectArr.toString();

            var _act = new CheckBoxAction();
            _act.DataValue = _val;

            this.pDispatcher(_act);
            this.props.Vm.reactDataValueSet(_val);
        }

        public pSender(): React.ReactElement<any> {
            var _valArr = this.props.Vm.reactDataValueGet().replace(/\"/g, "").split(',');
            this.props.Vm.ItemList.map((a, i) => {
                a.Select = false;
                _valArr.forEach((_b, _j) => {
                    if (a.Value == _b) {
                        a.Select = true;
                    }
                });
            });

            if (this.props.Vm.ItemList.length==0) {
                return React.DOM.div(null,".");
            }
            var _checkBox = this.props.Vm.ItemList.map((a,i)=> {
                    //return React.DOM.li({
                    //    className: "Hu-pointer left" + (a.Select ? " acsMultiSelectorItem Hz-selected " : ""),
                    //    value: a.Value,
                    //    onClick: () => { this.fOnClick(a,i); },
                    //}, a.Text,
                    //    a.Select ? React.DOM.em(null) : null,
                    //    a.Select ? React.DOM.i({ className: "fa fa-check" }) : null)
                return <li
                    className={"nav-item Hu-pointer Hc-multi-selector pull-left" + (a.Select ? "  Hz-selected " : "")}
                        value={a.Value}
                        onClick={() => { this.fOnClick(a, i); return false;  } }
                        >
                        {a.Text}
                        { a.Select ? React.DOM.em(null) : null}
                        { a.Select ? React.DOM.i({ className: "icon-check fa fa-check" }) : null}
                    </li>
                }
            );

            //return React.DOM.ul({ className: "acsList clearfix" }, _checkBox);
            return <ul className="nav nav-tabs clearfix">{_checkBox}</ul>
        }
    }

    export class CheckBoxProps extends BaseColProps<CheckBoxVm>
    {

    }

    export class CheckBoxVm extends BaseColVm {
        protected pRegName = "多选按钮";
        public ReactType: any = CheckBoxReact;
        public ItemList: Array<kvFile.data.KVS> = new Array<kvFile.data.KVS>();

        public dataValueSet(val: string) {
            var _arr = val.replace(/\"/g, "").split(',');
            this.ItemList.map((a, i) => {
                a.Select = false;
                _arr.forEach((_b,_j) => {
                    if (a.Value == _b) {
                        a.Select = true;
                    }
                });
            });
            super.dataValueSet(val);
        }

        public static Test(num?: number): CheckBoxVm {
            if (num == undefined)
                num = 7;
            var bean: CheckBoxVm = new CheckBoxVm();
            for (var i = 0; i < num; i++) {
                bean.ItemList = bean.ItemList.concat(
                    { Value: i.toString(), Text: "选项 " + i, Select: false}
                );

            }
            bean.initDataValue("\"1\",\"2\"");
            return bean;
        }
    }

    export class CheckBoxStates extends BaseColStates {


    }

    iocFile.Core.Ioc.Current().RegisterType("CheckBoxVm", BaseColVm, CheckBoxVm);


}