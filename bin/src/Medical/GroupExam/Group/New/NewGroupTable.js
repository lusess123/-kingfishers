var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react", "./NewGroupRow", "./../../../../02col/02Mulite/SingleCheckBox"], function (require, exports, domFile, React, NewGroupRow, singleCheckFile) {
    "use strict";
    var domCore = domFile.Core;
    var NewGroupTable;
    (function (NewGroupTable) {
        var NewGroupTableAction = (function (_super) {
            __extends(NewGroupTableAction, _super);
            function NewGroupTableAction() {
                _super.apply(this, arguments);
            }
            return NewGroupTableAction;
        }(domCore.DomAction));
        NewGroupTable.NewGroupTableAction = NewGroupTableAction;
        var NewGroupTableReact = (function (_super) {
            __extends(NewGroupTableReact, _super);
            function NewGroupTableReact() {
                _super.apply(this, arguments);
                this.state = new NewGroupTableStates();
            }
            NewGroupTableReact.prototype.pSender = function () {
                return React.createElement("div", {className: "table-responsive"}, React.createElement("table", {className: "table table-striped table-bordered table-hover"}, React.createElement("thead", {className: "thead-default"}, React.createElement("tr", null, React.createElement("th", {className: "thCheckAll acsTextC acsWidth3-5 " + (this.props.Vm.IsAcsRelative ? " acsRelative acsTableTh  " : ""), style: { left: this.props.Vm.LeftNum }}, this.props.Vm.AllCheck.intoDom()), React.createElement("th", null, "批次"), React.createElement("th", null, "开始时间"), React.createElement("th", null, "体检人数"), React.createElement("th", null, "实检人数"), React.createElement("th", null, "结算方式"), React.createElement("th", null, "总账单"))), React.createElement("tbody", null, this.props.Vm.RowList.map(function (row, index) {
                    return [row.intoDom()];
                }))));
            };
            NewGroupTableReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return NewGroupTableReact;
        }(domCore.DomReact));
        NewGroupTable.NewGroupTableReact = NewGroupTableReact;
        var NewGroupTableVm = (function (_super) {
            __extends(NewGroupTableVm, _super);
            function NewGroupTableVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = NewGroupTableReact;
                this.IsAcsRelative = false;
                this.LeftNum = 0;
                this.Data = [];
                this.RowList = [];
                var rowVm = new NewGroupRow.NewGroupRow.NewGroupRowVm();
                this.RowList.push(rowVm);
                if (config) {
                    this.RowList = [];
                    this.Data = config.ListData;
                    this.AllCheck = new singleCheckFile.ui.SingleCheckBoxVm();
                    this.RowList = new Array();
                    this.Data.forEach(function (rowData, index) {
                        var rowConfig = { RowData: rowData };
                        var rowVm = new NewGroupRow.NewGroupRow.NewGroupRowVm(rowConfig);
                        _this.RowList.push(rowVm);
                    });
                }
            }
            return NewGroupTableVm;
        }(domCore.DomVm));
        NewGroupTable.NewGroupTableVm = NewGroupTableVm;
        var NewGroupTableStates = (function (_super) {
            __extends(NewGroupTableStates, _super);
            function NewGroupTableStates() {
                _super.apply(this, arguments);
            }
            return NewGroupTableStates;
        }(domCore.DomStates));
        NewGroupTable.NewGroupTableStates = NewGroupTableStates;
        var NewGroupTableProps = (function (_super) {
            __extends(NewGroupTableProps, _super);
            function NewGroupTableProps() {
                _super.apply(this, arguments);
            }
            return NewGroupTableProps;
        }(domCore.DomProps));
        NewGroupTable.NewGroupTableProps = NewGroupTableProps;
    })(NewGroupTable = exports.NewGroupTable || (exports.NewGroupTable = {}));
});
