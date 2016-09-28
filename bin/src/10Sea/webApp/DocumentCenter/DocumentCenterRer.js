var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../core/mcrv/AkBaseRenderer", "./../../../01core/Util", "./documentPage/AKDocumentPageInit"], function (require, exports, baseRerFile, utilFile, DPInit) {
    "use strict";
    var DocumentCenterRer = (function (_super) {
        __extends(DocumentCenterRer, _super);
        function DocumentCenterRer() {
            _super.apply(this, arguments);
            this.AkName = "DocumentCenterRer";
        }
        DocumentCenterRer.prototype.getC = function () {
            return utilFile.Core.Util.Cast(this.C);
        };
        DocumentCenterRer.prototype.initR = function () { };
        DocumentCenterRer.prototype.loadModuleXmlMainR = function (option) {
            var _$dom = this.$JObj;
            _$dom.html("");
            //seajs.use(['jquery', 'AkDocumentPage-Init'], function ($, iner) {
            //    iner.load(_$dom, option);
            //});
            var dpinit = new DPInit.AKDocumentPageInit();
            dpinit.load(_$dom, option);
        };
        return DocumentCenterRer;
    }(baseRerFile.AkBaseRenderer));
    exports.DocumentCenterRer = DocumentCenterRer;
});
