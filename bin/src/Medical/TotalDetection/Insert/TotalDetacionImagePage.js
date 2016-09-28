var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/Ioc", "./../../../04page/BaseWebPage", "react", "./../../../02col/04upload/ImageShowItem", "./../../../02col/04upload/MultiImageUpload"], function (require, exports, iocFile, basewedPageFile, React, ImageShowFile, imageupload) {
    "use strict";
    var TotalDetacionImagePage;
    (function (TotalDetacionImagePage) {
        var TotalDetacionImagePageAction = (function (_super) {
            __extends(TotalDetacionImagePageAction, _super);
            function TotalDetacionImagePageAction() {
                _super.apply(this, arguments);
            }
            return TotalDetacionImagePageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        TotalDetacionImagePage.TotalDetacionImagePageAction = TotalDetacionImagePageAction;
        var TotalDetacionImagePageReact = (function (_super) {
            __extends(TotalDetacionImagePageReact, _super);
            function TotalDetacionImagePageReact() {
                _super.apply(this, arguments);
                this.state = new TotalDetacionImagePageStates();
            }
            TotalDetacionImagePageReact.prototype.pSender = function () {
                return React.createElement("div", null, this._tDom(this.props.Vm.upload));
            };
            return TotalDetacionImagePageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        TotalDetacionImagePage.TotalDetacionImagePageReact = TotalDetacionImagePageReact;
        var TotalDetacionImagePageVm = (function (_super) {
            __extends(TotalDetacionImagePageVm, _super);
            function TotalDetacionImagePageVm(config) {
                _super.call(this);
                this.ReactType = TotalDetacionImagePageReact;
                this.Title = "显示图片";
            }
            TotalDetacionImagePageVm.prototype.init = function (config) { };
            TotalDetacionImagePageVm.prototype.loadPage = function (callback) {
                this.imageshow = new ImageShowFile.ui.ImageShowItemVm();
                this.upload = new imageupload.ui.MultiImageUploadVm();
                this.upload.isAbleEdit = false;
                if (this.Param1) {
                    var imageobj = JSON.parse(this.Param1);
                    //this.imageshow.ResourceInfo = imageobj["ResourceInfoList"];
                    this.upload.dataValueSet(this.Param1);
                }
                this.upload.StorageName = "CoreUserlogo"; //MedicalDepartStorage
                this.upload.UploadName = "CoreUserlogo"; //MedicalDepart
                this.upload.FileExtension = "*.jpeg;*.jpg;*.bmp;*.gif;*.png";
                this.forceUpdate("");
                if (callback) {
                    callback();
                }
            };
            return TotalDetacionImagePageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        TotalDetacionImagePage.TotalDetacionImagePageVm = TotalDetacionImagePageVm;
        var TotalDetacionImagePageStates = (function (_super) {
            __extends(TotalDetacionImagePageStates, _super);
            function TotalDetacionImagePageStates() {
                _super.apply(this, arguments);
            }
            return TotalDetacionImagePageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        TotalDetacionImagePage.TotalDetacionImagePageStates = TotalDetacionImagePageStates;
        var TotalDetacionImagePageProps = (function (_super) {
            __extends(TotalDetacionImagePageProps, _super);
            function TotalDetacionImagePageProps() {
                _super.apply(this, arguments);
            }
            return TotalDetacionImagePageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        TotalDetacionImagePage.TotalDetacionImagePageProps = TotalDetacionImagePageProps;
        iocFile.Core.Ioc.Current().RegisterType("TOTALDETACIONIMAGEPAGE", basewedPageFile.Web.BaseWebPageVm, TotalDetacionImagePageVm);
    })(TotalDetacionImagePage = exports.TotalDetacionImagePage || (exports.TotalDetacionImagePage = {}));
});
