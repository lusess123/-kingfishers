var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../BasePageCer", "./../../../01core/Util"], function (require, exports, pageCerFile, utilFile) {
    "use strict";
    var Activitycer = (function (_super) {
        __extends(Activitycer, _super);
        function Activitycer() {
            _super.apply(this, arguments);
            this.AkName = "ActivityCer";
            this.Param = null;
        }
        Activitycer.prototype.getM = function () {
            return utilFile.Core.Util.Cast(this.M);
        };
        Activitycer.prototype.getR = function () {
            return utilFile.Core.Util.Cast(this.R);
        };
        Activitycer.prototype.init = function () {
            // this.Param = param;
            this.getR().init(this.Param);
        };
        ;
        Activitycer.prototype.exe = function (regname) {
            //-------
            var _exe = this[regname];
            if (_exe) {
                this.getR()["clear"]();
                this[regname]();
                this.getR()["bindEvent"]();
            }
            else {
                $.AKjs.App.notifyMesg(" 名称为 ：" + regname + "的动态版未实现 ");
            }
        };
        ;
        Activitycer.prototype.exeNewComming = function (regname) {
            //-------
            var _exe = this[regname];
            if (_exe) {
                this[regname]();
                this.getR()["bindEvent"]();
            }
            else {
                $.AKjs.App.notifyMesg(" 名称为 ：" + regname + "的动态版未实现 ");
            }
        };
        ;
        Activitycer.prototype.exeMore = function (regname) {
            //-------
            var _exe = this[regname];
            if (_exe) {
                this[regname]();
                this.getR().bindEvent();
            }
            else {
                $.AKjs.App.notifyMesg(" 名称为 ：" + regname + "的动态版未实现 ");
            }
        };
        ;
        Activitycer.prototype.routInit = function (param) {
            this.getR().routInit(param);
        };
        ;
        Activitycer.prototype.routNewsComming = function () {
            this.getR().routNewsComming();
        };
        Activitycer.prototype.all = function () {
            var _this = this;
            this.getM().getAll(this.Param, function (res) {
                _this.getR().setAll(res);
            });
        };
        ;
        Activitycer.prototype.allNewsComming = function () {
            var _this = this;
            this.getM().getAllNewsComming(this.Param, function (res) {
                var _dt = res.Data["SNS_ACTIVITIES"];
                if (_dt.length > 0) {
                    _this.getR().setAllNewsComming(res);
                }
            });
        };
        Activitycer.prototype.allMore = function () {
            var _this = this;
            this.getM().getAllMore(this.Param, function (res) {
                _this.getR().setAllMore(res);
            });
        };
        Activitycer.prototype.circle = function () {
            var _this = this;
            this.getM().getCircleM(function (res) {
                _this.getR().setCircleR(res);
            });
        };
        ;
        Activitycer.prototype.circleNewsComming = function () {
            var _this = this;
            this.getM().getCircleNewsComming(function (res) {
                var _dt = res.Data["SNS_ACTIVITIES"];
                if (_dt.length > 0) {
                    _this.getR().setCircleNewsComming(res);
                }
            });
        };
        Activitycer.prototype.circleMore = function () {
            var _this = this;
            this.getM().getCircleMoreM(function (res) {
                _this.getR().setCircleMoreR(res);
            });
        };
        //未读
        Activitycer.prototype.unread = function () {
            var _this = this;
            this.getM().getUnreadM(function (res) {
                _this.getR().setUnreadR(res);
                //将点击未读后更新activitystatus写在这
                if (res.Data) {
                    var _dt = res.Data["SNS_ACTIVITIES"];
                    if (_dt.length > 0) {
                        _this.getM().updateUnreadM();
                        var oldunreadnum = $["cookie"]("UnReadMsgCount");
                        if (parseInt(oldunreadnum) > 10) {
                            $["cookie"]("UnReadMsgCount", (parseInt(oldunreadnum) - 10).toString(), { path: '/' });
                        }
                        else {
                            $["cookie"]("UnReadMsgCount", "", { path: '/' });
                        }
                    }
                }
            });
        };
        Activitycer.prototype.unreadNewsComming = function () {
            var _this = this;
            this.getM().getUnreadNewsComming(function (res) {
                var _dt = res.Data["SNS_ACTIVITIES"];
                if (_dt.length > 0) {
                    _this.getR().setUnreadNewsComming(res);
                    _this.getM().updateNewsUnreadM();
                    var oldunreadnum = $["cookie"]("UnReadMsgCount");
                    if (parseInt(oldunreadnum) > _dt.length) {
                        $["cookie"]("UnReadMsgCount", (parseInt(oldunreadnum) - _dt.length).toString(), { path: '/' });
                    }
                    else {
                        $["cookie"]("UnReadMsgCount", "", { path: '/' });
                    }
                }
            });
        };
        Activitycer.prototype.unreadMore = function () {
            var _this = this;
            this.getM().getUnreadMoreM(function (res) {
                _this.getR().setUnreadMoreR(res);
                var _dt = res.Data["SNS_ACTIVITIES"];
                if (_dt.length > 0) {
                    _this.getM().updateUnreadM();
                    var oldunreadnum = $["cookie"]("UnReadMsgCount");
                    if (parseInt(oldunreadnum) > 10) {
                        $["cookie"]("UnReadMsgCount", (parseInt(oldunreadnum) - 10).toString(), { path: '/' });
                    }
                    else {
                        $["cookie"]("UnReadMsgCount", "", { path: '/' });
                    }
                }
            });
        };
        Activitycer.prototype.relationme = function () {
            var _this = this;
            this.getM().getRelationMeM(this.Param, function (res) {
                _this.getR().setRelationMeR(res);
            });
        };
        Activitycer.prototype.relationmeNewsComming = function () {
            var _this = this;
            this.getM().getRelationMeNewsComming(this.Param, function (res) {
                var _dt = res.Data["SNS_ACTIVITIES"];
                if (_dt.length > 0) {
                    _this.getR().setRelationMeNewsComming(res);
                }
            });
        };
        //        this.relationmeNewsComming  () {
        //            var _this = this;
        //            this.getM().getRelationMeNewsCommingM(function (res) {
        //                _this.getR().setRelationMeNewsCommingR(res);
        //            });
        //        }
        Activitycer.prototype.relationmeMore = function () {
            var _this = this;
            this.getM().getRelationMeMoreM(this.Param, function (res) {
                _this.getR().setRelationMeMoreR(res);
            });
        };
        Activitycer.prototype.attention = function () {
            var _this = this;
            this.getM().getAttentionM(this.Param, function (res) {
                _this.getR().setAttentionR(res);
            });
        };
        ;
        Activitycer.prototype.attentionNewsComming = function () {
            var _this = this;
            this.getM().getAttentionNewsComming(this.Param, function (res) {
                var _dt = res.Data["SNS_ACTIVITIES"];
                if (_dt.length > 0) {
                    _this.getR().setAttentionNewsComming(res);
                }
            });
        };
        //        this.attentionNewsComming  () {
        //            var _this = this;
        //            this.getM().getAttentionNewsCommingM(function (res) {
        //                _this.getR().setAttentionNewsCommingR(res);
        //            });
        //        };
        Activitycer.prototype.attentionMore = function () {
            var _this = this;
            this.getM().getAttentionMoreM(this.Param, function (res) {
                _this.getR().setAttentionMoreR(res);
            });
        };
        ;
        Activitycer.prototype.Activity = function () {
            var _this = this;
            this.all();
        };
        ;
        Activitycer.prototype.WorkFlow = function () {
            var _this = this;
            this.getM().getWorkflowM(this.Param, function (res) {
                _this.getR().setWorkflowR(res);
            });
        };
        ;
        Activitycer.prototype.WorkFlowNewsComming = function () {
            var _this = this;
            this.getM().getWorkflowNewsComming(this.Param, function (res) {
                var _dt = res.Data["SNS_ACTIVITIES"];
                if (_dt.length > 0) {
                    _this.getR().setWorkflowNewsComming(res);
                }
            });
        };
        //        this.WorkFlowNewsComming  () {
        //            var _this = this;
        //            this.getM().getWorkflowNewsCommingM(function (res) {
        //                _this.getR().setWorkflowNewsCommingR(res);
        //            });
        //        };
        Activitycer.prototype.WorkFlowMore = function () {
            var _this = this;
            this.getM().getWorkflowMoreM(this.Param, function (res) {
                _this.getR().setWorkflowMoreR(res);
            });
        };
        ;
        Activitycer.prototype.fullcalendar = function () {
            this.getR().fullcalendar();
        };
        ;
        Activitycer.prototype.todayToDo = function () {
            this.getR().todayToDo();
        };
        ;
        //----------------
        Activitycer.prototype.setTopMyWork = function () {
            var _this = this;
            this.getM().getTopMyWork(function (res) {
                //--------
                if (res && res.Data && res.Forms) {
                    var _dt = res.Data["TopMyWork"];
                    var _form = res.Forms["TopMyWork"];
                    _form.HasPager = false;
                    _form.FormType = "Activity";
                    var _op = { Data: res.Data, Form: _form };
                    _this.getR().setTopMyWork(_op);
                }
            });
        };
        ;
        Activitycer.prototype.getAllVote = function () {
            var _this = this;
            _this.getM().getAllVote(function (res) {
                _this.getR().setAllVote(res);
            });
        };
        ;
        Activitycer.prototype.voteMore = function () {
            var _this = this;
            _this.getM().getVoteMore(function (res) {
                _this.getR().setVoteMore(res);
            });
        };
        ;
        //获取未读动态数
        Activitycer.prototype.getUnreadNum = function () {
            var _this = this;
            this.getM().getUnreadNumM(function (res) {
                _this.getR().getUnreadNumR(res);
            });
        };
        Activitycer.prototype.updateUnread = function () {
            var _this = this;
            _this.getM().updateUnreadM();
        };
        //我的收藏
        Activitycer.prototype.myfavorite = function () {
            var _this = this;
            this.getM().getMyFavoriteM(function (res) {
                _this.getR().setMyFavoriteR(res);
            });
        };
        Activitycer.prototype.myfavoriteNewsComming = function () {
            var _this = this;
            this.getM().getMyFavoriteNewsComming(function (res) {
                var _dt = res.Data["SNS_ACTIVITIES"];
                if (_dt.length > 0) {
                    _this.getR().setMyFavoriteNewsComming(res);
                }
            });
        };
        Activitycer.prototype.myfavoriteMore = function () {
            var _this = this;
            this.getM().getMyFavoriteMoreM(function (res) {
                _this.getR().setMyFavoriteMoreR(res);
            });
        };
        return Activitycer;
    }(pageCerFile.BasePageCer));
    exports.Activitycer = Activitycer;
});
