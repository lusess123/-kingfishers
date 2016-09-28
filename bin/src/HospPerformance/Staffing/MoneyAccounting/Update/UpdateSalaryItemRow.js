var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react", "./../../../../02col/01single/Text"], function (require, exports, domFile, React, textFile) {
    "use strict";
    var domCore = domFile.Core;
    var UpdateSalaryItemRow;
    (function (UpdateSalaryItemRow) {
        var UpdateSalaryItemRowAction = (function (_super) {
            __extends(UpdateSalaryItemRowAction, _super);
            function UpdateSalaryItemRowAction() {
                _super.apply(this, arguments);
            }
            return UpdateSalaryItemRowAction;
        }(domCore.DomAction));
        UpdateSalaryItemRow.UpdateSalaryItemRowAction = UpdateSalaryItemRowAction;
        var UpdateSalaryItemRowReact = (function (_super) {
            __extends(UpdateSalaryItemRowReact, _super);
            function UpdateSalaryItemRowReact() {
                _super.apply(this, arguments);
                this.state = new UpdateSalaryItemRowStates();
            }
            UpdateSalaryItemRowReact.prototype.pSender = function () {
                if (this.props.Vm.SalaryItemValue.SalaryItemID.Type == "输入项") {
                    return React.createElement("td", null, this.InputText());
                }
                else if (this.props.Vm.SalaryItemValue) {
                    return React.createElement("td", null, this.props.Vm.SalaryItemValue.Value);
                }
                else {
                    return React.createElement("td", null);
                }
            };
            UpdateSalaryItemRowReact.prototype.InputText = function () {
                var _this = this;
                if (!this.props.Vm.textVm) {
                    var _vm = this.getInputVm(this.props.Vm.SalaryItemValue.Value, "notNull");
                    this.props.Vm.textVm = _vm;
                    _vm.onChangeHandle(function (str) {
                        _this.props.Vm.SalaryItemValue.Value = str;
                        _this.props.Vm.SendToPage(str);
                        return true;
                    });
                }
                return this.props.Vm.textVm.intoDom();
            };
            UpdateSalaryItemRowReact.prototype.getInputVm = function (val, legalKind, fun) {
                var _bean = new textFile.ui.TextVm();
                _bean.dataValueSet(val);
                _bean.LegalObj.Kind = legalKind;
                return _bean;
            };
            UpdateSalaryItemRowReact.prototype.pComponentDidMount = function () { _super.prototype.pComponentDidMount.call(this); };
            return UpdateSalaryItemRowReact;
        }(domCore.DomReact));
        UpdateSalaryItemRow.UpdateSalaryItemRowReact = UpdateSalaryItemRowReact;
        var UpdateSalaryItemRowVm = (function (_super) {
            __extends(UpdateSalaryItemRowVm, _super);
            function UpdateSalaryItemRowVm(config) {
                _super.call(this);
                this.ReactType = UpdateSalaryItemRowReact;
                if (config) {
                    this.UsersData = config.UserData;
                    this.UniId = config.Unid;
                    this.SalaryItemValue = config.DataValue;
                }
            }
            UpdateSalaryItemRowVm.prototype.SendToPage = function (str) {
                this.SalaryItemValue.Value = str;
                var _data = { UserID: this.UsersData, SalaryItemValue: this.SalaryItemValue };
                this.emitAppEvent("SendToPage", this.UniId, _data);
            };
            return UpdateSalaryItemRowVm;
        }(domCore.DomVm));
        UpdateSalaryItemRow.UpdateSalaryItemRowVm = UpdateSalaryItemRowVm;
        var UpdateSalaryItemRowStates = (function (_super) {
            __extends(UpdateSalaryItemRowStates, _super);
            function UpdateSalaryItemRowStates() {
                _super.apply(this, arguments);
            }
            return UpdateSalaryItemRowStates;
        }(domCore.DomStates));
        UpdateSalaryItemRow.UpdateSalaryItemRowStates = UpdateSalaryItemRowStates;
        var UpdateSalaryItemRowProps = (function (_super) {
            __extends(UpdateSalaryItemRowProps, _super);
            function UpdateSalaryItemRowProps() {
                _super.apply(this, arguments);
            }
            return UpdateSalaryItemRowProps;
        }(domCore.DomProps));
        UpdateSalaryItemRow.UpdateSalaryItemRowProps = UpdateSalaryItemRowProps;
    })(UpdateSalaryItemRow = exports.UpdateSalaryItemRow || (exports.UpdateSalaryItemRow = {}));
});
