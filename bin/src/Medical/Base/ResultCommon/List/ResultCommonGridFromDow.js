var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "./ResultCommonGridRowDow", "./ResultCommonRowButtonDow", "./../../../../09Web/dom/ThDom", "react", "./../../../../02col/02Mulite/SingleCheckBox"], function (require, exports, domFile, gridRowFile, rowButtonFile, thFile, React, singleCheckFile) {
    "use strict";
    var domCore = domFile.Core;
    var ThDom = thFile.Web.ThDomReact;
    var ResultCommonGridFromDow;
    (function (ResultCommonGridFromDow) {
        var ResultCommonGridFromDowAction = (function (_super) {
            __extends(ResultCommonGridFromDowAction, _super);
            function ResultCommonGridFromDowAction() {
                _super.apply(this, arguments);
            }
            return ResultCommonGridFromDowAction;
        }(domCore.DomAction));
        ResultCommonGridFromDow.ResultCommonGridFromDowAction = ResultCommonGridFromDowAction;
        var ResultCommonGridFromDowReact = (function (_super) {
            __extends(ResultCommonGridFromDowReact, _super);
            function ResultCommonGridFromDowReact() {
                _super.apply(this, arguments);
                this.state = new ResultCommonGridFromDowStates();
            }
            ResultCommonGridFromDowReact.prototype.pSender = function () {
                var _this = this;
                var theader = React.createElement("thead", {className: "thead-default"}, this.initHeader());
                var tbody = this.initBody();
                var table = React.createElement("table", {className: "table table-hover"}, theader, tbody);
                return React.createElement("div", {className: "Hm-table", onScroll: function (e) { _this.fun_Scroll(e); }}, table);
            };
            ResultCommonGridFromDowReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            ResultCommonGridFromDowReact.prototype.fun_Scroll = function (e) {
                var _$obj = $(e.target);
                this.props.Vm.ScrollAuto(_$obj.scrollLeft());
            };
            ResultCommonGridFromDowReact.prototype.initHeader = function () {
                return React.createElement("tr", {className: "ACT-HEADER MEMBER"}, React.createElement("th", {className: "thCheckAll acsTextC acsWidth3-5 " + (this.props.Vm.IsAcsRelative ? " acsRelative acsTableTh  " : ""), style: { left: this.props.Vm.LeftNum }}, this.props.Vm.AllCheck.intoDom()), React.createElement("th", {className: "hide"}, React.createElement("span", null, "主键")), React.createElement(ThDom, {children: null, Vm: this.getThDomVM(100)}, React.createElement("span", null, "简码")), React.createElement(ThDom, {children: null, Vm: this.getThDomVM(200)}, React.createElement("span", null, "体检项目")), React.createElement(ThDom, {children: null, Vm: this.getThDomVM(300)}, React.createElement("span", null, "体检结果")), React.createElement(ThDom, {children: null, Vm: this.getThDomVM(100)}, React.createElement("span", null, "序号")), React.createElement(ThDom, {children: null, Vm: this.getThDomVM(200)}, React.createElement("span", null, "最后编辑时间")));
            };
            ;
            ResultCommonGridFromDowReact.prototype.initBody = function () {
                var _this = this;
                return React.createElement("tbody", null, this.props.Vm.RowList.map(function (row, index) {
                    return [row.intoDom(), _this.props.Vm.RowButtonList[index].intoDom()];
                }));
            };
            ;
            ResultCommonGridFromDowReact.prototype.getThDomVM = function (w) {
                var _ther = new thFile.Web.ThDomVm();
                if (w) {
                    _ther.Width = w;
                }
                return _ther;
            };
            return ResultCommonGridFromDowReact;
        }(domCore.DomReact));
        ResultCommonGridFromDow.ResultCommonGridFromDowReact = ResultCommonGridFromDowReact;
        var ResultCommonGridFromDowVm = (function (_super) {
            __extends(ResultCommonGridFromDowVm, _super);
            function ResultCommonGridFromDowVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = ResultCommonGridFromDowReact;
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
                        var rowVm = new gridRowFile.ResultCommonGridRowDow.ResultCommonGridRowDowVm(rowConfig);
                        _this.RowList.push(rowVm);
                        var rowBtnConfig = { Row: rowVm, UniId: config.UniId };
                        var rowBtnVm = new rowButtonFile.ResultCommonRowButtonDow.ResultCommonRowButtonDowVm(rowBtnConfig);
                        _this.RowButtonList.push(rowBtnVm);
                    });
                }
            }
            ResultCommonGridFromDowVm.prototype.ScrollAuto = function (left) {
                this.IsAcsRelative = left > 0;
                this.LeftNum = left;
                this.forceUpdate("");
            };
            return ResultCommonGridFromDowVm;
        }(domCore.DomVm));
        ResultCommonGridFromDow.ResultCommonGridFromDowVm = ResultCommonGridFromDowVm;
        var ResultCommonGridFromDowStates = (function (_super) {
            __extends(ResultCommonGridFromDowStates, _super);
            function ResultCommonGridFromDowStates() {
                _super.apply(this, arguments);
            }
            return ResultCommonGridFromDowStates;
        }(domCore.DomStates));
        ResultCommonGridFromDow.ResultCommonGridFromDowStates = ResultCommonGridFromDowStates;
        var ResultCommonGridFromDowProps = (function (_super) {
            __extends(ResultCommonGridFromDowProps, _super);
            function ResultCommonGridFromDowProps() {
                _super.apply(this, arguments);
            }
            return ResultCommonGridFromDowProps;
        }(domCore.DomProps));
        ResultCommonGridFromDow.ResultCommonGridFromDowProps = ResultCommonGridFromDowProps;
    })(ResultCommonGridFromDow = exports.ResultCommonGridFromDow || (exports.ResultCommonGridFromDow = {}));
});
