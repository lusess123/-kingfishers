import model = require("./../../core/mcrv/AkBaseModel");

export class WorkflowMer extends model.AkBaseModel {

    public getWorkflowInstPageDataM(id, callBack) {
        $.AKjs.getJSON("/workflow/WorkFlowInst/InstForm", { id: id }, callBack);
    }
    public getWorkflowDetailPageDataM(id, callBack) {
        $.AKjs.getJSON("/workflow/WorkFlowInst/DetailForm", { id: id }, callBack);
    }
    public getWorkflowInstHisPageDataM(id, callBack) {
        $.AKjs.getJSON("/workflow/MyHistory/HistoryForm", { id: id }, callBack);
    }


}