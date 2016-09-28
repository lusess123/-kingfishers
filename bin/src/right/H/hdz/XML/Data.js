define(["require", "exports"], function (require, exports) {
    "use strict";
    var ApplicationData;
    (function (ApplicationData) {
        //Application
        ApplicationData.IsSupportReportData = [{ Value: "0", Text: "是" }, { Value: "1", Text: "否" }];
        ApplicationData.HasLoggerData = [{ Value: "0", Text: "启动" }, { Value: "1", Text: "关闭" }];
        ApplicationData.ExceptionStackData = [{ Value: "0", Text: "启动" }, { Value: "1", Text: "关闭" }];
        ApplicationData.PageHelpStackData = [{ Value: "0", Text: "启动" }, { Value: "1", Text: "关闭" }];
        ApplicationData.SignStackData = [{ Value: "0", Text: "启动" }, { Value: "1", Text: "关闭" }];
        ApplicationData.MigrationData = [{ Value: "0", Text: "是" }, { Value: "1", Text: "否" }];
        ApplicationData.RodioHData = [{ Value: "0", Text: "是" }, { Value: "1", Text: "否" }];
        ApplicationData.RodioIData = [{ Value: "0", Text: "是" }, { Value: "1", Text: "否" }];
        ApplicationData.RodioJData = [{ Value: "0", Text: "是" }, { Value: "1", Text: "否" }];
        ApplicationData.RodioKData = [{ Value: "0", Text: "是" }, { Value: "1", Text: "否" }];
        ApplicationData.RodioLData = [{ Value: "0", Text: "是" }, { Value: "1", Text: "否" }];
        ApplicationData.RodioMData = [{ Value: "0", Text: "是" }, { Value: "1", Text: "否" }];
        ApplicationData.DefaultData = [{ Value: "0", Text: "是" }, { Value: "1", Text: "否" }];
        ApplicationData.ConnectionStringData = [{ Value: "0", Text: "Data Source=192.168.66.5;Initial Catalog=Hos-EPP;User ID=sa;Pwd=Testsql665" },
            { Value: "1", Text: "Data Source=192.168.66.5;Initial Catalog=eretest7;User ID=sa;Pwd=Testsql665" },
            { Value: "2", Text: "Data Source=192.168.66.5;Initial Catalog=eretest5;User ID=sa;Pwd=Testsql665" },
            { Value: "3", Text: "Data Source=192.168.66.3;Initial Catalog=Dev_Ataw_Ez_Office;User ID=dev;Pwd=dev" },
            { Value: "4", Text: "Data Source=192.168.66.3;Initial Catalog=Dev_Ataw_HospPerformance;User ID=dev;Pwd=dev" }];
        ApplicationData.ShowKindData = [{ Value: "0", Text: "Tile" }, { Value: "1", Text: "Tab" }];
        ApplicationData.ShowTypeData = [{ Value: "0", Text: "0 (1行)" }, { Value: "1", Text: "1 (1/4行)" }, { Value: "2", Text: "2 (1/2行)" }, { Value: "3", Text: "3 (3/4行)" }];
    })(ApplicationData = exports.ApplicationData || (exports.ApplicationData = {}));
});
