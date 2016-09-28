import dataFile = require("./../../../07data/data");
import pageFile = require("./../../../05tool/Pagination");

export namespace Member {

    export interface IMemberData {
        FID?: string; //主键
        FileNumber?: string; //档案编号
        UnitId?: string;//单位id
        UnitName?: string;
        Name?: string; //单位名称
        Gender?: number;//性别
        BirthDate?: string;//出生日期
        Age?: number;//年龄
        MaritalStatus?: number;//婚姻状况
        Nation?: number;//名族
        NativePlace?: string;//籍贯
        IDCard?: string;//身份证
        WorkUnit?: string;//工作单位
        Job?: number//职务
        JobTitle?: number;//职称
        Phone?: string;//联系电话
        MemberType?: number; //类型
        Address?: string;//单位地址
        PastMedicalHistory?: string; //既往病史
        FamilyMedicalHistory?: string;//家族病史
        ExamCount?: number;//体检次数
        Remark?: string;//备注
        UPDATE_TIME?: string;//最后编辑时间
    }
    export interface MemberPagerListData {

        Pager: pageFile.tool.Pagination;
        ListData: Array<IMemberData>;
    }

}