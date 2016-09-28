import dataFile = require("./../../../07data/data");
import pageFile = require("./../../../05tool/Pagination");

export namespace Data {

    export interface ISalaryPageData {
        SalaryData: ISalaryData;
        UserList: IUsersData[];
        ItemList: SalaryItemValueOrCount[];
        SalaryItemSet: ISalaryItemSet[];
    }
    export interface SalaryItemValueOrCount {
        FID?: string;
        Name?: string;
        Fileds?: string;
        Type?: string;
        Detail?: string;
        ValueOrCount?: string;
    }
    export interface ISalaryData {
        FID?: string;
        Title?: string;//标题
        TemplateID?: string;
        TemplateName?: string;
        Month?: string;
        UserNumbers?: string;
        SalaryTotal?: string;
    }

    export interface IUsersData {
        UserId?: string; //主键
        TrueName?: string;  //名称
        DeptName?: string;//部门名称
        PositionName?: string;//职位名称
        PositionId?: string;
        DeptId?: string;
        FNumber?: string;
    }

    export interface ISalaryItem {
        FID?: string;
        Name?: string;
        Fileds?: string;
        Type?: string;
        Detail?: string;
        AppraisalID?: string;
    }

    export interface ISalaryItemSet {
        UserID: IUsersData;
        SalaryItemValue: ISalaryItemValue[];

    }
    export interface ISalaryItemValue {
        SalaryItemID?: ISalaryItem;
        Value?: string;
    }
    export interface IItemSelectData {
        SalaryItem?: ISalaryItem[];
    }
    export interface ISingleItemDate {
        UserID: IUsersData;
        SalaryItemValue: ISalaryItemValue;
    }
    export interface IAppraisalItemSet {
        AppraisalItems: AppraisalItem[];
    }
    export interface AppraisalItem {
        AppraisalTitle?: string;
        ApparaisalId?: string;
        AppraisalItemValue: IAppraisalItemValue[];
    }
    export interface IAppraisalItemValue {
        FID?: string;
        Name?: string;
        ApparaisalId?: string;
        UserId?: string;
        Result?: string;
    }    
}