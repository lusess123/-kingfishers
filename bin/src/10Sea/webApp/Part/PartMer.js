var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../core/mcrv/AkBaseModel"], function (require, exports, baseMerFile) {
    "use strict";
    var PartMer = (function (_super) {
        __extends(PartMer, _super);
        function PartMer() {
            _super.apply(this, arguments);
            this.Url = "";
        }
        PartMer.prototype.getPageData = function (callBack) {
            $.AKjs.getJSON(this.Url, {}, callBack);
        };
        return PartMer;
    }(baseMerFile.AkBaseModel));
    exports.PartMer = PartMer;
});
