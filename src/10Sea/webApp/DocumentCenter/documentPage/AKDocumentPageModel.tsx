import baseMerFile = require("./../../../core/mcrv/AkBaseModel");
export class AKDocumentPageModel extends baseMerFile.AkBaseModel {
    public AkName = "AkBaseModel-DocumentPage";
        public getWithinPageM(option, callback) {
            $.AKjs.getJSON("/module/module", option, callback);
        }
}