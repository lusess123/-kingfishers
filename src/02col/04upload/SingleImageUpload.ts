import baseImageupload = require("./BaseImageUpload");
import domFile = require("./../../01core/0Dom"); import basecolFile = require("./../00core/baseCol"); import BaseColReact = basecolFile.Core.BaseColReact; import BaseColVm = basecolFile.Core.BaseColVm; import BaseColProps = basecolFile.Core.BaseColProps; import BaseColStates = basecolFile.Core.BaseColStates; import BaseColAction = basecolFile.Core.BaseColAction;
import iocFile = require("./../../01core/Ioc");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module ui {
    //alert("SingleImageUploadReact");
    export class SingleImageUploadAction extends baseImageupload.ui.BaseImageUploadAction {

    }

    export class SingleImageUploadReact extends baseImageupload.ui.BaseImageUploadReact<SingleImageUploadProps, SingleImageUploadStates, SingleImageUploadAction> {

        protected pComponentDidUpdate(prevProps: SingleImageUploadProps, prevState: SingleImageUploadStates, prevContext: any) {
            super.pComponentDidUpdate(prevProps, prevState, prevContext);
        }
    }

    export class SingleImageUploadProps extends baseImageupload.ui.BaseImageUploadProps<SingleImageUploadVm>{

    }

    export class SingleImageUploadStates extends baseImageupload.ui.BaseImageUploadStates {

    }

    export class SingleImageUploadVm extends baseImageupload.ui.BaseImageUploadVm {

        public ReactType = SingleImageUploadReact;

    }

    iocFile.Core.Ioc.Current().RegisterType("SingleImageUploadVm", BaseColVm, SingleImageUploadVm);

} 