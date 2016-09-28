import dataFile = require("./../../../07data/data");
import pageFile = require("./../../../05tool/Pagination");

export namespace ExamPackageSelectorData {
   
    export interface IPackageData {
        FID: string;
        Name: string;  //套餐名
        Desc: string; //套餐描述
        IndividualPrice: string;//套餐个人价格
        GroupPrice:string//套餐团体价格
        IsSelect?: boolean;
    }

    export interface IPackagePagerListData {
        Pager: dataFile.Right.PagerData;
        ListData: Array<IPackageData>;
    }

    export interface IItemData {
        ItemId: string;
        DepartmentName: string;  //科室名
        Name: string; //项目名
        Price: string;//项目价格
        GroupPrice: string// 
        IsSelect?: boolean;
    }

    export interface IItemPagerListData {
        Pager: dataFile.Right.PagerData;
        ListData: Array<IItemData>;
    }

    export interface IPickItem {
        Key: string;
        Text: string;
        IsSelect?: boolean;
    }

}