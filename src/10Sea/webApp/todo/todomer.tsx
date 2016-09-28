import baseMerFile = require("./../../core/mcrv/AkBaseModel");
export class TodoMer extends baseMerFile.AkBaseModel {
        public AkName = "todomer";

public getTopMyWork (callBack) {
    $.AKjs.getJSON("/module/module", { xml: "module/workflow/topMyWork.xml", pageStyle: "List" }, callBack);
};

 public getToDoData = function (callBack) {
    $.AKjs.getJSON("/core/Desk/GetToDoWork", null, callBack);
};
}