var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../core/mcrv/AkBaseController", "./../../../../01core/Util"], function (require, exports, akcerFile, utilFile) {
    "use strict";
    var AKDocumentPageController = (function (_super) {
        __extends(AKDocumentPageController, _super);
        function AKDocumentPageController() {
            _super.apply(this, arguments);
        }
        AKDocumentPageController.prototype.getM = function () {
            return utilFile.Core.Util.Cast(this.M);
        };
        AKDocumentPageController.prototype.getR = function () {
            return utilFile.Core.Util.Cast(this.R);
        };
        AKDocumentPageController.prototype.initC = function () {
            this.getR().initR();
        };
        //this.initialize = function (config, renderer, model) {
        //    me.superclass.initialize.call(this, config);
        //}
        //public constructor(config, renderer, model) {
        //    //super(config);
        //}
        AKDocumentPageController.prototype.getWithinPageC = function (option) {
            var _this = this;
            var ds = {};
            if (option && option.paramObj && option.paramObj.ds) {
                ds = option.paramObj.ds;
            }
            var postData = $.extend({}, { xml: option.xml, ds: $.toJSON(ds), pageStyle: option.pageStyle }, option.paramObj.additionData);
            _this.getM().getWithinPageM(postData, function (res) {
                if (res.ExtData) {
                    res.ExtData.PageState = option.param;
                }
                else {
                    res.ExtData = { PageState: option.param };
                }
                _this.getR().creategetWithinPageR(res);
            });
        };
        return AKDocumentPageController;
    }(akcerFile.AkBaseController));
    exports.AKDocumentPageController = AKDocumentPageController;
});
