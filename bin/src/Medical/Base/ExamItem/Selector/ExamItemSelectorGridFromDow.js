var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "./ExamItemSelectorGirdRowDom", "./../../../../09Web/dom/ThDom", "react", "./../../../../02col/02Mulite/SingleCheckBox"], function (require, exports, domFile, gridRowFile, thFile, React, singleCheckFile) {
    "use strict";
    var domCore = domFile.Core;
    var ThDom = thFile.Web.ThDomReact;
    var ExamItemSelectorGridFromDow;
    (function (ExamItemSelectorGridFromDow) {
        var ExamItemSelectorGridFromDowAction = (function (_super) {
            __extends(ExamItemSelectorGridFromDowAction, _super);
            function ExamItemSelectorGridFromDowAction() {
                _super.apply(this, arguments);
            }
            return ExamItemSelectorGridFromDowAction;
        }(domCore.DomAction));
        ExamItemSelectorGridFromDow.ExamItemSelectorGridFromDowAction = ExamItemSelectorGridFromDowAction;
        var ExamItemSelectorGridFromDowReact = (function (_super) {
            __extends(ExamItemSelectorGridFromDowReact, _super);
            function ExamItemSelectorGridFromDowReact() {
                _super.apply(this, arguments);
                this.state = new ExamItemSelectorGridFromDowStates();
            }
            ExamItemSelectorGridFromDowReact.prototype.pSender = function () {
                var _this = this;
                var theader = React.createElement("thead", null, this.initHeader());
                var tbody = this.initBody();
                var table = React.createElement("table", null, theader, tbody);
                return React.createElement("div", {className: "acs-table", onScroll: function (e) { _this.fun_Scroll(e); }}, table);
            };
            ExamItemSelectorGridFromDowReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            ExamItemSelectorGridFromDowReact.prototype.fun_Scroll = function (e) {
                var _$obj = $(e.target);
                this.props.Vm.ScrollAuto(_$obj.scrollLeft());
            };
            ExamItemSelectorGridFromDowReact.prototype.initHeader = function () {
                return React.createElement("tr", {className: "ACT-HEADER MEMBER"}, React.createElement("th", {className: "thCheckAll acsTextC acsWidth3-5 " + (this.props.Vm.IsAcsRelative ? " acsRelative acsTableTh  " : ""), style: { left: this.props.Vm.LeftNum }}, this.props.Vm.AllCheck.intoDom()), React.createElement("th", {className: "hide"}, React.createElement("span", null, "主键")), React.createElement(ThDom, {children: null, Vm: this.getThDomVM(200)}, React.createElement("span", null, "简码")), React.createElement(ThDom, {children: null, Vm: this.getThDomVM(150)}, React.createElement("span", null, "项目代码")), React.createElement(ThDom, {children: null, Vm: this.getThDomVM(150)}, React.createElement("span", null, "项目名称")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "所属科室")));
            };
            ;
            ExamItemSelectorGridFromDowReact.prototype.initBody = function () {
                return React.createElement("tbody", null, this.props.Vm.RowList.map(function (row, index) {
                    return row.intoDom();
                }));
            };
            ;
            ExamItemSelectorGridFromDowReact.prototype.getThDomVM = function (w) {
                var _ther = new thFile.Web.ThDomVm();
                if (w) {
                    _ther.Width = w;
                }
                return _ther;
            };
            return ExamItemSelectorGridFromDowReact;
        }(domCore.DomReact));
        ExamItemSelectorGridFromDow.ExamItemSelectorGridFromDowReact = ExamItemSelectorGridFromDowReact;
        var ExamItemSelectorGridFromDowVm = (function (_super) {
            __extends(ExamItemSelectorGridFromDowVm, _super);
            function ExamItemSelectorGridFromDowVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = ExamItemSelectorGridFromDowReact;
                this.IsAcsRelative = false;
                this.LeftNum = 0;
                this.CheckBoxList = new Array();
                this.FormData = new Array();
                this.RowList = new Array();
                this.AllCheck = new singleCheckFile.ui.SingleCheckBoxVm();
                if (config && config.Data) {
                    if (config.UniId) {
                        this.UniId = config.UniId;
                    }
                    this.FormData = config.Data;
                    this.FormData.forEach(function (rowData, index) {
                        var rowNumber = index < 9 ? "0" + (index + 1) : (index + 1).toString();
                        var rowConfig = {
                            RowData: rowData,
                            IsAcsRelative: _this.IsAcsRelative,
                            LeftNum: _this.LeftNum,
                            RowNumber: rowNumber,
                            IsMultiSelect: config.IsMultiSelect,
                            UniId: _this.UniId
                        };
                        var rowVm = new gridRowFile.ExamItemSelectorGirdRow.ExamItemSelectorGirdRowVm(rowConfig);
                        _this.RowList.push(rowVm);
                    });
                }
            }
            ExamItemSelectorGridFromDowVm.prototype.ScrollAuto = function (left) {
                this.IsAcsRelative = left > 0;
                this.LeftNum = left;
                this.forceUpdate("");
            };
            return ExamItemSelectorGridFromDowVm;
        }(domCore.DomVm));
        ExamItemSelectorGridFromDow.ExamItemSelectorGridFromDowVm = ExamItemSelectorGridFromDowVm;
        var ExamItemSelectorGridFromDowStates = (function (_super) {
            __extends(ExamItemSelectorGridFromDowStates, _super);
            function ExamItemSelectorGridFromDowStates() {
                _super.apply(this, arguments);
            }
            return ExamItemSelectorGridFromDowStates;
        }(domCore.DomStates));
        ExamItemSelectorGridFromDow.ExamItemSelectorGridFromDowStates = ExamItemSelectorGridFromDowStates;
        var ExamItemSelectorGridFromDowProps = (function (_super) {
            __extends(ExamItemSelectorGridFromDowProps, _super);
            function ExamItemSelectorGridFromDowProps() {
                _super.apply(this, arguments);
            }
            return ExamItemSelectorGridFromDowProps;
        }(domCore.DomProps));
        ExamItemSelectorGridFromDow.ExamItemSelectorGridFromDowProps = ExamItemSelectorGridFromDowProps;
    })(ExamItemSelectorGridFromDow = exports.ExamItemSelectorGridFromDow || (exports.ExamItemSelectorGridFromDow = {}));
});
