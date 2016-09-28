var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../WorkflowGuideCer", "./../WorkflowGuideMer", "./WinWorkflowGuideRer", "./../../BasePageMRC", "./../../../core/IPage", "./../../../../01core/Ioc"], function (require, exports, cer, mer, rer, mrc, iPageFile, iocFile) {
    "use strict";
    var WinWorkflowGuideMRC = (function (_super) {
        __extends(WinWorkflowGuideMRC, _super);
        function WinWorkflowGuideMRC() {
            _super.call(this, new cer.WorkflowGuideCer(), new mer.WorkflowGuideMer(), new rer.WinWorkflowGuideRer());
        }
        return WinWorkflowGuideMRC;
    }(mrc.BasePageMRC));
    exports.WinWorkflowGuideMRC = WinWorkflowGuideMRC;
    iocFile.Core.Ioc.Current().RegisterType("WINWORKFLOWGUIDE", iPageFile.PageFace, WinWorkflowGuideMRC);
});
