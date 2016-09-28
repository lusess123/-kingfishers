import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");
import dataFile = require("./../data");
import textFile = require("./../../../../02col/01single/Text");



export module UpdateSalaryItemRow {
    export class UpdateSalaryItemRowAction extends domCore.DomAction { }


    export class UpdateSalaryItemRowReact extends domCore.DomReact<UpdateSalaryItemRowProps, UpdateSalaryItemRowStates, UpdateSalaryItemRowAction> implements domCore.IReact {
        public state = new UpdateSalaryItemRowStates();

        public pSender(): React.ReactElement<any> {
            if (this.props.Vm.SalaryItemValue.SalaryItemID.Type == "输入项") {
                return <td>{
                    this.InputText() }
                </td>
            } else if (this.props.Vm.SalaryItemValue) {
                return <td>
                    {this.props.Vm.SalaryItemValue.Value}
                </td>
            } else {
                return <td></td>
            }
        }       
        public InputText() {
            if (!this.props.Vm.textVm) {

                var _vm = this.getInputVm(this.props.Vm.SalaryItemValue.Value, "notNull");
                this.props.Vm.textVm = _vm;
                _vm.onChangeHandle((str) => {
                    this.props.Vm.SalaryItemValue.Value = str;
                    this.props.Vm.SendToPage(str);
                    return true;
                });

            }
            return this.props.Vm.textVm.intoDom();
        }
        private getInputVm(val: string, legalKind: string, fun?: Function): textFile.ui.TextVm {

            var _bean = new textFile.ui.TextVm();
            _bean.dataValueSet(val);
            _bean.LegalObj.Kind = legalKind;

            return _bean;
        }

        protected pComponentDidMount() { super.pComponentDidMount(); }
    }

    export interface IReactUpdateSalaryItemRowVm extends domCore.DomVm {
        SalaryItemValue: dataFile.Data.ISalaryItemValue;
        textVm: textFile.ui.TextVm;
        SendToPage(str: string): void;
    }

    export interface IUpdateSalaryItemRowConfig {
        DataValue: dataFile.Data.ISalaryItemValue;
        UserData: dataFile.Data.IUsersData;
        Unid?: string;
    }

    export class UpdateSalaryItemRowVm extends domCore.DomVm implements IReactUpdateSalaryItemRowVm {
        public ReactType = UpdateSalaryItemRowReact;


        public SalaryItemValue: dataFile.Data.ISalaryItemValue;
        public Month: string;
        public UsersData: dataFile.Data.IUsersData;
        public textVm: textFile.ui.TextVm;
        public constructor(config?: IUpdateSalaryItemRowConfig) {
            super();
            if (config) {
                this.UsersData = config.UserData;
                this.UniId = config.Unid;
                this.SalaryItemValue = config.DataValue;
            }

        }
        public SendToPage(str: string) {
            this.SalaryItemValue.Value = str;
            var _data: dataFile.Data.ISingleItemDate = { UserID: this.UsersData, SalaryItemValue: this.SalaryItemValue }

            this.emitAppEvent("SendToPage", this.UniId, _data);
        }
    }

    export class UpdateSalaryItemRowStates extends domCore.DomStates {

    }

    export class UpdateSalaryItemRowProps extends domCore.DomProps<UpdateSalaryItemRowVm> { }
}