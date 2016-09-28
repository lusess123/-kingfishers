var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../core/mcrv/AkBaseRenderer"], function (require, exports, rer) {
    "use strict";
    var WinWorkflowRer = (function (_super) {
        __extends(WinWorkflowRer, _super);
        function WinWorkflowRer() {
            _super.apply(this, arguments);
            this.$Win = null;
        }
        WinWorkflowRer.prototype.initR = function () {
            this.$Win = $('<div  class="row">' +
                '<div  class="col-md-11  clearp ACT-APP-MAIN"></div>' +
                '<div  class="col-md-1 akcs-app-left ACT-APP-LEFT"></div>' +
                '</div>');
        };
        ;
        WinWorkflowRer.prototype.setWorkflowMapCurrentStep = function ($div, resObj) {
            if (resObj.ExtData.ProcessModel && resObj.ExtData.ProcessModel.DetailModel && resObj.ExtData.ProcessModel.DetailModel.MapModel.CurrentStep.DisplayName) {
                $div.append("<p class='hide ACT-STEP-NAME'>" + resObj.ExtData.ProcessModel.DetailModel.MapModel.CurrentStep.DisplayName + "</p>");
            }
        };
        WinWorkflowRer.prototype.loadWorkflowInstProcessR = function (res, id) {
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
        };
        WinWorkflowRer.prototype.loadWorkflowInstDetailR = function (res) {
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
        };
        WinWorkflowRer.prototype.loadWorkflowInstHisR = function (res) {
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
        };
        WinWorkflowRer.prototype.dispose = function () {
            var _Win = this.$Win.AtawControl();
            if (_Win != null) {
                if (_Win.close) {
                    _Win.close();
                }
                // _Win.close();
                _Win.dispose();
            }
            _super.prototype.dispose.call(this);
        };
        ;
        return WinWorkflowRer;
    }(rer.AkBaseRenderer));
    exports.WinWorkflowRer = WinWorkflowRer;
});
