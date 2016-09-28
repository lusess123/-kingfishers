var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "./CombinationExamItemGridRowDow", "./CombinationExamItemRowButtonDow", "./../../../../09Web/dom/ThDom", "react", "./../../../../02col/02Mulite/SingleCheckBox"], function (require, exports, domFile, gridRowFile, rowButtonFile, thFile, React, singleCheckFile) {
    "use strict";
    var domCore = domFile.Core;
    var ThDom = thFile.Web.ThDomReact;
    var CombinationExamItemGridFromDow;
    (function (CombinationExamItemGridFromDow) {
        var CombinationExamItemGridFromDowAction = (function (_super) {
            __extends(CombinationExamItemGridFromDowAction, _super);
            function CombinationExamItemGridFromDowAction() {
                _super.apply(this, arguments);
            }
            return CombinationExamItemGridFromDowAction;
        }(domCore.DomAction));
        CombinationExamItemGridFromDow.CombinationExamItemGridFromDowAction = CombinationExamItemGridFromDowAction;
        var CombinationExamItemGridFromDowReact = (function (_super) {
            __extends(CombinationExamItemGridFromDowReact, _super);
            function CombinationExamItemGridFromDowReact() {
                _super.apply(this, arguments);
                this.state = new CombinationExamItemGridFromDowStates();
            }
            CombinationExamItemGridFromDowReact.prototype.pSender = function () {
                var _this = this;
                var theader = React.createElement("thead", null, this.initHeader());
                var tbody = this.initBody();
                var table = React.createElement("table", null, theader, tbody);
                return React.createElement("div", {className: "acs-table", onScroll: function (e) { _this.fun_Scroll(e); }}, table);
            };
            CombinationExamItemGridFromDowReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            CombinationExamItemGridFromDowReact.prototype.fun_Scroll = function (e) {
                var _$obj = $(e.target);
                this.props.Vm.ScrollAuto(_$obj.scrollLeft());
            };
            CombinationExamItemGridFromDowReact.prototype.initHeader = function () {
                return React.createElement("tr", {className: "ACT-HEADER MEMBER"}, React.createElement("th", {className: "thCheckAll acsTextC acsWidth3-5 " + (this.props.Vm.IsAcsRelative ? " acsRelative acsTableTh  " : ""), style: { left: this.props.Vm.LeftNum }}, this.props.Vm.AllCheck.intoDom()), React.createElement("th", {className: "hide"}, React.createElement("span", null, "主键")), React.createElement(ThDom, {children: null, Vm: this.getThDomVM(200)}, React.createElement("span", null, "套餐名称")), React.createElement(ThDom, {children: null, Vm: this.getThDomVM(150)}, React.createElement("span", null, "项目名称")), React.createElement(ThDom, {children: null, Vm: this.getThDomVM(200)}, React.createElement("span", null, "最后编辑时间")));
            };
            ;
            CombinationExamItemGridFromDowReact.prototype.initBody = function () {
                var _this = this;
                return React.createElement("tbody", null, this.props.Vm.RowList.map(function (row, index) {
                    return [row.intoDom(), _this.props.Vm.RowButtonList[index].intoDom()];
                }));
            };
            ;
            CombinationExamItemGridFromDowReact.prototype.getThDomVM = function (w) {
                var _ther = new thFile.Web.ThDomVm();
                if (w) {
                    _ther.Width = w;
                }
                return _ther;
            };
            return CombinationExamItemGridFromDowReact;
        }(domCore.DomReact));
        CombinationExamItemGridFromDow.CombinationExamItemGridFromDowReact = CombinationExamItemGridFromDowReact;
        var CombinationExamItemGridFromDowVm = (function (_super) {
            __extends(CombinationExamItemGridFromDowVm, _super);
            function CombinationExamItemGridFromDowVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = CombinationExamItemGridFromDowReact;
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
                        var rowVm = new gridRowFile.CombinationExamItemGridRowDow.CombinationExamItemGridRowDowVm(rowConfig);
                        _this.RowList.push(rowVm);
                        var rowBtnConfig = { Row: rowVm };
                        var rowBtnVm = new rowButtonFile.CombinationExamItemRowButtonDow.CombinationExamItemRowButtonDowVm(rowBtnConfig);
                        _this.RowButtonList.push(rowBtnVm);
                    });
                }
            }
            CombinationExamItemGridFromDowVm.prototype.ScrollAuto = function (left) {
                this.IsAcsRelative = left > 0;
                this.LeftNum = left;
                this.forceUpdate("");
            };
            return CombinationExamItemGridFromDowVm;
        }(domCore.DomVm));
        CombinationExamItemGridFromDow.CombinationExamItemGridFromDowVm = CombinationExamItemGridFromDowVm;
        var CombinationExamItemGridFromDowStates = (function (_super) {
            __extends(CombinationExamItemGridFromDowStates, _super);
            function CombinationExamItemGridFromDowStates() {
                _super.apply(this, arguments);
            }
            return CombinationExamItemGridFromDowStates;
        }(domCore.DomStates));
        CombinationExamItemGridFromDow.CombinationExamItemGridFromDowStates = CombinationExamItemGridFromDowStates;
        var CombinationExamItemGridFromDowProps = (function (_super) {
            __extends(CombinationExamItemGridFromDowProps, _super);
            function CombinationExamItemGridFromDowProps() {
                _super.apply(this, arguments);
            }
            return CombinationExamItemGridFromDowProps;
        }(domCore.DomProps));
        CombinationExamItemGridFromDow.CombinationExamItemGridFromDowProps = CombinationExamItemGridFromDowProps;
    })(CombinationExamItemGridFromDow = exports.CombinationExamItemGridFromDow || (exports.CombinationExamItemGridFromDow = {}));
});
