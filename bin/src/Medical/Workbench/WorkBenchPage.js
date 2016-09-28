var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/Ioc", "./../../01core/Url", "./../../04page/BaseWebPage", "react"], function (require, exports, iocFile, urlFile, basewedPageFile, React) {
    "use strict";
    var WorkBenchPage;
    (function (WorkBenchPage) {
        var WorkBenchPageAction = (function (_super) {
            __extends(WorkBenchPageAction, _super);
            function WorkBenchPageAction() {
                _super.apply(this, arguments);
            }
            return WorkBenchPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        WorkBenchPage.WorkBenchPageAction = WorkBenchPageAction;
        var WorkBenchPageReact = (function (_super) {
            __extends(WorkBenchPageReact, _super);
            function WorkBenchPageReact() {
                _super.apply(this, arguments);
                this.state = new WorkBenchPageStates();
            }
            WorkBenchPageReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "YSm-workbench clearfix"}, React.createElement("div", {className: "pull-left YSm-workbench-left"}, React.createElement("ul", {className: "nav nav-pills clearfix"}, React.createElement("li", {className: "nav-item"}, React.createElement("a", {className: "nav-link", onClick: function () { _this.props.Vm.fun_personregister(); }}, React.createElement("img", {className: "img", src: this.props.Vm.Data.personregister == "1" ? "/ts/lib/akCss/images/YSWork_pdj_on.png" : "/ts/lib/akCss/images/YSWork_pdj_disabled.png"}), React.createElement("span", null, "个人登记"))), React.createElement("li", {className: "nav-item"}, React.createElement("a", {className: "nav-link", onClick: function () { _this.props.Vm.fun_personprint(); }}, React.createElement("img", {className: "img", src: this.props.Vm.Data.personprint == "1" ? "/ts/lib/akCss/images/YSWork_pzyd_on.png" : "/ts/lib/akCss/images/YSWork_pzyd_disabled.png"}), React.createElement("span", null, "打印指引单"))), React.createElement("li", {className: "nav-item"}, React.createElement("a", {className: "nav-link", onClick: function () { _this.props.Vm.fun_personchagre(); }}, React.createElement("img", {className: "img", src: this.props.Vm.Data.personcharge == "1" ? "/ts/lib/akCss/images/YSWork_pjf_on.png" : "/ts/lib/akCss/images/YSWork_pjf_disabled.png"}), React.createElement("span", null, "个人缴费")))), React.createElement("ul", {className: "nav nav-pills clearfix"}, React.createElement("li", {className: "nav-item"}, React.createElement("a", {className: "nav-link YSs-workbench-blue", onClick: function () { _this.props.Vm.fun_temregister(); }}, React.createElement("img", {className: "img", src: this.props.Vm.Data.teamregister == "1" ? "/ts/lib/akCss/images/YSWork_gdj_on.png" : "/ts/lib/akCss/images/YSWork_gdj_disabled.png"}), React.createElement("span", null, "团体登记"))), React.createElement("li", {className: "nav-item"}, React.createElement("a", {className: "nav-link YSs-workbench-blue", onClick: function () { _this.props.Vm.fun_teamprint(); }}, React.createElement("img", {className: "img", src: this.props.Vm.Data.teamprint == "1" ? "/ts/lib/akCss/images/YSWork_pzyd_on.png" : "/ts/lib/akCss/images/YSWork_pzyd_disabled.png"}), React.createElement("span", null, "打印指引单"))))), React.createElement("div", {className: "pull-right YSm-workbench-right"}, React.createElement("ul", {className: "nav nav-pills clearfix"}, React.createElement("li", {className: "nav-item"}, React.createElement("a", {className: "nav-link", onClick: function () { _this.props.Vm.fun_officeinpit(); }}, React.createElement("img", {className: "img", src: this.props.Vm.Data.officeinput == "1" ? "/ts/lib/akCss/images/YSWork_olr_on.png" : "/ts/lib/akCss/images/YSWork_olr_disabled.png"}), React.createElement("span", null, "科室录入"))), React.createElement("li", {className: "nav-item"}, React.createElement("a", {className: "nav-link", onClick: function () { _this.props.Vm.fun_review(); }}, React.createElement("img", {className: "img", src: this.props.Vm.Data.review == "1" ? "/ts/lib/akCss/images/YSWork_zj_on.png" : "/ts/lib/akCss/images/YSWork_zj_disabled.png"}), React.createElement("span", null, "总检"))), React.createElement("li", {className: "nav-item", onClick: function () { _this.props.Vm.fun_printMedical(); }}, React.createElement("a", {className: "nav-link"}, React.createElement("img", {className: "img", src: this.props.Vm.Data.printMedical == "1" ? "/ts/lib/akCss/images/YSWork_cbg_on.png" : "/ts/lib/akCss/images/YSWork_cbg_disabled.png"}), React.createElement("span", null, "打印体检报告"))))), React.createElement("div", {className: "YSu-workbench-red"}), React.createElement("div", {className: "YSu-workbench-blue"}));
                ;
            };
            WorkBenchPageReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
                var $img = $(".img");
                $img.hover(function () {
                    $(this).attr("src", $(this).attr("src").replace("_on", "_over"));
                }, function () {
                    $(this).attr("src", $(this).attr("src").replace("_over", "_on"));
                });
            };
            return WorkBenchPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        WorkBenchPage.WorkBenchPageReact = WorkBenchPageReact;
        var WorkBenchPageVm = (function (_super) {
            __extends(WorkBenchPageVm, _super);
            function WorkBenchPageVm(config) {
                _super.call(this);
                this.ReactType = WorkBenchPageReact;
                this.Data = { officeinput: "0", personcharge: "0", personprint: "0", personregister: "0", printMedical: "0", review: "0", teamprint: "0", teamregister: "0" };
                this.pIsHullAutoHide = true;
                //this.Data.officeinput = "1";
                //this.Data.personcharge = "1";
                //this.Data.personprint = "1";
                //this.Data.personregister = "1";
                //this.Data.printMedical = "1";
                //this.Data.teamprint = "1";
                //this.Data.teamregister = "1";
                //this.Data.review = "1";
            }
            WorkBenchPageVm.prototype.fun_officeinpit = function () {
                if (this.Data.officeinput == "1") {
                    urlFile.Core.AkUrl.Current().openUrl("$DepartmentEntryPage$", false);
                }
                else {
                    alert("抱歉，您没有使用的权限");
                }
            };
            WorkBenchPageVm.prototype.fun_personchagre = function () {
                if (this.Data.personcharge == "1") {
                    urlFile.Core.AkUrl.Current().openUrl("$PERSONPAYMENTPAGE$", false);
                }
                else {
                    alert("抱歉，您没有使用的权限");
                }
            };
            WorkBenchPageVm.prototype.fun_personprint = function () {
                if (this.Data.personprint == "1") {
                    urlFile.Core.AkUrl.Current().openUrl("$$module/Medical/Base/medical_Member_PrintGuidelines", false);
                }
                else {
                    alert("抱歉，您没有使用的权限");
                }
            };
            WorkBenchPageVm.prototype.fun_personregister = function () {
                if (this.Data.personregister == "1") {
                    urlFile.Core.AkUrl.Current().openUrl("$ExamOrderPage$", false);
                }
                else {
                    alert("抱歉，您没有使用的权限");
                }
            };
            WorkBenchPageVm.prototype.fun_printMedical = function () {
                if (this.Data.printMedical == "1") {
                    urlFile.Core.AkUrl.Current().openUrl("$DetectionListPage$", false);
                }
                else {
                    alert("抱歉，您没有使用的权限");
                }
            };
            WorkBenchPageVm.prototype.fun_temregister = function () {
                if (this.Data.teamregister == "1") {
                    urlFile.Core.AkUrl.Current().openUrl("$GroupListPage$", false);
                }
                else {
                    alert("抱歉，您没有使用的权限");
                }
            };
            WorkBenchPageVm.prototype.fun_teamprint = function () {
                if (this.Data.teamprint == "1") {
                    urlFile.Core.AkUrl.Current().openUrl("$$module/Medical/Base/medical_Exam_PrintGuidelines", false);
                }
                else {
                    alert("抱歉，您没有使用的权限");
                }
            };
            WorkBenchPageVm.prototype.fun_review = function () {
                if (this.Data.review == "1") {
                    urlFile.Core.AkUrl.Current().openUrl("$DetectionListPage$", false);
                }
                else {
                    alert("抱歉，您没有使用的权限");
                }
            };
            WorkBenchPageVm.prototype.init = function (config) { };
            WorkBenchPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                urlFile.Core.AkPost("/MedicalCenter/Users/getRight", {}, function (a) {
                    switch (a) {
                        case "admin":
                        case "ALL":
                            _this.Data.officeinput = "1";
                            _this.Data.personcharge = "1";
                            _this.Data.personprint = "1";
                            _this.Data.personregister = "1";
                            _this.Data.printMedical = "1";
                            _this.Data.teamprint = "1";
                            _this.Data.teamregister = "1";
                            _this.Data.review = "1";
                            break;
                        case "lrys":
                            _this.Data.officeinput = "1";
                            _this.Data.personcharge = "0";
                            _this.Data.personprint = "0";
                            _this.Data.personregister = "0";
                            _this.Data.printMedical = "0";
                            _this.Data.teamprint = "0";
                            _this.Data.teamregister = "0";
                            _this.Data.review = "0";
                            break;
                        case "zjys":
                            _this.Data.officeinput = "0";
                            _this.Data.personcharge = "0";
                            _this.Data.personprint = "0";
                            _this.Data.personregister = "0";
                            _this.Data.printMedical = "0";
                            _this.Data.teamprint = "0";
                            _this.Data.teamregister = "0";
                            _this.Data.review = "1";
                            break;
                        case "jd":
                            _this.Data.officeinput = "0";
                            _this.Data.personcharge = "0";
                            _this.Data.personprint = "1";
                            _this.Data.personregister = "1";
                            _this.Data.printMedical = "0";
                            _this.Data.teamprint = "1";
                            _this.Data.teamregister = "1";
                            _this.Data.review = "0";
                            break;
                        case "sf":
                            _this.Data.officeinput = "0";
                            _this.Data.personcharge = "1";
                            _this.Data.personprint = "0";
                            _this.Data.personregister = "0";
                            _this.Data.printMedical = "0";
                            _this.Data.teamprint = "0";
                            _this.Data.teamregister = "0";
                            _this.Data.review = "0";
                            break;
                        case "null":
                            _this.Data.officeinput = "0";
                            _this.Data.personcharge = "0";
                            _this.Data.personprint = "0";
                            _this.Data.personregister = "0";
                            _this.Data.printMedical = "0";
                            _this.Data.teamprint = "0";
                            _this.Data.teamregister = "0";
                            _this.Data.review = "0";
                            break;
                    }
                    _this.IsMulit = true;
                    _this.forceUpdate("");
                });
                if (callback) {
                    callback();
                }
            };
            return WorkBenchPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        WorkBenchPage.WorkBenchPageVm = WorkBenchPageVm;
        var WorkBenchPageStates = (function (_super) {
            __extends(WorkBenchPageStates, _super);
            function WorkBenchPageStates() {
                _super.apply(this, arguments);
            }
            return WorkBenchPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        WorkBenchPage.WorkBenchPageStates = WorkBenchPageStates;
        var WorkBenchPageProps = (function (_super) {
            __extends(WorkBenchPageProps, _super);
            function WorkBenchPageProps() {
                _super.apply(this, arguments);
            }
            return WorkBenchPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        WorkBenchPage.WorkBenchPageProps = WorkBenchPageProps;
        iocFile.Core.Ioc.Current().RegisterType("WORKBENCHPAGE", basewedPageFile.Web.BaseWebPageVm, WorkBenchPageVm);
    })(WorkBenchPage = exports.WorkBenchPage || (exports.WorkBenchPage = {}));
});
