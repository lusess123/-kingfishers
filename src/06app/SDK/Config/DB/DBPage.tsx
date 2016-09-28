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
import eventFile = require("./../../../../01core/Event");

import EditSpanFile = require("./../../../../05tool/EditSpan");
import ESpan = EditSpanFile.EditSpan.EditSpanReact;
import ESpanVm = EditSpanFile.EditSpan.EditSpanVm;

import RadioFile = require("./../../../../02col/01single/Radio");
import Radio = RadioFile.ui.RadioReact;
import RadioVm = RadioFile.ui.RadioVm;

import singleCheckFile = require("./../../../../02col/02Mulite/SingleCheckBox");

import ComboFile = require("./../../../../02col/02Mulite/Combo");
import Combo = ComboFile.ui.ComboReact;
import ComboVm = ComboFile.ui.ComboVm;

import SingleCheckBoxFile = require("./../../../../02col/02Mulite/SingleCheckBox");
import SingleCheckBox = SingleCheckBoxFile.ui.SingleCheckBoxReact;
import SingleCheckBoxVm = SingleCheckBoxFile.ui.SingleCheckBoxVm;

import ConfigData = require("./../Data");

import DBForm = require("./DBPageGirdForm");

export module DBPage {
    export class DBPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class DBPageReact extends basewedPageFile.Web.BaseWebPageReact<DBPageProps, DBPageStates, DBPageAction> implements domCore.IReact {

        public state = new DBPageStates();
        public pSender(): React.ReactElement<any> {
            return <div>
               <div className="well"><h6 className="Hu-title Hs-fw ">基础设置</h6><span></span></div>
              {this.props.Vm.DBFrom.intoDom() }
            </div>;
        }
    }

    export interface IReactDBPageVm extends basewedPageFile.Web.BaseWebPageVm {
        DBFrom: DBForm.DBPageGirdForm.DBPageGirdFormVm;
    }

    export interface IDBPageConfig {

    }

    export class DBPageVm extends basewedPageFile.Web.BaseWebPageVm   {
        public ReactType = DBPageReact;
        public Title: string = "DBPage页面;";

        public DBList: Array<ConfigData.ConfigData.DBSubmit>;
        public DB: ConfigData.ConfigData.DBData;
        public DBFrom: DBForm.DBPageGirdForm.DBPageGirdFormVm;

        public constructor(config?: IDBPageConfig) {
            super();
        }

        private init(config: IDBPageConfig) {
        }

        protected loadPage(callback?: () => any) {
            this.UniId = eventFile.App.getUniId().toString();
            urlFile.Core.AkPost("/Dev/DB/GetDBXml", {}, (a) => {
                this.DBList = a.Databases;
                var config: DBForm.DBPageGirdForm.IDBPageGirdFormConfig = { Data: this.DBList, Unid: this.UniId };
                this.DBFrom = new DBForm.DBPageGirdForm.DBPageGirdFormVm(config);
                if (callback) {
                    callback();
                }
            });

        }
    }
    export class DBPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class DBPageProps extends basewedPageFile.Web.BaseWebPageProps<IReactDBPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("ZHMDBPAGE", basewedPageFile.Web.BaseWebPageVm, DBPageVm);

}
