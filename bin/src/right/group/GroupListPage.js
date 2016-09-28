var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../01core/Ioc", "./../../01core/Util", "./../../05tool/Pagination", "./../../01core/Url", "./../../04page/BaseWebPage", "./../../02col/02Mulite/SingleCheckBox", "./../../05tool/Button", "./GroupGridRow", "./GroupGridButtonRow", "./../../09Web/dom/ThDom", "./../../02col/03selector/BaseTree", "./GroupRightDetailPage"], function (require, exports, React, iocFile, utilFile, pagination, urlFile, basewedPageFile, singleCheckFile, buttonFile, groupRowFile, buttonRowFile, thFile, baseTreeFile, groupRightDetailPageFile) {
    "use strict";
    var ThDom = thFile.Web.ThDomReact;
    groupRightDetailPageFile;
    var Right;
    (function (Right) {
        var GroupListPageAction = (function (_super) {
            __extends(GroupListPageAction, _super);
            function GroupListPageAction() {
                _super.apply(this, arguments);
            }
            return GroupListPageAction;
        }(basewedPageFile.Web.BaseWebPageAction));
        Right.GroupListPageAction = GroupListPageAction;
        var GroupListPageReact = (function (_super) {
            __extends(GroupListPageReact, _super);
            function GroupListPageReact() {
                _super.apply(this, arguments);
            }
            GroupListPageReact.prototype.fun_searchBtn = function () {
                debugger;
                //alert(this.props.Vm.SearchText + "_" + this.props.Vm.getNaviMenuTreeFId());
                this.props.Vm.loadPageData(0);
            };
            GroupListPageReact.prototype.fun_seachClearBtn = function () {
                this.props.Vm.SearchText = "";
                this.props.Vm.SearchTexts = "";
                this.props.Vm.IsHideClearBtn = true;
                this.props.Vm.loadPageData(0);
                //this.forceUpdate();
            };
            GroupListPageReact.prototype.fun_linkText = function (e) {
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
            GroupListPageReact.prototype.fun_linkTexts = function (e) {
                var _vals = e.target["value"];
                this.props.Vm.SearchTexts = _vals;
                if (!_vals || _vals == "") {
                    this.props.Vm.IsHideClearBtn = true;
                }
                else {
                    this.props.Vm.IsHideClearBtn = false;
                }
                this.forceUpdate();
            };
            GroupListPageReact.prototype.pSender = function () {
                var searchForm = this.initSearchForm();
                var pager = this.initPager();
                var topPager = React.createElement("div", {className: "topPager"}, pager);
                var bottomPager = React.createElement("div", {className: "bottomPager"}, pager);
                var theader = React.createElement("thead", {className: "thead-default"}, this.initHeader());
                var tbody = this.initBody();
                var table = React.createElement("table", {className: "table table-hover"}, theader, tbody);
                var _ff = React.createElement("div", {className: "Hz-scroll"}, React.createElement("div", {className: "col-lg-2 text-left Hm-toggle-menu"}, React.createElement("h5", null, "组织机构"), this.props.Vm.NaviTree.intoDom()), React.createElement("div", {className: "col-lg-10 col-md-12 col-sm-12 col-xs-12 Hm-center-content"}, searchForm, React.createElement("div", {className: "Hm-grids"}, topPager, this.initButtons(), React.createElement("div", {className: "Hm-table"}, table), bottomPager)));
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
            };
            GroupListPageReact.prototype.initPager = function () {
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
            GroupListPageReact.prototype.initSearchForm = function () {
                var _this = this;
                return React.createElement("div", {className: "Hm-search-panel"}, React.createElement("form", {className: "clearfix"}, React.createElement("div", {className: "col-lg-6 col-md-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "机构名：")), React.createElement("div", {className: " Hu-input"}, React.createElement("input", {className: "Hg-width", placeholder: "..", type: "text", value: this.props.Vm.SearchText, onChange: function (e) { _this.fun_linkText(e); }}))), React.createElement("div", {className: "col-lg-6 col-md-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "机构编码: ")), React.createElement("div", {className: "Hu-input"}, React.createElement("input", {className: "Hg-width", placeholder: "..", type: "text", value: this.props.Vm.SearchTexts, onChange: function (e) { _this.fun_linkTexts(e); }}))), React.createElement("div", {className: "col-xs-12 btn-group-sm text-center"}, React.createElement("a", {className: "btn btn-primary", onClick: function () { _this.fun_searchBtn(); }}, "搜索"), React.createElement("a", {className: "btn btn-primary " + (this.props.Vm.IsHideClearBtn ? "hide" : ""), onClick: function () { _this.fun_seachClearBtn(); }}, "清空"))));
            };
            ;
            GroupListPageReact.prototype.getThDomVM = function (w) {
                var _ther = new thFile.Web.ThDomVm();
                if (w) {
                    _ther.Width = w;
                }
                return _ther;
            };
            GroupListPageReact.prototype.initHeader = function () {
                return React.createElement("tr", {className: "ACT-HEADER MEMBER"}, React.createElement("th", {className: "thCheckAll text-center acsWidth3-5 ", style: { width: "6rem" }}, this.props.Vm.AllCheck.intoDom()), React.createElement("th", {className: "hide"}, React.createElement("span", null, "主键")), React.createElement(ThDom, {children: null, Vm: this.getThDomVM(200)}, React.createElement("span", null, "上级机构")), React.createElement(ThDom, {children: null, Vm: this.getThDomVM(150)}, React.createElement("span", null, "机构名")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "机构编码")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "联系方式")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "更新时间")));
            };
            ;
            GroupListPageReact.prototype.createButton = function (displayName) {
                var _this = this;
                var btnVm = new buttonFile.ui.ButtonVm();
                btnVm.DisplayName = displayName;
                btnVm.KindCss = "btn-xs btn-primary";
                if (displayName == "删除" || displayName == "详情" || displayName == "编辑" || displayName == "分配权限" || displayName == "查看权限") {
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
            GroupListPageReact.prototype.createSingleCheckBox = function (obj) {
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
            GroupListPageReact.prototype.initButtons = function () {
                return React.createElement("div", {className: "Hm-button-bar"}, React.createElement("div", {className: "btn-group"}, this.createButton("删除"), this.createButton("详情"), this.createButton("编辑"), this.createButton("分配权限"), this.createButton("查看权限")), React.createElement("div", {className: "btn-group m-l-xl"}, this.createButton("新增")));
            };
            GroupListPageReact.prototype.initBody = function () {
                var _this = this;
                return React.createElement("tbody", null, this.props.Vm.ListData.List.map(function (data, index) {
                    var rowVm = _this.createGridRow(data, index);
                    return [rowVm, _this.createGridRowButton(_this.GroupGridRowVm)];
                }));
            };
            ;
            GroupListPageReact.prototype.createGridRow = function (data, index) {
                var _this = this;
                var rowVm = new groupRowFile.GroupGridRow.GroupGridRowVm();
                rowVm.RowData = data;
                rowVm.GroupObj = this.props.Vm;
                rowVm.RowNumber = index < 9 ? "0" + (index + 1) : (index + 1).toString();
                this.props.Vm.RowList.push(rowVm);
                rowVm.SingleCheckVm.ChangeEventFun = function (val, col) {
                    _this.props.Vm.checkCheckBox(val, col);
                    var checkedCount = 0;
                    _this.props.Vm.RowList.forEach(function (row) {
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
            };
            GroupListPageReact.prototype.createGridRowButton = function (rowVm) {
                var buttonRowVm = new buttonRowFile.GroupGridButtonRow.GroupGridButtonRowVm(); //MenuGridButtonRow.MenuGridButtonRowVm();
                buttonRowVm.Row = rowVm;
                buttonRowVm.IsChange = true;
                return buttonRowVm.intoDom();
            };
            return GroupListPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        Right.GroupListPageReact = GroupListPageReact;
        var GroupListPageVm = (function (_super) {
            __extends(GroupListPageVm, _super);
            function GroupListPageVm() {
                var _this = this;
                _super.call(this);
                this.ReactType = GroupListPageReact;
                this.CheckBoxList = new Array();
                this.BtnList = new Array();
                this.RowList = new Array();
                this.IsHideClearBtn = true;
                this.NaviTree = new baseTreeFile.ui.BaseTreeVm({ RegName: "GroupCodeTable", IsRootExpand: true });
                //this.NaviTree.RegName = "GroupCodeTable";
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
            GroupListPageVm.prototype.newOpt = function (vals) {
                urlFile.Core.AkUrl.Current().openUrl("$wingroupnew$" + vals + "$", true);
            };
            GroupListPageVm.prototype.detailOpt = function (vals) {
                urlFile.Core.AkUrl.Current().openUrl("$wingroupdetail$" + vals + "$", true);
            };
            GroupListPageVm.prototype.updateOpt = function (vals) {
                urlFile.Core.AkUrl.Current().openUrl("$wingroupupdate$" + vals + "$", false);
            };
            GroupListPageVm.prototype.grantOpt = function (vals) {
                var valArr = vals.split(",");
                if (valArr.length > 1) {
                    alert("只能选择一个角色分配权限");
                    return;
                }
                urlFile.Core.AkUrl.Current().openUrl("$wingroupgrant$" + vals + "$", true);
            };
            GroupListPageVm.prototype.rightPage = function (vals) {
                var valArr = vals.split(",");
                if (valArr.length > 1) {
                    alert("只能查看一个组织的权限");
                    return;
                }
                urlFile.Core.AkUrl.Current().openUrl("$panelGroupRightDetailPage$" + vals + "$", true);
            };
            GroupListPageVm.prototype.delOpt = function (vals) {
                if (confirm("你确定要删除 所选中的数据吗 ？？")) {
                    urlFile.Core.AkPost("/RightCloud/Group/delGroup", { fids: vals }, function (data) {
                        var _data = data.Data;
                        if (_data == "ok") {
                            //urlFile.Core.AkUrl
                            urlFile.Core.AkUrl.Current().openUrl("$GROUP$", false);
                            // this.loadPageData(0);
                            utilFile.Core.Util.Noty("数据删除成功");
                        }
                    });
                }
            };
            GroupListPageVm.prototype.buttonClickCommond = function (obj) {
                switch (obj.DisplayName) {
                    case "新增":
                        var _str = this.getNaviGroupTreeFId();
                        this.newOpt(_str);
                        break;
                    case "详情":
                        var _list = this.getSelectValues();
                        var _ids = _list.map(function (n) { return n.GroupID; }).join(",");
                        this.detailOpt(_ids);
                        break;
                    case "编辑":
                        var _list = this.getSelectValues();
                        var _ids = _list.map(function (n) { return n.GroupID; }).join(",");
                        this.updateOpt(_ids);
                        break;
                    case "删除":
                        var _list = this.getSelectValues();
                        var _ids = _list.map(function (n) { return n.GroupID; }).join(",");
                        this.delOpt(_ids);
                        break;
                    case "分配权限":
                        var _list = this.getSelectValues();
                        var _ids = _list.map(function (n) { return n.GroupID; }).join(",");
                        this.grantOpt(_ids);
                        break;
                    case "查看权限":
                        var _list = this.getSelectValues();
                        var _ids = _list.map(function (n) { return n.GroupID; }).join(",");
                        this.rightPage(_ids);
                    default:
                        break;
                }
            };
            GroupListPageVm.prototype.getNaviGroupTreeFId = function () {
                var _str = this.NaviTree.dataValue();
                return _str;
            };
            GroupListPageVm.prototype.getGroupName = function () {
                return this.SearchText;
            };
            GroupListPageVm.prototype.GetOrgCode = function () {
                return this.SearchTexts;
            };
            GroupListPageVm.prototype.getSelectValues = function () {
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
            GroupListPageVm.prototype.initData = function () {
                this.ListData = { Pager: { PageNo: 0, PageSize: 2, TotalCount: 0 }, List: [] };
            };
            GroupListPageVm.prototype.checkCheckBox = function (val, checkDom) {
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
            GroupListPageVm.prototype.allCheckChecked = function (val, checkDom) {
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
            GroupListPageVm.prototype.getData = function (model) {
                if (!model) {
                    var data = this.ListData;
                    data.Pager.TotalCount = 5;
                    var menu1 = { GroupID: "00100", FParentFName: "列表以", GroupName: "元宝网", GroupCode: "dfsgfd", FPhone: "12345678978", FControlUnitName: "" };
                    var menu2 = { GroupID: "00101", FParentFName: "列表以", GroupName: "比大王", GroupCode: "4dsa46", FPhone: "12345678978", FControlUnitName: "" };
                    var menu3 = { GroupID: "00102", FParentFName: "列表以", GroupName: "信使网络", GroupCode: "4564err", FPhone: "12345678978", FControlUnitName: "" };
                    var menu4 = { GroupID: "00103", FParentFName: "列表以", GroupName: "没有名字", GroupCode: "789ret", FPhone: "12345678978", FControlUnitName: "" };
                    var menu5 = { GroupID: "00104", FParentFName: "列表以", GroupName: "外来租户", GroupCode: "36485tyj", FPhone: "12345678978", FControlUnitName: "" };
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
            };
            GroupListPageVm.prototype.loadPageData = function (pageIndex, naviTreeId) {
                var _this = this;
                this.RowList = [];
                this.AllCheck.vmDataValueSet("false");
                this.AllCheck.forceUpdate("");
                // if (naviTreeId)
                var _GroupParentId = (naviTreeId || naviTreeId == "") ? naviTreeId : this.getNaviGroupTreeFId();
                //  alert(_MenuParentId);
                var _page = { PageNo: pageIndex };
                var _GroupName = this.getGroupName();
                var _orgCode = this.GetOrgCode();
                urlFile.Core.AkPost("/RightCloud/Group/searchGroupDetail", {
                    pager: JSON.stringify(_page),
                    parentID: _GroupParentId,
                    orgName: _GroupName,
                    orgCode: _orgCode
                }, function (a) {
                    _this.RowList = [];
                    var _data = a.Data;
                    //-------------
                    _this.getData(_data);
                    _this.IsChange = true;
                    _this.forceUpdate("");
                });
            };
            GroupListPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                var _GroupParentId = this.getNaviGroupTreeFId();
                urlFile.Core.AkPost("/RightCloud/Group/searchGroupDetail", {}, function (a) {
                    var _data = a.Data;
                    _this.getData(_data);
                    if (callback) {
                        callback();
                    }
                });
            };
            return GroupListPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        Right.GroupListPageVm = GroupListPageVm;
        var GroupListPageProps = (function (_super) {
            __extends(GroupListPageProps, _super);
            function GroupListPageProps() {
                _super.apply(this, arguments);
            }
            return GroupListPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        Right.GroupListPageProps = GroupListPageProps;
        var GroupListPageStates = (function (_super) {
            __extends(GroupListPageStates, _super);
            function GroupListPageStates() {
                _super.apply(this, arguments);
            }
            return GroupListPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        Right.GroupListPageStates = GroupListPageStates;
        iocFile.Core.Ioc.Current().RegisterType("GROUP", basewedPageFile.Web.BaseWebPageVm, GroupListPageVm);
    })(Right = exports.Right || (exports.Right = {}));
});
