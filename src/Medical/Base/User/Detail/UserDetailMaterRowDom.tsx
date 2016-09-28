import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import textFile = require("./../../../../02col/01single/Text");
import dataFile = require("./../Data");
import singleCheckFile = require("./../../../../02col/02Mulite/SingleCheckBox");

export module UserDetailMaterRowDomVm {
    export class UserDetailMaterRowDomVmAction extends domCore.DomAction {
    }

    export class UserDetailRowDomReact extends domCore.DomReact<UserDetailMaterRowDomProps, UserDetailMaterRowDomStates, UserDetailMaterRowDomVmAction> implements domCore.IReact {

        public state = new UserDetailMaterRowDomStates();

        public pSender(): React.ReactElement<any> {
            return <div className="1">
                <div className="panel-heading">
                    <h4 className="panel-title">
                        <a onClick={() => { this.fun_titleClick(); } }>用户明细<i className={"fa fa-angle-" + (this.props.Vm.IsFormHide ? "up" : "down") }></i></a>
                    </h4>
                </div>

                <div className="panel-collapse collapse in">
                    <div className={"content active " + (this.props.Vm.IsFormHide ? "hide" : "") }>
                        <div className="Hm-form clearfix" >

                            <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className="pull-left Hu-label">
                                    <label for="right-label" className="pull-right">简码：</label>
                            </div>
                            <div className="columns acs-input">
                                    <label for="right-label" className="pull-left">{this.props.Vm.RowData.SimpleCode}</label>
                            </div>
                        </div>

                            <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className="pull-left Hu-label">
                                    <label for="right-label" className="pull-right">类别：</label>
                            </div>
                            <div className="columns acs-input">
                                    <label for="right-label" className="pull-left">{this.props.Vm.RowData.Type}</label>
                            </div>
                        </div>

                            <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className="pull-left Hu-label">
                                    <label for="right-label" className="pull-right">职称：</label>
                            </div>
                            <div className="columns acs-input">
                                    <label for="right-label" className="pull-left">{this.props.Vm.RowData.Type}</label>
                            </div>
                        </div>

                        </div>
                    </div>
                </div>
            </div>;
        }

        private fun_titleClick() {
            this.props.Vm.IsFormHide = !this.props.Vm.IsFormHide;
            this.forceUpdate();
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface UserDetailMaterRowDomConfig {
        RowData: dataFile.User.UserData;

    }

    export class UserDetailMaterRowDomVm extends domCore.DomVm {
        public ReactType = UserDetailRowDomReact;

        public RowData: dataFile.User.UserData;
        public IsFormHide: boolean;

        public constructor(config?: UserDetailMaterRowDomConfig) {
            super();
            if (config) {
                this.RowData = config.RowData;
            }
        }

        public GetText(List: any, Id: number): string {
            for (var index = 0; index < List.length; index++) {
                if (List[index].Value == Id) {
                    return List[index].Text;
                }
            }
            return ""
        }

    }
    export class UserDetailMaterRowDomStates extends domCore.DomStates {
    }


    export class UserDetailMaterRowDomProps extends domCore.DomProps<UserDetailMaterRowDomVm>{
    }



}


