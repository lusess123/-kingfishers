var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./MessAgeCer", "./MessAgeMer", "./MessAgeRer", "./../BasePageMRC", "./../../../01core/Ioc", "./../../core/IPage"], function (require, exports, cFile, mFile, rFile, mrcFile, iocFile, iPageFile) {
    "use strict";
    var MessAgeMRC = (function (_super) {
        __extends(MessAgeMRC, _super);
        function MessAgeMRC() {
            var cer = new cFile.MessAgeCer();
            var mer = new mFile.MessAgeMer();
            var rer = new rFile.MessAgeRer();
            _super.call(this, cer, mer, rer);
        }
        MessAgeMRC.prototype.init = function ($dom) {
            this.R.$JObj = $dom;
            this.C.getR();
        };
        return MessAgeMRC;
    }(mrcFile.BasePageMRC));
    exports.MessAgeMRC = MessAgeMRC;
    iocFile.Core.Ioc.Current().RegisterType("MESSAGE", iPageFile.PageFace, MessAgeMRC);
});
