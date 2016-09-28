
import domFile = require("./../../../../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");

import Data = require("./Data");

import pageViewFile = require("./../../../../07data/PageView");

import EditSpanFile = require("./../../../../05tool/EditSpan");
import Espan= EditSpanFile.EditSpan.EditSpanReact;
import ESpanVm = EditSpanFile.EditSpan.EditSpanVm;

import UserRoleHeadReact = require("./RightReact/UserRoleHeadReact");
import UserRoleReact = require("./RightReact/UserRoleReact");

export module UserRoleTable {
    export class UserRoleTableAction extends domCore.DomAction { }
    export interface ILeftStyle {
        left: number;
    }

    export class UserRoleTableReact extends domCore.DomReact<UserRoleTableProps, UserRoleTableStates, UserRoleTableAction> implements domCore.IReact{
        public state = new UserRoleTableStates(); 
        public pSender(): React.ReactElement<any> {
            return <div>
                名称为: UserRoleTable的组件
            </div>;
        }
        protected pComponentDidMount() { super.pComponentDidMount(); }
    }
    export interface IUserRoleTableConfig {
        RoleData: Data.User.IRoleSimpleData[];
        UserData: Data.User.IUserSimpleData[];
    }

    export class UserRoleTableVm extends domCore.DomVm {
        public ReactType = UserRoleTableReact;

        public rUserRoleSender() {
            return this.intoDomR(UserRoleReact.User.UserRoleReact);
        }

        public rUserRoleHeadSender() {
            return this.intoDomR(UserRoleHeadReact.User.UserRoleHeadReact);
        }

        public thClass: string = "";
        public thstyle: ILeftStyle;
        public RoleData: Data.User.IRoleSimpleData[] = [];
        public UserData: Data.User.IUserSimpleData[] = [];
        public _arry: React.ReactElement<any>[] = [];
        public updateFlag: boolean = false;
        public UserEditData: Data.User.IUserSimpleData;
        public IsUserBodyHide: Boolean = false;
        public constructor(config?: IUserRoleTableConfig) {
            super();
            if (config) {
                this.RoleData = config.RoleData;
                this.UserData = config.UserData;
            }
        }
        public addRole(obj: Data.User.RoleActorData) {
            this.RoleData.unshift({ FID: "", RoleName: obj.RoleName, RoleSign: obj.RoleSign, ActionType: "add" });
            this.forceUpdate("");
        }

        public addUser(obj: Data.User.UserActorData) {
            this.UserData.unshift({ FID: "", UserName: obj.UserName, UserSign: obj.UserName });
            this.forceUpdate("");
        }


        public delRole(a: Data.User.IRoleSimpleData) {
            for (var i = 0; i < this.RoleData.length; i++) {
                if (a.RoleSign == this.RoleData[i].RoleSign) {
                    this.RoleData.splice(i, 1);
                    break;
                }
            }
            this.forceUpdate("");
        }
        public ESpanDict: pageViewFile.data.IDict<ESpanVm> = {};

        public getESpan(name: string, config: EditSpanFile.EditSpan.IEditSpanVm) {
            var _espan = this.ESpanDict[name];
            if (_espan) {
                return _espan;
            }
            else {
                var _es = this.ESpanDict[name] = new ESpanVm(config);
                return _es;
            }
        }
    }


    export class UserRoleTableStates extends domCore.DomStates { }
    export class UserRoleTableProps extends domCore.DomProps<UserRoleTableVm>{ }
}

