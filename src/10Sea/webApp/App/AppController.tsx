
import akcerFile = require("./../../core/mcrv/AkBaseController");
import akrerFile = require("./AppRenderer");
import akmFile = require("./AppModel");
import  utilFile = require("./../../../01core/Util");
import layOutFile = require("./cer/AppLayOut");
import menuFile = require("./cer/AppMenu");
import urlFile = require("./cer/AppUrl");
export class AppController  extends akcerFile.AkBaseController
{
    //-------------------------布局-------
    public LayOut : layOutFile.AppLayOut;
    //--------------------------url--------------
    public Url : urlFile.AppUrl;
    public Menu: menuFile.AppMenu;

    public constructor()
    {
        super();
        this.LayOut = new layOutFile.AppLayOut(this);
        this.Url = new urlFile.AppUrl(this);
        this.Menu = new menuFile.AppMenu(this);
    }

    public getR(): akrerFile.AppRenderer
    {
        return utilFile.Core.Util.Cast<akrerFile.AppRenderer>(this.R);
    }

    public getM(): akmFile.AppModel
    {
        return utilFile.Core.Util.Cast<akmFile.AppModel>(this.M);
    }
    
    //----------------------入口
    public initC() {
       // alert(3);
        this.Url.IsAppFist = true;
        this.R.initR();
        var _this = this;
        if (this.getR().HasMenu()) {
            this.Menu .loadMenu(function () {
                _this.getM().FirstUrl = true;
                _this.Url.getUrl();
                _this.Url.urlOpen();
            });
        }
        else {
            _this.Url.getUrl();
            // _this.M.IsRouteEvent = true;
            _this.getM().FirstUrl = true;
            _this.Url.urlOpen();

           
        }


    };

    public bindPageEvent ($dom:JQuery) {
        this.getR().bindDomEventR($dom);
    };

    public openMenu (menuKey) {

    };

    public PageHelp (_fun, _LocationUrl) {
        this.getM().PageHelp(_fun, _LocationUrl);
    };
    //--------------------------核心方法--------------------
    public notifyMesgC (msg:string) {
        this.notifyMesg(msg);
    }
     public notifyPage  () {
    };
     public notifyMesg (msg) {
        //debugger;
        if ($.AKjs.IsIframe) {
            $.AKjs.Iframe(null, null, null, msg);
        }
        else {
            this.getR().notifyMesgR(msg);
        }
    }
    public IsIframeCheck: boolean = false;
    public exeCommand () {
        var _modExe = this[this.getM().ModeName];
        if (_modExe) {
            if (_modExe == "iframe") {
                this.IsIframeCheck = false;
            }
            else {
                this.IsIframeCheck = true;
            }
            this[this.getM().ModeName]();
        }
        else {
            this.exe();
           
        }
    };

    public exe() {
    }

    public avtiveHeader (arrange) {
        this.getR().avtiveHeader(arrange);
    };

}