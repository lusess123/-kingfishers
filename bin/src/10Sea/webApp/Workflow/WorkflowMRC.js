var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./WorkflowCer", "./WorkflowMer", "./WorkflowRer", "./../BasePageMRC", "./../../core/IPage", "./../../../01core/Ioc"], function (require, exports, cer, mer, rer, mrc, iPageFile, iocFile) {
    "use strict";
    var WorkflowMRC = (function (_super) {
        __extends(WorkflowMRC, _super);
        function WorkflowMRC() {
            _super.call(this, new cer.WorkflowCer(), new mer.WorkflowMer(), new rer.WorkflowRer());
        }
        return WorkflowMRC;
    }(mrc.BasePageMRC));
    exports.WorkflowMRC = WorkflowMRC;
    iocFile.Core.Ioc.Current().RegisterType("WORKFLOW", iPageFile.PageFace, WorkflowMRC);
});
