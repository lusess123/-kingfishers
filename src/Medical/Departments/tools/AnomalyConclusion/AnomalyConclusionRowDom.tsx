import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");
import data = require("./../../data");


export module AnomalyConclusionRowDom {
    export class AnomalyConclusionRowDomAction extends domCore.DomAction { }


    export class AnomalyConclusionRowDomReact extends domCore.DomReact<AnomalyConclusionRowDomProps, AnomalyConclusionRowDomStates, AnomalyConclusionRowDomAction> implements domCore.IReact {
        public state = new AnomalyConclusionRowDomStates();

        public pSender(): React.ReactElement<any> {
            return <tr>
                <td><span>
                    <i  className=" fa fa-circle-o"
                        onClick={() => { this.props.Vm.getCheck() } }
                        ></i>
                </span></td>
                <td>{this.props.Vm.AnomalyrData.Name}</td>
                <td><i onClick={() => { this.props.Vm.getItemTable() } }>查看</i></td>

            </tr>;
        }

        protected pComponentDidMount() { super.pComponentDidMount(); }
    }

    export interface IReactAnomalyConclusionRowDomVm extends domCore.DomVm {

    }

    export interface IAnomalyConclusionRowDomConfig {
        Data?: data.Result.AnomalyTemplate;
        Unid?: string;
    }

    export class AnomalyConclusionRowDomVm extends domCore.DomVm implements IReactAnomalyConclusionRowDomVm {
        public ReactType = AnomalyConclusionRowDomReact;
        //public dataList = new Array<data.Result.DepartTemplate>();

        public AnomalyrData: data.Result.AnomalyTemplate = { FID: "",Name:""};
        public constructor(config?: IAnomalyConclusionRowDomConfig) {
            super();
            if (config) {
                //this.dataList = config.derpartData.List;
                this.AnomalyrData = config.Data;
                this.UniId = config.Unid;
            }
        }

        public getCheck() {
            this.emitAppEvent("medical/Anomaly/tools/AnomalyConclusion", this.UniId, this.AnomalyrData.FID, this.AnomalyrData.Name);
            this.emitAppEvent("modal-close", this.UniId);

        }


        public getItemTable() {
            //medical / Departments / tool / AnomalyConclusion
            this.emitAppEvent("medical/Departments/tools/AnomalyConclusion", this.UniId, this.AnomalyrData.FID);
        }
    }

    export class AnomalyConclusionRowDomStates extends domCore.DomStates {

    }

    export class AnomalyConclusionRowDomProps extends domCore.DomProps<AnomalyConclusionRowDomVm> { }
}