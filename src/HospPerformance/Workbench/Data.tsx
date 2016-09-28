import dataFile = require("./../../07data/data");
import pageFile = require("./../../05tool/Pagination");

export namespace Data {

    export interface IWorkBenchData {
        FID: string;
        Name: string;
        DeptMent: string;
        JobTitle: string;
        Notice: INoticeData[];
    }

    export interface INoticeData {
        FID: string;
        Title: string;
        outDate: string
    }
}