


import domFile = require("./../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../01core/Util");
import iocFile = require("./../../01core/Ioc");
import urlFile = require("./../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");
import PickDomFile = require("./../Picker/PickDom");
import SelectorPickProtalFile = require("./SelectorPickProtal");
import eventFile = require("./../../01core/Event");
import PickListBaseDomFile = require("./../Picker/PickListBaseDom");

import SelectorPickListFile = require("./SelectorPickList");
export module SelectorDom {
    export class SelectorDomAction extends domCore.DomAction {
    }

    export class SelectorDomReact extends domCore.DomReact<SelectorDomProps, SelectorDomStates, SelectorDomAction> implements domCore.IReact {

        public state = new SelectorDomStates();

        public pSender(): React.ReactElement<any> {
            return <div>{this._tDom(this.props.Vm.PickDomObj) }</div>;
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IReactSelectorDomVm extends domCore.DomVm {
        PickDomObj: PickDomFile.PickDom.PickDomVm;
    }

    export interface ISelectorDomConfig {
        UniId?: string;

    }

    export class SelectorDomVm extends domCore.DomVm implements IReactSelectorDomVm {
        public ReactType = SelectorDomReact;
        public PickDomObj: PickDomFile.PickDom.PickDomVm;
      
        public constructor(config?: ISelectorDomConfig) {
            super();
            if (!this.UniId) { this.UniId = "SelectorDomVm" + eventFile.App.getUniId(); }
            this.PickDomObj = new PickDomFile.PickDom.PickDomVm(
                {
                    UniId: this.UniId,
                    IsSingle: true,
                    PortalNode: new SelectorPickProtalFile.SelectorPickProtal.SelectorPickProtalVm({
                        UniId: this.UniId 
                    }),
                    PickerContainer: {
                        UniId: this.UniId,
                        IsSingle: true,
                        LeftDomVmObj: new SelectorPickListFile.SelectorPickList.SelectorPickListVm({ UniId: this.UniId  })
                    },
                    PickItemList:[]

                }
            );
        }

    }
    export class SelectorDomStates extends domCore.DomStates {
    }


    export class SelectorDomProps extends domCore.DomProps<IReactSelectorDomVm>{
    }



}


