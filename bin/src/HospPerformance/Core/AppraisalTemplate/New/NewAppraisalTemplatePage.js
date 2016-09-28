var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/Ioc", "./../../../../01core/Util", "./../../../../01core/Url", "./../../../../04page/BaseWebPage", "react", "./../../../../05tool/TabDom", "./AppraisalObjectDom", "./AuthorizeDom", "./AppraisalItemDom", "./GradeDesignDom", "./../../../../02col/01single/Text", "./../../../../02col/00core/BaseCol", "./../data", "./../../../../01core/Event"], function (require, exports, iocFile, utilFile, urlFile, basewedPageFile, React, tabDomFile, AppraisalObjectFile, AuthorizeFile, appraisalItemFile, GradeDesignFile, TextFile, baseColFile, dataFile, eventFile) {
    "use strict";
    var NewAppraisalTemplatePage;
    (function (NewAppraisalTemplatePage) {
        var NewAppraisalTemplatePageAction = (function (_super) {
            __extends(NewAppraisalTemplatePageAction, _super);
            function NewAppraisalTemplatePageAction() {
                _super.apply(this, arguments);
            }
            return NewAppraisalTemplatePageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        NewAppraisalTemplatePage.NewAppraisalTemplatePageAction = NewAppraisalTemplatePageAction;
        var NewAppraisalTemplatePageReact = (function (_super) {
            __extends(NewAppraisalTemplatePageReact, _super);
            function NewAppraisalTemplatePageReact() {
                _super.apply(this, arguments);
                this.state = new NewAppraisalTemplatePageStates();
            }
            NewAppraisalTemplatePageReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "p-t-md"}, this._initForm(), React.createElement("div", {className: "YSm-tab-content"}, this.props.Vm.TabDomObj.intoDom()), React.createElement("div", {className: "text-center form-group  form-inline clearfix"}, React.createElement("a", {className: "btn btn-sm btn-primary", onClick: function () { _this.save(); }}, "保存")));
            };
            NewAppraisalTemplatePageReact.prototype._initForm = function () {
                return React.createElement("form", {className: "clearfix"}, React.createElement("div", {className: "col-lg-3 col-md-3 col-sm-6 col-xs-6 form-group  form-inline clearfix"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label text-right required"}, "主题："), React.createElement("div", {className: "col-md-7 col-sm-9"}, this.props.Vm.ColVmObjList["Subject"].intoDom())), React.createElement("div", {className: "col-lg-3 col-md-3 col-sm-6 col-xs-6 form-group  form-inline clearfix"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label text-right"}, "考核类型："), React.createElement("div", {className: "col-md-7 col-sm-9"}, this.props.Vm.ColVmObjList["Type"].intoDom())), React.createElement("div", {className: "col-lg-3 col-md-3 col-sm-6 col-xs-6 form-group  form-inline clearfix"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label text-right required"}, "考核结果类型："), React.createElement("div", {className: "col-md-7 col-sm-9"}, this.createResultTypeDom())), React.createElement("div", {className: "col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group  form-inline clearfix"}, React.createElement("label", {className: "col-lg-1 col-md-1 col-sm-3 form-control-label text-right"}, "备注："), React.createElement("div", {className: "col-lg-11 col-md-11 col-sm-9 YSm-textarea"}, this.props.Vm.ColVmObjList["Remark"].intoDom())));
            };
            NewAppraisalTemplatePageReact.prototype.createResultTypeDom = function () {
                var _this = this;
                if (this.props.Vm.Param1) {
                    var item = dataFile.Data.AppraisalResultType.filter(function (a) {
                        return a.Value == _this.props.Vm.PageData.TemplateData["ResultType"];
                    });
                    // return <label>{item.length > 0 ? item[0].Text : ""}</label>
                    this.props.Vm.ColVmObjList["DetailResultType"].dataValueSet(item.length > 0 ? item[0].Text : "");
                    return this.props.Vm.ColVmObjList["DetailResultType"].intoDom();
                }
                else {
                    return this.props.Vm.ColVmObjList["ResultType"].intoDom();
                }
            };
            NewAppraisalTemplatePageReact.prototype.save = function () {
                this.props.Vm.save();
            };
            return NewAppraisalTemplatePageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        NewAppraisalTemplatePage.NewAppraisalTemplatePageReact = NewAppraisalTemplatePageReact;
        var NewAppraisalTemplatePageVm = (function (_super) {
            __extends(NewAppraisalTemplatePageVm, _super);
            function NewAppraisalTemplatePageVm(config) {
                _super.call(this);
                this.ReactType = NewAppraisalTemplatePageReact;
                this.TextObj = new TextFile.ui.TextVm;
                this.ColVmObjList = {};
                this.UniId = eventFile.App.getUniId().toString();
                if (config) {
                    this.init(config);
                }
            }
            NewAppraisalTemplatePageVm.prototype.initTabs = function () {
                var _this = this;
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
                            DomObj: this.AppraisalItemObj,
                            ReloadFun: function () {
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
                            ReloadFun: function (item) {
                                if (_this.AppraisalItemObj.TotalScore == "0") {
                                    alert("请先选择项目");
                                    _this.TabDomObj.tabActive(_this.TabDomObj.TabDomItemList[2]);
                                    return;
                                }
                                var templateId = _this.Param1 ? _this.Param1 : "";
                                if (!_this.GradeDesignObj.IsFetchedData) {
                                    urlFile.Core.AkPost("/HospPerformance/AppraisalTemplate/FetchTemplateGradeData", { templateId: templateId }, function (a) {
                                        if (a.Data) {
                                            _this.GradeDesignObj.IsFetchedData = true;
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
            NewAppraisalTemplatePageVm.prototype.init = function (config) {
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
                    var resultTypeCombo = utilFile.Core.Util.Cast(this.ColVmObjList["ResultType"]);
                    resultTypeCombo.ItemList = dataFile.Data.AppraisalResultType;
                    var resultTypeVal = this.PageData.TemplateData && this.PageData.TemplateData["ResultType"] ? this.PageData.TemplateData["ResultType"] : "0";
                    resultTypeCombo.dataValueSet(resultTypeVal);
                }
                this.initColVm("Remark", "TextAreaVm");
                var typeList = this.PageData ? this.PageData.TypeList : [];
                var typeComboVm = utilFile.Core.Util.Cast(this.ColVmObjList["Type"]);
                var itemList = [];
                if (typeList) {
                    typeList.forEach(function (a) {
                        itemList.push({ Value: a.FID, Text: a.Name });
                    });
                }
                typeComboVm.ItemList = itemList;
                if (itemList.length > 0) {
                    typeComboVm.dataValueSet(typeComboVm.ItemList[0].Value);
                }
                this.initTabs();
            };
            NewAppraisalTemplatePageVm.prototype.save = function () {
                var isLegal = this.legal();
                if (!isLegal) {
                    alert("输入的数据有误，请检查！");
                    return;
                }
                window["ResultType" + this.UniId] = null;
                var submitData = {};
                submitData.TemplateData = this.PageData.TemplateData;
                submitData.TemplateUserIds = this.AppraisalObject.getData();
                submitData.AuthUserIds = this.AuthorizeObj.getData();
                submitData.ItemIds = this.AppraisalItemObj.getData();
                submitData.GradeList = this.GradeDesignObj.getData();
                urlFile.Core.AkPost("/HospPerformance/AppraisalTemplate/AddOrModifyTemplate", { templateData: JSON.stringify(submitData) }, function (a) {
                    if (a.Content == "ok") {
                        urlFile.Core.AkUrl.Current().openUrl("$$module/HospPerformance/Core/performance_core_Appraisal_Template", true);
                    }
                    else {
                        utilFile.Core.Util.Noty("数据新增失败");
                    }
                });
            };
            NewAppraisalTemplatePageVm.prototype.legal = function () {
                var _res = true;
                for (var vn in this.ColVmObjList) {
                    var _obj = this.ColVmObjList[vn];
                    if (_obj) {
                        _res = _res && _obj.legal();
                    }
                }
                return _res;
            };
            NewAppraisalTemplatePageVm.prototype.loadPage = function (callback) {
                var _this = this;
                urlFile.Core.AkPost("/HospPerformance/AppraisalTemplate/FetchTemplatePageData", { templateId: this.Param1 }, function (a) {
                    var config = { TemplatePageData: a.Data };
                    _this.init(config);
                    if (callback) {
                        callback();
                    }
                });
            };
            NewAppraisalTemplatePageVm.prototype.initColVm = function (colName, colType, legal) {
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
                    if (colName == "ResultType") {
                        window["ResultType" + this.UniId] = this.PageData.TemplateData[colName];
                        _exciteBean.onChangeHandle(function (val) {
                            window["ResultType" + _this.UniId] = val;
                            _this.PageData.TemplateData[colName] = val;
                            return true;
                        });
                    }
                    else {
                        _exciteBean.onChangeHandle(function (val) {
                            _this.PageData.TemplateData[colName] = val;
                            return true;
                        });
                    }
                }
                this.ColVmObjList[_name] = _exciteBean;
            };
            return NewAppraisalTemplatePageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        NewAppraisalTemplatePage.NewAppraisalTemplatePageVm = NewAppraisalTemplatePageVm;
        var NewAppraisalTemplatePageStates = (function (_super) {
            __extends(NewAppraisalTemplatePageStates, _super);
            function NewAppraisalTemplatePageStates() {
                _super.apply(this, arguments);
            }
            return NewAppraisalTemplatePageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        NewAppraisalTemplatePage.NewAppraisalTemplatePageStates = NewAppraisalTemplatePageStates;
        var NewAppraisalTemplatePageProps = (function (_super) {
            __extends(NewAppraisalTemplatePageProps, _super);
            function NewAppraisalTemplatePageProps() {
                _super.apply(this, arguments);
            }
            return NewAppraisalTemplatePageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        NewAppraisalTemplatePage.NewAppraisalTemplatePageProps = NewAppraisalTemplatePageProps;
        iocFile.Core.Ioc.Current().RegisterType("NewAppraisalTemplatePage", basewedPageFile.Web.BaseWebPageVm, NewAppraisalTemplatePageVm);
    })(NewAppraisalTemplatePage = exports.NewAppraisalTemplatePage || (exports.NewAppraisalTemplatePage = {}));
});
