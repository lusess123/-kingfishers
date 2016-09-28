import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");
import dataFile = require("./../data");



export module UpdateSalaryTitleRow {
    export class UpdateSalaryTitleRowAction extends domCore.DomAction { }


    export class UpdateSalaryTitleRowReact extends domCore.DomReact<UpdateSalaryTitleRowProps, UpdateSalaryTitleRowStates, UpdateSalaryTitleRowAction> implements domCore.IReact {
        public state = new UpdateSalaryTitleRowStates();

        public pSender(): React.ReactElement<any> {
            return <th>{this.props.Vm.ItemTitle.Name}</th>;
        }
        protected pComponentDidMount() { super.pComponentDidMount(); }
    }

    export interface IReactUpdateSalaryTitleRowVm extends domCore.DomVm {
        ItemTitle: dataFile.Data.SalaryItemValueOrCount;
    }

    export interface IUpdateSalaryTitleRowConfig {
        Data?: dataFile.Data.SalaryItemValueOrCount;
        Unid?: string;
    }

    export class UpdateSalaryTitleRowVm extends domCore.DomVm implements IReactUpdateSalaryTitleRowVm {
        public ReactType = UpdateSalaryTitleRowReact;

        public ItemTitle: dataFile.Data.SalaryItemValueOrCount;

        public constructor(config?: IUpdateSalaryTitleRowConfig) {
            super();
            if (config) {
                this.ItemTitle = config.Data;
                this.UniId = config.Unid;
            }

        }
    }

    export class UpdateSalaryTitleRowStates extends domCore.DomStates {

    }

    export class UpdateSalaryTitleRowProps extends domCore.DomProps<UpdateSalaryTitleRowVm> { }
}