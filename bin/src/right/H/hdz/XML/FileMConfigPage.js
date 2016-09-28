var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/Ioc", "./../../../../04page/BaseWebPage", "react", "./../../../../05tool/EditSpan"], function (require, exports, iocFile, basewedPageFile, React, EditSpanFile) {
    "use strict";
    var ESpan = EditSpanFile.EditSpan.EditSpanReact;
    var ESpanVm = EditSpanFile.EditSpan.EditSpanVm;
    var FileMConfigPage;
    (function (FileMConfigPage) {
        var FileMConfigPageAction = (function (_super) {
            __extends(FileMConfigPageAction, _super);
            function FileMConfigPageAction() {
                _super.apply(this, arguments);
            }
            return FileMConfigPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        FileMConfigPage.FileMConfigPageAction = FileMConfigPageAction;
        var FileMConfigPageReact = (function (_super) {
            __extends(FileMConfigPageReact, _super);
            function FileMConfigPageReact() {
                _super.apply(this, arguments);
                this.state = new FileMConfigPageStates();
            }
            FileMConfigPageReact.prototype.pSender = function () {
                return React.createElement("div", null, React.createElement("div", {className: "Hm-file-mconfig clearfix"}, React.createElement("p", {className: "Hs-fw "}, "文件"), React.createElement("table", {className: "table table-hover"}, this._initThead(), this._initTbody())), this._initFileUpload(), this._initFileStorage());
            };
            FileMConfigPageReact.prototype._initThead = function () {
                return React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "序号"), React.createElement("th", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "文件名称" })})), React.createElement("th", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "ID" })})), React.createElement("th", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "物理路径" })})), React.createElement("th", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "FTP路径" })})), React.createElement("th", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "HTTP路径" })})), React.createElement("th", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "MMS路径" })}))));
            };
            FileMConfigPageReact.prototype._initTbody = function () {
                return React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null), React.createElement("td", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "Core" })})), React.createElement("td", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "-1" })})), React.createElement("td", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "\\192.168.66.11\zyk\WebFile\Core\\", Type: "textarea" })})), React.createElement("td", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "" })})), React.createElement("td", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "http://192.168.66.11:99/Core/", Type: "textarea" })})), React.createElement("td", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "" })}))), React.createElement("tr", null, React.createElement("td", null), React.createElement("td", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "HospPerformance" })})), React.createElement("td", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "1" })})), React.createElement("td", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "\\192.168.66.11\zyk\WebFile\HospPerformance\\", Type: "textarea" })})), React.createElement("td", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "" })})), React.createElement("td", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "http://192.168.66.11:99/HospPerformance/", Type: "textarea" })})), React.createElement("td", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "" })}))));
            };
            FileMConfigPageReact.prototype._initFileUpload = function () {
                var _this = this;
                return React.createElement("div", {className: "Hm-file-mconfig clearfix"}, React.createElement("p", {className: "Hs-fw "}, "文件上传", React.createElement("i", {className: "fa " + (this.props.Vm.IsFileUploadHidden ? "fa-caret-down " : "fa-caret-up"), onClick: function () { _this.fun_FileUpload(); }})), React.createElement("div", {className: this.props.Vm.IsFileUploadHidden ? "hide" : " "}, React.createElement("div", {className: "col-lg-4 col-md-4"}, React.createElement("div", {className: "p-a"}, React.createElement("div", {className: ""}, React.createElement("label", null, "名称："), React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "CoreUserlogo" })})), React.createElement("div", {className: ""}, React.createElement("label", null, "最大值："), React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "1048576" })})), React.createElement("div", {className: ""}, React.createElement("label", null, "允许的扩展名（例：*.txt; *.doc）："), React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "*.jpeg;*.jpg;*.bmp;*.gif;*.png", Type: "textarea" })})), React.createElement("div", {className: ""}, React.createElement("label", null, "文件保存路径: "), React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "(空)" })})), React.createElement("div", {className: ""}, React.createElement("label", null, "图片裁剪后的宽度: "), React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "60" })})), React.createElement("div", {className: ""}, React.createElement("label", null, "图片裁剪名称: "), React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "Core_User" })})))), React.createElement("div", {className: "col-lg-4 col-md-4"}, React.createElement("div", {className: "p-a"}, React.createElement("div", {className: ""}, React.createElement("label", null, "名称："), React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "BarCodeUpload" })})), React.createElement("div", {className: ""}, React.createElement("label", null, "最大值："), React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "1048576" })})), React.createElement("div", {className: ""}, React.createElement("label", null, "允许的扩展名（例：*.txt; *.doc）："), React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "*.jpeg;*.jpg;*.bmp;*.gif;*.png", Type: "textarea" })})), React.createElement("div", {className: ""}, React.createElement("label", null, "文件保存路径: "), React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "(空)" })})), React.createElement("div", {className: ""}, React.createElement("label", null, "图片裁剪后的宽度: "), React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "60" })})), React.createElement("div", {className: ""}, React.createElement("label", null, "图片裁剪名称: "), React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "BarCode" })})))), React.createElement("div", {className: "col-lg-4 col-md-4"}, React.createElement("div", {className: "p-a"}, React.createElement("div", {className: ""}, React.createElement("label", null, "名称："), React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "ExcelUpload" })})), React.createElement("div", {className: ""}, React.createElement("label", null, "最大值："), React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "1048576" })})), React.createElement("div", {className: ""}, React.createElement("label", null, "允许的扩展名（例：*.txt; *.doc）："), React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "*.xls" })})), React.createElement("div", {className: ""}, React.createElement("label", null, "文件保存路径: "), React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "(空)" })})), React.createElement("div", {className: ""}, React.createElement("label", null, "图片裁剪后的宽度: "), React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "60" })})), React.createElement("div", {className: ""}, React.createElement("label", null, "图片裁剪名称: "), React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "(空)" })}))))));
            };
            FileMConfigPageReact.prototype._initFileStorage = function () {
                var _this = this;
                return React.createElement("div", {className: "Hm-file-mconfig clearfix"}, React.createElement("p", {className: "Hs-fw "}, "文件存储", React.createElement("i", {className: "fa " + (this.props.Vm.IsFileStorageHidden ? "fa-caret-down " : "fa-caret-up"), onClick: function () { _this.fun_FileStorage(); }})), React.createElement("div", {className: this.props.Vm.IsFileStorageHidden ? "hide" : " "}, React.createElement("div", {className: "col-lg-4 col-md-4"}, React.createElement("div", {className: "p-a"}, React.createElement("div", {className: ""}, React.createElement("label", null, "名称："), React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "CoreUserlogo" })})), React.createElement("div", {className: ""}, React.createElement("label", null, "文件路径ID："), React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "-1" })})), React.createElement("div", {className: ""}, React.createElement("label", null, "文件名称格式："), React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "{0}.jpg" })})), React.createElement("div", {className: ""}, React.createElement("label", null, "文件路径格式: "), React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "User/logo/" })})))), React.createElement("div", {className: "col-lg-4 col-md-4"}, React.createElement("div", {className: "p-a"}, React.createElement("div", {className: ""}, React.createElement("label", null, "名称："), React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "BarCodeStorage" })})), React.createElement("div", {className: ""}, React.createElement("label", null, "文件路径ID："), React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "1" })})), React.createElement("div", {className: ""}, React.createElement("label", null, "文件名称格式："), React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "{0}.png" })})), React.createElement("div", {className: ""}, React.createElement("label", null, "文件路径格式: "), React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "BarCode/Image/{0:0000/00/00/}File/", Type: "textarea" })})))), React.createElement("div", {className: "col-lg-4 col-md-4"}, React.createElement("div", {className: "p-a"}, React.createElement("div", {className: ""}, React.createElement("label", null, "名称："), React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "ExcelStorage" })})), React.createElement("div", {className: ""}, React.createElement("label", null, "文件路径ID："), React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "1" })})), React.createElement("div", {className: ""}, React.createElement("label", null, "文件名称格式："), React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "{0}.xls" })})), React.createElement("div", {className: ""}, React.createElement("label", null, "文件路径格式: "), React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "Excel/{0:0000/00/00/}File/", Type: "textarea" })}))))));
            };
            FileMConfigPageReact.prototype.fun_FileUpload = function () {
                this.props.Vm.IsFileUploadHidden = !this.props.Vm.IsFileUploadHidden;
                this.forceUpdate();
            };
            FileMConfigPageReact.prototype.fun_FileStorage = function () {
                this.props.Vm.IsFileStorageHidden = !this.props.Vm.IsFileStorageHidden;
                this.forceUpdate();
            };
            return FileMConfigPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        FileMConfigPage.FileMConfigPageReact = FileMConfigPageReact;
        var FileMConfigPageVm = (function (_super) {
            __extends(FileMConfigPageVm, _super);
            function FileMConfigPageVm(config) {
                _super.call(this);
                this.ReactType = FileMConfigPageReact;
                this.Title = "FileMConfigPage页面;";
            }
            FileMConfigPageVm.prototype.init = function (config) {
            };
            FileMConfigPageVm.prototype.loadPage = function (callback) {
                if (callback) {
                    callback();
                }
            };
            return FileMConfigPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        FileMConfigPage.FileMConfigPageVm = FileMConfigPageVm;
        var FileMConfigPageStates = (function (_super) {
            __extends(FileMConfigPageStates, _super);
            function FileMConfigPageStates() {
                _super.apply(this, arguments);
            }
            return FileMConfigPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        FileMConfigPage.FileMConfigPageStates = FileMConfigPageStates;
        var FileMConfigPageProps = (function (_super) {
            __extends(FileMConfigPageProps, _super);
            function FileMConfigPageProps() {
                _super.apply(this, arguments);
            }
            return FileMConfigPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        FileMConfigPage.FileMConfigPageProps = FileMConfigPageProps;
        iocFile.Core.Ioc.Current().RegisterType("FILEMCONFIGPAGE", basewedPageFile.Web.BaseWebPageVm, FileMConfigPageVm);
    })(FileMConfigPage = exports.FileMConfigPage || (exports.FileMConfigPage = {}));
});
