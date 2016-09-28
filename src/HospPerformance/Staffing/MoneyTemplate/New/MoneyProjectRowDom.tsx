import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");
import dataFile = require("./../data");
import modalFile = require("./../../../../05tool/Modal/ModalDom");
//import EditMoneySettingPageFile = require("./EditMoneySettingPage");
import MoneyProjectDom = require("./MoneyProjectDom");
import textFile = require("./../../../../02col/01single/Text");

export module MoneyProjectRowDom {
    export class MoneyProjectRowDomAction extends domCore.DomAction { }


    export class MoneyProjectRowDomReact extends domCore.DomReact<MoneyProjectRowDomProps, MoneyProjectRowDomStates, MoneyProjectRowDomAction> implements domCore.IReact {
        public state = new MoneyProjectRowDomStates();
        private inputValue(name: string, fid: string, filesd: string, type: string, detail: string): React.ReactElement<any> {

            if (!this.props.Vm.textVm) {
                if (type != "计算项" && this.props.Vm.ItemValueOrCount.ValueOrCount == "") {
                    this.props.Vm.ItemValueOrCount.ValueOrCount = "10";
                }
                var _vm = this.getInputVm(this.props.Vm.ItemValueOrCount.ValueOrCount, "custom");
                this.props.Vm.textVm = _vm;
                _vm.onChangeHandle((str) => {
                    this.props.Vm.ItemValueOrCount.ValueOrCount = str;
                    this.props.Vm.SendToPage(str, name, fid, filesd, type, detail);
                    return true;
                });
                _vm.LegalObj.CustomLegalFun = (col) => {
                    return this.props.Vm.CheckValueFormat(_vm.TempDataValue, type, _vm);
                }

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
                <td>{this.props.Vm.ItemValueOrCount.Name}</td>
                <td>{this.props.Vm.ItemValueOrCount.Type}</td>
                <td>{this.inputValue(this.props.Vm.ItemValueOrCount.Name, this.props.Vm.ItemValueOrCount.FID, this.props.Vm.ItemValueOrCount.Fileds, this.props.Vm.ItemValueOrCount.Type, this.props.Vm.ItemValueOrCount.Detail) }</td>
                <td>{this.props.Vm.ItemValueOrCount.Detail}</td>
            </tr>;
        }

        protected pComponentDidMount() { super.pComponentDidMount(); }
    }

    export interface IReactMoneyProjectRowDomVm extends domCore.DomVm {
        //TextObj: textFile.ui.TextVm;
        //ItemValueESObj: EditSpanFile.EditSpan.EditSpanVm
        //salaryItemData: dataFile.Data.ISalaryItem;
        ItemValueOrCount: dataFile.Data.SalaryItemValueOrCount;
        textVm: textFile.ui.TextVm;
        SendToPage(str: string, name: string, fid: string, filesd: string, type: string, detail: string): void;
    }

    export interface IMoneyProjectRowDomConfig {
        Data?: dataFile.Data.SalaryItemValueOrCount;
        Unid?: string;
    }

    export class MoneyProjectRowDomVm extends domCore.DomVm implements IReactMoneyProjectRowDomVm {
        public ReactType = MoneyProjectRowDomReact;
        // public ItemValueESObj: EditSpanFile.EditSpan.EditSpanVm = new EditSpanFile.EditSpan.EditSpanVm();
        //public salaryItemData: dataFile.Data.ISalaryItem = { FID: "", Name: "", Fileds: "", Detail: "", Type: "" };
        public ItemValueOrCount: dataFile.Data.SalaryItemValueOrCount;
        public textVm: textFile.ui.TextVm;
        public constructor(config?: IMoneyProjectRowDomConfig) {
            super();
            this.ItemValueOrCount = { FID: "", Detail: "", Name: "", Fileds: "", Type: "", ValueOrCount: "" };
            if (config) {
                this.ItemValueOrCount = config.Data;
                //this.ItemValueESObj.Content="ssss";
                //this.ItemValueESObj.IsChange=true;

                this.UniId = config.Unid;

            }
        }
        public SendToPage(str: string, name: string, fid: string, filesd: string, type: string, detail: string) { 
                var _data: dataFile.Data.SalaryItemValueOrCount = { FID: "", Detail: "", Fileds: "", Name: "", Type: "", ValueOrCount: "" };
                _data.FID = fid;
                _data.Name = name;
                _data.Fileds = filesd;
                _data.Type = type;
                _data.Detail = detail;
                _data.ValueOrCount = str;
                this.emitAppEvent("SendToPage", this.UniId, _data);
        }
        public CheckValueFormat(value: string, type: string, vm: textFile.ui.TextVm) {
            if (value!="") {
                if (type == "输入项") {
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

    export class MoneyProjectRowDomStates extends domCore.DomStates {

    }

    export class MoneyProjectRowDomProps extends domCore.DomProps<MoneyProjectRowDomVm> { }
}