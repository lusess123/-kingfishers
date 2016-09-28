import domFile = require("./../../../../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");

import alinkFile = require("./../../../../05tool/ALink");
import ALink = alinkFile.ui.ALinkReact;

export module headPosRight {
    export class headPosRightAction extends domCore.DomAction {
    }

    export class headPosRightReact extends domCore.DomReact<headPosRightProps, headPosRightStates, headPosRightAction> implements domCore.IReact {

        public state = new headPosRightStates();

        public pSender(): React.ReactElement<any> {
            return <ul className="vertical menu">
                <li className="acsPointer active"><ALink  Vm={new alinkFile.ui.ALinkVm(true) } href="$..$" children={null}>工作平台</ALink></li>
                <li className="acsPointer active"><ALink  Vm={new alinkFile.ui.ALinkVm(true) } href="$..$" children={null}>通讯录</ALink></li>
                <li className="acsPointer active">
                    <ALink  Vm={new alinkFile.ui.ALinkVm(true) } href="$..$" children={null}>我的应用</ALink>
                    <ul>
                        <li className="acsPointer"><ALink  Vm={new alinkFile.ui.ALinkVm(true) } href="$..$" children={null}>通知</ALink></li>
                        <li className="acsPointer"><ALink  Vm={new alinkFile.ui.ALinkVm(true) } href="$..$" children={null}>请假</ALink></li>
                        <li className="acsPointer"><ALink  Vm={new alinkFile.ui.ALinkVm(true) } href="$..$" children={null}>日程</ALink></li>
                        <li className="acsPointer"><ALink  Vm={new alinkFile.ui.ALinkVm(true) } href="$..$" children={null}>加班</ALink></li>
                        <li className="acsPointer"><ALink  Vm={new alinkFile.ui.ALinkVm(true) } href="$..$" children={null}>考勤</ALink></li>
                        <li className="acsPointer"><ALink  Vm={new alinkFile.ui.ALinkVm(true) } href="$..$" children={null}>公告</ALink></li>
                        <li className="acsPointer"><ALink  Vm={new alinkFile.ui.ALinkVm(true) } href="$..$" children={null}>文件</ALink></li>
                        <li className="acsPointer"><ALink  Vm={new alinkFile.ui.ALinkVm(true) } href="$..$" children={null}>请假</ALink></li>
                    </ul>
                </li>
                <li className="acsPointer active">
                    <ALink  Vm={new alinkFile.ui.ALinkVm(true) } href="$..$" children={null}>项目</ALink>
                    <ul>
                        <li className="acsPointer"><ALink  Vm={new alinkFile.ui.ALinkVm(true) } href="$..$" children={null}>车辆管理</ALink></li>
                        <li className="acsPointer"><ALink  Vm={new alinkFile.ui.ALinkVm(true) } href="$..$" children={null}>OA应用平台</ALink></li>
                        <li className="acsPointer"><ALink  Vm={new alinkFile.ui.ALinkVm(true) } href="$..$" children={null}>九腾汽修</ALink></li>
                    </ul>
                </li>
                <li className="acsPointer active">
                    <ALink  Vm={new alinkFile.ui.ALinkVm(true) } href="$..$" children={null}>设置</ALink>
                    <ul>
                        <li className="acsPointer"><ALink  Vm={new alinkFile.ui.ALinkVm(true) } href="$..$" children={null}>个人信息</ALink></li>
                        <li className="acsPointer"><ALink  Vm={new alinkFile.ui.ALinkVm(true) } href="$..$" children={null}>修改密码</ALink></li>
                    </ul>
                </li>
                <li className="acsPointer"><ALink  Vm={new alinkFile.ui.ALinkVm(true) } href="$..$" children={null}>退出</ALink></li>
            </ul>;
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IheadPosRightConfig {


    }

    export class headPosRightVm extends domCore.DomVm {
        public ReactType = headPosRightReact;

        //public constrctor(config: IheadPosRightConfig) {
        //    super();

        //}

    }
    export class headPosRightStates extends domCore.DomStates {
    }


    export class headPosRightProps extends domCore.DomProps<headPosRightVm>{
    }



}

