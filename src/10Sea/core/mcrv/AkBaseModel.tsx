import akBaseFile = require("./../AkBase");
import cFile = require("./AkBaseController");
import rFile = require("./AkBaseRenderer");

export class AkBaseModel extends akBaseFile.AkBase
{
    public C: cFile.AkBaseController;
}