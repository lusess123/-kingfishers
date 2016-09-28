import domFile = require("./../../../../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import eventFile = require("./../../../../01core/Event");


export module title {
    export class titleAction extends domCore.DomAction {
    }

    export class titleReact extends domCore.DomReact<titleProps, titleStates, titleAction> implements domCore.IReact {

        public state = new titleStates();

        public pSender(): React.ReactElement<any> {
            return <div className="title-area">
                <img src="../../AtawStatic/lib/01Base/15Images/niao_logo.png"/>
                <b>菜鸟办公</b>
                <div className="toggle-topbar menu-icon" onClick={() => { this.fun_toggle();}}><a><span></span></a></div>
            </div>;
        }

        public fun_toggle() {
            this.props.Vm.fun_toggle();
        }




        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface ItitleConfig {


    }

    export class titleVm extends domCore.DomVm {
        public ReactType = titleReact;

        //public constrctor(config: ItitleConfig) {
        //    super();
        //}
        public UniId: string;

        public fun_toggle()
        {
            this.emitAppEvent("_title_toggle", this.UniId);
        }


    }
    export class titleStates extends domCore.DomStates {
    }


    export class titleProps extends domCore.DomProps<titleVm>{
    }



}
