import domFile = require("./../../../../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import eventFile = require("./../../../../01core/Event");

import shortcutFile = require("./shortCut");
import shortcut = shortcutFile.shortcut.shortcutReact;
import shortcutVm = shortcutFile.shortcut.shortcutVm;

import leftMenuFile = require("./leftmenu");
import leftMenu = leftMenuFile.leftMenu.leftMenuReact;
import leftMenuVm = leftMenuFile.leftMenu.leftMenuVm;

import mainFile = require("./main");
import main = mainFile.main.mainReact;
import mainVm = mainFile.main.mainVm;

import mainTableFile = require("./main_table");
import mainTable = mainTableFile.mainTable.mainTableReact;
import mainTableVm = mainTableFile.mainTable.mainTableVm;

//import appCenterFile = require("./appCenter");
//import appCenter = appCenterFile.appCenter.appCenterReact;
//import appCenterVm = appCenterFile.appCenter.appCenterVm;

export module content {
    export class contentAction extends domCore.DomAction {
    }

    export class contentReact extends domCore.DomReact<contentProps, contentStates, contentAction> implements domCore.IReact {

        public state = new contentStates();

        public pSender(): React.ReactElement<any> {
            return <div className="content clearfix">
                {this.props.Vm.ShortCutObj.intoDom() }
                {this.props.Vm.LeftMenuObj.intoDom() }
                <div className={"main-content left acsWhiteBg" + (this.props.Vm.IsMainShow ? " hide" :" ")}>{this.props.Vm.MainObj.intoDom() }</div>
                <div className={"main-table left" + (this.props.Vm.IsMainTableShow ? " " : " hide") }>{this.props.Vm.MainTableObj.intoDom() }</div>
                <div className={"main-appcenter left" + (this.props.Vm.IsAppCenterShow?"":" hide")}></div>
                
            </div>;
        }
        //{this.props.Vm.MainObj.intoDom() }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IcontentConfig {
        IshortcutConfig: shortcutFile.shortcut.IshortcutConfig;
        IleftMenuConfig: leftMenuFile.leftMenu.IleftMenuConfig;
    }

    export class contentVm extends domCore.DomVm {
        public ReactType = contentReact;

        public ShortCutObj: shortcutVm ;
        public LeftMenuObj: leftMenuVm;
        public MainObj: mainVm = new mainVm();
        public MainTableObj: mainTableVm = new mainTableVm();
       // public AppCenterObj: appCenterVm = new appCenterVm();

        public IsMainShow: boolean = false;
        public IsMainTableShow: boolean = false;
        public IsAppCenterShow: boolean = false;
        public UniId: string;


        public constructor(config?: IcontentConfig) {
            super();
            
            this.ShortCutObj = new shortcutVm(config.IshortcutConfig);
            this.LeftMenuObj = new leftMenuVm(config.IleftMenuConfig);
            this.listenAppEvent("_shortcut", config.IshortcutConfig.UniId, (rowIndex: number) => {
                this.IsMainTableShow = !this.IsMainTableShow;
                this.IsMainShow = !this.IsMainShow;
                this.IsAppCenterShow = !this.IsAppCenterShow;
                this.forceUpdate("");
            });

           // this.AppCenterObj = new appCenterVm(config.IshortcutConfig);
            this.listenAppEvent("_topbar", config.IshortcutConfig.UniId, (rowIndex: number) => {
                this.IsAppCenterShow = !this.IsAppCenterShow;
                this.forceUpdate("");
            });
        }

    }
    export class contentStates extends domCore.DomStates {
    }


    export class contentProps extends domCore.DomProps<contentVm>{
    }



}

