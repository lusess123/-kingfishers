var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/Ioc", "./../../../01core/Url", "./../../../04page/BaseWebPage", "react", "./../../../01core/Event", "./DetectionSummaryDom", "./DetectionInsertGridDom", "./../Tools/TotalDetectionCheckBoxDom", "./DetectionInsertMedicalDom"], function (require, exports, iocFile, urlFile, basewedPageFile, React, eventFile, summaryDomFile, gridDomFile, DisCheckBox, MedicalDomFile) {
    "use strict";
    var DetectionInsertPage;
    (function (DetectionInsertPage) {
        var DetectionInsertPageAction = (function (_super) {
            __extends(DetectionInsertPageAction, _super);
            function DetectionInsertPageAction() {
                _super.apply(this, arguments);
            }
            return DetectionInsertPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        DetectionInsertPage.DetectionInsertPageAction = DetectionInsertPageAction;
        var DetectionInsertPageReact = (function (_super) {
            __extends(DetectionInsertPageReact, _super);
            function DetectionInsertPageReact() {
                _super.apply(this, arguments);
                this.state = new DetectionInsertPageStates();
            }
            DetectionInsertPageReact.prototype.pSender = function () {
                var _this = this;
                return (React.createElement("div", {className: "container-fluid ui-dpt-main"}, React.createElement("div", {className: "row-fluid"}, React.createElement("div", {className: "ui-dpt-memberinfo col-lg-3 col-md-3"}, React.createElement("ul", null, React.createElement("li", {className: "clearfix"}, React.createElement("span", {className: "col-lg-5 col-md-5 ui-dpt-sp"}, "姓名："), React.createElement("span", {className: "col-lg-7 col-md-7"}, this.props.Vm.userInfoData.Name)), React.createElement("li", {className: "clearfix"}, React.createElement("span", {className: "col-lg-5 col-md-5 ui-dpt-sp"}, "年龄："), React.createElement("span", {className: "col-lg-7 col-md-7"}, this.props.Vm.userInfoData.Age)), React.createElement("li", {className: "clearfix"}, React.createElement("span", {className: "col-lg-5 col-md-5 ui-dpt-sp"}, "性别："), React.createElement("span", {className: "col-lg-7 col-md-7"}, this.sexPSend(this.props.Vm.userInfoData.Gender))), React.createElement("li", {className: "clearfix"}, React.createElement("span", {className: "col-lg-5 col-md-5 ui-dpt-sp"}, "身份证："), React.createElement("span", {className: "col-lg-7 col-md-7"}, this.props.Vm.userInfoData.IDCard)), React.createElement("li", {className: "clearfix"}, React.createElement("span", {className: "col-lg-5 col-md-5 ui-dpt-sp"}, "联系电话："), React.createElement("span", {className: "col-lg-7 col-md-7"}, this.props.Vm.userInfoData.phone)))), React.createElement("div", {className: "ui-dpt-content col-lg-9 col-md-9"}, React.createElement("div", {className: "YSm-handle ui-dpt-search"}, React.createElement("div", {className: "col-lg-6 col-md-6 YSm-search"}, React.createElement("input", {className: "col-lg-10 col-md-10 YSu-border-blue ", type: "text", placeholder: "输入正确的体检号", value: this.props.Vm.examNum, onChange: function (e) { _this.props.Vm.onExamChage(e); }}), React.createElement("a", {className: "col-lg-2 col-md-2 btn btn-primary", onClick: function () { _this.props.Vm.onSreach(); }}, "查询"))), React.createElement("div", {className: "ui-total-table"}, this.initTable()), this.initSummary(), React.createElement("div", {className: "ui-dpt-send"}, this.props.Vm.isedit ? null :
                    this.props.Vm.isCheck ?
                        React.createElement("a", {className: "btn btn-primary ui-dpt-submit ", onClick: function () { _this.props.Vm.onCheck(); }}, "审核") : React.createElement("a", {className: "btn btn-primary ui-dpt-submit ", onClick: function () { _this.props.Vm.onSubmit(); }}, "提交"))))));
            };
            DetectionInsertPageReact.prototype.sexPSend = function (num) {
                switch (num) {
                    case 0: return "保密";
                    case 1: return "男";
                    case 2: return "女";
                    default: return "";
                }
            };
            DetectionInsertPageReact.prototype.initTable = function () {
                return this._tDom(this.props.Vm.DeteGridVm);
            };
            DetectionInsertPageReact.prototype.initSummary = function () {
                return this._tDom(this.props.Vm.SummaryVm);
            };
            return DetectionInsertPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        DetectionInsertPage.DetectionInsertPageReact = DetectionInsertPageReact;
        var DetectionInsertPageVm = (function (_super) {
            __extends(DetectionInsertPageVm, _super);
            function DetectionInsertPageVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = DetectionInsertPageReact;
                this.examNum = "";
                this.pIsHullAutoHide = true;
                this.UniId = eventFile.App.getUniId().toString();
                var data = { UniId: this.UniId };
                // this.SummaryVm = new summaryDomFile.DetectionSummaryDom.DetectionSummaryDomVm(data);
                this.DeteGridVm = new gridDomFile.DetectionInsertGridDom.DetectionInsertGridDomVm();
                this.diseasebox = new DisCheckBox.TotalDetectionCheckBoxDom.TotalDetectionCheckBoxDomVm();
                this.listenAppEvent("medical/TotalDetection/Tools/AdviceConclusion", this.UniId, function (a) {
                    _this.SummaryVm.AdviceData.Advice = a.Advice;
                    _this.SummaryVm.AdviceAreaVm.dataValueSet(a);
                    _this.SummaryVm.IsChange = true;
                    _this.SummaryVm.AdviceAreaVm.IsChange = true;
                });
                this.listenAppEvent("medical/TotalDetection/Tools/AdviceConclusion1", this.UniId, function (a) {
                    _this.SummaryVm.AdviceData.Summary = a.Summary;
                    _this.SummaryVm.OverviewAreaVm.dataValueSet(a);
                    _this.SummaryVm.IsChange = true;
                    _this.SummaryVm.OverviewAreaVm.IsChange = true;
                    _this.SummaryVm.forceUpdate("");
                });
                this.listenAppEvent("Departments/List/autoDiagnosis", this.UniId, function () {
                    var array = [];
                    _this.DeteGridVm.RowList.forEach(function (row) {
                        Array.prototype.push.apply(array, row.getData());
                    });
                    urlFile.Core.AkPost("/MedicalCenter/TotalDetection/autoDiagnosis", { dataList: JSON.stringify(array) }, function (a) {
                        if (a) {
                            a.forEach(function (row) {
                                var isRepeat = false;
                                var data = { FID: row.FID, Name: row.Name };
                                _this.SummaryVm.MedicalDomObj.RowData.forEach(function (a) {
                                    if (a.FID == data.FID)
                                        isRepeat = true;
                                });
                                if (!isRepeat) {
                                    _this.SummaryVm.MedicalDomObj.RowData.push(data);
                                }
                            });
                            var config1 = { data: _this.SummaryVm.MedicalDomObj.RowData, Unit: _this.UniId, isedit: _this.isedit };
                            _this.SummaryVm.MedicalDomObj = new MedicalDomFile.DetectionInsertMedicalDom.DetectionInsertMedicalDomVm(config1);
                            _this.SummaryVm.MedicalDomObj.IsChange = true;
                            _this.SummaryVm.MedicalDomObj.forceUpdate("");
                            _this.forceUpdate("");
                        }
                        else {
                            alert("没有匹配的异常！");
                        }
                    });
                });
                this.listenAppEvent("medical/Anomaly/tools/AllAnomalyConclusion", this.UniId, function (fid, name) {
                    debugger;
                    var data = { FID: fid, Name: name };
                    if (!_this.SummaryVm.MedicalDomObj.RowData) {
                        _this.SummaryVm.MedicalDomObj.RowData = [];
                    }
                    var isRepeat = false;
                    _this.SummaryVm.MedicalDomObj.RowData.forEach(function (a) {
                        if (a.FID == data.FID)
                            isRepeat = true;
                    });
                    if (!isRepeat) {
                        _this.SummaryVm.MedicalDomObj.RowData.push(data);
                        var config1 = { Unit: _this.UniId, data: _this.SummaryVm.MedicalDomObj.RowData, isedit: _this.isedit };
                        _this.SummaryVm.MedicalDomObj.initData(config1);
                    }
                    //this.SummaryVm.MedicalDomObj.RowData.push(data)
                    //var config1 = { UniId: this.UniId, aonmalyData: this.SummaryVm.MedicalDomObj.RowData }
                    //this.SummaryVm = new summaryDomFile.DetectionSummaryDom.DetectionSummaryDomVm(config1)
                    //this.SummaryVm.MedicalDomObj.IsMulit = true;
                    //this.forceUpdate("");
                });
                this.listenAppEvent("medical/Anomaly/tools/delAnomalyConclusion", this.UniId, function (index) {
                    _this.SummaryVm.MedicalDomObj.RowData.splice(index, 1);
                    var config1 = { Unid: _this.UniId, aonmalyData: _this.SummaryVm.MedicalDomObj.RowData, isedit: _this.isedit };
                    _this.SummaryVm = new summaryDomFile.DetectionSummaryDom.DetectionSummaryDomVm(config1);
                    _this.SummaryVm.MedicalDomObj.IsMulit = true;
                    _this.forceUpdate("");
                });
                this.listenAppEvent("medical/Anomaly/tools/delAllAnomalyConclusion", this.UniId, function (index) {
                    _this.SummaryVm.MedicalDomObj.RowData.splice(index, 1);
                    var config1 = { Unit: _this.UniId, data: _this.SummaryVm.MedicalDomObj.RowData, isedit: _this.isedit };
                    _this.SummaryVm.MedicalDomObj.initData(config1);
                });
                this.listenAppEvent("TotalDetection/Insert/DetectionSummaryDom", this.UniId, function () {
                    var array = [];
                    _this.tableData.forEach(function (row) {
                        Array.prototype.push.apply(array, row.Submit);
                        array;
                    });
                    //this.DeteGridVm.RowList.forEach((row) => {
                    //    Array.prototype.push.apply(array, row.getData());
                    //    array;
                    //});
                    urlFile.Core.AkPost("/MedicalCenter/TotalDetection/AutoAdvice", { dataList: JSON.stringify(array) }, function (a) {
                        if (a) {
                            _this.SummaryVm.AdviceData.Advice = a.Advice;
                            _this.SummaryVm.AdviceAreaVm.dataValueSet(a.Advice);
                            _this.SummaryVm.AdviceData.Summary = a.Summary;
                            _this.SummaryVm.OverviewAreaVm.dataValueSet(a.Advice);
                        }
                        else {
                            alert("没有找到合适的模板！");
                            _this.SummaryVm.AdviceData.Advice = "";
                            _this.SummaryVm.AdviceAreaVm.dataValueSet("");
                            _this.SummaryVm.AdviceData.Summary = "";
                            _this.SummaryVm.OverviewAreaVm.dataValueSet("");
                        }
                        _this.SummaryVm.IsChange = true;
                        _this.SummaryVm.AdviceAreaVm.IsChange = true;
                        _this.SummaryVm.forceUpdate("");
                    });
                });
            }
            DetectionInsertPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                this.keyID = this.Param1;
                if (this.Param2 && this.Param2 == "check") {
                    this.isCheck = true;
                }
                else {
                    this.isCheck = false;
                }
                if (this.Param2 && this.Param2 == "true") {
                    this.isedit = true;
                }
                else {
                    this.isedit = false;
                }
                urlFile.Core.AkPost("/MedicalCenter/TotalDetection/DetailList", { fid: this.keyID }, function (data) {
                    if (data) {
                        _this.tableData = data.Totalinfo;
                        _this.userInfoData = data.MemberInfo;
                        var config = {
                            data: _this.tableData
                        };
                        var summary = { data: data.summay, UniId: _this.UniId, aonmalyData: data.AnomalyData, isedit: _this.isedit, Advice: data.Advice };
                        // var Animaly = { data: data.AnomalyData, Unit: this.UniId };
                        _this.DeteGridVm = new gridDomFile.DetectionInsertGridDom.DetectionInsertGridDomVm(config);
                        _this.SummaryVm = new summaryDomFile.DetectionSummaryDom.DetectionSummaryDomVm(summary);
                    }
                    if (callback) {
                        callback();
                    }
                });
            };
            DetectionInsertPageVm.prototype.onCheck = function () {
                this.SummaryVm.Submit(this.keyID, true);
            };
            DetectionInsertPageVm.prototype.onSubmit = function () {
                this.SummaryVm.Submit(this.keyID, false);
            };
            DetectionInsertPageVm.prototype.onExamChage = function (e) {
                this.examNum = e.target["value"];
                this.forceUpdate("");
            };
            DetectionInsertPageVm.prototype.onSreach = function () {
                var _this = this;
                urlFile.Core.AkPost("/MedicalCenter/TotalDetection/SreachDetailList", { ExamNum: this.examNum }, function (data) {
                    if (data == "Empty") {
                        alert("请输入正确的体检编号");
                    }
                    else if (data.ExamInfo.Status && data.ExamInfo.Status == "7") {
                        alert("该体检号已经退款");
                    }
                    else if (data) {
                        _this.tableData = data.Totalinfo;
                        _this.userInfoData = data.MemberInfo;
                        var config = {
                            data: _this.tableData
                        };
                        var istype = data.ExamInfo.Status;
                        if (data.ExamInfo.Status == "6") {
                            _this.isCheck = true;
                            _this.isedit = false;
                        }
                        else if (data.ExamInfo.Status == "8") {
                            _this.isCheck = false;
                            _this.isedit = true;
                        }
                        else {
                            _this.isCheck = false;
                            _this.isedit = false;
                        }
                        var summary = { data: data.summay, UniId: _this.UniId, aonmalyData: data.AnomalyData, isedit: _this.isedit, Advice: data.Advice };
                        _this.DeteGridVm = new gridDomFile.DetectionInsertGridDom.DetectionInsertGridDomVm(config);
                        _this.SummaryVm = new summaryDomFile.DetectionSummaryDom.DetectionSummaryDomVm(summary);
                        _this.forceUpdate("");
                    }
                });
            };
            return DetectionInsertPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        DetectionInsertPage.DetectionInsertPageVm = DetectionInsertPageVm;
        var DetectionInsertPageStates = (function (_super) {
            __extends(DetectionInsertPageStates, _super);
            function DetectionInsertPageStates() {
                _super.apply(this, arguments);
            }
            return DetectionInsertPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        DetectionInsertPage.DetectionInsertPageStates = DetectionInsertPageStates;
        var DetectionInsertPageProps = (function (_super) {
            __extends(DetectionInsertPageProps, _super);
            function DetectionInsertPageProps() {
                _super.apply(this, arguments);
            }
            return DetectionInsertPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        DetectionInsertPage.DetectionInsertPageProps = DetectionInsertPageProps;
        iocFile.Core.Ioc.Current().RegisterType("DetectionInsertPage", basewedPageFile.Web.BaseWebPageVm, DetectionInsertPageVm);
    })(DetectionInsertPage = exports.DetectionInsertPage || (exports.DetectionInsertPage = {}));
});
