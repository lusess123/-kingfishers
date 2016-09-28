var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../BasePageCer", "./../../../01core/Util"], function (require, exports, pageCerFile, utilFile) {
    "use strict";
    var DocumentCenterCer = (function (_super) {
        __extends(DocumentCenterCer, _super);
        function DocumentCenterCer() {
            _super.apply(this, arguments);
            this.AkName = "DocumentCenterCer";
            this.AppCer = null;
            this.Xml = "module/SNS/Documentcenter/SNS_ALLDocuments";
            this.PageStyle = "";
            this.Param = "";
        }
        DocumentCenterCer.prototype.getM = function () {
            return utilFile.Core.Util.Cast(this.M);
        };
        DocumentCenterCer.prototype.getR = function () {
            return utilFile.Core.Util.Cast(this.R);
        };
        DocumentCenterCer.prototype.init = function () {
            var _this = this;
            var paramObj = this.getM().formartPageState(this.PageStyle, this.Param);
            this.getR().loadModuleXmlMainR({ xml: this.Xml, pageStyle: this.PageStyle, param: this.Param, paramObj: paramObj });
        };
        ;
        DocumentCenterCer.prototype.setModel = function (p1, p2, p3) {
            this.PageStyle = "List";
            if (p2 === "List")
                p2 = "";
            this.Param = p2;
        };
        ;
        DocumentCenterCer.prototype.loadMenu = function () {
            $.AKjs.AppGet().Menu.gotoMenuLoction("$DocumentCenter$");
        };
        ;
        DocumentCenterCer.prototype.clearPage = function () {
            var _app = $.AKjs.AppGet();
            _app.hideNavi();
            _app.R.togglePageNavi();
            _app.clearWindow();
        };
        ;
        return DocumentCenterCer;
    }(pageCerFile.BasePageCer));
    exports.DocumentCenterCer = DocumentCenterCer;
});
