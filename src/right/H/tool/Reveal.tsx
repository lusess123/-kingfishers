import domFile = require("./../../../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");

export module Reveal {
    export class RevealAction extends domCore.DomAction {
    }

    export class RevealReact extends domCore.DomReact<RevealProps, RevealStates, RevealAction> implements domCore.IReact {

        public state = new RevealStates();

        private fun_ModalClick()
        {
            this.props.Vm.IsModalShow = !this.props.Vm.IsModalShow;
            this.forceUpdate();
        }

        public pSender(): React.ReactElement<any> {
            return <div className={"Hm-modals Hg-width acsMaxWidth100 " + (this.props.Vm.IsModalShow ? "" :"hide")} >
                <div className="Hm-modals Hm-modals-shape Hg-relative">
                    <h4>{this.props.Vm.Title}</h4>
                    <div className="acs-form clearfix">

                        <div className="large-4 small-12 columns">
                            <div className="pull-left Hu-label">
                                <label className="right">{this.props.Vm.LabelName}</label>
                            </div>
                            <div className="pull-left Hu-input">
                                <input type="text" placeholder="请输入..."/>
                            </div>
                        </div>

                    </div>
                    <a className="Hu-close Hu-pointer" onClick={() => this.fun_ModalClick() }><i className="fa fa-close"></i></a>
                    <div className="acsTextC acsMarginT3"><a className="button">确定</a></div>
                </div>
            </div>;
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IRevealVm {
        Title?: string;
        LabelName?: string;
        IsModalShow: boolean;
    }

    export class RevealVm extends domCore.DomVm {
        public ReactType = RevealReact;

        public Title: string = "";
        public LabelName: string = "";

        public IsModalShow: boolean = false;

        public constructor(config:IRevealVm)
        {
            super();
            if (config.Title){
                this.Title = config.Title;
            }
            if (config.LabelName) {
                this.LabelName = config.LabelName;
            }
        }
    }
    export class RevealStates extends domCore.DomStates {
    }


    export class RevealProps extends domCore.DomProps<RevealVm>{
    }



}
