var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./DocumentCommentCer", "./DocumentCommentMer", "./DocumentCommentRer", "./../BasePageMRC", "./../../../01core/Ioc", "./../../core/IPage"], function (require, exports, cFile, mFile, rFile, mrcFile, iocFile, iPageFile) {
    "use strict";
    var DocumentCommentMRC = (function (_super) {
        __extends(DocumentCommentMRC, _super);
        function DocumentCommentMRC() {
            var cer = new cFile.DocumentCommentCer();
            var mer = new mFile.DocumentCommentMer();
            var rer = new rFile.DocumentCommentRer();
            _super.call(this, cer, mer, rer);
        }
        return DocumentCommentMRC;
    }(mrcFile.BasePageMRC));
    exports.DocumentCommentMRC = DocumentCommentMRC;
    iocFile.Core.Ioc.Current().RegisterType("DocumentComment", iPageFile.PageFace, DocumentCommentMRC);
});
