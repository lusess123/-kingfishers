import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");
import dataFile = require("./../data");
import AppraisalUserRow = require("./DetailAppraisalUserRow");



export module DetailSalaryAppraisalDom {
    export class DetailSalaryAppraisalDomAction extends domCore.DomAction { }


    export class DetailSalaryAppraisalDomReact extends domCore.DomReact<DetailSalaryAppraisalDomProps, DetailSalaryAppraisalDomStates, DetailSalaryAppraisalDomAction> implements domCore.IReact {
        public state = new DetailSalaryAppraisalDomStates();

        public pSender(): React.ReactElement<any> {
            return <div className="p-a-md">
                <div className="pull-right">
                    <a className="btn btn-sm btn-primary" onClick={() => { this.InputExcel() } } >导出</a>
                </div>
                {this.props.Vm.AppraisalUserRowList.map(r => {
                    return r.intoDom()
                }) }
                </div>
        }
     
        
        public InputExcel() {
            this.props.Vm.InputExcel();
        }
       
        protected pComponentDidMount() { super.pComponentDidMount(); }
    }

    export interface IReactDetailSalaryAppraisalDomVm extends domCore.DomVm {
        InputExcel(): void;
        AppraisalUserRowList: AppraisalUserRow.DetailAppraisalUserRow.DetailAppraisalUserRowVm[];
    }

    export interface IDetailSalaryAppraisalDomConfig {
        UserData?: dataFile.Data.IUsersData[];
        ItemData?: dataFile.Data.SalaryItemValueOrCount[];
        Unid?: string;
        SalaryData?: dataFile.Data.ISalaryData;
    }

    export class DetailSalaryAppraisalDomVm extends domCore.DomVm implements IReactDetailSalaryAppraisalDomVm {
        public ReactType = DetailSalaryAppraisalDomReact;

        // public ItemTitle: dataFile.Data.SalaryItemValueOrCount;
        public UserData: dataFile.Data.IUsersData[] = [];
        public ItemData: dataFile.Data.SalaryItemValueOrCount[] = [];
        public AppraisalUserRowList: AppraisalUserRow.DetailAppraisalUserRow.DetailAppraisalUserRowVm[] = [];
        public SalaryData: dataFile.Data.ISalaryData;
       
        public constructor(config?: IDetailSalaryAppraisalDomConfig) {
            super();
            if (config) {
                this.ItemData = config.ItemData;
                this.UserData = config.UserData
                this.UniId = config.Unid;
                this.SalaryData = config.SalaryData;
                this.ItemData.map(b => {
                    if (b.Type == "绩效项") {
                        var _config: AppraisalUserRow.DetailAppraisalUserRow.IDetailAppraisalUserRowConfig = { UserData: this.UserData, ItemData: b, SalaryData: this.SalaryData };
                        var _rowDom = new AppraisalUserRow.DetailAppraisalUserRow.DetailAppraisalUserRowVm(_config);
                        _rowDom.IsChange = true;
                        _rowDom.IsMulit = true;
                        this.AppraisalUserRowList.push(_rowDom);
                    }
                })
            }

        }

        public InputExcel() {
            var fid = this.SalaryData.FID;
            window.open("/HospPerformance/HumanResource/InputExcelFromAppraisal?fid=" + fid, 'fullscreen=yes, scrollbars=auto');

        }
    }

    export class DetailSalaryAppraisalDomStates extends domCore.DomStates {

    }

    export class DetailSalaryAppraisalDomProps extends domCore.DomProps<DetailSalaryAppraisalDomVm> { }
}