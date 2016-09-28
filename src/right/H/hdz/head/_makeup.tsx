import domFile = require("./../../../../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");

import alinkFile = require("./../../../../05tool/ALink");
import ALink = alinkFile.ui.ALinkReact;

export module makeup {
    export class makeupAction extends domCore.DomAction {
    }

    export class makeupReact extends domCore.DomReact<makeupProps, makeupStates, makeupAction> implements domCore.IReact {

        public state = new makeupStates();

        public pSender(): React.ReactElement<any> {
            return <div className="makeup right">
                <a className="acsPointer"><i className="fa fa-comment"></i></a>
                <img src="../lib/akCss/images/user.jpg"/>
                <a onClick={() => { this.fun_PersonShow() } }><span>十八木林森</span>
                <i className={"acsPointer fa fa-sort-desc " + (this.props.Vm.IsPersonShow ? "active":"")}></i></a>
                <ul className={(this.props.Vm.IsPersonShow ? "" : "hide") }>
                    <li><ALink  Vm={new alinkFile.ui.ALinkVm(true) } href="$..$" children={null}>个人信息</ALink></li>
                    <li><ALink  Vm={new alinkFile.ui.ALinkVm(true) } href="$..$" children={null}>修改密码</ALink></li>
                    <li><ALink  Vm={new alinkFile.ui.ALinkVm(true) } href="$..$" children={null}>安全退出</ALink></li>
                    </ul>
            </div>;
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }
        private fun_PersonShow() {
            this.props.Vm.IsPersonShow = !this.props.Vm.IsPersonShow;
            this.forceUpdate();
        }

    }

    export interface ImakeupConfig {


    }

    export class makeupVm extends domCore.DomVm {
        public ReactType = makeupReact;

        //public constrctor(config: ImakeupConfig) {
        //    super();

        //}
        public IsPersonShow: boolean = false;

    }
    export class makeupStates extends domCore.DomStates {
    }


    export class makeupProps extends domCore.DomProps<makeupVm>{
    }



}

