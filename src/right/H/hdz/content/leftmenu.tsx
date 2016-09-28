import domFile = require("./../../../../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import eventFile = require("./../../../../01core/Event");
import alinkFile = require("./../../../../05tool/ALink");
import ALink = alinkFile.ui.ALinkReact;
import treeFile = require("./../../../../05tool/tree");
import TreeReact = treeFile.ui.TreeReact;
import TreeNodeVm = treeFile.ui.TreeNodeVm;

import shortcutFile = require("./shortCut");
import shortcut = shortcutFile.shortcut.shortcutReact;
import shortcutVm = shortcutFile.shortcut.shortcutVm;

export module leftMenu {
    export class leftMenuAction extends domCore.DomAction {
    }

    export class leftMenuReact extends domCore.DomReact<leftMenuProps, leftMenuStates, leftMenuAction> implements domCore.IReact {

        public state = new leftMenuStates();

        public pSender(): React.ReactElement<any> {
            return <div className="left-menu left " >
                <div className={(this.props.Vm.IsLeftMenuShow ? "" : "hide ") }>
                    <div className="pro-name"><img src="../lib/akCss/images/apply/limits.png"/><strong>权限管理</strong></div>
                    {this.props.Vm.MenuObj.intoDom() }
                </div>
                <div className="hide-for-xxlarge hide-for-xlarge hide-for-large hide-for-medium">
                    <div><strong className="acsPointer" onClick={() => { this.fun_MenuTitleClick() } }>权限管理</strong></div>
                    <ul className={"menu clearfix " + (this.props.Vm.IsMenuShow ? "hide" : "is-open") }>
                        <li className="acsPointer"><ALink Vm={new alinkFile.ui.ALinkVm(false, { ClassName: "active" }) } href="$FEED$" children={null}>基础机构管理</ALink></li>
                        <li className="acsPointer"><ALink Vm={new alinkFile.ui.ALinkVm(true) } href="" children={null}>自定义菜单管理</ALink></li>
                        <li className="acsPointer"><ALink Vm={new alinkFile.ui.ALinkVm(true) } href="" children={null}>图标信息</ALink></li>
                        <li className="acsPointer"><ALink Vm={new alinkFile.ui.ALinkVm(true) } href="" children={null}>日志信息</ALink></li>
                        <li className="acsPointer"><ALink Vm={new alinkFile.ui.ALinkVm(true) } href="" children={null}>产品管理</ALink></li>
                        <li className="acsPointer"><ALink Vm={new alinkFile.ui.ALinkVm(true) } href="" children={null}>系统控制单元配置</ALink></li>
                        <li className="acsPointer"><ALink Vm={new alinkFile.ui.ALinkVm(true) } href="" children={null}>用户管理</ALink></li>
                        <li className="acsPointer"><ALink Vm={new alinkFile.ui.ALinkVm(true) } href="" children={null}>基础菜单</ALink></li>
                        <li className="acsPointer"><ALink Vm={new alinkFile.ui.ALinkVm(true) } href="" children={null}>角色管理</ALink></li>
                    </ul>
                </div>
            </div>;
        }

        private fun_MenuTitleClick() {
            this.props.Vm.IsMenuShow = !this.props.Vm.IsMenuShow;
            this.forceUpdate();
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IleftMenuConfig {
        UniId: string;
    }

    export class leftMenuVm extends domCore.DomVm {
        public ReactType = leftMenuReact;

        public ShortCutObj: shortcutVm = new shortcutVm();
        public MenuObj: treeFile.ui.TreeVm;

        public IsMenuShow: boolean = false;
        public IsLeftMenuShow: boolean = false;
        public UniId: string;


        public constructor(config?: IleftMenuConfig) {
            super();

            if (config) {
                this.ShortCutObj.UniId = config.UniId;
            }


            this.listenAppEvent("_shortcut", this.ShortCutObj.UniId, (rowIndex: number) => {
                this.IsLeftMenuShow = true;
                this.forceUpdate("");
            });

            //菜单
            this.MenuObj = new treeFile.ui.TreeVm({ StyleName: "East" });
            this.MenuObj.initTreeVm(
                {
                    CODE_VALUE: "0", CODE_TEXT: "根",
                    Children: [
                        {
                            CODE_VALUE: "key1", CODE_TEXT: "自定义菜单管理",
                        },
                        {
                            CODE_VALUE: "key2", CODE_TEXT: "图标信息",
                        },
                        {
                            CODE_VALUE: "key3", CODE_TEXT: "日志信息",
                        },
                        {
                            CODE_VALUE: "key4", CODE_TEXT: "产品管理",
                        },
                        {
                            CODE_VALUE: "key5", CODE_TEXT: "系统控制单元配置",
                        },
                        {
                            CODE_VALUE: "key6", CODE_TEXT: "用户管理",
                        },
                        {
                            CODE_VALUE: "key7", CODE_TEXT: "基础菜单",
                        },
                        {
                            CODE_VALUE: "key8", CODE_TEXT: "菜单同意设置",
                        },
                        {
                            CODE_VALUE: "key9", CODE_TEXT: "基础机构管理",
                        },
                        {
                            CODE_VALUE: "key10", CODE_TEXT: "角色管理",
                            Children: [
                                { CODE_VALUE: "$menu$", CODE_TEXT: "自定义菜单管理" },
                                { CODE_VALUE: "$menu$", CODE_TEXT: "图标信息" },
                            ]
                        }
                    ]
                }
            );


        }

    }
    export class leftMenuStates extends domCore.DomStates {
    }


    export class leftMenuProps extends domCore.DomProps<leftMenuVm>{
    }



}

