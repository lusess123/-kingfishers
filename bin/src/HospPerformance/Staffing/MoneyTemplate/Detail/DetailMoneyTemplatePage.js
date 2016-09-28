var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/Ioc", "./../../../../01core/Url", "./../../../../04page/BaseWebPage", "react", "./../../../../05tool/TabDom", "./MoneyTemplateDom", "./MoneySettingDom", "./MoneyProjectDom"], function (require, exports, iocFile, urlFile, basewedPageFile, React, tabDomFile, MoneyTemplateFile, MoneySettingFile, MoneyProjectFile) {
    "use strict";
    var DetailMoneyTemplatePage;
    (function (DetailMoneyTemplatePage) {
        var DetailMoneyTemplatePageAction = (function (_super) {
            __extends(DetailMoneyTemplatePageAction, _super);
            function DetailMoneyTemplatePageAction() {
                _super.apply(this, arguments);
            }
            return DetailMoneyTemplatePageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        DetailMoneyTemplatePage.DetailMoneyTemplatePageAction = DetailMoneyTemplatePageAction;
        var DetailMoneyTemplatePageReact = (function (_super) {
            __extends(DetailMoneyTemplatePageReact, _super);
            function DetailMoneyTemplatePageReact() {
                _super.apply(this, arguments);
                this.state = new DetailMoneyTemplatePageStates();
            }
            DetailMoneyTemplatePageReact.prototype.pSender = function () {
                return React.createElement("div", null, this._initForm(), React.createElement("div", {className: "YSm-tab-content"}, this.props.Vm.TabDomObj.intoDom()));
            };
            DetailMoneyTemplatePageReact.prototype._initForm = function () {
                return React.createElement("form", {className: "clearfix"}, React.createElement("div", {className: "col-lg-3 col-md-3 col-sm-6 col-xs-6 form-group  form-inline clearfix"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label text-right"}, "模板名称："), React.createElement("div", {className: "col-md-7 col-sm-9"}, this.props.Vm.PageData.SalaryTemplateData.Title)), React.createElement("div", {className: "col-lg-6 col-md-6 col-sm-6 col-xs-6 form-group  form-inline clearfix"}, React.createElement("label", {className: "col-md-2 col-sm-3 form-control-label text-right"}, "备注："), React.createElement("div", {className: "col-md-9 col-sm-9"}, this.props.Vm.PageData.SalaryTemplateData.Remark)));
            };
            return DetailMoneyTemplatePageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        DetailMoneyTemplatePage.DetailMoneyTemplatePageReact = DetailMoneyTemplatePageReact;
        var DetailMoneyTemplatePageVm = (function (_super) {
            __extends(DetailMoneyTemplatePageVm, _super);
            function DetailMoneyTemplatePageVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = DetailMoneyTemplatePageReact;
                this.SalaryTemplateData = { FID: "", Title: "", Remark: "" };
                this.SubmitData = { FID: "", Title: "", Remark: "", UsersData: [{ UserId: "", TrueName: "", DeptName: "", PositionName: "", DisplayName: "" }], SalaryItemValues: [{ UserID: "", SalaryItemValue: [{ Value: "", SalaryItemID: { FID: "", Fileds: "", Name: "", Type: "", Detail: "" } }] }], SalaryItemValueOrCount: [{ FID: "", Detail: "", Fileds: "", Name: "", Type: "", ValueOrCount: "" }] };
                // this.loadItemSelectData();
                this.listenAppEvent("UsersListToMoneySetting", this.UniId, function (item) {
                    _this.SubmitData.UsersData = item;
                    _this.IsMulit = true;
                    _this.IsChange = true;
                    _this.forceUpdate("");
                });
                this.listenAppEvent("EditMoneyValues", this.UniId, function (item) {
                    //var selectedValue = this.SelectorDom.UserListboxObj.dataValueGet();
                    if (item.UserID == "all") {
                        _this.SubmitData.SalaryItemValues = _this.SubmitData.SalaryItemValues.filter(function (row) {
                            return false;
                        });
                    }
                    if (item.UserID != "") {
                        _this.SubmitData.SalaryItemValues = _this.SubmitData.SalaryItemValues.filter(function (value) {
                            return value.UserID != item.UserID;
                        });
                        _this.SubmitData.SalaryItemValues.push(item);
                    }
                    //this.SalaryItemSetDataList.push(item);
                    //this.SalaryItemData=item;
                    _this.IsMulit = true;
                    _this.IsChange = true;
                    _this.forceUpdate("");
                });
            }
            //private init(config: IDetailMoneyTemplatePageConfig) {
            //}
            DetailMoneyTemplatePageVm.prototype.init = function (config) {
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
            };
            //protected ReceivePageSend(config: basewedPageFile.Web.IPageActor, obj: any) {
            //    super.ReceivePageSend(config, obj);
            //    this.MoneyProjectObj._addSalaryItem(obj);
            //    //this.MoneyProjectObj.forceUpdate("");
            //}
            DetailMoneyTemplatePageVm.prototype.loadPage = function (callback) {
                var _this = this;
                var key = this.Param1;
                urlFile.Core.AkPost("/HospPerformance/HumanResource/SalaryTemplatePageData", { templateID: this.Param1 }, function (a) {
                    var config = { SalaryTemplatePageData: a.Data };
                    _this.init(config);
                    if (callback) {
                        callback();
                    }
                });
            };
            return DetailMoneyTemplatePageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        DetailMoneyTemplatePage.DetailMoneyTemplatePageVm = DetailMoneyTemplatePageVm;
        var DetailMoneyTemplatePageStates = (function (_super) {
            __extends(DetailMoneyTemplatePageStates, _super);
            function DetailMoneyTemplatePageStates() {
                _super.apply(this, arguments);
            }
            return DetailMoneyTemplatePageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        DetailMoneyTemplatePage.DetailMoneyTemplatePageStates = DetailMoneyTemplatePageStates;
        var DetailMoneyTemplatePageProps = (function (_super) {
            __extends(DetailMoneyTemplatePageProps, _super);
            function DetailMoneyTemplatePageProps() {
                _super.apply(this, arguments);
            }
            return DetailMoneyTemplatePageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        DetailMoneyTemplatePage.DetailMoneyTemplatePageProps = DetailMoneyTemplatePageProps;
        iocFile.Core.Ioc.Current().RegisterType("DetailMoneyTemplatePage", basewedPageFile.Web.BaseWebPageVm, DetailMoneyTemplatePageVm);
    })(DetailMoneyTemplatePage = exports.DetailMoneyTemplatePage || (exports.DetailMoneyTemplatePage = {}));
});
