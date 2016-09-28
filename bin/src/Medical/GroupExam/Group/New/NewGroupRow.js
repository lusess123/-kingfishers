var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react", "./../../../Common/Data", "./../../../../02col/02Mulite/SingleCheckBox"], function (require, exports, domFile, React, constantData, singleCheckFile) {
    "use strict";
    var domCore = domFile.Core;
    var NewGroupRow;
    (function (NewGroupRow) {
        var NewGroupRowAction = (function (_super) {
            __extends(NewGroupRowAction, _super);
            function NewGroupRowAction() {
                _super.apply(this, arguments);
            }
            return NewGroupRowAction;
        }(domCore.DomAction));
        NewGroupRow.NewGroupRowAction = NewGroupRowAction;
        var NewGroupRowReact = (function (_super) {
            __extends(NewGroupRowReact, _super);
            function NewGroupRowReact() {
                _super.apply(this, arguments);
                this.state = new NewGroupRowStates();
            }
            NewGroupRowReact.prototype.pSender = function () {
                return React.createElement("tr", null, React.createElement("td", {className: (this.props.Vm.IsAcsRelative ? "  Hf-relative Hf-table-td " : ""), style: { left: this.props.Vm.LeftNum }}, React.createElement("span", null, this.createSingleCheckBox(), React.createElement("span", null, this.props.Vm.RowNumber))), React.createElement("td", null, this.props.Vm.RowData.Name), React.createElement("td", null, this.props.Vm.RowData.BeginDate), React.createElement("td", null, this.props.Vm.RowData.PreNumber), React.createElement("td", null, this.props.Vm.RowData.RealNumber), React.createElement("td", null, this.props.Vm.GetText(constantData.Data.ExamBanlanceKindData, this.props.Vm.RowData.Status)), React.createElement("td", null, this.props.Vm.RowData.Fee));
            };
            NewGroupRowReact.prototype.createSingleCheckBox = function () {
                return this.props.Vm.SingleCheckVm.intoDom();
            };
            NewGroupRowReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return NewGroupRowReact;
        }(domCore.DomReact));
        NewGroupRow.NewGroupRowReact = NewGroupRowReact;
        var NewGroupRowVm = (function (_super) {
            __extends(NewGroupRowVm, _super);
            function NewGroupRowVm(config) {
                _super.call(this);
                this.ReactType = NewGroupRowReact;
                this.LeftNum = 0;
                this.IsAcsRelative = false;
                this.SingleCheckVm = new singleCheckFile.ui.SingleCheckBoxVm();
                if (config) {
                    this.RowData = config.RowData;
                }
            }
            NewGroupRowVm.prototype.GetText = function (List, Id) {
                for (var index = 0; index < List.length; index++) {
                    if (List[index].Value == Id) {
                        return List[index].Text;
                    }
                }
                return "";
            };
            return NewGroupRowVm;
        }(domCore.DomVm));
        NewGroupRow.NewGroupRowVm = NewGroupRowVm;
        var NewGroupRowStates = (function (_super) {
            __extends(NewGroupRowStates, _super);
            function NewGroupRowStates() {
                _super.apply(this, arguments);
            }
            return NewGroupRowStates;
        }(domCore.DomStates));
        NewGroupRow.NewGroupRowStates = NewGroupRowStates;
        var NewGroupRowProps = (function (_super) {
            __extends(NewGroupRowProps, _super);
            function NewGroupRowProps() {
                _super.apply(this, arguments);
            }
            return NewGroupRowProps;
        }(domCore.DomProps));
        NewGroupRow.NewGroupRowProps = NewGroupRowProps;
    })(NewGroupRow = exports.NewGroupRow || (exports.NewGroupRow = {}));
});
