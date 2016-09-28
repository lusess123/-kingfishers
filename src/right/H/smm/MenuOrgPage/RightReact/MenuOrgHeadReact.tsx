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
    export class MenuOrgHeadReact extends domCore.DomReact<MenuOrgTableProps, MenuOrgTableStates, MenuOrgRoleTableAction>
    {
        public pSender(): React.ReactElement<any> {
            return <thead>
                <tr>
                    <th className="acsWidth16"> <span>菜单 / 组织机构 </span> </th>
                    {this.props.Vm.OrgData.map((a) => {
                        return <th>{a.OrgName} </th>
                    })
                    }
                </tr>
            </thead>;

        }
    }
}
