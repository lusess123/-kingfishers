var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./WorkflowGuideCer", "./WorkflowGuideMer", "./WorkflowGuideRer", "./../BasePageMRC", "./../../core/IPage", "./../../../01core/Ioc"], function (require, exports, cer, mer, rer, mrc, iPageFile, iocFile) {
    "use strict";
    var WorkflowGuideMRC = (function (_super) {
        __extends(WorkflowGuideMRC, _super);
        function WorkflowGuideMRC() {
            _super.call(this, new cer.WorkflowGuideCer(), new mer.WorkflowGuideMer(), new rer.WorkflowGuideRer());
        }
        return WorkflowGuideMRC;
    }(mrc.BasePageMRC));
    exports.WorkflowGuideMRC = WorkflowGuideMRC;
    iocFile.Core.Ioc.Current().RegisterType("WORKFLOWGUIDE", iPageFile.PageFace, WorkflowGuideMRC);
});
