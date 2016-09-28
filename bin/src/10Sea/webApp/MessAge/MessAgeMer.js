var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../core/mcrv/AkBaseModel"], function (require, exports, baseMerFile) {
    "use strict";
    var MessAgeMer = (function (_super) {
        __extends(MessAgeMer, _super);
        function MessAgeMer() {
            _super.apply(this, arguments);
            this.MessageType = null;
        }
        MessAgeMer.prototype.getMessageType = function (callBack) {
            $.AKjs.getJSON("/core/Desk/GetMessageType", null, callBack);
        };
        return MessAgeMer;
    }(baseMerFile.AkBaseModel));
    exports.MessAgeMer = MessAgeMer;
});
