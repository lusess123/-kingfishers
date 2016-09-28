import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");

import PersonalTableFile = require("./PersonalTable");
import PersonalTable = PersonalTableFile.PersonalTable.PersonalTableReact;
import PersonalTableVm = PersonalTableFile.PersonalTable.PersonalTableVm;
import SingleFileUpload = require("./../../../../02col/04upload/SingleFileUpload");

import DataFlie = require("./../Data");
export module PersonalManageDom {
    export class PersonalManageDomAction extends domCore.DomAction {
    }

    export class PersonalManageDomReact extends domCore.DomReact<PersonalManageDomProps, PersonalManageDomStates, PersonalManageDomAction> implements domCore.IReact {

        public state = new PersonalManageDomStates();

        public pSender(): React.ReactElement<any> {
            return <div className="YSm-personal-manage">
                {this._initHandle() }
                {this._tDom(this.props.Vm.PersonalTableObj) }
 
            </div>;
        }

        public _initHandle(): React.ReactElement<any> {

            return <div className="YSm-handle">
                <div className="col-lg-6 col-md-6 YSm-search">
                    <input className="col-lg-11 col-md-10 YSu-border-blue" type="text" placeholder="输入身份证、姓名查询" value={this.props.Vm.SearchName} onChange={(e) => { this.fun_linkName(e); } }/>
                    <a className="col-lg-1 col-md-2 btn btn-primary" onClick ={() => { this.props.Vm.Sarch()} }>查询</a>
                </div>
                <a className="btn btn-primary" onClick ={() => { this.props.Vm.New() } }><i className="fa fa-plus"></i>新增</a>
                <a className="btn btn-sm p-a-0" >  {this.props.Vm.SingleFileUpload.intoDom() }</a>
                <a className="btn"  onClick ={() => { this.props.Vm.ExportExcel() } }><i className="fa fa-cloud-download Hs-red"></i>导出模板</a>
            </div>;
        }
        private fun_linkName(e) {
            var _val = e.target["value"];
            this.props.Vm.SearchName = _val;
            this.forceUpdate();
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IReactPersonalManageDomVm extends domCore.DomVm {    }

    export interface IPersonalManageDomConfig {
        Data:DataFlie.Group.PagerListData
        UniId: string;
        BatchId: string;
        selectId: string;
        key: string
    }

    export class PersonalManageDomVm extends domCore.DomVm implements IReactPersonalManageDomVm {
        public ReactType = PersonalManageDomReact;
        public SearchName: string;
        public PersonalTableObj: PersonalTableVm;
        public BatchId: string;
        public selectId: string;
        public SingleFileUpload: SingleFileUpload.ui.SingleFileUploadVm;
        public constructor(config?: IPersonalManageDomConfig) {
            super();
            this.SingleFileUpload = new SingleFileUpload.ui.SingleFileUploadVm();
            this.SingleFileUpload.LabelText = "导入人员"
            this.SingleFileUpload.StorageName = "ExcelStorage"
            this.SingleFileUpload.UploadName = "ExcelUpload";
            this.SingleFileUpload.isLoadIcon = true;
            this.SingleFileUpload.LoadIconName = "fa fa-cloud-upload Hs-red";
            this.SingleFileUpload.onChangeHandle((val) => {
                this.ImportExcel(val)
                return true;
            });
            if (config.Data) {
                this.SearchName = "";
                this.BatchId = config.BatchId;
                this.selectId = config.selectId;
                this.UniId = config.UniId;
                var confi1 = { Data: config.Data, Unild: config.UniId, BatchId: config.BatchId, selectId: config.selectId, Key: config.key }
                this.PersonalTableObj = new PersonalTableVm(confi1);
            }
        }
        public ImportExcel(val: string)
        {
            var File = JSON.parse(val);
            var PathId = File.ResourceInfoList[0].PathID;
            var FileId = File.ResourceInfoList[0].FileId;
            var ExtName = File.ResourceInfoList[0].ExtName;
            var fileStorageName = this.SingleFileUpload.StorageName;
            var FileNameTitle = File.ResourceInfoList[0].FileNameTitle;
            urlFile.Core.AkPost("/MedicalCenter/ExcelMemberImport/ImportExcelInfo", { fileStorageName: fileStorageName, PathID: PathId, FileId: FileId, ExtName: ExtName, Unit: this.selectId, BatchId: this.BatchId, FileNameTitle: FileNameTitle}, (a) => {
                var Data = a;
                if (Data == "success") {
                    utilFile.Core.Util.Noty("导入成功！");
                    this.emitAppEvent("Manage/GroupRuleTable/loadPageData", this.UniId, "PersonalManage");
                }
                else
                {
                    utilFile.Core.Util.Noty("导入数据有一条或多条错误！");
                    this.emitAppEvent("Manage/GroupRuleTable/loadPageData", this.UniId, "PersonalManage");
                }
            });
        }
        public ExportExcel()
        {
            window.open("/MedicalCenter/ExcelMemberImport/CreateTemplates" , 'fullscreen=yes, scrollbars=auto');
        }

        public New() {

            urlFile.Core.AkUrl.Current().openUrl("$winNewMemberPage$" + this.selectId +","+this.BatchId+ "$", true);
         }
        public Sarch()
        {
            this.emitAppEvent("Manage/PersonalTable/loadPageData", this.UniId, "PersonalManage", "0", this.SearchName);            
            this.SearchName = "";
        }

    }
    export class PersonalManageDomStates extends domCore.DomStates {
    }


    export class PersonalManageDomProps extends domCore.DomProps<PersonalManageDomVm>{
    }



}


