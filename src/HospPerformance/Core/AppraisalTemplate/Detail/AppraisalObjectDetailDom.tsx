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

export module AppraisalObjectDetailDom {
    export class AppraisalObjectDetailDomAction extends domCore.DomAction {
    }

    export class AppraisalObjectDetailDomReact extends domCore.DomReact<AppraisalObjectDetailDomProps, AppraisalObjectDetailDomStates, AppraisalObjectDetailDomAction> implements domCore.IReact {

        public state = new AppraisalObjectDetailDomStates();

        public pSender(): React.ReactElement<any> {
            return <div>
                {this._initContent() }
            </div>;
        }

        public _initContent(): React.ReactElement<any> {
            return <div>
                <div className="YSm-table-btngroup">
                    <b>考核对象</b>
                </div>
                <div className="p-a YSu-default-border">
                    {this.props.Vm.SelectedUserList.map((a) => {
                        return <span className="YSu-checked">{a.DisplayName}    </span>
                    }) }
                </div>
            </div>;
        }


        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IReactAppraisalObjectDetailDomVm extends domCore.DomVm {
        ColVmObjList: IColVmDic;
        ModalObj: modalFile.ModalDom.ModalDomVm;
        SelectedUserList: dataFile.Data.IUserData[];

    }

    export interface IColVmDic {
        [name: string]: baseColFile.Core.BaseColVm;
    }

    export interface IAppraisalObjectDetailDomConfig {
        UserSelectorData?: dataFile.Data.IUserSelectorData;
        UniId?: string;
        SelectedUserList?: dataFile.Data.IUserData[];
    }

    export class AppraisalObjectDetailDomVm extends domCore.DomVm implements IReactAppraisalObjectDetailDomVm {
        public ReactType = AppraisalObjectDetailDomReact;

        public ColVmObjList: IColVmDic = {};
        public RowData: any = {};
        public ModalObj: modalFile.ModalDom.ModalDomVm;
        public SelectedTextArea: textAreaFile.ui.DetailAreaVm;
        public SelectedUserList: dataFile.Data.IUserData[] = [];
        public SelectedValue: string;
        public UniId: string;

        public constructor(config?: IAppraisalObjectDetailDomConfig) {
            super();
            if (config) {
                this.UniId = config.UniId;
                if (config.SelectedUserList)
                {
                    this.SelectedUserList = config.SelectedUserList;
                }
            }
        }

      

    }
    export class AppraisalObjectDetailDomStates extends domCore.DomStates {
    }


    export class AppraisalObjectDetailDomProps extends domCore.DomProps<IReactAppraisalObjectDetailDomVm>{
    }



}


