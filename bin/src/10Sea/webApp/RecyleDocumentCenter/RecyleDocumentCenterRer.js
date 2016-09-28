var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../core/mcrv/AkBaseRenderer", "./../../../01core/Util"], function (require, exports, baseRerFile, utilFile) {
    "use strict";
    var RecyleDocumentCenterRer = (function (_super) {
        __extends(RecyleDocumentCenterRer, _super);
        function RecyleDocumentCenterRer() {
            _super.apply(this, arguments);
            this.AkName = "RecyleDocumentCenterRer";
        }
        RecyleDocumentCenterRer.prototype.getCer = function () {
            return utilFile.Core.Util.Cast(this.C);
        };
        RecyleDocumentCenterRer.prototype.initR = function ($dom) {
        };
        ;
        RecyleDocumentCenterRer.prototype.loadModuleXmlMainR = function (res) {
            var _$dom = this.$JObj;
            //_$dom.html("");
            _$dom["AtawListPage"](res);
        };
        return RecyleDocumentCenterRer;
    }(baseRerFile.AkBaseRenderer));
    exports.RecyleDocumentCenterRer = RecyleDocumentCenterRer;
});
