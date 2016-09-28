import baseMerFile = require("./../../core/mcrv/AkBaseModel");
export class UserDocumentCenterMer extends baseMerFile.AkBaseModel {
    public AkName = "UserDocumentCenterMer";
        public UserId = null;
        public pid = null;
        public Xml = "Module/SNS/DocumentCenter/Public/SNS_ALLDocuments.xml";
        public getFilePathM(option, callback) {
            $.AKjs.getJSON("/SNS/DocumentCenter/GetPublicFilePath", option, callback);
        }
        public getModuleXmlPageData(callBack) {
            var _ds:any = {};
            var _dt = _ds["View_SNS_ALLDocuments_Search"] = [];
            var _row = { UserID: this.UserId,PID: this.pid };
            _dt.push(_row);
            var postData = { xml: this.Xml, ds: $.toJSON(_ds), pageStyle: "List" };
            $.AKjs.getJSON("/module/module", postData, callBack);

        }
}