import baseRerFile = require("./../../../core/mcrv/AkBaseRenderer");
import urlFile = require("./../../../../01core/Url");
import cFile = require("./DefaultCer");
import utilFile = require("./../../../../01core/Util");

export class DefaultRer extends baseRerFile.AkBaseRenderer {

    public getCer(): cFile.DefaultCer
    {
        return utilFile.Core.Util.Cast<cFile.DefaultCer>(this.C);
    }

    public loadModuleXmlMain(res, pageStyle) {
        var _$dom = this.$JObj;
        //_$dom.hide();
        _$dom.clear(true);
        var _d0 = new Date();
        res.SysFunAfterInit = function (page) {

            var _layput = page.Options.PageLayout;
            ////   alert(_layput);
            var _app = $.AKjs.AppGet();
            if (_layput != null) {
                _app.LayOut.layOutTransFormPage(_layput);
            }
            else {
                _app.LayOut.layOutTransFormPage("TTV");
            }

            _app.R.togglePageNavi();

        };
        if (this.getCer().getM().OpenFunAfterInit) {
            res.OpenFunAfterInit = this.getCer().getM().OpenFunAfterInit;
        }

        _$dom["Ataw" + pageStyle + "Page"](res);
        var _d1 = new Date();
        console.info(" 老页面渲染时间 ： " + urlFile.Core.logTime(_d1 ,_d0));
        // $.PObj = _$dom.AtawControl();
        res = null;
        // alert(456);

        // var mainObj = _this.$ActMain.AtawControl();
    }
    public dispose() {
        if (this.$JObj) {
            var _obj = this.$JObj.data("ATAW_CONTROL");
            if (_obj) {
                _obj["dispose"]();
            }
            _obj = null;
        }
        super.dispose();

    };
}