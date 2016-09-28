import dataFile = require("./../../../07data/data");
import pageFile = require("./../../../05tool/Pagination");

export namespace Group {
    export interface IGroupData {
        RegisterNum?: number;//登记数量
        MedicalNum?: number;//待体检数量
        OverMedicalNum?: number;//已完成数量
    }
    export interface IUnitData {
        FID?: string; //主键
        Code?: string; //单位编码
        Name?: string; //单位名称
        ContactPerson?: string;//单位联系人
        Phone?: string;//联系电话
        Fax?: string;//传真
        Email?: string; //邮箱
        Type?: string; //下限
        Address?: string;//单位类型
        Description?: string;//单位地址
        UPDATE_TIME?: string;//单位简介
    }
    export interface IBatch {
        FID?: string; //主键
        Name?: string; //批次名称
        UnitId?: string; //主键
        BeginDate?: string;//开始日期
        EndDate?: string;//结束日期
        PreNumber?: number;//体检人数
        RealNumber?: number;//实检人数
        BanlanceKind?: string; //结算方式
        Status?: string; //状态
        AllFee?: string;//总费用
        PayFee?: string;//已付费用
        Fee?: string;//待费用
    }
    export interface IBatchDetail
    {
        FID?: string; //主键
        Unit?: string //单位主键
        Code?: string; //单位编码
        Name?: string; //单位名称
        ContactPerson?: string;//单位联系人
        Phone?: string;//联系电话
        Fax?: string;//传真
        Email?: string; //邮箱
        Type?: string; //下限
        Address?: string;//单位类型
        Description?: string;//单位地址
        ItemList?: IBatch[];
        DeleteItemList?: string[];
        flag?: string;
    }
    export interface IGroupBathData
    {
        FID?: string;//主键
        Name?: string; //组名
        Gender?: string;//性别
        MaritalStatus?: string;//婚姻
        AgeLowerLimit?: string;
        AgeUpperLimit?: string;
        Job?: string; //职务
        Other?: string; //条件
        selectName?: string;//套餐
        selectId?: string;  //选择Id值
        selectType?: string;//选择种类

    }
    export interface IMember {
        FID?: string;//主键
        GroupName?: string; //组名
        BatchName?: string//
        Name?: string//会员名称
        Phone?: string //
        MemberId?: string;
        IDCard?: string //身份证
        Age?: string;//上限
        Gender?: string;//性别
        MaritalStatus?: string;//婚姻
        Job?: string;//职务
        Status?: string;//
        flag?: string;
    } 
    export interface IAccount {
        FID?: string;//主键
        UnitName?:string // 单位名
        BatchId?: string;//批次       
        ReservationCount?: number;//预检人数
        RealCount?: number;//实检人数
        Fee?: number;//费用
    }
    export interface PagerListData
    {
        Pager: pageFile.tool.Pagination;
        ListData: Array<IMember>;
    } 
    export interface PagerListBatchData {
        Pager: pageFile.tool.Pagination;
        ListData: Array<IBatch>;
    } 
}