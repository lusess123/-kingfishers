import domFile = require("./../../../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import treeSelectorFile = require("./../../../02col/03selector/TreeSelector");
import comboFile = require("./../../../02col/02Mulite/Combo");
import dataFile = require("./../Data");

import textFile = require("./../../../02col/01single/Text");
export module RoleUpdateRow {
    export class RoleUpdateRowAction extends domCore.DomAction {
    }

    export class RoleUpdateRowReact extends domCore.DomReact<RoleUpdateRowProps, RoleUpdateRowStates, RoleUpdateRowAction> implements domCore.IReact {

        public state = new RoleUpdateRowStates();

        private fun_titleMasterClick() {
            this.props.Vm.IsMasterHide = !this.props.Vm.IsMasterHide;
            this.forceUpdate();
        }


        private inputRoleName(): React.ReactElement<any> {
            var _vm = this.getInputVm(this.props.Vm.RowData.RoleName, "TitleLegal");
            this.props.Vm.RoleNameTextVm = _vm;
            _vm.onChangeHandle((str) => {
                this.props.Vm.RowData.RoleName = str;
                this.forceUpdate();
                return true;
            });
            return _vm.intoDom();
        }

        private inputRoleSign(): React.ReactElement<any> {
            var _vm = this.getInputVm(this.props.Vm.RowData.RoleSign, "TitleLegal");
            this.props.Vm.RoleSignTextVm = _vm;

            _vm.onChangeHandle((str) => {
                this.props.Vm.RowData.RoleSign = str;
                this.forceUpdate();
                return true;
            });

            return _vm.intoDom();
        }
        private inputDescription(): React.ReactElement<any> {
            var _vm = this.getInputVm(this.props.Vm.RowData.Description, "");
            this.props.Vm.DescriptionTextVm = _vm;

            _vm.onChangeHandle((str) => {
                this.props.Vm.RowData.Description = str;
                this.forceUpdate();
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
        private fun_itemTitleClick() {
            this.props.Vm.IsItemFormHide = !this.props.Vm.IsItemFormHide;
            this.forceUpdate();
        }

        public pSender(): React.ReactElement<any> {
            return <div>
                <div className="Hu-row-title Hu-pointer" onClick={() => { this.fun_itemTitleClick(); } }>{this.props.Vm.Index + 1}
                    <i className={"fa fa-angle-double-" + (this.props.Vm.IsItemFormHide ? "right" : "down") }></i></div>
                <div className={this.props.Vm.IsItemFormHide ? "hide" : ""}>
                    {this.createRow() }
                </div>
                
            </div>;
        }
        public createRow(): React.ReactElement<any> {
            return (
                <div className="panel">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a onClick={() => { this.fun_titleMasterClick(); } }>角色<i className={"fa fa-angle-" + (this.props.Vm.IsMasterHide ? "up" : "down") }></i></a>
                        </h4>
                    </div>
                    <div className={"panel-collapse" + (this.props.Vm.IsMasterHide ? " hide" : "")}>
                    <div className="content active ">
                        <div className="Hm-form clearfix" >
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="Hu-label">
                                    <label className="required">角色标识：</label>
                                </div>
                                <div className="Hu-input">
                                    {this.inputRoleSign() }
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="Hu-label">
                                    <label className="required">角色名称：</label>
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
                                <div className="Hu-label">
                                    <label>描述：</label>
                                </div>
                                <div className="Hu-input">
                                    {this.inputDescription()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            );
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IRoleUpdateRowConfig {


    }

    export class RoleUpdateRowVm extends domCore.DomVm {
        public ReactType = RoleUpdateRowReact;
        public RowData: dataFile.Role.IRoleData;
        public RoleSignTextVm: textFile.ui.TextVm;
        public RoleNameTextVm: textFile.ui.TextVm;
        public DescriptionTextVm: textFile.ui.TextVm;
        public Index: number;
        public IsRowFormHide: boolean;
        public IsItemFormHide: boolean;
        public IsFormHide: boolean;
        public IsMasterHide: boolean;
        public IsDetailHide: boolean;
        public OrgSelector: treeSelectorFile.ui.TreeSingleSelectorVm;
       

        public constructor() {
            super();
            this.RowData = { RoleID: "", RoleSign: "", RoleName: "", FControlUnitName: "", Description: "", FControlUnitID: "" };
            this.OrgSelector = new treeSelectorFile.ui.TreeSingleSelectorVm();
            this.OrgSelector.RegName = "GroupCodeTable";

        }
        public init() {
            this.OrgSelector.dataValueSet(this.RowData.FControlUnitID);
            this.OrgSelector.Text = this.RowData.FControlUnitName;
        }
        public legal() {
            var nameLegal = this.RoleNameTextVm.legal();
            var signLegal = this.RoleSignTextVm.legal();
            var Name = this.RoleNameTextVm.TempDataValue;
            var Sign = this.RoleSignTextVm.TempDataValue;
            var Desc = this.DescriptionTextVm.TempDataValue;
            var mess = "";
            if (Sign.length > 50 && Sign != undefined) {
                mess = "角色标识长度不能大于50\n\r";
            }
            if (Name.length > 50 && Name != undefined) {
                mess += "角色名称长度不能大于50\n\r";
            }
            if (Desc != undefined && Desc.length > 200) {
                mess += "描述长度不能大于200\n\r";
            }

            if (mess != "") {
                alert(mess)
                return false;
            }
            this.RowData.RoleName = String(Name);
            this.RowData.RoleSign = String(Sign);
            this.RowData.Description = String(Desc)
            return nameLegal && signLegal;
        }

    }
    export class RoleUpdateRowStates extends domCore.DomStates {
    }


    export class RoleUpdateRowProps extends domCore.DomProps<RoleUpdateRowVm>{
    }



}


