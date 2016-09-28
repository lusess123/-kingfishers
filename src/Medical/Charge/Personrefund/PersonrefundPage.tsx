import domFile = require("./../../../01core/0Dom");
import iocFile = require("./../../../01core/Ioc");
//import domFile = require("./../01core/0Dom"); 
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
//import iocFile = require("./../01core/Ioc"); 
import urlFile = require("./../../../01core/Url");
import basewedPageFile = require("./../../../04page/BaseWebPage");
import React = require("react");
import ReactDOM = require("react-dom");
import DataFile = require("./../../Base/Anomaly/Data");
import textFile = require("./../../../02col/01single/Text");

export module PersonrefundPage {
    export class PersonrefundPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class PersonrefundPageReact extends basewedPageFile.Web.BaseWebPageReact<PersonrefundPageProps, PersonrefundPageStates, PersonrefundPageAction> implements domCore.IReact {
        public state = new PersonrefundPageStates(); public pSender(): React.ReactElement<any> {
            return <div className="p-a-lg Hg-w60 Hg-m-auto">
                <div className="form-group form-inline clearfix">
                    <label className="col-md-4 col-sm-3  form-control-label text-right">退款原因：</label>
                    <div className="col-md-7 col-sm-9 ">{this._tDom(this.props.Vm.RefundReason) }</div>
                </div>
                <div>
                    <label className="col-md-4 col-sm-3  form-control-label text-right">退款金额：</label>
                    <div className="col-md-7 col-sm-9 ">{this._tDom(this.props.Vm.RefundAmount) }</div>
                </div>

                <div className="m-t text-center"><a className="btn  btn-sm  btn-primary" onClick={() => { this.props.Vm.refund() } }>确定退款</a></div>
            </div>;
        }
    }

    export interface IReactPersonrefundPageVm extends basewedPageFile.Web.BaseWebPageVm {
        RefundReason: textFile.ui.TextVm;

        RefundAmount: textFile.ui.TextVm;

        refund: Function;
    }

    export interface IPersonrefundPageConfig {

    }

    export class PersonrefundPageVm extends basewedPageFile.Web.BaseWebPageVm implements IReactPersonrefundPageVm {

        public ReactType = PersonrefundPageReact;

        public RefundReason: textFile.ui.TextVm;

        public RefundAmount: textFile.ui.TextVm;

        public data: DataFile.Anomaly.MemberChangreData;

        public submitData: DataFile.Anomaly.MemberRefundData;
        public refundReason: string;
        public constructor(config?: IPersonrefundPageConfig) {
            super();

            this.RefundReason = new textFile.ui.TextVm();

        }

        public refund() {
            this.submitData = { ChargeFID: this.data.FID, ExamNumber: this.data.ExamNumber, RefundAmount: this.data.ReceiveAmount, RefundReason: this.RefundReason.dataValueGet() }

            //this.submitData.ChargeFID = this.data.FID;
            //this.submitData.ExamNumber = this.data.ExamNumber;
            //this.submitData.RefundAmount = this.data.ReceiveAmount;
            //this.submitData.RefundReason = this.RefundReason.dataValueGet();

            urlFile.Core.AkPost("/MedicalCenter/MemberCharge/MemberRefund", { data: JSON.stringify(this.submitData) }, (a) => {
                if (a.Data) {
                    alert("退款成功，请到退款记录中查询详情");
                    this.SendPageActor({ ToPanelName: "", ToModuleName: "PERSONPAYMENTPAGE" }, {success:true });
                } else {
                    alert("退款失败，请联系管理员")
                }
            })
            this.closePage();
        }

        private init(config: IPersonrefundPageConfig) { }

        protected loadPage(callback?: () => any) {


            urlFile.Core.AkPost("/MedicalCenter/MemberCharge/GetMemberRefund", { fid: this.Param1 }, (a) => {
                this.data = a.Data;

                this.RefundAmount = new textFile.ui.TextVm();
                this.RefundAmount.dataValueSet(this.data.ReceiveAmount);

                if (callback) { callback(); }
            })
        }
    }

    export class PersonrefundPageStates extends basewedPageFile.Web.BaseWebPageStates { }

    export class PersonrefundPageProps extends basewedPageFile.Web.BaseWebPageProps<IReactPersonrefundPageVm> { }

    iocFile.Core.Ioc.Current().RegisterType("PERSONREFUNDPAGE", basewedPageFile.Web.BaseWebPageVm, PersonrefundPageVm);
}