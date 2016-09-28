import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");
import data = require("./../data");
import Table = require("./AnomalyConclusionTableDom");
import Table1 = require("./AnomalyConExamTableDom");

import pager = require("./../../../../05tool/Pagination");


export module AnomalySelectorDom {
    export class AnomalySelectorDomAction extends domCore.DomAction { }


    export class AnomalySelectorDomReact extends domCore.DomReact<AnomalySelectorDomProps, AnomalySelectorDomStates, AnomalySelectorDomAction> implements domCore.IReact {
        public state = new AnomalySelectorDomStates();

        public pSender(): React.ReactElement<any> {
            return <div>
                <div className="col-lg-8 col-md-8 YSm-modal-left">
                    <div className="Hm-table table-responsive">
                        {this._tDom(this.props.Vm.table) }
                    </div>
                    {this._tDom(this.props.Vm.pagertion) }
                </div>

                <div className="col-lg-4 col-md-4 YSm-modal-right">
                    <div className="Hm-table table-responsive">
                        {this._tDom(this.props.Vm.table1) }
                    </div>
                </div>
            </div>;
        }

        protected pComponentDidMount() { super.pComponentDidMount(); }
    }

    export interface IReactAnomalySelectorDomVm extends domCore.DomVm {

    }

    export interface IAnomalySelectorDomConfig {
        derpartData?: data.DetectionData.PagerListDatas<data.DetectionData.AnomalyTemplate>;
        itemtemple?: data.DetectionData.PagerListDatas<data.DetectionData.ItemTemplate>;
        Unid?: string;
    }

    export class AnomalySelectorDomVm extends domCore.DomVm implements IReactAnomalySelectorDomVm {
        public ReactType = AnomalySelectorDomReact;

        public table: Table.AnomalyConclusionTableDom.AnomalyConclusionTableDomVm;
        public table1: Table1.AnomalyConExamTableDom.AnomalyConExamTableDomVm;

        public pagertion: pager.tool.PaginationVm;

        public constructor(config?: IAnomalySelectorDomConfig) {
            super();
            if (config) {
                //this.dataList = config.derpartData.List;
                this.UniId = config.Unid;
                if (config.derpartData) {
                    this.init(config);
                }
            }

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
                        var table1config = { Unid: this.UniId, ListData:list}

                        this.table1 = new Table1.AnomalyConExamTableDom.AnomalyConExamTableDomVm(table1config);
                        this.table1.IsChange = true;
                        this.table1.RowList.forEach((a) => {
                            a.IsChange = true;
                        })
                        this.forceUpdate("");
                    });
            });


        }


        public init(config?: IAnomalySelectorDomConfig) {
            var TableConfig: Table.AnomalyConclusionTableDom.IAnomalyConclusionTableDomConfig = {
                Unid: this.UniId,
                ListData: config.derpartData.ListData
            }
            this.pagertion = new pager.tool.PaginationVm();
            this.pagertion.PageNo = config.derpartData.Pager.PageNo;
            this.pagertion.PageSize = config.derpartData.Pager.PageSize;
            this.pagertion.TotalCount = config.derpartData.Pager.TotalCount;
            this.pagertion.isPartHidden = true;

            this.pagertion.PageClickEvent = (pageIndex) => {
                this.loadPageData(pageIndex);
            }
            //config.derpartData.Pager
            this.table = new Table.AnomalyConclusionTableDom.AnomalyConclusionTableDomVm(TableConfig);

            var Table1Config: Table1.AnomalyConExamTableDom.IAnomalyConExamTableDomConfig = {
                Unid: this.UniId,
                //ListData: config.derpartData.ListData
            }

            this.table1 = new Table1.AnomalyConExamTableDom.AnomalyConExamTableDomVm(Table1Config);
        }


        public loadPageData(pageIndex: number) {
            //this.GridFormVm.RowList = [];
            //this.AllCheck.vmDataValueSet("false");
            //this.AllCheck.forceUpdate("");
            var _page = { PageNo: pageIndex };
            urlFile.Core.AkPost("/MedicalCenter/AnomalyConclusion/GetAnomalyConclusionList",
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
                    var TableConfig: Table.AnomalyConclusionTableDom.IAnomalyConclusionTableDomConfig = {
                        Unid: this.UniId,
                        ListData: a.Data.ListData
                    }
                    this.table = new Table.AnomalyConclusionTableDom.AnomalyConclusionTableDomVm(TableConfig);
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


        public init1(config?: IAnomalySelectorDomConfig) {

        }
    }

    export class AnomalySelectorDomStates extends domCore.DomStates {

    }

    export class AnomalySelectorDomProps extends domCore.DomProps<AnomalySelectorDomVm> { }
}