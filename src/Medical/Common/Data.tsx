import dataFile = require("./../../07data/data");
import pageFile = require("./../../05tool/Pagination");

export namespace Data {

    export interface IItemConditionData {
        FID?: string; //主键
        ItemId?: string; //项目Id
        Unit?: string //单位
        ItemName?: string;//项目名称
        GreaterThan?: string;  //大于
        LessThan?: string; //小于
        IsPositive?: string;//是否阳性
        KeyWord?: string //关键词

    }
    export const GenderTypeData = [{ Value: "0", Text: "保密" }, { Value: "1", Text: "男" }, { Value: "2", Text: "女" }];
    export const SelectMaritalData = [{ Value: "0", Text: "无要求" },{ Value: "1", Text: "未婚" }, { Value: "2", Text: "已婚" }];
    export const MaritalTypeData = [{ Value: "0", Text: "未婚" }, { Value: "1", Text: "已婚" }];
    export const MemberTypeData = [{ Value: "0", Text: "非会员" }, { Value: "1", Text: "普通会员" }, { Value: "2", Text: "VIP会员" }];
    export const JobTypeData = [
        { Value: "0", Text: "建造师" },
        { Value: "1", Text: "老师" },
        { Value: "2", Text: "医生" },
        { Value: "3", Text: "工人" },
        { Value: "4", Text: "学生" },
        { Value: "50", Text: "其他" }
    ];
    export const JobTitleTypeData = [{ Value: "0", Text: "无" }, { Value: "2", Text: "主任" }, { Value: "1", Text: "经理" }];
    export const UnitTypeData = [{ Value: "0", Text: "国企" }, { Value: "1", Text: "私营" }, { Value: "2", Text: "民营" }];
    export const ExamTypeData = [{ Value: "0", Text: "入职体检" }, { Value: "1", Text: "健康体检" }];

    export const ExamBanlanceKindData = [{ Value: "0", Text: "统一收费" }];
    export const ExamStatusData = [{ Value: "0", Text: "未开始" }, { Value: "1", Text: "未完成" }, { Value: "2", Text: "已完成" }];

    export const ExamTermKindData = [{ Value: "0", Text: "无" }, { Value: "1", Text: "无血压" },];
    export const ExamPayData = [{ Value: "0", Text: "套餐价" }, { Value: "1", Text: "实际价" }];

    export const NationTypeData = [
        { Value: "0", Text: "藏族" },
        { Value: "1", Text: "汉族" },
        { Value: "2", Text: "白族" },
        { Value: "3", Text: "保安族" },
        { Value: "4", Text: "布朗族" },
        { Value: "5", Text: "布依族" },
        { Value: "6", Text: "朝鲜族" },
        { Value: "7", Text: "达斡尔族" },
        { Value: "8", Text: "傣族" },
        { Value: "9", Text: "德昂族" },
        { Value: "10", Text: "东乡族" },
        { Value: "11", Text: "侗族" },
        { Value: "12", Text: "独龙族" },
        { Value: "13", Text: "俄罗斯族" },
        { Value: "14", Text: "鄂伦春族" },       
        { Value: "15", Text: "鄂温克族" },
        { Value: "16", Text: "高山族" },
        { Value: "17", Text: "仡佬族" },
        { Value: "18", Text: "哈尼族" },
        { Value: "19", Text: "哈萨克族" },
        { Value: "20", Text: "赫哲族" },
        { Value: "21", Text: "回族" },
        { Value: "22", Text: "基诺族" },
        { Value: "23", Text: "京族" },
        { Value: "24", Text: "景颇族" },
        { Value: "25", Text: "柯尔克孜族" },
        { Value: "26", Text: "拉祜族" },
        { Value: "27", Text: "黎族" },
        { Value: "28", Text: "傈僳族" },
        { Value: "29", Text: "珞巴族" },
        { Value: "30", Text: "满族" },


        { Value: "31", Text: "毛南族" },
        { Value: "32", Text: "门巴族" },
        { Value: "33", Text: "蒙古族" },
        { Value: "34", Text: "苗族" },
        { Value: "35", Text: "仫佬族" },

        { Value: "36", Text: "纳西族" },
        { Value: "37", Text: "怒族" },
        { Value: "38", Text: "普米族" },
        { Value: "39", Text: "羌族" },
        { Value: "40", Text: "撒拉族" },

        { Value: "41", Text: "畲族" },
        { Value: "42", Text: "水族" },
        { Value: "43", Text: "塔吉克族" },
        { Value: "44", Text: "塔塔尔族" },
        { Value: "45", Text: "土家族" },

        { Value: "46", Text: "土族" },
        { Value: "47", Text: "佤族" },
        { Value: "48", Text: "维吾尔族" },
        { Value: "49", Text: "乌孜别克族" },
        { Value: "50", Text: "锡伯族" },

        { Value: "51", Text: "瑶族" },
        { Value: "52", Text: "裕固族" },
        { Value: "53", Text: "彝族" },
        { Value: "54", Text: "阿昌族" },

        { Value: "55", Text: "壮族" },
    ];
}