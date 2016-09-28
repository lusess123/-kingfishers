var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "./ExamPackageGridRowDow", "./ExamPackageRowButtonDow", "./../../../../09Web/dom/ThDom", "react", "./../../../../02col/02Mulite/SingleCheckBox"], function (require, exports, domFile, gridRowFile, rowButtonFile, thFile, React, singleCheckFile) {
    "use strict";
    var domCore = domFile.Core;
    var ThDom = thFile.Web.ThDomReact;
    var ExamPackageGridFromDow;
    (function (ExamPackageGridFromDow) {
        var ExamPackageGridFromDowAction = (function (_super) {
            __extends(ExamPackageGridFromDowAction, _super);
            function ExamPackageGridFromDowAction() {
                _super.apply(this, arguments);
            }
            return ExamPackageGridFromDowAction;
        }(domCore.DomAction));
        ExamPackageGridFromDow.ExamPackageGridFromDowAction = ExamPackageGridFromDowAction;
        var ExamPackageGridFromDowReact = (function (_super) {
            __extends(ExamPackageGridFromDowReact, _super);
            function ExamPackageGridFromDowReact() {
                _super.apply(this, arguments);
                this.state = new ExamPackageGridFromDowStates();
            }
            ExamPackageGridFromDowReact.prototype.pSender = function () {
                var _this = this;
                var theader = React.createElement("thead", {className: "thead-default"}, this.initHeader());
                var tbody = this.initBody();
                var table = React.createElement("table", {className: "table table-hover"}, theader, tbody);
                return React.createElement("div", {className: "Hm-table", onScroll: function (e) { _this.fun_Scroll(e); }}, table);
            };
            ExamPackageGridFromDowReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            ExamPackageGridFromDowReact.prototype.fun_Scroll = function (e) {
                var _$obj = $(e.target);
                this.props.Vm.ScrollAuto(_$obj.scrollLeft());
            };
            ExamPackageGridFromDowReact.prototype.initHeader = function () {
                return React.createElement("tr", {className: "ACT-HEADER MEMBER"}, React.createElement("th", {className: "thCheckAll acsTextC acsWidth3-5 " + (this.props.Vm.IsAcsRelative ? " acsRelative acsTableTh  " : ""), style: { left: this.props.Vm.LeftNum }}, this.props.Vm.AllCheck.intoDom()), React.createElement("th", {className: "hide"}, React.createElement("span", null, "主键")), React.createElement(ThDom, {children: null, Vm: this.getThDomVM(200)}, React.createElement("span", null, "简码")), React.createElement(ThDom, {children: null, Vm: this.getThDomVM(150)}, React.createElement("span", null, "名称")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "团体价格")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "个人价格")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "年龄上限")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "年龄下限")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "适用性别")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "备注")), React.createElement(ThDom, {children: null, Vm: this.getThDomVM(200)}, React.createElement("span", null, "最后编辑时间")));
            };
            ;
            ExamPackageGridFromDowReact.prototype.initBody = function () {
                var _this = this;
                return React.createElement("tbody", null, this.props.Vm.RowList.map(function (row, index) {
                    return [row.intoDom(), _this.props.Vm.RowButtonList[index].intoDom()];
                }));
            };
            ;
            ExamPackageGridFromDowReact.prototype.getThDomVM = function (w) {
                var _ther = new thFile.Web.ThDomVm();
                if (w) {
                    _ther.Width = w;
                }
                return _ther;
            };
            return ExamPackageGridFromDowReact;
        }(domCore.DomReact));
        ExamPackageGridFromDow.ExamPackageGridFromDowReact = ExamPackageGridFromDowReact;
        var ExamPackageGridFromDowVm = (function (_super) {
            __extends(ExamPackageGridFromDowVm, _super);
            function ExamPackageGridFromDowVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = ExamPackageGridFromDowReact;
                this.IsAcsRelative = false;
                this.LeftNum = 0;
                this.CheckBoxList = new Array();
                _super.call(this);
                this.FormData = new Array();
                this.RowList = new Array();
                this.RowButtonList = new Array();
                this.AllCheck = new singleCheckFile.ui.SingleCheckBoxVm();
                if (config && config.Data) {
                    this.FormData = config.Data;
                    this.FormData.forEach(function (rowData, index) {
                        var rowNumber = index < 9 ? "0" + (index + 1) : (index + 1).toString();
                        var rowConfig = { RowData: rowData, IsAcsRelative: _this.IsAcsRelative, LeftNum: _this.LeftNum, RowNumber: rowNumber };
                        var rowVm = new gridRowFile.ExamPackageGridRowDow.ExamPackageGridRowDowVm(rowConfig);
                        _this.RowList.push(rowVm);
                        var rowBtnConfig = { Row: rowVm, UniId: config.UniId };
                        var rowBtnVm = new rowButtonFile.ExamPackageRowButtonDow.ExamPackageRowButtonDowVm(rowBtnConfig);
                        _this.RowButtonList.push(rowBtnVm);
                    });
                }
            }
            ExamPackageGridFromDowVm.prototype.ScrollAuto = function (left) {
                this.IsAcsRelative = left > 0;
                this.LeftNum = left;
                this.forceUpdate("");
            };
            return ExamPackageGridFromDowVm;
        }(domCore.DomVm));
        ExamPackageGridFromDow.ExamPackageGridFromDowVm = ExamPackageGridFromDowVm;
        var ExamPackageGridFromDowStates = (function (_super) {
            __extends(ExamPackageGridFromDowStates, _super);
            function ExamPackageGridFromDowStates() {
                _super.apply(this, arguments);
            }
            return ExamPackageGridFromDowStates;
        }(domCore.DomStates));
        ExamPackageGridFromDow.ExamPackageGridFromDowStates = ExamPackageGridFromDowStates;
        var ExamPackageGridFromDowProps = (function (_super) {
            __extends(ExamPackageGridFromDowProps, _super);
            function ExamPackageGridFromDowProps() {
                _super.apply(this, arguments);
            }
            return ExamPackageGridFromDowProps;
        }(domCore.DomProps));
        ExamPackageGridFromDow.ExamPackageGridFromDowProps = ExamPackageGridFromDowProps;
    })(ExamPackageGridFromDow = exports.ExamPackageGridFromDow || (exports.ExamPackageGridFromDow = {}));
});
