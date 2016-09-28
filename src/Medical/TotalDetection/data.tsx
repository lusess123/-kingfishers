import dataFile = require("./../../07data/data");
export namespace DetectionData {
    export interface DetectionData {
        FID?: string;
        MemberName?: string;// 姓名
        IDCard?: string;//身份证
        ExamNumber?: string;// 体检号
        FileNumber?: string;//档案号
        UnitName?: string;//单位
        Status?: string;  //状态
    }
    export interface ResultGeneralData {
        FID?: string;
        ExamNumber?: string;// 体检编号
        Advice?: string;//建议
        Summary?: string;// 总结
        GeneralResult?: string;//总检医生
        MemList?: IMemberData[];
        MemExamData?: IMemberExamData[];
    }

    export interface IMemberData {
        MemberId?: string;
        FileNumber?: string; //档案编号
        UnitId?: string;//单位id
        Name?: string; //单位名称
        Gender?: number;//性别
        Age?: number;//年龄
        IDCard?: string;//身份证
        WorkUnit?: string;//工作单位
        Phone?: string;//联系电话
        ExamList?: IMemberExamData[];
    }
    export interface IMemberExamData {
        MemberId?: string;//人员Id
        ExamNumber?: string//体检编号
        Status?: number//状态
    }
    export interface PagerListData {
        Pager: dataFile.Right.PagerData;
        ListData: Array<DetectionData>;
    }

    export interface PagerListDatas<T> {
        Pager: dataFile.Right.PagerData;
        ListData: Array<T>;
    }

    //用户信息
    export interface IUserInfoData {
        FID?: string; //主键
        Name?: string; //姓名
        Gender?: number;//性别
        Age?: number;//年龄
        IDCard?: string;//身份证
        phone?: string;//联系电话
        PastMedicalHistory?: string; //既往病史
        FamilyMedicalHistory?: string;//家族病史
    }
    //疾病诊断
    export interface IAonmalyData {
        FID?: string; //主键
        SimpleCode?: string; //简码
        Name?: string;  //名称
        OrderNumber?: number; //序号
        Remark?: string;//备注
    }
    //科室小结
    export interface IDepartmentData {
        FID?: string; //主键
        DeptId?: string//科室Id
        DeptName?: string; //科室名
        Name?: string;  //小结名称
        Content?: string; //小结内容
    }
    //医生建议
    export interface IDocterAdviceData {
        FID?: string;//主键
        Name?: string;//名称
        Summary?: string;//综述
        Advice?: string;//建议
    }
    //医生小结
    export interface IDoctorData {
        FID?: string; //主键
        DoctorId?: string;//医生ID
        DoctorName?: string; //医生姓名
        Name?: string; //小结名称
        Content?: string;  //小结内容
    }
    //总检结果表格
    export interface IExamineResult {
        FID?: string;//主键
        DeptName?: string;//项目
        Summary?: string; //小结
        GeneralResult?: string;//医生
        Submit?: IExamSubitem[];
    }
    //总检项目子项
    export interface IExamSubitem {
        FID?: string;//主键
        ItemName?: string;//子项名称
        Result?: string;//子项结果
        Unit?: string;//单位
        IsPositive?: string; //阳性
        Indicate?: string;  //指示
        LessLimit?: string;
        UpperLimit?: string;
        IsOverHint?: number;
        isPicture?: string; //附件
        pictureCount?: string;
    }

    export interface SummaryData {
        TotalContent?: string;
        DocterContent?: string;
    }
    export interface AnomalyTemplate {
        FID: string
        Name: string;
    }

    export interface ItemTemplate {
        FID: string;
        ItemName: string;
        GreaterThan: string;
        LessThan: string;
        IsPositive: string;
        KeyWord: string;
    }
    export interface DetectionSubmit {
        FID?: string;
        Advice?: string;//建议
        Summary?: string;//综述
        Anomaly?: string[]; //疾病历史
        isCheck?: boolean;
    }
}