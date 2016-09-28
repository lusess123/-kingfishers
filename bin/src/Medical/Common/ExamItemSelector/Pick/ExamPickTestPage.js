var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/Ioc", "./../../../../04page/BaseWebPage", "react", "./../../../../02col/03selector/PickSelector", "./ExamPickListDom", "./../../../../01core/Event"], function (require, exports, iocFile, basewedPageFile, React, PickSelectorFile, ExamPickListDomFile, eventFile) {
    "use strict";
    var ExamPickTestPage;
    (function (ExamPickTestPage) {
        var ExamPickTestPageAction = (function (_super) {
            __extends(ExamPickTestPageAction, _super);
            function ExamPickTestPageAction() {
                _super.apply(this, arguments);
            }
            return ExamPickTestPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        ExamPickTestPage.ExamPickTestPageAction = ExamPickTestPageAction;
        var ExamPickTestPageReact = (function (_super) {
            __extends(ExamPickTestPageReact, _super);
            function ExamPickTestPageReact() {
                _super.apply(this, arguments);
                this.state = new ExamPickTestPageStates();
            }
            ExamPickTestPageReact.prototype.pSender = function () {
                return React.createElement("div", null, this._tDom(this.props.Vm.PickSelectorObj));
            };
            return ExamPickTestPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        ExamPickTestPage.ExamPickTestPageReact = ExamPickTestPageReact;
        var ExamPickTestPageVm = (function (_super) {
            __extends(ExamPickTestPageVm, _super);
            function ExamPickTestPageVm(config) {
                _super.call(this);
                this.ReactType = ExamPickTestPageReact;
                this.UniId = eventFile.App.getUniId().toString();
                var _obj = new ExamPickListDomFile.ExamPickListDom.ExamPickListDomVm({
                    UniId: this.UniId
                });
                this.PickSelectorObj =
                    new PickSelectorFile.PickSelector.PickSelectorVm({
                        LeftDomVmObj: _obj,
                        UniId: this.UniId
                    });
            }
            ExamPickTestPageVm.prototype.init = function (config) {
            };
            ExamPickTestPageVm.prototype.loadPage = function (callback) {
                if (callback) {
                    callback();
                }
            };
            return ExamPickTestPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        ExamPickTestPage.ExamPickTestPageVm = ExamPickTestPageVm;
        var ExamPickTestPageStates = (function (_super) {
            __extends(ExamPickTestPageStates, _super);
            function ExamPickTestPageStates() {
                _super.apply(this, arguments);
            }
            return ExamPickTestPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        ExamPickTestPage.ExamPickTestPageStates = ExamPickTestPageStates;
        var ExamPickTestPageProps = (function (_super) {
            __extends(ExamPickTestPageProps, _super);
            function ExamPickTestPageProps() {
                _super.apply(this, arguments);
            }
            return ExamPickTestPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        ExamPickTestPage.ExamPickTestPageProps = ExamPickTestPageProps;
        iocFile.Core.Ioc.Current().RegisterType("EXAMPICKTESTPAGE", basewedPageFile.Web.BaseWebPageVm, ExamPickTestPageVm);
    })(ExamPickTestPage = exports.ExamPickTestPage || (exports.ExamPickTestPage = {}));
});
