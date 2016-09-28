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
import userSelectorFile = require("./AppraisalTemplateAuthUserSelectorDom");
import textAreaFile = require("./../../../../02col/01single/DetailArea");
import kvFile = require("./../../../../07data/Kv");

export module AuthorizeObjectDom {
    export class AuthorizeObjectDomAction extends domCore.DomAction {
    }

    export class AuthorizeObjectDomReact extends domCore.DomReact<AuthorizeObjectDomProps, AuthorizeObjectDomStates, AuthorizeObjectDomAction> implements domCore.IReact {

        public state = new AuthorizeObjectDomStates();

        public pSender(): React.ReactElement<any> {
            return <div>
                {this._initContent() }
                {this.props.Vm.ModalObj.intoDom() }
            </div>;
        }

        public _initContent(): React.ReactElement<any> {
            return <div>
                <div className="YSm-table-btngroup">
                    <b>授权对象</b>
                    <a className="btn btn-sm btn-primary pull-right" onClick={() => { this.newOpt("new"); } }>添加</a>
                </div>
                <div className="p-a YSu-default-border">
                    {this.props.Vm.SelectedUserList.map((a) => {
                        return <span className="YSu-checked">{a.DisplayName}<i className="fa fa-remove" onClick={() => { this.deleteItem(a.UserId) } }></i><span>    </span></span>
                    }) }
                </div>
            </div>;
        }

        private deleteItem(id: string) {
            this.props.Vm.SelectedUserList = this.props.Vm.SelectedUserList.filter((row) => {
                return row.UserId != id
            });
            this.forceUpdate();
        }

        public newOpt(vals: string) {
            this.props.Vm.openModal();
        }


        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IReactAuthorizeObjectDomVm extends domCore.DomVm {
        ColVmObjList: IColVmDic;
        ModalObj: modalFile.ModalDom.ModalDomVm;
        openModal(): void;
        SelectedUserList: dataFile.Data.IUserData[];


    }

    export interface IColVmDic {
        [name: string]: baseColFile.Core.BaseColVm;
    }

    export interface IAuthorizeObjectDomConfig {
        UserSelectorData?: dataFile.Data.IUserSelectorData;
        UniId?: string;
        SelectedUserList?: dataFile.Data.IUserData[];
    }

    export class AuthorizeObjectDomVm extends domCore.DomVm implements IReactAuthorizeObjectDomVm {
        public ReactType = AuthorizeObjectDomReact;

        public ColVmObjList: IColVmDic = {};
        // public RowData: any = {};
        public ModalObj: modalFile.ModalDom.ModalDomVm;
        public SelectorDom: userSelectorFile.AppraisalTemplateAuthUserSelectorDom.AppraisalTemplateAuthUserSelectorDomVm;
        public SelectedUserList: dataFile.Data.IUserData[] = [];
        public SelectedValue: string;
        public UniId: string;

        public constructor(config?: IAuthorizeObjectDomConfig) {
            super();
            var selectorDomObjConfig = {};
            if (config) {
                this.UniId = config.UniId;
                selectorDomObjConfig = { UserSelectorData: config.UserSelectorData, UniId: this.UniId };
            }
            this.SelectorDom = new userSelectorFile.AppraisalTemplateAuthUserSelectorDom.AppraisalTemplateAuthUserSelectorDomVm(selectorDomObjConfig);
            this.init(config);

            var mconfig: modalFile.ModalDom.IModalDomConfig = {
                Title: "选择人员",
                ModalShowingFun: (a, callback) => {
                    a.DomObj = this.SelectorDom;
                    callback();
                },
                ModalCloseFun: (a) => {
                    a.DomObj = null;
                },
                Width: "65%"
            };

            this.ModalObj = new modalFile.ModalDom.ModalDomVm(mconfig);
            this.listenAppEvent("AppraisalTemplateAuthUserSelectorSave", this.UniId, () => {
                var selectedValue = this.SelectorDom.UserListboxObj.dataValueGet();
                this.ModalObj.close();
                urlFile.Core.AkPost("/HospPerformance/UserSelector/FetchSelectedUsers", { userIds: selectedValue }, (data) => {
                    var _data = data.Data;
                    if (_data) {
                        this.SelectedUserList = _data;
                        this.forceUpdate("");

                    }
                });
            });
        }
        public init(config?: IAuthorizeObjectDomConfig) {
            if (config.SelectedUserList) {
                this.SelectedUserList = config.SelectedUserList;
                var valueList = [];
                this.SelectedUserList.forEach(a => {
                    valueList.push("'" + a.UserId + "'");
                });
                this.SelectedValue = valueList.join(",");
            }
            this.SelectorDom.initListBox({ SelectedValue: this.SelectedValue });
        }

        public openModal() {

            this.ModalObj.open();
        }

        public getData() {
            var idList = [];
            this.SelectedUserList.forEach(a => {
                idList.push(a.UserId)
            });
            return idList;
        }

    }
    export class AuthorizeObjectDomStates extends domCore.DomStates {
    }


    export class AuthorizeObjectDomProps extends domCore.DomProps<IReactAuthorizeObjectDomVm>{
    }



}


