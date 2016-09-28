import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");
import dataFile = require("./../data");
import textFile = require("./../../../../02col/01single/Text");
import UpdateSalaryItemRow = require("./UpdateSalaryItemRow")

export module UpdateSalaryRow {
    export class UpdateSalaryRowAction extends domCore.DomAction { }


    export class UpdateSalaryRowReact extends domCore.DomReact<UpdateSalaryRowProps, UpdateSalaryRowStates, UpdateSalaryRowAction> implements domCore.IReact {
        public state = new UpdateSalaryRowStates();

        public pSender(): React.ReactElement<any> {
            return <tr><td>{this.props.Vm.UserData.FNumber}</td>
                <td>{this.props.Vm.UserData.TrueName}</td>
                <td>{this.props.Vm.Month}</td>
                {this.props.Vm.SalaryItemRowList.map(b => {
                    return b.intoDom()
                }) }</tr>
        }
        protected pComponentDidMount() { super.pComponentDidMount(); }
    }

    export interface IReactUpdateSalaryRowVm extends domCore.DomVm {
        ItemTitle: dataFile.Data.SalaryItemValueOrCount[];
        UserData: dataFile.Data.IUsersData;
        SalaryItemSet: dataFile.Data.ISalaryItemSet;
        Month: string;

        textVm: textFile.ui.TextVm;
        SalaryItemRowList: UpdateSalaryItemRow.UpdateSalaryItemRow.UpdateSalaryItemRowVm[];
    }

    export interface IUpdateSalaryRowConfig {
        Data?: dataFile.Data.SalaryItemValueOrCount[];
        UserData?: dataFile.Data.IUsersData;
        DataValue: dataFile.Data.ISalaryItemSet;
        Unid?: string;
        Month?: string;
    }

    export class UpdateSalaryRowVm extends domCore.DomVm implements IReactUpdateSalaryRowVm {
        public ReactType = UpdateSalaryRowReact;

        public SalaryItemRowList: UpdateSalaryItemRow.UpdateSalaryItemRow.UpdateSalaryItemRowVm[] = [];
        public ItemTitle: dataFile.Data.SalaryItemValueOrCount[] = [];
        public UserData: dataFile.Data.IUsersData;
        public SalaryItemSet: dataFile.Data.ISalaryItemSet;
        public Month: string;
        public textVm: textFile.ui.TextVm;
        public constructor(config?: IUpdateSalaryRowConfig) {
            super();
            if (config) {
                this.ItemTitle = config.Data;
                this.UserData = config.UserData;
                this.SalaryItemSet = config.DataValue;
                this.UniId = config.Unid;
                this.Month = config.Month;
                this.ItemTitle.map(a => {
                    if (a.Type != "绩效项") {
                        var _config: UpdateSalaryItemRow.UpdateSalaryItemRow.IUpdateSalaryItemRowConfig = { DataValue: "", UserData: this.UserData, Unid: this.UniId }
                        this.SalaryItemSet.SalaryItemValue.map(v => {
                            if (v.SalaryItemID.FID == a.FID) {
                                _config.DataValue = v;
                            }
                        })
                        var _row = new UpdateSalaryItemRow.UpdateSalaryItemRow.UpdateSalaryItemRowVm(_config);
                        _row.IsChange = true;
                        _row.IsMulit = true;
                        this.SalaryItemRowList.push(_row);
                    }
                })
            }

        }

    }

    export class UpdateSalaryRowStates extends domCore.DomStates {

    }

    export class UpdateSalaryRowProps extends domCore.DomProps<UpdateSalaryRowVm> { }
}