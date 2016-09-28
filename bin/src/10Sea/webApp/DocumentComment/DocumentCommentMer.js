var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../core/mcrv/AkBaseModel"], function (require, exports, baseMerFile) {
    "use strict";
    var DocumentCommentMer = (function (_super) {
        __extends(DocumentCommentMer, _super);
        function DocumentCommentMer() {
            _super.apply(this, arguments);
            this.AkName = "DocumentCommentMer";
            this.FID = "";
            this.Type = "";
            this.IsPublic = false;
        }
        return DocumentCommentMer;
    }(baseMerFile.AkBaseModel));
    exports.DocumentCommentMer = DocumentCommentMer;
});
