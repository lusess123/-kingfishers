import domFile = require("./../../../01core/0Dom");
import iocFile = require("./../../../01core/Ioc");
//import domFile = require("./../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import basewedPageFile = require("./../../../04page/BaseWebPage");
import React = require("react");
export module wmhTestPage {
    export class wmhTestPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class wmhTestPageReact extends basewedPageFile.Web.BaseWebPageReact<wmhTestPageProps, wmhTestPageStates, wmhTestPageAction> implements domCore.IReact {

        public state = new wmhTestPageStates();

        

        public pSender(): React.ReactElement<any> {

            return <div>
                    <h1>wmh测试页面</h1>
                </div>;
        }






    }
    export class wmhTestPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = wmhTestPageReact;


    }
    export class wmhTestPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class wmhTestPageProps extends basewedPageFile.Web.BaseWebPageProps<wmhTestPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("WMHTESTPAGE", basewedPageFile.Web.BaseWebPageVm, wmhTestPageVm);

}

