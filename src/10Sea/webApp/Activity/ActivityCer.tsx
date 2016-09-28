import pageCerFile = require("./../BasePageCer");
import mFile = require("./ActivityMer");
import rFile = require("./ActivityRer");
import utilFile = require("./../../../01core/Util");

export class Activitycer extends pageCerFile.BasePageCer {

    public getM(): mFile.ActivityMer {
        return utilFile.Core.Util.Cast<mFile.ActivityMer>(this.M);
    }

    public getR(): rFile.ActivityRer {
        return utilFile.Core.Util.Cast<rFile.ActivityRer>(this.R);
    }

    public AkName = "ActivityCer";
    public Param = null;

    public init() {
       // this.Param = param;
        this.getR().init(this.Param);
    };

    public exe(regname) {
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

    public exeNewComming(regname) {
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

    public exeMore(regname) {
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
    public routInit(param) {
        this.getR().routInit(param);
    };
    public routNewsComming() {
        this.getR().routNewsComming();
    }
    public all() {
        var _this = this;
        this.getM().getAll(this.Param, function (res) {
            _this.getR().setAll(res);
        });
    };

    public allNewsComming() {
        var _this = this;
        this.getM().getAllNewsComming(this.Param, function (res) {
            var _dt = res.Data["SNS_ACTIVITIES"];
            if (_dt.length > 0) {
                _this.getR().setAllNewsComming(res);
            }
        });
    }
    public allMore() {
        var _this = this;
        this.getM().getAllMore(this.Param, function (res) {
            _this.getR().setAllMore(res);
        });
    }
    public circle() {
        var _this = this;
        this.getM().getCircleM(function (res) {
            _this.getR().setCircleR(res);
        });
    };

    public circleNewsComming() {
        var _this = this;
        this.getM().getCircleNewsComming(function (res) {
            var _dt = res.Data["SNS_ACTIVITIES"];
            if (_dt.length > 0) {
                _this.getR().setCircleNewsComming(res);
            }
        });
    }


    public circleMore() {
        var _this = this;
        this.getM().getCircleMoreM(function (res) {
            _this.getR().setCircleMoreR(res);
        });

    }

    //未读
    public unread() {
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
                    } else {
                        $["cookie"]("UnReadMsgCount", "", { path: '/' });
                    }
                }
            }
        });
    }
    public unreadNewsComming() {
        var _this = this;
        this.getM().getUnreadNewsComming(function (res) {
            var _dt = res.Data["SNS_ACTIVITIES"];
            if (_dt.length > 0) {
                _this.getR().setUnreadNewsComming(res);
                _this.getM().updateNewsUnreadM();
                var oldunreadnum = $["cookie"]("UnReadMsgCount");
                if (parseInt(oldunreadnum) > _dt.length) {
                    $["cookie"]("UnReadMsgCount", (parseInt(oldunreadnum) - _dt.length).toString(), { path: '/' });
                } else {
                    $["cookie"]("UnReadMsgCount", "", { path: '/' });
                }
            }
        });
    }
    public unreadMore() {
        var _this = this;
        this.getM().getUnreadMoreM(function (res) {
            _this.getR().setUnreadMoreR(res);
            var _dt = res.Data["SNS_ACTIVITIES"];
            if (_dt.length > 0) {
                _this.getM().updateUnreadM();
                var oldunreadnum = $["cookie"]("UnReadMsgCount");
                if (parseInt(oldunreadnum) > 10) {
                    $["cookie"]("UnReadMsgCount", (parseInt(oldunreadnum) - 10).toString(), { path: '/' });
                } else {
                    $["cookie"]("UnReadMsgCount", "", { path: '/' });
                }
            }
        });
    }

    public relationme() {
        var _this = this;
        this.getM().getRelationMeM(this.Param, function (res) {
            _this.getR().setRelationMeR(res);
        });
    }
    public relationmeNewsComming() {
        var _this = this;
        this.getM().getRelationMeNewsComming(this.Param, function (res) {
            var _dt = res.Data["SNS_ACTIVITIES"];
            if (_dt.length > 0) {
                _this.getR().setRelationMeNewsComming(res);
            }
        });
    }
    //        this.relationmeNewsComming  () {
    //            var _this = this;
    //            this.getM().getRelationMeNewsCommingM(function (res) {
    //                _this.getR().setRelationMeNewsCommingR(res);
    //            });
    //        }
    public relationmeMore() {
        var _this = this;
        this.getM().getRelationMeMoreM(this.Param, function (res) {
            _this.getR().setRelationMeMoreR(res);
        });
    }
    public attention() {
        var _this = this;
        this.getM().getAttentionM(this.Param, function (res) {
            _this.getR().setAttentionR(res);
        });

    };
    public attentionNewsComming() {
        var _this = this;
        this.getM().getAttentionNewsComming(this.Param, function (res) {
            var _dt = res.Data["SNS_ACTIVITIES"];
            if (_dt.length > 0) {
                _this.getR().setAttentionNewsComming(res);
            }
        });
    }
    //        this.attentionNewsComming  () {
    //            var _this = this;
    //            this.getM().getAttentionNewsCommingM(function (res) {
    //                _this.getR().setAttentionNewsCommingR(res);
    //            });

    //        };
    public attentionMore() {
        var _this = this;
        this.getM().getAttentionMoreM(this.Param, function (res) {
            _this.getR().setAttentionMoreR(res);
        });

    };
    public Activity() {
        var _this = this;
        this.all();
    };


    public WorkFlow() {
        var _this = this;
        this.getM().getWorkflowM(this.Param, function (res) {
            _this.getR().setWorkflowR(res);
        });
    };
    public WorkFlowNewsComming() {
        var _this = this;
        this.getM().getWorkflowNewsComming(this.Param, function (res) {
            var _dt = res.Data["SNS_ACTIVITIES"];
            if (_dt.length > 0) {
                _this.getR().setWorkflowNewsComming(res);
            }
        });
    }
    //        this.WorkFlowNewsComming  () {
    //            var _this = this;
    //            this.getM().getWorkflowNewsCommingM(function (res) {
    //                _this.getR().setWorkflowNewsCommingR(res);
    //            });
    //        };
    public WorkFlowMore() {
        var _this = this;
        this.getM().getWorkflowMoreM(this.Param, function (res) {
            _this.getR().setWorkflowMoreR(res);
        });
    };
    public fullcalendar() {
        this.getR().fullcalendar();
    };

    public todayToDo() {
        this.getR().todayToDo();
    };
    //----------------

    public setTopMyWork() {
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

    public getAllVote() {
        var _this = this;
        _this.getM().getAllVote(function (res) {
            _this.getR().setAllVote(res);
        });
    };

    public voteMore() {
        var _this = this;
        _this.getM().getVoteMore(function (res) {
            _this.getR().setVoteMore(res);
        });
    };

    //获取未读动态数
    public getUnreadNum() {
        var _this = this;
        this.getM().getUnreadNumM(function (res) {
            _this.getR().getUnreadNumR(res);
        });
    }

    public updateUnread() {
        var _this = this;
        _this.getM().updateUnreadM();
    }

    //我的收藏
    public myfavorite() {
        var _this = this;
        this.getM().getMyFavoriteM(function (res) {
            _this.getR().setMyFavoriteR(res);
        });
    }
    public myfavoriteNewsComming() {
        var _this = this;
        this.getM().getMyFavoriteNewsComming(function (res) {
            var _dt = res.Data["SNS_ACTIVITIES"];
            if (_dt.length > 0) {
                _this.getR().setMyFavoriteNewsComming(res);
            }
        });
    }
    public myfavoriteMore() {
        var _this = this;
        this.getM().getMyFavoriteMoreM(function (res) {
            _this.getR().setMyFavoriteMoreR(res);
        });
    }
}