var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../core/mcrv/AkBaseRenderer", "./../../../01core/Util"], function (require, exports, rerFile, utilFile) {
    "use strict";
    var AppRenderer = (function (_super) {
        __extends(AppRenderer, _super);
        function AppRenderer() {
            _super.apply(this, arguments);
            //this.$JObj = null;
            this.$ActAppMain = null;
            this.ActAppRight = null;
            this.$ActAppLeft = null;
            this.$ACT_APP_BT = null;
            this.$ACT_APP_LEFT_BT = null;
            this.$ACT_APP_RIGHT_BT = null;
            this.$ACT_MAIN = null;
            this.$ACT_APP_PERSONSET = null;
            this.$ACT_APP_HELP_BT = null;
            this.$ACT_APP_BACK_BT = null;
            this.$ACT_APP_REFRESH_BT = null;
            //this.$
            this.$ACT_MENU = null;
            this.$ACT_MAP = null;
            this.$ACT_LEFT_NAVI_PANEL = null;
            this.$ACT_LEFT_LONG = null;
            this.$ACT_NAVI_BIG = null;
            this.$ACT_IM_BTN = null;
            this.IsHTV = false;
            this.NoPin = false;
            this.IsVertical = true;
        }
        AppRenderer.prototype.getC = function () {
            return utilFile.Core.Util.Cast(this.C);
        };
        AppRenderer.prototype.initR = function () {
            _super.prototype.initR.call(this);
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
            $.AKjs.asynJs([
                "/AtawStatic/lib/03Extend/silderreveal/jquery.slidereveal.min.js"
            ], function () {
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
            });
            this.$ACT_APP_HELP_BT.unbind("click").bind("click", function () {
                var _locationUrl = window.location.hash.toString();
                var _LocationUrl = _locationUrl.substring(1);
                if (_LocationUrl != "") {
                    var _fun = function (res) {
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
                    };
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
            });
            this.$ACT_TORIGHT_BTN.unbind("click").bind("click", function () {
                _this.getC().LayOut.layOutShowBar(true, false);
            });
            //右侧菜单显示或隐藏
            this.$ACT_SHOWRIGHT_BTN.unbind("click").bind("click", function () {
                _this.getC().LayOut.layOutShowBar(false, false);
            });
            this.$ACT_HIDERIGHT_BTN.unbind("click").bind("click", function () {
                _this.getC().LayOut.layOutShowBar(false, true);
            });
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
            $.AKjs.asynJs([
                "/AtawStatic/lib/03Extend/ddsmoothmenu/ddsmoothmenu.js",
                "/AtawStatic/lib/03Extend/ddsmoothmenu/ddsmoothmenu.css"
            ], function () {
                $("#smoothmenu0").removeClass("ACT_HIDDEN");
                window["ddsmoothmenu"].init({
                    mainmenuid: "smoothmenu0",
                    orientation: 'h',
                    classname: 'ddsmoothmenu',
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
                });
                // Since the event is only triggered when the hash changes, we need to trigger
                // the event now, to handle the hash the page may have loaded with.
                // $(window).hashchange(null);
            });
        };
        ;
        AppRenderer.prototype.reSetPage = function () {
        };
        ;
        AppRenderer.prototype.setIMVisibility = function () {
            var _$im = $(".ACT-IM");
            if (_$im.is(":visible")) {
                _$im.hide();
            }
            else {
                _$im.show();
            }
        };
        AppRenderer.prototype.initIM = function () {
            //var Creator = require("nodeimmrc");
            //var _creator = new Creator();
            //_creator.init($("body"));
        };
        ;
        AppRenderer.prototype.initPublicClubs = function ($dom) {
            //var CircleCreator = require("allcirclemrc");
            //var _creator = new CircleCreator();
            //_creator.setModel(null, null, true);
            //_creator.init($dom);
        };
        ;
        AppRenderer.prototype.toggleHistoryBack = function (isa) {
            this.$ACT_APP_BACK_BT.SwitchClass("disabled", "enable", isa);
        };
        ;
        AppRenderer.prototype.selectTopMenuUrl = function (url) {
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
        ;
        AppRenderer.prototype.selectTopMenu = function (sign) {
            this.$ACT_TOP_MENU.find("a").removeClass("active");
            var _$li = this.$ACT_TOP_MENU.find("#" + sign);
            if (_$li.length > 0) {
                _$li.addClass("active");
            }
        };
        ;
        AppRenderer.prototype.clearTopMenu = function (sign) {
            this.$ACT_TOP_MENU.find("a").removeClass("active");
        };
        ;
        AppRenderer.prototype.getLeft$DomR = function () {
            return this.$ActAppLeft;
        };
        ;
        AppRenderer.prototype.getRight$DomR = function () {
            return this.$ActAppRight;
        };
        ;
        AppRenderer.prototype.getMain$DomR = function () {
            return this.$ACT_MAIN;
            //.find(".ACT-APP-MAIN-PAGE");
        };
        ;
        AppRenderer.prototype.getMenu$DomR = function () {
            return this.$ACT_MENU;
        };
        ;
        AppRenderer.prototype.getSubNaviDomR = function () {
            return this.$JObj.find("#ACT-SUB-NAVI");
        };
        ;
        AppRenderer.prototype.bindDomEventR = function ($dom) {
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
            });
        };
        ;
        //-----------navi------------
        AppRenderer.prototype.getPageNaviDom = function (title) {
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
        ;
        AppRenderer.prototype.clearPageNaviDom = function () {
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
        ;
        AppRenderer.prototype.clearPageWindowDom = function () {
            this.$ACT_MAIN.show();
            $(".PAGE-WINDOW-ACT").remove();
        };
        ;
        //--------------
        AppRenderer.prototype.togglePageNavi = function () {
            if (this.hasLeftNavi()) {
                this.$ACT_PAGE_NAVI.SwitchClass("col-md-3", "col-md-0", true);
                this.$ACT_MAIN.SwitchClass("col-md-9 ", "col-md-12", true);
            }
            else {
                this.$ACT_PAGE_NAVI.SwitchClass("ss col-md-3", "col-md-0", false);
                this.$ACT_MAIN.SwitchClass("col-md-9", "col-md-12", false);
            }
        };
        AppRenderer.prototype.toggleAppBtClassR = function (isTTT) {
            var _$i = this.$ACT_APP_BT.find("i");
            _$i.SwitchClass("icon-align-justify", "icon-align-center", isTTT);
        };
        ;
        AppRenderer.prototype.toggleAppClassR = function (l, m, r, isAdd) {
            this.$ActAppLeft.toggleClass("col-lg-" + l, isAdd);
            this.$ActAppMain.toggleClass("col-lg-" + m, isAdd);
            this.$ActAppRight.toggleClass("col-lg-" + r, isAdd);
            // debugger;
            //alert();
        };
        ;
        AppRenderer.prototype.setAppClassR = function (l, m, r) {
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
        };
        AppRenderer.prototype.toggleLeftLong = function (isLong) {
            this.$ActAppLeft.toggleClass("aks-left-long", isLong);
            var _$i = this.$ACT_LEFT_LONG.find("i");
            this.IsHTV = isLong;
            _$i.SwitchClass("icon-chevron-right", "icon-chevron-left", !isLong);
        };
        ;
        AppRenderer.prototype.setClassR = function ($dom, num) {
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
                }
            }
        };
        AppRenderer.prototype.notifyMesgR = function (msg) {
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
        };
        AppRenderer.prototype.HasMenu = function () {
            return this.$ACT_MENU.length > 0 && this.$ACT_MAP.length > 0;
        };
        ;
        AppRenderer.prototype.bindMenu = function (res, fun) {
            // debugger;
            //alert();
            if (!this.$ACT_MENU.AtawControl()) {
                this.$ACT_MENU["AtawLeftMenuTree"]({
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
        };
        AppRenderer.prototype.openMenu = function (menu) {
            var _obj = this.$ACT_MENU.AtawControl();
            if (_obj) {
                if (_obj.length && _obj.length > 0) {
                    _obj[0].open(menu.Arrange);
                }
                else
                    _obj.open(menu.Arrange);
            }
            _obj = this.$ACT_MAP.AtawControl();
            if (_obj) {
                if (_obj.length && _obj.length > 0) {
                    _obj[0].open(menu.Arrange);
                }
                else
                    _obj.open(menu.Arrange);
            }
        };
        AppRenderer.prototype.hasLeftNavi = function () {
            var _html = this.$ACT_LEFT_NAVI_PANEL.find("#ACT-NAVI-TAB").text();
            // alert(_html + "  "+ _html == "");
            //alert(_html);
            //alert(!(this.$ACT_LEFT_NAVI_PANEL.find("#ACT-NAVI-MENU").html() === ""));
            //alert(_html);
            return _html != "";
        };
        ;
        AppRenderer.prototype.avtiveHeader = function (arrange) {
            this.$ACT_TOP_MENU.find("a").removeClass("active");
            this.$ACT_TOP_MENU.find("a[arrange='" + arrange + "']").addClass("active");
        };
        ;
        AppRenderer.prototype.avtiveDeskHeader = function () {
            this.$ACT_TOP_MENU.find("a").removeClass("active");
            this.$ACT_TOP_MENU.find("a").eq(0).addClass("active");
        };
        ;
        return AppRenderer;
    }(rerFile.AkBaseRenderer));
    exports.AppRenderer = AppRenderer;
});
