import cer = require("./WorkflowCer");
import mer = require("./WorkflowMer");
import rer = require("./WorkflowRer");
import mrc = require("./../BasePageMRC");
import iPageFile = require("./../../core/IPage");
import iocFile = require("./../../../01core/Ioc");

export class WorkflowMRC extends mrc.BasePageMRC<cer.WorkflowCer, mer.WorkflowMer, rer.WorkflowRer> {

    public constructor() {
        super(new cer.WorkflowCer(), new mer.WorkflowMer(), new rer.WorkflowRer());
    }

}
iocFile.Core.Ioc.Current().RegisterType("WORKFLOW", iPageFile.PageFace, WorkflowMRC);
