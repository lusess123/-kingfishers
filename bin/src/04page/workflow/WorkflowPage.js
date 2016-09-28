var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/Ioc", "./../../01core/Url", "./../../04page/BaseWebPage", "react", "react-dom"], function (require, exports, iocFile, urlFile, basewedPageFile, React, ReactDOM) {
    "use strict";
    var Workflow;
    (function (Workflow) {
        var WorkflowAction = (function (_super) {
            __extends(WorkflowAction, _super);
            function WorkflowAction() {
                _super.apply(this, arguments);
            }
            return WorkflowAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        Workflow.WorkflowAction = WorkflowAction;
        var WorkflowReact = (function (_super) {
            __extends(WorkflowReact, _super);
            function WorkflowReact() {
                _super.apply(this, arguments);
                this.state = new WorkflowStates();
                this.IsNoFirst = false;
            }
            WorkflowReact.prototype.pInstall = function () {
                //   if (this.props.Vm.getRegName() == "pick") debugger;
                // alert("安装");
                _super.prototype.pInstall.call(this);
                this.initPage();
            };
            ;
            WorkflowReact.prototype.pUnInstall = function (vm) {
                _super.prototype.pUnInstall.call(this, vm);
            };
            WorkflowReact.prototype.pSender = function () {
                return (React.createElement("div", {className: "clearfix"}, React.createElement("div", {className: "ACT-PAGE-NAVI col-md-3  hide"}, "导航"), React.createElement("div", {className: "ACT-PAGE-MAIN col-md-12"}, "内容")));
            };
            WorkflowReact.prototype.initPage = function () {
                //--------------
                switch (this.props.Vm.Type) {
                    case "inst":
                        // _url = "/workflow/WorkFlowInst/InstForm";
                        this.loadWorkflowInstProcessR(this.props.Vm.PageObj);
                        break;
                    case "insthis":
                        // _url = "/workflow/MyHistory/HistoryForm";
                        this.loadWorkflowInstHisR(this.props.Vm.PageObj);
                        break;
                    case "detail":
                        // _url = "/workflow/WorkFlowInst/DetailForm";
                        this.loadWorkflowInstDetailR(this.props.Vm.PageObj);
                        break;
                    default:
                        break;
                }
                var _$dom = $(ReactDOM.findDOMNode(this)).find(".ACT-PAGE-MAIN");
                if (_$dom.length > 0) {
                    this.setWorkflowMapCurrentStep(_$dom, this.props.Vm.PageObj);
                }
            };
            WorkflowReact.prototype.toLeftNaviShow = function () {
                var _$Maindom = $(ReactDOM.findDOMNode(this)).find(".ACT-PAGE-MAIN");
                _$Maindom.removeClass("col-md-12");
                _$Maindom.addClass("col-md-9");
                var _$Navidom = $(ReactDOM.findDOMNode(this)).find(".ACT-PAGE-NAVI");
                _$Navidom.removeClass("hide");
            };
            WorkflowReact.prototype.toClearNaviShow = function () {
                var _$Navidom = $(ReactDOM.findDOMNode(this)).find(".ACT-PAGE-NAVI");
                _$Navidom.find(".ACT_TREENAVI").each(function (i, e) {
                    $(e).clear();
                });
                _$Navidom.clear();
                _$Navidom.addClass("hide");
            };
            WorkflowReact.prototype.loadWorkflowInstProcessR = function (res) {
                var _$dom = $(ReactDOM.findDOMNode(this)).find(".ACT-PAGE-MAIN");
                if (_$dom.length > 0) {
                    _$dom.html("");
                    _$dom["AtawViewPage"](res);
                }
            };
            WorkflowReact.prototype.loadWorkflowInstDetailR = function (res) {
                var _$dom = $(ReactDOM.findDOMNode(this)).find(".ACT-PAGE-MAIN");
                if (_$dom.length > 0) {
                    _$dom.html("");
                    res.NoSubmitBtn = true;
                    _$dom["AtawViewPage"](res);
                    //_$dom.AtawControl().$Submit.css("display", "none");
                    _$dom.find(".ACT-SUBIMT-BTN").hide();
                }
            };
            WorkflowReact.prototype.loadWorkflowInstHisR = function (res) {
                var _$dom = $(ReactDOM.findDOMNode(this)).find(".ACT-PAGE-MAIN");
                if (_$dom.length > 0) {
                    _$dom.html("");
                    _$dom.append("<p>" + res.Title + "</p>");
                    res.NoSubmitBtn = true;
                    _$dom["AtawViewPage"](res);
                    //_$dom.AtawControl().$Submit.css("display", "none");
                    _$dom.find(".ACT-SUBIMT-BTN").hide();
                }
            };
            WorkflowReact.prototype.setWorkflowMapCurrentStep = function ($div, resObj) {
                if (resObj.ExtData.ProcessModel && resObj.ExtData.ProcessModel.DetailModel && resObj.ExtData.ProcessModel.DetailModel.MapModel.CurrentStep.DisplayName) {
                    $div.append("<p class='hide ACT-STEP-NAME'>" + resObj.ExtData.ProcessModel.DetailModel.MapModel.CurrentStep.DisplayName + "</p>");
                }
            };
            WorkflowReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
                //alert("载入");
                this.initPage();
            };
            return WorkflowReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        Workflow.WorkflowReact = WorkflowReact;
        var WorkflowVm = (function (_super) {
            __extends(WorkflowVm, _super);
            function WorkflowVm(config) {
                _super.call(this);
                this.ReactType = WorkflowReact;
                this.IsV1 = true;
                //if (window["IsV1"]) {
                this.IsV1 = window["IsV1"];
                // }
            }
            WorkflowVm.prototype.init = function (config) {
            };
            WorkflowVm.prototype.fGetUrl = function () {
                var _url = "";
                switch (this.Type) {
                    case "inst":
                        _url = "/workflow/WorkFlowInst/InstForm";
                        break;
                    case "insthis":
                        _url = "/workflow/MyHistory/HistoryForm";
                        break;
                    case "detail":
                        _url = "/workflow/WorkFlowInst/DetailForm";
                        break;
                    default:
                        break;
                }
                return _url;
            };
            WorkflowVm.prototype.fInstCallBack = function (res) {
                var _this = this;
                if (res.ExtData) {
                    res.ExtData.DeskShortcutHref = this.SignUrl;
                }
                else {
                    res.ExtData = { DeskShortcutHref: this.SignUrl };
                }
                if (res.ExtData.FormType === "1") {
                    // alert("操作");
                    res["AtawSubmitSetting"] = {
                        befortPostDataFun: function (data, page) {
                            page.AtawSubmitSetting.Url = "/Workflow/MyWork/ProcessAsk?id=" + _this.Wid;
                            //+ "&ds=" + $.toJSON(data)
                            return true;
                        }
                    };
                    res["MvcFormUrlSetFun"] = function (mvcForm) {
                        return mvcForm.Url + "?id=" + _this.Wid;
                    };
                    res["NoChangeCheckFun"] = function () {
                        return true;
                    };
                    res.OtherButtonList = [];
                    if (res.ExtData && res.ExtData.HaveSave == "1") {
                        this.HaveSave = true;
                        res.OtherButtonList.push({
                            Txt: "保存",
                            Url: "/Workflow/MyWork/ProcessSave?id=" + this.Wid
                        });
                    }
                    if (res.ExtData && res.ExtData.HaveBack == "1") {
                        this.HaveBack = true;
                        res.OtherButtonList.push({
                            NoSubmit: true,
                            Txt: "回退",
                            Url: "/Workflow/MyWork/Back?id=" + this.Wid
                        });
                    }
                    if (res.ExtData && res.ExtData.HaveUnlock == "1") {
                        this.HaveUnlock = true;
                        res.OtherButtonList.push({
                            NoSubmit: true,
                            Txt: "解锁",
                            Url: "/Workflow/MyWork/Unlock?id=" + this.Wid
                        });
                    }
                }
                else {
                    // alert("不能操作");
                    res["AtawSubmitSetting"] = { befortPostDataFun: function (data, page) { alert(page.RegName); return true; } };
                    res["MvcFormUrlSetFun"] = function (mvcForm) {
                        return mvcForm.Url + "?id=" + _this.Wid;
                    };
                }
                //_this.loadMenu();
            };
            ;
            WorkflowVm.prototype.fInstHisCallBack = function (res) {
                if (res.ExtData) {
                    res.ExtData.DeskShortcutHref = this.SignUrl;
                }
                else {
                    res.ExtData = {
                        DeskShortcutHref: this.SignUrl
                    };
                }
                res["AtawSubmitSetting"] = {
                    befortPostDataFun: function (data, page) {
                        alert(page.RegName);
                        return true;
                    }
                };
                res["MvcFormUrlSetFun"] = function (mvcForm) {
                    return mvcForm.Url + "?id=" + this.Wid;
                };
            };
            WorkflowVm.prototype.fDetailCallBack = function (res) {
                var _this = this;
                res["AtawSubmitSetting"] =
                    {
                        befortPostDataFun: function (data, page) {
                            alert(page.RegName);
                            return true;
                        }
                    };
                res["MvcFormUrlSetFun"] = function (mvcForm) {
                    return mvcForm.Url + "?id=" + _this.Wid;
                };
            };
            WorkflowVm.prototype.loadPage = function (callback) {
                var _this = this;
                var _url = this.fGetUrl();
                urlFile.Core.AkPost(_url, { id: this.Wid }, function (a) {
                    switch (_this.Type) {
                        case "inst":
                            _this.fInstCallBack(a);
                            break;
                        case "insthis":
                            _this.fInstHisCallBack(a);
                            break;
                        case "detail":
                            _this.fDetailCallBack(a);
                            break;
                        default:
                            break;
                    }
                    _this.PageObj = a;
                    _this.Title = a.Title;
                    if (callback) {
                        callback();
                    }
                });
            };
            WorkflowVm.prototype.Reset = function (p1, p2, p3) {
                _super.prototype.Reset.call(this, p1, p2, p3);
                if (p1 && p1 != "") {
                    this.Type = p1;
                }
                if (p3 && p3 != "") {
                    this.Wid = p3;
                }
            };
            return WorkflowVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        Workflow.WorkflowVm = WorkflowVm;
        var WorkflowStates = (function (_super) {
            __extends(WorkflowStates, _super);
            function WorkflowStates() {
                _super.apply(this, arguments);
            }
            return WorkflowStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        Workflow.WorkflowStates = WorkflowStates;
        var WorkflowProps = (function (_super) {
            __extends(WorkflowProps, _super);
            function WorkflowProps() {
                _super.apply(this, arguments);
            }
            return WorkflowProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        Workflow.WorkflowProps = WorkflowProps;
        iocFile.Core.Ioc.Current().RegisterType("WORKFLOW", basewedPageFile.Web.BaseWebPageVm, WorkflowVm);
    })(Workflow = exports.Workflow || (exports.Workflow = {}));
});
