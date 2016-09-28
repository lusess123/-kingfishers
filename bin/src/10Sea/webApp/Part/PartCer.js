var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../BasePageCer", "./../../../01core/Util"], function (require, exports, pageCerFile, utilFile) {
    "use strict";
    var PartCer = (function (_super) {
        __extends(PartCer, _super);
        function PartCer() {
            _super.apply(this, arguments);
            this.AppCer = null;
            this.LayOutName = "";
            this.Param1 = null;
            this.Param2 = null;
        }
        PartCer.prototype.getR = function () {
            return utilFile.Core.Util.Cast(this.R);
        };
        PartCer.prototype.getM = function () {
            return utilFile.Core.Util.Cast(this.M);
        };
        PartCer.prototype.init = function () {
            this.InitPageObj();
            this.getR().initR();
        };
        PartCer.prototype.InitPageObj = function () {
            var _app = $.AKjs.AppGet();
            //_app.Url = this.M.Url;
            _app.Param1 = this.Param1;
            _app.Param2 = this.Param2;
        };
        PartCer.prototype.setModel = function (p1, p2, p3) {
            this.getM().Url = p1;
            this.Param1 = p2;
            this.Param2 = p3;
        };
        PartCer.prototype.clearPage = function () {
            var _app = $.AKjs.AppGet();
            if (_app.DisposePage) {
                //因为无法预料，必须要加异常判断....
                try {
                    _app.DisposePage(this);
                }
                catch (tt) {
                    if (console && console.log)
                        console.log(tt);
                    $.AKjs.App.notifyMesg("页面销毁有出现异常:" + tt);
                }
                finally {
                    _app.DisposePage = null;
                }
            }
            _app.Param1 = null;
            _app.Param2 = null;
            _app.AutoMenu = true;
            //alert("清除页面");
            _app.hideNavi();
            _app.clearWindow();
        };
        ;
        return PartCer;
    }(pageCerFile.BasePageCer));
    exports.PartCer = PartCer;
});
