define(["require", "exports"], function (require, exports) {
    "use strict";
    var Data;
    (function (Data) {
        Data.AppraiseTypeData = [{ Value: "0", Text: "月度" }, { Value: "1", Text: "季度" }, { Value: "2", Text: "年度" }];
        Data.DepartmentData = [{ Value: "0", Text: "儿科" }, { Value: "1", Text: "内科" }, { Value: "2", Text: "妇产科" }, { Value: "2", Text: "皮肤科" }, { Value: "2", Text: "神经外科" }];
        Data.JobData = [{ Value: "0", Text: "主任" }, { Value: "1", Text: "主治医师" }, { Value: "2", Text: "医师" }, { Value: "2", Text: "助理" }, { Value: "2", Text: "见习生" }];
        Data.AppraisalResultType = [{ Value: "0", Text: "统计" }, { Value: "1", Text: "Excel导入" }, { Value: "2", Text: "评分" }];
    })(Data = exports.Data || (exports.Data = {}));
});
