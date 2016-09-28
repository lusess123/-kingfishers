import rer = require("./../../core/mcrv/AkBaseRenderer");

export class WorkflowRer extends rer.AkBaseRenderer {


    public setWorkflowMapCurrentStep($div, resObj) {
        if (resObj.ExtData.ProcessModel && resObj.ExtData.ProcessModel.DetailModel && resObj.ExtData.ProcessModel.DetailModel.MapModel.CurrentStep.DisplayName) {
            $div.append("<p class='hide ACT-STEP-NAME'>" + resObj.ExtData.ProcessModel.DetailModel.MapModel.CurrentStep.DisplayName + "</p>");
        }
    }
    public loadWorkflowInstProcessR(res, id) {
        var _$dom = this.$JObj;
        _$dom.html("");
        _$dom["AtawViewPage"](res);
        if (res.ExtData.HaveSave === "1") {
        }
        this.setWorkflowMapCurrentStep(_$dom, res);
    }
    public loadWorkflowInstDetailR(res) {
        var _$dom = this.$JObj;
        _$dom.html("");
        res.NoSubmitBtn = true;
        _$dom["AtawViewPage"](res);
        _$dom.find(".ACT-SUBIMT-BTN").hide();
        this.setWorkflowMapCurrentStep(_$dom, res);
    }
    public loadWorkflowInstHisR(res) {
        var _$dom = this.$JObj;
        _$dom.html("");
        _$dom.append("<p>" + res.Title + "</p>");
        res.NoSubmitBtn = true;
        _$dom["AtawViewPage"](res);
        _$dom.find(".ACT-SUBIMT-BTN").hide();
        this.setWorkflowMapCurrentStep(_$dom, res);
    }

}