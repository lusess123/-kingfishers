import mrcFile = require("./../../core/mcrv/AkMRCCreator");
import mFile = require("./AppModel");
import cFile = require("./AppMainController");
import rFile = require("./AppRenderer");

export class AppMRCCreator extends mrcFile.AkMRCCreator<cFile.AppMainController ,mFile.AppModel , rFile.AppRenderer >
{
   

    public init($dom: JQuery) {
       // alert(4);
         this.R.$JObj = $dom;
         this.C.initC();
    };



    public constructor( )
    {
        var c: cFile.AppMainController = new cFile.AppMainController () ;
        var m: mFile.AppModel = new mFile.AppModel();;
        var r: rFile.AppRenderer = new rFile.AppRenderer();
        super(c,m,r);
        $.AKjs.App = c;
        $.AKjs.AppGet = function (options) {
            return $.AKjs.App;
        }
    }

}