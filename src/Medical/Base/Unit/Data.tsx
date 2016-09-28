import dataFile = require("./../../../07data/data");
import pageFile = require("./../../../05tool/Pagination");

export namespace Unit {

    export interface IUnitData {
        FID?: string; //主键
        Code?: string; //单位编码
        Name?: string; //单位名称
        ContactPerson?: string;//单位联系人
        Phone?: string;//联系电话
        Fax?: string;//传真
        Email?: string; //邮箱
        Type?: number; //下限
        Address?: string;//单位类型
        Description?: string;//单位地址
        UPDATE_TIME?: string;//单位简介
    }
    export interface UnitPagerListData {

        Pager: pageFile.tool.Pagination;
        ListData: Array<IUnitData>;
    }
}