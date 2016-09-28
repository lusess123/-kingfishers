// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
import HookFile = require("./../../04page/Hook");
import iocFile = require("./../../01core/Ioc");
import PageView = require("./../../07data/PageView");
import urlFile = require("./../../01core/Url");
import utilFile = require("./../01core/Util");

export class IIsSiteHook extends HookFile.BasePageHook {
    

    protected pPageButton(right: string, ids: string[]) {
        super.pPageButton(right, ids);
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
    }

    private iisStop(ids: string[]) {
        urlFile.Core.AkPost("/dev/iis/iisstop", { keys: ids.join(",") }, (a: string) => {
            if (a == "ok") {
                urlFile.Core.AkUrl.Current().refresh();
            }
        });
    }
    private iisStart(ids: string[]) {
        urlFile.Core.AkPost("/dev/iis/iisStart", { keys: ids.join(",") }, (a: string) => {
            if (a == "ok") {
                urlFile.Core.AkUrl.Current().refresh();
            }
        });
    }
    private iisReStart(ids: string[]) {
        urlFile.Core.AkPost("/dev/iis/iisReStart", { keys: ids.join(",") }, (a: string) => {
            if (a == "ok") {
                urlFile.Core.AkUrl.Current().refresh();
            }
        });
    }

   
}

iocFile.Core.Ioc.Current().RegisterType("IIsSiteHook", HookFile.BasePageHook, IIsSiteHook);

