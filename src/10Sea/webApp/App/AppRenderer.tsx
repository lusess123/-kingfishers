import rerFile = require("./../../core/mcrv/AkBaseRenderer");
import cerFile = require("./AppController");
import utilFile = require("./../../../01core/Util");
export class AppRenderer extends rerFile.AkBaseRenderer
{
    //this.$JObj = null;
    public $ActAppMain: JQuery = null;
    public ActAppRight = null;
    public $ActAppLeft: JQuery = null;

    public $ACT_APP_BT: JQuery = null;
    public $ACT_APP_LEFT_BT: JQuery = null;
    public $ACT_APP_RIGHT_BT: JQuery = null;


    public $ACT_MAIN: JQuery = null;
    public $ACT_APP_PERSONSET: JQuery = null;
    public $ACT_APP_HELP_BT: JQuery = null;
    public $ACT_APP_BACK_BT: JQuery = null;
    public $ACT_APP_REFRESH_BT: JQuery = null;
    //this.$
    public $ACT_MENU: JQuery = null;
    public $ACT_MAP: JQuery = null;

    public $ACT_LEFT_NAVI_PANEL: JQuery = null;

    public $ACT_LEFT_LONG: JQuery = null;

    public $ACT_NAVI_BIG: JQuery = null;

    public $ACT_IM_BTN: JQuery = null;
    public IsHTV: boolean = false;
    public NoPin: boolean = false;
    public IsVertical: boolean = true;

    public $NaviContent: JQuery;
    public $ActAppRight: JQuery;

    public $ACT_TOLEFT_BTN: JQuery;
    public $ACT_TORIGHT_BTN: JQuery;
    public $ACT_SHOWRIGHT_BTN: JQuery;
    public $ACT_HIDERIGHT_BTN: JQuery;
    public $ACT_PAGE_NAVI: JQuery;

    public $ACT_APP_PERSONSET_BT: JQuery;
    public $ActAppLeftPage: JQuery;
    public $ACT_TOP_MENU: JQuery;
    public $ACT_LEFT_PIN: JQuery;

    public getC(): cerFile.AppController
    {
        return utilFile.Core.Util.Cast<cerFile.AppController>(this.C);
    }

 public initR () {

     super.initR();
    this.$NaviContent = null;
    // this.$JObj.append("<div>" + this.get("AkName") + "</div>");
    this.$ActAppMain = this.$JObj.find("#ACT-APP-MAIN");
    this.$ActAppRight = this.$JObj.find("#ACT-APP-RIGHT");
    this.$ActAppLeft = this.$JObj.find("#ACT-APP-LEFT");

    this.$ACT_APP_BT = this.$JObj.find("#ACT-APP-BT");
    //ACT-APP-BT
    //this.$ACT_APP_LEFT_BT = this.$JObj.find("#ACT-APP-LEFT-BT");
    //this.$ACT_APP_RIGHT_BT = this.$JObj.find("#ACT-APP-RIGHT-BT");

    this.$ACT_TOLEFT_BTN = this.$JObj.find("#ACT-TOLEFT-BTN");
    this.$ACT_TORIGHT_BTN = this.$JObj.find("#ACT-TORIGHT-BTN");

    this.$ACT_SHOWRIGHT_BTN = this.$JObj.find("#ACT_SHOWRIGHT_BTN");
    this.$ACT_HIDERIGHT_BTN = this.$JObj.find("#ACT_HIDERIGHT_BTN");
    //页面内导航布局
    this.$ACT_PAGE_NAVI = this.$JObj.find("#ACT-PAGE-NAVI");
    this.$ACT_MAIN = this.$JObj.find("#ACT-MAIN");
    this.$ACT_NAVI_BIG = this.$JObj.find(".ACT-NAVI-BIG");
    //---------
    //---------
    this.$ACT_APP_HELP_BT = this.$JObj.find("#ACT-APP-HELP");
    this.$ACT_APP_REFRESH_BT = this.$JObj.find("#ACT-APP-REFRESH");
    this.$ACT_APP_BACK_BT = this.$JObj.find("#ACT-APP-BACK");
    this.$ACT_APP_PERSONSET_BT = this.$JObj.find("#ACT-APP-PERSONSET");
    this.$ActAppLeftPage = this.$JObj.find("#ACT-APP-LEFT-PAGE");
    //-----------------------------------------------------------------
    this.$ACT_MENU = this.$JObj.find("#ACT-LEFT-MENU");
    this.$ACT_MAP = this.$JObj.find("#ACT-SITEMAP");

    //--------------------------------------------
    this.$ACT_TOP_MENU = this.$JObj.find("#ACT_TOP_MENU");

    //-------
    this.$ACT_LEFT_NAVI_PANEL = this.$JObj.find("#ACT-LEFT-NAVI-PANEL");
    // this.ACT - LEFT - NAVI - PANEL
    this.$ACT_LEFT_LONG = this.$JObj.find("#ACT_LEFT_LONG");

    this.$ACT_LEFT_PIN = this.$JObj.find("#ACT_LEFT_PIN");
    this.$ACT_IM_BTN = this.$JObj.find("#ACT-IM-BTN");

    var _this = this;
    this.$ACT_APP_REFRESH_BT.unbind("click").bind("click", function () {
        var _locationUrl = window.location.hash.toString();
        var _LocationUrl = _locationUrl.substring(1);
        _this.$ACT_PAGE_NAVI.removeClass("col-md-12 horizontal").addClass("col-md-3");
        _this.$ACT_NAVI_BIG.removeClass("icon-reply").addClass("icon-share-alt");
        _this.IsVertical = true;
        _this.getC().Url.openUrl(_LocationUrl);
        return false;
    });

    this.$ACT_APP_BACK_BT.unbind("click").bind("click", function () {
        _this.getC().Url.backHistory();

        return false;
    });
    // this.$ActAppLeftPage.unbind("click").bind("click", function () {
    //_this.C.Url.backHistory();
    $.AKjs.asynJs(
        [
            "/AtawStatic/lib/03Extend/silderreveal/jquery.slidereveal.min.js"

        ],
        function () {
            //$('#slider').slideReveal({
            //    trigger: $(".ACT-APP-LEFT-PAGE"),
            //    position: "right",
            //    width: 800,
            //    speed: 700,
            //    push: false,
            //    show: function (slider, trigger) {
            //        $('#slider').removeClass("hide").show();
            //    },
            //    shown: function (slider, trigger) {
            //       // $('#slider').css("max-width", "60%");
            //    },
            //    hidden: function (slider, trigger) {
            //        $('#slider').hide();
            //    },
            //});
        });
    // return false;
    // });

    this.$ACT_APP_PERSONSET_BT.unbind("click").bind("click", function () {
        var _$dc = $("<div/>");
        _$dc["AtawWindow"]({
            Title: "个人配置",
            Width: "90%",
            WindowOpenFun: function (obj) {
                var Creator = require("personsetmrc");
                var _creator = new Creator();
                _creator.init(_$dc);
            }
        });
        var win = _$dc.AtawControl();
        win.open();
    })
    this.$ACT_APP_HELP_BT.unbind("click").bind("click", function () {
        var _locationUrl = window.location.hash.toString();
        var _LocationUrl = _locationUrl.substring(1);
        if (_LocationUrl != "") {

            var  _fun = function(res) {
                var _$dc = $("<div/>");
                _$dc["AtawWindow"]({
                    Title: "反馈",
                    Width: "90%",
                    WindowOpenFun: function (obj) {
                        var Creator = require("pagehelpmrc");
                        var _creator = new Creator();
                        _creator.setModel(res);
                        _creator.init(_$dc);
                    }
                });
                var win = _$dc.AtawControl();
                win.open();
            }

            _this.getC().PageHelp(_fun, _LocationUrl);

        }
    });

    this.$ACT_APP_BT.unbind("click").bind("click", function () {
        _this.getC().LayOut.layOutTransFormMainC();
        //alert(1);
        return false;
    });
    this.$ACT_NAVI_BIG.unbind("click").bind("click", function () {
        if (_this.IsVertical == true) {
            _this.$ACT_MAIN.removeClass("col-md-9").addClass("col-md-12");
            _this.$ACT_PAGE_NAVI.removeClass("col-md-3").addClass("col-md-12 horizontal");
            _this.$ACT_NAVI_BIG.removeClass("icon-share-alt").addClass("icon-reply");
            _this.IsVertical = false;
        }
        else {
            _this.$ACT_MAIN.removeClass("col-md-12").addClass("col-md-9");
            _this.$ACT_PAGE_NAVI.removeClass("col-md-12 horizontal").addClass("col-md-3");
            _this.$ACT_NAVI_BIG.removeClass("icon-reply").addClass("icon-share-alt");
            _this.IsVertical = true;
        }
        return false;
    });
    //this.$ACT_APP_LEFT_BT.unbind("click").bind("click", function () {
    //    _this.C.LayOut.layOutTransFormLeftC();
    //    //alert(1);
    //    return false;
    //});

    //this.$ACT_APP_RIGHT_BT.unbind("click").bind("click", function () {
    //    _this.C.LayOut.layOutTransFormRightC();
    //    //alert(1);
    //    return false;
    //});
    //左导航隐藏或者显示
    this.$ACT_TOLEFT_BTN.unbind("click").bind("click", function () {
        _this.getC().LayOut.layOutShowBar(true, true);
    })
    this.$ACT_TORIGHT_BTN.unbind("click").bind("click", function () {
        _this.getC().LayOut.layOutShowBar(true, false);
    });
    //右侧菜单显示或隐藏
    this.$ACT_SHOWRIGHT_BTN.unbind("click").bind("click", function () {
        _this.getC().LayOut.layOutShowBar(false, false);
    })
    this.$ACT_HIDERIGHT_BTN.unbind("click").bind("click", function () {
        _this.getC().LayOut.layOutShowBar(false, true);
    })


    this.$ACT_LEFT_PIN.off("click").on("click", function () {
        //---------

        var _$i = _this.$ACT_LEFT_PIN.find("i");
        _$i.SwitchClass("icon-pushpin", "icon-paper-clip", _this.NoPin);
        _this.$ActAppLeft.toggleClass("aks-left-pin", !_this.NoPin);
        _this.NoPin = !_this.NoPin;



    });

    this.$ACT_LEFT_LONG.unbind("click").bind("click", function () {
        var _$i = null;
        if (!_this.IsHTV) {
            _this.getC().LayOut.layOutTransFormPage("HTV");
            _$i = _this.$ACT_LEFT_LONG.find("i");
        }
        else {
            _this.getC().LayOut.layOutTransFormPage("TTV");
            _$i = _this.$ACT_LEFT_LONG.find("i");
        }
        return false;
    });

    this.$ACT_IM_BTN.off("click").on("click", function () {
        //if ($(this).parent().find("ul>li").length == 0) {
        _this.setIMVisibility();
        // }
    });
    //暂时屏蔽掉
    this.initIM();
    this.initPublicClubs(this.$ActAppRight.find("#ACT-PUBLICCLUB"));
    //this.C.LayOut.loadUserScreenModeC();
    this.bindDomEventR(this.$JObj);
    this.notifyMesgR("加载完成");
    //$.backstretch("../../../../Content/images/bgImg-office.jpg");



    $.AKjs.asynJs(
        [
            "/AtawStatic/lib/03Extend/ddsmoothmenu/ddsmoothmenu.js",
            "/AtawStatic/lib/03Extend/ddsmoothmenu/ddsmoothmenu.css"

        ],
        function () {
            $("#smoothmenu0").removeClass("ACT_HIDDEN");
           window["ddsmoothmenu"].init({
                mainmenuid: "smoothmenu0", //menu DIV id
                orientation: 'h', //Horizontal or vertical menu: Set to "h" or "v"
                classname: 'ddsmoothmenu', //class added to menu's outer DIV
                //customtheme: ["#1c5a80", "#18374a"],
                contentsource: "markup" //"markup" or ["container_id", "path_to_menu_file"]
            });

        });
    $.AKjs.asynJs("/AtawStatic/lib/03Extend/bbq/jquery.ba-hashchange.min.js", function () {

        $(window).hashchange(function (a) {
            var hash = location.hash;
            var _isR = _this.getC().getM().IsRouteEvent;
            var _isAppFirst = _this.getC().Url.IsAppFist;
            // alert(_isR + "   " + hash);
            if ((!_isR)) {
                //alert("回退按钮的" + hash);
                _this.getC().Url.openHasChangeUrl(hash, null, true);
                _this.getC().Url.IsAppFist = false;
            }
            //   _this.C.M.FirstUrl = 
            _this.getC().getM().IsRouteEvent = false;
        })

        // Since the event is only triggered when the hash changes, we need to trigger
        // the event now, to handle the hash the page may have loaded with.
       // $(window).hashchange(null);
    });




};

 public reSetPage  () {
   
};




public setIMVisibility  (){
    var _$im = $(".ACT-IM");

    if (_$im.is(":visible")) {
        _$im.hide();
    }
    else {
        _$im.show();
    }
}

public initIM  () {
    //var Creator = require("nodeimmrc");
    //var _creator = new Creator();
    //_creator.init($("body"));
};

public initPublicClubs   ($dom:JQuery) {
    //var CircleCreator = require("allcirclemrc");
    //var _creator = new CircleCreator();
    //_creator.setModel(null, null, true);
    //_creator.init($dom);
};

 public toggleHistoryBack (isa:boolean) {
    this.$ACT_APP_BACK_BT.SwitchClass("disabled", "enable", isa);

};

 public selectTopMenuUrl (url:string) {
    var _$lis = this.$ACT_TOP_MENU.find(".TOP_MENU").find("li");
    var _isBreak = false;
    if (_$lis.length > 0) {

        for (var i = 0; i < _$lis.length; i++) {
            if (!_isBreak) {
                var _$li = _$lis.eq(i);
                var _href = _$li.attr("href");
                if (_href == url) {
                    _isBreak = true;
                    _$lis.removeClass("active");
                    _$li.addClass("active");
                }
            }
        }
    }
};

public selectTopMenu  (sign:string) {
    this.$ACT_TOP_MENU.find("a").removeClass("active");
    var _$li = this.$ACT_TOP_MENU.find("#" + sign);
    if (_$li.length > 0) {
        _$li.addClass("active");
    }
};
public clearTopMenu  (sign:string) {
    this.$ACT_TOP_MENU.find("a").removeClass("active");

};
 public getLeft$DomR ():JQuery {
    return this.$ActAppLeft;
};
 public getRight$DomR ():JQuery {
    return this.$ActAppRight;
};
 public getMain$DomR ():JQuery {
    return this.$ACT_MAIN;
    //.find(".ACT-APP-MAIN-PAGE");
};
 public getMenu$DomR ():JQuery {
    return this.$ACT_MENU;
};
 public getSubNaviDomR ():JQuery {
    return this.$JObj.find("#ACT-SUB-NAVI");
};


public bindDomEventR ($dom:JQuery) {
    var _this = this;
    $dom.find("a.ACT-A-HREF").unbind("click").bind("click", function () {
        try {
            var _$this = $(this);
           

            _this.getC().Url.openUrl(_$this.attr("href"));
        }
        catch (ex) {
            if (console && console.log) {
                console.log(ex);
            }
            _this.getC().notifyMesgC(ex.message);
            //alert(ex);
        }

        return false;
    });

    $dom.find(".ACT-SNS-USER-LINK").each(function () {
        var _$this = $(this);
        if (_$this.AtawControl() == null) {
            var _id = _$this.attr("lkid");

            _$this.AtawSnsUserCard({ UserId: _id });
        }
        //return false;
    });

    $dom.find(".ACT-SNS-CLUB-LINK").each(function () {
        var _$this = $(this);
        if (_$this.AtawControl() == null) {
            var _id = _$this.attr("lkid");

            _$this.AtawSnsClubCard({ ClubId: _id });
        }
        //return false;
    });

    $dom.find(".ACT-DOCVIEW-LINK").each(function () {
        var _$this = $(this);
        if (_$this.AtawControl() == null) {
            _$this.off("click").on("click", function () {
                var _id = _$this.attr("docid");
                var x = window.screen.width * 0.9;
                var y = window.screen.height * 0.9;
                // alert(x+ "  "+y);
                // window.open("/DocumentViewer/Viewer/Doc?doc=" + _this.ResourceInfo.FileId + _this.ResourceInfo.ExtName);
                window["showModalDialog"]("/DocumentViewer/Viewer/Doc?doc=" + _id, "", "dialogWidth=" + x + "px;dialogHeight =" + y + "px");
            });


        }
    }
    );
};

//-----------navi------------
 public getPageNaviDom(title:string) {
    if (this.$NaviContent == null) {
        this.$NaviContent = $('#ACT-NAVI-MENU');
    }
    if ($('#ACT-NAVI-TAB').find("a").length > 0) {
        $('#ACT-NAVI-TAB').find("a").text(title);
    }
    else {
        $('#ACT-NAVI-TAB').text(title);
    }
    // alert( this.$ACT_LEFT_NAVI_PANEL.attr("class"));
    //alert(123);
    this.$ACT_LEFT_NAVI_PANEL.removeClass("hidden");
    return this.$NaviContent;

};

public  clearPageNaviDom () {
    if (this.$NaviContent == null) {
        this.$NaviContent = $('#ACT-NAVI-MENU');
    }
    this.$NaviContent.html("");

    var _$tab = $('#ACT-NAVI-TAB');
    if (_$tab.find("a").length > 0) {
        _$tab.find("a").text("");
    }
    //            else {
    //                _$tab.text("");
    //            }
    _$tab.text("");

    this.$ACT_LEFT_NAVI_PANEL.addClass("hidden");
};
 public clearPageWindowDom () {
    this.$ACT_MAIN.show();
    $(".PAGE-WINDOW-ACT").remove();
};
//--------------
public togglePageNavi () {
    if (this.hasLeftNavi()) {
        this.$ACT_PAGE_NAVI.SwitchClass("col-md-3", "col-md-0", true);
        this.$ACT_MAIN.SwitchClass("col-md-9 ", "col-md-12", true);
    } else {
        this.$ACT_PAGE_NAVI.SwitchClass("ss col-md-3", "col-md-0", false);
        this.$ACT_MAIN.SwitchClass("col-md-9", "col-md-12", false);
    }
}
public toggleAppBtClassR  (isTTT:boolean) {
    var _$i = this.$ACT_APP_BT.find("i")
    _$i.SwitchClass("icon-align-justify", "icon-align-center", isTTT);

};

public toggleAppClassR (l, m, r, isAdd) {
    this.$ActAppLeft.toggleClass("col-lg-" + l, isAdd);
    this.$ActAppMain.toggleClass("col-lg-" + m, isAdd);
    this.$ActAppRight.toggleClass("col-lg-" + r, isAdd);
    // debugger;
    //alert();
};
public setAppClassR  (l, m, r) {
    // alert();
    this.setClassR(this.$ActAppLeft, l);
    if (l != 0) {
        this.$ACT_TOLEFT_BTN.show();
        this.$ACT_TORIGHT_BTN.hide();
    }
    else {
        this.$ACT_TOLEFT_BTN.hide();
        this.$ACT_TORIGHT_BTN.show();
    }
    if (r != 0) {
        this.$ACT_SHOWRIGHT_BTN.show();
        this.$ACT_HIDERIGHT_BTN.hide();
    }
    else {
        this.$ACT_SHOWRIGHT_BTN.hide();
        this.$ACT_HIDERIGHT_BTN.show();
    }

    this.setClassR(this.$ActAppMain, m);
    //alert(this.$ActAppLeft.attr("class"));
    this.setClassR(this.$ActAppRight, r);
    //this.$ActAppRight.attr("class","");
    //alert(this.$ActAppRight.attr("class"));


}

 public toggleLeftLong  (isLong :boolean) {
    this.$ActAppLeft.toggleClass("aks-left-long", isLong);
    var _$i = this.$ACT_LEFT_LONG.find("i");
    this.IsHTV = isLong;
    _$i.SwitchClass("icon-chevron-right", "icon-chevron-left", !isLong);
};

public setClassR  ($dom:JQuery, num:Number) {
    // var $dom = $("#" + $dom.attr("id")); //重新刷新元素
    // alert($dom.length);
    if ($dom && $dom.length > 0) {
        var _css = $dom.attr("class");
        if (_css != "") {
            var _cssList = _css.split(" ");
            var _cssNewList = [];
            _cssNewList.push("col-lg-" + num);
            for (var _i = 0; _i < _cssList.length; _i++) {
                var _c = _cssList[_i];
                if (_c.indexOf("col-lg-") == -1) {
                    _cssNewList.push(_c);
                }
                else {
                    $dom.removeClass(_c);
                }
            }
            $dom.removeClass();
            //alert(_cssNewList.join(" "));
            // $dom.attr("class"
            $dom.addClass(_cssNewList.join(" "));
            //alert($dom.attr("class"));
            // $dom.removeClass("col-md-2");
        }
    }
}

public notifyMesgR (msg:string) {

    //            $.globalMessenger().post({
    //                message: msg,

    //                showCloseButton: true,
    //                hideAfter: 6,
    //                hideOnNavigate: true
    //            });

    $.AKjs.asynJs([
        "/AtawStatic/lib/03Extend/messenger/js/messenger.js",
        "/AtawStatic/lib/03Extend/messenger/css/messenger.css"
    ], function () {
        $["globalMessenger"]().post({
            message: msg,

            showCloseButton: true,
            hideAfter: 6,
            hideOnNavigate: true
        });
    });


}

  public HasMenu () {
    return this.$ACT_MENU.length > 0 && this.$ACT_MAP.length > 0;
};
public bindMenu(res, fun) {
   // debugger;
    //alert();
    if (!this.$ACT_MENU.AtawControl()) {
        this.$ACT_MENU["AtawLeftMenuTree"](
            {
                Data: res,
                //SelectArrangeItem: "000_002_002",
                ClickFun: function (arrange, menuObj) {
                    // SetUrl(arrange, menuObj);
                    //                    if()
                    //                    var _obj = this.$ACT_MAP.AtawControl();
                    //                    if (_obj) {
                    //                        if (_obj.length && _obj.length > 0) {
                    //                            _obj[0].open(arrange);
                    //                        } else
                    //                            _obj.open(arrange);
                    //                    }

                }
            });

        var _obj = this.$ACT_MENU.AtawControl();
        var _$map = this.$ACT_MAP;
        _$map["AtawPageMap"]({
            Data: res,
            TreeMenuObj: _obj,
            ClickFun: function (arrange, menuObj) {

            }
        });

        fun();
    }
}

 public openMenu  (menu) {
    var _obj = this.$ACT_MENU.AtawControl();
    if (_obj) {
        if (_obj.length && _obj.length > 0) {
            _obj[0].open(menu.Arrange);
        } else
            _obj.open(menu.Arrange);
    }
    _obj = this.$ACT_MAP.AtawControl();
    if (_obj) {
        if (_obj.length && _obj.length > 0) {
            _obj[0].open(menu.Arrange);
        } else
            _obj.open(menu.Arrange);
    }
}

 public hasLeftNavi () {
    var _html = this.$ACT_LEFT_NAVI_PANEL.find("#ACT-NAVI-TAB").text();
    // alert(_html + "  "+ _html == "");
    //alert(_html);
    //alert(!(this.$ACT_LEFT_NAVI_PANEL.find("#ACT-NAVI-MENU").html() === ""));
    //alert(_html);
    return _html != "";
};
public avtiveHeader (arrange:string) {
    this.$ACT_TOP_MENU.find("a").removeClass("active");
    this.$ACT_TOP_MENU.find("a[arrange='" + arrange + "']").addClass("active");
};
 public avtiveDeskHeader () {
    this.$ACT_TOP_MENU.find("a").removeClass("active");
    this.$ACT_TOP_MENU.find("a").eq(0).addClass("active");
};

}