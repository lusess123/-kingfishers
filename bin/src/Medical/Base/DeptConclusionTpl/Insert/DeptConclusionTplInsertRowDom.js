var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./DeptConclusionTplInsertMasterRowDom", "./../../../Common/ItemConditionInsertDetailRowDom", "./../../../../01core/Event"], function (require, exports, React, domFile, masterRowFile, detailRowFile, eventFile) {
    "use strict";
    var domCore = domFile.Core;
    var DeptConclusionTplInsertRowDom;
    (function (DeptConclusionTplInsertRowDom) {
        var DeptConclusionTplInsertRowDomAction = (function (_super) {
            __extends(DeptConclusionTplInsertRowDomAction, _super);
            function DeptConclusionTplInsertRowDomAction() {
                _super.apply(this, arguments);
            }
            return DeptConclusionTplInsertRowDomAction;
        }(domCore.DomAction));
        DeptConclusionTplInsertRowDom.DeptConclusionTplInsertRowDomAction = DeptConclusionTplInsertRowDomAction;
        var DeptConclusionTplInsertRowDomReact = (function (_super) {
            __extends(DeptConclusionTplInsertRowDomReact, _super);
            function DeptConclusionTplInsertRowDomReact() {
                _super.apply(this, arguments);
                this.state = new DeptConclusionTplInsertRowDomStates();
            }
            DeptConclusionTplInsertRowDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", null, this.props.Vm.MasterRow.intoDom(), React.createElement("div", {className: "panel"}, React.createElement("div", {className: "panel-heading"}, React.createElement("h4", {className: "panel-title"}, React.createElement("a", {onClick: function () { _this.fun_detailTitleClick(); }}, "关联项目", React.createElement("i", {className: "fa fa-angle-" + (this.props.Vm.IsDetailHide ? "up" : "down")})))), React.createElement("div", {className: "panel-collapse collapse in"}, React.createElement("div", {className: "content active" + (this.props.Vm.IsDetailHide ? "hide" : "")}, React.createElement("div", {className: "table-responsive"}, React.createElement("table", {className: "table table-bordered table-striped"}, React.createElement("thead", {className: "thead-default"}, React.createElement("tr", {className: "ACT-HEADER MEMBER"}, React.createElement("th", {className: "thCheckAll acsTextC", style: { width: "1em" }}), React.createElement("th", {className: "hide"}, React.createElement("span", null, "主键")), React.createElement("th", null, React.createElement("span", null, "项目名称")), React.createElement("th", null, React.createElement("span", null, "高于")), React.createElement("th", null, React.createElement("span", null, "低于")), React.createElement("th", null, React.createElement("span", null, "单位")), React.createElement("th", null, React.createElement("span", null, "是否阳性")), React.createElement("th", null, React.createElement("span", null, "关键词")), React.createElement("th", null, React.createElement("i", {className: "fa fa-plus-circle Hu-pointer", onClick: function () { _this.fun_addNewDetailRow(); }})))), React.createElement("tbody", null, this.props.Vm.DetailRowList.map(function (row, index) {
                    row.RowNumber = index;
                    return row.intoDom();
                }))))))));
            };
            DeptConclusionTplInsertRowDomReact.prototype.fun_addNewDetailRow = function () {
                this.props.Vm.addDetailRow();
            };
            DeptConclusionTplInsertRowDomReact.prototype.fun_detailTitleClick = function () {
                this.props.Vm.IsDetailHide = !this.props.Vm.IsDetailHide;
                this.forceUpdate();
            };
            DeptConclusionTplInsertRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return DeptConclusionTplInsertRowDomReact;
        }(domCore.DomReact));
        DeptConclusionTplInsertRowDom.DeptConclusionTplInsertRowDomReact = DeptConclusionTplInsertRowDomReact;
        var DeptConclusionTplInsertRowDomVm = (function (_super) {
            __extends(DeptConclusionTplInsertRowDomVm, _super);
            function DeptConclusionTplInsertRowDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = DeptConclusionTplInsertRowDomReact;
                //public DetailRowList: detailRowFile.DeptConclusionTplInsertDetailRowDom.DeptConclusionTplInsertDetailRowDomVm[] = [];
                this.DetailRowList = [];
                this.UniId = eventFile.App.getUniId().toString();
                this.MasterRow = new masterRowFile.DeptConclusionTplInsertMasterRowDom.DeptConclusionTplInsertMasterRowDomVm();
                this.listenAppEvent("medical/base/DeptConclusionTpl/Insert/DetailRow", this.UniId, function (rowIndex) {
                    _this.delDetailRowByIndex(rowIndex);
                });
            }
            DeptConclusionTplInsertRowDomVm.prototype.delDetailRowByIndex = function (rowIndex) {
                this.DetailRowList.splice(rowIndex, 1);
                this.DetailRowList.forEach(function (r, i) {
                    if (i >= rowIndex) {
                        r.toChange();
                    }
                });
                this.forceUpdate("");
            };
            DeptConclusionTplInsertRowDomVm.prototype.addDetailRow = function () {
                var data = { FID: "", ItemName: "", GreaterThan: "", LessThan: "", Unit: "", IsPositive: "", KeyWord: "" };
                //var detailRow: detailRowFile.DeptConclusionTplInsertDetailRowDom.DeptConclusionTplInsertDetailRowDomVm = new detailRowFile.DeptConclusionTplInsertDetailRowDom.DeptConclusionTplInsertDetailRowDomVm({ UniId: this.UniId, RowData: data });
                var detailRow = new detailRowFile.ItemConditionInsertDetailRowDom.ItemConditionInsertDetailRowDomVm({ UniId: this.UniId, RowData: data });
                this.DetailRowList.push(detailRow);
                this.forceUpdate("");
            };
            DeptConclusionTplInsertRowDomVm.prototype.legal = function () {
                //var l1 = this.MasterRow.TextVmObjList["Name"].legal();
                //var l2 = (this.MasterRow.RowData.Content == null || this.MasterRow.RowData.Content == "") ? false : true;
                //var _res = l1 && l2;
                var _res = this.MasterRow.legal();
                this.DetailRowList.forEach(function (r) {
                    _res = r.legal() && _res;
                });
                return _res;
            };
            return DeptConclusionTplInsertRowDomVm;
        }(domCore.DomVm));
        DeptConclusionTplInsertRowDom.DeptConclusionTplInsertRowDomVm = DeptConclusionTplInsertRowDomVm;
        var DeptConclusionTplInsertRowDomStates = (function (_super) {
            __extends(DeptConclusionTplInsertRowDomStates, _super);
            function DeptConclusionTplInsertRowDomStates() {
                _super.apply(this, arguments);
            }
            return DeptConclusionTplInsertRowDomStates;
        }(domCore.DomStates));
        DeptConclusionTplInsertRowDom.DeptConclusionTplInsertRowDomStates = DeptConclusionTplInsertRowDomStates;
        var DeptConclusionTplInsertRowDomProps = (function (_super) {
            __extends(DeptConclusionTplInsertRowDomProps, _super);
            function DeptConclusionTplInsertRowDomProps() {
                _super.apply(this, arguments);
            }
            return DeptConclusionTplInsertRowDomProps;
        }(domCore.DomProps));
        DeptConclusionTplInsertRowDom.DeptConclusionTplInsertRowDomProps = DeptConclusionTplInsertRowDomProps;
    })(DeptConclusionTplInsertRowDom = exports.DeptConclusionTplInsertRowDom || (exports.DeptConclusionTplInsertRowDom = {}));
});
