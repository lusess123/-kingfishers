var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "./../../../../01core/Url", "./../../../Common/RowButtonExpandDom", "./../../../../02col/02Mulite/SingleCheckBox", "react", "./../../../Common/Data"], function (require, exports, domFile, urlFile, expandFile, singleCheckFile, React, constantData) {
    "use strict";
    var domCore = domFile.Core;
    var MemberGridRowDow;
    (function (MemberGridRowDow) {
        var MemberGridRowDowAction = (function (_super) {
            __extends(MemberGridRowDowAction, _super);
            function MemberGridRowDowAction() {
                _super.apply(this, arguments);
            }
            return MemberGridRowDowAction;
        }(domCore.DomAction));
        MemberGridRowDow.MemberGridRowDowAction = MemberGridRowDowAction;
        var MemberGridRowDowReact = (function (_super) {
            __extends(MemberGridRowDowReact, _super);
            function MemberGridRowDowReact() {
                _super.apply(this, arguments);
                this.state = new MemberGridRowDowStates();
            }
            MemberGridRowDowReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("tr", {className: this.props.Vm.SingleCheckVm.vmDataValueGet() == "true" ? "acs-check-bg" : ""}, React.createElement("td", {className: (this.props.Vm.IsAcsRelative ? "  Hf-relative Hf-table-td " : ""), style: { left: this.props.Vm.LeftNum }}, React.createElement("span", null, this.createSingleCheckBox(), React.createElement("span", null, this.props.Vm.RowNumber), this.createRowButtonExpand())), React.createElement("td", {className: "hide"}, React.createElement("span", null, React.createElement("input", {placeholder: "..", type: "hidden"}))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.FileNumber))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.UnitId))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, React.createElement("a", {onClick: function () { _this.fun_linkDetai(); return false; }}, this.props.Vm.RowData.Name)))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.GetText(constantData.Data.GenderTypeData, this.props.Vm.RowData.Gender)))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.BirthDate))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.Age))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.GetText(constantData.Data.MaritalTypeData, this.props.Vm.RowData.MaritalStatus)))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.GetText(constantData.Data.NationTypeData, this.props.Vm.RowData.Nation)))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.NativePlace))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.IDCard))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.WorkUnit))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.GetText(constantData.Data.JobTypeData, this.props.Vm.RowData.Job)))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.GetText(constantData.Data.JobTitleTypeData, this.props.Vm.RowData.JobTitle)))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.GetText(constantData.Data.MemberTypeData, this.props.Vm.RowData.MemberType)))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.Address))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.Phone))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.PastMedicalHistory))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.FamilyMedicalHistory))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.ExamCount))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.Remark))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.UPDATE_TIME))));
            };
            MemberGridRowDowReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            MemberGridRowDowReact.prototype.fun_linkDetai = function () {
                urlFile.Core.AkUrl.Current().openUrl("$panelMemberDetailPage$" + this.props.Vm.RowData.FID + "$");
            };
            MemberGridRowDowReact.prototype.createSingleCheckBox = function () {
                return this.props.Vm.SingleCheckVm.intoDom();
            };
            MemberGridRowDowReact.prototype.createRowButtonExpand = function () {
                return this.props.Vm.RowButtonExpand.intoDom();
            };
            return MemberGridRowDowReact;
        }(domCore.DomReact));
        MemberGridRowDow.MemberGridRowDowReact = MemberGridRowDowReact;
        var MemberGridRowDowVm = (function (_super) {
            __extends(MemberGridRowDowVm, _super);
            function MemberGridRowDowVm(config) {
                _super.call(this);
                this.ReactType = MemberGridRowDowReact;
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
            MemberGridRowDowVm.prototype.GetText = function (List, Id) {
                for (var index = 0; index < List.length; index++) {
                    if (List[index].Value == Id) {
                        return List[index].Text;
                    }
                }
                return "";
            };
            return MemberGridRowDowVm;
        }(domCore.DomVm));
        MemberGridRowDow.MemberGridRowDowVm = MemberGridRowDowVm;
        var MemberGridRowDowStates = (function (_super) {
            __extends(MemberGridRowDowStates, _super);
            function MemberGridRowDowStates() {
                _super.apply(this, arguments);
            }
            return MemberGridRowDowStates;
        }(domCore.DomStates));
        MemberGridRowDow.MemberGridRowDowStates = MemberGridRowDowStates;
        var MemberGridRowDowProps = (function (_super) {
            __extends(MemberGridRowDowProps, _super);
            function MemberGridRowDowProps() {
                _super.apply(this, arguments);
            }
            return MemberGridRowDowProps;
        }(domCore.DomProps));
        MemberGridRowDow.MemberGridRowDowProps = MemberGridRowDowProps;
    })(MemberGridRowDow = exports.MemberGridRowDow || (exports.MemberGridRowDow = {}));
});
