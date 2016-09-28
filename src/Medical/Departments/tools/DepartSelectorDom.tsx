import domFile = require("./../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");
import data = require("./../data");
import Table = require("./DeptConclusion/DeptConclusionTableDom");
import Table1 = require("./DeptConclusionExamItem/DeptConExamTableDom");

import pager = require("./../../../05tool/Pagination");


export module DepartSelectorDom {
    export class DepartSelectorDomAction extends domCore.DomAction { }


    export class DepartSelectorDomReact extends domCore.DomReact<DepartSelectorDomProps, DepartSelectorDomStates, DepartSelectorDomAction> implements domCore.IReact {
        public state = new DepartSelectorDomStates();

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

    export interface IReactDepartSelectorDomVm extends domCore.DomVm {

    }

    export interface IDepartSelectorDomConfig {
        derpartData?: data.Result.PagerListData<data.Result.DepartTemplate>;
        itemtemple?: data.Result.PagerListData<data.Result.ItemTemplate>;
        Unid?: string;
    }

    export class DepartSelectorDomVm extends domCore.DomVm implements IReactDepartSelectorDomVm {
        public ReactType = DepartSelectorDomReact;
        public dataList = new Array<data.Result.DepartTemplate>();

        public table: Table.DeptConclusionTableDom.DeptConclusionTableDomVm;
        public table1: Table1.DeptConExamTableDom.DeptConExamTableDomVm;

        public pagertion: pager.tool.PaginationVm;

        public constructor(config?: IDepartSelectorDomConfig) {
            super();
            if (config) {
                //this.dataList = config.derpartData.List;
                this.UniId = config.Unid;
                if (config.derpartData) {
                    this.init(config);
                }
            }

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

                        this.table1 = new Table1.DeptConExamTableDom.DeptConExamTableDomVm(table1config);
                        //this.table1.IsChange = true;
                        //this.table1.RowList.forEach((a) => {
                        //    a.IsChange = true;
                        //})
                        this.forceUpdate("");
                    });
            });


        }


        public init(config?: IDepartSelectorDomConfig) {
            var TableConfig: Table.DeptConclusionTableDom.IDeptConclusionTableDomConfig = {
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
            this.table = new Table.DeptConclusionTableDom.DeptConclusionTableDomVm(TableConfig);

            var Table1Config: Table1.DeptConExamTableDom.IDeptConExamTableDomConfig = {
                Unid: this.UniId,
                //ListData: config.derpartData.ListData
            }

            this.table1 = new Table1.DeptConExamTableDom.DeptConExamTableDomVm(Table1Config);
        }


        public loadPageData(pageIndex: number) {
            //this.GridFormVm.RowList = [];
            //this.AllCheck.vmDataValueSet("false");
            //this.AllCheck.forceUpdate("");
            var _page = { PageNo: pageIndex };
            urlFile.Core.AkPost("/MedicalCenter/DeptConclusion/GetDepartConclusionList",
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
                    var TableConfig: Table.DeptConclusionTableDom.IDeptConclusionTableDomConfig = {
                        Unid: this.UniId,
                        ListData: a.Data.ListData
                    }
                    this.table = new Table.DeptConclusionTableDom.DeptConclusionTableDomVm(TableConfig);
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


        public init1(config?: IDepartSelectorDomConfig) {

        }
    }

    export class DepartSelectorDomStates extends domCore.DomStates {

    }

    export class DepartSelectorDomProps extends domCore.DomProps<DepartSelectorDomVm> { }
}