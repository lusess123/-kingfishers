var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../Base/BaseRow", "./../../01core/Ioc", "./GridColumn", "./GridColumnGroup", "react"], function (require, exports, baseRow, iocFile, gridColumnFile, gridColimnGroupFile, React) {
    "use strict";
    var ui;
    (function (ui) {
        gridColumnFile.ui;
        gridColimnGroupFile.ui;
        var GridRowAction = (function (_super) {
            __extends(GridRowAction, _super);
            function GridRowAction() {
                _super.apply(this, arguments);
            }
            return GridRowAction;
        }(baseRow.ui.BaseRowAction));
        ui.GridRowAction = GridRowAction;
        var GridRowReact = (function (_super) {
            __extends(GridRowReact, _super);
            function GridRowReact() {
                _super.apply(this, arguments);
            }
            GridRowReact.prototype.fun_delBtn = function () {
                this.props.Vm.getEmit().emit("row_del", this.props.Vm);
            };
            GridRowReact.prototype.initDelTd = function () {
                var _this = this;
                if (this.props.Vm.FormVm.IsNoDel) {
                    return null;
                }
                else {
                    return React.createElement("td", null, React.createElement("i", {className: "icon-minus fa fa-minus-circle fa-2 Hs-red Hu-pointer", onClick: function (e) { e.stopPropagation(); _this.fun_delBtn(); }}));
                }
            };
            GridRowReact.prototype.fGetRowSpans = function (name) {
                if (this.props.Vm.RowData["_" + name + "_group_max_"]) {
                    //-------
                    var _i;
                    _i = this.props.Vm.RowData["_" + name + "_group_max_"];
                    this.props.Vm.HasDataGroup = true;
                    return (parseInt(_i) * 2).toString();
                }
                return "2";
            };
            GridRowReact.prototype.fIsGroupHide = function (name) {
                if (this.props.Vm.RowData["_" + name + "_group_"]) {
                    var _i;
                    _i = this.props.Vm.RowData["_" + name + "_group_"];
                    if (_i != "1") {
                        return true;
                    }
                }
                return false;
            };
            GridRowReact.prototype.fTrMouseEnter_Fun = function () {
                this.props.Vm.RowHandObj.IsHide = false;
                this.props.Vm.forceUpdate("");
                return false;
            };
            GridRowReact.prototype.fTrClick_Fun = function () {
                this.props.Vm.IsSelect = this.props.Vm.RowHandObj.IsSelect = !this.props.Vm.IsSelect;
                //如果为单选的话 就触发事件
                if (this.props.Vm.IsSelector && this.props.Vm.IsSingleSelect) {
                    alert(this.props.Vm.RowData[this.props.Vm.IDSign]);
                    if (this.props.Vm.SingleSaveEvent != null) {
                        this.props.Vm.SingleSaveEvent();
                    }
                }
                this.props.Vm.getEmit().emit("row_click");
                this.forceUpdate();
                return false;
            };
            GridRowReact.prototype.fTrLeave_Fun = function () {
                this.props.Vm.RowHandObj.IsHide = true;
                this.props.Vm.forceUpdate("");
                return false;
            };
            GridRowReact.prototype.fTdClick = function (dataGroup) {
                if (this.props.Vm.HasDataGroup) {
                    this.props.Vm.dataTdGroupClick(dataGroup);
                    return false;
                }
                return true;
            };
            GridRowReact.prototype.fNoGroupContent = function () {
                var _this = this;
                return this.props.Vm.ColumnObjGruop.map(function (colgroup) {
                    return colgroup.ColumnObjList.map(function (col, k) {
                        var _name = _this.props.Vm.FormVm.Columns[k].Name;
                        return React.createElement("td", {rowSpan: _this.fGetRowSpans(_name), onClick: function () { _this.fTdClick(_name); }, className: ((col.ColumnConfig.ControlType == "Hidden" || _this.fIsGroupHide(_name)) ? "hide" : ""), "data-lable": _this.props.Vm.FormVm.Columns[k].DisplayName}, col.ControlObj ? col.ControlObj.intoDom() : (React.createElement("i", {className: "icon-exclamation-sign fa fa-exclamation-triangle Hs-red", title: "该控件对象不存在"})));
                    });
                });
            };
            GridRowReact.prototype.fGroupContent = function () {
                var _this = this;
                return this.props.Vm.ColumnObjList.map(function (col, k) {
                    return React.createElement("td", {rowSpan: _this.fGetRowSpans(col.ColumnConfig.Name), onClick: function () { return _this.fTdClick(_this.props.Vm.FormVm.Columns[k].Name); }, className: ((col.ColumnConfig.ControlType == "Hidden" || _this.fIsGroupHide(_this.props.Vm.FormVm.Columns[k].Name)) ? "hide" : ""), "data-lable": _this.props.Vm.FormVm.Columns[k].DisplayName}, col.ControlObj ?
                        col.ControlObj.intoDom() : (React.createElement("i", {className: "icon-exclamation-sign fa fa-exclamation-triangle Hs-red", title: "该控件对象不存在"})));
                });
            };
            GridRowReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("tr", {className: "Hu-tr-bottom-none " + (this.props.Vm.IsSelect ? "Hs-check-bg" : ""), key: this.props.Vm.key, onMouseEnter: function () { return _this.fTrMouseEnter_Fun(); }, onClick: function () { return _this.fTrClick_Fun(); }, onMouseLeave: function () { return _this.fTrLeave_Fun(); }}, React.createElement("td", {className: "acsPadding0 " + (this.props.Vm.IsAcsRelative ? "Hf-relative Hf-table-th " : ""), style: { left: this.props.Vm.LeftNum }}, this.props.Vm.RowHandObj.rHandSelectorSender()), this.props.Vm.ColumnObjGruop.length == 0 ? this.fGroupContent() : this.fNoGroupContent(), this.initDelTd());
            };
            ;
            return GridRowReact;
        }(baseRow.ui.BaseRowReact));
        ui.GridRowReact = GridRowReact;
        var GridRowVm = (function (_super) {
            __extends(GridRowVm, _super);
            function GridRowVm() {
                _super.apply(this, arguments);
                this.ReactType = GridRowReact;
                this.pRegName = "GridRow";
                this.IsAcsRelative = false;
                this.LeftNum = 0;
                this.DataGroupNameList = [];
            }
            GridRowVm.prototype.setGroupInfo = function (col) {
                var name = col.Name;
                var _num = 1;
                if (this.RowData["_" + name + "_group_max_"]) {
                    var _i;
                    _i = this.RowData["_" + name + "_group_max_"];
                    _num = parseInt(_i);
                }
                this.DicGroupInfo[name] = {
                    ColumnName: name,
                    GroupKey: this.RowData["_" + name + "_group_key_"].toString(),
                    GroupNum: _num
                };
                // return _i;
            };
            GridRowVm.prototype.dataGroupClick = function () {
                if (this.HasDataGroup) {
                }
            };
            GridRowVm.prototype.dataTdGroupClick = function (dataGroup) {
            };
            GridRowVm.prototype.bingDataGroupHide = function (fid, colName) {
                var _this = this;
                var _sign = colName + "-" + fid + "-" + this.FormVm.Id;
                this.RegistAppEvent({
                    Name: _sign,
                    Fun: function () {
                        _this.IsDataGroupHide = !_this.IsDataGroupHide;
                        alert("行显示或者隐藏" + _this.IsDataGroupHide + " " + _sign);
                        _this.forceUpdate("");
                    }
                });
            };
            return GridRowVm;
        }(baseRow.ui.BaseRowVm));
        ui.GridRowVm = GridRowVm;
        var GridRowProps = (function (_super) {
            __extends(GridRowProps, _super);
            function GridRowProps() {
                _super.apply(this, arguments);
            }
            return GridRowProps;
        }(baseRow.ui.BaseRowProps));
        ui.GridRowProps = GridRowProps;
        var GridRowStates = (function (_super) {
            __extends(GridRowStates, _super);
            function GridRowStates() {
                _super.apply(this, arguments);
            }
            return GridRowStates;
        }(baseRow.ui.BaseRowStates));
        ui.GridRowStates = GridRowStates;
        iocFile.Core.Ioc.Current().RegisterType("Grid", baseRow.ui.BaseRowVm, GridRowVm);
    })(ui = exports.ui || (exports.ui = {}));
});
