import domFile = require("./../../../../01core/0Dom"); import React = require("react");
import ReactDOM = require("react-dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");

import MenuRoleTable = require("./../MenuRoleTable");
import MenuRoleTableProps = MenuRoleTable.MenuRoleTable.MenuRoleTableProps;
import MenuRoleTableStates = MenuRoleTable.MenuRoleTable.MenuRoleTableStates;
import MenuRoleTableAction = MenuRoleTable.MenuRoleTable.MenuRoleTableAction;

import EditSpanFile = require("./../../../../05tool/EditSpan");
import ESpan = EditSpanFile.EditSpan.EditSpanReact;
import ESpanVm = EditSpanFile.EditSpan.EditSpanVm;



import Data = require("./../Data");


export module Menu {
    export class MenuRoleHeadReact extends domCore.DomReact<MenuRoleTableProps, MenuRoleTableStates, MenuRoleTableAction>
    {
        public pSender(): React.ReactElement<any> {
            return <thead>
                <tr>
                    <th className={this.props.Vm.thclass} style={this.props.Vm.thstyle}>
                        <i className={"Hu-pointer fa fa-caret-" + (this.props.Vm.IsMenuRoleBodyHide ? "up " : "down ") } onClick={() => { this.fun_MenuRoleBodyHide(); } }></i><span>菜单 / 角色 </span>
                        <span><i className="fa fa-plus-circle Hu-pointer" onClick={() => { this.fun_AddRole() } }></i>
                            <strong>添加角色</strong></span>
                        <span><i className="fa fa-th-large Hu-pointer"></i><strong>导入角色</strong></span>
                    </th>
                    {this.props.Vm.RoleData.map((a) => {
                        return <th className={a.ActionType == "Del" ? "Hs-delete" : (a.ActionType == "Add" ? "Hs-new-col":(a.ActionType=="Update" ? "Hs-update":"")) }><ESpan  children={null} Vm={this.Em(a.RoleName, (c, b) => { this.props.Vm.UpdateRole(a, c.Content) }) } /><span className="Hc-edit-spanV">{a.RoleSign}</span>
                            <i className={"fa fa-times Hu-pointert" + (a.ActionType == "Del" ? " Hs-delete" : (a.ActionType == "Add" ? "Hs-new-col" : (a.ActionType == "Update" ? "Hs-update" : ""))) } onClick={() => { this.props.Vm.fun_delRole(a) } }></i></th>

                    })
                    }</tr></thead>;
        }




        public fun_MenuRoleBodyHide() {
            this.props.Vm.IsMenuRoleBodyHide = !this.props.Vm.IsMenuRoleBodyHide;
            this.props.Vm.forceUpdate("");
        }




        public fun_AddRole() {
            urlFile.Core.AkUrl.Current().openUrl("$winRCNewRolePage$", true);
        }

       

        protected pComponentDidMount() {
            super.pComponentDidMount();
        }

        public addMenuFromPage(a: Data.Menu.MenuActorData) {

        }

        private EspanVMIndex: number = 0;

        private Em(content: string, changeEvent?: EditSpanFile.EditSpan.IChangeEvent, config?: EditSpanFile.EditSpan.IEditSpanVm): ESpanVm {
            // this.EspanVMIndex++;
            if (config) {
                config.Content = content;
                if (changeEvent) {
                    config.ChangeEvent = changeEvent;
                }
            }
            else {
                config = { Content: content, ChangeEvent: changeEvent };
            }
            return this.props.Vm.getESpan("name_" + content, config);
        }



        public submit(): Data.Menu.submitData {
            var _data: Data.Menu.submitData;


            return _data;
        }
    }

}