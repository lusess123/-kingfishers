var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../BasePageCer", "./../../../01core/Util"], function (require, exports, pageCerFile, utilFile) {
    "use strict";
    var TestCer = (function (_super) {
        __extends(TestCer, _super);
        function TestCer() {
            _super.apply(this, arguments);
            this.AkName = "testcer";
        }
        TestCer.prototype.getSeaName = function () {
            return this.getMrcName(this.getM().SeaName);
        };
        ;
        TestCer.prototype.getM = function () {
            return utilFile.Core.Util.Cast(this.M);
        };
        ;
        TestCer.prototype.init = function () {
            this.R.initR();
        };
        ;
        TestCer.prototype.getMrcName = function (name) {
            var _name = name.toLowerCase();
            var _l = _name.length;
            if (_l > 3 && _name.substr(_l - 3) == "mrc") {
            }
            else {
                _name = _name + "mrc";
            }
            return _name;
        };
        ;
        TestCer.prototype.setModel = function (p1, p2, p3) {
            this.getM().SeaName = p1;
        };
        ;
        TestCer.prototype.clearPage = function () {
            $.AKjs.AppGet().hideNavi();
            $.AKjs.AppGet().clearWindow();
        };
        ;
        return TestCer;
    }(pageCerFile.BasePageCer));
    exports.TestCer = TestCer;
});
