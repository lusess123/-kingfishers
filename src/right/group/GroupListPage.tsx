import domFile = require("./../../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import iocFile = require("./../../01core/Ioc");
import utilFile = require("./../../01core/Util");
import pagination = require("./../../05tool/Pagination");
import urlFile = require("./../../01core/Url");
import basewedPageFile = require("./../../04page/BaseWebPage");
import treeFile = require("./../../02col/03selector/TreeSelector");
import singleCheckFile = require("./../../02col/02Mulite/SingleCheckBox");
import buttonFile = require("./../../05tool/Button");

import groupDataFile = require("./Data");
import groupRowFile = require("./GroupGridRow");
import buttonRowFile = require("./GroupGridButtonRow");
import thFile = require("./../../09Web/dom/ThDom");
import ThDom = thFile.Web.ThDomReact;
import baseTreeFile = require("./../../02col/03selector/BaseTree");

import groupRightDetailPageFile = require("./GroupRightDetailPage");
groupRightDetailPageFile;
export module Right {
    export class GroupListPageAction extends basewedPageFile.Web.BaseWebPageAction {

    }
    export class GroupListPageReact extends basewedPageFile.Web.BaseWebPageReact<GroupListPageProps, GroupListPageStates, GroupListPageAction> implements domFile.Core.IReact {

        public GroupGridRowVm: groupRowFile.GroupGridRow.GroupGridRowVm;
        private fun_searchBtn() {
            debugger
            //alert(this.props.Vm.SearchText + "_" + this.props.Vm.getNaviMenuTreeFId());
            this.props.Vm.loadPageData(0);
        }
        private fun_seachClearBtn() {
            this.props.Vm.SearchText = "";
            this.props.Vm.SearchTexts = "";
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
        private fun_linkTexts(e) {
            var _vals = e.target["value"];
            this.props.Vm.SearchTexts = _vals;
            if (!_vals || _vals == "") {
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
            var table = <table  className="table table-hover">{theader}{tbody}</table>;

            var _ff = <div className="Hz-scroll">
                <div className="col-lg-2 text-left Hm-toggle-menu"><h5>组织机构</h5>{this.props.Vm.NaviTree.intoDom() }</div>
                <div className="col-lg-10 col-md-12 col-sm-12 col-xs-12 Hm-center-content">
                    {searchForm}
                    <div className="Hm-grids">
                        {topPager}
                       {this.initButtons() }
                        <div className="Hm-table">{table}</div>
                        {bottomPager}
                    </div>


                </div>
            </div>;

            //var _ff = <div className="row acsScroll acsMargin3">
            //    <div className="acs-title">组织机构</div>
            //    <div className="Hm-toggle-menu acsTextL"><h5>组织机构</h5>{this.props.Vm.NaviTree.intoDom() }</div>
            //    <div className="main acs-fixed-top">
            //        {searchForm}
            //        <div className="acs-grids">
            //            <div className="button-bar">{this.initButtons() }</div>
            //            {topPager}
            //            <div className="acs-table">{table}</div>
            //            {bottomPager}
            //            </div>


            //        </div>
            //    </div>;
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
                        <div className="Hu-label"><label>机构名：</label></div>
                        <div className=" Hu-input"><input  className="Hg-width"  placeholder=".." type="text" value={this.props.Vm.SearchText} onChange={(e) => { this.fun_linkText(e); } }></input></div>                                                  
                     </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="Hu-label"><label>机构编码: </label></div>
                        <div className="Hu-input"><input className="Hg-width" placeholder=".." type="text" value={this.props.Vm.SearchTexts} onChange={(e) => { this.fun_linkTexts(e); } }></input></div>    
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
                <th className="thCheckAll text-center acsWidth3-5 " style={{ width: "6rem" }}>{this.props.Vm.AllCheck.intoDom() }{}</th>
                <th className="hide"><span>主键</span></th>
                <ThDom children={null} Vm={this.getThDomVM(200) }><span>上级机构</span></ThDom>
                <ThDom children={null} Vm={this.getThDomVM(150) }><span>机构名</span></ThDom>
                <ThDom children={null} Vm={new thFile.Web.ThDomVm() }><span>机构编码</span></ThDom>
                <ThDom children={null} Vm={new thFile.Web.ThDomVm() }><span>联系方式</span></ThDom>
                <ThDom children={null} Vm={new thFile.Web.ThDomVm() }><span>更新时间</span></ThDom>
                </tr>
        };

        private createButton(displayName: string): React.ReactElement<any> {
            var btnVm = new buttonFile.ui.ButtonVm();
            btnVm.DisplayName = displayName;
            btnVm.KindCss = "btn-xs btn-primary";
            if (displayName == "删除" || displayName == "详情" || displayName == "编辑" || displayName == "分配权限" || displayName == "查看权限") {
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
            <div className="btn-group">
                {this.createButton("删除") }
                {this.createButton("详情") }
                {this.createButton("编辑") }
                {this.createButton("分配权限") }
                {this.createButton("查看权限") }
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
                    return [rowVm,this.createGridRowButton(this.GroupGridRowVm)];
                })
                }</tbody>;
        };

        public createGridRow(data: any, index: number): React.ReactElement<any> {
            var rowVm = new groupRowFile.GroupGridRow.GroupGridRowVm();
            rowVm.RowData = data;
            rowVm.GroupObj = this.props.Vm;
            rowVm.RowNumber = index < 9 ? "0" + (index + 1) : (index + 1).toString();
            this.props.Vm.RowList.push(rowVm);
            rowVm.SingleCheckVm.ChangeEventFun = (val, col) => {
                this.props.Vm.checkCheckBox(val, col);
                var checkedCount = 0;
                this.props.Vm.RowList.forEach((row) => {
                    var chk = row.SingleCheckVm;
                    var _val = chk.dataValue();
                    if (_val == "true" && col != chk) {
                        //isCheck = true;
                        checkedCount++;
                    }
                    if (col == chk) {
                        if (val == "true") {
                            checkedCount++;
                        }
                    }
                });                
                rowVm.forceUpdate("");
                return true;
            };
            rowVm.IsChange = true;
            this.GroupGridRowVm = rowVm;
            return rowVm.intoDom();
        }

        public createGridRowButton(rowVm: groupRowFile.GroupGridRow.GroupGridRowVm): React.ReactElement<any> {
            var buttonRowVm = new buttonRowFile.GroupGridButtonRow.GroupGridButtonRowVm();//MenuGridButtonRow.MenuGridButtonRowVm();
            buttonRowVm.Row = rowVm;
            buttonRowVm.IsChange = true;
            return buttonRowVm.intoDom();
        }

    }


    export class GroupListPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = GroupListPageReact;
        public ListData: GroupPagerListData;
        public NaviTree: baseTreeFile.ui.BaseTreeVm;
        public CheckBoxList = new Array<singleCheckFile.ui.SingleCheckBoxVm>();
        public BtnList = new Array<buttonFile.ui.ButtonVm>();
        public AllCheck: singleCheckFile.ui.SingleCheckBoxVm;
        public RowList = new Array<groupRowFile.GroupGridRow.GroupGridRowVm>();

        public IsHideClearBtn: boolean = true;

        public newOpt(vals: string) {
            urlFile.Core.AkUrl.Current().openUrl("$wingroupnew$" + vals + "$", true);
        }

        public detailOpt(vals: string) {
            urlFile.Core.AkUrl.Current().openUrl("$wingroupdetail$" + vals + "$", true);
        }

        public updateOpt(vals: string) {
            urlFile.Core.AkUrl.Current().openUrl("$wingroupupdate$" + vals + "$", false);
        }

        public grantOpt(vals: string)
        {
            var valArr = vals.split(",");
            if (valArr.length > 1) {
                alert("只能选择一个角色分配权限");
                return;
            }
            urlFile.Core.AkUrl.Current().openUrl("$wingroupgrant$" + vals + "$", true);
        }
        public rightPage(vals: string) {
            var valArr = vals.split(",");
            if (valArr.length > 1) {
                alert("只能查看一个组织的权限");
                return;
            }
            urlFile.Core.AkUrl.Current().openUrl("$panelGroupRightDetailPage$" + vals + "$", true);
        }

        public delOpt(vals: string) {
            if (confirm("你确定要删除 所选中的数据吗 ？？")) {

                urlFile.Core.AkPost("/RightCloud/Group/delGroup", { fids: vals }, (data) => {
                    var _data = data.Data;
                    if (_data == "ok") {
                        //urlFile.Core.AkUrl
                        urlFile.Core.AkUrl.Current().openUrl("$GROUP$", false);
                       // this.loadPageData(0);
                        utilFile.Core.Util.Noty("数据删除成功");
                    }
                });
               
            }
        }


        public buttonClickCommond(obj: buttonFile.ui.ButtonVm) {
            switch (obj.DisplayName) {
                case "新增":
                    var _str = this.getNaviGroupTreeFId();
                    this.newOpt(_str);
                    break;
                case "详情":
                    var _list = this.getSelectValues();
                    var _ids = _list.map((n) => n.GroupID).join(",");
                    this.detailOpt(_ids);
                    break;
                case "编辑":
                    var _list = this.getSelectValues();
                    var _ids = _list.map((n) => n.GroupID).join(",");
                    this.updateOpt(_ids);
                    break;
                case "删除":
                    var _list = this.getSelectValues();
                    var _ids = _list.map((n) => n.GroupID).join(",");
                    this.delOpt(_ids);
                    break;
                case "分配权限":
                    var _list = this.getSelectValues();
                    var _ids = _list.map((n) => n.GroupID).join(",");
                    this.grantOpt(_ids);
                    break;
                case "查看权限":
                    var _list = this.getSelectValues();
                    var _ids = _list.map((n) => n.GroupID).join(",");
                    this.rightPage(_ids);
                default:
                    break;
            }
        }

        public SearchText: string;
        public SearchTexts: string;

        public getNaviGroupTreeFId(): string {

            var _str: any = this.NaviTree.dataValue();
            return _str;
        }

        public getGroupName(): string {
            return this.SearchText;
        }
        public GetOrgCode(): string {
            return this.SearchTexts;
        }

        private getSelectValues() {
            var _list: GroupData[] = [];

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
            this.NaviTree = new baseTreeFile.ui.BaseTreeVm({ RegName:"GroupCodeTable",IsRootExpand:true});
            //this.NaviTree.RegName = "GroupCodeTable";
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
        public getData(model?: groupDataFile.Group.GroupPagerListData): void {
            if (!model) {
                var data = this.ListData;
                data.Pager.TotalCount = 5;
                var menu1 = { GroupID: "00100", FParentFName: "列表以", GroupName: "元宝网", GroupCode: "dfsgfd", FPhone: "12345678978", FControlUnitName:""};
                var menu2 = { GroupID: "00101", FParentFName: "列表以", GroupName: "比大王", GroupCode: "4dsa46", FPhone: "12345678978", FControlUnitName: ""};
                var menu3 = { GroupID: "00102", FParentFName: "列表以", GroupName: "信使网络", GroupCode: "4564err", FPhone: "12345678978", FControlUnitName: ""};
                var menu4 = { GroupID: "00103", FParentFName: "列表以", GroupName: "没有名字", GroupCode: "789ret", FPhone: "12345678978", FControlUnitName: ""};
                var menu5 = { GroupID: "00104", FParentFName: "列表以", GroupName: "外来租户", GroupCode: "36485tyj", FPhone: "12345678978", FControlUnitName: ""};
                data.List.push(menu1);
                data.List.push(menu2);
                data.List.push(menu3);
                data.List.push(menu4);
                data.List.push(menu5);


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
            var _GroupParentId = (naviTreeId || naviTreeId == "") ? naviTreeId : this.getNaviGroupTreeFId();
            //  alert(_MenuParentId);
            var _page = { PageNo: pageIndex };
            var _GroupName = this.getGroupName();
            var _orgCode = this.GetOrgCode();
            urlFile.Core.AkPost("/RightCloud/Group/searchGroupDetail",
                {
                    pager: JSON.stringify(_page),
                    parentID: _GroupParentId,
                    orgName: _GroupName,
                    orgCode: _orgCode

                },
                (a) => {
                    this.RowList = [];
                    var _data: groupDataFile.Group.GroupPagerListData = a.Data;
                    //-------------
                    this.getData(_data);
                    this.IsChange = true;
                    this.forceUpdate("");
                });
        }

        protected loadPage(callback?: () => any) {
            var _GroupParentId = this.getNaviGroupTreeFId();
            urlFile.Core.AkPost("/RightCloud/Group/searchGroupDetail", {}, (a) => {
                var _data: groupDataFile.Group.GroupPagerListData = a.Data;
                this.getData(_data);
                if (callback) {
                    callback();
                }
            });




        }

    }

    export interface GroupPagerListData {

        Pager: pagination.tool.Pagination;
        List: Array<GroupData>;
    }

    export interface GroupData {
        GroupID: string;
        FParentFName: string;
        GroupName: string;
        GroupCode: string;
        FPhone: string;
        FControlUnitName: string;
    }

    export class GroupListPageProps extends basewedPageFile.Web.BaseWebPageProps<GroupListPageVm>{
    }

    export class GroupListPageStates extends basewedPageFile.Web.BaseWebPageStates {

    }
    iocFile.Core.Ioc.Current().RegisterType("GROUP", basewedPageFile.Web.BaseWebPageVm, GroupListPageVm);
}