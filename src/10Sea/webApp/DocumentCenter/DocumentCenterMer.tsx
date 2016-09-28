import baseMerFile = require("./../../core/mcrv/AkBaseModel");
export class DocumentCenterMer extends baseMerFile.AkBaseModel {
    public AkName = "DocumentCenterMer";
    public formartPageState(pagestyle, param) {
        var pageState:any = {};
        pageState.ds = {};
        if (pagestyle && param) {
        pagestyle = pagestyle.toUpperCase();
        param = $.parseJSON(window["Base64"].decode(param));
        if (param.afterPageFun) {
            pageState.afterPageFun = param.afterPageFun;
        }
        if (param.additionData) {
            pageState.additionData = param.additionData;
        }
        switch (pagestyle) {
            case "INSERT":
                if (param.keys) {
                    var keys = param.keys.split(",");
                    pageState.ds["_KEY"] = [{ "KeyValue": keys[0] }];
                }
                break;
            case "UPDATE":
            case "DETAIL":
                if (param.keys) {
                    var keys = param.keys.split(",");
                    pageState.ds["_KEY"] = [];
                    for (var i = 0; i < keys.length; i++) {
                        pageState.ds["_KEY"].push({ "KeyValue": keys[i] });
                    }
                }
                break;
            default:
                if (param.tablename && (param.navi || param.search)) {
                    pageState.ds[param.tablename + "_SEARCH"] = [$.extend({}, param.navi, param.search)];
                }
                if (param && param.page) {
                    pageState.ds["PAGER"] = [param.page];
                }
                if (param && param.formType) {
                    pageState.formType = param.formType;
                }
                break;
        }
    }
    return pageState;
    }

}