import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import React = require("react");
import ReactDOM = require("react-dom");
import urlFile = require("./../../../../01core/Url");
import basewedPageFile = require("./../../../../04page/BaseWebPage");
import pagination = require("./../../../../05tool/Pagination");
import singleCheckFile = require("./../../../../02col/02Mulite/SingleCheckBox");
import buttonFile = require("./../../../../05tool/Button");
import eventFile = require("./../../../../01core/Event");
import dataFile = require("./../Data");

import gridFormFile = require("./ExamItemCategoryGridFormDom");

export module ExamItemCategoryListPage {
    export class ExamItemCategoryListPageAction extends basewedPageFile.Web.BaseWebPageAction{
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class ExamItemCategoryListPageReact extends basewedPageFile.Web.BaseWebPageReact<ExamItemCategoryListPageProps, ExamItemCategoryListPageStates, ExamItemCategoryListPageAction> implements domCore.IReact {

        public state = new ExamItemCategoryListPageStates();

        public pSender(): React.ReactElement<any> {
            var bb = <div className="acsScroll">
                <div className="col-lg-10 col-md-12 col-sm-12 col-xs-12 Hm-center-content">
                    <div className="acs-grids">
                        <div className="button-bar">{this.props.Vm.initButtons() }</div>
                        <div className="topPager">{this.props.Vm.PaginationVm.intoDom() }</div>
                        {this.props.Vm.GridFormVm.intoDom() }
                        <div className="bottomPager"> {this.props.Vm.PaginationVm.intoDom() }</div>
                    </div>
                </div>
            </div>
            return bb;
        }

        public createButtons(): React.ReactElement<any> {
            return <ul className="button-group radius">
                {this.props.Vm.PageBtnList.map((a) => {
                    return <li>{a.intoDom()}</li>
                }) }
                {this.props.Vm.DataBtnList.map((a) => {
                    return <li>{a.intoDom()}</li>
                }) }
                </ul>
        }

    }

    export interface ExamItemCategoryListPageConfig {
        PagerListData: dataFile.ExamItemCategory.ExamItemCategoryPagerListData;
    }

    export class ExamItemCategoryListPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = ExamItemCategoryListPageReact;

        public PaginationVm: pagination.tool.PaginationVm;
        public PagerListData: dataFile.ExamItemCategory.ExamItemCategoryPagerListData
        public PageBtnList = new Array<buttonFile.ui.ButtonVm>();

        public DataBtnList = new Array<buttonFile.ui.ButtonVm>();

        public UniId: string = "";
        public AllCheck: singleCheckFile.ui.SingleCheckBoxVm;
        public CheckBoxList = new Array<singleCheckFile.ui.SingleCheckBoxVm>();

        public GridFormVm: gridFormFile.ExamItemCategoryGridFormDom.ExamItemCategoryGridFormDomVm;

        public init(config: ExamItemCategoryListPageConfig) {
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
            this.GridFormVm = new gridFormFile.ExamItemCategoryGridFormDom.ExamItemCategoryGridFormDomVm(gridFormConfig);
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

        public constructor(config?: ExamItemCategoryListPageConfig) {
            super();
            this.UniId = eventFile.App.getUniId().toString();
            this.listenAppEvent("loadpagedata", this.UniId, (pageIndex: number) => {
                this.loadPageData(pageIndex);
            });
            this.listenAppEvent("medical/base/user/rowbtnclick", this.UniId, (btnName: string, fid: string) => {
                this[btnName + "Opt"](fid);
            });
        }

        protected loadPage(callback?: () => any) {
            urlFile.Core.AkPost("/MedicalCenter/ExamItemCategory/SearchExamItemCategory", {}, (a) => {
                var pageConfig: ExamItemCategoryListPageConfig = { PagerListData: a.Data };
                this.init(pageConfig);
                if (callback) {
                    callback();
                }
            });

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

        public insertOpt() {
            urlFile.Core.AkUrl.Current().openUrl("$panelExamItemCategoryInsertPage$", true);
        }

        public viewOpt(vals: string) {
            urlFile.Core.AkUrl.Current().openUrl("$panelEXAMITEMCATEGORYDETAILPAGE$" + vals + "$", true);
        }

        public updateOpt(vals: string) {
            urlFile.Core.AkUrl.Current().openUrl("$panelExamItemCategoryUpdatePage$" + vals + "$", true);
        }
        public delOpt(vals: string) {
            if (confirm("你确定要删除 所选中的数据吗 ??")) {
                urlFile.Core.AkPost("/MedicalCenter/ExamItemCategory/RemoveExamItemCategory", { fids: vals }, (data) => {
                    var _data = data.Content;
                    if (_data == "ok") {
                        this.loadPageData(0);
                    }
                });
            }
           
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
            var _list: dataFile.ExamItemCategory.ExamItemCategoryData[] = [];

            this.GridFormVm.RowList.forEach((r) => {
                var ck = r.SingleCheckVm;
                if (ck.vmDataValueGet() == "true") {
                    _list.push(r.RowData);
                }
            });

            console.log(_list);
            return _list;
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
            urlFile.Core.AkPost("/MedicalCenter/ExamItemCategory/SearchExamItemCategory",
                {
                    pager: JSON.stringify(_page),
                },
                (a) => {

                    var pageConfig: ExamItemCategoryListPageConfig = { PagerListData: a.Data };
                    this.init(pageConfig);
                    this.IsChange = true;
                    this.forceUpdate("");
                });
        }

    }

    export class ExamItemCategoryListPageStates extends basewedPageFile.Web.BaseWebPageStates { }

    export class ExamItemCategoryListPageProps extends basewedPageFile.Web.BaseWebPageProps<ExamItemCategoryListPageVm>{ }
    iocFile.Core.Ioc.Current().RegisterType("EXAMITEMCATEGORYLISTPAGE", basewedPageFile.Web.BaseWebPageVm, ExamItemCategoryListPageVm);
}