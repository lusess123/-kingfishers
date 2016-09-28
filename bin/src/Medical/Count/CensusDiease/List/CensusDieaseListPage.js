var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/Ioc", "./../../../../01core/Url", "./../../../../04page/BaseWebPage", "./CensusDieaseSearchFormDom", "./CensusDieaseGridFormDom", "./../../../../05tool/Pagination", "./../../../../05tool/Button", "./../../../../01core/Event"], function (require, exports, React, iocFile, urlFile, basewedPageFile, searchFormFile, gridFormFile, pagination, buttonFile, eventFile) {
    "use strict";
    var CensusDieaseListPage;
    (function (CensusDieaseListPage) {
        var CensusDieaseListPageAction = (function (_super) {
            __extends(CensusDieaseListPageAction, _super);
            function CensusDieaseListPageAction() {
                _super.apply(this, arguments);
            }
            return CensusDieaseListPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        CensusDieaseListPage.CensusDieaseListPageAction = CensusDieaseListPageAction;
        var CensusDieaseListPageReact = (function (_super) {
            __extends(CensusDieaseListPageReact, _super);
            function CensusDieaseListPageReact() {
                _super.apply(this, arguments);
                this.state = new CensusDieaseListPageStates();
            }
            CensusDieaseListPageReact.prototype.pSender = function () {
                var _ff = React.createElement("div", {className: "acsScroll"}, React.createElement("div", {className: "col-lg-12 col-md-12 col-sm-12 col-xs-12 Hm-center-content"}, this._tDom(this.props.Vm.SearchFormVm, { nullNode: React.createElement("span", null, "没有搜索区") }), React.createElement("div", {className: "acs-grids"}, this._tDom(this.props.Vm.GridFormVm), React.createElement("div", {className: "bottomPager"}, this._tDom(this.props.Vm.PaginationVm)))));
                return _ff;
            };
            CensusDieaseListPageReact.prototype.createButtons = function () {
                var _this = this;
                return React.createElement("div", {className: "btn-group"}, this.props.Vm.PageBtnList.map(function (btn) {
                    return _this._tDom(btn);
                }), this.props.Vm.DataBtnList.map(function (btn) {
                    return _this._tDom(btn);
                }));
            };
            return CensusDieaseListPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        CensusDieaseListPage.CensusDieaseListPageReact = CensusDieaseListPageReact;
        var CensusDieaseListPageVm = (function (_super) {
            __extends(CensusDieaseListPageVm, _super);
            function CensusDieaseListPageVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = CensusDieaseListPageReact;
                this.CheckBoxList = new Array();
                this.DataBtnList = new Array();
                this.PageBtnList = new Array();
                this.UniId = "";
                this.UniId = eventFile.App.getUniId().toString();
                this.initBtnList();
                var searchConfig = { UniId: this.UniId };
                this.SearchFormVm = new searchFormFile.CensusDieaseSearchFormDom.CensusDieaseSearchFormDomVm(searchConfig);
                if (config) {
                    this.init(config);
                }
                this.listenAppEvent("medical/base/CensusDiease/list/loadpagedata", this.UniId, function (pageIndex) {
                    _this.loadPageData(pageIndex);
                });
                this.listenAppEvent("medical/base/CensusDiease/rowbtnclick", this.UniId, function (btnName, fid) {
                    _this[btnName + "Opt"](fid);
                });
            }
            CensusDieaseListPageVm.prototype.initBtnList = function () {
                var _this = this;
                var btnVm = new buttonFile.ui.ButtonVm();
                btnVm.DisplayName = "新增";
                btnVm.NoEnable = false;
                this.PageBtnList.push(btnVm);
                var btnVm1 = new buttonFile.ui.ButtonVm();
                btnVm1.DisplayName = "删除";
                btnVm1.NoEnable = true;
                var btnVm2 = new buttonFile.ui.ButtonVm();
                btnVm2.DisplayName = "编辑";
                btnVm2.NoEnable = true;
                var btnVm3 = new buttonFile.ui.ButtonVm();
                btnVm3.DisplayName = "详情";
                btnVm3.NoEnable = true;
                this.DataBtnList.push(btnVm1);
                this.DataBtnList.push(btnVm2);
                this.DataBtnList.push(btnVm3);
                this.PageBtnList.forEach(function (btn) {
                    btn.ClickFun = function (a) {
                        _this.buttonClickCommond(a);
                    };
                });
                this.DataBtnList.forEach(function (btn) {
                    btn.ClickFun = function (a) {
                        _this.buttonClickCommond(a);
                    };
                });
            };
            CensusDieaseListPageVm.prototype.buttonClickCommond = function (obj) {
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
            CensusDieaseListPageVm.prototype.getSelectValues = function () {
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
            CensusDieaseListPageVm.prototype.insertOpt = function (vals) {
                urlFile.Core.AkUrl.Current().openUrl("$panelCensusDieaseinsertpage$", true);
            };
            CensusDieaseListPageVm.prototype.viewOpt = function (vals) {
                urlFile.Core.AkUrl.Current().openUrl("$panelCensusDieasedetailpage$" + vals + "$", true);
            };
            CensusDieaseListPageVm.prototype.updateOpt = function (vals) {
                urlFile.Core.AkUrl.Current().openUrl("$panelCensusDieaseupdatepage$" + vals + "$", false);
            };
            CensusDieaseListPageVm.prototype.delOpt = function (vals) {
                var _this = this;
                if (confirm("你确定要删除 所选中的数据吗 ？？")) {
                    urlFile.Core.AkPost("/MedicalCenter/CensusDiease/RemoveAnomalies", { fids: vals }, function (data) {
                        var _data = data.Content;
                        if (_data == "ok") {
                            _this.loadPageData(0);
                        }
                    });
                }
            };
            CensusDieaseListPageVm.prototype.init = function (config) {
                var _this = this;
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
                this.GridFormVm = new gridFormFile.CensusDieaseGridFormDom.CensusDieaseGridFormDomVm(gridFormConfig);
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
            CensusDieaseListPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                urlFile.Core.AkPost("/MedicalCenter/CensusDiease/SearchCensusDiease", {}, function (a) {
                    var pageConfig = { PagerListData: a.Data };
                    _this.init(pageConfig);
                    if (callback) {
                        callback();
                    }
                });
            };
            CensusDieaseListPageVm.prototype.checkCheckBox = function (val, checkDom) {
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
            CensusDieaseListPageVm.prototype.allCheckChecked = function (val, checkDom) {
                if (!window["isHand"]) {
                    this.GridFormVm.RowList.forEach(function (row) {
                        var chk = row.SingleCheckVm;
                        chk.reactDataValueSet(val);
                    });
                }
            };
            CensusDieaseListPageVm.prototype.loadPageData = function (pageIndex) {
                var _this = this;
                this.GridFormVm.RowList = [];
                this.AllCheck.vmDataValueSet("false");
                this.AllCheck.forceUpdate("");
                var _page = { PageNo: pageIndex };
                urlFile.Core.AkPost("/MedicalCenter/CensusDiease/SearchCensusDiease", {
                    pager: JSON.stringify(_page),
                    anomaly: this.SearchFormVm.RowData.Anomaly,
                    key: this.SearchFormVm.RowData.Name,
                    beginDate: this.SearchFormVm.RowData.BeginDate,
                    endDate: this.SearchFormVm.RowData.EndDate
                }, function (a) {
                    // var _data: dataFile.CensusDiease.AbnomalPagerListData= a.Data;
                    // document.title = this.Title = "菜单列表，第" + (pageIndex + 1) + "页，总共" + _data.Pager.TotalCount + "条";
                    // this.getData(_data);
                    //this.PagerListData = _data;
                    var pageConfig = { PagerListData: a.Data };
                    _this.init(pageConfig);
                    _this.IsChange = true;
                    // var _d0: Date = new Date();
                    _this.forceUpdate("");
                    // this.GridFormVm.forceUpdate("");
                });
            };
            return CensusDieaseListPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        CensusDieaseListPage.CensusDieaseListPageVm = CensusDieaseListPageVm;
        var CensusDieaseListPageStates = (function (_super) {
            __extends(CensusDieaseListPageStates, _super);
            function CensusDieaseListPageStates() {
                _super.apply(this, arguments);
            }
            return CensusDieaseListPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        CensusDieaseListPage.CensusDieaseListPageStates = CensusDieaseListPageStates;
        var CensusDieaseListPageProps = (function (_super) {
            __extends(CensusDieaseListPageProps, _super);
            function CensusDieaseListPageProps() {
                _super.apply(this, arguments);
            }
            return CensusDieaseListPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        CensusDieaseListPage.CensusDieaseListPageProps = CensusDieaseListPageProps;
        iocFile.Core.Ioc.Current().RegisterType("CensusDieaseLISTPAGE", basewedPageFile.Web.BaseWebPageVm, CensusDieaseListPageVm);
    })(CensusDieaseListPage = exports.CensusDieaseListPage || (exports.CensusDieaseListPage = {}));
});
