import domFile = require("./../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../01core/Util");
import iocFile = require("./../../01core/Ioc");
import urlFile = require("./../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");
import PickProtalBaseDomFile = require("./../Picker/PickProtalBaseDom");
import AutoSuggestTextFile = require("./AutoSuggestText");
import eventFile = require("./../../01core/Event");


export module SelectorPickProtal {
   
    export class SelectorPickProtalAction extends domCore.DomAction {
    }

    export class SelectorPickProtalReact extends domCore.DomReact<SelectorPickProtalProps, SelectorPickProtalStates, SelectorPickProtalAction> implements domCore.IReact {

        public state = new SelectorPickProtalStates();

        public pSender(): React.ReactElement<any> {
            return <div>{this._tDom(this.props.Vm.SuggetTxtObj) }</div>;
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IReactSelectorPickProtalVm extends PickProtalBaseDomFile.PickProtalBaseDom.IReactPickProtalBaseDomVm {
        SuggetTxtObj: AutoSuggestTextFile.AutoSuggestText.AutoSuggestTextVm;
    }

    export interface ISelectorPickProtalConfig {
        UniId?: string;

    }
    export interface IPickItem {
        Text: string;
        Key: string;
        IsSelect?: boolean;
    }
   
    export class SelectorPickProtalVm extends PickProtalBaseDomFile.PickProtalBaseDom.PickProtalBaseDomVm implements IReactSelectorPickProtalVm {
        public ReactType: any = SelectorPickProtalReact;
        public SuggetTxtObj: AutoSuggestTextFile.AutoSuggestText.AutoSuggestTextVm;
        //public 

        public constructor(config?: ISelectorPickProtalConfig) {
            super({ UniId: config.UniId });
            this.UniId = config.UniId;
            this.SuggetTxtObj = new AutoSuggestTextFile.AutoSuggestText.AutoSuggestTextVm({ UniId: this.UniId });
            //this.listenAppEvent("FillMenuDom-onSelected", this.UniId, (a: IPickItem) => {
            //    this.PickItemList = [a];
            //});
            //window["xxx"] = this;
            this.listenAppEvent("AutoSuggestText-setValue", this.UniId, (list: IPickItem[]) => {
                if (list.length == 1 && list[0].Key == "") {
                    this.PickItemList = [];
                } else {
                    this.PickItemList = list;
                }
            });


        }

        protected pPickerSure(items: IPickItem[]) {
            if (this.pCheckItemEq(items)) {
                //没有更新不需要操作
                this.forceUpdate("");
            } else {
                this.PickItemList = items;

                if (items.length > 0) {
                    this.SuggetTxtObj.Text = items[0].Text;
                    this.SuggetTxtObj.TempDataValue = items[0].Key;
                    this.SuggetTxtObj.IsTxtSelector = true;
                    this.SuggetTxtObj.IsChange = true;
                    this.forceUpdate("");
                }
            }
        }

    }
    export class SelectorPickProtalStates extends domCore.DomStates {
    }


    export class SelectorPickProtalProps extends domCore.DomProps<IReactSelectorPickProtalVm>{
    }



}


