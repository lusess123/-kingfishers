var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../core/mcrv/AkBaseRenderer", "./../../../01core/Util", "./comment/AKCommentInit"], function (require, exports, baseRerFile, utilFile, DCInit) {
    "use strict";
    var DocumentCommentRer = (function (_super) {
        __extends(DocumentCommentRer, _super);
        function DocumentCommentRer() {
            _super.apply(this, arguments);
        }
        DocumentCommentRer.prototype.getCer = function () {
            return utilFile.Core.Util.Cast(this.C);
        };
        //public AkName = "DocumentCommentRer";
        DocumentCommentRer.prototype.initR = function ($dom) { };
        //this.loadModuleXmlMainR = function (fid, type, isPublic) {
        //    var _$dom = this.$JObj;
        //    _$dom.html("");
        //    seajs.use(['jquery', 'DCInit'], function ($, iner) {
        //        iner.load(_$dom, { FID: fid, TYPE: type, ISPUBLIC: isPublic });
        //    });
        //}
        DocumentCommentRer.prototype.loadModuleXmlMainR = function (fid, type, isPublic) {
            var _$dom = this.$JObj;
            _$dom.html("");
            var dcinit = new DCInit.AKCommentInit();
            dcinit.load(_$dom, { FID: fid, TYPE: type, ISPUBLIC: isPublic });
        };
        return DocumentCommentRer;
    }(baseRerFile.AkBaseRenderer));
    exports.DocumentCommentRer = DocumentCommentRer;
});
