var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./BaseUpload", "./ImageShowItem", "./../../01core/Url", "./ImagePreviewShow"], function (require, exports, BaseUpload, imageShowItem, urlFile, imagePerviewShow) {
    "use strict";
    var ui;
    (function (ui) {
        //alert("BaseImageUploadReact");
        var BaseImageUploadAction = (function (_super) {
            __extends(BaseImageUploadAction, _super);
            function BaseImageUploadAction() {
                _super.apply(this, arguments);
            }
            return BaseImageUploadAction;
        }(BaseUpload.ui.BaseUploadAction));
        ui.BaseImageUploadAction = BaseImageUploadAction;
        //export class SingleImageUploadReact extends BaseUploadReact<SingleImageUploadProps, SingleImageUploadStates, SingleImageUploadAction> implements Core.IReact {
        var BaseImageUploadReact = (function (_super) {
            __extends(BaseImageUploadReact, _super);
            function BaseImageUploadReact() {
                _super.apply(this, arguments);
            }
            BaseImageUploadReact.prototype.pSender = function () {
                return _super.prototype.pSender.call(this);
            };
            BaseImageUploadReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
                this.props.Vm.Uploader = '/core/Uploader/UploadFileAndImage?fileStorageName=' + this.props.Vm.StorageName + '&uploadName=' + this.props.Vm.UploadName +
                    '&width=' + this.props.Vm.ImageSizeWidth + '&height=' + this.props.Vm.ImageSizeHeight + '&isCut=' + this.props.Vm.IsCut;
            };
            //protected pComponentDidUpdate(prevProps: SingleImageUploadProps, prevState: SingleImageUploadStates, prevContext: any) {
            BaseImageUploadReact.prototype.pComponentDidUpdate = function (prevProps, prevState, prevContext) {
                var _this = this;
                _super.prototype.pComponentDidUpdate.call(this, prevProps, prevState, prevContext);
                if (this.props.Vm.IsInitialValue) {
                    this.props.Vm.IsInitialValue = false;
                }
                else {
                    if (this.props.Vm.IsUpload) {
                        this.props.Vm.IsUpload = false;
                    }
                    else {
                        var _valStr = this.props.Vm.reactDataValueGet();
                        if (_valStr) {
                            var _date = $.parseJSON(_valStr);
                            if (_date) {
                                this.props.Vm.CoverIndex = _date.CoverIndex;
                                this.props.Vm.ResourceInfoList = _date.ResourceInfoList;
                            }
                            this.props.Vm.ShowItemList = new Array();
                            this.props.Vm.ResourceInfoList.map(function (item, i) {
                                var _item = new imageShowItem.ui.ImageShowItemVm();
                                _item.ResourceInfo = _this.props.Vm.ResourceInfoList[i];
                                _item.UploadObj = _this.props.Vm;
                                _item.IsMulti = _this.props.Vm.Multi;
                                if (i == _this.props.Vm.CoverIndex) {
                                    _item.IsCover = true;
                                }
                                else {
                                    _item.IsCover = false;
                                }
                                _this.props.Vm.ShowItemList.push(_item);
                            });
                            if (this.props.Vm.IsChange) {
                                this.props.Vm.IsChange = false;
                            }
                            else {
                                this.props.Vm.ShowItemList.forEach(function (x) {
                                    x.IsChange = true;
                                });
                                this.props.Vm.IsChange = true;
                                this.forceUpdate();
                            }
                        }
                    }
                }
            };
            BaseImageUploadReact.prototype.pSuccessFun = function () {
                var _this = this;
                _super.prototype.pSuccessFun.call(this);
                this.props.Vm.Width = this.props.Vm.ImageSizeWidth;
                this.props.Vm.Height = this.props.Vm.ImageSizeHeight;
                if (this.props.Vm.IsCut) {
                    return this.fSelectCuteFun();
                }
                else {
                    return function (fileObj, data, response) {
                        var _res = $.parseJSON(data);
                        urlFile.Core.ActionCommond[_res.ActionType](_res, function (_ree) {
                            _this.props.Vm.pImagePreview(_ree);
                            var _resStr = JSON.stringify({
                                CoverIndex: _this.props.Vm.CoverIndex,
                                ResourceInfoList: _this.props.Vm.ResourceInfoList
                            });
                            if (!_this.props.Vm.reactDataValueSet(_resStr)) {
                                _this.props.Vm.ShowItemList.forEach(function (x) {
                                    x.IsChange = true;
                                });
                                _this.forceUpdate();
                            }
                        });
                    };
                }
            };
            BaseImageUploadReact.prototype.pInitUploadFile = function (resObj) {
                _super.prototype.pInitUploadFile.call(this, resObj);
                this.props.Vm.pImagePreview(resObj, true);
            };
            BaseImageUploadReact.prototype.fSelectCuteFun = function () {
                var _this = this;
                return function (fileObj, data, response) {
                    var ress = jQuery.parseJSON(data); //转换成json格式
                    urlFile.Core.ActionCommond[ress.ActionType](ress, function (_res) {
                        _this.props.Vm.ResourceInfoList = [];
                        _this.props.Vm.ResourceInfoList.push(_res);
                        var _imagePreview = new imagePerviewShow.ui.ImagePreviewShowVm();
                        _imagePreview.ImgUrl = _res.HttpPath; //文件路径
                        _imagePreview.rImgWidth = _this.props.Vm.Width;
                        _imagePreview.rImgHeight = _this.props.Vm.Height;
                        _imagePreview.Location = { h: _this.props.Vm.Height, w: _this.props.Vm.Width, x: 0, y: 0 };
                        _imagePreview.UploadObj = _this.props.Vm;
                        _imagePreview.IsModalShow = true;
                        _this.props.Vm.PreviewShowItem = _imagePreview;
                        _this.forceUpdate();
                    });
                };
            };
            return BaseImageUploadReact;
        }(BaseUpload.ui.BaseUploadReact));
        ui.BaseImageUploadReact = BaseImageUploadReact;
        //export class SingleImageUploadProps extends BaseUploadProps<SingleImageUploadVm>{
        var BaseImageUploadProps = (function (_super) {
            __extends(BaseImageUploadProps, _super);
            function BaseImageUploadProps() {
                _super.apply(this, arguments);
            }
            return BaseImageUploadProps;
        }(BaseUpload.ui.BaseUploadProps));
        ui.BaseImageUploadProps = BaseImageUploadProps;
        var BaseImageUploadStates = (function (_super) {
            __extends(BaseImageUploadStates, _super);
            function BaseImageUploadStates() {
                _super.apply(this, arguments);
            }
            return BaseImageUploadStates;
        }(BaseUpload.ui.BaseUploadStates));
        ui.BaseImageUploadStates = BaseImageUploadStates;
        var BaseImageUploadVm = (function (_super) {
            __extends(BaseImageUploadVm, _super);
            function BaseImageUploadVm() {
                _super.apply(this, arguments);
                this.ReactType = BaseImageUploadReact;
                this.pRegName = "单图片上传";
                this.Width = 100;
                this.Height = 100;
                this.IsCut = false;
                this.ImageSizeWidth = 100;
                this.ImageSizeHeight = 100;
                this.IsMulit = true;
                this.Multi = false;
                this.LabelText = "选择图片";
                this.ShowItemList = new Array();
                //是否能够编辑
                this.isAbleEdit = true;
            }
            BaseImageUploadVm.prototype.dataValueSet = function (val) {
                var _this = this;
                this.IsInitialValue = true;
                var ImageObject = JSON.parse(val);
                if (ImageObject) {
                    ImageObject.ResourceInfoList.forEach(function (a) {
                        _this.pImagePreview(a);
                    });
                }
                _super.prototype.dataValueSet.call(this, val);
            };
            BaseImageUploadVm.prototype.pImagePreview = function (resourceInfo, isInit) {
                this.ResourceInfoList = [];
                this.ResourceInfoList.push(resourceInfo);
                var _item = new imageShowItem.ui.ImageShowItemVm();
                _item.isAbleEdit = this.isAbleEdit;
                _item.ResourceInfo = resourceInfo;
                _item.UploadObj = this;
                _item.IsMulti = false;
                this.ShowItemList = new Array();
                this.ShowItemList.push(_item);
            };
            BaseImageUploadVm.Test = function () {
                var _bean = new BaseImageUploadVm();
                _bean.StorageName = "CoreUserlogo";
                _bean.UploadName = "CoreUserlogo";
                _bean.FileExtension = "*.jpeg;*.jpg;*.bmp;*.gif;*.png";
                //var coverindex:number = 0;
                //var resourceinfo:Array<Object> = [{ "ExtendList": { "38-38": "38-38", "60-60": "60-60", "200-360": "200-360" }, "DocumentViewId": "20150914105248500A4AF7D5A4588446FDB4AFF20EE1711D75.jpg", "CanDocumentView": false, "IsDocument": false, "IsCover": false, "InfoType": "Config", "Url": null, "SiteInUrl": null, "StorageConfigName": "CoreUserlogo", "FileId": "20150914105248500A4AF7D5A4588446FDB4AFF20EE1711D75", "PathID": 20150914, "ExtName": ".jpg", "FileNameTitle": "1_zbzengbing", "FileSizeK": 31, "HttpPath": "http://192.168.66.11:99/Core/User/logo/20150914105248500A4AF7D5A4588446FDB4AFF20EE1711D75.jpg", "PhysicalPath": "\\\\192.168.66.11\\zyk\\WebFile\\Core\\User\\logo\\20150914105248500A4AF7D5A4588446FDB4AFF20EE1711D75.jpg" }];
                //var _valstr = JSON.stringify({
                //    CoverIndex: coverindex,
                //    ResourceInfoList: resourceinfo
                //});
                //_bean.dataValueSet(_valstr);
                //_bean.IsCut = true;
                return _bean;
            };
            return BaseImageUploadVm;
        }(BaseUpload.ui.BaseUploadVm));
        ui.BaseImageUploadVm = BaseImageUploadVm;
    })(ui = exports.ui || (exports.ui = {}));
});
