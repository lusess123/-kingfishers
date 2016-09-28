import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import singleCheckFile = require("./../../../../02col/02Mulite/SingleCheckBox");
import expandFile = require("./../../../Common/RowButtonExpandDom");
import dataFile = require("./../Data");
import baseGridRow = require("./../../../Common/List/MedicalBaseGridRowDom");

export module DeptConclusionTplGridRowDom {
    export class DeptConclusionTplGridRowDomAction extends baseGridRow.MedicalBaseGridRowDom.MedicalBaseGridRowDomAction{
    }

    export class DeptConclusionTplGridRowDomReact extends baseGridRow.MedicalBaseGridRowDom.MedicalBaseGridRowDomReact<DeptConclusionTplGridRowDomProps, DeptConclusionTplGridRowDomStates, DeptConclusionTplGridRowDomAction> implements domCore.IReact {

        public state = new DeptConclusionTplGridRowDomStates();

        public pSender(): React.ReactElement<any> {
            return <tr className={this.props.Vm.SingleCheckVm.vmDataValueGet() == "true" ? "acs-check-bg" : ""}>
                {this.createFirstTd()}
                <td className="hide"><span><input placeholder=".." type="hidden"></input></span></td>
                <td><span><span>{this.props.Vm.RowData.DeptName}</span></span></td>
                <td><span><span>{this.props.Vm.RowData.Name}</span></span></td>
                <td><span><span>{this.props.Vm.RowData.Content}</span></span></td>
            </tr>
        }

    }

    export interface IDeptConclusionTplGridRowDomConfig extends baseGridRow.MedicalBaseGridRowDom.IMedicalBaseGridRowDomConfig {
        //RowData: dataFile.DeptConclusionTpl.IDeptConclusionTplData;
        //IsAcsRelative: boolean;
        //LeftNum: number;
        //RowNumber: string;

    }

    export class DeptConclusionTplGridRowDomVm extends baseGridRow.MedicalBaseGridRowDom.MedicalBaseGridRowDomVm {
        public ReactType = DeptConclusionTplGridRowDomReact;

        public constructor(config?: IDeptConclusionTplGridRowDomConfig) {
            super(config);
            //if (config) {
            //    this.RowData = config.RowData;
            //    this.IsAcsRelative = config.IsAcsRelative;
            //    this.LeftNum = config.LeftNum;
            //    this.RowNumber = config.RowNumber;
            //}
        }

    }
    export class DeptConclusionTplGridRowDomStates extends baseGridRow.MedicalBaseGridRowDom.MedicalBaseGridRowDomStates{
    }


    export class DeptConclusionTplGridRowDomProps extends baseGridRow.MedicalBaseGridRowDom.MedicalBaseGridRowDomProps<DeptConclusionTplGridRowDomVm>{
    }



}


