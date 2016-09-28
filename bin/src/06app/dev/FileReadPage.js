var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/Ioc", "./../../01core/Url", "./../../04page/BaseWebPage", "react", "./../../05tool/MonacoEditor/MonacoEditor"], function (require, exports, iocFile, urlFile, basewedPageFile, React, MonacoEditorFile) {
    "use strict";
    var FileReadPage;
    (function (FileReadPage) {
        var FileReadPageAction = (function (_super) {
            __extends(FileReadPageAction, _super);
            function FileReadPageAction() {
                _super.apply(this, arguments);
            }
            return FileReadPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        FileReadPage.FileReadPageAction = FileReadPageAction;
        var FileReadPageReact = (function (_super) {
            __extends(FileReadPageReact, _super);
            function FileReadPageReact() {
                _super.apply(this, arguments);
                this.state = new FileReadPageStates();
            }
            FileReadPageReact.prototype.pSender = function () {
                return React.createElement("div", null, this._tDom(this.props.Vm.MonacoEditorObj));
            };
            return FileReadPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        FileReadPage.FileReadPageReact = FileReadPageReact;
        var FileReadPageVm = (function (_super) {
            __extends(FileReadPageVm, _super);
            function FileReadPageVm(config) {
                _super.call(this);
                this.ReactType = FileReadPageReact;
                this.Title = "FileReadPage页面;";
            }
            FileReadPageVm.prototype.Reset = function (p1, p2, p3) {
                _super.prototype.Reset.call(this, p1, p2, p3);
                this.FilePath = p1;
            };
            FileReadPageVm.prototype.init = function (config) {
            };
            FileReadPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                urlFile.Core.AkPost("/rightcloud/auth/getcodefile", { path: this.FilePath }, function (a) {
                    var _list = a;
                    _this.MonacoEditorObj = new MonacoEditorFile.MonacoEditor.MonacoEditorVm({
                        CodeType: MonacoEditorFile.MonacoEditor.CodeType.csharp,
                        ContentList: _list
                    });
                    _this.forceUpdate("");
                });
                if (callback) {
                    callback();
                }
            };
            return FileReadPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        FileReadPage.FileReadPageVm = FileReadPageVm;
        var FileReadPageStates = (function (_super) {
            __extends(FileReadPageStates, _super);
            function FileReadPageStates() {
                _super.apply(this, arguments);
            }
            return FileReadPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        FileReadPage.FileReadPageStates = FileReadPageStates;
        var FileReadPageProps = (function (_super) {
            __extends(FileReadPageProps, _super);
            function FileReadPageProps() {
                _super.apply(this, arguments);
            }
            return FileReadPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        FileReadPage.FileReadPageProps = FileReadPageProps;
        iocFile.Core.Ioc.Current().RegisterType("FILEREADPAGE", basewedPageFile.Web.BaseWebPageVm, FileReadPageVm);
    })(FileReadPage = exports.FileReadPage || (exports.FileReadPage = {}));
});
