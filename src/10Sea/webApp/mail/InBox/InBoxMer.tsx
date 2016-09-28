import model = require("./../core/mcrv/AkBaseModel");

export class InBoxMer extends model.AkBaseModel {
  public AkName = "InBoxMer";
  public Xml = "Module/Mail/INBOX.xml";
public getModuleXmlPageData(ds, callBack) {
    var postData = { xml: this.Xml, ds: ds, pageStyle: "List" };
    $.AKjs.getJSON("/module/module", postData, callBack);

}

public getUserMailAccounts(callBack) {
    $.AKjs.getJSON("/Mail/Mail/GetUserEmailAccounts", {}, callBack);
};
}