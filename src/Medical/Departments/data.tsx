import dataFile = require("./../../07data/data");
export namespace Result {
    //科室录入
    export interface IItemResultData {
        FID?: string; //主键
        //ItemId?: string;//项目Id
        //ItemName?: string;//项目名称
        //Unit?: string //单位
        //GreaterThan?: string;  //大于
        //LessThan?: string; //小于
        IsPositive?: string;//是否阳性
        //LowerLimit?: number; //上限
        //UpperLimit?: number;//下线
        Result?: string;//结果
        // IsOverproof: string;//超标指示
        IsOverHint?: number;//指标提示
        IsGivenUp?: string;//弃检标记
        IsExamed?: string;//是否已检
        Affix?: string; //附件
        //ItemData : IExamItemData[];
        Picture?: string;//图片
    }

    export interface IDeptEntryResultData {
        DeptConclusion?: string;//科室小结
        ItemResultList?: IItemResultData[];//项目结果
        ExamNumber?: string;
        DeptId?: string;
        DiseaseData?: string[];
        Anomaly?: string[];
    }


    export interface IDeptEntryPageData {
        Member?: IMemberData;//会员信息
        ItemList?: IMemberExamItemData[];
        ExamNumber?: string;
        DeptId?: string;
        DiseaseList?: IDiseaseData[];
        Condtion?: string;
    }

    //常见疾病
    export interface IDiseaseData {
        FID: string;
        Name: string;
        isGenetic: string;
        isSelect: string;
        isNativeSelect: string;
    }

    export interface IMemberExamItemData {
        MemberExamItemId?: string; //主键
        ItemId?: string; //项目Id
        Name?: string;//项目名称
        Unit?: string;//单位
        UpperLimit?: number; //上限
        LowerLimit?: number; //下限
        IsGivenUp?: number;//是否弃检
        IsPositive?: number;//是否位阳性
        IsOverHint?: number;//指标提示
        Result?: string;//结果
        Picture?: string;//图片
        PictureCount?: string;//张数
    }
    //体检列表
    //export interface IResultListData {
    //    List: Array<IExamItemData>;
    //}
    //export interface DepartListData extends dataFile.Right.PagerListData<IDepartData> {
    //}
    //疾病诊断
    export interface IAonmalyData {
        FID?: string; //主键
        SimpleCode?: string; //简码
        Name?: string;  //名称
        OrderNumber?: number; //序号
        Remark?: string;//备注
    }
    //疾病诊断列表
    export interface IAonmalyListData {
        List: Array<IAonmalyData>;
    }
    //用户信息
    export interface IMemberData {
        FID?: string; //主键
        Name?: string; //姓名
        Gender?: number;//性别
        Age?: number;//年龄
        IDCard?: string;//身份证
        Phone?: string;//联系电话
        PastMedicalHistory?: string; //既往病史
        FamilyMedicalHistory?: string;//家族病史
    }
    //科室小结
    export interface IConclusionData {
        FID?: string; //主键
        DeptId?: string//科室Id
        DeptName?: string; //科室名
        Name?: string;  //小结名称
        Content?: string; //小结内容
    }
    //录入清单
    export interface IInsertData {
        FID?: string
        Name?: string;// 姓名
        IDCard?: string;//身份证
        ExamCode?: string;// 体检号
        RecordID?: string;//档案号
        Unit?: string;//单位
        State?: number;//状态
    }




    export interface PagerListData<T> {
        Pager: dataFile.Right.PagerData;
        ListData: Array<T>;
    }

    //科室小结
    export interface DepartTemplate {
        FID:string
        DeptName: string;
        ConclusionName: string;
        ConclusionContent: string;
    }
    export interface AnomalyTemplate {
        FID: string
        Name: string;
    }
    //项目小结
    export interface ItemTemplate {
        FID: string;
        ItemName: string;
        GreaterThan: string;
        LessThan: string;
        IsPositive: string;
        KeyWord: string;
    }

    export interface InsertPagerListData extends dataFile.Right.PagerListData<IInsertData> {
    }
}