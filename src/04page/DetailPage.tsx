import basepage = require("./../03form/Base/BasePage");
import iocFile = require("./../01core/Ioc");
//import urlFile = require("./../01core/Url");
//import postFile = require("./../01core/post");
//import PageView = require("./../07data/PageView");
//import listPage = require("./ListPage");
import utilFile = require("./../01core/Util");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
import BaseFormFile = require("./../03form/Base/BaseForm");

export module ui {

    export class DetailPageAction extends basepage.ui.BasePageAction {

    }

    export class DetailPageReact extends basepage.ui.BasePageReact<DetailPageProps, DetailPageStates, DetailPageAction> {

        protected pComponentWillMount(): void {
            super.pComponentWillMount();
            // alert("List页面注册变更事件");
        }
        public pSender(): React.ReactElement<any> {
            return super.pSender();
        };

    }

    export class DetailPageProps extends basepage.ui.BasePageProps<DetailPageVm>{

       
    }

    export class DetailPageVm extends basepage.ui.BasePageVm {
        public ReactType = DetailPageReact;
        public pRegName = "DetailPage";

        protected pSetForeachForm(form: BaseFormFile.ui.BaseFormVm) {
            super.pSetForeachForm(form);
            form.IsNoAdd = true;
            form.IsNoDel = true;
        }
    }

    export class DetailPageStates extends basepage.ui.BasePageStates {
       
        // public 

    }
    iocFile.Core.Ioc.Current().RegisterType("DETAIL", basepage.ui.BasePageVm, DetailPageVm);
}