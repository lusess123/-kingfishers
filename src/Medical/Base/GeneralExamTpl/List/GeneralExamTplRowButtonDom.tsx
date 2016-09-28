import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import gridRowFile = require("./GeneralExamTplGridRowDom");
import buttonFile = require("./../../../../05tool/Button");
import baseRowButton = require("./../../../Common/List/MedicalBaseRowButtonDom");


export module GeneralExamTplRowButtonDom {
    export class GeneralExamTplRowButtonDomAction extends baseRowButton.MedicalBaseRowButtonDom.MedicalBaseRowButtonDomAction {
    }

    export class GeneralExamTplRowButtonDomReact extends baseRowButton.MedicalBaseRowButtonDom.MedicalBaseRowButtonDomReact<GeneralExamTplRowButtonDomProps, GeneralExamTplRowButtonDomStates, GeneralExamTplRowButtonDomAction> implements domCore.IReact {

        public state = new GeneralExamTplRowButtonDomStates();

        public pSender(): React.ReactElement<any> {
            return super.pSender();
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IGeneralExamTplRowButtonDomConfig extends baseRowButton.MedicalBaseRowButtonDom.IMedicalBaseRowButtonDomConfig {


    }

    export class GeneralExamTplRowButtonDomVm extends baseRowButton.MedicalBaseRowButtonDom.MedicalBaseRowButtonDomVm {
        public ReactType = GeneralExamTplRowButtonDomReact;

        public constructor(config?: IGeneralExamTplRowButtonDomConfig) {
            super(config);

        }

        protected btnFunCommond(name: string) {
            this.emitAppEvent("medical/base/generalexamtpl/rowbtnclick", this.UniId, name, this.Row.RowData.FID);
        }
    }
    export class GeneralExamTplRowButtonDomStates extends baseRowButton.MedicalBaseRowButtonDom.MedicalBaseRowButtonDomStates {
    }


    export class GeneralExamTplRowButtonDomProps extends baseRowButton.MedicalBaseRowButtonDom.MedicalBaseRowButtonDomProps<GeneralExamTplRowButtonDomVm>{
    }



}


