import baseRerFile = require("./../../../../core/mcrv/AkBaseRenderer");
import urlFile = require("./../../../../../01core/Url");
import cFile = require("./WinDefaultCer");
import utilFile = require("./../../../../../01core/Util");

export class WinDefaultRer extends baseRerFile.AkBaseRenderer {

    public getCer(): cFile.WinDefaultCer {
        return utilFile.Core.Util.Cast<cFile.WinDefaultCer>(this.C);
    }

    public AkName = "WinDefaultRer";
    public $Win = null;
    public PageObj = null;
    public PageStyleSign = null;
    public WinObj = null;

    public loadModuleXmlMain(res, pageStyle)
    {
        var _$win = this.$Win = $('<div  class="row">' +

            '<div  class="col-lg-11  clearp ACT-APP-MAIN">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i  class="   icon-refresh  icon-spin icon-4x text-center"></i></div>' +
            '<div  class="col-lg-1 akcs-app-left ACT-APP-LEFT"></div>' +
            '</div>');
        var _$dom = _$win;
        this.$JObj = null;
        var _this = this;
        //  res.
        _$dom["AtawWindow"]({
            Title: res.Title,
            Width: "100%",
            Fixed: false,
            WindowOpenFun: function (a) {

                // _$dom.clear(true);
                res.SysFunAfterInit = function (page) {
                    if (_$dom.find(".ACT-APP-LEFT").html() == "") {
                        //alert(1);
                        _$dom.find(".ACT-APP-LEFT").addClass("hidden");
                        _$dom.find(".ACT-APP-MAIN").SwitchClass("col-lg-12", "col-lg-11", true);
                        _$dom.parent().parent().parent().css("width", "100%");
                        //_$dom.parent().parent().parent().css("min-width", "920px");
                    }
                    else {
                        //alert(_$dom.find(".ACT-APP-LEFT").html());
                    }
                };
                if (_this.getCer().getM().OpenFunAfterInit) {
                    res.OpenFunAfterInit = _this.getCer().getM().OpenFunAfterInit;
                }
                var _$dv = _$dom.find(".ACT-APP-MAIN");
                res.NaviContentSelector = _$dom.find(".ACT-APP-LEFT");
                // alert(_$dv.eq(0).OuterHTML);
                _$dv.html("");
                if (_this.PageStyleSign) {
                    pageStyle = _this.PageStyleSign;
                }
                _$dv["Ataw" + pageStyle + "Page"](res);
                _this.PageObj = _$dv.AtawControl();
                $["WObj"] = _this.PageObj;
                res = null;


            }
        });
        //this.$JObj;
        //_$dom.hide();

        this.WinObj= _$dom.AtawControl();
        this.WinObj.open();


        // alert(456);

        // var mainObj = _this.$ActMain.AtawControl();
        
    }

    public dispose() {
        if ($["WObj"]) {
            $["WObj"] = null;
        }
        if (this.PageObj) {

                if (this.PageObj["close"]) {
                    this.PageObj["close"]();
                }
                this.PageObj["dispose"]();
       
        }
        if (this.WinObj) {
            if (this.WinObj["close"]) {
                this.WinObj["close"]();
            }
            this.WinObj["dispose"]();
        }
       
        super.dispose();

    };

}