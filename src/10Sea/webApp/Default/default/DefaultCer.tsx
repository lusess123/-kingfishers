import pageCerFile = require("./../../BasePageCer");
import mFile = require("./DefaultMer");
import rFile = require("./DefaultRer");
import utilFile = require("./../../../../01core/Util");

export class DefaultCer extends pageCerFile.BasePageCer {
    public getM(): mFile.DefaultMer {
        return utilFile.Core.Util.Cast<mFile.DefaultMer>(this.M);
    }
    public getR(): rFile.DefaultRer {
        return utilFile.Core.Util.Cast<rFile.DefaultRer>(this.R);
    }


    public AppCer = null;
    public LayOutName = "";
    public init() {
        var _this = this;
        this.getM().getModuleXmlPageData(function (res) {
            if (_this.getR() && _this.getR().loadModuleXmlMain)
                _this.getR().loadModuleXmlMain(res, _this.getM().PageStyle);
            //_this.AppCer.Menu.gotoMenuLoction("$$" + _this.M.Xml);
        });
    };


    public setModel(p1, p2, p3) {

        this.getM().Xml = p1;
        //alert(p2);
        if (!p2 || p2 == "") {
            this.getM().PageStyle = "List";
        }
        else {
            this.getM().PageStyle = p2;
        }
        this.getM().Param = p3;
    };

    public loadMenu() {
        // var _pageStyle = "";
        // alert();
        this.getM().Xml = this.getM().Xml.replace(".xml", "");
        if (this.getM().PageStyle == "List") {
            $.AKjs.AppGet().Menu.gotoMenuLoction("$$" + this.getM().Xml);
        }
        else {
            $.AKjs.AppGet().Menu.gotoMenuLoction("$$" + this.getM().Xml + "$" + this.getM().PageStyle);
        }
    };
    public clearPage() {
        var _app = $.AKjs.AppGet();
        _app.hideNavi();

        _app.R.togglePageNavi();
        _app.clearWindow();
    };


}