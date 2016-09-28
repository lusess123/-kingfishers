var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../BaseInvoicing/BaseInvoicingCer", "./../../Default/default/DefaultMer", "./WinInvoicingPurchaseRer", "./../../BasePageMRC", "./../../../../01core/Ioc", "./../../../core/IPage"], function (require, exports, cFile, mFile, rFile, mrcFile, iocFile, iPageFile) {
    "use strict";
    var WinInvoicingPurchaseMrc = (function (_super) {
        __extends(WinInvoicingPurchaseMrc, _super);
        function WinInvoicingPurchaseMrc() {
            var cer = new cFile.BaseInvoicingCer();
            var mer = new mFile.DefaultMer();
            var rer = new rFile.WinInvoicingPurchaseRer();
            _super.call(this, cer, mer, rer);
        }
        return WinInvoicingPurchaseMrc;
    }(mrcFile.BasePageMRC));
    exports.WinInvoicingPurchaseMrc = WinInvoicingPurchaseMrc;
    iocFile.Core.Ioc.Current().RegisterType("InvoicingPurchase", iPageFile.PageFace, WinInvoicingPurchaseMrc);
});
