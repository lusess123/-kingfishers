import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");
import data = require("./../../data");


export module DeptConExamRowDom {
    export class DeptConExamRowDomAction extends domCore.DomAction { }


    export class DeptConExamRowDomReact extends domCore.DomReact<DeptConExamRowDomProps, DeptConExamRowDomStates, DeptConExamRowDomAction> implements domCore.IReact {
        public state = new DeptConExamRowDomStates();

        public pSender(): React.ReactElement<any> {
            return <tr>
                <td>{this.props.Vm.Data.ItemName}</td>
                <td>{this.props.Vm.Data.GreaterThan}</td>
                <td>{this.props.Vm.Data.LessThan}</td>
                <td>{this.sender(this.props.Vm.Data.IsPositive) }</td>
                <td>{this.props.Vm.Data.KeyWord}</td>
            </tr>;
        }

        public sender(isPostitive: string) {
            if (isPostitive == "True") {
                return "是";
            } else if (isPostitive == "False") {
                return "否";
            }
        }

        protected pComponentDidMount() { super.pComponentDidMount(); }
    }

    export interface IReactDeptConExamRowDomVm extends domCore.DomVm {

    }

    export interface IDeptConExamRowDomConfig {
        Unid: string;
        Data: data.Result.ItemTemplate;
    }

    export class DeptConExamRowDomVm extends domCore.DomVm implements IReactDeptConExamRowDomVm {
        public ReactType = DeptConExamRowDomReact;
        public Data: data.Result.ItemTemplate;

        public constructor(config?: IDeptConExamRowDomConfig) {
            super();
            if (config) {
                this.UniId = config.Unid;
                this.Data = config.Data;
            }
        }
    }

    export class DeptConExamRowDomStates extends domCore.DomStates {

    }

    export class DeptConExamRowDomProps extends domCore.DomProps<DeptConExamRowDomVm> { }
}