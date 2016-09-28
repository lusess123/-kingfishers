import Radio = require("./../../../02col/01single/Radio");


export namespace ApplicationData {
    export interface RadioData
    {
        Title?: string;
        Name?: string;
        Radio?: Radio.ui.RadioVm;
    }

    //Application
    export const IsSupportReportData = [{ Value: "0", Text: "是" }, { Value: "1", Text: "否" }];
    export const HasLoggerData = [{ Value: "0", Text: "启动" }, { Value: "1", Text: "关闭" }];
    export const ExceptionStackData = [{ Value: "0", Text: "启动" }, { Value: "1", Text: "关闭" }];
    export const PageHelpStackData = [{ Value: "0", Text: "启动" }, { Value: "1", Text: "关闭" }];
    export const SignStackData = [{ Value: "0", Text: "启动" }, { Value: "1", Text: "关闭" }];
    export const MigrationData = [{ Value: "0", Text: "是" }, { Value: "1", Text: "否" }];
    export const RodioHData = [{ Value: "0", Text: "是" }, { Value: "1", Text: "否" }];
    export const RodioIData = [{ Value: "0", Text: "是" }, { Value: "1", Text: "否" }];
    export const RodioJData = [{ Value: "0", Text: "是" }, { Value: "1", Text: "否" }];
    export const RodioKData = [{ Value: "0", Text: "是" }, { Value: "1", Text: "否" }];
    export const RodioLData = [{ Value: "0", Text: "是" }, { Value: "1", Text: "否" }];
    export const RodioMData = [{ Value: "0", Text: "是" }, { Value: "1", Text: "否" }];

    export const DefaultData = [{ Value: "0", Text: "是" }, { Value: "1", Text: "否" }];
    export const ConnectionStringData = [{ Value: "0", Text: "Data Source=192.168.66.5;Initial Catalog=Hos-EPP;User ID=sa;Pwd=Testsql665" }, 
                                         { Value: "1", Text: "Data Source=192.168.66.5;Initial Catalog=eretest7;User ID=sa;Pwd=Testsql665" },
                                         { Value: "2", Text: "Data Source=192.168.66.5;Initial Catalog=eretest5;User ID=sa;Pwd=Testsql665" },
                                         { Value: "3", Text: "Data Source=192.168.66.3;Initial Catalog=Dev_Ataw_Ez_Office;User ID=dev;Pwd=dev" },
                                         { Value: "4", Text: "Data Source=192.168.66.3;Initial Catalog=Dev_Ataw_HospPerformance;User ID=dev;Pwd=dev" }];


    export const ShowKindData = [{ Value: "0", Text: "Tile" }, { Value: "1", Text: "Tab" }];
    export const ShowTypeData = [{ Value: "0", Text: "0 (1行)" }, { Value: "1", Text: "1 (1/4行)" }, { Value: "2", Text: "2 (1/2行)" }, { Value: "3", Text: "3 (3/4行)" }];
}