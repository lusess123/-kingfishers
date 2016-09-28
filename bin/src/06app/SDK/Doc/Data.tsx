import dataFile = require("./../../07data/data");
export namespace Updatelog {
    export interface Updatelog {
        YearList: YearData[];
    }
    export interface YearData {
        Year: string;
        Weeks: WeekData[];
    }
    export interface WeekData {
        Date: string;
        Old: ItemData[];
        New: ItemData[];
    }
    export interface ItemData {
        Item: string;
    }

}