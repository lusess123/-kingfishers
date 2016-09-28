import model = require("./../core/mcrv/AkBaseModel");

export class IframeMer extends model.AkBaseModel {
 public AkName = "DefaultMer";

public Xml = "";
public PageStyle = "";
public Ds = null;
public Param = null;

public OpenFunAfterInit = null;
public formartPageState(pagestyle, param) {
    //-----------nn--
    var pageState: any={};
    pageState.ds = {};
    if (pagestyle && param) {
        pagestyle = pagestyle.toUpperCase();
        try {
            param = $.parseJSON(window["Base64"].decode(param));
        }
        catch (arr) {
            param = { keys: param };
        }
        if (param.OpenFunAfterInit) {
            this.OpenFunAfterInit = param.OpenFunAfterInit;
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



};


public getModuleXmlPageData(callBack) {

    var paramObj = this.formartPageState(this.PageStyle, this.Param);
    var ds = {};
    if (paramObj && paramObj.ds) {
        ds = paramObj.ds;
    }



    this.Ds = ds;
    var postData = $.extend({},
        {
            xml: this.Xml,
            ds: $.toJSON(this.Ds),
            pageStyle: this.PageStyle
        },
        paramObj.additionData
    );
    $.AKjs.getJSON("/module/module", postData, callBack);

}

}