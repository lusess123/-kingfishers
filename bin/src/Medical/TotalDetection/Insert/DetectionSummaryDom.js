var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "./../../../01core/Url", "react", "./../../../02col/01single/TextArea", "./DetectionInsertMedicalDom", "./../../../05tool/Picker/PickDom", "./../Tools/TotalDetectionPickListDom", "./../Tools/TotalAnomalyConclusion/AnomalyPickListDom"], function (require, exports, domFile, urlFile, React, textAreaFile, medicalFile, PickDomFile, departPicklist, anomalyPicklist) {
    "use strict";
    //import domFile = require("./../01core/0Dom");
    var domCore = domFile.Core;
    var DetectionSummaryDom;
    (function (DetectionSummaryDom) {
        var DetectionSummaryDomAction = (function (_super) {
            __extends(DetectionSummaryDomAction, _super);
            function DetectionSummaryDomAction() {
                _super.apply(this, arguments);
            }
            return DetectionSummaryDomAction;
        }(domCore.DomAction));
        DetectionSummaryDom.DetectionSummaryDomAction = DetectionSummaryDomAction;
        var DetectionSummaryDomReact = (function (_super) {
            __extends(DetectionSummaryDomReact, _super);
            function DetectionSummaryDomReact() {
                _super.apply(this, arguments);
                this.state = new DetectionSummaryDomStates();
            }
            DetectionSummaryDomReact.prototype.pSender = function () {
                var row = this.createRow();
                return row;
            };
            DetectionSummaryDomReact.prototype.createRow = function () {
                var _this = this;
                return (React.createElement("div", {className: "ui-summary-main clearfix"}, React.createElement("div", {className: "ui-dpt-depart-summary pull-left col-lg-6 ui-lh-22"}, React.createElement("div", null, React.createElement("h2", {className: "pull-left summary-title"}, "总检建议"), this.props.Vm.isedit ? null : React.createElement("ul", {className: "pull-right ui-summary-opt"}, React.createElement("li", {className: "YSu-link", onClick: function () { _this.props.Vm.AutoAdvice(); }}, "自动小结"), React.createElement("li", {className: "YSu-link", onClick: function () { _this.props.Vm.AdviceTemplateClick(); }}, "模板"))), this.props.Vm.AdviceAreaVm.intoDom(), React.createElement("div", null, React.createElement("h2", {className: "pull-left summary-title"}, "总检综述"), React.createElement("ul", {className: "pull-right ui-summary-opt"})), this.props.Vm.OverviewAreaVm.intoDom()), React.createElement("div", {className: "ui-dpt-medical-summary pull-right col-lg-6 ui-lh-22"}, React.createElement("div", null, React.createElement("h2", {className: "pull-left summary-title"}, "疾病诊断"), this.props.Vm.isedit ? null :
                    React.createElement("ul", {className: "pull-right ui-summary-opt"}, React.createElement("li", {className: "YSu-link", onClick: function () { _this.props.Vm.autoDiagnosis(); }}, "自动诊断"), React.createElement("li", {className: "YSu-link", onClick: function () { _this.props.Vm.AnomalyClick(); }}, "从库中选择"))), this.props.Vm.MedicalDomObj.intoDom()), React.createElement("div", {className: "Hf-overflow", style: { height: 1, width: 1 }}, this.props.Vm.PickDomObj.intoDom()), React.createElement("div", {className: "Hf-overflow", style: { height: 1, width: 1 }}, this.props.Vm.AnomalyPickDomObj.intoDom())));
            };
            //医生小结文本域
            DetectionSummaryDomReact.prototype.createDoctorArea = function () {
                var _this = this;
                var _vm = this.props.Vm.DoctorAreaVm;
                if (!_vm) {
                    _vm = this.getArea(this.props.Vm.SummaryData.DocterContent);
                    if (this.props.Vm.isedit) {
                        _vm.onChangeHandle(function (str) {
                            _this.props.Vm.SummaryData.DocterContent = str;
                            return true;
                        });
                    }
                }
                return _vm.intoDom();
            };
            //总检建议文本域
            DetectionSummaryDomReact.prototype.createDepartArea = function () {
                var _this = this;
                var _vm = this.props.Vm.AdviceAreaVm;
                if (!_vm) {
                    _vm = this.getArea(this.props.Vm.AdviceData.Advice);
                    if (this.props.Vm.isedit) {
                        _vm.onChangeHandle(function (str) {
                            _this.props.Vm.AdviceData.Advice = str;
                            return true;
                        });
                    }
                }
                return _vm.intoDom();
            };
            //获取文本域的值
            DetectionSummaryDomReact.prototype.getArea = function (val, legalKind, fun) {
                var _bean = new textAreaFile.ui.TextAreaVm();
                _bean.vmdataValue(val);
                _bean.LegalObj.Kind = legalKind;
                return _bean;
            };
            DetectionSummaryDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return DetectionSummaryDomReact;
        }(domCore.DomReact));
        DetectionSummaryDom.DetectionSummaryDomReact = DetectionSummaryDomReact;
        var DetectionSummaryDomVm = (function (_super) {
            __extends(DetectionSummaryDomVm, _super);
            function DetectionSummaryDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = DetectionSummaryDomReact;
                this.isedit = false;
                this.SummaryData = { DocterContent: "", TotalContent: "" };
                // 总检建议
                this.AdviceData = { Summary: "", Advice: "" };
                //this.MedicalDomObj = new medicalFile.DetectionInsertMedicalDom.DetectionInsertMedicalDomVm();
                if (config) {
                    if (config.UniId) {
                        this.UniId = config.UniId;
                    }
                    //if (config.AreaText) {
                    //    this.text = config.Advice.DocterContent;
                    //    this.text1 = config.Advice.DocterContent;
                    //}
                    if (config.isedit) {
                        this.isedit = config.isedit;
                    }
                    if (config.Advice) {
                        this.SummaryData = config.Advice;
                    }
                    if (config.aonmalyData) {
                        this.aonmalyData = config.aonmalyData;
                        var config1 = { data: config.aonmalyData, Unit: this.UniId, isedit: this.isedit };
                        // this.MedicalDomObj = new medicalFile.DetectionInsertMedicalDom.DetectionInsertMedicalDomVm(config1);
                        this.MedicalDomObj = new medicalFile.DetectionInsertMedicalDom.DetectionInsertMedicalDomVm(config1);
                    }
                }
                this.AdviceAreaVm = new textAreaFile.ui.TextAreaVm();
                this.AdviceAreaVm.LegalObj.Kind = "notNull";
                this.AdviceAreaVm.dataValueSet(this.SummaryData.DocterContent);
                if (this.isedit) {
                    this.AdviceAreaVm.isReadOnly = true;
                }
                this.AdviceAreaVm.onChangeHandle(function (str) {
                    _this.SummaryData.DocterContent = str;
                    return true;
                });
                this.OverviewAreaVm = new textAreaFile.ui.TextAreaVm();
                this.OverviewAreaVm.LegalObj.Kind = "notNull";
                this.OverviewAreaVm.dataValueSet(this.SummaryData.TotalContent);
                if (this.isedit) {
                    this.OverviewAreaVm.isReadOnly = true;
                }
                this.OverviewAreaVm.onChangeHandle(function (str) {
                    _this.SummaryData.TotalContent = str;
                    return true;
                });
                var _AdviceList = [];
                var deptConfig = { UniId: this.UniId };
                var pickdomobj = new departPicklist.TotalDetectionPickListDom.TotalDetectionPickListDomVm(deptConfig);
                this.PickDomObj = new PickDomFile.PickDom.PickDomVm({
                    UniId: this.UniId,
                    PickItemList: _AdviceList,
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
                    PickItemList: _AdviceList,
                    PickerContainer: {
                        UniId: this.UniId,
                        IsSingle: true,
                        IsPickSelectHide: true,
                        LeftDomVmObj: anomlydomobj,
                        isRightEmpty: true
                    }
                });
            }
            DetectionSummaryDomVm.prototype.AdviceTemplateClick = function () {
                this.PickDomObj.modalObj.open();
            };
            DetectionSummaryDomVm.prototype.AutoAdvice = function () {
                this.emitAppEvent("TotalDetection/Insert/DetectionSummaryDom", this.UniId);
            };
            DetectionSummaryDomVm.prototype.AnomalyClick = function () {
                this.AnomalyPickDomObj.modalObj.open();
            };
            DetectionSummaryDomVm.prototype.autoDiagnosis = function () {
                this.emitAppEvent("Departments/List/autoDiagnosis", this.UniId);
            };
            DetectionSummaryDomVm.prototype.Submit = function (fid, isCheck) {
                if (this.AdviceAreaVm.legal()) {
                    var postData = {};
                    postData.FID = fid;
                    postData.Advice = this.SummaryData.TotalContent;
                    postData.Summary = this.SummaryData.DocterContent;
                    postData.Anomaly = this.MedicalDomObj.getAnomalyData();
                    postData.isCheck = isCheck;
                    if (fid) {
                        urlFile.Core.AkPost("/MedicalCenter/TotalDetection/submit", { data: JSON.stringify(postData) }, function (data) {
                            if (data) {
                                urlFile.Core.AkUrl.Current().openUrl("$DetectionListPage$", true);
                            }
                        });
                    }
                }
            };
            return DetectionSummaryDomVm;
        }(domCore.DomVm));
        DetectionSummaryDom.DetectionSummaryDomVm = DetectionSummaryDomVm;
        var DetectionSummaryDomStates = (function (_super) {
            __extends(DetectionSummaryDomStates, _super);
            function DetectionSummaryDomStates() {
                _super.apply(this, arguments);
            }
            return DetectionSummaryDomStates;
        }(domCore.DomStates));
        DetectionSummaryDom.DetectionSummaryDomStates = DetectionSummaryDomStates;
        var DetectionSummaryDomProps = (function (_super) {
            __extends(DetectionSummaryDomProps, _super);
            function DetectionSummaryDomProps() {
                _super.apply(this, arguments);
            }
            return DetectionSummaryDomProps;
        }(domCore.DomProps));
        DetectionSummaryDom.DetectionSummaryDomProps = DetectionSummaryDomProps;
    })(DetectionSummaryDom = exports.DetectionSummaryDom || (exports.DetectionSummaryDom = {}));
});
