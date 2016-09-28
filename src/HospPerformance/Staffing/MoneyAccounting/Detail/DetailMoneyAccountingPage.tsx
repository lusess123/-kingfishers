import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
//import domFile = require("./../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import basewedPageFile = require("./../../../../04page/BaseWebPage");
import React = require("react");
import ReactDOM = require("react-dom");

import thFile = require("./../../../../09Web/dom/ThDom");
import ThDom = thFile.Web.ThDomReact;
import TextFile = require("./../../../../02col/01single/Text");
import Text = TextFile.ui.TextReact;
import TextVm = TextFile.ui.TextVm;
import radioFile = require("./../../../../02col/01single/Radio");
import radio = radioFile.ui.RadioReact;
import radioVm = radioFile.ui.RadioVm;
import dataFile = require("./../data");

import ItemTitleRow = require("./DetailSalaryItemTitleRow");

import DetailSalartRow = require("./DetailSalartRow");

export module DetailMoneyAccountingPage {
    export class DetailMoneyAccountingPageAction extends domCore.DomAction {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class DetailMoneyAccountingPageReact extends domCore.DomReact<DetailMoneyAccountingPageProps, DetailMoneyAccountingPageStates, DetailMoneyAccountingPageAction> implements domCore.IReact {

        public state = new DetailMoneyAccountingPageStates();
        public pSender(): React.ReactElement<any> {
            return <div className="p-a-md">
                <div className="pull-right">
                    <a className="btn btn-sm btn-primary" onClick={() => { this.InputExcel() } } >导出</a>
                </div>
                {this._initTable() }
            </div>;
        }




        //public _initForm(): React.ReactElement<any> {
        //    return <form className="clearfix">
        //        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 form-group  form-inline clearfix">
        //            <label className="col-md-5 col-sm-3 form-control-label text-right">编号/姓名：</label>
        //            <div className="col-md-7 col-sm-9">{this.props.Vm.TextObj.intoDom() }</div>
        //        </div>
        //    </form>;
        //}

        public _initTable(): React.ReactElement<any> {
            var theader = <thead className="thead-default">                
                {this.initHeader() }
            </thead>
            var tbody = this.initBody();

            var table = <table className="table table-striped table-bordered table-hover">{theader}{tbody}</table>;
            return <div className="table-responsive"  onScroll={(e) => { this.fun_Scroll(e); } }>{table}</div>;


        }
        private fun_Scroll(e: React.UIEvent) {
            var _$obj = $(e.target);
            this.props.Vm.ScrollAuto(_$obj.scrollLeft());
        }
        public initHeader(): React.ReactElement<any> {
            return <tr>
                <th>员工编号</th>
                <th>姓名</th>
                <th>日期</th>
                {this.props.Vm.ItemTitleList.map(r => {
                    return r.intoDom();
                }) }
            </tr>
        };
        public initBody(): React.ReactElement<any> {
            return <tbody>
                {this.props.Vm.SalartRowList.map(r => {
                    return r.intoDom()
                }) }
            </tbody>;
        };
        public InputExcel() {
            this.props.Vm.InputExcel();
        }
        private getThDomVM(w?: number) {
            var _ther = new thFile.Web.ThDomVm();
            if (w) {
                _ther.Width = w;
            }
            return _ther;
        }

    }

    export interface IReactDetailMoneyAccountingPageVm extends domCore.DomVm {
        ScrollAuto(left: number);
        TextObj: TextFile.ui.TextVm;
        RadioObj: radioFile.ui.RadioVm;
        PageData: dataFile.Data.ISalaryPageData;
        ItemTitleList: ItemTitleRow.DetailSalaryItemTitleRow.DetailSalaryItemTitleRowVm[];
        RowList: dataFile.Data.ISalaryItemSet[];
        UserList: dataFile.Data.IUsersData[];
        SalartRowList: DetailSalartRow.DetailSalartRow.DetailSalartRowVm[];
        ItemList: dataFile.Data.SalaryItemValueOrCount[];
        InputExcel(): void;
    }

    export interface IDetailMoneyAccountingPageConfig {
        SalaryPageData: dataFile.Data.ISalaryPageData;

    }
    export class DetailMoneyAccountingPageVm extends domCore.DomVm implements IReactDetailMoneyAccountingPageVm {
        public ReactType = DetailMoneyAccountingPageReact;

        public IsAcsRelative: boolean = false;
        public LeftNum: number = 0;
        public TextObj: TextVm = new TextFile.ui.TextVm();
        public RadioObj: radioVm = new radioFile.ui.RadioVm();
        public PageData: dataFile.Data.ISalaryPageData;
        public ItemList: dataFile.Data.SalaryItemValueOrCount[] = [];
        public ItemTitleList: ItemTitleRow.DetailSalaryItemTitleRow.DetailSalaryItemTitleRowVm[] = [];
        public RowList: dataFile.Data.ISalaryItemSet[] = [];
        public UserList: dataFile.Data.IUsersData[] = [];
        public SalartRowList: DetailSalartRow.DetailSalartRow.DetailSalartRowVm[] = [];
        public Month: string;

        public constructor(config?: IDetailMoneyAccountingPageConfig) {
            super();
            this.RadioObj.ItemList = [{ Value: "0", Text: "在职" }, { Value: "1", Text: "离职" }]
            if (config) {
                this.PageData = config.SalaryPageData;
                this.ItemList = config.SalaryPageData.ItemList;
                this.RowList = config.SalaryPageData.SalaryItemSet;
                this.UserList = config.SalaryPageData.UserList;
            }
            this.ItemList.map(a => {
                if (a.Type != "绩效项") {
                    var config: ItemTitleRow.DetailSalaryItemTitleRow.IDetailSalaryItemTitleRowConfig = { Data: a, Unid: this.UniId };
                    var _row = new ItemTitleRow.DetailSalaryItemTitleRow.DetailSalaryItemTitleRowVm(config);
                    _row.IsChange = true;
                    _row.IsMulit = true;
                    this.ItemTitleList.push(_row);
                }
            })
            this.RowList.map(a => {
                this.UserList.map(b => {
                    if (a.UserID == b.UserId) {
                        var _config: DetailSalartRow.DetailSalartRow.IDetailSalartRowConfig = { Data: this.ItemList, UserData: b, DataValue: a, Unid: this.UniId, Month: this.PageData.SalaryData.Month };
                        var _rowDom = new DetailSalartRow.DetailSalartRow.DetailSalartRowVm(_config);
                        _rowDom.IsChange = true;
                        _rowDom.IsMulit = true;
                        this.SalartRowList.push(_rowDom);
                    }

                })


            })
        }

        public ScrollAuto(left: number) {
            this.IsAcsRelative = left > 0;
            this.LeftNum = left;
            this.forceUpdate("");
        }
        public InputExcel() {
            var fid = this.PageData.SalaryData.FID;
            window.open("/HospPerformance/HumanResource/InputExcelFromSalary?fid=" + fid, 'fullscreen=yes, scrollbars=auto');

        }

        private init(config: IDetailMoneyAccountingPageConfig) {


        }



    }
    export class DetailMoneyAccountingPageStates extends domCore.DomStates {
    }


    export class DetailMoneyAccountingPageProps extends domCore.DomProps<IReactDetailMoneyAccountingPageVm>{
    }


    //iocFile.Core.Ioc.Current().RegisterType("DETAILMONEYACCOUNTINGPAGE", basewedPageFile.Web.BaseWebPageVm, DetailMoneyAccountingPageVm);

}
