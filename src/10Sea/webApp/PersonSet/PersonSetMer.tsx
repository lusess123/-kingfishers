import baseMerFile = require("./../../core/mcrv/AkBaseModel");
export class PersonSetMer extends baseMerFile.AkBaseModel {
    public Xml = "Module/PersonSet/PERSONSET_DETAIL";

    public getModuleXmlPageData(callBack) {
        var postData = { xml: this.Xml, pageStyle: "Update" };
        $.AKjs.getJSON("/module/module", postData, callBack);
    }
}