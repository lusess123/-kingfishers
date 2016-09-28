import domFile = require("./../../01core/0Dom");import React = require("react");
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
import thFile = require("./../../09Web/dom/ThDom");
import dataFile = require("./Data");
import roleRowFile = require("./RoleGridRow");
import buttonRowFile = require("./RoleGridButtonRow");
import ThDom = thFile.Web.ThDomReact;

export module Role {
    export class RoleListPageAction extends basewedPageFile.Web.BaseWebPageAction {

    }
    export class RoleListPageReact extends basewedPageFile.Web.BaseWebPageReact<RoleListPageProps, RoleListPageStates, RoleListPageAction> implements domFile.Core.IReact {

        public GridRowVm: roleRowFile.RoleGridRow.RoleGridRowVm;
        private fun_searchBtn() {
            //alert(this.props.Vm.SearchText + "_" + this.props.Vm.getNaviMenuTreeFId());
            this.props.Vm.loadPageData(0);
        }
        private fun_seachClearBtn() {
            this.props.Vm.SearchNameText = "";
            this.props.Vm.SearchSginText = "";
            this.props.Vm.IsHideClearBtn = true;
            this.props.Vm.loadPageData(0);
            //this.forceUpdate();
        }

        private fun_linkText(e) {
            var _val = e.target["value"];
            this.props.Vm.SearchNameText = _val;
            var role = "";
            if (this.props.Vm.SearchSginText != undefined)
            {
                var role = this.props.Vm.SearchSginText;
            }
            if ((role.length == 0 && !_val) || (role.length == 0 && _val == "")) {
                this.props.Vm.IsHideClearBtn = true;
            }
            else {
                this.props.Vm.IsHideClearBtn = false;
            }
            this.forceUpdate();
        }
        private fun_linkRoleText(e) {
            var _val = e.target["value"];
            this.props.Vm.SearchSginText = _val;
            if (this.props.Vm.SearchNameText != undefined) {
                var name = this.props.Vm.SearchNameText;
            }

            if ((name.length == 0 && !_val) || (name.length == 0 && _val == "")) {
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

            var _ff = <div className="acsScroll">
                    {this.initNavi() }
                <div className="col-lg-10 col-md-12 col-sm-12 col-xs-12 Hm-center-content">

                    {searchForm}
                    <div className="acs-grids">
                        {topPager}
                        {this.initButtons() }
                        <div className="Hm-table">{table}</div>
                        {bottomPager}
                    </div>


                </div>
            </div>;
            // alert(this.props.Vm.RowList.length + "  "+ this.props.Vm.ListData.List.length);
            return _ff;
        }

        public initNavi(): React.ReactElement<any> {
            this.props.Vm.NaviTree.RegName = "GroupCodeTable";
            return <div className="col-lg-2 text-left Hm-toggle-menu"><h5>组织</h5>{this.props.Vm.NaviTree.intoDom() }</div>

        };

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
                    <div className="col-lg-6 col-sm-12 col-xs-12">
                       
                        <div className="Hu-label"><label>角色名称：</label></div>
                        <div className="Hu-input"><input className="Hg-width"  placeholder=".." type="text" value={this.props.Vm.SearchNameText} onChange={(e) => { this.fun_linkText(e); } }></input></div>
                    </div>
                    <div className="col-lg-6 col-sm-12 col-xs-12">
                        <div className="Hu-label"><label>角色标识：</label></div>
                        <div className="Hu-input"><input  className="Hg-width"  placeholder=".." type="text" value={this.props.Vm.SearchSginText} onChange={(e) => { this.fun_linkRoleText(e); } }></input></div>
                        </div>
                 
                    <div className="col-xs-12 btn-group-sm text-center">

                        <a  className="btn btn-primary" onClick={() => { this.fun_searchBtn(); } }>搜索</a>
                        <a  className={"btn btn-primary " + (this.props.Vm.IsHideClearBtn ? "hide" : "") } onClick={() => { this.fun_seachClearBtn(); } } >清空</a>

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
                <th className="thCheckAll text-center acsWidth3-5 " style={{ width: "6rem" }}>{this.props.Vm.AllCheck.intoDom() }</th>
                <th className="hide"><span>主键</span></th>
                <ThDom children={null} Vm={this.getThDomVM(200) }><span>角色名称</span></ThDom>
                <ThDom children={null} Vm={this.getThDomVM(150) }><span>角色标识</span></ThDom>
                <ThDom children={null} Vm={new thFile.Web.ThDomVm() }><span>组织机构</span></ThDom>
                <ThDom children={null} Vm={new thFile.Web.ThDomVm() }><span>更新时间</span></ThDom>
            </tr>
        };

        private createButton(displayName: string, isDataBtn: boolean): React.ReactElement<any> {
            var btnVm = new buttonFile.ui.ButtonVm();
            btnVm.DisplayName = displayName;
            btnVm.KindCss = "btn-xs btn-primary";
            if (isDataBtn) {
                btnVm.NoEnable = true;
                this.props.Vm.BtnList.push(btnVm);
            }
            //if (displayName == "删除" || displayName == "详情" || displayName == "编辑") {
            //    btnVm.NoEnable = true;
            //}
            //if (displayName != "新增") {
            //    this.props.Vm.BtnList.push(btnVm);
            //}
            btnVm.ClickFun = (a) => {
                this.props.Vm.buttonClickCommond(a);
            };
            return btnVm.intoDom();
        }

        //private createSingleCheckBox(obj?: any): React.ReactElement<any> {
        //    var singleCheckVm = new singleCheckFile.ui.SingleCheckBoxVm();
        //    singleCheckVm.Tag = obj;
        //    this.props.Vm.CheckBoxList.push(singleCheckVm);
        //    singleCheckVm.ChangeEventFun = (val, col) => {
        //        this.props.Vm.checkCheckBox(val, col);
        //        return true;
        //    };
        //    return singleCheckVm.intoDom();
        //}


        public initButtons(): React.ReactElement<any> {
            return <div className="Hm-button-bar">
            <div className="btn-group ">
                {this.createButton("分配权限", true) }
                {this.createButton("查看权限",true) }
                {this.createButton("删除", true) }
                {this.createButton("详情", true) }
                {this.createButton("编辑", true) }
            </div>
            <div className="btn-group m-l-xl">
                {this.createButton("新增", false) }
                    </div>
                </div>

        }

        public initBody(): React.ReactElement<any> {
            return <tbody>
                {
                    this.props.Vm.ListData.List.map((data, index) => {
                        var rowVm = this.createGridRow(data, index);
                        return [rowVm, this.createGridRowButton(this.GridRowVm)];
                    })
                }</tbody>;
        };

        public createGridRow(data: any, index: number): React.ReactElement<any> {
            var rowVm = new roleRowFile.RoleGridRow.RoleGridRowVm();
            rowVm.RowData = data;
            rowVm.RoleObj = this.props.Vm;
            rowVm.RowNumber = index < 9 ? "0" + (index + 1) : (index + 1).toString();
            this.props.Vm.RowList.push(rowVm);
            rowVm.SingleCheckVm.ChangeEventFun = (val, col) => {
                this.props.Vm.checkCheckBox(val, col);
                rowVm.forceUpdate("");
                return true;
            };
            rowVm.IsChange = true;
            this.GridRowVm = rowVm;
            return rowVm.intoDom();
        }

        public createGridRowButton(rowVm: roleRowFile.RoleGridRow.RoleGridRowVm): React.ReactElement<any> {
            var buttonRowVm = new buttonRowFile.RoleGridButtonRow.RoleGridButtonRowVm();
            buttonRowVm.Row = rowVm;
            buttonRowVm.IsChange = true;
            return buttonRowVm.intoDom();

        }
        //protected pInstall(): void {

        //    super.pInstall();
        //    this.getData();
        //    this.forceUpdate();
        //}




    }


    export class RoleListPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = RoleListPageReact;
        public ListData: dataFile.Role.RolePagerListData;
        public NaviTree: baseTreeFile.ui.BaseTreeVm;
        public BtnList = new Array<buttonFile.ui.ButtonVm>();
        public AllCheck: singleCheckFile.ui.SingleCheckBoxVm;
        public RowList = new Array<roleRowFile.RoleGridRow.RoleGridRowVm>();

        public IsHideClearBtn: boolean = true;

        public newOpt(vals: string) {
            urlFile.Core.AkUrl.Current().openUrl("$panelrolenew$" + vals + "$", true);
        }

        public detailOpt(vals: string) {
            // var _ids = _list.map((n) => n.FID).join(",");
            urlFile.Core.AkUrl.Current().openUrl("$panelroledetail$" + vals + "$", true);
        }

        public updateOpt(vals: string) {
            urlFile.Core.AkUrl.Current().openUrl("$panelroleupdate$" + vals + "$", true);
        }

        public grantOpt(vals: string) {
            var valArr = vals.split(",");
            if (valArr.length > 1)
            {
                alert("只能选择一个角色分配权限");
                return;
            }
            urlFile.Core.AkUrl.Current().openUrl("$winrolegrant$" + vals + "$", true);
        }

        public delOpt(vals: string) {
            if (confirm("你确定要删除 所选中的数据吗 ？？")) {

                urlFile.Core.AkPost("/RightCloud/Role/delRole", { fids: vals }, (data) => {
                    var _data = data.Content;
                    if (_data == "ok") {
                        this.loadPageData(0);
                    }
                });

            }
        }
        public rightPage(vals: string) {
            var valArr = vals.split(",");
            if (valArr.length > 1) {
                alert("只能查看一个角色的权限");
                return;
            }
            urlFile.Core.AkUrl.Current().openUrl("$panelRoleRightDetailPage$" + vals + "$", true);
        }

        public buttonClickCommond(obj: buttonFile.ui.ButtonVm) {
            switch (obj.DisplayName) {
                case "新增":
                    var _str = this.getNaviTreeFId();
                    this.newOpt(_str);
                    break;
                case "详情":
                    var _list = this.getSelectValues();
                    var _ids = _list.map((n) => n.RoleID).join(",");
                    this.detailOpt(_ids);
                    break;
                case "编辑":
                    var _list = this.getSelectValues();
                    var _ids = _list.map((n) => n.RoleID).join(",");
                    this.updateOpt(_ids);
                    break;
                case "删除":
                    var _list = this.getSelectValues();
                    var _ids = _list.map((n) => n.RoleID).join(",");
                    this.delOpt(_ids);
                    break;
                case "分配权限":
                    var _list = this.getSelectValues();
                    var _ids = _list.map((n) => n.RoleID).join(",");
                    this.grantOpt(_ids);
                    break;
                case "查看权限":
                    var _list = this.getSelectValues();
                    var _ids = _list.map((n) => n.RoleID).join(",");
                    this.rightPage(_ids);
                    break;
                default:
                    break;
            }
        }

        public SearchNameText: string;
        public SearchSginText: string;

        public getNaviTreeFId(): string {

            var _str: any = this.NaviTree.dataValue();
            return _str;
        }

        //public getMenuName(): string {
        //    return this.SearchText;
        //}

        //public getSearchText(): dataFile.Role.ISearchData {
        //    return this.SearchData;
        //}

        private getSelectValues() {
            var _list: dataFile.Role.IRoleData[] = [];

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
            this.NaviTree = new baseTreeFile.ui.BaseTreeVm({IsRootExpand:true});

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
            this.ListData = { Pager: { PageNo: 0, PageSize: 2, TotalCount: 0, TableName: "", IsASC: false, DataTime: null, SortName: "" }, List: [] };

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
        public getData(model?: dataFile.Role.RolePagerListData): void {
            if (!model) {
                var data = this.ListData;
                data.Pager.TotalCount = 5;
                //var menu1 = { FID: "001001", ParentId: "001", MenuName: "业务单", Key: "$$module/BiDa/Statistics/bd_Business_Statistics", ParentName: "必达金融", MenuKindName: "业务模块" };
                //var menu2 = { FID: "001002", ParentId: "002", MenuName: "额度申请", Key: "$$module/BiDa/business/bd_Quota_Apply", ParentName: "必达金融", MenuKindName: "业务模块" };
                //var menu3 = { FID: "001003", ParentId: "003", MenuName: "划款单", Key: "$$module/BiDa/business/bd_PayInfo", ParentName: "必达金融", MenuKindName: "业务模块" };
                //var menu4 = { FID: "001004", ParentId: "004", MenuName: "电查要素表", Key: "$$module/BiDa/business/bd_Pay_Apply", ParentName: "必达金融", MenuKindName: "业务模块" };
                //var menu5 = { FID: "001005", ParentId: "005", MenuName: "用户信息", Key: "$$module/BiDa/User/bd_User", ParentName: "必达金融", MenuKindName: "业务模块" };
                //data.List.push(menu1);
                //data.List.push(menu2);
                //data.List.push(menu3);
                //data.List.push(menu4);
                //data.List.push(menu5);


            }
            else {
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
            var _unitId = (naviTreeId || naviTreeId == "") ? naviTreeId : this.getNaviTreeFId();
            //  alert(_MenuParentId);
            var _page = { PageNo: pageIndex };
            var _roleName = this.SearchNameText;
            var _roleSign = this.SearchSginText;
            urlFile.Core.AkPost("/RightCloud/Role/searchRoleDetail",
                {
                    pager: JSON.stringify(_page),
                    FControlUnitID: _unitId,
                    roleName: _roleName,
                    roleSign:_roleSign
                },
                (a) => {
                    this.RowList = [];
                    var _data: dataFile.Role.RolePagerListData = a.Data;
                    //-------------
                    this.getData(_data);
                    this.IsChange = true;
                    this.forceUpdate("");
                });
        }

        protected loadPage(callback?: () => any) {
            var _MenuParentId = this.getNaviTreeFId();
            urlFile.Core.AkPost("/RightCloud/Role/searchRoleDetail", {}, (a) => {
                var _data: dataFile.Role.RolePagerListData = a.Data;
                this.getData(_data);
                if (callback) {
                    callback();
                }
            });




        }

    }


    export class RoleListPageProps extends basewedPageFile.Web.BaseWebPageProps<RoleListPageVm>{
    }

    export class RoleListPageStates extends basewedPageFile.Web.BaseWebPageStates {

    }
    iocFile.Core.Ioc.Current().RegisterType("ROLE", basewedPageFile.Web.BaseWebPageVm, RoleListPageVm);
}