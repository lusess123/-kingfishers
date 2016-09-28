import rer = require("./../../../core/mcrv/AkBaseRenderer");

export class WinWorkflowGuideRer extends rer.AkBaseRenderer {

    public $Win = null;

    public loadModuleXmlMainR(option) {
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
    }

    public dispose() {
        if (this.$Win && this.$Win.AtawControl) {
            var _Win = this.$Win.AtawControl();
            if (_Win != null) {
                _Win.close();
                _Win.dispose();
            }
        }
        super.dispose();
    };

}