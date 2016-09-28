var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../01core/Ioc", "./../../05tool/Pagination", "./../../01core/Util", "./../../01core/Url", "./../../05tool/Button", "./../../02col/03selector/BaseTree", "./../../04page/BaseWebPage", "./../../02col/02Mulite/SingleCheckBox", "./UserInfoGridRow", "./UserGridButtonRow", "./../../09Web/dom/ThDom"], function (require, exports, React, iocFile, pagination, utilFile, urlFile, buttonFile, baseTreeFile, basewedPageFile, singleCheckFile, userinfoRowFile, buttonRowFile, thFile) {
    "use strict";
    var ThDom = thFile.Web.ThDomReact;
    var UserInfo;
    (function (UserInfo) {
        var UserInfoAction = (function (_super) {
            __extends(UserInfoAction, _super);
            function UserInfoAction() {
                _super.apply(this, arguments);
            }
            return UserInfoAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        UserInfo.UserInfoAction = UserInfoAction;
        var UserInfoReact = (function (_super) {
            __extends(UserInfoReact, _super);
            function UserInfoReact() {
                _super.apply(this, arguments);
                this.state = new UserInfoStates();
            }
            UserInfoReact.prototype.fun_searchBtn = function () {
                //alert(this.props.Vm.SearchText + "_" + this.props.Vm.getNaviMenuTreeFId());
                this.props.Vm.loadPageData(0);
            };
            UserInfoReact.prototype.fun_seachClearBtn = function () {
                this.props.Vm.SearchText = "";
                this.props.Vm.SearchLgNameText = "";
                this.props.Vm.IsHideClearBtn = true;
                this.props.Vm.loadPageData(0);
                //this.forceUpdate();
            };
            UserInfoReact.prototype.fun_linkText = function (e) {
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
            UserInfoReact.prototype.fun_linkLgNameText = function (e) {
                var _val = e.target["value"];
                this.props.Vm.SearchLgNameText = _val;
                if (!_val || _val == "") {
                    this.props.Vm.IsHideClearBtn = true;
                }
                else {
                    this.props.Vm.IsHideClearBtn = false;
                }
                this.forceUpdate();
            };
            UserInfoReact.prototype.pSender = function () {
                var searchForm = this.initSearchForm();
                var pager = this.initPager();
                var tbody = this.initBody();
                var toppager = React.createElement("div", {className: "topPager"}, pager);
                var bottompager = React.createElement("div", {className: "bottomPager"}, pager);
                var theader = this.initHeader();
                //var table = <div>{theader}{tbody}</div> 
                ///*{<div className="acs-toggle-menu acsTextL"><h5>组织机构</h5>{this.props.Vm.NaviTree.intoDom() }</div>}*//*{<th>职位</th>}*/
                return (React.createElement("div", {className: "acsScroll"}, React.createElement("div", {className: "col-lg-12 col-md-12 col-sm-12 col-xs-12 Hm-center-content"}, searchForm, React.createElement("div", {className: "Hm-grids"}, toppager, this.initButtons(), React.createElement("div", {className: "Hm-table"}, React.createElement("table", {className: "table table-hover"}, theader, tbody)), bottompager))));
            };
            UserInfoReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            UserInfoReact.prototype.getThDomVM = function (w) {
                var _ther = new thFile.Web.ThDomVm();
                if (w) {
                    _ther.Width = w;
                }
                return _ther;
            };
            UserInfoReact.prototype.initHeader = function () {
                return (React.createElement("thead", {className: "thead-default"}, React.createElement("tr", {className: "ACT-HEADER MEMBER"}, React.createElement("th", {className: "thCheckAll acsTextC", style: { width: "8rem" }}, this.props.Vm.AllCheck.intoDom()), React.createElement("th", {className: "hide"}, React.createElement("span", null, "主键")), React.createElement(ThDom, {children: null, Vm: this.getThDomVM(200)}, React.createElement("span", null, "用户名")), React.createElement(ThDom, {children: null, Vm: this.getThDomVM(150)}, React.createElement("span", null, "性别")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "工号")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "在职状态")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "登陆名")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "更新时间")))));
            };
            UserInfoReact.prototype.createSingleCheckBox = function (obj) {
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
            UserInfoReact.prototype.initBody = function () {
                var _this = this;
                return React.createElement("tbody", null, this.props.Vm.ListData.List.map(function (data, index) {
                    var rowVm = _this.createGridRow(data, index);
                    return [rowVm, _this.createGridRowButton(_this.UserInfoGridRowVm)];
                }));
            };
            ;
            UserInfoReact.prototype.createGridRow = function (data, index) {
                var _this = this;
                var rowVm = new userinfoRowFile.UserInfoGridRow.UserInfoGridRowVm();
                rowVm.RowData = data;
                rowVm.UserObj = this.props.Vm;
                rowVm.RowNumber = index < 9 ? "0" + (index + 1) : (index + 1).toString();
                this.props.Vm.RowList.push(rowVm);
                rowVm.SingleCheckVm.ChangeEventFun = function (val, col) {
                    _this.props.Vm.checkCheckBox(val, col);
                    rowVm.forceUpdate("");
                    return true;
                };
                this.UserInfoGridRowVm = rowVm;
                return rowVm.intoDom();
            };
            UserInfoReact.prototype.createGridRowButton = function (rowVm) {
                var buttonRowVm = new buttonRowFile.UserGridButtonRow.UserGridButtonRowVm();
                buttonRowVm.Row = rowVm;
                return buttonRowVm.intoDom();
            };
            UserInfoReact.prototype.initPager = function () {
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
            UserInfoReact.prototype.initSearchForm = function () {
                var _this = this;
                return (React.createElement("div", {className: "Hm-search-panel"}, React.createElement("form", {className: "clearfix"}, React.createElement("div", {className: "col-lg-6 col-md-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "用户名：")), React.createElement("div", {className: "Hu-input"}, React.createElement("input", {className: "Hg-width", placeholder: "..", type: "text", value: this.props.Vm.SearchText, onChange: function (e) { _this.fun_linkText(e); }}))), React.createElement("div", {className: "col-lg-6 col-md-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "登陆名：")), React.createElement("div", {className: "Hu-input"}, React.createElement("input", {className: "Hg-width", placeholder: "..", type: "text", value: this.props.Vm.SearchLgNameText, onChange: function (e) { _this.fun_linkLgNameText(e); }}))), React.createElement("div", {className: "col-xs-12 btn-group-sm text-center"}, React.createElement("a", {className: "btn btn-primary", onClick: function () { _this.fun_searchBtn(); }}, "搜索"), React.createElement("a", {className: "btn btn-primary " + (this.props.Vm.IsHideClearBtn ? "hide" : ""), onClick: function () { _this.fun_seachClearBtn(); }}, "清空")))));
            };
            UserInfoReact.prototype.initButtons = function () {
                return React.createElement("div", {className: "Hm-button-bar"}, React.createElement("div", {className: "btn-group "}, this.createButton("删除"), this.createButton("详情"), this.createButton("编辑")), React.createElement("div", {className: "btn-group m-l-xl"}, this.createButton("新增")));
            };
            UserInfoReact.prototype.createButton = function (displayName) {
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
            return UserInfoReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        UserInfo.UserInfoReact = UserInfoReact;
        var UserInfoVm = (function (_super) {
            __extends(UserInfoVm, _super);
            function UserInfoVm() {
                var _this = this;
                _super.call(this);
                this.ReactType = UserInfoReact;
                this.CheckBoxList = new Array();
                this.RowList = new Array();
                this.BtnList = new Array();
                this.IsHideClearBtn = true;
                this.Title = "用户信息";
                this.NaviTree = new baseTreeFile.ui.BaseTreeVm();
                this.NaviTree.RegName = "GroupCodeTable";
                this.AllCheck = new singleCheckFile.ui.SingleCheckBoxVm();
                this.AllCheck.ChangeEventFun = function (val, col) {
                    _this.allCheckChecked(val, col);
                    return true;
                };
                this.NaviTree.ChangeEventFun = (function (val, col) {
                    _this.loadPageData(0, val);
                    return true;
                });
            }
            UserInfoVm.prototype.newOpt = function () {
                urlFile.Core.AkUrl.Current().openUrl("$winusernew$", true);
            };
            UserInfoVm.prototype.detailOpt = function (vals) {
                urlFile.Core.AkUrl.Current().openUrl("$winuserdetail$" + vals + "$", true);
            };
            UserInfoVm.prototype.updateOpt = function (vals) {
                urlFile.Core.AkUrl.Current().openUrl("$winuserupdate$" + vals + "$", true);
            };
            UserInfoVm.prototype.delOpt = function (vals) {
                var _this = this;
                if (confirm("你确定要删除 所选中的数据吗 ？？")) {
                    urlFile.Core.AkPost("/RightCloud/UserDetail/delUserDetail", { fids: vals }, function (data) {
                        var _data = data.Data;
                        if (_data == "删除成功") {
                            _this.loadPageData(0);
                            utilFile.Core.Util.Noty("数据删除成功!");
                        }
                    });
                }
            };
            UserInfoVm.prototype.getUserName = function () {
                return this.SearchText;
            };
            UserInfoVm.prototype.getLgName = function () {
                return this.SearchLgNameText;
            };
            UserInfoVm.prototype.initData = function () {
                this.ListData = { Pager: { PageNo: 0, PageSize: 2, TotalCount: 0 }, List: [] };
            };
            UserInfoVm.prototype.getUserId = function () {
                var _list = this.getSelectValues();
                var _ids = _list.map(function (n) { return n.UserID; }).join(",");
                return _ids;
            };
            UserInfoVm.prototype.getSelectValues = function () {
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
            UserInfoVm.prototype.getData = function (model) {
                if (!model) {
                    var data = this.ListData;
                    data.Pager.TotalCount = 5;
                    var menu1 = { UserID: "000001", TrueName: "用户1", Gender: "男", POSITIONJOBID: "医师", FNumber: "200521", FStatusKindId: "在职", FStatusKindName: "", UserName: "" };
                    var menu2 = { UserID: "000001", TrueName: "用户2", Gender: "男", POSITIONJOBID: "医师", FNumber: "200522", FStatusKindId: "离职", FStatusKindName: "", UserName: "" };
                    var menu3 = { UserID: "000001", TrueName: "用户3", Gender: "男", POSITIONJOBID: "医师", FNumber: "200523", FStatusKindId: "休假", FStatusKindName: "", UserName: "" };
                    var menu4 = { UserID: "000001", TrueName: "用户4", Gender: "男", POSITIONJOBID: "医师", FNumber: "200524", FStatusKindId: "在职", FStatusKindName: "", UserName: "" };
                    var menu5 = { UserID: "000001", TrueName: "用户5", Gender: "男", POSITIONJOBID: "医师", FNumber: "200525", FStatusKindId: "在职", FStatusKindName: "", UserName: "" };
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
            UserInfoVm.prototype.loadPageData = function (pageIndex, naviTreeId) {
                var _this = this;
                this.RowList = [];
                this.AllCheck.vmDataValueSet("false");
                this.AllCheck.forceUpdate("");
                var _page = { PageNo: pageIndex };
                var _UserName = this.getUserName();
                var _UserLgName = this.getLgName();
                var _UserParentId = (naviTreeId || naviTreeId == "") ? naviTreeId : this.getNaviTreeFId();
                //var _UserID = (userId || userId == "") ? userId : this.getUserId();
                urlFile.Core.AkPost("/RightCloud/UserDetail/searchUserDetail", {
                    pager: JSON.stringify(_page),
                    trueName: _UserName,
                    userName: _UserLgName,
                    fControlUnitID: _UserParentId //组织机构数
                }, function (a) {
                    _this.RowList = [];
                    var _data = a.Data;
                    //-------------
                    _this.getData(_data);
                    _this.IsChange = true;
                    _this.forceUpdate("");
                });
            };
            UserInfoVm.prototype.loadPage = function (callback) {
                var _this = this;
                urlFile.Core.AkPost("/RightCloud/UserDetail/searchUserDetail", {}, function (a) {
                    var _data = a.Data;
                    _this.getData(_data);
                    if (callback) {
                        callback();
                    }
                });
            };
            UserInfoVm.prototype.checkCheckBox = function (val, checkDom) {
                window["isHand"] = true;
                var isCheck = false;
                var isAllCheck = true;
                var checkCount = 0;
                if (val == "true") {
                    isCheck = true;
                }
                this.RowList.forEach(function (row) {
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
                this.BtnList.forEach(function (btn) {
                    btn.NoEnable = isCheck ? false : true;
                    btn.forceUpdate("");
                });
                this.AllCheck.vmDataValueSet(isAllCheck ? "true" : "false");
                this.AllCheck.forceUpdate("", function () {
                    window["isHand"] = false;
                });
            };
            UserInfoVm.prototype.allCheckChecked = function (val, checkDom) {
                if (!window["isHand"]) {
                    this.CheckBoxList.forEach(function (chk) {
                        chk.reactDataValueSet(val);
                    });
                    this.RowList.forEach(function (row) {
                        var chk = row.SingleCheckVm;
                        chk.reactDataValueSet(val);
                    });
                }
            };
            UserInfoVm.prototype.buttonClickCommond = function (obj) {
                switch (obj.DisplayName) {
                    case "新增":
                        this.newOpt();
                        break;
                    case "详情":
                        var _list = this.getSelectValues();
                        var _ids = _list.map(function (n) { return n.UserID; }).join(",");
                        this.detailOpt(_ids);
                        break;
                    case "编辑":
                        var _list = this.getSelectValues();
                        var _ids = _list.map(function (n) { return n.UserID; }).join(",");
                        this.updateOpt(_ids);
                        break;
                    case "删除":
                        var _list = this.getSelectValues();
                        var _ids = _list.map(function (n) { return n.UserID; }).join(",");
                        this.delOpt(_ids);
                        break;
                    default:
                        break;
                }
            };
            //组织机构
            UserInfoVm.prototype.getNaviTreeFId = function () {
                var _str = this.NaviTree.dataValue();
                return;
            };
            return UserInfoVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        UserInfo.UserInfoVm = UserInfoVm;
        var UserInfoStates = (function (_super) {
            __extends(UserInfoStates, _super);
            function UserInfoStates() {
                _super.apply(this, arguments);
            }
            return UserInfoStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        UserInfo.UserInfoStates = UserInfoStates;
        var UserInfoProps = (function (_super) {
            __extends(UserInfoProps, _super);
            function UserInfoProps() {
                _super.apply(this, arguments);
            }
            return UserInfoProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        UserInfo.UserInfoProps = UserInfoProps;
        iocFile.Core.Ioc.Current().RegisterType("USERINFO", basewedPageFile.Web.BaseWebPageVm, UserInfoVm);
    })(UserInfo = exports.UserInfo || (exports.UserInfo = {}));
});
