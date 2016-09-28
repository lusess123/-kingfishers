var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./SystemDocumentCenterCer", "./SystemDocumentCenterMer", "./SystemDocumentCenterRer", "./../BasePageMRC", "./../../../01core/Ioc", "./../../core/IPage"], function (require, exports, cFile, mFile, rFile, mrcFile, iocFile, iPageFile) {
    "use strict";
    var SystemDocumentCenterMRC = (function (_super) {
        __extends(SystemDocumentCenterMRC, _super);
        function SystemDocumentCenterMRC() {
            var cer = new cFile.SystemDocumentCenterCer();
            var mer = new mFile.SystemDocumentCenterMer();
            var rer = new rFile.SystemDocumentCenterRer();
            _super.call(this, cer, mer, rer);
        }
        return SystemDocumentCenterMRC;
    }(mrcFile.BasePageMRC));
    exports.SystemDocumentCenterMRC = SystemDocumentCenterMRC;
    iocFile.Core.Ioc.Current().RegisterType("SystemDocumentCenter", iPageFile.PageFace, SystemDocumentCenterMRC);
});
