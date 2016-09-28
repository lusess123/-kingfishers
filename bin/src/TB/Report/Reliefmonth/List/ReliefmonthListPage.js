var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/Ioc", "./../../../../01core/Url", "./../../../../04page/BaseWebPage", "./ReliefmonthSearchFormDom", "./ReliefmonthGridFormDom", "./../../../../01core/Event"], function (require, exports, React, iocFile, urlFile, basewedPageFile, searchFormFile, gridFormFile, eventFile) {
    "use strict";
    var ReliefmonthListPage;
    (function (ReliefmonthListPage) {
        var ReliefmonthListPageAction = (function (_super) {
            __extends(ReliefmonthListPageAction, _super);
            function ReliefmonthListPageAction() {
                _super.apply(this, arguments);
            }
            return ReliefmonthListPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        ReliefmonthListPage.ReliefmonthListPageAction = ReliefmonthListPageAction;
        var ReliefmonthListPageReact = (function (_super) {
            __extends(ReliefmonthListPageReact, _super);
            function ReliefmonthListPageReact() {
                _super.apply(this, arguments);
                this.state = new ReliefmonthListPageStates();
            }
            ReliefmonthListPageReact.prototype.pSender = function () {
                var _ff = React.createElement("div", {className: "Hz-scroll row"}, React.createElement("div", {className: "col-lg-12 col-md-12 col-sm-12 col-xs-12 Hm-center-content"}, this._tDom(this.props.Vm.SearchFormVm, { nullNode: React.createElement("span", null, "没有搜索区") }), React.createElement("div", {className: "Hm-grids"}, React.createElement("div", {className: "button-bar"}, this.createButtons()), React.createElement("div", {className: "topPager"}, this._tDom(this.props.Vm.PaginationVm)), this._tDom(this.props.Vm.GridFormVm), React.createElement("div", {className: "bottomPager"}, this._tDom(this.props.Vm.PaginationVm)))));
                return _ff;
            };
            ReliefmonthListPageReact.prototype.createButtons = function () {
                var _this = this;
                return React.createElement("div", {className: "btn-group"}, this.props.Vm.PageBtnList.map(function (btn) {
                    return _this._tDom(btn);
                }), this.props.Vm.DataBtnList.map(function (btn) {
                    return _this._tDom(btn);
                }));
            };
            return ReliefmonthListPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        ReliefmonthListPage.ReliefmonthListPageReact = ReliefmonthListPageReact;
        var ReliefmonthListPageVm = (function (_super) {
            __extends(ReliefmonthListPageVm, _super);
            function ReliefmonthListPageVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = ReliefmonthListPageReact;
                this.CheckBoxList = new Array();
                this.DataBtnList = new Array();
                this.PageBtnList = new Array();
                this.UniId = "";
                this.UniId = eventFile.App.getUniId().toString();
                //this.initBtnList();
                var searchConfig = { UniId: this.UniId };
                this.SearchFormVm = new searchFormFile.ReliefmonthSearchFormDom.ReliefmonthSearchFormDomVm(searchConfig);
                if (config) {
                    this.init(config);
                }
                this.listenAppEvent("TB/Report/Test/Test", this.UniId, function (pageIndex) {
                    _this.searchData(pageIndex);
                });
            }
            ReliefmonthListPageVm.prototype.initBtnList = function () {
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
            //        urlFile.Core.AkPost("/MedicalCenter/HomeRepair/RemoveAnomalies", { fids: vals }, (data) => {
            //            var _data = data.Content;
            //            if (_data == "ok") {
            //                this.loadPageData(0);
            //            }
            //        });
            //    }
            //}
            ReliefmonthListPageVm.prototype.init = function (config) {
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
                this.GridFormVm = new gridFormFile.ReliefmonthGridFormDom.ReliefmonthGridFormDomVm(gridFormConfig);
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
            ReliefmonthListPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                urlFile.Core.AkPost("/HZTongBao/Report/Reliefmonth", {}, function (a) {
                    var pageConfig = { DataSet: a };
                    _this.init(pageConfig);
                    if (callback) {
                        callback();
                    }
                });
            };
            ReliefmonthListPageVm.prototype.checkCheckBox = function (val, checkDom) {
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
            ReliefmonthListPageVm.prototype.allCheckChecked = function (val, checkDom) {
                if (!window["isHand"]) {
                    this.GridFormVm.RowList.forEach(function (row) {
                        var chk = row.SingleCheckVm;
                        chk.reactDataValueSet(val);
                    });
                }
            };
            ReliefmonthListPageVm.prototype.searchData = function (pageIndex) {
                var _this = this;
                this.GridFormVm.RowList = [];
                this.AllCheck.vmDataValueSet("false");
                this.AllCheck.forceUpdate("");
                var _page = { PageNo: pageIndex };
                urlFile.Core.AkPost("/HZTongBao/Report/Reliefmonth", {
                    strdata: this.SearchFormVm.MonthVm.dataValue()
                }, function (a) {
                    // var _data: dataFile.HomeRepair.AbnomalPagerListData= a.Data;
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
            return ReliefmonthListPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        ReliefmonthListPage.ReliefmonthListPageVm = ReliefmonthListPageVm;
        var ReliefmonthListPageStates = (function (_super) {
            __extends(ReliefmonthListPageStates, _super);
            function ReliefmonthListPageStates() {
                _super.apply(this, arguments);
            }
            return ReliefmonthListPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        ReliefmonthListPage.ReliefmonthListPageStates = ReliefmonthListPageStates;
        var ReliefmonthListPageProps = (function (_super) {
            __extends(ReliefmonthListPageProps, _super);
            function ReliefmonthListPageProps() {
                _super.apply(this, arguments);
            }
            return ReliefmonthListPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        ReliefmonthListPage.ReliefmonthListPageProps = ReliefmonthListPageProps;
        iocFile.Core.Ioc.Current().RegisterType("ReliefmonthListPage", basewedPageFile.Web.BaseWebPageVm, ReliefmonthListPageVm);
    })(ReliefmonthListPage = exports.ReliefmonthListPage || (exports.ReliefmonthListPage = {}));
});
