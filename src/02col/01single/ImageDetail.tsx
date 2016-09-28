import domFile = require("./../../01core/0Dom"); import basecolFile = require("./../00core/baseCol"); import BaseColReact = basecolFile.Core.BaseColReact; import BaseColVm = basecolFile.Core.BaseColVm; import BaseColProps = basecolFile.Core.BaseColProps; import BaseColStates = basecolFile.Core.BaseColStates; import BaseColAction = basecolFile.Core.BaseColAction;
import iocFile = require("./../../01core/Ioc");
import utilFile = require("./../../01core/Util");
import showImageitem = require("./../../02col/04upload/ImageShowItem");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module ui {


    export class ImageDetailAction extends BaseColAction {

    }


    export class ImageDetailReact extends BaseColReact<ImageDetailProps, ImageDetailStates, ImageDetailAction> implements domFile.Core.IReact {

        protected pComponentDidUpdate(prevProps: ImageDetailProps, prevState: ImageDetailStates, prevContext: any) {
            super.pComponentDidUpdate(prevProps, prevState, prevContext);

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
        }

        public pSender(): React.ReactElement<any> {

            var _valStr = this.props.Vm.reactDataValueGet();
            if (_valStr == "") {
                return React.DOM.div({ ref: "imageDetail", className: "Hm-images clearfix "},"(空)");
            }

            var _date = JSON.parse(_valStr);
            this.props.Vm.CoverIndex = _date.CoverIndex;
            this.props.Vm.ResourceInfoList = _date.ResourceInfoList;
            this.props.Vm.ShowItemList = new Array<showImageitem.ui.ImageShowItemVm>();

            this.props.Vm.ResourceInfoList.map((item, i) => {
                var _item = new showImageitem.ui.ImageShowItemVm();
                _item.ResourceInfo = this.props.Vm.ResourceInfoList[i];
                _item.UploadObj = this.props.Vm;

                this.props.Vm.ShowItemList.push(_item);
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

            return <div ref="imageDetail" className="Hm-images clearfix ">
                        {
                            this.props.Vm.ShowItemList == null ? null :
                            this.props.Vm.ShowItemList.map((item, i) =>
                                {
                                    if (i == this.props.Vm.CoverIndex) {
                                        item.IsCover = true;
                                    } else {
                                        item.IsCover = false;
                                    }
                                    item.itemIndex = i;
                                    item.IsDetail = true;
                                    return item.intoDom()
                                })
                        }
                    </div>
        }

    }

    export class ImageDetailProps extends BaseColProps<ImageDetailVm> {

    }

    export class ImageDetailStates extends BaseColStates {

    }

    export class ImageDetailVm extends BaseColVm {
        public ReactType: any = ImageDetailReact;
        protected pRegName = "图片显示";
        
        public ResourceInfoList: Array<Object> = [];
        public CoverIndex = 0;
        public ShowItemList: Array<showImageitem.ui.ImageShowItemVm> = null;

        public dataValueSet(val: string) {
            if (utilFile.Core.Util.isString(val) && val != "") {
                var _obj = JSON.parse(val);
                this.ResourceInfoList = _obj.ResourceInfoList;
                this.CoverIndex = _obj.CoverIndex;
            }

            this.ShowItemList = new Array<showImageitem.ui.ImageShowItemVm>();

            this.ResourceInfoList.map((item, i) => {
                var _item = new showImageitem.ui.ImageShowItemVm();
                _item.ResourceInfo = this.ResourceInfoList[i];
                _item.UploadObj = this;
                
                this.ShowItemList.push(_item);
            })
            
            super.dataValueSet(val);
        }

        public static Test(): ImageDetailVm {

            var _bean: ImageDetailVm = new ImageDetailVm();
            var coverindex:number = 0;
            var resourceinfo:Array<Object> = [{ "ExtendList": { "38-38": "38-38", "60-60": "60-60", "200-360": "200-360" }, "DocumentViewId": "20150914105248500A4AF7D5A4588446FDB4AFF20EE1711D75.jpg", "CanDocumentView": false, "IsDocument": false, "IsCover": false, "InfoType": "Config", "Url": null, "SiteInUrl": null, "StorageConfigName": "CoreUserlogo", "FileId": "20150914105248500A4AF7D5A4588446FDB4AFF20EE1711D75", "PathID": 20150914, "ExtName": ".jpg", "FileNameTitle": "1_zbzengbing", "FileSizeK": 31, "HttpPath": "http://192.168.66.11:99/Core/User/logo/20150914105248500A4AF7D5A4588446FDB4AFF20EE1711D75.jpg", "PhysicalPath": "\\\\192.168.66.11\\zyk\\WebFile\\Core\\User\\logo\\20150914105248500A4AF7D5A4588446FDB4AFF20EE1711D75.jpg" }];
            var _valstr = JSON.stringify({
                CoverIndex: coverindex,
                ResourceInfoList: resourceinfo
            });
            _bean.initDataValue(_valstr);
            return _bean;
        }
        
    }

  iocFile.Core.Ioc.Current().RegisterType("ImageDetailVm", BaseColVm, ImageDetailVm);
}


