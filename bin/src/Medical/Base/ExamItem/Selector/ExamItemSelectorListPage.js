var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/Ioc", "react", "./../../../../01core/Url", "./../../../../04page/BaseWebPage", "./../List/ExamItemSearchDow", "./ExamItemSelectorGridFromDow", "./../../../../05tool/Pagination", "./../../../../01core/Event"], function (require, exports, iocFile, React, urlFile, basewedPageFile, searchFormFile, gridFormFile, pagination, eventFile) {
    "use strict";
    var ExamItemSelectorListPage;
    (function (ExamItemSelectorListPage) {
        var ExamItemSelectorListPageAction = (function (_super) {
            __extends(ExamItemSelectorListPageAction, _super);
            function ExamItemSelectorListPageAction() {
                _super.apply(this, arguments);
            }
            return ExamItemSelectorListPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        ExamItemSelectorListPage.ExamItemSelectorListPageAction = ExamItemSelectorListPageAction;
        var ExamItemSelectorListPageReact = (function (_super) {
            __extends(ExamItemSelectorListPageReact, _super);
            function ExamItemSelectorListPageReact() {
                _super.apply(this, arguments);
                this.state = new ExamItemSelectorListPageStates();
            }
            ExamItemSelectorListPageReact.prototype.pSender = function () {
                var _ff = React.createElement("div", {className: "row acsScroll acsMargin3"}, React.createElement("div", {className: "main acs-fixed-top"}, this.props.Vm.SearchFormVm.intoDom(), React.createElement("div", {className: "acs-grids"}, this.props.Vm.PaginationVm.intoDom(), this.props.Vm.GridFormVm.intoDom(), this.props.Vm.PaginationVm.intoDom())));
                return _ff;
            };
            return ExamItemSelectorListPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        ExamItemSelectorListPage.ExamItemSelectorListPageReact = ExamItemSelectorListPageReact;
        var ExamItemSelectorListPageVm = (function (_super) {
            __extends(ExamItemSelectorListPageVm, _super);
            function ExamItemSelectorListPageVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = ExamItemSelectorListPageReact;
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
                var searchConfig = { UniId: this.UniId };
                this.SearchFormVm = new searchFormFile.ExamItemSearchDow.ExamItemSearchDowVm(searchConfig);
                this.listenAppEvent("medical/base/ExamItem/loadpagedata", this.UniId, function (pageIndex) {
                    _this.loadPageData(pageIndex);
                });
                if (config) {
                    this.init(config);
                }
            }
            ExamItemSelectorListPageVm.prototype.init = function (config) {
                var _this = this;
                if (config.UniId) {
                    this.UniId = config.UniId;
                }
                this.PagerListData = config.PagerListData;
                this.PaginationVm = new pagination.tool.PaginationVm();
                var pager = this.PagerListData.Pager;
                this.PaginationVm.PageNo = pager.PageNo;
                this.PaginationVm.PageSize = pager.PageSize;
                this.PaginationVm.TotalCount = pager.TotalCount;
                this.PaginationVm.PageClickEvent = function (pageIndex) {
                    _this.loadPageData(pageIndex);
                };
                var gridFormConfig = { Data: this.PagerListData.ListData, UniId: this.UniId, IsMultiSelect: config.IsMultiSelect };
                this.GridFormVm = new gridFormFile.ExamItemSelectorGridFromDow.ExamItemSelectorGridFromDowVm(gridFormConfig);
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
            ExamItemSelectorListPageVm.prototype.loadPage = function (callback) {
                //urlFile.Core.AkPost("/core/WebService/Method?resolver=JsonMethod", { json: "ExamItemListData.json" }, (a) => {
                //    var pageConfig: IExamItemSelectorListPageConfig = { PagerListData: a};
                //    this.init(pageConfig);
                //    if (callback) {
                //        callback();
                //    }
                //});
                var _this = this;
                urlFile.Core.AkPost("/MedicalCenter/ExamItem/SearchExamItem", {}, function (a) {
                    var pageConfig = { PagerListData: a.Data };
                    _this.init(pageConfig);
                    if (callback) {
                        callback();
                    }
                });
            };
            ExamItemSelectorListPageVm.prototype.checkCheckBox = function (val, checkDom) {
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
            ExamItemSelectorListPageVm.prototype.allCheckChecked = function (val, checkDom) {
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
            ExamItemSelectorListPageVm.prototype.loadPageData = function (pageIndex) {
                var _this = this;
                this.GridFormVm.RowList = [];
                this.AllCheck.vmDataValueSet("false");
                this.AllCheck.forceUpdate("");
                var _page = { PageNo: pageIndex };
                urlFile.Core.AkPost("/MedicalCenter/ExamItem/SearchExamItem", {
                    pager: JSON.stringify(_page),
                    simpleCode: this.SearchFormVm.SearchSimpleCode,
                    name: this.SearchFormVm.SearchName
                }, function (a) {
                    var pageConfig = { PagerListData: a.Data };
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
            return ExamItemSelectorListPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        ExamItemSelectorListPage.ExamItemSelectorListPageVm = ExamItemSelectorListPageVm;
        var ExamItemSelectorListPageStates = (function (_super) {
            __extends(ExamItemSelectorListPageStates, _super);
            function ExamItemSelectorListPageStates() {
                _super.apply(this, arguments);
            }
            return ExamItemSelectorListPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        ExamItemSelectorListPage.ExamItemSelectorListPageStates = ExamItemSelectorListPageStates;
        var ExamItemSelectorListPageProps = (function (_super) {
            __extends(ExamItemSelectorListPageProps, _super);
            function ExamItemSelectorListPageProps() {
                _super.apply(this, arguments);
            }
            return ExamItemSelectorListPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        ExamItemSelectorListPage.ExamItemSelectorListPageProps = ExamItemSelectorListPageProps;
        iocFile.Core.Ioc.Current().RegisterType("ExamItemSelectorLISTPAGE", basewedPageFile.Web.BaseWebPageVm, ExamItemSelectorListPageVm);
    })(ExamItemSelectorListPage = exports.ExamItemSelectorListPage || (exports.ExamItemSelectorListPage = {}));
});
