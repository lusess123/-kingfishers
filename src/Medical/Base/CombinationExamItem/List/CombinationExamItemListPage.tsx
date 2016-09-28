import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import React = require("react");
import ReactDOM = require("react-dom");
import urlFile = require("./../../../../01core/Url");
import basewedPageFile = require("./../../../../04page/BaseWebPage");
import searchFormFile = require("./CombinationExamItemSearchDow");
import gridFormFile = require("./CombinationExamItemGridFromDow");
import pagination = require("./../../../../05tool/Pagination");
import singleCheckFile = require("./../../../../02col/02Mulite/SingleCheckBox");
import buttonFile = require("./../../../../05tool/Button");
import eventFile = require("./../../../../01core/Event");
import dataFile = require("./../Data");

export module CombinationExamItemListPage {
    export class CombinationExamItemListPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class CombinationExamItemListPageReact extends basewedPageFile.Web.BaseWebPageReact<CombinationExamItemListPageProps, CombinationExamItemListPageStates, CombinationExamItemListPageAction> implements domCore.IReact {

        public state = new CombinationExamItemListPageStates();
        public pSender(): React.ReactElement<any> {
            var _ff = <div className="row acsScroll acsMargin3">
                <div className="main acs-fixed-top">
                    {this.props.Vm.SearchFormVm.intoDom() }
                    <div className="acs-grids">
                        <div className="button-bar">{this.createButtons() }</div>
                        {this.props.Vm.PaginationVm.intoDom() }
                        {this.props.Vm.GridFormVm.intoDom() }
                        {this.props.Vm.PaginationVm.intoDom() }
                    </div>
                </div>
            </div>;
            return _ff;
        }


        private createButtons(): React.ReactElement<any> {
            return <ul className="button-group radius">
                {this.props.Vm.PageBtnList.map((btn) => {
                    return <li>{btn.intoDom() }</li>
                }) }
                {this.props.Vm.DataBtnList.map((btn) => {
                    return <li>{btn.intoDom() }</li>
                }) }
            </ul>

        }

    }
    export interface ICombinationExamItemListPageConfig {


    }
    export class CombinationExamItemListPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = CombinationExamItemListPageReact;
        public SearchFormVm: searchFormFile.CombinationExamItemSearchDow.CombinationExamItemSearchDowVm;
        public GridFormVm: gridFormFile.CombinationExamItemGridFromDow.CombinationExamItemGridFromDowVm;
        public PaginationVm: pagination.tool.PaginationVm;
        public CheckBoxList = new Array<singleCheckFile.ui.SingleCheckBoxVm>();
        public DataBtnList = new Array<buttonFile.ui.ButtonVm>();
        public PageBtnList = new Array<buttonFile.ui.ButtonVm>();
        public AllCheck: singleCheckFile.ui.SingleCheckBoxVm;
        public UniId: string = "";
        public PagerListData: dataFile.CombinationExamItem.CombinationExamItemPagerListData;
        public constructor(config?: ICombinationExamItemListPageConfig) {
            super();
            this.UniId = eventFile.App.getUniId().toString();
            var searchConfig = { UniId: this.UniId };
            this.SearchFormVm = new searchFormFile.CombinationExamItemSearchDow.CombinationExamItemSearchDowVm(searchConfig);
            this.initBtnList();
            this.listenAppEvent("loadpagedata", this.UniId, (pageIndex: number) => {
                this.loadPageData(pageIndex);
            });

        }

        public insertOpt() {
            urlFile.Core.AkUrl.Current().openUrl("$panelCombinationExamIteminsertpage$" , true);
        }

        public viewOpt(vals: string) {
            urlFile.Core.AkUrl.Current().openUrl("$panelCombinationExamItemdetailpage$" + vals + "$", true);
        }

        public updateOpt(vals: string) {
            urlFile.Core.AkUrl.Current().openUrl("$panelCombinationExamItemUPDATEPAGE$" + vals + "$", true);
        }
        public delOpt(vals: string) {
            urlFile.Core.AkUrl.Current().openUrl("$panelroleupdate$" + vals + "$", true);
        }
        private getSelectValues() {
            var _list: dataFile.CombinationExamItem.ICombinationExamItemData[] = [];

            this.GridFormVm.RowList.forEach((r) => {
                var ck = r.SingleCheckVm;
                if (ck.vmDataValueGet() == "true") {
                    _list.push(r.RowData);
                }
            });

            console.log(_list);
            return _list;
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
        protected loadPage(callback?: () => any) {
            urlFile.Core.AkPost("/core/WebService/Method?resolver=JsonMethod", { json: "CombinationExamItemListData.json" }, (a) => {
                this.PagerListData = a;
                this.PaginationVm = new pagination.tool.PaginationVm();
                var pager = this.PagerListData.Pager;
                this.PaginationVm.PageNo = pager.PageNo;
                this.PaginationVm.PageSize = pager.PageSize;
                this.PaginationVm.TotalCount = pager.TotalCount;

                var gridFormConfig = { Data: this.PagerListData.ListData };
                this.GridFormVm = new gridFormFile.CombinationExamItemGridFromDow.CombinationExamItemGridFromDowVm(gridFormConfig);
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
        }

    }
    export class CombinationExamItemListPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class CombinationExamItemListPageProps extends basewedPageFile.Web.BaseWebPageProps<CombinationExamItemListPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("CombinationExamItemLISTPAGE", basewedPageFile.Web.BaseWebPageVm, CombinationExamItemListPageVm);

}
