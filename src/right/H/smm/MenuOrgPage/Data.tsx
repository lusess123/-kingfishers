import dataFile = require("./../../07data/data");
export namespace Menu {
    export interface IGroupSimpleData {
        FID: string;
        OrgName: string;
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
    }
    export interface IMenuButton {
        Fid: string;
        ParentId?: string
        ButtonName: string;
        ButtonType?: string;
        Org?: string;
        ActionType?: string;
    }
}

