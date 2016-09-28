
import domFile = require("./../../../../01core/0Dom");import React = require("react");
  
import iocFile = require("./../../../../01core/Ioc");
 
   
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
//import iocFile = require("./../01core/Ioc"); 
import urlFile = require("./../../../../01core/Url");

import MenuOrgTableFile = require("./MenuOrgTable");
export module MenuOrg {
    export class MenuOrgAction extends domCore.DomAction {
    }

    export class MenuOrgReact extends domCore.DomReact<MenuOrgProps, MenuOrgStates, MenuOrgAction> implements domCore.IReact {

        public state = new MenuOrgStates();

        public pSender(): React.ReactElement<any> {
            return <div className="acs-table acsWidth100">
                    <table className="acs-table acs-table-tree">
                        {this.props.Vm.table.rMenuOrgHeadSender() }
                        {this.props.Vm.table.rMenuOrgSender() }
                    </table>
                </div>
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }
    }
    export interface IMenuOrgRowConfig {
        
        MenuOrgTable: MenuOrgTableFile.MenuOrgPage.IMenuOrgPageConfig;
    }
    export class MenuOrgVm extends domCore.DomVm {
        public ReactType = MenuOrgReact;
        public table: MenuOrgTableFile.MenuOrgPage.MenuOrgPageVm = new MenuOrgTableFile.MenuOrgPage.MenuOrgPageVm();
       
        public constructor(config?: IMenuOrgRowConfig) {
            super();
            if (config) {
                this.table = new MenuOrgTableFile.MenuOrgPage.MenuOrgPageVm(config.MenuOrgTable);
                //要给分页控件传数据
            }
        }

    }
    export class MenuOrgStates extends domCore.DomStates {
    }


    export class MenuOrgProps extends domCore.DomProps<MenuOrgVm>{
    }



}


