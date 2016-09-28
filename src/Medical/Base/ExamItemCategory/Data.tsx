import dataFile = require("./../../../07data/data");
import pageFile = require("./../../../05tool/Pagination");

export namespace ExamItemCategory {
    export interface ExamItemCategoryData {
        FID?: string;
        Code?: string;//代码
        Name?: string;//名称
        UPDATE_TIME?: string;
    }

    export interface ExamItemCategoryPagerListData {
        Pager: pageFile.tool.Pagination;
        ListData: Array<ExamItemCategoryData>;
    }
}