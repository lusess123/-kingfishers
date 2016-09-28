var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../../09Web/dom/ThDom", "./CensusDieaseGridRowDom", "./CensusDieaseRowButtonDom", "./../../../../02col/02Mulite/SingleCheckBox"], function (require, exports, React, domFile, thFile, gridRowFile, rowButtonFile, singleCheckFile) {
    "use strict";
    var domCore = domFile.Core;
    var ThDom = thFile.Web.ThDomReact;
    var CensusDieaseGridFormDom;
    (function (CensusDieaseGridFormDom) {
        var CensusDieaseGridFormDomAction = (function (_super) {
            __extends(CensusDieaseGridFormDomAction, _super);
            function CensusDieaseGridFormDomAction() {
                _super.apply(this, arguments);
            }
            return CensusDieaseGridFormDomAction;
        }(domCore.DomAction));
        CensusDieaseGridFormDom.CensusDieaseGridFormDomAction = CensusDieaseGridFormDomAction;
        var CensusDieaseGridFormDomReact = (function (_super) {
            __extends(CensusDieaseGridFormDomReact, _super);
            function CensusDieaseGridFormDomReact() {
                _super.apply(this, arguments);
                this.state = new CensusDieaseGridFormDomStates();
            }
            CensusDieaseGridFormDomReact.prototype.pSender = function () {
                var _this = this;
                var theader = React.createElement("thead", {className: "thead-default"}, this.initHeader());
                var tbody = this.initBody();
                var table = React.createElement("table", {className: "table table-hover"}, theader, tbody);
                return React.createElement("div", {className: "Hm-table", onScroll: function (e) { _this.fun_Scroll(e); }}, table);
            };
            CensusDieaseGridFormDomReact.prototype.fun_Scroll = function (e) {
                var _$obj = $(e.target);
                this.props.Vm.ScrollAuto(_$obj.scrollLeft());
            };
            CensusDieaseGridFormDomReact.prototype.initHeader = function () {
                return React.createElement("tr", {className: "ACT-HEADER MEMBER"}, React.createElement(ThDom, {children: null, Vm: this.getThDomVM(10)}, React.createElement("span", null, "序号")), React.createElement("th", {className: "hide"}, React.createElement("span", null, "主键")), React.createElement(ThDom, {children: null, Vm: this.getThDomVM(150)}, React.createElement("span", null, "体检编号")), React.createElement(ThDom, {children: null, Vm: this.getThDomVM(200)}, React.createElement("span", null, "体检人姓名")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "性别")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "体检时间")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "异常名称")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "体检医生")));
            };
            ;
            CensusDieaseGridFormDomReact.prototype.initBody = function () {
                var _this = this;
                return React.createElement("tbody", null, this.props.Vm.RowList.map(function (row, index) {
                    return [row.intoDom(), _this.props.Vm.RowButtonList[index].intoDom()];
                }));
            };
            ;
            CensusDieaseGridFormDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            CensusDieaseGridFormDomReact.prototype.getThDomVM = function (w) {
                var _ther = new thFile.Web.ThDomVm();
                if (w) {
                    _ther.Width = w;
                }
                return _ther;
            };
            return CensusDieaseGridFormDomReact;
        }(domCore.DomReact));
        CensusDieaseGridFormDom.CensusDieaseGridFormDomReact = CensusDieaseGridFormDomReact;
        var CensusDieaseGridFormDomVm = (function (_super) {
            __extends(CensusDieaseGridFormDomVm, _super);
            function CensusDieaseGridFormDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = CensusDieaseGridFormDomReact;
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
                        var rowVm = new gridRowFile.CensusDieaseGridRowDom.CensusDieaseGridRowDomVm(rowConfig);
                        _this.RowList.push(rowVm);
                        var rowBtnConfig = { Row: rowVm, UniId: config.UniId };
                        var rowBtnVm = new rowButtonFile.CensusDieaseRowButtonDom.CensusDieaseRowButtonDomVm(rowBtnConfig);
                        _this.RowButtonList.push(rowBtnVm);
                    });
                }
            }
            CensusDieaseGridFormDomVm.prototype.ScrollAuto = function (left) {
                this.IsAcsRelative = left > 0;
                this.LeftNum = left;
                this.forceUpdate("");
            };
            return CensusDieaseGridFormDomVm;
        }(domCore.DomVm));
        CensusDieaseGridFormDom.CensusDieaseGridFormDomVm = CensusDieaseGridFormDomVm;
        var CensusDieaseGridFormDomStates = (function (_super) {
            __extends(CensusDieaseGridFormDomStates, _super);
            function CensusDieaseGridFormDomStates() {
                _super.apply(this, arguments);
            }
            return CensusDieaseGridFormDomStates;
        }(domCore.DomStates));
        CensusDieaseGridFormDom.CensusDieaseGridFormDomStates = CensusDieaseGridFormDomStates;
        var CensusDieaseGridFormDomProps = (function (_super) {
            __extends(CensusDieaseGridFormDomProps, _super);
            function CensusDieaseGridFormDomProps() {
                _super.apply(this, arguments);
            }
            return CensusDieaseGridFormDomProps;
        }(domCore.DomProps));
        CensusDieaseGridFormDom.CensusDieaseGridFormDomProps = CensusDieaseGridFormDomProps;
    })(CensusDieaseGridFormDom = exports.CensusDieaseGridFormDom || (exports.CensusDieaseGridFormDom = {}));
});
