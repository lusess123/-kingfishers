import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import React = require("react");
import ReactDOM = require("react-dom");
import urlFile = require("./../../../../01core/Url");
import basewedPageFile = require("./../../../../04page/BaseWebPage");
import searchFormFile = require("./AppraisalItemSearchDom");
import gridFormFile = require("./AppraisalItemSelectorGridFormDom");
import pagination = require("./../../../../05tool/Pagination");
import singleCheckFile = require("./../../../../02col/02Mulite/SingleCheckBox");
import buttonFile = require("./../../../../05tool/Button");
import eventFile = require("./../../../../01core/Event");
import dataFile = require("./../Data");
import baseTreeFile = require("./../../../../02col/03selector/BaseTree");


export module AppraisalItemSelectorListPage {
    export class AppraisalItemSelectorListPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class AppraisalItemSelectorListPageReact extends basewedPageFile.Web.BaseWebPageReact<AppraisalItemSelectorListPageProps, AppraisalItemSelectorListPageStates, AppraisalItemSelectorListPageAction> implements domCore.IReact {

        public state = new AppraisalItemSelectorListPageStates();
        public pSender(): React.ReactElement<any> {
            //var _ff = <div className="row acsScroll acsMargin3">
            //    <div className="main acs-fixed-top">
            //        {this.props.Vm.SearchFormVm.intoDom() }
            //        <div className="acs-grids">
            //            {this.props.Vm.PaginationVm.intoDom() }
            //            {this.props.Vm.GridFormVm.intoDom() }
            //            {this.props.Vm.PaginationVm.intoDom() }
            //        </div>
            //    </div>
            //</div>;
            //return _ff;

            var _dom = <div className="Hz-scroll">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 Hm-center-content">
                    {this.props.Vm.SearchFormVm.intoDom() }
                    <div>
                        {this.props.Vm.GridFormVm.intoDom() }
                        {this.props.Vm.PaginationVm.intoDom() }
                    </div>


                </div>
            </div>;
            return _dom;
        }


    }
    export interface IAppraisalItemSelectorListPageConfig {
        PagerListData?: dataFile.Data.IAppraisalItemPagerListData;
        IsMultiSelect?: boolean
        UniId?: string;
        ResultType?: string;
        IsSearch?: boolean;
    }
    export class AppraisalItemSelectorListPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = AppraisalItemSelectorListPageReact;
        public SearchFormVm: searchFormFile.AppraisalItemSearchDom.AppraisalItemSearchDomVm;
        public GridFormVm: gridFormFile.AppraisalItemSelectorGridFormDom.AppraisalItemSelectorGridFormDomVm;
        public PaginationVm: pagination.tool.PaginationVm;
        public CheckBoxList = new Array<singleCheckFile.ui.SingleCheckBoxVm>();
        public DataBtnList = new Array<buttonFile.ui.ButtonVm>();
        public PageBtnList = new Array<buttonFile.ui.ButtonVm>();
        public AllCheck: singleCheckFile.ui.SingleCheckBoxVm;
        public UniId: string = "";
        public PagerListData: dataFile.Data.IAppraisalItemPagerListData;
        public NaviTree: baseTreeFile.ui.BaseTreeVm;
        public ResultType: string;

        public constructor(config?: IAppraisalItemSelectorListPageConfig) {
            super();
            if (config && config.UniId) {
                this.UniId = config.UniId;
            }
            else {
                this.UniId = eventFile.App.getUniId().toString();
            }
            // this.NaviTree = new baseTreeFile.ui.BaseTreeVm({ RegName:"AppraisalCategoryTreeCodeTable" });
            var searchConfig = { UniId: this.UniId };
            this.SearchFormVm = new searchFormFile.AppraisalItemSearchDom.AppraisalItemSearchDomVm(searchConfig);
            //this.listenAppEvent("AppraisalItemSelector/loadpagedata", this.UniId, (pageIndex: number) => {
            //    this.loadPageData(pageIndex);
            //});
            if (config && config.PagerListData) {
                this.init(config);
            }


        }

        public init(config: IAppraisalItemSelectorListPageConfig) {
            //this.NaviTree = new baseTreeFile.ui.BaseTreeVm({ RegName: "AppraisalCategoryTreeCodeTable" });
            //this.NaviTree.ChangeEventFun = ((val, col) => {
            //    this.loadPageData(0, val);
            //    return true;
            //});
            if (!config.IsSearch) {
                this.listenAppEvent("AppraisalItemSelector/loadpagedata", this.UniId, (pageIndex: number) => {
                    this.loadPageData(pageIndex);
                });
            }
            this.SearchFormVm.SearchName = !config.IsSearch ? "" : this.SearchFormVm.SearchName;
            this.ResultType = config.ResultType ? config.ResultType : this.ResultType;
            this.PagerListData = config.PagerListData ? config.PagerListData : { Pager: { PageNo: 0, PageSize: 15, TotalCount: 0 }, ListData: [] };
            this.PaginationVm = new pagination.tool.PaginationVm({ isPartHidden: true, IsPageSizeHidden: true, IsBidaStyle:false });
            var pager = this.PagerListData.Pager;
            this.PaginationVm.PageNo = pager.PageNo;
            this.PaginationVm.PageSize = pager.PageSize;
            this.PaginationVm.TotalCount = pager.TotalCount;

            this.PaginationVm.PageClickEvent = (pageIndex) => {
                this.loadPageData(pageIndex);
            }

            var gridFormConfig = { Data: this.PagerListData.ListData, UniId: this.UniId, IsMultiSelect: config.IsMultiSelect };
            this.GridFormVm = new gridFormFile.AppraisalItemSelectorGridFormDom.AppraisalItemSelectorGridFormDomVm(gridFormConfig);
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

        public getCategoryId(): string {

            var _str: any = this.NaviTree.dataValue();
            return _str;
        }

        protected loadPage(callback?: () => any) {

            urlFile.Core.AkPost("/HospPerformance/AppraisalItem/SearchAppraisalItems", {}, (a) => {
                var pageConfig: IAppraisalItemSelectorListPageConfig = { PagerListData: a.Data };
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

                //this.CheckBoxList.forEach((chk) => {
                //    chk.reactDataValueSet(val);
                //});

                this.GridFormVm.RowList.forEach((row) => {
                    var chk = row.SingleCheckVm;
                    chk.reactDataValueSet(val);
                    row.clickItem();
                });
            }
        }

        public loadPageData(pageIndex: number, naviTreeId?: string) {
            this.GridFormVm.RowList = [];
            this.AllCheck.vmDataValueSet("false");
            this.AllCheck.forceUpdate("");
            var _page = { PageNo: pageIndex };

            urlFile.Core.AkPost("/HospPerformance/AppraisalItem/SearchAppraisalItems",
                {
                    pager: JSON.stringify(_page),
                    searchName: this.SearchFormVm.SearchName,
                    resultType: this.ResultType
                },
                (a) => {

                    var pageConfig: IAppraisalItemSelectorListPageConfig = { PagerListData: a.Data, IsSearch: true };
                    this.init(pageConfig);
                    this.IsChange = true;
                    // this.forceUpdate("");
                    this.forceUpdate("", () => {
                        this.emitAppEvent("call-PickDom-SetSelect", this.UniId);
                    });
                });
            //this.forceUpdate("", () => {
            //    this.emitAppEvent("call-PickDom-SetSelect", this.UniId);
            //});

        }

    }
    export class AppraisalItemSelectorListPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class AppraisalItemSelectorListPageProps extends basewedPageFile.Web.BaseWebPageProps<AppraisalItemSelectorListPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("AppraisalItemSelectorListPage", basewedPageFile.Web.BaseWebPageVm, AppraisalItemSelectorListPageVm);

}
