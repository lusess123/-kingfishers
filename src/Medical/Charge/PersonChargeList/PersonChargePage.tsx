import domFile = require("./../../../01core/0Dom");
import iocFile = require("./../../../01core/Ioc");
//import domFile = require("./../01core/0Dom"); 
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
//import iocFile = require("./../01core/Ioc"); 
import urlFile = require("./../../../01core/Url");
import eventFile = require("./../../../01core/Event");
import basewedPageFile = require("./../../../04page/BaseWebPage");
import React = require("react");
import ReactDOM = require("react-dom");

import bottom = require("./PersonChargeBottomDom");
import Form = require("./PersonChargeGridFormDom");
import Note = require("./PersonChargeNoteDom");
import rowBtn = require("./PersonChargeRowBtnDom");
import pagination = require("./../../../05tool/Pagination");

import Data = require("./../../Base/Anomaly/Data");

export module PersonChargePage {

    export class PersonChargePageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string; public Id: string; public Vm: any;
    }

    export class PersonChargePageReact extends basewedPageFile.Web.BaseWebPageReact<PersonChargePageProps, PersonChargePageStates, PersonChargePageAction> implements domCore.IReact {
        public state = new PersonChargePageStates(); public pSender(): React.ReactElement<any> {
            return <div>
                <div className="YSm-table">
                    <div className="YSm-table-title"></div>
                    {this.props.Vm.rowBtn.intoDom() }
                    <div className="table-responsive">
                        {this.props.Vm.table.intoDom() }
                    </div>
                    {this.props.Vm.textbox.intoDom() }
                </div>
                {this.props.Vm.Bottom.intoDom() }
            </div>;
        }

        public _initPager(): React.ReactElement<any> {
            var pagerVm = new pagination.tool.PaginationVm();

            pagerVm.PageNo = 0;
            pagerVm.PageSize = 5;
            pagerVm.TotalCount = 20;
            pagerVm.isPartHidden = true;
            return pagerVm.intoDom();

        }
    }

    export interface IReactPersonChargePageVm extends basewedPageFile.Web.BaseWebPageVm {

    }

    export interface IPersonChargePageConfig {

    }

    export class PersonChargePageVm extends basewedPageFile.Web.BaseWebPageVm implements IReactPersonChargePageVm {
        public ReactType = PersonChargePageReact;
        public Bottom: bottom.PersonChargeBottomDom.PersonChargeBottomDomVm;
        public textbox: Note.PersonChargeNoteDom.PersonChargeNoteDomVm;
        public rowBtn: rowBtn.PersonChargeRowBtnDom.PersonChargeRowBtnDomVm;
        public table: Form.PersonChargeGridFormDom.PersonChargeGridFormDomVm;
        public DataList: Form.PersonChargeGridFormDom.IPersonChargeGridFormDomConfig;

        public keyID: string;
        public UniId = eventFile.App.getUniId().toString();
        public constructor(config?: IPersonChargePageConfig) {
            super();

            this.listenAppEvent("medical/Charge/PersonChargeBottomDom", this.UniId, () => {

                //调用Note里面的方法
                this.textbox.confirmCharge(this.keyID);
            });

        }

        private init(config: IPersonChargePageConfig) {
        }

        protected loadPage(callback?: () => any) {

            this.keyID = this.Param1;
            urlFile.Core.AkPost("/MedicalCenter/MemberCharge/Charge", { fids: this.keyID }, (data) => {
                if (data) {
                    this.DataList = { Data: [] };
                    this.DataList.Data = data.Data;
                    this.textbox = new Note.PersonChargeNoteDom.PersonChargeNoteDomVm();
                    var bottomData = { Amout: "", UniId: this.UniId };
                    bottomData.Amout = data.Content;
                    this.Bottom = new bottom.PersonChargeBottomDom.PersonChargeBottomDomVm(bottomData);
                    this.rowBtn = new rowBtn.PersonChargeRowBtnDom.PersonChargeRowBtnDomVm();
                    this.table = new Form.PersonChargeGridFormDom.PersonChargeGridFormDomVm(this.DataList);
                }
                if (callback) { callback(); }
            })
        }


    }

    export class PersonChargePageStates extends basewedPageFile.Web.BaseWebPageStates { }

    export class PersonChargePageProps extends basewedPageFile.Web.BaseWebPageProps<PersonChargePageVm> { }

    iocFile.Core.Ioc.Current().RegisterType("PERSONCHARGEPAGE", basewedPageFile.Web.BaseWebPageVm, PersonChargePageVm);
}