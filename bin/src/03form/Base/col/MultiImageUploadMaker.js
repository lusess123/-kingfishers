var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/Ioc", "./BaseUploadMaker"], function (require, exports, iocFile, baseUpload) {
    "use strict";
    var ui;
    (function (ui) {
        var MultiImageUploadMaker = (function (_super) {
            __extends(MultiImageUploadMaker, _super);
            function MultiImageUploadMaker() {
                _super.apply(this, arguments);
            }
            return MultiImageUploadMaker;
        }(baseUpload.ui.BaseUpload));
        ui.MultiImageUploadMaker = MultiImageUploadMaker;
        var DefaultMultiImageUploadMaker = (function (_super) {
            __extends(DefaultMultiImageUploadMaker, _super);
            function DefaultMultiImageUploadMaker() {
                _super.apply(this, arguments);
            }
            return DefaultMultiImageUploadMaker;
        }(MultiImageUploadMaker));
        ui.DefaultMultiImageUploadMaker = DefaultMultiImageUploadMaker;
        iocFile.Core.Ioc.Current().RegisterType("MultiImageUpload", "IColMaker", DefaultMultiImageUploadMaker);
    })(ui = exports.ui || (exports.ui = {}));
});
