import domFile = require("./../../01core/0Dom");import React = require("react");
  
import iocFile = require("./../../01core/Ioc");
 
  
import domCore = domFile.Core;
import utilFile = require("./../01core/Util");
import singleCheckFile = require("./../../02col/02Mulite/SingleCheckBox");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../01core/Url");
import basewedPageFile = require("./../../04page/BaseWebPage");
import pagination = require("./../../05tool/Pagination");
import buttonFile = require("./../../05tool/Button");//按钮
import thFile = require("./../../09Web/dom/ThDom");
import userManageGridRow = require("./UserManageGridRow");
import buttonRowFile = require("./UserManageGridButtonRow");//每行数据
import userManageDataFile = require("./data");
import treeFile = require("./../../02col/03selector/TreeSelector");
import baseTreeFile = require("./../../02col/03selector/BaseTree");

import ThDom = thFile.Web.ThDomReact;


export module UserManager {
    export class UserManagerPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class UserManagerPageReact extends basewedPageFile.Web.BaseWebPageReact<UserManagerPageProps, UserManagerPageStates, UserManagerPageAction> implements domCore.IReact {

        public state = new UserManagerPageStates();
        public UserManageGridRow: userManageGridRow.UserManageGridRow.UserManageGridRowVm;

        public pSender(): React.ReactElement<any> {
            var searchform = this.initSearchForm();
            var header = this.initHeader();
            var pager = this.initPager();
            var topPager = <div className="topPager">{pager}</div>;
            var bottomPager = <div className="bottomPager">{pager}</div>;

            var theader = <thead className="thead-default">
                {this.initHeader() }
            </thead>

            var tbody = this.initBody();

            var table = <table className="table table-hover">{theader}{tbody}</table>;


            return <div className="Hz-scroll">
                <div className="col-lg-2 text-left Hm-toggle-menu"><h5>用户管理</h5>{this.props.Vm.NaviTree.intoDom() }
                </div>
                <div className="col-lg-10 col-md-12 col-sm-12 col-xs-12 Hm-center-content">
                    {searchform}
                    <div className="Hm-grids">
                        {topPager}
                        {this.initButtons() }
                        <div className="Hm-table" onScroll={(e) => { this.fun_Scroll(e) } }>{table}</div>
                        {bottomPager}
                    </div>
                </div>
            </div>;
        }

        private fun_Scroll(e: React.UIEvent) {
            var _$obj = $(e.target);
            this.props.Vm.ScrollAuto(_$obj.scrollLeft());
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
                        <div className=" Hu-label"><label>登录名：</label></div>
                        <div className="Hu-input">
                            <input  className="Hg-width"  placeholder=".." type="text" value={this.props.Vm.UserName_LIKE} onChange={(e) => { this.fun_linkText(e); } }></input></div>
                    </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="Hu-label"><label>姓名：</label></div>
                            <div className="Hu-input">
                            <input  className="Hg-width"  placeholder=".." type="text" value={this.props.Vm.TrueName_LIKE} onChange={(e) => { this.fun_linkNameText(e); } }></input></div>
                     </div>
                       
                        <div className="col-xs-12 btn-group-sm text-center">

                        <a  className="btn btn-primary" onClick={() => { this.fun_searchBtn(); } }>搜索</a>
                        <a  className={"btn btn-primary " + (this.props.Vm.IsHideClearBtn ? "hide" : "") } onClick={() => { this.fun_seachClearBtn(); } } >清空</a>

                    </div>
                </form>
            </div>
        }

        private fun_seachClearBtn() {
            this.props.Vm.UserName_LIKE = "";
            this.props.Vm.IsHideClearBtn = true;
            this.props.Vm.loadPageData(0);
            //this.forceUpdate();
        }

        private fun_searchBtn() {
            this.props.Vm.loadPageData(0);
        }

        private fun_linkText(e) {
            var _val = e.target["value"];
            this.props.Vm.UserName_LIKE = _val;
            if (!_val || _val == "") {
                this.props.Vm.IsHideClearBtn = true;
            }
            else {
                this.props.Vm.IsHideClearBtn = false;
            }
            this.forceUpdate();
        }
        private fun_linkNameText(e) {
            var _val = e.target["value"];
            this.props.Vm.TrueName_LIKE = _val;
            if (!_val || _val == "") {
                this.props.Vm.IsHideClearBtn = true;
            }
            else {
                this.props.Vm.IsHideClearBtn = false;
            }
            this.forceUpdate();
        }

        public initHeader(): React.ReactElement<any> {
            return <tr className="ACT-HEADER MEMBER">
                <th className={"thCheckAll acsTextC" + (this.props.Vm.IsAcsRelative ? " Hf-relative Hf-table-th " : "") } style={{ left: this.props.Vm.LeftNum }}>{this.props.Vm.AllCheck.intoDom() }</th>
                <th className="hide"><span>主键</span></th>
                <ThDom children={null} Vm={this.getThDomVM(200) }><span>姓名</span></ThDom>
                <ThDom children={null} Vm={this.getThDomVM(150) }><span>登录名</span></ThDom>
                <ThDom children={null} Vm={new thFile.Web.ThDomVm() }><span>所在地</span></ThDom>
                <ThDom children={null} Vm={new thFile.Web.ThDomVm() }><span>用户类型</span></ThDom>
                <ThDom children={null} Vm={new thFile.Web.ThDomVm() }><span>创建时间</span></ThDom>
                <ThDom children={null} Vm={new thFile.Web.ThDomVm() }><span>创建人</span></ThDom>
                <ThDom children={null} Vm={new thFile.Web.ThDomVm() }><span>备注</span></ThDom>
                <ThDom children={null} Vm={new thFile.Web.ThDomVm() }><span>手机MEID号</span></ThDom>
                <ThDom children={null} Vm={new thFile.Web.ThDomVm() }><span>组织机构</span></ThDom>
                <ThDom children={null} Vm={new thFile.Web.ThDomVm() }><span>更新时间</span></ThDom>
            </tr>
        }

        private createButton(displayName: string): React.ReactElement<any> {
            var btnVm = new buttonFile.ui.ButtonVm();
            btnVm.DisplayName = displayName;
            btnVm.KindCss="btn-xs btn-primary",
            this.props.Vm.BtnList.push(btnVm);
            btnVm.NoEnable = true;
            btnVm.ClickFun = (a) => {
                this.props.Vm.buttonClickCommond(a);
            };

            return btnVm.intoDom();
        }


        private getThDomVM(w?: number) {
            var _ther = new thFile.Web.ThDomVm();
            if (w) {
                _ther.Width = w;
            }
            return _ther;
        }


        public initBody(): React.ReactElement<any> {
            return <tbody>
                {
                    this.props.Vm.ListData.List.map((data, index) => {
                        var rowVm = this.createGridRow(data, index);
                        return [rowVm, this.createGridRowButton(this.UserManageGridRow)];
                    })
                }
            </tbody>
        }



        public createGridRow(date: any, index: number): React.ReactElement<any> {
            var row = new userManageGridRow.UserManageGridRow.UserManageGridRowVm();
            row.RowData = date;
            row.IsAcsRelative = this.props.Vm.IsAcsRelative;
            row.LeftNum = this.props.Vm.LeftNum;
            row.MangeObj = this.props.Vm;
            row.RowNumber = index < 9 ? "0" + (index + 1) : (index + 1).toString();
            this.props.Vm.RowList.push(row);
            row.SingleCheckVm.ChangeEventFun = (val, col) => {
                this.props.Vm.checkCheckBox(val, col);
                row.forceUpdate("");
                return true;
            }
            row.IsChange = true;
            this.UserManageGridRow = row;
            return row.intoDom();
        }

        public createGridRowButton(rowVm: userManageGridRow.UserManageGridRow.UserManageGridRowVm): React.ReactElement<any> {
            var buttonRowVm = new buttonRowFile.UserManageGridButtonRow.UserManageGridButtonRowVm();
            buttonRowVm.Row = rowVm;
            buttonRowVm.IsChange = true;
            return buttonRowVm.intoDom();
        }

        public initButtons(): React.ReactElement<any> {
            return <div className="Hm-button-bar">
            <div className="btn-group">
               {this.createButton("重置密码") }
               {this.createButton("分批分配角色") }
               {this.createButton("删除") }
               {this.createButton("详情") }
               {this.createButton("编辑") }
               {this.createButton("查看权限") }
            </div>
               </div>
        }


        //protected pInstall(): void {
        //    super.pInstall();
        //    this.props.Vm.getData();
        //    this.forceUpdate();
        //}


    }
    export class UserManagerPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = UserManagerPageReact;

        public UserName_LIKE: string; //登录名
        public TrueName_LIKE: string;  //姓名
        public IsHideClearBtn: boolean = true; //是否隐藏

        public AllCheck: singleCheckFile.ui.SingleCheckBoxVm;//单选框

        public BtnList = new Array<buttonFile.ui.ButtonVm>();//按钮列表

        public ListData: userManageDataFile.UserManager.UserManagerListData;

        public RowList = new Array<userManageGridRow.UserManageGridRow.UserManageGridRowVm>();//row数据的一个集合

        public NaviTree: baseTreeFile.ui.BaseTreeVm;

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

        public buttonClickCommond(obj: buttonFile.ui.ButtonVm)//单选按钮
        {
            switch (obj.DisplayName) {
                case "分批分配角色":
                    var _list = this.getSelectValues();
                    var _ids = _list.map((n) => n.UserID).join(",");
                    var fControl = _list[0].FControlUnitID
                    this.BatchAddRole(_ids, fControl);
                    break;
                case "重置密码":
                    var _list = this.getSelectValues();
                    var _ids = _list.map((n) => n.UserID).join(",");
                    this.RepasswordOpt(_ids);
                    break;
                case "编辑":
                    var _list = this.getSelectValues();
                    var _ids = _list.map((n) => n.UserID).join(",");
                    this.editOpt(_ids);
                    break;
                case "删除":
                    var _list = this.getSelectValues();
                    var _ids = _list.map((n) => n.UserID).join(",");
                    this.delOpt(_ids);
                    break;
                case "详情":
                    var _list = this.getSelectValues();
                    var _ids = _list.map((n) => n.UserID).join(",");
                    this.detailOpt(_ids);
                    break;
                case "查看权限":
                    var _list = this.getSelectValues();
                    this.lookright(_list);
                    break;
                default:
                    break;
            }
        }


        private getSelectValues() {
            var _list: userManageDataFile.UserManager.UserManagerData[] = [];

            this.RowList.forEach((r) => {
                var ck = r.SingleCheckVm;
                if (ck.vmDataValueGet() == "true") {
                    _list.push(r.RowData);
                }
            });
            
            console.log(_list);
            return _list;
        }

        //重置密码
        public RepasswordOpt(vals: string) {
            urlFile.Core.AkPost("/RightCloud/user/RPassword", { fids: vals }, (data) => {
                var _data = data.Data;
                if (_data == "ok") {
                    alert("重置密码成功！");
                    this.loadPageData(0);
                }
            });
        }

        //查看权限
        public lookright(list: userManageDataFile.UserManager.UserManagerData[]) {
            if (list.length > 1) {
                alert("请选择一个用户查看权限");
            } else {
                var userid = list[0].UserID;
                urlFile.Core.AkUrl.Current().openUrl("$panelUSERRIGHTDETAILPAGE$" + userid + "$", true);
            }
        }

        //删除
        public delOpt(vals: string) {
            if (confirm("你确定要删除 所选中的数据吗 ？？")) {
                urlFile.Core.AkPost("/RightCloud/User/delUser", { fids: vals }, (data) => {
                    var _data = data.Data;
                    alert(data.Content);
                    if (_data == "ok") {
                        this.loadPageData(0);
                    }
                });

            }
        }


        public BatchAddRole(vals: string, fControl: string) {
            //先检查是否在同一个组织下
            urlFile.Core.AkPost("/RightCloud/User/CheckUser", { fids: vals }, (data) => {
                if (data.Content == "ok") {
                    urlFile.Core.AkUrl.Current().openUrl("$winUserManagBatchRole$" + vals + "$" + fControl + "$", true);
                } else {
                    alert("两个用户不是出于同一个组织下，请重新选择");
                }

            })
        }

        //编辑
        public editOpt(vals: string) {
            urlFile.Core.AkUrl.Current().openUrl("$winUserManageUpdate$" + vals + "$", true);
        }

        public detailOpt(vals: string) {
            urlFile.Core.AkUrl.Current().openUrl("$winusermanagedetail$" + vals + "$", true);
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


        public getData(model?: userManageDataFile.UserManager.UserManagerListData): void {
            if (!model) {
                var data = this.ListData;
                data.Pager.TotalCount = 5;
                var menu1 = { UserID: "16313413163143", NickName: "邵祺1", UserName: "邵祺User", Area: "建德十八桥", UserKindId: "1", UserKindName: "系统用户", IsActive: true, Creater: "ataws", Remark: "备注", FControlUnitID: "002", FControlUnitName: "树人", CreaterName: "信使管理员", CreateTime: new Date().toTimeString(), MEID: "1231321312", UPDATE_TIME: "dd" };
                var menu2 = { UserID: "26313413163143", NickName: "邵祺2", UserName: "邵祺User", Area: "建德十八桥", UserKindId: "1", UserKindName: "系统用户", IsActive: true, Creater: "ataws", Remark: "备注", FControlUnitID: "002", FControlUnitName: "树人", CreaterName: "信使管理员", CreateTime: new Date().toTimeString(), MEID: "1231321312", UPDATE_TIME: "dd" };
                var menu3 = { UserID: "36313413163143", NickName: "邵祺3", UserName: "邵祺User", Area: "建德十八桥", UserKindId: "1", UserKindName: "系统用户", IsActive: true, Creater: "ataws", Remark: "备注", FControlUnitID: "002", FControlUnitName: "树人", CreaterName: "信使管理员", CreateTime: new Date().toTimeString(), MEID: "1231321312", UPDATE_TIME: "dd" };
                var menu4 = { UserID: "46313413163143", NickName: "邵祺4", UserName: "邵祺User", Area: "建德十八桥", UserKindId: "1", UserKindName: "系统用户", IsActive: true, Creater: "ataws", Remark: "备注", FControlUnitID: "002", FControlUnitName: "树人", CreaterName: "信使管理员", CreateTime: new Date().toTimeString(), MEID: "1231321312", UPDATE_TIME: "dd" };
                var menu5 = { UserID: "56313413163143", NickName: "邵祺5", UserName: "邵祺User", Area: "建德十八桥", UserKindId: "1", UserKindName: "系统用户", IsActive: true, Creater: "ataws", Remark: "备注", FControlUnitID: "002", FControlUnitName: "树人", CreaterName: "信使管理员", CreateTime: new Date().toTimeString(), MEID: "1231321312", UPDATE_TIME: "dd" };
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

        public constructor() {
            super();
            //GroupCodeTable


            this.NaviTree = new baseTreeFile.ui.BaseTreeVm({ IsRootExpand: true });
            this.AllCheck = new singleCheckFile.ui.SingleCheckBoxVm();

            this.NaviTree.RegName = "GroupCodeTable";
            this.AllCheck.ChangeEventFun = (val, col) => {
                this.allCheckChecked(val, col);
                return true;
            };

            this.NaviTree.ChangeEventFun = ((val, col) => {
                this.loadPageData(0, val);
                return true;
            })
            //this.initData();
        }

        //全选
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

        //根据页数和树形菜单查询数据
        public loadPageData(pageIndex: number, naviTreeId?: string) {
            this.RowList = [];
            this.AllCheck.vmDataValueSet("false");
            this.AllCheck.forceUpdate("");

            var _MenuParentId = (naviTreeId || naviTreeId == "") ? naviTreeId : this.getNaviMenuTreeFId();

            var _page = { PageNo: pageIndex };

            var _MenuName = this.getMenuName();
            var _TrueName = this.getTrueName();
            urlFile.Core.AkPost("/RightCloud/user/searchUserDetail",
                {
                    pager: JSON.stringify(_page),
                    fControlUnitID: _MenuParentId,
                    userName: _MenuName,
                    trueName: _TrueName
                },
                (a) => {
                    this.RowList = [];
                    var _data: userManageDataFile.UserManager.UserManagerListData = a.Data;
                    //-------------
                    this.getData(_data);
                    this.IsChange = true;
                    this.forceUpdate("");
                });
        }

        public getMenuName(): string {
            return this.UserName_LIKE;
        }
        public getTrueName(): string {
            return this.TrueName_LIKE;
        }
        public getNaviMenuTreeFId(): string {
            var _str: any = this.NaviTree.dataValue();
            return _str;
        }
        //在基类中调用
        protected loadPage(callback?: () => any) {
            urlFile.Core.AkPost("/RightCloud/user/searchUserDetail", {}, (a) => {
                var _data: userManageDataFile.UserManager.UserManagerListData = a.Data;
                this.getData(_data);
                if (callback) {
                    callback();
                }
            });
        }

        public initData() {
            this.ListData = { Pager: { PageNo: 0, PageSize: 2, TotalCount: 0, TableName: "ddd", SortName: "ddd", IsASC: false, DataTime: new Date() }, List: [] };
            //  = { Pager: { PageNo: 0, PageSize: 2, TotalCount: 0 }, List: [] };

        }

    }


    export class UserManagerPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class UserManagerPageProps extends basewedPageFile.Web.BaseWebPageProps<UserManagerPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("UserManagerPage", basewedPageFile.Web.BaseWebPageVm, UserManagerPageVm);

}

