import domFile = require("./../../../01core/0Dom");
import iocFile = require("./../../../01core/Ioc");
//import domFile = require("./../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import urlFile = require("./../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");
import PickListBaseDomFile = require("./../../../05tool/Picker/PickListBaseDom");
import selectorFile = require("./DepartSelectorDom");
import data = require("./../data");
import Table1 = require("./DeptConclusionExamItem/DeptConExamTableDom");

export module DepartPickListDom {

    export class DepartPickListDomAction extends domCore.DomAction { }

    export class DepartPickListDomReact extends domCore.DomReact<DepartPickListDomProps, DepartPickListDomStates, DepartPickListDomAction> implements domCore.IReact {

        public state = new DepartPickListDomStates();

        public pSender(): React.ReactElement<any> {
            return <div>{this._tDom(this.props.Vm.selectorObj) }</div>;;
        }

        protected pComponentDidMount() { super.pComponentDidMount(); }
    }

    export interface IReactDepartPickListDomVm extends PickListBaseDomFile.PickListBaseDom.IReactPickListBaseDomVm {
        selectorObj: selectorFile.DepartSelectorDom.DepartSelectorDomVm
    }

    export interface IDepartPickListDomConfig extends PickListBaseDomFile.PickListBaseDom.IPickListBaseDomConfig {
    }

    export interface IPickItem {
        Text: string;
        Key: string;
        IsSelect?: boolean
    }


    export class DepartPickListDomVm extends PickListBaseDomFile.PickListBaseDom.PickListBaseDomVm implements IReactDepartPickListDomVm {

        public ReactType = DepartPickListDomReact;
        public selectorObj: selectorFile.DepartSelectorDom.DepartSelectorDomVm;

        public constructor(config?: IDepartPickListDomConfig) {
            super();
            if (config) {
                this.UniId = config.UniId;
                var Selectorconfig: selectorFile.DepartSelectorDom.IDepartSelectorDomConfig = {
                    Unid: this.UniId,
                    //derpartData: data.Data
                }
                this.selectorObj = new selectorFile.DepartSelectorDom.DepartSelectorDomVm(Selectorconfig)
            }
        }


        protected pRegAppEvent() {
            super.pRegAppEvent();
            this.listenAppEvent("medical/Departments/tool/DeptConclusion", this.UniId, (fid: string) => {
                urlFile.Core.AkPost("/MedicalCenter/DeptConclusion/GetExamItem",
                    {
                        FID: fid
                    }, (a) => {

                        var list: data.Result.ItemTemplate[] = [];
                        if (a.Data && a.Data.length > 0) {
                            a.Data.forEach((b) => {
                                var model: data.Result.ItemTemplate = { FID: b.FID, ItemName: b.ItemName, GreaterThan: b.condetion.GreaterThan, LessThan: b.condetion.LessThan, KeyWord: b.condetion.KeyWord, IsPositive: b.condetion.IsPositive }
                                list.push(model);
                            })
                        }
                        var table1config: Table1.DeptConExamTableDom.IDeptConExamTableDomConfig = { Unid: this.UniId, ListData: list }

                        this.selectorObj.table1 = new Table1.DeptConExamTableDom.DeptConExamTableDomVm(table1config);
                        //this.table1.IsChange = true;
                        //this.table1.RowList.forEach((a) => {
                        //    a.IsChange = true;
                        //})
                        this.selectorObj.IsChange = true;
                        this.forceUpdate("");
                    });
            });
        }

        protected loadDom(items: IPickItem[], callback: Function) {

            urlFile.Core.AkPost("/MedicalCenter/DeptConclusion/GetDepartConclusionList",
                {
                    //pager: JSON.stringify(_page),
                    //unit: this.SearchFormVm.SearchName
                }, (a) => {
                    if (a) {
                        var Selectorconfig: selectorFile.DepartSelectorDom.IDepartSelectorDomConfig = {
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

    export class DepartPickListDomStates extends domCore.DomStates { }

    export class DepartPickListDomProps extends domCore.DomProps<IReactDepartPickListDomVm> { }
}