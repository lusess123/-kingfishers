var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./UserDocumentCenterCer", "./UserDocumentCenterMer", "./UserDocumentCenterRer", "./../BasePageMRC", "./../../../01core/Ioc", "./../../core/IPage"], function (require, exports, cFile, mFile, rFile, mrcFile, iocFile, iPageFile) {
    "use strict";
    var UserDocumentCenterMRC = (function (_super) {
        __extends(UserDocumentCenterMRC, _super);
        function UserDocumentCenterMRC() {
            var cer = new cFile.UserDocumentCenterCer();
            var mer = new mFile.UserDocumentCenterMer();
            var rer = new rFile.UserDocumentCenterRer();
            _super.call(this, cer, mer, rer);
        }
        return UserDocumentCenterMRC;
    }(mrcFile.BasePageMRC));
    exports.UserDocumentCenterMRC = UserDocumentCenterMRC;
    iocFile.Core.Ioc.Current().RegisterType("UserDocumentCenter", iPageFile.PageFace, UserDocumentCenterMRC);
});
