import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import gridRowFile = require("./DeptConclusionTplGridRowDom");
import buttonFile = require("./../../../../05tool/Button");
import baseRowButton = require("./../../../Common/List/MedicalBaseRowButtonDom");


export module DeptConclusionTplRowButtonDom {
    export class DeptConclusionTplRowButtonDomAction extends baseRowButton.MedicalBaseRowButtonDom.MedicalBaseRowButtonDomAction {
    }

    export class DeptConclusionTplRowButtonDomReact extends baseRowButton.MedicalBaseRowButtonDom.MedicalBaseRowButtonDomReact<DeptConclusionTplRowButtonDomProps, DeptConclusionTplRowButtonDomStates, DeptConclusionTplRowButtonDomAction> implements domCore.IReact {

        public state = new DeptConclusionTplRowButtonDomStates();

        public pSender(): React.ReactElement<any> {
            return super.pSender();
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IDeptConclusionTplRowButtonDomConfig extends baseRowButton.MedicalBaseRowButtonDom.IMedicalBaseRowButtonDomConfig {


    }

    export class DeptConclusionTplRowButtonDomVm extends baseRowButton.MedicalBaseRowButtonDom.MedicalBaseRowButtonDomVm {
        public ReactType = DeptConclusionTplRowButtonDomReact;

        public constructor(config?: IDeptConclusionTplRowButtonDomConfig) {
            super(config);

        }

        protected btnFunCommond(name: string) {
            this.emitAppEvent("medical/base/deptconclusiontpl/rowbtnclick", this.UniId, name, this.Row.RowData.FID);
        }

    }
    export class DeptConclusionTplRowButtonDomStates extends baseRowButton.MedicalBaseRowButtonDom.MedicalBaseRowButtonDomStates {
    }


    export class DeptConclusionTplRowButtonDomProps extends baseRowButton.MedicalBaseRowButtonDom.MedicalBaseRowButtonDomProps<DeptConclusionTplRowButtonDomVm>{
    }



}


