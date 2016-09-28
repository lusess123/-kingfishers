import domFile = require("./../../../../../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../../01core/Util");
import iocFile = require("./../../../../../01core/Ioc");
import urlFile = require("./../../../../../01core/Url");

import EditSpanFile = require("./../../../../../05tool/EditSpan");
import ESpan = EditSpanFile.EditSpan.EditSpanReact;
import ESpanVm = EditSpanFile.EditSpan.EditSpanVm;

import UserRoleTable = require("./../UserRoleTable");
import UserRoleTableProps = UserRoleTable.UserRoleTable.UserRoleTableProps;
import UserRoleTableStates = UserRoleTable.UserRoleTable.UserRoleTableStates;
import UserRoleTableAction = UserRoleTable.UserRoleTable.UserRoleTableAction;

import Data = require("./../Data");

export namespace User {

    export class UserRoleHeadReact extends domCore.DomReact<UserRoleTableProps, UserRoleTableStates, UserRoleTableAction>
    {
        public pSender(): React.ReactElement<any> {
            return <thead>
                <tr>
                    <th className={this.props.Vm.thClass} style={this.props.Vm.thstyle}>
                        <i className={"acsPointer fa fa-caret-" + (this.props.Vm.IsUserBodyHide ? "up " : "down ") }  onClick={() => { this.fun_MenuUserBodyHide(); } }></i>
                        <span>用户  /  角色 </span>
                        <span>
                            <i className="fa fa-plus-circle acsPointer" onClick={() => { this.addRole() } }></i>
                            <strong>添加角色</strong>
                        </span>
                        <span>
                            <i className="fa fa-th-large acsPointer"></i>
                            <strong>导入角色</strong>
                        </span>
                    </th>
                    {this.props.Vm.RoleData.map((a) => {
                        debugger
                        return <th className={a.ActionType == "delete" ? "acs-delete" : (a.FID ? "" : "acs-new-col") }>
                            <ESpan children={null} Vm={this.Em(a.RoleName) } />
                            <span className="acsEditSpanV">{a.RoleSign}</span>
                            <i className={"fa fa-times acsPointer" + (a.ActionType == "delete" ? " fa-reply" : " acsPointer") } onClick={() => { this.delRole(a) } }></i></th>
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

        public addUserFromPage(a: Data.User.UserActorData) {

        }

        public addRole() {
            urlFile.Core.AkUrl.Current().openUrl("$winNewUserRolePage$", true);
        }
        public delRole(a: Data.User.IRoleSimpleData) {
            if (!a.ActionType) {
                a.ActionType = "delete"
            }
            else if (a.ActionType == "add") {
                for (var i = 0; i < this.props.Vm.RoleData.length; i++) {
                    if (this.props.Vm.RoleData[i].RoleName == a.RoleName) {
                        this.props.Vm.RoleData.splice(i, 1);
                        break;
                    }
                }

            }
            else if (a.ActionType == "delete") {
                a.ActionType = "";
            }
            this.props.Vm.forceUpdate("");
        }

        public fun_MenuUserBodyHide() {
            this.props.Vm.IsUserBodyHide = !this.props.Vm.IsUserBodyHide;
            this.props.Vm.forceUpdate("");
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();
        }
    }


}