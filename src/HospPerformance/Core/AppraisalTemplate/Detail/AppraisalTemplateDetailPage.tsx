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
import AppraisalObjectFile = require("./AppraisalObjectDetailDom");
import AuthorizeFile = require("./AuthorizeDetailDom");
import appraisalItemFile = require("./AppraisalItemDetailDom");
import GradeDesignFile = require("./GradeDesignDetailDom");

import TextFile = require("./../../../../02col/01single/Text");
import Text = TextFile.ui.TextReact;
import TextVm = TextFile.ui.TextVm;
import baseColFile = require("./../../../../02col/00core/BaseCol");
import comboFile = require("./../../../../02col/02Mulite/Combo");
import dataFile = require("./../data");
import eventFile = require("./../../../../01core/Event");


export module AppraisalTemplateDetailPage {
    export class AppraisalTemplateDetailPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class AppraisalTemplateDetailPageReact extends basewedPageFile.Web.BaseWebPageReact<AppraisalTemplateDetailPageProps,AppraisalTemplateDetailPageStates,AppraisalTemplateDetailPageAction> implements domCore.IReact {

        public state = new AppraisalTemplateDetailPageStates();
        public pSender(): React.ReactElement<any> {
            return <div className="p-t-md">

                {this._initForm() }

                <div className="YSm-tab-content">
                    {this.props.Vm.TabDomObj.intoDom() }
                </div>
            </div>;
        }

        public _initForm(): React.ReactElement<any> {
            return <form className="clearfix">
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 form-group  form-inline clearfix">
                    <label className="col-md-5 col-sm-3 form-control-label text-right">主题：</label>
                    <div className="col-md-7 col-sm-9"><label className="pull-left">{this.props.Vm.PageData.TemplateData.Subject}</label> </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 form-group  form-inline clearfix">
                    <label className="col-md-5 col-sm-3 form-control-label text-right ">考核类型：</label>
                    <div className="col-md-7 col-sm-9"><label className="pull-left">{this.props.Vm.PageData.TemplateData.TypeText}</label></div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 form-group  form-inline clearfix">
                    <label className="col-md-5 col-sm-3 form-control-label text-right">考核结果类型：</label>
                    <div className="col-md-7 col-sm-9"><label className="pull-left">{this.props.Vm.PageData.TemplateData.ResultTypeText}</label></div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group  form-inline clearfix">
                    <label className="col-lg-1 col-md-1 col-sm-3 form-control-label text-right">备注：</label>
                    <div className="col-lg-11 col-md-11 col-sm-9 YSm-textarea">{this.props.Vm.PageData.TemplateData.Remark}</div>
                </div>
            </form>;
        }


    }

    export interface IReactNewAppraisalTemplatePageVm extends basewedPageFile.Web.BaseWebPageVm {
        TabDomObj: tabDomFile.TabDom.TabDomVm;
        TextObj: TextFile.ui.TextVm;
        ColVmObjList: IColVmDic;
        PageData: dataFile.Data.IAppraisalTemplatePageData;
    }

    export interface INewAppraisalTemplatePageConfig {
        TemplatePageData: dataFile.Data.IAppraisalTemplatePageData;
    }

    export interface IColVmDic {
        [name: string]: baseColFile.Core.BaseColVm;
    }

    export class AppraisalTemplateDetailPageVm extends basewedPageFile.Web.BaseWebPageVm implements IReactNewAppraisalTemplatePageVm {
        public ReactType =AppraisalTemplateDetailPageReact;

        public TabDomObj: tabDomFile.TabDom.TabDomVm;

        public AppraisalObject: AppraisalObjectFile.AppraisalObjectDetailDom.AppraisalObjectDetailDomVm;
        public AuthorizeObj: AuthorizeFile.AuthorizeObjectDetailDom.AuthorizeObjectDetailDomVm;
        public AppraisalItemObj: appraisalItemFile.AppraisalItemDetailDom.AppraisalItemDetailDomVm;

        public GradeDesignObj: GradeDesignFile.GradeDesignDetailDom.GradeDesignDetailDomVm;
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
            this.AppraisalObject = new AppraisalObjectFile.AppraisalObjectDetailDom.AppraisalObjectDetailDomVm({ SelectedUserList: this.PageData ? this.PageData.UserList:[] });
            this.AuthorizeObj = new AuthorizeFile.AuthorizeObjectDetailDom.AuthorizeObjectDetailDomVm();
            this.AppraisalItemObj = new appraisalItemFile.AppraisalItemDetailDom.AppraisalItemDetailDomVm({ UniId: this.UniId, RowList: this.PageData ? this.PageData.ItemList:[] });
            this.GradeDesignObj = new GradeDesignFile.GradeDesignDetailDom.GradeDesignDetailDomVm();

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
                        DomObj: this.AppraisalItemObj
                        //ReloadFun: () => {
                        //    this.AppraisalItemObj.IsLoaded = true;
                        //    if (this.Param1 && this.AppraisalItemObj.RowList.length == 0) {
                        //        urlFile.Core.AkPost("/HospPerformance/AppraisalTemplate/FetchTemplateItemList",
                        //            { templateId: this.Param1 }, (a) => {
                        //                if (a.Data) {
                        //                    this.AppraisalItemObj.RowList = a.Data;
                        //                    this.AppraisalItemObj.forceUpdate("");
                        //                }
                        //            });
                        //    }
                        //}
                    },
                    {
                        Name: "GradeDesign",
                        Title: "等级设计",
                        IsActive: false,
                        DomObj: this.GradeDesignObj,
                        ReloadFun: (item) => {
                            var templateId = this.Param1 ? this.Param1 : "";
                            if (!this.GradeDesignObj.IsFetchedData) {
                                urlFile.Core.AkPost("/HospPerformance/AppraisalTemplate/FetchTemplateGradeData",
                                    { templateId: templateId }, (a) => {
                                        this.GradeDesignObj.IsFetchedData = true;
                                        if (a.Data) {
                                            a.Data.TotalScore = this.AppraisalItemObj.TotalScore;
                                            this.GradeDesignObj.init({ TemplateGradeData:a.Data });
                                            this.GradeDesignObj.forceUpdate("");
                                        }
                                    });
                            }
                            else
                            {
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
            if (this.PageData && this.PageData.TemplateData) {
                var type = dataFile.Data.AppraisalResultType.filter((a) => {
                    return a.Value == this.PageData.TemplateData.ResultType
                });
                this.PageData.TemplateData.ResultTypeText = type.length > 0 ? type[0].Text : "";
            }
            //this.initColVm("Subject", "TextVm", "notNull");
            //this.initColVm("Type", "ComboVm", "notNull");
            //this.initColVm("ResultType", "ComboVm", "notNull");
            //this.initColVm("Remark", "TextAreaVm");

            //var resultTypeCombo = utilFile.Core.Util.Cast<comboFile.ui.ComboVm>(this.ColVmObjList["ResultType"]);
            //resultTypeCombo.ItemList = dataFile.Data.AppraisalResultType;
            //resultTypeCombo.dataValueSet(resultTypeCombo.ItemList[0].Value);
            //var typeList: dataFile.Data.IAppraisalTypeData[] = this.PageData ? this.PageData.TypeList : [];
            //var typeComboVm = utilFile.Core.Util.Cast<comboFile.ui.ComboVm>(this.ColVmObjList["Type"]);
            //var itemList = [];
            //if (typeList) {
            //    typeList.forEach(a => {
            //        itemList.push({ Value: a.FID, Text: a.Name });
            //    });
            //}
            //typeComboVm.ItemList = itemList;
            //typeComboVm.dataValueSet(typeComboVm.ItemList[0].Value);
            this.initTabs();
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
                _exciteBean.onChangeHandle((val) => {
                    this.PageData.TemplateData[colName] = val;
                    return true;
                });
            }
            this.ColVmObjList[_name] = _exciteBean;
        }

    }
    export class AppraisalTemplateDetailPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class AppraisalTemplateDetailPageProps extends basewedPageFile.Web.BaseWebPageProps<IReactNewAppraisalTemplatePageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("AppraisalTemplateDetailPage", basewedPageFile.Web.BaseWebPageVm,AppraisalTemplateDetailPageVm);

}
