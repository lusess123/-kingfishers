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
import combo = require("./../../../../02col/02Mulite/Combo");
import UpdateAccountRowDom = require("./UpdateAccountRowDom");
import UpdateAccountMasterRowDomVm = require("./UpdateAccountMasterRowDom");
export module UpdateAccountPage {
    export class UpdateAccountPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class UpdateAccountPageReact extends basewedPageFile.Web.BaseWebPageReact<UpdateAccountPageProps, UpdateAccountPageStates, UpdateAccountPageAction> implements domCore.IReact {

        public state = new UpdateAccountPageStates();
        public pSender(): React.ReactElement<any> {
            return <div className="YSm-modals">
                <h4 className="YSu-modal-title">编辑应收款管理</h4>
                <div className="YSm-modal-header"></div>
                {
                    this.props.Vm.UpdateAccountRowDomVm.intoDom()
                }
                <div className="YSm-modal-footer text-center">
                    <a className="btn btn-sm btn-secondary">取消</a>
                    <a className="btn btn-sm btn-primary"  onClick={() => { this.submit() } }>提交</a>
                </div>
            </div>;
        }


        public submit()
        {
            this.props.Vm.SubmitData();
        }

    }

    export interface IReactUpdateAccountPageVm extends basewedPageFile.Web.BaseWebPageVm {
    }

    export interface IUpdateAccountPageConfig {


    }
    export class UpdateAccountPageVm extends basewedPageFile.Web.BaseWebPageVm implements IReactUpdateAccountPageVm {
        public ReactType = UpdateAccountPageReact;
        public UpdateAccountRowDomVm: UpdateAccountRowDom.UpdateAccountRowDom.UpdateAccountRowDomVm;
        public Unit: string;
        public batchId: string;
        public constructor(config?: IUpdateAccountPageConfig) {
            super();

        }
        public SubmitData()
        {
            var master = this.UpdateAccountRowDomVm.MasterRow;
            var postData = [];
            var resultcommonData = master.RowData  ;
            var jsonData = JSON.stringify(resultcommonData);
            var isSuccess = master.legal();
            if (isSuccess)
            {
                urlFile.Core.AkPost("/MedicalCenter/NewGroup/ModifyAccount", { account: jsonData, batchId: this.batchId }, (a) => {
                    if (a.Content == "ok") {
                        var _list: string[] = a.Data;
                        utilFile.Core.Util.Noty("编辑成功！");
                        this.SendPageActor({ ToPanelName: "", ToModuleName: "GroupManagePage" }, { Select: "AccountManage" });
                        this.closePage();
                    }
                    else
                    {
                        utilFile.Core.Util.Noty("编辑失败！");
                    }
                });

            }

        }
        private init(config: IUpdateAccountPageConfig) {
        }

        protected loadPage(callback?: () => any) {
            var selectId = this.Param1
            this.batchId = this.Param1
            urlFile.Core.AkPost("/MedicalCenter/NewGroup/FetchDetailBatch", { fids: this.Param1 }, (a) => {
                if (a)
                {
                    var config = { Data: a.Data[0].accountData[0], BatchId: this.Param1 }
                    this.UpdateAccountRowDomVm = new UpdateAccountRowDom.UpdateAccountRowDom.UpdateAccountRowDomVm(config);
                    if (callback) {
                        callback();
                    }
                }
            });
        }

    }
    export class UpdateAccountPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class UpdateAccountPageProps extends basewedPageFile.Web.BaseWebPageProps<UpdateAccountPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("UpdateAccountPAGE", basewedPageFile.Web.BaseWebPageVm, UpdateAccountPageVm);

}