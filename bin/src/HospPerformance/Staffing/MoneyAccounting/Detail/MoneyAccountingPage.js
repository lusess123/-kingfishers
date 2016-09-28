var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/Ioc", "./../../../../01core/Url", "./../../../../04page/BaseWebPage", "react", "./../../../../05tool/TabDom", "./DetailMoneyAccountingPage", "./DetailSalaryAppraisalDom"], function (require, exports, iocFile, urlFile, basewedPageFile, React, tabDomFile, DetailMoneyAccountingPageFile, AppraisalDom) {
    "use strict";
    var MoneyAccountingPage;
    (function (MoneyAccountingPage) {
        var MoneyAccountingPageAction = (function (_super) {
            __extends(MoneyAccountingPageAction, _super);
            function MoneyAccountingPageAction() {
                _super.apply(this, arguments);
            }
            return MoneyAccountingPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        MoneyAccountingPage.MoneyAccountingPageAction = MoneyAccountingPageAction;
        var MoneyAccountingPageReact = (function (_super) {
            __extends(MoneyAccountingPageReact, _super);
            function MoneyAccountingPageReact() {
                _super.apply(this, arguments);
                this.state = new MoneyAccountingPageStates();
            }
            MoneyAccountingPageReact.prototype.pSender = function () {
                return React.createElement("div", null, this._initMoneyDetial(), React.createElement("div", {className: "YSm-tab-content"}, this.props.Vm.TabDomObj.intoDom()));
            };
            MoneyAccountingPageReact.prototype._initMoneyDetial = function () {
                return React.createElement("div", {className: "clearfix YSm-detail-money"}, React.createElement("ul", {className: "nav nav-pills pull-left"}, React.createElement("li", {className: "nav-item"}, React.createElement("label", null, "薪资主题："), React.createElement("span", null, this.props.Vm.PageData.SalaryData.Title)), React.createElement("li", {className: "nav-item"}, React.createElement("label", null, "薪资套账："), React.createElement("span", null, this.props.Vm.PageData.SalaryData.TemplateName)), React.createElement("li", {className: "nav-item"}, React.createElement("label", null, "薪资月份："), React.createElement("span", null, this.props.Vm.PageData.SalaryData.Month)), React.createElement("li", {className: "nav-item"}, React.createElement("label", null, "人员总数："), React.createElement("span", null, this.props.Vm.PageData.SalaryData.UserNumbers)), React.createElement("li", {className: "nav-item"}, React.createElement("label", null, "薪资总额："), React.createElement("span", null, this.props.Vm.PageData.SalaryData.SalaryTotal))));
            };
            return MoneyAccountingPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        MoneyAccountingPage.MoneyAccountingPageReact = MoneyAccountingPageReact;
        var MoneyAccountingPageVm = (function (_super) {
            __extends(MoneyAccountingPageVm, _super);
            function MoneyAccountingPageVm(config) {
                _super.call(this);
                this.ReactType = MoneyAccountingPageReact;
            }
            MoneyAccountingPageVm.prototype.init = function (config) {
                if (config) {
                    this.PageData = config.SalaryPageData;
                }
                var basicConfig = { SalaryPageData: this.PageData };
                this.DetailSalaryPage = new DetailMoneyAccountingPageFile.DetailMoneyAccountingPage.DetailMoneyAccountingPageVm(basicConfig);
                var AppraisalConfig = { ItemData: this.PageData.ItemList, UserData: this.PageData.UserList, Unid: this.UniId, SalaryData: this.PageData.SalaryData };
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
            };
            MoneyAccountingPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                this.fid = this.Param1;
                urlFile.Core.AkPost("/HospPerformance/HumanResource/GetSalaryDetail", { fid: this.Param1 }, function (a) {
                    var config = { SalaryPageData: a.Data };
                    _this.init(config);
                    if (callback) {
                        callback();
                    }
                });
            };
            return MoneyAccountingPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        MoneyAccountingPage.MoneyAccountingPageVm = MoneyAccountingPageVm;
        var MoneyAccountingPageStates = (function (_super) {
            __extends(MoneyAccountingPageStates, _super);
            function MoneyAccountingPageStates() {
                _super.apply(this, arguments);
            }
            return MoneyAccountingPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        MoneyAccountingPage.MoneyAccountingPageStates = MoneyAccountingPageStates;
        var MoneyAccountingPageProps = (function (_super) {
            __extends(MoneyAccountingPageProps, _super);
            function MoneyAccountingPageProps() {
                _super.apply(this, arguments);
            }
            return MoneyAccountingPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        MoneyAccountingPage.MoneyAccountingPageProps = MoneyAccountingPageProps;
        iocFile.Core.Ioc.Current().RegisterType("MoneyAccountingPage", basewedPageFile.Web.BaseWebPageVm, MoneyAccountingPageVm);
    })(MoneyAccountingPage = exports.MoneyAccountingPage || (exports.MoneyAccountingPage = {}));
});
