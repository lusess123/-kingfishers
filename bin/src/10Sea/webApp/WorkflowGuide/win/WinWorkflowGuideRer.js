var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../core/mcrv/AkBaseRenderer"], function (require, exports, rer) {
    "use strict";
    var WinWorkflowGuideRer = (function (_super) {
        __extends(WinWorkflowGuideRer, _super);
        function WinWorkflowGuideRer() {
            _super.apply(this, arguments);
            this.$Win = null;
        }
        WinWorkflowGuideRer.prototype.loadModuleXmlMainR = function (option) {
            var _$dom = this.$Win = $('<div class="panel panel-info"><div class="panel-body"><div>' +
                '<div  class="panel acs-colgroup col-lg-12 ACT-APP-MAIN"><div class="collapse in  panel-body ACT-PANEL-BODY" style="border:1px solid #ddd;"></div></div></div></div>' +
                '</div>');
            _$dom["AtawWindow"]({
                Title: "流程向导",
                Width: "100%",
                Fixed: false,
                WindowOpenFun: function (a) {
                    _$dom.find(".ACT-APP-MAIN")["AtawGuidePage"]($.extend(option, { NaviDom: _$dom.find(".ACT-APP-LEFT") }));
                }
            });
            var _Win = _$dom.AtawControl();
            _Win.open();
        };
        WinWorkflowGuideRer.prototype.dispose = function () {
            if (this.$Win && this.$Win.AtawControl) {
                var _Win = this.$Win.AtawControl();
                if (_Win != null) {
                    _Win.close();
                    _Win.dispose();
                }
            }
            _super.prototype.dispose.call(this);
        };
        ;
        return WinWorkflowGuideRer;
    }(rer.AkBaseRenderer));
    exports.WinWorkflowGuideRer = WinWorkflowGuideRer;
});
