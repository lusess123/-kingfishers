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

import NewMoneyProjectPage = require("./NewMoneyProjectPage");
import TextFile = require("./../../../../02col/01single/Text");
import Text = TextFile.ui.TextReact;
import TextVm = TextFile.ui.TextVm;
import dataFile = require('./../data');
import MoneyProjectDom = require("./MoneyProjectDom");


export module NewMoneyTemplatePage {
    export class NewMoneyTemplatePageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class NewMoneyTemplatePageReact extends basewedPageFile.Web.BaseWebPageReact<NewMoneyTemplatePageProps, NewMoneyTemplatePageStates, NewMoneyTemplatePageAction> implements domCore.IReact {



        private inputTemplateName(): React.ReactElement<any> {
            if (!this.props.Vm.TemplateNameTextVm) {
                var _vm = this.getInputVm(this.props.Vm.PageData.SalaryTemplateData.Title, "notNull");
                this.props.Vm.TemplateNameTextVm = _vm;

                _vm.onChangeHandle((str) => {
                    this.props.Vm.PageData.SalaryTemplateData.Title = str;
                    return true;
                });
            }
            return this.props.Vm.TemplateNameTextVm.intoDom();
        }

        private inputTemplateRemark(): React.ReactElement<any> {
            if (!this.props.Vm.TemplateRemarkTextVm) {
                var _vm = this.getInputVm(this.props.Vm.PageData.SalaryTemplateData.Remark, "notNull");
                this.props.Vm.TemplateRemarkTextVm = _vm;

                _vm.onChangeHandle((str) => {
                    this.props.Vm.PageData.SalaryTemplateData.Remark = str;
                    return true;
                });
            }
            return this.props.Vm.TemplateRemarkTextVm.intoDom();
        }

        private getInputVm(val: string, legalKind: string, fun?: Function): TextFile.ui.TextVm {

            var _bean = new TextFile.ui.TextVm();
            _bean.dataValueSet(val);
            _bean.LegalObj.Kind = legalKind;

            return _bean;
        }
        public state = new NewMoneyTemplatePageStates();
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
                    <div className="col-md-7 col-sm-9">{this.inputTemplateName() }</div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 form-group  form-inline clearfix">
                    <label className="col-md-2 col-sm-3 form-control-label text-right">备注：</label>
                    <div className="col-md-9 col-sm-9">{this.inputTemplateRemark() }</div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 form-group  form-inline clearfix">
                    <a className="btn btn-sm btn-primary" onClick={() => { this.Submit(); } }>保存</a>
                </div>
            </form>;
        }

        public Submit() {

            this.props.Vm.Submit();
        }

    }

    export interface IReactNewMoneyTemplatePageVm extends basewedPageFile.Web.BaseWebPageVm {
        TabDomObj: tabDomFile.TabDom.TabDomVm;
        //TextObj: TextFile.ui.TextVm;
        TemplateNameTextVm: TextFile.ui.TextVm;
        TemplateRemarkTextVm: TextFile.ui.TextVm;
        SalaryTemplateData: dataFile.Data.ISalaryTemplate;
        PageData: dataFile.Data.ISalaryItemPageData;
        Submit(): void;
        // NewMoneyProjectPage: NewMoneyProjectPage.NewMoneyProjectPage.NewMoneyProjectPageVm;
        //MoneyProjectDom :MoneyProjectDom.MoneyProjectDom.MoneyProjectDomVm;
    }

    export interface INewMoneyTemplatePageConfig {
        SalaryTemplatePageData: dataFile.Data.ISalaryItemPageData;

    }
    export class NewMoneyTemplatePageVm extends basewedPageFile.Web.BaseWebPageVm implements IReactNewMoneyTemplatePageVm {
        public ReactType = NewMoneyTemplatePageReact;
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
        public SalaryItemData: dataFile.Data.ISalaryItem[];
        public ItemValueOrCount: dataFile.Data.SalaryItemValueOrCount[] = [];

        public constructor(config?: INewMoneyTemplatePageConfig) {
            super();
            this.SalaryTemplateData = { FID: "", Title: "", Remark: "" };
            this.SubmitData = { FID: "", Title: "", Remark: "", UsersData: [{ UserId: "", TrueName: "", DeptName: "", PositionName: "", DisplayName: "" }], SalaryItemValues: [{ UserID: "", SalaryItemValue: [{ Value: "", SalaryItemID: { FID: "", Fileds: "", Name: "", Type: "", Detail: "" } }] }], SalaryItemValueOrCount: [{ FID: "", Detail: "", Fileds: "", Name: "", Type: "", ValueOrCount: "" }] }
            // this.loadItemSelectData();
            this.listenAppEvent("ItemListToMoneySetting", this.UniId, (item: dataFile.Data.ISalaryItem[]) => {
                //var selectedValue = this.SelectorDom.UserListboxObj.dataValueGet();
                this.SalaryItemData = item;
                this.ItemValueOrCount = this.ItemValueOrCount.filter(row => {
                    return false;
                })
                this.SalaryItemData.map(a => {
                    var config: dataFile.Data.SalaryItemValueOrCount = { FID: "", Fileds: "", Detail: "", Name: "", Type: "", ValueOrCount: "" }
                    config.FID = a.FID;
                    config.Detail = a.Detail;
                    config.Fileds = a.Fileds;
                    config.Name = a.Name;
                    config.Type = a.Type;
                    this.SubmitData.SalaryItemValueOrCount = this.SubmitData.SalaryItemValueOrCount.filter(row => {
                        if (a.FID == row.FID) {
                            config.ValueOrCount = row.ValueOrCount;
                        }
                        return row.FID != a.FID;
                    })
                    this.ItemValueOrCount.push(config);
                })
                this.SubmitData.SalaryItemValueOrCount = this.ItemValueOrCount;
                this.SubmitData.SalaryItemValueOrCount.map(a => {
                    if (a.ValueOrCount == "" && a.Type != "计算项") {
                        a.ValueOrCount = "10";
                    }
                })
                this.IsMulit = true;
                this.IsChange = true;
                this.forceUpdate("");
            });
            this.listenAppEvent("UsersListToMoneySetting", this.UniId, (item: dataFile.Data.IUsersData[]) => {

                this.SubmitData.UsersData = item;

                this.IsMulit = true;
                this.IsChange = true;
                this.forceUpdate("");
            });
            this.listenAppEvent("SendToPage", this.UniId, (str: dataFile.Data.SalaryItemValueOrCount) => {

                this.SubmitData.SalaryItemValueOrCount = this.SubmitData.SalaryItemValueOrCount.filter(row => {
                    return row.FID != str.FID;
                })
                this.SubmitData.SalaryItemValueOrCount.push(str);

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

        //private init(config: INewMoneyTemplatePageConfig) {
        //}

        private init(config: INewMoneyTemplatePageConfig) {
            if (config) {
                this.PageData = config.SalaryTemplatePageData;
                this.SubmitData.FID = config.SalaryTemplatePageData.SalaryTemplateData.FID;
                this.SubmitData.Remark = config.SalaryTemplatePageData.SalaryTemplateData.Remark;
                this.SubmitData.Title = config.SalaryTemplatePageData.SalaryTemplateData.Title;
                this.SubmitData.UsersData = config.SalaryTemplatePageData.UserList;
                this.SubmitData.SalaryItemValues = config.SalaryTemplatePageData.SalaryItemSet;
                this.SubmitData.SalaryItemValueOrCount = config.SalaryTemplatePageData.SalaryItemValueOrCount;
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

        public Submit() {
            debugger;
            var templateName = this.PageData.SalaryTemplateData.Title;
            var remark = this.PageData.SalaryTemplateData.Remark;
            this.SubmitData.FID = this.PageData.SalaryTemplateData.FID ? this.PageData.SalaryTemplateData.FID : null;
            this.SubmitData.Title = templateName;
            this.SubmitData.Remark = remark;
            var Userlist = this.SubmitData.UsersData;
            var Value = this.SubmitData.SalaryItemValues;
            var itemData = this.SubmitData.SalaryItemValueOrCount;
            var res = false;
            var nres = false;
            itemData.map(a => {
                if (a.ValueOrCount == "") {
                    res = true;                    
                }
                if (a.Name == "实发工资") {
                    nres = true;
                }
            })                  
            if (templateName == "" || templateName == undefined || templateName == null) {
                alert("模板名称必填");
                return false;
            }   
            if (Userlist[0].UserId == "") {
                alert("请选择人员");
                return false;
            }
            if (res) {
                alert("请输入薪资项目的值或计算公式");
                return false;
            }
            if (!nres) {
                alert("请选择实发工资项目");
                return false;
            }
            var valueRes = false;
            Value.map(a => {
                if (a.UserID == "") {
                    valueRes = true;
                }
                a.SalaryItemValue.map(b => {
                    if (b.Value == "") {
                        valueRes = true;
                    }
                })
            })
            if (Value == undefined) {
                alert("请设定薪资");
                return false;
            }
            if (Value[0].UserID == "" && Value.length <= 0) {
                alert("请设定薪资");
                return false;
            }
            if (valueRes) {
                alert("请设定薪资");
                return false;
            }
            var _jsonData = JSON.stringify(this.SubmitData);
            //alert(_jsonData);
            urlFile.Core.AkPost("/HospPerformance/HumanResource/SubmitSalaryTemplateValue", { data: _jsonData }, (res) => {
                if (res == "true") {
                    alert("提交成功")
                    utilFile.Core.Util.Noty("数据编辑成功");
                    //urlFile.Core.AkUrl.Current().openUrl('', false, () => { })
                    //页面刷新
                    urlFile.Core.AkUrl.Current().openUrl(
                        "$$module/HospPerformance/HumanResource/performance_hr_Salary_Template",
                        false,
                        () => { }
                    );
                } else if (res == "false") {
                    alert("提交失败")
                } else {
                    alert(res);
                }
            })

        }
        protected loadPage(callback?: () => any) {
            var key = this.Param1;
            urlFile.Core.AkPost("/HospPerformance/HumanResource/SalaryTemplatePageData", { templateID: this.Param1 }, (a) => {
                var config: INewMoneyTemplatePageConfig = { SalaryTemplatePageData: a.Data }
                config.SalaryTemplatePageData.SalaryTemplateData.FID = key;
                this.init(config);
                if (callback) {
                    callback();
                }
            });
        }

    }
    export class NewMoneyTemplatePageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class NewMoneyTemplatePageProps extends basewedPageFile.Web.BaseWebPageProps<IReactNewMoneyTemplatePageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("NEWMONEYTEMPLATEPAGE", basewedPageFile.Web.BaseWebPageVm, NewMoneyTemplatePageVm);

}
