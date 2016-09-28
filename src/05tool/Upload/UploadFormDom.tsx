

import domFile = require("./../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../01core/Util");
import iocFile = require("./../../01core/Ioc");
import urlFile = require("./../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");

export module UploadFormDom {
    export class UploadFormDomAction extends domCore.DomAction {
    }

    export class UploadFormDomReact extends domCore.DomReact<UploadFormDomProps, UploadFormDomStates, UploadFormDomAction> implements domCore.IReact {

        public state = new UploadFormDomStates();

        public pSender(): React.ReactElement<any> {
            return <div>
                <form  method="post" encType="multipart/form-data">
                    <input  type="file" name="fileName" size="15" input enctype="multipart/form-data" maxlength="100"  ></input>
                </form>
            </div>;
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IReactUploadFormDomVm extends domCore.DomVm {

    }

    export interface IUploadFormDomConfig {


    }

    export class UploadFormDomVm extends domCore.DomVm implements IReactUploadFormDomVm {
        public ReactType = UploadFormDomReact;

        public constructor(config?: IUploadFormDomConfig) {
            super();

        }

    }
    export class UploadFormDomStates extends domCore.DomStates {
    }


    export class UploadFormDomProps extends domCore.DomProps<IReactUploadFormDomVm>{
    }



}


