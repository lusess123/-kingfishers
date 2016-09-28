var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../BaseInvoicing/BaseInvoicingCer", "./../../Default/default/DefaultMer", "./../InvoicingReturnStor/WinInvoicingReturnStorRer", "./../../BasePageMRC", "./../../../../01core/Ioc", "./../../../core/IPage"], function (require, exports, cFile, mFile, rFile, mrcFile, iocFile, iPageFile) {
    "use strict";
    var WinInvoicingSellMrc = (function (_super) {
        __extends(WinInvoicingSellMrc, _super);
        function WinInvoicingSellMrc() {
            var cer = new cFile.BaseInvoicingCer();
            var mer = new mFile.DefaultMer();
            var rer = new rFile.WinInvoicingReturnStorRer();
            _super.call(this, cer, mer, rer);
        }
        return WinInvoicingSellMrc;
    }(mrcFile.BasePageMRC));
    exports.WinInvoicingSellMrc = WinInvoicingSellMrc;
    iocFile.Core.Ioc.Current().RegisterType("WinInvoicingSell", iPageFile.PageFace, WinInvoicingSellMrc);
});
