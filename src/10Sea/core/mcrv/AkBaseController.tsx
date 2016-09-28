import akBaseFile = require("./../AkBase");
import mFile = require("./AkBaseModel");
import rFile = require("./AkBaseRenderer");
import mrcFile = require("./AkMRCCreator");

export class AkBaseController  extends akBaseFile.AkBase
{
    public R: rFile.AkBaseRenderer;
    public M: mFile.AkBaseModel;
}