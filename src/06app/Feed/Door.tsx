


import domFile = require("./../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../01core/Util");
import iocFile = require("./../../01core/Ioc");
import urlFile = require("./../../01core/Url");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module Door {
    export class DoorAction extends domCore.DomAction {
    }

    export class DoorReact extends domCore.DomReact<DoorProps, DoorStates, DoorAction> implements domCore.IReact {

        public state = new DoorStates();

        public pSender(): React.ReactElement<any> {
            return <div className="Hc-link">
            <ul className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nav nav-pills">
                <li className="nav-item"><a className="nav-link" href="#$rightPage$"><img className="Hu-img-75X75" src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=611834776,3845409433&fm=58"/></a><a className="nav-link" href="#$rightpage$">权限配置</a></li>
                <li className="nav-item"><a className="nav-link"href="#$menu$"><img  className="Hu-img-75X75" src="/ts/html0/img/12.jpg"/></a><a className="nav-link" href="#$menupage$">权限管理</a></li>
                <li className="nav-item"><a className="nav-link" href="#$menu$"><img className="Hu-img-75X75"  src="http://facebook.github.io/react/img/logo.svg"/></a><a className="nav-link" href="#$userinfo$">基础信息</a></li>
            </ul>
            </div>;
               
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IDoorConfig {


    }

    export class DoorVm extends domCore.DomVm {
        public ReactType = DoorReact;

        public constructor(config?: IDoorConfig) {
            super();

        }

    }
    export class DoorStates extends domCore.DomStates {
    }


    export class DoorProps extends domCore.DomProps<DoorVm>{
    }



}


