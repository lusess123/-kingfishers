var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./BaseInvoicingRer", "./../../Default/default/DefaultMer", "./BaseInvoicingCer", "./../../BasePageMRC", "./../../../../01core/Ioc", "./../../../core/IPage"], function (require, exports, rFile, mFile, cFile, mrcFile, iocFile, iPageFile) {
    "use strict";
    var BaseInvoicingMrc = (function (_super) {
        __extends(BaseInvoicingMrc, _super);
        function BaseInvoicingMrc() {
            var cer = new cFile.BaseInvoicingCer();
            var mer = new mFile.DefaultMer();
            var rer = new rFile.BaseInvoicingRer();
            _super.call(this, cer, mer, rer);
        }
        return BaseInvoicingMrc;
    }(mrcFile.BasePageMRC));
    exports.BaseInvoicingMrc = BaseInvoicingMrc;
    iocFile.Core.Ioc.Current().RegisterType("BaseInvoicing", iPageFile.PageFace, BaseInvoicingMrc);
});
