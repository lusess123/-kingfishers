import domFile = require("./../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");
import TextFile = require("./../../../02col/01single/Text");
import Data = require("./../../Base/Anomaly/Data");

export module PersonChargeNoteDom {
    export class PersonChargeNoteDomAction extends domCore.DomAction { }

    export class PersonChargeNoteDomReact extends domCore.DomReact<PersonChargeNoteDomProps, PersonChargeNoteDomStates, PersonChargeNoteDomAction> implements domCore.IReact {
        public state = new PersonChargeNoteDomStates();

        public pSender(): React.ReactElement<any> {
            return <div className="YSm-bill">
                <div className="form-group  form-inline clearfix">
                    <label className="form-control-label pull-left">是否需要发票：</label>
                    <div className="form-control-label pull-left">
                        <div className="radio pull-left"><label>
                            <input type="radio" value="1" name="select" checked={this.props.Vm.Data.isPrintInvoice == "1" ? "checked" : ""}  onChange={(a) => { this.props.Vm.print(a) } }/>是</label>
                        </div>
                        <div className="radio pull-left"><label>
                            <input type="radio" value="0" name="select"  checked={this.props.Vm.Data.isPrintInvoice == "0" ? "checked" : ""}
                                onChange={(a) => { this.props.Vm.print(a) } } />否</label>
                        </div>
                    </div>
                </div>
                <form className={" clearfix " + (this.props.Vm.isHide ? " hide " : "") }>
                    <div className="col-lg-3 col-md-3 form-group  form-inline clearfix">
                        <label className="col-md-5 col-sm-3 form-control-label  text-right">发票金额：</label>
                        <div className="col-md-7 col-sm-9">
                            {this.props.Vm.invoiceAmout.intoDom() }

                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 form-group  form-inline clearfix">
                        <label className="col-md-5 col-sm-3 form-control-label  text-right">发票类型：</label>
                        <div className="col-md-7 col-sm-9">
                            {this.props.Vm.invoiceType.intoDom() }

                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 form-group  form-inline clearfix">
                        <label className="col-md-5 col-sm-3 form-control-label  text-right">发票号：</label>
                        <div className="col-md-7 col-sm-9">
                            {this.props.Vm.invoiceNum.intoDom() }

                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 form-group  form-inline clearfix">
                        <label className="col-md-5 col-sm-3 form-control-label  text-right">发票抬头：</label>
                        <div className="col-md-7 col-sm-9">
                            {this.props.Vm.invoiceTitle.intoDom() }

                        </div>
                    </div>
                </form>
            </div>;
        }

        protected pComponentDidMount() { super.pComponentDidMount(); }
    }

    export interface IReactPersonChargeNoteDomVm extends domCore.DomVm { }

    export interface IPersonChargeNoteDomConfig { }

    export class PersonChargeNoteDomVm extends domCore.DomVm implements IReactPersonChargeNoteDomVm {
        public ReactType = PersonChargeNoteDomReact;
        public invoiceAmout: TextFile.ui.TextVm;//发票金额
        public invoiceType: TextFile.ui.TextVm;//发票类型
        public invoiceNum: TextFile.ui.TextVm;//发票号
        public invoiceTitle: TextFile.ui.TextVm;//发票抬头
        public Data: Data.Anomaly.IInvoiceData;


        public isHide: boolean = true;


        public constructor(config?: IPersonChargeNoteDomConfig) {
            super();
            this.invoiceAmout = new TextFile.ui.TextVm();
            this.invoiceType = new TextFile.ui.TextVm();
            this.invoiceNum = new TextFile.ui.TextVm();
            this.invoiceTitle = new TextFile.ui.TextVm();

            this.Data = { Amount: "", ChargeId: "", InvoiceType: "", isPrintInvoice: "0", Number: "", Title: "", Type: "" };
        }

        public print(a: React.FormEvent) {
            this.Data.isPrintInvoice = a.target["value"];
            if (a.target["value"] == "1") {
                this.isHide = false;
                this.invoiceTitle.LegalObj.Kind = "notNull";
                this.invoiceNum.LegalObj.Kind = "notNull";
                this.invoiceType.LegalObj.Kind = "notNull";
                this.invoiceAmout.LegalObj.Kind = "notNull";
            } else if (a.target["value"] == "0") {
                this.isHide = true;
            }
            //this.isHide = this.isHide;
            this.IsMulit = true;
            this.forceUpdate("")
        }



        public confirmCharge(Fid: string) {

            if (this.isHide) {
                this.submit(Fid);
            } else {
                this.invoiceTitle.legal();
                this.invoiceNum.legal();
                this.invoiceType.legal();
                this.invoiceAmout.legal();
                if (this.invoiceTitle.legal() && this.invoiceNum.legal() && this.invoiceType.legal() && this.invoiceAmout.legal()) {
                    this.submit(Fid);
                }
            }
        }


        public submit(Fid: string) {
            this.Data.ChargeId = Fid;
            this.Data.Amount = this.invoiceAmout.dataValue();
            this.Data.Type = "0";//个人
            this.Data.Number = this.invoiceNum.dataValue();
            this.Data.Title = this.invoiceTitle.dataValue();
            this.Data.InvoiceType = this.invoiceType.dataValue()

            urlFile.Core.AkPost("/MedicalCenter/InvoiceCharge/AddMenber", { data: JSON.stringify(this.Data) }, (data) => {
                //跳回原来的页面
                if (data.Content == "ok") {
                    urlFile.Core.AkUrl.Current().openUrl("$PERSONPAYMENTPAGE$", false);
                }
            });
        }
    }

    export class PersonChargeNoteDomStates extends domCore.DomStates { }

    export class PersonChargeNoteDomProps extends domCore.DomProps<PersonChargeNoteDomVm> { }
}