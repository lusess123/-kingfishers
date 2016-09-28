var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../core/mcrv/AkBaseRenderer", "./../../../../../01core/Util"], function (require, exports, baseRerFile, utilFile) {
    "use strict";
    var WinDefaultRer = (function (_super) {
        __extends(WinDefaultRer, _super);
        function WinDefaultRer() {
            _super.apply(this, arguments);
            this.AkName = "WinDefaultRer";
            this.$Win = null;
            this.PageObj = null;
            this.PageStyleSign = null;
            this.WinObj = null;
        }
        WinDefaultRer.prototype.getCer = function () {
            return utilFile.Core.Util.Cast(this.C);
        };
        WinDefaultRer.prototype.loadModuleXmlMain = function (res, pageStyle) {
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
                        }
                        else {
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
            this.WinObj = _$dom.AtawControl();
            this.WinObj.open();
            // alert(456);
            // var mainObj = _this.$ActMain.AtawControl();
        };
        WinDefaultRer.prototype.dispose = function () {
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
            _super.prototype.dispose.call(this);
        };
        ;
        return WinDefaultRer;
    }(baseRerFile.AkBaseRenderer));
    exports.WinDefaultRer = WinDefaultRer;
});
