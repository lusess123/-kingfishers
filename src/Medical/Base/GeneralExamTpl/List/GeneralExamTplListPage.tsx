
import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import basewedPageFile = require("./../../../../04page/BaseWebPage");
import searchFormFile = require("./GeneralExamTplSearchFormDom");
import gridFormFile = require("./GeneralExamTplGridFormDom");
import pagination = require("./../../../../05tool/Pagination");
import singleCheckFile = require("./../../../../02col/02Mulite/SingleCheckBox");
import buttonFile = require("./../../../../05tool/Button");
import eventFile = require("./../../../../01core/Event");
import dataFile = require("./../Data");
import baseMedicalPage = require("./../../../Common/List/MedicalBaseListPage");


export module GeneralExamTplListPage {
    export class GeneralExamTplListPageAction extends baseMedicalPage.MedicalBaseListPage.MedicalBaseListPageAction {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class GeneralExamTplListPageReact extends baseMedicalPage.MedicalBaseListPage.MedicalBaseListPageReact<GeneralExamTplListPageProps, GeneralExamTplListPageStates, GeneralExamTplListPageAction> implements domCore.IReact {

        public state = new GeneralExamTplListPageStates();

        public pSender(): React.ReactElement<any> {
            return super.pSender();
        }


    }
    export interface IGeneralExamTplListPageConfig extends baseMedicalPage.MedicalBaseListPage.IMedicalBaseListPageConfig {
        PagerListData: dataFile.GeneralExamTpl.IGeneralExamTplPagerListData
    }

    export class GeneralExamTplListPageVm extends baseMedicalPage.MedicalBaseListPage.MedicalBaseListPageVm{
        public ReactType = GeneralExamTplListPageReact;
        public PagerListData: dataFile.GeneralExamTpl.IGeneralExamTplPagerListData;


        public constructor(config?: IGeneralExamTplListPageConfig) {
            super();

            this.PageSign = "GeneralExamTpl";

            this.listenAppEvent("medical/base/generalexamtpl/rowbtnclick", this.UniId, (btnName: string, fid: string) => {
                this[btnName + "Opt"](fid);
            });
            this.listenAppEvent("medical/base/generalexamtpl/loadpagedata", this.UniId, (pageIndex: number) => {
                this.loadPageData(pageIndex);
            });
        }

        protected initSearchVm()
        {
            var searchConfig = { UniId: this.UniId };
            this.SearchFormVm = new searchFormFile.GeneralExamTplSearchFormDom.GeneralExamTplSearchFormDomVm(searchConfig);
        }

        protected initGridVm(config: IGeneralExamTplListPageConfig) {

            this.PagerListData = config.PagerListData;
            this.PaginationVm = new pagination.tool.PaginationVm();
            var pager = this.PagerListData.Pager;
            this.PaginationVm.PageNo = pager.PageNo;
            this.PaginationVm.PageSize = pager.PageSize;
            this.PaginationVm.TotalCount = pager.TotalCount;
            var gridFormConfig = { Data: this.PagerListData.ListData, UniId: this.UniId };
            this.GridFormVm = new gridFormFile.GeneralExamTplGridFormDom.GeneralExamTplGridFormDomVm(gridFormConfig);
        }

        protected loadPage(callback?: () => any) {

            urlFile.Core.AkPost("/MedicalCenter/GeneralExamTpl/SearchTemplates", {}, (a) => {
                var pageConfig: IGeneralExamTplListPageConfig = { PagerListData: a.Data };
                this.init(pageConfig);
                if (callback) {
                    callback();
                }
            });

        }

    }
    export class GeneralExamTplListPageStates extends baseMedicalPage.MedicalBaseListPage.MedicalBaseListPageStates{
    }


    export class GeneralExamTplListPageProps extends baseMedicalPage.MedicalBaseListPage.MedicalBaseListPageProps<GeneralExamTplListPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("GENERALEXAMTPLLISTPAGE", basewedPageFile.Web.BaseWebPageVm, GeneralExamTplListPageVm);

}
