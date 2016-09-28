var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../core/mcrv/AkBaseRenderer", "./../../../../01core/Url", "./../../../../01core/Util"], function (require, exports, baseRerFile, urlFile, utilFile) {
    "use strict";
    var DefaultRer = (function (_super) {
        __extends(DefaultRer, _super);
        function DefaultRer() {
            _super.apply(this, arguments);
        }
        DefaultRer.prototype.getCer = function () {
            return utilFile.Core.Util.Cast(this.C);
        };
        DefaultRer.prototype.loadModuleXmlMain = function (res, pageStyle) {
            var _$dom = this.$JObj;
            //_$dom.hide();
            _$dom.clear(true);
            var _d0 = new Date();
            res.SysFunAfterInit = function (page) {
                var _layput = page.Options.PageLayout;
                ////   alert(_layput);
                var _app = $.AKjs.AppGet();
                if (_layput != null) {
                    _app.LayOut.layOutTransFormPage(_layput);
                }
                else {
                    _app.LayOut.layOutTransFormPage("TTV");
                }
                _app.R.togglePageNavi();
            };
            if (this.getCer().getM().OpenFunAfterInit) {
                res.OpenFunAfterInit = this.getCer().getM().OpenFunAfterInit;
            }
            _$dom["Ataw" + pageStyle + "Page"](res);
            var _d1 = new Date();
            console.info(" 老页面渲染时间 ： " + urlFile.Core.logTime(_d1, _d0));
            // $.PObj = _$dom.AtawControl();
            res = null;
            // alert(456);
            // var mainObj = _this.$ActMain.AtawControl();
        };
        DefaultRer.prototype.dispose = function () {
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
        return DefaultRer;
    }(baseRerFile.AkBaseRenderer));
    exports.DefaultRer = DefaultRer;
});
