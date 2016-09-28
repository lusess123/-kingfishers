import dataFile = require("./../../../07data/data");
import pageFile = require("./../../../05tool/Pagination");

export namespace User {
    export interface UserData {
        FID?: string;
        SimpleCode?: string;//简码
        Type?: string;//类别
        JobTitle?: string;//职称
        UPDATE_TIME?: string;
    }

    export interface UserPageListData {
        Pager: pageFile.tool.Pagination;
        ListData: Array<UserData>;
    }
}
