var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "react-dom", "./../01core/Ioc", "./../01core/Url", "./../04page/BaseWebPage"], function (require, exports, React, ReactDOM, iocFile, urlFile, basewedPageFile) {
    "use strict";
    var bd_PayInfoPage;
    (function (bd_PayInfoPage) {
        var bd_PayInfoPageAction = (function (_super) {
            __extends(bd_PayInfoPageAction, _super);
            function bd_PayInfoPageAction() {
                _super.apply(this, arguments);
            }
            return bd_PayInfoPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        bd_PayInfoPage.bd_PayInfoPageAction = bd_PayInfoPageAction;
        var bd_PayInfoPageReact = (function (_super) {
            __extends(bd_PayInfoPageReact, _super);
            function bd_PayInfoPageReact() {
                _super.apply(this, arguments);
                this.state = new bd_PayInfoPageStates();
            }
            bd_PayInfoPageReact.prototype.sendLineData = function (a) {
                return React.createElement("tr", null, React.createElement("td", null, React.createElement("a", null, React.createElement("i", {className: "ACT-CHECK-SINGLE icon-check-empty "})), React.createElement("span", null, a.rn), React.createElement("a", {className: "root-add ACT-ROW-ExpandDetail"})), React.createElement("td", {className: "aks-td AKJS ACT_HIDDEN"}, a.FID), React.createElement("td", null, a.FlowNumber), React.createElement("td", null, a.ApplyUserId), React.createElement("td", null, a.TotalAmount), React.createElement("td", null, a.InvoiceBank), React.createElement("td", null, a.ExpireDate), React.createElement("td", null, a.DiscountDays), React.createElement("td", null, a.PriceType), React.createElement("td", null, a.PriceType), React.createElement("td", null, a.PayType), React.createElement("td", null, a.FBankType), React.createElement("td", null, a.PayRate), React.createElement("td", null, a.FAcceptkind), React.createElement("td", null, a.PaperCount), React.createElement("td", null, a.Commissions), React.createElement("td", null, a.FDepartmentID), React.createElement("td", null, a.CommissionsType), React.createElement("td", null, a.DiscountInterest), React.createElement("td", null, a.PayAmount), React.createElement("td", null, a.Payee), React.createElement("td", null, a.PayeeAccount), React.createElement("td", null, a.OpeningBankName));
            };
            bd_PayInfoPageReact.prototype.pInstall = function () {
                var _this = this;
                _super.prototype.pInstall.call(this);
                this.props.Vm.getEmit("React").addListener("pageLoadEnd", function () {
                    $(ReactDOM.findDOMNode(_this))["AtawSelector"]({ regName: "232dd" });
                });
            };
            bd_PayInfoPageReact.prototype.pSender = function () {
                var _this = this;
                var buttonLine = React.createElement("div", null, "按钮行");
                var table = React.createElement("table", {className: " table table-bordered table-striped table-hover table-condensed"}, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", {className: "ACT-BTN-CONTAINER well", colSpan: "1000"}, buttonLine)), React.createElement("tr", {className: "ACT-HEADER MEMBER"}, React.createElement("th", {className: "thCheckAll"}, React.createElement("input", {type: "checkbox"})), React.createElement("th", {className: "aks-td AKJS ACT_HIDDEN"}, React.createElement("span", null, "FID")), " ", React.createElement("th", null, React.createElement("span", null, "流水号")), " ", React.createElement("th", null, React.createElement("span", null, "申请人"), "  "), React.createElement("th", null, React.createElement("span", null, "总金额")), React.createElement("th", null, React.createElement("span", null, "开票行")), React.createElement("th", null, React.createElement("span", null, "到期日")), React.createElement("th", null, React.createElement("span", null, "帖现天数")), React.createElement("th", null, React.createElement("span", null, "报价类别")), React.createElement("th", null, React.createElement("span", null, "报价利率"), " "), React.createElement("th", null, React.createElement("span", null, "打款类别")), React.createElement("th", null, React.createElement("span", null, "承兑行类别\t")), React.createElement("th", null, React.createElement("span", null, "打款利率")), React.createElement("th", null, React.createElement("span", null, "承兑方式")), React.createElement("th", null, React.createElement("span", null, "张数")), React.createElement("th", null, React.createElement("span", null, "手续费"), " "), React.createElement("th", null, React.createElement("span", null, "申请区域")), React.createElement("th", null, React.createElement("span", null, "手续费")), React.createElement("th", null, React.createElement("span", null, "手续费类别")), React.createElement("th", null, React.createElement("span", null, "贴现利率")), React.createElement("th", null, React.createElement("span", null, "收款单位")), React.createElement("th", null, React.createElement("span", null, "收款单位账号")), React.createElement("th", null, React.createElement("span", null, "开户行")), React.createElement("th", null, React.createElement("span", null, "开户行地区")), React.createElement("th", null, React.createElement("span", null, "开户行行号")), React.createElement("th", null, React.createElement("span", null, "流程状态")), React.createElement("th", null, React.createElement("span", null, "票面图片")), React.createElement("th", null, React.createElement("span", null, "银行转账截图"), " "), React.createElement("th", null, React.createElement("span", null, "是否完成")), React.createElement("th", null, React.createElement("span", null, "应用到工作流")), React.createElement("th", null, React.createElement("span", null, "组织机构")))), React.createElement("tbody", null, this.props.Vm.ListData.map(function (a) {
                    return _this.sendLineData(a);
                })));
                var searchfrom = React.createElement("div", {className: "searchCriteriaUlDiv ask-search panel-green"}, React.createElement("ul", {className: "searchCriteriaUl clear"}, React.createElement("li", {className: "search_Module_row col-md-6"}, React.createElement("span", null, "流水号: "), React.createElement("input", {type: "text"})), React.createElement("li", {className: "search_Module_row col-md-6"}, React.createElement("span", null, "申请人: "), React.createElement("div", {className: "ACT-TEST"})), React.createElement("li", {className: "search_Module_row col-md-6"}, React.createElement("span", null, "承兑行类别: "), React.createElement("select", null, React.createElement("option", {value: "-1"}, "--请选择--"), React.createElement("option", {value: "0"}, "国行"), React.createElement("option", {value: "1"}, "商行"), React.createElement("option", {value: "2"}, "其他"))), React.createElement("li", {className: "search_Module_row col-md-6"}, React.createElement("span", null, "承兑方式: "), React.createElement("select", null, React.createElement("option", {value: "-1"}, "--请选择--"), React.createElement("option", {value: "0"}, "买断"), React.createElement("option", {value: "1"}, "带票"), React.createElement("option", {value: "2"}, "其他"))), React.createElement("li", {className: "search_Module_row col-md-6"}, React.createElement("span", null, "申请区域: ")), React.createElement("li", {className: "search_Module_row searchBtnBar col-md-12 acs-search-line"}, React.createElement("button", {className: "MySearch btn btn-primary icon-search mr5", title: "搜索s"}), React.createElement("button", {className: "btn btn-warning icon-trash", title: "清空"}))));
                return React.createElement("div", {className: "ui-body-bg pd0"}, React.createElement("div", {className: "ConditionDiv mt10 mb10 "}, searchfrom), React.createElement("div", {className: "atawNormalRow"}, React.createElement("div", {className: " TopPager"}, "分页条"), React.createElement("div", {className: 'columnGroup panel-default acs-colgroup table-responsive ask-form'}, table)));
            };
            return bd_PayInfoPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        bd_PayInfoPage.bd_PayInfoPageReact = bd_PayInfoPageReact;
        var bd_PayInfoPageVm = (function (_super) {
            __extends(bd_PayInfoPageVm, _super);
            function bd_PayInfoPageVm(config) {
                _super.call(this);
                this.ReactType = bd_PayInfoPageReact;
                this.ListData = [];
                this.MRPUserCodeData = [];
                this.PriceType = [];
                this.BankType = [];
                this.AccpectKind = [];
                this.BiDaDepertmentCodeTable = [];
                this.CommissionType = [];
                this.BDGroupName = [];
            }
            bd_PayInfoPageVm.prototype.init = function (config) { };
            bd_PayInfoPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                urlFile.Core.AkPost("/module/module", { xml: "module/BiDa/business/bd_PayInfo", ds: "", pageStyle: "List" }, function (a) {
                    debugger;
                    _this.ListData = a.Data.bd_PayInfo;
                    _this.MRPUserCodeData = a.Data.MRPUserCodeData;
                    _this.PriceType = a.Data.PriceType;
                    _this.BankType = a.Data.BankType;
                    _this.AccpectKind = a.Data.AccpectKind;
                    _this.BiDaDepertmentCodeTable = a.Data.BiDaDepertmentCodeTable;
                    _this.CommissionType = a.Data.CommissionType;
                    _this.BDGroupName = a.Data.BDGroupName;
                    if (callback) {
                        callback(function () {
                            _this.getEmit("React").emit("pageLoadEnd");
                        });
                    }
                    // this.forceUpdate("");
                    //this.forceUpdate("", () => {
                    //    this.getEmit("React").emit("pageLoadEnd");
                    //    //$(ReactDOM.findDOMNode(this)).find("ACT_TEST").
                    //});
                });
            };
            return bd_PayInfoPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        bd_PayInfoPage.bd_PayInfoPageVm = bd_PayInfoPageVm;
        var bd_PayInfoPageStates = (function (_super) {
            __extends(bd_PayInfoPageStates, _super);
            function bd_PayInfoPageStates() {
                _super.apply(this, arguments);
            }
            return bd_PayInfoPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        bd_PayInfoPage.bd_PayInfoPageStates = bd_PayInfoPageStates;
        var bd_PayInfoPageProps = (function (_super) {
            __extends(bd_PayInfoPageProps, _super);
            function bd_PayInfoPageProps() {
                _super.apply(this, arguments);
            }
            return bd_PayInfoPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        bd_PayInfoPage.bd_PayInfoPageProps = bd_PayInfoPageProps;
        iocFile.Core.Ioc.Current().RegisterType("BD_PAYINFOPAGE", basewedPageFile.Web.BaseWebPageVm, bd_PayInfoPageVm);
    })(bd_PayInfoPage = exports.bd_PayInfoPage || (exports.bd_PayInfoPage = {}));
});
