import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");
import data = require("./../../data");


export module DeptConclusionRowDom {
    export class DeptConclusionRowDomAction extends domCore.DomAction { }


    export class DeptConclusionRowDomReact extends domCore.DomReact<DeptConclusionRowDomProps, DeptConclusionRowDomStates, DeptConclusionRowDomAction> implements domCore.IReact {
        public state = new DeptConclusionRowDomStates();

        public pSender(): React.ReactElement<any> {
            return <tr>
                <td><span>
                    <i  className=" fa fa-circle-o"
                        onClick={() => { this.props.Vm.getCheck() } }
                        ></i>
                </span></td>
                <td>{this.props.Vm.AdviceData.Name}</td>
                <td>{this.props.Vm.AdviceData.Summary}</td>
                <td>{this.props.Vm.AdviceData.Advice}</td>

            </tr>;
        }

        protected pComponentDidMount() { super.pComponentDidMount(); }
    }

    export interface IReactDeptConclusionRowDomVm extends domCore.DomVm {

    }

    export interface IDeptConclusionRowDomConfig {
        Data?: data.DetectionData.IDocterAdviceData;
        Unid?: string;
    }

    export class DeptConclusionRowDomVm extends domCore.DomVm implements IReactDeptConclusionRowDomVm {
        public ReactType = DeptConclusionRowDomReact;
        //public dataList = new Array<data.Result.DepartTemplate>();

        public AdviceData: data.DetectionData.IDocterAdviceData = { FID: "", Name: "", Summary: "", Advice: "" };
        public constructor(config?: IDeptConclusionRowDomConfig) {
            super();
            if (config) {
                //this.dataList = config.derpartData.List;
                this.AdviceData = config.Data;
                this.UniId = config.Unid;
            }
        }

        public getCheck() {
            this.emitAppEvent("medical/TotalDetection/Tools/AdviceConclusion", this.UniId, this.AdviceData.Advice);

            this.emitAppEvent("modal-close", this.UniId);

            this.emitAppEvent("medical/TotalDetection/Tools/AdviceConclusion1", this.UniId, this.AdviceData.Summary);

            this.emitAppEvent("modal-close", this.UniId);
        }
    }

    export class DeptConclusionRowDomStates extends domCore.DomStates {

    }

    export class DeptConclusionRowDomProps extends domCore.DomProps<DeptConclusionRowDomVm> { }
}