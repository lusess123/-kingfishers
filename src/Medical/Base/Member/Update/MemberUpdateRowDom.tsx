import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import masterRowFile = require("./MemberUpdateMasterRowDom");
import eventFile = require("./../../../../01core/Event");
import dataFile = require("./../Data");


export module MemberUpdateRowDom {
    export class MemberUpdateRowDomAction extends domCore.DomAction {
    }

    export class MemberUpdateRowDomReact extends domCore.DomReact<MemberUpdateRowDomProps, MemberUpdateRowDomStates, MemberUpdateRowDomAction> implements domCore.IReact {

        public state = new MemberUpdateRowDomStates();

        public pSender(): React.ReactElement<any> {
            return <div>
                <div className={this.props.Vm.IsMasterHide ? "hide" : "acs-toggle-item"}>
                    {this.props.Vm.MasterRow.intoDom() }
                </div>
            </div>;
        }



        protected pComponentDidMount() {
            super.pComponentDidMount();

        }

        private fun_detailTitleClick() {
            this.props.Vm.IsDetailHide = !this.props.Vm.IsDetailHide;
            this.forceUpdate();
        }
        private fun_masterTitleClick() {
            this.props.Vm.IsMasterHide = !this.props.Vm.IsMasterHide;
            this.forceUpdate();
        }



    }

    export interface IMemberUpdateRowDomConfig {
        MasterConfig: masterRowFile.MemberUpdateMasterRowDom.IMemberUpdateMasterRowDomConfig;

    }
 


    export class MemberUpdateRowDomVm extends domCore.DomVm {
        public ReactType = MemberUpdateRowDomReact;

        public MasterRow: masterRowFile.MemberUpdateMasterRowDom.MemberUpdateMasterRowDomVm = new masterRowFile.MemberUpdateMasterRowDom.MemberUpdateMasterRowDomVm();

        public IsMasterHide: boolean;
        public IsDetailHide: boolean;

        public DelFidList: string[] = [];

        public Index: number;

        public UniId: string = "";

        public constructor(config?: IMemberUpdateRowDomConfig) {
            super();
            this.UniId = eventFile.App.getUniId().toString();

            if (config) {
                config.MasterConfig.UniId = this.UniId;
                this.MasterRow = new masterRowFile.MemberUpdateMasterRowDom.MemberUpdateMasterRowDomVm(config.MasterConfig);
                };
        }
        public legal(): boolean {
            var _isres: boolean = this.MasterRow.legal();
            return _isres;
        }

        public getData(): dataFile.Member.IMemberData {
            var _data = this.MasterRow.RowData;
            return _data;
        }
    }
    export class MemberUpdateRowDomStates extends domCore.DomStates {
    }


    export class MemberUpdateRowDomProps extends domCore.DomProps<MemberUpdateRowDomVm>{
    }



}


