import model = require("./../../core/mcrv/AkBaseModel");

export class WorkflowGuideMer extends model.AkBaseModel {


    public getModuleXmlPageDataM(workflowDefName, callBack) {
        $.AKjs.getJSON("/workflow/WorkFlowDef/GetGuideXml", { shortName: workflowDefName }, callBack);
    }


}