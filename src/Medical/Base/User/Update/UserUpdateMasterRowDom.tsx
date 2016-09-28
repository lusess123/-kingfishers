import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import dataFile = require("./../Data");
import textFile = require("./../../../../02col/01single/Text");
import comboFile = require("./../../../../02col/02Mulite/Combo");

export module UsersUpdateMasterRowDom {
    export class UsersUpdateMasterRowDomAction extends domCore.DomAction {
    }

    export class UserUpdateMasterRowDomReact extends domCore.DomReact<UserUpdateMasterRowDomProps, UserUpdateMasterRowDomStates, UsersUpdateMasterRowDomAction> implements domCore.IReact {

        public state = new UserUpdateMasterRowDomStates();

        public pSender(): React.ReactElement<any> {
            return (<div className= "panel" >
                <div className="panel-heading" >
                    <h4 className="panel-title">
                        <a onClick={() => { this.fun_titleMasterClick(); } }>用户信息<i className={"fa fa-angle-" + (this.props.Vm.IsMasterHide ? "up" : "down") }></i></a>
                    </h4>
                </div>
                <div className="panel-collapse collapse in">
                    <div className={"content active " + (this.props.Vm.IsMasterHide ? "hide" : "") }  >
                        <div className="Hm-form clearfix" >
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right required form-control-label">简码：</label>
                            </div>
                                <div className="pull-left Hu-input">
                                    {this.props.Vm.TextVmObjList["SimpleCode"].intoDom() }
                            </div>
                        </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right required form-control-label">类别：</label>
                            </div>
                                <div className="pull-left Hu-input">
                                    {this.props.Vm.TextVmObjList["Type"].intoDom() }
                            </div>
                        </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right required form-control-label">职称：</label>
                            </div>
                                <div className="pull-left Hu-input">
                                    {this.props.Vm.TextVmObjList["JobTitle"].intoDom() }
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div >

            );
        }

        private fun_OnChange(e, fName: string) {
            var _val = e.target["value"];
            this.props.Vm.RowData[fName] = _val;
            this.forceUpdate();
        }

        private fun_titleMasterClick() {
            this.props.Vm.IsMasterHide = !this.props.Vm.IsMasterHide;
            this.forceUpdate();
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface ITextVmDic {
        [name: string]: textFile.ui.TextVm;
    }

    export interface UserUpdateMasterRowDomConfig {
        UniId: string;
        RowData: dataFile.User.UserData;
    }

    export class UserUpdateMasterRowDomVm extends domCore.DomVm {
        public ReactType = UserUpdateMasterRowDomReact;
        public IsMasterHide: boolean;
        public RowData: dataFile.User.UserData = {};

        public UniId: string;
        public TextVmObjList: ITextVmDic = {};

        public SimpleCode: string;

        public constructor(config?: UserUpdateMasterRowDomConfig) {
            super();
            if (config) {
                this.RowData = config.RowData;

                this.initTextVm("SimpleCode", "notNull");
                this.initTextVm("Type");
                this.initTextVm("JobTitle");
            }
        }

        private initTextVm(colName: string, legal?: string) {
            var _name = colName.toString()
            var isexcite = false;

            for (var vn in this.TextVmObjList) {
                var _obj = this.TextVmObjList[_name];
                if (_obj) {
                    isexcite = true;
                    _exciteBean = _obj;
                }
            }
            if (!isexcite) {
                var _exciteBean: textFile.ui.TextVm = new textFile.ui.TextVm;
                _exciteBean.Tag = colName;
                _exciteBean.dataValueSet(this.RowData[colName]);
                _exciteBean.LegalObj.Kind = legal ? legal : "";
                _exciteBean.onChangeHandle((val) => {
                    this.RowData[colName] = val;
                    return true;
                });
                this.TextVmObjList[_name] = _exciteBean;
            }
        }

        public toChange() {
            this.IsChange = true;
            for (var n in this.TextVmObjList) {
                this.TextVmObjList[n].IsChange = true;
            }
        }

        public legal(): boolean {
            var l1 = this.TextVmObjList["SimpleCode"].legal();
            var l2 = this.TextVmObjList["Type"].legal();
            var l3 = this.TextVmObjList["JobTitle"].legal();

            var _res = l1 && l2 && l3;
            return _res;
        }

        private fIsChangeRow: boolean = false;
        public getData(): dataFile.User.UserData {
            var _obj: dataFile.User.UserData = {};
            this.TextVmObjList["SimpleCode"].getChangeValFun((isChange, val) => {
                if (isChange) {
                    this.fIsChangeRow = true;
                    _obj.SimpleCode = val;
                }
            });

            this.TextVmObjList["Type"].getChangeValFun((isChange, val) => {
                if (isChange) {
                    this.fIsChangeRow = true;
                    _obj.Type = val;
                }
            });
            this.TextVmObjList["JobTitle"].getChangeValFun((isChange, val) => {
                if (isChange) {
                    this.fIsChangeRow = true;
                    _obj.JobTitle = val;
                }
            });
            if (this.fIsChangeRow) {

                _obj.FID = this.RowData.FID;
            }

            this.fIsChangeRow = false;
            return _obj;
        }

    }
    export class UserUpdateMasterRowDomStates extends domCore.DomStates {
    }


    export class UserUpdateMasterRowDomProps extends domCore.DomProps<UserUpdateMasterRowDomVm>{
    }



}


