import domFile = require("./../../../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import iocFile = require("./../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import urlFile = require("./../../../01core/Url");
import basewedPageFile = require("./../../../04page/BaseWebPage");


import OrgMenuFile = require("./MenuOrgPage/MenuOrg");
import OrgMenu = OrgMenuFile.MenuOrg.MenuOrgReact;
import OrgMenuVm = OrgMenuFile.MenuOrg.MenuOrgVm;
import Data = require("./MenuOrgPage/Data");

export module smmTestPage {
    export class smmTestPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }
    export interface IMainPageConfig {
        MenuOrg: OrgMenuFile.MenuOrg.IMenuOrgRowConfig
    }

    export class smmTestPageReact extends basewedPageFile.Web.BaseWebPageReact<smmTestPageProps, smmTestPageStates, smmTestPageAction> implements domCore.IReact {

        public state = new smmTestPageStates();
        public pSender(): React.ReactElement<any> {
            return <div className={"acs-table-absolute-org"}>
                {this.props.Vm.OrgMenuObj.intoDom() }
                {this.props.Vm.OrgMenuObj.table.rMenuOrgTrailSender() }
            </div>;
        }
    }
    export class smmTestPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = smmTestPageReact;
        public OrgMenuObj = new OrgMenuVm();
        protected loadPage(callback?: () => any) {
            urlFile.Core.AkPost("/RightCloud/RightConfig/fristinit", { FControlUnitID:"1"}, (a) => {
                var  OrgDatas: Data.Menu.IGroupSimpleData[] = [];
                var neworg = a.MenuOrgTable.OrgData;
                OrgDatas.push(neworg)
                var _config1: IMainPageConfig = { MenuOrg: { MenuOrgTable: { MenuData: a.MenuOrgTable.MenuData, OrgData: OrgDatas } } };
                this.OrgMenuObj = new OrgMenuVm(_config1.MenuOrg);
                if (callback) {
                    callback();
                }
            });
            //urlFile.Core.AkPost("/core/WebService/Method?resolver=JsonMethod", { json: "MenuOrg.json" }, (a) => {
            //    var _config1: IMainPageConfig = { MenuOrg: { MenuOrgTable: { MenuData: [], OrgData: [] } } };
            //    if (a) {
            //        _config1.MenuOrg = a;
            //        this.OrgMenuObj = new OrgMenuVm(_config1.MenuOrg);
            //        this.OrgMenuObj.forceUpdate("");
            //        if (callback) {
            //            callback();
            //        }
            //    }
            //});

        }
        protected ReceivePageSend(config: basewedPageFile.Web.IPageActor, obj: any) {
            super.ReceivePageSend(config, obj);
            debugger
            switch (config.FromModulename) {
                case "SMMMENUNEWPAGE":
                    var _objMenu: Data.Menu.IMenuSimpleData = obj;
                    this.OrgMenuObj.table.addMenu(_objMenu.MenuName, _objMenu.Type);
                    break;
                default:
                    break;
            }
        }
    }
    export class smmTestPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class smmTestPageProps extends basewedPageFile.Web.BaseWebPageProps<smmTestPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("smmTestPage", basewedPageFile.Web.BaseWebPageVm, smmTestPageVm);

}

