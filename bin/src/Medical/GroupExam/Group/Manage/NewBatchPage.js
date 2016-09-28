var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/Ioc", "./../../../../04page/BaseWebPage", "react"], function (require, exports, iocFile, basewedPageFile, React) {
    "use strict";
    var NewBatchPage;
    (function (NewBatchPage) {
        var NewBatchPageAction = (function (_super) {
            __extends(NewBatchPageAction, _super);
            function NewBatchPageAction() {
                _super.apply(this, arguments);
            }
            return NewBatchPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        NewBatchPage.NewBatchPageAction = NewBatchPageAction;
        var NewBatchPageReact = (function (_super) {
            __extends(NewBatchPageReact, _super);
            function NewBatchPageReact() {
                _super.apply(this, arguments);
                this.state = new NewBatchPageStates();
            }
            NewBatchPageReact.prototype.pSender = function () {
                return React.createElement("div", {className: "YSm-modals"}, React.createElement("h4", {className: "YSu-modal-title"}, "套餐选择"), React.createElement("div", {className: "YSm-modal-body clearfix"}, React.createElement("div", null, React.createElement("div", {className: "YSm-search"}, React.createElement("label", {className: " YSu-modal-label"}, "检索"), React.createElement("input", {type: "text", className: "Hg-width"})), this._initTable())), React.createElement("div", {className: "YSm-modal-footer text-center"}, React.createElement("a", {className: "btn btn-sm btn-secondary"}, "取消"), React.createElement("a", {className: "btn btn-sm btn-primary"}, "保存")));
            };
            NewBatchPageReact.prototype._initTable = function () {
                return React.createElement("div", {className: "Hm-table table-responsive"}, React.createElement("table", {className: "table table-striped table-bordered table-hover"}, this._initTableHeader(), this._initTableBody()));
            };
            NewBatchPageReact.prototype._initTableHeader = function () {
                return React.createElement("thead", {className: "thead-default"}, React.createElement("tr", null, React.createElement("th", null, "选择"), React.createElement("th", null, "科室"), React.createElement("th", null, "项目"), React.createElement("th", null, "价格（元）")));
            };
            NewBatchPageReact.prototype._initTableBody = function () {
                return React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null), React.createElement("td", null, "2B猴科"), React.createElement("td", null, "心、肝、舌、耳"), React.createElement("td", null, "108.00")), React.createElement("tr", null, React.createElement("td", null), React.createElement("td", null, "2B猴科"), React.createElement("td", null, "心、肝、舌、耳"), React.createElement("td", null, "108.00")), React.createElement("tr", null, React.createElement("td", null), React.createElement("td", null, "2B猴科"), React.createElement("td", null, "心、肝、舌、耳"), React.createElement("td", null, "108.00")), React.createElement("tr", null, React.createElement("td", null), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null)), React.createElement("tr", null, React.createElement("td", null), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null)));
            };
            return NewBatchPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        NewBatchPage.NewBatchPageReact = NewBatchPageReact;
        var NewBatchPageVm = (function (_super) {
            __extends(NewBatchPageVm, _super);
            function NewBatchPageVm(config) {
                _super.call(this);
                this.ReactType = NewBatchPageReact;
            }
            NewBatchPageVm.prototype.init = function (config) {
            };
            NewBatchPageVm.prototype.loadPage = function (callback) {
                if (callback) {
                    callback();
                }
            };
            return NewBatchPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        NewBatchPage.NewBatchPageVm = NewBatchPageVm;
        var NewBatchPageStates = (function (_super) {
            __extends(NewBatchPageStates, _super);
            function NewBatchPageStates() {
                _super.apply(this, arguments);
            }
            return NewBatchPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        NewBatchPage.NewBatchPageStates = NewBatchPageStates;
        var NewBatchPageProps = (function (_super) {
            __extends(NewBatchPageProps, _super);
            function NewBatchPageProps() {
                _super.apply(this, arguments);
            }
            return NewBatchPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        NewBatchPage.NewBatchPageProps = NewBatchPageProps;
        iocFile.Core.Ioc.Current().RegisterType("NewBatchPage", basewedPageFile.Web.BaseWebPageVm, NewBatchPageVm);
    })(NewBatchPage = exports.NewBatchPage || (exports.NewBatchPage = {}));
});
