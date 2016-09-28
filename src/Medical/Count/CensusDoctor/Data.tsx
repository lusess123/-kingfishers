import dataFile = require("./../../../07data/data");
import pageFile = require("./../../../05tool/Pagination");

export namespace CensusDoctor {
    export interface ICensusDoctorData {
        FID?: string;
        DoctorName?: string;//医生姓名
        Department?: string;//部门
        DoctorType?: string;//医生类别
        ExamPeople?: string;//体检人
        ExamItem?: string;//体检项目
        ExamDate?: string;//体检时间
        InputTime?: string;//录用时间
        UPDATE_TIME?: string;
    }
    export interface CensusDoctorPageListData {
        Pager: pageFile.tool.Pagination;
        ListData: Array<ICensusDoctorData>;
    }
}


