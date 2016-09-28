var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../01core/0Dom", "./../../../09Web/dom/ThDom", "./insertRowDom", "./InsertRowButtonDom", "./../../../02col/02Mulite/SingleCheckBox"], function (require, exports, React, domFile, thFile, gridRowFile, rowButtonFile, singleCheckFile) {
    "use strict";
    var domCore = domFile.Core;
    var ThDom = thFile.Web.ThDomReact;
    var InsertGridFormDom;
    (function (InsertGridFormDom) {
        var InsertGridFormDomAction = (function (_super) {
            __extends(InsertGridFormDomAction, _super);
            function InsertGridFormDomAction() {
                _super.apply(this, arguments);
            }
            return InsertGridFormDomAction;
        }(domCore.DomAction));
        InsertGridFormDom.InsertGridFormDomAction = InsertGridFormDomAction;
        var InsertGridFormDomReact = (function (_super) {
            __extends(InsertGridFormDomReact, _super);
            function InsertGridFormDomReact() {
                _super.apply(this, arguments);
                this.state = new InsertGridFormDomStates();
            }
            InsertGridFormDomReact.prototype.pSender = function () {
                var _this = this;
                var theader = React.createElement("thead", {className: "thead-default"}, this.initHeader());
                var tbody = this.initBody();
                var table = React.createElement("table", {className: "table table-hover"}, theader, tbody);
                return React.createElement("div", {className: "Hm-table", onScroll: function (e) { _this.fun_Scroll(e); }}, table);
            };
            InsertGridFormDomReact.prototype.fun_Scroll = function (e) {
                var _$obj = $(e.target);
                this.props.Vm.ScrollAuto(_$obj.scrollLeft());
            };
            InsertGridFormDomReact.prototype.initHeader = function () {
                return React.createElement("tr", {className: "ACT-HEADER MEMBER"}, React.createElement("th", {className: "thCheckAll text-center acsWidth3-5 " + (this.props.Vm.IsAcsRelative ? " Hf-relative Hf-table-th  " : "")}, this.props.Vm.AllCheck.intoDom()), React.createElement("th", {className: "hide"}, React.createElement("span", null, "主键")), React.createElement(ThDom, {children: null, Vm: this.getThDomVM(200)}, React.createElement("span", null, "姓名")), React.createElement(ThDom, {children: null, Vm: this.getThDomVM(150)}, React.createElement("span", null, "身份证")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "体检号")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "档案号")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "单位")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "状态")));
            };
            ;
            InsertGridFormDomReact.prototype.initBody = function () {
                var _this = this;
                return React.createElement("tbody", null, this.props.Vm.RowList.map(function (row, index) {
                    return [row.intoDom(), _this.props.Vm.RowButtonList[index].intoDom()];
                }));
            };
            ;
            InsertGridFormDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            InsertGridFormDomReact.prototype.getThDomVM = function (w) {
                var _ther = new thFile.Web.ThDomVm();
                if (w) {
                    _ther.Width = w;
                }
                return _ther;
            };
            return InsertGridFormDomReact;
        }(domCore.DomReact));
        InsertGridFormDom.InsertGridFormDomReact = InsertGridFormDomReact;
        var InsertGridFormDomVm = (function (_super) {
            __extends(InsertGridFormDomVm, _super);
            function InsertGridFormDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = InsertGridFormDomReact;
                this.IsAcsRelative = false;
                this.CheckBoxList = new Array();
                this.FormData = new Array();
                this.RowList = new Array();
                this.RowButtonList = new Array();
                this.AllCheck = new singleCheckFile.ui.SingleCheckBoxVm();
                if (config && config.Data) {
                    this.FormData = config.Data;
                    this.FormData.forEach(function (rowData, index) {
                        var rowNumber = index < 9 ? "0" + (index + 1) : (index + 1).toString();
                        var rowConfig = { RowData: rowData, IsAcsRelative: _this.IsAcsRelative, RowNumber: rowNumber };
                        var rowVm = new gridRowFile.InsertRowDom.InsertRowDomVm(rowConfig);
                        _this.RowList.push(rowVm);
                        var rowBtnConfig = { Row: rowVm, UniId: config.UniId };
                        var rowBtnVm = new rowButtonFile.InsertRowButtonDom.AnomalyRowButtonDomVm(rowBtnConfig);
                        _this.RowButtonList.push(rowBtnVm);
                    });
                }
            }
            InsertGridFormDomVm.prototype.ScrollAuto = function (left) {
                this.IsAcsRelative = left > 0;
                //this.LeftNum = left;
                this.forceUpdate("");
            };
            return InsertGridFormDomVm;
        }(domCore.DomVm));
        InsertGridFormDom.InsertGridFormDomVm = InsertGridFormDomVm;
        var InsertGridFormDomStates = (function (_super) {
            __extends(InsertGridFormDomStates, _super);
            function InsertGridFormDomStates() {
                _super.apply(this, arguments);
            }
            return InsertGridFormDomStates;
        }(domCore.DomStates));
        InsertGridFormDom.InsertGridFormDomStates = InsertGridFormDomStates;
        var InsertGridFormDomProps = (function (_super) {
            __extends(InsertGridFormDomProps, _super);
            function InsertGridFormDomProps() {
                _super.apply(this, arguments);
            }
            return InsertGridFormDomProps;
        }(domCore.DomProps));
        InsertGridFormDom.InsertGridFormDomProps = InsertGridFormDomProps;
    })(InsertGridFormDom = exports.InsertGridFormDom || (exports.InsertGridFormDom = {}));
});
