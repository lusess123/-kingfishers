import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import eventFile = require("./../../../../01core/Event");

import dataFile = require("./../Data");
import masterRowFile = require("./UserUpdateMasterRowDom");

export module UserUpdateRowDom {
    export class UserUpdateRowDomAction extends domCore.DomAction {
    }

    export class UserUpdateRowDomReact extends domCore.DomReact<UserUpdateRowDomProps, UserUpdateRowDomStates, UserUpdateRowDomAction> implements domCore.IReact {

        public state = new UserUpdateRowDomStates();

        public pSender(): React.ReactElement<any> {
            return <div>
                <div className="title Hu-pointer" onClick={() => { this.fun_masterTitleClick(); } }>{this.props.Vm.Index + 1}<i className={"fa fa-angle-double-" + (this.props.Vm.IsMasterHide ? "up" : "down") }></i></div>
                <div className={this.props.Vm.IsMasterHide ? "hide" : ""}>
                    {this.props.Vm.MasterRow.intoDom() }
                </div>
            </div>;
        }

        private fun_detailTitleClick() {
            this.props.Vm.IsDetailHide = !this.props.Vm.IsDetailHide;
            this.forceUpdate();
        }
        private fun_masterTitleClick() {
            this.props.Vm.IsMasterHide = !this.props.Vm.IsMasterHide;
            this.forceUpdate();
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface UserUpdateRowDomConfig {
        MasterConfig: masterRowFile.UsersUpdateMasterRowDom.UserUpdateMasterRowDomConfig;

    }

    export class UserUpdateRowDomVm extends domCore.DomVm {
        public ReactType = UserUpdateRowDomReact;

        public IsMasterHide: boolean;
        public IsDetailHide: boolean;

        public DelFidList: string[] = [];

        public Index: number;

        public UniId: string = "";

        public MasterRow: masterRowFile.UsersUpdateMasterRowDom.UserUpdateMasterRowDomVm = new masterRowFile.UsersUpdateMasterRowDom.UserUpdateMasterRowDomVm();

        public constructor(config?: UserUpdateRowDomConfig) {
            super();
            this.UniId = eventFile.App.getUniId().toString();

            if (config) {
                config.MasterConfig.UniId = this.UniId;
                this.MasterRow = new masterRowFile.UsersUpdateMasterRowDom.UserUpdateMasterRowDomVm(config.MasterConfig);
            };
        }

        public legal(): boolean {
            var _isres: boolean = this.MasterRow.legal();
            return _isres;
        }

        public getData(): dataFile.User.UserData {
            var _data = this.MasterRow.getData();
            return _data;
        }

    }
    export class UserUpdateRowDomStates extends domCore.DomStates {
    }


    export class UserUpdateRowDomProps extends domCore.DomProps<UserUpdateRowDomVm>{
    }



}


