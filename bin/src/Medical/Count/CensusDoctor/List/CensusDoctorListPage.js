var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/Ioc", "./../../../../01core/Url", "./../../../../04page/BaseWebPage", "./CensusDoctorSearchFormDom", "./CensusDoctorGridFormDom", "./../../../../05tool/Pagination", "./../../../../05tool/Button", "./../../../../01core/Event"], function (require, exports, React, iocFile, urlFile, basewedPageFile, searchFormFile, gridFormFile, pagination, buttonFile, eventFile) {
    "use strict";
    var CensusDoctorListPage;
    (function (CensusDoctorListPage) {
        var CensusDoctorListPageAction = (function (_super) {
            __extends(CensusDoctorListPageAction, _super);
            function CensusDoctorListPageAction() {
                _super.apply(this, arguments);
            }
            return CensusDoctorListPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        CensusDoctorListPage.CensusDoctorListPageAction = CensusDoctorListPageAction;
        var CensusDoctorListPageReact = (function (_super) {
            __extends(CensusDoctorListPageReact, _super);
            function CensusDoctorListPageReact() {
                _super.apply(this, arguments);
                this.state = new CensusDoctorListPageStates();
            }
            CensusDoctorListPageReact.prototype.pSender = function () {
                var _ff = React.createElement("div", {className: "acsScroll"}, React.createElement("div", {className: "col-lg-12 col-md-12 col-sm-12 col-xs-12 Hm-center-content"}, this._tDom(this.props.Vm.SearchFormVm, { nullNode: React.createElement("span", null, "没有搜索区") }), React.createElement("div", {className: "acs-grids"}, this._tDom(this.props.Vm.GridFormVm), React.createElement("div", {className: "bottomPager"}, this._tDom(this.props.Vm.PaginationVm)))));
                return _ff;
            };
            CensusDoctorListPageReact.prototype.createButtons = function () {
                var _this = this;
                return React.createElement("div", {className: "btn-group"}, this.props.Vm.PageBtnList.map(function (btn) {
                    return _this._tDom(btn);
                }), this.props.Vm.DataBtnList.map(function (btn) {
                    return _this._tDom(btn);
                }));
            };
            return CensusDoctorListPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        CensusDoctorListPage.CensusDoctorListPageReact = CensusDoctorListPageReact;
        var CensusDoctorListPageVm = (function (_super) {
            __extends(CensusDoctorListPageVm, _super);
            function CensusDoctorListPageVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = CensusDoctorListPageReact;
                this.CheckBoxList = new Array();
                this.DataBtnList = new Array();
                this.PageBtnList = new Array();
                this.UniId = "";
                this.UniId = eventFile.App.getUniId().toString();
                this.initBtnList();
                var searchConfig = { UniId: this.UniId };
                this.SearchFormVm = new searchFormFile.CensusDoctorSearchFormDom.CensusDoctorSearchFormDomVm(searchConfig);
                if (config) {
                    this.init(config);
                }
                this.listenAppEvent("medical/base/CensusDoctor/list/loadpagedata", this.UniId, function (pageIndex) {
                    _this.loadPageData(pageIndex);
                });
                this.listenAppEvent("medical/base/CensusDoctor/rowbtnclick", this.UniId, function (btnName, fid) {
                    _this[btnName + "Opt"](fid);
                });
            }
            CensusDoctorListPageVm.prototype.initBtnList = function () {
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
            CensusDoctorListPageVm.prototype.buttonClickCommond = function (obj) {
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
            CensusDoctorListPageVm.prototype.getSelectValues = function () {
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
            CensusDoctorListPageVm.prototype.insertOpt = function (vals) {
                urlFile.Core.AkUrl.Current().openUrl("$panelCensusDoctorinsertpage$", true);
            };
            CensusDoctorListPageVm.prototype.viewOpt = function (vals) {
                urlFile.Core.AkUrl.Current().openUrl("$panelCensusDoctordetailpage$" + vals + "$", true);
            };
            CensusDoctorListPageVm.prototype.updateOpt = function (vals) {
                urlFile.Core.AkUrl.Current().openUrl("$panelCensusDoctorupdatepage$" + vals + "$", false);
            };
            CensusDoctorListPageVm.prototype.delOpt = function (vals) {
                var _this = this;
                if (confirm("你确定要删除 所选中的数据吗 ？？")) {
                    urlFile.Core.AkPost("/MedicalCenter/CensusDoctor/RemoveAnomalies", { fids: vals }, function (data) {
                        var _data = data.Content;
                        if (_data == "ok") {
                            _this.loadPageData(0);
                        }
                    });
                }
            };
            CensusDoctorListPageVm.prototype.init = function (config) {
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
                this.GridFormVm = new gridFormFile.CensusDoctorGridFormDom.CensusDoctorGridFormDomVm(gridFormConfig);
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
            CensusDoctorListPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                urlFile.Core.AkPost("/MedicalCenter/CensusDoctor/SearchCensusDoctor", {}, function (a) {
                    var pageConfig = { PagerListData: a.Data };
                    _this.init(pageConfig);
                    if (callback) {
                        callback();
                    }
                });
            };
            CensusDoctorListPageVm.prototype.checkCheckBox = function (val, checkDom) {
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
            CensusDoctorListPageVm.prototype.allCheckChecked = function (val, checkDom) {
                if (!window["isHand"]) {
                    this.GridFormVm.RowList.forEach(function (row) {
                        var chk = row.SingleCheckVm;
                        chk.reactDataValueSet(val);
                    });
                }
            };
            CensusDoctorListPageVm.prototype.loadPageData = function (pageIndex) {
                var _this = this;
                this.GridFormVm.RowList = [];
                this.AllCheck.vmDataValueSet("false");
                this.AllCheck.forceUpdate("");
                var _page = { PageNo: pageIndex };
                urlFile.Core.AkPost("/MedicalCenter/CensusDoctor/SearchCensusDoctor", {
                    pager: JSON.stringify(_page),
                    department: this.SearchFormVm.RowData.Department,
                    key: this.SearchFormVm.RowData.Name,
                    beginDate: this.SearchFormVm.RowData.BeginDate,
                    endDate: this.SearchFormVm.RowData.EndDate
                }, function (a) {
                    // var _data: dataFile.CensusDoctor.AbnomalPagerListData= a.Data;
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
            return CensusDoctorListPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        CensusDoctorListPage.CensusDoctorListPageVm = CensusDoctorListPageVm;
        var CensusDoctorListPageStates = (function (_super) {
            __extends(CensusDoctorListPageStates, _super);
            function CensusDoctorListPageStates() {
                _super.apply(this, arguments);
            }
            return CensusDoctorListPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        CensusDoctorListPage.CensusDoctorListPageStates = CensusDoctorListPageStates;
        var CensusDoctorListPageProps = (function (_super) {
            __extends(CensusDoctorListPageProps, _super);
            function CensusDoctorListPageProps() {
                _super.apply(this, arguments);
            }
            return CensusDoctorListPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        CensusDoctorListPage.CensusDoctorListPageProps = CensusDoctorListPageProps;
        iocFile.Core.Ioc.Current().RegisterType("CensusDoctorLISTPAGE", basewedPageFile.Web.BaseWebPageVm, CensusDoctorListPageVm);
    })(CensusDoctorListPage = exports.CensusDoctorListPage || (exports.CensusDoctorListPage = {}));
});
