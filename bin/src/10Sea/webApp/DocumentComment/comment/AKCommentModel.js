var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../core/mcrv/AkBaseModel"], function (require, exports, baseMerFile) {
    "use strict";
    var AKCommentModel = (function (_super) {
        __extends(AKCommentModel, _super);
        function AKCommentModel() {
            _super.apply(this, arguments);
            this.AkName = "DCMer";
            this.option = { FID: null, TYPE: null, ISPUBLIC: false };
        }
        AKCommentModel.prototype.getArticleDataM = function (fid, callback) {
            var _ds = {};
            var _dt = _ds["_KEY"] = [];
            _dt.push({ "KeyValue": fid });
            $.AKjs.getJSON("/module/module", { xml: "Module/SNS/DocumentCenter/SNS_ARTICLES", ds: $.toJSON(_ds), pageStyle: "Detail" }, callback);
        };
        ;
        AKCommentModel.prototype.getPictureDataM = function (fid, callback) {
            var _ds = {};
            var _dt = _ds["_KEY"] = [];
            _dt.push({ "KeyValue": fid });
            $.AKjs.getJSON("/module/module", { xml: "Module/SNS/DocumentCenter/SNS_PICTURES", ds: $.toJSON(_ds), pageStyle: "Detail" }, callback);
        };
        ;
        AKCommentModel.prototype.getDocumentDataM = function (fid, callback) {
            var _ds = {};
            var _dt = _ds["_KEY"] = [];
            _dt.push({ "KeyValue": fid });
            $.AKjs.getJSON("/module/module", { xml: "Module/SNS/DocumentCenter/SNS_DOCUMENTS", ds: $.toJSON(_ds), pageStyle: "Detail" }, callback);
        };
        ;
        AKCommentModel.prototype.getPublicArticleDataM = function (fid, callback) {
            var _ds = {};
            var _dt = _ds["_KEY"] = [];
            _dt.push({ "KeyValue": fid });
            $.AKjs.getJSON("/module/module", { xml: "Module/SNS/DocumentCenter/Public/SNS_ARTICLES", ds: $.toJSON(_ds), pageStyle: "Detail" }, callback);
        };
        ;
        AKCommentModel.prototype.getPublicPictureDataM = function (fid, callback) {
            var _ds = {};
            var _dt = _ds["_KEY"] = [];
            _dt.push({ "KeyValue": fid });
            $.AKjs.getJSON("/module/module", { xml: "Module/SNS/DocumentCenter/Public/SNS_PICTURES", ds: $.toJSON(_ds), pageStyle: "Detail" }, callback);
        };
        ;
        AKCommentModel.prototype.getPublicDocumentDataM = function (fid, callback) {
            var _ds = {};
            var _dt = _ds["_KEY"] = [];
            _dt.push({ "KeyValue": fid });
            $.AKjs.getJSON("/module/module", { xml: "Module/SNS/DocumentCenter/Public/SNS_DOCUMENTS", ds: $.toJSON(_ds), pageStyle: "Detail" }, callback);
        };
        ;
        AKCommentModel.prototype.getFileInfoM = function (option, callback) {
            $.get("/sns/DocumentCenter/GetFileInfo", option, function (res) {
                callback(res);
            });
        };
        AKCommentModel.prototype.getFileCommentM = function (option, callback) {
            if (option)
                $.get("/sns/DocumentCenter/GetFileComment", option, function (res) {
                    callback(res);
                });
        };
        AKCommentModel.prototype.addCommentM = function (option, callback) {
            if (option)
                $.get("/sns/DocumentCenter/AddComment", option, function (res) {
                    callback(res);
                });
        };
        AKCommentModel.prototype.addReplyM = function (option, callback) {
            if (option)
                $.get("/sns/DocumentCenter/AddReply", option, function (res) {
                    callback(res);
                });
        };
        AKCommentModel.prototype.removeCommentM = function (option, callback) {
            if (option)
                $.get("/sns/DocumentCenter/RemoveComment", option, function (res) {
                    callback(res);
                });
        };
        AKCommentModel.prototype.removeReplyM = function (option, callback) {
            if (option)
                $.get("/sns/DocumentCenter/RemoveReply", option, function (res) {
                    callback(res);
                });
        };
        AKCommentModel.prototype.shareFileM = function (option) {
            if (option)
                $.AKjs.getJSON("/sns/DocumentCenter/ShareFile", option);
        };
        return AKCommentModel;
    }(baseMerFile.AkBaseModel));
    exports.AKCommentModel = AKCommentModel;
});
