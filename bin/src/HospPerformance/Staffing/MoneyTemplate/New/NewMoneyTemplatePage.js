var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/Ioc", "./../../../../01core/Util", "./../../../../01core/Url", "./../../../../04page/BaseWebPage", "react", "./../../../../05tool/TabDom", "./MoneyTemplateDom", "./MoneySettingDom", "./MoneyProjectDom", "./../../../../02col/01single/Text"], function (require, exports, iocFile, utilFile, urlFile, basewedPageFile, React, tabDomFile, MoneyTemplateFile, MoneySettingFile, MoneyProjectFile, TextFile) {
    "use strict";
    var NewMoneyTemplatePage;
    (function (NewMoneyTemplatePage) {
        var NewMoneyTemplatePageAction = (function (_super) {
            __extends(NewMoneyTemplatePageAction, _super);
            function NewMoneyTemplatePageAction() {
                _super.apply(this, arguments);
            }
            return NewMoneyTemplatePageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        NewMoneyTemplatePage.NewMoneyTemplatePageAction = NewMoneyTemplatePageAction;
        var NewMoneyTemplatePageReact = (function (_super) {
            __extends(NewMoneyTemplatePageReact, _super);
            function NewMoneyTemplatePageReact() {
                _super.apply(this, arguments);
                this.state = new NewMoneyTemplatePageStates();
            }
            NewMoneyTemplatePageReact.prototype.inputTemplateName = function () {
                var _this = this;
                if (!this.props.Vm.TemplateNameTextVm) {
                    var _vm = this.getInputVm(this.props.Vm.PageData.SalaryTemplateData.Title, "notNull");
                    this.props.Vm.TemplateNameTextVm = _vm;
                    _vm.onChangeHandle(function (str) {
                        _this.props.Vm.PageData.SalaryTemplateData.Title = str;
                        return true;
                    });
                }
                return this.props.Vm.TemplateNameTextVm.intoDom();
            };
            NewMoneyTemplatePageReact.prototype.inputTemplateRemark = function () {
                var _this = this;
                if (!this.props.Vm.TemplateRemarkTextVm) {
                    var _vm = this.getInputVm(this.props.Vm.PageData.SalaryTemplateData.Remark, "notNull");
                    this.props.Vm.TemplateRemarkTextVm = _vm;
                    _vm.onChangeHandle(function (str) {
                        _this.props.Vm.PageData.SalaryTemplateData.Remark = str;
                        return true;
                    });
                }
                return this.props.Vm.TemplateRemarkTextVm.intoDom();
            };
            NewMoneyTemplatePageReact.prototype.getInputVm = function (val, legalKind, fun) {
                var _bean = new TextFile.ui.TextVm();
                _bean.dataValueSet(val);
                _bean.LegalObj.Kind = legalKind;
                return _bean;
            };
            NewMoneyTemplatePageReact.prototype.pSender = function () {
                return React.createElement("div", null, this._initForm(), React.createElement("div", {className: "YSm-tab-content"}, this.props.Vm.TabDomObj.intoDom()));
            };
            NewMoneyTemplatePageReact.prototype._initForm = function () {
                var _this = this;
                return React.createElement("form", {className: "clearfix"}, React.createElement("div", {className: "col-lg-3 col-md-3 col-sm-6 col-xs-6 form-group  form-inline clearfix"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label text-right"}, "模板名称："), React.createElement("div", {className: "col-md-7 col-sm-9"}, this.inputTemplateName())), React.createElement("div", {className: "col-lg-6 col-md-6 col-sm-6 col-xs-6 form-group  form-inline clearfix"}, React.createElement("label", {className: "col-md-2 col-sm-3 form-control-label text-right"}, "备注："), React.createElement("div", {className: "col-md-9 col-sm-9"}, this.inputTemplateRemark())), React.createElement("div", {className: "col-lg-3 col-md-3 col-sm-6 col-xs-6 form-group  form-inline clearfix"}, React.createElement("a", {className: "btn btn-sm btn-primary", onClick: function () { _this.Submit(); }}, "保存")));
            };
            NewMoneyTemplatePageReact.prototype.Submit = function () {
                this.props.Vm.Submit();
            };
            return NewMoneyTemplatePageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        NewMoneyTemplatePage.NewMoneyTemplatePageReact = NewMoneyTemplatePageReact;
        var NewMoneyTemplatePageVm = (function (_super) {
            __extends(NewMoneyTemplatePageVm, _super);
            function NewMoneyTemplatePageVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = NewMoneyTemplatePageReact;
                this.ItemValueOrCount = [];
                this.SalaryTemplateData = { FID: "", Title: "", Remark: "" };
                this.SubmitData = { FID: "", Title: "", Remark: "", UsersData: [{ UserId: "", TrueName: "", DeptName: "", PositionName: "", DisplayName: "" }], SalaryItemValues: [{ UserID: "", SalaryItemValue: [{ Value: "", SalaryItemID: { FID: "", Fileds: "", Name: "", Type: "", Detail: "" } }] }], SalaryItemValueOrCount: [{ FID: "", Detail: "", Fileds: "", Name: "", Type: "", ValueOrCount: "" }] };
                // this.loadItemSelectData();
                this.listenAppEvent("ItemListToMoneySetting", this.UniId, function (item) {
                    //var selectedValue = this.SelectorDom.UserListboxObj.dataValueGet();
                    _this.SalaryItemData = item;
                    _this.ItemValueOrCount = _this.ItemValueOrCount.filter(function (row) {
                        return false;
                    });
                    _this.SalaryItemData.map(function (a) {
                        var config = { FID: "", Fileds: "", Detail: "", Name: "", Type: "", ValueOrCount: "" };
                        config.FID = a.FID;
                        config.Detail = a.Detail;
                        config.Fileds = a.Fileds;
                        config.Name = a.Name;
                        config.Type = a.Type;
                        _this.SubmitData.SalaryItemValueOrCount = _this.SubmitData.SalaryItemValueOrCount.filter(function (row) {
                            if (a.FID == row.FID) {
                                config.ValueOrCount = row.ValueOrCount;
                            }
                            return row.FID != a.FID;
                        });
                        _this.ItemValueOrCount.push(config);
                    });
                    _this.SubmitData.SalaryItemValueOrCount = _this.ItemValueOrCount;
                    _this.SubmitData.SalaryItemValueOrCount.map(function (a) {
                        if (a.ValueOrCount == "" && a.Type != "计算项") {
                            a.ValueOrCount = "10";
                        }
                    });
                    _this.IsMulit = true;
                    _this.IsChange = true;
                    _this.forceUpdate("");
                });
                this.listenAppEvent("UsersListToMoneySetting", this.UniId, function (item) {
                    _this.SubmitData.UsersData = item;
                    _this.IsMulit = true;
                    _this.IsChange = true;
                    _this.forceUpdate("");
                });
                this.listenAppEvent("SendToPage", this.UniId, function (str) {
                    _this.SubmitData.SalaryItemValueOrCount = _this.SubmitData.SalaryItemValueOrCount.filter(function (row) {
                        return row.FID != str.FID;
                    });
                    _this.SubmitData.SalaryItemValueOrCount.push(str);
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
            //private init(config: INewMoneyTemplatePageConfig) {
            //}
            NewMoneyTemplatePageVm.prototype.init = function (config) {
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
            };
            //protected ReceivePageSend(config: basewedPageFile.Web.IPageActor, obj: any) {
            //    super.ReceivePageSend(config, obj);
            //    this.MoneyProjectObj._addSalaryItem(obj);
            //    //this.MoneyProjectObj.forceUpdate("");
            //}
            NewMoneyTemplatePageVm.prototype.Submit = function () {
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
                itemData.map(function (a) {
                    if (a.ValueOrCount == "") {
                        res = true;
                    }
                    if (a.Name == "实发工资") {
                        nres = true;
                    }
                });
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
                Value.map(function (a) {
                    if (a.UserID == "") {
                        valueRes = true;
                    }
                    a.SalaryItemValue.map(function (b) {
                        if (b.Value == "") {
                            valueRes = true;
                        }
                    });
                });
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
                urlFile.Core.AkPost("/HospPerformance/HumanResource/SubmitSalaryTemplateValue", { data: _jsonData }, function (res) {
                    if (res == "true") {
                        alert("提交成功");
                        utilFile.Core.Util.Noty("数据编辑成功");
                        //urlFile.Core.AkUrl.Current().openUrl('', false, () => { })
                        //页面刷新
                        urlFile.Core.AkUrl.Current().openUrl("$$module/HospPerformance/HumanResource/performance_hr_Salary_Template", false, function () { });
                    }
                    else if (res == "false") {
                        alert("提交失败");
                    }
                    else {
                        alert(res);
                    }
                });
            };
            NewMoneyTemplatePageVm.prototype.loadPage = function (callback) {
                var _this = this;
                var key = this.Param1;
                urlFile.Core.AkPost("/HospPerformance/HumanResource/SalaryTemplatePageData", { templateID: this.Param1 }, function (a) {
                    var config = { SalaryTemplatePageData: a.Data };
                    config.SalaryTemplatePageData.SalaryTemplateData.FID = key;
                    _this.init(config);
                    if (callback) {
                        callback();
                    }
                });
            };
            return NewMoneyTemplatePageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        NewMoneyTemplatePage.NewMoneyTemplatePageVm = NewMoneyTemplatePageVm;
        var NewMoneyTemplatePageStates = (function (_super) {
            __extends(NewMoneyTemplatePageStates, _super);
            function NewMoneyTemplatePageStates() {
                _super.apply(this, arguments);
            }
            return NewMoneyTemplatePageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        NewMoneyTemplatePage.NewMoneyTemplatePageStates = NewMoneyTemplatePageStates;
        var NewMoneyTemplatePageProps = (function (_super) {
            __extends(NewMoneyTemplatePageProps, _super);
            function NewMoneyTemplatePageProps() {
                _super.apply(this, arguments);
            }
            return NewMoneyTemplatePageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        NewMoneyTemplatePage.NewMoneyTemplatePageProps = NewMoneyTemplatePageProps;
        iocFile.Core.Ioc.Current().RegisterType("NEWMONEYTEMPLATEPAGE", basewedPageFile.Web.BaseWebPageVm, NewMoneyTemplatePageVm);
    })(NewMoneyTemplatePage = exports.NewMoneyTemplatePage || (exports.NewMoneyTemplatePage = {}));
});
