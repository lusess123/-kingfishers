import domFile = require("./../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../01core/Util");
import iocFile = require("./../../01core/Ioc");
import urlFile = require("./../../01core/Url");
import naviItemFile = require("./ListNaviItemDom");
import baseColFile = require("./../../02col/00core/baseCol");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module ListNaviDom {
    export class ListNaviDomAction extends domCore.DomAction {
    }

    export class ListNaviDomReact extends domCore.DomReact<ListNaviDomProps, ListNaviDomStates, ListNaviDomAction> implements domCore.IReact {

        public state = new ListNaviDomStates();

        public pSender(): React.ReactElement<any> {
            return <div>{
                this.props.Vm.NaviItemList.map(
                    (item) => {
                        return this._T_(item.intoDom());
                    }
                ) }</div>;
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IListNaviDomConfig {

        NaviItemList: naviItemFile.ListNaviItemDom.IListNaviItemDomConfig[];
        UniId?: string;
    }

    export class ListNaviDomVm extends domCore.DomVm {
        public ReactType = ListNaviDomReact;
        public NaviItemList: naviItemFile.ListNaviItemDom.ListNaviItemDomVm[] = [];
        public UniId: string;

        public constructor(config?: IListNaviDomConfig) {
            super();
            if (config) {
                if (config.UniId) {
                    this.UniId = config.UniId;
                }
                if (config.NaviItemList) {
                    config.NaviItemList.forEach((item) => {
                        var naviItem = new naviItemFile.ListNaviItemDom.ListNaviItemDomVm(item);
                        this.NaviItemList.push(naviItem);
                       
                    });
                }
            }
        }

    }
    export class ListNaviDomStates extends domCore.DomStates {
    }


    export class ListNaviDomProps extends domCore.DomProps<ListNaviDomVm>{
    }



}


