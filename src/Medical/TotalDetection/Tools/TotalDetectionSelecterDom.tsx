import domFile = require("./../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");
import data = require("./../data");
import Table = require("./AdviceConclusion/AdviceConclusionTableDom");
//import Table1 = require("./DoctorConclusion/DoctorConclusionTableDom");

import pager = require("./../../../05tool/Pagination");


export module TotalDetectionSelecterDom {
    export class TotalDetectionSelecterDomAction extends domCore.DomAction { }


    export class TotalDetectionSelecterDomReact extends domCore.DomReact<TotalDetectionSelecterDomProps, TotalDetectionSelecterDomStates, TotalDetectionSelecterDomAction> implements domCore.IReact {
        public state = new TotalDetectionSelecterDomStates();

        public pSender(): React.ReactElement<any> {
            return <div>
                <div className="col-lg-8 col-md-8 YSm-modal-left">
                    <div className="Hm-table table-responsive">
                        {this._tDom(this.props.Vm.table) }
                    </div>
                    {this._tDom(this.props.Vm.pagertion) }
                </div>
            </div>;
        }

        protected pComponentDidMount() { super.pComponentDidMount(); }
    }

    export interface IReactTotalDetectionSelecterDomVm extends domCore.DomVm {

    }

    export interface ITotalDetectionSelecterDomConfig {
        //doctrortemple?: data.DetectionData.PagerListDatas<data.DetectionData.IDoctorData>;
        advicetemple?: data.DetectionData.PagerListDatas<data.DetectionData.IDocterAdviceData>;
        Unid?: string;
    }

    export class TotalDetectionSelecterDomVm extends domCore.DomVm implements IReactTotalDetectionSelecterDomVm {
        public ReactType = TotalDetectionSelecterDomReact;
        public dataList = new Array<data.DetectionData.IDepartmentData>();

        public table: Table.AdviceConclusionTableDom.AdviceConclusionTableDomVm;
       // public table1: Table1.DoctorConclusionTableDom.DoctorConclusionTableDomVm;

        public pagertion: pager.tool.PaginationVm;

        public constructor(config?: ITotalDetectionSelecterDomConfig) {
            super();
            if (config) {
                //this.dataList = config.derpartData.List;
                this.UniId = config.Unid;
                if (config.advicetemple) {
                    this.init(config);
                }
            }

            this.listenAppEvent("medical/TotalDetection/Tool/AdviceConclusion", this.UniId, (fid: string) => {
                urlFile.Core.AkPost("/MedicalCenter/DeptConclusion/GetExamItem",
                    {
                        FID: fid
                    }, (a) => {

                        var list: data.DetectionData.IDocterAdviceData[] = [];
                        if (a.Data && a.Data.length > 0) {
                            a.Data.forEach((b) => {
                                var model: data.DetectionData.IDocterAdviceData = { FID: b.FID, Name: b.Name, Summary: b.Summary, Advice: b.Advice}
                                list.push(model);
                            })
                        }
                        //自动小结
                      //  var table1config: Table1.DoctorConclusionTableDom.IDoctorConclusionTableDomConfig = { Unid: this.UniId, ListData: list }

                       // this.table1 = new Table1.DoctorConclusionTableDom.DoctorConclusionTableDomVm(table1config);
                        //this.table1.IsChange = true;
                        //this.table1.RowList.forEach((a) => {
                        //    a.IsChange = true;
                        //})
                        this.forceUpdate("");
                    });
            });


        }


        public init(config?: ITotalDetectionSelecterDomConfig) {
            var TableConfig: Table.AdviceConclusionTableDom.IAdviceConclusionTableDomConfig = {
               Unid: this.UniId,
               ListData: config.advicetemple.ListData
            }
            this.pagertion = new pager.tool.PaginationVm();
            this.pagertion.PageNo = config.advicetemple.Pager.PageNo;
            this.pagertion.PageSize = config.advicetemple.Pager.PageSize;
            this.pagertion.TotalCount = config.advicetemple.Pager.TotalCount;
            this.pagertion.isPartHidden = true;

            this.pagertion.PageClickEvent = (pageIndex) => {
                this.loadPageData(pageIndex);
            }
            //config.derpartData.Pager
            this.table = new Table.AdviceConclusionTableDom.AdviceConclusionTableDomVm(TableConfig);

           // var Table1Config: Table1.DoctorConclusionTableDom.IDoctorConclusionTableDomConfig = {
               // Unid: this.UniId,
                //ListData: config.derpartData.ListData
            //}

            //this.table1 = new Table1.DoctorConclusionTableDom.DoctorConclusionTableDomVm(Table1Config);
        }


        public loadPageData(pageIndex: number) {
            //this.GridFormVm.RowList = [];
            //this.AllCheck.vmDataValueSet("false");
            //this.AllCheck.forceUpdate("");
            var _page = { PageNo: pageIndex };
            urlFile.Core.AkPost("/MedicalCenter/TotalDetection/GetAdviceList",
                {
                    pager: JSON.stringify(_page),
                    //unit: this.SearchFormVm.SearchName
                },
                (a) => {

                    //this.DataList = { Data: [] }
                    //this.DataList.Data = a.Data.ListData;
                    //this.table = new Form.PersonPaymentGridFormDom.PersonPaymentGridFormDomVm(this.DataList);
                    //this.table.IsChange = true;
                    //this.table.forceUpdate("");
                    var TableConfig: Table.AdviceConclusionTableDom.IAdviceConclusionTableDomConfig = {
                        Unid: this.UniId,
                        ListData: a.Data.ListData
                    }
                    this.table = new Table.AdviceConclusionTableDom.AdviceConclusionTableDomVm(TableConfig);
                    this.table.IsChange = true;
                    this.table.RowList.forEach(a => a.IsChange = true);

                    this.pagertion.PageNo = a.Data.Pager.PageNo;
                    this.pagertion.PageSize = a.Data.Pager.PageSize;
                    this.pagertion.TotalCount = a.Data.Pager.TotalCount;
                    //this.pagertion.isPartHidden = true;
                    this.pagertion.IsChange = true;
                    this.forceUpdate("");
                });
        }


        public init1(config?: ITotalDetectionSelecterDomConfig) {

        }
    }

    export class TotalDetectionSelecterDomStates extends domCore.DomStates {

    }

    export class TotalDetectionSelecterDomProps extends domCore.DomProps<TotalDetectionSelecterDomVm> { }
}