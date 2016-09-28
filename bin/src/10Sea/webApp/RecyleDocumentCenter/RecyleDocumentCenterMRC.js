var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./RecyleDocumentCenterCer", "./RecyleDocumentCenterMer", "./RecyleDocumentCenterRer", "./../BasePageMRC", "./../../../01core/Ioc", "./../../core/IPage"], function (require, exports, cFile, mFile, rFile, mrcFile, iocFile, iPageFile) {
    "use strict";
    var RecyleDocumentCenterMRC = (function (_super) {
        __extends(RecyleDocumentCenterMRC, _super);
        function RecyleDocumentCenterMRC() {
            var cer = new cFile.RecyleDocumentCenterCer();
            var mer = new mFile.RecyleDocumentCenterMer();
            var rer = new rFile.RecyleDocumentCenterRer();
            _super.call(this, cer, mer, rer);
        }
        return RecyleDocumentCenterMRC;
    }(mrcFile.BasePageMRC));
    exports.RecyleDocumentCenterMRC = RecyleDocumentCenterMRC;
    iocFile.Core.Ioc.Current().RegisterType("RecyleDocumentCenter", iPageFile.PageFace, RecyleDocumentCenterMRC);
});
