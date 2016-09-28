var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react", "./../../../02col/02Mulite/SingleCheckBox"], function (require, exports, domFile, React, singleCheckFile) {
    "use strict";
    //import domFile = require("./../01core/0Dom");
    var domCore = domFile.Core;
    var ProjGridRowDom;
    (function (ProjGridRowDom) {
        var ProjGridRowDomAction = (function (_super) {
            __extends(ProjGridRowDomAction, _super);
            function ProjGridRowDomAction() {
                _super.apply(this, arguments);
            }
            return ProjGridRowDomAction;
        }(domCore.DomAction));
        ProjGridRowDom.ProjGridRowDomAction = ProjGridRowDomAction;
        var ProjGridRowDomReact = (function (_super) {
            __extends(ProjGridRowDomReact, _super);
            function ProjGridRowDomReact() {
                _super.apply(this, arguments);
                this.state = new ProjGridRowDomStates();
            }
            ProjGridRowDomReact.prototype.pSender = function () {
                var row = this.createRow();
                return row;
            };
            ProjGridRowDomReact.prototype.createSingleChecbox = function () {
                return this.props.Vm.SingleCheckboxVm.intoDom();
            };
            ProjGridRowDomReact.prototype.trClick_fun = function () {
                this.props.Vm.clickItem();
            };
            ProjGridRowDomReact.prototype.createRow = function () {
                var _this = this;
                return (React.createElement("tr", {onClick: function () { _this.trClick_fun(); }}, React.createElement("td", null, this.createSingleChecbox()), React.createElement("td", null, this.props.Vm.RowData.DepartmentName), React.createElement("td", null, this.props.Vm.RowData.Name), React.createElement("td", {className: "text-right"}, this.props.Vm.RowData.Price)));
            };
            return ProjGridRowDomReact;
        }(domCore.DomReact));
        ProjGridRowDom.ProjGridRowDomReact = ProjGridRowDomReact;
        var ProjGridRowDomVm = (function (_super) {
            __extends(ProjGridRowDomVm, _super);
            function ProjGridRowDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = ProjGridRowDomReact;
                this.SingleCheckboxVm = new singleCheckFile.ui.SingleCheckBoxVm();
                if (config) {
                    this.UniId = config.UniId;
                    this.RowData = config.RowData;
                }
                this.listenAppEvent("PickDom-SetSelect", this.UniId, function (keys) {
                    if (keys.indexOf(_this.RowData.ItemId) >= 0) {
                        _this.RowData.IsSelect = true;
                        _this.forceUpdate("");
                    }
                });
                this.listenAppEvent("pickerContainerDelItem", this.UniId, function (k) {
                    var _index = -1;
                    if (k == _this.RowData.ItemId) {
                        _this.RowData.IsSelect = false;
                        _this.SingleCheckboxVm.dataValueSet("false");
                    }
                    _this.forceUpdate("");
                });
            }
            ProjGridRowDomVm.prototype.clickItem = function () {
                var item = {
                    Key: this.RowData.ItemId,
                    Text: this.RowData.Name,
                    IsSelect: this.RowData.IsSelect
                };
                if (!item.IsSelect) {
                    this.RowData.IsSelect = true;
                    this.SingleCheckboxVm.dataValueSet("true");
                    this.forceUpdate("");
                    this.emitAppEvent("pickerContainerAddItem", this.UniId, { Text: item.Text, Key: item.Key });
                }
                else {
                    this.RowData.IsSelect = false;
                    this.SingleCheckboxVm.dataValueSet("false");
                    this.forceUpdate("");
                    this.emitAppEvent("pickerContainerDelItem", this.UniId, item.Key);
                }
            };
            return ProjGridRowDomVm;
        }(domCore.DomVm));
        ProjGridRowDom.ProjGridRowDomVm = ProjGridRowDomVm;
        var ProjGridRowDomStates = (function (_super) {
            __extends(ProjGridRowDomStates, _super);
            function ProjGridRowDomStates() {
                _super.apply(this, arguments);
            }
            return ProjGridRowDomStates;
        }(domCore.DomStates));
        ProjGridRowDom.ProjGridRowDomStates = ProjGridRowDomStates;
        var ProjGridRowDomProps = (function (_super) {
            __extends(ProjGridRowDomProps, _super);
            function ProjGridRowDomProps() {
                _super.apply(this, arguments);
            }
            return ProjGridRowDomProps;
        }(domCore.DomProps));
        ProjGridRowDom.ProjGridRowDomProps = ProjGridRowDomProps;
    })(ProjGridRowDom = exports.ProjGridRowDom || (exports.ProjGridRowDom = {}));
});
