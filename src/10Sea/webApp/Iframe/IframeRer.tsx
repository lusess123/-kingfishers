import rer = require("./../core/mcrv/AkBaseRenderer");

export class IframeRer extends rer.AkBaseRenderer {
     public AkName = "DefaultRer";


public initR($dom) {
    // alert();

};
// this.PageObj = null;
public loadModuleXmlMain = function (res, pageStyle) {
    var _$dom = this.$JObj;
    //_$dom.hide();
    _$dom.clear(true);
    res.SysFunAfterInit = function (page) {
        var _layout = $.AKjs.AppGet().R.hasLeftNavi() ? "TTV" : "VTV";
        $.AKjs.AppGet().LayOut.layOutTransFormPage(_layout);
        if (!$.AKjs.AppGet().R.hasLeftNavi()) {
            $.AKjs.AppGet().LayOut.layOutTransFormPage("VTV");
        }
        else {
            $.AKjs.AppGet().LayOut.layOutTransFormPage("TTV");
        }
    };
    if (this.C.M.OpenFunAfterInit) {
        res.OpenFunAfterInit = this.C.M.OpenFunAfterInit;
    }
    _$dom["Ataw" + pageStyle + "Page"](res);
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