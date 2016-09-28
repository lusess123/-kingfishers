import domFile = require("./../../01core/0Dom");
import iocFile = require("./../../01core/Ioc");
//import domFile = require("./../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../01core/Url");
import basewedPageFile = require("./../../04page/BaseWebPage");

import treeFile = require("./../../02col/03selector/TreeSelector");
import baseTreeFile = require("./../../02col/03selector/BaseTree");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module TreeTest {
    export class TreeTestAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class TreeTestReact extends basewedPageFile.Web.BaseWebPageReact<TreeTestProps, TreeTestStates, TreeTestAction> implements domCore.IReact {

        public state = new TreeTestStates();
        public pSender(): React.ReactElement<any> {
            return <div className="Hz-scroll Hg-overflow-auto">
                <div className={"text-left "+ new Date().getDay().toString()}>1{this.props.Vm.TreeObj1.intoDom() }</div>
                <div><textarea value={this.props.Vm.Txt1} ></textarea></div>
                <div className="text-left ">2{this.props.Vm.TreeObj2.intoDom() }</div>
                <div><textarea value={this.props.Vm.Txt2} ></textarea></div>
                   </div>;
        }
        
        




    }
    export class TreeTestVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = TreeTestReact;
        public TreeObj1: baseTreeFile.ui.BaseTreeVm = new baseTreeFile.ui.BaseTreeVm();
        public TreeObj2: baseTreeFile.ui.BaseTreeVm = new baseTreeFile.ui.BaseTreeVm();

        public Txt1: string;
        public Txt2: string;
        public constructor() {
            super();
            this.TreeObj1.RegName = "GroupCodeTable";
            this.TreeObj1.Tree.IsMultiSelect = true;

            this.TreeObj1.ChangeEventFun = (val, col) => {
                this.Txt1 = val;
                this.forceUpdate("");
                return true;
            };
            this.TreeObj2.ChangeEventFun = (val, col) => {
                this.Txt2 = val;
                this.forceUpdate("");
                return true;
            };
        }

        protected loadPage(callback?: () => any) {

            this.TreeObj1.IsChange = true;

            if (callback) {
                callback();
            }
        }
        

    }
    export class TreeTestStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class TreeTestProps extends basewedPageFile.Web.BaseWebPageProps<TreeTestVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("TREETEST", basewedPageFile.Web.BaseWebPageVm, TreeTestVm);
    
}