/// <reference path="../../typings/eventemitter2/eventemitter2.d.ts" />
define(["require", "exports"], function (require, exports) {
    "use strict";
    var App = (function () {
        function App() {
        }
        App.getUniId = function () {
            this.fUniId++;
            return this.fUniId;
        };
        App.initAppEvent = function (event) {
            this.fAppEvent = event;
        };
        App.GetAppEvent = function () {
            if (!this.fAppEvent) {
                this.fAppEvent = new Core.EventBus().HookEvent;
            }
            return this.fAppEvent;
        };
        App.fAppEvent = null;
        App.fUniId = 0;
        return App;
    }());
    exports.App = App;
    var Core;
    (function (Core) {
        var EventBus = (function () {
            function EventBus() {
                this.fEmit = null;
                this.ReactEvent = new BaseEvent(this, "React");
                this.VmEvent = new BaseEvent(this, "Vm");
                this.HookEvent = new BaseEvent(this, "Hook");
                this.CustomEvent = new BaseEvent(this, "Custom");
            }
            EventBus.prototype.FetchEmit = function () {
                if (!this.fEmit) {
                    this.fEmit = $({});
                }
                return this.fEmit;
            };
            EventBus.prototype.RemoveReactEvent = function () {
            };
            return EventBus;
        }());
        Core.EventBus = EventBus;
        var BaseEvent = (function () {
            function BaseEvent(eventBus, name) {
                this.fEventBus = eventBus;
                this.fName = name;
            }
            BaseEvent.prototype.createName = function (name) {
                if (name) {
                    return this.fName + "_" + name;
                }
                else
                    return name;
            };
            BaseEvent.prototype.emit = function (event) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                event = this.createName(event);
                console.log("事件调用： " + event);
                console.log(args);
                this.fEventBus.FetchEmit().trigger(event, args);
                return true;
            };
            ;
            BaseEvent.prototype.removeAllListeners = function (event) {
                if (event) {
                    event = this.createName(event);
                    this.fEventBus.FetchEmit().unbind(event);
                    return null;
                }
                else {
                    //var _events = this.fEventBus.FetchEmit()["_events"];
                    //for (var n in _events) {   
                    //    var nstr: string = n;
                    //    if (nstr.length > this.fName.length) {
                    //        if (nstr.substr(0, this.fName.length) == this.fName) {
                    //            this.fEventBus.FetchEmit().unbind(nstr);
                    //        }
                    //    }
                    //}
                    this.fEventBus.FetchEmit().unbind();
                    return this;
                }
            };
            ;
            //removeAllListeners(events: string[]): IEvent {
            //    return null;
            //};
            BaseEvent.prototype.listeners = function (event) {
                event = this.createName(event);
                // return this.fEventBus.FetchEmit().
                alert("该接口未实现");
                return [];
            };
            ;
            BaseEvent.prototype.removeListener = function (event, listener) {
                event = this.createName(event);
                var gg = listener;
                var f = gg;
                this.fEventBus.FetchEmit().unbind(event, f);
                return this;
            };
            ;
            BaseEvent.prototype.addListener = function (event, listener) {
                console.log("时间注册： " + event);
                event = this.createName(event);
                var gg = listener;
                var f = gg;
                this.fEventBus.FetchEmit().bind(event, function (eventObject) {
                    var args = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        args[_i - 1] = arguments[_i];
                    }
                    //
                    listener.apply(void 0, args);
                });
                return this;
            };
            return BaseEvent;
        }());
        Core.BaseEvent = BaseEvent;
    })(Core = exports.Core || (exports.Core = {}));
});
