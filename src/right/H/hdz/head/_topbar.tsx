import domFile = require("./../../../../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");

import alinkFile = require("./../../../../05tool/ALink");
import ALink = alinkFile.ui.ALinkReact;

export module topbar {
    export class topbarAction extends domCore.DomAction {
    }

    export class topbarReact extends domCore.DomReact<topbarProps, topbarStates, topbarAction> implements domCore.IReact {

        public state = new topbarStates();

        public pSender(): React.ReactElement<any> {
            return <div className="top-bar-section">
                <ul className="clearfix left">
                    <li className="acsPointer active"><ALink  Vm={new alinkFile.ui.ALinkVm(true) } href="$..$" children={null}>工作平台</ALink></li>
                    <li className="acsPointer"><ALink  Vm={new alinkFile.ui.ALinkVm(true) } href="$..$" children={null}>通讯录</ALink></li>
                    <li className="acsPointer" ><a onClick={() => { this.fun_appCenterClick() } }>应用中心</a></li>

                </ul>
                <ul className="clearfix left">
                   <li><ALink  Vm={new alinkFile.ui.ALinkVm(true) } href="$..$" children={null}>车辆管理<img src="../lib/akCss/images/icon-close.png"/></ALink></li>
                   <li><ALink  Vm={new alinkFile.ui.ALinkVm(true) } href="$..$" children={null}>OA应用平台<img src="../lib/akCss/images/icon-close.png"/></ALink></li>
                   <li><ALink  Vm={new alinkFile.ui.ALinkVm(true) } href="$..$" children={null}>权限管理<img src="../lib/akCss/images/icon-close.png"/></ALink></li>
                </ul>
            </div>;
        }

        private fun_appCenterClick() {
            this.fun_appCenterClick();
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface ItopbarConfig {


    }

    export class topbarVm extends domCore.DomVm {
        public ReactType = topbarReact;

        public UniId: string;

        public fun_appCenterClick() {
            this.emitAppEvent("_topbar", this.UniId);
        }

        public constructor(config?: ItopbarConfig) {
            super();

            
        }

    }
    export class topbarStates extends domCore.DomStates {
    }


    export class topbarProps extends domCore.DomProps<topbarVm>{
    }



}
