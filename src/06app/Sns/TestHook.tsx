// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
import HookFile = require("./../../04page/Hook");
import iocFile = require("./../../01core/Ioc");
import PageView = require("./../../07data/PageView");

export class TestHook extends HookFile.BasePageHook
{
    protected pBeforeFilter(data: PageView.data.IPageView) {
        alert(data.Title + data.TsHook+ "载入之前");
    }

    public dispose() {
        alert("没有了");
        super.dispose();
    }
}

iocFile.Core.Ioc.Current().RegisterType("TestHook", HookFile.BasePageHook, TestHook);

