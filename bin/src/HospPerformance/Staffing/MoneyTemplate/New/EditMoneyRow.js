var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react", "./../../../../02col/01single/Text"], function (require, exports, domFile, React, textFile) {
    "use strict";
    var domCore = domFile.Core;
    var EditMoneyRow;
    (function (EditMoneyRow) {
        var EditMoneyRowAction = (function (_super) {
            __extends(EditMoneyRowAction, _super);
            function EditMoneyRowAction() {
                _super.apply(this, arguments);
            }
            return EditMoneyRowAction;
        }(domCore.DomAction));
        EditMoneyRow.EditMoneyRowAction = EditMoneyRowAction;
        var EditMoneyRowReact = (function (_super) {
            __extends(EditMoneyRowReact, _super);
            function EditMoneyRowReact() {
                _super.apply(this, arguments);
                this.state = new EditMoneyRowStates();
            }
            EditMoneyRowReact.prototype.inputValue = function (name) {
                var _this = this;
                if (!this.props.Vm.textVm) {
                    var _vm = this.getInputVm(this.props.Vm.SalaryItemValue.Value, "custom");
                    this.props.Vm.textVm = _vm;
                    _vm.LegalObj.CustomLegalFun = function (col) {
                        return _this.props.Vm.CheckValueFormat(_vm.TempDataValue, _vm);
                    };
                    _vm.onChangeHandle(function (str) {
                        _this.props.Vm.SalaryItemValue.Value = str;
                        return true;
                    });
                }
                return this.props.Vm.textVm.intoDom();
            };
            EditMoneyRowReact.prototype.getInputVm = function (val, legalKind, fun) {
                var _bean = new textFile.ui.TextVm();
                _bean.dataValueSet(val);
                _bean.LegalObj.Kind = legalKind;
                return _bean;
            };
            EditMoneyRowReact.prototype.pSender = function () {
                return React.createElement("tr", null, React.createElement("td", null, this.props.Vm.SalaryItemValue.SalaryItemID.Name), React.createElement("td", null, this.inputValue(this.props.Vm.SalaryItemValue.SalaryItemID.Name)));
            };
            EditMoneyRowReact.prototype.pComponentDidMount = function () { _super.prototype.pComponentDidMount.call(this); };
            return EditMoneyRowReact;
        }(domCore.DomReact));
        EditMoneyRow.EditMoneyRowReact = EditMoneyRowReact;
        var EditMoneyRowVm = (function (_super) {
            __extends(EditMoneyRowVm, _super);
            function EditMoneyRowVm(config) {
                _super.call(this);
                this.ReactType = EditMoneyRowReact;
                // public ItemValueESObj: EditSpanFile.EditSpan.EditSpanVm = new EditSpanFile.EditSpan.EditSpanVm();
                this.salaryItemData = { FID: "", Name: "", Fileds: "", Detail: "", Type: "" };
                this.SalaryItemValue = { SalaryItemID: { FID: "", Name: "", Fileds: "", Detail: "", Type: "" }, Value: "" };
                if (config) {
                    this.SalaryItemValue = config.Data;
                    //this.ItemValueESObj.Content="ssss";
                    //this.ItemValueESObj.IsChange=true;
                    this.UniId = config.Unid;
                }
            }
            EditMoneyRowVm.prototype.CheckValueFormat = function (value, vm) {
                if (value != "") {
                    var reg = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;
                    if (reg.test(value)) {
                        vm.LegalObj.LegalResult = false;
                        vm.showLegal();
                        return "";
                    }
                    else {
                        vm.LegalObj.LegalResult = true;
                        vm.LegalObj.ErrMsg = "输入正确格式";
                        return "输入正确格式！";
                    }
                }
                else {
                    vm.LegalObj.LegalResult = false;
                    vm.showLegal();
                    return "";
                }
            };
            EditMoneyRowVm.prototype.legal = function () {
                var legal = this.textVm.legal();
                var _res = legal;
                return _res;
            };
            return EditMoneyRowVm;
        }(domCore.DomVm));
        EditMoneyRow.EditMoneyRowVm = EditMoneyRowVm;
        var EditMoneyRowStates = (function (_super) {
            __extends(EditMoneyRowStates, _super);
            function EditMoneyRowStates() {
                _super.apply(this, arguments);
            }
            return EditMoneyRowStates;
        }(domCore.DomStates));
        EditMoneyRow.EditMoneyRowStates = EditMoneyRowStates;
        var EditMoneyRowProps = (function (_super) {
            __extends(EditMoneyRowProps, _super);
            function EditMoneyRowProps() {
                _super.apply(this, arguments);
            }
            return EditMoneyRowProps;
        }(domCore.DomProps));
        EditMoneyRow.EditMoneyRowProps = EditMoneyRowProps;
    })(EditMoneyRow = exports.EditMoneyRow || (exports.EditMoneyRow = {}));
});
