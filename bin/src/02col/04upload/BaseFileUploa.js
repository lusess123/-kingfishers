var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./BaseUpload", "./FileShowItem", "./ImageShowItem", "./../../01core/Url"], function (require, exports, BaseUpload, fileShowItem, imageShowItem, urlFile) {
    "use strict";
    var ui;
    (function (ui) {
        //alert("BaseFileUploadReact");
        var BaseFileUploadAction = (function (_super) {
            __extends(BaseFileUploadAction, _super);
            function BaseFileUploadAction() {
                _super.apply(this, arguments);
            }
            return BaseFileUploadAction;
        }(BaseUpload.ui.BaseUploadAction));
        ui.BaseFileUploadAction = BaseFileUploadAction;
        var BaseFileUploadReact = (function (_super) {
            __extends(BaseFileUploadReact, _super);
            function BaseFileUploadReact() {
                _super.apply(this, arguments);
            }
            BaseFileUploadReact.prototype.pSender = function () {
                return _super.prototype.pSender.call(this);
            };
            BaseFileUploadReact.prototype.pComponentDidUpdate = function (prevProps, prevState, prevContext) {
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
                                if (item["IsImage"]) {
                                    var _item = new imageShowItem.ui.ImageShowItemVm();
                                    _item.IsMulti = false;
                                    _item.ResourceInfo = item;
                                    _item.UploadObj = _this.props.Vm;
                                    _this.props.Vm.ShowItemList.push(_item);
                                }
                                else {
                                    var _fItem = new fileShowItem.ui.FileShowItemVm();
                                    _fItem.ResourceInfo = item;
                                    _fItem.UploadObj = _this.props.Vm;
                                    _this.props.Vm.ShowItemList.push(_fItem);
                                }
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
            BaseFileUploadReact.prototype.pSuccessFun = function () {
                var _this = this;
                _super.prototype.pSuccessFun.call(this);
                return function (fileObj, data, response) {
                    var _res = jQuery.parseJSON(data);
                    urlFile.Core.ActionCommond[_res.ActionType](_res, function (_ree) {
                        _this.pFileDisplayView(_ree);
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
            };
            BaseFileUploadReact.prototype.pFileDisplayView = function (resourceInfo, isInit) {
                this.props.Vm.ResourceInfoList = [];
                this.props.Vm.ResourceInfoList.push(resourceInfo);
                this.props.Vm.ShowItemList = new Array();
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
            BaseFileUploadReact.prototype.pInitUploadFile = function (resObj) {
                _super.prototype.pInitUploadFile.call(this, resObj);
                this.pFileDisplayView(resObj, true);
            };
            return BaseFileUploadReact;
        }(BaseUpload.ui.BaseUploadReact));
        ui.BaseFileUploadReact = BaseFileUploadReact;
        var BaseFileUploadProps = (function (_super) {
            __extends(BaseFileUploadProps, _super);
            function BaseFileUploadProps() {
                _super.apply(this, arguments);
            }
            return BaseFileUploadProps;
        }(BaseUpload.ui.BaseUploadProps));
        ui.BaseFileUploadProps = BaseFileUploadProps;
        var BaseFileUploadStates = (function (_super) {
            __extends(BaseFileUploadStates, _super);
            function BaseFileUploadStates() {
                _super.apply(this, arguments);
            }
            return BaseFileUploadStates;
        }(BaseUpload.ui.BaseUploadStates));
        ui.BaseFileUploadStates = BaseFileUploadStates;
        var BaseFileUploadVm = (function (_super) {
            __extends(BaseFileUploadVm, _super);
            function BaseFileUploadVm() {
                _super.apply(this, arguments);
                this.ReactType = BaseFileUploadReact;
                this.pRegName = "单文件上传";
                this.IsImageUpload = false;
                this.IsMulit = true;
                this.Multi = false;
                this.LabelText = "选择文件";
                this.ShowItemList = new Array();
            }
            BaseFileUploadVm.Test = function () {
                var _bean = new BaseFileUploadVm();
                _bean.StorageName = "CoreTestFileStorage";
                _bean.UploadName = "CoreUserlogo";
                return _bean;
            };
            return BaseFileUploadVm;
        }(BaseUpload.ui.BaseUploadVm));
        ui.BaseFileUploadVm = BaseFileUploadVm;
    })(ui = exports.ui || (exports.ui = {}));
});
