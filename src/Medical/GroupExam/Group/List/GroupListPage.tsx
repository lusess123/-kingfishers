import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import basewedPageFile = require("./../../../../04page/BaseWebPage");
import React = require("react");
import ReactDOM = require("react-dom");

import searchFormFile = require("./GroupSearchDow");
import gridFormFile = require("./GroupGridFromDow");
import pagination = require("./../../../../05tool/Pagination");
import dataFile = require("./../Data");
import singleCheckFile = require("./../../../../02col/02Mulite/SingleCheckBox");
import buttonFile = require("./../../../../05tool/Button");
export module GroupListPage {
    export class GroupListPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class GroupListPageReact extends basewedPageFile.Web.BaseWebPageReact<GroupListPageProps, GroupListPageStates, GroupListPageAction> implements domCore.IReact {

        public state = new GroupListPageStates();
        public pSender(): React.ReactElement<any> {
            return <div>
                {this.props.Vm.SearchFormVm.intoDom() }
                <div className="YSm-table">
                    {this._initBtnGroup() }
                    {this.props.Vm.GridFormFileVm.intoDom() }
                    {this.props.Vm.PaginationVm.intoDom() }
                </div>
            </div>;
        }
        public _initQuantity(): React.ReactElement<any> {
            return <div className="YSm-quantity clearfix">
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 ">
                    <div className="panel panel-danger">
                        <p>已预约单位：</p>
                        <h2>{this.props.Vm.rowData.RegisterNum}</h2>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 ">
                    <div className="panel panel-info">
                        <p>已登记单位：</p>
                        <h2>{ this.props.Vm.rowData.MedicalNum }</h2>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div className="panel panel-success">
                        <p>已完成：</p>
                        <h2>{ this.props.Vm.rowData.OverMedicalNum }</h2>
                    </div>
                </div>
            </div>;
        }
        public _initBtnGroup(): React.ReactElement<any> {
            return <div className="YSm-table-btngroup">
                {this.createButtons()}
            </div>;
        }
        private createButtons(): React.ReactElement<any> {
            return <div className="btn-group btn-group-sm">
                {this.props.Vm.DataBtnList.map((btn) => {
                    return this._tDom(btn);
                }) }
            </div>

        }

    }

    export interface IReactGroupListPageVm extends basewedPageFile.Web.BaseWebPageVm {
    }

    export interface IGroupListPageConfig {
        Data: dataFile.Group.PagerListData;

    }
    export class GroupListPageVm extends basewedPageFile.Web.BaseWebPageVm implements IReactGroupListPageVm {
        public ReactType = GroupListPageReact;
        public strName: string;
        public SearchFormVm: searchFormFile.GroupSearchDow.GroupSearchDowVm;
        public GridFormFileVm: gridFormFile.GroupGridFromDow.GroupGridFromDowVm;
        public AllCheck: singleCheckFile.ui.SingleCheckBoxVm;
        public rowData: dataFile.Group.IGroupData;
        public CheckBoxList = new Array<singleCheckFile.ui.SingleCheckBoxVm>();
        public PaginationVm: pagination.tool.PaginationVm;
        public PagerListData: dataFile.Group.PagerListData;
        public DataBtnList = new Array<buttonFile.ui.ButtonVm>();
        public batchId: string;
        protected pIsHullAutoHide: boolean = true;
        public regsigerFlag: boolean = false;
        public constructor(config?: IGroupListPageConfig) {
            super();
            var searchConfig = { UniId: "" };
            this.PaginationVm = new pagination.tool.PaginationVm();
            this.PaginationVm.PageNo = 0;
            this.PaginationVm.PageSize =0;
            this.PaginationVm.TotalCount = 0;
            this.PaginationVm.isPartHidden = true;

            this.initBtnList();
        }
        protected ReceivePageSend(config: basewedPageFile.Web.IPageActor, obj: any) {
            super.ReceivePageSend(config, obj);

            switch (config.FromModulename) {
                case "INITGROUPTREEPAGE":
                    if (obj.BatchData) {
                        this.loadPageData(0,obj.BatchData.batchId);
                        this.batchId = obj.BatchData.batchId
                    }
                    break;
                default:
                    break;
            }
        }
        private initBtnList() {
            var btnVm1 = new buttonFile.ui.ButtonVm();
            btnVm1.DisplayName = "登记";
            btnVm1.NoEnable = false;
            btnVm1.KindCss = "btn-primary-outline";
            this.DataBtnList.push(btnVm1);
            this.DataBtnList.forEach((btn) => {
                btn.ClickFun = (a) => {
                    this.buttonClickCommond(a);
                };
            });

        }


        public buttonClickCommond(obj: buttonFile.ui.ButtonVm) {
            switch (obj.DisplayName) {
                case "登记":
                    if (!this.regsigerFlag)
                    {
                        alert("请选择批次！");
                        return;
                    }
                    var _list = this.getSelectValues();
                    var _ids = _list.map((n) => n.FID).join(",");
                    this.Resiger(_ids);
                    this.regsigerFlag = false;
                    break;     
                default:
                    break;
            }
        }
        public Resiger(vals: string)
        {

            if (confirm("你确定要登记 该批次的数据吗 ？？")) {
                urlFile.Core.AkPost("/MedicalCenter/NewGroup/ResigerBatchGroup", { fids:this.batchId }, (data) => {
                    var _data = data.Content;
                    if (_data == "ok") {
                        utilFile.Core.Util.Noty("登记成功！");
                        urlFile.Core.AkUrl.Current().openUrl("$$module/Medical/Base/medical_Exam_PrintGuidelines", false);

                       
                    }
                });

            }
        }
        private getSelectValues() {
            var _list: dataFile.Group.IMember[] = [];

            this.GridFormFileVm.RowList.forEach((r) => {
                var ck = r.SingleCheckVm;
                if (ck.vmDataValueGet() == "true") {
                    _list.push(r.RowData);
                }
            });

            console.log(_list);
            return _list;
        }

        //public checkCheckBox(val: string, checkDom: domFile.Core.DomVm): void {
        //    var rowList = this.GridFormFileVm.RowList;
        //    window["isHand"] = true;
        //    var isCheck = false;
        //    var isAllCheck = true;
        //    var checkedCount = 0;
        //    if (val == "true") {
        //        isCheck = true;
        //    }

        //    rowList.forEach((row) => {
        //        var chk = row.SingleCheckVm;
        //        var _val = chk.dataValue();
        //        if (_val == "true" && checkDom != chk) {
        //            isCheck = true;
        //            checkedCount++;
        //        }
        //        if (checkDom == chk) {
        //            if (val == "true") {
        //                checkedCount++;
        //            }
        //        }
        //    });


        //    isAllCheck = rowList.length == checkedCount ? true : false;

        //    this.DataBtnList.forEach((btn) => {
        //        btn.NoEnable = isCheck ? false : true;
        //        btn.forceUpdate("");
        //    });
        //    this.AllCheck.vmDataValueSet(isAllCheck ? "true" : "false");
        //    this.AllCheck.forceUpdate("", () => {
        //        window["isHand"] = false;
        //    });

        //}

        //public allCheckChecked(val: string, checkDom: domFile.Core.DomVm): void {

        //    if (!window["isHand"]) {

        //        this.GridFormFileVm.RowList.forEach((row) => {
        //            var chk = row.SingleCheckVm;
        //            chk.reactDataValueSet(val);
        //        });
        //        this.GridFormFileVm.IsChange = true
        //    }
        //}
        private init(config: IGroupListPageConfig) {

            this.PagerListData = config.Data;
            this.PaginationVm = new pagination.tool.PaginationVm();
            var pager = this.PagerListData.Pager;
            this.PaginationVm.PageNo = pager.PageNo;
            this.PaginationVm.PageSize = pager.PageSize;
            this.PaginationVm.TotalCount = pager.TotalCount;
            this.PaginationVm.isPartHidden = true;
            this.PaginationVm.IsChange = true;

            this.PaginationVm.PageClickEvent = (pageIndex) => {
                this.loadPageData(pageIndex, this.batchId);
            }
            var data = config.Data.ListData;
            if (data.length > 0)
            {
                this.regsigerFlag = true;
            }
            var gridFormConfig = { Data: data, UniId: this.UniId };
            this.GridFormFileVm = new gridFormFile.GroupGridFromDow.GroupGridFromDowVm(gridFormConfig);
            //this.GridFormFileVm.RowList.forEach((row) => {
            //    this.CheckBoxList.push(row.SingleCheckVm);
            //    row.SingleCheckVm.ChangeEventFun = (val, col) => {
            //        this.checkCheckBox(val, col);
            //        return true;
            //    };
            //});
            //this.AllCheck = this.GridFormFileVm.AllCheck;
            //this.AllCheck.ChangeEventFun = (val, col) => {
            //    this.allCheckChecked(val, col);
            //    return true;
            //};
            this.GridFormFileVm.IsChange = true;
            this.forceUpdate("");

        }
        public loadPageData(pageIndex: number, batchid: string) {
            var _page = { PageNo: pageIndex };
            urlFile.Core.AkPost("/MedicalCenter/NewGroup/FechBatchMemberData",
                {
                    pager: JSON.stringify(_page),
                    fids: batchid
                },
                (a) => {
                    this.init(a)
                    //var data = a.Data.ListData;
                    //var gridFormConfig = { Data: data, UniId: this.UniId };
                    //this.GridFormFileVm = new gridFormFile.GroupGridFromDow.GroupGridFromDowVm(gridFormConfig);
                    //this.GridFormFileVm.RowList.forEach((row) => {
                    //    this.CheckBoxList.push(row.SingleCheckVm);
                    //    row.SingleCheckVm.ChangeEventFun = (val, col) => {
                    //        this.checkCheckBox(val, col);
                    //        return true;
                    //    };
                    //});
                    //this.AllCheck = this.GridFormFileVm.AllCheck;
                    //this.AllCheck.ChangeEventFun = (val, col) => {
                    //    this.allCheckChecked(val, col);
                    //    return true;
                    //};
                    //this.GridFormFileVm.IsChange = true;
                    //this.forceUpdate("");
                });
        }
        protected loadPage(callback?: () => any) {
            urlFile.Core.AkPost("/MedicalCenter/UnitExam/getNum", {}, (a) => {
                //this.rowData = a.Data[0];
                this.SearchFormVm = new searchFormFile.GroupSearchDow.GroupSearchDowVm();
                this.GridFormFileVm = new gridFormFile.GroupGridFromDow.GroupGridFromDowVm();

                if (callback) {
                    callback();
                }
            })
        }

    }
    export class GroupListPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class GroupListPageProps extends basewedPageFile.Web.BaseWebPageProps<GroupListPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("GROUPLISTPAGE", basewedPageFile.Web.BaseWebPageVm, GroupListPageVm);

}