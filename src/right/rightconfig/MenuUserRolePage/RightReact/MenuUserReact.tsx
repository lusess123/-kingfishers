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
    export class MenuUserReact extends domCore.DomReact<MenuUserRoleTableProps, MenuUserRoleTableStates, MenuUserRoleTableAction>
    {

        public pSender(): React.ReactElement<any> {
            return <tbody className={(this.props.Vm.IsMenuUserBodyHide ? "hide" : "") }>
                {
                    this.props.Vm.UserData.length > 0 ? this.initData() : ""
                }

                <tr><td className={this.props.Vm.thclass } style={this.props.Vm.thstyle}>
                    <span className="acsRelative">
                        <i className ="fa fa-plus-circle Hu-pointer" onClick={() => { this.addUser(); } }></i>
                        <strong>添加用户</strong>
                    </span>
                    <span className="acsRelative">
                        <i className="fa fa-th-large Hu-pointer" ></i>
                        <strong> 导入用户 </strong>
                    </span>
                </td>
                </tr>
            </tbody>;
        }

        public initData() {
            var arry = [];
            this.props.Vm.UserData.map((a, index) => {
                this.props.Vm._arry = [];
                var trElement = this.healthContent(a, this.props.Vm._arry, index);
                //return trElement
                arry.push(trElement)
            }
            )
            return arry;
        }
        //new ESpanVm({
        //        Content: a.UserName, ChangeEvent: (vm, ischage) => {
        //                        this.props.Vm.UpdateUser(a, vm.Content)
        //}
        //                }) 
        public healthContent(a: Data.Menu.IUserSimpleData, _arry: React.ReactElement<any>[], index: number): React.ReactElement<any>[] {
            _arry.push(<tr><td className={"Hu-item-1" + (a.ActionType == "Del" ? " Hs-delete" : (a.ActionType == "Add" ? " Hs-new-col" : (a.ActionType == "Update" ? " Hs-update" : ""))) + this.props.Vm.thclass } style={this.props.Vm.thstyle}>
                <ESpan Vm={this.props.Vm.UserEspeList[index]} children={null}/>
                <span className="Hc-edit-spanH">
                    {a.UserSign}
                </span>
                <i className="fa fa-times Hu-pointer" onClick={() => { this.deleteUser(a) } }></i>
            </td>
                {this.props.Vm.RoleData.map((b) => {
                    return <td className={this.isCheck(b.FID, a.FID) ? "Hs-td-checked" : (b.ActionType == "Del" || a.ActionType == "Del" ? "Hs-delete" : (a.ActionType == "Add" || b.ActionType == "Add" ? "Hs-new-col" : (a.ActionType == "Update" || b.ActionType == "Update" ? "Hs-update" : ""))) }>
                        <input type="checkbox" checked={this.isCheck(b.FID, a.FID) }  onClick = {() => this.EditUser(a, b) } onChange={(c) => { this.changeCheck(b, a, c) } } /></td>
                })
                }
            </tr>
            );
            return _arry
        }



        public isCheck(Role: string, User: string) {
            return this.props.Vm.fun_isCheckUser(Role, User);
        }

        public deleteUser(a: Data.Menu.IUserSimpleData) {
            debugger
            if (!a.ActionType) {
                a.ActionType = "Del"
            } else if (a.ActionType == "Add") {
                for (var i = 0; i < this.props.Vm.UserData.length; i++) {
                    if (this.props.Vm.UserData[i].UserName == a.UserName) {
                        this.props.Vm.UserData.splice(i, 1);
                        break;
                    }
                }

            } else if (a.ActionType == "Del") {
                a.ActionType = "";
            }
            this.props.Vm.forceUpdate("");
        }

        public changeCheck(Role: Data.Menu.IRoleSimpleData, User: Data.Menu.IUserSimpleData, event: React.FormEvent) {
            if (Role.ActionType == "Del" || User.ActionType == "Del") {
                alert("该节点已被删除!");
            } else {
                this.props.Vm.fun_changeRoleUserCheck(Role, User, event);
            }

        }

        //fun_changeRoleUserCheck
        protected pInstall(): void {

            this.props.Vm.getEmit("React").addListener("forceUpdate_MenuUser", (callback) => {
                this.forceUpdate(callback);
            });

            super.pInstall();
        }

        public addUser() {
            urlFile.Core.AkUrl.Current().openUrl("$winNewUserPage$", true);
        }
        public EditUser(a: Data.Menu.IUserSimpleData, b: Data.Menu.IUserRoleSimpleData) {

        }

        protected pComponentDidMount() {

            super.pComponentDidMount();
        }
    }
}