var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/Ioc", "./../../../01core/Util", "./../../../01core/Event", "./../../../01core/Url", "./../../../04page/BaseWebPage", "react", "./../../../05tool/TabDom", "./DepartmentTableDom", "./DepartSummaryDom", "./../tools/DiseaseCheckBoxDom", "./../../Common/Data"], function (require, exports, iocFile, utilFile, eventFile, urlFile, basewedPageFile, React, TabDomFile, TableFile, summaryDomFile, DisCheckBox, constantData) {
    "use strict";
    var DepartmentEntryPage;
    (function (DepartmentEntryPage) {
        var DepartmentEntryPageAction = (function (_super) {
            __extends(DepartmentEntryPageAction, _super);
            function DepartmentEntryPageAction() {
                _super.apply(this, arguments);
            }
            return DepartmentEntryPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        DepartmentEntryPage.DepartmentEntryPageAction = DepartmentEntryPageAction;
        var DepartmentEntryPageReact = (function (_super) {
            __extends(DepartmentEntryPageReact, _super);
            function DepartmentEntryPageReact() {
                _super.apply(this, arguments);
                this.state = new DepartmentEntryPageStates();
            }
            DepartmentEntryPageReact.prototype.pSender = function () {
                var _this = this;
                var table = this.initTable();
                var initHandle = this._initHandle();
                var meminfo = this._meminfo();
                return (React.createElement("div", {className: "container-fluid ui-dpt-main"}, React.createElement("div", {className: "row-fluid"}, meminfo, React.createElement("div", {className: "ui-dpt-content col-lg-9 col-md-9"}, React.createElement("div", {className: "YSm-handle ui-dpt-search"}, initHandle), React.createElement("div", {className: "ui-dpt-tab"}, this._tDom(this.props.Vm.TabDomFileObj)), this.initTable(), this._tDom(this.props.Vm.SummaryVm), React.createElement("div", {className: "ui-dpt-send"}, React.createElement("a", {className: this.props.Vm.BtnIsHidde ? " hide " : "" + " btn btn-primary ui-dpt-submit ", onClick: function () { _this.fun_Submit(); }}, "提交"))))));
            };
            DepartmentEntryPageReact.prototype.fun_Submit = function () {
                this.props.Vm.submit();
            };
            DepartmentEntryPageReact.prototype.fun_linkcode = function (e) {
                var _val = e.target["value"];
                this.props.Vm.SearchCode = _val;
                this.forceUpdate();
            };
            DepartmentEntryPageReact.prototype.fun_searchBtn = function () {
                this.props.Vm.Search(this.props.Vm.SearchCode.trim());
            };
            DepartmentEntryPageReact.prototype.initTable = function () {
                //var table = new TableFile.DepartmentGridDom.DepartmentGridDomVm();
                //table.DepartmentGridDomObj = this.props.Vm;
                //return table.intoDom();
                return this._tDom(this.props.Vm.TableVm);
            };
            DepartmentEntryPageReact.prototype.initSummary = function () {
                //var summary = new summaryDomFile.DepartSummaryDom.DepartSummaryDomVm();
                //summary.SummaryDomObj = this.props.Vm;
                //return summary.intoDom();
                return;
            };
            DepartmentEntryPageReact.prototype._initHandle = function () {
                var _this = this;
                return React.createElement("div", {className: "col-lg-8 col-md-8 YSm-search"}, React.createElement("input", {className: "col-lg-10 col-md-10 YSu-border-blue ", type: "text", placeholder: "输入体检编号查询", value: this.props.Vm.SearchCode, onChange: function (e) { _this.fun_linkcode(e); }}), React.createElement("a", {className: "col-lg-2 col-md-2 btn btn-primary", onClick: function () { _this.fun_searchBtn(); }}, "查询"));
            };
            DepartmentEntryPageReact.prototype._meminfo = function () {
                return React.createElement("div", {className: "ui-dpt-memberinfo col-lg-3 col-md-3"}, React.createElement("ul", null, React.createElement("li", {className: "clearfix"}, React.createElement("span", {className: "col-lg-5 col-md-5 ui-dpt-sp"}, "姓名："), React.createElement("span", {className: "col-lg-7 col-md-7"}, this.props.Vm.MemInfoData.Name)), React.createElement("li", {className: "clearfix"}, React.createElement("span", {className: "col-lg-5 col-md-5 ui-dpt-sp"}, "年龄："), React.createElement("span", {className: "col-lg-7 col-md-7"}, this.props.Vm.MemInfoData.Age)), React.createElement("li", {className: "clearfix"}, React.createElement("span", {className: "col-lg-5 col-md-5 ui-dpt-sp"}, "性别："), React.createElement("span", {className: "col-lg-7 col-md-7"}, this.GetText(constantData.Data.GenderTypeData, String(this.props.Vm.MemInfoData.Gender)))), React.createElement("li", {className: "clearfix"}, React.createElement("span", {className: "col-lg-5 col-md-5 ui-dpt-sp"}, "身份证："), React.createElement("span", {className: "col-lg-7 col-md-7"}, this.props.Vm.MemInfoData.IDCard)), React.createElement("li", {className: "clearfix"}, React.createElement("span", {className: "col-lg-5 col-md-5 ui-dpt-sp"}, "联系电话："), React.createElement("span", {className: "col-lg-7 col-md-7"}, this.props.Vm.MemInfoData.Phone))));
            };
            DepartmentEntryPageReact.prototype.GetText = function (List, Id) {
                for (var index = 0; index < List.length; index++) {
                    if (List[index].Value == Id) {
                        return List[index].Text;
                    }
                }
                return "";
            };
            return DepartmentEntryPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        DepartmentEntryPage.DepartmentEntryPageReact = DepartmentEntryPageReact;
        var DepartmentEntryPageVm = (function (_super) {
            __extends(DepartmentEntryPageVm, _super);
            function DepartmentEntryPageVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = DepartmentEntryPageReact;
                this.MemInfoData = {};
                this.BtnIsHidde = true;
                this.pIsHullAutoHide = true;
                this.DiseasList = [];
                this.isResultNUll = false;
                this.isedit = true;
                this.UniId = eventFile.App.getUniId().toString();
                this.TableVm = new TableFile.DepartmentGridDom.DepartmentGridDomVm();
                this.diseasebox = new DisCheckBox.DiseaseCheckBoxDom.DiseaseCheckBoxDomVm();
                this.TabDomFileObj = new TabDomFile.TabDom.TabDomVm({
                    Items: [
                        {
                            DomObj: this.diseasebox,
                            Title: "既往病史",
                            IsActive: true,
                            ReloadFun: function (item) {
                                if (!item.IsNoFirst) {
                                    item.DomObj = new DisCheckBox.DiseaseCheckBoxDom.DiseaseCheckBoxDomVm();
                                    _this.forceUpdate("");
                                }
                            }
                        },
                        {
                            DomObj: this.diseasebox,
                            Title: "家族遗传史",
                            ReloadFun: function (item) {
                                if (!item.DomObj) {
                                    item.DomObj = new DisCheckBox.DiseaseCheckBoxDom.DiseaseCheckBoxDomVm();
                                    _this.forceUpdate("");
                                }
                            }
                        }
                    ]
                });
                this.listenAppEvent("medical/Departments/tools/DeptConclusion", this.UniId, function (a) {
                    _this.SummaryVm.SummaryData.Content = a;
                    _this.SummaryVm.DepartAreaVm.dataValueSet(a);
                    _this.SummaryVm.IsChange = true;
                    _this.SummaryVm.DepartAreaVm.IsChange = true;
                    _this.SummaryVm.forceUpdate("");
                });
                this.listenAppEvent("medical/Anomaly/tools/AnomalyConclusion", this.UniId, function (fid, name) {
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
                        var config1 = { Unid: _this.UniId, data: _this.SummaryVm.MedicalDomObj.RowData, isedit: _this.isedit };
                        //var rowVm = new RowDom.MedicalRowDom.MedicalRowDomVm(data);
                        //this.SummaryVm.MedicalDomObj.MedicalRowDom.push(rowVm);
                        //this.SummaryVm = new summaryDomFile.DepartSummaryDom.DepartSummaryDomVm(config1)
                        _this.SummaryVm.MedicalDomObj.initData(config1);
                    }
                });
                this.listenAppEvent("medical/Anomaly/tools/delAnomalyConclusion", this.UniId, function (index) {
                    _this.SummaryVm.MedicalDomObj.RowData.splice(index, 1);
                    var config1 = { Unid: _this.UniId, data: _this.SummaryVm.MedicalDomObj.RowData, isedit: _this.isedit };
                    //this.SummaryVm = new summaryDomFile.DepartSummaryDom.DepartSummaryDomVm(config1)
                    _this.SummaryVm.MedicalDomObj.initData(config1);
                    // this.SummaryVm.MedicalDomObj.IsMulit = true;
                    //this.forceUpdate("");
                });
                this.listenAppEvent("Departments/List/DepartSummaryDom", this.UniId, function () {
                    var array = [];
                    _this.TableVm.RowList.forEach(function (row) {
                        array.push(row.getData());
                    });
                    urlFile.Core.AkPost("/MedicalCenter/DeptConclusionTpl/autoSummary", { examNumber: _this.SearchCode, dataList: JSON.stringify(array) }, function (a) {
                        if (a) {
                            _this.SummaryVm.SummaryData.Content = a.Content;
                            _this.SummaryVm.DepartAreaVm.dataValueSet(a.Content);
                        }
                        else {
                            alert("没有找到合适的模板！");
                        }
                        _this.SummaryVm.IsChange = true;
                        _this.SummaryVm.DepartAreaVm.IsChange = true;
                        _this.SummaryVm.forceUpdate("");
                    });
                });
                this.listenAppEvent("Departments/List/autoDiagnosis", this.UniId, function () {
                    var array = [];
                    _this.TableVm.RowList.forEach(function (row) {
                        array.push(row.getData());
                    });
                    urlFile.Core.AkPost("/MedicalCenter/AnomalyConclusion/autoDiagnosis", { dataList: JSON.stringify(array) }, function (a) {
                        if (a) {
                            a.forEach(function (row) {
                                var data = { FID: row.FID, Name: row.Name };
                                var isRepeat = false;
                                _this.SummaryVm.MedicalDomObj.RowData.forEach(function (a) {
                                    if (a.FID == data.FID)
                                        isRepeat = true;
                                });
                                if (!isRepeat) {
                                    _this.SummaryVm.MedicalDomObj.RowData.push(data);
                                }
                            });
                            //var config1 = { Unid: this.UniId, aonmalyData: this.SummaryVm.MedicalDomObj.RowData }
                            var config1 = { data: _this.SummaryVm.MedicalDomObj.RowData, Unid: _this.UniId, isedit: _this.isedit };
                            //this.SummaryVm = new summaryDomFile.DepartSummaryDom.DepartSummaryDomVm(config1)
                            _this.SummaryVm.MedicalDomObj.initData(config1);
                        }
                        else {
                            alert("没有找到合适的小结！");
                        }
                    });
                });
            }
            DepartmentEntryPageVm.prototype.Search = function (val) {
                var _this = this;
                urlFile.Core.AkPost("/MedicalCenter/Result/SearchMemberDeptExamItems", { examNumber: val }, function (data) {
                    var _data = data.Data;
                    if (data.Content == "OverallExamed") {
                        alert("该体检号已经总检完毕，请您到总检列表中查看。");
                    }
                    else if (data.Content == "refund") {
                        alert("该体检号已经退款");
                    }
                    else if (data.Content == "UnReceived") {
                        alert("该体检号未缴费,不能录入");
                    }
                    else if (data.Content == "NoMember") {
                        alert("未查到体检信息，请重新输入正确的体检好");
                    }
                    else {
                        if (_data) {
                            if (_data.Member) {
                                _this.MemInfoData = _data.Member;
                            }
                            if (!data.Data.Condtion) {
                                data.Data.Condtion = "";
                            }
                            if (_data.ItemList.length == 0) {
                                _this.isedit = false;
                            }
                            var summarydata = { Unid: _this.UniId, AreaText: data.Data.Condtion, aonmalyData: data.Data.AnomalyList, isedit: _this.isedit };
                            _this.SummaryVm = new summaryDomFile.DepartSummaryDom.DepartSummaryDomVm(summarydata);
                            if (_data.Condtion) {
                                _this.SummaryVm.SummaryData.Content = _data.Condtion;
                            }
                            _this.ExamNumber = _data.ExamNumber;
                            _this.DeptId = _data.DeptId;
                            var _config = { ListData: _data.ItemList };
                            _this.TableVm = new TableFile.DepartmentGridDom.DepartmentGridDomVm(_config);
                            if (_data.ItemList.length != 0) {
                                _this.BtnIsHidde = false;
                            }
                            else {
                                _this.BtnIsHidde = true;
                            }
                            var _DiseasList = [];
                            var _DiseasList2 = [];
                            _data.DiseaseList.forEach(function (a) {
                                if (a.isGenetic == "False") {
                                    _DiseasList.push(a);
                                }
                                else if (a.isGenetic == "True") {
                                    _DiseasList2.push(a);
                                }
                            });
                            var _boxconfig = { Data: _DiseasList };
                            var _boxconfig1 = { Data: _DiseasList2, isfamily: "1" };
                            _this.diseasebox = new DisCheckBox.DiseaseCheckBoxDom.DiseaseCheckBoxDomVm(_boxconfig);
                            _this.diseasebox1 = new DisCheckBox.DiseaseCheckBoxDom.DiseaseCheckBoxDomVm(_boxconfig1);
                            _this.TabDomFileObj = new TabDomFile.TabDom.TabDomVm({
                                Items: [
                                    {
                                        DomObj: _this.diseasebox,
                                        Title: "既往病史",
                                        IsActive: true
                                    },
                                    {
                                        DomObj: _this.diseasebox1,
                                        Title: "家族遗传史"
                                    }
                                ]
                            });
                            _this.diseasebox.IsChange = true;
                            _this.diseasebox1.IsChange = true;
                            _this.TableVm.IsChange = true;
                            _this.SummaryVm.DepartAreaVm.IsChange = true;
                            _this.SummaryVm.IsChange = true;
                            _this.forceUpdate("");
                        }
                        else {
                            var summarydata = { Unid: _this.UniId, AreaText: "", isedit: _this.isedit };
                            _this.SummaryVm = new summaryDomFile.DepartSummaryDom.DepartSummaryDomVm(summarydata);
                            _this.SummaryVm.IsChange = true;
                            _this.forceUpdate("");
                        }
                    }
                });
            };
            DepartmentEntryPageVm.prototype.ReceivePageSend = function (config, obj) {
                _super.prototype.ReceivePageSend.call(this, config, obj);
                switch (config.FromModulename) {
                    case "DEPARTMENTIMAGEPAGE":
                        if (obj.Select) {
                            this.UpdateImage(obj.Select);
                        }
                        break;
                    default:
                        break;
                }
            };
            DepartmentEntryPageVm.prototype.UpdateImage = function (Any) {
                this.TableVm.ListData.forEach(function (a) {
                    if (a.ItemId == Any.ItemId) {
                        a.Picture = Any.Picture;
                        a.PictureCount = Any.PictureCount;
                    }
                });
                this.TableVm.RowList.forEach(function (a) { a.IsChange = true; });
                this.TableVm.forceUpdate("");
            };
            DepartmentEntryPageVm.prototype.submit = function () {
                var _this = this;
                if (this.SummaryVm.DepartAreaVm.legal()) {
                    var postData = {};
                    postData.DeptConclusion = this.SummaryVm.Text;
                    postData.DeptId = this.DeptId;
                    postData.ExamNumber = this.ExamNumber;
                    postData.ItemResultList = [];
                    postData.Anomaly = [];
                    this.isResultNUll = false;
                    this.TableVm.RowList.forEach(function (row) {
                        if (row.getData().Result == "") {
                            _this.isResultNUll = true;
                        }
                        postData.ItemResultList.push(row.getData());
                    });
                    this.DiseasList = [];
                    var data1 = this.diseasebox.submit();
                    var data2 = this.diseasebox1.submit();
                    data1.forEach(function (a) {
                        _this.DiseasList.push(a);
                    });
                    data2.forEach(function (a) {
                        _this.DiseasList.push(a);
                    });
                    postData.DiseaseData = this.DiseasList;
                    postData.Anomaly = this.SummaryVm.MedicalDomObj.getAnomalyData();
                    var issubmit = true;
                    //防止一开始就点击提交
                    if (this.ExamNumber) {
                        if (this.isResultNUll) {
                            //要给提示
                            if (!confirm("有项目结果为空，会标记为已检未录入，是否提交？")) {
                                issubmit = false;
                            }
                        }
                        if (issubmit) {
                            urlFile.Core.AkPost("/MedicalCenter/Result/addResult", {
                                result: JSON.stringify(postData)
                            }, function (a) {
                                if (a.Content == "ok") {
                                    alert("提交成功！");
                                    _this.SearchCode = "";
                                    _this.forceUpdate("");
                                    urlFile.Core.AkUrl.Current().openUrl("$DepartmentEntryPage$", false);
                                    utilFile.Core.Util.ToggleLoading(true);
                                    urlFile.Core.AkUrl.Current().refresh();
                                }
                                else {
                                    utilFile.Core.Util.Noty("提交失败");
                                }
                            });
                        }
                    }
                }
            };
            DepartmentEntryPageVm.prototype.loadPage = function (callback) {
                this.MemInfoData = {};
                var key = this.Param1;
                this.Search(key);
                if (callback) {
                    callback();
                }
            };
            return DepartmentEntryPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        DepartmentEntryPage.DepartmentEntryPageVm = DepartmentEntryPageVm;
        var DepartmentEntryPageStates = (function (_super) {
            __extends(DepartmentEntryPageStates, _super);
            function DepartmentEntryPageStates() {
                _super.apply(this, arguments);
            }
            return DepartmentEntryPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        DepartmentEntryPage.DepartmentEntryPageStates = DepartmentEntryPageStates;
        var DepartmentEntryPageProps = (function (_super) {
            __extends(DepartmentEntryPageProps, _super);
            function DepartmentEntryPageProps() {
                _super.apply(this, arguments);
            }
            return DepartmentEntryPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        DepartmentEntryPage.DepartmentEntryPageProps = DepartmentEntryPageProps;
        iocFile.Core.Ioc.Current().RegisterType("DepartmentEntryPage", basewedPageFile.Web.BaseWebPageVm, DepartmentEntryPageVm);
    })(DepartmentEntryPage = exports.DepartmentEntryPage || (exports.DepartmentEntryPage = {}));
});
