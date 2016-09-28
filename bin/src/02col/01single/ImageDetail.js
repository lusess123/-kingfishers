var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../00core/baseCol", "./../../01core/Ioc", "./../../01core/Util", "./../../02col/04upload/ImageShowItem", "react"], function (require, exports, basecolFile, iocFile, utilFile, showImageitem, React) {
    "use strict";
    var BaseColReact = basecolFile.Core.BaseColReact;
    var BaseColVm = basecolFile.Core.BaseColVm;
    var BaseColProps = basecolFile.Core.BaseColProps;
    var BaseColStates = basecolFile.Core.BaseColStates;
    var BaseColAction = basecolFile.Core.BaseColAction;
    var ui;
    (function (ui) {
        var ImageDetailAction = (function (_super) {
            __extends(ImageDetailAction, _super);
            function ImageDetailAction() {
                _super.apply(this, arguments);
            }
            return ImageDetailAction;
        }(BaseColAction));
        ui.ImageDetailAction = ImageDetailAction;
        var ImageDetailReact = (function (_super) {
            __extends(ImageDetailReact, _super);
            function ImageDetailReact() {
                _super.apply(this, arguments);
            }
            ImageDetailReact.prototype.pComponentDidUpdate = function (prevProps, prevState, prevContext) {
                _super.prototype.pComponentDidUpdate.call(this, prevProps, prevState, prevContext);
                //var _valStr = this.props.Vm.reactDataValueGet();
                //var _date = JSON.parse(_valStr);
                //this.props.Vm.CoverIndex = _date.CoverIndex;
                //this.props.Vm.ResourceInfoList = _date.ResourceInfoList;
                //this.props.Vm.ShowItemList = new Array<showImageitem.ui.ImageShowItemVm>();
                //this.props.Vm.ResourceInfoList.map((item, i) => {
                //    var _item = new showImageitem.ui.ImageShowItemVm();
                //    _item.ResourceInfo = this.props.Vm.ResourceInfoList[i];
                //    _item.UploadObj = this.props.Vm;
                //    this.props.Vm.ShowItemList.push(_item);
                //})
                //if (this.props.Vm.IsChange) {
                //    this.props.Vm.IsChange = false;
                //} else {
                //    this.props.Vm.ShowItemList.forEach((x) => {
                //        x.IsChange = true;
                //    });
                //    this.props.Vm.IsChange = true;
                //    this.forceUpdate();
                //}
            };
            ImageDetailReact.prototype.pSender = function () {
                var _this = this;
                var _valStr = this.props.Vm.reactDataValueGet();
                if (_valStr == "") {
                    return React.DOM.div({ ref: "imageDetail", className: "Hm-images clearfix " }, "(空)");
                }
                var _date = JSON.parse(_valStr);
                this.props.Vm.CoverIndex = _date.CoverIndex;
                this.props.Vm.ResourceInfoList = _date.ResourceInfoList;
                this.props.Vm.ShowItemList = new Array();
                this.props.Vm.ResourceInfoList.map(function (item, i) {
                    var _item = new showImageitem.ui.ImageShowItemVm();
                    _item.ResourceInfo = _this.props.Vm.ResourceInfoList[i];
                    _item.UploadObj = _this.props.Vm;
                    _this.props.Vm.ShowItemList.push(_item);
                });
                //return React.DOM.div({ ref: "imageDetail", className: "acsImagesPanel clearfix "},
                //    this.props.Vm.ShowItemList == null ? null :
                //        this.props.Vm.ShowItemList.map((item, i) => {
                //            if (i == this.props.Vm.CoverIndex) {
                //                item.IsCover = true;
                //            } else {
                //                item.IsCover = false;
                //            }
                //            item.itemIndex = i;
                //            item.IsDetail = true;
                //            return item.intoDom()
                //        }));
                return React.createElement("div", {ref: "imageDetail", className: "Hm-images clearfix "}, this.props.Vm.ShowItemList == null ? null :
                    this.props.Vm.ShowItemList.map(function (item, i) {
                        if (i == _this.props.Vm.CoverIndex) {
                            item.IsCover = true;
                        }
                        else {
                            item.IsCover = false;
                        }
                        item.itemIndex = i;
                        item.IsDetail = true;
                        return item.intoDom();
                    }));
            };
            return ImageDetailReact;
        }(BaseColReact));
        ui.ImageDetailReact = ImageDetailReact;
        var ImageDetailProps = (function (_super) {
            __extends(ImageDetailProps, _super);
            function ImageDetailProps() {
                _super.apply(this, arguments);
            }
            return ImageDetailProps;
        }(BaseColProps));
        ui.ImageDetailProps = ImageDetailProps;
        var ImageDetailStates = (function (_super) {
            __extends(ImageDetailStates, _super);
            function ImageDetailStates() {
                _super.apply(this, arguments);
            }
            return ImageDetailStates;
        }(BaseColStates));
        ui.ImageDetailStates = ImageDetailStates;
        var ImageDetailVm = (function (_super) {
            __extends(ImageDetailVm, _super);
            function ImageDetailVm() {
                _super.apply(this, arguments);
                this.ReactType = ImageDetailReact;
                this.pRegName = "图片显示";
                this.ResourceInfoList = [];
                this.CoverIndex = 0;
                this.ShowItemList = null;
            }
            ImageDetailVm.prototype.dataValueSet = function (val) {
                var _this = this;
                if (utilFile.Core.Util.isString(val) && val != "") {
                    var _obj = JSON.parse(val);
                    this.ResourceInfoList = _obj.ResourceInfoList;
                    this.CoverIndex = _obj.CoverIndex;
                }
                this.ShowItemList = new Array();
                this.ResourceInfoList.map(function (item, i) {
                    var _item = new showImageitem.ui.ImageShowItemVm();
                    _item.ResourceInfo = _this.ResourceInfoList[i];
                    _item.UploadObj = _this;
                    _this.ShowItemList.push(_item);
                });
                _super.prototype.dataValueSet.call(this, val);
            };
            ImageDetailVm.Test = function () {
                var _bean = new ImageDetailVm();
                var coverindex = 0;
                var resourceinfo = [{ "ExtendList": { "38-38": "38-38", "60-60": "60-60", "200-360": "200-360" }, "DocumentViewId": "20150914105248500A4AF7D5A4588446FDB4AFF20EE1711D75.jpg", "CanDocumentView": false, "IsDocument": false, "IsCover": false, "InfoType": "Config", "Url": null, "SiteInUrl": null, "StorageConfigName": "CoreUserlogo", "FileId": "20150914105248500A4AF7D5A4588446FDB4AFF20EE1711D75", "PathID": 20150914, "ExtName": ".jpg", "FileNameTitle": "1_zbzengbing", "FileSizeK": 31, "HttpPath": "http://192.168.66.11:99/Core/User/logo/20150914105248500A4AF7D5A4588446FDB4AFF20EE1711D75.jpg", "PhysicalPath": "\\\\192.168.66.11\\zyk\\WebFile\\Core\\User\\logo\\20150914105248500A4AF7D5A4588446FDB4AFF20EE1711D75.jpg" }];
                var _valstr = JSON.stringify({
                    CoverIndex: coverindex,
                    ResourceInfoList: resourceinfo
                });
                _bean.initDataValue(_valstr);
                return _bean;
            };
            return ImageDetailVm;
        }(BaseColVm));
        ui.ImageDetailVm = ImageDetailVm;
        iocFile.Core.Ioc.Current().RegisterType("ImageDetailVm", BaseColVm, ImageDetailVm);
    })(ui = exports.ui || (exports.ui = {}));
});
