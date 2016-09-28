import dataFile = require("./../../07data/data")
export namespace User {
    export interface IRoleSimpleData {
        FID: string;
        RoleName: string;
        RoleSign: string;
        ActionType?: string;
        isDelete?: boolean;
    }

    export interface IUserSimpleData {
        FID: string;
        ExtData?: IExtData;
        UserName: string;
        isDelete?: boolean;
        UserSign: string;
        User?: string;
        ActionType?: string;
    }

    export interface IExtData {
        RightValue: string;
        Icon: string;
        RightType: string | number;
    }

    export interface RoleActorData {
        RoleName: string;
        RoleSign: string;
    }

    export interface UserActorData {
        UserName: string;
        LoginName: string;
    }

    export interface submitData {
        RoleList: IRoleSimpleData[];
        UserList: IUserSimpleData[];
    }
}