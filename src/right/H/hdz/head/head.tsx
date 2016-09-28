import domFile = require("./../../../../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");

import titleFile = require("./_title");
import title = titleFile.title.titleReact;
import titleVm = titleFile.title.titleVm;

import topbarFile = require("./_topbar");
import topbar = topbarFile.topbar.topbarReact;
import topbarVm = topbarFile.topbar.topbarVm;

import makeupFile = require("./_makeup");
import markeup = makeupFile.makeup.makeupReact;
import makeupVm = makeupFile.makeup.makeupVm;



export module head {
    export class headAction extends domCore.DomAction {
    }

    export class headReact extends domCore.DomReact<headProps, headStates, headAction> implements domCore.IReact {

        public state = new headStates();

        public pSender(): React.ReactElement<any> {
            return <div className="top-bar clearfix">
                {this.props.Vm.TitleObj.intoDom() }
                {this.props.Vm.TopbarObj.intoDom() }
                {this.props.Vm.MakeupObj.intoDom() }
                
            </div>;
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IheadConfig {


    }

    export class headVm extends domCore.DomVm {
        public ReactType = headReact;

        public TitleObj: titleVm = new titleVm();
        public TopbarObj: topbarVm = new topbarVm();
        public MakeupObj: makeupVm = new makeupVm();
        

        //public constrctor(config: IheadConfig) {
        //    super();

        //}

    }
    export class headStates extends domCore.DomStates {
    }


    export class headProps extends domCore.DomProps<headVm>{
    }



}
