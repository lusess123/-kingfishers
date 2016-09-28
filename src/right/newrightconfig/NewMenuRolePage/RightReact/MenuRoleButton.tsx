import domFile = require("./../../../../01core/0Dom");
import React = require("react");
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



export module Menu {
    export class MenuRoleButtonReact extends domCore.DomReact<MenuRoleTableProps, MenuRoleTableStates, MenuRoleTableAction>{
        public pSender(): React.ReactElement<any> {
            return <div className="Hm-header-btn btn-group-sm clearfix">
                { this.props.Vm.ischage ?
                    <a className="btn btn-sm btn-primary pull-right" onClick={() => { this.props.Vm.submit() } }>保存1</a> : <input type="button" value="保存4" className="acs-input-button pull-right" disabled="disabled" /> }
                <a className="btn btn-sm btn-primary pull-right">设置表头</a>
            </div>;
        }

        protected pInstall(): void {

            this.props.Vm.getEmit("React").addListener("forceUpdate_MenuRoleButton", (callback) => {
                this.forceUpdate(callback);
            });

            super.pInstall();
        }
    }
}