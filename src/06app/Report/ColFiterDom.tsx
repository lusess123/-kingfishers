

import domFile = require("./../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../01core/Util");
import iocFile = require("./../../01core/Ioc");
import urlFile = require("./../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");
import ColFlterItemDom = require("./ColFiterIDomItem");

export module ColFiterDom {
    export class ColFiterDomAction extends domCore.DomAction {
    }

    export class ColFiterDomReact extends domCore.DomReact<ColFiterDomProps, ColFiterDomStates, ColFiterDomAction> implements domCore.IReact {

        public state = new ColFiterDomStates();

        private fun_navShowClick() {
            this.props.Vm.IsNavHide = !this.props.Vm.IsNavHide;
            this.forceUpdate();
        }

        public pSender(): React.ReactElement<any> { 
            return <div>
                <div className="Hu-row-title Hu-pointer m-y" onClick={() => { this.fun_navShowClick();} }>
                    <i className={"fa fa-angle-double-" + (this.props.Vm.IsNavHide ? "down" : "right") }></i>
                    <span>筛选字段</span></div>
                <ul className={"Hc-list Hm-custom-col nav nav-tabs m-y clearfix" + (this.props.Vm.IsNavHide ? " " :" hide") }>
                    {
                        this.props.Vm.AllItems.map((n, i) => {
                        n.key = i;
                        return n.intoDom();
                    })
                    }
                </ul>
              
            </div>;
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IReactColFiterDomVm extends domCore.DomVm {
       AllItems: ColFlterItemDom.ColFiterIDomItem.ColFiterIDomItemVm[];
       SelectItems: ColFlterItemDom.ColFiterIDomItem.ColFiterIDomItemVm[];
       IsNavHide: boolean;
    }

    export interface IColFiterDomConfig {
        Items: IItem[];
        UniId: string;
    }

    export interface IItem
    {
        Name: string;
        Text: string;
        IsNoCheck?: boolean;
        
    }

    export class ColFiterDomVm extends domCore.DomVm implements IReactColFiterDomVm {
        public ReactType =  ColFiterDomReact;
        public AllItems:    ColFlterItemDom.ColFiterIDomItem.ColFiterIDomItemVm[] = [];
        public SelectItems: ColFlterItemDom.ColFiterIDomItem.ColFiterIDomItemVm[] = [];

        public IsNavHide: boolean = false;

        public constructor(config?: IColFiterDomConfig) {
            super();
            if (config) {
                if (config.UniId) {
                    this.UniId = config.UniId;
                }
                if (config.Items) {
                    this.AllItems = config.Items.map((item) => {
                        if (!item.IsNoCheck) {
                            this.SelectItems.push(new ColFlterItemDom.ColFiterIDomItem.ColFiterIDomItemVm(
                                {
                                    Name: item.Name,
                                    Text: item.Text,
                                    IsNoCheck: item.IsNoCheck,
                                    UniId: this.UniId
                                }));
                        }
                        return new ColFlterItemDom.ColFiterIDomItem.ColFiterIDomItemVm(
                            {
                                Name: item.Name,
                                Text: item.Text,
                                IsNoCheck: item.IsNoCheck,
                                UniId: this.UniId
                            });
                    });
                }
            }

            this.listenAppEvent("clickLi-check", this.UniId, (isCheck: boolean, name: string) => {
               this.checkItem(name, isCheck);
               // this.forceUpdate("");
            });
            this.listenAppEvent("clickLi-del", this.UniId, (name: string) => {
                this.delItem(name);
                this.forceUpdate("");
            });
        }

        private delItem(name: string) {
            for (var i: number = 0; i < this.SelectItems.length; i++) {
                var _item = this.SelectItems[i];
                if (_item.Name == name) {
                    this.SelectItems.splice(i, 1);
                    break;
                }

            }
        }

        private checkItem(name: string, isCheck: boolean) {
            var _list = [];
            this.AllItems.forEach((n) => {
                if (n.IsNoCheck) {
                    _list.push(n.Name);
                }
            });
            //alert(name);
            var _json = JSON.stringify(_list);
           // alert(_json);
            this.emitAppEvent("clickLi-check-json", this.UniId,_json);
        }

    }
    export class ColFiterDomStates extends domCore.DomStates {
    }


    export class ColFiterDomProps extends domCore.DomProps<IReactColFiterDomVm>{


    }



}


