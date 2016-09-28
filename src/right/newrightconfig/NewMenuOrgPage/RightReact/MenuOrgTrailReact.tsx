import domFile = require("./../../../../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");

import MenuOrgTable = require("./../MenuOrgTable");
import MenuOrgTableProps = MenuOrgTable.MenuOrgPage.MenuOrgPageProps;
import MenuOrgTableStates = MenuOrgTable.MenuOrgPage.MenuOrgPageStates;
import MenuOrgRoleTableAction = MenuOrgTable.MenuOrgPage.MenuOrgPageAction;
import Data = require("./../Data");

import EditSpanFile = require("./../../../../05tool/EditSpan");
import ESpan = EditSpanFile.EditSpan.EditSpanReact;
import ESpanVm = EditSpanFile.EditSpan.EditSpanVm;
export module Menu {
    export class MenuOrgTrailReact extends domCore.DomReact<MenuOrgTableProps, MenuOrgTableStates, MenuOrgRoleTableAction>
    {
        public pSender(): React.ReactElement<any> {
            return <div className="Hm-header-btn btn-group-sm clearfix">
                {
                    !this.props.Vm.ChageFlag ?
                        <input type="button" value="保存3" className="btn btn-primary  pull-right" disabled="disabled" />:
                        <a className="btn btn-sm btn-primary pull-right" onClick={() => { this.props.Vm.fun_Save() } }>保存2</a>
                        }
            </div>;

        }
    }
}