var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../core/mcrv/AkBaseRenderer"], function (require, exports, rer) {
    "use strict";
    var WorkflowGuideRer = (function (_super) {
        __extends(WorkflowGuideRer, _super);
        function WorkflowGuideRer() {
            _super.apply(this, arguments);
        }
        WorkflowGuideRer.prototype.loadModuleXmlMainR = function (option) {
            var _$dom = this.$JObj;
            _$dom.html("");
            _$dom["AtawGuidePage"](option);
        };
        return WorkflowGuideRer;
    }(rer.AkBaseRenderer));
    exports.WorkflowGuideRer = WorkflowGuideRer;
});
