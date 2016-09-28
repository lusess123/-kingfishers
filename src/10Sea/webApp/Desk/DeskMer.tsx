import baseMerFile = require("./../../core/mcrv/AkBaseModel");


export class DeskMer extends baseMerFile.AkBaseModel {
    public AkName = "DeskMer";
    public UrlObj = null;

    public getModuleXmlPageData($dom, callback) {
        $.AKjs.load("/Right/desk/QuickMenu", null, $dom, callback);
    }
    public getPanelInfoM(callback) {
        $.AKjs.getJSON("/right/Panel/Panel", null, callback);
    }
    public getPanelBody(herf, callBack) {
        $.AKjs.getJSON(herf, null, callBack, { isLoad: true });
    };
}