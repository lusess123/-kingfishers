var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../core/mcrv/AkBaseRenderer", "./../../../01core/Util"], function (require, exports, baseRerFile, utilFile) {
    "use strict";
    var AKPageHelpRer = (function (_super) {
        __extends(AKPageHelpRer, _super);
        function AKPageHelpRer() {
            _super.apply(this, arguments);
            this.Option = null;
            this.ADMIN = false;
            this.$dvContain = null;
            this.EditorObj = null;
        }
        AKPageHelpRer.prototype.getM = function () {
            return utilFile.Core.Util.Cast(this.C.M);
        };
        AKPageHelpRer.prototype.getC = function () {
            return utilFile.Core.Util.Cast(this.C);
        };
        AKPageHelpRer.prototype.initR = function () {
            this.$JObj.append(this.$dvContain);
            this.initComments();
        };
        AKPageHelpRer.prototype.initialize = function (config) {
            this.ADMIN = config.ADMIN;
            this.Option = { FID: config.FID };
            this.$dvContain = $('<div class="panel panel-default">'
                + '<div class="panel-body">'
                + '<div class="row">'
                + '<div class="col-md-4"><div class="ACT-FILE"></div></div>'
                + '<div class="col-md-6"><div class="ACT-COMMENTS"></div></div>'
                + '</div>'
                + '<div class="panel-footer"/></div>');
            _super.prototype.dispose.call(this);
        };
        AKPageHelpRer.prototype.getDataR = function (res) {
            var _this = this;
            res.IsInner = true;
            res.IsPart = true;
            this.$dvContain.find(".ACT-FILE").AtawDetailPage(res);
        };
        AKPageHelpRer.prototype.createCommentContainR = function (res) {
            var _this = this;
            var $commentUl = $('<ul class="media-list"/>');
            var $commentLi, $commentBody;
            for (var i = 0; i < res.length; i++) {
                if (res[i].TYPE === "0") {
                    $commentLi = $('<li class="media"/>');
                    $commentBody = $('<div class="media-body"/>');
                    var $commentContentDv = $('<div/>');
                    var bodydata = res[i].BODY;
                    var re = /^[0-9,]+$/;
                    if (re.test(bodydata)) {
                        bodydata = bodydata.hexToString();
                    }
                    $commentContentDv.append('<div><small><a href="javascript:void(0)">' + res[i].FROMUSERNAME + "</a>&nbsp;:" + res[i].BODY + '</small></div>');
                    if (this.ADMIN == true) {
                        $commentContentDv.append('<small><span class="text-muted">' + res[i].CREATE_TIME + '</span><a class = "ACT-PH-REPLY" href="javascript:void(0)">&nbsp;回复</a><a class = "ACT-PHCOMMENT-DELETE" href="javascript:void(0)" >&nbsp;删除</a></small>');
                    }
                    else {
                        $commentContentDv.append('<small><span class="text-muted">' + res[i].CREATE_TIME + '</span><a class = "ACT-PH-REPLY" href="javascript:void(0)">&nbsp;回复</a></small>');
                    }
                    $commentBody.append($commentContentDv);
                    var $deleteComment = $commentBody.find(".ACT-PHCOMMENT-DELETE");
                    (function (commentid) {
                        $deleteComment.click(function () {
                            this.getC().removeCommentC({ "fileID": _this.Option.FID, "commentID": commentid });
                        });
                    })(res[i].FID);
                    this.createReplyContain(res, res[i].FID, $commentBody);
                    $commentLi.append('<a class="pull-left" href="javascript:void(0)"><img class="media-object" src="' + res[i].FROMUSERAVATAR + '" width="30" heigth="30"/></a>');
                    var $replyButton = $commentBody.find(".ACT-PH-REPLY");
                    (function (commentID, toUserID, toUserName) {
                        $replyButton.click(function () {
                            this.createReplyInputContain(commentID, toUserID, toUserName);
                        });
                    })(res[i].FID, res[i].FROMUSERID, res[i].FROMUSERNAME);
                    $commentLi.append($commentBody);
                    $commentUl.append($commentLi);
                }
            }
            this.$dvContain.find(".ACT-COMMENT").html("").append($commentUl);
        };
        AKPageHelpRer.prototype.createReplyContain = function (res, commentId, $commentBody) {
            var _this = this;
            var $replyDv, $replyBody;
            for (var i = 0; i < res.length; i++) {
                if (res[i].TYPE === "1" && commentId === res[i].COMMENTID) {
                    $replyDv = $('<div class="media"/>');
                    $replyDv.append('<a class="pull-left" href="javascript:void(0)"><img class="media-object" src="' + res[i].FROMUSERAVATAR + '" width="30" heigth="30"/></a>');
                    $replyBody = $('<div class="media-body"/>');
                    var $replyContentDv = $("<div/>");
                    var bodydata = res[i].BODY;
                    var re = /^[0-9,]+$/;
                    if (re.test(bodydata)) {
                        bodydata = bodydata.hexToString();
                    }
                    var $replyContent = $('<div><small><a href="javascript:void(0)">' + res[i].FROMUSERNAME + '</a>&nbsp;回复&nbsp;<a href="javascript:void(0)">' + res[i].TOUSERNAME + '</a>&nbsp;:' + res[i].BODY + '</small></div>');
                    if (this.ADMIN == true) {
                        var $replyOperate = $('<small><span class="text-muted">' + res[i].CREATE_TIME + '</span>&nbsp;<a class = "ACT-PH-REPLY" href="javascript:void(0)">回复</a><a class = "ACT-PHREPLY-DELETE href="javascript:void(0)" >&nbsp;删除</a></small>');
                    }
                    else {
                        var $replyOperate = $('<small><span class="text-muted">' + res[i].CREATE_TIME + '</span>&nbsp;<a class = "ACT-PH-REPLY" href="javascript:void(0)">回复</a></small>');
                    }
                    $replyContentDv.append($replyContent).append($replyOperate);
                    var $deleteComment = $commentBody.find(".ACT-PHREPLY-DELETE");
                    (function (commentid) {
                        $deleteComment.click(function () {
                            this.getC().removeCommentC({ "fileID": _this.Option.FID, "commentID": commentid });
                        });
                    })(res[i].FID);
                    $replyBody.append($replyContentDv);
                    $replyDv.append($replyBody);
                    var $replyButton = $replyOperate.find(".ACT-PH-REPLY");
                    (function (commentID, toUserID, toUserName) {
                        $replyButton.click(function () {
                            this.createReplyInputContain(commentID, toUserID, toUserName);
                        });
                    })(res[i].COMMENTID, res[i].FROMUSERID, res[i].FROMUSERNAME);
                    $commentBody.append($replyDv);
                }
            }
        };
        AKPageHelpRer.prototype.createOperateContain = function () {
            var _this = this;
            var $operateDv = $("<div/>");
            var $comment = $('<a href="javascript:void(0)" class="btn btn-default btn-sm">评论</a>');
            $comment.click(function () {
                this.createCommentInputContain();
            });
            $operateDv.append($comment);
            this.$dvContain.find(".ACT-OPERATE").html("").append($operateDv);
        };
        AKPageHelpRer.prototype.createReplyInputContain = function (commentID, toUserID, toUserName) {
            var _this = this;
            var $replyDv = $("<div/>");
            var $replyInput = $("<div></div>");
            var $replySubmit = $('<div><a href="javascript:void(0)" class="btn btn-primary btn-sm">发表</a></div>');
            this.$dvContain.find(".ACT-COMMENTINPUT").html("").append($replyDv);
            $replyDv.append($replyInput).append($replySubmit);
            $replySubmit.find("a").click(function () {
                this.getC().addReplyC({ "fileID": _this.Option.FID, "commentID": commentID, "toUserID": toUserID, "body": _this.EditorObj.dataValue() });
                _this.EditorObj.$JObjText.data("editor").setData("");
            });
            $replyInput["AtawEditor"]();
            this.EditorObj = $replyInput.AtawControl();
            //            this.EditorObj.$JObjText.data("editor").setData("我也说一句");
            $replyInput.focus();
        };
        AKPageHelpRer.prototype.initComments = function () {
            var param = {};
            param.HasPager = true;
            param.ObjectId = this.Option.FID;
            param.CommentModuleXml = "module/sns/comments/pagehelp_comments";
            param.ReplyModuleXml = "module/sns/comments/pagehelp_replies";
            param.CommentTableName = "PAGEHELP_COMMENTS";
            param.ReplyTableName = "PAGEHELP_REPLY";
            param.AfterCommentFormInit = this.appendCommentCustomBtn();
            param.AfterReplyFormInit = this.appendReplyCustomBtn();
            var Creator = require("commentmrc");
            var _creator = new Creator();
            _creator.setModel(param);
            _creator.init(this.$dvContain.find(".ACT-COMMENTS"));
        };
        ;
        AKPageHelpRer.prototype.appendCommentCustomBtn = function () {
            return function () {
                if (this.ADMIN == "true") {
                    this.$dvContain.find(".ACT-COMMENTS .ACT-REPLY-BTN").after("<a class='ACT-PHCOMMENT-DELETE'>&nbsp;删除</a>");
                    this.$dvContain.find(".ACT-COMMENTS .ACT-PHCOMMENT-DELETE").off("click").on("click", function () {
                        this.getC().removeCommentC({ "commentID": $(this).parents("ACT-COMMENT-ROW").attr("comment_id") });
                    });
                }
            };
        };
        ;
        AKPageHelpRer.prototype.appendReplyCustomBtn = function () {
            return function () {
                if (this.ADMIN == "true") {
                    this.$dvContain.find(".ACT-COMMENTS .ACT-SUBREPLY-BTN").after("<a class='ACT-PHREPLY-DELETE'>&nbsp;删除</a>");
                    this.$dvContain.find(".ACT-COMMENTS .ACT-PHREPLY-DELETE").off("click").on("click", function () {
                        this.C.removeReplyC({ "replyID": $(this).parents("ACT-REPLY-ROW").attr("reply_id") });
                    });
                }
            };
        };
        ;
        AKPageHelpRer.prototype.reInitComments = function () {
            var _$commentDiv = this.$dvContain.find(".ACT-COMMENTS");
            _$commentDiv.clear();
            this.initComments();
        };
        AKPageHelpRer.prototype.removeReply = function (option) {
            var _this = this;
            this.getM().removeReply(option, function (res) {
                this.reInitComments();
            });
        };
        AKPageHelpRer.prototype.dispose = function () {
            this.EditorObj.DisposeObj();
            _super.prototype.dispose.call(this);
        };
        return AKPageHelpRer;
    }(baseRerFile.AkBaseRenderer));
    exports.AKPageHelpRer = AKPageHelpRer;
});
