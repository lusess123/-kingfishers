var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/Ioc", "./../../../../04page/BaseWebPage", "react", "./../../../../05tool/TabDom", "./PersonalPayDom", "./GroupPayDom"], function (require, exports, iocFile, basewedPageFile, React, tabDomFile, PersonalPayFile, GroupPayFile) {
    "use strict";
    var PayListPage;
    (function (PayListPage) {
        var PayListPageAction = (function (_super) {
            __extends(PayListPageAction, _super);
            function PayListPageAction() {
                _super.apply(this, arguments);
            }
            return PayListPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        PayListPage.PayListPageAction = PayListPageAction;
        var PayListPageReact = (function (_super) {
            __extends(PayListPageReact, _super);
            function PayListPageReact() {
                _super.apply(this, arguments);
                this.state = new PayListPageStates();
            }
            PayListPageReact.prototype.pSender = function () {
                return React.createElement("div", {className: "YSm-tab-content"}, this.props.Vm.TabDomObj.intoDom());
            };
            return PayListPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        PayListPage.PayListPageReact = PayListPageReact;
        var PayListPageVm = (function (_super) {
            __extends(PayListPageVm, _super);
            function PayListPageVm(config) {
                _super.call(this);
                this.ReactType = PayListPageReact;
                this.PersonalPayObj = new PersonalPayFile.PersonalPayDom.PersonalPayDomVm;
                this.GroupPayObj = new GroupPayFile.GroupPayDom.GroupPayDomVm;
                this.TabDomObj = new tabDomFile.TabDom.TabDomVm({
                    Items: [
                        {
                            Name: "PersonalPay",
                            Title: "个体缴费",
                            IsActive: true,
                            //ReloadFun: (vm) => {
                            //    utilFile.Core.Util.Cast<BatchDetailFile.BatchDetailDom.BatchDetailDomVm>(vm).loadData(
                            //        () => { vm.forceUpdate(""); }
                            //    );
                            //},
                            DomObj: this.PersonalPayObj
                        },
                        {
                            Name: "GroupPay",
                            Title: "团体缴费",
                            IsActive: false,
                            //ReloadFun: (vm) => {
                            //    utilFile.Core.Util.Cast<GroupRuleFile.GroupRuleDom.GroupRuleDomVm>(vm).sysPage_load(() => {
                            //        vm.forceUpdate("");
                            //    });
                            //},
                            DomObj: this.GroupPayObj
                        }
                    ]
                });
            }
            ;
            ;
            PayListPageVm.prototype.init = function (config) {
            };
            PayListPageVm.prototype.loadPage = function (callback) {
                if (callback) {
                    callback();
                }
            };
            return PayListPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        PayListPage.PayListPageVm = PayListPageVm;
        var PayListPageStates = (function (_super) {
            __extends(PayListPageStates, _super);
            function PayListPageStates() {
                _super.apply(this, arguments);
            }
            return PayListPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        PayListPage.PayListPageStates = PayListPageStates;
        var PayListPageProps = (function (_super) {
            __extends(PayListPageProps, _super);
            function PayListPageProps() {
                _super.apply(this, arguments);
            }
            return PayListPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        PayListPage.PayListPageProps = PayListPageProps;
        iocFile.Core.Ioc.Current().RegisterType("PayListPage", basewedPageFile.Web.BaseWebPageVm, PayListPageVm);
    })(PayListPage = exports.PayListPage || (exports.PayListPage = {}));
});
