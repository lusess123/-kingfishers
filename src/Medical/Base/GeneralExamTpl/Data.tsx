import dataFile = require("./../../../07data/data");
import pageFile = require("./../../../05tool/Pagination");

export namespace GeneralExamTpl {

    export interface IGeneralExamTplData {
        FID?: string; //主键
        Name?: string;  //名称
        Summary?: string; //综述
        Advice?:string //建议
        ItemList?: IGeneralExamTplItemData[];
        DeleteItemList?: string[];
    }

    export interface IGeneralExamTplPagerListData {

        Pager: pageFile.tool.Pagination;
        ListData: Array<IGeneralExamTplData>;
    }

    export interface IGeneralExamTplItemData {
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