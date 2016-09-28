import domFile = require("./../../../01core/0Dom"); import React = require("react");

import iocFile = require("./../../../01core/Ioc");


import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
//import iocFile = require("./../01core/Ioc"); 
import urlFile = require("./../../../01core/Url");
import PaginationFile = require("./../../../05tool/Pagination");
import pagination = require("./../../05tool/Pagination");
import MenuUserRoleTableFile = require("./MenuUserRoleTable");

export module MenuUserRole {

    export class MenuUserRoleAction extends domCore.DomAction {

    }

    export interface ILeftStyle {
        left: number;
    }

    export class MenuUserRoleReact extends domCore.DomReact<MenuUserRoleProps, MenuUserRoleStates, MenuUserRoleAction> implements domCore.IReact {
        public state = new MenuUserRoleStates();
        public pSender(): React.ReactElement<any> {
            return <div>
                {this.props.Vm.table.rMenuRolebuttonSender() }
                <div className="acs-table "  onScroll={(e) => { this.fun_Scroll(e); } } >
                    <div className="Hm-table">
                        <table className="table table-hover table-bordered table-striped acs-table Hm-table-tree">
                            {this.props.Vm.table.rMenuRoleheadSender() }
                            {this.props.Vm.table.rMenuRoleSender() }
                            {this.props.Vm.table.rMenuUserHeadSender() }
                            {this.props.Vm.table.rMenuUserSender() }
                        </table>
                    </div>
                </div>
            </div>;
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();
        }

        private thClass(): string {
            return "text-center " + (this.props.Vm.IsAcsRelative ? " Hf-relative Hf-table-th " : "");
        }

        private thStyle(): ILeftStyle {
            return { left: (this.props.Vm.LeftNum) };
        }

        private fun_Scroll(e: React.UIEvent) {
            var _$obj = $(e.target);
            this.props.Vm.LeftNum = _$obj.scrollLeft();
            this.props.Vm.table.thclass = this.thClass();
            this.props.Vm.table.thstyle = this.thStyle();
            this.props.Vm.scrollAuto();
            this.props.Vm.table.forceUpdate("");
        }
    }

    export interface IMenuUserRoleConfig {
        MenuUserTable: MenuUserRoleTableFile.MenuUserRoleTable.IMenuUserRoleTableConfig;
        //分页数据
        UniId: string;

    }

    export class MenuUserRoleVm extends domCore.DomVm {

        public table: MenuUserRoleTableFile.MenuUserRoleTable.MenuUserRoleTableVm;

        public LeftNum: number = 0;
        public IsAcsRelative: boolean = false;
        public UniId: string;
        public ReactType = MenuUserRoleReact;
        public pagination: PaginationFile.tool.PaginationVm = new PaginationFile.tool.PaginationVm();

        public scrollAuto() {
            this.IsAcsRelative = this.LeftNum > 0;
            this.forceUpdate("");
        }

        public constructor(config?: IMenuUserRoleConfig) {
            super();
            if (config) {
                config.MenuUserTable.Unid = config.UniId;
                this.table = new MenuUserRoleTableFile.MenuUserRoleTable.MenuUserRoleTableVm(config.MenuUserTable);
                //要给分页控件传数据
                this.UniId = config.UniId;

            }


        }

    }

    export class MenuUserRoleStates extends domCore.DomStates { }

    export class MenuUserRoleProps extends domCore.DomProps<MenuUserRoleVm> { }


}