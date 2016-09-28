var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./UserHomeCer", "./UserHomeMer", "./UserHomeRer", "./../BasePageMRC", "./../../../01core/Ioc", "./../../core/IPage"], function (require, exports, cFile, mFile, rFile, mrcFile, iocFile, iPageFile) {
    "use strict";
    var UserHomeMRC = (function (_super) {
        __extends(UserHomeMRC, _super);
        function UserHomeMRC() {
            var cer = new cFile.UserHomeCer();
            var mer = new mFile.UserHomeMer();
            var rer = new rFile.UserHomeRer();
            _super.call(this, cer, mer, rer);
        }
        return UserHomeMRC;
    }(mrcFile.BasePageMRC));
    exports.UserHomeMRC = UserHomeMRC;
    iocFile.Core.Ioc.Current().RegisterType("USERHOME", iPageFile.PageFace, UserHomeMRC);
});
