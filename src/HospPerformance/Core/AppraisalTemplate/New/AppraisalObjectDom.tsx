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
import userSelectorFile = require("./AppraisalTemplateUserSelectorDom");
import textAreaFile = require("./../../../../02col/01single/DetailArea");
import kvFile = require("./../../../../07data/Kv");

export module AppraisalObjectDom {
    export class AppraisalObjectDomAction extends domCore.DomAction {
    }

    export class AppraisalObjectDomReact extends domCore.DomReact<AppraisalObjectDomProps, AppraisalObjectDomStates, AppraisalObjectDomAction> implements domCore.IReact {

        public state = new AppraisalObjectDomStates();

        public pSender(): React.ReactElement<any> {
            return <div>
                {this._initContent() }
                {this.props.Vm.ModalObj.intoDom() }
            </div>;
        }

        public _initContent(): React.ReactElement<any> {
            return <div>
                <div className="YSm-table-btngroup">
                    <b>考核对象</b>
                    <a className="btn btn-sm btn-primary pull-right" onClick={() => { this.newOpt("new"); } }>添加</a>
                </div>
                <div className="p-a YSu-default-border">
                    {this.props.Vm.SelectedUserList.map((a) => {
                        return <span className="YSu-checked">{a.DisplayName}<i className="fa fa-remove" onClick={() => { this.deleteItem(a.UserId) } }></i><span>    </span></span>
                    }) }
                </div>
            </div>;
        }


        public newOpt(vals: string) {
            this.props.Vm.openModal();
        }

        private deleteItem(id:string)
        {
            this.props.Vm.SelectedUserList = this.props.Vm.SelectedUserList.filter((row) => {
                return row.UserId != id
            });
            this.forceUpdate();
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IReactAppraisalObjectDomVm extends domCore.DomVm {
        ColVmObjList: IColVmDic;
        ModalObj: modalFile.ModalDom.ModalDomVm;
        openModal(): void;
        SelectedUserList: dataFile.Data.IUserData[];

    }

    export interface IColVmDic {
        [name: string]: baseColFile.Core.BaseColVm;
    }

    export interface IAppraisalObjectDomConfig {
        UserSelectorData?: dataFile.Data.IUserSelectorData;
        UniId?: string;
        SelectedUserList?: dataFile.Data.IUserData[];
    }

    export class AppraisalObjectDomVm extends domCore.DomVm implements IReactAppraisalObjectDomVm {
        public ReactType = AppraisalObjectDomReact;

        public ColVmObjList: IColVmDic = {};
        public RowData: any = {};
        public ModalObj: modalFile.ModalDom.ModalDomVm;
        public SelectorDom: userSelectorFile.AppraisalTemplateUserSelectorDom.AppraisalTemplateUserSelectorDomVm;
        public SelectedTextArea: textAreaFile.ui.DetailAreaVm;
        public SelectedUserList: dataFile.Data.IUserData[] = [];
        public SelectedValue: string;
        public UserSelectorData: dataFile.Data.IUserSelectorData;

        public UniId: string;

        public constructor(config?: IAppraisalObjectDomConfig) {
            super();
            if (config) {
                this.UniId = config.UniId;
                if (config.SelectedUserList)
                {
                    this.SelectedUserList = config.SelectedUserList;
                    var valueList = [];
                    this.SelectedUserList.forEach(a => {
                        valueList.push("'" + a.UserId + "'");
                    });
                    this.SelectedValue = valueList.join(",");
                }
                this.UserSelectorData = config.UserSelectorData;
            }
           
            this.SelectorDom = new userSelectorFile.AppraisalTemplateUserSelectorDom.AppraisalTemplateUserSelectorDomVm({ UserSelectorData: config ? config.UserSelectorData : {}, UniId: this.UniId, SelectedValue: this.SelectedValue });
            this.SelectedTextArea = new textAreaFile.ui.DetailAreaVm();
            var mconfig: modalFile.ModalDom.IModalDomConfig = {
                Title: "选择人员",
                ModalShowingFun: (a, callback) => {
                    a.DomObj = this.SelectorDom;
                    callback();
                },
                ModalCloseFun: (a) => {
                    a.DomObj = null;
                },
                Width:"65%"
            };

            this.ModalObj = new modalFile.ModalDom.ModalDomVm(mconfig);
            this.listenAppEvent("AppraisalTemplateUserSelectorSave", this.UniId, () => {
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
    export class AppraisalObjectDomStates extends domCore.DomStates {
    }


    export class AppraisalObjectDomProps extends domCore.DomProps<IReactAppraisalObjectDomVm>{
    }



}


