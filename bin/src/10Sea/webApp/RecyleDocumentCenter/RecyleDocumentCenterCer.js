var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../BasePageCer", "./../../../01core/Util"], function (require, exports, pageCerFile, utilFile) {
    "use strict";
    var RecyleDocumentCenterCer = (function (_super) {
        __extends(RecyleDocumentCenterCer, _super);
        function RecyleDocumentCenterCer() {
            _super.apply(this, arguments);
            this.AkName = "RecyleDocumentCenterCer";
        }
        RecyleDocumentCenterCer.prototype.getM = function () {
            return utilFile.Core.Util.Cast(this.M);
        };
        RecyleDocumentCenterCer.prototype.getR = function () {
            return utilFile.Core.Util.Cast(this.R);
        };
        RecyleDocumentCenterCer.prototype.init = function () {
            var _this = this;
            this.getM().getModuleXmlPageData(function (res) {
                _this.getR().loadModuleXmlMainR(res);
            });
        };
        ;
        RecyleDocumentCenterCer.prototype.setModel = function (p1, p2, p3) {
        };
        ;
        RecyleDocumentCenterCer.prototype.loadMenu = function () {
            $.AKjs.AppGet().Menu.gotoMenuLoction("$DocumentCenter$");
        };
        ;
        RecyleDocumentCenterCer.prototype.clearPage = function () {
            $.AKjs.AppGet().hideNavi();
        };
        ;
        return RecyleDocumentCenterCer;
    }(pageCerFile.BasePageCer));
    exports.RecyleDocumentCenterCer = RecyleDocumentCenterCer;
});
