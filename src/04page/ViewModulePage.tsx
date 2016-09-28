// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

import ViewpageFile = require("./Viewpage");
import basewedPage = require("./BaseWebPage");
import iocFile = require("./../01core/Ioc");
namespace ViewModulePage {

    export class ViewModulePageReact extends ViewpageFile.Page.BaseWebViewPageReact<ViewModulePageProps, ViewpageFile.Page.WebViewPageStates, ViewpageFile.Page.WebViewPageAction>{

    }

    export class ViewModulePageVm extends ViewpageFile.Page.WebViewPageVm {
        public ReactType: any = ViewModulePageReact;
        public IsView: boolean = true;
    }

    export class ViewModulePageProps extends basewedPage.Web.BaseWebPageProps<ViewModulePageVm>{
    }
    iocFile.Core.Ioc.Current().RegisterType("VIEW", basewedPage.Web.BaseWebPageVm, ViewModulePageVm);
}
