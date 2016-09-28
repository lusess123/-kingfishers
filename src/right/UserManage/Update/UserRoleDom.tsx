import domFile = require("./../../../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import domCore = domFile.Core;
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import selecotrFile = require("./../../../02col/03selector/selector");
import masterDomFile = require("./UserManagerUpdateRow");
import thFile = require("./../../../09Web/dom/ThDom");
import pageViewFile = require("./../../07data/PageView");
import data = require("./../Data");
import singleCheckFile = require("./../../../02col/02Mulite/SingleCheckBox");
import ThDom = thFile.Web.ThDomReact;

export module UserRoleDom {
    export class UserRoleDomAction extends domCore.DomAction {
    }

    export class UserRoleDomReact extends domCore.DomReact<UserRoleDomProps, UserRoleDomStates, UserRoleDomAction> implements domCore.IReact {

        public fun_titleClick() {
            this.props.Vm.IsRowFormHide = !this.props.Vm.IsRowFormHide;
            this.forceUpdate();
        }
        private fun_masterTitleClick() {
            this.props.Vm.IsMasterHide = !this.props.Vm.IsMasterHide;
            this.forceUpdate();
        }

        public pSender(): React.ReactElement<any> {
            return <div>
                <div className="Hu-row-title Hu-pointer" onClick={() => { this.fun_masterTitleClick(); } }>{this.props.Vm.Index + 1}<i className={"fa fa-angle-double-" + (this.props.Vm.IsMasterHide ? "right" : "down") }></i></div>
                <div className={this.props.Vm.IsMasterHide ? "hide" : ""}>
                    {this.props.Vm.master.intoDom() }
                    <div className="panel">
                        <div className="panel-heading">
                            <h4 className="panel-title">
                                <a onClick={() => { this.fun_titleClick(); } }>角色编辑<i className={"fa fa-angle-" + (this.props.Vm.IsRowFormHide ? "up" : "down") }></i></a>
                            </h4>
                        </div>
                        <div className={"panel-collapse" + (this.props.Vm.IsRowFormHide ? " hide" : "") }>
                            <div className="content clearfix active ">
                                {
                                    this.props.Vm.RoleUserList.map((r) => {
                                        return <div className={"col-lg-6 col-sm-12 col-xs-12 Hu-dashed-line " + (r.ActionType == "remove" ? " hide" : "") }>
                                            <div className="pull-left Hu-label">
                                                <label className="pull-right">角色：</label>
                                            </div>
                                            <div className="pull-left Hu-input">
                                                {r.Role.intoDom() }
                                            </div>
                                            {r.isCheck.intoDom() }
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div>
                        <a><i className="fa fa-minus-circle"onClick={() => { this.fu_RoleListMinus() } }></i></a>
                        <a><i className="fa fa-plus-circle" onClick={() => { this.fu_RoleListPlugs() } }></i></a>
                    </div>
                </div>
            </div>;
        }

        private fu_RoleListMinus() {
            //删除
            this.props.Vm.fu_RoleListMinus();
        }


        public fu_RoleListPlugs() {
            this.props.Vm.fu_RoleListPlugs();
        }




    }

    export class UserRoleDomVm extends domCore.DomVm {
        public ReactType = UserRoleDomReact;
        public master: masterDomFile.UserManagerUpdateRow.UserManagerUpdateRowVm = new masterDomFile.UserManagerUpdateRow.UserManagerUpdateRowVm();
        public RoleList: data.UserManager.SimpleRoleData[] = []
        public RoleUserList: UserRoleData[] = [];
        public IsItemFormHide: boolean;
        public Index: number;
        public IsRowFormHide: boolean;
        public RoleSelectorList: selecotrFile.ui.SelectorVm[] = [];
        public Role: UserRoleData;
        public ds: pageViewFile.data.IDataSet;
        public FControlUnitID: string;

        public IsMasterHide: boolean;

        constructor() {
            super();
        }

        public initData() {
            this.RoleList.map((i) => {
                this.Role = new UserRoleData;

                this.Role.Role = new selecotrFile.ui.SelectorVm;
                this.Role.Role.RegName = "RoleCodeTable";
                var _$this = this;
                this.Role.Role.OnPostDataSetFun = function (ds) {
                    var _rows = ds["DromsTable"] = [];
                    var _id = _$this.FControlUnitID;
                    if (_id == "" || _id == null) {
                        _id = "-1";
                    }
                    var _row = { FControlUnitID: _id };
                    _rows.push(_row);
                    return ds;
                }

                this.Role.Role.dataValueSet(i.RoleID);
                this.Role.Role.Text = i.RoleName;

                this.Role.isCheck = new singleCheckFile.ui.SingleCheckBoxVm;

                this.Role.originalValue = i.RoleID;

                this.Role.ActionType = "none";

                this.RoleUserList.push(this.Role);
            })
            this.master.initData();
        }


        public fu_RoleListMinus() {
            this.RoleUserList.map((r) => {
                if (r.isCheck.dataValueGet() == "true") {
                    r.ActionType = "remove";
                }
            })
            this.forceUpdate("");
        }

        public fu_RoleListPlugs() {
            var data = new UserRoleData;
            //增加
            data.Role = new selecotrFile.ui.SelectorVm;

            data.Role.RegName = "RoleCodeTable";
            var _this = this;
            data.Role.OnPostDataSetFun = function (ds) {
                var _rows = ds["DromsTable"] = [];
                var _id = _this.FControlUnitID;
                if (_id == "" || _id == null) {
                    _id = "-1";
                }
                var _row = { FControlUnitID: _id };
                _rows.push(_row);
                return ds;
            }

            data.isCheck = new singleCheckFile.ui.SingleCheckBoxVm;

            data.ActionType = "add";
            data.originalValue = "";
            this.RoleUserList.push(data)

            this.forceUpdate("");
        }
    }

    export class UserRoleData {
        Role: selecotrFile.ui.SelectorVm;
        ActionType: string;
        originalValue: string;
        changeValue: string;
        isCheck: singleCheckFile.ui.SingleCheckBoxVm;
    }

    export class UserRoleDomStates extends domCore.DomStates {

    }


    export class UserRoleDomProps extends domCore.DomProps<UserRoleDomVm>{
    }

}