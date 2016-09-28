var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/Ioc", "./../../../04page/BaseWebPage", "./../../../02col/04upload/MultiImageUpload", "react"], function (require, exports, iocFile, basewedPageFile, imageupload, React) {
    "use strict";
    var DepartmentImagePage;
    (function (DepartmentImagePage) {
        var DepartmentImagePageAction = (function (_super) {
            __extends(DepartmentImagePageAction, _super);
            function DepartmentImagePageAction() {
                _super.apply(this, arguments);
            }
            return DepartmentImagePageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        DepartmentImagePage.DepartmentImagePageAction = DepartmentImagePageAction;
        var DepartmentImagePageReact = (function (_super) {
            __extends(DepartmentImagePageReact, _super);
            function DepartmentImagePageReact() {
                _super.apply(this, arguments);
                this.state = new DepartmentImagePageStates();
            }
            DepartmentImagePageReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "p-a"}, React.createElement("div", null, this._tDom(this.props.Vm.upload)), React.createElement("a", {className: "btn btn-sm btn-primary", onClick: function () { _this.props.Vm.UploadImage(); }}, "确定"));
            };
            return DepartmentImagePageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        DepartmentImagePage.DepartmentImagePageReact = DepartmentImagePageReact;
        var DepartmentImagePageVm = (function (_super) {
            __extends(DepartmentImagePageVm, _super);
            function DepartmentImagePageVm(config) {
                _super.call(this);
                this.ReactType = DepartmentImagePageReact;
                this.Title = "上传图片";
            }
            DepartmentImagePageVm.prototype.init = function (config) {
            };
            DepartmentImagePageVm.prototype.UploadImage = function () {
                var imageValue = this.upload.dataValueGet();
                var obj = JSON.parse(imageValue);
                var PageCount = obj["ResourceInfoList"].length;
                this.Itemdata.Picture = imageValue;
                this.Itemdata.PictureCount = PageCount;
                this.SendPageActor({ ToPanelName: "", ToModuleName: "DepartmentEntryPage" }, { Select: this.Itemdata });
                this.closePage();
            };
            DepartmentImagePageVm.prototype.loadPage = function (callback) {
                if (this.Param1) {
                    this.Itemdata = JSON.parse(this.Param1);
                    this.upload = new imageupload.ui.MultiImageUploadVm();
                    if (this.Itemdata.Picture) {
                        this.upload.dataValueSet(this.Itemdata.Picture);
                    }
                    this.upload.StorageName = "DeptStorage"; //MedicalDepartStorage
                    this.upload.UploadName = "DeptCodeUpload"; //MedicalDepart
                    this.upload.FileExtension = "*.jpeg;*.jpg;*.bmp;*.gif;*.png";
                }
                if (callback) {
                    callback();
                }
            };
            return DepartmentImagePageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        DepartmentImagePage.DepartmentImagePageVm = DepartmentImagePageVm;
        var DepartmentImagePageStates = (function (_super) {
            __extends(DepartmentImagePageStates, _super);
            function DepartmentImagePageStates() {
                _super.apply(this, arguments);
            }
            return DepartmentImagePageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        DepartmentImagePage.DepartmentImagePageStates = DepartmentImagePageStates;
        var DepartmentImagePageProps = (function (_super) {
            __extends(DepartmentImagePageProps, _super);
            function DepartmentImagePageProps() {
                _super.apply(this, arguments);
            }
            return DepartmentImagePageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        DepartmentImagePage.DepartmentImagePageProps = DepartmentImagePageProps;
        iocFile.Core.Ioc.Current().RegisterType("DEPARTMENTIMAGEPAGE", basewedPageFile.Web.BaseWebPageVm, DepartmentImagePageVm);
    })(DepartmentImagePage = exports.DepartmentImagePage || (exports.DepartmentImagePage = {}));
});
