import rer = require("./../../../core/mcrv/AkBaseRenderer");

export class WinWorkflowRer extends rer.AkBaseRenderer {

    public $Win = null;

    public initR() {
        this.$Win = $('<div  class="row">' +
            '<div  class="col-md-11  clearp ACT-APP-MAIN"></div>' +
            '<div  class="col-md-1 akcs-app-left ACT-APP-LEFT"></div>' +
            '</div>'
        );
    };

    public setWorkflowMapCurrentStep($div, resObj) {
        if (resObj.ExtData.ProcessModel && resObj.ExtData.ProcessModel.DetailModel && resObj.ExtData.ProcessModel.DetailModel.MapModel.CurrentStep.DisplayName) {
            $div.append("<p class='hide ACT-STEP-NAME'>" + resObj.ExtData.ProcessModel.DetailModel.MapModel.CurrentStep.DisplayName + "</p>");
        }
    }

    public loadWorkflowInstProcessR(res, id) {
        var _this = this;
        this.$Win = $('<div  class="row">' +

            '<div  class="col-md-12  clearp ACT-APP-MAIN"></div>' +
            '<div  class="col-md-0 akcs-app-left ACT-APP-LEFT"></div>' +
            '</div>');
        var _$dom = this.$Win;
        _$dom.AtawWindow({
            Title: res.Title,
            Width: "100%",
            Fixed: false,
            WindowOpenFun: function (a) {
                var _$dv = _$dom.find(".ACT-APP-MAIN");
                res.NaviContentSelector = _$dom.find(".ACT-APP-LEFT");
                _$dv["AtawViewPage"](res);
                //if (_this.C.HaveSave) {
                //    // alert(_this.C.HaveSave);
                //    // alert(_$dv.find(".ACT-SUBIMT-BTN").html());
                //    //  _$dv.find(".ACT-SUBIMT-BTN").before("<a class='btn  btn-info ACT-SAVE-BTN '>保存</a>&nbsp;");


                //}

                _this.setWorkflowMapCurrentStep(_$dv, res);
                res = null;
            }
        });

        var _Win = _$dom.AtawControl();
        _Win.open();
    }
    public loadWorkflowInstDetailR(res) {
        var _this = this;
        var _$dom = this.$Win;
        _$dom.AtawWindow({
            Title: "",
            Width: "100%",
            Fixed: false,
            WindowOpenFun: function (a) {
                var _$dv = _$dom.find(".ACT-APP-MAIN");
                res.NaviContentSelector = _$dom.find(".ACT-APP-LEFT");
                res.NoSubmitBtn = true;
                _$dv["AtawViewPage"](res);
                _$dom.find(".ACT-SUBIMT-BTN").hide();
                _this.setWorkflowMapCurrentStep(_$dv, res);
                res = null;
            }
        });

        var _Win = _$dom.AtawControl();
        _Win.open();
    }

    public loadWorkflowInstHisR(res) {
        var _$dom = this.$Win;
        var _this = this;
        _$dom.AtawWindow({
            Title: "",
            Width: "100%",
            Fixed: false,
            WindowOpenFun: function (a) {
                var _$dv = _$dom.find(".ACT-APP-MAIN");
                res.NaviContentSelector = _$dom.find(".ACT-APP-LEFT");
                _$dom.append("<p>" + res.Title + "</p>");
                res.NoSubmitBtn = true;
                _$dom.AtawViewPage(res);
                _$dom.find(".ACT-SUBIMT-BTN").hide();
                _this.setWorkflowMapCurrentStep(_$dv, res);
                res = null;
            }
        });

        var _Win = _$dom.AtawControl();
        _Win.open();
    }

    public dispose() {

        var _Win = this.$Win.AtawControl();
        if (_Win != null) {
            if (_Win.close) {
                _Win.close();
            }
           // _Win.close();
            _Win.dispose();
        }
        super.dispose();
    };

}