import domFile = require("./../../../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import menudata = require("./../Data");
import textFile = require("./../../../02col/01single/Text");
import comboFile = require("./../../../02col/02Mulite/Combo");
import singcheckFile = require("./../../../02col/02Mulite/SingleCheckBox");
import selecotrFile = require("./../../../02col/03selector/TreeSelector");
import basewedPageFile = require("./../../../04page/BaseWebPage");
import HideFile=require("./../../../02col/01single/Hidden")
export module UserManagerUpdateRow {
    export class UserManagerUpdateRowAction extends domCore.DomAction {
    }

    export class UserManagerUpdateRowReact extends domCore.DomReact<UserManagerUpdateRowProps, UserManagerUpdateRowStates, UserManagerUpdateRowAction> implements domCore.IReact {

        public state = new UserManagerUpdateRowStates();

        public pSender(): React.ReactElement<any> {
            return (<div className="panel">
                <div className="panel-heading">
                    <h4 className="panel-title">
                        <a onClick={() => { this.fun_titleClick(); } }>用户管理明细编辑<i className={"fa fa-angle-" + (this.props.Vm.IsFormHide ? "right" : "down") }></i></a>
                    </h4>
                </div>
                <div className={"panel-collapse" + (this.props.Vm.IsFormHide ? " hide" : "") }>
                    <div className="content active " >
                        <div className="Hm-form clearfix" >
                            <div className="col-lg-6 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className="Hu-label">
                                    <label>姓名：</label>
                                </div>
                                <div className="Hu-input">
                                    {
                                        this.props.Vm.UserNickName.intoDom()
                                    }
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className=" Hu-label">
                                    <label>登录名：</label>
                                </div>
                                <div className="Hu-input">
                                    {
                                        this.props.Vm.UserUserName.intoDom()
                                    }
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className=" Hu-label">
                                    <label>所在地区：</label>
                                </div>
                                <div className=" Hu-input">
                                    {
                                        this.props.Vm.Area.intoDom()
                                    }
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className=" Hu-label">
                                    <label >用户类型：</label>
                                </div>
                                <div className=" Hu-input">
                                    <label>{this.props.Vm.UserKind.intoDom() }</label>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className="Hu-label">
                                    <label >创建时间：</label>
                                </div>
                                <div className="Hu-input">
                                    <label >{this.props.Vm.Data.CreateTime}</label>
                                </div>
                            </div>

                            <div className="col-lg-6 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className="Hu-label">
                                    <label>启用账号：</label>
                                </div>
                                <div className="Hu-input">
                                    <label>{this.props.Vm.isActive.intoDom() }</label>
                                </div>
                            </div>

                            <div className="col-lg-12 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className="Hu-label">
                                    <label>创建人：</label>
                                </div>
                                <div className="Hu-input">
                                    <label>{this.props.Vm.Data.CreaterName == null ? "(空)" : $(this.props.Vm.Data.CreaterName).text()}</label>
                                </div>
                            </div>
                            <div className="col-lg-12 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className="Hu-label">
                                    <label>描述：</label>
                                </div>
                                <div className="Hu-input">
                                    {
                                        this.props.Vm.Remark.intoDom()
                                    }
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className="Hu-label">
                                    <label>手机MDIE号：</label>
                                </div>
                                <div className="Hu-input">
                                        { this.props.Vm.MEID.intoDom() }
                                </div>
                            </div>


                            <div className="col-lg-6 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className=" Hu-label">
                                    <label>组织结构: </label>
                                </div>
                                <div className="Hu-input">
                                        { this.props.Vm.FControlUnitID.intoDom()}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>);;
        }

        public fun_titleClick() {
            this.props.Vm.IsFormHide = !this.props.Vm.IsFormHide;
            this.forceUpdate();
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }
    export class UserManagerUpdateRowVm extends domCore.DomVm {
        public ReactType = UserManagerUpdateRowReact;
        public Data:menudata.UserManager.UserManagerDetail;
        public Index: number;
        public IsFormHide: boolean;
        public IsItemFormHide: boolean;
        public UserNickName: textFile.ui.TextVm;
        public UserUserName: textFile.ui.TextVm;
        public Area: textFile.ui.TextVm;
        public UserKind: comboFile.ui.ComboVm;
        public isActive: singcheckFile.ui.SingleCheckBoxVm;
        public Remark: textFile.ui.TextVm;
        public MEID: textFile.ui.TextVm;
        public FControlUnitID: selecotrFile.ui.TreeSingleSelectorVm;
        public UserID: HideFile.ui.HiddenVm;


        constructor() {
            super();
            this.UserID = new HideFile.ui.HiddenVm;
            this.UserNickName = new textFile.ui.TextVm;
            this.UserUserName = new textFile.ui.TextVm;
            this.Area = new textFile.ui.TextVm;
            this.UserKind = new comboFile.ui.ComboVm;
            this.isActive = new singcheckFile.ui.SingleCheckBoxVm;
            this.Remark = new textFile.ui.TextVm;
            this.MEID = new textFile.ui.TextVm;
            this.FControlUnitID = new selecotrFile.ui.TreeSingleSelectorVm;

            var itemList = []
            itemList.push({ Value: 0, Text: "系统用户" });
            itemList.push({ Value: 1, Text: "企业管理员" });
            itemList.push({ Value: 2, Text: "普通用户" });
            itemList.push({ Value: 3, Text: "其他" });
            this.UserKind.ItemList = itemList;
            this.isActive = new singcheckFile.ui.SingleCheckBoxVm;
            this.Remark = new textFile.ui.TextVm;
            this.MEID = new textFile.ui.TextVm;
            this.FControlUnitID = new selecotrFile.ui.TreeSingleSelectorVm;
            this.FControlUnitID.RegName = "GroupCodeTable";
            

        }

        public initData()
        {
            this.UserID.dataValueSet(this.Data.UserID);
            this.UserNickName.dataValueSet(this.Data.NickName);
            this.UserUserName.dataValueSet(this.Data.UserName);
            this.Area.dataValueSet(this.Data.Area);
            this.UserKind.dataValueSet(this.Data.UserKindId);
            this.isActive.dataValueSet(this.Data.IsActive ? "true" : "false");
            this.Remark.dataValueSet(this.Data.Remark);
            this.MEID.dataValueSet(this.Data.MEID);
            this.FControlUnitID.Text =this.Data.FControlUnitName;
            this.FControlUnitID.dataValueSet(this.Data.FControlUnitID);

        }


    }
    export class UserManagerUpdateRowStates extends domCore.DomStates {

    }


    export class UserManagerUpdateRowProps extends domCore.DomProps<UserManagerUpdateRowVm>{
    }

    iocFile.Core.Ioc.Current().RegisterType("UserManageUpdateRow", basewedPageFile.Web.BaseWebPageVm, UserManagerUpdateRowVm);

}


