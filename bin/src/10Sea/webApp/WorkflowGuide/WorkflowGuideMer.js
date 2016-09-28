var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../core/mcrv/AkBaseModel"], function (require, exports, model) {
    "use strict";
    var WorkflowGuideMer = (function (_super) {
        __extends(WorkflowGuideMer, _super);
        function WorkflowGuideMer() {
            _super.apply(this, arguments);
        }
        WorkflowGuideMer.prototype.getModuleXmlPageDataM = function (workflowDefName, callBack) {
            $.AKjs.getJSON("/workflow/WorkFlowDef/GetGuideXml", { shortName: workflowDefName }, callBack);
        };
        return WorkflowGuideMer;
    }(model.AkBaseModel));
    exports.WorkflowGuideMer = WorkflowGuideMer;
});
