var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../core/mcrv/AkBaseModel"], function (require, exports, baseMerFile) {
    "use strict";
    var DeskMer = (function (_super) {
        __extends(DeskMer, _super);
        function DeskMer() {
            _super.apply(this, arguments);
            this.AkName = "DeskMer";
            this.UrlObj = null;
        }
        DeskMer.prototype.getModuleXmlPageData = function ($dom, callback) {
            $.AKjs.load("/Right/desk/QuickMenu", null, $dom, callback);
        };
        DeskMer.prototype.getPanelInfoM = function (callback) {
            $.AKjs.getJSON("/right/Panel/Panel", null, callback);
        };
        DeskMer.prototype.getPanelBody = function (herf, callBack) {
            $.AKjs.getJSON(herf, null, callBack, { isLoad: true });
        };
        ;
        return DeskMer;
    }(baseMerFile.AkBaseModel));
    exports.DeskMer = DeskMer;
});
