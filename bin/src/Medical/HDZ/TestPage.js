var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/Ioc", "./../../04page/BaseWebPage", "react"], function (require, exports, iocFile, basewedPageFile, React) {
    "use strict";
    var TestPage;
    (function (TestPage) {
        var TestPageAction = (function (_super) {
            __extends(TestPageAction, _super);
            function TestPageAction() {
                _super.apply(this, arguments);
            }
            return TestPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        TestPage.TestPageAction = TestPageAction;
        var TestPageReact = (function (_super) {
            __extends(TestPageReact, _super);
            function TestPageReact() {
                _super.apply(this, arguments);
                this.state = new TestPageStates();
            }
            TestPageReact.prototype.pSender = function () {
                return React.createElement("ul", {className: "nav"}, React.createElement("li", {className: "nav-item"}, React.createElement("a", {href: "#$WorkbenchPage$", className: "nav-link"}, "工作台")), React.createElement("li", {className: "nav-item"}, React.createElement("a", {href: "#$PersonalListPage$", className: "nav-link"}, "个人预约登记")), React.createElement("li", {className: "nav-item"}, React.createElement("a", {href: "#$GroupListPage$", className: "nav-link"}, "团体预约登记")), React.createElement("li", {className: "nav-item"}, React.createElement("a", {href: "#$MoneyListPage$", className: "nav-link"}, "财务收费")));
            };
            return TestPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        TestPage.TestPageReact = TestPageReact;
        var TestPageVm = (function (_super) {
            __extends(TestPageVm, _super);
            function TestPageVm(config) {
                _super.call(this);
                this.ReactType = TestPageReact;
            }
            TestPageVm.prototype.init = function (config) {
            };
            TestPageVm.prototype.loadPage = function (callback) {
                if (callback) {
                    callback();
                }
            };
            return TestPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        TestPage.TestPageVm = TestPageVm;
        var TestPageStates = (function (_super) {
            __extends(TestPageStates, _super);
            function TestPageStates() {
                _super.apply(this, arguments);
            }
            return TestPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        TestPage.TestPageStates = TestPageStates;
        var TestPageProps = (function (_super) {
            __extends(TestPageProps, _super);
            function TestPageProps() {
                _super.apply(this, arguments);
            }
            return TestPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        TestPage.TestPageProps = TestPageProps;
        iocFile.Core.Ioc.Current().RegisterType("TESTPAGE", basewedPageFile.Web.BaseWebPageVm, TestPageVm);
    })(TestPage = exports.TestPage || (exports.TestPage = {}));
});
