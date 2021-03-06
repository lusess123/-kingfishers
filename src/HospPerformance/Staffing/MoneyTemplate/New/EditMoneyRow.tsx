﻿import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");
import dataFile = require("./../data");
import modalFile = require("./../../../../05tool/Modal/ModalDom");
import EditMoneySettingPageFile = require("./EditMoneySettingPage");
import MoneySettingDom = require("./MoneySettingDom");
import textFile = require("./../../../../02col/01single/Text");

export module EditMoneyRow {
    export class EditMoneyRowAction extends domCore.DomAction { }


    export class EditMoneyRowReact extends domCore.DomReact<EditMoneyRowProps, EditMoneyRowStates, EditMoneyRowAction> implements domCore.IReact {
        public state = new EditMoneyRowStates();
        private inputValue(name: string): React.ReactElement<any> {

            if (!this.props.Vm.textVm) {
                var _vm = this.getInputVm(this.props.Vm.SalaryItemValue.Value, "custom");
                this.props.Vm.textVm = _vm;
                _vm.LegalObj.CustomLegalFun = (col) => {
                    return this.props.Vm.CheckValueFormat(_vm.TempDataValue, _vm);
                }
                _vm.onChangeHandle((str) => {
                    this.props.Vm.SalaryItemValue.Value = str;
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
        public pSender(): React.ReactElement<any> {
            return <tr>
                <td>{this.props.Vm.SalaryItemValue.SalaryItemID.Name}</td>
                <td>{this.inputValue(this.props.Vm.SalaryItemValue.SalaryItemID.Name) }</td>
            </tr>;
        }

        protected pComponentDidMount() { super.pComponentDidMount(); }
    }

    export interface IReactEditMoneyRowVm extends domCore.DomVm {
        //TextObj: textFile.ui.TextVm;
        //ItemValueESObj: EditSpanFile.EditSpan.EditSpanVm
        salaryItemData: dataFile.Data.ISalaryItem;
        SalaryItemValue: dataFile.Data.ISalaryItemValue;
        textVm: textFile.ui.TextVm;
    }

    export interface IEditMoneyRowConfig {
        Data?: dataFile.Data.ISalaryItemValue;
        Unid?: string;
    }

    export class EditMoneyRowVm extends domCore.DomVm implements IReactEditMoneyRowVm {
        public ReactType = EditMoneyRowReact;
        // public ItemValueESObj: EditSpanFile.EditSpan.EditSpanVm = new EditSpanFile.EditSpan.EditSpanVm();
        public salaryItemData: dataFile.Data.ISalaryItem = { FID: "", Name: "", Fileds: "", Detail: "", Type: "" };
        public SalaryItemValue: dataFile.Data.ISalaryItemValue;
        public rowObj: EditMoneySettingPageFile.EditMoneySettingPage.EditMoneySettingPageVm;
        public textVm: textFile.ui.TextVm;
        public constructor(config?: IEditMoneyRowConfig) {
            super();
            this.SalaryItemValue = { SalaryItemID: { FID: "", Name: "", Fileds: "", Detail: "", Type: "" }, Value: "" };
            if (config) {
                this.SalaryItemValue = config.Data;
                //this.ItemValueESObj.Content="ssss";
                //this.ItemValueESObj.IsChange=true;

                this.UniId = config.Unid;

            }
        }
        public CheckValueFormat(value: string, vm: textFile.ui.TextVm) {
            if (value != "") {
                var reg = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;
                if (reg.test(value)) {
                    vm.LegalObj.LegalResult = false;
                    vm.showLegal();
                    return "";
                } else {
                    vm.LegalObj.LegalResult = true;
                    vm.LegalObj.ErrMsg = "输入正确格式"
                    return "输入正确格式！";
                }
            } else {
                vm.LegalObj.LegalResult = false;
                vm.showLegal();
                return "";
            }
        }
        public legal(): boolean {
            var legal = this.textVm.legal();
            var _res = legal;
            return _res;
        }

    }

    export class EditMoneyRowStates extends domCore.DomStates {

    }

    export class EditMoneyRowProps extends domCore.DomProps<EditMoneyRowVm> { }
}