import domFile = require("./../../../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");

export module HWorkNewMsg {
    export class HWorkNewMsgAction extends domCore.DomAction {
    }

    export class HWorkNewMsgReact extends domCore.DomReact<HWorkNewMsgProps, HWorkNewMsgStates, HWorkNewMsgAction> implements domCore.IReact {

        public state = new HWorkNewMsgStates();

        public pSender(): React.ReactElement<any> {
            return <div className="acs-newinfo">
                <ul>
                    <div>
                        <span>10月2日</span>
                        <span>13: 45</span>
                        </div>
                    <a className="button tiny years">2015</a>
                    <li className="acsPaddingT3-75">
                    <div className="cusp">
                        <div>
                              <img src="../lib/akCss/images/user.jpg"/>
                              <span>信使系统管理员</span>
                            </div>
                            <div>                                <span>处理了流程： 信使系统管理员2015/10/29请假 步骤：请假流程-部门主管审批信使                                系统管理员</span></div>
                        </div>
                        <em></em>
                    </li>
                    </ul>
                <ul>
                    <div>
                        <span>10月2日</span>
                        <span>13:45</span></div>
                    <li>
                    <div className="cusp">
                        <div>
                            <img src="../lib/akCss/images/user.jpg"/>
                              <span>信使系统管理员</span>
                            </div>
                            <div>                                <span>处理了流程： 信使系统管理员2015/10/29请假 步骤：请假流程-部门主管审批信使                                    系统管理员</span>
                                <img className="acsImg-70X70 acsMarginR0-625" src="../lib/akCss/images/img1.png"/>
                                <img className="acsImg-70X70 acsMarginR0-625" src="../lib/akCss/images/img2.png"/>
                                <img className="acsImg-70X70 acsMarginR0-625" src="../lib/akCss/images/img3.png"/>
                                <img className="acsImg-70X70 acsMarginR0-625" src="../lib/akCss/images/img4.png"/>
                                <img className="acsImg-70X70 acsMarginR0-625" src="../lib/akCss/images/img5.png"/>
                                <img className="acsImg-70X70" src="../lib/akCss/images/img6.png"/>
                                </div>
                        </div>
                        <em></em>
                        </li>
                    </ul>
                <ul><div>
                    <span>10月2日</span>
                    <span>13: 45</span></div>
                    <li className="acsPaddingB3-625">
                    <div className="cusp">
                        <div>
                             <img src="../lib/akCss/images/user.jpg"/>
                              <span>信使系统管理员</span>
                            </div>
                            <div>                                <span>处理了流程： 信使系统管理员2015/10/29请假 步骤：请假流程-部门主管审批信使                                系统管理员</span>
                                </div>
                        </div>
                        <em></em>
                        </li>                     
                    </ul>
                 <a className="button" >加载更多</a>
                </div>;
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }

    }
    export class HWorkNewMsgVm extends domCore.DomVm {
        public ReactType = HWorkNewMsgReact;

        public IsCollect: boolean;



    }
    export class HWorkNewMsgStates extends domCore.DomStates {
    }


    export class HWorkNewMsgProps extends domCore.DomProps<HWorkNewMsgVm>{
    }



}