﻿import cFile = require("./../BaseInvoicing/BaseInvoicingCer");
import mFile = require("./../../Default/default/DefaultMer");
import rFile = require("./WinInvoicingReturnStorRer");
import mrcFile = require("./../../BasePageMRC");
import iocFile = require("./../../../../01core/Ioc");
import iPageFile = require("./../../../core/IPage");

export class WinInvoicingPurchaseMrc extends mrcFile.BasePageMRC<cFile.BaseInvoicingCer, mFile.DefaultMer, rFile.WinInvoicingReturnStorRer>{
    public constructor() {
        var cer: cFile.BaseInvoicingCer = new cFile.BaseInvoicingCer();
        var mer: mFile.DefaultMer = new mFile.DefaultMer();
        var rer: rFile.WinInvoicingReturnStorRer = new rFile.WinInvoicingReturnStorRer();
        super(cer, mer, rer);
    }
}
iocFile.Core.Ioc.Current().RegisterType("WinInvoicingReturnStor", iPageFile.PageFace, WinInvoicingPurchaseMrc);