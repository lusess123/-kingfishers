var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./TsCer", "./TsMer", "./TsRer", "./../../BasePageMRC", "./../../../../01core/Ioc", "./../../../core/IPage"], function (require, exports, cFile, mFile, rFile, mrcFile, iocFile, iPageFile) {
    "use strict";
    var TsMRC = (function (_super) {
        __extends(TsMRC, _super);
        function TsMRC() {
            var cer = new cFile.TsCer();
            var mer = new mFile.TsMer();
            var rer = new rFile.TsRer();
            _super.call(this, cer, mer, rer);
        }
        return TsMRC;
    }(mrcFile.BasePageMRC));
    exports.TsMRC = TsMRC;
    iocFile.Core.Ioc.Current().RegisterType("TS", iPageFile.PageFace, TsMRC);
});
