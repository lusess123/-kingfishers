import domFile = require("./../../01core/0Dom"); import basecolFile = require("./../00core/baseCol"); import BaseColReact = basecolFile.Core.BaseColReact; import BaseColVm = basecolFile.Core.BaseColVm; import BaseColProps = basecolFile.Core.BaseColProps; import BaseColStates = basecolFile.Core.BaseColStates; import BaseColAction = basecolFile.Core.BaseColAction;
import iocFile = require("./../../01core/Ioc");
import utilFile = require("./../../01core/Util");
import fileShowItem = require("./../04upload/FileShowItem");
import imageShowItem = require("./../04upload/ImageShowItem");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module ui {


    export class FileDetailAction extends BaseColAction {

    }


    export class FileDetailReact extends BaseColReact<FileDetailProps, FileDetailStates, FileDetailAction> implements domFile.Core.IReact {

        protected pComponentDidUpdate(prevProps: FileDetailProps, prevState: FileDetailStates, prevContext: any) {
            super.pComponentDidUpdate(prevProps, prevState, prevContext);

            var _valStr = this.props.Vm.reactDataValueGet();
            if (_valStr) {
                var _date = $.parseJSON(_valStr);
                if (_date) {
                    this.props.Vm.CoverIndex = _date.CoverIndex;
                    this.props.Vm.ResourceInfoList = _date.ResourceInfoList;
                }
            }
                this.props.Vm.ShowItemList = new Array();
          
            this.props.Vm.ResourceInfoList.map((item, i) => {
                //var _item = new fileShowItem.ui.FileShowItemVm();
                //_item.ResourceInfo = this.props.Vm.ResourceInfoList[i];
                //_item.UploadObj = this.props.Vm;

                //this.props.Vm.ShowItemList.push(_item);
                if (item["IsImage"]) {
                    var _item = new imageShowItem.ui.ImageShowItemVm();
                    _item.ResourceInfo = item;
                    _item.UploadObj = this;
                    this.props.Vm.ShowItemList.push(_item);
                }
                else {
                    var _fItem = new fileShowItem.ui.FileShowItemVm();
                    _fItem.ResourceInfo = item;
                    _fItem.UploadObj = this;
                    this.props.Vm.ShowItemList.push(_fItem);
                }
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

        public pSender(): React.ReactElement<any> {

            //return React.DOM.div({ ref: "fileDetail", className: "acsFilePanel clearfix " },
            //    this.props.Vm.ShowItemList == null ? null :
            //        this.props.Vm.ShowItemList.map((item, i) => {
            //            item.itemIndex = i;
            //            item.IsDetail = true;
            //            return item.intoDom()
            //        }));

            return <div ref="fileDetail" className="acsFilePanel clearfix">
                            {this.props.Vm.ShowItemList.map((item, i) => {
                                     item.itemIndex = i;
                                     item.IsDetail = true;
                                     return item.intoDom()
                            })}
                    </div>
        }

    }

    export class FileDetailProps extends BaseColProps<FileDetailVm> {

    }

    export class FileDetailStates extends BaseColStates {

    }

    export class FileDetailVm extends BaseColVm {
        public ReactType: any = FileDetailReact;
        protected pRegName = "文件显示";

        public ResourceInfoList: Array<Object> = [];
        public CoverIndex = 0;
        public ShowItemList = new Array();

        public dataValueSet(val: string) {
            if ( utilFile. Core.Util.isString(val) && val != "") {
                var _obj = JSON.parse(val);
                this.ResourceInfoList = _obj.ResourceInfoList;
                this.CoverIndex = _obj.CoverIndex;
            }

            this.ShowItemList = new Array();

            this.ResourceInfoList.map((item, i) => {
                //var _item = new   fileShowItemFile.ui.FileShowItemVm();
                //_item.ResourceInfo = this.ResourceInfoList[i];
                //_item.UploadObj = this;

                //this.ShowItemList.push(_item);
                if (item["IsImage"]) {
                    var _item = new imageShowItem.ui.ImageShowItemVm();
                    _item.ResourceInfo = item;
                    _item.UploadObj = this;
                    this.ShowItemList.push(_item);
                }
                else {
                    var _fItem = new fileShowItem.ui.FileShowItemVm();
                    _fItem.ResourceInfo = item;
                    _fItem.UploadObj = this;
                    this.ShowItemList.push(_fItem);
                }
            })

            super.dataValueSet(val);
        }

        public static Test(): FileDetailVm {

            var _bean: FileDetailVm = new FileDetailVm();
            var coverindex: number = 0;
            var resourceinfo: Array<Object> = [{ "ExtendList": { "38-38": "38-38", "60-60": "60-60", "200-360": "200-360" }, "DocumentViewId": "20150914105248500A4AF7D5A4588446FDB4AFF20EE1711D75.jpg", "CanDocumentView": false, "IsDocument": false, "IsCover": false, "InfoType": "Config", "Url": null, "SiteInUrl": null, "StorageConfigName": "CoreUserlogo", "FileId": "20150914105248500A4AF7D5A4588446FDB4AFF20EE1711D75", "PathID": 20150914, "ExtName": ".jpg", "FileNameTitle": "1_zbzengbing", "FileSizeK": 31, "HttpPath": "http://192.168.66.11:99/Core/User/logo/20150914105248500A4AF7D5A4588446FDB4AFF20EE1711D75.jpg", "PhysicalPath": "\\\\192.168.66.11\\zyk\\WebFile\\Core\\User\\logo\\20150914105248500A4AF7D5A4588446FDB4AFF20EE1711D75.jpg" }];
            var _valstr = JSON.stringify({
                CoverIndex: coverindex,
                ResourceInfoList: resourceinfo
            });
            _bean.initDataValue(_valstr);
            return _bean;
        }

    }

   iocFile. Core.Ioc.Current().RegisterType("FileDetailVm", BaseColVm, FileDetailVm);
}


