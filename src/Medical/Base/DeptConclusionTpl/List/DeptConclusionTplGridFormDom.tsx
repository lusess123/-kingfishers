import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import thFile = require("./../../../../09Web/dom/ThDom");
import ThDom = thFile.Web.ThDomReact;
import gridRowFile = require("./DeptConclusionTplGridRowDom");
import rowButtonFile = require("./DeptConclusionTplRowButtonDom");
import singleCheckFile = require("./../../../../02col/02Mulite/SingleCheckBox");
import dataFile = require("./../Data");
import baseGridForm = require("./../../../Common/List/MedicalBaseGridFormDom");



export module DeptConclusionTplGridFormDom {
    export class DeptConclusionTplGridFormDomAction extends baseGridForm.MedicalBaseGridFormDom.MedicalBaseGridFormDomAction{
    }

    export class DeptConclusionTplGridFormDomReact extends baseGridForm.MedicalBaseGridFormDom.MedicalBaseGridFormDomReact<DeptConclusionTplGridFormDomProps, DeptConclusionTplGridFormDomStates, DeptConclusionTplGridFormDomAction> implements domCore.IReact {

        public state = new DeptConclusionTplGridFormDomStates();

        public pSender(): React.ReactElement<any> {
            return super.pSender();
        }

        protected initHeader(): React.ReactElement<any> {
            return <tr className="ACT-HEADER MEMBER">
                <th className={"thCheckAll text-center acsWidth3-5 " + (this.props.Vm.IsAcsRelative ? " Hf-relative Hf-table-th  " : "") } style={{ left: this.props.Vm.LeftNum }}   >{this.props.Vm.AllCheck.intoDom() }</th>
                <th className="hide"><span>主键</span></th>
                <ThDom children={null} Vm={this.getThDomVM(200) }><span>科室</span></ThDom>
                <ThDom children={null} Vm={this.getThDomVM(150) }><span>名称</span></ThDom>
                <ThDom children={null} Vm={new thFile.Web.ThDomVm() }><span>内容</span></ThDom>
            </tr>
        };


    }

    export interface IDeptConclusionTplGridFormDomConfig extends baseGridForm.MedicalBaseGridFormDom.IMedicalBaseGridFormDomConfig{

        Data: Array<dataFile.DeptConclusionTpl.IDeptConclusionTplData>;
    }

    export class DeptConclusionTplGridFormDomVm extends baseGridForm.MedicalBaseGridFormDom.MedicalBaseGridFormDomVm {
        public ReactType = DeptConclusionTplGridFormDomReact;

        public constructor(config?: IDeptConclusionTplGridFormDomConfig) {
            super();
            this.FormData = new Array<dataFile.DeptConclusionTpl.IDeptConclusionTplData>();
            this.RowList = new Array<gridRowFile.DeptConclusionTplGridRowDom.DeptConclusionTplGridRowDomVm>();
            this.RowButtonList = new Array<rowButtonFile.DeptConclusionTplRowButtonDom.DeptConclusionTplRowButtonDomVm>();
            this.AllCheck = new singleCheckFile.ui.SingleCheckBoxVm();
            if (config && config.Data) {
                this.FormData = config.Data;
                this.FormData.forEach((rowData, index) => {
                    var rowNumber = index < 9 ? "0" + (index + 1) : (index + 1).toString();
                    var rowConfig = { RowData: rowData, IsAcsRelative: this.IsAcsRelative, LeftNum: this.LeftNum, RowNumber: rowNumber };
                    var rowVm = new gridRowFile.DeptConclusionTplGridRowDom.DeptConclusionTplGridRowDomVm(rowConfig);
                    this.RowList.push(rowVm);
                    var rowBtnConfig = { Row: rowVm, UniId: config.UniId }
                    var rowBtnVm = new rowButtonFile.DeptConclusionTplRowButtonDom.DeptConclusionTplRowButtonDomVm(rowBtnConfig);
                    this.RowButtonList.push(rowBtnVm);
                });
            }

        }

    }
    export class DeptConclusionTplGridFormDomStates extends baseGridForm.MedicalBaseGridFormDom.MedicalBaseGridFormDomStates{
    }


    export class DeptConclusionTplGridFormDomProps extends baseGridForm.MedicalBaseGridFormDom.MedicalBaseGridFormDomProps<DeptConclusionTplGridFormDomVm>{
    }



}


