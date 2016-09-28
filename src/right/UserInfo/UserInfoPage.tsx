import domFile = require("./../../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import iocFile = require("./../../01core/Ioc");
import domCore = domFile.Core;
import pagination = require("./../../05tool/Pagination");
import utilFile = require("./../../01core/Util");
import urlFile = require("./../../01core/Url");
import buttonFile = require("./../../05tool/Button");
import treeFile = require("./../../02col/03selector/TreeSelector");
import baseTreeFile = require("./../../02col/03selector/BaseTree");

import basewedPageFile = require("./../../04page/BaseWebPage");
import singleCheckFile = require("./../../02col/02Mulite/SingleCheckBox");
import userinfoRowFile = require("./UserInfoGridRow");
import userinfoDataFile = require("./Data");
import buttonRowFile = require("./UserGridButtonRow");
import thFile = require("./../../09Web/dom/ThDom");
import ThDom = thFile.Web.ThDomReact;
export module UserInfo {
    export class UserInfoAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }
    export class UserInfoReact extends basewedPageFile.Web.BaseWebPageReact<UserInfoProps, UserInfoStates, UserInfoAction> implements domCore.IReact {
        public state = new UserInfoStates();
        public UserInfoGridRowVm: userinfoRowFile.UserInfoGridRow.UserInfoGridRowVm;
        private fun_searchBtn() {
            //alert(this.props.Vm.SearchText + "_" + this.props.Vm.getNaviMenuTreeFId());
            this.props.Vm.loadPageData(0);
        }
        private fun_seachClearBtn() {
            this.props.Vm.SearchText = "";
            this.props.Vm.SearchLgNameText = "";
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
        private fun_linkLgNameText(e) {
            var _val = e.target["value"];
            this.props.Vm.SearchLgNameText = _val;
            if (!_val || _val == "") {
                this.props.Vm.IsHideClearBtn = true;
            } else {
                this.props.Vm.IsHideClearBtn = false;
            }
            this.forceUpdate();
        }

        public pSender(): React.ReactElement<any> {
            var searchForm = this.initSearchForm();
            var pager = this.initPager();
            var tbody = this.initBody();
            var toppager = <div  className="topPager">{pager}</div>;
            var bottompager = <div className="bottomPager">{pager}</div>;
            var theader = this.initHeader();
            //var table = <div>{theader}{tbody}</div> 
            ///*{<div className="acs-toggle-menu acsTextL"><h5>组织机构</h5>{this.props.Vm.NaviTree.intoDom() }</div>}*//*{<th>职位</th>}*/
            return (<div className="acsScroll">
               
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 Hm-center-content">
                    {searchForm}
                    <div className="Hm-grids">
                        {toppager}
                        {this.initButtons() }
                        <div className="Hm-table">
                            <table className="table table-hover">
                                {theader}
                                {tbody}
                            </table>
                            </div>
                        {bottompager}
                        </div>
                    </div>
                </div>
            )
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();
        }
        private getThDomVM(w?: number) {
            var _ther = new thFile.Web.ThDomVm();
            if (w) {
                _ther.Width = w;
            }
            return _ther;
        }
        private initHeader(): React.ReactElement<any> {
            return (<thead className="thead-default">
                <tr className="ACT-HEADER MEMBER">
                <th className="thCheckAll acsTextC" style={{ width: "8rem" }}>{this.props.Vm.AllCheck.intoDom() }</th>
                <th className="hide"><span>主键</span></th>
                <ThDom children={null} Vm={this.getThDomVM(200) }><span>用户名</span></ThDom>
                <ThDom children={null} Vm={this.getThDomVM(150) }><span>性别</span></ThDom>
                <ThDom children={null} Vm={new thFile.Web.ThDomVm() }><span>工号</span></ThDom>
                <ThDom children={null} Vm={new thFile.Web.ThDomVm() }><span>在职状态</span></ThDom>
                <ThDom children={null} Vm={new thFile.Web.ThDomVm() }><span>登陆名</span></ThDom>
                <ThDom children={null} Vm={new thFile.Web.ThDomVm() }><span>更新时间</span></ThDom>
                </tr>
               </thead>)
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
        public initBody(): React.ReactElement<any> {
            return <tbody>
                {
                this.props.Vm.ListData.List.map((data,index) => {
                    var rowVm = this.createGridRow(data,index);
                    return [rowVm,this.createGridRowButton(this.UserInfoGridRowVm)]
                })
                }</tbody>;
        };
        public createGridRow(data: any,index:number): React.ReactElement<any> {
            var rowVm = new userinfoRowFile.UserInfoGridRow.UserInfoGridRowVm();
            rowVm.RowData = data;
            rowVm.UserObj = this.props.Vm;
            rowVm.RowNumber = index < 9 ? "0" + (index + 1) : (index + 1).toString();
            this.props.Vm.RowList.push(rowVm);
            rowVm.SingleCheckVm.ChangeEventFun = (val, col) => {
                this.props.Vm.checkCheckBox(val, col);
                rowVm.forceUpdate("");
                return true;
            };
            this.UserInfoGridRowVm = rowVm;
            return rowVm.intoDom();
        }
        public createGridRowButton(rowVm: userinfoRowFile.UserInfoGridRow.UserInfoGridRowVm): React.ReactElement<any> {
            var buttonRowVm = new buttonRowFile.UserGridButtonRow.UserGridButtonRowVm();
            buttonRowVm.Row = rowVm;
            return buttonRowVm.intoDom();
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
            return (
                <div className="Hm-search-panel">
                    <form className="clearfix">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="Hu-label"><label >用户名：</label></div>
                            <div className="Hu-input"><input  className="Hg-width"  placeholder=".." type="text" value={this.props.Vm.SearchText} onChange={(e) => { this.fun_linkText(e); } }></input></div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="Hu-label"><label>登陆名：</label></div>
                            <div className="Hu-input"><input  className="Hg-width"  placeholder=".." type="text" value={this.props.Vm.SearchLgNameText} onChange={(e) => { this.fun_linkLgNameText(e); } }></input></div>
                        </div>
                        <div className="col-xs-12 btn-group-sm text-center">

                            <a  className="btn btn-primary" onClick={() => { this.fun_searchBtn(); } }>搜索</a>
                            <a  className={"btn btn-primary " + (this.props.Vm.IsHideClearBtn ? "hide" : "") } onClick={() => { this.fun_seachClearBtn(); } } >清空</a>

                        </div>
                    </form>
                </div>
                )
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
        
    }
    export class UserInfoVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = UserInfoReact;
        public CheckBoxList = new Array<singleCheckFile.ui.SingleCheckBoxVm>();
        public SearchText: string;
        public SearchLgNameText: string;
        public UserId: string;
        public NaviTree: baseTreeFile.ui.BaseTreeVm;
        public AllCheck: singleCheckFile.ui.SingleCheckBoxVm;
        public RowList = new Array<userinfoRowFile.UserInfoGridRow.UserInfoGridRowVm>();
        public ListData: UserInfoPagerListData;
        public BtnList = new Array<buttonFile.ui.ButtonVm>();
        public IsHideClearBtn: boolean = true;
        public constructor() {
            super();
            this.Title = "用户信息";
            this.NaviTree = new baseTreeFile.ui.BaseTreeVm();
            this.NaviTree.RegName = "GroupCodeTable";
            this.AllCheck = new singleCheckFile.ui.SingleCheckBoxVm();
            this.AllCheck.ChangeEventFun = (val, col) => {
                this.allCheckChecked(val, col);
                return true;
            };
            this.NaviTree.ChangeEventFun = ((val, col) => {
                this.loadPageData(0, val);
                return true;
            })

        }
        
        public newOpt() {
            urlFile.Core.AkUrl.Current().openUrl("$winusernew$", true);
        }
        public detailOpt(vals: string) {
            urlFile.Core.AkUrl.Current().openUrl("$winuserdetail$" + vals + "$", true);
        }
        public updateOpt(vals: string) {
            urlFile.Core.AkUrl.Current().openUrl("$winuserupdate$" + vals + "$", true);
        }

        public delOpt(vals: string) {
            if (confirm("你确定要删除 所选中的数据吗 ？？")) {

                urlFile.Core.AkPost("/RightCloud/UserDetail/delUserDetail", { fids: vals }, (data) => {
                    var _data = data.Data;
                    if (_data == "删除成功") {
                        this.loadPageData(0);
                        utilFile.Core.Util.Noty("数据删除成功!");
                    }
                });

            }
        }
        public getUserName(): string {
            return this.SearchText;
        }
        public getLgName(): string {
            return this.SearchLgNameText;
        }
        public initData() {
            this.ListData = { Pager: { PageNo: 0, PageSize: 2, TotalCount: 0 }, List: [] };
        }
        public getUserId(): string {
            var _list = this.getSelectValues();
            var _ids = _list.map((n) => n.UserID).join(",");
            return _ids;
        }
        private getSelectValues() {
            var _list: UserInfoData[] = [];
            this.RowList.forEach((r) => {
                var ck = r.SingleCheckVm;
                if (ck.vmDataValueGet() == "true") {
                    _list.push(r.RowData);
                }
            });
            console.log(_list);
            return _list;
        }

        public getData(model?: userinfoDataFile.UserInfo.UserInfoPagerListData): void {
            if (!model) {
                var data = this.ListData;
                data.Pager.TotalCount = 5;
                var menu1 = { UserID: "000001", TrueName: "用户1", Gender: "男", POSITIONJOBID: "医师", FNumber: "200521", FStatusKindId: "在职", FStatusKindName: "", UserName:""};
                var menu2 = { UserID: "000001", TrueName: "用户2", Gender: "男", POSITIONJOBID: "医师", FNumber: "200522", FStatusKindId: "离职", FStatusKindName: "", UserName: ""};
                var menu3 = { UserID: "000001", TrueName: "用户3", Gender: "男", POSITIONJOBID: "医师", FNumber: "200523", FStatusKindId: "休假", FStatusKindName: "", UserName: "" };
                var menu4 = { UserID: "000001", TrueName: "用户4", Gender: "男", POSITIONJOBID: "医师", FNumber: "200524", FStatusKindId: "在职", FStatusKindName: "", UserName: ""};
                var menu5 = { UserID: "000001", TrueName: "用户5", Gender: "男", POSITIONJOBID: "医师", FNumber: "200525", FStatusKindId: "在职", FStatusKindName: "", UserName: ""};
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

        public loadPageData(pageIndex: number, naviTreeId?:string) {
            this.RowList = [];
            this.AllCheck.vmDataValueSet("false");
            this.AllCheck.forceUpdate("");
            var _page = { PageNo: pageIndex };
            var _UserName = this.getUserName();
            var _UserLgName = this.getLgName();
            var _UserParentId = (naviTreeId || naviTreeId == "") ? naviTreeId : this.getNaviTreeFId();
            //var _UserID = (userId || userId == "") ? userId : this.getUserId();
            urlFile.Core.AkPost("/RightCloud/UserDetail/searchUserDetail",
                {
                    pager: JSON.stringify(_page),
                    trueName: _UserName,
                    userName: _UserLgName,
                    fControlUnitID: _UserParentId //组织机构数
                    //UserID: _UserID
                },
                (a) => {
                    this.RowList = [];
                    var _data: userinfoDataFile.UserInfo.UserInfoPagerListData = a.Data;
                    //-------------
                    this.getData(_data);
                    this.IsChange = true;
                    this.forceUpdate("");
                });
        }
        protected loadPage(callback?: () => any) {
            urlFile.Core.AkPost("/RightCloud/UserDetail/searchUserDetail", {}, (a) => {
                var _data: userinfoDataFile.UserInfo.UserInfoPagerListData = a.Data;
                this.getData(_data);
                if (callback) {
                    callback();
                }
            });
        }
        public checkCheckBox(val: string, checkDom: domFile.Core.DomVm): void {
            window["isHand"] = true;
            var isCheck = false;
            var isAllCheck = true;
            var checkCount = 0;
            if (val == "true") {
                isCheck = true;
            }
            this.RowList.forEach((row) => {
                var chk = row.SingleCheckVm;
                var _val = chk.dataValue();
                if (_val == "true" && checkDom != chk) {
                    isCheck = true;
                    checkCount++;
                }
                if (checkDom == chk) {
                    if (val == "true") {
                        checkCount++;
                    }
                }
            });
            isAllCheck = this.RowList.length == checkCount ? true : false;
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

                this.CheckBoxList.forEach((chk) => {
                    chk.reactDataValueSet(val);
                });

                this.RowList.forEach((row) => {
                    var chk = row.SingleCheckVm;
                    chk.reactDataValueSet(val);
                });
            }
        }
        public buttonClickCommond(obj: buttonFile.ui.ButtonVm) {
            switch (obj.DisplayName) {
                case "新增":
                    this.newOpt();
                    break;
                case "详情":
                    var _list = this.getSelectValues();
                    var _ids = _list.map((n) => n.UserID).join(",");
                    this.detailOpt(_ids);
                    break;
                case "编辑":
                    var _list = this.getSelectValues();
                    var _ids = _list.map((n) => n.UserID).join(",");
                    this.updateOpt(_ids);
                    break;
                case "删除":
                    var _list = this.getSelectValues();
                    var _ids = _list.map((n) => n.UserID).join(",");
                    this.delOpt(_ids);
                    break;
                default:
                    break;
            }
        }
        //组织机构
        public getNaviTreeFId(): string {

            var _str: any = this.NaviTree.dataValue();
            return ;
        }
    }
    export interface UserInfoPagerListData {

        Pager: pagination.tool.Pagination;
        List: Array<UserInfoData>;
    }

    export interface UserInfoData {
        //UserAvatar: string;
        UserID: string;
        TrueName: string;
        Gender: string;
        //FDepartmentID: string;
        POSITIONJOBID: string;
        FNumber: string;
        FStatusKindId: string;
        FStatusKindName: string;
        UserName: string;
    }
    export class UserInfoStates extends basewedPageFile.Web.BaseWebPageStates{}
    export class UserInfoProps extends basewedPageFile.Web.BaseWebPageProps<UserInfoVm> {}
    iocFile.Core.Ioc.Current().RegisterType("USERINFO", basewedPageFile.Web.BaseWebPageVm, UserInfoVm);
}   