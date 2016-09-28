import domFile = require("./../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");
import Data = require("./../../Base/Anomaly/Data");
import Row = require("./PersonChargeRowDom");

export module PersonChargeGridFormDom {
    export class PersonChargeGridFormDomAction extends domCore.DomAction { }

    export class PersonChargeGridFormDomReact extends domCore.DomReact<PersonChargeGridFormDomProps, PersonChargeGridFormDomStates, PersonChargeGridFormDomAction> implements domCore.IReact {
        public state = new PersonChargeGridFormDomStates(); public pSender(): React.ReactElement<any> {
            return <table className="table table-striped table-bordered table-hover">
                <thead className="thead-default">
                    <tr>
                        <th>序号</th>
                        <th>体检项目</th>
                        <th>价格</th>
                        <th>状态</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.Vm.DataList ? this.props.Vm.DataList.map((a, index) => {
                        var data: Row.PersonChargeRowDom.IPersonChargeRowDomConfig = { Data: a, RowNumber: index+1 };
                        this.props.Vm.row = new Row.PersonChargeRowDom.PersonChargeRowDomVm(data);
                        return this.props.Vm.row.intoDom();
                    }):null}
                </tbody>
            </table>
        }

        protected pComponentDidMount() { super.pComponentDidMount(); }
    }

    export interface IReactPersonChargeGridFormDomVm extends domCore.DomVm { }

    export interface IPersonChargeGridFormDomConfig {
        //IPersonPay
        Data: Data.Anomaly.IPersonPay[];
    }

    export class PersonChargeGridFormDomVm extends domCore.DomVm implements IReactPersonChargeGridFormDomVm {
        public ReactType = PersonChargeGridFormDomReact;

        public DataList: Data.Anomaly.IPersonPay[];

        public row: Row.PersonChargeRowDom.PersonChargeRowDomVm;

        public constructor(config?: IPersonChargeGridFormDomConfig) {
            super();
            if (config) {
                this.DataList = config.Data;
            }
        }
    }

    export class PersonChargeGridFormDomStates extends domCore.DomStates { }

    export class PersonChargeGridFormDomProps extends domCore.DomProps<PersonChargeGridFormDomVm> { }
}