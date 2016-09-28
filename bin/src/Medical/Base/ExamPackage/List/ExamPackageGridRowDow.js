var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "./../../../../01core/Url", "./../../../Common/RowButtonExpandDom", "./../../../../02col/02Mulite/SingleCheckBox", "./../Data", "react"], function (require, exports, domFile, urlFile, expandFile, singleCheckFile, rowDataFlie, React) {
    "use strict";
    var domCore = domFile.Core;
    var ExamPackageGridRowDow;
    (function (ExamPackageGridRowDow) {
        var ExamPackageGridRowDowAction = (function (_super) {
            __extends(ExamPackageGridRowDowAction, _super);
            function ExamPackageGridRowDowAction() {
                _super.apply(this, arguments);
            }
            return ExamPackageGridRowDowAction;
        }(domCore.DomAction));
        ExamPackageGridRowDow.ExamPackageGridRowDowAction = ExamPackageGridRowDowAction;
        var ExamPackageGridRowDowReact = (function (_super) {
            __extends(ExamPackageGridRowDowReact, _super);
            function ExamPackageGridRowDowReact() {
                _super.apply(this, arguments);
                this.state = new ExamPackageGridRowDowStates();
            }
            ExamPackageGridRowDowReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("tr", {className: this.props.Vm.SingleCheckVm.vmDataValueGet() == "true" ? "acs-check-bg" : ""}, React.createElement("td", {className: (this.props.Vm.IsAcsRelative ? "  Hf-relative Hf-table-td " : ""), style: { left: this.props.Vm.LeftNum }}, React.createElement("span", null, this.createSingleCheckBox(), React.createElement("span", null, this.props.Vm.RowNumber), this.createRowButtonExpand())), React.createElement("td", {className: "hide"}, React.createElement("span", null, React.createElement("input", {placeholder: "..", type: "hidden"}))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.SimpleCode))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, React.createElement("a", {onClick: function () { _this.fun_linkDetai(); return false; }}, this.props.Vm.RowData.Name)))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.GroupPrice))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.IndividualPrice))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.AgeUpperLimit))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.AgeLowerLimit))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.GetGenderText(this.props.Vm.RowData.Gender)))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.Remark))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.UPDATE_TIME))));
            };
            ExamPackageGridRowDowReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            ExamPackageGridRowDowReact.prototype.fun_linkDetai = function () {
                urlFile.Core.AkUrl.Current().openUrl("$panelExamPackageDetailPage$" + this.props.Vm.RowData.FID + "$");
            };
            ExamPackageGridRowDowReact.prototype.createSingleCheckBox = function () {
                return this.props.Vm.SingleCheckVm.intoDom();
            };
            ExamPackageGridRowDowReact.prototype.createRowButtonExpand = function () {
                return this.props.Vm.RowButtonExpand.intoDom();
            };
            return ExamPackageGridRowDowReact;
        }(domCore.DomReact));
        ExamPackageGridRowDow.ExamPackageGridRowDowReact = ExamPackageGridRowDowReact;
        var ExamPackageGridRowDowVm = (function (_super) {
            __extends(ExamPackageGridRowDowVm, _super);
            function ExamPackageGridRowDowVm(config) {
                _super.call(this);
                this.ReactType = ExamPackageGridRowDowReact;
                this.RowButtonExpand = new expandFile.RowButtonExpandDom.RowButtonExpandDomVm();
                this.SingleCheckVm = new singleCheckFile.ui.SingleCheckBoxVm();
                this.IsAcsRelative = false;
                this.LeftNum = 0;
                if (config) {
                    this.RowData = config.RowData;
                    this.IsAcsRelative = config.IsAcsRelative;
                    this.LeftNum = config.LeftNum;
                    this.RowNumber = config.RowNumber;
                }
            }
            ExamPackageGridRowDowVm.prototype.GetGenderText = function (Id) {
                var List = rowDataFlie.ExamPackage.ExamPackageGenderData;
                for (var index = 0; index < List.length; index++) {
                    if (List[index].Value == Id) {
                        return List[index].Text;
                    }
                }
                return "";
            };
            return ExamPackageGridRowDowVm;
        }(domCore.DomVm));
        ExamPackageGridRowDow.ExamPackageGridRowDowVm = ExamPackageGridRowDowVm;
        var ExamPackageGridRowDowStates = (function (_super) {
            __extends(ExamPackageGridRowDowStates, _super);
            function ExamPackageGridRowDowStates() {
                _super.apply(this, arguments);
            }
            return ExamPackageGridRowDowStates;
        }(domCore.DomStates));
        ExamPackageGridRowDow.ExamPackageGridRowDowStates = ExamPackageGridRowDowStates;
        var ExamPackageGridRowDowProps = (function (_super) {
            __extends(ExamPackageGridRowDowProps, _super);
            function ExamPackageGridRowDowProps() {
                _super.apply(this, arguments);
            }
            return ExamPackageGridRowDowProps;
        }(domCore.DomProps));
        ExamPackageGridRowDow.ExamPackageGridRowDowProps = ExamPackageGridRowDowProps;
    })(ExamPackageGridRowDow = exports.ExamPackageGridRowDow || (exports.ExamPackageGridRowDow = {}));
});
