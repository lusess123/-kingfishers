var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../core/mcrv/AkBaseRenderer"], function (require, exports, rer) {
    "use strict";
    var WorkflowRer = (function (_super) {
        __extends(WorkflowRer, _super);
        function WorkflowRer() {
            _super.apply(this, arguments);
        }
        WorkflowRer.prototype.setWorkflowMapCurrentStep = function ($div, resObj) {
            if (resObj.ExtData.ProcessModel && resObj.ExtData.ProcessModel.DetailModel && resObj.ExtData.ProcessModel.DetailModel.MapModel.CurrentStep.DisplayName) {
                $div.append("<p class='hide ACT-STEP-NAME'>" + resObj.ExtData.ProcessModel.DetailModel.MapModel.CurrentStep.DisplayName + "</p>");
            }
        };
        WorkflowRer.prototype.loadWorkflowInstProcessR = function (res, id) {
            var _$dom = this.$JObj;
            _$dom.html("");
            _$dom["AtawViewPage"](res);
            if (res.ExtData.HaveSave === "1") {
            }
            this.setWorkflowMapCurrentStep(_$dom, res);
        };
        WorkflowRer.prototype.loadWorkflowInstDetailR = function (res) {
            var _$dom = this.$JObj;
            _$dom.html("");
            res.NoSubmitBtn = true;
            _$dom["AtawViewPage"](res);
            _$dom.find(".ACT-SUBIMT-BTN").hide();
            this.setWorkflowMapCurrentStep(_$dom, res);
        };
        WorkflowRer.prototype.loadWorkflowInstHisR = function (res) {
            var _$dom = this.$JObj;
            _$dom.html("");
            _$dom.append("<p>" + res.Title + "</p>");
            res.NoSubmitBtn = true;
            _$dom["AtawViewPage"](res);
            _$dom.find(".ACT-SUBIMT-BTN").hide();
            this.setWorkflowMapCurrentStep(_$dom, res);
        };
        return WorkflowRer;
    }(rer.AkBaseRenderer));
    exports.WorkflowRer = WorkflowRer;
});
