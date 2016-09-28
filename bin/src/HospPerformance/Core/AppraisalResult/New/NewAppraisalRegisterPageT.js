var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/Ioc", "./../../../../01core/Util", "./../../../../01core/Url", "./../../../../04page/BaseWebPage", "react", "./../../../../02col/04upload/SingleFileUpload"], function (require, exports, iocFile, utilFile, urlFile, basewedPageFile, React, SingleFileUpload) {
    "use strict";
    var NewAppraisalRegisterPageT;
    (function (NewAppraisalRegisterPageT) {
        var NewAppraisalRegisterPageTAction = (function (_super) {
            __extends(NewAppraisalRegisterPageTAction, _super);
            function NewAppraisalRegisterPageTAction() {
                _super.apply(this, arguments);
            }
            return NewAppraisalRegisterPageTAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        NewAppraisalRegisterPageT.NewAppraisalRegisterPageTAction = NewAppraisalRegisterPageTAction;
        var NewAppraisalRegisterPageTReact = (function (_super) {
            __extends(NewAppraisalRegisterPageTReact, _super);
            function NewAppraisalRegisterPageTReact() {
                _super.apply(this, arguments);
                this.state = new NewAppraisalRegisterPageTStates();
            }
            NewAppraisalRegisterPageTReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "p-a-md"}, React.createElement("div", null, React.createElement("p", null, "已选：", this.props.Vm.AppraisalName), React.createElement("ol", null, React.createElement("li", null, "请先导出模板表格，按照excel表格内容填写数据。"), React.createElement("li", null, "填好表格后，点击导入按钮，上传填写的数据。"))), React.createElement("div", {className: "text-center"}, React.createElement("a", {className: "btn btn-sm btn-primary", onClick: function () { _this.exportTemplate(); }}, "导出模板"), React.createElement("a", {className: "btn btn-sm btn-primary p-a-0 YSc-upload"}, this.props.Vm.SingleFileUpload.intoDom())));
            };
            NewAppraisalRegisterPageTReact.prototype.exportTemplate = function () {
                this.props.Vm.exportTemplate();
            };
            NewAppraisalRegisterPageTReact.prototype.importData = function () {
            };
            return NewAppraisalRegisterPageTReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        NewAppraisalRegisterPageT.NewAppraisalRegisterPageTReact = NewAppraisalRegisterPageTReact;
        var NewAppraisalRegisterPageTVm = (function (_super) {
            __extends(NewAppraisalRegisterPageTVm, _super);
            function NewAppraisalRegisterPageTVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = NewAppraisalRegisterPageTReact;
                this.AppraisalName = "";
                this.SingleFileUpload = new SingleFileUpload.ui.SingleFileUploadVm();
                this.SingleFileUpload.LabelText = "导入数据";
                this.SingleFileUpload.StorageName = "ExcelStorage";
                this.SingleFileUpload.UploadName = "ExcelUpload";
                this.SingleFileUpload.isLoadIcon = false;
                this.SingleFileUpload.onChangeHandle(function (val) {
                    _this.ImportExcel(val);
                    return true;
                });
                this.Title = "导入";
            }
            NewAppraisalRegisterPageTVm.prototype.ImportExcel = function (val) {
                var File = JSON.parse(val);
                var PathId = File.ResourceInfoList[0].PathID;
                var FileId = File.ResourceInfoList[0].FileId;
                var ExtName = File.ResourceInfoList[0].ExtName;
                var fileStorageName = this.SingleFileUpload.StorageName;
                urlFile.Core.AkPost("/HospPerformance/Appraisal/ImportExcelInfo", { fileStorageName: fileStorageName, PathID: PathId, FileId: FileId, ExtName: ExtName, FID: this.Param1 }, function (a) {
                    if (a) {
                        utilFile.Core.Util.Noty("导入成功！");
                        var url = "$$module/HospPerformance/Core/performance_core_Appraisal$";
                        urlFile.Core.AkUrl.Current().openUrl(url, true);
                    }
                });
            };
            NewAppraisalRegisterPageTVm.prototype.init = function (config) {
            };
            NewAppraisalRegisterPageTVm.prototype.exportTemplate = function () {
                window.open("/HospPerformance/Appraisal/CreateAppraisalEntering?FID=" + this.Param1, 'fullscreen=yes, scrollbars=auto');
                //urlFile.Core.AkPost("/HospPerformance/Appraisal/CreateAppraisalEntering", { FID: this.Param1 }, (a) => {
                //    if (a) {
                //        utilFile.Core.Util.Noty("导出成功！");
                //    }
                //  })
            };
            ;
            NewAppraisalRegisterPageTVm.prototype.loadPage = function (callback) {
                var _this = this;
                urlFile.Core.AkPost("/HospPerformance/AppraisalResult/FetchAppraisalData", { appraisalId: this.Param1 }, function (a) {
                    _this.AppraisalName = a.Data;
                    if (callback) {
                        callback();
                    }
                });
            };
            return NewAppraisalRegisterPageTVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        NewAppraisalRegisterPageT.NewAppraisalRegisterPageTVm = NewAppraisalRegisterPageTVm;
        var NewAppraisalRegisterPageTStates = (function (_super) {
            __extends(NewAppraisalRegisterPageTStates, _super);
            function NewAppraisalRegisterPageTStates() {
                _super.apply(this, arguments);
            }
            return NewAppraisalRegisterPageTStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        NewAppraisalRegisterPageT.NewAppraisalRegisterPageTStates = NewAppraisalRegisterPageTStates;
        var NewAppraisalRegisterPageTProps = (function (_super) {
            __extends(NewAppraisalRegisterPageTProps, _super);
            function NewAppraisalRegisterPageTProps() {
                _super.apply(this, arguments);
            }
            return NewAppraisalRegisterPageTProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        NewAppraisalRegisterPageT.NewAppraisalRegisterPageTProps = NewAppraisalRegisterPageTProps;
        iocFile.Core.Ioc.Current().RegisterType("NEWAPPRAISALREGISTERPAGET", basewedPageFile.Web.BaseWebPageVm, NewAppraisalRegisterPageTVm);
    })(NewAppraisalRegisterPageT = exports.NewAppraisalRegisterPageT || (exports.NewAppraisalRegisterPageT = {}));
});
