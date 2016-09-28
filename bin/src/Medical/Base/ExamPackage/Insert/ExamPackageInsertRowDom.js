var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./ExamPackageInsertMasterRowDom", "./ExamPackageInsertDetailRowDom", "./../../../../01core/Event"], function (require, exports, React, domFile, masterRowFile, detailRowFile, eventFile) {
    "use strict";
    var domCore = domFile.Core;
    var ExamPackageInsertRowDom;
    (function (ExamPackageInsertRowDom) {
        var ExamPackageInsertRowDomAction = (function (_super) {
            __extends(ExamPackageInsertRowDomAction, _super);
            function ExamPackageInsertRowDomAction() {
                _super.apply(this, arguments);
            }
            return ExamPackageInsertRowDomAction;
        }(domCore.DomAction));
        ExamPackageInsertRowDom.ExamPackageInsertRowDomAction = ExamPackageInsertRowDomAction;
        var ExamPackageInsertRowDomReact = (function (_super) {
            __extends(ExamPackageInsertRowDomReact, _super);
            function ExamPackageInsertRowDomReact() {
                _super.apply(this, arguments);
                this.state = new ExamPackageInsertRowDomStates();
            }
            ExamPackageInsertRowDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", null, this.props.Vm.MasterRow.intoDom(), React.createElement("div", {className: "panel"}, React.createElement("div", {className: "panel-heading"}, React.createElement("h4", {className: "panel-title"}, React.createElement("a", {onClick: function () { _this.fun_detailTitleClick(); }}, "关联项目", React.createElement("i", {className: "fa fa-angle-" + (this.props.Vm.IsDetailHide ? "up" : "down")})))), React.createElement("div", {className: "panel-collapse collapse in"}, React.createElement("div", {className: "content active" + (this.props.Vm.IsDetailHide ? "hide" : "")}, React.createElement("div", {className: "table-responsive"}, React.createElement("table", {className: "table table-bordered table-striped"}, React.createElement("thead", {className: "thead-default"}, React.createElement("tr", {className: "ACT-HEADER MEMBER"}, React.createElement("th", {className: "thCheckAll acsTextC", style: { width: "1em" }}), React.createElement("th", {className: "hide"}, React.createElement("span", null, "主键")), React.createElement("th", null, React.createElement("span", null, "项目名称")), React.createElement("th", null, React.createElement("i", {className: "fa fa-plus-circle acsPointer", onClick: function () { _this.fun_addNewButtonRow(); }})))), React.createElement("tbody", null, this.props.Vm.DetailRowList.map(function (row, index) {
                    row.RowNumber = index;
                    return row.intoDom();
                }))))))));
            };
            ExamPackageInsertRowDomReact.prototype.fun_addNewButtonRow = function () {
                this.props.Vm.addButtonRow();
            };
            ExamPackageInsertRowDomReact.prototype.fun_detailTitleClick = function () {
                this.props.Vm.IsDetailHide = !this.props.Vm.IsDetailHide;
                this.forceUpdate();
            };
            ExamPackageInsertRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return ExamPackageInsertRowDomReact;
        }(domCore.DomReact));
        ExamPackageInsertRowDom.ExamPackageInsertRowDomReact = ExamPackageInsertRowDomReact;
        var ExamPackageInsertRowDomVm = (function (_super) {
            __extends(ExamPackageInsertRowDomVm, _super);
            function ExamPackageInsertRowDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = ExamPackageInsertRowDomReact;
                this.DetailRowList = [];
                this.UniId = eventFile.App.getUniId().toString();
                this.MasterRow = new masterRowFile.ExamPackageInsertMasterRowDom.ExamPackageInsertMasterRowDomVm();
                this.listenAppEvent("medical/base/exampackage/insert/detailrow", this.UniId, function (rowIndex) {
                    _this.delDetailRowByIndex(rowIndex);
                });
            }
            ExamPackageInsertRowDomVm.prototype.delDetailRowByIndex = function (rowIndex) {
                this.DetailRowList.splice(rowIndex, 1);
                this.DetailRowList.forEach(function (r, i) {
                    if (i >= rowIndex) {
                        r.toChange();
                    }
                });
                this.forceUpdate("");
            };
            ExamPackageInsertRowDomVm.prototype.legal = function () {
                var l1 = this.MasterRow.TextVmObjList["Name"].legal();
                var l2 = this.MasterRow.TextVmObjList["SimpleCode"].legal();
                var l3 = this.MasterRow.TextVmObjList["GroupPrice"].legal();
                var l4 = this.MasterRow.TextVmObjList["IndividualPrice"].legal();
                var l5 = this.MasterRow.TextVmObjList["AgeUpperLimit"].legal();
                var l6 = this.MasterRow.AgeLowerLimitVm.legal();
                this.DetailRowList.forEach(function (r) {
                    _res = r.legal() && _res;
                });
                var _res = l1 && l2 && l3 && l4 && l5 && l6;
                return _res;
            };
            ExamPackageInsertRowDomVm.prototype.addButtonRow = function () {
                var data = { FID: "", PackageId: "", ItemId: "" };
                var detailRow = new detailRowFile.ExamPackageInsertDetailRowDom.ExamPackageInsertDetailRowDomVm({ UniId: this.UniId, RowData: data });
                this.DetailRowList.push(detailRow);
                this.forceUpdate("");
            };
            return ExamPackageInsertRowDomVm;
        }(domCore.DomVm));
        ExamPackageInsertRowDom.ExamPackageInsertRowDomVm = ExamPackageInsertRowDomVm;
        var ExamPackageInsertRowDomStates = (function (_super) {
            __extends(ExamPackageInsertRowDomStates, _super);
            function ExamPackageInsertRowDomStates() {
                _super.apply(this, arguments);
            }
            return ExamPackageInsertRowDomStates;
        }(domCore.DomStates));
        ExamPackageInsertRowDom.ExamPackageInsertRowDomStates = ExamPackageInsertRowDomStates;
        var ExamPackageInsertRowDomProps = (function (_super) {
            __extends(ExamPackageInsertRowDomProps, _super);
            function ExamPackageInsertRowDomProps() {
                _super.apply(this, arguments);
            }
            return ExamPackageInsertRowDomProps;
        }(domCore.DomProps));
        ExamPackageInsertRowDom.ExamPackageInsertRowDomProps = ExamPackageInsertRowDomProps;
    })(ExamPackageInsertRowDom = exports.ExamPackageInsertRowDom || (exports.ExamPackageInsertRowDom = {}));
});
