var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../../09Web/dom/ThDom", "./../../../../02col/02Mulite/SingleCheckBox", "./DepartGridRowDom", "./DepartRowButtonDom"], function (require, exports, React, domFile, thFile, singleCheckFile, gridRowFile, rowButtonFile) {
    "use strict";
    var domCore = domFile.Core;
    var ThDom = thFile.Web.ThDomReact;
    var DepartGirdFormDom;
    (function (DepartGirdFormDom) {
        var DepartGirdFormDomAction = (function (_super) {
            __extends(DepartGirdFormDomAction, _super);
            function DepartGirdFormDomAction() {
                _super.apply(this, arguments);
            }
            return DepartGirdFormDomAction;
        }(domCore.DomAction));
        DepartGirdFormDom.DepartGirdFormDomAction = DepartGirdFormDomAction;
        var partGirdFormDomReact = (function (_super) {
            __extends(partGirdFormDomReact, _super);
            function partGirdFormDomReact() {
                _super.apply(this, arguments);
                this.state = new DepartGirdFormDomStates();
            }
            partGirdFormDomReact.prototype.pSender = function () {
                var _this = this;
                var theader = React.createElement("thead", null, this.initHeader());
                var tbody = this.initBody();
                var table = React.createElement("table", {className: "table table-hover"}, theader, tbody);
                return React.createElement("div", {className: "Hm-table", onScroll: function (e) { _this.fun_Scroll(e); }}, table);
            };
            partGirdFormDomReact.prototype.fun_Scroll = function (e) {
                var _$obj = $(e.target);
                this.props.Vm.ScrollAuto(_$obj.scrollLeft());
            };
            partGirdFormDomReact.prototype.initHeader = function () {
                return React.createElement("tr", {className: "ACT-HEADER MEMBER"}, React.createElement("th", {className: "thCheckAll text-center acsWidth3-5" + (this.props.Vm.IsAcsRelative ? "Hf-relative Hf-table-th" : ""), style: { left: this.props.Vm.LeftNum }}, this.props.Vm.AllCheck.intoDom()), React.createElement("th", {className: "hide"}, React.createElement("span", null, "主键")), React.createElement(ThDom, {children: null, Vm: this.getThDomVM(200)}, React.createElement("span", null, "简码")), React.createElement(ThDom, {children: null, Vm: this.getThDomVM(200)}, React.createElement("span", null, "部门名称")), React.createElement(ThDom, {children: null, Vm: this.getThDomVM(200)}, React.createElement("span", null, "代码")), React.createElement(ThDom, {children: null, Vm: this.getThDomVM(200)}, React.createElement("span", null, "类别")), React.createElement(ThDom, {children: null, Vm: this.getThDomVM(200)}, React.createElement("span", null, "描述")), React.createElement(ThDom, {children: null, Vm: this.getThDomVM(200)}, React.createElement("span", null, "备注")), React.createElement(ThDom, {children: null, Vm: this.getThDomVM(200)}, React.createElement("span", null, "最后编辑时间")));
            };
            ;
            partGirdFormDomReact.prototype.initBody = function () {
                var _this = this;
                return React.createElement("tbody", null, this.props.Vm.RowList.map(function (row, index) {
                    return [row.intoDom(), _this.props.Vm.RowButtonList[index].intoDom()];
                }));
            };
            ;
            partGirdFormDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            partGirdFormDomReact.prototype.getThDomVM = function (w) {
                var _ther = new thFile.Web.ThDomVm();
                if (w) {
                    _ther.Width = w;
                }
                return _ther;
            };
            return partGirdFormDomReact;
        }(domCore.DomReact));
        DepartGirdFormDom.partGirdFormDomReact = partGirdFormDomReact;
        var DepartGridFormDomVm = (function (_super) {
            __extends(DepartGridFormDomVm, _super);
            function DepartGridFormDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = partGirdFormDomReact;
                this.IsAcsRelative = false;
                this.LeftNum = 0;
                this.CheckBoxList = new Array();
                this.FormData = new Array();
                this.RowList = new Array();
                this.RowButtonList = new Array();
                this.AllCheck = new singleCheckFile.ui.SingleCheckBoxVm();
                if (config && config.Data) {
                    this.FormData = config.Data;
                    this.FormData.forEach(function (rowData, index) {
                        var rowNumber = index < 9 ? "0" + (index + 1) : (index + 1).toString();
                        var rowConfig = { RowData: rowData, IsAcsRelative: _this.IsAcsRelative, LeftNum: _this.LeftNum, RowNumber: rowNumber };
                        var rowVm = new gridRowFile.DepartGirdRow.DepartGirdRowVm(rowConfig);
                        _this.RowList.push(rowVm);
                        var rowBtnConfig = { Row: rowVm, UniId: config.UniId };
                        var rowBtnVm = new rowButtonFile.DepartRowButtonDom.DepartRowButtonDomVm(rowBtnConfig);
                        _this.RowButtonList.push(rowBtnVm);
                    });
                }
            }
            DepartGridFormDomVm.prototype.ScrollAuto = function (left) {
                this.IsAcsRelative = left > 0;
                this.LeftNum = left;
                this.forceUpdate("");
            };
            return DepartGridFormDomVm;
        }(domCore.DomVm));
        DepartGirdFormDom.DepartGridFormDomVm = DepartGridFormDomVm;
        var DepartGirdFormDomProps = (function (_super) {
            __extends(DepartGirdFormDomProps, _super);
            function DepartGirdFormDomProps() {
                _super.apply(this, arguments);
            }
            return DepartGirdFormDomProps;
        }(domCore.DomProps));
        DepartGirdFormDom.DepartGirdFormDomProps = DepartGirdFormDomProps;
        var DepartGirdFormDomStates = (function (_super) {
            __extends(DepartGirdFormDomStates, _super);
            function DepartGirdFormDomStates() {
                _super.apply(this, arguments);
            }
            return DepartGirdFormDomStates;
        }(domCore.DomStates));
        DepartGirdFormDom.DepartGirdFormDomStates = DepartGirdFormDomStates;
    })(DepartGirdFormDom = exports.DepartGirdFormDom || (exports.DepartGirdFormDom = {}));
});
