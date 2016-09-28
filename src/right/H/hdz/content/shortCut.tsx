import domFile = require("./../../../../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import eventFile = require("./../../../../01core/Event");

import alinkFile = require("./../../../../05tool/ALink");
import ALink = alinkFile.ui.ALinkReact;


export module shortcut {
    export class shortcutAction extends domCore.DomAction {

    }

    export class shortcutReact extends domCore.DomReact<shortcutProps, shortcutStates, shortcutAction> implements domCore.IReact {

        public state = new shortcutStates();

        public pSender(): React.ReactElement<any> {
            return <aside className={"shortcut left " + (this.props.Vm.IsShortCutShow ? " hide" : "") }>
                <div>
                    <span>我的应用</span>
                    <span className={"right acsPointer" + (this.props.Vm.IsMinusShow ? " " :" hide")} onClick={() => { this.fun_Mclick() } }>管理</span>
                    <span className={"right acsPointer del-btn" + (this.props.Vm.IsMinusShow ? " hide" : " ") } onClick={() => { this.fun_Mclick()}}>取消</span>
                    <span className={"right acsPointer save-btn" + (this.props.Vm.IsMinusShow ? " hide" : " ") }>保存</span>
                </div>
                <ul className="clearfix">
                    <li className="current">
                        <ALink Vm={new alinkFile.ui.ALinkVm(false, { ClassName: " " }) } href="" children={null}>
                            <img src="../lib/akCss/images/apply/inform.png"/>
                            <span>通知</span>
                            <em className={(this.props.Vm.IsMinusShow ? "" : " hide") }>12</em>
                            <i className={"fa fa-times-circle" + (this.props.Vm.IsMinusShow ? " hide" : " animate") }></i>
                        </ALink>
                    </li>
                    <li className={(this.props.Vm.IsApplyItem ? " hide" : " ") }>
                        <ALink Vm={new alinkFile.ui.ALinkVm(false, { ClassName: " " }) } href="" children={null}>
                            <img src="../lib/akCss/images/apply/schedule.png"/>
                            <span>请假</span>
                            <em className={(this.props.Vm.IsMinusShow ? "" : " hide") }>6</em>
                            <i className={"fa fa-times-circle" + (this.props.Vm.IsMinusShow ? " hide" : " animate") } onClick={() => { this.fun_emptyClick() } }></i>
                        </ALink>
                    </li>
                    <li>
                        <ALink Vm={new alinkFile.ui.ALinkVm(false, { ClassName: " " }) } href="" children={null}>
                            <img src="../lib/akCss/images/apply/schedule.png"/>
                            <span>日程</span>
                            <i className={"fa fa-times-circle" + (this.props.Vm.IsMinusShow ? " hide" : " animate") }></i>
                        </ALink>
                    </li>
                    <li>
                        <ALink Vm={new alinkFile.ui.ALinkVm(false, { ClassName: " " }) } href="" children={null}>
                            <img src="../lib/akCss/images/apply/overtime.png"/>
                            <span>加班</span>
                            <i className={"fa fa-times-circle" + (this.props.Vm.IsMinusShow ? " hide" : " animate") }></i>
                        </ALink>
                    </li>
                    <li>
                        <ALink Vm={new alinkFile.ui.ALinkVm(false, { ClassName: " " }) } href="" children={null}>
                            <img src="../lib/akCss/images/apply/project.png"/>
                            <span>项目</span>
                            <i className={"fa fa-times-circle" + (this.props.Vm.IsMinusShow ? " hide" : " animate") }></i>
                        </ALink>
                    </li>
                    <li>
                        <ALink Vm={new alinkFile.ui.ALinkVm(false, { ClassName: " " }) } href="" children={null}>
                            <img src="../lib/akCss/images/apply/checking-in.png"/>
                            <span>考勤</span>
                            <i className={"fa fa-times-circle" + (this.props.Vm.IsMinusShow ? " hide" : " animate") }></i>
                        </ALink>
                    </li>
                    <li>
                        <ALink Vm={new alinkFile.ui.ALinkVm(false, { ClassName: " " }) } href="" children={null}>
                            <img src="../lib/akCss/images/apply/announcement.png"/>
                            <span>公告</span>
                            <i className={"fa fa-times-circle" + (this.props.Vm.IsMinusShow ? " hide" : " animate") }></i>
                        </ALink>
                    </li>
                    <li>
                        <ALink Vm={new alinkFile.ui.ALinkVm(false, { ClassName: " " }) } href="" children={null}>
                            <img src="../lib/akCss/images/apply/file.png"/>
                            <span>文件</span>
                            <i className={"fa fa-times-circle" + (this.props.Vm.IsMinusShow ? " hide" : " animate") }></i>
                        </ALink>
                    </li>
                    <li onClick={() => { this.fun_limitClick() } }>
                        <ALink Vm={new alinkFile.ui.ALinkVm(false, { ClassName: " " }) } href="" children={null}>
                            <img src="../lib/akCss/images/apply/limits.png"/>
                            <span>权限管理</span>
                            <i className={"fa fa-times-circle" + (this.props.Vm.IsMinusShow ? " hide" : " animate") }></i>
                        </ALink>
                    </li>
                    <li>
                        <ALink Vm={new alinkFile.ui.ALinkVm(false, { ClassName: " " }) } href="" children={null}>
                            <img src="../lib/akCss/images/apply/add.png"/>
                            <span>添加应用</span>
                        </ALink>
                    </li>
                </ul>
            </aside>;
        }

        private fun_Mclick() {
            this.props.Vm.IsMinusShow = !this.props.Vm.IsMinusShow;
            this.forceUpdate();
        }
        //private fun_Dclick() {
        //    this.props.Vm.IsMinusShow = false;
        //    this.forceUpdate();
        //}

        private fun_emptyClick() {
            this.props.Vm.IsApplyItem = true;
            this.forceUpdate();
        }

        public fun_limitClick() {
            this.props.Vm.IsShortCutShow = true;
            this.props.Vm.fun_limitClick();
            this.forceUpdate();
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IshortcutConfig {
        UniId: string;

    }


    export class shortcutVm extends domCore.DomVm {
        public ReactType = shortcutReact;

        public IsShortCutShow: boolean = false;
        public IsMinusShow: boolean = true;
        public IsApplyItem: boolean = false;
        public IsApplyBtn: boolean = false;
        public UniId: string;


        public fun_limitClick() {
            this.emitAppEvent("_shortcut", this.UniId);
        }

        public constructor(config?: IshortcutConfig) {
            super();
            if (config) {
                this.UniId = config.UniId;
            }

        }

    }
    export class shortcutStates extends domCore.DomStates {
    }


    export class shortcutProps extends domCore.DomProps<shortcutVm>{
    }



}

