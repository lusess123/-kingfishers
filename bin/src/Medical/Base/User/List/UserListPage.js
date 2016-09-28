var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/Ioc", "react", "./../../../../01core/Url", "./../../../../04page/BaseWebPage", "./../../../../05tool/Pagination", "./../../../../05tool/Button", "./../../../../01core/Event", "./UserGridFormDom"], function (require, exports, iocFile, React, urlFile, basewedPageFile, pagination, buttonFile, eventFile, gridFormFile) {
    "use strict";
    var UserListPage;
    (function (UserListPage) {
        var UserListPageAction = (function (_super) {
            __extends(UserListPageAction, _super);
            function UserListPageAction() {
                _super.apply(this, arguments);
            }
            return UserListPageAction;
        }(basewedPageFile.Web.BaseWebPageAction));
        UserListPage.UserListPageAction = UserListPageAction;
        var UserListPageReact = (function (_super) {
            __extends(UserListPageReact, _super);
            function UserListPageReact() {
                _super.apply(this, arguments);
                this.state = new UserListPageStates();
            }
            UserListPageReact.prototype.pSender = function () {
                var _ff = React.createElement("div", {className: "acsScroll"}, React.createElement("div", {className: "col-lg-10 col-md-12 col-sm-12 col-xs-12 Hm-center-content"}, React.createElement("div", {className: "acs-grids"}, React.createElement("div", {className: "button-bar"}, this.props.Vm.initButtons()), React.createElement("div", {className: "topPager"}, this.props.Vm.PaginationVm.intoDom()), this.props.Vm.GridFormVm.intoDom(), React.createElement("div", {className: "bottomPager"}, " ", this.props.Vm.PaginationVm.intoDom()))));
                return _ff;
            };
            return UserListPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        UserListPage.UserListPageReact = UserListPageReact;
        var UserListPageVm = (function (_super) {
            __extends(UserListPageVm, _super);
            function UserListPageVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = UserListPageReact;
                this.PageBtnList = new Array();
                this.DataBtnList = new Array();
                this.UniId = "";
                this.CheckBoxList = new Array();
                this.UniId = eventFile.App.getUniId().toString();
                this.initButtons();
                this.listenAppEvent("loaduserspagedata", this.UniId, function (pageIndex) {
                    _this.loadPageData(pageIndex);
                });
                this.listenAppEvent("medical/base/users/rowbtnclick", this.UniId, function (btnName, fid) {
                    _this[btnName + "Opt"](fid);
                });
            }
            UserListPageVm.prototype.initButtons = function () {
                return React.createElement("div", {className: "btn-group"}, this.createButton("新增"), this.createButton("删除"), this.createButton("详情"), this.createButton("编辑"));
            };
            UserListPageVm.prototype.createButton = function (displayName) {
                var _this = this;
                var btnVm = new buttonFile.ui.ButtonVm();
                btnVm.DisplayName = displayName;
                if (displayName == "删除" || displayName == "详情" || displayName == "编辑") {
                    btnVm.NoEnable = true;
                }
                if (displayName != "新增") {
                    this.DataBtnList.push(btnVm);
                }
                btnVm.ClickFun = function (a) {
                    _this.buttonClickCommond(a);
                };
                return btnVm.intoDom();
            };
            UserListPageVm.prototype.buttonClickCommond = function (obj) {
                switch (obj.DisplayName) {
                    case "新增":
                        this.insertOpt();
                        break;
                    case "详情":
                        var _list = this.getSelectValues();
                        var _ids = _list.map(function (n) { return n.FID; }).join(",");
                        this.viewOpt(_ids);
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
            UserListPageVm.prototype.insertOpt = function (vals) {
                urlFile.Core.AkUrl.Current().openUrl("$panelUSERSINSERTPAGE$", true);
            };
            UserListPageVm.prototype.viewOpt = function (vals) {
                urlFile.Core.AkUrl.Current().openUrl("$paneluserdetailpage$" + vals + "$", true);
            };
            UserListPageVm.prototype.updateOpt = function (vals) {
                urlFile.Core.AkUrl.Current().openUrl("$panelUSERINFOSUPDATEPAGE$" + vals + "$", false);
            };
            UserListPageVm.prototype.delOpt = function (vals) {
                var _this = this;
                if (confirm("你确定要删除 所选中的数据吗 ??")) {
                    urlFile.Core.AkPost("/MedicalCenter/Users/RemoveUsers", { fids: vals }, function (data) {
                        var _data = data.Content;
                        if (_data == "ok") {
                            _this.loadPageData(0);
                        }
                    });
                }
            };
            UserListPageVm.prototype.getSelectValues = function () {
                var _list = [];
                this.GridFormVm.RowList.forEach(function (r) {
                    var ck = r.SingleCheckVm;
                    if (ck.vmDataValueGet() == "true") {
                        _list.push(r.RowData);
                    }
                });
                console.log(_list);
                return _list;
            };
            UserListPageVm.prototype.init = function (config) {
                var _this = this;
                var searchConfig = { uniId: this.UniId };
                this.PagerListData = config.PagerListData;
                this.PaginationVm = new pagination.tool.PaginationVm();
                var pager = this.PagerListData.Pager;
                this.PaginationVm.PageNo = pager.PageNo;
                this.PaginationVm.PageSize = pager.PageSize;
                this.PaginationVm.TotalCount = pager.TotalCount;
                this.PaginationVm.PageClickEvent = function (pagerIndex) {
                    _this.loadPageData(pagerIndex);
                };
                var gridFormConfig = { Data: this.PagerListData.ListData, UniId: this.UniId };
                this.GridFormVm = new gridFormFile.UserGridFormDom.UserGridFormDomVm(gridFormConfig);
                this.GridFormVm.RowList.forEach(function (row) {
                    _this.CheckBoxList.push(row.SingleCheckVm);
                    row.SingleCheckVm.ChangeEventFun = function (val, col) {
                        _this.checkCheckBox(val, col);
                        return true;
                    };
                });
                this.AllCheck = this.GridFormVm.AllCheck;
                this.AllCheck.ChangeEventFun = function (val, col) {
                    _this.allCheckChecked(val, col);
                    return true;
                };
            };
            UserListPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                urlFile.Core.AkPost("/MedicalCenter/Users/SearchUsers", {}, function (a) {
                    var pageConfig = { PagerListData: a.Data };
                    _this.init(pageConfig);
                    if (callback) {
                        callback();
                    }
                });
            };
            UserListPageVm.prototype.checkCheckBox = function (val, checkDom) {
                var rowList = this.GridFormVm.RowList;
                window["isHand"] = true;
                var isCheck = false;
                var isAllCheck = true;
                var checkedCount = 0;
                if (val == "true") {
                    isCheck = true;
                }
                rowList.forEach(function (row) {
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
                isAllCheck = rowList.length == checkedCount ? true : false;
                this.DataBtnList.forEach(function (btn) {
                    btn.NoEnable = isCheck ? false : true;
                    btn.forceUpdate("");
                });
                this.AllCheck.vmDataValueSet(isAllCheck ? "true" : "false");
                this.AllCheck.forceUpdate("", function () {
                    window["isHand"] = false;
                });
            };
            UserListPageVm.prototype.allCheckChecked = function (val, checkDom) {
                if (!window["isHand"]) {
                    this.GridFormVm.RowList.forEach(function (row) {
                        var chk = row.SingleCheckVm;
                        chk.reactDataValueSet(val);
                    });
                }
            };
            UserListPageVm.prototype.loadPageData = function (pageIndex) {
                var _this = this;
                this.GridFormVm.RowList = [];
                this.AllCheck.vmDataValueSet("false");
                this.AllCheck.forceUpdate("");
                var _page = { PageNo: pageIndex };
                urlFile.Core.AkPost("/MedicalCenter/users/SearchUsers", {
                    pager: JSON.stringify(_page)
                }, function (a) {
                    var pageConfig = { PagerListData: a.Data };
                    _this.init(pageConfig);
                    _this.IsChange = true;
                    _this.forceUpdate("");
                });
            };
            return UserListPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        UserListPage.UserListPageVm = UserListPageVm;
        var UserListPageStates = (function (_super) {
            __extends(UserListPageStates, _super);
            function UserListPageStates() {
                _super.apply(this, arguments);
            }
            return UserListPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        UserListPage.UserListPageStates = UserListPageStates;
        var UserListPageProps = (function (_super) {
            __extends(UserListPageProps, _super);
            function UserListPageProps() {
                _super.apply(this, arguments);
            }
            return UserListPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        UserListPage.UserListPageProps = UserListPageProps;
        iocFile.Core.Ioc.Current().RegisterType("USERLISTPAGE", basewedPageFile.Web.BaseWebPageVm, UserListPageVm);
    })(UserListPage = exports.UserListPage || (exports.UserListPage = {}));
});
