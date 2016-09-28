var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../core/mcrv/AkBaseRenderer", "./../../../01core/Util"], function (require, exports, baseRerFile, utilFile) {
    "use strict";
    var PartRer = (function (_super) {
        __extends(PartRer, _super);
        function PartRer() {
            _super.apply(this, arguments);
        }
        PartRer.prototype.getM = function () {
            return utilFile.Core.Util.Cast(this.C.M);
        };
        PartRer.prototype.initR = function ($dom) {
            var _url = this.getM().Url;
            this.$JObj["AtawLoad"](_url);
        };
        ;
        PartRer.prototype.loadModuleXmlMain = function (res, pageStyle) {
            var _$dom = this.$JObj;
        };
        PartRer.prototype.dispose = function () {
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
        return PartRer;
    }(baseRerFile.AkBaseRenderer));
    exports.PartRer = PartRer;
});
