import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import thFile = require("./../../../../09Web/dom/ThDom");
import ThDom = thFile.Web.ThDomReact;
import gridRowFile = require("./GeneralExamTplGridRowDom");
import rowButtonFile = require("./GeneralExamTplRowButtonDom");
import singleCheckFile = require("./../../../../02col/02Mulite/SingleCheckBox");
import dataFile = require("./../Data");
import baseGridForm = require("./../../../Common/List/MedicalBaseGridFormDom");



export module GeneralExamTplGridFormDom {
    export class GeneralExamTplGridFormDomAction extends baseGridForm.MedicalBaseGridFormDom.MedicalBaseGridFormDomAction{
    }

    export class GeneralExamTplGridFormDomReact extends baseGridForm.MedicalBaseGridFormDom.MedicalBaseGridFormDomReact<GeneralExamTplGridFormDomProps, GeneralExamTplGridFormDomStates, GeneralExamTplGridFormDomAction> implements domCore.IReact {

        public state = new GeneralExamTplGridFormDomStates();

        public pSender(): React.ReactElement<any> {
            return super.pSender();
        }

        protected initHeader(): React.ReactElement<any> {
            return <tr className="ACT-HEADER MEMBER">
                <th className={"thCheckAll text-center acsWidth3-5 " + (this.props.Vm.IsAcsRelative ? " Hf-relative Hf-table-th  " : "") } style={{ left: this.props.Vm.LeftNum }}   >{this.props.Vm.AllCheck.intoDom() }</th>
                <th className="hide"><span>主键</span></th>
                <ThDom children={null} Vm={this.getThDomVM(200) }><span>名称</span></ThDom>
                <ThDom children={null} Vm={this.getThDomVM(150) }><span>综述</span></ThDom>
                <ThDom children={null} Vm={new thFile.Web.ThDomVm() }><span>建议</span></ThDom>
            </tr>
        };


    }

    export interface IGeneralExamTplGridFormDomConfig extends baseGridForm.MedicalBaseGridFormDom.IMedicalBaseGridFormDomConfig{

        Data: Array<dataFile.GeneralExamTpl.IGeneralExamTplData>;
    }

    export class GeneralExamTplGridFormDomVm extends baseGridForm.MedicalBaseGridFormDom.MedicalBaseGridFormDomVm {
        public ReactType = GeneralExamTplGridFormDomReact;

        public constructor(config?: IGeneralExamTplGridFormDomConfig) {
            super();
            this.FormData = new Array<dataFile.GeneralExamTpl.IGeneralExamTplData>();
            this.RowList = new Array<gridRowFile.GeneralExamTplGridRowDom.GeneralExamTplGridRowDomVm>();
            this.RowButtonList = new Array<rowButtonFile.GeneralExamTplRowButtonDom.GeneralExamTplRowButtonDomVm>();
            this.AllCheck = new singleCheckFile.ui.SingleCheckBoxVm();
            if (config && config.Data) {
                this.FormData = config.Data;
                this.FormData.forEach((rowData, index) => {
                    var rowNumber = index < 9 ? "0" + (index + 1) : (index + 1).toString();
                    var rowConfig = { RowData: rowData, IsAcsRelative: this.IsAcsRelative, LeftNum: this.LeftNum, RowNumber: rowNumber };
                    var rowVm = new gridRowFile.GeneralExamTplGridRowDom.GeneralExamTplGridRowDomVm(rowConfig);
                    this.RowList.push(rowVm);
                    var rowBtnConfig = { Row: rowVm, UniId: config.UniId }
                    var rowBtnVm = new rowButtonFile.GeneralExamTplRowButtonDom.GeneralExamTplRowButtonDomVm(rowBtnConfig);
                    this.RowButtonList.push(rowBtnVm);
                });
            }

        }

    }
    export class GeneralExamTplGridFormDomStates extends baseGridForm.MedicalBaseGridFormDom.MedicalBaseGridFormDomStates{
    }


    export class GeneralExamTplGridFormDomProps extends baseGridForm.MedicalBaseGridFormDom.MedicalBaseGridFormDomProps<GeneralExamTplGridFormDomVm>{
    }



}


