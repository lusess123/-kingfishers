
import domFile = require("./../../../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import iocFile = require("./../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../01core/Util");
import urlFile = require("./../../../01core/Url");
import basewedPageFile = require("./../../../04page/BaseWebPage");

export module OrgListPage {
    export class OrgListPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class OrgListPageReact extends basewedPageFile.Web.BaseWebPageReact<OrgListPageProps, OrgListPageStates, OrgListPageAction> implements domCore.IReact {

        public state = new OrgListPageStates();
        public pSender(): React.ReactElement<any> {
            return <div>OrgListPage的页面</div>;
        }






    }
    export class OrgListPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = OrgListPageReact;


    }
    export class OrgListPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class OrgListPageProps extends basewedPageFile.Web.BaseWebPageProps<OrgListPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("ORGLISTPAGE", basewedPageFile.Web.BaseWebPageVm, OrgListPageVm);

}