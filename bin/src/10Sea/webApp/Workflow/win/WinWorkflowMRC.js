var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../WorkflowCer", "./../WorkflowMer", "./WinWorkflowRer", "./../../BasePageMRC", "./../../../core/IPage", "./../../../../01core/Ioc"], function (require, exports, cer, mer, rer, mrc, iPageFile, iocFile) {
    "use strict";
    var WinWorkflowMRC = (function (_super) {
        __extends(WinWorkflowMRC, _super);
        function WinWorkflowMRC() {
            _super.call(this, new cer.WorkflowCer(), new mer.WorkflowMer(), new rer.WinWorkflowRer());
        }
        return WinWorkflowMRC;
    }(mrc.BasePageMRC));
    exports.WinWorkflowMRC = WinWorkflowMRC;
    iocFile.Core.Ioc.Current().RegisterType("WINWORKFLOW", iPageFile.PageFace, WinWorkflowMRC);
});
