import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");
import data = require("./../../data");


export module AnomalyConExamRowDom {
    export class AnomalyConExamRowDomAction extends domCore.DomAction { }


    export class AnomalyConExamRowDomReact extends domCore.DomReact<AnomalyConExamRowDomProps, AnomalyConExamRowDomStates, AnomalyConExamRowDomAction> implements domCore.IReact {
        public state = new AnomalyConExamRowDomStates();

        public pSender(): React.ReactElement<any> {
            return <tr>
                <td>{this.props.Vm.Data.ItemName}</td>
                <td>{this.props.Vm.Data.GreaterThan}</td>
                <td>{this.props.Vm.Data.LessThan}</td>
                <td>{this.props.Vm.Data.IsPositive? "是":"否"}</td>
                <td>{this.props.Vm.Data.KeyWord}</td>
            </tr>;
        }

        protected pComponentDidMount() { super.pComponentDidMount(); }
    }

    export interface IReactAnomalyConExamRowDomVm extends domCore.DomVm {

    }

    export interface IAnomalyConExamRowDomConfig {
        Unid: string;
        Data: data.Result.ItemTemplate;
    }

    export class AnomalyConExamRowDomVm extends domCore.DomVm implements IReactAnomalyConExamRowDomVm {
        public ReactType = AnomalyConExamRowDomReact;
        public Data: data.Result.ItemTemplate;

        public constructor(config?: IAnomalyConExamRowDomConfig) {
            super();
            if (config) {
                this.UniId = config.Unid;
                this.Data = config.Data;
            }
        }
    }

    export class AnomalyConExamRowDomStates extends domCore.DomStates {

    }

    export class AnomalyConExamRowDomProps extends domCore.DomProps<AnomalyConExamRowDomVm> { }
}