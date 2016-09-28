var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./AKPageHelpCer", "./AKPageHelpMer", "./AKPageHelpRer", "./../BasePageMRC", "./../../../01core/Ioc", "./../../core/IPage"], function (require, exports, cFile, mFile, rFile, mrcFile, iocFile, iPageFile) {
    "use strict";
    var AKPageHelpMRC = (function (_super) {
        __extends(AKPageHelpMRC, _super);
        function AKPageHelpMRC() {
            var cer = new cFile.AKPageHelpCer();
            var mer = new mFile.AKPageHelpMer();
            var rer = new rFile.AKPageHelpRer();
            _super.call(this, cer, mer, rer);
        }
        AKPageHelpMRC.prototype.init = function ($dom) {
            this.R.$JObj = $dom;
            this.C.initC();
        };
        return AKPageHelpMRC;
    }(mrcFile.BasePageMRC));
    exports.AKPageHelpMRC = AKPageHelpMRC;
    iocFile.Core.Ioc.Current().RegisterType("AKPAGEHELP", iPageFile.PageFace, AKPageHelpMRC);
});
