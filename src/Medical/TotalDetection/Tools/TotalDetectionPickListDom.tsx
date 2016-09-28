import domFile = require("./../../../01core/0Dom");
import iocFile = require("./../../../01core/Ioc");
//import domFile = require("./../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import urlFile = require("./../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");
import PickListBaseDomFile = require("./../../../05tool/Picker/PickListBaseDom");
import selectorFile = require("./TotalDetectionSelecterDom");


export module TotalDetectionPickListDom {

    export class TotalDetectionPickListDomAction extends domCore.DomAction { }

    export class TotalDetectionPickListDomReact extends domCore.DomReact<TotalDetectionPickListDomProps, TotalDetectionPickListDomStates, TotalDetectionPickListDomAction> implements domCore.IReact {

        public state = new TotalDetectionPickListDomStates();

        public pSender(): React.ReactElement<any> {
            return <div>{this._tDom(this.props.Vm.selectorObj) }</div>;
        }

        protected pComponentDidMount() { super.pComponentDidMount(); }
    }

    export interface IReactTotalDetectionPickListDomVm extends PickListBaseDomFile.PickListBaseDom.IReactPickListBaseDomVm {
        selectorObj: selectorFile.TotalDetectionSelecterDom.TotalDetectionSelecterDomVm
    }

    export interface ITotalDetectionPickListDomConfig extends PickListBaseDomFile.PickListBaseDom.IPickListBaseDomConfig {
    }

    export interface IPickItem {
        Text: string;
        Key: string;
        IsSelect?: boolean
    }


    export class TotalDetectionPickListDomVm extends PickListBaseDomFile.PickListBaseDom.PickListBaseDomVm implements IReactTotalDetectionPickListDomVm {

        public ReactType = TotalDetectionPickListDomReact;
        public selectorObj: selectorFile.TotalDetectionSelecterDom.TotalDetectionSelecterDomVm;

        public constructor(config?: ITotalDetectionPickListDomConfig) {
            super();
            if (config) {
                this.UniId = config.UniId;
                var Selectorconfig: selectorFile.TotalDetectionSelecterDom.ITotalDetectionSelecterDomConfig = {
                    Unid: this.UniId,
                    //derpartData: data.Data
               }
                this.selectorObj = new selectorFile.TotalDetectionSelecterDom.TotalDetectionSelecterDomVm(Selectorconfig)
            }
        }


        protected loadDom(items: IPickItem[], callback: Function) {
         
            urlFile.Core.AkPost("/MedicalCenter/TotalDetection/GetAdviceList",
                {
                    //pager: JSON.stringify(_page),
                    //unit: this.SearchFormVm.SearchName
                }, (a) => {
                    if (a) {
                        var Selectorconfig: selectorFile.TotalDetectionSelecterDom.ITotalDetectionSelecterDomConfig = {
                            //Unid: this.UniId,
                            advicetemple: a.Data
                        }

                        this.selectorObj.init(Selectorconfig);
                        //this.selectorObj.init1(Selectorconfig);
                        this.selectorObj.table.IsChange = true;
                        this.selectorObj.table.RowList.forEach((a) => {
                            a.IsChange = true;
                        })
                        this.selectorObj.forceUpdate("");
                    }
                });

            callback();
        }

    }

    export class TotalDetectionPickListDomStates extends domCore.DomStates { }

    export class TotalDetectionPickListDomProps extends domCore.DomProps<IReactTotalDetectionPickListDomVm> { }
}