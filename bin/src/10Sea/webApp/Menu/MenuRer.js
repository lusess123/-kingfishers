var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../core/mcrv/AkBaseRenderer"], function (require, exports, baseRerFile) {
    "use strict";
    var MenuRer = (function (_super) {
        __extends(MenuRer, _super);
        function MenuRer() {
            _super.apply(this, arguments);
        }
        MenuRer.prototype.loadModuleXmlMainR = function (key) {
            var _$dom = this.$JObj;
            _$dom.html("");
            var _menuObj = $.AKjs.AppGet().R.getMenu$DomR().AtawControl();
            //------------------------------------
            var _$item = _menuObj.$JObj.find(".M" + key);
            var _obj = _$item.AtawControl();
            if (_obj != null) {
                $.AKjs.App.openUrl(_obj.getItemUrl());
            }
        };
        return MenuRer;
    }(baseRerFile.AkBaseRenderer));
    exports.MenuRer = MenuRer;
});
