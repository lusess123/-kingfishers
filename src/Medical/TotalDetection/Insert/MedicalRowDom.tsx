import domFile = require("./../../../01core/0Dom");
import iocFile = require("./../../../01core/Ioc");
//import domFile = require("./../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import basewedPageFile = require("./../../../04page/BaseWebPage");
import pagination = require("./../../../05tool/Pagination");
import React = require("react");
import ReactDOM = require("react-dom");
import buttonFile = require("./../../../05tool/Button");
import dataFile = require("./../data");
export module MedicalRowDom {
    export class MedicalRowDomAction extends domCore.DomAction {
    }

    export class MedicalRowDomReact extends domCore.DomReact<MedicalRowDomProps, MedicalRowDomStates, MedicalRowDomAction> implements domCore.IReact {

        public state = new MedicalRowDomStates();

        public pSender(): React.ReactElement<any> {
            return (
                <tr>
                    <td>{this.props.Vm.rowNumber + 1}</td>
                    <td>{this.props.Vm.RowData.Name}</td>
                    <td>
                        {this.props.Vm.isedit ? null : <a className="text-danger"  onClick={() => { this.props.Vm.delOpt(this.props.Vm.rowNumber) } }>删除</a>}</td>
                </tr>
            )
        }

        private fun_titleClick() {
            this.props.Vm.IsFormHide = !this.props.Vm.IsFormHide;
            this.forceUpdate();
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IMedicalRowDomConfig {
        RowData: dataFile.DetectionData.AnomalyTemplate;
        rowNumber: number;
        Unit: string
        isedit?: boolean;
    }

    export class MedicalRowDomVm extends domCore.DomVm {
        public ReactType = MedicalRowDomReact;
        public RowData: dataFile.DetectionData.AnomalyTemplate;
        public IsFormHide: boolean;
        public rowNumber: number;
        public isedit: boolean;

        public constructor(config?: IMedicalRowDomConfig) {
            super();
            if (config) {
                this.RowData = config.RowData;
                this.rowNumber = config.rowNumber
                this.UniId = config.Unit
                this.isedit = config.isedit;
            }

        }
        public delOpt(vals: number) {
            
            if (confirm("你确定要删除 所选中的数据吗 ？？")) {
                this.emitAppEvent("medical/Anomaly/tools/delAllAnomalyConclusion", this.UniId, vals);

            }
        }
    }
    export class MedicalRowDomStates extends domCore.DomStates {
    }


    export class MedicalRowDomProps extends domCore.DomProps<MedicalRowDomVm>{
    }



}


