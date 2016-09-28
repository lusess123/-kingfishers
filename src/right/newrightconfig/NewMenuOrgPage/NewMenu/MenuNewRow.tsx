import domFile = require("./../../../../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import eventFile = require("./../../../../01core/Event");

import menuInsertRowFile = require("./MenuNewMaster");

export module MenuNewRow {
    export class MenuNewRowAction extends domCore.DomAction {
    }

    export class MenuNewRowReact extends domCore.DomReact<MenuNewRowProps, MenuNewRowStates, MenuNewRowAction> implements domCore.IReact {

        public state = new MenuNewRowStates();

        public pSender(): React.ReactElement<any> {
            return <div className="panel">{this.props.Vm.menuMasterObj.intoDom()}</div>;
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IMenuNewRowConfig {
       MenuNewRow : menuInsertRowFile.MenuNewMaster.IMenuNewMasterConfig;
    }

    export class MenuNewRowVm extends domCore.DomVm {
        public ReactType = MenuNewRowReact;

        public menuMasterObj: menuInsertRowFile.MenuNewMaster.MenuNewMasterVm; 
        public constructor(config?: IMenuNewRowConfig) {
            super();
            if (config) {
                this.menuMasterObj = new menuInsertRowFile.MenuNewMaster.MenuNewMasterVm(config.MenuNewRow);

            }
        }
    }
    export class MenuNewRowStates extends domCore.DomStates {
    }


    export class MenuNewRowProps extends domCore.DomProps<MenuNewRowVm>{
    }



}


