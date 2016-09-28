var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../core/mcrv/AkBaseController", "./../../../01core/Util", "./cer/AppLayOut", "./cer/AppMenu", "./cer/AppUrl"], function (require, exports, akcerFile, utilFile, layOutFile, menuFile, urlFile) {
    "use strict";
    var AppController = (function (_super) {
        __extends(AppController, _super);
        function AppController() {
            _super.call(this);
            this.IsIframeCheck = false;
            this.LayOut = new layOutFile.AppLayOut(this);
            this.Url = new urlFile.AppUrl(this);
            this.Menu = new menuFile.AppMenu(this);
        }
        AppController.prototype.getR = function () {
            return utilFile.Core.Util.Cast(this.R);
        };
        AppController.prototype.getM = function () {
            return utilFile.Core.Util.Cast(this.M);
        };
        //----------------------入口
        AppController.prototype.initC = function () {
            // alert(3);
            this.Url.IsAppFist = true;
            this.R.initR();
            var _this = this;
            if (this.getR().HasMenu()) {
                this.Menu.loadMenu(function () {
                    _this.getM().FirstUrl = true;
                    _this.Url.getUrl();
                    _this.Url.urlOpen();
                });
            }
            else {
                _this.Url.getUrl();
                // _this.M.IsRouteEvent = true;
                _this.getM().FirstUrl = true;
                _this.Url.urlOpen();
            }
        };
        ;
        AppController.prototype.bindPageEvent = function ($dom) {
            this.getR().bindDomEventR($dom);
        };
        ;
        AppController.prototype.openMenu = function (menuKey) {
        };
        ;
        AppController.prototype.PageHelp = function (_fun, _LocationUrl) {
            this.getM().PageHelp(_fun, _LocationUrl);
        };
        ;
        //--------------------------核心方法--------------------
        AppController.prototype.notifyMesgC = function (msg) {
            this.notifyMesg(msg);
        };
        AppController.prototype.notifyPage = function () {
        };
        ;
        AppController.prototype.notifyMesg = function (msg) {
            //debugger;
            if ($.AKjs.IsIframe) {
                $.AKjs.Iframe(null, null, null, msg);
            }
            else {
                this.getR().notifyMesgR(msg);
            }
        };
        AppController.prototype.exeCommand = function () {
            var _modExe = this[this.getM().ModeName];
            if (_modExe) {
                if (_modExe == "iframe") {
                    this.IsIframeCheck = false;
                }
                else {
                    this.IsIframeCheck = true;
                }
                this[this.getM().ModeName]();
            }
            else {
                this.exe();
            }
        };
        ;
        AppController.prototype.exe = function () {
        };
        AppController.prototype.avtiveHeader = function (arrange) {
            this.getR().avtiveHeader(arrange);
        };
        ;
        return AppController;
    }(akcerFile.AkBaseController));
    exports.AppController = AppController;
});
