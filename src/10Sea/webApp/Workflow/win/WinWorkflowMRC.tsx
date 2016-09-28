import cer = require("./../WorkflowCer");
import mer = require("./../WorkflowMer");
import rer = require("./WinWorkflowRer");
import mrc = require("./../../BasePageMRC");
import iPageFile = require("./../../../core/IPage");
import iocFile = require("./../../../../01core/Ioc");

export class WinWorkflowMRC extends mrc.BasePageMRC<cer.WorkflowCer, mer.WorkflowMer, rer.WinWorkflowRer> {

    public constructor() {
        super(new cer.WorkflowCer(), new mer.WorkflowMer(), new rer.WinWorkflowRer());
    }

}
iocFile.Core.Ioc.Current().RegisterType("WINWORKFLOW", iPageFile.PageFace, WinWorkflowMRC);
