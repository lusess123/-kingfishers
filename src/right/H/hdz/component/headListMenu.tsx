import domFile = require("./../../../../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");

import alinkFile = require("./../../../../05tool/ALink");
import ALink = alinkFile.ui.ALinkReact;

export module headListMenu {
    export class headListMenuAction extends domCore.DomAction {
    }

    export class headListMenuReact extends domCore.DomReact<headListMenuProps, headListMenuStates, headListMenuAction> implements domCore.IReact {

        public state = new headListMenuStates();

        public pSender(): React.ReactElement<any> {
            return <section className="top-bar-section clearfix">
                <ul className="left">
                    <li className="acsPointer " ><ALink  Vm={new alinkFile.ui.ALinkVm(true) } href="$menu$" children={null}> 基础信息</ALink></li>
                    <li className="acsPointer " ><ALink  Vm={new alinkFile.ui.ALinkVm(true) } href="$menu$" children={null}> 权限管理</ALink></li>
                    <li className="acsPointer " ><ALink  Vm={new alinkFile.ui.ALinkVm(true) } href="$winmenunew$" children={null}> 新增菜单</ALink></li>
                    <li className="acsPointer " ><ALink  Vm={new alinkFile.ui.ALinkVm(true) } href="$winFEED$" children={null}>侧边栏主页</ALink></li>
                    <li className="acsPointer " ><ALink Vm={new alinkFile.ui.ALinkVm(true) } href="$winorg$" children={null}>基础信息侧</ALink></li>
                    <li className="acsPointer" ><a className="more-text">更多<i className="fa fa-caret-down"></i></a>
                    <ul className="more-listmenu ">
                        <li className="acsPointer " ><ALink  Vm={new alinkFile.ui.ALinkVm(true) } href="$menu$" children={null}> 基础信息</ALink></li>
                        <li className="acsPointer " ><ALink  Vm={new alinkFile.ui.ALinkVm(true) } href="$menu$" children={null}> 权限管理</ALink></li>
                        <li className="acsPointer " ><ALink  Vm={new alinkFile.ui.ALinkVm(true) } href="$winmenunew$" children={null}> 新增菜单</ALink></li>
                        <li className="acsPointer " ><ALink  Vm={new alinkFile.ui.ALinkVm(true) } href="$winFEED$" children={null}>侧边栏主页</ALink></li>
                        <li className="acsPointer " ><ALink Vm={new alinkFile.ui.ALinkVm(true) } href="$winorg$" children={null}>基础信息侧</ALink></li>
                    </ul>
                    </li>
                </ul>
            </section>;
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IheadListMenuConfig {


    }

    export class headListMenuVm extends domCore.DomVm {
        public ReactType = headListMenuReact;

        public constructor(config?: IheadListMenuConfig) {
            super();

        }

    }
    export class headListMenuStates extends domCore.DomStates {
    }


    export class headListMenuProps extends domCore.DomProps<headListMenuVm>{
    }



}


