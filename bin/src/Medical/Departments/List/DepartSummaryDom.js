var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react", "./../../../02col/01single/TextArea", "./MedicalTableDom", "./../../../05tool/Picker/PickDom", "./../tools/DepartPickListDom", "./../tools/AnomalyConclusion/AnomalyPickListDom"], function (require, exports, domFile, React, textAreaFile, medicalFile, PickDomFile, departPicklist, anomalyPicklist) {
    "use strict";
    //import domFile = require("./../01core/0Dom");
    var domCore = domFile.Core;
    var DepartSummaryDom;
    (function (DepartSummaryDom) {
        var DepartSummaryDomAction = (function (_super) {
            __extends(DepartSummaryDomAction, _super);
            function DepartSummaryDomAction() {
                _super.apply(this, arguments);
            }
            return DepartSummaryDomAction;
        }(domCore.DomAction));
        DepartSummaryDom.DepartSummaryDomAction = DepartSummaryDomAction;
        var DepartSummaryDomReact = (function (_super) {
            __extends(DepartSummaryDomReact, _super);
            function DepartSummaryDomReact() {
                _super.apply(this, arguments);
                this.state = new DepartSummaryDomStates();
            }
            DepartSummaryDomReact.prototype.pSender = function () {
                var row = this.createRow();
                return row;
            };
            DepartSummaryDomReact.prototype.createRow = function () {
                var _this = this;
                return (React.createElement("div", {className: "ui-summary-main clearfix"}, React.createElement("div", {className: "ui-dpt-depart-summary pull-left col-lg-6 required"}, React.createElement("div", null, React.createElement("h2", {className: "pull-left summary-title"}, "科室小结"), React.createElement("ul", {className: "pull-right ui-summary-opt"}, React.createElement("li", {className: "YSu-link", onClick: function () { _this.props.Vm.autoSummary(); }}, "自动小结"), React.createElement("li", {className: "YSu-link", onClick: function () { _this.props.Vm.TemplateClick(); }}, "模板"))), this.props.Vm.DepartAreaVm.intoDom()), React.createElement("div", {className: "ui-dpt-medical-summary pull-right col-lg-6"}, React.createElement("div", null, React.createElement("h2", {className: "pull-left summary-title"}, "疾病诊断"), React.createElement("ul", {className: "pull-right ui-summary-opt"}, React.createElement("li", {className: "YSu-link", onClick: function () { _this.props.Vm.autoDiagnosis(); }}, "自动诊断"), React.createElement("li", {className: "YSu-link", onClick: function () { _this.props.Vm.AnomalyClick(); }}, "从库中选择"))), this.props.Vm.MedicalDomObj.intoDom()), React.createElement("div", {className: "Hf-overflow", style: { height: 1, width: 1 }}, this.props.Vm.PickDomObj.intoDom()), React.createElement("div", {className: "Hf-overflow", style: { height: 1, width: 1 }}, this.props.Vm.AnomalyPickDomObj.intoDom())));
            };
            //科室小结文本域
            DepartSummaryDomReact.prototype.createDepartArea = function () {
                var _this = this;
                var _vm = this.props.Vm.DepartAreaVm;
                if (!_vm) {
                    _vm = this.getArea(this.props.Vm.Text);
                    _vm.onChangeHandle(function (str) {
                        _this.props.Vm.Text = str;
                        return true;
                    });
                }
                return _vm.intoDom();
            };
            //获取文本域的值
            DepartSummaryDomReact.prototype.getArea = function (val, legalKind, fun) {
                var _bean = new textAreaFile.ui.TextAreaVm();
                _bean.vmdataValue(val);
                _bean.LegalObj.Kind = legalKind;
                return _bean;
            };
            DepartSummaryDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return DepartSummaryDomReact;
        }(domCore.DomReact));
        DepartSummaryDom.DepartSummaryDomReact = DepartSummaryDomReact;
        var DepartSummaryDomVm = (function (_super) {
            __extends(DepartSummaryDomVm, _super);
            function DepartSummaryDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = DepartSummaryDomReact;
                this.SummaryData = { Content: "" };
                //弹出框控件
                this.PickDomObj = new PickDomFile.PickDom.PickDomVm();
                this.aonmalyData = new Array();
                this.MedicalDomObj = new medicalFile.MedicalDom.MedicalDomVm();
                if (config) {
                    if (config.Unid) {
                        this.UniId = config.Unid;
                    }
                    if (config.AreaText) {
                        this.Text = config.AreaText;
                    }
                    if (config.isedit) {
                        this.isedit = config.isedit;
                    }
                    this.aonmalyData = config.aonmalyData;
                    if (config.aonmalyData) {
                        var config1 = { data: config.aonmalyData, Unid: this.UniId, isedit: config.isedit };
                        this.MedicalDomObj = new medicalFile.MedicalDom.MedicalDomVm(config1);
                    }
                }
                this.DepartAreaVm = new textAreaFile.ui.TextAreaVm();
                if (!this.isedit) {
                    this.DepartAreaVm.isReadOnly = true;
                }
                this.DepartAreaVm.LegalObj.Kind = "notNull";
                this.DepartAreaVm.dataValueSet(this.Text);
                this.DepartAreaVm.onChangeHandle(function (str) {
                    _this.Text = str;
                    return true;
                });
                var _itemList = [];
                var deptConfig = { UniId: this.UniId };
                var pickdomobj = new departPicklist.DepartPickListDom.DepartPickListDomVm(deptConfig);
                this.PickDomObj = new PickDomFile.PickDom.PickDomVm({
                    UniId: this.UniId,
                    PickItemList: _itemList,
                    PickerContainer: {
                        UniId: this.UniId,
                        IsSingle: true,
                        IsPickSelectHide: true,
                        LeftDomVmObj: pickdomobj,
                        isRightEmpty: true
                    }
                });
                var anomlydomobj = new anomalyPicklist.AnomalyPickListDom.AnomalyPickListDomVm(deptConfig);
                this.AnomalyPickDomObj = new PickDomFile.PickDom.PickDomVm({
                    UniId: this.UniId,
                    PickItemList: _itemList,
                    PickerContainer: {
                        UniId: this.UniId,
                        IsSingle: true,
                        IsPickSelectHide: true,
                        LeftDomVmObj: anomlydomobj,
                        isRightEmpty: true
                    }
                });
            }
            DepartSummaryDomVm.prototype.TemplateClick = function () {
                if (this.isedit) {
                    this.PickDomObj.modalObj.open();
                }
                else {
                    alert("您不能修改！");
                }
            };
            DepartSummaryDomVm.prototype.AnomalyClick = function () {
                if (this.isedit) {
                    this.AnomalyPickDomObj.modalObj.open();
                }
                else {
                    alert("您不能修改！");
                }
            };
            DepartSummaryDomVm.prototype.autoSummary = function () {
                if (this.isedit) {
                    this.emitAppEvent("Departments/List/DepartSummaryDom", this.UniId);
                }
                else {
                    alert("您不能修改！");
                }
            };
            DepartSummaryDomVm.prototype.autoDiagnosis = function () {
                if (this.isedit) {
                    this.emitAppEvent("Departments/List/autoDiagnosis", this.UniId);
                }
                else {
                    alert("您不能修改！");
                }
            };
            return DepartSummaryDomVm;
        }(domCore.DomVm));
        DepartSummaryDom.DepartSummaryDomVm = DepartSummaryDomVm;
        var DepartSummaryDomStates = (function (_super) {
            __extends(DepartSummaryDomStates, _super);
            function DepartSummaryDomStates() {
                _super.apply(this, arguments);
            }
            return DepartSummaryDomStates;
        }(domCore.DomStates));
        DepartSummaryDom.DepartSummaryDomStates = DepartSummaryDomStates;
        var DepartSummaryDomProps = (function (_super) {
            __extends(DepartSummaryDomProps, _super);
            function DepartSummaryDomProps() {
                _super.apply(this, arguments);
            }
            return DepartSummaryDomProps;
        }(domCore.DomProps));
        DepartSummaryDom.DepartSummaryDomProps = DepartSummaryDomProps;
    })(DepartSummaryDom = exports.DepartSummaryDom || (exports.DepartSummaryDom = {}));
});
