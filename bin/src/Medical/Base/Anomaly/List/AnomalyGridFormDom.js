var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../../09Web/dom/ThDom", "./AnomalyGridRowDom", "./AnomalyRowButtonDom", "./../../../../02col/02Mulite/SingleCheckBox"], function (require, exports, React, domFile, thFile, gridRowFile, rowButtonFile, singleCheckFile) {
    "use strict";
    var domCore = domFile.Core;
    var ThDom = thFile.Web.ThDomReact;
    var AnomalyGridFormDom;
    (function (AnomalyGridFormDom) {
        var AnomalyGridFormDomAction = (function (_super) {
            __extends(AnomalyGridFormDomAction, _super);
            function AnomalyGridFormDomAction() {
                _super.apply(this, arguments);
            }
            return AnomalyGridFormDomAction;
        }(domCore.DomAction));
        AnomalyGridFormDom.AnomalyGridFormDomAction = AnomalyGridFormDomAction;
        var AnomalyGridFormDomReact = (function (_super) {
            __extends(AnomalyGridFormDomReact, _super);
            function AnomalyGridFormDomReact() {
                _super.apply(this, arguments);
                this.state = new AnomalyGridFormDomStates();
            }
            AnomalyGridFormDomReact.prototype.pSender = function () {
                var _this = this;
                var theader = React.createElement("thead", {className: "thead-default"}, this.initHeader());
                var tbody = this.initBody();
                var table = React.createElement("table", {className: "table table-hover"}, theader, tbody);
                return React.createElement("div", {className: "Hm-table", onScroll: function (e) { _this.fun_Scroll(e); }}, table);
            };
            AnomalyGridFormDomReact.prototype.fun_Scroll = function (e) {
                var _$obj = $(e.target);
                this.props.Vm.ScrollAuto(_$obj.scrollLeft());
            };
            AnomalyGridFormDomReact.prototype.initHeader = function () {
                return React.createElement("tr", {className: "ACT-HEADER MEMBER"}, React.createElement("th", {className: "thCheckAll text-center acsWidth3-5 " + (this.props.Vm.IsAcsRelative ? " Hf-relative Hf-table-th  " : ""), style: { left: this.props.Vm.LeftNum }}, this.props.Vm.AllCheck.intoDom()), React.createElement("th", {className: "hide"}, React.createElement("span", null, "主键")), React.createElement(ThDom, {children: null, Vm: this.getThDomVM(200)}, React.createElement("span", null, "简码")), React.createElement(ThDom, {children: null, Vm: this.getThDomVM(150)}, React.createElement("span", null, "异常名")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "序号")));
            };
            ;
            AnomalyGridFormDomReact.prototype.initBody = function () {
                var _this = this;
                return React.createElement("tbody", null, this.props.Vm.RowList.map(function (row, index) {
                    return [row.intoDom(), _this.props.Vm.RowButtonList[index].intoDom()];
                }));
            };
            ;
            AnomalyGridFormDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            AnomalyGridFormDomReact.prototype.getThDomVM = function (w) {
                var _ther = new thFile.Web.ThDomVm();
                if (w) {
                    _ther.Width = w;
                }
                return _ther;
            };
            return AnomalyGridFormDomReact;
        }(domCore.DomReact));
        AnomalyGridFormDom.AnomalyGridFormDomReact = AnomalyGridFormDomReact;
        var AnomalyGridFormDomVm = (function (_super) {
            __extends(AnomalyGridFormDomVm, _super);
            function AnomalyGridFormDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = AnomalyGridFormDomReact;
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
                        var rowVm = new gridRowFile.AnomalyGridRowDom.AnomalyGridRowDomVm(rowConfig);
                        _this.RowList.push(rowVm);
                        var rowBtnConfig = { Row: rowVm, UniId: config.UniId };
                        var rowBtnVm = new rowButtonFile.AnomalyRowButtonDom.AnomalyRowButtonDomVm(rowBtnConfig);
                        _this.RowButtonList.push(rowBtnVm);
                    });
                }
            }
            AnomalyGridFormDomVm.prototype.ScrollAuto = function (left) {
                this.IsAcsRelative = left > 0;
                this.LeftNum = left;
                this.forceUpdate("");
            };
            return AnomalyGridFormDomVm;
        }(domCore.DomVm));
        AnomalyGridFormDom.AnomalyGridFormDomVm = AnomalyGridFormDomVm;
        var AnomalyGridFormDomStates = (function (_super) {
            __extends(AnomalyGridFormDomStates, _super);
            function AnomalyGridFormDomStates() {
                _super.apply(this, arguments);
            }
            return AnomalyGridFormDomStates;
        }(domCore.DomStates));
        AnomalyGridFormDom.AnomalyGridFormDomStates = AnomalyGridFormDomStates;
        var AnomalyGridFormDomProps = (function (_super) {
            __extends(AnomalyGridFormDomProps, _super);
            function AnomalyGridFormDomProps() {
                _super.apply(this, arguments);
            }
            return AnomalyGridFormDomProps;
        }(domCore.DomProps));
        AnomalyGridFormDom.AnomalyGridFormDomProps = AnomalyGridFormDomProps;
    })(AnomalyGridFormDom = exports.AnomalyGridFormDom || (exports.AnomalyGridFormDom = {}));
});
