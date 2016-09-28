
import eventFile = require("./../01core/Event");

import PageView = require("./../07data/PageView");
export interface IFunDic {
    [name: string]: Function;
}

export interface IPageButton {
    right: string;
    keys :string[]
}
export class BasePageHook 
{
    protected AppEventFunDic: IFunDic = {};
    public HookId: string;

    public constructor() {
        this.HookId = "HookPage_" + eventFile.App.getUniId();
        this.listenAppEvent("pBeforeFilter", this.HookId, (data: PageView.data.IPageView) => {
            this.pBeforeFilter(data);
        });
        this.listenAppEvent("pAfterFilter", this.HookId, (pageObj: any) => {
            this.pAfterFilter(pageObj);
        });
        this.listenAppEvent("pBeforeForceUpdate", this.HookId, (pageObj: any) => {
            this.pBeforeForceUpdate(pageObj);
        });
        this.listenAppEvent("pAfterForceUpdate", this.HookId, (pageObj: any) => {
            this.pAfterForceUpdate(pageObj);
        });
        this.listenAppEvent("dispose", this.HookId, () => {
            this.dispose();
        });

        this.listenAppEvent("pPageButton", this.HookId, (data: IPageButton) => {
            this.pPageButton(data.right, data.keys);
        });
    }

    public dispose()
    {
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
    }
     

    protected listenAppEvent(name: string, uniId: string, fun: Function) {
        this.AppEventFunDic[name + uniId] = fun;
        eventFile.App.GetAppEvent().addListener(name + uniId, fun);
    }
    protected emitAppEvent(name: string, sign: string, ...args: any[]) {
        eventFile.App.GetAppEvent().emit(name + sign, ...args);
    }

    protected pBeforeFilter(data: PageView.data.IPageView) {
    }
    protected  pAfterFilter(pageObj: any) {
    }
    protected pPageButton(actionName: string, ids: string[])
    {
    }
    protected  pBeforeForceUpdate(pageObj: any) {
    }
    protected  pAfterForceUpdate(pageObj: any) {
    }
}



