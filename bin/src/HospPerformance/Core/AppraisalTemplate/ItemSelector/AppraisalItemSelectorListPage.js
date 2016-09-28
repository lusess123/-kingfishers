var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/Ioc", "react", "./../../../../01core/Url", "./../../../../04page/BaseWebPage", "./AppraisalItemSearchDom", "./AppraisalItemSelectorGridFormDom", "./../../../../05tool/Pagination", "./../../../../01core/Event"], function (require, exports, iocFile, React, urlFile, basewedPageFile, searchFormFile, gridFormFile, pagination, eventFile) {
    "use strict";
    var AppraisalItemSelectorListPage;
    (function (AppraisalItemSelectorListPage) {
        var AppraisalItemSelectorListPageAction = (function (_super) {
            __extends(AppraisalItemSelectorListPageAction, _super);
            function AppraisalItemSelectorListPageAction() {
                _super.apply(this, arguments);
            }
            return AppraisalItemSelectorListPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        AppraisalItemSelectorListPage.AppraisalItemSelectorListPageAction = AppraisalItemSelectorListPageAction;
        var AppraisalItemSelectorListPageReact = (function (_super) {
            __extends(AppraisalItemSelectorListPageReact, _super);
            function AppraisalItemSelectorListPageReact() {
                _super.apply(this, arguments);
                this.state = new AppraisalItemSelectorListPageStates();
            }
            AppraisalItemSelectorListPageReact.prototype.pSender = function () {
                //var _ff = <div className="row acsScroll acsMargin3">
                //    <div className="main acs-fixed-top">
                //        {this.props.Vm.SearchFormVm.intoDom() }
                //        <div className="acs-grids">
                //            {this.props.Vm.PaginationVm.intoDom() }
                //            {this.props.Vm.GridFormVm.intoDom() }
                //            {this.props.Vm.PaginationVm.intoDom() }
                //        </div>
                //    </div>
                //</div>;
                //return _ff;
                var _dom = React.createElement("div", {className: "Hz-scroll"}, React.createElement("div", {className: "col-lg-12 col-md-12 col-sm-12 col-xs-12 Hm-center-content"}, this.props.Vm.SearchFormVm.intoDom(), React.createElement("div", null, this.props.Vm.GridFormVm.intoDom(), this.props.Vm.PaginationVm.intoDom())));
                return _dom;
            };
            return AppraisalItemSelectorListPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        AppraisalItemSelectorListPage.AppraisalItemSelectorListPageReact = AppraisalItemSelectorListPageReact;
        var AppraisalItemSelectorListPageVm = (function (_super) {
            __extends(AppraisalItemSelectorListPageVm, _super);
            function AppraisalItemSelectorListPageVm(config) {
                _super.call(this);
                this.ReactType = AppraisalItemSelectorListPageReact;
                this.CheckBoxList = new Array();
                this.DataBtnList = new Array();
                this.PageBtnList = new Array();
                this.UniId = "";
                if (config && config.UniId) {
                    this.UniId = config.UniId;
                }
                else {
                    this.UniId = eventFile.App.getUniId().toString();
                }
                // this.NaviTree = new baseTreeFile.ui.BaseTreeVm({ RegName:"AppraisalCategoryTreeCodeTable" });
                var searchConfig = { UniId: this.UniId };
                this.SearchFormVm = new searchFormFile.AppraisalItemSearchDom.AppraisalItemSearchDomVm(searchConfig);
                //this.listenAppEvent("AppraisalItemSelector/loadpagedata", this.UniId, (pageIndex: number) => {
                //    this.loadPageData(pageIndex);
                //});
                if (config && config.PagerListData) {
                    this.init(config);
                }
            }
            AppraisalItemSelectorListPageVm.prototype.init = function (config) {
                var _this = this;
                //this.NaviTree = new baseTreeFile.ui.BaseTreeVm({ RegName: "AppraisalCategoryTreeCodeTable" });
                //this.NaviTree.ChangeEventFun = ((val, col) => {
                //    this.loadPageData(0, val);
                //    return true;
                //});
                if (!config.IsSearch) {
                    this.listenAppEvent("AppraisalItemSelector/loadpagedata", this.UniId, function (pageIndex) {
                        _this.loadPageData(pageIndex);
                    });
                }
                this.SearchFormVm.SearchName = !config.IsSearch ? "" : this.SearchFormVm.SearchName;
                this.ResultType = config.ResultType ? config.ResultType : this.ResultType;
                this.PagerListData = config.PagerListData ? config.PagerListData : { Pager: { PageNo: 0, PageSize: 15, TotalCount: 0 }, ListData: [] };
                this.PaginationVm = new pagination.tool.PaginationVm({ isPartHidden: true, IsPageSizeHidden: true, IsBidaStyle: false });
                var pager = this.PagerListData.Pager;
                this.PaginationVm.PageNo = pager.PageNo;
                this.PaginationVm.PageSize = pager.PageSize;
                this.PaginationVm.TotalCount = pager.TotalCount;
                this.PaginationVm.PageClickEvent = function (pageIndex) {
                    _this.loadPageData(pageIndex);
                };
                var gridFormConfig = { Data: this.PagerListData.ListData, UniId: this.UniId, IsMultiSelect: config.IsMultiSelect };
                this.GridFormVm = new gridFormFile.AppraisalItemSelectorGridFormDom.AppraisalItemSelectorGridFormDomVm(gridFormConfig);
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
            AppraisalItemSelectorListPageVm.prototype.getCategoryId = function () {
                var _str = this.NaviTree.dataValue();
                return _str;
            };
            AppraisalItemSelectorListPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                urlFile.Core.AkPost("/HospPerformance/AppraisalItem/SearchAppraisalItems", {}, function (a) {
                    var pageConfig = { PagerListData: a.Data };
                    _this.init(pageConfig);
                    if (callback) {
                        callback();
                    }
                });
            };
            AppraisalItemSelectorListPageVm.prototype.checkCheckBox = function (val, checkDom) {
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
            AppraisalItemSelectorListPageVm.prototype.allCheckChecked = function (val, checkDom) {
                if (!window["isHand"]) {
                    //this.CheckBoxList.forEach((chk) => {
                    //    chk.reactDataValueSet(val);
                    //});
                    this.GridFormVm.RowList.forEach(function (row) {
                        var chk = row.SingleCheckVm;
                        chk.reactDataValueSet(val);
                        row.clickItem();
                    });
                }
            };
            AppraisalItemSelectorListPageVm.prototype.loadPageData = function (pageIndex, naviTreeId) {
                var _this = this;
                this.GridFormVm.RowList = [];
                this.AllCheck.vmDataValueSet("false");
                this.AllCheck.forceUpdate("");
                var _page = { PageNo: pageIndex };
                urlFile.Core.AkPost("/HospPerformance/AppraisalItem/SearchAppraisalItems", {
                    pager: JSON.stringify(_page),
                    searchName: this.SearchFormVm.SearchName,
                    resultType: this.ResultType
                }, function (a) {
                    var pageConfig = { PagerListData: a.Data, IsSearch: true };
                    _this.init(pageConfig);
                    _this.IsChange = true;
                    // this.forceUpdate("");
                    _this.forceUpdate("", function () {
                        _this.emitAppEvent("call-PickDom-SetSelect", _this.UniId);
                    });
                });
                //this.forceUpdate("", () => {
                //    this.emitAppEvent("call-PickDom-SetSelect", this.UniId);
                //});
            };
            return AppraisalItemSelectorListPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        AppraisalItemSelectorListPage.AppraisalItemSelectorListPageVm = AppraisalItemSelectorListPageVm;
        var AppraisalItemSelectorListPageStates = (function (_super) {
            __extends(AppraisalItemSelectorListPageStates, _super);
            function AppraisalItemSelectorListPageStates() {
                _super.apply(this, arguments);
            }
            return AppraisalItemSelectorListPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        AppraisalItemSelectorListPage.AppraisalItemSelectorListPageStates = AppraisalItemSelectorListPageStates;
        var AppraisalItemSelectorListPageProps = (function (_super) {
            __extends(AppraisalItemSelectorListPageProps, _super);
            function AppraisalItemSelectorListPageProps() {
                _super.apply(this, arguments);
            }
            return AppraisalItemSelectorListPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        AppraisalItemSelectorListPage.AppraisalItemSelectorListPageProps = AppraisalItemSelectorListPageProps;
        iocFile.Core.Ioc.Current().RegisterType("AppraisalItemSelectorListPage", basewedPageFile.Web.BaseWebPageVm, AppraisalItemSelectorListPageVm);
    })(AppraisalItemSelectorListPage = exports.AppraisalItemSelectorListPage || (exports.AppraisalItemSelectorListPage = {}));
});
