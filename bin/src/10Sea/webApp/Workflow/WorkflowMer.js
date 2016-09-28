var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../core/mcrv/AkBaseModel"], function (require, exports, model) {
    "use strict";
    var WorkflowMer = (function (_super) {
        __extends(WorkflowMer, _super);
        function WorkflowMer() {
            _super.apply(this, arguments);
        }
        WorkflowMer.prototype.getWorkflowInstPageDataM = function (id, callBack) {
            $.AKjs.getJSON("/workflow/WorkFlowInst/InstForm", { id: id }, callBack);
        };
        WorkflowMer.prototype.getWorkflowDetailPageDataM = function (id, callBack) {
            $.AKjs.getJSON("/workflow/WorkFlowInst/DetailForm", { id: id }, callBack);
        };
        WorkflowMer.prototype.getWorkflowInstHisPageDataM = function (id, callBack) {
            $.AKjs.getJSON("/workflow/MyHistory/HistoryForm", { id: id }, callBack);
        };
        return WorkflowMer;
    }(model.AkBaseModel));
    exports.WorkflowMer = WorkflowMer;
});
