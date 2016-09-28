import cFile = require("./../BaseInvoicing/BaseInvoicingCer");
import mFile = require("./../../Default/default/DefaultMer");
import rFile = require("./WinInvoicingPurchaseRer");
import mrcFile = require("./../../BasePageMRC");
import iocFile = require("./../../../../01core/Ioc");
import iPageFile = require("./../../../core/IPage");

export class WinInvoicingPurchaseMrc extends mrcFile.BasePageMRC<cFile.BaseInvoicingCer,mFile.DefaultMer,rFile.WinInvoicingPurchaseRer>{
    public constructor()
    {
        var cer: cFile.BaseInvoicingCer = new cFile.BaseInvoicingCer();
        var mer: mFile.DefaultMer = new mFile.DefaultMer();
        var rer: rFile.WinInvoicingPurchaseRer = new rFile.WinInvoicingPurchaseRer();
        super(cer,mer,rer);
    }
}
iocFile.Core.Ioc.Current().RegisterType("InvoicingPurchase", iPageFile.PageFace, WinInvoicingPurchaseMrc);
