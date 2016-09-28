import BaseUpload = require("./BaseUpload");
import imageShowItem = require("./ImageShowItem");
import domFile = require("./../../01core/0Dom"); import basecolFile = require("./../00core/baseCol"); import BaseColReact = basecolFile.Core.BaseColReact; import BaseColVm = basecolFile.Core.BaseColVm; import BaseColProps = basecolFile.Core.BaseColProps; import BaseColStates = basecolFile.Core.BaseColStates; import BaseColAction = basecolFile.Core.BaseColAction;
import urlFile = require("./../../01core/Url");
import imagePerviewShow = require("./ImagePreviewShow");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module ui {
    //alert("BaseImageUploadReact");
    export class BaseImageUploadAction extends BaseUpload.ui.BaseUploadAction {
    }

    //export class SingleImageUploadReact extends BaseUploadReact<SingleImageUploadProps, SingleImageUploadStates, SingleImageUploadAction> implements Core.IReact {
    export class BaseImageUploadReact<P extends BaseImageUploadProps<BaseImageUploadVm>, S extends BaseImageUploadStates, A extends BaseImageUploadAction> extends BaseUpload.ui.BaseUploadReact<P, S, A> implements domFile.Core.IReact {
        public pSender(): React.ReactElement<any> {
            return super.pSender();
        }

        protected pComponentDidMount(): void {
            super.pComponentDidMount();

            this.props.Vm.Uploader = '/core/Uploader/UploadFileAndImage?fileStorageName=' + this.props.Vm.StorageName + '&uploadName=' + this.props.Vm.UploadName +
                '&width=' + this.props.Vm.ImageSizeWidth + '&height=' + this.props.Vm.ImageSizeHeight + '&isCut=' + this.props.Vm.IsCut;

        }

        //protected pComponentDidUpdate(prevProps: SingleImageUploadProps, prevState: SingleImageUploadStates, prevContext: any) {
        protected pComponentDidUpdate(prevProps: P, prevState: S, prevContext: any) {
            super.pComponentDidUpdate(prevProps, prevState, prevContext);

            if (this.props.Vm.IsInitialValue) {
                this.props.Vm.IsInitialValue = false;
            } else {
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
                        this.props.Vm.ShowItemList = new Array<imageShowItem.ui.ImageShowItemVm>();

                        this.props.Vm.ResourceInfoList.map((item, i) => {
                            var _item = new imageShowItem.ui.ImageShowItemVm();
                            _item.ResourceInfo = this.props.Vm.ResourceInfoList[i];
                            _item.UploadObj = this.props.Vm;
                            _item.IsMulti = this.props.Vm.Multi;
                            if (i == this.props.Vm.CoverIndex) {
                                _item.IsCover = true;
                            } else {
                                _item.IsCover = false;
                            }
                            this.props.Vm.ShowItemList.push(_item);
                        })

                        if (this.props.Vm.IsChange) {
                            this.props.Vm.IsChange = false;
                        } else {
                            this.props.Vm.ShowItemList.forEach((x) => {
                                x.IsChange = true;
                            });
                            this.props.Vm.IsChange = true;
                            this.forceUpdate();
                        }
                    }
                }
            }
        }

        protected pSuccessFun() {
            super.pSuccessFun();

            this.props.Vm.Width = this.props.Vm.ImageSizeWidth;
            this.props.Vm.Height = this.props.Vm.ImageSizeHeight;

            if (this.props.Vm.IsCut) {
                return this.fSelectCuteFun();
            }
            else {
                return (fileObj, data, response) => {
                    var _res = $.parseJSON(data);
                    urlFile.Core.ActionCommond[_res.ActionType](_res, (_ree) => {

                        this.props.Vm.pImagePreview(_ree);

                        var _resStr = JSON.stringify({
                            CoverIndex: this.props.Vm.CoverIndex,
                            ResourceInfoList: this.props.Vm.ResourceInfoList
                        });

                        if (!this.props.Vm.reactDataValueSet(_resStr)) {
                            this.props.Vm.ShowItemList.forEach((x) => {
                                x.IsChange = true;
                            });
                            this.forceUpdate();
                        }
                    });
                }
            }
        }



        protected pInitUploadFile(resObj) {
            super.pInitUploadFile(resObj);
            this.props.Vm.pImagePreview(resObj, true);
        }

        private fSelectCuteFun() {

            return (fileObj, data, response) => {
                var ress = jQuery.parseJSON(data); //转换成json格式
                urlFile.Core.ActionCommond[ress.ActionType](ress, (_res) => {
                    this.props.Vm.ResourceInfoList = [];
                    this.props.Vm.ResourceInfoList.push(_res);
                    var _imagePreview = new imagePerviewShow.ui.ImagePreviewShowVm();
                    _imagePreview.ImgUrl = _res.HttpPath; //文件路径
                    _imagePreview.rImgWidth = this.props.Vm.Width;
                    _imagePreview.rImgHeight = this.props.Vm.Height;
                    _imagePreview.Location = { h: this.props.Vm.Height, w: this.props.Vm.Width, x: 0, y: 0 };
                    _imagePreview.UploadObj = this.props.Vm;
                    _imagePreview.IsModalShow = true;
                    this.props.Vm.PreviewShowItem = _imagePreview;

                    this.forceUpdate();
                });
            };
        }
    }

    //export class SingleImageUploadProps extends BaseUploadProps<SingleImageUploadVm>{
    export class BaseImageUploadProps<V extends BaseImageUploadVm> extends BaseUpload.ui.BaseUploadProps<V>{

    }

    export class BaseImageUploadStates extends BaseUpload.ui.BaseUploadStates {

    }

    export class BaseImageUploadVm extends BaseUpload.ui.BaseUploadVm {
        public ReactType: any = BaseImageUploadReact;
        protected pRegName = "单图片上传";

        public Width = 100;
        public Height = 100;
        public IsCut = false;
        public ImageSizeWidth = 100;
        public ImageSizeHeight = 100;
        public IsMulit = true;
        public Multi = false;
        public LabelText = "选择图片";
        public ShowItemList = new Array<imageShowItem.ui.ImageShowItemVm>();

        //是否能够编辑
        public isAbleEdit = true;

        public dataValueSet(val: string) {
            this.IsInitialValue = true;
            var ImageObject = JSON.parse(val);
            if (ImageObject) {
                ImageObject.ResourceInfoList.forEach((a) => {
                    this.pImagePreview(a);
                })
            }
            super.dataValueSet(val);
        }

        public pImagePreview(resourceInfo, isInit?) {
            this.ResourceInfoList = [];
            this.ResourceInfoList.push(resourceInfo);
            var _item = new imageShowItem.ui.ImageShowItemVm();

            _item.isAbleEdit = this.isAbleEdit;
            _item.ResourceInfo = resourceInfo;
            _item.UploadObj = this;
            _item.IsMulti = false;
            this.ShowItemList = new Array<imageShowItem.ui.ImageShowItemVm>();
            this.ShowItemList.push(_item);
        }


        public static Test(): BaseImageUploadVm {

            var _bean: BaseImageUploadVm = new BaseImageUploadVm();
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
        }
    }

} 