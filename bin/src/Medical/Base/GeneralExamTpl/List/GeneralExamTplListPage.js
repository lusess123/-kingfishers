var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/Ioc", "./../../../../01core/Url", "./../../../../04page/BaseWebPage", "./GeneralExamTplSearchFormDom", "./GeneralExamTplGridFormDom", "./../../../../05tool/Pagination", "./../../../Common/List/MedicalBaseListPage"], function (require, exports, iocFile, urlFile, basewedPageFile, searchFormFile, gridFormFile, pagination, baseMedicalPage) {
    "use strict";
    var GeneralExamTplListPage;
    (function (GeneralExamTplListPage) {
        var GeneralExamTplListPageAction = (function (_super) {
            __extends(GeneralExamTplListPageAction, _super);
            function GeneralExamTplListPageAction() {
                _super.apply(this, arguments);
            }
            return GeneralExamTplListPageAction;
        }(baseMedicalPage.MedicalBaseListPage.MedicalBaseListPageAction));
        GeneralExamTplListPage.GeneralExamTplListPageAction = GeneralExamTplListPageAction;
        var GeneralExamTplListPageReact = (function (_super) {
            __extends(GeneralExamTplListPageReact, _super);
            function GeneralExamTplListPageReact() {
                _super.apply(this, arguments);
                this.state = new GeneralExamTplListPageStates();
            }
            GeneralExamTplListPageReact.prototype.pSender = function () {
                return _super.prototype.pSender.call(this);
            };
            return GeneralExamTplListPageReact;
        }(baseMedicalPage.MedicalBaseListPage.MedicalBaseListPageReact));
        GeneralExamTplListPage.GeneralExamTplListPageReact = GeneralExamTplListPageReact;
        var GeneralExamTplListPageVm = (function (_super) {
            __extends(GeneralExamTplListPageVm, _super);
            function GeneralExamTplListPageVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = GeneralExamTplListPageReact;
                this.PageSign = "GeneralExamTpl";
                this.listenAppEvent("medical/base/generalexamtpl/rowbtnclick", this.UniId, function (btnName, fid) {
                    _this[btnName + "Opt"](fid);
                });
                this.listenAppEvent("medical/base/generalexamtpl/loadpagedata", this.UniId, function (pageIndex) {
                    _this.loadPageData(pageIndex);
                });
            }
            GeneralExamTplListPageVm.prototype.initSearchVm = function () {
                var searchConfig = { UniId: this.UniId };
                this.SearchFormVm = new searchFormFile.GeneralExamTplSearchFormDom.GeneralExamTplSearchFormDomVm(searchConfig);
            };
            GeneralExamTplListPageVm.prototype.initGridVm = function (config) {
                this.PagerListData = config.PagerListData;
                this.PaginationVm = new pagination.tool.PaginationVm();
                var pager = this.PagerListData.Pager;
                this.PaginationVm.PageNo = pager.PageNo;
                this.PaginationVm.PageSize = pager.PageSize;
                this.PaginationVm.TotalCount = pager.TotalCount;
                var gridFormConfig = { Data: this.PagerListData.ListData, UniId: this.UniId };
                this.GridFormVm = new gridFormFile.GeneralExamTplGridFormDom.GeneralExamTplGridFormDomVm(gridFormConfig);
            };
            GeneralExamTplListPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                urlFile.Core.AkPost("/MedicalCenter/GeneralExamTpl/SearchTemplates", {}, function (a) {
                    var pageConfig = { PagerListData: a.Data };
                    _this.init(pageConfig);
                    if (callback) {
                        callback();
                    }
                });
            };
            return GeneralExamTplListPageVm;
        }(baseMedicalPage.MedicalBaseListPage.MedicalBaseListPageVm));
        GeneralExamTplListPage.GeneralExamTplListPageVm = GeneralExamTplListPageVm;
        var GeneralExamTplListPageStates = (function (_super) {
            __extends(GeneralExamTplListPageStates, _super);
            function GeneralExamTplListPageStates() {
                _super.apply(this, arguments);
            }
            return GeneralExamTplListPageStates;
        }(baseMedicalPage.MedicalBaseListPage.MedicalBaseListPageStates));
        GeneralExamTplListPage.GeneralExamTplListPageStates = GeneralExamTplListPageStates;
        var GeneralExamTplListPageProps = (function (_super) {
            __extends(GeneralExamTplListPageProps, _super);
            function GeneralExamTplListPageProps() {
                _super.apply(this, arguments);
            }
            return GeneralExamTplListPageProps;
        }(baseMedicalPage.MedicalBaseListPage.MedicalBaseListPageProps));
        GeneralExamTplListPage.GeneralExamTplListPageProps = GeneralExamTplListPageProps;
        iocFile.Core.Ioc.Current().RegisterType("GENERALEXAMTPLLISTPAGE", basewedPageFile.Web.BaseWebPageVm, GeneralExamTplListPageVm);
    })(GeneralExamTplListPage = exports.GeneralExamTplListPage || (exports.GeneralExamTplListPage = {}));
});
