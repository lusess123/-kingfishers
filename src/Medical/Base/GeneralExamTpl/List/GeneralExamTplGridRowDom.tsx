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

export module GeneralExamTplGridRowDom {
    export class GeneralExamTplGridRowDomAction extends baseGridRow.MedicalBaseGridRowDom.MedicalBaseGridRowDomAction{
    }

    export class GeneralExamTplGridRowDomReact extends baseGridRow.MedicalBaseGridRowDom.MedicalBaseGridRowDomReact<GeneralExamTplGridRowDomProps, GeneralExamTplGridRowDomStates, GeneralExamTplGridRowDomAction> implements domCore.IReact {

        public state = new GeneralExamTplGridRowDomStates();

        public pSender(): React.ReactElement<any> {
            return <tr className={this.props.Vm.SingleCheckVm.vmDataValueGet() == "true" ? "acs-check-bg" : ""}>
                {this.createFirstTd()}
                <td className="hide"><span><input placeholder=".." type="hidden"></input></span></td>
                <td><span><span>{this.props.Vm.RowData.Name}</span></span></td>
                <td><span><span>{this.props.Vm.RowData.Summary}</span></span></td>
                <td><span><span>{this.props.Vm.RowData.Advice}</span></span></td>
            </tr>
        }

    }

    export interface IGeneralExamTplGridRowDomConfig extends baseGridRow.MedicalBaseGridRowDom.IMedicalBaseGridRowDomConfig {
        //RowData: dataFile.GeneralExamTpl.IGeneralExamTplData;
        //IsAcsRelative: boolean;
        //LeftNum: number;
        //RowNumber: string;

    }

    export class GeneralExamTplGridRowDomVm extends baseGridRow.MedicalBaseGridRowDom.MedicalBaseGridRowDomVm {
        public ReactType = GeneralExamTplGridRowDomReact;

        public constructor(config?: IGeneralExamTplGridRowDomConfig) {
            super(config);
            //if (config) {
            //    this.RowData = config.RowData;
            //    this.IsAcsRelative = config.IsAcsRelative;
            //    this.LeftNum = config.LeftNum;
            //    this.RowNumber = config.RowNumber;
            //}
        }

    }
    export class GeneralExamTplGridRowDomStates extends baseGridRow.MedicalBaseGridRowDom.MedicalBaseGridRowDomStates{
    }


    export class GeneralExamTplGridRowDomProps extends baseGridRow.MedicalBaseGridRowDom.MedicalBaseGridRowDomProps<GeneralExamTplGridRowDomVm>{
    }



}


