
import eventFile = require("./../../01core/Event");
import utilFile = require("./../../01core/Util");
export namespace SocketIo
{
    export class NodeClient
    {
        private fEventBus: eventFile.Core.EventBus;
        private fNoFirstEvent: boolean = false;

        private Socket: any;

        public constructor()
        {          
        }

        public init(url: string) {
            require(["/AtawStatic/lib/03Extend/socketio/socket.io.min.js"], () => {
                this.Socket = window["io"].connect(url);
                if (!this.fNoFirstEvent) {
                    this.Socket.on('connect', (msg) => {
                        if (!this.fNoFirstEvent) {
                            if ($.AKjs.LoginId) {
                                //alert($.AKjs.LoginId);
                                this.Socket.emit("setclientid", $.AKjs.LoginId);
                                utilFile.Core.Util.Noty("欢迎来到Ataw大平台");
                            } else {
                                alert("请登录");
                            }
                            this.fNoFirstEvent = true;
                        }
                        else
                        {
                            if ($.AKjs.LoginId) {
                                this.Socket.emit("setclientid", $.AKjs.LoginId);
                                utilFile.Core.Util.Noty("重新连上了");
                            } else {
                                alert("请登录");
                            }
                        }
                        
                    });

                    this.Socket.on('error',()=>{
                        utilFile.Core.Util.Noty("连接 IM 发生异常");
                        //_this.showInfo();
                    });

                    this.Socket.on('disconnect', ()=> {
                        utilFile.Core.Util.Noty("断线了");
                       // _this.showInfo();
                    });
                    this.Socket.on('resclientid',  (a:string)=> {
                        //_this.notifyMesg("断线了");
                        utilFile.Core.Util.Noty(a);
                        
                       // _this.showInfo();
                    });

                    this.Socket.on('notify', ()=> {
                        //_this.notifyMesg("断线了");
                        utilFile.Core.Util.Noty("有消息到达...");
                        this.fEventBus.CustomEvent.emit("notify");
                        eventFile.App.GetAppEvent().emit("notify");
                    });





                }
            });
        }

        public getEmit(): eventFile.Core.IEvent {
            if (!this.fEventBus) {
                this.fEventBus = new eventFile.Core.EventBus();
            }
            return this.fEventBus.CustomEvent;
        }
    }
}