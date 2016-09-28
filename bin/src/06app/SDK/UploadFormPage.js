var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/Ioc", "./../../04page/BaseWebPage", "react", "./../../05tool/Upload/UploadFormDom"], function (require, exports, iocFile, basewedPageFile, React, uploadFormDomFile) {
    "use strict";
    var UploadFormPage;
    (function (UploadFormPage) {
        var UploadFormPageAction = (function (_super) {
            __extends(UploadFormPageAction, _super);
            function UploadFormPageAction() {
                _super.apply(this, arguments);
            }
            return UploadFormPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        UploadFormPage.UploadFormPageAction = UploadFormPageAction;
        var UploadFormPageReact = (function (_super) {
            __extends(UploadFormPageReact, _super);
            function UploadFormPageReact() {
                _super.apply(this, arguments);
                this.state = new UploadFormPageStates();
            }
            UploadFormPageReact.prototype.pSender = function () {
                return React.createElement("div", null, this._tDom(this.props.Vm.UploadObj));
            };
            return UploadFormPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        UploadFormPage.UploadFormPageReact = UploadFormPageReact;
        var UploadFormPageVm = (function (_super) {
            __extends(UploadFormPageVm, _super);
            function UploadFormPageVm(config) {
                _super.call(this);
                this.ReactType = UploadFormPageReact;
                this.Title = "UploadFormPage页面;";
                this.UploadObj = new uploadFormDomFile.UploadFormDom.UploadFormDomVm();
            }
            UploadFormPageVm.prototype.init = function (config) {
            };
            UploadFormPageVm.prototype.loadPage = function (callback) {
                if (callback) {
                    callback();
                }
            };
            return UploadFormPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        UploadFormPage.UploadFormPageVm = UploadFormPageVm;
        var UploadFormPageStates = (function (_super) {
            __extends(UploadFormPageStates, _super);
            function UploadFormPageStates() {
                _super.apply(this, arguments);
            }
            return UploadFormPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        UploadFormPage.UploadFormPageStates = UploadFormPageStates;
        var UploadFormPageProps = (function (_super) {
            __extends(UploadFormPageProps, _super);
            function UploadFormPageProps() {
                _super.apply(this, arguments);
            }
            return UploadFormPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        UploadFormPage.UploadFormPageProps = UploadFormPageProps;
        iocFile.Core.Ioc.Current().RegisterType("UPLOADFORMPAGE", basewedPageFile.Web.BaseWebPageVm, UploadFormPageVm);
    })(UploadFormPage = exports.UploadFormPage || (exports.UploadFormPage = {}));
});
