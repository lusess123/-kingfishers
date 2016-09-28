import cFile = require("./TestCer");
import mFile = require("./TestMer");
import rFile = require("./TestRer");
import mrcFile = require("./../BasePageMRC");
import iPageFile = require("./../../core/IPage");
import iocFile = require("./../../../01core/Ioc");


export class TestMRC extends mrcFile.BasePageMRC<cFile.TestCer, mFile.TestMer, rFile.TestRer>
{
    public constructor() {
        var cer: cFile.TestCer = new cFile.TestCer();
        var mer: mFile.TestMer = new mFile.TestMer();
        var rer: rFile.TestRer = new rFile.TestRer();
        super(cer, mer, rer);
    }
}
iocFile.Core.Ioc.Current().RegisterType("Test", iPageFile.PageFace, TestMRC);