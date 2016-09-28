// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
import domFile = require("./../../../01core/0Dom");
import iocFile = require("./../../../01core/Ioc");
import utilFile = require("./../../../01core/Util");
import urlFile = require("./../../../01core/Url");
import baseWebPageFile = require("./../../../04page/BaseWebPage");
import dataFile = require("./Data");
import RowFile = require("./xbgGridRow");
import textFile = require("./../../../02col/01single/Text");
import React = require("react");
import thFile = require("./../../../09Web/dom/ThDom");
import pagination = require("./../../../05tool/Pagination");
import ReactDOM = require("react-dom");
import buttonRowFile = require("./xbgGridButtonRow");
import buttonFile = require("./../../../05tool/Button");
import singleCheckFile = require("./../../../02col/02Mulite/SingleCheckBox");

import ThDom = thFile.Web.ThDomReact;
import comboFile = require("./../../../02col/02Mulite/Combo");

export module xbgTestPage {
    export class xbgTestPageAction extends baseWebPageFile.Web.BaseWebPageAction {
    }

    export class xbgTestPageReact extends baseWebPageFile.Web.BaseWebPageReact<xbgTestPageProps, xbgTestPageStates, xbgTestPageAction> implements domFile.Core.IReact {

        public state = new xbgTestPageStates();


        public pSender(): React.ReactElement<any> {
            var search = this.initSearchForm();
            var tbody = this.initBody();
            var pager = this.initPager();
            var topPager = <div className="topPager">{pager}</div>;
            var theader = <thead className="thead-default">
                {this.initHeader() }
            </thead>;
            var table = <table className="table table-hover">{theader}{tbody}</table>;
            return (<div className="1">
                {search}
                <div className="button-bar">{this.initButtons() }</div>
                {topPager}
                <div className="Hm-table">{table}</div>
            </div >

            );
        }

        //创建搜索栏
        public initSearchForm(): React.ReactElement<any> {
            return <div className="Hm-search-panel">
                <form className="clearfix">
                    <div className="col-lg-6 col-sm-12 col-xs-12">

                        <div className="pull-left Hu-label"><label  className="pull-right">角色名称：</label></div>
                        <div className="pull-left Hu-label"><input placeholder=".." type="text" value={this.props.Vm.SearchNameText} onChange={e => { this.fun_linkText(e) } } ></input></div>
                    </div>
                    <div className="col-lg-6 col-sm-12 col-xs-12">
                        <div className="pull-left Hu-label"><label  className="pull-right">角色标识：</label></div>
                        <div className="pull-left Hu-input"><input placeholder=".." type="text" value={this.props.Vm.SearchSignText} onChange={(e) => { this.fun_linkRoleText(e); } } ></input></div>
                    </div>

                    <div className="col-xs-12 text-center">

                        <a  className="btn btn-primary btn-sm" onClick={() => { this.fun_searchBtn(); } }>搜索</a>
                        <a  className={"btn btn-sm btn-primary " + (this.props.Vm.IsHideClearBtn ? "hide" : "") } onClick={() => { this.fun_seachClearBtn(); } } >清空</a>

                    </div>
                </form>
            </div>
        };

        //获取输入的值
        private fun_linkText(e) {
            var _val = e.target["value"];
            this.props.Vm.SearchNameText = _val;
            var role = "";
            if (this.props.Vm.SearchSignText != undefined) {
                var role = this.props.Vm.SearchSignText;
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
            this.props.Vm.SearchSignText = _val;
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
        //点击搜索
        private fun_searchBtn() {
            //alert(this.props.Vm.SearchText + "_" + this.props.Vm.getNaviMenuTreeFId());
            this.props.Vm.loadPageData(0);
        }
        //点击清空
        private fun_seachClearBtn() {
            this.props.Vm.SearchNameText = "";
            this.props.Vm.SearchSignText = "";
            this.props.Vm.IsHideClearBtn = true;
            this.props.Vm.loadPageData(0);
            //this.forceUpdate();
        }
        //初始化按钮
        public initButtons(): React.ReactElement<any> {
            return <div className="btn-group">
                {this.createButton("新增", false) }
                {this.createButton("删除", true) }
                {this.createButton("详情", true) }
                {this.createButton("编辑", true) }
            </div>
        }

        //创建按钮
        public createButton(displayName: string, isDataBtn: boolean): React.ReactElement<any> {
            var btnVm = new buttonFile.ui.ButtonVm();
            btnVm.DisplayName = displayName;
            if (isDataBtn) {
                btnVm.NoEnable = true;
                this.props.Vm.BtnList.push(btnVm);
            }

            btnVm.ClickFun = (a) => {
                this.buttonClickCommad(a);
            }
            return btnVm.intoDom();
        }
        //是否隐藏div
        private fun_titleMasterClick() {
            this.props.Vm.IsMasterHide = !this.props.Vm.IsMasterHide;
            this.forceUpdate();

        }
        //提交
        //public Submits() {
        //    var roleName = this.props.Vm.RoleData.RoleName;
        //    var date = this.props.Vm.RoleData.Date;
        //    var roleSign = this.props.Vm.RoleData.RoleSign;
        //    var ff = this.props.Vm.FControlUnitNameCombo.vmDataValueGet();
        //    var _list = this.getSelectValues();
        //    var _ids = _list.map((n) => n.RoleID).join(",");
        //    urlFile.Core.AkPost("/RightCloud/RightConfig/GroupSubmit", { RoleName: roleName, Date: date, RoleSign: roleSign }, (data) => {
        //        alert("dd");
        //        alert(ff);
        //        utilFile.Core.Util.Noty("数据编辑成功");
        //        //urlFile.Core.AkUrl.Current().openUrl('', false, () => { })
        //        //页面刷新
        //        urlFile.Core.AkUrl.Current().openUrl(
        //            "$xbgTestPage$" + _ids + "$",
        //            false,
        //            () => { }
        //        );
        //    })
        //}
        public GridRowVm: RowFile.RoleGridRow.RoleGridRowVm;
        public initBody(): React.ReactElement<any> {
            return <tbody>
                {
                    this.props.Vm.ListData.List.map((data, index) => {
                        var rowVm = this.createGridRow(data, index);
                        return [rowVm, this.createGridRowButton(this.GridRowVm)];
                    })
                }</tbody>;
        };
        //根据数据创建每一行
        public createGridRow(data: any, index: number): React.ReactElement<any> {
            var rowVm = new RowFile.RoleGridRow.RoleGridRowVm();
            rowVm.RowData = data;
            rowVm.RoleObj = this.props.Vm;
            rowVm.RowNumber = index < 9 ? "0" + (index + 1) : (index + 1).toString();
            this.props.Vm.RowList.push(rowVm);
            rowVm.SingleCheckVm.ChangeEventFun = (val, col) => {
                this.props.Vm.checkCheckBox(val, col);
                rowVm.forceUpdate("");
                return true;
            }
            //分页
            rowVm.IsChange = true;
            this.GridRowVm = rowVm;

            return rowVm.intoDom();

        }
        //创建每行的操作按钮
        public createGridRowButton(rowVm: RowFile.RoleGridRow.RoleGridRowVm): React.ReactElement<any> {
            var buttonRowVm = new buttonRowFile.xbgGridButtonRow.xbgGridButtonRowVm();
            buttonRowVm.Row = rowVm;
            buttonRowVm.IsChange = true;
            return buttonRowVm.intoDom();
        }
        //创建表头
        private getThDomVM(w?: number) {
            var _ther = new thFile.Web.ThDomVm();
            if (w) {
                _ther.Width = w;
            }
            return _ther;
        }

        //表头
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
        //分页导航栏
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
        //获得单选框的对应的值
        public getSelectValues() {
            var _list: dataFile.Role.IRoleData[] = [];

            this.props.Vm.RowList.forEach((r) => {
                var ck = r.SingleCheckVm;
                if (ck.vmDataValueGet() == "true") {
                    _list.push(r.RowData);
                }
            });
            return _list;
        }
        //按钮调用方法
        public buttonClickCommad(obj: buttonFile.ui.ButtonVm) {
            switch (obj.DisplayName) {
                case "新增":
                    var _str = "";
                    alert(_str);
                    this.props.Vm.newOpt(_str);
                    break;
                case "详情":
                    var list = this.getSelectValues();
                    var ids = list.map((a) => a.RoleID).join(",");
                    alert(ids);
                    this.props.Vm.detailOpt(ids);
                    break;
                case "编辑":
                    var list = this.getSelectValues();
                    var ids = list.map(a => a.RoleID).join(",");
                    alert("编辑ID是：" + ids);
                    this.props.Vm.updateOpt(ids);
                    break;
                case "删除":
                    var list = this.getSelectValues();
                    var ids = list.map(a => a.RoleID).join(",");
                    alert("删除ID是:" + ids);
                    this.props.Vm.delOpt(ids);
                    break;
            }
        }


    }




    export class xbgTestPageVm extends baseWebPageFile.Web.BaseWebPageVm {
        public ReactType = xbgTestPageReact;
        public ListData: dataFile.Role.RolePagerListData;
        public RoleData: dataFile.Role.IRoleData;
        public RoleNameTextVm: textFile.ui.TextVm;
        public RoleSignTextVm: textFile.ui.TextVm;
        public RowList = new Array<RowFile.RoleGridRow.RoleGridRowVm>();
        public IsMasterHide: boolean;
        public FControlUnitNameCombo: comboFile.ui.ComboVm;
        public BtnList = new Array<buttonFile.ui.ButtonVm>();
        public IsHideClearBtn: boolean = true;
        public SearchNameText: string;
        public SearchSignText: string;
        public SelectBox: singleCheckFile.ui.SingleCheckBoxVm;
        public AllCheck: singleCheckFile.ui.SingleCheckBoxVm;
        public
        constructor() {
            super();
            this.SelectBox = new singleCheckFile.ui.SingleCheckBoxVm();
            this.RoleData = { RoleID: "", RoleSign: "", RoleName: "", FControlUnitName: "11", Description: "", FControlUnitID: "11", Date: "" };
            this.FControlUnitNameCombo = new comboFile.ui.ComboVm();
            var items = [];
            items.push({ Value: 1, Text: "你好" });
            items.push({ Value: 2, Text: "他好" });
            items.push({ Value: 3, Text: "我好" });
            this.FControlUnitNameCombo.ItemList = items;
            this.AllCheck = new singleCheckFile.ui.SingleCheckBoxVm();
            this.AllCheck.ChangeEventFun = (val, col) => {
                this.allCheckChecked(val, col);
                return true;
            }

        }
        public allCheckChecked(val: string, checkDom: domFile.Core.DomVm): void {
            if (!window["isHand"]) {
                this.RowList.forEach((row) => {
                    var chk = row.SingleCheckVm;
                    chk.reactDataValueSet(val);
                    chk.IsChange = true; //更新
                });
            }

        }
        public newOpt(name: string) {
            alert("新增");
            urlFile.Core.AkUrl.Current().openUrl("$panelxbgaddpage$" + name + "$", true);
        }
        public detailOpt(name: string) {
            alert("详情");
            urlFile.Core.AkUrl.Current().openUrl("$panelxbgdetailpage$" + name + "$", true);
        }
        public delOpt(name: string) {
            alert("删除");
            if (confirm("你确定要删除 所选中的数据吗 ？？")) {

                //urlFile.Core.AkPost("/RightCloud/Role/delRole", { fids: vals }, (data) => {
                //    var _data = data.Content;
                //    if (_data == "ok") {
                //        this.loadPageData(0);
                //    }
                //});
            }
            //urlFile.Core.AkUrl.Current().openUrl('');
        }
        public updateOpt(name: string) {
            alert("编辑");
            urlFile.Core.AkUrl.Current().openUrl("$panelxbgupdatepage$" + name + "$", true);
        }
        public initData() {
            this.ListData = { Pager: { PageNo: 0, PageSize: 2, TotalCount: 0, TableName: "", IsASC: false, DataTime: null, SortName: "" }, List: [] };
        }
        //单选框状态
        public checkCheckBox(val: string, checkDom: domFile.Core.DomVm): void {
            window["isHand"] = true;
            var isAllCheck = true;
            var isCheck = false;
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
        //分页导航数据初始化加载
        protected loadPage(callback?: () => any) {
            // var _MenuParentId = this.getNaviTreeFId();
            urlFile.Core.AkPost("/RightCloud/Role/searchRoleDetail", {}, (a) => {
                var _data: dataFile.Role.RolePagerListData = a.Data;
                this.getData(_data);
                if (callback) {
                    callback();
                }
            });
        }

        //分页导航数据加载
        public loadPageData(pageIndex: number, naviTreeId?: string) {
            this.RowList = [];
            //this.AllCheck.vmDataValueSet("false");
            //this.AllCheck.forceUpdate("");

            // if (naviTreeId)
            var _unitId = "";
            //  alert(_MenuParentId);
            var _page = { PageNo: pageIndex };
            var _roleName = this.SearchNameText;
            var _roleSign = this.SearchSignText;

            urlFile.Core.AkPost("/RightCloud/Role/searchRoleDetail",
                {
                    pager: JSON.stringify(_page),
                    FControlUnitID: _unitId,
                    roleName: _roleName,
                    roleSign: _roleSign
                },
                (a) => {
                    this.RowList = [];
                    var _data: dataFile.Role.RolePagerListData = a.Data;

                    this.getData(_data);
                    this.IsChange = true;
                    this.forceUpdate("");
                });
        }
        public getData(model?: dataFile.Role.RolePagerListData): void {
            if (!model) {
                var data = this.ListData;
                data.Pager.TotalCount = 5;
            }
            else {
                this.ListData = { Pager: null, List: [] };
                this.ListData.Pager = model.Pager;
                this.ListData.List = model.List;
            }


        }
    }
    export class xbgTestPageStates extends baseWebPageFile.Web.BaseWebPageStates {
    }
    export class xbgTestPageProps extends baseWebPageFile.Web.BaseWebPageProps<xbgTestPageVm>{
    }

    iocFile.Core.Ioc.Current().RegisterType("xbgTestPage", baseWebPageFile.Web.BaseWebPageVm, xbgTestPageVm);
}