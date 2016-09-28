import dataFile = require("./../../07data/data");
export namespace Appointment {
    export interface IListData {
        FID: string;
        ReservationNumber: string; //预约编号
        MemberId: string; //个人ID
        ExamDate: string;  // 体检时间
        ExamPackage: string; //体检套餐
        ExamItem: string; //体检项目
    }
    export interface ISearchData { }
    export interface PagerListData<T> {
        Pager: dataFile.Right.PagerData;
        List: Array<T>;
    }
    export interface AppointmentPagerListData extends dataFile.Right.PagerListData<IListData> {
    }
}