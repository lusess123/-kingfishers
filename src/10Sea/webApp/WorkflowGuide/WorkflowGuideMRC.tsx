import cer = require("./WorkflowGuideCer");
import mer = require("./WorkflowGuideMer");
import rer = require("./WorkflowGuideRer");
import mrc = require("./../BasePageMRC");
import iPageFile = require("./../../core/IPage");
import iocFile = require("./../../../01core/Ioc");

export class WorkflowGuideMRC extends mrc.BasePageMRC<cer.WorkflowGuideCer, mer.WorkflowGuideMer, rer.WorkflowGuideRer> {

    public constructor() {
        super(new cer.WorkflowGuideCer(), new mer.WorkflowGuideMer(), new rer.WorkflowGuideRer());
    }

}
iocFile.Core.Ioc.Current().RegisterType("WORKFLOWGUIDE", iPageFile.PageFace, WorkflowGuideMRC);

