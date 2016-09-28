import baseMerFile = require("./../../core/mcrv/AkBaseModel");
export class PartMer extends baseMerFile.AkBaseModel {

    public Url: string = "";
    public getPageData(callBack) {
        $.AKjs.getJSON(this.Url, {}, callBack);
    }
}