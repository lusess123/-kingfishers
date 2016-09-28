import dataFile = require("./../../07data/data");
export namespace GroupOrg{
    export interface IGroupData {
        GroupID: string;
        //FParentFID: string;
        FParentFName: string;
        GroupName: string;
        GroupCode: string;
        //FPhone: string;
        //FControlUnitName: string;
    }
    export interface IGroupOrgData {
        CODE_VALUE: string;
        CODE_TEXT: string;
        ExtData?: IExtData;
        Children?: Array<IGroupOrgData>;
    }
    export interface IExtData {
        RightValue: string;
        Icon?: string;
        RightType?: string | number;
    }
    export interface IGroupDetailData {
        GroupID: string;
        FParentFID: string;
        FParentFName: string;
        GroupName: string;
        GroupCode: string;
        FPhone: string;
        GroupDescrible: string; //机构描述
        FAddress: string;  //地址
        Fax: string;  //传真
        Post: string; //邮政编码
        //ProductFIDs: string; //所属产品
    }
    export interface IGroupSavaData {
        GroupID: string;
        GroupName: string;
        GroupCode: string;
    }
}