import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import basewedPageFile = require("./../../../../04page/BaseWebPage");
import searchFormFile = require("./ReportBrandElectricalMaintanceSearchFormDom");
import gridFormFile = require("./ReportBrandElectricalMaintanceGridFormDom");
import pagination = require("./../../../../05tool/Pagination");
import singleCheckFile = require("./../../../../02col/02Mulite/SingleCheckBox");
import buttonFile = require("./../../../../05tool/Button");
import eventFile = require("./../../../../01core/Event");
import dataFile = require("./../Data");

export module ReportBrandElectricalMaintanceListPage {
    export class ReportBrandElectricalMaintanceListPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class ReportBrandElectricalMaintanceListPageReact extends basewedPageFile.Web.BaseWebPageReact<ReportBrandElectricalMaintanceListPageProps, ReportBrandElectricalMaintanceListPageStates, ReportBrandElectricalMaintanceListPageAction> implements domCore.IReact {

        public state = new ReportBrandElectricalMaintanceListPageStates();
        public pSender(): React.ReactElement<any> {
            var _ff = <div className="Hz-scroll row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 Hm-center-content">
                    {this._tDom(this.props.Vm.SearchFormVm, { nullNode:<span>没有搜索区</span> }) }
                    <div className="Hm-grids">
                        <div className="button-bar">{this.createButtons() }</div>
                        <div className="topPager">{this._tDom(this.props.Vm.PaginationVm) }</div>
                        {this._tDom(this.props.Vm.GridFormVm) }
                        <div className="bottomPager">{this._tDom(this.props.Vm.PaginationVm) }</div>
                    </div>
                </div>
            </div>;
            return _ff;
        }

        private createButtons(): React.ReactElement<any> {
            return <div className="btn-group">
                {this.props.Vm.PageBtnList.map((btn) => {
                    return this._tDom(btn);
                }) }
                {this.props.Vm.DataBtnList.map((btn) => {
                    return this._tDom(btn); 
                }) }
            </div>

        }


    }
    export interface IReportBrandElectricalMaintanceListPageConfig {
        //PagerListData: dataFile.ReportBrandElectricalMaintance.IReportBrandElectricalMaintancePagerListData;
        DataSet?: any;
    }

    export class ReportBrandElectricalMaintanceListPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = ReportBrandElectricalMaintanceListPageReact;
        public SearchFormVm: searchFormFile.ReportBrandElectricalMaintanceSearchFormDom.ReportBrandElectricalMaintanceSearchFormDomVm;
        public GridFormVm: gridFormFile.ReportBrandElectricalMaintanceGridFormDom.ReportBrandElectricalMaintanceGridFormDomVm;
        public PaginationVm: pagination.tool.PaginationVm;
        public CheckBoxList = new Array<singleCheckFile.ui.SingleCheckBoxVm>();
        public DataBtnList = new Array<buttonFile.ui.ButtonVm>();
        public PageBtnList = new Array<buttonFile.ui.ButtonVm>();
        public AllCheck: singleCheckFile.ui.SingleCheckBoxVm;
        public UniId: string = "";
        public DataSet: any;

        public constructor(config?: IReportBrandElectricalMaintanceListPageConfig) {
            super();
            this.UniId = eventFile.App.getUniId().toString();
            //this.initBtnList();
            var searchConfig = { UniId: this.UniId };
            this.SearchFormVm = new searchFormFile.ReportBrandElectricalMaintanceSearchFormDom.ReportBrandElectricalMaintanceSearchFormDomVm(searchConfig);
            if (config)
            {
                this.init(config);
            }

            this.listenAppEvent("TB/Report/Test/Test", this.UniId, (pageIndex: number) => {
                this.searchData(pageIndex);
            });
         
        }

        private initBtnList() {
            //var btnVm = new buttonFile.ui.ButtonVm();
            //btnVm.DisplayName = "新增";
            //btnVm.NoEnable = false;
            //this.PageBtnList.push(btnVm);

            //var btnVm1 = new buttonFile.ui.ButtonVm();
            //btnVm1.DisplayName = "删除";
            //btnVm1.NoEnable = true;
            //var btnVm2 = new buttonFile.ui.ButtonVm();
            //btnVm2.DisplayName = "编辑";
            //btnVm2.NoEnable = true;
            //var btnVm3 = new buttonFile.ui.ButtonVm();
            //btnVm3.DisplayName = "详情";
            //btnVm3.NoEnable = true;
            //this.DataBtnList.push(btnVm1);
            //this.DataBtnList.push(btnVm2);
            //this.DataBtnList.push(btnVm3);

        }

       

        //public delOpt(vals: string) {
        //    if (confirm("你确定要删除 所选中的数据吗 ？？")) {
        //        urlFile.Core.AkPost("/MedicalCenter/ReportBrandElectricalMaintance/RemoveAnomalies", { fids: vals }, (data) => {
        //            var _data = data.Content;
        //            if (_data == "ok") {
        //                this.loadPageData(0);
        //            }
        //        });

        //    }
        //}


        private init(config: IReportBrandElectricalMaintanceListPageConfig) {
        
            //this.PagerListData = config.PagerListData;
            //this.PaginationVm = new pagination.tool.PaginationVm();
            //var pager = this.PagerListData.Pager;
            //this.PaginationVm.PageNo = pager.PageNo;
            //this.PaginationVm.PageSize = pager.PageSize;
            //this.PaginationVm.TotalCount = pager.TotalCount;

            //this.PaginationVm.PageClickEvent = (pageIndex) => {
            //    this.loadPageData(pageIndex);
            //}
            this.DataSet = config.DataSet;
            var gridFormConfig = { DataSet: this.DataSet, UniId: this.UniId };
            this.GridFormVm = new gridFormFile.ReportBrandElectricalMaintanceGridFormDom.ReportBrandElectricalMaintanceGridFormDomVm(gridFormConfig);
            this.GridFormVm.RowList.forEach((row) => {
                this.CheckBoxList.push(row.SingleCheckVm);
                row.SingleCheckVm.ChangeEventFun = (val, col) => {
                    this.checkCheckBox(val, col);
                    return true;
                };
            });
            this.AllCheck = this.GridFormVm.AllCheck;
            this.AllCheck.ChangeEventFun = (val, col) => {
                this.allCheckChecked(val, col);
                return true;
            };
          
        }

        protected loadPage(callback?: () => any) {
            urlFile.Core.AkPost("/HZTongBao/Report/BrandElectricalMaintance", {  }, (a) => {
                var pageConfig: IReportBrandElectricalMaintanceListPageConfig = { DataSet: a};
                this.init(pageConfig);
                if (callback) {
                    callback();
                }
            });

        }

        public checkCheckBox(val: string, checkDom: domFile.Core.DomVm): void {
            var rowList = this.GridFormVm.RowList;
            window["isHand"] = true;
            var isCheck = false;
            var isAllCheck = true;
            var checkedCount = 0;
            if (val == "true") {
                isCheck = true;
            }

            rowList.forEach((row) => {
                var chk = row.SingleCheckVm;
                var _val = chk.dataValue();
                if (_val == "true" && checkDom != chk) {
                    isCheck = true;
                    checkedCount++;
                }
                if (checkDom == chk) {
                    if (val == "true") {
                        checkedCount++;
                    }
                }
            });


            isAllCheck = rowList.length == checkedCount ? true : false;
            this.DataBtnList.forEach((btn) => {
                btn.NoEnable = isCheck ? false : true;
                btn.forceUpdate("");
            });

            this.AllCheck.vmDataValueSet(isAllCheck ? "true" : "false");

            this.AllCheck.forceUpdate("", () => {
                window["isHand"] = false;
            });

        }

        public allCheckChecked(val: string, checkDom: domFile.Core.DomVm): void {

            if (!window["isHand"]) {

                this.GridFormVm.RowList.forEach((row) => {
                    var chk = row.SingleCheckVm;
                    chk.reactDataValueSet(val);
                });
            }
        }

        public searchData(pageIndex: number) {
            this.GridFormVm.RowList = [];
            this.AllCheck.vmDataValueSet("false");
            this.AllCheck.forceUpdate("");
            var _page = { PageNo: pageIndex };
            urlFile.Core.AkPost("/HZTongBao/Report/BrandElectricalMaintance",
                {
                   // pager: JSON.stringify(_page),
                   // simpleCode: this.SearchFormVm.SearchSimpleCode,
                  //  name: this.SearchFormVm.SearchName
                  //  deptId: this.SearchFormVm.DepartmentTreeVm.dataValue(),
                    brandId:this.SearchFormVm.BrandVm.dataValue(),
                    year:this.SearchFormVm.MonthVm.dataValue()
                },
                (a) => {
                   // var _data: dataFile.ReportBrandElectricalMaintance.AbnomalPagerListData= a.Data;
                   // document.title = this.Title = "菜单列表，第" + (pageIndex + 1) + "页，总共" + _data.Pager.TotalCount + "条";
                   // this.getData(_data);
                    //this.PagerListData = _data;
                    var pageConfig: IReportBrandElectricalMaintanceListPageConfig = { DataSet: a };
                    this.init(pageConfig);
                    this.IsChange = true;
                   // var _d0: Date = new Date();
                    this.forceUpdate("");
                   // this.GridFormVm.forceUpdate("");
                });
        }

    }
    export class ReportBrandElectricalMaintanceListPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class ReportBrandElectricalMaintanceListPageProps extends basewedPageFile.Web.BaseWebPageProps<ReportBrandElectricalMaintanceListPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("ReportBrandElectricalLISTPAGE", basewedPageFile.Web.BaseWebPageVm, ReportBrandElectricalMaintanceListPageVm);

}
