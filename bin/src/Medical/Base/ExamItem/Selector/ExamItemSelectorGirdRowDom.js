var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../../02col/02Mulite/SingleCheckBox", "./../../../Common/RowButtonExpandDom", "./../../../../02col/01single/Radio"], function (require, exports, React, domFile, singleCheckFile, expandFile, radioFile) {
    "use strict";
    var domCore = domFile.Core;
    var ExamItemSelectorGirdRow;
    (function (ExamItemSelectorGirdRow) {
        var ExamItemSelectorGirdRowAction = (function (_super) {
            __extends(ExamItemSelectorGirdRowAction, _super);
            function ExamItemSelectorGirdRowAction() {
                _super.apply(this, arguments);
            }
            return ExamItemSelectorGirdRowAction;
        }(domCore.DomAction));
        ExamItemSelectorGirdRow.ExamItemSelectorGirdRowAction = ExamItemSelectorGirdRowAction;
        var ExamItemSelectorGirdRowReact = (function (_super) {
            __extends(ExamItemSelectorGirdRowReact, _super);
            function ExamItemSelectorGirdRowReact() {
                _super.apply(this, arguments);
                this.state = new ExamItemSelectorGirdRowStates();
            }
            ExamItemSelectorGirdRowReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("tr", {onClick: function () { _this.trClick_fun(); }, className: (this.props.Vm.SingleCheckVm.vmDataValueGet() == "true" || this.props.Vm.RowData.IsSelect) ? " Hu-tr-bottom-none Hs-check-bg " : ""}, React.createElement("td", {className: (this.props.Vm.IsAcsRelative ? "acsRelative  acsTableTr" : ""), style: { left: this.props.Vm.LeftNum }}, React.createElement("span", null, this.createSingleCheckBox(), React.createElement("span", null, this.props.Vm.RowNumber))), React.createElement("td", {className: "hide"}, React.createElement("span", null, React.createElement("input", {placeholder: "..", type: "hidden"}))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.SimpleCode))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.ItemCode))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.Name))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.DepartmentId))));
            };
            ExamItemSelectorGirdRowReact.prototype.createSingleCheckBox = function () {
                return this.props.Vm.IsMultiSelect ? this.props.Vm.SingleCheckVm.intoDom() : this.props.Vm.RadioVm.intoDom();
            };
            ExamItemSelectorGirdRowReact.prototype.createRowButtonExpand = function () {
                return this.props.Vm.RowButtonExpand.intoDom();
            };
            ExamItemSelectorGirdRowReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            ExamItemSelectorGirdRowReact.prototype.trClick_fun = function () {
                this.props.Vm.clickItem();
            };
            return ExamItemSelectorGirdRowReact;
        }(domCore.DomReact));
        ExamItemSelectorGirdRow.ExamItemSelectorGirdRowReact = ExamItemSelectorGirdRowReact;
        var ExamItemSelectorGirdRowVm = (function (_super) {
            __extends(ExamItemSelectorGirdRowVm, _super);
            function ExamItemSelectorGirdRowVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = ExamItemSelectorGirdRowReact;
                this.SingleCheckVm = new singleCheckFile.ui.SingleCheckBoxVm();
                this.RadioVm = new radioFile.ui.RadioVm();
                this.IsAcsRelative = false;
                this.LeftNum = 0;
                this.IsMultiSelect = true;
                this.RowButtonExpand = new expandFile.RowButtonExpandDom.RowButtonExpandDomVm();
                if (config) {
                    if (config.UniId) {
                        this.UniId = config.UniId;
                    }
                    this.RowData = config.RowData;
                    this.IsAcsRelative = config.IsAcsRelative;
                    this.LeftNum = config.LeftNum;
                    this.RowNumber = config.RowNumber;
                    if (config.IsMultiSelect != undefined || config.IsMultiSelect != null) {
                        this.IsMultiSelect = config.IsMultiSelect;
                    }
                    this.listenAppEvent("PickDom-SetSelect", this.UniId, function (keys) {
                        if (keys.indexOf(_this.RowData.FID) >= 0) {
                            _this.RowData.IsSelect = true;
                            _this.forceUpdate("");
                        }
                        // alert();
                    });
                    this.listenAppEvent("pickerContainerDelItem", this.UniId, function (k) {
                        var _index = -1;
                        if (k == _this.RowData.FID) {
                            _this.RowData.IsSelect = false;
                            _this.SingleCheckVm.dataValueSet("false");
                        }
                        _this.forceUpdate("");
                        // alert();
                        // this.emitAppEvent("pickerContainerDelItemForce", this.UniId);
                    });
                }
            }
            ExamItemSelectorGirdRowVm.prototype.clickItem = function () {
                var item = {
                    Key: this.RowData.FID,
                    Text: this.RowData.Name,
                    IsSelect: this.RowData.IsSelect
                };
                //  this.RowData.FID 
                if (!item.IsSelect) {
                    this.RowData.IsSelect = true;
                    this.SingleCheckVm.dataValueSet("true");
                    // item.IsSelect = true;
                    this.forceUpdate("");
                    this.emitAppEvent("pickerContainerAddItem", this.UniId, { Text: item.Text, Key: item.Key });
                }
                else {
                    //  item.IsSelect = false;
                    //this.forceUpdate("");
                    this.RowData.IsSelect = false;
                    this.SingleCheckVm.dataValueSet("false");
                    this.forceUpdate("");
                    this.emitAppEvent("pickerContainerDelItem", this.UniId, item.Key);
                }
            };
            return ExamItemSelectorGirdRowVm;
        }(domCore.DomVm));
        ExamItemSelectorGirdRow.ExamItemSelectorGirdRowVm = ExamItemSelectorGirdRowVm;
        var ExamItemSelectorGirdRowStates = (function (_super) {
            __extends(ExamItemSelectorGirdRowStates, _super);
            function ExamItemSelectorGirdRowStates() {
                _super.apply(this, arguments);
            }
            return ExamItemSelectorGirdRowStates;
        }(domCore.DomStates));
        ExamItemSelectorGirdRow.ExamItemSelectorGirdRowStates = ExamItemSelectorGirdRowStates;
        var ExamItemSelectorGirdRowProps = (function (_super) {
            __extends(ExamItemSelectorGirdRowProps, _super);
            function ExamItemSelectorGirdRowProps() {
                _super.apply(this, arguments);
            }
            return ExamItemSelectorGirdRowProps;
        }(domCore.DomProps));
        ExamItemSelectorGirdRow.ExamItemSelectorGirdRowProps = ExamItemSelectorGirdRowProps;
    })(ExamItemSelectorGirdRow = exports.ExamItemSelectorGirdRow || (exports.ExamItemSelectorGirdRow = {}));
});
