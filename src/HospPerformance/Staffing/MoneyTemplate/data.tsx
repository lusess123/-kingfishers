import dataFile = require("./../../../07data/data");
import pageFile = require("./../../../05tool/Pagination");

export namespace Data {

    export const MoneyProjectData = [{ Value: "0", Text: "实发工资", Select: true }, { Value: "1", Text: "学历补助（广州）", Select: false }, { Value: "2", Text: "福利补贴", Select: false },{ Value: "2", Text: "职位补贴", Select: false }];

    export interface ISalaryItemPageData {
        SalaryTemplateData: ISalaryTemplate;
        UserList: IUsersData[];
        SalaryItemData: ISalaryItem[];
        UserSelectorData: IUserSelectorData;
        ItemSelectData: IItemSelectData;
        SalaryItemSet: ISalaryItemSet[];
        SalaryItemValueOrCount: SalaryItemValueOrCount[];
    }
    export interface ISubmitData {
        FID?: string;
        Title?: string;
        Remark?: string;
        UsersData: IUsersData[];
        SalaryItemValues: ISalaryItemSet[];
        SalaryItemValueOrCount: SalaryItemValueOrCount[];
    }
    export interface ISalaryTemplate {
        FID?: string;
        Title?: string;
        Remark?: string;        
    }
    export interface IUsersData {       
        UserId?: string; //主键
        TrueName?: string;  //名称
        DeptName?: string;//部门名称
        PositionName?: string;//职位名称
        DisplayName?: string; //部门名-职位名-姓名
    }
    export interface IUserSelectorData {
        UserList?: IUsersData[];
        PositionList?: IPositionData[];
    }
    export interface IPositionData {
        FID?: string; //主键
        Name?: string;  //名称
    }
    export interface ISalaryItem {
        FID?: string;
        Name?: string;
        Fileds?: string;
        Type?: string;
        Detail?: string;
        AppraisalID?: string;
    }
    export interface ISalaryTemplateItem {
        TemplateName?: string;
        UserName?: string;
        Fnumber?: string;
        FStatus?: string;
        DisplayName?: string; //部门名-职位名-姓名
    }

    export interface ISalaryItemSet{
        UserID:IUsersData;
        SalaryItemValue:ISalaryItemValue[];

    }
    export interface ISalaryItemValue {
        SalaryItemID?: ISalaryItem;
        Value?: string;       
    }
    export interface IItemSelectData {
        SalaryItem?: ISalaryItem[];
    }
    export interface SalaryItemValueOrCount {
        FID?: string;
        Name?: string;
        Fileds?: string;
        Type?: string;
        Detail?: string;
        AppraisalID?: string;
        ValueOrCount?: string;
    }
}