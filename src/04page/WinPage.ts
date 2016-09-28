import basepage = require("./../03form/Base/BasePage");
import baseWedPage = require("./BaseWebPage");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module ui {

    export class WinPageAction extends basepage.ui.BasePageAction {

    }

    export class WinPageReact extends baseWedPage.Web.BaseWebPageReact<WinPageProps, WinPageStates, WinPageAction> {

    }
    export class WinPageProps extends baseWedPage.Web.BaseWebPageProps<WinPageVm>{



    }

    export class WinPageVm extends baseWedPage.Web.BaseWebPageVm {

    }
    export class WinPageStates extends baseWedPage.Web.BaseWebPageStates {
       
        // public 

    }
}  