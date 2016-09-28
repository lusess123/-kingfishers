import baseFileUpload = require("./BaseFileUploa");
import domFile = require("./../../01core/0Dom"); import basecolFile = require("./../00core/baseCol"); import BaseColReact = basecolFile.Core.BaseColReact; import BaseColVm = basecolFile.Core.BaseColVm; import BaseColProps = basecolFile.Core.BaseColProps; import BaseColStates = basecolFile.Core.BaseColStates; import BaseColAction = basecolFile.Core.BaseColAction;
import iocFile = require("./../../01core/Ioc");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");

export module ui {
    //alert("SingleFileUploadReact");
    export class SingleFileUploadAction extends baseFileUpload.ui.BaseFileUploadAction {

    }

    export class SingleFileUploadReact extends baseFileUpload.ui.BaseFileUploadReact<SingleFileUploadProps, SingleFileUploadStates, SingleFileUploadAction> {

        protected pComponentDidUpdate(prevProps: SingleFileUploadProps, prevState: SingleFileUploadStates, prevContext: any) {
            super.pComponentDidUpdate(prevProps, prevState, prevContext);
        }
    }

    export class SingleFileUploadProps extends baseFileUpload.ui.BaseFileUploadProps<SingleFileUploadVm>{

    }

    export class SingleFileUploadStates extends baseFileUpload.ui.BaseFileUploadStates {

    }

    export class SingleFileUploadVm extends baseFileUpload.ui.BaseFileUploadVm {

        public ReactType = SingleFileUploadReact;

    }

  iocFile.Core.Ioc.Current().RegisterType("SingleFileUploadVm", BaseColVm, SingleFileUploadVm);

} 