import dataFile = require("./../../../../07data/data");
export namespace Pluginlog {
    export interface Pluginlog {
        TimePointList: Array<TimePointData>;
        DllInfoList: Array<DllInfoData>;
    }
    export interface TimePointData {
        Name: string;
        Text: string;
        Time: string;
        CostTime: string;
    }

    export interface DllInfoData {
        Name: string;
        ClassInfoList: Array<ClassInfoData>;
        Error: string;
    }

    export interface ClassInfoData {
        RegName: string;
        BaseClass: string;
        Author: string;
        CreateTime: string;
        Mesg: string;
        Error: string;
    }

}