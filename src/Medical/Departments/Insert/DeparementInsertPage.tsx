import domFile = require("./../../../01core/0Dom");
import iocFile = require("./../../../01core/Ioc");
//import domFile = require("./../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import basewedPageFile = require("./../../../04page/BaseWebPage");
import pagination = require("./../../../05tool/Pagination");
import React = require("react");
import ReactDOM = require("react-dom");
import eventFile = require("./../../../01core/Event");
import buttonFile = require("./../../../05tool/Button");
import singleCheckFile = require("./../../../02col/02Mulite/SingleCheckBox");
import searchFormFile = require("./insertSearchFormDom");
import gridFormFile = require("./insertTableDom");
import Data = require("./../data");

export module DepartmentInsertPage {
    export class DepartmentInsertPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }
    export class DepartmentInsertPageReact extends basewedPageFile.Web.BaseWebPageReact<DepartmentInsertPageProps, DepartmentInsertPageStates, DepartmentInsertPageAction> implements domCore.IReact {
        public state = new DepartmentInsertPageStates();
        public pSender(): React.ReactElement<any> {
            return (
                <div className="container-fluid ui-dpt-insert">
                    <div className="row-fluid">
                        <div className="YSm-handle ui-dpt-search">
                            {this._tDom(this.props.Vm.SearchFormVm, { nullNode: <span>没有搜索区</span> }) }

                        </div>
                        <div classNameui-dpt-insertlist>
                            <div className="acs-grids">
                                <div className="button-bar clearfix">{this.createButtons() }</div>
                                <div className="topPager ui-pager">{this._tDom(this.props.Vm.PaginationVm) }</div>
                                {this._tDom(this.props.Vm.GridFormVm) }
                                <div className="bottomPager ui-pager">{this._tDom(this.props.Vm.PaginationVm) }</div>
                            </div>
                        </div>
                    </div>
                </div>
            )
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
    export interface DepartInsertConfig {
        PagerListdata: Data.Result.InsertPagerListData;
    }

    export class DepartmentInsertPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = DepartmentInsertPageReact;
        public SearchFormVm: searchFormFile.InsertSearchFormDom.InsertSearchFormDomVm;
        public GridFormVm: gridFormFile.InsertGridFormDom.InsertGridFormDomVm;
        public PaginationVm: pagination.tool.PaginationVm;
        public CheckBoxList = new Array<singleCheckFile.ui.SingleCheckBoxVm>();
        public DataBtnList = new Array<buttonFile.ui.ButtonVm>();
        public PageBtnList = new Array<buttonFile.ui.ButtonVm>();
        public AllCheck: singleCheckFile.ui.SingleCheckBoxVm;
        public UniId: string = "";
        //public PagerListData: dataFile.Anomaly.IAnomalyPagerListData;
        public PagerListData: Data.Result.InsertPagerListData;

        public constructor(config?: DepartInsertConfig) {
            super();
            this.UniId = eventFile.App.getUniId().toString();
            this.initBtnList();
            var searchConfig = { UniId: this.UniId };
            //this.SearchFormVm = new searchFormFile.AnomalySearchFormDom.AnomalySearchFormDomVm(searchConfig);
            this.SearchFormVm = new searchFormFile.InsertSearchFormDom.InsertSearchFormDomVm(searchConfig);
            if (config) {
                this.init(config);
            }

            this.listenAppEvent("medical/base/anomaly/list/loadpagedata", this.UniId, (pageIndex: number) => {
                this.loadPageData(pageIndex);
            });

            this.listenAppEvent("medical/base/anomaly/list/Sreach", this.UniId, (code: string) => {
                this.loadPageData(0, code);
            });
            this.listenAppEvent("medical/base/anomaly/rowbtnclick", this.UniId, (btnName: string, fid: string) => {
                this[btnName + "Opt"](fid);
            });
        }

        private initBtnList() {
            var btnVm = new buttonFile.ui.ButtonVm();
            btnVm.DisplayName = "录入";
            btnVm.KindCss = "btn-sm btn-primary";
            btnVm.NoEnable = false;
            this.PageBtnList.push(btnVm);

            //var btnVm1 = new buttonFile.ui.ButtonVm();
            //btnVm1.DisplayName = "删除";
            //btnVm1.NoEnable = true;

            //var btnVm3 = new buttonFile.ui.ButtonVm();
            //btnVm3.DisplayName = "详情";
            //btnVm3.NoEnable = true;
            //this.DataBtnList.push(btnVm1);

            //this.DataBtnList.push(btnVm3);
            this.PageBtnList.forEach((btn) => {
                btn.ClickFun = (a) => {
                    this.buttonClickCommond(a);
                };
            });
            this.DataBtnList.forEach((btn) => {
                btn.ClickFun = (a) => {
                    this.buttonClickCommond(a);
                };
            });

        }

        public buttonClickCommond(obj: buttonFile.ui.ButtonVm) {
            switch (obj.DisplayName) {
                case "录入":
                    var _list = this.getSelectValues();
                    var _ids = _list.map((n) => n.ExamCode).join(",");
                    this.insertOpt(_ids);
                    break;
                //case "详情":
                //    var _list = this.getSelectValues();
                //    var _ids = _list.map((n) => n.FID).join(",");
                //    this.viewOpt(_ids);
                //    break;

                //case "删除":
                //    var _list = this.getSelectValues();
                //    var _ids = _list.map((n) => n.FID).join(",");
                //    this.delOpt(_ids);
                //    break;
                default:
                    break;
            }
        }

        private getSelectValues() {
            //var _list: dataFile.Anomaly.IAnomalyData[] = [];
            var _list: Data.Result.IInsertData[] = [];

            this.GridFormVm.RowList.forEach((r) => {
                var ck = r.SingleCheckboxVm;
                if (ck.vmDataValueGet() == "true") {
                    _list.push(r.RowData);
                }
            });

            console.log(_list);
            return _list;
        }

        public insertOpt(vals?: string) {
            //urlFile.Core.AkUrl.Current().openUrl("$panelAnomalyinsertpage$", true);
            if (vals.split(',').length > 1) {
                alert("只支持单个录入！")
            } else {
                urlFile.Core.AkUrl.Current().openUrl("$DepartmentEntryPage$#$DepartmentEntryPage$" + vals + "$", false);
            }

        }





        //public delOpt(vals: string) {
        //    if (confirm("你确定要删除 所选中的数据吗 ？？")) {
        //        //urlFile.Core.AkPost("/MedicalCenter/Anomaly/RemoveAnomalies", { fids: vals }, (data) => {
        //        //    var _data = data.Content;
        //        //    if (_data == "ok") {
        //        //        this.loadPageData(0);
        //        //    }
        //        //});
        //        console.log("删除");

        //    }
        //}


        private init(config: DepartInsertConfig) {

            this.PagerListData = config.PagerListdata;
            this.PaginationVm = new pagination.tool.PaginationVm();
            var pager = this.PagerListData.Pager;
            this.PaginationVm.PageNo = pager.PageNo;
            this.PaginationVm.PageSize = pager.PageSize;
            this.PaginationVm.TotalCount = pager.TotalCount;

            this.PaginationVm.PageClickEvent = (pageIndex) => {
                this.loadPageData(pageIndex);
            }

            var gridFormConfig = { Data: this.PagerListData.List, UniId: this.UniId };
            this.GridFormVm = new gridFormFile.InsertGridFormDom.InsertGridFormDomVm(gridFormConfig);

            this.GridFormVm.RowList.forEach((row) => {
                this.CheckBoxList.push(row.SingleCheckboxVm);
                row.SingleCheckboxVm.ChangeEventFun = (val, col) => {
                    this.checkCheckBox(val, col);
                    return true;
                };
            });

            this.AllCheck = this.GridFormVm.AllCheck;
            this.AllCheck.ChangeEventFun = (val, col) => {
                this.allCheckChecked(val, col);
                return true;
            };

            this.forceUpdate("");
        }

        public loadPage(callback?: () => any) {
            //urlFile.Core.AkPost("/MedicalCenter/Anomaly/SearchAnomalies", {}, (a) => {
            //this.PagerListData = { Pager: { PageSize:3,PageNo: 1 }, List:[] }
            var data = this.PagerListData;
            //var pageConfig: DepartInsertConfig = { PagerListdata: { Pager: { PageNo: 4, PageSize: 1, TableName: "", TotalCount: 2, DataTime: new Date, IsASC: false, SortName: "" }, List: [] } };
            //var datatable = {
            //    FID: "85963046",
            //    Name: "akdfjaskdf",
            //    IDCard: "438952306054",
            //    ExamCode: "5346778980",
            //    RecordID: "248590679078",
            //    Unit: "54346554",
            //    State: "3956094654"
            //}

            urlFile.Core.AkPost("/MedicalCenter/Result/getList", {}, (a) => {
                if (a) {
                    var pageConfig: DepartInsertConfig = { PagerListdata: { Pager: { PageNo: 4, PageSize: 1, TableName: "", TotalCount: 2, DataTime: new Date, IsASC: false, SortName: "" }, List: [] } };
                    pageConfig.PagerListdata.List = a.Data.ListData;
                    pageConfig.PagerListdata.Pager = a.Data.Pager;
                    this.init(pageConfig);
                }
            })
            if (callback) {
                callback();
            }
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
                var chk = row.SingleCheckboxVm;
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
                    var chk = row.SingleCheckboxVm;
                    chk.reactDataValueSet(val);
                });
            }
        }

        public loadPageData(pageIndex: number, code?: string) {
            this.GridFormVm.RowList = [];
            this.AllCheck.vmDataValueSet("false");
            this.AllCheck.forceUpdate("");
            var _page = { PageNo: pageIndex };
            urlFile.Core.AkPost("/MedicalCenter/Result/getList",
                {
                    pager: JSON.stringify(_page),
                    simpleCode: this.SearchFormVm.SearchSimpleCode,
                    code: this.SearchFormVm.SearchName
                    // code: code
                },
                (a) => {
                    // var _data: dataFile.Anomaly.AbnomalPagerListData= a.Data;
                    // document.title = this.Title = "菜单列表，第" + (pageIndex + 1) + "页，总共" + _data.Pager.TotalCount + "条";
                    // this.getData(_data);
                    //this.PagerListData = _data;
                    var pageConfig: DepartInsertConfig = { PagerListdata: { Pager: { PageNo: 4, PageSize: 1, TableName: "", TotalCount: 2, DataTime: new Date, IsASC: false, SortName: "" }, List: [] } };
                    pageConfig.PagerListdata.List = a.Data.ListData;
                    pageConfig.PagerListdata.Pager = a.Data.Pager;
                    this.init(pageConfig);
                    //this.IsChange = true;
                    // var _d0: Date = new Date();
                    //this.forceUpdate("");
                    // this.GridFormVm.forceUpdate("");
                });
        }
    }
    export class DepartmentInsertPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class DepartmentInsertPageProps extends basewedPageFile.Web.BaseWebPageProps<DepartmentInsertPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("DepartmentInsertPage", basewedPageFile.Web.BaseWebPageVm, DepartmentInsertPageVm);
}