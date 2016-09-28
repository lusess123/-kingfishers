var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react", "./../../../Common/Data", "./../../../../02col/02Mulite/SingleCheckBox"], function (require, exports, domFile, React, constantData, singleCheckFile) {
    "use strict";
    var domCore = domFile.Core;
    var EditGroupRow;
    (function (EditGroupRow) {
        var EditGroupRowAction = (function (_super) {
            __extends(EditGroupRowAction, _super);
            function EditGroupRowAction() {
                _super.apply(this, arguments);
            }
            return EditGroupRowAction;
        }(domCore.DomAction));
        EditGroupRow.EditGroupRowAction = EditGroupRowAction;
        var EditGroupRowReact = (function (_super) {
            __extends(EditGroupRowReact, _super);
            function EditGroupRowReact() {
                _super.apply(this, arguments);
                this.state = new EditGroupRowStates();
            }
            EditGroupRowReact.prototype.pSender = function () {
                return React.createElement("tr", null, React.createElement("td", {className: (this.props.Vm.IsAcsRelative ? "  Hf-relative Hf-table-td " : ""), style: { left: this.props.Vm.LeftNum }}, React.createElement("span", null, this.createSingleCheckBox(), React.createElement("span", null, this.props.Vm.RowNumber))), React.createElement("td", null, this.props.Vm.RowData.Name), React.createElement("td", null, this.props.Vm.RowData.BeginDate), React.createElement("td", null, this.props.Vm.RowData.PreNumber), React.createElement("td", null, this.props.Vm.RowData.RealNumber), React.createElement("td", null, this.props.Vm.GetText(constantData.Data.ExamBanlanceKindData, this.props.Vm.RowData.Status)), React.createElement("td", null, this.props.Vm.RowData.Fee));
            };
            EditGroupRowReact.prototype.createSingleCheckBox = function () {
                return this.props.Vm.SingleCheckVm.intoDom();
            };
            EditGroupRowReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return EditGroupRowReact;
        }(domCore.DomReact));
        EditGroupRow.EditGroupRowReact = EditGroupRowReact;
        var EditGroupRowVm = (function (_super) {
            __extends(EditGroupRowVm, _super);
            function EditGroupRowVm(config) {
                _super.call(this);
                this.ReactType = EditGroupRowReact;
                this.LeftNum = 0;
                this.IsAcsRelative = false;
                this.SingleCheckVm = new singleCheckFile.ui.SingleCheckBoxVm();
                if (config) {
                    this.RowData = config.RowData;
                }
            }
            EditGroupRowVm.prototype.GetText = function (List, Id) {
                for (var index = 0; index < List.length; index++) {
                    if (List[index].Value == Id) {
                        return List[index].Text;
                    }
                }
                return "";
            };
            return EditGroupRowVm;
        }(domCore.DomVm));
        EditGroupRow.EditGroupRowVm = EditGroupRowVm;
        var EditGroupRowStates = (function (_super) {
            __extends(EditGroupRowStates, _super);
            function EditGroupRowStates() {
                _super.apply(this, arguments);
            }
            return EditGroupRowStates;
        }(domCore.DomStates));
        EditGroupRow.EditGroupRowStates = EditGroupRowStates;
        var EditGroupRowProps = (function (_super) {
            __extends(EditGroupRowProps, _super);
            function EditGroupRowProps() {
                _super.apply(this, arguments);
            }
            return EditGroupRowProps;
        }(domCore.DomProps));
        EditGroupRow.EditGroupRowProps = EditGroupRowProps;
    })(EditGroupRow = exports.EditGroupRow || (exports.EditGroupRow = {}));
});
