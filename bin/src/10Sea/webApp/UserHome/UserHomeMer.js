var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../core/mcrv/AkBaseModel"], function (require, exports, baseMerFile) {
    "use strict";
    var UserHomeMer = (function (_super) {
        __extends(UserHomeMer, _super);
        function UserHomeMer() {
            _super.apply(this, arguments);
        }
        return UserHomeMer;
    }(baseMerFile.AkBaseModel));
    exports.UserHomeMer = UserHomeMer;
});
