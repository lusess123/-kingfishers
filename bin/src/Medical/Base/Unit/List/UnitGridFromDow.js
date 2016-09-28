var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "./UnitGridRowDow", "./UnitRowButtonDow", "./../../../../09Web/dom/ThDom", "react", "./../../../../02col/02Mulite/SingleCheckBox"], function (require, exports, domFile, gridRowFile, rowButtonFile, thFile, React, singleCheckFile) {
    "use strict";
    var domCore = domFile.Core;
    var ThDom = thFile.Web.ThDomReact;
    var UnitGridFromDow;
    (function (UnitGridFromDow) {
        var UnitGridFromDowAction = (function (_super) {
            __extends(UnitGridFromDowAction, _super);
            function UnitGridFromDowAction() {
                _super.apply(this, arguments);
            }
            return UnitGridFromDowAction;
        }(domCore.DomAction));
        UnitGridFromDow.UnitGridFromDowAction = UnitGridFromDowAction;
        var UnitGridFromDowReact = (function (_super) {
            __extends(UnitGridFromDowReact, _super);
            function UnitGridFromDowReact() {
                _super.apply(this, arguments);
                this.state = new UnitGridFromDowStates();
            }
            UnitGridFromDowReact.prototype.pSender = function () {
                var _this = this;
                var theader = React.createElement("thead", {className: "thead-default"}, this.initHeader());
                var tbody = this.initBody();
                var table = React.createElement("table", {className: "table table-hover"}, theader, tbody);
                return React.createElement("div", {className: "Hm-table", onScroll: function (e) { _this.fun_Scroll(e); }}, table);
            };
            UnitGridFromDowReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            UnitGridFromDowReact.prototype.fun_Scroll = function (e) {
                var _$obj = $(e.target);
                this.props.Vm.ScrollAuto(_$obj.scrollLeft());
            };
            UnitGridFromDowReact.prototype.initHeader = function () {
                return React.createElement("tr", {className: "ACT-HEADER MEMBER"}, React.createElement("th", {className: "thCheckAll acsTextC acsWidth3-5 " + (this.props.Vm.IsAcsRelative ? " acsRelative acsTableTh  " : ""), style: { left: this.props.Vm.LeftNum }}, this.props.Vm.AllCheck.intoDom()), React.createElement("th", {className: "hide"}, React.createElement("span", null, "主键")), React.createElement(ThDom, {children: null, Vm: this.getThDomVM(100)}, React.createElement("span", null, "单位编码")), React.createElement(ThDom, {children: null, Vm: this.getThDomVM(100)}, React.createElement("span", null, "单位名称")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "单位联系人")), React.createElement(ThDom, {children: null, Vm: this.getThDomVM(200)}, React.createElement("span", null, "联系电话")), React.createElement(ThDom, {children: null, Vm: this.getThDomVM(200)}, React.createElement("span", null, "传真")), React.createElement(ThDom, {children: null, Vm: this.getThDomVM(200)}, React.createElement("span", null, "邮箱")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "单位类型")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "单位地址")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "单位简介")), React.createElement(ThDom, {children: null, Vm: this.getThDomVM(200)}, React.createElement("span", null, "最后编辑时间")));
            };
            ;
            UnitGridFromDowReact.prototype.initBody = function () {
                var _this = this;
                return React.createElement("tbody", null, this.props.Vm.RowList.map(function (row, index) {
                    return [row.intoDom(), _this.props.Vm.RowButtonList[index].intoDom()];
                }));
            };
            ;
            UnitGridFromDowReact.prototype.getThDomVM = function (w) {
                var _ther = new thFile.Web.ThDomVm();
                if (w) {
                    _ther.Width = w;
                }
                return _ther;
            };
            return UnitGridFromDowReact;
        }(domCore.DomReact));
        UnitGridFromDow.UnitGridFromDowReact = UnitGridFromDowReact;
        var UnitGridFromDowVm = (function (_super) {
            __extends(UnitGridFromDowVm, _super);
            function UnitGridFromDowVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = UnitGridFromDowReact;
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
                        var rowVm = new gridRowFile.UnitGridRowDow.UnitGridRowDowVm(rowConfig);
                        _this.RowList.push(rowVm);
                        var rowBtnConfig = { Row: rowVm, UniId: config.UniId };
                        var rowBtnVm = new rowButtonFile.UnitRowButtonDow.UnitRowButtonDowVm(rowBtnConfig);
                        _this.RowButtonList.push(rowBtnVm);
                    });
                }
            }
            UnitGridFromDowVm.prototype.ScrollAuto = function (left) {
                this.IsAcsRelative = left > 0;
                this.LeftNum = left;
                this.forceUpdate("");
            };
            return UnitGridFromDowVm;
        }(domCore.DomVm));
        UnitGridFromDow.UnitGridFromDowVm = UnitGridFromDowVm;
        var UnitGridFromDowStates = (function (_super) {
            __extends(UnitGridFromDowStates, _super);
            function UnitGridFromDowStates() {
                _super.apply(this, arguments);
            }
            return UnitGridFromDowStates;
        }(domCore.DomStates));
        UnitGridFromDow.UnitGridFromDowStates = UnitGridFromDowStates;
        var UnitGridFromDowProps = (function (_super) {
            __extends(UnitGridFromDowProps, _super);
            function UnitGridFromDowProps() {
                _super.apply(this, arguments);
            }
            return UnitGridFromDowProps;
        }(domCore.DomProps));
        UnitGridFromDow.UnitGridFromDowProps = UnitGridFromDowProps;
    })(UnitGridFromDow = exports.UnitGridFromDow || (exports.UnitGridFromDow = {}));
});
