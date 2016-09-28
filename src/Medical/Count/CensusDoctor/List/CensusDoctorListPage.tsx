﻿import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import basewedPageFile = require("./../../../../04page/BaseWebPage");
import searchFormFile = require("./CensusDoctorSearchFormDom");
import gridFormFile = require("./CensusDoctorGridFormDom");
import pagination = require("./../../../../05tool/Pagination");
import singleCheckFile = require("./../../../../02col/02Mulite/SingleCheckBox");
import buttonFile = require("./../../../../05tool/Button");
import eventFile = require("./../../../../01core/Event");
import dataFile = require("./../Data");

export module CensusDoctorListPage {
    export class CensusDoctorListPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class CensusDoctorListPageReact extends basewedPageFile.Web.BaseWebPageReact<CensusDoctorListPageProps, CensusDoctorListPageStates, CensusDoctorListPageAction> implements domCore.IReact {

        public state = new CensusDoctorListPageStates();
        public pSender(): React.ReactElement<any> {
            var _ff = <div className="acsScroll">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 Hm-center-content">
                    {this._tDom(this.props.Vm.SearchFormVm, { nullNode:<span>没有搜索区</span> }) }
                    <div className="acs-grids">
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
    export interface ICensusDoctorListPageConfig {
        PagerListData: dataFile.CensusDoctor.CensusDoctorPageListData;
    }

    export class CensusDoctorListPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = CensusDoctorListPageReact;
        public SearchFormVm: searchFormFile.CensusDoctorSearchFormDom.CensusDoctorSearchFormDomVm;
        public GridFormVm: gridFormFile.CensusDoctorGridFormDom.CensusDoctorGridFormDomVm;
        public PaginationVm: pagination.tool.PaginationVm;
        public CheckBoxList = new Array<singleCheckFile.ui.SingleCheckBoxVm>();
        public DataBtnList = new Array<buttonFile.ui.ButtonVm>();
        public PageBtnList = new Array<buttonFile.ui.ButtonVm>();
        public AllCheck: singleCheckFile.ui.SingleCheckBoxVm;
        public UniId: string = "";
        public PagerListData: dataFile.CensusDoctor.CensusDoctorPageListData;

        public constructor(config?: ICensusDoctorListPageConfig) {
            super();
            this.UniId = eventFile.App.getUniId().toString();
            this.initBtnList();
            var searchConfig = { UniId: this.UniId };
            this.SearchFormVm = new searchFormFile.CensusDoctorSearchFormDom.CensusDoctorSearchFormDomVm(searchConfig);
            if (config)
            {
                this.init(config);
            }

            this.listenAppEvent("medical/base/CensusDoctor/list/loadpagedata", this.UniId, (pageIndex: number) => {
                this.loadPageData(pageIndex);
            });
            this.listenAppEvent("medical/base/CensusDoctor/rowbtnclick", this.UniId, (btnName: string, fid: string) => {
                this[btnName + "Opt"](fid);
            });
        }

        private initBtnList() {
            var btnVm = new buttonFile.ui.ButtonVm();
            btnVm.DisplayName = "新增";
            btnVm.NoEnable = false;
            this.PageBtnList.push(btnVm);

            var btnVm1 = new buttonFile.ui.ButtonVm();
            btnVm1.DisplayName = "删除";
            btnVm1.NoEnable = true;
            var btnVm2 = new buttonFile.ui.ButtonVm();
            btnVm2.DisplayName = "编辑";
            btnVm2.NoEnable = true;
            var btnVm3 = new buttonFile.ui.ButtonVm();
            btnVm3.DisplayName = "详情";
            btnVm3.NoEnable = true;
            this.DataBtnList.push(btnVm1);
            this.DataBtnList.push(btnVm2);
            this.DataBtnList.push(btnVm3);
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

        private getSelectValues() {
            var _list: dataFile.CensusDoctor.ICensusDoctorData[] = [];

            this.GridFormVm.RowList.forEach((r) => {
                var ck = r.SingleCheckVm;
                if (ck.vmDataValueGet() == "true") {
                    _list.push(r.RowData);
                }
            });

            console.log(_list);
            return _list;
        }

        public insertOpt(vals?: string) {
            urlFile.Core.AkUrl.Current().openUrl("$panelCensusDoctorinsertpage$", true);
        }

        public viewOpt(vals: string) {
            urlFile.Core.AkUrl.Current().openUrl("$panelCensusDoctordetailpage$" + vals + "$", true);
        }

        public updateOpt(vals: string) {
            urlFile.Core.AkUrl.Current().openUrl("$panelCensusDoctorupdatepage$" + vals + "$", false);
        }

        public delOpt(vals: string) {
            if (confirm("你确定要删除 所选中的数据吗 ？？")) {
                urlFile.Core.AkPost("/MedicalCenter/CensusDoctor/RemoveAnomalies", { fids: vals }, (data) => {
                    var _data = data.Content;
                    if (_data == "ok") {
                        this.loadPageData(0);
                    }
                });

            }
        }


        private init(config: ICensusDoctorListPageConfig) {
        
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
            this.GridFormVm = new gridFormFile.CensusDoctorGridFormDom.CensusDoctorGridFormDomVm(gridFormConfig);
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
            urlFile.Core.AkPost("/MedicalCenter/CensusDoctor/SearchCensusDoctor", {  }, (a) => {
                var pageConfig: ICensusDoctorListPageConfig = { PagerListData: a.Data };
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

        public loadPageData(pageIndex: number) {
            this.GridFormVm.RowList = [];
            this.AllCheck.vmDataValueSet("false");
            this.AllCheck.forceUpdate("");
            var _page = { PageNo: pageIndex };
            urlFile.Core.AkPost("/MedicalCenter/CensusDoctor/SearchCensusDoctor",
                {
                    pager: JSON.stringify(_page),
                    department: this.SearchFormVm.RowData.Department,
                    key: this.SearchFormVm.RowData.Name,
                    beginDate: this.SearchFormVm.RowData.BeginDate,
                    endDate: this.SearchFormVm.RowData.EndDate
                },
                (a) => {
                   // var _data: dataFile.CensusDoctor.AbnomalPagerListData= a.Data;
                   // document.title = this.Title = "菜单列表，第" + (pageIndex + 1) + "页，总共" + _data.Pager.TotalCount + "条";
                   // this.getData(_data);
                    //this.PagerListData = _data;
                    var pageConfig: ICensusDoctorListPageConfig = { PagerListData: a.Data };
                    this.init(pageConfig);
                    this.IsChange = true;
                   // var _d0: Date = new Date();
                    this.forceUpdate("");
                   // this.GridFormVm.forceUpdate("");
                });
        }

    }
    export class CensusDoctorListPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class CensusDoctorListPageProps extends basewedPageFile.Web.BaseWebPageProps<CensusDoctorListPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("CensusDoctorLISTPAGE", basewedPageFile.Web.BaseWebPageVm, CensusDoctorListPageVm);

}
