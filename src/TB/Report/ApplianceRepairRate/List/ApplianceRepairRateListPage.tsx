import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import basewedPageFile = require("./../../../../04page/BaseWebPage");
import searchFormFile = require("./ApplianceRepairRateSearchFormDom");
import gridFormFile = require("./ApplianceRepairRateGirdFormDom");
import pagination = require("./../../../../05tool/Pagination");
import singleCheckFile = require("./../../../../02col/02Mulite/SingleCheckBox");
import buttonFile = require("./../../../../05tool/Button");
import eventFile = require("./../../../../01core/Event");
import dataFile = require("./../Data");

export module ApplianceRepairRateListPage {
    export class ApplianceRepairRateListPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class ApplianceRepairRateListPageReact extends basewedPageFile.Web.BaseWebPageReact<ApplianceRepairRateListPageProps, ApplianceRepairRateListPageStates, ApplianceRepairRateListPageAction> implements domCore.IReact {

        public state = new ApplianceRepairRateListPageStates();
        public pSender(): React.ReactElement<any> {
            var _ff = <div className="acsScroll">
                <div className="col-lg-10 col-md-12 col-sm-12 col-xs-12 Hm-center-content">
                    {this._tDom(this.props.Vm.SearchFormVm, { nullNode: <span>没有搜索区</span> }) }
                    <div className="acs-grids">
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
    export interface IApplianceRepairRateListPageConfig {
        DataSet?: any;
    }

    export class ApplianceRepairRateListPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = ApplianceRepairRateListPageReact;
        public SearchFormVm: searchFormFile.ApplianceRepairRateGirdFormDom.ApplianceRepairRateGirdFormDomVm;
        public GridFormVm: gridFormFile.ApplianceRepairRateGirdFormDom.ApplianceRepairRateGirdFormDomVm;
        public PaginationVm: pagination.tool.PaginationVm;
        public CheckBoxList = new Array<singleCheckFile.ui.SingleCheckBoxVm>();
        public DataBtnList = new Array<buttonFile.ui.ButtonVm>();
        public PageBtnList = new Array<buttonFile.ui.ButtonVm>();
        public AllCheck: singleCheckFile.ui.SingleCheckBoxVm;
        public UniId: string = "";
        public DataSet: any;

        public constructor(config?: IApplianceRepairRateListPageConfig) {
            super();
            this.UniId = eventFile.App.getUniId().toString();
            var searchConfig = { UniId: this.UniId };
            this.SearchFormVm = new searchFormFile.ApplianceRepairRateGirdFormDom.ApplianceRepairRateGirdFormDomVm(searchConfig);
            if (config) {
                this.init(config);
            }

            this.listenAppEvent("TB/Report/Test/Test", this.UniId, (pageIndex: number) => {
                this.searchData(pageIndex);
            });

        }

        private initBtnList() {
        }

        private init(config: IApplianceRepairRateListPageConfig) {
            this.DataSet = config.DataSet;
            var gridFormConfig = { DataSet: this.DataSet, UniId: this.UniId };
            this.GridFormVm = new gridFormFile.ApplianceRepairRateGirdFormDom.ApplianceRepairRateGirdFormDomVm(gridFormConfig);
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
            debugger;
            urlFile.Core.AkPost("/HZTongBao/Report/ApplianceRepairRate", {}, (a) => {
                var pageConfig: IApplianceRepairRateListPageConfig = { DataSet: a };
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
            if (this.SearchFormVm.MonthVm.dataValue() != "") {
                urlFile.Core.AkPost("/HZTongBao/Report/ApplianceRepairRate",
                    {
                        year: this.SearchFormVm.MonthVm.dataValue()
                    },
                    (a) => {
                        var pageConfig: IApplianceRepairRateListPageConfig = { DataSet: a };
                        this.init(pageConfig);
                        this.IsChange = true;
                        this.forceUpdate("");
                    });
            }
            else
            {
                alert("请选择搜索月份");
            }

        }

    }
    export class ApplianceRepairRateListPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class ApplianceRepairRateListPageProps extends basewedPageFile.Web.BaseWebPageProps<ApplianceRepairRateListPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("ApplianceRepairRateListPage", basewedPageFile.Web.BaseWebPageVm, ApplianceRepairRateListPageVm);

}
