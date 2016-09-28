var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/Ioc", "./BaseUploadMaker"], function (require, exports, iocFile, baseUpload) {
    "use strict";
    var ui;
    (function (ui) {
        var SingleImageUploadMaker = (function (_super) {
            __extends(SingleImageUploadMaker, _super);
            function SingleImageUploadMaker() {
                _super.apply(this, arguments);
            }
            return SingleImageUploadMaker;
        }(baseUpload.ui.BaseUpload));
        ui.SingleImageUploadMaker = SingleImageUploadMaker;
        var DefaultSingleImageUploadMaker = (function (_super) {
            __extends(DefaultSingleImageUploadMaker, _super);
            function DefaultSingleImageUploadMaker() {
                _super.apply(this, arguments);
            }
            return DefaultSingleImageUploadMaker;
        }(SingleImageUploadMaker));
        ui.DefaultSingleImageUploadMaker = DefaultSingleImageUploadMaker;
        iocFile.Core.Ioc.Current().RegisterType("SingleImageUpload", "IColMaker", DefaultSingleImageUploadMaker);
    })(ui = exports.ui || (exports.ui = {}));
});
