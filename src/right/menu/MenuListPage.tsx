import domFile = require("./../../01core/0Dom"); import React = require("react");
import ReactDOM = require("react-dom");
import iocFile = require("./../../01core/Ioc");
import utilFile = require("./../../01core/Util");
import pagination = require("./../../05tool/Pagination");
import urlFile = require("./../../01core/Url");
import basewedPageFile = require("./../../04page/BaseWebPage");
import treeFile = require("./../../02col/03selector/TreeSelector");

import baseTreeFile = require("./../../02col/03selector/BaseTree");

import singleCheckFile = require("./../../02col/02Mulite/SingleCheckBox");
import buttonFile = require("./../../05tool/Button");

import menuDataFile = require("./Data");
import menuRowFile = require("./MenuGridRow");
import buttonRowFile = require("./MenuGridButtonRow");
import thFile = require("./../../09Web/dom/ThDom");
import ThDom = thFile.Web.ThDomReact;

export module Right {
    export class MenuListPageAction extends basewedPageFile.Web.BaseWebPageAction {

    }
    export class MenuListPageReact extends basewedPageFile.Web.BaseWebPageReact<MenuListPageProps, MenuListPageStates, MenuListPageAction> implements domFile.Core.IReact {

        public MenuGridRowVm: menuRowFile.MenuGridRow.MenuGridRowVm;
        private fun_searchBtn() {
            //alert(this.props.Vm.SearchText + "_" + this.props.Vm.getNaviMenuTreeFId());
            this.props.Vm.loadPageData(0);
        }

        private fun_Scroll(e: React.UIEvent) {
            var _$obj = $(e.target);
            this.props.Vm.ScrollAuto(_$obj.scrollLeft());
        }
        private fun_seachClearBtn() {
            this.props.Vm.SearchText = "";
            this.props.Vm.IsHideClearBtn = true;
            this.props.Vm.loadPageData(0);
            //this.forceUpdate();
        }

        private fun_linkText(e) {
            var _val = e.target["value"];
            this.props.Vm.SearchText = _val;
            if (!_val || _val == "") {
                this.props.Vm.IsHideClearBtn = true;
            }
            else {
                this.props.Vm.IsHideClearBtn = false;
            }
            this.forceUpdate();
        }

        public pSender(): React.ReactElement<any> {
            var searchForm = this.initSearchForm();
            var pager = this.initPager();
            var topPager = <div className="topPager">{pager}</div>;
            var bottomPager = <div className="bottomPager">{pager}</div>;
            var theader = <thead className="thead-default">

                {this.initHeader() }
            </thead>
            var tbody = this.initBody();
            var table = <table className="table table-hover">{theader}{tbody}</table>;

            var _ff = <div className="Hz-scroll">
                <div className="col-lg-2 text-left Hm-toggle-menu"><h5>菜单</h5>{this.props.Vm.NaviTree.intoDom() }</div>
                <div className="col-lg-10 col-md-12 col-sm-12 col-xs-12 Hm-center-content">
                    {searchForm}
                    <div className="acs-grids">
                        {topPager}
                       {this.initButtons() }
                        <div className="Hm-table"  onScroll={(e) => { this.fun_Scroll(e); } }>{table}</div>
                        {bottomPager}
                    </div>


                </div>
            </div>;
            //var _ff = <div className="row acsScroll acsMargin3">
            //    <div className="acs-title">基础菜单</div>
            //    <div className="Hm-toggle-menu acsTextL"><h5>菜单</h5>{this.props.Vm.NaviTree.intoDom() }</div>
            //    <div className="main acs-fixed-top">
            //        {searchForm}
            //        <div className="acs-grids">
            //            <div className="button-bar">{this.initButtons() }</div>
            //            {topPager}
            //            <div className="acs-table"  onScroll={(e) => { this.fun_Scroll(e); } }>{table}</div>
            //            {bottomPager}
            //        </div>


            //    </div>
            //</div>;
            // alert(this.props.Vm.RowList.length + "  "+ this.props.Vm.ListData.List.length);
            return _ff;
        }

        public initPager(): React.ReactElement<any> {
            var pagerVm = new pagination.tool.PaginationVm();
            var pager = this.props.Vm.ListData.Pager;
            pagerVm.PageNo = pager.PageNo;
            pagerVm.PageSize = pager.PageSize;
            pagerVm.TotalCount = pager.TotalCount;

            pagerVm.PageClickEvent = (pageIndex) => {
                this.props.Vm.loadPageData(pageIndex);
            }
            return pagerVm.intoDom();

        }

        public initSearchForm(): React.ReactElement<any> {
            return <div className="Hm-search-panel">
                <form className="clearfix">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="Hu-label"><label>菜单名：</label></div>
                        <div className="Hu-input"><input  className="Hg-width"  placeholder=".." type="text" value={this.props.Vm.SearchText} onChange={(e) => { this.fun_linkText(e); } }></input></div>
                    </div>
                    <div className="col-xs-12 btn-group-sm text-center">
                        <a  className="btn btn-primary" onClick={() => { this.fun_searchBtn(); } }>搜索</a>
                        <a  className={"btn btn-primary " + (this.props.Vm.IsHideClearBtn ? " hide" : "") } onClick={() => { this.fun_seachClearBtn(); } } >清空</a>

                    </div>
                </form>
            </div>
        };




        private getThDomVM(w?: number) {
            var _ther = new thFile.Web.ThDomVm();
            if (w) {
                _ther.Width = w;
            }
            return _ther;
        }

        public initHeader(): React.ReactElement<any> {
            return <tr className="ACT-HEADER MEMBER">
                <th className={"thCheckAll text-center acsWidth3-5 " + (this.props.Vm.IsAcsRelative ? " Hf-relative Hf-table-th  " : "") } style={{ left: this.props.Vm.LeftNum }}   >{this.props.Vm.AllCheck.intoDom() }</th>
                <th className="hide"><span>主键</span></th>


                <ThDom children={null} Vm={this.getThDomVM(200) }><span>菜单名</span></ThDom>
                <ThDom children={null} Vm={this.getThDomVM(150) }><span>上级菜单</span></ThDom>
                <ThDom children={null} Vm={new thFile.Web.ThDomVm() }><span>权值</span></ThDom>
                <ThDom children={null} Vm={new thFile.Web.ThDomVm() }><span>菜单类别</span></ThDom>
                <ThDom children={null} Vm={this.getThDomVM(200) }><span>更新时间</span></ThDom>
            </tr>
        };

        private createButton(displayName: string): React.ReactElement<any> {
            var btnVm = new buttonFile.ui.ButtonVm();
            btnVm.DisplayName = displayName;
            btnVm.KindCss = "btn-xs btn-primary";
            if (displayName == "删除" || displayName == "详情" || displayName == "编辑") {
                btnVm.NoEnable = true;
            }
            if (displayName != "新增") {
                this.props.Vm.BtnList.push(btnVm);
            }
            btnVm.ClickFun = (a) => {
                this.props.Vm.buttonClickCommond(a);
            };
            return btnVm.intoDom();
        }

        private createSingleCheckBox(obj?: any): React.ReactElement<any> {
            var singleCheckVm = new singleCheckFile.ui.SingleCheckBoxVm();
            singleCheckVm.Tag = obj;
            this.props.Vm.CheckBoxList.push(singleCheckVm);
            singleCheckVm.ChangeEventFun = (val, col) => {
                this.props.Vm.checkCheckBox(val, col);
                return true;
            };
            return singleCheckVm.intoDom();
        }


        public initButtons(): React.ReactElement<any> {
            return <div className="Hm-button-bar">
            <div className="btn-group ">
                {this.createButton("删除") }
                {this.createButton("详情") }
                {this.createButton("编辑") }
            </div>
                <div className="btn-group m-l-xl">
                {this.createButton("新增") }
                </div>
           
            </div>
        }

        public initBody(): React.ReactElement<any> {
            return <tbody>
                {
                    this.props.Vm.ListData.List.map((data, index) => {
                        var rowVm = this.createGridRow(data, index);
                        return [rowVm, this.createGridRowButton(this.MenuGridRowVm)];
                    })
                }</tbody>;
        };

        public createGridRow(data: any, index: number): React.ReactElement<any> {
            var rowVm = new menuRowFile.MenuGridRow.MenuGridRowVm();
            rowVm.RowData = data;
            rowVm.MenuObj = this.props.Vm;

            rowVm.IsAcsRelative = this.props.Vm.IsAcsRelative;
            rowVm.LeftNum = this.props.Vm.LeftNum;

            rowVm.RowNumber = index < 9 ? "0" + (index + 1) : (index + 1).toString();
            this.props.Vm.RowList.push(rowVm);
            rowVm.SingleCheckVm.ChangeEventFun = (val, col) => {
                this.props.Vm.checkCheckBox(val, col);
                rowVm.forceUpdate("");
                return true;
            };
            rowVm.IsChange = true;
            this.MenuGridRowVm = rowVm;
            return rowVm.intoDom();
        }

        public createGridRowButton(rowVm: menuRowFile.MenuGridRow.MenuGridRowVm): React.ReactElement<any> {
            var buttonRowVm = new buttonRowFile.MenuGridButtonRow.MenuGridButtonRowVm();
            buttonRowVm.Row = rowVm;
            buttonRowVm.IsChange = true;
            return buttonRowVm.intoDom();

        }

    }


    export class MenuListPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = MenuListPageReact;
        public ListData: MenuPagerListData;
        public NaviTree: baseTreeFile.ui.BaseTreeVm;
        public CheckBoxList = new Array<singleCheckFile.ui.SingleCheckBoxVm>();
        public BtnList = new Array<buttonFile.ui.ButtonVm>();
        public AllCheck: singleCheckFile.ui.SingleCheckBoxVm;
        public RowList = new Array<menuRowFile.MenuGridRow.MenuGridRowVm>();

        public IsHideClearBtn: boolean = true;

        public IsAcsRelative: boolean = false;
        public LeftNum: number = 0;


        public ScrollAuto(left: number) {
            this.IsAcsRelative = left > 0;
            this.LeftNum = left;
            //this.RowList.forEach((r) => {
            //    r.IsAcsRelative = left > 0;
            //    r.LeftNum = left;
            //    r.IsChange = true;
            //});
            this.forceUpdate("");
        }

        public newOpt(vals: string) {
            urlFile.Core.AkUrl.Current().openUrl("$panelmenunew$" + vals + "$", true);
        }

        public detailOpt(vals: string) {
            // var _ids = _list.map((n) => n.FID).join(",");
            urlFile.Core.AkUrl.Current().openUrl("$panelmenudetail$" + vals + "$", true);
        }

        public updateOpt(vals: string) {
            urlFile.Core.AkUrl.Current().openUrl("$panelmenuupdate$" + vals + "$", false);
        }

        public delOpt(vals: string) {
            if (confirm("你确定要删除 所选中的数据吗 ？？")) {

                urlFile.Core.AkPost("/RightCloud/Menu/delMenu", { fids: vals }, (data) => {
                    var _data = data.Data;
                    if (_data == "ok") {
                        this.loadPageData(0);
                    }
                });

            }
        }


        public buttonClickCommond(obj: buttonFile.ui.ButtonVm) {
            switch (obj.DisplayName) {
                case "新增":
                    var _str = this.getNaviMenuTreeFId();
                    this.newOpt(_str);
                    break;
                case "详情":
                    var _list = this.getSelectValues();
                    var _ids = _list.map((n) => n.FID).join(",");
                    this.detailOpt(_ids);
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

        public SearchText: string;

        public getNaviMenuTreeFId(): string {

            var _str: any = this.NaviTree.dataValue();
            return _str;
        }

        public getMenuName(): string {
            return this.SearchText;
        }

        private getSelectValues() {
            var _list: MenuData[] = [];

            this.RowList.forEach((r) => {
                var ck = r.SingleCheckVm;
                if (ck.vmDataValueGet() == "true") {
                    _list.push(r.RowData);
                }
            });


            console.log(_list);
            return _list;
        }

        public constructor() {
            super();
            this.Title = "菜单列表";
            this.NaviTree = new baseTreeFile.ui.BaseTreeVm({ IsRootExpand: true });
            this.AllCheck = new singleCheckFile.ui.SingleCheckBoxVm();
            this.AllCheck.ChangeEventFun = (val, col) => {
                this.allCheckChecked(val, col);
                return true;
            };



            this.NaviTree.ChangeEventFun = ((val, col) => {
                // alert(val);
                this.loadPageData(0, val);
                return true;
            });
            // this.initData();
        }

        public initData() {
            this.ListData = { Pager: { PageNo: 0, PageSize: 2, TotalCount: 0 }, List: [] };

        }

        public checkCheckBox(val: string, checkDom: domFile.Core.DomVm): void {
            window["isHand"] = true;
            var isCheck = false;
            var isAllCheck = true;
            var checkedCount = 0;
            if (val == "true") {
                isCheck = true;
            }

            this.RowList.forEach((row) => {
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


            isAllCheck = this.RowList.length == checkedCount ? true : false;
            this.BtnList.forEach((btn) => {
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

                this.RowList.forEach((row) => {
                    var chk = row.SingleCheckVm;
                    chk.IsChange = true;
                    chk.reactDataValueSet(val);
                });
            }
        }
        public getData(model?: menuDataFile.Menu.MenuPagerListData): void {
            if (!model) {
                var data = this.ListData;
                data.Pager.TotalCount = 5;
                var menu1 = { FID: "001001", ParentId: "001", MenuName: "业务单", Key: "$$module/BiDa/Statistics/bd_Business_Statistics", ParentName: "必达金融", MenuKindName: "业务模块" };
                var menu2 = { FID: "001002", ParentId: "002", MenuName: "额度申请", Key: "$$module/BiDa/business/bd_Quota_Apply", ParentName: "必达金融", MenuKindName: "业务模块" };
                var menu3 = { FID: "001003", ParentId: "003", MenuName: "划款单", Key: "$$module/BiDa/business/bd_PayInfo", ParentName: "必达金融", MenuKindName: "业务模块" };
                var menu4 = { FID: "001004", ParentId: "004", MenuName: "电查要素表", Key: "$$module/BiDa/business/bd_Pay_Apply", ParentName: "必达金融", MenuKindName: "业务模块" };
                var menu5 = { FID: "001005", ParentId: "005", MenuName: "用户信息", Key: "$$module/BiDa/User/bd_User", ParentName: "必达金融", MenuKindName: "业务模块" };
                data.List.push(menu1);
                data.List.push(menu2);
                data.List.push(menu3);
                data.List.push(menu4);
                data.List.push(menu5);


            }
            else {
                this.Title = "菜单列表，第" + (model.Pager.PageNo + 1) + "页，总共" + model.Pager.TotalCount + "条";
                this.ListData = { Pager: null, List: [] };
                this.ListData.Pager = model.Pager;
                this.ListData.List = model.List;
            }


        }


        public loadPageData(pageIndex: number, naviTreeId?: string) {
            this.RowList = [];
            this.AllCheck.vmDataValueSet("false");
            this.AllCheck.forceUpdate("");

            // if (naviTreeId)
            var _MenuParentId = (naviTreeId || naviTreeId == "") ? naviTreeId : this.getNaviMenuTreeFId();
            //  alert(_MenuParentId);
            var _page = { PageNo: pageIndex };
            var _MenuName = this.getMenuName();
            urlFile.Core.AkPost("/RightCloud/Menu/searchMenuDetail",
                {
                    pager: JSON.stringify(_page),
                    partenId: _MenuParentId,
                    menuName: _MenuName
                },
                (a) => {
                    this.RowList = [];
                    var _data: menuDataFile.Menu.MenuPagerListData = a.Data;
                    //-------------
                    document.title = this.Title = "菜单列表，第" + (pageIndex + 1) + "页，总共" + _data.Pager.TotalCount + "条";
                    this.getData(_data);
                    this.IsChange = true;
                    var _d0: Date = new Date();
                    this.forceUpdate("");
                });
        }

        protected loadPage(callback?: () => any) {
            var _MenuParentId = this.getNaviMenuTreeFId();
            urlFile.Core.AkPost("/RightCloud/Menu/searchMenuDetail", {}, (a) => {
                var _data: menuDataFile.Menu.MenuPagerListData = a.Data;
                this.getData(_data);
                if (callback) {
                    callback();
                }
            });




        }

    }

    export interface MenuPagerListData {

        Pager: pagination.tool.Pagination;
        List: Array<MenuData>;
    }

    export interface MenuData {
        FID: string;
        ParentId: string;
        ParentName: string;
        MenuName: string;
        Key: string;
        MenuKindName: string;
    }

    export class MenuListPageProps extends basewedPageFile.Web.BaseWebPageProps<MenuListPageVm>{
    }

    export class MenuListPageStates extends basewedPageFile.Web.BaseWebPageStates {

    }
    iocFile.Core.Ioc.Current().RegisterType("MENUPAGE", basewedPageFile.Web.BaseWebPageVm, MenuListPageVm);
}