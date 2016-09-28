import domFile = require("./../../../01core/0Dom");
import iocFile = require("./../../../01core/Ioc");
//import domFile = require("./../01core/0Dom"); 
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import basewedPageFile = require("./../../../04page/BaseWebPage");

import React = require("react");
import Form = require("./../PersonChargeList/PersonChargeGridFormDom");
import ReactDOM = require("react-dom");

export module PersonItemDetailPage {
    export class PersonItemDetailPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string; public Id: string; public Vm: any;
    }

    export class PersonItemDetailPageReact extends basewedPageFile.Web.BaseWebPageReact<PersonItemDetailPageProps, PersonItemDetailPageStates, PersonItemDetailPageAction> implements domCore.IReact {
        public state = new PersonItemDetailPageStates(); public pSender(): React.ReactElement<any> {
            return <div className="table-responsive">
                {this._tDom(this.props.Vm.table)}
            </div>;
        }
    }

    export interface IReactPersonItemDetailPageVm extends basewedPageFile.Web.BaseWebPageVm {

        table: Form.PersonChargeGridFormDom.PersonChargeGridFormDomVm
    }

    export interface IPersonItemDetailPageConfig {

    }

    export class PersonItemDetailPageVm extends basewedPageFile.Web.BaseWebPageVm implements IReactPersonItemDetailPageVm {
        public ReactType = PersonItemDetailPageReact;
        public keyID: string;
        public table: Form.PersonChargeGridFormDom.PersonChargeGridFormDomVm;
        public DataList: Form.PersonChargeGridFormDom.IPersonChargeGridFormDomConfig;
        public constructor(config?: IPersonItemDetailPageConfig) {
            super();
        }

        private init(config: IPersonItemDetailPageConfig)
        { }

        protected loadPage(callback?: () => any) {

            this.keyID = this.Param1;
            urlFile.Core.AkPost("/MedicalCenter/MemberCharge/Charge", { fids: this.keyID }, (data) => {
                if (data) {
                    this.DataList = { Data: [] };
                    this.DataList.Data = data.Data;
                    var bottomData = { Amout: "", UniId: this.UniId };
                    bottomData.Amout = data.Content;
                    this.table = new Form.PersonChargeGridFormDom.PersonChargeGridFormDomVm(this.DataList);
                }
                if (callback) { callback(); }
            })
        }
    }

    export class PersonItemDetailPageStates extends basewedPageFile.Web.BaseWebPageStates { }

    export class PersonItemDetailPageProps extends basewedPageFile.Web.BaseWebPageProps<IReactPersonItemDetailPageVm> { }

    iocFile.Core.Ioc.Current().RegisterType("PERSONITEMDETAILPAGE", basewedPageFile.Web.BaseWebPageVm, PersonItemDetailPageVm);
}