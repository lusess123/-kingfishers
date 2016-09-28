var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./WinDefaultCer", "./../DefaultMer", "./WinDefaultRer", "./../../../BasePageMRC", "./../../../../../01core/Ioc", "./../../../../core/IPage"], function (require, exports, cFile, mFile, rFile, mrcFile, iocFile, iPageFile) {
    "use strict";
    var WinDefaultMRC = (function (_super) {
        __extends(WinDefaultMRC, _super);
        function WinDefaultMRC() {
            var cer = new cFile.WinDefaultCer();
            var mer = new mFile.DefaultMer();
            var rer = new rFile.WinDefaultRer();
            _super.call(this, cer, mer, rer);
        }
        return WinDefaultMRC;
    }(mrcFile.BasePageMRC));
    exports.WinDefaultMRC = WinDefaultMRC;
    iocFile.Core.Ioc.Current().RegisterType("WINDEFAULT", iPageFile.PageFace, WinDefaultMRC);
});
