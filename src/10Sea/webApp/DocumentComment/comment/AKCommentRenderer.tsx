import rerFile = require("./../../../core/mcrv/AkBaseRenderer");
import cerFile = require("./AKCommentController");
import utilFile = require("./../../../../01core/Util");
//import jquery = require("./../jquery/jquery/1.10.1/jquery.js");
export class AKCommentRenderer extends rerFile.AkBaseRenderer {
    public getC(): cerFile.AKCommentController {
        return utilFile.Core.Util.Cast<cerFile.AKCommentController>(this.C);
    }
    public AkName = "DCRer";
    public Option = null;
    public $dvContain = null;
    public $Win = null;
    public PageObj = null;
    public initR(option) {
        var _this = this;
        this.$JObj = null;
        _this.Option = option;
        _this.$dvContain = $('<div class="panel panel-default">'
            + '<div class="panel-body"><div class="asc-file"></div><div class="asc-operate"></div><div class="asc-comment"></div><div class="asc-commentInput"></div></div>'
            + '<div class="panel-footer"/></div>');
        var _$win = this.$Win = $("<div><div class = 'ACT-APP-MAIN'></div></div>");
        var _$dom = _$win;
        _$dom["AtawWindow"]({
            Title: "文档中心",
            Width: "95%",
            Fixed: false,
            WindowOpenFun: function (a) {
                var _$dv = _$dom.find(".ACT-APP-MAIN");
                _$dv.append(_this.$dvContain);
                _this.PageObj = _$dv.AtawControl();
            }
        });
        this.getC().fileContainC(this.Option); //内容区
        this.getC().commentContainC(this.Option); //评论展示区
        this.createOperateContain(); //操作区
        this.createCommentInputContain(); //评论区
        var _Win = _$dom.AtawControl();
        _Win.open();
    }

    public getDataR(res) {
        var _this = this;
        res.IsInner = true;
        res.IsPart = true;
        this.$dvContain.find(".asc-file").AtawDetailPage(res);
    }
    public createCommentContainR(res) {
        var _this = this;
        var $commentUl = $('<ul class="media-list"/>');
        var $commentLi, $commentBody;
        for (var i = 0; i < res.length; i++) {
            if (res[i].TYPE === "0") {
                $commentLi = $('<li class="media"/>');
                $commentBody = $('<div class="media-body"/>');
                var $commentContentDv = $('<div/>');
                $commentContentDv.append('<div><small><a href="javascript:void(0)">' + res[i].FROMUSERNAME + "</a>&nbsp;:" + res[i].BODY + '</small></div>');
                $commentContentDv.append('<small><span class="text-muted">' + res[i].CREATE_TIME + '</span><a href="javascript:void(0)">&nbsp;回复</a><a href="javascript:void(0)" style="display:none">&nbsp;删除</a></small>')
                $commentBody.append($commentContentDv);
                (function ($deleteComment, commentID) {
                    if (res[i].ISSELFFILE === 1) {
                        $commentContentDv.mouseover(function () {
                            $deleteComment.removeAttr("style");
                        }).mouseout(function () {
                            $deleteComment.css("display", "none");
                        });
                        $deleteComment.click(function () {
                            _this.getC().removeCommentC({ "fileID": _this.Option.FID, "type": _this.Option.TYPE, "commentID": commentID });
                        })
                    }
                })($commentBody.find("a:eq(2)"), res[i].FID)
                this.createReplyContain(res, res[i].FID, $commentBody);
                $commentLi.append('<a class="pull-left" href="javascript:void(0)"><img class="media-object" src="' + res[i].FROMUSERAVATAR + '" width="30" heigth="30"/></a>');
                var $replyButton = $commentBody.find("a:eq(1)");
                (function (commentID, toUserID, toUserName) {
                    $replyButton.click(function () {
                        _this.createReplyInputContain(commentID, toUserID, toUserName);
                    })
                })(res[i].FID, res[i].FROMUSERID, res[i].FROMUSERNAME)
                $commentLi.append($commentBody);
                $commentUl.append($commentLi);
            }
        }
        this.$dvContain.find(".asc-comment").html("").append($commentUl);
    }
    public createReplyContain(res, commentId, $commentBody) {
        var _this = this;
        var $replyDv, $replyBody;
        for (var i = 0; i < res.length; i++) {
            if (res[i].TYPE === "1" && commentId === res[i].COMMENTID) {
                $replyDv = $('<div class="media"/>');
                $replyDv.append('<a class="pull-left" href="javascript:void(0)"><img class="media-object" src="' + res[i].FROMUSERAVATAR + '" width="30" heigth="30"/></a>');
                $replyBody = $('<div class="media-body"/>');
                var $replyContentDv = $("<div/>");
                var $replyContent = $('<div><small><a href="javascript:void(0)">' + res[i].FROMUSERNAME + '</a>&nbsp;回复&nbsp;<a href="javascript:void(0)">' + res[i].TOUSERNAME + '</a>&nbsp;:' + res[i].BODY + '</small></div>');
                var $replyOperate = $('<small><span class="text-muted">' + res[i].CREATE_TIME + '</span>&nbsp;<a href="javascript:void(0)">回复</a><a href="javascript:void(0)" style="display:none">&nbsp;删除</a></small>');
                $replyContentDv.append($replyContent).append($replyOperate);
                (function ($deleteReply, replyID) {
                    if (res[i].ISSELFFILE === 1) {
                        $replyContentDv.mouseover(function () {
                            $deleteReply.removeAttr("style");
                        }).mouseout(function () {
                            $deleteReply.css("display", "none");
                        });
                        $deleteReply.click(function () {
                            _this.getC().removeReplyC({ "fileID": _this.Option.FID, "type": _this.Option.TYPE, "replyID": replyID });
                        })
                    }
                })($replyOperate.find("a:eq(1)"), res[i].FID)
                $replyBody.append($replyContentDv);
                $replyDv.append($replyBody);
                var $replyButton = $replyOperate.find("a");
                (function (commentID, toUserID, toUserName) {
                    $replyButton.click(function () {
                        _this.createReplyInputContain(commentID, toUserID, toUserName);
                    })
                })(res[i].COMMENTID, res[i].FROMUSERID, res[i].FROMUSERNAME)
                $commentBody.append($replyDv);
            }
        }
    }
    public createOperateContain() {
        var _this = this;
        var $operateDv = $("<div/>");
        var $comment = $('<a href="javascript:void(0)" class="btn btn-default btn-sm">评论</a>');
        $comment.click(function () {
            _this.createCommentInputContain();
        })
        //            var $share = $('<a href="javascript:void(0)" class="btn btn-default btn-sm"  data-original-title="分享给">分享</a>');
        //            $share.popover({
        //                html: true,
        //                template: '<div class="popover" style="max-width:350px"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
        //                content: function () {
        //                    //评论内容
        //                    var $shareDv = $('<div/>');
        //                    var $shareInput = $('<textarea class="input_weibo form-control"/>');
        //                    var $shareOperate = $('<a href="javascript:void(0)" class="btn btn-primary btn-sm">发表</a>');
        //                    var $shareLimit = $('<div class="ACT-LIMIT"></div>');
        //                    $shareLimit.AtawLimitControl();
        //                    $shareOperate.click(function () {
        //                        var shareContent = $shareInput.val();
        //                        var shareLimitObj = $shareLimit.AtawControl();
        //                        var shareWhere, shareOwnID;
        //                        if (shareLimitObj) {
        //                            var shareWhere = shareLimitObj.dataValue();
        //                            var shareOwnID = shareLimitObj.getLimitId();
        //                        }
        //                        _this.C.shareFileC({ key: _this.Option.FID, type: _this.Option.TYPE, content: shareContent, privacyStatus: shareWhere, ownerID: shareOwnID });
        //                        $share.popover("hide");
        //                    })
        //                    $shareDv.append($shareInput).append($shareLimit).append($shareOperate);
        //                    return $shareDv;
        //                }
        //            });

        //            $operateDv.append($comment).append($share);
        $operateDv.append($comment);
        this.$dvContain.find(".asc-operate").html("").append($operateDv);
    }
    public createCommentInputContain() {
        var _this = this;
        var $commentDv = $("<div/>");
        var $commentInput = $('<textarea class="input_weibo form-control" innertext="我也说一句" placeholder="我也说一句" style="height: 65px; width: 60%;"></textarea>');
        var $commentSubmit = $('<div><a href="javascript:void(0)" class="btn btn-primary btn-sm">发表</a></div>');
        $commentSubmit.find("a").click(function () {
            _this.getC().addCommentC({ "fileID": _this.Option.FID, "type": _this.Option.TYPE, "body": $commentInput.val() });
            $commentInput.val("");
        })
        $commentDv.append($commentInput).append($commentSubmit);
        this.$dvContain.find(".asc-commentInput").html("").append($commentDv);
        $commentInput.focus();
    }
    public createReplyInputContain(commentID, toUserID, toUserName) {
        var _this = this;
        var $replyDv = $("<div/>");
        var $replyInput = $('<textarea class="input_weibo form-control" innertext="回复:' + toUserName + '" placeholder="回复:' + toUserName + '" style="height: 65px; width: 60%;"></textarea>');
        var $replySubmit = $('<div><a href="javascript:void(0)" class="btn btn-primary btn-sm">发表</a></div>');
        $replySubmit.find("a").click(function () {
            _this.getC().addReplyC({ "fileID": _this.Option.FID, "type": _this.Option.TYPE, "commentID": commentID, "toUserID": toUserID, "body": $replyInput.val() });
            $replyInput.val("");
        })
        $replyDv.append($replyInput).append($replySubmit);
        this.$dvContain.find(".asc-commentInput").html("").append($replyDv);
        $replyInput.focus();
    }

    //public dispose() {
    //    if (this.PageObj) {
    //        this.PageObj.dispose();
    //    }
    //    var _Win = this.$Win.AtawControl();
    //    if (_Win != null) {
    //        _Win.close();
    //        _Win.dispose();
    //    }
    //    me.superclass.dispose.call(this);
    //};
}