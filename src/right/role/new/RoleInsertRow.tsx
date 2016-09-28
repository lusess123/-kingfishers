import domFile = require("./../../../01core/0Dom"); import React = require("react");
import ReactDOM = require("react-dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import treeSelectorFile = require("./../../../02col/03selector/TreeSelector");
import comboFile = require("./../../../02col/02Mulite/Combo");
import dataFile = require("./../Data");

import textFile = require("./../../../02col/01single/Text");

export module RoleInsertRow {
    export class RoleInsertRowAction extends domCore.DomAction {
    }

    export class RoleInsertRowReact extends domCore.DomReact<RoleInsertRowProps, RoleInsertRowStates, RoleInsertRowAction> implements domCore.IReact {


        private fun_OnChange(e, fName: string) {
            var _val = e.target["value"];
            this.props.Vm.RowData[fName] = _val;
            this.forceUpdate();
        }

        public state = new RoleInsertRowStates();

        private fun_titleMasterClick() {
            this.props.Vm.IsMasterHide = !this.props.Vm.IsMasterHide;
            this.forceUpdate();

        }


        private inputRoleName(): React.ReactElement<any> {
            var _vm = this.getInputVm(this.props.Vm.RowData.RoleName, "TitleLegal");
            this.props.Vm.RoleNameTextVm = _vm;
            _vm.onChangeHandle((str) => {
                this.props.Vm.RowData.RoleName = str;
                return true;
            });
            return _vm.intoDom();
        }

        private inputRoleSign(): React.ReactElement<any> {
            var _vm = this.getInputVm(this.props.Vm.RowData.RoleSign, "TitleLegal");
            this.props.Vm.RoleSignTextVm = _vm;

            _vm.onChangeHandle((str) => {
                this.props.Vm.RowData.RoleSign = str;
                return true;
            });

            return _vm.intoDom();
        }


        private getInputVm(val: string, legalKind: string, fun?: Function): textFile.ui.TextVm {

            var _bean = new textFile.ui.TextVm();
            _bean.dataValueSet(val);
            _bean.LegalObj.Kind = legalKind;
            return _bean;
        }
        public pSender(): React.ReactElement<any> {
            return (<div className="1">
                <div className="panel" >
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a onClick={() => { this.fun_titleMasterClick(); } }>角色<i className={"fa fa-angle-" + (this.props.Vm.IsMasterHide ? "up" : "down") }></i></a>
                        </h4>
                    </div>
                    <div className={"panel-collapse" + (this.props.Vm.IsMasterHide ? " hide" : "")}>
                        <div className="content active "  >
                            <div className="Hm-form clearfix" >
                                <div className="col-lg-6 col-sm-12 col-xs-12">
                                    <div className="Hu-label">
                                        <label>角色标识：</label>
                                    </div>
                                    <div className=" Hu-input">
                                        {this.inputRoleSign() }
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-12 col-xs-12">
                                    <div className="Hu-label">
                                        <label>角色名称：</label>
                                    </div>
                                    <div className="Hu-input">
                                        {this.inputRoleName() }
                                    </div>
                                </div>

                                <div className="col-lg-12 col-sm-12 col-xs-12">
                                    <div className="Hu-label">
                                        <label>组织机构：</label>
                                    </div>
                                    <div className="Hu-input">
                                        {this.props.Vm.OrgSelector.intoDom() }
                                    </div>
                                </div>
                                <div className="col-lg-12 col-sm-12 col-xs-12">
                                    <div className=" Hu-label">
                                        <label>描述：</label>
                                    </div>
                                    <div className="Hu-input">
                                        <textarea placeholder=".."  value={this.props.Vm.RowData.Description} onChange={(e) => { this.fun_OnChange(e, "Description"); } }></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

            );

        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }
    export interface dataGroup {
        GroupName: string;
        GroupID: string;
    }
    export interface IRolePageConfig {
        GroupData: dataGroup;
    }
    export class RoleInsertRowVm extends domCore.DomVm {
        public ReactType = RoleInsertRowReact;
        public OrgSelector: treeSelectorFile.ui.TreeSingleSelectorVm;
        public RowData: dataFile.Role.IRoleData;
        public rowGroup: dataGroup;
        public RoleSignTextVm: textFile.ui.TextVm;
        public RoleNameTextVm: textFile.ui.TextVm;

        public IsMasterHide: boolean;
        // public IsDetailHide: boolean;

        public constructor(config?: IRolePageConfig) {
            super();
            this.RowData = { RoleID: "", RoleSign: "", RoleName: "", FControlUnitName: "11", Description: "", FControlUnitID: "11" };
            this.OrgSelector = new treeSelectorFile.ui.TreeSingleSelectorVm();
            this.OrgSelector.RegName = "GroupCodeTable";
            var Name = "1"
            var ID = "";
            if (config) {
                ID = config.GroupData.GroupID;
                Name = config.GroupData.GroupName
                this.OrgSelector.dataValueSet(ID);
                this.OrgSelector.Text = Name;
            }


        }
        public init() {

            this.OrgSelector.dataValueSet(this.RowData.FControlUnitID);
            this.OrgSelector.Text = this.RowData.FControlUnitName;
        }
        public legal() {
            var nameLegal = this.RoleNameTextVm.legal();
            var signLegal = this.RoleSignTextVm.legal();
            var mess = "";
            var name = this.RoleNameTextVm.TempDataValue;
            var sign = this.RoleSignTextVm.TempDataValue;
            var description = this.RowData.Description;
            var mess = "";
            if (sign.length > 50 && sign != undefined) {
                mess = "角色标识长度不能大于50\n\r";
            }
            if (name.length > 50 && name != undefined) {
                mess += "角色名称长度不能大于50\n\r";
            }
            if (description != undefined && description.length > 200) {
                mess += "描述长度不能大于200\n\r";
            }

            if (mess != "") {
                alert(mess)
                return false;
            }
            return nameLegal && signLegal;
        }
    }


    export class RoleInsertRowStates extends domCore.DomStates {
    }


    export class RoleInsertRowProps extends domCore.DomProps<RoleInsertRowVm>{
    }



}


