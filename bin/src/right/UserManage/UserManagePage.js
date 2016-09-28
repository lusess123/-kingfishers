var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../01core/Ioc", "./../../02col/02Mulite/SingleCheckBox", "./../../01core/Url", "./../../04page/BaseWebPage", "./../../05tool/Pagination", "./../../05tool/Button", "./../../09Web/dom/ThDom", "./UserManageGridRow", "./UserManageGridButtonRow", "./../../02col/03selector/BaseTree"], function (require, exports, React, iocFile, singleCheckFile, urlFile, basewedPageFile, pagination, buttonFile, thFile, userManageGridRow, buttonRowFile, baseTreeFile) {
    "use strict";
    var ThDom = thFile.Web.ThDomReact;
    var UserManager;
    (function (UserManager) {
        var UserManagerPageAction = (function (_super) {
            __extends(UserManagerPageAction, _super);
            function UserManagerPageAction() {
                _super.apply(this, arguments);
            }
            return UserManagerPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        UserManager.UserManagerPageAction = UserManagerPageAction;
        var UserManagerPageReact = (function (_super) {
            __extends(UserManagerPageReact, _super);
            function UserManagerPageReact() {
                _super.apply(this, arguments);
                this.state = new UserManagerPageStates();
            }
            UserManagerPageReact.prototype.pSender = function () {
                var _this = this;
                var searchform = this.initSearchForm();
                var header = this.initHeader();
                var pager = this.initPager();
                var topPager = React.createElement("div", {className: "topPager"}, pager);
                var bottomPager = React.createElement("div", {className: "bottomPager"}, pager);
                var theader = React.createElement("thead", {className: "thead-default"}, this.initHeader());
                var tbody = this.initBody();
                var table = React.createElement("table", {className: "table table-hover"}, theader, tbody);
                return React.createElement("div", {className: "Hz-scroll"}, React.createElement("div", {className: "col-lg-2 text-left Hm-toggle-menu"}, React.createElement("h5", null, "用户管理"), this.props.Vm.NaviTree.intoDom()), React.createElement("div", {className: "col-lg-10 col-md-12 col-sm-12 col-xs-12 Hm-center-content"}, searchform, React.createElement("div", {className: "Hm-grids"}, topPager, this.initButtons(), React.createElement("div", {className: "Hm-table", onScroll: function (e) { _this.fun_Scroll(e); }}, table), bottomPager)));
            };
            UserManagerPageReact.prototype.fun_Scroll = function (e) {
                var _$obj = $(e.target);
                this.props.Vm.ScrollAuto(_$obj.scrollLeft());
            };
            UserManagerPageReact.prototype.initPager = function () {
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
            UserManagerPageReact.prototype.initSearchForm = function () {
                var _this = this;
                return React.createElement("div", {className: "Hm-search-panel"}, React.createElement("form", {className: "clearfix"}, React.createElement("div", {className: "col-lg-6 col-md-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: " Hu-label"}, React.createElement("label", null, "登录名：")), React.createElement("div", {className: "Hu-input"}, React.createElement("input", {className: "Hg-width", placeholder: "..", type: "text", value: this.props.Vm.UserName_LIKE, onChange: function (e) { _this.fun_linkText(e); }}))), React.createElement("div", {className: "col-lg-6 col-md-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "姓名：")), React.createElement("div", {className: "Hu-input"}, React.createElement("input", {className: "Hg-width", placeholder: "..", type: "text", value: this.props.Vm.TrueName_LIKE, onChange: function (e) { _this.fun_linkNameText(e); }}))), React.createElement("div", {className: "col-xs-12 btn-group-sm text-center"}, React.createElement("a", {className: "btn btn-primary", onClick: function () { _this.fun_searchBtn(); }}, "搜索"), React.createElement("a", {className: "btn btn-primary " + (this.props.Vm.IsHideClearBtn ? "hide" : ""), onClick: function () { _this.fun_seachClearBtn(); }}, "清空"))));
            };
            UserManagerPageReact.prototype.fun_seachClearBtn = function () {
                this.props.Vm.UserName_LIKE = "";
                this.props.Vm.IsHideClearBtn = true;
                this.props.Vm.loadPageData(0);
                //this.forceUpdate();
            };
            UserManagerPageReact.prototype.fun_searchBtn = function () {
                this.props.Vm.loadPageData(0);
            };
            UserManagerPageReact.prototype.fun_linkText = function (e) {
                var _val = e.target["value"];
                this.props.Vm.UserName_LIKE = _val;
                if (!_val || _val == "") {
                    this.props.Vm.IsHideClearBtn = true;
                }
                else {
                    this.props.Vm.IsHideClearBtn = false;
                }
                this.forceUpdate();
            };
            UserManagerPageReact.prototype.fun_linkNameText = function (e) {
                var _val = e.target["value"];
                this.props.Vm.TrueName_LIKE = _val;
                if (!_val || _val == "") {
                    this.props.Vm.IsHideClearBtn = true;
                }
                else {
                    this.props.Vm.IsHideClearBtn = false;
                }
                this.forceUpdate();
            };
            UserManagerPageReact.prototype.initHeader = function () {
                return React.createElement("tr", {className: "ACT-HEADER MEMBER"}, React.createElement("th", {className: "thCheckAll acsTextC" + (this.props.Vm.IsAcsRelative ? " Hf-relative Hf-table-th " : ""), style: { left: this.props.Vm.LeftNum }}, this.props.Vm.AllCheck.intoDom()), React.createElement("th", {className: "hide"}, React.createElement("span", null, "主键")), React.createElement(ThDom, {children: null, Vm: this.getThDomVM(200)}, React.createElement("span", null, "姓名")), React.createElement(ThDom, {children: null, Vm: this.getThDomVM(150)}, React.createElement("span", null, "登录名")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "所在地")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "用户类型")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "创建时间")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "创建人")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "备注")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "手机MEID号")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "组织机构")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "更新时间")));
            };
            UserManagerPageReact.prototype.createButton = function (displayName) {
                var _this = this;
                var btnVm = new buttonFile.ui.ButtonVm();
                btnVm.DisplayName = displayName;
                btnVm.KindCss = "btn-xs btn-primary",
                    this.props.Vm.BtnList.push(btnVm);
                btnVm.NoEnable = true;
                btnVm.ClickFun = function (a) {
                    _this.props.Vm.buttonClickCommond(a);
                };
                return btnVm.intoDom();
            };
            UserManagerPageReact.prototype.getThDomVM = function (w) {
                var _ther = new thFile.Web.ThDomVm();
                if (w) {
                    _ther.Width = w;
                }
                return _ther;
            };
            UserManagerPageReact.prototype.initBody = function () {
                var _this = this;
                return React.createElement("tbody", null, this.props.Vm.ListData.List.map(function (data, index) {
                    var rowVm = _this.createGridRow(data, index);
                    return [rowVm, _this.createGridRowButton(_this.UserManageGridRow)];
                }));
            };
            UserManagerPageReact.prototype.createGridRow = function (date, index) {
                var _this = this;
                var row = new userManageGridRow.UserManageGridRow.UserManageGridRowVm();
                row.RowData = date;
                row.IsAcsRelative = this.props.Vm.IsAcsRelative;
                row.LeftNum = this.props.Vm.LeftNum;
                row.MangeObj = this.props.Vm;
                row.RowNumber = index < 9 ? "0" + (index + 1) : (index + 1).toString();
                this.props.Vm.RowList.push(row);
                row.SingleCheckVm.ChangeEventFun = function (val, col) {
                    _this.props.Vm.checkCheckBox(val, col);
                    row.forceUpdate("");
                    return true;
                };
                row.IsChange = true;
                this.UserManageGridRow = row;
                return row.intoDom();
            };
            UserManagerPageReact.prototype.createGridRowButton = function (rowVm) {
                var buttonRowVm = new buttonRowFile.UserManageGridButtonRow.UserManageGridButtonRowVm();
                buttonRowVm.Row = rowVm;
                buttonRowVm.IsChange = true;
                return buttonRowVm.intoDom();
            };
            UserManagerPageReact.prototype.initButtons = function () {
                return React.createElement("div", {className: "Hm-button-bar"}, React.createElement("div", {className: "btn-group"}, this.createButton("重置密码"), this.createButton("分批分配角色"), this.createButton("删除"), this.createButton("详情"), this.createButton("编辑"), this.createButton("查看权限")));
            };
            return UserManagerPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        UserManager.UserManagerPageReact = UserManagerPageReact;
        var UserManagerPageVm = (function (_super) {
            __extends(UserManagerPageVm, _super);
            function UserManagerPageVm() {
                var _this = this;
                _super.call(this);
                this.ReactType = UserManagerPageReact;
                this.IsHideClearBtn = true; //是否隐藏
                this.BtnList = new Array(); //按钮列表
                this.RowList = new Array(); //row数据的一个集合
                this.IsAcsRelative = false;
                this.LeftNum = 0;
                //GroupCodeTable
                this.NaviTree = new baseTreeFile.ui.BaseTreeVm({ IsRootExpand: true });
                this.AllCheck = new singleCheckFile.ui.SingleCheckBoxVm();
                this.NaviTree.RegName = "GroupCodeTable";
                this.AllCheck.ChangeEventFun = function (val, col) {
                    _this.allCheckChecked(val, col);
                    return true;
                };
                this.NaviTree.ChangeEventFun = (function (val, col) {
                    _this.loadPageData(0, val);
                    return true;
                });
                //this.initData();
            }
            UserManagerPageVm.prototype.ScrollAuto = function (left) {
                this.IsAcsRelative = left > 0;
                this.LeftNum = left;
                //this.RowList.forEach((r) => {
                //    r.IsAcsRelative = left > 0;
                //    r.LeftNum = left;
                //    r.IsChange = true;
                //});
                this.forceUpdate("");
            };
            UserManagerPageVm.prototype.buttonClickCommond = function (obj) {
                switch (obj.DisplayName) {
                    case "分批分配角色":
                        var _list = this.getSelectValues();
                        var _ids = _list.map(function (n) { return n.UserID; }).join(",");
                        var fControl = _list[0].FControlUnitID;
                        this.BatchAddRole(_ids, fControl);
                        break;
                    case "重置密码":
                        var _list = this.getSelectValues();
                        var _ids = _list.map(function (n) { return n.UserID; }).join(",");
                        this.RepasswordOpt(_ids);
                        break;
                    case "编辑":
                        var _list = this.getSelectValues();
                        var _ids = _list.map(function (n) { return n.UserID; }).join(",");
                        this.editOpt(_ids);
                        break;
                    case "删除":
                        var _list = this.getSelectValues();
                        var _ids = _list.map(function (n) { return n.UserID; }).join(",");
                        this.delOpt(_ids);
                        break;
                    case "详情":
                        var _list = this.getSelectValues();
                        var _ids = _list.map(function (n) { return n.UserID; }).join(",");
                        this.detailOpt(_ids);
                        break;
                    case "查看权限":
                        var _list = this.getSelectValues();
                        this.lookright(_list);
                        break;
                    default:
                        break;
                }
            };
            UserManagerPageVm.prototype.getSelectValues = function () {
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
            //重置密码
            UserManagerPageVm.prototype.RepasswordOpt = function (vals) {
                var _this = this;
                urlFile.Core.AkPost("/RightCloud/user/RPassword", { fids: vals }, function (data) {
                    var _data = data.Data;
                    if (_data == "ok") {
                        alert("重置密码成功！");
                        _this.loadPageData(0);
                    }
                });
            };
            //查看权限
            UserManagerPageVm.prototype.lookright = function (list) {
                if (list.length > 1) {
                    alert("请选择一个用户查看权限");
                }
                else {
                    var userid = list[0].UserID;
                    urlFile.Core.AkUrl.Current().openUrl("$panelUSERRIGHTDETAILPAGE$" + userid + "$", true);
                }
            };
            //删除
            UserManagerPageVm.prototype.delOpt = function (vals) {
                var _this = this;
                if (confirm("你确定要删除 所选中的数据吗 ？？")) {
                    urlFile.Core.AkPost("/RightCloud/User/delUser", { fids: vals }, function (data) {
                        var _data = data.Data;
                        alert(data.Content);
                        if (_data == "ok") {
                            _this.loadPageData(0);
                        }
                    });
                }
            };
            UserManagerPageVm.prototype.BatchAddRole = function (vals, fControl) {
                //先检查是否在同一个组织下
                urlFile.Core.AkPost("/RightCloud/User/CheckUser", { fids: vals }, function (data) {
                    if (data.Content == "ok") {
                        urlFile.Core.AkUrl.Current().openUrl("$winUserManagBatchRole$" + vals + "$" + fControl + "$", true);
                    }
                    else {
                        alert("两个用户不是出于同一个组织下，请重新选择");
                    }
                });
            };
            //编辑
            UserManagerPageVm.prototype.editOpt = function (vals) {
                urlFile.Core.AkUrl.Current().openUrl("$winUserManageUpdate$" + vals + "$", true);
            };
            UserManagerPageVm.prototype.detailOpt = function (vals) {
                urlFile.Core.AkUrl.Current().openUrl("$winusermanagedetail$" + vals + "$", true);
            };
            UserManagerPageVm.prototype.checkCheckBox = function (val, checkDom) {
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
            UserManagerPageVm.prototype.getData = function (model) {
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
            };
            //全选
            UserManagerPageVm.prototype.allCheckChecked = function (val, checkDom) {
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
            //根据页数和树形菜单查询数据
            UserManagerPageVm.prototype.loadPageData = function (pageIndex, naviTreeId) {
                var _this = this;
                this.RowList = [];
                this.AllCheck.vmDataValueSet("false");
                this.AllCheck.forceUpdate("");
                var _MenuParentId = (naviTreeId || naviTreeId == "") ? naviTreeId : this.getNaviMenuTreeFId();
                var _page = { PageNo: pageIndex };
                var _MenuName = this.getMenuName();
                var _TrueName = this.getTrueName();
                urlFile.Core.AkPost("/RightCloud/user/searchUserDetail", {
                    pager: JSON.stringify(_page),
                    fControlUnitID: _MenuParentId,
                    userName: _MenuName,
                    trueName: _TrueName
                }, function (a) {
                    _this.RowList = [];
                    var _data = a.Data;
                    //-------------
                    _this.getData(_data);
                    _this.IsChange = true;
                    _this.forceUpdate("");
                });
            };
            UserManagerPageVm.prototype.getMenuName = function () {
                return this.UserName_LIKE;
            };
            UserManagerPageVm.prototype.getTrueName = function () {
                return this.TrueName_LIKE;
            };
            UserManagerPageVm.prototype.getNaviMenuTreeFId = function () {
                var _str = this.NaviTree.dataValue();
                return _str;
            };
            //在基类中调用
            UserManagerPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                urlFile.Core.AkPost("/RightCloud/user/searchUserDetail", {}, function (a) {
                    var _data = a.Data;
                    _this.getData(_data);
                    if (callback) {
                        callback();
                    }
                });
            };
            UserManagerPageVm.prototype.initData = function () {
                this.ListData = { Pager: { PageNo: 0, PageSize: 2, TotalCount: 0, TableName: "ddd", SortName: "ddd", IsASC: false, DataTime: new Date() }, List: [] };
                //  = { Pager: { PageNo: 0, PageSize: 2, TotalCount: 0 }, List: [] };
            };
            return UserManagerPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        UserManager.UserManagerPageVm = UserManagerPageVm;
        var UserManagerPageStates = (function (_super) {
            __extends(UserManagerPageStates, _super);
            function UserManagerPageStates() {
                _super.apply(this, arguments);
            }
            return UserManagerPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        UserManager.UserManagerPageStates = UserManagerPageStates;
        var UserManagerPageProps = (function (_super) {
            __extends(UserManagerPageProps, _super);
            function UserManagerPageProps() {
                _super.apply(this, arguments);
            }
            return UserManagerPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        UserManager.UserManagerPageProps = UserManagerPageProps;
        iocFile.Core.Ioc.Current().RegisterType("UserManagerPage", basewedPageFile.Web.BaseWebPageVm, UserManagerPageVm);
    })(UserManager = exports.UserManager || (exports.UserManager = {}));
});
