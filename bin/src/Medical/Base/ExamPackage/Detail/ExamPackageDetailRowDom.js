var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./ExamPackageDetailMasterRowDom"], function (require, exports, React, domFile, masterRowFile) {
    "use strict";
    var domCore = domFile.Core;
    var ExamPackageDetailRowDom;
    (function (ExamPackageDetailRowDom) {
        var ExamPackageDetailRowDomAction = (function (_super) {
            __extends(ExamPackageDetailRowDomAction, _super);
            function ExamPackageDetailRowDomAction() {
                _super.apply(this, arguments);
            }
            return ExamPackageDetailRowDomAction;
        }(domCore.DomAction));
        ExamPackageDetailRowDom.ExamPackageDetailRowDomAction = ExamPackageDetailRowDomAction;
        var ExamPackageDetailRowDomReact = (function (_super) {
            __extends(ExamPackageDetailRowDomReact, _super);
            function ExamPackageDetailRowDomReact() {
                _super.apply(this, arguments);
                this.state = new ExamPackageDetailRowDomStates();
            }
            ExamPackageDetailRowDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", null, React.createElement("div", {className: "title Hu-pointer", onClick: function () { _this.fun_itemTitleClick(); }}, this.props.Vm.Index + 1, React.createElement("i", {className: "fa fa-angle-double-" + (this.props.Vm.IsItemFormHide ? "up" : "down")})), React.createElement("div", {className: this.props.Vm.IsItemFormHide ? "hide" : "Hm-toggle-item"}, this.props.Vm.MasterRow.intoDom(), React.createElement("div", {className: "panel"}, React.createElement("div", {className: "panel-heading"}, React.createElement("h4", {className: "panel-title"}, React.createElement("a", {onClick: function () { _this.fun_rowTitleClick(); }}, "关联项目", React.createElement("i", {className: "fa fa-angle-" + (this.props.Vm.IsRowFormHide ? "up" : "down")})))), React.createElement("div", {className: "panel-collapse collapse in"}, React.createElement("div", {className: "content active" + (this.props.Vm.IsRowFormHide ? "hide" : "")}, React.createElement("div", {className: "table-responsive"}, React.createElement("table", {className: "table table-bordered table-striped"}, React.createElement("thead", {className: "thead-default"}, React.createElement("tr", {className: "ACT-HEADER MEMBER"}, React.createElement("th", {className: "thCheckAll acsTextC", style: { width: "1em" }}), React.createElement("th", {className: "hide"}, React.createElement("span", null, "主键")), React.createElement("th", null, React.createElement("span", null, "项目名称")))), React.createElement("tbody", null, this.props.Vm.DetailListData.map(function (data, index) {
                    return (React.createElement("tr", null, React.createElement("td", null, (index + 1).toString()), React.createElement("td", {className: "hide"}, data.FID), React.createElement("td", null, data.ItemId)));
                })))))))));
            };
            ExamPackageDetailRowDomReact.prototype.fun_rowTitleClick = function () {
                this.props.Vm.IsRowFormHide = !this.props.Vm.IsRowFormHide;
                this.forceUpdate();
            };
            ExamPackageDetailRowDomReact.prototype.fun_itemTitleClick = function () {
                this.props.Vm.IsItemFormHide = !this.props.Vm.IsItemFormHide;
                this.forceUpdate();
            };
            ExamPackageDetailRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return ExamPackageDetailRowDomReact;
        }(domCore.DomReact));
        ExamPackageDetailRowDom.ExamPackageDetailRowDomReact = ExamPackageDetailRowDomReact;
        var ExamPackageDetailRowDomVm = (function (_super) {
            __extends(ExamPackageDetailRowDomVm, _super);
            function ExamPackageDetailRowDomVm(config) {
                _super.call(this);
                this.ReactType = ExamPackageDetailRowDomReact;
                if (config) {
                    this.MasterRow = new masterRowFile.ExamPackageDetailMasterRowDom.ExamPackageDetailMasterRowDomVm(config.MasterConfig);
                    this.DetailListData = config.MasterConfig.RowData.DetailListData;
                }
            }
            return ExamPackageDetailRowDomVm;
        }(domCore.DomVm));
        ExamPackageDetailRowDom.ExamPackageDetailRowDomVm = ExamPackageDetailRowDomVm;
        var ExamPackageDetailRowDomStates = (function (_super) {
            __extends(ExamPackageDetailRowDomStates, _super);
            function ExamPackageDetailRowDomStates() {
                _super.apply(this, arguments);
            }
            return ExamPackageDetailRowDomStates;
        }(domCore.DomStates));
        ExamPackageDetailRowDom.ExamPackageDetailRowDomStates = ExamPackageDetailRowDomStates;
        var ExamPackageDetailRowDomProps = (function (_super) {
            __extends(ExamPackageDetailRowDomProps, _super);
            function ExamPackageDetailRowDomProps() {
                _super.apply(this, arguments);
            }
            return ExamPackageDetailRowDomProps;
        }(domCore.DomProps));
        ExamPackageDetailRowDom.ExamPackageDetailRowDomProps = ExamPackageDetailRowDomProps;
    })(ExamPackageDetailRowDom = exports.ExamPackageDetailRowDom || (exports.ExamPackageDetailRowDom = {}));
});
