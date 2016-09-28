

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

export module WebConfigFilePage {
    export class WebConfigFilePageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class WebConfigFilePageReact extends basewedPageFile.Web.BaseWebPageReact<WebConfigFilePageProps, WebConfigFilePageStates, WebConfigFilePageAction> implements domCore.IReact {

        public state = new WebConfigFilePageStates();
        public pSender(): React.ReactElement<any> {
            return <div>{this._tDom(this.props.Vm.MonacoEditorObj) }</div>;
        }






    }

    export interface IReactWebConfigFilePageVm extends basewedPageFile.Web.BaseWebPageVm {
        MonacoEditorObj: MonacoEditorFile.MonacoEditor.MonacoEditorVm;
    }

    export interface IWebConfigFilePageConfig {


    }
    export class WebConfigFilePageVm extends basewedPageFile.Web.BaseWebPageVm implements IReactWebConfigFilePageVm {
        public ReactType = WebConfigFilePageReact;
        public Title: string = "WebConfigFilePage页面;";
        public MonacoEditorObj: MonacoEditorFile.MonacoEditor.MonacoEditorVm;

        public constructor(config?: IWebConfigFilePageConfig) {
            super();

        }

        private init(config: IWebConfigFilePageConfig) {
            

        }

        protected loadPage(callback?: () => any) {
            if (callback) {
                urlFile.Core.AkPost("/rightcloud/auth/getcodefile",
                    { path: "Ataw.WebSite/web.config" },
                    (a) => {
                        var _list: string[] = a;
                        this.MonacoEditorObj = new MonacoEditorFile.MonacoEditor.MonacoEditorVm({
                            CodeType: MonacoEditorFile.MonacoEditor.CodeType.xml,
                            ContentList: _list
                        });
                        callback();
                    });
                
            }
        }

    }
    export class WebConfigFilePageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class WebConfigFilePageProps extends basewedPageFile.Web.BaseWebPageProps<IReactWebConfigFilePageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("WEBCONFIGFILEPAGE", basewedPageFile.Web.BaseWebPageVm, WebConfigFilePageVm);

}

