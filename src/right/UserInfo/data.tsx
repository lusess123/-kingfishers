
import dataFile = require("./../../07data/data");
export namespace UserInfo {
    export interface IUserListData {
        //UserAvatar: string; //用户头像
        UserID: string; //用户ID
        TrueName: string;  //用户姓名
        Gender: string; //性别
        //FDepartmentID: string; //所属部门
        POSITIONJOBID: string;  //职位
        FNumber: string;  //工号
        FStatusKindId: string; //在职状态ID
        FStatusKindName: string; //在职状态名称
        //IconUrl: string;
        //IconName: string;
        UPDATE_TIME: string;  //更新时间 
        UserName: string;
    }

    export interface IDropDownData
    {
        CODE_TEXT: string;
        CODE_VALUE: string;
    }
    export interface IDropDownNameData {
        User_sexType?: IDropDownData[];
        User_CensusType?: IDropDownData[];
        User_DegreeType?: IDropDownData[];
        User_WorkType?: IDropDownData[];
        User_NationalityType?: IDropDownData[];
        User_PoliticsStatusType?: IDropDownData[];
        User_PositionCodeType?: IDropDownData[];
    }
    export interface IUserDetailData {
        //UserAvatar: string;//用户头像
        UserID: string; //用户ID
        TrueName: string;  //用户姓名
        Gender: string;//性别
        UserName: string;// 登陆名
        Phone: string;//手机
        Email: string;  //邮箱
        Birthday: string;  //出生日期
        Address: string;  //住址
        //FDepartmentID: string;  //所属部门
        POSITIONJOBID: string;  //职位
        EntryDate: string;  //入职日期
        FNumber: string;  //工号
        FStatusKindId: string;  //在职状态 ID
        FStatusKindName: string; //在职状态名称
        DegreeKindId: string; //学历 ID
        DegreeKindName: string; //学历名称
        Signatures: string;  //个性签名
        IDCard: string;  //身份证号 
        Age: string;  //年龄
        NationalityKindId: string;  //民族 ID
        NationlityKindName: string; //民族 名称
        PoliticsStatusKindId: string; //政治面貌ID
        PoliticsStatusKindName: string; //政治面貌 名称
        CensusKindId: string;  //户口类型 ID
        CensusKindName: string; //户口类型名称
        GraduateSchool: string; //毕业学校
        Discipline: string;  //专业
        GraduateDate: string; //毕业时间
        Tel: string;  //联系电话
        QQ: string;
        dropDownList: IDropDownNameData;

        //FControlUnitID: string; //组织机构ID
        //FControlUnitName: string;// 组织机构名称
    }

    export interface PagerListData<T> {
        Pager: dataFile.Right.PagerData;
        List: Array<T>;
    }

    export interface UserInfoPagerListData extends PagerListData<IUserListData> {
    }


}