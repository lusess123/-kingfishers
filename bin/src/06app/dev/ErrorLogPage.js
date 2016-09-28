var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/Ioc", "./../../04page/BaseWebPage", "react"], function (require, exports, iocFile, basewedPageFile, React) {
    "use strict";
    var ErrorLogPage;
    (function (ErrorLogPage) {
        var ErrorLogPageAction = (function (_super) {
            __extends(ErrorLogPageAction, _super);
            function ErrorLogPageAction() {
                _super.apply(this, arguments);
            }
            return ErrorLogPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        ErrorLogPage.ErrorLogPageAction = ErrorLogPageAction;
        var ErrorLogPageReact = (function (_super) {
            __extends(ErrorLogPageReact, _super);
            function ErrorLogPageReact() {
                _super.apply(this, arguments);
                this.state = new ErrorLogPageStates();
            }
            ErrorLogPageReact.prototype.pSender = function () {
                return React.createElement("div", null, React.createElement("div", {className: "well"}, React.createElement("h6", {className: "Hu-title Hs-fw "}, "错误日志")), React.createElement("div", {className: "col-lg-12 col-md-12 Hu-dashed-line"}, React.createElement("label", {className: "Hs-fw"}, "生成时间: "), React.createElement("span", {className: "m-l"}, "2016-09-11 11: 49: 48: 5866")), React.createElement("div", {className: "col-lg-12 col-md-12 Hu-dashed-line m-t"}, React.createElement("label", {className: "Hs-fw"}, "程序出现异常,异常信息是: "), React.createElement("p", null, "这些列当前不具有唯一值。"), React.createElement("div", null, React.createElement("label", {className: "Hs-fw"}, "堆栈信息是: "), React.createElement("p", null, "在 System.Data.ConstraintCollection.AddUniqueConstraint(UniqueConstraint constraint) "), React.createElement("p", null, "在 System.Data.ConstraintCollection.Add(Constraint constraint, Boolean addUniqueWhenAddingForeign)"), React.createElement("p", null, "在 System.Data.DataTable.set_PrimaryKey(DataColumn[]value)"), React.createElement("p", null, "在 Ataw.Framework.Core.ListDataTable.AppendTo(DataSet ds) 位置 d: \\AtawSources\\Ataw.Platform\\src\\framework\\Ataw.Framework.Core\\Data\\ListDataTable.cs: 行号 92"), React.createElement("p", null, "在 Ataw.Framework.Core.PlugInfoSource.AppendTo(DataSet ds) 位置 d: \\AtawSources\\Ataw.Platform\\src\\framework\\Ataw.Framework.Core\\Instance\\Plug\\PlugInfoSource.cs: 行号 130"), React.createElement("p", null, "在 Ataw.Framework.Core.AtawBasePageViewCreator.FillDataSet(FormConfig fc) 位置 d: \\AtawSources\\Ataw.Platform\\src\\framework\\Ataw.Framework.Core\\Config\\ViewCreator\\PageViewCreator\\AtawBasePageViewCreator.cs: 行号 787"), React.createElement("p", null, "在 System.Collections.Generic.List`1.ForEach(Action`1 action)"), React.createElement("p", null, "在 Ataw.Framework.Core.AtawBasePageViewCreator.Create() 位置 d: \\AtawSources\\Ataw.Platform\\src\\framework\\Ataw.Framework.Core\\Config\\ViewCreator\\PageViewCreator\\AtawBasePageViewCreator.cs: 行号 307"), React.createElement("p", null, "在 Ataw.Framework.Core.AtawListPageViewCreator.Create() 位置 d: \\AtawSources\\Ataw.Platform\\src\\framework\\Ataw.Framework.Core\\Config\\ViewCreator\\PageViewCreator\\AtawListPageViewCreator.cs: 行号 21"), React.createElement("p", null, "在 Ataw.Framework.Web.AtawBaseController.Module(String ds, String xml, String pageStyle, String keyValue) 位置 d: \\AtawSources\\Ataw.Platform\\src\\framework\\Ataw.Framework.Web\\Web\\AtawBaseController.cs: 行号 290"))));
            };
            return ErrorLogPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        ErrorLogPage.ErrorLogPageReact = ErrorLogPageReact;
        var ErrorLogPageVm = (function (_super) {
            __extends(ErrorLogPageVm, _super);
            function ErrorLogPageVm(config) {
                _super.call(this);
                this.ReactType = ErrorLogPageReact;
                this.Title = "ErrorLogPage页面;";
            }
            ErrorLogPageVm.prototype.init = function (config) {
            };
            ErrorLogPageVm.prototype.loadPage = function (callback) {
                if (callback) {
                    callback();
                }
            };
            return ErrorLogPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        ErrorLogPage.ErrorLogPageVm = ErrorLogPageVm;
        var ErrorLogPageStates = (function (_super) {
            __extends(ErrorLogPageStates, _super);
            function ErrorLogPageStates() {
                _super.apply(this, arguments);
            }
            return ErrorLogPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        ErrorLogPage.ErrorLogPageStates = ErrorLogPageStates;
        var ErrorLogPageProps = (function (_super) {
            __extends(ErrorLogPageProps, _super);
            function ErrorLogPageProps() {
                _super.apply(this, arguments);
            }
            return ErrorLogPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        ErrorLogPage.ErrorLogPageProps = ErrorLogPageProps;
        iocFile.Core.Ioc.Current().RegisterType("ERRORLOGPAGE", basewedPageFile.Web.BaseWebPageVm, ErrorLogPageVm);
    })(ErrorLogPage = exports.ErrorLogPage || (exports.ErrorLogPage = {}));
});
