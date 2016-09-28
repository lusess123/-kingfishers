var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../09Web/dom/ThDom", "./DeptConclusionTplGridRowDom", "./DeptConclusionTplRowButtonDom", "./../../../../02col/02Mulite/SingleCheckBox", "./../../../Common/List/MedicalBaseGridFormDom"], function (require, exports, React, thFile, gridRowFile, rowButtonFile, singleCheckFile, baseGridForm) {
    "use strict";
    var ThDom = thFile.Web.ThDomReact;
    var DeptConclusionTplGridFormDom;
    (function (DeptConclusionTplGridFormDom) {
        var DeptConclusionTplGridFormDomAction = (function (_super) {
            __extends(DeptConclusionTplGridFormDomAction, _super);
            function DeptConclusionTplGridFormDomAction() {
                _super.apply(this, arguments);
            }
            return DeptConclusionTplGridFormDomAction;
        }(baseGridForm.MedicalBaseGridFormDom.MedicalBaseGridFormDomAction));
        DeptConclusionTplGridFormDom.DeptConclusionTplGridFormDomAction = DeptConclusionTplGridFormDomAction;
        var DeptConclusionTplGridFormDomReact = (function (_super) {
            __extends(DeptConclusionTplGridFormDomReact, _super);
            function DeptConclusionTplGridFormDomReact() {
                _super.apply(this, arguments);
                this.state = new DeptConclusionTplGridFormDomStates();
            }
            DeptConclusionTplGridFormDomReact.prototype.pSender = function () {
                return _super.prototype.pSender.call(this);
            };
            DeptConclusionTplGridFormDomReact.prototype.initHeader = function () {
                return React.createElement("tr", {className: "ACT-HEADER MEMBER"}, React.createElement("th", {className: "thCheckAll text-center acsWidth3-5 " + (this.props.Vm.IsAcsRelative ? " Hf-relative Hf-table-th  " : ""), style: { left: this.props.Vm.LeftNum }}, this.props.Vm.AllCheck.intoDom()), React.createElement("th", {className: "hide"}, React.createElement("span", null, "主键")), React.createElement(ThDom, {children: null, Vm: this.getThDomVM(200)}, React.createElement("span", null, "科室")), React.createElement(ThDom, {children: null, Vm: this.getThDomVM(150)}, React.createElement("span", null, "名称")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "内容")));
            };
            ;
            return DeptConclusionTplGridFormDomReact;
        }(baseGridForm.MedicalBaseGridFormDom.MedicalBaseGridFormDomReact));
        DeptConclusionTplGridFormDom.DeptConclusionTplGridFormDomReact = DeptConclusionTplGridFormDomReact;
        var DeptConclusionTplGridFormDomVm = (function (_super) {
            __extends(DeptConclusionTplGridFormDomVm, _super);
            function DeptConclusionTplGridFormDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = DeptConclusionTplGridFormDomReact;
                this.FormData = new Array();
                this.RowList = new Array();
                this.RowButtonList = new Array();
                this.AllCheck = new singleCheckFile.ui.SingleCheckBoxVm();
                if (config && config.Data) {
                    this.FormData = config.Data;
                    this.FormData.forEach(function (rowData, index) {
                        var rowNumber = index < 9 ? "0" + (index + 1) : (index + 1).toString();
                        var rowConfig = { RowData: rowData, IsAcsRelative: _this.IsAcsRelative, LeftNum: _this.LeftNum, RowNumber: rowNumber };
                        var rowVm = new gridRowFile.DeptConclusionTplGridRowDom.DeptConclusionTplGridRowDomVm(rowConfig);
                        _this.RowList.push(rowVm);
                        var rowBtnConfig = { Row: rowVm, UniId: config.UniId };
                        var rowBtnVm = new rowButtonFile.DeptConclusionTplRowButtonDom.DeptConclusionTplRowButtonDomVm(rowBtnConfig);
                        _this.RowButtonList.push(rowBtnVm);
                    });
                }
            }
            return DeptConclusionTplGridFormDomVm;
        }(baseGridForm.MedicalBaseGridFormDom.MedicalBaseGridFormDomVm));
        DeptConclusionTplGridFormDom.DeptConclusionTplGridFormDomVm = DeptConclusionTplGridFormDomVm;
        var DeptConclusionTplGridFormDomStates = (function (_super) {
            __extends(DeptConclusionTplGridFormDomStates, _super);
            function DeptConclusionTplGridFormDomStates() {
                _super.apply(this, arguments);
            }
            return DeptConclusionTplGridFormDomStates;
        }(baseGridForm.MedicalBaseGridFormDom.MedicalBaseGridFormDomStates));
        DeptConclusionTplGridFormDom.DeptConclusionTplGridFormDomStates = DeptConclusionTplGridFormDomStates;
        var DeptConclusionTplGridFormDomProps = (function (_super) {
            __extends(DeptConclusionTplGridFormDomProps, _super);
            function DeptConclusionTplGridFormDomProps() {
                _super.apply(this, arguments);
            }
            return DeptConclusionTplGridFormDomProps;
        }(baseGridForm.MedicalBaseGridFormDom.MedicalBaseGridFormDomProps));
        DeptConclusionTplGridFormDom.DeptConclusionTplGridFormDomProps = DeptConclusionTplGridFormDomProps;
    })(DeptConclusionTplGridFormDom = exports.DeptConclusionTplGridFormDom || (exports.DeptConclusionTplGridFormDom = {}));
});
