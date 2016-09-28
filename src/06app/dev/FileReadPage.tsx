

import domFile = require("./../../01core/0Dom");
import iocFile = require("./../../01core/Ioc");
//import domFile = require("./../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../01core/Url");
import basewedPageFile = require("./../../04page/BaseWebPage");
import React = require("react");
import ReactDOM = require("react-dom");
import MonacoEditorFile = require("./../../05tool/MonacoEditor/MonacoEditor");

export module FileReadPage {
    export class FileReadPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class FileReadPageReact extends basewedPageFile.Web.BaseWebPageReact<FileReadPageProps, FileReadPageStates, FileReadPageAction> implements domCore.IReact {

        public state = new FileReadPageStates();
        public pSender(): React.ReactElement<any> {
            return <div>{this._tDom(this.props.Vm.MonacoEditorObj) }</div>;
        }

        



    }

    export interface IReactFileReadPageVm extends basewedPageFile.Web.BaseWebPageVm {
        MonacoEditorObj: MonacoEditorFile.MonacoEditor.MonacoEditorVm;
    }

    export interface IFileReadPageConfig {


    }
    export class FileReadPageVm extends basewedPageFile.Web.BaseWebPageVm implements IReactFileReadPageVm {
        public ReactType = FileReadPageReact;
        public Title: string = "FileReadPage页面;";
        public MonacoEditorObj: MonacoEditorFile.MonacoEditor.MonacoEditorVm;
        public FilePath: string;

        public constructor(config?: IFileReadPageConfig) {
            super();

        }

        public Reset(p1?: string, p2?: string, p3?: string) {
            super.Reset(p1, p2, p3);
            this.FilePath = p1;
        }

        private init(config: IFileReadPageConfig) {
        }

        protected loadPage(callback?: () => any) {

            urlFile.Core.AkPost("/rightcloud/auth/getcodefile",
                { path: this.FilePath },
                (a) => {
                    var _list: string[] = a;
                    this.MonacoEditorObj = new MonacoEditorFile.MonacoEditor.MonacoEditorVm({
                        CodeType: MonacoEditorFile.MonacoEditor.CodeType.csharp,
                        ContentList: _list
                    });
                    this.forceUpdate("");
                   
                });

            if (callback) {
                callback();
            }

            
        }

    }
    export class FileReadPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class FileReadPageProps extends basewedPageFile.Web.BaseWebPageProps<IReactFileReadPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("FILEREADPAGE", basewedPageFile.Web.BaseWebPageVm, FileReadPageVm);

}

