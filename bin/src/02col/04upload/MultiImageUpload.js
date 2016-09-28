var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./BaseImageUpload", "./../00core/baseCol", "./../../01core/Ioc", "./ImageShowItem"], function (require, exports, baseImageupload, basecolFile, iocFile, imageShowItem) {
    "use strict";
    var BaseColVm = basecolFile.Core.BaseColVm;
    var ui;
    (function (ui) {
        //alert("MultiImageUploadReact");
        var MultiImageUploadAction = (function (_super) {
            __extends(MultiImageUploadAction, _super);
            function MultiImageUploadAction() {
                _super.apply(this, arguments);
            }
            return MultiImageUploadAction;
        }(baseImageupload.ui.BaseImageUploadAction));
        ui.MultiImageUploadAction = MultiImageUploadAction;
        var MultiImageUploadReact = (function (_super) {
            __extends(MultiImageUploadReact, _super);
            function MultiImageUploadReact() {
                _super.apply(this, arguments);
            }
            MultiImageUploadReact.prototype.pComponentDidUpdate = function (prevProps, prevState, prevContext) {
                _super.prototype.pComponentDidUpdate.call(this, prevProps, prevState, prevContext);
            };
            return MultiImageUploadReact;
        }(baseImageupload.ui.BaseImageUploadReact));
        ui.MultiImageUploadReact = MultiImageUploadReact;
        var MultiImageUploadProps = (function (_super) {
            __extends(MultiImageUploadProps, _super);
            function MultiImageUploadProps() {
                _super.apply(this, arguments);
            }
            return MultiImageUploadProps;
        }(baseImageupload.ui.BaseImageUploadProps));
        ui.MultiImageUploadProps = MultiImageUploadProps;
        var MultiImageUploadStates = (function (_super) {
            __extends(MultiImageUploadStates, _super);
            function MultiImageUploadStates() {
                _super.apply(this, arguments);
            }
            return MultiImageUploadStates;
        }(baseImageupload.ui.BaseImageUploadStates));
        ui.MultiImageUploadStates = MultiImageUploadStates;
        var MultiImageUploadVm = (function (_super) {
            __extends(MultiImageUploadVm, _super);
            function MultiImageUploadVm() {
                _super.apply(this, arguments);
                this.ReactType = MultiImageUploadReact;
                this.pRegName = "多图片上传";
                this.IsCut = false;
                this.IsMulit = false;
                this.Multi = true;
                this.isAbleEdit = true;
            }
            MultiImageUploadVm.Test = function () {
                var _bean = new MultiImageUploadVm();
                _bean.StorageName = "CoreUserlogo";
                _bean.UploadName = "CoreUserlogo";
                _bean.FileExtension = "*.jpeg;*.jpg;*.bmp;*.gif;*.png";
                return _bean;
            };
            MultiImageUploadVm.prototype.pImagePreview = function (resourceInfo, isInit) {
                if (!isInit) {
                    this.ResourceInfoList.push(resourceInfo);
                }
                var _item = new imageShowItem.ui.ImageShowItemVm();
                debugger;
                _item.isAbleEdit = this.isAbleEdit;
                _item.ResourceInfo = resourceInfo;
                _item.UploadObj = this;
                _item.IsMulti = true;
                //this.props.Vm.ShowItemList = new Array<ImageShowItemVm>();
                this.ShowItemList.push(_item);
            };
            return MultiImageUploadVm;
        }(baseImageupload.ui.BaseImageUploadVm));
        ui.MultiImageUploadVm = MultiImageUploadVm;
        iocFile.Core.Ioc.Current().RegisterType("MultiImageUploadVm", BaseColVm, MultiImageUploadVm);
    })(ui = exports.ui || (exports.ui = {}));
});
