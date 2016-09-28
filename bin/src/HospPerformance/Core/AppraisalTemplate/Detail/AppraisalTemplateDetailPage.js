var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/Ioc", "./../../../../01core/Url", "./../../../../04page/BaseWebPage", "react", "./../../../../05tool/TabDom", "./AppraisalObjectDetailDom", "./AuthorizeDetailDom", "./AppraisalItemDetailDom", "./GradeDesignDetailDom", "./../../../../02col/01single/Text", "./../../../../02col/00core/BaseCol", "./../data", "./../../../../01core/Event"], function (require, exports, iocFile, urlFile, basewedPageFile, React, tabDomFile, AppraisalObjectFile, AuthorizeFile, appraisalItemFile, GradeDesignFile, TextFile, baseColFile, dataFile, eventFile) {
    "use strict";
    var AppraisalTemplateDetailPage;
    (function (AppraisalTemplateDetailPage) {
        var AppraisalTemplateDetailPageAction = (function (_super) {
            __extends(AppraisalTemplateDetailPageAction, _super);
            function AppraisalTemplateDetailPageAction() {
                _super.apply(this, arguments);
            }
            return AppraisalTemplateDetailPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        AppraisalTemplateDetailPage.AppraisalTemplateDetailPageAction = AppraisalTemplateDetailPageAction;
        var AppraisalTemplateDetailPageReact = (function (_super) {
            __extends(AppraisalTemplateDetailPageReact, _super);
            function AppraisalTemplateDetailPageReact() {
                _super.apply(this, arguments);
                this.state = new AppraisalTemplateDetailPageStates();
            }
            AppraisalTemplateDetailPageReact.prototype.pSender = function () {
                return React.createElement("div", {className: "p-t-md"}, this._initForm(), React.createElement("div", {className: "YSm-tab-content"}, this.props.Vm.TabDomObj.intoDom()));
            };
            AppraisalTemplateDetailPageReact.prototype._initForm = function () {
                return React.createElement("form", {className: "clearfix"}, React.createElement("div", {className: "col-lg-3 col-md-3 col-sm-6 col-xs-6 form-group  form-inline clearfix"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label text-right"}, "主题："), React.createElement("div", {className: "col-md-7 col-sm-9"}, React.createElement("label", {className: "pull-left"}, this.props.Vm.PageData.TemplateData.Subject), " ")), React.createElement("div", {className: "col-lg-3 col-md-3 col-sm-6 col-xs-6 form-group  form-inline clearfix"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label text-right "}, "考核类型："), React.createElement("div", {className: "col-md-7 col-sm-9"}, React.createElement("label", {className: "pull-left"}, this.props.Vm.PageData.TemplateData.TypeText))), React.createElement("div", {className: "col-lg-3 col-md-3 col-sm-6 col-xs-6 form-group  form-inline clearfix"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label text-right"}, "考核结果类型："), React.createElement("div", {className: "col-md-7 col-sm-9"}, React.createElement("label", {className: "pull-left"}, this.props.Vm.PageData.TemplateData.ResultTypeText))), React.createElement("div", {className: "col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group  form-inline clearfix"}, React.createElement("label", {className: "col-lg-1 col-md-1 col-sm-3 form-control-label text-right"}, "备注："), React.createElement("div", {className: "col-lg-11 col-md-11 col-sm-9 YSm-textarea"}, this.props.Vm.PageData.TemplateData.Remark)));
            };
            return AppraisalTemplateDetailPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        AppraisalTemplateDetailPage.AppraisalTemplateDetailPageReact = AppraisalTemplateDetailPageReact;
        var AppraisalTemplateDetailPageVm = (function (_super) {
            __extends(AppraisalTemplateDetailPageVm, _super);
            function AppraisalTemplateDetailPageVm(config) {
                _super.call(this);
                this.ReactType = AppraisalTemplateDetailPageReact;
                this.TextObj = new TextFile.ui.TextVm;
                this.ColVmObjList = {};
                this.UniId = eventFile.App.getUniId().toString();
                if (config) {
                    this.init(config);
                }
            }
            AppraisalTemplateDetailPageVm.prototype.initTabs = function () {
                var _this = this;
                this.AppraisalObject = new AppraisalObjectFile.AppraisalObjectDetailDom.AppraisalObjectDetailDomVm({ SelectedUserList: this.PageData ? this.PageData.UserList : [] });
                this.AuthorizeObj = new AuthorizeFile.AuthorizeObjectDetailDom.AuthorizeObjectDetailDomVm();
                this.AppraisalItemObj = new appraisalItemFile.AppraisalItemDetailDom.AppraisalItemDetailDomVm({ UniId: this.UniId, RowList: this.PageData ? this.PageData.ItemList : [] });
                this.GradeDesignObj = new GradeDesignFile.GradeDesignDetailDom.GradeDesignDetailDomVm();
                this.TabDomObj = new tabDomFile.TabDom.TabDomVm({
                    Items: [
                        {
                            Name: "AppraisalObject",
                            Title: "考核对象",
                            IsActive: true,
                            DomObj: this.AppraisalObject,
                            ReloadFun: function () {
                            }
                        },
                        {
                            Name: "Authorize",
                            Title: "授权范围",
                            IsActive: false,
                            DomObj: this.AuthorizeObj,
                            ReloadFun: function () {
                                if (_this.Param1 && _this.AuthorizeObj.SelectedUserList.length == 0) {
                                    urlFile.Core.AkPost("/HospPerformance/AppraisalTemplate/FetchTemplateAuthUserList", { templateId: _this.Param1 }, function (a) {
                                        if (a.Data) {
                                            _this.AuthorizeObj.init({ SelectedUserList: a.Data });
                                            _this.AuthorizeObj.forceUpdate("");
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
                        },
                        {
                            Name: "GradeDesign",
                            Title: "等级设计",
                            IsActive: false,
                            DomObj: this.GradeDesignObj,
                            ReloadFun: function (item) {
                                var templateId = _this.Param1 ? _this.Param1 : "";
                                if (!_this.GradeDesignObj.IsFetchedData) {
                                    urlFile.Core.AkPost("/HospPerformance/AppraisalTemplate/FetchTemplateGradeData", { templateId: templateId }, function (a) {
                                        _this.GradeDesignObj.IsFetchedData = true;
                                        if (a.Data) {
                                            a.Data.TotalScore = _this.AppraisalItemObj.TotalScore;
                                            _this.GradeDesignObj.init({ TemplateGradeData: a.Data });
                                            _this.GradeDesignObj.forceUpdate("");
                                        }
                                    });
                                }
                                else {
                                    _this.GradeDesignObj.TemplateGradeData.TotalScore = _this.AppraisalItemObj.TotalScore;
                                    _this.GradeDesignObj.forceUpdate("");
                                }
                            }
                        }
                    ]
                });
            };
            AppraisalTemplateDetailPageVm.prototype.init = function (config) {
                var _this = this;
                if (config) {
                    this.PageData = config.TemplatePageData;
                }
                if (this.PageData && this.PageData.TemplateData) {
                    var type = dataFile.Data.AppraisalResultType.filter(function (a) {
                        return a.Value == _this.PageData.TemplateData.ResultType;
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
            };
            AppraisalTemplateDetailPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                urlFile.Core.AkPost("/HospPerformance/AppraisalTemplate/FetchTemplatePageData", { templateId: this.Param1 }, function (a) {
                    var config = { TemplatePageData: a.Data };
                    _this.init(config);
                    if (callback) {
                        callback();
                    }
                });
            };
            AppraisalTemplateDetailPageVm.prototype.initColVm = function (colName, colType, legal) {
                var _this = this;
                var _name = colName.toString();
                var isexcite = false;
                for (var vn in this.ColVmObjList) {
                    var _obj = this.ColVmObjList[_name];
                    if (_obj) {
                        isexcite = true;
                        _exciteBean = _obj;
                    }
                }
                if (!isexcite) {
                    var _exciteBean = iocFile.Core.Ioc.Current().FetchInstance(colType, baseColFile.Core.BaseColVm);
                    _exciteBean.Tag = colName;
                    _exciteBean.LegalObj.Kind = legal ? legal : "";
                    _exciteBean.IsMulit = true;
                    this.PageData.TemplateData = this.PageData.TemplateData ? this.PageData.TemplateData : {};
                    _exciteBean.dataValueSet(this.PageData.TemplateData[colName]);
                    _exciteBean.onChangeHandle(function (val) {
                        _this.PageData.TemplateData[colName] = val;
                        return true;
                    });
                }
                this.ColVmObjList[_name] = _exciteBean;
            };
            return AppraisalTemplateDetailPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        AppraisalTemplateDetailPage.AppraisalTemplateDetailPageVm = AppraisalTemplateDetailPageVm;
        var AppraisalTemplateDetailPageStates = (function (_super) {
            __extends(AppraisalTemplateDetailPageStates, _super);
            function AppraisalTemplateDetailPageStates() {
                _super.apply(this, arguments);
            }
            return AppraisalTemplateDetailPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        AppraisalTemplateDetailPage.AppraisalTemplateDetailPageStates = AppraisalTemplateDetailPageStates;
        var AppraisalTemplateDetailPageProps = (function (_super) {
            __extends(AppraisalTemplateDetailPageProps, _super);
            function AppraisalTemplateDetailPageProps() {
                _super.apply(this, arguments);
            }
            return AppraisalTemplateDetailPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        AppraisalTemplateDetailPage.AppraisalTemplateDetailPageProps = AppraisalTemplateDetailPageProps;
        iocFile.Core.Ioc.Current().RegisterType("AppraisalTemplateDetailPage", basewedPageFile.Web.BaseWebPageVm, AppraisalTemplateDetailPageVm);
    })(AppraisalTemplateDetailPage = exports.AppraisalTemplateDetailPage || (exports.AppraisalTemplateDetailPage = {}));
});
