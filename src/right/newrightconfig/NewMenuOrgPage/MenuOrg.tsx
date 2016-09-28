
import domFile = require("./../../../01core/0Dom");import React = require("react");
  
import iocFile = require("./../../../01core/Ioc");
 
   
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
//import iocFile = require("./../01core/Ioc"); 
import urlFile = require("./../../../01core/Url");
import PaginationFile = require("./../../../05tool/Pagination");

import MenuOrgTableFile = require("./MenuOrgTable");
export module MenuOrg {
    export class MenuOrgAction extends domCore.DomAction {
    }

    export class MenuOrgReact extends domCore.DomReact<MenuOrgProps, MenuOrgStates, MenuOrgAction> implements domCore.IReact {

        public state = new MenuOrgStates();
        private test(): React.ReactElement<any> {
            alert(this.props.Vm.table.IsMulit);
            console.log(this.props.Vm.table);
            return null;
        }
        public pSender(): React.ReactElement<any> {
            return <div className="table-responsive">
                <table className="table table-hover table-bordered table-striped Hm-table-tree">
                   
                    {this.props.Vm.table.rMenuOrgHeadSender() }
                    {this.props.Vm.table.rMenuOrgSender() }
                </table>
            </div>;
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }
    }
    export interface IMenuOrgRowConfig {
        
        MenuOrgTable: MenuOrgTableFile.MenuOrgPage.IMenuOrgPageConfig;
        UniId?: string;
        
    }
    export class MenuOrgVm extends domCore.DomVm {
        public ReactType = MenuOrgReact;
        public table: MenuOrgTableFile.MenuOrgPage.MenuOrgPageVm = new MenuOrgTableFile.MenuOrgPage.MenuOrgPageVm();
        public UniId: string;
        public constructor(config?: IMenuOrgRowConfig) {
            super();
            if (config) {
                this.table = new MenuOrgTableFile.MenuOrgPage.MenuOrgPageVm(config.MenuOrgTable);
                this.UniId = config.UniId;
            }


          
        }

    }
    export class MenuOrgStates extends domCore.DomStates {
    }


    export class MenuOrgProps extends domCore.DomProps<MenuOrgVm>{
    }



}


