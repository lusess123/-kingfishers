import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");

import baseColFile = require("./../../../../02col/00core/BaseCol");
import comboFile = require("./../../../../02col/02Mulite/Combo");
import dataFile = require("./../data");
import modalFile = require("./../../../../05tool/Modal/ModalDom");
import textAreaFile = require("./../../../../02col/01single/DetailArea");
import kvFile = require("./../../../../07data/Kv");

export module AuthorizeObjectDetailDom {
    export class AuthorizeObjectDetailDomAction extends domCore.DomAction {
    }

    export class AuthorizeObjectDetailDomReact extends domCore.DomReact<AuthorizeObjectDetailDomProps, AuthorizeObjectDetailDomStates, AuthorizeObjectDetailDomAction> implements domCore.IReact {

        public state = new AuthorizeObjectDetailDomStates();

        public pSender(): React.ReactElement<any> {
            return <div>
                {this._initContent() }
            </div>;
        }

        public _initContent(): React.ReactElement<any> {
            return <div>
                <div className="YSm-table-btngroup">
                    <b>授权对象</b>
                </div>
                <div>
                    {this.props.Vm.SelectedUserList.map((a) => {
                        return <span>{a.DisplayName}</span>
                    }) }
                </div>
            </div>;
        }


        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IReactAuthorizeObjectDetailDomVm extends domCore.DomVm {
        ColVmObjList: IColVmDic;
        SelectedUserList: dataFile.Data.IUserData[];


    }

    export interface IColVmDic {
        [name: string]: baseColFile.Core.BaseColVm;
    }

    export interface IAuthorizeObjectDetailDomConfig {
        UserSelectorData?: dataFile.Data.IUserSelectorData;
        UniId?: string;
        SelectedUserList?: dataFile.Data.IUserData[];
    }

    export class AuthorizeObjectDetailDomVm extends domCore.DomVm implements IReactAuthorizeObjectDetailDomVm {
        public ReactType = AuthorizeObjectDetailDomReact;

        public ColVmObjList: IColVmDic = {};
        public SelectedUserList: dataFile.Data.IUserData[] = [];
        public SelectedValue: string;
        public UniId: string;

        public constructor(config?: IAuthorizeObjectDetailDomConfig) {
            super();
            var selectorDomObjConfig = {};
            if (config) {
                this.UniId = config.UniId;
                selectorDomObjConfig = { UserSelectorData: config.UserSelectorData, UniId: this.UniId };
            }
        }
        public init(config?: IAuthorizeObjectDetailDomConfig) {
            if (config.SelectedUserList) {
                this.SelectedUserList = config.SelectedUserList;
            }
        }


    }
    export class AuthorizeObjectDetailDomStates extends domCore.DomStates {
    }


    export class AuthorizeObjectDetailDomProps extends domCore.DomProps<IReactAuthorizeObjectDetailDomVm>{
    }



}


