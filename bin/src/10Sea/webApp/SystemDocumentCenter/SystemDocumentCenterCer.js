var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../BasePageCer", "./../../../01core/Util"], function (require, exports, pageCerFile, utilFile) {
    "use strict";
    var SystemDocumentCenterCer = (function (_super) {
        __extends(SystemDocumentCenterCer, _super);
        function SystemDocumentCenterCer() {
            _super.apply(this, arguments);
            this.AkName = "SystemDocumentCenterCer";
            this.AppCer = null;
            this.Xml = "module/SNS/Documentcenter/System/SNS_ALLDocuments";
            this.PageStyle = "";
            this.Param = "";
        }
        SystemDocumentCenterCer.prototype.getM = function () {
            return utilFile.Core.Util.Cast(this.M);
        };
        SystemDocumentCenterCer.prototype.getR = function () {
            return utilFile.Core.Util.Cast(this.R);
        };
        SystemDocumentCenterCer.prototype.init = function () {
            var _this = this;
            var paramObj = this.getM().formartPageState(this.PageStyle, this.Param);
            this.getR().loadModuleXmlMainR({ xml: this.Xml, pageStyle: this.PageStyle, param: this.Param, paramObj: paramObj });
        };
        ;
        SystemDocumentCenterCer.prototype.setModel = function (p1, p2, p3) {
            this.PageStyle = "List";
            if (p2 === "List")
                p2 = "";
            this.Param = p2;
        };
        ;
        SystemDocumentCenterCer.prototype.loadMenu = function () {
            $.AKjs.AppGet().Menu.gotoMenuLoction("$$" + this.Xml);
        };
        ;
        SystemDocumentCenterCer.prototype.clearPage = function () {
            $.AKjs.AppGet().hideNavi();
            $.AKjs.AppGet().clearWindow();
        };
        ;
        return SystemDocumentCenterCer;
    }(pageCerFile.BasePageCer));
    exports.SystemDocumentCenterCer = SystemDocumentCenterCer;
});
