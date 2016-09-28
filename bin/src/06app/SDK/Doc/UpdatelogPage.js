var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/Ioc", "./../../../01core/Url", "./../../../04page/BaseWebPage", "react", "./Year"], function (require, exports, iocFile, urlFile, basewedPageFile, React, yearFile) {
    "use strict";
    var UpdatelogPage;
    (function (UpdatelogPage) {
        var UpdatelogPageAction = (function (_super) {
            __extends(UpdatelogPageAction, _super);
            function UpdatelogPageAction() {
                _super.apply(this, arguments);
            }
            return UpdatelogPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        UpdatelogPage.UpdatelogPageAction = UpdatelogPageAction;
        var UpdatelogPageReact = (function (_super) {
            __extends(UpdatelogPageReact, _super);
            function UpdatelogPageReact() {
                _super.apply(this, arguments);
                this.state = new UpdatelogPageStates();
            }
            UpdatelogPageReact.prototype.pSender = function () {
                return React.createElement("div", {className: "Hm-timeline"}, React.createElement("div", {className: "Hu-line-title"}, React.createElement("img", {src: "../lib/akCss/images/platform/log-list.png"}), React.createElement("span", null, "平台更新日志")), this.props.Vm.YearDataList.map(function (a) { return a.intoDom(); }));
            };
            return UpdatelogPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        UpdatelogPage.UpdatelogPageReact = UpdatelogPageReact;
        var UpdatelogPageVm = (function (_super) {
            __extends(UpdatelogPageVm, _super);
            function UpdatelogPageVm(config) {
                _super.call(this);
                this.ReactType = UpdatelogPageReact;
                this.Title = "平台更新日志";
                this.YearDataList = [];
            }
            UpdatelogPageVm.prototype.init = function (config) {
            };
            UpdatelogPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                urlFile.Core.AkPost("/core/WebService/Method?resolver=JsonMethod", { json: "dev/UpdatelogData.json" }, function (a) {
                    var _data = a;
                    _data.YearList.forEach(function (year) {
                        var _newYear = new yearFile.Year.YearVm(year);
                        _this.YearDataList.push(_newYear);
                    });
                    if (callback) {
                        callback();
                    }
                });
            };
            return UpdatelogPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        UpdatelogPage.UpdatelogPageVm = UpdatelogPageVm;
        var UpdatelogPageStates = (function (_super) {
            __extends(UpdatelogPageStates, _super);
            function UpdatelogPageStates() {
                _super.apply(this, arguments);
            }
            return UpdatelogPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        UpdatelogPage.UpdatelogPageStates = UpdatelogPageStates;
        var UpdatelogPageProps = (function (_super) {
            __extends(UpdatelogPageProps, _super);
            function UpdatelogPageProps() {
                _super.apply(this, arguments);
            }
            return UpdatelogPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        UpdatelogPage.UpdatelogPageProps = UpdatelogPageProps;
        iocFile.Core.Ioc.Current().RegisterType("UPDATELOGPAGE", basewedPageFile.Web.BaseWebPageVm, UpdatelogPageVm);
    })(UpdatelogPage = exports.UpdatelogPage || (exports.UpdatelogPage = {}));
});
