import dataFile = require("./../../../07data/data");
import pageFile = require("./../../../05tool/Pagination");

export namespace ExamPackage {

    export interface IExamPackageData {
        FID?: string; //主键
        SimpleCode?: string; //简码
        Name?: string; //套餐名称
        GroupPrice?: number; //集体价格
        IndividualPrice?: number;//个人价格
        AgeUpperLimit?: number; //上限
        AgeLowerLimit?: number; //下限
        Gender?: number;//性别
        Remark?: string;//说明
        UPDATE_TIME?: string;//最后更新时间
        DetailListData?: IExamPackageItemData[];
        DeleteItemList?: string[];

    }
    export interface ExamPackagePagerListData {

        Pager: pageFile.tool.Pagination;
        ListData: Array<IExamPackageData>;
    }
    export interface IExamPackageItemData {
        FID?: string; //主键
        PackageId?: string; //套餐Id
        ItemId?: string; //项目Id
    }
    export const ExamPackageGenderData = [{ Value: 0, Text: "全部" }, { Value: 1, Text: "男性" }, { Value: 2, Text: "女性" } ];
}