import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import React = require("react");
import ReactDOM = require("react-dom");
import urlFile = require("./../../../../01core/Url");
import basewedPageFile = require("./../../../../04page/BaseWebPage");
import searchFormFile = require("./ResultCommonSearchDow");
import gridFormFile = require("./ResultCommonGridFromDow");
import pagination = require("./../../../../05tool/Pagination");
import singleCheckFile = require("./../../../../02col/02Mulite/SingleCheckBox");
import buttonFile = require("./../../../../05tool/Button");
import eventFile = require("./../../../../01core/Event");
import dataFile = require("./../Data");

export module ResultCommonListPage {
    export class ResultCommonListPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class ResultCommonListPageReact extends basewedPageFile.Web.BaseWebPageReact<ResultCommonListPageProps, ResultCommonListPageStates, ResultCommonListPageAction> implements domCore.IReact {

        public state = new ResultCommonListPageStates();
        public pSender(): React.ReactElement<any> {
            var _ff = <div className="acsScroll">
                <div className="col-lg-10 col-md-12 col-sm-12 col-xs-12 Hm-center-content">
                    {this.props.Vm.SearchFormVm.intoDom() }
                    <div className="acs-grids">
                        <div className="button-bar">{this.props.Vm.initButtons() }</div>
                        <div className="topPager">{this.props.Vm.PaginationVm.intoDom() }</div>
                        {this.props.Vm.GridFormVm.intoDom() }
                        <div className="bottomPager"> {this.props.Vm.PaginationVm.intoDom() }</div>
                    </div>
                </div>
            </div>;
            return _ff;
        }


    }
    export interface IResultCommonListPageConfig {
        PagerListData: dataFile.ResultCommon.ResultCommonPagerListData;


    }
    export class ResultCommonListPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = ResultCommonListPageReact;
        public SearchFormVm: searchFormFile.ResultCommonSearchDow.ResultCommonSearchDowVm;
        public GridFormVm: gridFormFile.ResultCommonGridFromDow.ResultCommonGridFromDowVm;
        public PaginationVm: pagination.tool.PaginationVm;
        public CheckBoxList = new Array<singleCheckFile.ui.SingleCheckBoxVm>();
        public DataBtnList = new Array<buttonFile.ui.ButtonVm>();
        public PageBtnList = new Array<buttonFile.ui.ButtonVm>();
        public AllCheck: singleCheckFile.ui.SingleCheckBoxVm;
        public UniId: string = "";
        public PagerListData: dataFile.ResultCommon.ResultCommonPagerListData;
        public constructor(config?: IResultCommonListPageConfig) {
            super();
            this.UniId = eventFile.App.getUniId().toString();
            var searchConfig = { UniId: this.UniId };
            this.SearchFormVm = new searchFormFile.ResultCommonSearchDow.ResultCommonSearchDowVm(searchConfig);
            this.listenAppEvent("loadresultpagedata", this.UniId, (pageIndex: number) => {
                this.loadPageData(pageIndex);
            });
            this.listenAppEvent("medical/base/result/rowbtnclick", this.UniId, (btnName: string, fid: string) => {
                this[btnName + "Opt"](fid);
            });

        }

        public insertOpt() {
            urlFile.Core.AkUrl.Current().openUrl("$panelCommonResultinsertpage$", true);
        }

        public viewOpt(vals: string) {
            urlFile.Core.AkUrl.Current().openUrl("$panelCommonResultdetailpage$" + vals + "$", true);
        }

        public updateOpt(vals: string) {
            urlFile.Core.AkUrl.Current().openUrl("$panelCommonResultUPDATEPAGE$" + vals + "$", true);
        }
        public delOpt(vals: string) {
            if (confirm("你确定要删除 所选中的数据吗 ？？")) {
                urlFile.Core.AkPost("/MedicalCenter/ResultCommon/RemoveResultCommons", { fids: vals }, (data) => {
                    var _data = data.Content;
                    if (_data == "ok") {
                        this.loadPageData(0);
                    }
                });

            }
        }
        private getSelectValues() {
            var _list: dataFile.ResultCommon.IResultCommonData[] = [];

            this.GridFormVm.RowList.forEach((r) => {
                var ck = r.SingleCheckVm;
                if (ck.vmDataValueGet() == "true") {
                    _list.push(r.RowData);
                }
            });

            console.log(_list);
            return _list;
        }
        public initButtons(): React.ReactElement<any> {
            return <div className="btn-group">
                {this.createButton("新增") }
                {this.createButton("删除") }
                {this.createButton("详情") }
                {this.createButton("编辑") }
            </div>
        }

        private createButton(displayName: string): React.ReactElement<any> {
            var btnVm = new buttonFile.ui.ButtonVm();
            btnVm.DisplayName = displayName;
            if (displayName == "删除" || displayName == "详情" || displayName == "编辑") {
                btnVm.NoEnable = true;
            }
            if (displayName != "新增") {
                this.DataBtnList.push(btnVm);
            }
            btnVm.ClickFun = (a) => {
                this.buttonClickCommond(a);
            };
            return btnVm.intoDom();
        }
        public buttonClickCommond(obj: buttonFile.ui.ButtonVm) {
            switch (obj.DisplayName) {
                case "新增":
                    this.insertOpt();
                    break;
                case "详情":
                    var _list = this.getSelectValues();
                    var _ids = _list.map((n) => n.FID).join(",");
                    this.viewOpt(_ids);
                    break;
                case "编辑":
                    var _list = this.getSelectValues();
                    var _ids = _list.map((n) => n.FID).join(",");
                    this.updateOpt(_ids);
                    break;
                case "删除":
                    var _list = this.getSelectValues();
                    var _ids = _list.map((n) => n.FID).join(",");
                    this.delOpt(_ids);
                    break;
                default:
                    break;
            }
        }
        private init(config: IResultCommonListPageConfig) {
            var searchConfig = { UniId: this.UniId };
            this.SearchFormVm = new searchFormFile.ResultCommonSearchDow.ResultCommonSearchDowVm(searchConfig);

            this.PagerListData = config.PagerListData;
            this.PaginationVm = new pagination.tool.PaginationVm();
            var pager = this.PagerListData.Pager;
            this.PaginationVm.PageNo = pager.PageNo;
            this.PaginationVm.PageSize = pager.PageSize;
            this.PaginationVm.TotalCount = pager.TotalCount;

            this.PaginationVm.PageClickEvent = (pageIndex) => {
                this.loadPageData(pageIndex);
            }

            var gridFormConfig = { Data: this.PagerListData.ListData, UniId: this.UniId };
            this.GridFormVm = new gridFormFile.ResultCommonGridFromDow.ResultCommonGridFromDowVm(gridFormConfig);
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
            urlFile.Core.AkPost("/MedicalCenter/ResultCommon/SearchResultCommons", {}, (a) => {
                var pageConfig: IResultCommonListPageConfig = { PagerListData: a.Data };
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
            urlFile.Core.AkPost("/MedicalCenter/ResultCommon/SearchResultCommons",
                {
                    pager: JSON.stringify(_page),
                    simpleCode: this.SearchFormVm.SearchSimpleCode,
                    name: this.SearchFormVm.SearchName
                },
                (a) => {
                    var pageConfig: IResultCommonListPageConfig = { PagerListData: a.Data };
                    this.init(pageConfig);
                    this.IsChange = true;
                    this.forceUpdate("");
                });
        }   

    }
    export class ResultCommonListPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class ResultCommonListPageProps extends basewedPageFile.Web.BaseWebPageProps<ResultCommonListPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("CommonResultLISTPAGE", basewedPageFile.Web.BaseWebPageVm, ResultCommonListPageVm);

}
