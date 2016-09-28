import dataFile = require("./../../../07data/data");
import pageFile = require("./../../../05tool/Pagination");

export namespace ExamItem {

    export interface IExamItemData {
        FID?: string; //主键
        SimpleCode?: string; //简码
        ItemCode?: string; //项目代码
        Name?: string; //项目名称
        DepartmentId?: string;//科室
        ItemCategory?: string;//项目分类
        Unit?: string;//单位
        UpperLimit?: number; //上限
        LowerLimit?: number; //下限
        Price?: number;//价格
        Order?: string;//序号
        ResultClass?: string//体检结果类型
        Remark?: string;//说明
        UPDATE_TIME?: string;//最后更新时间
        IsSelect?: boolean;
    }
    export interface ExamItemPagerListData {

        Pager: pageFile.tool.Pagination;
        ListData: Array<IExamItemData>;
    }
}