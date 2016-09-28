import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
//import domFile = require("./../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");
import PickListBaseDomFile = require("./../../../../05tool/Picker/PickListBaseDom");
import selectorFile = require("./AnomalySelectorDom");
import data = require("./../data");
import Table1 = require("./AnomalyConExamTableDom");

export module AnomalyPickListDom {

    export class AnomalyPickListDomAction extends domCore.DomAction { }

    export class AnomalyPickListDomReact extends domCore.DomReact<AnomalyPickListDomProps, AnomalyPickListDomStates, AnomalyPickListDomAction> implements domCore.IReact {

        public state = new AnomalyPickListDomStates();

        public pSender(): React.ReactElement<any> {
            return <div>{this._tDom(this.props.Vm.selectorObj) }</div>;;
        }

        protected pComponentDidMount() { super.pComponentDidMount(); }
    }

    export interface IReactAnomalyPickListDomVm extends PickListBaseDomFile.PickListBaseDom.IReactPickListBaseDomVm {
        selectorObj: selectorFile.AnomalySelectorDom.AnomalySelectorDomVm
    }

    export interface IAnomalyPickListDomConfig extends PickListBaseDomFile.PickListBaseDom.IPickListBaseDomConfig {
    }

    export interface IPickItem {
        Text: string;
        Key: string;
        IsSelect?: boolean
    }
    export interface IAnomalyConfig
    {
        UniId: string
        Data?: any
    }

    export class AnomalyPickListDomVm extends PickListBaseDomFile.PickListBaseDom.PickListBaseDomVm implements IReactAnomalyPickListDomVm {

        public ReactType = AnomalyPickListDomReact;
        public selectorObj: selectorFile.AnomalySelectorDom.AnomalySelectorDomVm;
        public table1: Table1.AnomalyConExamTableDom.AnomalyConExamTableDomVm;

        public constructor(config?: IAnomalyPickListDomConfig) {
            super();
            if (config) {
                this.UniId = config.UniId;
                var Selectorconfig: selectorFile.AnomalySelectorDom.IAnomalySelectorDomConfig = {
                    Unid: this.UniId,
                    //derpartData: data.Data
                }
                this.selectorObj = new selectorFile.AnomalySelectorDom.AnomalySelectorDomVm(Selectorconfig)
            }
        }

        protected pRegAppEvent() {
            super.pRegAppEvent();
            this.listenAppEvent("medical/Anomaly/tools/TotalAnomalyConclusion", this.UniId, (fid: string) => {
               
                urlFile.Core.AkPost("/MedicalCenter/AnomalyConclusion/GetExamItem",
                    {
                        FID: fid
                    }, (a) => {

                        var list: data.DetectionData.ItemTemplate[] = [];
                        if (a.Data && a.Data.length > 0) {
                            a.Data.forEach((b) => {
                                var model: data.DetectionData.ItemTemplate = { FID: b.FID, ItemName: b.ItemName, GreaterThan: b.GreaterThan, LessThan: b.LessThan, KeyWord: b.KeyWord, IsPositive: b.IsPositive }
                                list.push(model);
                            })
                        }
                        var table1config: Table1.AnomalyConExamTableDom.IAnomalyConExamTableDomConfig = { Unid: this.UniId, ListData: list }

                        this.selectorObj.table1 = new Table1.AnomalyConExamTableDom.AnomalyConExamTableDomVm(table1config);
                        this.selectorObj.IsChange = true;
                        this.forceUpdate("");
                    });
            });
        }
        protected loadDom(items: IPickItem[], callback: Function) {

            urlFile.Core.AkPost("/MedicalCenter/AnomalyConclusion/GetAnomalyConclusionList",
                {
                    //pager: JSON.stringify(_page),
                    //unit: this.SearchFormVm.SearchName
                }, (a) => {
                    if (a) {
                        var Selectorconfig: selectorFile.AnomalySelectorDom.IAnomalySelectorDomConfig = {
                            //Unid: this.UniId,
                            derpartData: a.Data
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

    export class AnomalyPickListDomStates extends domCore.DomStates { }

    export class AnomalyPickListDomProps extends domCore.DomProps<IReactAnomalyPickListDomVm> { }
}