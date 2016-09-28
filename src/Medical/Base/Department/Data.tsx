import dataFile = require("./../../../07data/data");
import pageFile = require("./../../../05tool/Pagination");

export namespace MRP_Departments {
    export interface Department {
        FID?: string;
        FName?: string;//名称
        FNumber?: string;//代码
        SimpleCode?: string;//简码
        DeptType?: string;//类别
        Description?: string;//描述
        Remark?: string;//
        UPDATE_TIME?: string;  
    } 
    export interface DepartmentPageListData {
        Pager: pageFile.tool.Pagination;
        ListData: Array<Department>;
    }
}


