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
//import BasicInformationFile = require("./BasicInformationDom");
//import BasicInformation = BasicInformationFile.BasicInformationDom.BasicInformationDomReact;
//import BasicInformationVm = BasicInformationFile.BasicInformationDom.BasicInformationDomVm;
import AppraisalObjectFile = require("./AppraisalObjectDom");
import AppraisalObject = AppraisalObjectFile.AppraisalObjectDom.AppraisalObjectDomReact;
import AppraisalObjectVm = AppraisalObjectFile.AppraisalObjectDom.AppraisalObjectDomVm;
import AuthorizeFile = require("./AuthorizeDom");
import Authorize = AuthorizeFile.AuthorizeObjectDom.AuthorizeObjectDomReact;
import AuthorizeVm = AuthorizeFile.AuthorizeObjectDom.AuthorizeObjectDomVm;
//import TestingItemsFile = require("./TestingItemsDom");
//import TestingItems = TestingItemsFile.TestingItemsDom.TestingItemsDomReact;
//import TestingItemsVm = TestingItemsFile.TestingItemsDom.TestingItemsDomVm;
import appraisalItemFile = require("./AppraisalItemDom");
import GradeDesignFile = require("./GradeDesignDom");
import GradeDesign = GradeDesignFile.GradeDesignDom.GradeDesignDomReact;
import GradeDesignVm = GradeDesignFile.GradeDesignDom.GradeDesignDomVm;

import TextFile = require("./../../../../02col/01single/Text");
import Text = TextFile.ui.TextReact;
import TextVm = TextFile.ui.TextVm;
import baseColFile = require("./../../../../02col/00core/BaseCol");
import comboFile = require("./../../../../02col/02Mulite/Combo");
import dataFile = require("./../data");
import eventFile = require("./../../../../01core/Event");


export module NewAppraisalTemplatePage {
    export class NewAppraisalTemplatePageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class NewAppraisalTemplatePageReact extends basewedPageFile.Web.BaseWebPageReact<NewAppraisalTemplatePageProps, NewAppraisalTemplatePageStates, NewAppraisalTemplatePageAction> implements domCore.IReact {

        public state = new NewAppraisalTemplatePageStates();
        public pSender(): React.ReactElement<any> {
            return <div className="p-t-md">

                {this._initForm() }

                <div className="YSm-tab-content">
                    {this.props.Vm.TabDomObj.intoDom() }
                </div>

                <div className="text-center form-group  form-inline clearfix">
                    <a className="btn btn-sm btn-primary" onClick={() => { this.save() } }>保存</a>
                </div>
            </div>;
        }

        public _initForm(): React.ReactElement<any> {
            return <form className="clearfix">
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 form-group  form-inline clearfix">
                    <label className="col-md-5 col-sm-3 form-control-label text-right required">主题：</label>
                    <div className="col-md-7 col-sm-9">{this.props.Vm.ColVmObjList["Subject"].intoDom() }</div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 form-group  form-inline clearfix">
                    <label className="col-md-5 col-sm-3 form-control-label text-right">考核类型：</label>
                    <div className="col-md-7 col-sm-9">{this.props.Vm.ColVmObjList["Type"].intoDom() }</div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 form-group  form-inline clearfix">
                    <label className="col-md-5 col-sm-3 form-control-label text-right required">考核结果类型：</label>
                    <div className="col-md-7 col-sm-9">{this.createResultTypeDom() }</div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group  form-inline clearfix">
                    <label className="col-lg-1 col-md-1 col-sm-3 form-control-label text-right">备注：</label>
                    <div className="col-lg-11 col-md-11 col-sm-9 YSm-textarea">{this.props.Vm.ColVmObjList["Remark"].intoDom() }</div>
                </div>
            </form>;
        }

        private createResultTypeDom(): React.ReactElement<any> {
            if (this.props.Vm.Param1) {
                var item = dataFile.Data.AppraisalResultType.filter(a => {
                    return a.Value == this.props.Vm.PageData.TemplateData["ResultType"];
                });
                // return <label>{item.length > 0 ? item[0].Text : ""}</label>
                this.props.Vm.ColVmObjList["DetailResultType"].dataValueSet(item.length > 0 ? item[0].Text : "");
                return this.props.Vm.ColVmObjList["DetailResultType"].intoDom();
            }
             else
            {
            return this.props.Vm.ColVmObjList["ResultType"].intoDom();
            }
        }

        private save() {
            this.props.Vm.save();
        }

    }

    export interface IReactNewAppraisalTemplatePageVm extends basewedPageFile.Web.BaseWebPageVm {
        TabDomObj: tabDomFile.TabDom.TabDomVm;
        TextObj: TextFile.ui.TextVm;
        ColVmObjList: IColVmDic;
        save(): void;
        PageData: dataFile.Data.IAppraisalTemplatePageData;
    }

    export interface INewAppraisalTemplatePageConfig {
        TemplatePageData: dataFile.Data.IAppraisalTemplatePageData;
    }

    export interface IColVmDic {
        [name: string]: baseColFile.Core.BaseColVm;
    }

    export class NewAppraisalTemplatePageVm extends basewedPageFile.Web.BaseWebPageVm implements IReactNewAppraisalTemplatePageVm {
        public ReactType = NewAppraisalTemplatePageReact;

        public TabDomObj: tabDomFile.TabDom.TabDomVm;

        public AppraisalObject: AppraisalObjectFile.AppraisalObjectDom.AppraisalObjectDomVm;
        public AuthorizeObj: AuthorizeFile.AuthorizeObjectDom.AuthorizeObjectDomVm;
        public AppraisalItemObj: appraisalItemFile.AppraisalItemDom.AppraisalItemDomVm;

        public GradeDesignObj: GradeDesignFile.GradeDesignDom.GradeDesignDomVm;
        public TextObj: TextVm = new TextFile.ui.TextVm;
        public ColVmObjList: IColVmDic = {};
        public PageData: dataFile.Data.IAppraisalTemplatePageData;
        public UniId: string;


        public constructor(config?: INewAppraisalTemplatePageConfig) {
            super();
            this.UniId = eventFile.App.getUniId().toString();
            if (config) {
                this.init(config);
            }
        }

        private initTabs() {
            var objConfig = { UserSelectorData: this.PageData ? this.PageData.UserSelectorData : {}, UniId: this.UniId };
            this.AppraisalObject = new AppraisalObjectFile.AppraisalObjectDom.AppraisalObjectDomVm($.extend({}, objConfig, { SelectedUserList: this.PageData ? this.PageData.UserList : [] }));
            this.AuthorizeObj = new AuthorizeFile.AuthorizeObjectDom.AuthorizeObjectDomVm(objConfig);
            this.AppraisalItemObj = new appraisalItemFile.AppraisalItemDom.AppraisalItemDomVm({ UniId: this.UniId, RowList: this.PageData ? this.PageData.ItemList : [] });
            this.GradeDesignObj = new GradeDesignFile.GradeDesignDom.GradeDesignDomVm();

            this.TabDomObj = new tabDomFile.TabDom.TabDomVm({
                Items: [
                    {
                        Name: "AppraisalObject",
                        Title: "考核对象",
                        IsActive: true,
                        DomObj: this.AppraisalObject,
                        ReloadFun: () => {
                        }
                    },
                    {
                        Name: "Authorize",
                        Title: "授权范围",
                        IsActive: false,
                        DomObj: this.AuthorizeObj,
                        ReloadFun: () => {
                            if (this.Param1 && this.AuthorizeObj.SelectedUserList.length == 0) {
                                urlFile.Core.AkPost("/HospPerformance/AppraisalTemplate/FetchTemplateAuthUserList",
                                    { templateId: this.Param1 }, (a) => {
                                        if (a.Data) {
                                            this.AuthorizeObj.init({ SelectedUserList: a.Data });
                                            this.AuthorizeObj.forceUpdate("");
                                        }
                                    });
                            }
                        }
                    },
                    {
                        Name: "AppraisalItems",
                        Title: "考核项目",
                        IsActive: false,
                        DomObj: this.AppraisalItemObj,
                        ReloadFun: () => {
                            //this.AppraisalItemObj.IsLoaded = true;
                            //if (this.Param1 && this.AppraisalItemObj.RowList.length == 0) {
                            //    urlFile.Core.AkPost("/HospPerformance/AppraisalTemplate/FetchTemplateItemList",
                            //        { templateId: this.Param1 }, (a) => {
                            //            if (a.Data) {
                            //                this.AppraisalItemObj.RowList = a.Data;
                            //                this.AppraisalItemObj.forceUpdate("");
                            //            }
                            //        });
                            //}
                        }
                    },
                    {
                        Name: "GradeDesign",
                        Title: "等级设计",
                        IsActive: false,
                        DomObj: this.GradeDesignObj,
                        ReloadFun: (item) => {
                            if (this.AppraisalItemObj.TotalScore == "0") {
                                alert("请先选择项目");
                                this.TabDomObj.tabActive(this.TabDomObj.TabDomItemList[2]);
                                return;
                            }
                            var templateId = this.Param1 ? this.Param1 : "";
                            if (!this.GradeDesignObj.IsFetchedData) {
                                urlFile.Core.AkPost("/HospPerformance/AppraisalTemplate/FetchTemplateGradeData",
                                    { templateId: templateId }, (a) => {
                                        if (a.Data) {
                                            this.GradeDesignObj.IsFetchedData = true;
                                            a.Data.TotalScore = this.AppraisalItemObj.TotalScore;
                                            this.GradeDesignObj.init({ TemplateGradeData: a.Data });
                                            this.GradeDesignObj.forceUpdate("");
                                        }
                                    });
                            }
                            else {
                                this.GradeDesignObj.TemplateGradeData.TotalScore = this.AppraisalItemObj.TotalScore;
                                this.GradeDesignObj.forceUpdate("");

                            }

                        }
                    }
                ]
            });
        }

        private init(config?: INewAppraisalTemplatePageConfig) {
            if (config) {
                this.PageData = config.TemplatePageData;
            }
            this.initColVm("Subject", "TextVm", "notNull");
            this.initColVm("Type", "ComboVm");
            if (this.Param1) {
                this.initColVm("DetailResultType", "DetailVm");
                window["ResultType" + this.UniId] = this.PageData.TemplateData["ResultType"];
            }
            else {
                this.initColVm("ResultType", "ComboVm", "notNull");
                var resultTypeCombo = utilFile.Core.Util.Cast<comboFile.ui.ComboVm>(this.ColVmObjList["ResultType"]);
                resultTypeCombo.ItemList = dataFile.Data.AppraisalResultType;
                var resultTypeVal = this.PageData.TemplateData && this.PageData.TemplateData["ResultType"] ? this.PageData.TemplateData["ResultType"] : "0";
                resultTypeCombo.dataValueSet(resultTypeVal);
            }
            this.initColVm("Remark", "TextAreaVm");
            var typeList: dataFile.Data.IAppraisalTypeData[] = this.PageData ? this.PageData.TypeList : [];
            var typeComboVm = utilFile.Core.Util.Cast<comboFile.ui.ComboVm>(this.ColVmObjList["Type"]);
            var itemList = [];
            if (typeList) {
                typeList.forEach(a => {
                    itemList.push({ Value: a.FID, Text: a.Name });
                });
            }
            typeComboVm.ItemList = itemList;
            if (itemList.length > 0) {
                typeComboVm.dataValueSet(typeComboVm.ItemList[0].Value);
            }
            this.initTabs();
        }

        public save() {
            var isLegal = this.legal();
            if (!isLegal) {
                alert("输入的数据有误，请检查！");
                return;
            }
            window["ResultType" + this.UniId] = null;
            var submitData: dataFile.Data.IAppraisalTemplateSubmitData = {};
            submitData.TemplateData = this.PageData.TemplateData;
            submitData.TemplateUserIds = this.AppraisalObject.getData();
            submitData.AuthUserIds = this.AuthorizeObj.getData();
            submitData.ItemIds = this.AppraisalItemObj.getData();
            submitData.GradeList = this.GradeDesignObj.getData();

            urlFile.Core.AkPost("/HospPerformance/AppraisalTemplate/AddOrModifyTemplate",
                { templateData: JSON.stringify(submitData) }, (a) => {
                    if (a.Content == "ok") {
                        urlFile.Core.AkUrl.Current().openUrl("$$module/HospPerformance/Core/performance_core_Appraisal_Template", true);

                    }
                    else {
                        utilFile.Core.Util.Noty("数据新增失败");
                    }
                });
        }

        public legal(): boolean {
            var _res = true;
            for (var vn in this.ColVmObjList) {
                var _obj = this.ColVmObjList[vn];
                if (_obj) {
                    _res = _res && _obj.legal();
                }
            }
            return _res;
        }

        protected loadPage(callback?: () => any) {

            urlFile.Core.AkPost("/HospPerformance/AppraisalTemplate/FetchTemplatePageData", { templateId: this.Param1 }, (a) => {
                var config: INewAppraisalTemplatePageConfig = { TemplatePageData: a.Data };
                this.init(config);
                if (callback) {
                    callback();
                }
            });
        }

        private initColVm(colName: string, colType: string, legal?: string) {
            var _name = colName.toString()
            var isexcite = false;

            for (var vn in this.ColVmObjList) {
                var _obj = this.ColVmObjList[_name];
                if (_obj) {
                    isexcite = true;
                    _exciteBean = _obj;
                }
            }
            if (!isexcite) {
                var _exciteBean = iocFile.Core.Ioc.Current().FetchInstance<baseColFile.Core.BaseColVm>(colType, baseColFile.Core.BaseColVm);
                _exciteBean.Tag = colName;
                _exciteBean.LegalObj.Kind = legal ? legal : "";
                _exciteBean.IsMulit = true;
                this.PageData.TemplateData = this.PageData.TemplateData ? this.PageData.TemplateData : {};
                _exciteBean.dataValueSet(this.PageData.TemplateData[colName]);
                if (colName == "ResultType") {
                    window["ResultType" + this.UniId] = this.PageData.TemplateData[colName];
                    _exciteBean.onChangeHandle((val) => {
                        window["ResultType" + this.UniId] = val;
                        this.PageData.TemplateData[colName] = val;
                        return true;
                    });
                }
                else {
                    _exciteBean.onChangeHandle((val) => {
                        this.PageData.TemplateData[colName] = val;
                        return true;
                    });
                }
            }
            this.ColVmObjList[_name] = _exciteBean;
        }

    }
    export class NewAppraisalTemplatePageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class NewAppraisalTemplatePageProps extends basewedPageFile.Web.BaseWebPageProps<IReactNewAppraisalTemplatePageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("NewAppraisalTemplatePage", basewedPageFile.Web.BaseWebPageVm, NewAppraisalTemplatePageVm);

}
