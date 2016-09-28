import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");

import dataFile = require("./../Data");
import masterRowFile = require("./UserDetailMaterRowDom")

export module UserDetailRowDom {
    export class UserDetailRowDomAction extends domCore.DomAction {
    }

    export class UserDetailRowDomReact extends domCore.DomReact<UserDetailRowDomProps, UserDetailRowDomStates, UserDetailRowDomAction> implements domCore.IReact {

        public state = new UserDetailRowDomStates();

        public pSender(): React.ReactElement<any> {
            return <div>
                <div className="title Hu-pointer" onClick={() => { this.fun_itemTitleClick(); } }>{this.props.Vm.Index + 1}<i className={"fa fa-angle-double-" + (this.props.Vm.IsItemFormHide ? "up" : "down") }></i></div>
                <div className={this.props.Vm.IsItemFormHide ? "hide" : "Hm-toggle-item"}>
                    {this.props.Vm.MasterRow.intoDom() }
                </div>
            </div>;

        }

        private fun_rowTitleClick() {
            this.props.Vm.IsRowFormHide = !this.props.Vm.IsRowFormHide;
            this.forceUpdate();
        }


        private fun_itemTitleClick() {
            this.props.Vm.IsItemFormHide = !this.props.Vm.IsItemFormHide;
            this.forceUpdate();
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface UserDetailRowDomConfig {
        DetailListData: dataFile.User.UserData[];
        MasterConfig: masterRowFile.UserDetailMaterRowDomVm.UserDetailMaterRowDomConfig;
    }

    export class UserDetailRowDomVm extends domCore.DomVm {
        public ReactType = UserDetailRowDomReact;

        public IsRowFormHide: boolean;
        public Index: number;
        public IsItemFormHide: boolean;

        public MasterRow: masterRowFile.UserDetailMaterRowDomVm.UserDetailMaterRowDomVm;

        public constructor(config?: UserDetailRowDomConfig) {
            super();
            if (config) {
                this.MasterRow = new masterRowFile.UserDetailMaterRowDomVm.UserDetailMaterRowDomVm(config.MasterConfig); 
            }
        }

    }
    export class UserDetailRowDomStates extends domCore.DomStates {
    }


    export class UserDetailRowDomProps extends domCore.DomProps <UserDetailRowDomVm>{
    }



}


