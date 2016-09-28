import dataFile = require("./../../07data/data");
export namespace PayApply {
    export interface IPayApplyData {
        FID: string; //FID
        FlowNumber: string; //流水号
        BdPayApplyWfId: string;   //流程编号
        ApproveStatus: number; //审批状态
        ReviewStatus: number;//复核状态
        PayStatus: number;//打款状态
        ApproveUserId: string; //审批人
        PayUserId: string; //打款人
        ReviewUserId: string;//复核人
        PrintState: string;//打印状态
        BdPayApplyWfStatus: string;//流程状态
        BdPayApplyStepName: string;//步骤名称
        BdPayApplyWfTime: string;//流程时间
        BdPayApplyWfIsEnd: string;//是否完成
        BdPayApplyIsApplyWf: string;//应用到工作流
        ApplyUserId: string;//ApplyUserId 申请人
        FAcceptkind: string; //承兑方式
        FBankType: string; //承兑行类别
        FDepartmentID: string; //申请区域
        FControlUnitID: string;//组织机构
    }
    //export interface PagerListData<T> {
    //    Pager: dataFile.Right.PagerData;
    //    List: Array<T>;
    //}

    //export interface IBDPayApplyListData extends PagerListData<IPayApplyData> {
    //}
}