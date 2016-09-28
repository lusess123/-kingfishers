import rer = require("./../../core/mcrv/AkBaseRenderer");

export class WorkflowGuideRer extends rer.AkBaseRenderer {


    public loadModuleXmlMainR(option) {
        var _$dom = this.$JObj;
        _$dom.html("");
        _$dom["AtawGuidePage"](option);
    }

}