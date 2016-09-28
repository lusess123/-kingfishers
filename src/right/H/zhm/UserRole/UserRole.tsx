
import domFile = require("./../../../../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util"); 
import urlFile = require("./../../../../01core/Url");
import PaginationFile = require("./../../../../05tool/Pagination");


import UserRoleTableFile = require("./UserRoleTable");

export module UserRole {
    export class UserRowAction extends domCore.DomAction {
    }

    export interface ILeftStyle {
        left: number;
    }

    export class UserRoleReact extends domCore.DomReact<UserRowProps,UserRowStates,UserRowAction> implements domCore.IReact {
        public state = new UserRowStates();
        public pSender(): React.ReactElement<any> {
            return <div className="acs-table" onScroll={(e) => { this.fun_Scroll(e); } }>
                <div>
                    <table className ="acs-table acs-table-tree">
                        {this.props.Vm.table.rUserRoleHeadSender() }
                        {this.props.Vm.table.rUserRoleSender() }
                    </table>
                </div>
            </div>;
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();
        }

        private thClass(): string {

            return "acsTextC " + (this.props.Vm.IsAcsRelative ? " acsRelative acsTableTh" :"");
        }
        private thStyle(): ILeftStyle{
            return { left: (this.props.Vm.LeftNum) };
        }

        public fun_Scroll(e: React.UIEvent) {
            var _$obj = $(e.target);
            this.props.Vm.LeftNum = _$obj.scrollLeft();
            //this.props.Vm.table.forceUpdate("");
        }

        //export interface IUserRoleConfig {
        //    UserTable:UserTableFile
        //}

    }

    export interface zhmTestPageConfig {
        MenuUserTable: UserRoleTableFile.UserRoleTable.IUserRoleTableConfig;
    }

    export class UserRoleVm extends domCore.DomVm {
        public table: UserRoleTableFile.UserRoleTable.UserRoleTableVm;
        public LeftNum: number = 0;
        public IsAcsRelative: boolean = false;
        public ReactType = UserRoleReact;
        public pagination: PaginationFile.tool.PaginationVm = new PaginationFile.tool.PaginationVm();
        public scrollAuto() {
            this.IsAcsRelative = this.LeftNum > 0;
            this.forceUpdate("");
        }
        public constructor(config?: zhmTestPageConfig) {
            super();
            if (config) {
                this.table = new UserRoleTableFile.UserRoleTable.UserRoleTableVm(config.MenuUserTable)
            }
        }

    }
    export class UserRowStates extends domCore.DomStates { }

    export class UserRowProps extends domCore.DomProps<UserRoleVm> { }

}


