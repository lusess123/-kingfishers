var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../AkBase"], function (require, exports, akBaseFile) {
    "use strict";
    var AkBaseController = (function (_super) {
        __extends(AkBaseController, _super);
        function AkBaseController() {
            _super.apply(this, arguments);
        }
        return AkBaseController;
    }(akBaseFile.AkBase));
    exports.AkBaseController = AkBaseController;
});
