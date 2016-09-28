var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./ActivityCer", "./ActivityMer", "./ActivityRer", "./../BasePageMRC", "./../../../01core/Ioc", "./../../core/IPage"], function (require, exports, cFile, mFile, rFile, mrcFile, iocFile, iPageFile) {
    "use strict";
    var ActivityMRC = (function (_super) {
        __extends(ActivityMRC, _super);
        function ActivityMRC() {
            var cer = new cFile.Activitycer();
            var mer = new mFile.ActivityMer();
            var rer = new rFile.ActivityRer();
            _super.call(this, cer, mer, rer);
        }
        return ActivityMRC;
    }(mrcFile.BasePageMRC));
    exports.ActivityMRC = ActivityMRC;
    iocFile.Core.Ioc.Current().RegisterType("ACTIVITY", iPageFile.PageFace, ActivityMRC);
});
