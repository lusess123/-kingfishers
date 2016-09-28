


import domFile = require("./../../01core/0Dom");
import iocFile = require("./../../01core/Ioc");
//import domFile = require("./../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../01core/Url");
import basewedPageFile = require("./../../04page/BaseWebPage");
import React = require("react");
import ReactDOM = require("react-dom");

export module TsPageBuilderPage {
    export class TsPageBuilderPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class TsPageBuilderPageReact extends basewedPageFile.Web.BaseWebPageReact<TsPageBuilderPageProps, TsPageBuilderPageStates, TsPageBuilderPageAction> implements domCore.IReact {

        public state = new TsPageBuilderPageStates();
        public pSender(): React.ReactElement<any> {
            
            return  <div>

                <input value={this.props.Vm.Text }
                onChange={(e) => { this.pInputOnChange(e); return false; } }
                className="Hg-width form-control ">
            </input>

            <input value={this.props.Vm.PathString }
                onChange={(e) => { this.pInputOnChange2(e); return false; } }
                className="Hg-width form-control "
                    >
            </input>

            <a className="btn btn-primary btn-sm m-b" onClick={() => { this.Copy(); } }> <i className="fa fa-files-o"></i>全部复制</a>

            <input value={this.props.Vm.logingString }
                onChange={(e) => { this.pInputOnChange2(e); return false; } }
                className="Hg-width form-control1 "
                >
            </input>

            <a className="btn btn-primary btn-sm m-b" onClick={() => { this.Copyloging(); } }> <i className="fa fa-files-o"></i>全部复制</a>

            <textarea className="Hg-width ACT-TXT" ref="textarea"    value={this.props.Vm.CodeString}  />

            </div>
        }
        public Copy() {
            var _dom = ReactDOM.findDOMNode(this);
            if (_dom) {
                var _$dom = $(_dom).find(".ACT-TXT");
                var txt = this.props.Vm.CodeString;
                _$dom[0]["select"]();
                window.prompt("请使用快捷键 Ctrl+C 复制到剪切板", txt)
               }
        }
        public Copyloging() {
            var _dom = ReactDOM.findDOMNode(this);
            if (_dom) {
                var _$dom = $(_dom).find(".form-control1");
                var txt = this.props.Vm.logingString;
                _$dom[0]["select"]();
                window.prompt("请使用快捷键 Ctrl+C 复制到剪切板", txt)
            }
        }
        private pInputOnChange(e: React.FormEvent) {
            var _val = e.target["value"];
            this.props.Vm.Text = _val;
            this.props.Vm.logingString = "_reg(" + '"' + this.props.Vm.Text + '"' + "，" + '"right/org/list/' + this.props.Vm.Text + '"' + ");";
            // this.forceUpdate();
            this.props.Vm.initPageCode();
        }
        private pInputOnChange2(e: React.FormEvent) {
            var _val = e.target["value"];
            this.props.Vm.PathString = _val;
            // this.forceUpdate();
            this.props.Vm.initPageCode();
        }

        protected pComponentDidMount(): void {

            var _dom = ReactDOM.findDOMNode(this);
            if (_dom) {
                var _$dom = $(_dom).find(".ACT-TXT");


                _$dom.height($(window).height() - 60 - 30 - 30);
            }
            this.props.Vm.initPageCode();
        }



    }

    export interface IReactTsPageBuilderPageVm extends basewedPageFile.Web.BaseWebPageVm {
        Text: string;
        initPageCode();
        CodeString: string;
        PathString: string;
        logingString: string;
    }

    export interface ITsPageBuilderPageConfig {


    }
    export class TsPageBuilderPageVm extends basewedPageFile.Web.BaseWebPageVm implements IReactTsPageBuilderPageVm {
        public ReactType = TsPageBuilderPageReact;
        public Text: string;
        public PathString: string = "../../";
        public CodeString: string;
        public logingString: string;
        public Title = "代码自动生成工具";
        public PageName: string = "TypeScriptDom";
        public constructor(config?: ITsPageBuilderPageConfig) {
            super();

        }

        private init(config: ITsPageBuilderPageConfig) {
        }

        public initPageCode() {
            urlFile.Core.AkPost("/areas/dev/text/" + this.PageName + ".aspx?c=" + this.Text + "&p=" + this.PathString, {}, (a) => {
                // alert(a);
                this.CodeString = a;
                this.forceUpdate("");
            });

        }

        protected loadPage(callback?: () => any) {
            this.Text = this.Param1;
            this.logingString = "_reg(" + '"' + this.Text + '"' + "，" + '"right/org/list/' + this.Text + '"' + ");";
            if (this.Param2 && this.Param2 != "") {
                this.PageName = this.Param2;
            }
            urlFile.Core.AkPost("/areas/dev/text/" + this.PageName +".aspx?c=" + this.Text, {}, (a) => {
                // alert(a);
                this.CodeString = a;
                //if()
                if (callback) {
                    callback();
                }
            });
            
        }


       

    }
    export class TsPageBuilderPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class TsPageBuilderPageProps extends basewedPageFile.Web.BaseWebPageProps<IReactTsPageBuilderPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("TSPAGEBUILDERPAGE", basewedPageFile.Web.BaseWebPageVm, TsPageBuilderPageVm);

}
