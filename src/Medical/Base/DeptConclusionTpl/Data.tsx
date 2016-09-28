import dataFile = require("./../../../07data/data");
import pageFile = require("./../../../05tool/Pagination");

export namespace DeptConclusionTpl {

    export interface IDeptConclusionTplData {
        FID?: string; //主键
        DeptId?:string//科室Id
        DeptName?: string; //科室名
        Name?: string;  //小结名称
        Content?: string; //小结内容
        ItemList?: IDeptConclusionTplItemData[];
        DeleteItemList?: string[];
    }

    export interface IDeptConclusionTplPagerListData {

        Pager: pageFile.tool.Pagination;
        ListData: Array<IDeptConclusionTplData>;
    }

    export interface IDeptConclusionTplItemData {
        FID?: string; //主键
        ItemId?: string;//项目Id
        ItemName?: string;//项目名称
        Unit?: string //单位
        GreaterThan?: string;  //大于
        LessThan?: string; //小于
        IsPositive?: string;//是否阳性
        KeyWord?: string //关键词

    }

}