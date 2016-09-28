import baseMerFile = require("./../../core/mcrv/AkBaseModel");
export class MessAgeMer extends baseMerFile.AkBaseModel {
    public MessageType = null;

    public getMessageType(callBack) {
        $.AKjs.getJSON("/core/Desk/GetMessageType", null, callBack);
    }
}
