import model = require("./../core/mcrv/AkBaseModel");

export class InsertMailMer extends model.AkBaseModel {
  public AkName = "InsertmailMer";
  public Xml = "Module/Mail/NEWMAIL.xml";
  public UserId = null;
  public NickName = null;

 public getModuleXmlPageData(callBack) {
    var postData = { xml: this.Xml, pageStyle: "Insert" };
    $.AKjs.getJSON("/module/module", postData, callBack);
}
  public getDefaultEmailAccount(callBack) {
    $.AKjs.getJSON("/Mail/Mail/GetDefaultEmailAccount", { userId: "" }, callBack);
};
}