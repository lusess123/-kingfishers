var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./DocumentCenterCer", "./DocumentCenterMer", "./DocumentCenterRer", "./../BasePageMRC", "./../../../01core/Ioc", "./../../core/IPage"], function (require, exports, cFile, mFile, rFile, mrcFile, iocFile, iPageFile) {
    "use strict";
    var DocumentCenterMRC = (function (_super) {
        __extends(DocumentCenterMRC, _super);
        function DocumentCenterMRC() {
            var cer = new cFile.DocumentCenterCer();
            var mer = new mFile.DocumentCenterMer();
            var rer = new rFile.DocumentCenterRer();
            _super.call(this, cer, mer, rer);
        }
        return DocumentCenterMRC;
    }(mrcFile.BasePageMRC));
    exports.DocumentCenterMRC = DocumentCenterMRC;
    iocFile.Core.Ioc.Current().RegisterType("DocumentCenter", iPageFile.PageFace, DocumentCenterMRC);
});
