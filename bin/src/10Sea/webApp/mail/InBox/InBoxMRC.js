var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./InBoxCer", "./InBoxMer", "./InBoxRer", "./../webApp/BasePageMRC", "./../../core/IPage", "./../../../01core/Ioc"], function (require, exports, cFile, mFile, rFile, mrc, iPageFile, iocFile) {
    "use strict";
    var InBoxMRC = (function (_super) {
        __extends(InBoxMRC, _super);
        function InBoxMRC() {
            var cer = new cFile.InBoxCer();
            var mer = new mFile.InBoxMer();
            var rer = new rFile.InBoxRer();
            _super.call(this, cer, mer, rer);
        }
        return InBoxMRC;
    }(mrc.BasePageMRC));
    exports.InBoxMRC = InBoxMRC;
    iocFile.Core.Ioc.Current().RegisterType("InBox", iPageFile.PageFace, InBoxMRC);
});
