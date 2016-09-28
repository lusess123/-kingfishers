var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/Ioc", "./../../../../04page/BaseWebPage", "react"], function (require, exports, iocFile, basewedPageFile, React) {
    "use strict";
    var PersonalNewPage;
    (function (PersonalNewPage) {
        var PersonalNewPageAction = (function (_super) {
            __extends(PersonalNewPageAction, _super);
            function PersonalNewPageAction() {
                _super.apply(this, arguments);
            }
            return PersonalNewPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        PersonalNewPage.PersonalNewPageAction = PersonalNewPageAction;
        var PersonalNewPageReact = (function (_super) {
            __extends(PersonalNewPageReact, _super);
            function PersonalNewPageReact() {
                _super.apply(this, arguments);
                this.state = new PersonalNewPageStates();
            }
            PersonalNewPageReact.prototype.pSender = function () {
                return React.createElement("div", {className: "YSm-modals"}, React.createElement("h4", {className: "YSu-modal-title"}, "新增体检项"), React.createElement("div", {className: "YSm-modal-header clearfix"}, React.createElement("div", {className: "pull-left"}, React.createElement("div", {className: "radio"}, React.createElement("label", null, React.createElement("input", {type: "radio", value: ""}), "套餐类型"))), React.createElement("div", {className: "pull-left"}, React.createElement("div", {className: "radio"}, React.createElement("label", null, React.createElement("input", {type: "radio", value: ""}), "体检项目")))), React.createElement("div", {className: "YSm-modal-body clearfix"}, React.createElement("div", {className: "col-lg-9 col-md-9 col-sm-9 col-xs-9 YSm-modal-left"}, React.createElement("div", {className: "YSm-search"}, React.createElement("label", {className: " YSu-modal-label"}, "检索"), React.createElement("input", {type: "text", className: "Hg-width"})), this._initTable()), React.createElement("div", {className: "col-lg-3 col-md-3 col-sm-3 col-xs-3 YSm-modal-right"}, React.createElement("p", {className: "YSu-title"}, "已选择项目"), React.createElement("ul", {className: "nav"}, React.createElement("li", {className: "nav-item"}, React.createElement("a", null, "血常规", React.createElement("i", {className: "fa fa-close"}))), React.createElement("li", {className: "nav-item"}, React.createElement("a", null, "内科", React.createElement("i", {className: "fa fa-close"}))), React.createElement("li", {className: "nav-item"}, React.createElement("a", null, "泌尿", React.createElement("i", {className: "fa fa-close"})))))), React.createElement("div", {className: "YSm-modal-footer text-center"}, React.createElement("a", {className: "btn btn-sm btn-secondary"}, "取消"), React.createElement("a", {className: "btn btn-sm btn-primary"}, "保存")));
            };
            PersonalNewPageReact.prototype._initTable = function () {
                return React.createElement("div", {className: "Hm-table table-responsive"}, React.createElement("table", {className: "table table-striped table-bordered table-hover"}, this._initTableHeader(), this._initTableBody()));
            };
            PersonalNewPageReact.prototype._initTableHeader = function () {
                return React.createElement("thead", {className: "thead-default"}, React.createElement("tr", null, React.createElement("th", null, "选择"), React.createElement("th", null, "科室"), React.createElement("th", null, "项目"), React.createElement("th", null, "价格（元）")));
            };
            PersonalNewPageReact.prototype._initTableBody = function () {
                return React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null), React.createElement("td", null, "2B猴科"), React.createElement("td", null, "心、肝、舌、耳"), React.createElement("td", null, "108.00")), React.createElement("tr", null, React.createElement("td", null), React.createElement("td", null, "2B猴科"), React.createElement("td", null, "心、肝、舌、耳"), React.createElement("td", null, "108.00")), React.createElement("tr", null, React.createElement("td", null), React.createElement("td", null, "2B猴科"), React.createElement("td", null, "心、肝、舌、耳"), React.createElement("td", null, "108.00")), React.createElement("tr", null, React.createElement("td", null), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null)), React.createElement("tr", null, React.createElement("td", null), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null)));
            };
            return PersonalNewPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        PersonalNewPage.PersonalNewPageReact = PersonalNewPageReact;
        var PersonalNewPageVm = (function (_super) {
            __extends(PersonalNewPageVm, _super);
            function PersonalNewPageVm(config) {
                _super.call(this);
                this.ReactType = PersonalNewPageReact;
            }
            PersonalNewPageVm.prototype.init = function (config) {
            };
            PersonalNewPageVm.prototype.loadPage = function (callback) {
                if (callback) {
                    callback();
                }
            };
            return PersonalNewPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        PersonalNewPage.PersonalNewPageVm = PersonalNewPageVm;
        var PersonalNewPageStates = (function (_super) {
            __extends(PersonalNewPageStates, _super);
            function PersonalNewPageStates() {
                _super.apply(this, arguments);
            }
            return PersonalNewPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        PersonalNewPage.PersonalNewPageStates = PersonalNewPageStates;
        var PersonalNewPageProps = (function (_super) {
            __extends(PersonalNewPageProps, _super);
            function PersonalNewPageProps() {
                _super.apply(this, arguments);
            }
            return PersonalNewPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        PersonalNewPage.PersonalNewPageProps = PersonalNewPageProps;
        iocFile.Core.Ioc.Current().RegisterType("PERSONALNEWPAGE", basewedPageFile.Web.BaseWebPageVm, PersonalNewPageVm);
    })(PersonalNewPage = exports.PersonalNewPage || (exports.PersonalNewPage = {}));
});
