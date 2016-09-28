var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/0Dom", "react"], function (require, exports, domFile, React) {
    "use strict";
    var ui;
    (function (ui) {
        var BaseFormAction = (function (_super) {
            __extends(BaseFormAction, _super);
            function BaseFormAction() {
                _super.apply(this, arguments);
            }
            return BaseFormAction;
        }(domFile.Core.DomAction));
        ui.BaseFormAction = BaseFormAction;
        var BaseFormReact = (function (_super) {
            __extends(BaseFormReact, _super);
            function BaseFormReact() {
                _super.apply(this, arguments);
            }
            BaseFormReact.prototype.createBtn_fun = function () {
                this.props.Vm.getEmit().emit("createRow", this.props.Vm);
                return false;
            };
            BaseFormReact.prototype.delBtn_fun = function (row) {
                row.getEmit().emit("row_del", row);
                // alert("删除了");
                return false;
            };
            BaseFormReact.prototype.initNewRowBtn = function () {
                var _this = this;
                if (!this.props.Vm.IsNoAdd) {
                    return React.createElement("span", {className: "btn btn-xs pull-right"}, React.createElement("i", {className: " icon-2x icon-plus fa fa-2x fa-plus-circle Hs-blue Hu-pointer", onClick: function () { _this.createBtn_fun(); }}));
                }
                else {
                    return null;
                }
            };
            BaseFormReact.prototype.initDelRowBtn = function (row) {
                var _this = this;
                return this.props.Vm.IsNoDel ? null : (React.createElement("i", {className: "icon-minus fa fa-minus-circle  Hs-red Hu-pointer", onClick: function () { _this.delBtn_fun(row); }}));
            };
            BaseFormReact.prototype.fun_itemTitleClick = function () {
                this.props.Vm.IsItemFormHide = !this.props.Vm.IsItemFormHide;
                this.forceUpdate();
            };
            BaseFormReact.prototype.initTitle = function () {
                var _this = this;
                return React.createElement("li", {className: "pull-right", onClick: function () { _this.fun_itemTitleClick(); }}, React.createElement("span", {className: "btn-sm pull-right Hu-pointer"}, React.createElement("i", {className: "icon-2x icon-caret-" + (this.props.Vm.IsItemFormHide ? "right " : "down ") + "fa fa-2x fa-caret-" + (this.props.Vm.IsItemFormHide ? "right" : "down")})));
                // );
            };
            BaseFormReact.prototype.pSender = function () {
                return React.createElement("form", {className: "Hm-modals fn-bottom", key: this.props.Vm.key}, React.createElement("div", {className: this.props.Vm.HasNoBorder ? "" : "fieldset"}, React.createElement("div", {className: "legend clearfix"}, React.createElement("ul", {className: "nav nav-tabs"}, React.createElement("li", {className: "active"}, React.createElement("a", null, " ", this.props.Vm.FormConfig.Title)), this.initTitle()), React.createElement("ul", {className: "nav nav-tabs pull-right"}, React.createElement("li", null, this.initNewRowBtn()))), React.createElement("div", {className: this.props.Vm.IsItemFormHide ? "hide" : "p-a-md"}, this.props.Vm.RowObjList.length >= 0 ? (this.props.Vm.RowObjList.map(function (row, i) {
                    row.key = i;
                    return (React.createElement("div", null, " ", row.intoDom()));
                })) : (React.createElement("div", {className: "Hs-blue"}, React.createElement("i", {className: "fa fa-ban m-x"}), "该项无记录！")), this.props.children)));
            };
            return BaseFormReact;
        }(domFile.Core.DomReact));
        ui.BaseFormReact = BaseFormReact;
        var BaseFormVm = (function (_super) {
            __extends(BaseFormVm, _super);
            function BaseFormVm() {
                _super.apply(this, arguments);
                this.DelKeyList = [];
                this.pRegName = " BaseForm";
                this.RowObjList = new Array();
                this.Columns = new Array();
                this.ColumnsGroup = new Array();
                this.IsNoDel = false;
                this.IsNoAdd = false;
                this.IsSingleRow = false;
            }
            BaseFormVm.prototype.create = function (_pageView) {
            };
            BaseFormVm.prototype.link = function () {
                this.RowObjList.forEach(function (row, i) {
                    //  row.Index = i;
                    row.link();
                });
            };
            return BaseFormVm;
        }(domFile.Core.DomVm));
        ui.BaseFormVm = BaseFormVm;
        var BaseFormProps = (function (_super) {
            __extends(BaseFormProps, _super);
            function BaseFormProps() {
                _super.apply(this, arguments);
            }
            return BaseFormProps;
        }(domFile.Core.DomProps));
        ui.BaseFormProps = BaseFormProps;
        var BaseFormStates = (function (_super) {
            __extends(BaseFormStates, _super);
            function BaseFormStates() {
                _super.apply(this, arguments);
            }
            return BaseFormStates;
        }(domFile.Core.DomStates));
        ui.BaseFormStates = BaseFormStates;
    })(ui = exports.ui || (exports.ui = {}));
});
