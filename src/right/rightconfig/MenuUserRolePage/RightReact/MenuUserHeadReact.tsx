import domFile = require("./../../../../01core/0Dom"); import React = require("react");
import ReactDOM = require("react-dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");

import MenuUserRoleTable = require("./../MenuUserRoleTable");
import MenuUserRoleTableProps = MenuUserRoleTable.MenuUserRoleTable.MenuUserRoleTableProps;
import MenuUserRoleTableStates = MenuUserRoleTable.MenuUserRoleTable.MenuUserRoleTableStates;
import MenuUserRoleTableAction = MenuUserRoleTable.MenuUserRoleTable.MenuUserRoleTableAction;

import EditSpanFile = require("./../../../../05tool/EditSpan");
import ESpan = EditSpanFile.EditSpan.EditSpanReact;
import ESpanVm = EditSpanFile.EditSpan.EditSpanVm;


import Data = require("./../Data");

export namespace Menu {

    export class MenuUserHeadReact extends domCore.DomReact<MenuUserRoleTableProps, MenuUserRoleTableStates, MenuUserRoleTableAction>
    {
        public pSender(): React.ReactElement<any> {
            return <thead>
                <tr>
                    <th className={this.props.Vm.thclass} style={this.props.Vm.thstyle}>
                        <i className={"Hu-pointer fa fa-caret-" + (this.props.Vm.IsMenuUserBodyHide ? "up " : "down ") }  onClick={() => { this.fun_MenuUserBodyHide(); } }></i>
                        <span>用户  /  角色 </span>
                        <span>
                            <i className="fa fa-plus-circle Hu-pointer" onClick={() => { this.fun_AddRole() } }></i>
                            <strong>添加角色</strong>
                        </span>
                        <span>
                            <i className="fa fa-th-large Hu-pointer"></i>
                            <strong>导入角色</strong>
                        </span>
                    </th>
                    {this.props.Vm.RoleData.map((a) => {

                        return <th className={a.ActionType == "Del" ? "Hs-delete" : (a.ActionType == "Add" ? "Hs-new-col" : (a.ActionType == "Update" ? "Hs-update" : ""))}>
                            <ESpan children={null} Vm={this.Em(a.RoleName, (c, b) => {
                                this.props.Vm.UpdateRole(a, c.Content);
                            }) } />
                            <span className="Hc-edit-spanV">{a.RoleSign}</span>
                            <i className={"fa fa-times hu-pointert" + (a.ActionType == "Del" ? " Hs-delete" : (a.ActionType == "Update" ? "Hs-update" : "")) } onClick={() => { this.props.Vm.fun_delRole(a) } }></i></th>
                    })
                    }
                </tr>
            </thead>;
        }

        private EspanVMIndex: number = 0;

        private Em(content: string, changeEvent?: EditSpanFile.EditSpan.IChangeEvent, config?: EditSpanFile.EditSpan.IEditSpanVm): ESpanVm {
            this.EspanVMIndex++;
            if (config) {
                config.Content = content;
                if (changeEvent) {
                    config.ChangeEvent = changeEvent;
                }
            }
            else {
                config = { Content: content, ChangeEvent: changeEvent };
            }
            return this.props.Vm.getESpan("name" + this.EspanVMIndex, config);
        }

        public addUserFromPage(a: Data.Menu.UserActorData) {

        }

        //protected pInstall(): void {
        //    this.props.Vm.getEmit("React").addListener("forceUpdate_MenuRole", (callback) => {
        //        this.forceUpdate(callback);
        //    });
        //    super.pInstall();
        //}

        protected pInstall(): void {

            this.props.Vm.getEmit("React").addListener("forceUpdate_RoleData", (callback) => {
                this.forceUpdate(callback);
            });

            super.pInstall();
        }


        public fun_AddRole() {
            urlFile.Core.AkUrl.Current().openUrl("$winNewUserRolePage$", true);
        }
        public delRole(a: Data.Menu.IRoleSimpleData) {
            if (!a.ActionType) {
                a.ActionType = "Del"
            }
            else if (a.ActionType == "Add") {
                for (var i = 0; i < this.props.Vm.UserRoleData.length; i++) {
                    if (this.props.Vm.UserRoleData[i].RoleName == a.RoleName) {
                        this.props.Vm.UserRoleData.splice(i, 1);
                        break;
                    }
                }

            }
            else if (a.ActionType == "Del") {
                a.ActionType = "";
            }
            this.props.Vm.forceUpdate("");
        }

        public fun_MenuUserBodyHide() {
            this.props.Vm.IsMenuUserBodyHide = !this.props.Vm.IsMenuUserBodyHide;
            this.props.Vm.forceUpdate("");
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();
        }


    }


}