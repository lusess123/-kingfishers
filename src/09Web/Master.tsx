
import domFile = require("./../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../01core/Util");
import iocFile = require("./../01core/Ioc");
import urlFile = require("./../01core/Url");
import baseStageFile = require("./BaseStage");
import homeStageFile = require("./HomeStage");

import tableDemoFile = require("./TableDemo");
import tableFile = require("./Table");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module Web {
    export class MasterAction extends domCore.DomAction {
        // LogList: Array<string>;
    }

    export class MasterReact extends domCore.DomReact<MasterProps, MasterStates, MasterAction> implements domCore.IReact {

        public state = new MasterStates();

        public pSender(): React.ReactElement<any> {
             
            if (this.state.Stage) {
               // return React.DOM.div({}, this.state.Stage.intoDom());

                return <div>{this.state.Stage.intoDom()}</div>
            }
            else {
                //return React.DOM.div({}, "空白的页面");
                return <div>空白的页面</div>
            }
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();
           // alert();
            this.state.Stage = new tableDemoFile.Web.TableDemoVm();
           
            urlFile.Core.AkUrl.Current().bindHashChange((a) => {
                alert(" 刷新页面 "+a);
                utilFile.Core.Util.ToggleLoading(true);
               // this.bindPage(a);
                // Core.Util.ToggleLoading(false);
                // this.state.PageObj.
            });
             this.forceUpdate(() => {
                utilFile.Core.Util.ToggleLoading(false);
            });
        }
       

    }
    export class MasterVm extends domCore.DomVm {
        public ReactType = MasterReact;


    }
    export class MasterStates extends domCore.DomStates {
        public Stage: baseStageFile.Web.BaseStageVm;
    }

   
    export class MasterProps extends domCore.DomProps<MasterVm>{
    }



}

