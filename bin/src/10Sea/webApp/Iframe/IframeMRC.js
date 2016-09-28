var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./IframeCer", "./IframeMer", "./IframeRer", "./../webApp/BasePageMRC", "./../../core/IPage", "./../../../01core/Ioc"], function (require, exports, cFile, mFile, rFile, mrc, iPageFile, iocFile) {
    "use strict";
    var IframeMRC = (function (_super) {
        __extends(IframeMRC, _super);
        function IframeMRC() {
            var cer = new cFile.IframeCer();
            var mer = new mFile.IframeMer();
            var rer = new rFile.IframeRer();
            _super.call(this, cer, mer, rer);
        }
        return IframeMRC;
    }(mrc.BasePageMRC));
    exports.IframeMRC = IframeMRC;
    iocFile.Core.Ioc.Current().RegisterType("Iframe", iPageFile.PageFace, IframeMRC);
});
