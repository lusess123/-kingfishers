var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/Ioc", "./../../../../04page/BaseWebPage", "./CombinationExamItemInsertRowDom"], function (require, exports, React, iocFile, basewedPageFile, insertRowFile) {
    "use strict";
    var CombinationExamItemInsertPage;
    (function (CombinationExamItemInsertPage) {
        var CombinationExamItemInsertPageAction = (function (_super) {
            __extends(CombinationExamItemInsertPageAction, _super);
            function CombinationExamItemInsertPageAction() {
                _super.apply(this, arguments);
            }
            return CombinationExamItemInsertPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        CombinationExamItemInsertPage.CombinationExamItemInsertPageAction = CombinationExamItemInsertPageAction;
        var CombinationExamItemInsertPageReact = (function (_super) {
            __extends(CombinationExamItemInsertPageReact, _super);
            function CombinationExamItemInsertPageReact() {
                _super.apply(this, arguments);
                this.state = new CombinationExamItemInsertPageStates();
            }
            CombinationExamItemInsertPageReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "acs-modals-panel"}, React.createElement("h4", null, this.props.Vm.Title), React.createElement("div", null, this.props.Vm.InsertRowList.map(function (row) {
                    return row.intoDom();
                })), React.createElement("div", {className: "acsTextC"}, React.createElement("span", {className: "button tiny", onClick: function () { _this.fun_submitBtn(); }}, "提交")));
            };
            CombinationExamItemInsertPageReact.prototype.fun_submitBtn = function () {
            };
            return CombinationExamItemInsertPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        CombinationExamItemInsertPage.CombinationExamItemInsertPageReact = CombinationExamItemInsertPageReact;
        var CombinationExamItemInsertPageVm = (function (_super) {
            __extends(CombinationExamItemInsertPageVm, _super);
            function CombinationExamItemInsertPageVm(config) {
                _super.call(this);
                this.ReactType = CombinationExamItemInsertPageReact;
                this.InsertRowList = [];
                this.Title = "新增套餐项目";
                var insertRow = new insertRowFile.CombinationExamItemInsertRowDom.CombinationExamItemInsertRowDomVm();
                this.InsertRowList.push(insertRow);
            }
            CombinationExamItemInsertPageVm.prototype.init = function (config) {
            };
            CombinationExamItemInsertPageVm.prototype.loadPage = function (callback) {
                if (callback) {
                    callback();
                }
            };
            return CombinationExamItemInsertPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        CombinationExamItemInsertPage.CombinationExamItemInsertPageVm = CombinationExamItemInsertPageVm;
        var CombinationExamItemInsertPageStates = (function (_super) {
            __extends(CombinationExamItemInsertPageStates, _super);
            function CombinationExamItemInsertPageStates() {
                _super.apply(this, arguments);
            }
            return CombinationExamItemInsertPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        CombinationExamItemInsertPage.CombinationExamItemInsertPageStates = CombinationExamItemInsertPageStates;
        var CombinationExamItemInsertPageProps = (function (_super) {
            __extends(CombinationExamItemInsertPageProps, _super);
            function CombinationExamItemInsertPageProps() {
                _super.apply(this, arguments);
            }
            return CombinationExamItemInsertPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        CombinationExamItemInsertPage.CombinationExamItemInsertPageProps = CombinationExamItemInsertPageProps;
        iocFile.Core.Ioc.Current().RegisterType("CombinationExamItemINSERTPAGE", basewedPageFile.Web.BaseWebPageVm, CombinationExamItemInsertPageVm);
    })(CombinationExamItemInsertPage = exports.CombinationExamItemInsertPage || (exports.CombinationExamItemInsertPage = {}));
});
