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
import MoneyTemplateFile = require("./MoneyTemplateDom");
import MoneyTemplate = MoneyTemplateFile.MoneyTemplateDom.MoneyTemplateDomReact;
import MoneyTemplateVm = MoneyTemplateFile.MoneyTemplateDom.MoneyTemplateDomVm;
import MoneySettingFile = require("./MoneySettingDom");
import MoneySetting = MoneySettingFile.MoneySettingDom.MoneySettingDomReact;
import MoneySettingVm = MoneySettingFile.MoneySettingDom.MoneySettingDomVm;
import MoneyProjectFile = require("./MoneyProjectDom");
import MoneyProject = MoneyProjectFile.MoneyProjectDom.MoneyProjectDomReact;
import MoneyProjectVm = MoneyProjectFile.MoneyProjectDom.MoneyProjectDomVm;


import TextFile = require("./../../../../02col/01single/Text");
import Text = TextFile.ui.TextReact;
import TextVm = TextFile.ui.TextVm;
import dataFile = require('./../data');
import MoneyProjectDom = require("./MoneyProjectDom");


export module DetailMoneyTemplatePage {
    export class DetailMoneyTemplatePageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class DetailMoneyTemplatePageReact extends basewedPageFile.Web.BaseWebPageReact<DetailMoneyTemplatePageProps, DetailMoneyTemplatePageStates, DetailMoneyTemplatePageAction> implements domCore.IReact {



      
        public state = new DetailMoneyTemplatePageStates();
        public pSender(): React.ReactElement<any> {
            return <div>
                {this._initForm() }
                
                <div className="YSm-tab-content">
                    {this.props.Vm.TabDomObj.intoDom() }
                </div>
            </div>;
        }


        public _initForm(): React.ReactElement<any> {
            return <form className="clearfix">
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 form-group  form-inline clearfix">
                    <label className="col-md-5 col-sm-3 form-control-label text-right">模板名称：</label>
                    <div className="col-md-7 col-sm-9">{this.props.Vm.PageData.SalaryTemplateData.Title }</div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 form-group  form-inline clearfix">
                    <label className="col-md-2 col-sm-3 form-control-label text-right">备注：</label>
                    <div className="col-md-9 col-sm-9">{this.props.Vm.PageData.SalaryTemplateData.Remark }</div>
                </div>               
            </form>;
        }

      
    }

    export interface IReactDetailMoneyTemplatePageVm extends basewedPageFile.Web.BaseWebPageVm {
        TabDomObj: tabDomFile.TabDom.TabDomVm;
        //TextObj: TextFile.ui.TextVm;
        TemplateNameTextVm: TextFile.ui.TextVm;
        TemplateRemarkTextVm: TextFile.ui.TextVm;
        SalaryTemplateData: dataFile.Data.ISalaryTemplate;
        PageData: dataFile.Data.ISalaryItemPageData;
        //Submit(): void;
        // NewMoneyProjectPage: NewMoneyProjectPage.NewMoneyProjectPage.NewMoneyProjectPageVm;
        //MoneyProjectDom :MoneyProjectDom.MoneyProjectDom.MoneyProjectDomVm;
    }

    export interface IDetailMoneyTemplatePageConfig {
        SalaryTemplatePageData: dataFile.Data.ISalaryItemPageData;

    }
    export class DetailMoneyTemplatePageVm extends basewedPageFile.Web.BaseWebPageVm implements IReactDetailMoneyTemplatePageVm {
        public ReactType = DetailMoneyTemplatePageReact;
        public SalaryTemplateData: dataFile.Data.ISalaryTemplate;
        public TabDomObj: tabDomFile.TabDom.TabDomVm;
        public TemplateRemarkTextVm: TextFile.ui.TextVm;
        //public TextObj: TextVm = new TextFile.ui.TextVm;
        public TemplateNameTextVm: TextFile.ui.TextVm;
        public MoneyTemplateObj: MoneyTemplateFile.MoneyTemplateDom.MoneyTemplateDomVm;
        public MoneySettingObj: MoneySettingFile.MoneySettingDom.MoneySettingDomVm;
        public MoneyProjectObj: MoneyProjectFile.MoneyProjectDom.MoneyProjectDomVm;
        public PageData: dataFile.Data.ISalaryItemPageData;
        public SubmitData: dataFile.Data.ISubmitData;

        public constructor(config?: IDetailMoneyTemplatePageConfig) {
            super();
            this.SalaryTemplateData = { FID: "", Title: "", Remark: "" };
            this.SubmitData = { FID: "", Title: "", Remark: "", UsersData: [{ UserId: "", TrueName: "", DeptName: "", PositionName: "", DisplayName: "" }], SalaryItemValues: [{ UserID: "", SalaryItemValue: [{ Value: "", SalaryItemID: { FID: "", Fileds: "", Name: "", Type: "", Detail: "" } }] }], SalaryItemValueOrCount: [{ FID: "", Detail: "", Fileds: "", Name: "", Type: "", ValueOrCount:"" }] } 
            // this.loadItemSelectData();

            this.listenAppEvent("UsersListToMoneySetting", this.UniId, (item: dataFile.Data.IUsersData[]) => {

                this.SubmitData.UsersData = item;
                
                this.IsMulit = true;
                this.IsChange = true;
                this.forceUpdate("");
            });
            this.listenAppEvent("EditMoneyValues", this.UniId, (item: dataFile.Data.ISalaryItemSet) => {
                //var selectedValue = this.SelectorDom.UserListboxObj.dataValueGet();
                if (item.UserID == "all") {
                    this.SubmitData.SalaryItemValues = this.SubmitData.SalaryItemValues.filter(row => {
                        return false;
                    })
                }
                if (item.UserID != "") {
                    this.SubmitData.SalaryItemValues = this.SubmitData.SalaryItemValues.filter(value => {
                        return value.UserID != item.UserID;
                    })
                    this.SubmitData.SalaryItemValues.push(item);
                }
                              
                //this.SalaryItemSetDataList.push(item);
                //this.SalaryItemData=item;
                this.IsMulit = true;
                this.IsChange = true;
                this.forceUpdate("");
            });

        }

        //private init(config: IDetailMoneyTemplatePageConfig) {
        //}

        private init(config: IDetailMoneyTemplatePageConfig) {
            if (config) {
                this.PageData = config.SalaryTemplatePageData;
            }
            var objUserConfig = { UserSelectorData: this.PageData ? this.PageData.UserSelectorData : {}, UniId: this.UniId };
            var objItemConfig = { ItemSelectData: this.PageData ? this.PageData.ItemSelectData : {}, UniId: this.UniId };
            var objMoneySettingConif = { UserList: this.PageData ? this.PageData.UserList : {}, UniId: this.UniId };
            //this.AppraisalObject = new AppraisalObjectFile.AppraisalObjectDom.AppraisalObjectDomVm;
            this.MoneyTemplateObj = new MoneyTemplateFile.MoneyTemplateDom.MoneyTemplateDomVm($.extend({}, objUserConfig, { SelectedUserList: this.PageData ? this.PageData.UserList : [] }));
            this.MoneyProjectObj = new MoneyProjectFile.MoneyProjectDom.MoneyProjectDomVm($.extend({}, objItemConfig, { SalaryItemData: this.PageData ? this.PageData.SalaryItemData : [], SalaryItemValueOrCount: this.PageData ? this.PageData.SalaryItemValueOrCount : [] }));
            this.MoneySettingObj = new MoneySettingFile.MoneySettingDom.MoneySettingDomVm($.extend({}, objMoneySettingConif, { SalaryItemSet: this.PageData ? this.PageData.SalaryItemSet : [] }));

            this.TabDomObj = new tabDomFile.TabDom.TabDomVm({
                Items: [
                    {
                        Name: "MoneyTemplate",
                        Title: "模板人员",
                        IsActive: true,
                        //ReloadFun: (vm) => {
                        //    utilFile.Core.Util.Cast<GroupRuleFile.GroupRuleDom.GroupRuleDomVm>(vm).sysPage_load(() => {
                        //        vm.forceUpdate("");
                        //    });
                        //},
                        DomObj: this.MoneyTemplateObj
                    },
                    {
                        Name: "MoneyProject",
                        Title: "薪资项目",
                        IsActive: false,
                        //ReloadFun: (vm) => {
                        //    utilFile.Core.Util.Cast<GroupRuleFile.GroupRuleDom.GroupRuleDomVm>(vm).sysPage_load(() => {
                        //        vm.forceUpdate("");
                        //    });
                        //},
                        DomObj: this.MoneyProjectObj
                    },
                    {
                        Name: "MoneySetting",
                        Title: "薪资设定",
                        IsActive: false,
                        //ReloadFun: (vm) => {
                        //    utilFile.Core.Util.Cast<GroupRuleFile.GroupRuleDom.GroupRuleDomVm>(vm).sysPage_load(() => {
                        //        vm.forceUpdate("");
                        //    });
                        //},
                        DomObj: this.MoneySettingObj
                    }

                ]
            });
        }

        //protected ReceivePageSend(config: basewedPageFile.Web.IPageActor, obj: any) {
        //    super.ReceivePageSend(config, obj);
        //    this.MoneyProjectObj._addSalaryItem(obj);
        //    //this.MoneyProjectObj.forceUpdate("");
        //}


        protected loadPage(callback?: () => any) {
            var key= this.Param1;
            urlFile.Core.AkPost("/HospPerformance/HumanResource/SalaryTemplatePageData", { templateID: this.Param1 }, (a) => {
                var config: IDetailMoneyTemplatePageConfig = { SalaryTemplatePageData: a.Data }
                this.init(config);
                if (callback) {
                    callback();
                }
            });
           
        }
        
    }
    export class DetailMoneyTemplatePageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class DetailMoneyTemplatePageProps extends basewedPageFile.Web.BaseWebPageProps<IReactDetailMoneyTemplatePageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("DetailMoneyTemplatePage", basewedPageFile.Web.BaseWebPageVm, DetailMoneyTemplatePageVm);

}
