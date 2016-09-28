var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/Ioc", "./../../../../01core/Url", "./../../../../04page/BaseWebPage", "./DeptConclusionTplSearchFormDom", "./DeptConclusionTplGridFormDom", "./../../../../05tool/Pagination", "./../../../Common/List/MedicalBaseListPage"], function (require, exports, iocFile, urlFile, basewedPageFile, searchFormFile, gridFormFile, pagination, baseMedicalPage) {
    "use strict";
    var DeptConclusionTplListPage;
    (function (DeptConclusionTplListPage) {
        var DeptConclusionTplListPageAction = (function (_super) {
            __extends(DeptConclusionTplListPageAction, _super);
            function DeptConclusionTplListPageAction() {
                _super.apply(this, arguments);
            }
            return DeptConclusionTplListPageAction;
        }(baseMedicalPage.MedicalBaseListPage.MedicalBaseListPageAction));
        DeptConclusionTplListPage.DeptConclusionTplListPageAction = DeptConclusionTplListPageAction;
        var DeptConclusionTplListPageReact = (function (_super) {
            __extends(DeptConclusionTplListPageReact, _super);
            function DeptConclusionTplListPageReact() {
                _super.apply(this, arguments);
                this.state = new DeptConclusionTplListPageStates();
            }
            DeptConclusionTplListPageReact.prototype.pSender = function () {
                return _super.prototype.pSender.call(this);
            };
            return DeptConclusionTplListPageReact;
        }(baseMedicalPage.MedicalBaseListPage.MedicalBaseListPageReact));
        DeptConclusionTplListPage.DeptConclusionTplListPageReact = DeptConclusionTplListPageReact;
        var DeptConclusionTplListPageVm = (function (_super) {
            __extends(DeptConclusionTplListPageVm, _super);
            function DeptConclusionTplListPageVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = DeptConclusionTplListPageReact;
                this.PageSign = "DeptConclusionTpl";
                this.listenAppEvent("medical/base/deptconclusiontpl/rowbtnclick", this.UniId, function (btnName, fid) {
                    _this[btnName + "Opt"](fid);
                });
                this.listenAppEvent("medical/base/deptconclusiontpl/loadpagedata", this.UniId, function (pageIndex) {
                    _this.loadPageData(pageIndex);
                });
            }
            DeptConclusionTplListPageVm.prototype.initSearchVm = function () {
                var searchConfig = { UniId: this.UniId };
                this.SearchFormVm = new searchFormFile.DeptConclusionTplSearchFormDom.DeptConclusionTplSearchFormDomVm(searchConfig);
            };
            DeptConclusionTplListPageVm.prototype.initGridVm = function (config) {
                this.PagerListData = config.PagerListData;
                this.PaginationVm = new pagination.tool.PaginationVm();
                var pager = this.PagerListData.Pager;
                this.PaginationVm.PageNo = pager.PageNo;
                this.PaginationVm.PageSize = pager.PageSize;
                this.PaginationVm.TotalCount = pager.TotalCount;
                var gridFormConfig = { Data: this.PagerListData.ListData, UniId: this.UniId };
                this.GridFormVm = new gridFormFile.DeptConclusionTplGridFormDom.DeptConclusionTplGridFormDomVm(gridFormConfig);
            };
            DeptConclusionTplListPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                urlFile.Core.AkPost("/MedicalCenter/DeptConclusionTpl/SearchTemplates", {}, function (a) {
                    var pageConfig = { PagerListData: a.Data };
                    _this.init(pageConfig);
                    if (callback) {
                        callback();
                    }
                });
            };
            return DeptConclusionTplListPageVm;
        }(baseMedicalPage.MedicalBaseListPage.MedicalBaseListPageVm));
        DeptConclusionTplListPage.DeptConclusionTplListPageVm = DeptConclusionTplListPageVm;
        var DeptConclusionTplListPageStates = (function (_super) {
            __extends(DeptConclusionTplListPageStates, _super);
            function DeptConclusionTplListPageStates() {
                _super.apply(this, arguments);
            }
            return DeptConclusionTplListPageStates;
        }(baseMedicalPage.MedicalBaseListPage.MedicalBaseListPageStates));
        DeptConclusionTplListPage.DeptConclusionTplListPageStates = DeptConclusionTplListPageStates;
        var DeptConclusionTplListPageProps = (function (_super) {
            __extends(DeptConclusionTplListPageProps, _super);
            function DeptConclusionTplListPageProps() {
                _super.apply(this, arguments);
            }
            return DeptConclusionTplListPageProps;
        }(baseMedicalPage.MedicalBaseListPage.MedicalBaseListPageProps));
        DeptConclusionTplListPage.DeptConclusionTplListPageProps = DeptConclusionTplListPageProps;
        iocFile.Core.Ioc.Current().RegisterType("DEPTCONCLUSIONTPLLISTPAGE", basewedPageFile.Web.BaseWebPageVm, DeptConclusionTplListPageVm);
    })(DeptConclusionTplListPage = exports.DeptConclusionTplListPage || (exports.DeptConclusionTplListPage = {}));
});
