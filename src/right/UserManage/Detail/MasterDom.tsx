import domFile = require("./../../../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");

import alinkFile = require("./../../../05tool/ALink");
import usermanageDataFile = require("./../Data");
import ALink = alinkFile.ui.ALinkReact;

export module MasterDom {
    export class MasterDomAction extends domCore.DomAction {
    }

    export class MasterDomReact extends domCore.DomReact<MasterDomProps, MasterDomStates, MasterDomAction> implements domCore.IReact {


        private fun_ParentOnChange(e) {

        }

        private fun_titleClick() {
            this.props.Vm.IsFormHide = !this.props.Vm.IsFormHide;
            this.forceUpdate();
        }

        public state = new MasterDomStates();

        public pSender(): React.ReactElement<any> {
            return (<div className="panel">
                <div className="panel-heading">
                    <h4 className="panel-title">
                        <a onClick={() => { this.fun_titleClick(); } }>用户管理明细<i className={"fa fa-angle-" + (this.props.Vm.IsFormHide ? "up" : "down") }></i></a>
                    </h4>
                </div>
                <div className={"panel-collapse" + (this.props.Vm.IsFormHide ? " hide" : "") }>
                    <div className="content active ">
                        <div className="Hm-form clearfix" >
                            <div className="col-lg-6 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className="Hu-label">
                                    <label >姓名：</label>
                                </div>
                                <div className="Hu-input">
                                    <label className="form-control-label">{this.props.Vm.Data.NickName}</label>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className="Hu-label">
                                    <label>登录名：</label>
                                </div>
                                <div className="Hu-input">
                                    <label  className="form-control-label">
                                        {this.props.Vm.Data.UserName}
                                    </label>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className="Hu-label">
                                    <label>所在地区：</label>
                                </div>
                                <div className=" Hu-input">
                                    <label className="form-control-label">{this.props.Vm.Data.Area}</label>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className="Hu-label">
                                    <label>用户类型：</label>
                                </div>
                                <div className="Hu-input">
                                    <label  className="form-control-label">{this.props.Vm.Data.UserKindName}</label>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className=" Hu-label">
                                    <label >创建时间：</label>
                                </div>
                                <div className="Hu-input">
                                    <label  className="form-control-label">{this.props.Vm.Data.CreateTime}</label>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className=" Hu-label">
                                    <label>创建人：</label>
                                </div>
                                <div className="Hu-input">
                                    <label  className="form-control-label">{this.props.Vm.Data.CreaterName == null ? "(空)" : $(this.props.Vm.Data.CreaterName).text()}</label>
                                </div>
                            </div>
                            <div className="col-lg-12 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className="Hu-label">
                                    <label>描述：</label>
                                </div>
                                <div className=" Hu-input">
                                    <label  className="form-control-label">
                                        { this.props.Vm.Data.Remark}
                                    </label>
                                </div>
                            </div>
                            <div className="col-lg-12 col-sm-12 col-xs-12 Hu-full-line">
                                <div className="Hu-label">
                                    <label>手机MDIE号：</label>
                                </div>
                                <div className="Hu-input">
                                    <label  className="form-control-label">
                                        { this.props.Vm.Data.MEID}
                                    </label>
                                </div>
                            </div>


                            <div className="col-lg-12 col-sm-12 col-xs-12 Hu-full-line">
                                <div className="Hu-label">
                                    <label>组织结构：</label>
                                </div>
                                <div className=" Hu-input">
                                    <label  className="form-control-label">
                                        { this.props.Vm.Data.FControlUnitName}
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>);
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }

        private fun_TrashDel() {
            //-----------------
            alert("删除");
        }
        private fun_Update() {
            //-----------------
            alert("删除");
        }



    }



    export class MasterDomVm extends domCore.DomVm {
        public ReactType = MasterDomReact;
        public MenuKindName: string;

        public Data: usermanageDataFile.UserManager.UserManagerDetail;
        public IsFormHide: boolean;

    }
    export class MasterDomStates extends domCore.DomStates {
    }


    export class MasterDomProps extends domCore.DomProps<MasterDomVm>{
    }



}


