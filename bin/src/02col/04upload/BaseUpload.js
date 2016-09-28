var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../00core/baseCol", "./../../01core/Util", "react", "react-dom"], function (require, exports, basecolFile, utilFile, React, ReactDOM) {
    "use strict";
    var BaseColReact = basecolFile.Core.BaseColReact;
    var BaseColVm = basecolFile.Core.BaseColVm;
    var BaseColProps = basecolFile.Core.BaseColProps;
    var BaseColStates = basecolFile.Core.BaseColStates;
    var BaseColAction = basecolFile.Core.BaseColAction;
    var ui;
    (function (ui) {
        //alert("BaseUploadReact");
        var BaseUploadAction = (function (_super) {
            __extends(BaseUploadAction, _super);
            function BaseUploadAction() {
                _super.apply(this, arguments);
            }
            return BaseUploadAction;
        }(BaseColAction));
        ui.BaseUploadAction = BaseUploadAction;
        var BaseUploadReact = (function (_super) {
            __extends(BaseUploadReact, _super);
            function BaseUploadReact() {
                _super.apply(this, arguments);
                this.pCurrentNumber = 0;
            }
            BaseUploadReact.prototype.pGetAreaId = function () {
                return this.pCurrentNumber.toString();
            };
            BaseUploadReact.prototype.pSetAreaId = function () {
                this.pCurrentNumber = BaseUploadReact.pNumber = BaseUploadReact.pNumber + 1;
                return this.pCurrentNumber.toString();
                ;
            };
            BaseUploadReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {ref: "ACT-FILE-UPLOAD", id: "updload" + this.pGetAreaId()}, React.createElement("div", {ref: "acs-uploadBox", className: "YSc-upload-box"}, React.createElement("ul", null, React.createElement("li", {ref: "ACT-LEFT"}, React.createElement("form", {id: "formUpload"}, React.createElement("label", {className: " Hc-upload " + (this.props.Vm.isAbleEdit ? "" : " hide ")}, React.createElement("input", {ref: "fileUpload", type: "file", accept: this.props.Vm.IsImageUpload ? "image/*" : "", name: "action", style: { display: "none" }, onChange: function () { _this.props.Vm.IsUpload = true; return false; }}), this.props.Vm.isLoadIcon ? (React.createElement("i", {className: this.props.Vm.LoadIconName})) : "", "   ", this.props.Vm.LabelText))), React.createElement("li", {ref: "ACT-RIGHT"}))), React.createElement("div", {ref: "ACT-UPLOAD-RESULT", className: "Hc-upload-result clearfix " + (this.props.Vm.IsImageUpload ? "acsImagesPanel" : "acsFilePanel")}, this.props.Vm.ShowItemList == null ? null :
                    this.props.Vm.ShowItemList.map(function (item, i) {
                        if (i == _this.props.Vm.CoverIndex) {
                            item.IsCover = true;
                        }
                        else {
                            item.IsCover = false;
                        }
                        item.itemIndex = i;
                        return item.intoDom();
                    })), this.props.Vm.PreviewShowItem == null ? null : this.props.Vm.PreviewShowItem.intoDom());
            };
            BaseUploadReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
                if (!this.props.Vm.Uploader) {
                    //this.props.Vm.Uploader = '/core/Uploader/UploadFile?fileStorageName=' + this.props.Vm.StorageName;
                    this.props.Vm.Uploader = '/core/Uploader/UploadFileAndImage?fileStorageName=' + this.props.Vm.StorageName + '&uploadName=' + this.props.Vm.UploadName;
                }
                //var _valStr = this.fDataValue_Get();
                //alert(_valStr);
                var _valStr = this.props.Vm.reactDataValueGet();
                //alert(_valStr);
                //var _valStr = JSON.parse(_s);
                if (utilFile.Core.Util.isString(_valStr) && _valStr != "") {
                    var _valObj = JSON.parse(_valStr);
                    if (!_valObj) {
                        this.props.Vm.ResourceInfoList = [];
                    }
                    else {
                        if (_valObj.ResourceInfoList) {
                            this.props.Vm.ResourceInfoList = _valObj.ResourceInfoList;
                            this.props.Vm.CoverIndex = _valObj.CoverIndex;
                        }
                    }
                }
                //else {
                //    if (_valStr && _valStr.ResourceInfoList) {
                //        this.props.Vm.ResourceInfoList = _valStr.ResourceInfoList;
                //        this.props.Vm.CoverIndex = _valStr.CoverIndex;
                //    }
                //}
                this.fInitNoSupportFlash();
                if (this.props.Vm.ResourceInfoList && this.props.Vm.ResourceInfoList.length > 0) {
                    for (var i = 0; i < this.props.Vm.ResourceInfoList.length; i++) {
                        this.pInitUploadFile(this.props.Vm.ResourceInfoList[i]);
                    }
                }
            };
            BaseUploadReact.prototype.fInitNoSupportFlash = function () {
                var _this = this;
                var __this = this;
                var _$JObjNoSupportFlash_File = __this.pGetUploadDom("fileUpload");
                if (this.props.Vm.Multi) {
                    _$JObjNoSupportFlash_File.attr("multiple", "multiple");
                }
                else {
                    _$JObjNoSupportFlash_File.removeAttr("multiple");
                }
                utilFile.Core.Util.AsyncJs(["/AtawStatic/lib/03Extend/html5upload/jquery.html5_upload.js"], function () {
                    _$JObjNoSupportFlash_File.html5_upload({
                        sendBoundary: window["FormData"] || ($["browser"] && $["browser"]["mozilla"]),
                        url: _this.props.Vm.Uploader,
                        onStartOne: function (event, file, num, total) {
                            var fileTypeExt = file.name || file.fileName;
                            var fileSize = file.size || file.fileSize;
                            var isExtValid = false;
                            if (fileTypeExt) {
                                if (_this.props.Vm.FileExtension == null) {
                                    isExtValid = true;
                                }
                                else {
                                    fileTypeExt = fileTypeExt.substring(fileTypeExt.lastIndexOf('.')).toLowerCase();
                                    var fileTypeExts = _this.props.Vm.FileExtension.split(';');
                                    if (fileTypeExts.length === 0)
                                        isExtValid = true;
                                    else {
                                        for (var i = 0; i < fileTypeExts.length; i++) {
                                            if (fileTypeExts[i].substring(fileTypeExts[i].lastIndexOf('.')).toLowerCase() === fileTypeExt) {
                                                isExtValid = true;
                                                break;
                                            }
                                        }
                                    }
                                }
                            }
                            if (!isExtValid) {
                                alert('请选择' + _this.props.Vm.FileExtension + '格式的文件');
                                return false;
                            }
                            if (_this.props.Vm.FileSize < fileSize) {
                                alert('请选择小于' + _this.props.Vm.FileSize + '大小的文件');
                                return false;
                            }
                            return true;
                        },
                        onFinishOne: _this.pSuccessFun()
                    });
                });
            };
            BaseUploadReact.prototype.pSuccessFun = function () {
            };
            //重写获取值方法
            BaseUploadReact.prototype.fDataValue_Get = function () {
                var __this = this;
                var _$dvList = __this.pGetUploadDom("ACT-UPLOAD-RESULT").find(".ACT_FILE_ITEM");
                var _coverIndex = __this.props.Vm.CoverIndex ? __this.props.Vm.CoverIndex : 0;
                __this.props.Vm.ResourceInfoList = [];
                for (var i = 0; i < _$dvList.length; i++) {
                    var _Obj = _$dvList.eq(i).AtawControl();
                    __this.props.Vm.ResourceInfoList.push(_Obj.ResourceInfo);
                    if (_Obj.IsCover) {
                        _coverIndex = i;
                    }
                }
                var _resStr = JSON.stringify({
                    CoverIndex: _coverIndex,
                    ResourceInfoList: __this.props.Vm.ResourceInfoList
                });
                var _res = JSON.parse(_resStr);
                return _res;
            };
            BaseUploadReact.prototype.pGetUploadDom = function (ref) {
                var _reactObj = this.refs[ref];
                var _dom = ReactDOM.findDOMNode(_reactObj);
                var _$dom = $(_dom);
                return _$dom;
            };
            BaseUploadReact.prototype.pInitUploadFile = function (resObj) {
            };
            BaseUploadReact.prototype.pComponentWillUnmount = function () {
                var _this = this;
                _super.prototype.pComponentWillUnmount.call(this);
                utilFile.Core.Util.AsyncJs(["/AtawStatic/lib/03Extend/html5upload/jquery.html5_upload.js"], function () {
                    _this.pGetUploadDom("fileUpload").triggerHandler("html5_upload.destroy");
                });
            };
            BaseUploadReact.pNumber = 0;
            return BaseUploadReact;
        }(BaseColReact));
        ui.BaseUploadReact = BaseUploadReact;
        var BaseUploadProps = (function (_super) {
            __extends(BaseUploadProps, _super);
            function BaseUploadProps() {
                _super.apply(this, arguments);
            }
            return BaseUploadProps;
        }(BaseColProps));
        ui.BaseUploadProps = BaseUploadProps;
        var BaseUploadStates = (function (_super) {
            __extends(BaseUploadStates, _super);
            function BaseUploadStates() {
                _super.apply(this, arguments);
            }
            return BaseUploadStates;
        }(BaseColStates));
        ui.BaseUploadStates = BaseUploadStates;
        var BaseUploadVm = (function (_super) {
            __extends(BaseUploadVm, _super);
            function BaseUploadVm() {
                _super.apply(this, arguments);
                this.ReactType = BaseUploadReact;
                this.IsImageUpload = true;
                //public UploadFileType = "image/*";
                this.Multi = true;
                this.AfterUpLoadFun = null;
                this.AfterDeleteFun = null;
                this.ResourceInfoList = [];
                this.CoverIndex = 0;
                this.FileExtension = null;
                this.FileSize = 104857600;
                this.StorageName = null;
                this.UploadName = null;
                this.Uploader = null;
                this.IsSimple = false;
                this.HasDocumentCenter = false;
                this.IsDivInit = false;
                this.LabelText = "请选择";
                this.MinUploadCount = null;
                this.isLoadIcon = false;
                //public ShowItemList: Array<ImageShowItemVm> = new Array<ImageShowItemVm>();
                this.ShowItemList = null;
                this.IsUpload = false; //是否上传更新
                this.IsInitialValue = false; //是否初始值
                this.$JObj_Show = null;
                //是否能修改
                this.isAbleEdit = true;
                this.PreviewShowItem = null;
            }
            return BaseUploadVm;
        }(BaseColVm));
        ui.BaseUploadVm = BaseUploadVm;
    })(ui = exports.ui || (exports.ui = {}));
});
