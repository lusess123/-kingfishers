var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./PartCer", "./PartMer", "./PartRer", "./../BasePageMRC", "./../../../01core/Ioc", "./../../core/IPage"], function (require, exports, cFile, mFile, rFile, mrcFile, iocFile, iPageFile) {
    "use strict";
    var MenuMRC = (function (_super) {
        __extends(MenuMRC, _super);
        function MenuMRC() {
            var cer = new cFile.PartCer();
            var mer = new mFile.PartMer();
            var rer = new rFile.PartRer();
            _super.call(this, cer, mer, rer);
        }
        return MenuMRC;
    }(mrcFile.BasePageMRC));
    exports.MenuMRC = MenuMRC;
    iocFile.Core.Ioc.Current().RegisterType("PART", iPageFile.PageFace, MenuMRC);
});
