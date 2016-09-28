var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "./ExamItemGirdRowDom", "./ExamItemRowButtonDow", "./../../../../09Web/dom/ThDom", "react", "./../../../../02col/02Mulite/SingleCheckBox"], function (require, exports, domFile, gridRowFile, rowButtonFile, thFile, React, singleCheckFile) {
    "use strict";
    var domCore = domFile.Core;
    var ThDom = thFile.Web.ThDomReact;
    var ExamItemGridFromDow;
    (function (ExamItemGridFromDow) {
        var ExamItemGridFromDowAction = (function (_super) {
            __extends(ExamItemGridFromDowAction, _super);
            function ExamItemGridFromDowAction() {
                _super.apply(this, arguments);
            }
            return ExamItemGridFromDowAction;
        }(domCore.DomAction));
        ExamItemGridFromDow.ExamItemGridFromDowAction = ExamItemGridFromDowAction;
        var ExamItemGridFromDowReact = (function (_super) {
            __extends(ExamItemGridFromDowReact, _super);
            function ExamItemGridFromDowReact() {
                _super.apply(this, arguments);
                this.state = new ExamItemGridFromDowStates();
            }
            ExamItemGridFromDowReact.prototype.pSender = function () {
                var _this = this;
                var theader = React.createElement("thead", {className: "thead-default"}, this.initHeader());
                var tbody = this.initBody();
                var table = React.createElement("table", {className: "table table-hover"}, theader, tbody);
                return React.createElement("div", {className: "Hm-table", onScroll: function (e) { _this.fun_Scroll(e); }}, table);
            };
            ExamItemGridFromDowReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            ExamItemGridFromDowReact.prototype.fun_Scroll = function (e) {
                var _$obj = $(e.target);
                this.props.Vm.ScrollAuto(_$obj.scrollLeft());
            };
            ExamItemGridFromDowReact.prototype.initHeader = function () {
                return React.createElement("tr", {className: "ACT-HEADER MEMBER"}, React.createElement("th", {className: "thCheckAll text-center acsWidth3-5 " + (this.props.Vm.IsAcsRelative ? " Hf-relative Hf-table-th  " : ""), style: { left: this.props.Vm.LeftNum }}, this.props.Vm.AllCheck.intoDom()), React.createElement("th", {className: "hide"}, React.createElement("span", null, "主键")), React.createElement(ThDom, {children: null, Vm: this.getThDomVM(200)}, React.createElement("span", null, "简码")), React.createElement(ThDom, {children: null, Vm: this.getThDomVM(150)}, React.createElement("span", null, "项目代码")), React.createElement(ThDom, {children: null, Vm: this.getThDomVM(150)}, React.createElement("span", null, "项目名称")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "所属科室")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "项目分类")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "单位")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "参考上限")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "参考下限")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "价格")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "序号")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "体检结果类型")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "备注")), React.createElement(ThDom, {children: null, Vm: this.getThDomVM(200)}, React.createElement("span", null, "最后编辑时间")));
            };
            ;
            ExamItemGridFromDowReact.prototype.initBody = function () {
                var _this = this;
                return React.createElement("tbody", null, this.props.Vm.RowList.map(function (row, index) {
                    return [row.intoDom(), _this.props.Vm.RowButtonList[index].intoDom()];
                }));
            };
            ;
            ExamItemGridFromDowReact.prototype.getThDomVM = function (w) {
                var _ther = new thFile.Web.ThDomVm();
                if (w) {
                    _ther.Width = w;
                }
                return _ther;
            };
            return ExamItemGridFromDowReact;
        }(domCore.DomReact));
        ExamItemGridFromDow.ExamItemGridFromDowReact = ExamItemGridFromDowReact;
        var ExamItemGridFromDowVm = (function (_super) {
            __extends(ExamItemGridFromDowVm, _super);
            function ExamItemGridFromDowVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = ExamItemGridFromDowReact;
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
                        var rowVm = new gridRowFile.ExamItemGirdRow.ExamItemGirdRowVm(rowConfig);
                        _this.RowList.push(rowVm);
                        var rowBtnConfig = { Row: rowVm, UniId: config.UniId };
                        var rowBtnVm = new rowButtonFile.ExamItemRowButtonDow.ExamItemRowButtonDowVm(rowBtnConfig);
                        _this.RowButtonList.push(rowBtnVm);
                    });
                }
            }
            ExamItemGridFromDowVm.prototype.ScrollAuto = function (left) {
                this.IsAcsRelative = left > 0;
                this.LeftNum = left;
                this.forceUpdate("");
            };
            return ExamItemGridFromDowVm;
        }(domCore.DomVm));
        ExamItemGridFromDow.ExamItemGridFromDowVm = ExamItemGridFromDowVm;
        var ExamItemGridFromDowStates = (function (_super) {
            __extends(ExamItemGridFromDowStates, _super);
            function ExamItemGridFromDowStates() {
                _super.apply(this, arguments);
            }
            return ExamItemGridFromDowStates;
        }(domCore.DomStates));
        ExamItemGridFromDow.ExamItemGridFromDowStates = ExamItemGridFromDowStates;
        var ExamItemGridFromDowProps = (function (_super) {
            __extends(ExamItemGridFromDowProps, _super);
            function ExamItemGridFromDowProps() {
                _super.apply(this, arguments);
            }
            return ExamItemGridFromDowProps;
        }(domCore.DomProps));
        ExamItemGridFromDow.ExamItemGridFromDowProps = ExamItemGridFromDowProps;
    })(ExamItemGridFromDow = exports.ExamItemGridFromDow || (exports.ExamItemGridFromDow = {}));
});
