import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
//import domFile = require("./../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import basewedPageFile = require("./../../../../04page/BaseWebPage");
import React = require("react");
import ReactDOM = require("react-dom");

import tabDomFile = require("./../../../../05tool/TabDom");
import PersonalPayFile = require("./PersonalPayDom");
import PersonalPay = PersonalPayFile.PersonalPayDom.PersonalPayDomReact;
import PersonalPayVm = PersonalPayFile.PersonalPayDom.PersonalPayDomVm;
import GroupPayFile = require("./GroupPayDom");
import GroupPay = GroupPayFile.GroupPayDom.GroupPayDomReact;
import GroupPayVm = GroupPayFile.GroupPayDom.GroupPayDomVm;

export module PayListPage {
    export class PayListPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class PayListPageReact extends basewedPageFile.Web.BaseWebPageReact<PayListPageProps, PayListPageStates, PayListPageAction> implements domCore.IReact {

        public state = new PayListPageStates();
        public pSender(): React.ReactElement<any> {
            return <div className="YSm-tab-content">
                {this.props.Vm.TabDomObj.intoDom() }
            </div>;
        }






    }

    export interface IReactPayListPageVm extends basewedPageFile.Web.BaseWebPageVm {
        TabDomObj: tabDomFile.TabDom.TabDomVm;
    }

    export interface IPayListPageConfig {


    }
    export class PayListPageVm extends basewedPageFile.Web.BaseWebPageVm implements IReactPayListPageVm {
        public ReactType = PayListPageReact;

        public TabDomObj: tabDomFile.TabDom.TabDomVm;
        public PersonalPayObj: PersonalPayFile.PersonalPayDom.PersonalPayDomVm;;
        public GroupPayObj: GroupPayFile.GroupPayDom.GroupPayDomVm;;

        public constructor(config?: IPayListPageConfig) {
            super();
            this.PersonalPayObj = new PersonalPayFile.PersonalPayDom.PersonalPayDomVm;
            this.GroupPayObj = new GroupPayFile.GroupPayDom.GroupPayDomVm;
            this.TabDomObj = new tabDomFile.TabDom.TabDomVm({
                Items: [
                    {
                        Name: "PersonalPay",
                        Title: "个体缴费",
                        IsActive: true,
                        //ReloadFun: (vm) => {
                        //    utilFile.Core.Util.Cast<BatchDetailFile.BatchDetailDom.BatchDetailDomVm>(vm).loadData(
                        //        () => { vm.forceUpdate(""); }
                        //    );
                        //},
                        DomObj: this.PersonalPayObj
                    },
                    {
                        Name: "GroupPay",
                        Title: "团体缴费",
                        IsActive: false,
                        //ReloadFun: (vm) => {
                        //    utilFile.Core.Util.Cast<GroupRuleFile.GroupRuleDom.GroupRuleDomVm>(vm).sysPage_load(() => {
                        //        vm.forceUpdate("");
                        //    });
                        //},
                        DomObj: this.GroupPayObj
                    }
                ]
            });
        }

        private init(config: IPayListPageConfig) {
        }

        protected loadPage(callback?: () => any) {
            if (callback) {
                callback();
            }
        }

    }
    export class PayListPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class PayListPageProps extends basewedPageFile.Web.BaseWebPageProps<IReactPayListPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("PayListPage", basewedPageFile.Web.BaseWebPageVm, PayListPageVm);

}
