var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../09Web/dom/ThDom", "./GeneralExamTplGridRowDom", "./GeneralExamTplRowButtonDom", "./../../../../02col/02Mulite/SingleCheckBox", "./../../../Common/List/MedicalBaseGridFormDom"], function (require, exports, React, thFile, gridRowFile, rowButtonFile, singleCheckFile, baseGridForm) {
    "use strict";
    var ThDom = thFile.Web.ThDomReact;
    var GeneralExamTplGridFormDom;
    (function (GeneralExamTplGridFormDom) {
        var GeneralExamTplGridFormDomAction = (function (_super) {
            __extends(GeneralExamTplGridFormDomAction, _super);
            function GeneralExamTplGridFormDomAction() {
                _super.apply(this, arguments);
            }
            return GeneralExamTplGridFormDomAction;
        }(baseGridForm.MedicalBaseGridFormDom.MedicalBaseGridFormDomAction));
        GeneralExamTplGridFormDom.GeneralExamTplGridFormDomAction = GeneralExamTplGridFormDomAction;
        var GeneralExamTplGridFormDomReact = (function (_super) {
            __extends(GeneralExamTplGridFormDomReact, _super);
            function GeneralExamTplGridFormDomReact() {
                _super.apply(this, arguments);
                this.state = new GeneralExamTplGridFormDomStates();
            }
            GeneralExamTplGridFormDomReact.prototype.pSender = function () {
                return _super.prototype.pSender.call(this);
            };
            GeneralExamTplGridFormDomReact.prototype.initHeader = function () {
                return React.createElement("tr", {className: "ACT-HEADER MEMBER"}, React.createElement("th", {className: "thCheckAll text-center acsWidth3-5 " + (this.props.Vm.IsAcsRelative ? " Hf-relative Hf-table-th  " : ""), style: { left: this.props.Vm.LeftNum }}, this.props.Vm.AllCheck.intoDom()), React.createElement("th", {className: "hide"}, React.createElement("span", null, "主键")), React.createElement(ThDom, {children: null, Vm: this.getThDomVM(200)}, React.createElement("span", null, "名称")), React.createElement(ThDom, {children: null, Vm: this.getThDomVM(150)}, React.createElement("span", null, "综述")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "建议")));
            };
            ;
            return GeneralExamTplGridFormDomReact;
        }(baseGridForm.MedicalBaseGridFormDom.MedicalBaseGridFormDomReact));
        GeneralExamTplGridFormDom.GeneralExamTplGridFormDomReact = GeneralExamTplGridFormDomReact;
        var GeneralExamTplGridFormDomVm = (function (_super) {
            __extends(GeneralExamTplGridFormDomVm, _super);
            function GeneralExamTplGridFormDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = GeneralExamTplGridFormDomReact;
                this.FormData = new Array();
                this.RowList = new Array();
                this.RowButtonList = new Array();
                this.AllCheck = new singleCheckFile.ui.SingleCheckBoxVm();
                if (config && config.Data) {
                    this.FormData = config.Data;
                    this.FormData.forEach(function (rowData, index) {
                        var rowNumber = index < 9 ? "0" + (index + 1) : (index + 1).toString();
                        var rowConfig = { RowData: rowData, IsAcsRelative: _this.IsAcsRelative, LeftNum: _this.LeftNum, RowNumber: rowNumber };
                        var rowVm = new gridRowFile.GeneralExamTplGridRowDom.GeneralExamTplGridRowDomVm(rowConfig);
                        _this.RowList.push(rowVm);
                        var rowBtnConfig = { Row: rowVm, UniId: config.UniId };
                        var rowBtnVm = new rowButtonFile.GeneralExamTplRowButtonDom.GeneralExamTplRowButtonDomVm(rowBtnConfig);
                        _this.RowButtonList.push(rowBtnVm);
                    });
                }
            }
            return GeneralExamTplGridFormDomVm;
        }(baseGridForm.MedicalBaseGridFormDom.MedicalBaseGridFormDomVm));
        GeneralExamTplGridFormDom.GeneralExamTplGridFormDomVm = GeneralExamTplGridFormDomVm;
        var GeneralExamTplGridFormDomStates = (function (_super) {
            __extends(GeneralExamTplGridFormDomStates, _super);
            function GeneralExamTplGridFormDomStates() {
                _super.apply(this, arguments);
            }
            return GeneralExamTplGridFormDomStates;
        }(baseGridForm.MedicalBaseGridFormDom.MedicalBaseGridFormDomStates));
        GeneralExamTplGridFormDom.GeneralExamTplGridFormDomStates = GeneralExamTplGridFormDomStates;
        var GeneralExamTplGridFormDomProps = (function (_super) {
            __extends(GeneralExamTplGridFormDomProps, _super);
            function GeneralExamTplGridFormDomProps() {
                _super.apply(this, arguments);
            }
            return GeneralExamTplGridFormDomProps;
        }(baseGridForm.MedicalBaseGridFormDom.MedicalBaseGridFormDomProps));
        GeneralExamTplGridFormDom.GeneralExamTplGridFormDomProps = GeneralExamTplGridFormDomProps;
    })(GeneralExamTplGridFormDom = exports.GeneralExamTplGridFormDom || (exports.GeneralExamTplGridFormDom = {}));
});
