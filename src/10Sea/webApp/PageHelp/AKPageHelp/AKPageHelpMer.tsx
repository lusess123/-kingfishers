import baseMerFile = require("./../../core/mcrv/AkBaseModel");
export class AKPageHelpMer extends baseMerFile.AkBaseModel {
    public FID = null;

    public getModuleXmlPageData(fid, callBack) {
        var _ds = {};
        var _dt = _ds["_KEY"] = [];
        _dt.push({ "KeyValue": fid });
        $.AKjs.getJSON("/module/module", { xml: "Module/PageHelp/PAGEHELP_CENTERDetail", ds: $.toJSON(_ds), pageStyle: "Detail" }, callBack);
    }

    public getFileInfoM(option, callback) {
        $.get("/sns/PageHelp/GetFileInfo", option, function (res) {
            callback(res);
        });
    }

    public getFileCommentM(option, callback) {
        if (option)
            $.get("/sns/PageHelp/GetFileComment", option, function (res) {
                callback(res);
            });
    }

    public addCommentM(option, callback) {
        if (option)
            $.get("/sns/PageHelp/AddComment", option, function (res) {
                callback(res);
            });
    }

    public addReplyM(option, callback) {
        if (option)
            $.get("/sns/PageHelp/AddReply", option, function (res) {
                callback(res);
            });
    }

    public removeCommentM(option, callback) {
        if (option)
            $.get("/sns/PageHelp/RemoveComment", option, function (res) {
                callback(res);
            });
    }

    public removeReplyM(option, callback) {
        if (option)
            $.get("/sns/PageHelp/RemoveReply", option, function (res) {
                callback(res);
            });
    }

    public removeComment(option, callback) {
        $.get("/sns/PageHelp/RemoveComment", option, callback);
    }

    public removeReply(option, callback) {
        $.get("/sns/PageHelp/RemoveReply", option, callback);
    }

    public shareFileM(option) {
        if (option) $.AKjs.getJSON("/sns/PageHelp/ShareFile", option);
    }
}
