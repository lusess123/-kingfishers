import baseImageupload = require("./BaseImageUpload");
import domFile = require("./../../01core/0Dom"); import basecolFile = require("./../00core/baseCol"); import BaseColReact = basecolFile.Core.BaseColReact; import BaseColVm = basecolFile.Core.BaseColVm; import BaseColProps = basecolFile.Core.BaseColProps; import BaseColStates = basecolFile.Core.BaseColStates; import BaseColAction = basecolFile.Core.BaseColAction;
import iocFile = require("./../../01core/Ioc");
import imageShowItem = require("./ImageShowItem");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");

export module ui {
    //alert("MultiImageUploadReact");
    export class MultiImageUploadAction extends baseImageupload.ui.BaseImageUploadAction {

    }

    export class MultiImageUploadReact extends baseImageupload.ui.BaseImageUploadReact<MultiImageUploadProps, MultiImageUploadStates, MultiImageUploadAction> {

        protected pComponentDidUpdate(prevProps: MultiImageUploadProps, prevState: MultiImageUploadStates, prevContext: any) {
            super.pComponentDidUpdate(prevProps, prevState, prevContext);
        }


    }

    export class MultiImageUploadProps extends baseImageupload.ui.BaseImageUploadProps<MultiImageUploadVm>{

    }

    export class MultiImageUploadStates extends baseImageupload.ui.BaseImageUploadStates {

    }

    export class MultiImageUploadVm extends baseImageupload.ui.BaseImageUploadVm {

        public ReactType = MultiImageUploadReact;
        protected pRegName = "多图片上传";

        public IsCut = false;
        public IsMulit = false;
        public Multi = true;

        public isAbleEdit = true;

        public static Test(): MultiImageUploadVm {

            var _bean: MultiImageUploadVm = new MultiImageUploadVm();
            _bean.StorageName = "CoreUserlogo";
            _bean.UploadName = "CoreUserlogo";
            _bean.FileExtension = "*.jpeg;*.jpg;*.bmp;*.gif;*.png";

            return _bean;
        }

        public pImagePreview(resourceInfo, isInit) {
            if (!isInit) {
                this.ResourceInfoList.push(resourceInfo);
            }

            var _item = new imageShowItem.ui.ImageShowItemVm();
            debugger
            _item.isAbleEdit = this.isAbleEdit;
            _item.ResourceInfo = resourceInfo;
            _item.UploadObj = this;
            _item.IsMulti = true;
            //this.props.Vm.ShowItemList = new Array<ImageShowItemVm>();
            this.ShowItemList.push(_item);
        }
    }

    iocFile.Core.Ioc.Current().RegisterType("MultiImageUploadVm", BaseColVm, MultiImageUploadVm);

} 