var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../01core/Ioc", "./../../04page/BaseWebPage", "./BaseMDRowDom"], function (require, exports, React, iocFile, basewedPageFile, baseMDRowDomFile) {
    "use strict";
    var BaseMDPage;
    (function (BaseMDPage) {
        var BaseMDPageAction = (function (_super) {
            __extends(BaseMDPageAction, _super);
            function BaseMDPageAction() {
                _super.apply(this, arguments);
            }
            return BaseMDPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        BaseMDPage.BaseMDPageAction = BaseMDPageAction;
        var BaseMDPageReact = (function (_super) {
            __extends(BaseMDPageReact, _super);
            function BaseMDPageReact() {
                _super.apply(this, arguments);
            }
            // public state = new BaseMDPageStates();
            BaseMDPageReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "Hm-modals"}, React.createElement("h4", null, this.props.Vm.Title), React.createElement("div", null, this.props.Vm.RowList.map(function (row) {
                    return row.intoDom();
                })), React.createElement("div", {className: "text-center"}, React.createElement("span", {className: "btn btn-sm btn-primary", onClick: function () { _this.fun_submitBtn(); }}, "提交")));
            };
            BaseMDPageReact.prototype.fun_submitBtn = function () {
                this.props.Vm.reactSubmit();
            };
            return BaseMDPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        BaseMDPage.BaseMDPageReact = BaseMDPageReact;
        var TestBaseMDPageReact = (function (_super) {
            __extends(TestBaseMDPageReact, _super);
            function TestBaseMDPageReact() {
                _super.apply(this, arguments);
            }
            return TestBaseMDPageReact;
        }(BaseMDPageReact));
        BaseMDPage.TestBaseMDPageReact = TestBaseMDPageReact;
        var BaseMDPageVm = (function (_super) {
            __extends(BaseMDPageVm, _super);
            function BaseMDPageVm() {
                _super.call(this);
                this.ReactType = TestBaseMDPageReact;
                this.Title = "基础页面";
                this.RowList = [];
                var _row = new baseMDRowDomFile.BaseMDRowDom.BaseMDRowDomVm();
                this.RowList.push(_row);
            }
            BaseMDPageVm.prototype.reactSubmit = function () {
                this.submit();
            };
            BaseMDPageVm.prototype.submit = function () {
            };
            return BaseMDPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        BaseMDPage.BaseMDPageVm = BaseMDPageVm;
        var BaseMDPageStates = (function (_super) {
            __extends(BaseMDPageStates, _super);
            function BaseMDPageStates() {
                _super.apply(this, arguments);
            }
            return BaseMDPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        BaseMDPage.BaseMDPageStates = BaseMDPageStates;
        var BaseMDPageProps = (function (_super) {
            __extends(BaseMDPageProps, _super);
            function BaseMDPageProps() {
                _super.apply(this, arguments);
            }
            return BaseMDPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        BaseMDPage.BaseMDPageProps = BaseMDPageProps;
        iocFile.Core.Ioc.Current().RegisterType("BASEMDPAGE", basewedPageFile.Web.BaseWebPageVm, BaseMDPageVm);
    })(BaseMDPage = exports.BaseMDPage || (exports.BaseMDPage = {}));
});
