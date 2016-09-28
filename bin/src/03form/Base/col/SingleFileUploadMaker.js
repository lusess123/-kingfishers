var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/Ioc", "./BaseUploadMaker"], function (require, exports, iocFile, baseUpload) {
    "use strict";
    var ui;
    (function (ui) {
        var SingleFileUploadMaker = (function (_super) {
            __extends(SingleFileUploadMaker, _super);
            function SingleFileUploadMaker() {
                _super.apply(this, arguments);
            }
            return SingleFileUploadMaker;
        }(baseUpload.ui.BaseUpload));
        ui.SingleFileUploadMaker = SingleFileUploadMaker;
        var DefaultSingleFileUploadMaker = (function (_super) {
            __extends(DefaultSingleFileUploadMaker, _super);
            function DefaultSingleFileUploadMaker() {
                _super.apply(this, arguments);
            }
            return DefaultSingleFileUploadMaker;
        }(SingleFileUploadMaker));
        ui.DefaultSingleFileUploadMaker = DefaultSingleFileUploadMaker;
        iocFile.Core.Ioc.Current().RegisterType("SingleFileUpload", "IColMaker", DefaultSingleFileUploadMaker);
    })(ui = exports.ui || (exports.ui = {}));
});
