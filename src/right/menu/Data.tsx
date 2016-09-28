
import dataFile = require("./../../07data/data");
export namespace Menu {
    export interface IMenuData {
        FID: string;
        MenuName: string;
           ParentId: string;
           ParentName: string;
           MenuKindId: string;
           MenuKindName: string;
           Key: string;
           IconUrl: string;
           IconName: string;
           UPDATE_TIME: string;
           KeyType: string;
    }

    export interface IParentsMenuData
    {
        fid: string;
        Name: string;
    }

    export interface IMenuDetailData {
        FID?: string;
        MenuName?: string;
        ParentId?: string;
        ParentName?: string;
        MenuKindId?: string;
        MenuKindName?: string;
        Key?: string;
        OrderId?:number;
        RightDesc?:string;
        MenuButtonList?: Array<IMenuButtonData>;
        DeleteButtonList?: Array<string>;
    }

    export interface PagerListData<T> {
        Pager: dataFile.Right.PagerData;
        List: Array<T>;
    }

    export interface MenuPagerListData extends PagerListData<IMenuData>
    {
    } 
   

     export interface IMenuButtonData {
         FID?: string;
         ParentRightValue?: string;
        FName?: string;
        FKey?: string;
        FValue?: string;
        OrderId?: string;
          
    }

}