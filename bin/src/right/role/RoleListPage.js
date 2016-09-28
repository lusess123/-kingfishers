var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../01core/Ioc", "./../../05tool/Pagination", "./../../01core/Url", "./../../04page/BaseWebPage", "./../../02col/03selector/BaseTree", "./../../02col/02Mulite/SingleCheckBox", "./../../05tool/Button", "./../../09Web/dom/ThDom", "./RoleGridRow", "./RoleGridButtonRow"], function (require, exports, React, iocFile, pagination, urlFile, basewedPageFile, baseTreeFile, singleCheckFile, buttonFile, thFile, roleRowFile, buttonRowFile) {
    "use strict";
    var ThDom = thFile.Web.ThDomReact;
    var Role;
    (function (Role) {
        var RoleListPageAction = (function (_super) {
            __extends(RoleListPageAction, _super);
            function RoleListPageAction() {
                _super.apply(this, arguments);
            }
            return RoleListPageAction;
        }(basewedPageFile.Web.BaseWebPageAction));
        Role.RoleListPageAction = RoleListPageAction;
        var RoleListPageReact = (function (_super) {
            __extends(RoleListPageReact, _super);
            function RoleListPageReact() {
                _super.apply(this, arguments);
            }
            RoleListPageReact.prototype.fun_searchBtn = function () {
                //alert(this.props.Vm.SearchText + "_" + this.props.Vm.getNaviMenuTreeFId());
                this.props.Vm.loadPageData(0);
            };
            RoleListPageReact.prototype.fun_seachClearBtn = function () {
                this.props.Vm.SearchNameText = "";
                this.props.Vm.SearchSginText = "";
                this.props.Vm.IsHideClearBtn = true;
                this.props.Vm.loadPageData(0);
                //this.forceUpdate();
            };
            RoleListPageReact.prototype.fun_linkText = function (e) {
                var _val = e.target["value"];
                this.props.Vm.SearchNameText = _val;
                var role = "";
                if (this.props.Vm.SearchSginText != undefined) {
                    var role = this.props.Vm.SearchSginText;
                }
                if ((role.length == 0 && !_val) || (role.length == 0 && _val == "")) {
                    this.props.Vm.IsHideClearBtn = true;
                }
                else {
                    this.props.Vm.IsHideClearBtn = false;
                }
                this.forceUpdate();
            };
            RoleListPageReact.prototype.fun_linkRoleText = function (e) {
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
            };
            RoleListPageReact.prototype.pSender = function () {
                var searchForm = this.initSearchForm();
                var pager = this.initPager();
                var topPager = React.createElement("div", {className: "topPager"}, pager);
                var bottomPager = React.createElement("div", {className: "bottomPager"}, pager);
                var theader = React.createElement("thead", {className: "thead-default"}, this.initHeader());
                var tbody = this.initBody();
                var table = React.createElement("table", {className: "table table-hover"}, theader, tbody);
                var _ff = React.createElement("div", {className: "acsScroll"}, this.initNavi(), React.createElement("div", {className: "col-lg-10 col-md-12 col-sm-12 col-xs-12 Hm-center-content"}, searchForm, React.createElement("div", {className: "acs-grids"}, topPager, this.initButtons(), React.createElement("div", {className: "Hm-table"}, table), bottomPager)));
                // alert(this.props.Vm.RowList.length + "  "+ this.props.Vm.ListData.List.length);
                return _ff;
            };
            RoleListPageReact.prototype.initNavi = function () {
                this.props.Vm.NaviTree.RegName = "GroupCodeTable";
                return React.createElement("div", {className: "col-lg-2 text-left Hm-toggle-menu"}, React.createElement("h5", null, "组织"), this.props.Vm.NaviTree.intoDom());
            };
            ;
            RoleListPageReact.prototype.initPager = function () {
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
            RoleListPageReact.prototype.initSearchForm = function () {
                var _this = this;
                return React.createElement("div", {className: "Hm-search-panel"}, React.createElement("form", {className: "clearfix"}, React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "角色名称：")), React.createElement("div", {className: "Hu-input"}, React.createElement("input", {className: "Hg-width", placeholder: "..", type: "text", value: this.props.Vm.SearchNameText, onChange: function (e) { _this.fun_linkText(e); }}))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "角色标识：")), React.createElement("div", {className: "Hu-input"}, React.createElement("input", {className: "Hg-width", placeholder: "..", type: "text", value: this.props.Vm.SearchSginText, onChange: function (e) { _this.fun_linkRoleText(e); }}))), React.createElement("div", {className: "col-xs-12 btn-group-sm text-center"}, React.createElement("a", {className: "btn btn-primary", onClick: function () { _this.fun_searchBtn(); }}, "搜索"), React.createElement("a", {className: "btn btn-primary " + (this.props.Vm.IsHideClearBtn ? "hide" : ""), onClick: function () { _this.fun_seachClearBtn(); }}, "清空"))));
            };
            ;
            RoleListPageReact.prototype.getThDomVM = function (w) {
                var _ther = new thFile.Web.ThDomVm();
                if (w) {
                    _ther.Width = w;
                }
                return _ther;
            };
            RoleListPageReact.prototype.initHeader = function () {
                return React.createElement("tr", {className: "ACT-HEADER MEMBER"}, React.createElement("th", {className: "thCheckAll text-center acsWidth3-5 ", style: { width: "6rem" }}, this.props.Vm.AllCheck.intoDom()), React.createElement("th", {className: "hide"}, React.createElement("span", null, "主键")), React.createElement(ThDom, {children: null, Vm: this.getThDomVM(200)}, React.createElement("span", null, "角色名称")), React.createElement(ThDom, {children: null, Vm: this.getThDomVM(150)}, React.createElement("span", null, "角色标识")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "组织机构")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "更新时间")));
            };
            ;
            RoleListPageReact.prototype.createButton = function (displayName, isDataBtn) {
                var _this = this;
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
                btnVm.ClickFun = function (a) {
                    _this.props.Vm.buttonClickCommond(a);
                };
                return btnVm.intoDom();
            };
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
            RoleListPageReact.prototype.initButtons = function () {
                return React.createElement("div", {className: "Hm-button-bar"}, React.createElement("div", {className: "btn-group "}, this.createButton("分配权限", true), this.createButton("查看权限", true), this.createButton("删除", true), this.createButton("详情", true), this.createButton("编辑", true)), React.createElement("div", {className: "btn-group m-l-xl"}, this.createButton("新增", false)));
            };
            RoleListPageReact.prototype.initBody = function () {
                var _this = this;
                return React.createElement("tbody", null, this.props.Vm.ListData.List.map(function (data, index) {
                    var rowVm = _this.createGridRow(data, index);
                    return [rowVm, _this.createGridRowButton(_this.GridRowVm)];
                }));
            };
            ;
            RoleListPageReact.prototype.createGridRow = function (data, index) {
                var _this = this;
                var rowVm = new roleRowFile.RoleGridRow.RoleGridRowVm();
                rowVm.RowData = data;
                rowVm.RoleObj = this.props.Vm;
                rowVm.RowNumber = index < 9 ? "0" + (index + 1) : (index + 1).toString();
                this.props.Vm.RowList.push(rowVm);
                rowVm.SingleCheckVm.ChangeEventFun = function (val, col) {
                    _this.props.Vm.checkCheckBox(val, col);
                    rowVm.forceUpdate("");
                    return true;
                };
                rowVm.IsChange = true;
                this.GridRowVm = rowVm;
                return rowVm.intoDom();
            };
            RoleListPageReact.prototype.createGridRowButton = function (rowVm) {
                var buttonRowVm = new buttonRowFile.RoleGridButtonRow.RoleGridButtonRowVm();
                buttonRowVm.Row = rowVm;
                buttonRowVm.IsChange = true;
                return buttonRowVm.intoDom();
            };
            return RoleListPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        Role.RoleListPageReact = RoleListPageReact;
        var RoleListPageVm = (function (_super) {
            __extends(RoleListPageVm, _super);
            function RoleListPageVm() {
                var _this = this;
                _super.call(this);
                this.ReactType = RoleListPageReact;
                this.BtnList = new Array();
                this.RowList = new Array();
                this.IsHideClearBtn = true;
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
            RoleListPageVm.prototype.newOpt = function (vals) {
                urlFile.Core.AkUrl.Current().openUrl("$panelrolenew$" + vals + "$", true);
            };
            RoleListPageVm.prototype.detailOpt = function (vals) {
                // var _ids = _list.map((n) => n.FID).join(",");
                urlFile.Core.AkUrl.Current().openUrl("$panelroledetail$" + vals + "$", true);
            };
            RoleListPageVm.prototype.updateOpt = function (vals) {
                urlFile.Core.AkUrl.Current().openUrl("$panelroleupdate$" + vals + "$", true);
            };
            RoleListPageVm.prototype.grantOpt = function (vals) {
                var valArr = vals.split(",");
                if (valArr.length > 1) {
                    alert("只能选择一个角色分配权限");
                    return;
                }
                urlFile.Core.AkUrl.Current().openUrl("$winrolegrant$" + vals + "$", true);
            };
            RoleListPageVm.prototype.delOpt = function (vals) {
                var _this = this;
                if (confirm("你确定要删除 所选中的数据吗 ？？")) {
                    urlFile.Core.AkPost("/RightCloud/Role/delRole", { fids: vals }, function (data) {
                        var _data = data.Content;
                        if (_data == "ok") {
                            _this.loadPageData(0);
                        }
                    });
                }
            };
            RoleListPageVm.prototype.rightPage = function (vals) {
                var valArr = vals.split(",");
                if (valArr.length > 1) {
                    alert("只能查看一个角色的权限");
                    return;
                }
                urlFile.Core.AkUrl.Current().openUrl("$panelRoleRightDetailPage$" + vals + "$", true);
            };
            RoleListPageVm.prototype.buttonClickCommond = function (obj) {
                switch (obj.DisplayName) {
                    case "新增":
                        var _str = this.getNaviTreeFId();
                        this.newOpt(_str);
                        break;
                    case "详情":
                        var _list = this.getSelectValues();
                        var _ids = _list.map(function (n) { return n.RoleID; }).join(",");
                        this.detailOpt(_ids);
                        break;
                    case "编辑":
                        var _list = this.getSelectValues();
                        var _ids = _list.map(function (n) { return n.RoleID; }).join(",");
                        this.updateOpt(_ids);
                        break;
                    case "删除":
                        var _list = this.getSelectValues();
                        var _ids = _list.map(function (n) { return n.RoleID; }).join(",");
                        this.delOpt(_ids);
                        break;
                    case "分配权限":
                        var _list = this.getSelectValues();
                        var _ids = _list.map(function (n) { return n.RoleID; }).join(",");
                        this.grantOpt(_ids);
                        break;
                    case "查看权限":
                        var _list = this.getSelectValues();
                        var _ids = _list.map(function (n) { return n.RoleID; }).join(",");
                        this.rightPage(_ids);
                        break;
                    default:
                        break;
                }
            };
            RoleListPageVm.prototype.getNaviTreeFId = function () {
                var _str = this.NaviTree.dataValue();
                return _str;
            };
            //public getMenuName(): string {
            //    return this.SearchText;
            //}
            //public getSearchText(): dataFile.Role.ISearchData {
            //    return this.SearchData;
            //}
            RoleListPageVm.prototype.getSelectValues = function () {
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
            RoleListPageVm.prototype.initData = function () {
                this.ListData = { Pager: { PageNo: 0, PageSize: 2, TotalCount: 0, TableName: "", IsASC: false, DataTime: null, SortName: "" }, List: [] };
            };
            RoleListPageVm.prototype.checkCheckBox = function (val, checkDom) {
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
            RoleListPageVm.prototype.allCheckChecked = function (val, checkDom) {
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
            RoleListPageVm.prototype.getData = function (model) {
                if (!model) {
                    var data = this.ListData;
                    data.Pager.TotalCount = 5;
                }
                else {
                    this.ListData = { Pager: null, List: [] };
                    this.ListData.Pager = model.Pager;
                    this.ListData.List = model.List;
                }
            };
            RoleListPageVm.prototype.loadPageData = function (pageIndex, naviTreeId) {
                var _this = this;
                this.RowList = [];
                this.AllCheck.vmDataValueSet("false");
                this.AllCheck.forceUpdate("");
                // if (naviTreeId)
                var _unitId = (naviTreeId || naviTreeId == "") ? naviTreeId : this.getNaviTreeFId();
                //  alert(_MenuParentId);
                var _page = { PageNo: pageIndex };
                var _roleName = this.SearchNameText;
                var _roleSign = this.SearchSginText;
                urlFile.Core.AkPost("/RightCloud/Role/searchRoleDetail", {
                    pager: JSON.stringify(_page),
                    FControlUnitID: _unitId,
                    roleName: _roleName,
                    roleSign: _roleSign
                }, function (a) {
                    _this.RowList = [];
                    var _data = a.Data;
                    //-------------
                    _this.getData(_data);
                    _this.IsChange = true;
                    _this.forceUpdate("");
                });
            };
            RoleListPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                var _MenuParentId = this.getNaviTreeFId();
                urlFile.Core.AkPost("/RightCloud/Role/searchRoleDetail", {}, function (a) {
                    var _data = a.Data;
                    _this.getData(_data);
                    if (callback) {
                        callback();
                    }
                });
            };
            return RoleListPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        Role.RoleListPageVm = RoleListPageVm;
        var RoleListPageProps = (function (_super) {
            __extends(RoleListPageProps, _super);
            function RoleListPageProps() {
                _super.apply(this, arguments);
            }
            return RoleListPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        Role.RoleListPageProps = RoleListPageProps;
        var RoleListPageStates = (function (_super) {
            __extends(RoleListPageStates, _super);
            function RoleListPageStates() {
                _super.apply(this, arguments);
            }
            return RoleListPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        Role.RoleListPageStates = RoleListPageStates;
        iocFile.Core.Ioc.Current().RegisterType("ROLE", basewedPageFile.Web.BaseWebPageVm, RoleListPageVm);
    })(Role = exports.Role || (exports.Role = {}));
});
