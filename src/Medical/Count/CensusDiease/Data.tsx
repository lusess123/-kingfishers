import dataFile = require("./../../../07data/data");
import pageFile = require("./../../../05tool/Pagination");

export namespace CensusDiease {
    export interface ICensusDieaseData {
        FID?: string;
        Number?: string;//体检编号
        Name?: string;//体检人姓名
        Gender?: string;//性别
        DieaseName?: string;//疾病名称
        ExamItem?: string;//体检项目
        DoctorName?: string;//体检医生
        ExamDate?: string;//体检时间
        UPDATE_TIME?: string;
    }
    export interface CensusDoctorPageListData {
        Pager: pageFile.tool.Pagination;
        ListData: Array<ICensusDieaseData>;
    }
}


