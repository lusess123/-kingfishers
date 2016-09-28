import akBaseFile = require("./../AkBase");
import mFile = require("./AkBaseModel");
import cFile = require("./AkBaseController");

export class AkBaseRenderer extends akBaseFile.AkBase
{
    public C: cFile.AkBaseController;
    public initR(param?: string) {
    };
    public $JObj: JQuery;
}