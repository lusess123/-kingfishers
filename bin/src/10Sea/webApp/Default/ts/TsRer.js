var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../core/mcrv/AkBaseRenderer", "./../../../../01core/Util", "./../../../Reus"], function (require, exports, baseRerFile, utilFile, reusFile) {
    "use strict";
    var TsRer = (function (_super) {
        __extends(TsRer, _super);
        function TsRer() {
            _super.apply(this, arguments);
        }
        TsRer.prototype.getCer = function () {
            return utilFile.Core.Util.Cast(this.C);
        };
        TsRer.prototype.initR = function () {
            //  alert("tsRer");
            var _$dom = this.$JObj;
            var _params = {
                name: this.getCer().getM().PageName,
                p1: this.getCer().getM().P1,
                p2: this.getCer().getM().P2,
                p3: this.getCer().getM().P3
            };
            if (this.getCer().getM().IsWin) {
                var _$win = this.$Win = $('<div  class="row">' +
                    '<div  class="col-lg-12  clearp ACT-APP-MAIN">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i  class="   icon-refresh  icon-spin icon-4x text-center"></i></div>' +
                    '</div>');
                var _$dom = _$win.find(".ACT-APP-MAIN");
                this.$JObj = _$dom;
                var _this = this;
                //  res.
                _$dom["AtawWindow"]({
                    Title: "",
                    Width: "100%",
                    Fixed: false,
                    WindowOpenFun: function (a) {
                        reusFile.Reus.maker(_$dom, _params.name, _params.p1, _params.p2, _params.p3);
                    }
                });
                var _Win = _$dom.AtawControl();
                _Win.open();
            }
            else {
                reusFile.Reus.maker(_$dom, _params.name, _params.p1, _params.p2, _params.p3);
            }
            // var reus: seaFile.Reus = new seaFile.Reus();
        };
        ;
        TsRer.prototype.dispose = function () {
            if (this.$JObj) {
                var _obj = this.$JObj.data("ATAW_CONTROL");
                if (_obj) {
                    if (_obj["close"]) {
                        _obj["close"]();
                    }
                    _obj["dispose"]();
                }
                _obj = null;
            }
            _super.prototype.dispose.call(this);
        };
        ;
        return TsRer;
    }(baseRerFile.AkBaseRenderer));
    exports.TsRer = TsRer;
});
