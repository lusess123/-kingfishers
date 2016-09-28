import dataFile = require("./../../07data/data");
export namespace GroupOrg{
    export interface IGroupData {
        FID: string;
        //FParentFID: string;
        FParentFName: string;
        RCG_Name: string;
        RCG_Code: string;
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
        FID: string;
        PID: string;
        FParentFName: string;
        RCG_Name: string;
        RCG_Code: string;
    }
    export interface IGroupSavaData {
        FID: string;
        RCG_Name: string;
        RCG_Code: string;
    }
}