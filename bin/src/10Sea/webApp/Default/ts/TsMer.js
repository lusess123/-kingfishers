var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../core/mcrv/AkBaseModel"], function (require, exports, baseMerFile) {
    "use strict";
    var TsMer = (function (_super) {
        __extends(TsMer, _super);
        function TsMer() {
            _super.apply(this, arguments);
            this.PageName = "";
            this.P1 = "";
            this.P2 = "";
            this.P3 = "";
            this.IsWin = false;
        }
        return TsMer;
    }(baseMerFile.AkBaseModel));
    exports.TsMer = TsMer;
});
