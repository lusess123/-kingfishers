var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../core/mcrv/AkBaseModel"], function (require, exports, baseMerFile) {
    "use strict";
    var AKPageHelpMer = (function (_super) {
        __extends(AKPageHelpMer, _super);
        function AKPageHelpMer() {
            _super.apply(this, arguments);
            this.FID = null;
        }
        AKPageHelpMer.prototype.getModuleXmlPageData = function (fid, callBack) {
            var _ds = {};
            var _dt = _ds["_KEY"] = [];
            _dt.push({ "KeyValue": fid });
            $.AKjs.getJSON("/module/module", { xml: "Module/PageHelp/PAGEHELP_CENTERDetail", ds: $.toJSON(_ds), pageStyle: "Detail" }, callBack);
        };
        AKPageHelpMer.prototype.getFileInfoM = function (option, callback) {
            $.get("/sns/PageHelp/GetFileInfo", option, function (res) {
                callback(res);
            });
        };
        AKPageHelpMer.prototype.getFileCommentM = function (option, callback) {
            if (option)
                $.get("/sns/PageHelp/GetFileComment", option, function (res) {
                    callback(res);
                });
        };
        AKPageHelpMer.prototype.addCommentM = function (option, callback) {
            if (option)
                $.get("/sns/PageHelp/AddComment", option, function (res) {
                    callback(res);
                });
        };
        AKPageHelpMer.prototype.addReplyM = function (option, callback) {
            if (option)
                $.get("/sns/PageHelp/AddReply", option, function (res) {
                    callback(res);
                });
        };
        AKPageHelpMer.prototype.removeCommentM = function (option, callback) {
            if (option)
                $.get("/sns/PageHelp/RemoveComment", option, function (res) {
                    callback(res);
                });
        };
        AKPageHelpMer.prototype.removeReplyM = function (option, callback) {
            if (option)
                $.get("/sns/PageHelp/RemoveReply", option, function (res) {
                    callback(res);
                });
        };
        AKPageHelpMer.prototype.removeComment = function (option, callback) {
            $.get("/sns/PageHelp/RemoveComment", option, callback);
        };
        AKPageHelpMer.prototype.removeReply = function (option, callback) {
            $.get("/sns/PageHelp/RemoveReply", option, callback);
        };
        AKPageHelpMer.prototype.shareFileM = function (option) {
            if (option)
                $.AKjs.getJSON("/sns/PageHelp/ShareFile", option);
        };
        return AKPageHelpMer;
    }(baseMerFile.AkBaseModel));
    exports.AKPageHelpMer = AKPageHelpMer;
});
