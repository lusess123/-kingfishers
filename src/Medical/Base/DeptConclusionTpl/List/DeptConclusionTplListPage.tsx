
import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import basewedPageFile = require("./../../../../04page/BaseWebPage");
import searchFormFile = require("./DeptConclusionTplSearchFormDom");
import gridFormFile = require("./DeptConclusionTplGridFormDom");
import pagination = require("./../../../../05tool/Pagination");
import singleCheckFile = require("./../../../../02col/02Mulite/SingleCheckBox");
import buttonFile = require("./../../../../05tool/Button");
import eventFile = require("./../../../../01core/Event");
import dataFile = require("./../Data");
import baseMedicalPage = require("./../../../Common/List/MedicalBaseListPage");


export module DeptConclusionTplListPage {
    export class DeptConclusionTplListPageAction extends baseMedicalPage.MedicalBaseListPage.MedicalBaseListPageAction {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class DeptConclusionTplListPageReact extends baseMedicalPage.MedicalBaseListPage.MedicalBaseListPageReact<DeptConclusionTplListPageProps, DeptConclusionTplListPageStates, DeptConclusionTplListPageAction> implements domCore.IReact {

        public state = new DeptConclusionTplListPageStates();

        public pSender(): React.ReactElement<any> {
            return super.pSender();
        }


    }
    export interface IDeptConclusionTplListPageConfig extends baseMedicalPage.MedicalBaseListPage.IMedicalBaseListPageConfig {
        PagerListData: dataFile.DeptConclusionTpl.IDeptConclusionTplPagerListData
    }

    export class DeptConclusionTplListPageVm extends baseMedicalPage.MedicalBaseListPage.MedicalBaseListPageVm{
        public ReactType = DeptConclusionTplListPageReact;
        public PagerListData: dataFile.DeptConclusionTpl.IDeptConclusionTplPagerListData;


        public constructor(config?: IDeptConclusionTplListPageConfig) {
            super();
            this.PageSign = "DeptConclusionTpl";

            this.listenAppEvent("medical/base/deptconclusiontpl/rowbtnclick", this.UniId, (btnName: string, fid: string) => {
                this[btnName + "Opt"](fid);
            });
            this.listenAppEvent("medical/base/deptconclusiontpl/loadpagedata", this.UniId, (pageIndex: number) => {
                this.loadPageData(pageIndex);
            });

        }

        protected initSearchVm()
        {
            var searchConfig = { UniId: this.UniId };
            this.SearchFormVm = new searchFormFile.DeptConclusionTplSearchFormDom.DeptConclusionTplSearchFormDomVm(searchConfig);
        }

        protected initGridVm(config: IDeptConclusionTplListPageConfig) {

            this.PagerListData = config.PagerListData;
            this.PaginationVm = new pagination.tool.PaginationVm();
            var pager = this.PagerListData.Pager;
            this.PaginationVm.PageNo = pager.PageNo;
            this.PaginationVm.PageSize = pager.PageSize;
            this.PaginationVm.TotalCount = pager.TotalCount;
            var gridFormConfig = { Data: this.PagerListData.ListData, UniId: this.UniId };
            this.GridFormVm = new gridFormFile.DeptConclusionTplGridFormDom.DeptConclusionTplGridFormDomVm(gridFormConfig);
        }

        protected loadPage(callback?: () => any) {

            urlFile.Core.AkPost("/MedicalCenter/DeptConclusionTpl/SearchTemplates", {}, (a) => {
                var pageConfig: IDeptConclusionTplListPageConfig = { PagerListData: a.Data };
                this.init(pageConfig);
                if (callback) {
                    callback();
                }
            });

        }

    }
    export class DeptConclusionTplListPageStates extends baseMedicalPage.MedicalBaseListPage.MedicalBaseListPageStates{
    }


    export class DeptConclusionTplListPageProps extends baseMedicalPage.MedicalBaseListPage.MedicalBaseListPageProps<DeptConclusionTplListPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("DEPTCONCLUSIONTPLLISTPAGE", basewedPageFile.Web.BaseWebPageVm, DeptConclusionTplListPageVm);

}
