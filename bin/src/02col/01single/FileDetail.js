var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../00core/baseCol", "./../../01core/Ioc", "./../../01core/Util", "./../04upload/FileShowItem", "./../04upload/ImageShowItem", "react"], function (require, exports, basecolFile, iocFile, utilFile, fileShowItem, imageShowItem, React) {
    "use strict";
    var BaseColReact = basecolFile.Core.BaseColReact;
    var BaseColVm = basecolFile.Core.BaseColVm;
    var BaseColProps = basecolFile.Core.BaseColProps;
    var BaseColStates = basecolFile.Core.BaseColStates;
    var BaseColAction = basecolFile.Core.BaseColAction;
    var ui;
    (function (ui) {
        var FileDetailAction = (function (_super) {
            __extends(FileDetailAction, _super);
            function FileDetailAction() {
                _super.apply(this, arguments);
            }
            return FileDetailAction;
        }(BaseColAction));
        ui.FileDetailAction = FileDetailAction;
        var FileDetailReact = (function (_super) {
            __extends(FileDetailReact, _super);
            function FileDetailReact() {
                _super.apply(this, arguments);
            }
            FileDetailReact.prototype.pComponentDidUpdate = function (prevProps, prevState, prevContext) {
                var _this = this;
                _super.prototype.pComponentDidUpdate.call(this, prevProps, prevState, prevContext);
                var _valStr = this.props.Vm.reactDataValueGet();
                if (_valStr) {
                    var _date = $.parseJSON(_valStr);
                    if (_date) {
                        this.props.Vm.CoverIndex = _date.CoverIndex;
                        this.props.Vm.ResourceInfoList = _date.ResourceInfoList;
                    }
                }
                this.props.Vm.ShowItemList = new Array();
                this.props.Vm.ResourceInfoList.map(function (item, i) {
                    //var _item = new fileShowItem.ui.FileShowItemVm();
                    //_item.ResourceInfo = this.props.Vm.ResourceInfoList[i];
                    //_item.UploadObj = this.props.Vm;
                    //this.props.Vm.ShowItemList.push(_item);
                    if (item["IsImage"]) {
                        var _item = new imageShowItem.ui.ImageShowItemVm();
                        _item.ResourceInfo = item;
                        _item.UploadObj = _this;
                        _this.props.Vm.ShowItemList.push(_item);
                    }
                    else {
                        var _fItem = new fileShowItem.ui.FileShowItemVm();
                        _fItem.ResourceInfo = item;
                        _fItem.UploadObj = _this;
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
            };
            FileDetailReact.prototype.pSender = function () {
                //return React.DOM.div({ ref: "fileDetail", className: "acsFilePanel clearfix " },
                //    this.props.Vm.ShowItemList == null ? null :
                //        this.props.Vm.ShowItemList.map((item, i) => {
                //            item.itemIndex = i;
                //            item.IsDetail = true;
                //            return item.intoDom()
                //        }));
                return React.createElement("div", {ref: "fileDetail", className: "acsFilePanel clearfix"}, this.props.Vm.ShowItemList.map(function (item, i) {
                    item.itemIndex = i;
                    item.IsDetail = true;
                    return item.intoDom();
                }));
            };
            return FileDetailReact;
        }(BaseColReact));
        ui.FileDetailReact = FileDetailReact;
        var FileDetailProps = (function (_super) {
            __extends(FileDetailProps, _super);
            function FileDetailProps() {
                _super.apply(this, arguments);
            }
            return FileDetailProps;
        }(BaseColProps));
        ui.FileDetailProps = FileDetailProps;
        var FileDetailStates = (function (_super) {
            __extends(FileDetailStates, _super);
            function FileDetailStates() {
                _super.apply(this, arguments);
            }
            return FileDetailStates;
        }(BaseColStates));
        ui.FileDetailStates = FileDetailStates;
        var FileDetailVm = (function (_super) {
            __extends(FileDetailVm, _super);
            function FileDetailVm() {
                _super.apply(this, arguments);
                this.ReactType = FileDetailReact;
                this.pRegName = "文件显示";
                this.ResourceInfoList = [];
                this.CoverIndex = 0;
                this.ShowItemList = new Array();
            }
            FileDetailVm.prototype.dataValueSet = function (val) {
                var _this = this;
                if (utilFile.Core.Util.isString(val) && val != "") {
                    var _obj = JSON.parse(val);
                    this.ResourceInfoList = _obj.ResourceInfoList;
                    this.CoverIndex = _obj.CoverIndex;
                }
                this.ShowItemList = new Array();
                this.ResourceInfoList.map(function (item, i) {
                    //var _item = new   fileShowItemFile.ui.FileShowItemVm();
                    //_item.ResourceInfo = this.ResourceInfoList[i];
                    //_item.UploadObj = this;
                    //this.ShowItemList.push(_item);
                    if (item["IsImage"]) {
                        var _item = new imageShowItem.ui.ImageShowItemVm();
                        _item.ResourceInfo = item;
                        _item.UploadObj = _this;
                        _this.ShowItemList.push(_item);
                    }
                    else {
                        var _fItem = new fileShowItem.ui.FileShowItemVm();
                        _fItem.ResourceInfo = item;
                        _fItem.UploadObj = _this;
                        _this.ShowItemList.push(_fItem);
                    }
                });
                _super.prototype.dataValueSet.call(this, val);
            };
            FileDetailVm.Test = function () {
                var _bean = new FileDetailVm();
                var coverindex = 0;
                var resourceinfo = [{ "ExtendList": { "38-38": "38-38", "60-60": "60-60", "200-360": "200-360" }, "DocumentViewId": "20150914105248500A4AF7D5A4588446FDB4AFF20EE1711D75.jpg", "CanDocumentView": false, "IsDocument": false, "IsCover": false, "InfoType": "Config", "Url": null, "SiteInUrl": null, "StorageConfigName": "CoreUserlogo", "FileId": "20150914105248500A4AF7D5A4588446FDB4AFF20EE1711D75", "PathID": 20150914, "ExtName": ".jpg", "FileNameTitle": "1_zbzengbing", "FileSizeK": 31, "HttpPath": "http://192.168.66.11:99/Core/User/logo/20150914105248500A4AF7D5A4588446FDB4AFF20EE1711D75.jpg", "PhysicalPath": "\\\\192.168.66.11\\zyk\\WebFile\\Core\\User\\logo\\20150914105248500A4AF7D5A4588446FDB4AFF20EE1711D75.jpg" }];
                var _valstr = JSON.stringify({
                    CoverIndex: coverindex,
                    ResourceInfoList: resourceinfo
                });
                _bean.initDataValue(_valstr);
                return _bean;
            };
            return FileDetailVm;
        }(BaseColVm));
        ui.FileDetailVm = FileDetailVm;
        iocFile.Core.Ioc.Current().RegisterType("FileDetailVm", BaseColVm, FileDetailVm);
    })(ui = exports.ui || (exports.ui = {}));
});
