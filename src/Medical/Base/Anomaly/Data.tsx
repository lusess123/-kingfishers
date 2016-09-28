import dataFile = require("./../../../07data/data");
import pageFile = require("./../../../05tool/Pagination");

export namespace Anomaly {

    export interface IAnomalyData {
        FID?: string; //主键
        SimpleCode?: string; //简码
        Name?: string;  //名称
        OrderNumber?: number; //序号
        Remark?: string;//备注
        ItemList?: IAnomalyItemData[];
        DeleteItemList?: string[];
    }

    export interface IAnomalyPagerListData {

        Pager: pageFile.tool.Pagination;
        ListData: Array<IAnomalyData>;
    }

    export interface IAnomalyItemData {
        FID?: string; //主键
        ItemId?: string; //项目Id
        Unit?: string //单位
        ItemName?: string;//项目名称
        GreaterThan?: string;  //大于
        LessThan?: string; //小于
        IsPositive?: string;//是否阳性
        KeyWord?: string //关键词
    }

    //个人和团体收费-------------------------
    export interface IPersonCharge {
        FID: string;
        MemberName: string;//体检人
        ExamDate: string;//体检时间
        ChargeTime: string;//缴费时间
        ReceivableAmount: string;//缴费金额
        UnitName: string;//单位
        ChargeStatus: string;//状态
        isSelect?: string;//选中
    }

    export interface ITeamCharge {
        FID: string;
        Bath: string;//批次
        ExamDate: string;//体检时间
        ChargeTime: string;//缴费时间
        ReceivableAmount: string;//缴费金额
        UnitName: string;//单位
        ExamStatus: string;//检状态
        ChargeStatus: string;//状态
        isSelect?: string;//选中
    }

    //个人和团体缴费-------------------------
    export interface IPersonPay {
        ExamItemName: string; //体检项目
        ReceivableAmount: string;//价格
        discount: string;//折扣
        ReceiveAmount: string;//最终价格
        Status: string;//状态
        Amount: string;
        ExamStatus: string;
        isSelect?: string;//选中
    }

    export interface ITeampay {

    }

    //控制台实体----------------------
    export interface IWorkBenchData {
        personregister: string;//个人登记
        personprint: string;//个人打印
        personcharge: string;//个人缴费
        teamprint: string;//团队打印
        teamregister: string;//团队登记
        officeinput: string;//科室录入
        printMedical: string;//打印体检报告
        review: string;//总检
    }


    //发票实体
    export interface IInvoiceData {
        Amount: string | void;
        Type: string;
        Number: string | void;
        Title: string | void;
        ChargeId: string;
        InvoiceType: string | void;
        isPrintInvoice: string;
    }

    //常见疾病
    export interface IDiseaseData {
        FID: string;
        Name: string;
        isGenetic: string;
        isSelect: string;
        isNativeSelect: string;
    }


    export interface MemberRefundData {
        ChargeFID: string;
        ExamNumber: string;
        RefundAmount: string;
        RefundReason: string;
    }

    export interface TeamRefunData {
        ChargeFID: string;
        RefundAmount: string;
        RefundReason: string;
    }

    export interface TeamChagreData {
        MemberID: string;
        GroupName: string;
        ExamNumber: string;
        MemberName: string;
        status: string;
    }

    export interface MemberChangreData {
        FID: string;
        ExamNumber: string;
        ReceiveAmount: string;
    }
}