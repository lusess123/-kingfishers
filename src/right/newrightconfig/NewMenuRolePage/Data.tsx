import dataFile = require("./../../../07data/data");
export namespace Menu {
    export interface IRoleSimpleData {
        FID: string;
        RoleName: string;
        RoleSign: string;
        ActionType?: string;
        isDelete?: boolean;
        OriginalName?: string;

    }

    export interface IUserRoleSimpleData {
        FID: string;
        RoleName: string;
        RoleSign: string;
        ActionType?: string;
        isDelete?: boolean;

    }

    export interface IMenuSimpleData {
        FID: string;
        MenuName: string;
        isParent: boolean;
        isLeaft?: boolean;
        IsHidden?: boolean;
        Children?: IMenuSimpleData[];
        ParentId?: string;
        isDelete?: boolean;
        Org?: string;
        Type?: string;
        ActionType?: string;
        ButtonList?: IMenuButton[];
        ParentVm?: IMenuSimpleData;
        RightValue?: string;//权值
        OriginalName?: string;
    }

    export interface IMenuButton {
        FID: string;
        ParentId?: string
        ButtonName: string;
        ButtonType?: string;
        Org?: string;
        ActionType?: string;
        OriginalName?: string;
        IsHidden?: boolean;
        ParentVm?: IMenuSimpleData;
    }

    export interface IUserSimpleData {
        FID: string;
        ExtData?: IExtData;
        UserName: string;
        isDelete?: boolean;
        UserSign: string;
        User?: string;
        ActionType?: string;
        OriginalName?: string;

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
    export interface UserRoleActorData {
        RoleName: string;
        RoleSign: string;
    }

    export interface MenuActorData {
        MenuName: string;
    }


    export interface submitData {

        RoleList: IRoleSimpleData[];

        MenuList: IMenuSimpleData[];

        //UserList: IUserSimpleData[];

        GroupList: IGrantData[];
    }

    //export interface UserActorData {
    //    UserName: string;
    //    UserSign: string;

    //}




    //================提交的数据的实体============
    export interface ISubmitData {
        MenuRoleDataList: IRoleRightData[];
        GroupData: ISubmitGroupData;
    }

    export interface IRoleRightData {
        Operation: string;
        RoleDataList: ISubmitRoleData[];
        MenuDataList: ISubmitMenuData[];
       // UserDataList: ISubmitUserData[];
        GrantDataList?: IGrantData[];        
    }

    //需要给每个实体加上actiontype？？？？
    export interface ISubmitRoleData {
        DataID: string;
        Data: IRoleData;

    }

    export interface ISubmitMenuData {
        DataID: string;
        Data: IMenuData;
    }

    //export interface ISubmitUserData {
    //    DataID: string;
    //    Data: IUserData;
    //}

    export interface IRoleData {
        RoleID: string;
        RoleName: string;
        Operation: string;
    }

    //export interface IUserData {
    //    UserID: string;
    //    UserName: string;
    //    Operation: string;
    //}

    export interface IMenuData {
        MenuName: string;
        ParentId: string;
        RightValue: string;
        RightDesc: string;
        MenuType?: string;//判断是否为按钮
    }

    export interface IGrantData {
        NewKey: string;//新增的权限主题的ID
        Key: string;//原有权限主题的ID
        NewRightIds: string[];//新的菜单的ID
        RightIds: string[];//原有的菜单的ID
        RightGrantType: string;//操作的类型  是添加还是删除？？
        MenuType?: string;
    }
    export interface ISubmitGroupData {
        DataID: string;
        Data: IGroupData;
    }
    export interface IGroupData {
        GroupID: string;
        GroupName: string;
    }
}