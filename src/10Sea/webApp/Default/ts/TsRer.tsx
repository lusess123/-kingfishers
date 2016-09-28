import baseRerFile = require("./../../../core/mcrv/AkBaseRenderer");
import urlFile = require("./../../../../01core/Url");
import cFile = require("./TsCer");
import utilFile = require("./../../../../01core/Util");

import seaFile = require("./../../../sea");
import reusFile = require("./../../../Reus");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export class TsRer extends baseRerFile.AkBaseRenderer {
     public $Win : JQuery;
    public getCer(): cFile.TsCer {
        return utilFile.Core.Util.Cast<cFile.TsCer>(this.C);
    }
    public initR() {
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
        else
        {
            reusFile.Reus.maker(_$dom, _params.name, _params.p1, _params.p2, _params.p3);
        }

       // var reus: seaFile.Reus = new seaFile.Reus();
        

    };

    public dispose() {
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

        super.dispose();
    };
}