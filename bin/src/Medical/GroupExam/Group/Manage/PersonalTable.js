var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react", "./../../../../05tool/Button", "./../../../../05tool/Pagination", "./../../../../02col/02Mulite/SingleCheckBox", "./PersonalRow"], function (require, exports, domFile, React, buttonFile, pagination, singleCheckFile, PersonalRow) {
    "use strict";
    var domCore = domFile.Core;
    var PersonalTable;
    (function (PersonalTable) {
        var PersonalTableAction = (function (_super) {
            __extends(PersonalTableAction, _super);
            function PersonalTableAction() {
                _super.apply(this, arguments);
            }
            return PersonalTableAction;
        }(domCore.DomAction));
        PersonalTable.PersonalTableAction = PersonalTableAction;
        var PersonalTableReact = (function (_super) {
            __extends(PersonalTableReact, _super);
            function PersonalTableReact() {
                _super.apply(this, arguments);
                this.state = new PersonalTableStates();
            }
            PersonalTableReact.prototype.pSender = function () {
                return React.createElement("div", {className: ""}, React.createElement("div", {className: "table-responsive"}, this._initTable()), this.props.Vm.PaginationVm.intoDom());
            };
            PersonalTableReact.prototype._initTable = function () {
                try {
                    return React.createElement("table", {className: "table table-striped table-bordered table-hover"}, React.createElement("thead", {className: "thead-default"}, React.createElement("tr", null, React.createElement("th", {className: "thCheckAll acsTextC acsWidth3-5 " + (this.props.Vm.IsAcsRelative ? " acsRelative acsTableTh  " : ""), style: { left: this.props.Vm.LeftNum }}, this.props.Vm.AllCheck.intoDom()), React.createElement("th", null, "分组名称"), React.createElement("th", null, "人员名称"), React.createElement("th", null, "身份证"), React.createElement("th", null, "年龄"), React.createElement("th", null, "性别"), React.createElement("th", null, "婚姻状况"), React.createElement("th", null, "操作"))), React.createElement("tbody", null, this.props.Vm.RowList.map(function (row, index) {
                        row.RowNumber = index;
                        return row.intoDom();
                    })));
                }
                catch (e) {
                    console.log(e);
                    return null;
                }
            };
            PersonalTableReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return PersonalTableReact;
        }(domCore.DomReact));
        PersonalTable.PersonalTableReact = PersonalTableReact;
        var PersonalTableVm = (function (_super) {
            __extends(PersonalTableVm, _super);
            function PersonalTableVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = PersonalTableReact;
                this.IsAcsRelative = false;
                this.LeftNum = 0;
                this.SingleCheckVm = new singleCheckFile.ui.SingleCheckBoxVm();
                this.DataBtnList = new Array();
                this.RowList = new Array();
                if (config) {
                    this.PagerListData = config.Data;
                    this.Key = config.Key;
                    this.PaginationVm = new pagination.tool.PaginationVm();
                    this.PaginationVm.isPartHidden = true;
                    this.PaginationVm.IsChange = true;
                    var pager = this.PagerListData.Pager;
                    if (pager != null) {
                        this.PaginationVm.PageNo = pager.PageNo;
                        this.PaginationVm.PageSize = pager.PageSize;
                        this.PaginationVm.TotalCount = pager.TotalCount;
                        this.PaginationVm.PageClickEvent = function (pageIndex) {
                            //this.loadPageData(pageIndex, this.Unid);
                            _this.emitAppEvent("Manage/PersonalTable/loadPageData", _this.UniId, "PersonalManage", pageIndex.toString(), _this.Key);
                        };
                    }
                    this.UniId = config.Unild;
                    this.RowList = [];
                    this.FormData = [];
                    this.FormData = config.Data.ListData;
                    this.BatchId = config.BatchId;
                    this.FormData.forEach(function (rowData, index) {
                        var rowNumber = index;
                        var rowConfig = { RowData: rowData, IsAcsRelative: _this.IsAcsRelative, LeftNum: _this.LeftNum, RowNumber: rowNumber, UniId: _this.UniId, BatchId: _this.BatchId };
                        var rowVm = new PersonalRow.PersonalRowDom.PersonalRowDomVm(rowConfig);
                        _this.RowList.push(rowVm);
                    });
                    this.RowList.forEach(function (row, index) {
                        row.SingleCheckVm.ChangeEventFun = function (val, col) {
                            _this.checkCheckBox(val, col);
                            return true;
                        };
                    });
                }
                this.listenAppEvent("Manage/PersonalRow", this.UniId, function (rowIndex) {
                    _this.delRowByIndex(rowIndex);
                });
                this.AllCheck = new singleCheckFile.ui.SingleCheckBoxVm();
                this.AllCheck.ChangeEventFun = function (val, col) {
                    _this.allCheckChecked(val, col);
                    return true;
                };
            }
            PersonalTableVm.prototype.delRowByIndex = function (rowIndex) {
                var _id = this.RowList[rowIndex].RowData.FID;
                //if (_id) {
                //    this.DelFidList.push(_id);
                //}
                this.RowList.splice(rowIndex, 1);
                //this.RowList.forEach((r, i) => {
                //    if (i >= rowIndex) {
                //        r.toChange();
                //    }
                //});
                this.forceUpdate("");
            };
            PersonalTableVm.prototype.newRow = function () {
                var _this = this;
                var ds = {};
                var rowConfig = { RowData: ds, IsAcsRelative: this.IsAcsRelative, LeftNum: this.LeftNum, UniId: this.UniId, BatchId: this.BatchId };
                var rowVm = new PersonalRow.PersonalRowDom.PersonalRowDomVm(rowConfig);
                this.RowList.push(rowVm);
                this.RowList.forEach(function (row) {
                    row.SingleCheckVm.ChangeEventFun = function (val, col) {
                        _this.checkCheckBox(val, col);
                        return true;
                    };
                });
                this.AllCheck = new singleCheckFile.ui.SingleCheckBoxVm();
                this.AllCheck.ChangeEventFun = function (val, col) {
                    _this.allCheckChecked(val, col);
                    return true;
                };
                this.forceUpdate("");
            };
            PersonalTableVm.prototype.createButton = function (displayName) {
                var _this = this;
                var btnVm = new buttonFile.ui.ButtonVm();
                btnVm.DisplayName = displayName;
                btnVm.NoEnable = true;
                btnVm.KindCss = " btn-primary-outline ";
                this.DataBtnList.push(btnVm);
                btnVm.ClickFun = function (a) {
                    _this.buttonClickCommond(a);
                };
                return btnVm.intoDom();
            };
            PersonalTableVm.prototype.checkCheckBox = function (val, checkDom) {
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
            PersonalTableVm.prototype.allCheckChecked = function (val, checkDom) {
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
            PersonalTableVm.prototype.delOpt = function (val) {
                alert("删除成功！");
            };
            PersonalTableVm.prototype.getSelectValues = function () {
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
            PersonalTableVm.prototype.buttonClickCommond = function (obj) {
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
            return PersonalTableVm;
        }(domCore.DomVm));
        PersonalTable.PersonalTableVm = PersonalTableVm;
        var PersonalTableStates = (function (_super) {
            __extends(PersonalTableStates, _super);
            function PersonalTableStates() {
                _super.apply(this, arguments);
            }
            return PersonalTableStates;
        }(domCore.DomStates));
        PersonalTable.PersonalTableStates = PersonalTableStates;
        var PersonalTableProps = (function (_super) {
            __extends(PersonalTableProps, _super);
            function PersonalTableProps() {
                _super.apply(this, arguments);
            }
            return PersonalTableProps;
        }(domCore.DomProps));
        PersonalTable.PersonalTableProps = PersonalTableProps;
    })(PersonalTable = exports.PersonalTable || (exports.PersonalTable = {}));
});
