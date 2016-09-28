import cFile = require("./PublisherCer");
import mFile = require("./PublisherMer");
import rFile = require("./PublisherRer");
import mrcFile = require("./../BasePageMRC");
import iocFile = require("./../../../01core/Ioc");
import iPageFile = require("./../../core/IPage");

export class PublishMRC extends mrcFile.BasePageMRC<cFile.PublisherCer, mFile.PublisherMer, rFile.PublisherRer>
{
    public constructor() {
        var cer: cFile.PublisherCer = new cFile.PublisherCer();
        var mer: mFile.PublisherMer = new mFile.PublisherMer();
        var rer: rFile.PublisherRer = new rFile.PublisherRer();
        super(cer, mer, rer);
    }
}

iocFile.Core.Ioc.Current().RegisterType("PUBLISHER", iPageFile.PageFace, PublishMRC);