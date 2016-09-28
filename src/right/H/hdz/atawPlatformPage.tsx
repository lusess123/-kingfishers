import domFile = require("./../../../01core/0Dom");import React = require("react");
  
import iocFile = require("./../../../01core/Ioc");
 
  
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import basewedPageFile = require("./../../../04page/BaseWebPage");
import eventFile = require("./../../../01core/Event");

import headFile = require("./head/head");
import head = headFile.head.headReact;
import headVm = headFile.head.headVm;

import contentFile = require("./content/content");
import content = contentFile.content.contentReact;
import contentVm = contentFile.content.contentVm;

import headPosRightFile = require("./head/head_right");
import headPosRight = headPosRightFile.headPosRight.headPosRightReact;
import headPosRightVm = headPosRightFile.headPosRight.headPosRightVm;

export module atawPlatformPage {
    export class atawPlatformPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class atawPlatformPageReact extends basewedPageFile.Web.BaseWebPageReact<atawPlatformPageProps, atawPlatformPageStates, atawPlatformPageAction> implements domCore.IReact {

        public state = new atawPlatformPageStates();
        public pSender(): React.ReactElement<any> {
            return <div className="off-canvas-wrapper">
                <div className={"off-canvas-wrapper-inner " + (this.props.Vm.ToggleIconShow ? "is-open-right" : "") }>
                    <div className="off-canvas position-right is-open">
                        {this.props.Vm.HeadPosRightObj.intoDom() }
                    </div>
                    <div className="off-canvas-content">
                        {this.props.Vm.HeadObj.intoDom() }
                        {this.props.Vm.ContentObj.intoDom() }
                    </div>
                </div>
            </div>;
        }






    }
    export interface IatawPlatformPageConfig {
        IcontentConfig: contentFile.content.IcontentConfig;

    }
    export class atawPlatformPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = atawPlatformPageReact;

        public HeadObj: headVm = new headVm();
        public ContentObj: contentVm;
        public HeadPosRightObj: headPosRightVm = new headPosRightVm();

        public ToggleIconShow: boolean = false;
        public UniId: string;

        
        public constructor(config?: IatawPlatformPageConfig) {
            super();
            this.UniId = eventFile.App.getUniId().toString();
            this.HeadObj.TitleObj.UniId = this.UniId;
            //this.Cont_LeftId = eventFile.App.getUniId().toString();
            if (config) {
                this.ContentObj = new contentVm(config.IcontentConfig);
            } else {
                var config1: IatawPlatformPageConfig = { IcontentConfig: { IshortcutConfig: { UniId: this.UniId }, IleftMenuConfig: { UniId: this.UniId } } }
                this.ContentObj = new contentVm(config1.IcontentConfig);
            }


            this.listenAppEvent("_title_toggle", this.UniId, (rowIndex: number) => {
                this.ToggleIconShow = !this.ToggleIconShow;
                this.forceUpdate("");
            });


        }
    }
    export class atawPlatformPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class atawPlatformPageProps extends basewedPageFile.Web.BaseWebPageProps<atawPlatformPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("ATAWPLATFORMPAGE", basewedPageFile.Web.BaseWebPageVm, atawPlatformPageVm);

}

