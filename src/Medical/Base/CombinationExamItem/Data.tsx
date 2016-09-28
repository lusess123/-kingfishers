import dataFile = require("./../../../07data/data");
import pageFile = require("./../../../05tool/Pagination");

export namespace CombinationExamItem {

    export interface ICombinationExamItemData {
        FID?: string; //主键
        PackageId?: string; //套餐Id
        ItemId?: string; //项目Id
        UPDATE_TIME?: string;//最后更新时间

    }
    export interface CombinationExamItemPagerListData {

        Pager: pageFile.tool.Pagination;
        ListData: Array<ICombinationExamItemData>;
    }
}