import baseRerFile = require("./../../core/mcrv/AkBaseRenderer");
import urlFile = require("./../../../01core/Url");
import cFile = require("./MenuCer");
import utilFile = require("./../../../01core/Util");

import seaFile = require("./../../sea");

export class MenuRer extends baseRerFile.AkBaseRenderer {



    public loadModuleXmlMainR(key: string) {
        var _$dom = this.$JObj;
        _$dom.html("");

        var _menuObj = $.AKjs.AppGet().R.getMenu$DomR().AtawControl();
        //------------------------------------
        var _$item = _menuObj.$JObj.find(".M" + key);
        var _obj = _$item.AtawControl();
        if (_obj != null) {
            $.AKjs.App.openUrl(_obj.getItemUrl());
        }


    }
}