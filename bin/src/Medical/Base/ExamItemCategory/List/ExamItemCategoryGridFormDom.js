var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../../09Web/dom/ThDom", "./../../../../02col/02Mulite/SingleCheckBox", "./ExamItemCategoryGridRowDom", "./ExamItemCategoryRowButtonDom"], function (require, exports, React, domFile, thFile, singleCheckFile, gridRowFile, rowButtonFile) {
    "use strict";
    var domCore = domFile.Core;
    var ThDom = thFile.Web.ThDomReact;
    var ExamItemCategoryGridFormDom;
    (function (ExamItemCategoryGridFormDom) {
        var ExamItemCategoryGridFormDomAction = (function (_super) {
            __extends(ExamItemCategoryGridFormDomAction, _super);
            function ExamItemCategoryGridFormDomAction() {
                _super.apply(this, arguments);
            }
            return ExamItemCategoryGridFormDomAction;
        }(domCore.DomAction));
        ExamItemCategoryGridFormDom.ExamItemCategoryGridFormDomAction = ExamItemCategoryGridFormDomAction;
        var ExamItemCategoryGridFormDomReact = (function (_super) {
            __extends(ExamItemCategoryGridFormDomReact, _super);
            function ExamItemCategoryGridFormDomReact() {
                _super.apply(this, arguments);
                this.state = new ExamItemCategoryGridFormDomStates();
            }
            ExamItemCategoryGridFormDomReact.prototype.pSender = function () {
                var _this = this;
                var theader = React.createElement("thead", {className: "thead-default"}, this.initHeader());
                var tbody = this.initBody();
                var table = React.createElement("table", {className: "table table-hover"}, theader, tbody);
                return React.createElement("div", {className: "Hm-table", onScroll: function (e) { _this.fun_Scroll(e); }}, table);
            };
            ExamItemCategoryGridFormDomReact.prototype.fun_Scroll = function (e) {
                var _$obj = $(e.target);
                this.props.Vm.ScrollAuto(_$obj.scrollLeft());
            };
            ExamItemCategoryGridFormDomReact.prototype.initHeader = function () {
                return React.createElement("tr", {className: "ACT-HEADER MEMBER"}, React.createElement("th", {className: "thCheckAll text-center acsWidth3-5" + (this.props.Vm.IsAcsRelative ? "Hf-relative  Hf-table-th" : ""), style: { left: this.props.Vm.LeftNum }}, this.props.Vm.AllCheck.intoDom()), React.createElement("th", {className: "hide"}, React.createElement("span", null, "主键")), React.createElement(ThDom, {children: null, Vm: this.getThDomVM(200)}, React.createElement("span", null, "代码")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "职称")), React.createElement(ThDom, {children: null, Vm: this.getThDomVM(200)}, React.createElement("span", null, "最后编辑时间")));
            };
            ;
            ExamItemCategoryGridFormDomReact.prototype.initBody = function () {
                var _this = this;
                return React.createElement("tbody", null, this.props.Vm.RowList.map(function (row, index) {
                    return [row.intoDom(), _this.props.Vm.RowButtonList[index].intoDom()];
                }));
            };
            ;
            ExamItemCategoryGridFormDomReact.prototype.getThDomVM = function (w) {
                var _ther = new thFile.Web.ThDomVm();
                if (w) {
                    _ther.Width = w;
                }
                return _ther;
            };
            ExamItemCategoryGridFormDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return ExamItemCategoryGridFormDomReact;
        }(domCore.DomReact));
        ExamItemCategoryGridFormDom.ExamItemCategoryGridFormDomReact = ExamItemCategoryGridFormDomReact;
        var ExamItemCategoryGridFormDomVm = (function (_super) {
            __extends(ExamItemCategoryGridFormDomVm, _super);
            function ExamItemCategoryGridFormDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = ExamItemCategoryGridFormDomReact;
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
                        var rowVm = new gridRowFile.ExamItemCategoryGridRowDom.ExamItemCategoryGridRowDomVm(rowConfig);
                        _this.RowList.push(rowVm);
                        var rowBtnConfig = { Row: rowVm };
                        var rowBtnVm = new rowButtonFile.ExamItemCategoryRowButtonDom.EExamItemCategoryRowButtonDomVm(rowBtnConfig);
                        _this.RowButtonList.push(rowBtnVm);
                    });
                }
            }
            ExamItemCategoryGridFormDomVm.prototype.ScrollAuto = function (left) {
                this.IsAcsRelative = left > 0;
                this.LeftNum = left;
                this.forceUpdate("");
            };
            return ExamItemCategoryGridFormDomVm;
        }(domCore.DomVm));
        ExamItemCategoryGridFormDom.ExamItemCategoryGridFormDomVm = ExamItemCategoryGridFormDomVm;
        var ExamItemCategoryGridFormDomStates = (function (_super) {
            __extends(ExamItemCategoryGridFormDomStates, _super);
            function ExamItemCategoryGridFormDomStates() {
                _super.apply(this, arguments);
            }
            return ExamItemCategoryGridFormDomStates;
        }(domCore.DomStates));
        ExamItemCategoryGridFormDom.ExamItemCategoryGridFormDomStates = ExamItemCategoryGridFormDomStates;
        var ExamItemCategoryGridFormDomProps = (function (_super) {
            __extends(ExamItemCategoryGridFormDomProps, _super);
            function ExamItemCategoryGridFormDomProps() {
                _super.apply(this, arguments);
            }
            return ExamItemCategoryGridFormDomProps;
        }(domCore.DomProps));
        ExamItemCategoryGridFormDom.ExamItemCategoryGridFormDomProps = ExamItemCategoryGridFormDomProps;
    })(ExamItemCategoryGridFormDom = exports.ExamItemCategoryGridFormDom || (exports.ExamItemCategoryGridFormDom = {}));
});
