import domFile = require("./../../../../../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../../01core/Util");
import iocFile = require("./../../../../../01core/Ioc");
import urlFile = require("./../../../../../01core/Url");

import MenuOrgTable = require("./../MenuOrgTable");
import MenuOrgTableProps = MenuOrgTable.MenuOrgPage.MenuOrgPageProps;
import MenuOrgTableStates = MenuOrgTable.MenuOrgPage.MenuOrgPageStates;
import MenuOrgRoleTableAction = MenuOrgTable.MenuOrgPage.MenuOrgPageAction;
import Data = require("./../Data");

import EditSpanFile = require("./../../../../../05tool/EditSpan");
import ESpan = EditSpanFile.EditSpan.EditSpanReact;
import ESpanVm = EditSpanFile.EditSpan.EditSpanVm;
export module Menu {
    export class MenuOrgTrailReact extends domCore.DomReact<MenuOrgTableProps, MenuOrgTableStates, MenuOrgRoleTableAction>
    {
        public pSender(): React.ReactElement<any> {
            return <div className="acsTextC acsMarginT1-5">
                {
                    this.props.Vm.updateFlag ? <a className="button blue tiny" onClick={() => { this.props.Vm.fun_Save() } }>保存</a> : <input type="button" value="保存" className="acs-input-button" disabled="disabled"></input>
                }
            </div>;

        }
    }
}