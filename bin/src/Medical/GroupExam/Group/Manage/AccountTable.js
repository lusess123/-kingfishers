var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react", "./../../../../02col/02Mulite/SingleCheckBox", "./AccountRow"], function (require, exports, domFile, React, singleCheckFile, AccountRow) {
    "use strict";
    var domCore = domFile.Core;
    var AccountTable;
    (function (AccountTable) {
        var AccountTableAction = (function (_super) {
            __extends(AccountTableAction, _super);
            function AccountTableAction() {
                _super.apply(this, arguments);
            }
            return AccountTableAction;
        }(domCore.DomAction));
        AccountTable.AccountTableAction = AccountTableAction;
        var AccountTableReact = (function (_super) {
            __extends(AccountTableReact, _super);
            function AccountTableReact() {
                _super.apply(this, arguments);
                this.state = new AccountTableStates();
            }
            AccountTableReact.prototype.pSender = function () {
                return React.createElement("div", {className: "YSm-table"}, React.createElement("div", {className: "table-responsive"}, this._initTable()));
            };
            AccountTableReact.prototype._initTable = function () {
                return React.createElement("table", {className: "table table-striped table-bordered table-hover"}, React.createElement("thead", {className: "thead-default"}, React.createElement("tr", null, React.createElement("th", {className: "thCheckAll acsTextC acsWidth3-5 " + (this.props.Vm.IsAcsRelative ? " acsRelative acsTableTh  " : ""), style: { left: this.props.Vm.LeftNum }}, this.props.Vm.AllCheck.intoDom()), React.createElement("th", null, "体检单位"), React.createElement("th", null, "体检批次"), React.createElement("th", null, "预检人数"), React.createElement("th", null, "实检人数"), React.createElement("th", null, "应收金额（元）"), React.createElement("th", null, "操作"))), React.createElement("tbody", null, this.props.Vm.RowList.map(function (row, index) {
                    row.RowNumber = index;
                    return row.intoDom();
                })));
            };
            AccountTableReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return AccountTableReact;
        }(domCore.DomReact));
        AccountTable.AccountTableReact = AccountTableReact;
        var AccountTableVm = (function (_super) {
            __extends(AccountTableVm, _super);
            function AccountTableVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = AccountTableReact;
                this.IsAcsRelative = false;
                this.LeftNum = 0;
                this.SingleCheckVm = new singleCheckFile.ui.SingleCheckBoxVm();
                this.DataBtnList = new Array();
                this.RowList = new Array();
                if (config) {
                    this.UniId = config.Unild;
                    this.RowList = [];
                    this.FormData = [];
                    var data = { UnitName: "杭州信使" };
                    this.FormData = config.Data;
                    this.BatchId = config.BatchId;
                    this.FormData.forEach(function (rowData, index) {
                        var rowNumber = index;
                        var rowConfig = { RowData: rowData, IsAcsRelative: _this.IsAcsRelative, LeftNum: _this.LeftNum, RowNumber: rowNumber, UniId: _this.UniId, BatchId: _this.BatchId };
                        var rowVm = new AccountRow.AccountRowDom.AccountRowDomVm(rowConfig);
                        _this.RowList.push(rowVm);
                    });
                    this.RowList.forEach(function (row) {
                        row.SingleCheckVm.ChangeEventFun = function (val, col) {
                            _this.checkCheckBox(val, col);
                            return true;
                        };
                    });
                }
                this.AllCheck = new singleCheckFile.ui.SingleCheckBoxVm();
                this.AllCheck.ChangeEventFun = function (val, col) {
                    _this.allCheckChecked(val, col);
                    return true;
                };
            }
            AccountTableVm.prototype.checkCheckBox = function (val, checkDom) {
                var rowList = this.RowList;
                window["isHand"] = true;
                var isCheck = false;
                var isAllCheck = true;
                var checkedCount = 0;
                if (val == "true") {
                    isCheck = true;
                }
                rowList.forEach(function (row) {
                    var chk = row.SingleCheckVm;
                    var _val = chk.dataValue();
                    if (_val == "true" && checkDom != chk) {
                        isCheck = true;
                        checkedCount++;
                    }
                    if (checkDom == chk) {
                        if (val == "true") {
                            checkedCount++;
                        }
                    }
                });
                isAllCheck = rowList.length == checkedCount ? true : false;
                this.DataBtnList.forEach(function (btn) {
                    btn.NoEnable = isCheck ? false : true;
                    btn.forceUpdate("");
                });
                this.AllCheck.vmDataValueSet(isAllCheck ? "true" : "false");
                this.AllCheck.forceUpdate("", function () {
                    window["isHand"] = false;
                });
            };
            AccountTableVm.prototype.allCheckChecked = function (val, checkDom) {
                if (!window["isHand"]) {
                    //this.CheckBoxList.forEach((chk) => {
                    //    chk.reactDataValueSet(val);
                    //});
                    this.RowList.forEach(function (row) {
                        var chk = row.SingleCheckVm;
                        chk.reactDataValueSet(val);
                    });
                }
            };
            AccountTableVm.prototype.delOpt = function (val) {
                alert("删除成功！");
            };
            AccountTableVm.prototype.getSelectValues = function () {
                var _list = [];
                this.RowList.forEach(function (r) {
                    var ck = r.SingleCheckVm;
                    if (ck.vmDataValueGet() == "true") {
                        _list.push(r.RowData);
                    }
                });
                console.log(_list);
                return _list;
            };
            AccountTableVm.prototype.buttonClickCommond = function (obj) {
                switch (obj.DisplayName) {
                    //case "复制":
                    //    var _list = this.getSelectValues();
                    //    var _ids = _list.map((n) => n.FID).join(",");
                    //    this.ManageOpt(_ids);
                    //    break;
                    case "删除":
                        var _list = this.getSelectValues();
                        var _ids = _list.map(function (n) { return n.FID; }).join(",");
                        this.delOpt(_ids);
                        break;
                    default:
                        break;
                }
            };
            return AccountTableVm;
        }(domCore.DomVm));
        AccountTable.AccountTableVm = AccountTableVm;
        var AccountTableStates = (function (_super) {
            __extends(AccountTableStates, _super);
            function AccountTableStates() {
                _super.apply(this, arguments);
            }
            return AccountTableStates;
        }(domCore.DomStates));
        AccountTable.AccountTableStates = AccountTableStates;
        var AccountTableProps = (function (_super) {
            __extends(AccountTableProps, _super);
            function AccountTableProps() {
                _super.apply(this, arguments);
            }
            return AccountTableProps;
        }(domCore.DomProps));
        AccountTable.AccountTableProps = AccountTableProps;
    })(AccountTable = exports.AccountTable || (exports.AccountTable = {}));
});
