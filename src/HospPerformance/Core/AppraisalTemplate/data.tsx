import dataFile = require("./../../../07data/data");
import pageFile = require("./../../../05tool/Pagination");

export namespace Data {

    export interface IAppraisalTemplatePageData {
        TemplateData: IAppraisalTemplateData;
        TypeList: IAppraisalTypeData[];
        UserSelectorData: IUserSelectorData;
        GradeList: IAppraisalGradeData[];
        ItemList: IAppraisalItemData[];
        UserList: IUserData[];
    }

    export interface IAppraisalTemplateData {
        FID?: string; //主键
        Subject?: string;  //名称
        Type?: string;//类型
        TypeText?: string;
        ResultType?: string// 结果类型
        ResultTypeText?: string;
        Remark?: string//备注
    }


    export interface IAppraisalTypeData {
        FID?: string; //主键
        Name?: string;  //名称
    }

    export interface IUserSelectorData {
        UserList?: IUserData[];
        PositionList?: IPositionData[];
    }

    export interface IUserData {
        UserId?: string; //主键
        TrueName?: string;  //名称
        DeptName?: string;//部门名称
        PositionName?: string;//职位名称
        DisplayName?: string; //部门名-职位名-姓名
    }

    export interface IPositionData {
        FID?: string; //主键
        Name?: string;  //名称
    }

    export interface IAppraisalItemData {
        FID?: string; //主键
        Name?: string;  //名称
        CategoryName?: string;//分类名
        ObjectValue?: string;//目标值
        MaxValue?: string;//最大值
        IsSelect?: boolean;
    }

    export interface IAppraisalGradeData {
        FID?: string; //主键
        Name?: string;  //名称
        UpperScore?: string;//分数上限
        LowerScore?: string;//分数下限
    }

    export interface IAppraisalTemplateGradeData {
        TotalScore?: string;
        GradeList: IAppraisalGradeData[];
    }

    export interface IAppraisalItemPagerListData {

        Pager: pageFile.tool.Pagination;
        ListData: Array<IAppraisalItemData>;
    }

    export interface IAppraisalTemplateSubmitData {
        TemplateData?: IAppraisalTemplateData;
        TemplateUserIds?: string[];
        AuthUserIds?: string[];
        ItemIds?: string[];
        GradeList?: IAppraisalGradeData[];
    }


    export const AppraiseTypeData = [{ Value: "0", Text: "月度" }, { Value: "1", Text: "季度" }, { Value: "2", Text: "年度" }];

    export const DepartmentData = [{ Value: "0", Text: "儿科" }, { Value: "1", Text: "内科" }, { Value: "2", Text: "妇产科" }, { Value: "2", Text: "皮肤科" }, { Value: "2", Text: "神经外科" }];
    
    export const JobData = [{ Value: "0", Text: "主任" }, { Value: "1", Text: "主治医师" }, { Value: "2", Text: "医师" }, { Value: "2", Text: "助理" }, { Value: "2", Text: "见习生" }];

    export const AppraisalResultType = [{ Value: "0", Text: "统计" }, { Value: "1", Text: "Excel导入" }, { Value: "2", Text: "评分" }];

}