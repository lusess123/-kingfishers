var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/0Dom", "react", "./RowHand"], function (require, exports, domFile, React, rowHandFile) {
    "use strict";
    var ui;
    (function (ui) {
        var BaseRowAction = (function (_super) {
            __extends(BaseRowAction, _super);
            function BaseRowAction() {
                _super.apply(this, arguments);
            }
            return BaseRowAction;
        }(domFile.Core.DomAction));
        ui.BaseRowAction = BaseRowAction;
        var BaseRowReact = (function (_super) {
            __extends(BaseRowReact, _super);
            function BaseRowReact() {
                _super.apply(this, arguments);
            }
            BaseRowReact.prototype.initFormBody = function () {
                return this.props.Vm.ColumnObjGruop.length != 0 ?
                    this.props.Vm.ColumnObjGruop.map(function (columnGroup, i) {
                        return columnGroup.intoDom();
                    }) :
                    this.props.Vm.ColumnObjList.map(function (colum, i) {
                        return colum.intoDom();
                    });
            };
            BaseRowReact.prototype.fun_itemTitleClick = function () {
                // this.props.Vm.IsItemFormHide = !this.props.Vm.IsItemFormHide;
                // this.forceUpdate();
            };
            BaseRowReact.prototype.initIndexTitle = function () {
                return this.props.Vm.FormVm.IsSingleRow ? "" : (this.props.Vm.Index + 1).toString();
            };
            BaseRowReact.prototype.titleSelect_Fun = function () {
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
            BaseRowReact.prototype.initTitle = function () {
                var _this = this;
                return this.props.Vm.FormVm.IsSingleRow ? null : (React.createElement("div", {className: "m-b Hu-row-title Hu-pointer", onClick: function () { _this.fun_itemTitleClick(); }}, this.initIndexTitle(), this.props.Vm.RowHandObj.rHandNormalSender(), React.createElement("span", {className: "btn btn-default", onClick: function () { return _this.titleSelect_Fun(); }}, "选择"), React.createElement("i", {className: "icon-lg icon-double-angle-" + (this.props.Vm.IsItemFormHide ? "right " : "down ") + "fa fa-lg fa-angle-double-" + (this.props.Vm.IsItemFormHide ? "right" : "down") + (this.props.Vm.IsItemFormHide ? " active" : "")})));
            };
            BaseRowReact.prototype.pSender = function () {
                return React.createElement("div", {key: this.props.Vm.key}, this.initTitle(), React.createElement("div", {className: this.props.Vm.IsItemFormHide ? "hide" : "Hm-toggle-item white-bg"}, React.createElement("div", {className: "tabs-content"}, React.createElement("div", {className: " active "}, React.createElement("div", {className: "Hm-form clearfix"}, this.initFormBody())))));
            };
            return BaseRowReact;
        }(domFile.Core.DomReact));
        ui.BaseRowReact = BaseRowReact;
        var BaseRowVm = (function (_super) {
            __extends(BaseRowVm, _super);
            function BaseRowVm() {
                _super.apply(this, arguments);
                this.ButtonRightSign = "";
                this.pRegName = "BaseRow";
                //ReactType = NormalRowReact;
                this.RowHandObj = new rowHandFile.ui.RowHandVm();
                this.ColumnObjList = new Array();
                this.ColumnObjGruop = new Array();
                //--------sq加的事件和属性
                this.IsSelector = false;
                this.IsSingleSelect = false;
                this.SingleSaveEvent = null;
                this.IDSign = null;
            }
            BaseRowVm.prototype.getKey = function () {
                if (this.GetKeyEvent) {
                    return this.GetKeyEvent(this);
                }
                else {
                    if (this.KeyColumnObj) {
                        return this.KeyColumnObj.ControlObj.vmDataValueGet();
                    }
                    else
                        return "";
                }
            };
            BaseRowVm.prototype.emitChange = function (column) {
                var _this = this;
                // (column) => {
                if (!column.IsKey) {
                    column.getEmit().addListener("BaseColumnVm_change", function () {
                        if (_this.KeyColumnObj && !_this.KeyColumnObj.IsDataValueChange) {
                            _this.KeyColumnObj.IsDataValueChange = true;
                            _this.KeyColumnObj.ControlObj.IsDataValueChange = true;
                        }
                        _this.getEmit().emit("BaseRowVm_change", _this);
                    });
                }
                else {
                    this.KeyColumnObj = column;
                }
                column.link();
                // }
            };
            BaseRowVm.prototype.link = function () {
                var _this = this;
                //this.getEmit().addListener("RowHandExpand", () => {
                //   // this.IsExpland = !this.IsExpland;
                //   // alert(this.IsExpland);
                //});
                if (this.ColumnObjGruop && this.ColumnObjGruop.length > 0) {
                    this.ColumnObjGruop.forEach(function (columnGroup) {
                        columnGroup.ColumnObjList.forEach(function (column) {
                            _this.emitChange(column);
                        });
                    });
                }
                else {
                    if (this.ColumnObjList && this.ColumnObjList.length > 0) {
                        this.ColumnObjList.forEach(function (col) {
                            _this.emitChange(col);
                        });
                    }
                }
            };
            return BaseRowVm;
        }(domFile.Core.DomVm));
        ui.BaseRowVm = BaseRowVm;
        var BaseRowProps = (function (_super) {
            __extends(BaseRowProps, _super);
            function BaseRowProps() {
                _super.apply(this, arguments);
            }
            return BaseRowProps;
        }(domFile.Core.DomProps));
        ui.BaseRowProps = BaseRowProps;
        var BaseRowStates = (function (_super) {
            __extends(BaseRowStates, _super);
            function BaseRowStates() {
                _super.apply(this, arguments);
            }
            return BaseRowStates;
        }(domFile.Core.DomStates));
        ui.BaseRowStates = BaseRowStates;
    })(ui = exports.ui || (exports.ui = {}));
});
