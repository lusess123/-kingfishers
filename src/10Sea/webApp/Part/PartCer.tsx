import pageCerFile = require("./../BasePageCer");
import mFile = require("./PartMer");
import rFile = require("./PartRer");
import utilFile = require("./../../../01core/Util");

export class PartCer extends pageCerFile.BasePageCer {
    public AppCer = null;
    public LayOutName: string = "";
    
    public Param1 = null;
    public Param2 = null

    public getR(): rFile.PartRer{
        return utilFile.Core.Util.Cast<rFile.PartRer>(this.R);

    }

    public getM():mFile.PartMer {
        return utilFile.Core.Util.Cast<mFile.PartMer>(this.M);
    }

    public init() {
        this.InitPageObj();
        this.getR().initR();
    }

    public InitPageObj() {
        var _app = $.AKjs.AppGet();
        //_app.Url = this.M.Url;
        _app.Param1 = this.Param1;
        _app.Param2 = this.Param2;
    }

    public setModel(p1, p2, p3) {
        this.getM().Url = p1;
        this.Param1 = p2;
        this.Param2 = p3;
    }

    public  clearPage() {
    var _app = $.AKjs.AppGet();
    if (_app.DisposePage) {
        //因为无法预料，必须要加异常判断....
        try {
            _app.DisposePage(this);
        }
        catch (tt) {
            if (console && console.log)
                console.log(tt);
            $.AKjs.App.notifyMesg("页面销毁有出现异常:" + tt);
            // throw tt;
        }
        finally {
            _app.DisposePage = null;
        }
    }
    _app.Param1 = null;
    _app.Param2 = null;
    _app.AutoMenu = true;
    //alert("清除页面");
    _app.hideNavi();
    _app.clearWindow();
};
}