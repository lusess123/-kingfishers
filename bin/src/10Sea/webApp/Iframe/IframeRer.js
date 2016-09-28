var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../core/mcrv/AkBaseRenderer"], function (require, exports, rer) {
    "use strict";
    var IframeRer = (function (_super) {
        __extends(IframeRer, _super);
        function IframeRer() {
            _super.apply(this, arguments);
            this.AkName = "DefaultRer";
            // this.PageObj = null;
            this.loadModuleXmlMain = function (res, pageStyle) {
                var _$dom = this.$JObj;
                //_$dom.hide();
                _$dom.clear(true);
                res.SysFunAfterInit = function (page) {
                    var _layout = $.AKjs.AppGet().R.hasLeftNavi() ? "TTV" : "VTV";
                    $.AKjs.AppGet().LayOut.layOutTransFormPage(_layout);
                    if (!$.AKjs.AppGet().R.hasLeftNavi()) {
                        $.AKjs.AppGet().LayOut.layOutTransFormPage("VTV");
                    }
                    else {
                        $.AKjs.AppGet().LayOut.layOutTransFormPage("TTV");
                    }
                };
                if (this.C.M.OpenFunAfterInit) {
                    res.OpenFunAfterInit = this.C.M.OpenFunAfterInit;
                }
                _$dom["Ataw" + pageStyle + "Page"](res);
                res = null;
                // alert(456);
                // var mainObj = _this.$ActMain.AtawControl();
            };
        }
        IframeRer.prototype.initR = function ($dom) {
            // alert();
        };
        ;
        IframeRer.prototype.dispose = function () {
            if (this.$JObj) {
                var _obj = this.$JObj.data("ATAW_CONTROL");
                if (_obj) {
                    _obj["dispose"]();
                }
                _obj = null;
            }
            _super.prototype.dispose.call(this);
        };
        ;
        return IframeRer;
    }(rer.AkBaseRenderer));
    exports.IframeRer = IframeRer;
});
