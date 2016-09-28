
/// <reference path="../../typings/eventemitter2/eventemitter2.d.ts" />

export class App {
    private static fAppEvent: Core.IEvent = null;
    private static fUniId: number = 0;

    public static getUniId():number
    {
        this.fUniId++;
        return this.fUniId;
    }

    public static initAppEvent(event: Core.IEvent) {
        this.fAppEvent = event;
    }

    public static GetAppEvent(): Core.IEvent {
        if (!this.fAppEvent) {
            this.fAppEvent = new Core.EventBus().HookEvent;
        }
        return this.fAppEvent;
    }
}

export namespace Core {

   

   

    export class EventBus {
        private fEmit: JQuery = null;
        public FetchEmit()
        {
            if (!this.fEmit) {
                this.fEmit = $({});
                //this.fEmit.setMaxListeners(0);
               // this.fEmit.
            }
            return this.fEmit;
        }

        public constructor() {
            this.ReactEvent = new BaseEvent(this,"React");
            this.VmEvent = new BaseEvent(this, "Vm");
            this.HookEvent = new BaseEvent(this, "Hook");
            this.CustomEvent = new BaseEvent(this, "Custom");
        }

        public ReactEvent: IEvent;
        public VmEvent: IEvent;
        public HookEvent: IEvent;
        public CustomEvent: IEvent;

        public RemoveReactEvent()
        {

        }
    }



    export interface IEvent {
        emit(event: string, ...args: any[]): boolean;
        removeAllListeners(event?: string): IEvent;
        listeners(event: string): Function[];
        removeListener(event: string, listener: Function): IEvent;
        addListener(event: string, listener: Function): IEvent;
    }

    export class BaseEvent implements IEvent {
        private fEventBus: EventBus;

        public constructor(eventBus: EventBus,name:string) {
            this.fEventBus = eventBus;
            this.fName = name;
        }

        protected fName: string;

        private createName(name: string): string {
            if (name) {
                return this.fName + "_" + name;
            }
            else
                return name;
        }



        public emit(event: string, ...args: any[]): boolean {
            event = this.createName(event);
            console.log("事件调用： " + event);
            console.log(args);
            this.fEventBus.FetchEmit().trigger(event, args);
            return true;
        };
        public removeAllListeners(event?: string): IEvent {
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
        //removeAllListeners(events: string[]): IEvent {
        //    return null;
        //};
        public listeners(event: string): Function[] {
            event = this.createName(event);
           // return this.fEventBus.FetchEmit().
            alert("该接口未实现");
            return [];
        };
        public removeListener(event: string, listener: Function): IEvent {
            event = this.createName(event);
            var gg: any = listener;
            var f: (eventObject: JQueryEventObject) => any = gg;
            this.fEventBus.FetchEmit().unbind(event, f);
            return this;
        };
        public addListener(event: string, listener: Function): IEvent {
            console.log("时间注册： " + event);
            event = this.createName(event);
            var gg: any = listener;
            var f: (eventObject: JQueryEventObject) => any = gg;
            this.fEventBus.FetchEmit().bind(event, (eventObject: JQueryEventObject,...args: any[]) => {
                //
                listener(...args);
            });
            return this;
        }
    }


}
