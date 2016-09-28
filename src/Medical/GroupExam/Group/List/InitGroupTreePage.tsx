import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
//import domFile = require("./../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import basewedPageFile = require("./../../../../04page/BaseWebPage");
import React = require("react");
import ReactDOM = require("react-dom");
import toolTreeFile = require("./../../../../05tool/Tree");

export module InitGroupTreePage {
    export class InitGroupTreePageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class InitGroupTreePageReact extends basewedPageFile.Web.BaseWebPageReact<InitGroupTreePageProps, InitGroupTreePageStates, InitGroupTreePageAction> implements domCore.IReact {

        public state = new InitGroupTreePageStates();
        public pSender(): React.ReactElement<any> {
            return <div className="Hm-modals"><h4>选择批次</h4>
                <div className="">
                    {
                        this.props.Vm.NaviTree.intoDom()
                    }
                </div>
            </div>;
        }

    }

    export interface IReactInitGroupTreePageVm extends basewedPageFile.Web.BaseWebPageVm {
    }

    export interface IInitGroupTreePageConfig {


    }
    export class InitGroupTreePageVm extends basewedPageFile.Web.BaseWebPageVm implements IReactInitGroupTreePageVm {
        public ReactType = InitGroupTreePageReact;
        public strin: string;
        public NaviTree: toolTreeFile.ui.TreeVm;
        public constructor(config?: IInitGroupTreePageConfig) {

            super();
           // this.NaviTree = new toolTreeFile.ui.TreeVm();

           

        }

        private init(config: IInitGroupTreePageConfig) {
        }
        public SubmitData( batchId: string) {
            var data = { batchId: batchId}
            this.SendPageActor({ ToPanelName: "", ToModuleName: "NEWGROUPPAGE" }, { BatchData: data });
           this.closePage();

        }
        protected loadPage(callback?: () => any) {
            this.NaviTree = new toolTreeFile.ui.TreeVm();

            this.NaviTree.onReactNodeClick((a) => {                         
                this.SubmitData(a.Value);
                return true
            });

            this.NaviTree.NodeTplFun = (node) => {
                return [(
                    <span>
                        <span>{node.Text}</span>
                    </span>
                )];
            }

            //var _data1 = { CODE_VALUE: "1", CODE_TEXT: "第一批" };
            //var _data2 = { CODE_VALUE: "1", CODE_TEXT: "11" };
            //this.NaviTree.initTreeVm(_data1);
            urlFile.Core.AkPost("/MedicalCenter/NewGroup/InitThree", { fids: this.Param1 }, (a) => {
                if (a) {
                    var _data = a.Data;
                    this.NaviTree.initTreeVm(_data);
                    if (callback) {
                        callback();
                    }
                   
                }
            });
        }
        public getNaviGroupTreeFId(): string {
            if (this.NaviTree.SelectNodes[0]) {
                var _str: any = this.NaviTree.SelectNodes[0].Value;
                return _str;
            }
            return "";
        }
    }
    export class InitGroupTreePageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class InitGroupTreePageProps extends basewedPageFile.Web.BaseWebPageProps<InitGroupTreePageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("InitGroupTreePage", basewedPageFile.Web.BaseWebPageVm, InitGroupTreePageVm);

}