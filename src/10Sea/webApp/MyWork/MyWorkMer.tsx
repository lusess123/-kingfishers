import baseMerFile = require("./../../core/mcrv/AkBaseModel");
export class MyWorkMer extends baseMerFile.AkBaseModel {

    public getMyWorkDataM(xml, callback) {
        $.AKjs.getJSON("/module/module", { xml: xml, pageStyle: "List" }, callback);
    }
    public getAllBusinessM(callback) {
        $.AKjs.getJSON("/Right/Desk/GetBussinessConfig", {}, callback);
    }

}
