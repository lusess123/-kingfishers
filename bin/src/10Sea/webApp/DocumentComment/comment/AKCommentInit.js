var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./AKCommentMRCCreator"], function (require, exports, dcmrcFile) {
    "use strict";
    var AKCommentInit = (function (_super) {
        __extends(AKCommentInit, _super);
        function AKCommentInit() {
            _super.apply(this, arguments);
        }
        //public getMRC(): dcmrcFile.AKCommentMRCCreator{
        //    return utilFile.Core.Util.Cast<dcmrcFile.AKCommentMRCCreator>(this.C);
        //}
        AKCommentInit.prototype.load = function ($dom, option) {
            //var creator: dcmrcFile.AKCommentMRCCreator = new dcmrcFile.AKCommentMRCCreator<>(option);
            var creator = new dcmrcFile.AKCommentMRCCreator();
            //this.getMRC().init($dom);
            creator.init($dom);
        };
        return AKCommentInit;
    }(dcmrcFile.AKCommentMRCCreator));
    exports.AKCommentInit = AKCommentInit;
});
