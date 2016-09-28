var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../01core/Ioc", "./../../05tool/Pagination", "./../../01core/Url", "./../../04page/BaseWebPage", "./../../02col/03selector/BaseTree", "./../../02col/02Mulite/SingleCheckBox", "./../../05tool/Button", "./MenuGridRow", "./MenuGridButtonRow", "./../../09Web/dom/ThDom"], function (require, exports, React, iocFile, pagination, urlFile, basewedPageFile, baseTreeFile, singleCheckFile, buttonFile, menuRowFile, buttonRowFile, thFile) {
    "use strict";
    var ThDom = thFile.Web.ThDomReact;
    var Right;
    (function (Right) {
        var MenuListPageAction = (function (_super) {
            __extends(MenuListPageAction, _super);
            function MenuListPageAction() {
                _super.apply(this, arguments);
            }
            return MenuListPageAction;
        }(basewedPageFile.Web.BaseWebPageAction));
        Right.MenuListPageAction = MenuListPageAction;
        var MenuListPageReact = (function (_super) {
            __extends(MenuListPageReact, _super);
            function MenuListPageReact() {
                _super.apply(this, arguments);
            }
            MenuListPageReact.prototype.fun_searchBtn = function () {
                //alert(this.props.Vm.SearchText + "_" + this.props.Vm.getNaviMenuTreeFId());
                this.props.Vm.loadPageData(0);
            };
            MenuListPageReact.prototype.fun_Scroll = function (e) {
                var _$obj = $(e.target);
                this.props.Vm.ScrollAuto(_$obj.scrollLeft());
            };
            MenuListPageReact.prototype.fun_seachClearBtn = function () {
                this.props.Vm.SearchText = "";
                this.props.Vm.IsHideClearBtn = true;
                this.props.Vm.loadPageData(0);
                //this.forceUpdate();
            };
            MenuListPageReact.prototype.fun_linkText = function (e) {
                var _val = e.target["value"];
                this.props.Vm.SearchText = _val;
                if (!_val || _val == "") {
                    this.props.Vm.IsHideClearBtn = true;
                }
                else {
                    this.props.Vm.IsHideClearBtn = false;
                }
                this.forceUpdate();
            };
            MenuListPageReact.prototype.pSender = function () {
                var _this = this;
                var searchForm = this.initSearchForm();
                var pager = this.initPager();
                var topPager = React.createElement("div", {className: "topPager"}, pager);
                var bottomPager = React.createElement("div", {className: "bottomPager"}, pager);
                var theader = React.createElement("thead", {className: "thead-default"}, this.initHeader());
                var tbody = this.initBody();
                var table = React.createElement("table", {className: "table table-hover"}, theader, tbody);
                var _ff = React.createElement("div", {className: "Hz-scroll"}, React.createElement("div", {className: "col-lg-2 text-left Hm-toggle-menu"}, React.createElement("h5", null, "菜单"), this.props.Vm.NaviTree.intoDom()), React.createElement("div", {className: "col-lg-10 col-md-12 col-sm-12 col-xs-12 Hm-center-content"}, searchForm, React.createElement("div", {className: "acs-grids"}, topPager, this.initButtons(), React.createElement("div", {className: "Hm-table", onScroll: function (e) { _this.fun_Scroll(e); }}, table), bottomPager)));
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
            };
            MenuListPageReact.prototype.initPager = function () {
                var _this = this;
                var pagerVm = new pagination.tool.PaginationVm();
                var pager = this.props.Vm.ListData.Pager;
                pagerVm.PageNo = pager.PageNo;
                pagerVm.PageSize = pager.PageSize;
                pagerVm.TotalCount = pager.TotalCount;
                pagerVm.PageClickEvent = function (pageIndex) {
                    _this.props.Vm.loadPageData(pageIndex);
                };
                return pagerVm.intoDom();
            };
            MenuListPageReact.prototype.initSearchForm = function () {
                var _this = this;
                return React.createElement("div", {className: "Hm-search-panel"}, React.createElement("form", {className: "clearfix"}, React.createElement("div", {className: "col-lg-6 col-md-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "菜单名：")), React.createElement("div", {className: "Hu-input"}, React.createElement("input", {className: "Hg-width", placeholder: "..", type: "text", value: this.props.Vm.SearchText, onChange: function (e) { _this.fun_linkText(e); }}))), React.createElement("div", {className: "col-xs-12 btn-group-sm text-center"}, React.createElement("a", {className: "btn btn-primary", onClick: function () { _this.fun_searchBtn(); }}, "搜索"), React.createElement("a", {className: "btn btn-primary " + (this.props.Vm.IsHideClearBtn ? " hide" : ""), onClick: function () { _this.fun_seachClearBtn(); }}, "清空"))));
            };
            ;
            MenuListPageReact.prototype.getThDomVM = function (w) {
                var _ther = new thFile.Web.ThDomVm();
                if (w) {
                    _ther.Width = w;
                }
                return _ther;
            };
            MenuListPageReact.prototype.initHeader = function () {
                return React.createElement("tr", {className: "ACT-HEADER MEMBER"}, React.createElement("th", {className: "thCheckAll text-center acsWidth3-5 " + (this.props.Vm.IsAcsRelative ? " Hf-relative Hf-table-th  " : ""), style: { left: this.props.Vm.LeftNum }}, this.props.Vm.AllCheck.intoDom()), React.createElement("th", {className: "hide"}, React.createElement("span", null, "主键")), React.createElement(ThDom, {children: null, Vm: this.getThDomVM(200)}, React.createElement("span", null, "菜单名")), React.createElement(ThDom, {children: null, Vm: this.getThDomVM(150)}, React.createElement("span", null, "上级菜单")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "权值")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "菜单类别")), React.createElement(ThDom, {children: null, Vm: this.getThDomVM(200)}, React.createElement("span", null, "更新时间")));
            };
            ;
            MenuListPageReact.prototype.createButton = function (displayName) {
                var _this = this;
                var btnVm = new buttonFile.ui.ButtonVm();
                btnVm.DisplayName = displayName;
                btnVm.KindCss = "btn-xs btn-primary";
                if (displayName == "删除" || displayName == "详情" || displayName == "编辑") {
                    btnVm.NoEnable = true;
                }
                if (displayName != "新增") {
                    this.props.Vm.BtnList.push(btnVm);
                }
                btnVm.ClickFun = function (a) {
                    _this.props.Vm.buttonClickCommond(a);
                };
                return btnVm.intoDom();
            };
            MenuListPageReact.prototype.createSingleCheckBox = function (obj) {
                var _this = this;
                var singleCheckVm = new singleCheckFile.ui.SingleCheckBoxVm();
                singleCheckVm.Tag = obj;
                this.props.Vm.CheckBoxList.push(singleCheckVm);
                singleCheckVm.ChangeEventFun = function (val, col) {
                    _this.props.Vm.checkCheckBox(val, col);
                    return true;
                };
                return singleCheckVm.intoDom();
            };
            MenuListPageReact.prototype.initButtons = function () {
                return React.createElement("div", {className: "Hm-button-bar"}, React.createElement("div", {className: "btn-group "}, this.createButton("删除"), this.createButton("详情"), this.createButton("编辑")), React.createElement("div", {className: "btn-group m-l-xl"}, this.createButton("新增")));
            };
            MenuListPageReact.prototype.initBody = function () {
                var _this = this;
                return React.createElement("tbody", null, this.props.Vm.ListData.List.map(function (data, index) {
                    var rowVm = _this.createGridRow(data, index);
                    return [rowVm, _this.createGridRowButton(_this.MenuGridRowVm)];
                }));
            };
            ;
            MenuListPageReact.prototype.createGridRow = function (data, index) {
                var _this = this;
                var rowVm = new menuRowFile.MenuGridRow.MenuGridRowVm();
                rowVm.RowData = data;
                rowVm.MenuObj = this.props.Vm;
                rowVm.IsAcsRelative = this.props.Vm.IsAcsRelative;
                rowVm.LeftNum = this.props.Vm.LeftNum;
                rowVm.RowNumber = index < 9 ? "0" + (index + 1) : (index + 1).toString();
                this.props.Vm.RowList.push(rowVm);
                rowVm.SingleCheckVm.ChangeEventFun = function (val, col) {
                    _this.props.Vm.checkCheckBox(val, col);
                    rowVm.forceUpdate("");
                    return true;
                };
                rowVm.IsChange = true;
                this.MenuGridRowVm = rowVm;
                return rowVm.intoDom();
            };
            MenuListPageReact.prototype.createGridRowButton = function (rowVm) {
                var buttonRowVm = new buttonRowFile.MenuGridButtonRow.MenuGridButtonRowVm();
                buttonRowVm.Row = rowVm;
                buttonRowVm.IsChange = true;
                return buttonRowVm.intoDom();
            };
            return MenuListPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        Right.MenuListPageReact = MenuListPageReact;
        var MenuListPageVm = (function (_super) {
            __extends(MenuListPageVm, _super);
            function MenuListPageVm() {
                var _this = this;
                _super.call(this);
                this.ReactType = MenuListPageReact;
                this.CheckBoxList = new Array();
                this.BtnList = new Array();
                this.RowList = new Array();
                this.IsHideClearBtn = true;
                this.IsAcsRelative = false;
                this.LeftNum = 0;
                this.Title = "菜单列表";
                this.NaviTree = new baseTreeFile.ui.BaseTreeVm({ IsRootExpand: true });
                this.AllCheck = new singleCheckFile.ui.SingleCheckBoxVm();
                this.AllCheck.ChangeEventFun = function (val, col) {
                    _this.allCheckChecked(val, col);
                    return true;
                };
                this.NaviTree.ChangeEventFun = (function (val, col) {
                    // alert(val);
                    _this.loadPageData(0, val);
                    return true;
                });
                // this.initData();
            }
            MenuListPageVm.prototype.ScrollAuto = function (left) {
                this.IsAcsRelative = left > 0;
                this.LeftNum = left;
                //this.RowList.forEach((r) => {
                //    r.IsAcsRelative = left > 0;
                //    r.LeftNum = left;
                //    r.IsChange = true;
                //});
                this.forceUpdate("");
            };
            MenuListPageVm.prototype.newOpt = function (vals) {
                urlFile.Core.AkUrl.Current().openUrl("$panelmenunew$" + vals + "$", true);
            };
            MenuListPageVm.prototype.detailOpt = function (vals) {
                // var _ids = _list.map((n) => n.FID).join(",");
                urlFile.Core.AkUrl.Current().openUrl("$panelmenudetail$" + vals + "$", true);
            };
            MenuListPageVm.prototype.updateOpt = function (vals) {
                urlFile.Core.AkUrl.Current().openUrl("$panelmenuupdate$" + vals + "$", false);
            };
            MenuListPageVm.prototype.delOpt = function (vals) {
                var _this = this;
                if (confirm("你确定要删除 所选中的数据吗 ？？")) {
                    urlFile.Core.AkPost("/RightCloud/Menu/delMenu", { fids: vals }, function (data) {
                        var _data = data.Data;
                        if (_data == "ok") {
                            _this.loadPageData(0);
                        }
                    });
                }
            };
            MenuListPageVm.prototype.buttonClickCommond = function (obj) {
                switch (obj.DisplayName) {
                    case "新增":
                        var _str = this.getNaviMenuTreeFId();
                        this.newOpt(_str);
                        break;
                    case "详情":
                        var _list = this.getSelectValues();
                        var _ids = _list.map(function (n) { return n.FID; }).join(",");
                        this.detailOpt(_ids);
                        break;
                    case "编辑":
                        var _list = this.getSelectValues();
                        var _ids = _list.map(function (n) { return n.FID; }).join(",");
                        this.updateOpt(_ids);
                        break;
                    case "删除":
                        var _list = this.getSelectValues();
                        var _ids = _list.map(function (n) { return n.FID; }).join(",");
                        this.delOpt(_ids);
                        break;
                    default:
                        break;
                }
            };
            MenuListPageVm.prototype.getNaviMenuTreeFId = function () {
                var _str = this.NaviTree.dataValue();
                return _str;
            };
            MenuListPageVm.prototype.getMenuName = function () {
                return this.SearchText;
            };
            MenuListPageVm.prototype.getSelectValues = function () {
                var _list = [];
                this.RowList.forEach(function (r) {
                    var ck = r.SingleCheckVm;
                    if (ck.vmDataValueGet() == "true") {
                        _list.push(r.RowData);
                    }
                });
                console.log(_list);
                return _list;
            };
            MenuListPageVm.prototype.initData = function () {
                this.ListData = { Pager: { PageNo: 0, PageSize: 2, TotalCount: 0 }, List: [] };
            };
            MenuListPageVm.prototype.checkCheckBox = function (val, checkDom) {
                window["isHand"] = true;
                var isCheck = false;
                var isAllCheck = true;
                var checkedCount = 0;
                if (val == "true") {
                    isCheck = true;
                }
                this.RowList.forEach(function (row) {
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
                this.BtnList.forEach(function (btn) {
                    btn.NoEnable = isCheck ? false : true;
                    btn.forceUpdate("");
                });
                this.AllCheck.vmDataValueSet(isAllCheck ? "true" : "false");
                this.AllCheck.forceUpdate("", function () {
                    window["isHand"] = false;
                });
            };
            MenuListPageVm.prototype.allCheckChecked = function (val, checkDom) {
                if (!window["isHand"]) {
                    //this.CheckBoxList.forEach((chk) => {
                    //    chk.reactDataValueSet(val);
                    //});
                    this.RowList.forEach(function (row) {
                        var chk = row.SingleCheckVm;
                        chk.IsChange = true;
                        chk.reactDataValueSet(val);
                    });
                }
            };
            MenuListPageVm.prototype.getData = function (model) {
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
            };
            MenuListPageVm.prototype.loadPageData = function (pageIndex, naviTreeId) {
                var _this = this;
                this.RowList = [];
                this.AllCheck.vmDataValueSet("false");
                this.AllCheck.forceUpdate("");
                // if (naviTreeId)
                var _MenuParentId = (naviTreeId || naviTreeId == "") ? naviTreeId : this.getNaviMenuTreeFId();
                //  alert(_MenuParentId);
                var _page = { PageNo: pageIndex };
                var _MenuName = this.getMenuName();
                urlFile.Core.AkPost("/RightCloud/Menu/searchMenuDetail", {
                    pager: JSON.stringify(_page),
                    partenId: _MenuParentId,
                    menuName: _MenuName
                }, function (a) {
                    _this.RowList = [];
                    var _data = a.Data;
                    //-------------
                    document.title = _this.Title = "菜单列表，第" + (pageIndex + 1) + "页，总共" + _data.Pager.TotalCount + "条";
                    _this.getData(_data);
                    _this.IsChange = true;
                    var _d0 = new Date();
                    _this.forceUpdate("");
                });
            };
            MenuListPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                var _MenuParentId = this.getNaviMenuTreeFId();
                urlFile.Core.AkPost("/RightCloud/Menu/searchMenuDetail", {}, function (a) {
                    var _data = a.Data;
                    _this.getData(_data);
                    if (callback) {
                        callback();
                    }
                });
            };
            return MenuListPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        Right.MenuListPageVm = MenuListPageVm;
        var MenuListPageProps = (function (_super) {
            __extends(MenuListPageProps, _super);
            function MenuListPageProps() {
                _super.apply(this, arguments);
            }
            return MenuListPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        Right.MenuListPageProps = MenuListPageProps;
        var MenuListPageStates = (function (_super) {
            __extends(MenuListPageStates, _super);
            function MenuListPageStates() {
                _super.apply(this, arguments);
            }
            return MenuListPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        Right.MenuListPageStates = MenuListPageStates;
        iocFile.Core.Ioc.Current().RegisterType("MENUPAGE", basewedPageFile.Web.BaseWebPageVm, MenuListPageVm);
    })(Right = exports.Right || (exports.Right = {}));
});
