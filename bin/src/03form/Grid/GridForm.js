var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/Ioc", "./../../01core/Util", "./../../01core/0Dom", "./GridRow", "./../Base/BaseForm", "react"], function (require, exports, iocFile, utilFile, domFile, gridRowFile, baseForm, React) {
    "use strict";
    var ui;
    (function (ui) {
        gridRowFile.ui;
        var GridFormAction = (function (_super) {
            __extends(GridFormAction, _super);
            function GridFormAction() {
                _super.apply(this, arguments);
            }
            return GridFormAction;
        }(domFile.Core.DomAction));
        ui.GridFormAction = GridFormAction;
        var GridFormReact = (function (_super) {
            __extends(GridFormReact, _super);
            function GridFormReact() {
                _super.apply(this, arguments);
                this.state = (function () {
                    var gf = new GridFormStates();
                    //this.props.Vm.RowObjList
                    return gf;
                })();
            }
            GridFormReact.prototype.fGetTop = function () {
                var st = $(document).scrollTop(); //滚动条距顶部的距离    
                var ch = $(window).height(); //屏幕的高度   
                var objT = Number(st) + (Number(ch)) * 0.02;
                return objT;
            };
            GridFormReact.prototype.initAddTH = function () {
                var _this = this;
                if (this.props.Vm.IsNoAdd || this.props.Vm.IsOnlyTable) {
                    return null;
                }
                else {
                    return React.createElement("th", null, React.createElement("i", {className: "icon-plus  fa fa-plus-circle fa-2  Hu-pointer", onClick: function () { _this.fun_NewRow(); }}), " ");
                }
            };
            GridFormReact.prototype._initTher = function () {
                return React.createElement("thead", {className: "thead-default"}, React.createElement("tr", null, this._initAllTh(), this.props.Vm.Columns.map(function (a) {
                    return React.createElement("th", {className: (a.ControlType == "Hidden" ? "hide" : "")}, a.DisplayName);
                }), this.initAddTH()));
            };
            GridFormReact.prototype.fun_allCheck = function () {
                var _this = this;
                var _ischeck = this.props.Vm.IsAllCheck = !this.props.Vm.IsAllCheck;
                this.props.Vm.RowObjList.forEach(function (a, i) {
                    a.IsSelect = _ischeck;
                    a.RowHandObj.IsSelect = _ischeck;
                    a.IsChange = true;
                    //a.RowHandObj.is
                });
                this.forceUpdate(function () {
                    if (_this.props.Vm.RowObjList.length > 0) {
                        _this.props.Vm.RowObjList[0].getEmit().emit("row_click");
                    }
                });
            };
            GridFormReact.prototype.fun_NewRow = function () {
                this.props.Vm.getEmit().emit("createRow", this.props.Vm);
                return false;
            };
            GridFormReact.prototype._initAllTh = function () {
                var _this = this;
                return React.createElement("th", {className: "text-center " + (this.props.Vm.IsAcsRelative ? "Hf-relative Hf-table-th " : ""), style: { left: this.props.Vm.LeftNum }}, " ", React.createElement("i", {className: ("icon-check" + (this.props.Vm.IsAllCheck ? "" : "-empty ")) + (" fa fa" + (this.props.Vm.IsAllCheck ? "-check" : "") + "-square-o ") + "Hu-pointer", onClick: function () { _this.fun_allCheck(); }}), " ");
            };
            GridFormReact.prototype._initTitle = function () {
                var _this = this;
                return this.props.Vm.IsSingleRow ? null : (React.createElement("li", {className: "pull-right", onClick: function () { _this.fun_itemClick(); }}, React.createElement("span", {className: "btn-sm pull-right"}, React.createElement("i", {className: "icon-2x icon-caret-" + (this.props.Vm.IsItemFormHide ? "right " : "down ") + "fa fa-2x fa-caret-" + (this.props.Vm.IsItemFormHide ? "right" : "down")}))));
            };
            GridFormReact.prototype.fun_itemClick = function () {
                this.props.Vm.IsItemFormHide = !this.props.Vm.IsItemFormHide;
                this.forceUpdate();
            };
            GridFormReact.prototype.thClass = function () {
                return "text-center " + (this.props.Vm.IsAcsRelative ? " Hf-relative Hf-table-th " : "");
            };
            GridFormReact.prototype.thStyle = function () {
                return { left: this.props.Vm.LeftNum };
            };
            GridFormReact.prototype.pSender = function () {
                var _this = this;
                var _columnGroupThes = this.props.Vm.ColumnsGroup.map(function (c) {
                    return c.Columns.map(function (a) {
                        // alert(a.DisplayName);
                        return React.createElement("th", {className: (a.ControlType == "Hidden" ? "hide" : "")}, a.DisplayName);
                    });
                });
                //如果有分组的话就用这个头进行渲染
                var _head = React.createElement("thead", {className: "thead-default"}, React.createElement("tr", null, React.createElement("th", {className: "text-center " + (this.props.Vm.IsAcsRelative ? "Hf-relative Hf-table-th " : ""), style: { left: this.props.Vm.LeftNum }}), this.props.Vm.ColumnsGroup.map(function (a) {
                    var _isHidden = true;
                    a.Columns.forEach(function (c) {
                        if (c.ControlType != "Hidden")
                            _isHidden = false;
                    });
                    if (!_isHidden) {
                        return React.createElement("th", {colSpan: a.Columns.length, className: (a.ControlType == "Hidden" ? "hide" : "")}, a.DisplayName ? a.DisplayName : "其他");
                    }
                    else {
                        return null;
                    }
                })), React.createElement("tr", null, this._initAllTh(), _columnGroupThes, this.initAddTH()));
                var _table = React.createElement("div", {className: "Hm-table table-responsive", onScroll: function (e) { _this.fun_Scroll(e); }}, React.createElement("table", {className: "table table-bordered table-hover table-striped"}, this.props.Vm.ColumnsGroup.length == 0 ? this._initTher() : _head, React.createElement("tbody", null, this.props.Vm.RowObjList.map(function (row, i) {
                    // return row.intoDom()
                    row.RowHandObj.Index = i + 1;
                    row.RowHandObj.BaseRowObj = row;
                    return [row.intoDom(), React.createElement("tr", {className: "Hu-tr-none"}, React.createElement("td", {colSpan: "10000", className: _this.thClass() + " well", style: _this.thStyle()}, row.RowHandObj.intoDom()))];
                }))));
                return this.props.Vm.IsOnlyTable ?
                    _table :
                    (React.createElement("form", {className: "Hm-modals fn-bottom" + (this.state.IsFormExpand ? "acsTableExpand" : "")}, React.createElement("div", {className: "fieldset"}, React.createElement("div", {className: "legend clearfix"}, React.createElement("ul", {className: "nav nav-tabs"}, React.createElement("li", {className: "active"}, React.createElement("a", null, " ", this.props.Vm.FormConfig.Title)), this._initTitle())), React.createElement("div", {className: this.props.Vm.IsItemFormHide ? "hide" : "Hg-width Hg-overflow-auto"}, _table))));
            };
            GridFormReact.prototype.fun_Scroll = function (e) {
                var _$obj = $(e.target);
                this.state.ScrollNum = _$obj.scrollLeft();
                this.props.Vm.scrollAuto(this.state.ScrollNum);
                //this.forceUpdate();
            };
            return GridFormReact;
        }(baseForm.ui.BaseFormReact));
        ui.GridFormReact = GridFormReact;
        var GridFormVm = (function (_super) {
            __extends(GridFormVm, _super);
            function GridFormVm() {
                _super.apply(this, arguments);
                this.ReactType = GridFormReact;
                this.pRegName = "GridForm";
                this.IsAllCheck = false;
                this.IsOnlyTable = false;
                this.IsAcsRelative = false;
                this.LeftNum = 0;
            }
            GridFormVm.prototype.scrollAuto = function (s) {
                this.IsAcsRelative = s > 0;
                this.LeftNum = s;
                this.RowObjList.forEach(function (r) {
                    //--------
                    var row = utilFile.Core.Util.Cast(r);
                    row.IsAcsRelative = s > 0;
                    row.LeftNum = s;
                    // r.forceUpdate("");
                    row.IsChange = true;
                });
                this.IsChange = true;
                this.forceUpdate("");
            };
            return GridFormVm;
        }(baseForm.ui.BaseFormVm));
        ui.GridFormVm = GridFormVm;
        var GridFormProps = (function (_super) {
            __extends(GridFormProps, _super);
            function GridFormProps() {
                _super.apply(this, arguments);
            }
            return GridFormProps;
        }(baseForm.ui.BaseFormProps));
        ui.GridFormProps = GridFormProps;
        var GridFormStates = (function (_super) {
            __extends(GridFormStates, _super);
            function GridFormStates() {
                _super.apply(this, arguments);
                // public ThItemList:  Array< ThItem > = new Array<ThItem>();
                this.IsFormExpand = false;
            }
            return GridFormStates;
        }(baseForm.ui.BaseFormStates));
        ui.GridFormStates = GridFormStates;
        iocFile.Core.Ioc.Current().RegisterType("Grid", baseForm.ui.BaseFormVm, GridFormVm);
    })(ui = exports.ui || (exports.ui = {}));
});
