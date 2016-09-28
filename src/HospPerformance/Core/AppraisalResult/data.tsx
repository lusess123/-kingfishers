import dataFile = require("./../../../07data/data");
import pageFile = require("./../../../05tool/Pagination");

export namespace Data {

    export interface IAppraisalMarkPageData
    {
        AppraisalStartDate?: Date; //启动日期
        AppraisalBeginDate?: Date;//开始日期
        AppraisalEndDate?: Date;//结束日期
        UserAppraisalList?: IUserAppraisalData[];
        //UserList?: IUserData[];// 考核对象
        //ItemList?: IAppraisalItemData[];//考核项目
    }

    export interface IAppraisalMarkSubmitData {
        AppraisalId?: string;//考核表Id
        AppraisalBeginDate?: Date;//开始日期
        AppraisalEndDate?: Date;//结束日期
       // User?: IUserData; //考核对象
        // ItemList?: IAppraisalItemData[];//考核项目
        AppraisalUser?: IUserAppraisalData;
    }

    export interface IUserAppraisalData {
        UserId?: string; //用户Id
        TrueName?: string;// 姓名
        IsAppraised?: boolean;//是否已考核
        OverallReviews?: string;//总评
        ItemList?: IAppraisalItemData[];
        IsSelect?: boolean;
    }

    export interface IUserData {
        UserId?: string; //用户Id
        TrueName?: string;// 姓名
        IsAppraised?: boolean;//是否已考核
        OverallReviews?: string;//总评
        IsSelect?: boolean;
    }

    export interface IAppraisalItemData {
        FID?: string; //项目Id
        Name?: string; //项目名
        Content?: string;//考核内容
        Standard?: string;//考核标准
        ObjectValue?: string;//目标值
        MaxValue?: string;//最大值
        Reviews?: string;//评语
        Result?: string;//考核结果
    }

  


    export const VluationData = [{ Value: "0", Text: "--考评评语--" }, { Value: "1", Text: "有上进心" }, { Value: "2", Text: "工作勤奋" },{ Value: "2", Text: "工作出色" }];

    export const AppraisalObjectData = [{ Value: "0", Text: "全部" }, { Value: "1", Text: "已评分" }, { Value: "2", Text: "未评分" }];
}