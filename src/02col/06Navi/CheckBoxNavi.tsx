import domFile = require("./../../01core/0Dom");
import domCore = domFile.Core;
import basecolFile = require("./../00core/baseCol");
import BaseColReact = basecolFile.Core.BaseColReact;
import BaseColVm = basecolFile.Core.BaseColVm;
import BaseColProps = basecolFile.Core.BaseColProps;
import BaseColStates = basecolFile.Core.BaseColStates;
import BaseColAction = basecolFile.Core.BaseColAction;
import utilFile = require("./../../01core/Util");
import iocFile = require("./../../01core/Ioc");
import urlFile = require("./../../01core/Url");

import checkBoxFile = require("./../../02col/02Mulite/CheckBox");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module CheckBoxNavi {
    export class CheckBoxNaviAction extends BaseColAction {
    }

    export class CheckBoxNaviReact extends BaseColReact<CheckBoxNaviProps, CheckBoxNaviStates, CheckBoxNaviAction> implements domCore.IReact {

        public state = new CheckBoxNaviStates();

        public pSender(): React.ReactElement<any> {
            return <div>{this._T_(this.props.Vm.CheckBoxObj.intoDom())}</div>;
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }   

    export interface KVS {
        Value: string;
        Text: string;
        Select: boolean;
    }

    export interface ICheckBoxNaviConfig {
        ItemList: KVS[];
    }

    export class CheckBoxNaviVm extends BaseColVm {
        public ReactType = CheckBoxNaviReact;
        public CheckBoxObj: checkBoxFile.ui.CheckBoxVm;

        public constructor(config?: ICheckBoxNaviConfig) {
            super();
            this.CheckBoxObj = new checkBoxFile.ui.CheckBoxVm();
            if (config) {
                if (config.ItemList) {
                    
                    this.CheckBoxObj.ItemList = config.ItemList;
                }
            }
            this.CheckBoxObj.onChangeHandle((a: string) => {
              //  alert(a);
                this.pDataValueSet(a);
                return true;
            })
        }

        protected pMakerInNavi(config?: basecolFile.Core.INaviMakerConfig) {
            super.pMakerInNavi(config);
            if (config) {
               
                    var kvs: KVS[] = [];
                    var _cd = config.DataSet[config.NavigationColumnConfig.Options.RegName];
                    if (_cd) {
                        _cd.forEach((cdr, cdi) => {
                            kvs.push({
                                Text: cdr["CODE_TEXT"].toString(),
                                Value: cdr["CODE_VALUE"].toString(),
                                Select: false
                            });
                        });
                        this.CheckBoxObj.ItemList = kvs;
                    }
               

            }
        }

    }
    export class CheckBoxNaviStates extends BaseColStates {
    }


    export class CheckBoxNaviProps extends BaseColProps<CheckBoxNaviVm>{
    }

    //---------------------------item-------------------------------------------------


    iocFile.Core.Ioc.Current().RegisterType("CheckBoxNaviVm", BaseColVm, CheckBoxNaviVm);



}


