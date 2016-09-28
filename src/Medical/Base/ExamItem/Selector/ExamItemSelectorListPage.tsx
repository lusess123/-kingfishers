import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import React = require("react");
import ReactDOM = require("react-dom");
import urlFile = require("./../../../../01core/Url");
import basewedPageFile = require("./../../../../04page/BaseWebPage");
import searchFormFile = require("./../List/ExamItemSearchDow");
import gridFormFile = require("./ExamItemSelectorGridFromDow");
import pagination = require("./../../../../05tool/Pagination");
import singleCheckFile = require("./../../../../02col/02Mulite/SingleCheckBox");
import buttonFile = require("./../../../../05tool/Button");
import eventFile = require("./../../../../01core/Event");
import dataFile = require("./../Data");

export module ExamItemSelectorListPage {
    export class ExamItemSelectorListPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class ExamItemSelectorListPageReact extends basewedPageFile.Web.BaseWebPageReact<ExamItemSelectorListPageProps, ExamItemSelectorListPageStates, ExamItemSelectorListPageAction> implements domCore.IReact {

        public state = new ExamItemSelectorListPageStates();
        public pSender(): React.ReactElement<any> {
            var _ff = <div className="row acsScroll acsMargin3">
                <div className="main acs-fixed-top">
                    {this.props.Vm.SearchFormVm.intoDom() }
                    <div className="acs-grids">
                        {this.props.Vm.PaginationVm.intoDom() }
                        {this.props.Vm.GridFormVm.intoDom() }
                        {this.props.Vm.PaginationVm.intoDom() }
                    </div>
                </div>
            </div>;
            return _ff;
        }

     
    }
    export interface IExamItemSelectorListPageConfig {
        PagerListData: dataFile.ExamItem.ExamItemPagerListData;
        IsMultiSelect?: boolean
        UniId?: string;
    }
    export class ExamItemSelectorListPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = ExamItemSelectorListPageReact;
        public SearchFormVm: searchFormFile.ExamItemSearchDow.ExamItemSearchDowVm;
        public GridFormVm: gridFormFile.ExamItemSelectorGridFromDow.ExamItemSelectorGridFromDowVm;
        public PaginationVm: pagination.tool.PaginationVm;
        public CheckBoxList = new Array<singleCheckFile.ui.SingleCheckBoxVm>();
        public DataBtnList = new Array<buttonFile.ui.ButtonVm>();
        public PageBtnList = new Array<buttonFile.ui.ButtonVm>();
        public AllCheck: singleCheckFile.ui.SingleCheckBoxVm;
        public UniId: string = "";
        public PagerListData: dataFile.ExamItem.ExamItemPagerListData;
        public constructor(config?: IExamItemSelectorListPageConfig) {
            super();
            if (config && config.UniId) {
                this.UniId = config.UniId;
            }
            else {
                this.UniId = eventFile.App.getUniId().toString();
            }
            var searchConfig = { UniId: this.UniId };
            this.SearchFormVm = new searchFormFile.ExamItemSearchDow.ExamItemSearchDowVm(searchConfig);
            this.listenAppEvent("medical/base/ExamItem/loadpagedata", this.UniId, (pageIndex: number) => {
                this.loadPageData(pageIndex);
            });
            if (config)
            {
                this.init(config);
            }
        }

        public init(config: IExamItemSelectorListPageConfig) {
            if (config.UniId)
            {
                this.UniId = config.UniId;
            }
            this.PagerListData = config.PagerListData;
            this.PaginationVm = new pagination.tool.PaginationVm();
            var pager = this.PagerListData.Pager;
            this.PaginationVm.PageNo = pager.PageNo;
            this.PaginationVm.PageSize = pager.PageSize;
            this.PaginationVm.TotalCount = pager.TotalCount;

            this.PaginationVm.PageClickEvent = (pageIndex) => {
                this.loadPageData(pageIndex);
            }

            var gridFormConfig = { Data: this.PagerListData.ListData, UniId: this.UniId, IsMultiSelect: config.IsMultiSelect };
            this.GridFormVm = new gridFormFile.ExamItemSelectorGridFromDow.ExamItemSelectorGridFromDowVm(gridFormConfig);
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
            //urlFile.Core.AkPost("/core/WebService/Method?resolver=JsonMethod", { json: "ExamItemListData.json" }, (a) => {
            //    var pageConfig: IExamItemSelectorListPageConfig = { PagerListData: a};
            //    this.init(pageConfig);
            //    if (callback) {
            //        callback();
            //    }
            //});

            urlFile.Core.AkPost("/MedicalCenter/ExamItem/SearchExamItem", {}, (a) => {
                var pageConfig: IExamItemSelectorListPageConfig = { PagerListData: a.Data };
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
                });
            }
        }

        public loadPageData(pageIndex: number) {
            this.GridFormVm.RowList = [];
            this.AllCheck.vmDataValueSet("false");
            this.AllCheck.forceUpdate("");
            var _page = { PageNo: pageIndex };
            urlFile.Core.AkPost("/MedicalCenter/ExamItem/SearchExamItem",
                {
                    pager: JSON.stringify(_page),
                    simpleCode: this.SearchFormVm.SearchSimpleCode,
                    name: this.SearchFormVm.SearchName
                },
                (a) => {

                    var pageConfig: IExamItemSelectorListPageConfig = { PagerListData: a.Data };
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
    export class ExamItemSelectorListPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class ExamItemSelectorListPageProps extends basewedPageFile.Web.BaseWebPageProps<ExamItemSelectorListPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("ExamItemSelectorLISTPAGE", basewedPageFile.Web.BaseWebPageVm, ExamItemSelectorListPageVm);

}
