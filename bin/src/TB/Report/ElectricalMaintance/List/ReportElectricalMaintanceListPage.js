var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/Ioc", "./../../../../01core/Url", "./../../../../04page/BaseWebPage", "./ReportElectricalMaintanceSearchFormDom", "./ReportElectricalMaintanceGridFormDom", "./../../../../01core/Event"], function (require, exports, React, iocFile, urlFile, basewedPageFile, searchFormFile, gridFormFile, eventFile) {
    "use strict";
    var ReportElectricalMaintanceListPage;
    (function (ReportElectricalMaintanceListPage) {
        var ReportElectricalMaintanceListPageAction = (function (_super) {
            __extends(ReportElectricalMaintanceListPageAction, _super);
            function ReportElectricalMaintanceListPageAction() {
                _super.apply(this, arguments);
            }
            return ReportElectricalMaintanceListPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        ReportElectricalMaintanceListPage.ReportElectricalMaintanceListPageAction = ReportElectricalMaintanceListPageAction;
        var ReportElectricalMaintanceListPageReact = (function (_super) {
            __extends(ReportElectricalMaintanceListPageReact, _super);
            function ReportElectricalMaintanceListPageReact() {
                _super.apply(this, arguments);
                this.state = new ReportElectricalMaintanceListPageStates();
            }
            ReportElectricalMaintanceListPageReact.prototype.pSender = function () {
                var _ff = React.createElement("div", {className: "Hz-scroll row"}, React.createElement("div", {className: "col-lg-12 col-md-12 col-sm-12 col-xs-12 Hm-center-content"}, this._tDom(this.props.Vm.SearchFormVm, { nullNode: React.createElement("span", null, "没有搜索区") }), React.createElement("div", {className: "Hm-grids"}, React.createElement("div", {className: "button-bar"}, this.createButtons()), React.createElement("div", {className: "topPager"}, this._tDom(this.props.Vm.PaginationVm)), this._tDom(this.props.Vm.GridFormVm), React.createElement("div", {className: "bottomPager"}, this._tDom(this.props.Vm.PaginationVm)))));
                return _ff;
            };
            ReportElectricalMaintanceListPageReact.prototype.createButtons = function () {
                var _this = this;
                return React.createElement("div", {className: "btn-group"}, this.props.Vm.PageBtnList.map(function (btn) {
                    return _this._tDom(btn);
                }), this.props.Vm.DataBtnList.map(function (btn) {
                    return _this._tDom(btn);
                }));
            };
            return ReportElectricalMaintanceListPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        ReportElectricalMaintanceListPage.ReportElectricalMaintanceListPageReact = ReportElectricalMaintanceListPageReact;
        var ReportElectricalMaintanceListPageVm = (function (_super) {
            __extends(ReportElectricalMaintanceListPageVm, _super);
            function ReportElectricalMaintanceListPageVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = ReportElectricalMaintanceListPageReact;
                this.CheckBoxList = new Array();
                this.DataBtnList = new Array();
                this.PageBtnList = new Array();
                this.UniId = "";
                this.UniId = eventFile.App.getUniId().toString();
                //this.initBtnList();
                var searchConfig = { UniId: this.UniId };
                this.SearchFormVm = new searchFormFile.ReportElectricalMaintanceSearchFormDom.ReportElectricalMaintanceSearchFormDomVm(searchConfig);
                if (config) {
                    this.init(config);
                }
                this.listenAppEvent("TB/Report/Test/Test", this.UniId, function (pageIndex) {
                    _this.searchData(pageIndex);
                });
            }
            ReportElectricalMaintanceListPageVm.prototype.initBtnList = function () {
                //var btnVm = new buttonFile.ui.ButtonVm();
                //btnVm.DisplayName = "新增";
                //btnVm.NoEnable = false;
                //this.PageBtnList.push(btnVm);
                //var btnVm1 = new buttonFile.ui.ButtonVm();
                //btnVm1.DisplayName = "删除";
                //btnVm1.NoEnable = true;
                //var btnVm2 = new buttonFile.ui.ButtonVm();
                //btnVm2.DisplayName = "编辑";
                //btnVm2.NoEnable = true;
                //var btnVm3 = new buttonFile.ui.ButtonVm();
                //btnVm3.DisplayName = "详情";
                //btnVm3.NoEnable = true;
                //this.DataBtnList.push(btnVm1);
                //this.DataBtnList.push(btnVm2);
                //this.DataBtnList.push(btnVm3);
            };
            //public delOpt(vals: string) {
            //    if (confirm("你确定要删除 所选中的数据吗 ？？")) {
            //        urlFile.Core.AkPost("/MedicalCenter/ReportElectricalMaintance/RemoveAnomalies", { fids: vals }, (data) => {
            //            var _data = data.Content;
            //            if (_data == "ok") {
            //                this.loadPageData(0);
            //            }
            //        });
            //    }
            //}
            ReportElectricalMaintanceListPageVm.prototype.init = function (config) {
                //this.PagerListData = config.PagerListData;
                //this.PaginationVm = new pagination.tool.PaginationVm();
                //var pager = this.PagerListData.Pager;
                //this.PaginationVm.PageNo = pager.PageNo;
                //this.PaginationVm.PageSize = pager.PageSize;
                //this.PaginationVm.TotalCount = pager.TotalCount;
                var _this = this;
                //this.PaginationVm.PageClickEvent = (pageIndex) => {
                //    this.loadPageData(pageIndex);
                //}
                this.DataSet = config.DataSet;
                var gridFormConfig = { DataSet: this.DataSet, UniId: this.UniId };
                this.GridFormVm = new gridFormFile.ReportElectricalMaintanceGridFormDom.ReportElectricalMaintanceGridFormDomVm(gridFormConfig);
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
            ReportElectricalMaintanceListPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                urlFile.Core.AkPost("/HZTongBao/Report/ElectricalMaintance", {}, function (a) {
                    var pageConfig = { DataSet: a };
                    _this.init(pageConfig);
                    if (callback) {
                        callback();
                    }
                });
            };
            ReportElectricalMaintanceListPageVm.prototype.checkCheckBox = function (val, checkDom) {
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
            ReportElectricalMaintanceListPageVm.prototype.allCheckChecked = function (val, checkDom) {
                if (!window["isHand"]) {
                    this.GridFormVm.RowList.forEach(function (row) {
                        var chk = row.SingleCheckVm;
                        chk.reactDataValueSet(val);
                    });
                }
            };
            ReportElectricalMaintanceListPageVm.prototype.searchData = function (pageIndex) {
                var _this = this;
                this.GridFormVm.RowList = [];
                this.AllCheck.vmDataValueSet("false");
                this.AllCheck.forceUpdate("");
                var _page = { PageNo: pageIndex };
                urlFile.Core.AkPost("/HZTongBao/Report/ElectricalMaintance", {
                    // pager: JSON.stringify(_page),
                    // simpleCode: this.SearchFormVm.SearchSimpleCode,
                    //  name: this.SearchFormVm.SearchName
                    //  deptId: this.SearchFormVm.DepartmentTreeVm.dataValue(),
                    year: this.SearchFormVm.MonthVm.dataValue()
                }, function (a) {
                    // var _data: dataFile.ReportElectricalMaintance.AbnomalPagerListData= a.Data;
                    // document.title = this.Title = "菜单列表，第" + (pageIndex + 1) + "页，总共" + _data.Pager.TotalCount + "条";
                    // this.getData(_data);
                    //this.PagerListData = _data;
                    var pageConfig = { DataSet: a };
                    _this.init(pageConfig);
                    _this.IsChange = true;
                    // var _d0: Date = new Date();
                    _this.forceUpdate("");
                    // this.GridFormVm.forceUpdate("");
                });
            };
            return ReportElectricalMaintanceListPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        ReportElectricalMaintanceListPage.ReportElectricalMaintanceListPageVm = ReportElectricalMaintanceListPageVm;
        var ReportElectricalMaintanceListPageStates = (function (_super) {
            __extends(ReportElectricalMaintanceListPageStates, _super);
            function ReportElectricalMaintanceListPageStates() {
                _super.apply(this, arguments);
            }
            return ReportElectricalMaintanceListPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        ReportElectricalMaintanceListPage.ReportElectricalMaintanceListPageStates = ReportElectricalMaintanceListPageStates;
        var ReportElectricalMaintanceListPageProps = (function (_super) {
            __extends(ReportElectricalMaintanceListPageProps, _super);
            function ReportElectricalMaintanceListPageProps() {
                _super.apply(this, arguments);
            }
            return ReportElectricalMaintanceListPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        ReportElectricalMaintanceListPage.ReportElectricalMaintanceListPageProps = ReportElectricalMaintanceListPageProps;
        iocFile.Core.Ioc.Current().RegisterType("ReportElectricalMaintanceLISTPAGE", basewedPageFile.Web.BaseWebPageVm, ReportElectricalMaintanceListPageVm);
    })(ReportElectricalMaintanceListPage = exports.ReportElectricalMaintanceListPage || (exports.ReportElectricalMaintanceListPage = {}));
});
