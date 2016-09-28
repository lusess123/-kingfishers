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
                <td>{this.props.Vm.DeptrData.DeptName}</td>
                <td>{this.props.Vm.DeptrData.ConclusionName}</td>
                <td>{this.props.Vm.DeptrData.ConclusionContent}</td>
                <td><i onClick={() => { this.props.Vm.getItemTable() } }>查看</i></td>

            </tr>;
        }

        protected pComponentDidMount() { super.pComponentDidMount(); }
    }

    export interface IReactDeptConclusionRowDomVm extends domCore.DomVm {

    }

    export interface IDeptConclusionRowDomConfig {
        Data?: data.Result.DepartTemplate;
        Unid?: string;
    }

    export class DeptConclusionRowDomVm extends domCore.DomVm implements IReactDeptConclusionRowDomVm {
        public ReactType = DeptConclusionRowDomReact;
        //public dataList = new Array<data.Result.DepartTemplate>();

        public DeptrData: data.Result.DepartTemplate = { FID: "", DeptName: "", ConclusionContent: "", ConclusionName: "" };
        public constructor(config?: IDeptConclusionRowDomConfig) {
            super();
            if (config) {
                //this.dataList = config.derpartData.List;
                this.DeptrData = config.Data;
                this.UniId = config.Unid;
            }
        }

        public getCheck() {
            this.emitAppEvent("medical/Departments/tools/DeptConclusion", this.UniId, this.DeptrData.ConclusionContent);

            this.emitAppEvent("modal-close", this.UniId);
        }


        public getItemTable() {
            //medical / Departments / tool / DeptConclusion
            this.emitAppEvent("medical/Departments/tool/DeptConclusion", this.UniId, this.DeptrData.FID);
        }
    }

    export class DeptConclusionRowDomStates extends domCore.DomStates {

    }

    export class DeptConclusionRowDomProps extends domCore.DomProps<DeptConclusionRowDomVm> { }
}