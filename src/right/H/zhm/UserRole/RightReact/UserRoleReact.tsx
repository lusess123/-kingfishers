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
    export class UserRoleReact extends domCore.DomReact<UserRoleTableProps, UserRoleTableStates, UserRoleTableAction>
    {

        public pSender(): React.ReactElement<any> {
            return <tbody className={(this.props.Vm.IsUserBodyHide ? "hide" : "") }>
                {this.props.Vm.UserData.map((a) => {
                    this.props.Vm._arry = [];
                    return this.healthContent(a, this.props.Vm._arry);
                }
                )
                }

                <tr><td className={this.props.Vm.thClass } style={this.props.Vm.thstyle}>
                    <span className="acsRelative">
                        <i className ="fa fa-plus-circle acsPointer" onClick={() => { this.addUser(); } }></i>
                        <strong>添加用户</strong>
                    </span>
                    <span className="acsRelative">
                        <i className="fa fa-th-large acsPointer" ></i>
                        <strong> 导入用户 </strong>
                    </span>
                </td>
                </tr>
            </tbody>;
        }

        public healthContent(a: Data.User.IUserSimpleData, _arry: React.ReactElement<any>[]): React.ReactElement<any>[] {
            _arry.push(<tr><td className={"item-1" + (a.ActionType == "delete" ? " acs-delete" : (a.FID ? "" : " acs-new-col")) + this.props.Vm.thClass } style={this.props.Vm.thstyle}>
                <ESpan Vm={new ESpanVm({ Content: a.UserName }) } children={null}/>
                <span className="acsEditSpanV">{a.UserSign}</span>
                <i className="fa fa-times acsPointer" onClick={() => { this.deleteUser(a) } }></i>
            </td>
                {this.props.Vm.RoleData.map((b) => {
                    return <td className={b.ActionType == "delete" || a.ActionType == "delete" ? "acs-delete" : (b.FID && a.FID ? "" : "acs-new-row") }>
                        <input type="checkbox"  onClick = {() => this.EditUser(a, b) } /></td>
                })
                }
            </tr>
            );
            return _arry
        }

        public deleteUser(a: Data.User.IUserSimpleData) {
            if (!a.ActionType) {
                a.ActionType = "delete"
            } else if (a.ActionType == "add") {
                for (var i = 0; i < this.props.Vm.UserData.length; i++) {
                    if (this.props.Vm.UserData[i].UserName == a.UserName) {
                        this.props.Vm.UserData.splice(i, 1);
                        break;
                    }
                }

            } else if (a.ActionType == "delete") {
                a.ActionType = "";
            }
            this.props.Vm.forceUpdate("");

        }
        public addUser() {
            urlFile.Core.AkUrl.Current().openUrl("$winNewUserPage$", true);
        }
        public EditUser(a: Data.User.IUserSimpleData, b: Data.User.IRoleSimpleData) {

        }

        protected pComponentDidMount() {

            super.pComponentDidMount();
        }
    }
}