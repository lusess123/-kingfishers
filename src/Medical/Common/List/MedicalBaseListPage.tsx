import domFile = require("./../../../01core/0Dom");
import iocFile = require("./../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import urlFile = require("./../../../01core/Url");
import basewedPageFile = require("./../../../04page/BaseWebPage");
import pagination = require("./../../../05tool/Pagination");
import React = require("react");
import ReactDOM = require("react-dom");
import searchFormFile = require("./MedicalBaseSearchFormDom");
import gridFormFile = require("./MedicalBaseGridFormDom");
import singleCheckFile = require("./../../../02col/02Mulite/SingleCheckBox");
import buttonFile = require("./../../../05tool/Button");
import eventFile = require("./../../../01core/Event");


export module MedicalBaseListPage  {
    export class MedicalBaseListPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class MedicalBaseListPageReact<P extends MedicalBaseListPageProps<MedicalBaseListPageVm>, S extends MedicalBaseListPageStates, A extends MedicalBaseListPageAction> extends basewedPageFile.Web.BaseWebPageReact<P, S, A>{

        public pSender(): React.ReactElement<any> {
            var _ff = <div className="acsScroll">
                <div className="col-lg-10 col-md-12 col-sm-12 col-xs-12 Hm-center-content">
                    {this.props.Vm.SearchFormVm.intoDom() }
                    <div className="acs-grids">
                        <div className="button-bar">{this.createButtons() }</div>
                        <div className="topPager">{this.props.Vm.PaginationVm.intoDom() }</div>
                        {this.props.Vm.GridFormVm.intoDom() }
                        <div className="bottomPager">{this.props.Vm.PaginationVm.intoDom() }</div>
                    </div>
                </div>
            </div>;
            return _ff;
        }        private createButtons(): React.ReactElement<any> {
            return <div className="btn-group">
                {this.props.Vm.PageBtnList.map((btn) => {
                    return btn.intoDom()
                }) }
                {this.props.Vm.DataBtnList.map((btn) => {
                    return btn.intoDom()
                }) }
            </div>

        }
    }

    export interface IMedicalBaseListPageConfig {

    }
  
    export class MedicalBaseListPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = MedicalBaseListPageReact;

        public SearchFormVm: searchFormFile.MedicalBaseSearchFormDom.MedicalBaseSearchFormDomVm;
        public GridFormVm: gridFormFile.MedicalBaseGridFormDom.MedicalBaseGridFormDomVm;
        public PaginationVm: pagination.tool.PaginationVm;
        public CheckBoxList = new Array<singleCheckFile.ui.SingleCheckBoxVm>();
        public DataBtnList = new Array<buttonFile.ui.ButtonVm>();
        public PageBtnList = new Array<buttonFile.ui.ButtonVm>();
        public AllCheck: singleCheckFile.ui.SingleCheckBoxVm;
        public UniId: string = "";
        public PageSign: string = "";

        public constructor(config?: IMedicalBaseListPageConfig) {
            super();
            this.UniId = eventFile.App.getUniId().toString();
            this.initBtnList();
            this.initSearchVm();
            if (config) {
                this.init(config);
            }
           
            this.listenAppEvent("loadpagedata", this.UniId, (pageIndex: number) => {
                this.loadPageData(pageIndex);
            });
        }

        protected init(config?: IMedicalBaseListPageConfig)
        {
            this.initGridVm(config);
            this.PaginationVm.PageClickEvent = (pageIndex) => {
                this.loadPageData(pageIndex);
            }
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

        protected initSearchVm(config?: IMedicalBaseListPageConfig) {

        }

        protected initGridVm(config?: IMedicalBaseListPageConfig)
        {

        }

        protected initBtnList()
        {
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

        protected getSelectValues() {
            var _list= [];
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
            var url = "$panel" + this.PageSign + "insertpage$";
            urlFile.Core.AkUrl.Current().openUrl(url, true);
        }

        public viewOpt(vals: string) {
            var url = "$panel" + this.PageSign + "detailpage$" + vals + "$";
            urlFile.Core.AkUrl.Current().openUrl(url, true);
        }

        public updateOpt(vals: string) {
            var url = "$panel" + this.PageSign + "updatepage$" + vals + "$";
            urlFile.Core.AkUrl.Current().openUrl(url, false);
        }

        public delOpt(vals: string) {
        }


        protected loadPage(callback?: () => any) {
            if (callback) {
                callback();
            }
        }

        protected loadPageData(pageIndex: number) {
        }

        protected checkCheckBox(val: string, checkDom: domFile.Core.DomVm): void {
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

        protected allCheckChecked(val: string, checkDom: domFile.Core.DomVm): void {

            if (!window["isHand"]) {

                this.GridFormVm.RowList.forEach((row) => {
                    var chk = row.SingleCheckVm;
                    chk.reactDataValueSet(val);
                });
            }
        }


    }
    export class MedicalBaseListPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }



    export class MedicalBaseListPageProps<V extends MedicalBaseListPageVm> extends basewedPageFile.Web.BaseWebPageProps<V>{

    }


    iocFile.Core.Ioc.Current().RegisterType("MEDICALBASELISTPAGE", basewedPageFile.Web.BaseWebPageVm, MedicalBaseListPageVm);

}

