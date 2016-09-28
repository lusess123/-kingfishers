var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/Ioc", "./../../../01core/Url", "./../../../04page/BaseWebPage", "./xbgGridRow", "react", "./../../../09Web/dom/ThDom", "./../../../05tool/Pagination", "./xbgGridButtonRow", "./../../../05tool/Button", "./../../../02col/02Mulite/SingleCheckBox", "./../../../02col/02Mulite/Combo"], function (require, exports, iocFile, urlFile, baseWebPageFile, RowFile, React, thFile, pagination, buttonRowFile, buttonFile, singleCheckFile, comboFile) {
    "use strict";
    var ThDom = thFile.Web.ThDomReact;
    var xbgTestPage;
    (function (xbgTestPage) {
        var xbgTestPageAction = (function (_super) {
            __extends(xbgTestPageAction, _super);
            function xbgTestPageAction() {
                _super.apply(this, arguments);
            }
            return xbgTestPageAction;
        }(baseWebPageFile.Web.BaseWebPageAction));
        xbgTestPage.xbgTestPageAction = xbgTestPageAction;
        var xbgTestPageReact = (function (_super) {
            __extends(xbgTestPageReact, _super);
            function xbgTestPageReact() {
                _super.apply(this, arguments);
                this.state = new xbgTestPageStates();
            }
            xbgTestPageReact.prototype.pSender = function () {
                var search = this.initSearchForm();
                var tbody = this.initBody();
                var pager = this.initPager();
                var topPager = React.createElement("div", {className: "topPager"}, pager);
                var theader = React.createElement("thead", {className: "thead-default"}, this.initHeader());
                var table = React.createElement("table", {className: "table table-hover"}, theader, tbody);
                return (React.createElement("div", {className: "1"}, search, React.createElement("div", {className: "button-bar"}, this.initButtons()), topPager, React.createElement("div", {className: "Hm-table"}, table)));
            };
            //创建搜索栏
            xbgTestPageReact.prototype.initSearchForm = function () {
                var _this = this;
                return React.createElement("div", {className: "Hm-search-panel"}, React.createElement("form", {className: "clearfix"}, React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "角色名称：")), React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("input", {placeholder: "..", type: "text", value: this.props.Vm.SearchNameText, onChange: function (e) { _this.fun_linkText(e); }}))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "角色标识：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("input", {placeholder: "..", type: "text", value: this.props.Vm.SearchSignText, onChange: function (e) { _this.fun_linkRoleText(e); }}))), React.createElement("div", {className: "col-xs-12 text-center"}, React.createElement("a", {className: "btn btn-primary btn-sm", onClick: function () { _this.fun_searchBtn(); }}, "搜索"), React.createElement("a", {className: "btn btn-sm btn-primary " + (this.props.Vm.IsHideClearBtn ? "hide" : ""), onClick: function () { _this.fun_seachClearBtn(); }}, "清空"))));
            };
            ;
            //获取输入的值
            xbgTestPageReact.prototype.fun_linkText = function (e) {
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
            };
            xbgTestPageReact.prototype.fun_linkRoleText = function (e) {
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
            };
            //点击搜索
            xbgTestPageReact.prototype.fun_searchBtn = function () {
                //alert(this.props.Vm.SearchText + "_" + this.props.Vm.getNaviMenuTreeFId());
                this.props.Vm.loadPageData(0);
            };
            //点击清空
            xbgTestPageReact.prototype.fun_seachClearBtn = function () {
                this.props.Vm.SearchNameText = "";
                this.props.Vm.SearchSignText = "";
                this.props.Vm.IsHideClearBtn = true;
                this.props.Vm.loadPageData(0);
                //this.forceUpdate();
            };
            //初始化按钮
            xbgTestPageReact.prototype.initButtons = function () {
                return React.createElement("div", {className: "btn-group"}, this.createButton("新增", false), this.createButton("删除", true), this.createButton("详情", true), this.createButton("编辑", true));
            };
            //创建按钮
            xbgTestPageReact.prototype.createButton = function (displayName, isDataBtn) {
                var _this = this;
                var btnVm = new buttonFile.ui.ButtonVm();
                btnVm.DisplayName = displayName;
                if (isDataBtn) {
                    btnVm.NoEnable = true;
                    this.props.Vm.BtnList.push(btnVm);
                }
                btnVm.ClickFun = function (a) {
                    _this.buttonClickCommad(a);
                };
                return btnVm.intoDom();
            };
            //是否隐藏div
            xbgTestPageReact.prototype.fun_titleMasterClick = function () {
                this.props.Vm.IsMasterHide = !this.props.Vm.IsMasterHide;
                this.forceUpdate();
            };
            xbgTestPageReact.prototype.initBody = function () {
                var _this = this;
                return React.createElement("tbody", null, this.props.Vm.ListData.List.map(function (data, index) {
                    var rowVm = _this.createGridRow(data, index);
                    return [rowVm, _this.createGridRowButton(_this.GridRowVm)];
                }));
            };
            ;
            //根据数据创建每一行
            xbgTestPageReact.prototype.createGridRow = function (data, index) {
                var _this = this;
                var rowVm = new RowFile.RoleGridRow.RoleGridRowVm();
                rowVm.RowData = data;
                rowVm.RoleObj = this.props.Vm;
                rowVm.RowNumber = index < 9 ? "0" + (index + 1) : (index + 1).toString();
                this.props.Vm.RowList.push(rowVm);
                rowVm.SingleCheckVm.ChangeEventFun = function (val, col) {
                    _this.props.Vm.checkCheckBox(val, col);
                    rowVm.forceUpdate("");
                    return true;
                };
                //分页
                rowVm.IsChange = true;
                this.GridRowVm = rowVm;
                return rowVm.intoDom();
            };
            //创建每行的操作按钮
            xbgTestPageReact.prototype.createGridRowButton = function (rowVm) {
                var buttonRowVm = new buttonRowFile.xbgGridButtonRow.xbgGridButtonRowVm();
                buttonRowVm.Row = rowVm;
                buttonRowVm.IsChange = true;
                return buttonRowVm.intoDom();
            };
            //创建表头
            xbgTestPageReact.prototype.getThDomVM = function (w) {
                var _ther = new thFile.Web.ThDomVm();
                if (w) {
                    _ther.Width = w;
                }
                return _ther;
            };
            //表头
            xbgTestPageReact.prototype.initHeader = function () {
                return React.createElement("tr", {className: "ACT-HEADER MEMBER"}, React.createElement("th", {className: "thCheckAll text-center acsWidth3-5 ", style: { width: "6rem" }}, this.props.Vm.AllCheck.intoDom()), React.createElement("th", {className: "hide"}, React.createElement("span", null, "主键")), React.createElement(ThDom, {children: null, Vm: this.getThDomVM(200)}, React.createElement("span", null, "角色名称")), React.createElement(ThDom, {children: null, Vm: this.getThDomVM(150)}, React.createElement("span", null, "角色标识")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "组织机构")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "更新时间")));
            };
            ;
            //分页导航栏
            xbgTestPageReact.prototype.initPager = function () {
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
            //获得单选框的对应的值
            xbgTestPageReact.prototype.getSelectValues = function () {
                var _list = [];
                this.props.Vm.RowList.forEach(function (r) {
                    var ck = r.SingleCheckVm;
                    if (ck.vmDataValueGet() == "true") {
                        _list.push(r.RowData);
                    }
                });
                return _list;
            };
            //按钮调用方法
            xbgTestPageReact.prototype.buttonClickCommad = function (obj) {
                switch (obj.DisplayName) {
                    case "新增":
                        var _str = "";
                        alert(_str);
                        this.props.Vm.newOpt(_str);
                        break;
                    case "详情":
                        var list = this.getSelectValues();
                        var ids = list.map(function (a) { return a.RoleID; }).join(",");
                        alert(ids);
                        this.props.Vm.detailOpt(ids);
                        break;
                    case "编辑":
                        var list = this.getSelectValues();
                        var ids = list.map(function (a) { return a.RoleID; }).join(",");
                        alert("编辑ID是：" + ids);
                        this.props.Vm.updateOpt(ids);
                        break;
                    case "删除":
                        var list = this.getSelectValues();
                        var ids = list.map(function (a) { return a.RoleID; }).join(",");
                        alert("删除ID是:" + ids);
                        this.props.Vm.delOpt(ids);
                        break;
                }
            };
            return xbgTestPageReact;
        }(baseWebPageFile.Web.BaseWebPageReact));
        xbgTestPage.xbgTestPageReact = xbgTestPageReact;
        var xbgTestPageVm = (function (_super) {
            __extends(xbgTestPageVm, _super);
            function xbgTestPageVm() {
                var _this = this;
                _super.call(this);
                this.ReactType = xbgTestPageReact;
                this.RowList = new Array();
                this.BtnList = new Array();
                this.IsHideClearBtn = true;
                this.SelectBox = new singleCheckFile.ui.SingleCheckBoxVm();
                this.RoleData = { RoleID: "", RoleSign: "", RoleName: "", FControlUnitName: "11", Description: "", FControlUnitID: "11", Date: "" };
                this.FControlUnitNameCombo = new comboFile.ui.ComboVm();
                var items = [];
                items.push({ Value: 1, Text: "你好" });
                items.push({ Value: 2, Text: "他好" });
                items.push({ Value: 3, Text: "我好" });
                this.FControlUnitNameCombo.ItemList = items;
                this.AllCheck = new singleCheckFile.ui.SingleCheckBoxVm();
                this.AllCheck.ChangeEventFun = function (val, col) {
                    _this.allCheckChecked(val, col);
                    return true;
                };
            }
            xbgTestPageVm.prototype.allCheckChecked = function (val, checkDom) {
                if (!window["isHand"]) {
                    this.RowList.forEach(function (row) {
                        var chk = row.SingleCheckVm;
                        chk.reactDataValueSet(val);
                        chk.IsChange = true; //更新
                    });
                }
            };
            xbgTestPageVm.prototype.newOpt = function (name) {
                alert("新增");
                urlFile.Core.AkUrl.Current().openUrl("$panelxbgaddpage$" + name + "$", true);
            };
            xbgTestPageVm.prototype.detailOpt = function (name) {
                alert("详情");
                urlFile.Core.AkUrl.Current().openUrl("$panelxbgdetailpage$" + name + "$", true);
            };
            xbgTestPageVm.prototype.delOpt = function (name) {
                alert("删除");
                if (confirm("你确定要删除 所选中的数据吗 ？？")) {
                }
                //urlFile.Core.AkUrl.Current().openUrl('');
            };
            xbgTestPageVm.prototype.updateOpt = function (name) {
                alert("编辑");
                urlFile.Core.AkUrl.Current().openUrl("$panelxbgupdatepage$" + name + "$", true);
            };
            xbgTestPageVm.prototype.initData = function () {
                this.ListData = { Pager: { PageNo: 0, PageSize: 2, TotalCount: 0, TableName: "", IsASC: false, DataTime: null, SortName: "" }, List: [] };
            };
            //单选框状态
            xbgTestPageVm.prototype.checkCheckBox = function (val, checkDom) {
                window["isHand"] = true;
                var isAllCheck = true;
                var isCheck = false;
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
            //分页导航数据初始化加载
            xbgTestPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                // var _MenuParentId = this.getNaviTreeFId();
                urlFile.Core.AkPost("/RightCloud/Role/searchRoleDetail", {}, function (a) {
                    var _data = a.Data;
                    _this.getData(_data);
                    if (callback) {
                        callback();
                    }
                });
            };
            //分页导航数据加载
            xbgTestPageVm.prototype.loadPageData = function (pageIndex, naviTreeId) {
                var _this = this;
                this.RowList = [];
                //this.AllCheck.vmDataValueSet("false");
                //this.AllCheck.forceUpdate("");
                // if (naviTreeId)
                var _unitId = "";
                //  alert(_MenuParentId);
                var _page = { PageNo: pageIndex };
                var _roleName = this.SearchNameText;
                var _roleSign = this.SearchSignText;
                urlFile.Core.AkPost("/RightCloud/Role/searchRoleDetail", {
                    pager: JSON.stringify(_page),
                    FControlUnitID: _unitId,
                    roleName: _roleName,
                    roleSign: _roleSign
                }, function (a) {
                    _this.RowList = [];
                    var _data = a.Data;
                    _this.getData(_data);
                    _this.IsChange = true;
                    _this.forceUpdate("");
                });
            };
            xbgTestPageVm.prototype.getData = function (model) {
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
            return xbgTestPageVm;
        }(baseWebPageFile.Web.BaseWebPageVm));
        xbgTestPage.xbgTestPageVm = xbgTestPageVm;
        var xbgTestPageStates = (function (_super) {
            __extends(xbgTestPageStates, _super);
            function xbgTestPageStates() {
                _super.apply(this, arguments);
            }
            return xbgTestPageStates;
        }(baseWebPageFile.Web.BaseWebPageStates));
        xbgTestPage.xbgTestPageStates = xbgTestPageStates;
        var xbgTestPageProps = (function (_super) {
            __extends(xbgTestPageProps, _super);
            function xbgTestPageProps() {
                _super.apply(this, arguments);
            }
            return xbgTestPageProps;
        }(baseWebPageFile.Web.BaseWebPageProps));
        xbgTestPage.xbgTestPageProps = xbgTestPageProps;
        iocFile.Core.Ioc.Current().RegisterType("xbgTestPage", baseWebPageFile.Web.BaseWebPageVm, xbgTestPageVm);
    })(xbgTestPage = exports.xbgTestPage || (exports.xbgTestPage = {}));
});
