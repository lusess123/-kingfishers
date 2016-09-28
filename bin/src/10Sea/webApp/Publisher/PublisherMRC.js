var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./PublisherCer", "./PublisherMer", "./PublisherRer", "./../BasePageMRC", "./../../../01core/Ioc", "./../../core/IPage"], function (require, exports, cFile, mFile, rFile, mrcFile, iocFile, iPageFile) {
    "use strict";
    var PublishMRC = (function (_super) {
        __extends(PublishMRC, _super);
        function PublishMRC() {
            var cer = new cFile.PublisherCer();
            var mer = new mFile.PublisherMer();
            var rer = new rFile.PublisherRer();
            _super.call(this, cer, mer, rer);
        }
        return PublishMRC;
    }(mrcFile.BasePageMRC));
    exports.PublishMRC = PublishMRC;
    iocFile.Core.Ioc.Current().RegisterType("PUBLISHER", iPageFile.PageFace, PublishMRC);
});
