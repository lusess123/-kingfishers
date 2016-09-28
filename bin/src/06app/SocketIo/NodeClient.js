define(["require", "exports", "./../../01core/Event", "./../../01core/Util"], function (require, exports, eventFile, utilFile) {
    "use strict";
    var SocketIo;
    (function (SocketIo) {
        var NodeClient = (function () {
            function NodeClient() {
                this.fNoFirstEvent = false;
            }
            NodeClient.prototype.init = function (url) {
                var _this = this;
                require(["/AtawStatic/lib/03Extend/socketio/socket.io.min.js"], function () {
                    _this.Socket = window["io"].connect(url);
                    if (!_this.fNoFirstEvent) {
                        _this.Socket.on('connect', function (msg) {
                            if (!_this.fNoFirstEvent) {
                                if ($.AKjs.LoginId) {
                                    //alert($.AKjs.LoginId);
                                    _this.Socket.emit("setclientid", $.AKjs.LoginId);
                                    utilFile.Core.Util.Noty("欢迎来到Ataw大平台");
                                }
                                else {
                                    alert("请登录");
                                }
                                _this.fNoFirstEvent = true;
                            }
                            else {
                                if ($.AKjs.LoginId) {
                                    _this.Socket.emit("setclientid", $.AKjs.LoginId);
                                    utilFile.Core.Util.Noty("重新连上了");
                                }
                                else {
                                    alert("请登录");
                                }
                            }
                        });
                        _this.Socket.on('error', function () {
                            utilFile.Core.Util.Noty("连接 IM 发生异常");
                            //_this.showInfo();
                        });
                        _this.Socket.on('disconnect', function () {
                            utilFile.Core.Util.Noty("断线了");
                            // _this.showInfo();
                        });
                        _this.Socket.on('resclientid', function (a) {
                            //_this.notifyMesg("断线了");
                            utilFile.Core.Util.Noty(a);
                            // _this.showInfo();
                        });
                        _this.Socket.on('notify', function () {
                            //_this.notifyMesg("断线了");
                            utilFile.Core.Util.Noty("有消息到达...");
                            _this.fEventBus.CustomEvent.emit("notify");
                            eventFile.App.GetAppEvent().emit("notify");
                        });
                    }
                });
            };
            NodeClient.prototype.getEmit = function () {
                if (!this.fEventBus) {
                    this.fEventBus = new eventFile.Core.EventBus();
                }
                return this.fEventBus.CustomEvent;
            };
            return NodeClient;
        }());
        SocketIo.NodeClient = NodeClient;
    })(SocketIo = exports.SocketIo || (exports.SocketIo = {}));
});
