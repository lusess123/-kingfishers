var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./InsertMailCer", "./InsertMailMer", "./InsertMailRer", "./../webApp/BasePageMRC", "./../../core/IPage", "./../../../01core/Ioc"], function (require, exports, cFile, mFile, rFile, mrc, iPageFile, iocFile) {
    "use strict";
    var InsertMailMRC = (function (_super) {
        __extends(InsertMailMRC, _super);
        function InsertMailMRC() {
            var cer = new cFile.InsertMailCer();
            var mer = new mFile.InsertMailMer();
            var rer = new rFile.InsertMailRer();
            _super.call(this, cer, mer, rer);
        }
        return InsertMailMRC;
    }(mrc.BasePageMRC));
    exports.InsertMailMRC = InsertMailMRC;
    iocFile.Core.Ioc.Current().RegisterType("InsertMail", iPageFile.PageFace, InsertMailMRC);
});
