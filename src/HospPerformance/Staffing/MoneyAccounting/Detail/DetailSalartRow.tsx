import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");
import dataFile = require("./../data");



export module DetailSalartRow {
    export class DetailSalartRowAction extends domCore.DomAction { }


    export class DetailSalartRowReact extends domCore.DomReact<DetailSalartRowProps, DetailSalartRowStates, DetailSalartRowAction> implements domCore.IReact {
        public state = new DetailSalartRowStates();

        public pSender(): React.ReactElement<any> {
            return <tr><td>{this.props.Vm.UserData.FNumber}</td>
                <td>{this.props.Vm.UserData.TrueName}</td>
                <td>{this.props.Vm.Month}</td>
                {this.props.Vm.ItemTitle.map(b => {
                    if (b.Type != "绩效项") {
                        return <td>{this.GetValue(b.FID) }</td>
                    }
                }) }</tr>
        }
        public GetValue(b: string) {
            return this.props.Vm.GetValue(b);
        }
        protected pComponentDidMount() { super.pComponentDidMount(); }
    }

    export interface IReactDetailSalartRowVm extends domCore.DomVm {
        ItemTitle: dataFile.Data.SalaryItemValueOrCount[];
        UserData: dataFile.Data.IUsersData;
        SalaryItemSet: dataFile.Data.ISalaryItemSet;
        Month: string;
        GetValue(b: string): string;
    }

    export interface IDetailSalartRowConfig {
        Data?: dataFile.Data.SalaryItemValueOrCount[];
        UserData?: dataFile.Data.IUsersData;
        DataValue: dataFile.Data.ISalaryItemSet;
        Unid?: string;
        Month?: string;
    }

    export class DetailSalartRowVm extends domCore.DomVm implements IReactDetailSalartRowVm {
        public ReactType = DetailSalartRowReact;

        public ItemTitle: dataFile.Data.SalaryItemValueOrCount[] = [];
        public UserData: dataFile.Data.IUsersData;
        public SalaryItemSet: dataFile.Data.ISalaryItemSet;
        public Month: string;

        public constructor(config?: IDetailSalartRowConfig) {
            super();
            if (config) {
                this.ItemTitle = config.Data;
                this.UserData = config.UserData;
                this.SalaryItemSet = config.DataValue;
                this.UniId = config.Unid;
                this.Month = config.Month;
            }

        }
        public GetValue(b: string) {
            var value = "待计算";
            this.SalaryItemSet.SalaryItemValue.map(v => {
                if (v.SalaryItemID.FID == b) {
                    value = v.Value;
                }
            })
            return value;
        }
    }

    export class DetailSalartRowStates extends domCore.DomStates {

    }

    export class DetailSalartRowProps extends domCore.DomProps<DetailSalartRowVm> { }
}