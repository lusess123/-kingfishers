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
import NewMemberRowDom = require("./NewMemberRowDom");
import combo = require("./../../../../02col/02Mulite/Combo");
import NewMemberMaster = require("./NewMemberMasterRowDom");
export module NewMemberPage {
    export class NewMemberPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class NewMemberPageReact extends basewedPageFile.Web.BaseWebPageReact<NewMemberPageProps, NewMemberPageStates, NewMemberPageAction> implements domCore.IReact {

        public state = new NewMemberPageStates();
        public pSender(): React.ReactElement<any> {
            return <div className="YSm-modals">
                <h4 className="YSu-modal-title">添加人员</h4>
                <div className="YSm-modal-header"></div>
                {
                    this.props.Vm.NewMemberRowDomVm.intoDom()
                }
                <div className="YSm-modal-footer text-center">
                    <a className="btn btn-sm btn-secondary"  onClick={() => { this.props.Vm.PageClose() } }>取消</a>
                    <a className="btn btn-sm btn-primary"  onClick={() => { this.submit() } }>提交</a>
                </div>
            </div>;
        }


        public submit()
        {
            this.props.Vm.SubmitData();
        }

    }

    export interface IReactNewMemberPageVm extends basewedPageFile.Web.BaseWebPageVm {
    }

    export interface INewMemberPageConfig {


    }
    export class NewMemberPageVm extends basewedPageFile.Web.BaseWebPageVm implements IReactNewMemberPageVm {
        public ReactType = NewMemberPageReact;
        public NewMemberRowDomVm: NewMemberRowDom.NewMemberRowDom.NewMemberRowDomVm;
        public Unit: string;
        public BatchId: string;
        public constructor(config?: INewMemberPageConfig) {
            super();

        }
        public PageClose()
        {
           // this.SendPageActor({ ToPanelName: "", ToModuleName: "GroupManagePage" }, { Select: "PersonalManage" });
            this.closePage();
        }
        public SubmitData()
        {
            var master = this.NewMemberRowDomVm.MasterRow;
            var postData = [];
            var resultcommonData = master.RowData  ;
           // postData.push(resultcommonData);
            var jsonData = JSON.stringify(resultcommonData);
            var isSuccess = master.legal();
            if (isSuccess)
            {
                var str = JSON.stringify("");
                urlFile.Core.AkPost("/MedicalCenter/NewGroup/AddGroupMember", { member: jsonData, batch: this.BatchId  }, (a) => {
                    if (a.Content == "ok") {
                        var _list: string[] = a.Data;
                        utilFile.Core.Util.Noty("添加成功！");
                        this.SendPageActor({ ToPanelName: "", ToModuleName: "GroupManagePage" }, { Select: "PersonalManage" });
                        this.closePage();
                    }
                    else
                    {
                        utilFile.Core.Util.Noty("添加失败！");
                    }
                });

            }

        }
        private init(config: INewMemberPageConfig) {
        }

        protected loadPage(callback?: () => any) {
            var fids = this.Param1.split(',')
            var selectId = fids[0];
            var batchId = fids[1];
            this.BatchId = batchId;
            var config1 = { selectId: selectId, batchId: batchId}
            this.NewMemberRowDomVm = new NewMemberRowDom.NewMemberRowDom.NewMemberRowDomVm(config1)
            if (callback) {
                callback();
            }
        }

    }
    export class NewMemberPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class NewMemberPageProps extends basewedPageFile.Web.BaseWebPageProps<NewMemberPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("NewMemberPAGE", basewedPageFile.Web.BaseWebPageVm, NewMemberPageVm);

}