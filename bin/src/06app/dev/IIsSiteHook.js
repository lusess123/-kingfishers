var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../04page/Hook", "./../../01core/Ioc", "./../../01core/Url"], function (require, exports, HookFile, iocFile, urlFile) {
    "use strict";
    var IIsSiteHook = (function (_super) {
        __extends(IIsSiteHook, _super);
        function IIsSiteHook() {
            _super.apply(this, arguments);
        }
        IIsSiteHook.prototype.pPageButton = function (right, ids) {
            _super.prototype.pPageButton.call(this, right, ids);
            switch (right) {
                case "iisStop":
                    this.iisStop(ids);
                    break;
                case "iisStart":
                    this.iisStart(ids);
                    break;
                case "iisReStart":
                    this.iisReStart(ids);
                    break;
                default:
                    break;
            }
            //alert("hook:  " + right);
        };
        IIsSiteHook.prototype.iisStop = function (ids) {
            urlFile.Core.AkPost("/dev/iis/iisstop", { keys: ids.join(",") }, function (a) {
                if (a == "ok") {
                    urlFile.Core.AkUrl.Current().refresh();
                }
            });
        };
        IIsSiteHook.prototype.iisStart = function (ids) {
            urlFile.Core.AkPost("/dev/iis/iisStart", { keys: ids.join(",") }, function (a) {
                if (a == "ok") {
                    urlFile.Core.AkUrl.Current().refresh();
                }
            });
        };
        IIsSiteHook.prototype.iisReStart = function (ids) {
            urlFile.Core.AkPost("/dev/iis/iisReStart", { keys: ids.join(",") }, function (a) {
                if (a == "ok") {
                    urlFile.Core.AkUrl.Current().refresh();
                }
            });
        };
        return IIsSiteHook;
    }(HookFile.BasePageHook));
    exports.IIsSiteHook = IIsSiteHook;
    iocFile.Core.Ioc.Current().RegisterType("IIsSiteHook", HookFile.BasePageHook, IIsSiteHook);
});
