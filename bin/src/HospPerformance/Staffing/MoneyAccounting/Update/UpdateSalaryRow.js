var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react", "./UpdateSalaryItemRow"], function (require, exports, domFile, React, UpdateSalaryItemRow) {
    "use strict";
    var domCore = domFile.Core;
    var UpdateSalaryRow;
    (function (UpdateSalaryRow) {
        var UpdateSalaryRowAction = (function (_super) {
            __extends(UpdateSalaryRowAction, _super);
            function UpdateSalaryRowAction() {
                _super.apply(this, arguments);
            }
            return UpdateSalaryRowAction;
        }(domCore.DomAction));
        UpdateSalaryRow.UpdateSalaryRowAction = UpdateSalaryRowAction;
        var UpdateSalaryRowReact = (function (_super) {
            __extends(UpdateSalaryRowReact, _super);
            function UpdateSalaryRowReact() {
                _super.apply(this, arguments);
                this.state = new UpdateSalaryRowStates();
            }
            UpdateSalaryRowReact.prototype.pSender = function () {
                return React.createElement("tr", null, React.createElement("td", null, this.props.Vm.UserData.FNumber), React.createElement("td", null, this.props.Vm.UserData.TrueName), React.createElement("td", null, this.props.Vm.Month), this.props.Vm.SalaryItemRowList.map(function (b) {
                    return b.intoDom();
                }));
            };
            UpdateSalaryRowReact.prototype.pComponentDidMount = function () { _super.prototype.pComponentDidMount.call(this); };
            return UpdateSalaryRowReact;
        }(domCore.DomReact));
        UpdateSalaryRow.UpdateSalaryRowReact = UpdateSalaryRowReact;
        var UpdateSalaryRowVm = (function (_super) {
            __extends(UpdateSalaryRowVm, _super);
            function UpdateSalaryRowVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = UpdateSalaryRowReact;
                this.SalaryItemRowList = [];
                this.ItemTitle = [];
                if (config) {
                    this.ItemTitle = config.Data;
                    this.UserData = config.UserData;
                    this.SalaryItemSet = config.DataValue;
                    this.UniId = config.Unid;
                    this.Month = config.Month;
                    this.ItemTitle.map(function (a) {
                        if (a.Type != "绩效项") {
                            var _config = { DataValue: "", UserData: _this.UserData, Unid: _this.UniId };
                            _this.SalaryItemSet.SalaryItemValue.map(function (v) {
                                if (v.SalaryItemID.FID == a.FID) {
                                    _config.DataValue = v;
                                }
                            });
                            var _row = new UpdateSalaryItemRow.UpdateSalaryItemRow.UpdateSalaryItemRowVm(_config);
                            _row.IsChange = true;
                            _row.IsMulit = true;
                            _this.SalaryItemRowList.push(_row);
                        }
                    });
                }
            }
            return UpdateSalaryRowVm;
        }(domCore.DomVm));
        UpdateSalaryRow.UpdateSalaryRowVm = UpdateSalaryRowVm;
        var UpdateSalaryRowStates = (function (_super) {
            __extends(UpdateSalaryRowStates, _super);
            function UpdateSalaryRowStates() {
                _super.apply(this, arguments);
            }
            return UpdateSalaryRowStates;
        }(domCore.DomStates));
        UpdateSalaryRow.UpdateSalaryRowStates = UpdateSalaryRowStates;
        var UpdateSalaryRowProps = (function (_super) {
            __extends(UpdateSalaryRowProps, _super);
            function UpdateSalaryRowProps() {
                _super.apply(this, arguments);
            }
            return UpdateSalaryRowProps;
        }(domCore.DomProps));
        UpdateSalaryRow.UpdateSalaryRowProps = UpdateSalaryRowProps;
    })(UpdateSalaryRow = exports.UpdateSalaryRow || (exports.UpdateSalaryRow = {}));
});
