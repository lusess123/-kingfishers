import dataFile = require("./../../07data/data");
export namespace UserManager {
    //PagerListData   UserManagerListData
    export interface PagerListData<T> {
        Pager: dataFile.Right.PagerData;
        List: Array<T>;
    }


    export interface UserManagerData {
        UserID: string
        NickName: string    //名称
        UserName: string   //登录名
        Area: string        //地区
        UserKindId: string   //用户类型ID
        UserKindName: string //用户类型名称
        IsActive: boolean     //是否启用
        CreateTime: string       //创建时间
        Creater: string        //创建人
        CreaterName: string     //创建人姓名
        Remark: string         //备注	
        MEID: string            //手机MEID号	
        FControlUnitID: string   //组织机构
        FControlUnitName: string
        UPDATE_TIME: string
    }

    export interface UserManagerDetail extends UserManagerData {
        RoleNames: SimpleRoleData[];
        userRoles: userroleData[];

    }

    export interface SimpleRoleData {
        RoleID: string
        RoleName: string
    }


    export interface UserManagerListData extends PagerListData<UserManagerData> {

    }

    export interface IUserManagerButtonData {
        FID: string;
        FName: string;
        FKey: string;
        FValue: string;
        OrderId: string;
    }

    export class userroleData {
        ActionType: string;
        originalValue: string;
        changeValue: string;
    }
}