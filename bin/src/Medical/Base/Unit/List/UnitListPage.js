var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/Ioc", "react", "./../../../../01core/Url", "./../../../../04page/BaseWebPage", "./UnitSearchDow", "./UnitGridFromDow", "./../../../../05tool/Pagination", "./../../../../05tool/Button", "./../../../../01core/Event"], function (require, exports, iocFile, React, urlFile, basewedPageFile, searchFormFile, gridFormFile, pagination, buttonFile, eventFile) {
    "use strict";
    var UnitListPage;
    (function (UnitListPage) {
        var UnitListPageAction = (function (_super) {
            __extends(UnitListPageAction, _super);
            function UnitListPageAction() {
                _super.apply(this, arguments);
            }
            return UnitListPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        UnitListPage.UnitListPageAction = UnitListPageAction;
        var UnitListPageReact = (function (_super) {
            __extends(UnitListPageReact, _super);
            function UnitListPageReact() {
                _super.apply(this, arguments);
                this.state = new UnitListPageStates();
            }
            UnitListPageReact.prototype.pSender = function () {
                var _ff = React.createElement("div", {className: "acsScroll"}, React.createElement("div", {className: "col-lg-10 col-md-12 col-sm-12 col-xs-12 Hm-center-content"}, this.props.Vm.SearchFormVm.intoDom(), React.createElement("div", {className: "acs-grids"}, React.createElement("div", {className: "button-bar"}, this.props.Vm.initButtons()), React.createElement("div", {className: "topPager"}, this.props.Vm.PaginationVm.intoDom()), this.props.Vm.GridFormVm.intoDom(), React.createElement("div", {className: "bottomPager"}, " ", this.props.Vm.PaginationVm.intoDom()))));
                return _ff;
            };
            return UnitListPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        UnitListPage.UnitListPageReact = UnitListPageReact;
        var UnitListPageVm = (function (_super) {
            __extends(UnitListPageVm, _super);
            function UnitListPageVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = UnitListPageReact;
                this.CheckBoxList = new Array();
                this.DataBtnList = new Array();
                this.PageBtnList = new Array();
                this.UniId = "";
                this.UniId = eventFile.App.getUniId().toString();
                var searchConfig = { UniId: this.UniId };
                this.SearchFormVm = new searchFormFile.UnitSearchDow.UnitSearchDowVm(searchConfig);
                this.listenAppEvent("loadunitpagedata", this.UniId, function (pageIndex) {
                    _this.loadPageData(pageIndex);
                });
                this.listenAppEvent("medical/base/unit/rowbtnclick", this.UniId, function (btnName, fid) {
                    _this[btnName + "Opt"](fid);
                });
            }
            UnitListPageVm.prototype.insertOpt = function () {
                urlFile.Core.AkUrl.Current().openUrl("$panelunitinsertpage$", true);
            };
            UnitListPageVm.prototype.viewOpt = function (vals) {
                urlFile.Core.AkUrl.Current().openUrl("$panelunitdetailpage$" + vals + "$", true);
            };
            UnitListPageVm.prototype.updateOpt = function (vals) {
                urlFile.Core.AkUrl.Current().openUrl("$panelUnitUPDATEPAGE$" + vals + "$", true);
            };
            UnitListPageVm.prototype.delOpt = function (vals) {
                var _this = this;
                if (confirm("你确定要删除 所选中的数据吗 ？？")) {
                    urlFile.Core.AkPost("/MedicalCenter/Unit/RemoveUnits", { fids: vals }, function (data) {
                        var _data = data.Content;
                        if (_data == "ok") {
                            _this.loadPageData(0);
                        }
                    });
                }
            };
            UnitListPageVm.prototype.getSelectValues = function () {
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
            UnitListPageVm.prototype.initButtons = function () {
                return React.createElement("div", {className: "btn-group"}, this.createButton("新增"), this.createButton("删除"), this.createButton("详情"), this.createButton("编辑"));
            };
            UnitListPageVm.prototype.createButton = function (displayName) {
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
            UnitListPageVm.prototype.buttonClickCommond = function (obj) {
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
            UnitListPageVm.prototype.init = function (config) {
                var _this = this;
                var searchConfig = { UniId: this.UniId };
                this.SearchFormVm = new searchFormFile.UnitSearchDow.UnitSearchDowVm(searchConfig);
                this.PagerListData = config.PagerListData;
                this.PaginationVm = new pagination.tool.PaginationVm();
                var pager = this.PagerListData.Pager;
                this.PaginationVm.PageNo = pager.PageNo;
                this.PaginationVm.PageSize = pager.PageSize;
                this.PaginationVm.TotalCount = pager.TotalCount;
                this.PaginationVm.PageClickEvent = function (pageIndex) {
                    _this.loadPageData(pageIndex);
                };
                var gridFormConfig = { Data: this.PagerListData.ListData, UniId: this.UniId };
                this.GridFormVm = new gridFormFile.UnitGridFromDow.UnitGridFromDowVm(gridFormConfig);
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
            UnitListPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                urlFile.Core.AkPost("/MedicalCenter/Unit/SearchUnits", {}, function (a) {
                    var pageConfig = { PagerListData: a.Data };
                    _this.init(pageConfig);
                    if (callback) {
                        callback();
                    }
                });
            };
            UnitListPageVm.prototype.checkCheckBox = function (val, checkDom) {
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
            UnitListPageVm.prototype.allCheckChecked = function (val, checkDom) {
                if (!window["isHand"]) {
                    //this.CheckBoxList.forEach((chk) => {
                    //    chk.reactDataValueSet(val);
                    //});
                    this.GridFormVm.RowList.forEach(function (row) {
                        var chk = row.SingleCheckVm;
                        chk.reactDataValueSet(val);
                    });
                }
            };
            UnitListPageVm.prototype.loadPageData = function (pageIndex) {
                var _this = this;
                this.GridFormVm.RowList = [];
                this.AllCheck.vmDataValueSet("false");
                this.AllCheck.forceUpdate("");
                var _page = { PageNo: pageIndex };
                urlFile.Core.AkPost("/MedicalCenter/Unit/SearchUnits", {
                    pager: JSON.stringify(_page),
                    simpleCode: this.SearchFormVm.SearchSimpleCode,
                    name: this.SearchFormVm.SearchName
                }, function (a) {
                    var pageConfig = { PagerListData: a.Data };
                    _this.init(pageConfig);
                    _this.IsChange = true;
                    _this.forceUpdate("");
                });
            };
            return UnitListPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        UnitListPage.UnitListPageVm = UnitListPageVm;
        var UnitListPageStates = (function (_super) {
            __extends(UnitListPageStates, _super);
            function UnitListPageStates() {
                _super.apply(this, arguments);
            }
            return UnitListPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        UnitListPage.UnitListPageStates = UnitListPageStates;
        var UnitListPageProps = (function (_super) {
            __extends(UnitListPageProps, _super);
            function UnitListPageProps() {
                _super.apply(this, arguments);
            }
            return UnitListPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        UnitListPage.UnitListPageProps = UnitListPageProps;
        iocFile.Core.Ioc.Current().RegisterType("UnitLISTPAGE", basewedPageFile.Web.BaseWebPageVm, UnitListPageVm);
    })(UnitListPage = exports.UnitListPage || (exports.UnitListPage = {}));
});
