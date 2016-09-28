import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");

import TextFile = require("./../../../../02col/01single/Text");
import Text = TextFile.ui.TextReact;
import TextVm = TextFile.ui.TextVm;
import modalFile = require("./../../../../05tool/Modal/ModalDom");//../HospPerformance
import NewAppraisalObjectPageFile = require("./../../../Core/AppraisalTemplate/New/AppraisalTemplateUserSelectorDom");

import Data = require('./../data');
import MoneySettingDom = require("./MoneySettingDom");

export module MoneyTemplateDom {
    export class MoneyTemplateDomAction extends domCore.DomAction {
    }

    export class MoneyTemplateDomReact extends domCore.DomReact<MoneyTemplateDomProps, MoneyTemplateDomStates, MoneyTemplateDomAction> implements domCore.IReact {

        public state = new MoneyTemplateDomStates();

        public pSender(): React.ReactElement<any> {
            return <div>

                {this._initContent() }
                {this.props.Vm.ModalObj.intoDom() }
            </div>;
        }

        //public _initForm(): React.ReactElement<any> {
        //    return <form className="clearfix">
        //        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 form-group  form-inline clearfix">
        //            <label className="col-md-5 col-sm-3 form-control-label text-right">模板名称：</label>
        //            <div className="col-md-7 col-sm-9">{this.props.Vm.TextObj.intoDom() }</div>
        //        </div>

        //    </form>;
        //}


        public _initContent(): React.ReactElement<any> {
            return <div>
                <div className="YSm-table-btngroup">
                    <b>包含人员</b>
                    <a className="btn btn-sm btn-primary pull-right" onClick={() => { this.NewOpt("new"); } }>添加人员</a>
                </div>
                <div>
                    {this.props.Vm.SelectedUserList.map((a) => {
                        return <span>{a.DisplayName}<i className="fa fa-remove" onClick={() => { this.DeleteItem(a.UserId) } }></i><span>    </span></span>
                    }) }
                </div>

            </div>;
        }

        public DeleteItem(userId: string) {
            this.props.Vm.SelectedUserList = this.props.Vm.SelectedUserList.filter((row) => {
                return row.UserId != userId;
            });
            this.forceUpdate();
            this.props.Vm.ActionToMoneySetting(this.props.Vm.SelectedUserList);
        }
        public NewOpt(vals: string) {
            this.props.Vm.openModal();
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IReactMoneyTemplateDomVm extends domCore.DomVm {
        TextObj: TextFile.ui.TextVm;
        openModal();
        ModalObj: modalFile.ModalDom.ModalDomVm;
        SalaryTemplateData: Data.Data.ISalaryTemplate;
        SelectedUserList: Data.Data.IUsersData[];
        SelectorDom: NewAppraisalObjectPageFile.AppraisalTemplateUserSelectorDom.AppraisalTemplateUserSelectorDomVm;
        ActionToMoneySetting(_data: Data.Data.IUsersData[]): void;
    }

    export interface IMoneyTemplateDomConfig {
        UserSelectorData?: Data.Data.IUserSelectorData;
        UniId?: string;
        SelectedUserList?: Data.Data.IUsersData[];

    }

    export class MoneyTemplateDomVm extends domCore.DomVm implements IReactMoneyTemplateDomVm {
        public ReactType = MoneyTemplateDomReact;

        public TextObj: TextVm = new TextFile.ui.TextVm;

        public ModalObj: modalFile.ModalDom.ModalDomVm;
        public SalaryTemplateData: Data.Data.ISalaryTemplate;
        public SelectorDom: NewAppraisalObjectPageFile.AppraisalTemplateUserSelectorDom.AppraisalTemplateUserSelectorDomVm;
        public SelectedValue: string;
        public SelectedUserList: Data.Data.IUsersData[] = [];
        public openModal() {
            this.ModalObj.open();
        }

        public constructor(config?: IMoneyTemplateDomConfig) {
            super();
            if (config) {
                this.UniId = config.UniId;
                if (config.SelectedUserList) {
                    this.SelectedUserList = config.SelectedUserList;
                    var valueList = [];
                    this.SelectedUserList.forEach(a => {
                        valueList.push("'" + a.UserId + "'");
                    });
                    this.SelectedValue = valueList.join(",");
                }
            }
            var UsersIds = "";
            //弹出
            this.SelectorDom = new NewAppraisalObjectPageFile.AppraisalTemplateUserSelectorDom.AppraisalTemplateUserSelectorDomVm({ UserSelectorData: config ? config.UserSelectorData : {}, UniId: this.UniId, SelectedValue: this.SelectedValue });
            var modal: modalFile.ModalDom.IModalDomConfig = {
                Title: "添加人员",
                ModalShowingFun: (a, callback) => {
                    a.DomObj = this.SelectorDom;
                    callback();
                },
                ModalCloseFun: (a) => {
                    a.DomObj = null;
                }
            };
            this.ModalObj = new modalFile.ModalDom.ModalDomVm(modal);
            this.listenAppEvent("AppraisalTemplateUserSelectorSave", this.UniId, () => {
                var selectedValue = this.SelectorDom.UserListboxObj.dataValueGet();
                this.ModalObj.close();
                urlFile.Core.AkPost("/HospPerformance/UserSelector/FetchSelectedUsers", { userIds: selectedValue }, (data) => {
                    var _data = data.Data;
                    if (_data) {
                        this.SelectedUserList = _data;
                        if (_data.length > 0)
                            this.ActionToMoneySetting(this.SelectedUserList);
                        this.forceUpdate("");

                    }
                });
            });
        }
        public ActionToMoneySetting(_data: Data.Data.IUsersData[]) {
            this.emitAppEvent("UsersListToMoneySetting", this.UniId, _data);
        }

    }
    export class MoneyTemplateDomStates extends domCore.DomStates {
    }


    export class MoneyTemplateDomProps extends domCore.DomProps<IReactMoneyTemplateDomVm>{
    }



}


