import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");
import dataFile = require("./../data");



export module DetailSalaryItemTitleRow {
    export class DetailSalaryItemTitleRowAction extends domCore.DomAction { }


    export class DetailSalaryItemTitleRowReact extends domCore.DomReact<DetailSalaryItemTitleRowProps, DetailSalaryItemTitleRowStates, DetailSalaryItemTitleRowAction> implements domCore.IReact {
        public state = new DetailSalaryItemTitleRowStates();

        public pSender(): React.ReactElement<any> {
            return <th>{this.props.Vm.ItemTitle.Name}</th>;
        }
        protected pComponentDidMount() { super.pComponentDidMount(); }
    }

    export interface IReactDetailSalaryItemTitleRowVm extends domCore.DomVm {
        ItemTitle: dataFile.Data.SalaryItemValueOrCount;
    }

    export interface IDetailSalaryItemTitleRowConfig {
        Data?: dataFile.Data.SalaryItemValueOrCount;
        Unid?: string;        
    }

    export class DetailSalaryItemTitleRowVm extends domCore.DomVm implements IReactDetailSalaryItemTitleRowVm {
        public ReactType = DetailSalaryItemTitleRowReact;

        public ItemTitle: dataFile.Data.SalaryItemValueOrCount;

        public constructor(config?: IDetailSalaryItemTitleRowConfig) {
            super();
            if (config) {
                this.ItemTitle = config.Data;
                this.UniId = config.Unid;
            }

        }
    }

    export class DetailSalaryItemTitleRowStates extends domCore.DomStates {

    }

    export class DetailSalaryItemTitleRowProps extends domCore.DomProps<DetailSalaryItemTitleRowVm> { }
}