var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../core/mcrv/AkMRCCreator", "./AppModel", "./AppMainController", "./AppRenderer"], function (require, exports, mrcFile, mFile, cFile, rFile) {
    "use strict";
    var AppMRCCreator = (function (_super) {
        __extends(AppMRCCreator, _super);
        function AppMRCCreator() {
            var c = new cFile.AppMainController();
            var m = new mFile.AppModel();
            ;
            var r = new rFile.AppRenderer();
            _super.call(this, c, m, r);
            $.AKjs.App = c;
            $.AKjs.AppGet = function (options) {
                return $.AKjs.App;
            };
        }
        AppMRCCreator.prototype.init = function ($dom) {
            // alert(4);
            this.R.$JObj = $dom;
            this.C.initC();
        };
        ;
        return AppMRCCreator;
    }(mrcFile.AkMRCCreator));
    exports.AppMRCCreator = AppMRCCreator;
});
