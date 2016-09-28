    import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
//import domFile = require("./../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import basewedPageFile = require("./../../../../04page/BaseWebPage");
import React = require("react");
import ReactDOM = require("react-dom");
import tabDomFile = require("./../../../../05tool/TabDom");
import modalFile = require("./../../../../05tool/Modal/ModalDom");
import DetailMoneyAccountingPageFile = require("./DetailMoneyAccountingPage");
import dataFile = require("./../data");
import AppraisalDom = require("./DetailSalaryAppraisalDom");

export module MoneyAccountingPage {
    export class MoneyAccountingPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class MoneyAccountingPageReact extends basewedPageFile.Web.BaseWebPageReact<MoneyAccountingPageProps, MoneyAccountingPageStates, MoneyAccountingPageAction> implements domCore.IReact {

        public state = new MoneyAccountingPageStates();
        public pSender(): React.ReactElement<any> {
            return <div>
                {this._initMoneyDetial() }
                <div className="YSm-tab-content">
                    {this.props.Vm.TabDomObj.intoDom() }
                </div>
            </div>;
        }


        public _initMoneyDetial(): React.ReactElement<any> {
            return <div className="clearfix YSm-detail-money">
                <ul className="nav nav-pills pull-left">
                    <li className="nav-item"><label>薪资主题：</label><span>{this.props.Vm.PageData.SalaryData.Title}</span></li>
                    <li className="nav-item"><label>薪资套账：</label><span>{this.props.Vm.PageData.SalaryData.TemplateName}</span></li>
                    <li className="nav-item"><label>薪资月份：</label><span>{this.props.Vm.PageData.SalaryData.Month}</span></li>
                    <li className="nav-item"><label>人员总数：</label><span>{this.props.Vm.PageData.SalaryData.UserNumbers}</span></li>
                    <li className="nav-item"><label>薪资总额：</label><span>{this.props.Vm.PageData.SalaryData.SalaryTotal}</span></li>
                </ul>                
            </div>;
        }

        


    }

    export interface IReactMoneyAccountingPageVm extends basewedPageFile.Web.BaseWebPageVm {
        TabDomObj: tabDomFile.TabDom.TabDomVm;
        PageData: dataFile.Data.ISalaryPageData;
        
    }

    export interface IMoneyAccountingPageConfig {
        SalaryPageData: dataFile.Data.ISalaryPageData;
    }
    export class MoneyAccountingPageVm extends basewedPageFile.Web.BaseWebPageVm implements IReactMoneyAccountingPageVm {
        public ReactType = MoneyAccountingPageReact;
        public TabDomObj: tabDomFile.TabDom.TabDomVm;
        public PageData: dataFile.Data.ISalaryPageData;
        public DetailSalaryPage: DetailMoneyAccountingPageFile.DetailMoneyAccountingPage.DetailMoneyAccountingPageVm;
        public AppraisalPage: AppraisalDom.DetailSalaryAppraisalDom.DetailSalaryAppraisalDomVm;
        public fid: string;
        public constructor(config?: IMoneyAccountingPageConfig) {
            super();

            
           
            
        }

        private init(config: IMoneyAccountingPageConfig) {
            if (config) {
                this.PageData = config.SalaryPageData;
            }
            var basicConfig: DetailMoneyAccountingPageFile.DetailMoneyAccountingPage.IDetailMoneyAccountingPageConfig = { SalaryPageData: this.PageData }
            this.DetailSalaryPage = new DetailMoneyAccountingPageFile.DetailMoneyAccountingPage.DetailMoneyAccountingPageVm(basicConfig);

            var AppraisalConfig: AppraisalDom.DetailSalaryAppraisalDom.IDetailSalaryAppraisalDomConfig = { ItemData: this.PageData.ItemList, UserData: this.PageData.UserList, Unid: this.UniId, SalaryData: this.PageData.SalaryData };
            this.AppraisalPage = new AppraisalDom.DetailSalaryAppraisalDom.DetailSalaryAppraisalDomVm(AppraisalConfig);
            this.TabDomObj = new tabDomFile.TabDom.TabDomVm({
                Items: [
                    {
                        Name: "DetailMoneyAccountingPage",
                        Title: "基础工资明细",
                        IsActive: true,
                        //ReloadFun: (vm) => {
                        //    utilFile.Core.Util.Cast<GroupRuleFile.GroupRuleDom.GroupRuleDomVm>(vm).sysPage_load(() => {
                        //        vm.forceUpdate("");
                        //    });
                        //},
                        DomObj: this.DetailSalaryPage
                    },
                    {
                        Name: "DetailSalaryAppraisalDom",
                        Title: "绩效工资明细",
                        IsActive: false,
                        //ReloadFun: (vm) => {
                        //    utilFile.Core.Util.Cast<GroupRuleFile.GroupRuleDom.GroupRuleDomVm>(vm).sysPage_load(() => {
                        //        vm.forceUpdate("");
                        //    });
                        //},
                        DomObj: this.AppraisalPage
                    }
                ]
            });
        }
       
        protected loadPage(callback?: () => any) {
            this.fid = this.Param1;
            urlFile.Core.AkPost("/HospPerformance/HumanResource/GetSalaryDetail", { fid: this.Param1 }, (a) => {
                var config: IMoneyAccountingPageConfig = { SalaryPageData: a.Data }
                this.init(config);
                if (callback) {
                    callback();
                }
            });
        }

    }
    export class MoneyAccountingPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class MoneyAccountingPageProps extends basewedPageFile.Web.BaseWebPageProps<IReactMoneyAccountingPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("MoneyAccountingPage", basewedPageFile.Web.BaseWebPageVm, MoneyAccountingPageVm);

}
