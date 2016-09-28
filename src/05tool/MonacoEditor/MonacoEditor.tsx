


import domFile = require("./../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../01core/Util");
import iocFile = require("./../../01core/Ioc");
import urlFile = require("./../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");

export module MonacoEditor {
    export class MonacoEditorAction extends domCore.DomAction {
    }

    export enum CodeType {
        html = 1,
        csharp,
        xml,
        javascript,
        typescript,
        sql
    }

    export class MonacoEditorReact extends domCore.DomReact<MonacoEditorProps, MonacoEditorStates, MonacoEditorAction> implements domCore.IReact {

        public state = new MonacoEditorStates();

        private getHeight(): number
        {
            return $(window).height() - 8 *20 ;
        }

        public pSender(): React.ReactElement<any> {
            return <div><div className="MonacoEditor" style={{ width: "100%", height: this.getHeight(), border: " 1px solid grey" }}></div></div>;
        }
        
        //HTML, XML, PHP, C#, C++, Razor, Markdown, Diff, Java, VB, CoffeeScript,
        //Handlebars, Batch, Jade, F#, Lua, Powershell,
        //Python, SASS, R, Objective-C

        private fIsInit: boolean = false;

        private fInit() {
            var _$dom = $(ReactDOM.findDOMNode(this)).find(".MonacoEditor");
            if (_$dom.length > 0) {
                _$dom.html("");
                requirejs.config({
                    paths: { "vs": "/AtawStatic/lib/03Extend/monaco-editor/min/vs" }
                });
                utilFile.Core.Util.AsyncJs([
                    "/AtawStatic/lib/03Extend/monaco-editor/min/vs/loader.js"],
                    () => {
                       
                        require(['vs/editor/editor.main'],  () =>{
                           // alert();
                            var editor = window["monaco"].editor.create(_$dom[0], {
                                value: this.props.Vm.ContentList.join('\n'),
                                language: this.props.Vm.getCodeTypeStr(),
                                theme:"vs"
                            });
                        });
                    });
            }
        }

        protected pInstall() {
            super.pInstall();
            if (this.fInit) {
                this.fInit();
            }
        }

        protected pComponentDidMount(): void {
            super.pComponentDidMount();
            if (!this.fIsInit) {
                this.fIsInit = true;
                this.fInit();
            }
        }


    }

    export interface IReactMonacoEditorVm extends domCore.DomVm {
        CodeType: CodeType,
        getCodeTypeStr(): string,
        ContentList: string[]
    }

    export interface IMonacoEditorConfig {
        CodeType?: CodeType;
        ContentList?: string[];
    }

    export class MonacoEditorVm extends domCore.DomVm implements IReactMonacoEditorVm {
        public ReactType = MonacoEditorReact;
        public CodeType: CodeType = CodeType.javascript;
        public ContentList: string[] =[];

        public constructor(config?: IMonacoEditorConfig) {
            super();
            if (config) {
                if (config.CodeType) {
                    this.CodeType = config.CodeType;
                }
                if (config.ContentList) {
                    this.ContentList = config.ContentList;
                }
            }
        }

        public getCodeTypeStr(): string {
            switch (this.CodeType) {
                case CodeType.csharp:
                    return "c#";
                case CodeType.sql:
                    return "sql";
                default:
                    return CodeType[this.CodeType];
            }
        }

    }
    export class MonacoEditorStates extends domCore.DomStates {
    }


    export class MonacoEditorProps extends domCore.DomProps<IReactMonacoEditorVm>{
    }



}


