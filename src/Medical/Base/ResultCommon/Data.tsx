import dataFile = require("./../../../07data/data");
import pageFile = require("./../../../05tool/Pagination");

export namespace ResultCommon {

    export interface IResultCommonData {
        FID?: string; //主键
        SimpleCode?: string; //简码
        ItemId?: string; //体检项目
        Result?: string; //常见结果
        OrderNum?: string;//序号
        UPDATE_TIME?: string;//最后更新时间
    }
    export interface ResultCommonPagerListData {

        Pager: pageFile.tool.Pagination;
        ListData: Array<IResultCommonData>;
    }
}