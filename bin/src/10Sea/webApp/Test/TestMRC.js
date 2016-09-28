var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./TestCer", "./TestMer", "./TestRer", "./../BasePageMRC", "./../../core/IPage", "./../../../01core/Ioc"], function (require, exports, cFile, mFile, rFile, mrcFile, iPageFile, iocFile) {
    "use strict";
    var TestMRC = (function (_super) {
        __extends(TestMRC, _super);
        function TestMRC() {
            var cer = new cFile.TestCer();
            var mer = new mFile.TestMer();
            var rer = new rFile.TestRer();
            _super.call(this, cer, mer, rer);
        }
        return TestMRC;
    }(mrcFile.BasePageMRC));
    exports.TestMRC = TestMRC;
    iocFile.Core.Ioc.Current().RegisterType("Test", iPageFile.PageFace, TestMRC);
});
