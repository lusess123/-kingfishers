var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./DefaultCer", "./DefaultMer", "./DefaultRer", "./../../BasePageMRC", "./../../../../01core/Ioc", "./../../../core/IPage"], function (require, exports, cFile, mFile, rFile, mrcFile, iocFile, iPageFile) {
    "use strict";
    var DefaultMRC = (function (_super) {
        __extends(DefaultMRC, _super);
        function DefaultMRC() {
            var cer = new cFile.DefaultCer();
            var mer = new mFile.DefaultMer();
            var rer = new rFile.DefaultRer();
            _super.call(this, cer, mer, rer);
        }
        return DefaultMRC;
    }(mrcFile.BasePageMRC));
    exports.DefaultMRC = DefaultMRC;
    iocFile.Core.Ioc.Current().RegisterType("DEFAULT", iPageFile.PageFace, DefaultMRC);
});
