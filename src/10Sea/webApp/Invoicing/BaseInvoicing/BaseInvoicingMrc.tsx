import rFile = require("./BaseInvoicingRer");
import mFile = require("./../../Default/default/DefaultMer");
import cFile = require("./BaseInvoicingCer");
import mrcFile = require("./../../BasePageMRC");
import iocFile = require("./../../../../01core/Ioc");
import iPageFile = require("./../../../core/IPage");

export class BaseInvoicingMrc extends mrcFile.BasePageMRC<cFile.BaseInvoicingCer, mFile.DefaultMer,rFile.BaseInvoicingRer>
{
    public constructor() {
        var cer: cFile.BaseInvoicingCer = new cFile.BaseInvoicingCer();
        var mer: mFile.DefaultMer = new mFile.DefaultMer();
        var rer: rFile.BaseInvoicingRer = new rFile.BaseInvoicingRer();
        super(cer,mer,rer);
    }
}
iocFile.Core.Ioc.Current().RegisterType("BaseInvoicing", iPageFile.PageFace, BaseInvoicingMrc);