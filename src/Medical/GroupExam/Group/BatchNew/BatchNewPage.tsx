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
import BatchNewRowDom = require("./BatchNewRowDom");
import combo = require("./../../../../02col/02Mulite/Combo");
import BatchNewMaster = require("./BatchNewMasterRowDom");
export module BatchNewPage {
    export class BatchNewPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class BatchNewPageReact extends basewedPageFile.Web.BaseWebPageReact<BatchNewPageProps, BatchNewPageStates, BatchNewPageAction> implements domCore.IReact {

        public state = new BatchNewPageStates();
        public pSender(): React.ReactElement<any> {
            return <div className="YSm-modals">
                <h4 className="YSu-modal-title">添加批次</h4>
                <div className="YSm-modal-header"></div>
                {
                    this.props.Vm.BatchNewRowDomVm.intoDom()
                }
                <div className="YSm-modal-footer text-center">
                    <a className="btn btn-sm btn-secondary"  onClick={() => { this.cancel() } }>取消</a>
                    <a className="btn btn-sm btn-primary"  onClick={() => { this.submit() } }>提交</a>
                </div>
            </div>;
        }

        public cancel() {
            this.props.Vm.Cancel()
        }
        public submit()
        {
            this.props.Vm.SubmitData();
        }

    }

    export interface IReactBatchNewPageVm extends basewedPageFile.Web.BaseWebPageVm {
    }

    export interface IBatchNewPageConfig {


    }
    export class BatchNewPageVm extends basewedPageFile.Web.BaseWebPageVm implements IReactBatchNewPageVm {
        public ReactType = BatchNewPageReact;
        public BatchNewRowDomVm: BatchNewRowDom.BatchNewRowDom.BatchNewRowDomVm;
        protected pIsHullAutoHide: boolean = true;

        public constructor(config?: IBatchNewPageConfig) {
            super();

        }
        public SubmitData()
        {
            var master = this.BatchNewRowDomVm.MasterRow;
            var postData = [];
            var resultcommonData = master.RowData  ;
            postData.push(resultcommonData);
            var jsonData = JSON.stringify(postData);
            var isSuccess = master.legal();
            if (isSuccess)
            {
                var str = JSON.stringify("");
                var list = this.Param1.split("|");
                var Unit = list[0];
                var flag = list[1];

                urlFile.Core.AkPost("/MedicalCenter/NewGroup/AddBatchUnit", { batch: jsonData, unid: Unit }, (a) => {
                    if (a.Content == "ok") {
                        var num = a.Data[0];
                        if (flag != "EditPage")
                        {
                            this.SendPageActor({ ToPanelName: "", ToModuleName: "NEWGROUPPAGE" }, { BatchData: master.RowData, num:num });
                        }
                        else
                        {
                           var str=  Unit.split(",")
                           urlFile.Core.AkUrl.Current().openUrl("$EDITGROUPPAGE$#$EDITGROUPPAGE$" + num + "$" + str[1], false);

                        }
                        this.closePage();
                    }
                });

            }
        }
        public Cancel()
        {
            this.closePage()
        }
        private init(config: IBatchNewPageConfig) {
        }

        protected loadPage(callback?: () => any) {
             this.BatchNewRowDomVm = new BatchNewRowDom.BatchNewRowDom.BatchNewRowDomVm();
            if (callback) {
                callback();
            }
        }

    }
    export class BatchNewPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class BatchNewPageProps extends basewedPageFile.Web.BaseWebPageProps<BatchNewPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("BATCHNEWPAGE", basewedPageFile.Web.BaseWebPageVm, BatchNewPageVm);

}