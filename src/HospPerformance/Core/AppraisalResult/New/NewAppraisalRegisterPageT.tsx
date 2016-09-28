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
import SingleFileUpload = require("./../../../../02col/04upload/SingleFileUpload");

export module NewAppraisalRegisterPageT {
    export class NewAppraisalRegisterPageTAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class NewAppraisalRegisterPageTReact extends basewedPageFile.Web.BaseWebPageReact<NewAppraisalRegisterPageTProps, NewAppraisalRegisterPageTStates, NewAppraisalRegisterPageTAction> implements domCore.IReact {

        public state = new NewAppraisalRegisterPageTStates();
        public pSender(): React.ReactElement<any> {
            return <div className="p-a-md">
                <div>
                    <p>已选：{this.props.Vm.AppraisalName}</p>
                    <ol>
                        <li>请先导出模板表格，按照excel表格内容填写数据。</li>
                        <li>填好表格后，点击导入按钮，上传填写的数据。</li>
                    </ol>
                </div>
                <div className="text-center">
                    <a className="btn btn-sm btn-primary" onClick={() => { this.exportTemplate() } }>导出模板</a>
                    <a className="btn btn-sm btn-primary p-a-0 YSc-upload">
                        {this.props.Vm.SingleFileUpload.intoDom() }</a>
                </div>
            </div>;
        }

        public exportTemplate()
        {
            this.props.Vm.exportTemplate()         
        }

        public importData() {

        }




    }

    export interface IReactNewAppraisalRegisterPageTVm extends basewedPageFile.Web.BaseWebPageVm {
        AppraisalName: string;
        exportTemplate(): void;
        SingleFileUpload: SingleFileUpload.ui.SingleFileUploadVm;

    }

    export interface INewAppraisalRegisterPageTConfig {


    }
    export class NewAppraisalRegisterPageTVm extends basewedPageFile.Web.BaseWebPageVm implements IReactNewAppraisalRegisterPageTVm {
        public ReactType = NewAppraisalRegisterPageTReact;
        public AppraisalName: string="";
        public SingleFileUpload: SingleFileUpload.ui.SingleFileUploadVm;

        public constructor(config?: INewAppraisalRegisterPageTConfig) {
            super();
            this.SingleFileUpload = new SingleFileUpload.ui.SingleFileUploadVm();
            this.SingleFileUpload.LabelText = "导入数据"
            this.SingleFileUpload.StorageName = "ExcelStorage"
            this.SingleFileUpload.UploadName = "ExcelUpload";
            this.SingleFileUpload.isLoadIcon = false;           
            this.SingleFileUpload.onChangeHandle((val) => {
                this.ImportExcel(val)
                return true;
            });
            this.Title = "导入";
        }
        public ImportExcel(val: string)
        {
            var File = JSON.parse(val);
            var PathId = File.ResourceInfoList[0].PathID;
            var FileId = File.ResourceInfoList[0].FileId;
            var ExtName = File.ResourceInfoList[0].ExtName;
            var fileStorageName = this.SingleFileUpload.StorageName;
            urlFile.Core.AkPost("/HospPerformance/Appraisal/ImportExcelInfo", { fileStorageName: fileStorageName, PathID: PathId, FileId: FileId, ExtName: ExtName, FID: this.Param1  }, (a) => {
                if (a) {
                    utilFile.Core.Util.Noty("导入成功！");
                    var url = "$$module/HospPerformance/Core/performance_core_Appraisal$"
                    urlFile.Core.AkUrl.Current().openUrl(url, true);
                }
            });
        }
        private init(config: INewAppraisalRegisterPageTConfig) {
        }
        public exportTemplate() {

            window.open("/HospPerformance/Appraisal/CreateAppraisalEntering?FID=" + this.Param1, 'fullscreen=yes, scrollbars=auto');
            //urlFile.Core.AkPost("/HospPerformance/Appraisal/CreateAppraisalEntering", { FID: this.Param1 }, (a) => {
            //    if (a) {
            //        utilFile.Core.Util.Noty("导出成功！");
            //    }
            //  })
        };

        protected loadPage(callback?: () => any) {
            urlFile.Core.AkPost("/HospPerformance/AppraisalResult/FetchAppraisalData", { appraisalId: this.Param1 }, (a) => {
                this.AppraisalName = a.Data;
                if (callback) {
                    callback();
                }
            });
        }

    }
    export class NewAppraisalRegisterPageTStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class NewAppraisalRegisterPageTProps extends basewedPageFile.Web.BaseWebPageProps<IReactNewAppraisalRegisterPageTVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("NEWAPPRAISALREGISTERPAGET", basewedPageFile.Web.BaseWebPageVm, NewAppraisalRegisterPageTVm);

}
