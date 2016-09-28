var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./DeskCer", "./DeskMer", "./DeskRer", "./../BasePageMRC", "./../../../01core/Ioc", "./../../core/IPage"], function (require, exports, cFile, mFile, rFile, mrcFile, iocFile, iPageFile) {
    "use strict";
    var DeskMRC = (function (_super) {
        __extends(DeskMRC, _super);
        function DeskMRC() {
            var cer = new cFile.DeskCer();
            var mer = new mFile.DeskMer();
            var rer = new rFile.DeskRer();
            _super.call(this, cer, mer, rer);
        }
        ;
        return DeskMRC;
    }(mrcFile.BasePageMRC));
    exports.DeskMRC = DeskMRC;
    iocFile.Core.Ioc.Current().RegisterType("DESK", iPageFile.PageFace, DeskMRC);
});
