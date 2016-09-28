define(["require", "exports", "./../01core/Event"], function (require, exports, eventFile) {
    "use strict";
    var BasePageHook = (function () {
        function BasePageHook() {
            var _this = this;
            this.AppEventFunDic = {};
            this.HookId = "HookPage_" + eventFile.App.getUniId();
            this.listenAppEvent("pBeforeFilter", this.HookId, function (data) {
                _this.pBeforeFilter(data);
            });
            this.listenAppEvent("pAfterFilter", this.HookId, function (pageObj) {
                _this.pAfterFilter(pageObj);
            });
            this.listenAppEvent("pBeforeForceUpdate", this.HookId, function (pageObj) {
                _this.pBeforeForceUpdate(pageObj);
            });
            this.listenAppEvent("pAfterForceUpdate", this.HookId, function (pageObj) {
                _this.pAfterForceUpdate(pageObj);
            });
            this.listenAppEvent("dispose", this.HookId, function () {
                _this.dispose();
            });
            this.listenAppEvent("pPageButton", this.HookId, function (data) {
                _this.pPageButton(data.right, data.keys);
            });
        }
        BasePageHook.prototype.dispose = function () {
            if (this.AppEventFunDic) {
                for (var n in this.AppEventFunDic) {
                    if (this.AppEventFunDic[n]) {
                        eventFile.App.GetAppEvent().removeListener(n, this.AppEventFunDic[n]);
                    }
                }
                this.AppEventFunDic = {};
            }
            for (var n in this) {
                this[n] = null;
            }
        };
        BasePageHook.prototype.listenAppEvent = function (name, uniId, fun) {
            this.AppEventFunDic[name + uniId] = fun;
            eventFile.App.GetAppEvent().addListener(name + uniId, fun);
        };
        BasePageHook.prototype.emitAppEvent = function (name, sign) {
            var args = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args[_i - 2] = arguments[_i];
            }
            (_a = eventFile.App.GetAppEvent()).emit.apply(_a, [name + sign].concat(args));
            var _a;
        };
        BasePageHook.prototype.pBeforeFilter = function (data) {
        };
        BasePageHook.prototype.pAfterFilter = function (pageObj) {
        };
        BasePageHook.prototype.pPageButton = function (actionName, ids) {
        };
        BasePageHook.prototype.pBeforeForceUpdate = function (pageObj) {
        };
        BasePageHook.prototype.pAfterForceUpdate = function (pageObj) {
        };
        return BasePageHook;
    }());
    exports.BasePageHook = BasePageHook;
});
