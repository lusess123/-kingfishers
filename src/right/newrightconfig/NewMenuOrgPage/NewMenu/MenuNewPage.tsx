import domFile = require("./../../../../01core/0Dom"); import React = require("react");

import iocFile = require("./../../../../01core/Ioc");


import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import basewedPageFile = require("./../../../../04page/BaseWebPage");

import MenuNewRowFile = require("./MenuNewRow");
import MenuNewVm = MenuNewRowFile.MenuNewRow.MenuNewRowVm;
export module MenuNewPage {
    export class MenuNewPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class MenuNewPageReact extends basewedPageFile.Web.BaseWebPageReact<MenuNewPageProps, MenuNewPageStates, MenuNewPageAction> implements domCore.IReact {

        public state = new MenuNewPageStates();
        public pSender(): React.ReactElement<any> {

            return <div className="Hm-modals">                
                    <h4>新增</h4>
                    {this.props.Vm.MenuRowObj.intoDom() }
                    <div className="text-center">
                        <a className="btn btn-sm btn-primary" onClick={() => { this.fun_submitBtn() } } >提交</a>
                    </div>           
            </div>;
        }
        private fun_submitBtn() {

            this.props.Vm.submit();
        }
    }
    export interface IMenuNewPageConfig {

        MenuNew: MenuNewRowFile.MenuNewRow.IMenuNewRowConfig;
    }
    export class MenuNewPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = MenuNewPageReact;
        public Name: string;
        public MenuName: string;
        public BtnName: string;
        public toPage: string;
        public type: string = "All";
        public MenuRowObj = new MenuNewVm();
        public constructor() {
            super();
            this.MenuRowObj = new MenuNewVm();
        }
        public submit() {
            var menuInsert = this.MenuRowObj.menuMasterObj;
            // var isSuccess = menuInsert.legal();
            if (true) {
                //debugger
                this.Name = menuInsert.NameData.Name;
                if (this.type == "All") {
                    this.type = menuInsert.NameData.RowType;
                }
                this.SendPageActor({ ToPanelName: "", ToModuleName: "NewRightMainPage" }, { MenuName: this.Name, Type: this.type, RightValue: menuInsert.NameData.RightValue });
                this.closePage();
            }
        }
        protected loadPage(callback?: () => any) {
            var _keys = this.Param1;
            this.type = _keys
            var _config: IMenuNewPageConfig = { MenuNew: { MenuNewRow: { rowType: _keys } } };
            this.MenuRowObj = new MenuNewVm(_config.MenuNew);
            if (callback) {
                callback();
            }
        }

    }
    export class MenuNewPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class MenuNewPageProps extends basewedPageFile.Web.BaseWebPageProps<MenuNewPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("NWEMENUNEWPAGE", basewedPageFile.Web.BaseWebPageVm, MenuNewPageVm);

}

