import baseMerFile = require("./../../../core/mcrv/AkBaseModel");
export class AKCommentModel extends baseMerFile.AkBaseModel {
    public AkName = "DCMer";
    public option = { FID: null, TYPE: null, ISPUBLIC: false };

    public getArticleDataM(fid, callback) {
        var _ds:any = {};
        var _dt = _ds["_KEY"] = [];
        _dt.push({ "KeyValue": fid });
        $.AKjs.getJSON("/module/module", { xml: "Module/SNS/DocumentCenter/SNS_ARTICLES", ds: $.toJSON(_ds), pageStyle: "Detail" }, callback);
    };
    public getPictureDataM(fid, callback) {
        var _ds:any = {};
        var _dt = _ds["_KEY"] = [];
        _dt.push({ "KeyValue": fid });
        $.AKjs.getJSON("/module/module", { xml: "Module/SNS/DocumentCenter/SNS_PICTURES", ds: $.toJSON(_ds), pageStyle: "Detail" }, callback);
    };
    public getDocumentDataM(fid, callback) {
        var _ds:any = {};
        var _dt = _ds["_KEY"] = [];
        _dt.push({ "KeyValue": fid });
        $.AKjs.getJSON("/module/module", { xml: "Module/SNS/DocumentCenter/SNS_DOCUMENTS", ds: $.toJSON(_ds), pageStyle: "Detail" }, callback);
    };

    public getPublicArticleDataM(fid, callback) {
        var _ds:any = {};
        var _dt = _ds["_KEY"] = [];
        _dt.push({ "KeyValue": fid });
        $.AKjs.getJSON("/module/module", { xml: "Module/SNS/DocumentCenter/Public/SNS_ARTICLES", ds: $.toJSON(_ds), pageStyle: "Detail" }, callback);
    };
    public getPublicPictureDataM(fid, callback) {
        var _ds:any = {};
        var _dt = _ds["_KEY"] = [];
        _dt.push({ "KeyValue": fid });
        $.AKjs.getJSON("/module/module", { xml: "Module/SNS/DocumentCenter/Public/SNS_PICTURES", ds: $.toJSON(_ds), pageStyle: "Detail" }, callback);
    };
    public getPublicDocumentDataM(fid, callback) {
        var _ds:any = {};
        var _dt = _ds["_KEY"] = [];
        _dt.push({ "KeyValue": fid });
        $.AKjs.getJSON("/module/module", { xml: "Module/SNS/DocumentCenter/Public/SNS_DOCUMENTS", ds: $.toJSON(_ds), pageStyle: "Detail" }, callback);
    };

    public getFileInfoM(option, callback) {
        $.get("/sns/DocumentCenter/GetFileInfo", option, function (res) {
            callback(res);
        });
    }
    public getFileCommentM(option, callback) {
        if (option)
            $.get("/sns/DocumentCenter/GetFileComment", option, function (res) {
                callback(res);
            });
    }
    public addCommentM(option, callback) {
        if (option)
            $.get("/sns/DocumentCenter/AddComment", option, function (res) {
                callback(res);
            });
    }
    public addReplyM(option, callback) {
        if (option)
            $.get("/sns/DocumentCenter/AddReply", option, function (res) {
                callback(res);
            });
    }
    public removeCommentM(option, callback) {
        if (option)
            $.get("/sns/DocumentCenter/RemoveComment", option, function (res) {
                callback(res);
            });
    }
    public removeReplyM(option, callback) {
        if (option)
            $.get("/sns/DocumentCenter/RemoveReply", option, function (res) {
                callback(res);
            });
    }
    public shareFileM(option) {
        if (option) $.AKjs.getJSON("/sns/DocumentCenter/ShareFile", option);
    }
}