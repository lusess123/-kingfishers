var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../../09Web/dom/ThDom", "./CensusDoctorGridRowDom", "./CensusDoctorRowButtonDom", "./../../../../02col/02Mulite/SingleCheckBox"], function (require, exports, React, domFile, thFile, gridRowFile, rowButtonFile, singleCheckFile) {
    "use strict";
    var domCore = domFile.Core;
    var ThDom = thFile.Web.ThDomReact;
    var CensusDoctorGridFormDom;
    (function (CensusDoctorGridFormDom) {
        var CensusDoctorGridFormDomAction = (function (_super) {
            __extends(CensusDoctorGridFormDomAction, _super);
            function CensusDoctorGridFormDomAction() {
                _super.apply(this, arguments);
            }
            return CensusDoctorGridFormDomAction;
        }(domCore.DomAction));
        CensusDoctorGridFormDom.CensusDoctorGridFormDomAction = CensusDoctorGridFormDomAction;
        var CensusDoctorGridFormDomReact = (function (_super) {
            __extends(CensusDoctorGridFormDomReact, _super);
            function CensusDoctorGridFormDomReact() {
                _super.apply(this, arguments);
                this.state = new CensusDoctorGridFormDomStates();
            }
            CensusDoctorGridFormDomReact.prototype.pSender = function () {
                var _this = this;
                var theader = React.createElement("thead", {className: "thead-default"}, this.initHeader());
                var tbody = this.initBody();
                var table = React.createElement("table", {className: "table table-hover"}, theader, tbody);
                return React.createElement("div", {className: "Hm-table", onScroll: function (e) { _this.fun_Scroll(e); }}, table);
            };
            CensusDoctorGridFormDomReact.prototype.fun_Scroll = function (e) {
                var _$obj = $(e.target);
                this.props.Vm.ScrollAuto(_$obj.scrollLeft());
            };
            CensusDoctorGridFormDomReact.prototype.initHeader = function () {
                return React.createElement("tr", {className: "ACT-HEADER MEMBER"}, React.createElement(ThDom, {children: null, Vm: this.getThDomVM(10)}, React.createElement("span", null, "序号")), React.createElement("th", {className: "hide"}, React.createElement("span", null, "主键")), React.createElement(ThDom, {children: null, Vm: this.getThDomVM(200)}, React.createElement("span", null, "体检医生")), React.createElement(ThDom, {children: null, Vm: this.getThDomVM(150)}, React.createElement("span", null, "所属部门")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "类别")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "体检人")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "体检时间")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "录入时间")));
            };
            ;
            CensusDoctorGridFormDomReact.prototype.initBody = function () {
                var _this = this;
                return React.createElement("tbody", null, this.props.Vm.RowList.map(function (row, index) {
                    return [row.intoDom(), _this.props.Vm.RowButtonList[index].intoDom()];
                }));
            };
            ;
            CensusDoctorGridFormDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            CensusDoctorGridFormDomReact.prototype.getThDomVM = function (w) {
                var _ther = new thFile.Web.ThDomVm();
                if (w) {
                    _ther.Width = w;
                }
                return _ther;
            };
            return CensusDoctorGridFormDomReact;
        }(domCore.DomReact));
        CensusDoctorGridFormDom.CensusDoctorGridFormDomReact = CensusDoctorGridFormDomReact;
        var CensusDoctorGridFormDomVm = (function (_super) {
            __extends(CensusDoctorGridFormDomVm, _super);
            function CensusDoctorGridFormDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = CensusDoctorGridFormDomReact;
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
                        var rowVm = new gridRowFile.CensusDoctorGridRowDom.CensusDoctorGridRowDomVm(rowConfig);
                        _this.RowList.push(rowVm);
                        var rowBtnConfig = { Row: rowVm, UniId: config.UniId };
                        var rowBtnVm = new rowButtonFile.CensusDoctorRowButtonDom.CensusDoctorRowButtonDomVm(rowBtnConfig);
                        _this.RowButtonList.push(rowBtnVm);
                    });
                }
            }
            CensusDoctorGridFormDomVm.prototype.ScrollAuto = function (left) {
                this.IsAcsRelative = left > 0;
                this.LeftNum = left;
                this.forceUpdate("");
            };
            return CensusDoctorGridFormDomVm;
        }(domCore.DomVm));
        CensusDoctorGridFormDom.CensusDoctorGridFormDomVm = CensusDoctorGridFormDomVm;
        var CensusDoctorGridFormDomStates = (function (_super) {
            __extends(CensusDoctorGridFormDomStates, _super);
            function CensusDoctorGridFormDomStates() {
                _super.apply(this, arguments);
            }
            return CensusDoctorGridFormDomStates;
        }(domCore.DomStates));
        CensusDoctorGridFormDom.CensusDoctorGridFormDomStates = CensusDoctorGridFormDomStates;
        var CensusDoctorGridFormDomProps = (function (_super) {
            __extends(CensusDoctorGridFormDomProps, _super);
            function CensusDoctorGridFormDomProps() {
                _super.apply(this, arguments);
            }
            return CensusDoctorGridFormDomProps;
        }(domCore.DomProps));
        CensusDoctorGridFormDom.CensusDoctorGridFormDomProps = CensusDoctorGridFormDomProps;
    })(CensusDoctorGridFormDom = exports.CensusDoctorGridFormDom || (exports.CensusDoctorGridFormDom = {}));
});
