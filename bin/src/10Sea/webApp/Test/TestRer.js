var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../core/mcrv/AkBaseRenderer", "./../../../01core/Util", "./../../../01core/Ioc", "./../../core/IPage"], function (require, exports, baseRerFile, utilFile, iocFile, iPageFile) {
    "use strict";
    var TestRer = (function (_super) {
        __extends(TestRer, _super);
        function TestRer() {
            _super.apply(this, arguments);
        }
        TestRer.prototype.getC = function () {
            return utilFile.Core.Util.Cast(this.C);
        };
        TestRer.prototype.initR = function ($dom) {
            var _this = this;
            var _seaName = this.getC().getSeaName();
            var _$JObj = this.$JObj;
            iocFile.Core.Ioc.Current().FetchAsyInstance(_seaName, iPageFile.PageFace, function (a) { _this.initR(a); }, function () {
                alert("sea组件: " + _seaName + "  不存在（" + new Date() + "）");
            });
        };
        ;
        return TestRer;
    }(baseRerFile.AkBaseRenderer));
    exports.TestRer = TestRer;
});
