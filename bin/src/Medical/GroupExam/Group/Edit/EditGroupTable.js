var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react", "./EditGroupRow", "./../../../../02col/02Mulite/SingleCheckBox"], function (require, exports, domFile, React, EditGroupRow, singleCheckFile) {
    "use strict";
    var domCore = domFile.Core;
    var EditGroupTable;
    (function (EditGroupTable) {
        var EditGroupTableAction = (function (_super) {
            __extends(EditGroupTableAction, _super);
            function EditGroupTableAction() {
                _super.apply(this, arguments);
            }
            return EditGroupTableAction;
        }(domCore.DomAction));
        EditGroupTable.EditGroupTableAction = EditGroupTableAction;
        var EditGroupTableReact = (function (_super) {
            __extends(EditGroupTableReact, _super);
            function EditGroupTableReact() {
                _super.apply(this, arguments);
                this.state = new EditGroupTableStates();
            }
            EditGroupTableReact.prototype.pSender = function () {
                return React.createElement("div", {className: "table-responsive"}, React.createElement("table", {className: "table table-striped table-bordered table-hover"}, React.createElement("thead", {className: "thead-default"}, React.createElement("tr", null, React.createElement("th", {className: "thCheckAll acsTextC acsWidth3-5 " + (this.props.Vm.IsAcsRelative ? " acsRelative acsTableTh  " : ""), style: { left: this.props.Vm.LeftNum }}, this.props.Vm.AllCheck.intoDom()), React.createElement("th", null, "批次"), React.createElement("th", null, "开始时间"), React.createElement("th", null, "体检人数"), React.createElement("th", null, "实检人数"), React.createElement("th", null, "结算方式"), React.createElement("th", null, "总账单"))), React.createElement("tbody", null, this.props.Vm.RowList.map(function (row, index) {
                    return [row.intoDom()];
                }))));
            };
            EditGroupTableReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return EditGroupTableReact;
        }(domCore.DomReact));
        EditGroupTable.EditGroupTableReact = EditGroupTableReact;
        var EditGroupTableVm = (function (_super) {
            __extends(EditGroupTableVm, _super);
            function EditGroupTableVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = EditGroupTableReact;
                this.IsAcsRelative = false;
                this.LeftNum = 0;
                this.Data = [];
                this.RowList = [];
                var rowVm = new EditGroupRow.EditGroupRow.EditGroupRowVm();
                this.RowList.push(rowVm);
                if (config) {
                    this.RowList = [];
                    this.Data = config.ListData;
                    this.AllCheck = new singleCheckFile.ui.SingleCheckBoxVm();
                    this.RowList = new Array();
                    this.Data.forEach(function (rowData, index) {
                        var rowConfig = { RowData: rowData };
                        var rowVm = new EditGroupRow.EditGroupRow.EditGroupRowVm(rowConfig);
                        _this.RowList.push(rowVm);
                    });
                }
            }
            return EditGroupTableVm;
        }(domCore.DomVm));
        EditGroupTable.EditGroupTableVm = EditGroupTableVm;
        var EditGroupTableStates = (function (_super) {
            __extends(EditGroupTableStates, _super);
            function EditGroupTableStates() {
                _super.apply(this, arguments);
            }
            return EditGroupTableStates;
        }(domCore.DomStates));
        EditGroupTable.EditGroupTableStates = EditGroupTableStates;
        var EditGroupTableProps = (function (_super) {
            __extends(EditGroupTableProps, _super);
            function EditGroupTableProps() {
                _super.apply(this, arguments);
            }
            return EditGroupTableProps;
        }(domCore.DomProps));
        EditGroupTable.EditGroupTableProps = EditGroupTableProps;
    })(EditGroupTable = exports.EditGroupTable || (exports.EditGroupTable = {}));
});
