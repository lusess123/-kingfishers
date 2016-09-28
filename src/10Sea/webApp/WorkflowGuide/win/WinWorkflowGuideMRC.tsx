import cer = require("./../WorkflowGuideCer");
import mer = require("./../WorkflowGuideMer");
import rer = require("./WinWorkflowGuideRer");
import mrc = require("./../../BasePageMRC");
import iPageFile = require("./../../../core/IPage");
import iocFile = require("./../../../../01core/Ioc");

export class WinWorkflowGuideMRC extends mrc.BasePageMRC<cer.WorkflowGuideCer, mer.WorkflowGuideMer, rer.WinWorkflowGuideRer> {

    public constructor() {
        super(new cer.WorkflowGuideCer(), new mer.WorkflowGuideMer(), new rer.WinWorkflowGuideRer());
    }

}
iocFile.Core.Ioc.Current().RegisterType("WINWORKFLOWGUIDE", iPageFile.PageFace, WinWorkflowGuideMRC);