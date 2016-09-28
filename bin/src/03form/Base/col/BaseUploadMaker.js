var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./BaseColMaker"], function (require, exports, baseColMaker) {
    "use strict";
    var ui;
    (function (ui) {
        var BaseUpload = (function (_super) {
            __extends(BaseUpload, _super);
            function BaseUpload() {
                _super.apply(this, arguments);
            }
            BaseUpload.prototype.maker = function () {
                var temp = this.BaseColVm;
                this.ColVm = temp;
                var tv = this.ColVm;
                var c = this.ColumnConfig;
                var _pageView = this.PageView;
                if (tv != null) {
                    var _temp = c.Options;
                    var _uPtions = _temp;
                    tv["UploadName"] = _uPtions.UploadName;
                    tv["StorageName"] = _uPtions.StorageName;
                    tv["ImageSizeWidth"] = _uPtions.ImageSizeWidth;
                    tv["ImageSizeHeight"] = _uPtions.ImageSizeHeight;
                    tv["IsCut"] = _uPtions.IsCut ? _uPtions.IsCut : false;
                    tv["HasDocumentCenter"] = _uPtions.HasDocumentCenter ? _uPtions.HasDocumentCenter : false;
                    tv["MinUploadCount"] = _uPtions.MinUploadCount ? _uPtions.MinUploadCount : null;
                }
                _super.prototype.maker.call(this);
            };
            return BaseUpload;
        }(baseColMaker.ui.BaseColMaker));
        ui.BaseUpload = BaseUpload;
    })(ui = exports.ui || (exports.ui = {}));
});
