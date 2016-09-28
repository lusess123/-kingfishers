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
import TreeFile = require("./../../02col/03selector/BaseTree");
import lodashFile = require("lodash");

export module TreeTestPage {
    export class TreeTestPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class TreeTestPageReact extends basewedPageFile.Web.BaseWebPageReact<TreeTestPageProps, TreeTestPageStates, TreeTestPageAction> implements domCore.IReact {

        public state = new TreeTestPageStates();
        public pSender(): React.ReactElement<any> {
            return <div><div>{this._tDom(this.props.Vm.ModuleTreeObj) }</div></div>;
        }






    }

    export interface IReactTreeTestPageVm extends basewedPageFile.Web.BaseWebPageVm {
        ModuleTreeObj: TreeFile.ui.BaseTreeVm;
    }

    export interface ITreeTestPageConfig {


    }
    export class TreeTestPageVm extends basewedPageFile.Web.BaseWebPageVm implements IReactTreeTestPageVm {
        public ReactType = TreeTestPageReact;
        public Title: string = "TreeTestPage页面;";
        public ModuleTreeObj: TreeFile.ui.BaseTreeVm;
        public constructor(config?: ITreeTestPageConfig) {
            super();
           // lodashFile.find();
        }

        private init(config: ITreeTestPageConfig) {
        }

        protected loadPage(callback?: () => any) {
            this.ModuleTreeObj = new TreeFile.ui.BaseTreeVm({
                RegName: "ModuleXmlTreeCodeTable",
                IsRootExpand: true
            });

            // this.ModuleTreeObj.Tree.isr
            this.ModuleTreeObj.Tree.IsOnlyLeafCanSelect = true;
            this.ModuleTreeObj.Tree.onReactNodeClick((n) => {
                // alert(n.Value + "  " + n.Text);
                alert(n.Value);
                this.forceUpdate("");
                return true;
            });

            if (callback) {
                callback();
            }
        }

    }
    export class TreeTestPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class TreeTestPageProps extends basewedPageFile.Web.BaseWebPageProps<IReactTreeTestPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("TREETESTPAGE", basewedPageFile.Web.BaseWebPageVm, TreeTestPageVm);

}

