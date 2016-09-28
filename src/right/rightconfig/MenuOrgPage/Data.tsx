import dataFile = require("./../../07data/data");
export namespace Menu {
    export interface IGroupSimpleData {
        FID: string;
        OrgName: string;
    }
    export interface IMenuSimpleData {
        FID: string;
        MenuName: string;
        OriginalName?: string;
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
    }
    export interface IMenuButton {
        FID: string;
        OriginalName?: string;
        ParentId?: string
        ButtonName: string;
        ButtonType?: string;
        IsHidden?: boolean;
        Org?: string;
        ActionType?: string;
        RightValue?: string;//权值
        ParentVm?: IMenuSimpleData;
    }

    //提交数据的实体



    export interface ISubmitData {
        GroupRightDataList: IGroupRightData[];
    }

    export interface IGroupRightData {
        Operation: string;
        GroupDataList: ISubmitGroupData[];
        MenuDataList: ISubmitMenuData[];
        GrantDataList?: IGrantData[];
    }

    export interface ISubmitGroupData
    {
        DataID: string;
        Data: IGroupData;
    }

    export interface IGroupData
    {
        GroupID: string;
        GroupName: string;
    }

    export interface ISubmitMenuData {

        DataID: string;
        Data: IMenuData;
    }

    export interface IMenuData
    {
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
}



