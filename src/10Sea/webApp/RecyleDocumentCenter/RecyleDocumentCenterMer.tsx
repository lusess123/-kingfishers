import baseMerFile = require("./../../core/mcrv/AkBaseModel");
export class RecyleDocumentCenterMer extends baseMerFile.AkBaseModel {
    public AkName = "RecyleDocumentCenterMer";
    public UserId = null;
    public Xml = "Module/SNS/DocumentCenter/SNS_ALLRECYCLE.xml";
    public getModuleXmlPageData (callBack) {
        var _ds:any = {};
        var _dt = _ds["View_SNS_ALLDocumentsDelete_Search"] = [];
        var _row = { PID: "0" };
        _dt.push(_row);
        var postData = { xml: this.Xml, ds: $.toJSON(_ds), pageStyle: "List" };
        $.AKjs.getJSON("/module/module", postData, callBack);

    }
}