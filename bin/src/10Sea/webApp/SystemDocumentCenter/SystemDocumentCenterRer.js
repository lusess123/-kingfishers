var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../core/mcrv/AkBaseRenderer", "./../../../01core/Util", "./sysdocumentPage/AKDocumentPageInit"], function (require, exports, baseRerFile, utilFile, dcpInitFile) {
    "use strict";
    var SystemDocumentCenterRer = (function (_super) {
        __extends(SystemDocumentCenterRer, _super);
        function SystemDocumentCenterRer() {
            _super.apply(this, arguments);
            this.AkName = "SystemDocumentCenterRer";
        }
        SystemDocumentCenterRer.prototype.getCer = function () {
            return utilFile.Core.Util.Cast(this.C);
        };
        SystemDocumentCenterRer.prototype.initR = function ($dom) {
        };
        ;
        SystemDocumentCenterRer.prototype.loadModuleXmlMainR = function (option) {
            var _$dom = this.$JObj;
            _$dom.clear();
            //seajs.use(['jquery', 'AkDocumentPage-sysInit'], function ($, iner) {
            //    iner.load(_$dom, option);
            //});
            var dcpinit = new dcpInitFile.AKDocumentPageInit();
            dcpinit.load(_$dom, option);
        };
        return SystemDocumentCenterRer;
    }(baseRerFile.AkBaseRenderer));
    exports.SystemDocumentCenterRer = SystemDocumentCenterRer;
});
