import baseFileUpload = require("./BaseFileUploa");
import domFile = require("./../../01core/0Dom"); import basecolFile = require("./../00core/baseCol"); import BaseColReact = basecolFile.Core.BaseColReact; import BaseColVm = basecolFile.Core.BaseColVm; import BaseColProps = basecolFile.Core.BaseColProps; import BaseColStates = basecolFile.Core.BaseColStates; import BaseColAction = basecolFile.Core.BaseColAction;
import iocFile = require("./../../01core/Ioc");
import fileShowItem = require("./FileShowItem");
import imageShowItem = require("./ImageShowItem");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module ui {
    //alert("MultiFileUploadReact");
    export class MultiFileUploadAction extends baseFileUpload.ui.BaseFileUploadAction {

    }

    export class MultiFileUploadReact extends baseFileUpload.ui.BaseFileUploadReact<MultiFileUploadProps, MultiFileUploadStates, MultiFileUploadAction> {

        protected pComponentDidUpdate(prevProps: MultiFileUploadProps, prevState: MultiFileUploadStates, prevContext: any) {
            super.pComponentDidUpdate(prevProps, prevState, prevContext);
        }

        protected pFileDisplayView(resourceInfo, isInit?) {
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
        }

    }

    export class MultiFileUploadProps extends baseFileUpload.ui.BaseFileUploadProps<MultiFileUploadVm>{

    }

    export class MultiFileUploadStates extends baseFileUpload.ui.BaseFileUploadStates {

    }

    export class MultiFileUploadVm extends baseFileUpload.ui.BaseFileUploadVm {

        public ReactType = MultiFileUploadReact;
        protected pRegName = "多文件上传";
        public IsMulit = false;
        public Multi = true;     

        public static Test(): MultiFileUploadVm {

            var _bean: MultiFileUploadVm = new MultiFileUploadVm();
            _bean.StorageName = "CoreTestFileStorage";
            _bean.UploadName = "CoreUserlogo";
            return _bean;
        }
    }

   iocFile.Core.Ioc.Current().RegisterType("MultiFileUploadVm",BaseColVm, MultiFileUploadVm);

} 