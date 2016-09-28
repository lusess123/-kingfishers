import domFile = require("./../../../../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");


import WorkBenchFile = require("./../../cxj/HWorkBenchPage");
import WorkBenchVm = WorkBenchFile.HWorkBenchPage.HWorkBenchPageVm;


import shortcutFile = require("./shortCut");
import shortcut = shortcutFile.shortcut.shortcutReact;
import shortcutVm = shortcutFile.shortcut.shortcutVm;


export module main {
    export class mainAction extends domCore.DomAction {
    }

    export class mainReact extends domCore.DomReact<mainProps, mainStates, mainAction> implements domCore.IReact {

        public state = new mainStates();

        public pSender(): React.ReactElement<any> {

            return <div>
                   <div>
                    <span>当前位置：</span>
                    <a className="ablue">桌面</a>
                    <a className="ablue acsMarginLR0-5">/</a>
                    <a className="active"> 动态</a> 
                    </div>
               {this.props.Vm.WorkBenchObj.intoDom() }
                </div>;

        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface ImainConfig {


    }

    export class mainVm extends domCore.DomVm {
        public ReactType = mainReact;


        public WorkBenchObj: WorkBenchVm = new WorkBenchVm();
        public ShortCutObj: shortcutVm = new shortcutVm();
        public IsMainShow: boolean = false;
        public UniId: string;




        public constructor(config?: ImainConfig) {
        super();
        }

        


    }
    export class mainStates extends domCore.DomStates {
    }


    export class mainProps extends domCore.DomProps<mainVm>{
    }



}
