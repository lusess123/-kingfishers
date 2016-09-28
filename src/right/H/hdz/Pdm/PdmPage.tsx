import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
//import domFile = require("./../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import basewedPageFile = require("./../../../../04page/BaseWebPage");
import React = require("react");
import ReactDOM = require("react-dom");
import ModalDomFile = require("./../../../../05tool/Modal/ModalDom");

import PdmTable = require("./PdmTableDom");

export module PdmPage {
    export class PdmPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class PdmPageReact extends basewedPageFile.Web.BaseWebPageReact<PdmPageProps, PdmPageStates, PdmPageAction> implements domCore.IReact {

        public state = new PdmPageStates();
        public pSender(): React.ReactElement<any> {
            return <div className="m-t Hm-pdm">
                <div className="col-lg-3">
                    <div className="panel panel-primary pd0"  onClick={() => { this.newOpt("panel") } }>
                        <div className="panel-heading"><strong>评论表</strong></div>
                        <ul className="panel-body">
                            <li><span>编号</span><u>varchar(50) </u><u>pk</u></li>
                            <li><span>资源编号</span><span>varchar(50) </span></li>
                            <li><span>资源类型</span><span>varchar(50) </span></li>
                            <li><span>内容</span><span>varchar(Max) </span></li>
                            <li><span>评论发表人</span><span>varchar(50) </span></li>
                            <li><span>回复数量</span><span>int </span></li>
                        </ul>
                        </div>
                    </div>
                <div className="col-lg-3">
                    <div className=" panel panel-success pd0" onClick={() => { this.newOpt("comment") } }>
                        <div className="panel-heading"><strong>评论资源表</strong></div>
                        <ul className="panel-body">
                            <li><span>编号</span><u>varchar(50) </u><u>pk</u></li>
                            <li><span>资源类型</span><span>varchar(50) </span></li>
                            <li><span>评论数量</span><span>int </span></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="panel panel-success pd0" onClick={() => { this.newOpt("reply") } }>
                        <div className="panel-heading"><strong>回复表</strong></div>
                        <ul className="panel-body">
                            <li><span>编号</span><u>varchar(50) </u><u>pk</u></li>
                            <li><span>评论编号</span><span>varchar(50) </span></li>
                            <li><span>回复发表人</span><span>varchar(50) </span></li>
                            <li><span>回复接收人</span><span>varchar(50) </span></li>
                            <li><span>回复内容</span><span>varchar(Max) </span></li>
                        </ul>
                    </div>
                </div>
                {this.props.Vm.ModalObj.intoDom() }
            </div>;
        }

        public newOpt(vals: string) {
            this.props.Vm.openModal();
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IReactPdmPageVm extends basewedPageFile.Web.BaseWebPageVm {
        ModalObj: ModalDomFile.ModalDom.ModalDomVm;
        openModal(): void;
        PdmTableObj: PdmTable.PdmTableDom.PdmTableDomVm;
    }

    export interface IPdmPageConfig {
        UniId?: string;

    }
    export class PdmPageVm extends basewedPageFile.Web.BaseWebPageVm implements IReactPdmPageVm {
        public ReactType = PdmPageReact;
        public Title: string = "PdmPage页面;";

        public ModalObj: ModalDomFile.ModalDom.ModalDomVm;
        public PdmTableObj: PdmTable.PdmTableDom.PdmTableDomVm = new PdmTable.PdmTableDom.PdmTableDomVm();

        public UniId: string;
        public constructor(config?: IPdmPageConfig) {
            super();
            if (config) {
                this.UniId = config.UniId;

            }

            var mconfig: ModalDomFile.ModalDom.IModalDomConfig = {
                Title: "评论表",
                ModalShowingFun: (a, callback) => {
                    a.DomObj = this.PdmTableObj;
                    callback();
                },
                ModalCloseFun: (a) => {
                    a.DomObj = null;
                },
                Width: "80%"
            };

            this.ModalObj = new ModalDomFile.ModalDom.ModalDomVm(mconfig);
            
        }

        public openModal() {
            this.ModalObj.open();
        }

        private init(config: IPdmPageConfig) {
        }

        protected loadPage(callback?: () => any) {
            if (callback) {
                callback();
            }
        }

    }
    export class PdmPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class PdmPageProps extends basewedPageFile.Web.BaseWebPageProps<IReactPdmPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("PDMPAGE", basewedPageFile.Web.BaseWebPageVm, PdmPageVm);

}