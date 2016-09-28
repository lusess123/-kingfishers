var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./BaseFileUploa", "./../00core/baseCol", "./../../01core/Ioc", "./FileShowItem", "./ImageShowItem"], function (require, exports, baseFileUpload, basecolFile, iocFile, fileShowItem, imageShowItem) {
    "use strict";
    var BaseColVm = basecolFile.Core.BaseColVm;
    var ui;
    (function (ui) {
        //alert("MultiFileUploadReact");
        var MultiFileUploadAction = (function (_super) {
            __extends(MultiFileUploadAction, _super);
            function MultiFileUploadAction() {
                _super.apply(this, arguments);
            }
            return MultiFileUploadAction;
        }(baseFileUpload.ui.BaseFileUploadAction));
        ui.MultiFileUploadAction = MultiFileUploadAction;
        var MultiFileUploadReact = (function (_super) {
            __extends(MultiFileUploadReact, _super);
            function MultiFileUploadReact() {
                _super.apply(this, arguments);
            }
            MultiFileUploadReact.prototype.pComponentDidUpdate = function (prevProps, prevState, prevContext) {
                _super.prototype.pComponentDidUpdate.call(this, prevProps, prevState, prevContext);
            };
            MultiFileUploadReact.prototype.pFileDisplayView = function (resourceInfo, isInit) {
                if (!isInit) {
                    this.props.Vm.ResourceInfoList.push(resourceInfo);
                }
                var _op = {
                    ResourceInfo: resourceInfo,
                    UploadObj: this
                };
                if (resourceInfo.IsImage) {
                    var _item = new imageShowItem.ui.ImageShowItemVm();
                    _item.IsMulti = false;
                    _item.ResourceInfo = resourceInfo;
                    _item.UploadObj = this.props.Vm;
                    this.props.Vm.ShowItemList.push(_item);
                }
                else {
                    var _fItem = new fileShowItem.ui.FileShowItemVm();
                    _fItem.ResourceInfo = resourceInfo;
                    _fItem.UploadObj = this.props.Vm;
                    this.props.Vm.ShowItemList.push(_fItem);
                }
            };
            return MultiFileUploadReact;
        }(baseFileUpload.ui.BaseFileUploadReact));
        ui.MultiFileUploadReact = MultiFileUploadReact;
        var MultiFileUploadProps = (function (_super) {
            __extends(MultiFileUploadProps, _super);
            function MultiFileUploadProps() {
                _super.apply(this, arguments);
            }
            return MultiFileUploadProps;
        }(baseFileUpload.ui.BaseFileUploadProps));
        ui.MultiFileUploadProps = MultiFileUploadProps;
        var MultiFileUploadStates = (function (_super) {
            __extends(MultiFileUploadStates, _super);
            function MultiFileUploadStates() {
                _super.apply(this, arguments);
            }
            return MultiFileUploadStates;
        }(baseFileUpload.ui.BaseFileUploadStates));
        ui.MultiFileUploadStates = MultiFileUploadStates;
        var MultiFileUploadVm = (function (_super) {
            __extends(MultiFileUploadVm, _super);
            function MultiFileUploadVm() {
                _super.apply(this, arguments);
                this.ReactType = MultiFileUploadReact;
                this.pRegName = "多文件上传";
                this.IsMulit = false;
                this.Multi = true;
            }
            MultiFileUploadVm.Test = function () {
                var _bean = new MultiFileUploadVm();
                _bean.StorageName = "CoreTestFileStorage";
                _bean.UploadName = "CoreUserlogo";
                return _bean;
            };
            return MultiFileUploadVm;
        }(baseFileUpload.ui.BaseFileUploadVm));
        ui.MultiFileUploadVm = MultiFileUploadVm;
        iocFile.Core.Ioc.Current().RegisterType("MultiFileUploadVm", BaseColVm, MultiFileUploadVm);
    })(ui = exports.ui || (exports.ui = {}));
});
