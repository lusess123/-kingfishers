var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./AnomalyInsertMasterRowDom", "./../../../Common/ItemConditionInsertDetailRowDom", "./../../../../01core/Event"], function (require, exports, React, domFile, masterRowFile, detailRowFile, eventFile) {
    "use strict";
    var domCore = domFile.Core;
    var AnomalyInsertRowDom;
    (function (AnomalyInsertRowDom) {
        var AnomalyInsertRowDomAction = (function (_super) {
            __extends(AnomalyInsertRowDomAction, _super);
            function AnomalyInsertRowDomAction() {
                _super.apply(this, arguments);
            }
            return AnomalyInsertRowDomAction;
        }(domCore.DomAction));
        AnomalyInsertRowDom.AnomalyInsertRowDomAction = AnomalyInsertRowDomAction;
        var AnomalyInsertRowDomReact = (function (_super) {
            __extends(AnomalyInsertRowDomReact, _super);
            function AnomalyInsertRowDomReact() {
                _super.apply(this, arguments);
                this.state = new AnomalyInsertRowDomStates();
            }
            AnomalyInsertRowDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", null, this.props.Vm.MasterRow.intoDom(), React.createElement("div", {className: "panel"}, React.createElement("div", {className: "panel-heading"}, React.createElement("h4", {className: "panel-title"}, React.createElement("a", {onClick: function () { _this.fun_detailTitleClick(); }}, "关联项目", React.createElement("i", {className: "fa fa-angle-" + (this.props.Vm.IsDetailHide ? "up" : "down")})))), React.createElement("div", {className: "panel-collapse collapse in"}, React.createElement("div", {className: "content active" + (this.props.Vm.IsDetailHide ? "hide" : "")}, React.createElement("div", {className: "table-responsive"}, React.createElement("table", {className: "table table-bordered table-striped"}, React.createElement("thead", {className: "thead-default"}, React.createElement("tr", {className: "ACT-HEADER MEMBER"}, React.createElement("th", {className: "thCheckAll acsTextC", style: { width: "1em" }}), React.createElement("th", {className: "hide"}, React.createElement("span", null, "主键")), React.createElement("th", null, React.createElement("span", null, "项目名称")), React.createElement("th", null, React.createElement("span", null, "高于")), React.createElement("th", null, React.createElement("span", null, "低于")), React.createElement("th", null, React.createElement("span", null, "单位")), React.createElement("th", null, React.createElement("span", null, "是否阳性")), React.createElement("th", null, React.createElement("span", null, "关键词")), React.createElement("th", null, React.createElement("i", {className: "fa fa-plus-circle Hu-pointer", onClick: function () { _this.fun_addNewDetailRow(); }})))), React.createElement("tbody", null, this.props.Vm.DetailRowList.map(function (row, index) {
                    row.RowNumber = index;
                    return row.intoDom();
                }))))))));
            };
            AnomalyInsertRowDomReact.prototype.fun_addNewDetailRow = function () {
                this.props.Vm.addDetailRow();
            };
            AnomalyInsertRowDomReact.prototype.fun_detailTitleClick = function () {
                this.props.Vm.IsDetailHide = !this.props.Vm.IsDetailHide;
                this.forceUpdate();
            };
            AnomalyInsertRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return AnomalyInsertRowDomReact;
        }(domCore.DomReact));
        AnomalyInsertRowDom.AnomalyInsertRowDomReact = AnomalyInsertRowDomReact;
        var AnomalyInsertRowDomVm = (function (_super) {
            __extends(AnomalyInsertRowDomVm, _super);
            function AnomalyInsertRowDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = AnomalyInsertRowDomReact;
                // public DetailRowList: detailRowFile.AnomalyInsertDetailRowDom.AnomalyInsertDetailRowDomVm[] = [];
                this.DetailRowList = [];
                this.UniId = eventFile.App.getUniId().toString();
                this.MasterRow = new masterRowFile.AnomalyInsertMasterRowDom.AnomalyInsertMasterRowDomVm();
                this.listenAppEvent("medical/base/Anomaly/Insert/DetailRow", this.UniId, function (rowIndex) {
                    _this.delDetailRowByIndex(rowIndex);
                });
            }
            AnomalyInsertRowDomVm.prototype.delDetailRowByIndex = function (rowIndex) {
                this.DetailRowList.splice(rowIndex, 1);
                this.DetailRowList.forEach(function (r, i) {
                    if (i >= rowIndex) {
                        r.toChange();
                    }
                });
                this.forceUpdate("");
            };
            AnomalyInsertRowDomVm.prototype.addDetailRow = function () {
                var data = { FID: "", ItemName: "", GreaterThan: "", LessThan: "", Unit: "", IsPositive: "", KeyWord: "" };
                //var detailRow: detailRowFile.AnomalyInsertDetailRowDom.AnomalyInsertDetailRowDomVm = new detailRowFile.AnomalyInsertDetailRowDom.AnomalyInsertDetailRowDomVm({ UniId: this.UniId,RowData:data });
                var detailRow = new detailRowFile.ItemConditionInsertDetailRowDom.ItemConditionInsertDetailRowDomVm({ UniId: this.UniId, RowData: data });
                this.DetailRowList.push(detailRow);
                this.forceUpdate("");
            };
            AnomalyInsertRowDomVm.prototype.legal = function () {
                //var l1 = this.MasterRow.TextVmObjList["Name"].legal();
                //var l2 = this.MasterRow.TextVmObjList["SimpleCode"].legal();
                var _res = this.MasterRow.legal();
                this.DetailRowList.forEach(function (r) {
                    _res = r.legal() && _res;
                });
                return _res;
            };
            return AnomalyInsertRowDomVm;
        }(domCore.DomVm));
        AnomalyInsertRowDom.AnomalyInsertRowDomVm = AnomalyInsertRowDomVm;
        var AnomalyInsertRowDomStates = (function (_super) {
            __extends(AnomalyInsertRowDomStates, _super);
            function AnomalyInsertRowDomStates() {
                _super.apply(this, arguments);
            }
            return AnomalyInsertRowDomStates;
        }(domCore.DomStates));
        AnomalyInsertRowDom.AnomalyInsertRowDomStates = AnomalyInsertRowDomStates;
        var AnomalyInsertRowDomProps = (function (_super) {
            __extends(AnomalyInsertRowDomProps, _super);
            function AnomalyInsertRowDomProps() {
                _super.apply(this, arguments);
            }
            return AnomalyInsertRowDomProps;
        }(domCore.DomProps));
        AnomalyInsertRowDom.AnomalyInsertRowDomProps = AnomalyInsertRowDomProps;
    })(AnomalyInsertRowDom = exports.AnomalyInsertRowDom || (exports.AnomalyInsertRowDom = {}));
});
