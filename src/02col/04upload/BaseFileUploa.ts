import BaseUpload = require("./BaseUpload");
import fileShowItem = require("./FileShowItem");
import imageShowItem = require("./ImageShowItem");
import domFile = require("./../../01core/0Dom"); import basecolFile = require("./../00core/baseCol"); import BaseColReact = basecolFile.Core.BaseColReact; import BaseColVm = basecolFile.Core.BaseColVm; import BaseColProps = basecolFile.Core.BaseColProps; import BaseColStates = basecolFile.Core.BaseColStates; import BaseColAction = basecolFile.Core.BaseColAction;
import urlFile = require("./../../01core/Url");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");

export module ui {
    //alert("BaseFileUploadReact");
    export class BaseFileUploadAction extends BaseUpload.ui.BaseUploadAction {
    }

    export class BaseFileUploadReact<P extends BaseFileUploadProps<BaseFileUploadVm>, S extends BaseFileUploadStates, A extends BaseFileUploadAction> extends BaseUpload.ui.BaseUploadReact<P, S, A> implements domFile.Core.IReact {
        public pSender(): React.ReactElement<any> {
            return super.pSender();
        }

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
                        this.props.Vm.ShowItemList = new Array();

                        this.props.Vm.ResourceInfoList.map((item, i) => {
                            if (item["IsImage"]) {
                                var _item = new imageShowItem.ui.ImageShowItemVm();
                                _item.IsMulti = false;
                                _item.ResourceInfo = item;
                                _item.UploadObj = this.props.Vm;
                                this.props.Vm.ShowItemList.push(_item);
                            }
                            else {
                                var _fItem = new fileShowItem.ui.FileShowItemVm();
                                _fItem.ResourceInfo = item;
                                _fItem.UploadObj = this.props.Vm;
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
                }
            }
        }

        protected pSuccessFun() {
            super.pSuccessFun();

            return (fileObj, data, response) => {
                var _res = jQuery.parseJSON(data);
               urlFile.Core .ActionCommond[_res.ActionType](_res, (_ree) => {
                    
                    this.pFileDisplayView(_ree);

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

        protected pFileDisplayView(resourceInfo,isInit?) {
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

        }

        protected pInitUploadFile(resObj) {
            super.pInitUploadFile(resObj);
            this.pFileDisplayView(resObj,true);
        }
    }

    export class BaseFileUploadProps<V extends BaseFileUploadVm> extends BaseUpload.ui.BaseUploadProps<V>{

    }

    export class BaseFileUploadStates extends BaseUpload.ui.BaseUploadStates {

    }

    export class BaseFileUploadVm extends BaseUpload.ui.BaseUploadVm {
        public ReactType: any = BaseFileUploadReact;
        protected pRegName = "单文件上传";
        public IsImageUpload = false;
        public IsMulit = true;
        public Multi = false;
        public LabelText = "选择文件";
        public ShowItemList = new Array();

        public static Test(): BaseFileUploadVm {

            var _bean: BaseFileUploadVm = new BaseFileUploadVm();
            _bean.StorageName = "CoreTestFileStorage";
            _bean.UploadName = "CoreUserlogo";
            return _bean;
        }
    }
} 