var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./AppController", "./../../../01core/Ioc", "./../../core/IPage", "./../Default/ts/WebPageMRC"], function (require, exports, appFile, iocFile, iPageFile, webPageFile) {
    "use strict";
    var AppMainController = (function (_super) {
        __extends(AppMainController, _super);
        function AppMainController() {
            _super.call(this);
            this.CurrentChatUsers = [];
            this.Chat = null;
            this.$CHATBOX = null;
            this.$CHATBOXMINI = null;
            this.IsPushNotice = false;
            this.IsNewMailPage = false;
            this.$CHATBOX = $("<div class='ACT-CHATBOX acs-chatbox'>" +
                "<div class='ACT-CHATBOX-HEAD acs-chatbox-head'>" +
                "<div class='ACT-CHATBOX-USERLIST pull-left' />" +
                "<div class='ACT-CHATBOX-OPTIONS acs-chatbox-options'>" +
                "<a class='ACT-MINIMIZED'><i class='icon-minus'/></a>" +
                "<a class='ACT-CLOSE'><i class='icon-remove'/></a>" +
                "</div>" +
                "</div>" +
                "<div class='ACT-CHATBOX-CONTENT  acs-chatbox-content'style=' overflow-y: auto;'></div>" +
                "<div class='ACT-SEND-BAR acs-send-bar'>" +
                "<a class='ACT-EMOTION acs-emotion'></a>" +
                "<a class='ACT-CHAT-HISTORY ACT-A-HREF acs-href pull-right' href='#'><i class='icon-building'></i>消息记录</a>" +
                "</div>" +
                "<div class='ACT-CHATBOX-INPUT'>" +
                "<textarea class='ACT-CHATBOX-TEXTAREA  acs-chatbox-input' id='chatbox-input'></textarea>" +
                "</div>" +
                "<div class='ACT-SEND acs-send'>" +
                "<a class='acs-send-green ACT-SEND-BTN'>发送（CTRL+回车）</a>" +
                "<a class='acs-send-red ACT-CLOSE'>关闭</a>" +
                "</div>" +
                "</div>");
            this.$CHATBOXMINI = $("<div class='ACT-CHATBOX-MINI acs-chatbox-mini acs-chatbox-head'></div>");
        }
        //-----------Navi
        AppMainController.prototype.showNavi = function (title) {
            //alert(123);
            return this.getR().getPageNaviDom(title);
        };
        ;
        AppMainController.prototype.hideNavi = function () {
            // alert();
            this.getR().clearPageNaviDom();
        };
        ;
        AppMainController.prototype.clearWindow = function () {
            // alert();
            this.getR().clearPageWindowDom();
        };
        ;
        AppMainController.prototype.reloadToggle = function ($dom) {
            this.getR().bindDomEventR($dom);
        };
        ;
        AppMainController.prototype.openUrl = function (newUrl, openFun) {
            this.Url.openUrl(newUrl, openFun);
        };
        ;
        AppMainController.prototype.selectTopMenuUrl = function () {
            this.getR().selectTopMenuUrl(this.getM().SignUrl);
        };
        ;
        AppMainController.prototype.selectTopMenu = function (sign) {
            this.getR().selectTopMenu(sign);
        };
        ;
        AppMainController.prototype.CreateAsyFun = function (sea) {
            if (sea != null) {
                //  sea = new sea();
                var _regName = this.getM().ModeName.toLowerCase();
                //alert(_regName.substring(0, 4).toUpperCase());
                if ((_regName.length > 3 && _regName.substring(0, 3).toUpperCase() == "WIN") || (_regName.length > 5 && _regName.substring(0, 5).toUpperCase() == "PANEL")) {
                    if (this.getM().WinObj != null) {
                        //_this.M.UrlObj.clearPage(_this.R.getMain$DomR());
                        this.getM().WinObj.dispose();
                        this.getM().WinObj = null;
                    }
                    this.getM().WinObj = sea;
                }
                else {
                    if (this.getM().WinObj != null) {
                        //_this.M.UrlObj.clearPage(_this.R.getMain$DomR());
                        this.getM().WinObj.dispose();
                        this.getM().WinObj = null;
                    }
                    if (this.getM().UrlObj != null) {
                        this.getM().UrlObj.clearPage(this.getR().getMain$DomR());
                        this.getM().UrlObj.dispose();
                        this.getM().PagerObj = null;
                    }
                    this.getM().UrlObj = sea;
                }
                sea.setModel(this.getM().Param1, this.getM().Param2, this.getM().Param3);
                //sea.loadLeft(_this.R.getLeft$DomR());
                //sea.loadRight(_this.R.getRight$DomR());
                sea.loadMenu(this.R.$JObj);
                sea.loadLayOut();
                sea.loadMain(this.getR().getMain$DomR());
                $("#apDiv1").remove();
            }
            else {
                alert("名称为: " + this.getM().ModeName + "  的路由未定义 ");
                $("#apDiv1").hide("slow");
            }
        };
        ;
        AppMainController.prototype.exe = function () {
            var _this = this;
            //-------------
            var _iframe = $("#frame_content");
            _iframe.hide();
            this.getR().getSubNaviDomR().hide();
            $.AKjs = $.AKjs ? $.AKjs : {};
            $.AKjs.IsMenu = false;
            this.IsNewMailPage = false;
            var _url = null;
            var _regName = this.getM().ModeName.toLowerCase();
            // require["async"](_regName + "mrc", this.CreateAsyFun());
            iocFile.Core.Ioc.Current().FetchAsyInstance(_regName, iPageFile.PageFace, function (a) {
                _this.CreateAsyFun(a);
            }, function () {
                alert("页面载入异常");
            }, {
                NullFun: function (name, baseStr) {
                    //  alert(name + " 不存在 ");
                    var _webPageMrc = new webPageFile.WebPageMRC();
                    _webPageMrc.setRegName(name);
                    _this.CreateAsyFun(_webPageMrc);
                }
            });
        };
        ;
        AppMainController.prototype.iframe = function () {
            this.getR().getSubNaviDomR().hide();
            if (this.getM().UrlObj != null) {
                this.getM().UrlObj.clearPage(this.getR().getMain$DomR());
            }
            this.getR().getMain$DomR().append($('<iframe frameborder=0  id="frame_content" scrolling="no"  style="display:none; width:100%;height:100%"></iframe>'));
            var _iframe = $("#frame_content");
            _iframe.attr("src", this.getM().Param1);
            _iframe.show();
            //alert(123);
            window["IsIframeCheck"] = false;
            this.LayOut.layOutTransFormPage("VTV");
        };
        return AppMainController;
    }(appFile.AppController));
    exports.AppMainController = AppMainController;
});
