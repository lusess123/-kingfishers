var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/Ioc", "./BaseUploadMaker"], function (require, exports, iocFile, baseUpload) {
    "use strict";
    var ui;
    (function (ui) {
        var MultiFileUploadMaker = (function (_super) {
            __extends(MultiFileUploadMaker, _super);
            function MultiFileUploadMaker() {
                _super.apply(this, arguments);
            }
            return MultiFileUploadMaker;
        }(baseUpload.ui.BaseUpload));
        ui.MultiFileUploadMaker = MultiFileUploadMaker;
        var DefaultMultiFileUploadMaker = (function (_super) {
            __extends(DefaultMultiFileUploadMaker, _super);
            function DefaultMultiFileUploadMaker() {
                _super.apply(this, arguments);
            }
            return DefaultMultiFileUploadMaker;
        }(MultiFileUploadMaker));
        ui.DefaultMultiFileUploadMaker = DefaultMultiFileUploadMaker;
        iocFile.Core.Ioc.Current().RegisterType("MultiFileUpload", "IColMaker", DefaultMultiFileUploadMaker);
    })(ui = exports.ui || (exports.ui = {}));
});
