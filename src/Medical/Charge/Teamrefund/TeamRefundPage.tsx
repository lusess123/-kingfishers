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
import textFile = require("./../../../02col/01single/Text");
import textareaFile = require("./../../../02col/01single/TextArea");
import DataFile = require("./../../Base/Anomaly/Data");


export module TeamRefundPage {
    export class TeamRefundPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string; public Id: string; public Vm: any;
    }

    export class TeamRefundPageReact extends basewedPageFile.Web.BaseWebPageReact<TeamRefundPageProps, TeamRefundPageStates, TeamRefundPageAction> implements domCore.IReact {

        public state = new TeamRefundPageStates(); public pSender(): React.ReactElement<any> {
            return <div className="p-a-lg Hg-w60 Hg-m-auto">
                <div className="form-group form-inline clearfix">
                    <label className="col-md-4 col-sm-3  form-control-label text-right">退款原因：</label>
                    <div className="col-md-7 col-sm-9 ">{this._tDom(this.props.Vm.RefundReason) }</div>
                </div>
                <div className="form-group form-inline clearfix">
                    <label className="col-md-4 col-sm-3  form-control-label text-right">退款金额：</label>
                    <div className="col-md-7 col-sm-9 ">{this._tDom(this.props.Vm.RefundAmount) }</div>
                </div>

                <div className="m-t text-center"><a className="btn btn-sm btn-primary" onClick={() => { this.props.Vm.refund() } }>确定退款</a></div>
            </div>;
        }
    }

    export interface IReactTeamRefundPageVm extends basewedPageFile.Web.BaseWebPageVm {
        RefundReason: textareaFile.ui.TextAreaVm;

        RefundAmount: textFile.ui.TextVm;

        refund: Function;
    }

    export interface ITeamRefundPageConfig { }

    export class TeamRefundPageVm extends basewedPageFile.Web.BaseWebPageVm implements IReactTeamRefundPageVm {

        public ReactType = TeamRefundPageReact;

        public RefundReason: textareaFile.ui.TextAreaVm;

        public RefundAmount: textFile.ui.TextVm;
        public submitData: DataFile.Anomaly.TeamRefunData;
        public constructor(config?: ITeamRefundPageConfig) {
            super();
            this.RefundReason = new textareaFile.ui.TextAreaVm();
            this.Title = "团体退费";
        }

        private init(config: ITeamRefundPageConfig) { }

        protected loadPage(callback?: () => any) {
            var unitChagerId = this.Param1;
            var isAmout = this.Param2;
            this.RefundAmount = new textFile.ui.TextVm();
            this.RefundAmount.dataValueSet(this.Param2);
            if (callback) { callback(); }
        }


        public refund() {
            this.submitData = { ChargeFID: this.Param1, RefundAmount: this.Param2, RefundReason: this.RefundReason.dataValueGet() }
         
            urlFile.Core.AkPost("/MedicalCenter/TeamCharge/TeamRefund", { data: JSON.stringify(this.submitData) }, (a) => {
                //刷新页面
                if (a.Data) {
                    alert("退款成功，请到退款记录中查询详情")
                    this.SendPageActor({ ToPanelName: "", ToModuleName: "TeamPayMentPAGE" }, { success: true });
                } else {
                    alert("退款失败，请联系管理员")
                }
                
            })
            this.closePage();
        }
    }

    export class TeamRefundPageStates extends basewedPageFile.Web.BaseWebPageStates { }

    export class TeamRefundPageProps extends basewedPageFile.Web.BaseWebPageProps<IReactTeamRefundPageVm> { }

    iocFile.Core.Ioc.Current().RegisterType("TEAMREFUNDPAGE", basewedPageFile.Web.BaseWebPageVm, TeamRefundPageVm);
}