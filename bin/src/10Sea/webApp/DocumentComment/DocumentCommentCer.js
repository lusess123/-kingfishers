var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../BasePageCer", "./../../../01core/Util"], function (require, exports, pageCerFile, utilFile) {
    "use strict";
    var DocumentCommentCer = (function (_super) {
        __extends(DocumentCommentCer, _super);
        function DocumentCommentCer() {
            _super.apply(this, arguments);
            this.AkName = "DocumentCommentCer";
            this.AppCer = null;
        }
        DocumentCommentCer.prototype.getM = function () {
            return utilFile.Core.Util.Cast(this.M);
        };
        DocumentCommentCer.prototype.getR = function () {
            return utilFile.Core.Util.Cast(this.R);
        };
        DocumentCommentCer.prototype.init = function () {
            var _this = this;
            this.getR().loadModuleXmlMainR(this.getM().FID, this.getM().Type, this.getM().IsPublic);
        };
        DocumentCommentCer.prototype.setModel = function (p1, p2, p3) {
            this.getM().FID = p1;
            this.getM().Type = p2;
            if (p3 != null) {
                this.getM().IsPublic = p3;
            }
            else {
                this.getM().IsPublic = false;
            }
        };
        DocumentCommentCer.prototype.loadMenu = function () {
            $.AKjs.AppGet().Menu.gotoMenuLoction('$$module/SNS/Documentcenter/SNS_ALLDocuments');
        };
        DocumentCommentCer.prototype.clearPage = function () {
            $.AKjs.AppGet().hideNavi();
        };
        return DocumentCommentCer;
    }(pageCerFile.BasePageCer));
    exports.DocumentCommentCer = DocumentCommentCer;
});
