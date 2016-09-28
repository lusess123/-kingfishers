var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/Ioc", "./../../01core/Util", "./../../01core/Url", "./../../04page/BaseWebPage", "react", "react-dom", "./../../05tool/ALink", "./HosWorkRowDom", "./../../06app/Feed/WorkBench/WorkBench"], function (require, exports, iocFile, utilFile, urlFile, basewedPageFile, React, ReactDOM, alinkFile, detailRowFile, workBenchFile) {
    "use strict";
    var HosWorkBenchPage;
    (function (HosWorkBenchPage) {
        var HosWorkBenchPageAction = (function (_super) {
            __extends(HosWorkBenchPageAction, _super);
            function HosWorkBenchPageAction() {
                _super.apply(this, arguments);
            }
            return HosWorkBenchPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        HosWorkBenchPage.HosWorkBenchPageAction = HosWorkBenchPageAction;
        var HosWorkBenchPageReact = (function (_super) {
            __extends(HosWorkBenchPageReact, _super);
            function HosWorkBenchPageReact() {
                _super.apply(this, arguments);
                this.state = new HosWorkBenchPageStates();
            }
            HosWorkBenchPageReact.prototype.pSender = function () {
                return React.createElement("div", {className: "YSm-hosworkbench clearfix"}, React.createElement("div", {className: "col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12"}, this._initList(), this._initShortCut(), this._initFeedList()), React.createElement("div", {className: "col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12"}, this._initBasicInfo(), this._initInform()));
            };
            HosWorkBenchPageReact.prototype._initList = function () {
                return React.createElement("div", {className: "panel panel-default text-center YSm-hosworkbench-list YSm-hosworkbench-border "}, this.props.Vm.DataMenuList.map(function (a) {
                    return a;
                }));
            };
            HosWorkBenchPageReact.prototype._initShortCut = function () {
                return React.createElement("div", {className: "panel panel-default YSm-shortcut YSm-hosworkbench-border"}, React.createElement("div", {className: "panel-heading"}, React.createElement("h3", {className: "YSu-title"}, "快捷入口")), React.createElement("div", {className: "panel-body"}, React.createElement("div", {className: "nav nav-pills clearfix"}, this.props.Vm.DataNavList.map(function (a) {
                    return a;
                }))));
            };
            HosWorkBenchPageReact.prototype._initBasicInfo = function () {
                return React.createElement("div", {className: "YSm-basic-info YSm-hosworkbench-border"}, React.createElement("div", {className: "pull-left"}, React.createElement("big", null, this.props.Vm.NickName), React.createElement("p", null, this.props.Vm.RowData.DeptMent), React.createElement("p", null, this.props.Vm.RowData.JobTitle)), React.createElement("div", {className: "pull-right"}, React.createElement("div", {ref: "date", id: "showDate"})));
            };
            HosWorkBenchPageReact.prototype._initInform = function () {
                return React.createElement("div", {className: "panel panel-default YSm-inform  YSm-hosworkbench-border"}, React.createElement("div", {className: "panel-heading"}, React.createElement("h3", {className: "YSu-title"}, "公告通知")), React.createElement("div", {className: "panel-body"}, React.createElement("ul", {className: "nav"}, this.props.Vm.RowList.map(function (_row) {
                    return _row.intoDom();
                }))));
            };
            HosWorkBenchPageReact.prototype._initFeedList = function () {
                return React.createElement("div", {className: "panel panel-default YSm-inform  YSm-hosworkbench-border"}, React.createElement("div", {className: "panel-heading"}, React.createElement("h3", {className: "YSu-title"}, "在线办公")), React.createElement("div", {className: "Hc-modals-list"}, this._tDom(this.props.Vm.DoorObj), this.props.Vm.WorkBenchObj.intoDom()));
            };
            HosWorkBenchPageReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
                var _val = this.props.Vm.reactDataValueGet();
                var __this = this;
                utilFile.Core.Util.AsyncJs(["/AtawStatic/lib/03Extend/showDate/showDate.js", "/AtawStatic/lib/03Extend/showDate/showDate.css"], function () {
                    var _$dom = __this.fGetDateDom();
                    _$dom.MyDigitClock({
                        fontColor: "#488bff",
                        fontWeight: "bold",
                        timeFormat: '<div class="showDate_time">{HH}:{MM}:{SS}</div>'
                    });
                });
                //  __this.fGetDateDom().addClass("runcode");
            };
            ;
            HosWorkBenchPageReact.prototype.fGetDateDom = function () {
                var _reactObj = this.refs["date"];
                var _dom = ReactDOM.findDOMNode(_reactObj);
                var _$dom = $(_dom);
                return _$dom;
            };
            return HosWorkBenchPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        HosWorkBenchPage.HosWorkBenchPageReact = HosWorkBenchPageReact;
        var HosWorkBenchPageVm = (function (_super) {
            __extends(HosWorkBenchPageVm, _super);
            function HosWorkBenchPageVm(config) {
                _super.call(this);
                this.ReactType = HosWorkBenchPageReact;
                this.DataMenuList = new Array();
                this.DataNavList = new Array();
                this.RowData = { FID: "", Name: "", DeptMent: "", JobTitle: "", Notice: [] };
                this.RowList = new Array();
                //  public FeedPage = new Array<FeedPage.FeedPage.FeedPageVm>();
                this.NickName = "";
                this.a = "";
                this.pIsHullAutoHide = true;
                this.WorkBenchObj = new workBenchFile.WorkBench.WorkBenchVm();
            }
            HosWorkBenchPageVm.prototype.selectMenu = function (val) {
                var str;
                switch (val) {
                    case "核心系统":
                        str = React.createElement("a", {Vm: new alinkFile.ui.ALinkVm(true), children: null, href: 'x#$$module/HospPerformance/Core/performance_core_Appraisal_Category_Tree'}, React.createElement("img", {src: '../lib/akCss/icons/yuShuHos/jx_hexin.png'}), React.createElement("span", null, "核心业务"));
                        break;
                    case "医务管理系统":
                        str = React.createElement("a", {Vm: new alinkFile.ui.ALinkVm(true), children: null, href: 'x#$$module/HospPerformance/MedicalManage/performance_medical_WardRound'}, React.createElement("img", {src: '../lib/akCss/icons/yuShuHos/jx_yiwu.png'}), React.createElement("span", null, "医务管理"));
                        break;
                    case "护理管理系统":
                        str = React.createElement("a", {Vm: new alinkFile.ui.ALinkVm(true), children: null, href: 'x#$$module/HospPerformance/Nurs/performance_nurs_Appraisal_Care'}, React.createElement("img", {src: '../lib/akCss/icons/yuShuHos/jx_huli.png'}), React.createElement("span", null, "护理管理"));
                        break;
                    case "科教管理系统":
                        str = React.createElement("a", {Vm: new alinkFile.ui.ALinkVm(true), children: null, href: 'x#$$module/HospPerformance/Hosp/performance_hosp_Research_Project'}, React.createElement("img", {src: '../lib/akCss/icons/yuShuHos/jx_kejiao.png'}), React.createElement("span", null, "科教管理"));
                        break;
                    case "人事管理系统":
                        str = React.createElement("a", {Vm: new alinkFile.ui.ALinkVm(true), children: null, href: 'x#$$module/HospPerformance/HumanResource/MRP_Department'}, React.createElement("img", {src: '../lib/akCss/icons/yuShuHos/jx_reshi.png'}), React.createElement("span", null, "人事管理"));
                        break;
                    case "总务管理系统":
                        str = React.createElement("a", {Vm: new alinkFile.ui.ALinkVm(true), children: null, href: 'x#$$module/HospPerformance/GeneralAffairs/performance_affairs_Type_Tree'}, React.createElement("img", {src: '../lib/akCss/icons/yuShuHos/jx_zongwu.png'}), React.createElement("span", null, "总务管理"));
                        break;
                    case "在线办公":
                        str = React.createElement("a", {Vm: new alinkFile.ui.ALinkVm(true), children: null, href: 'x#$$module/ExtraWork/extraWork'}, React.createElement("img", {src: '../lib/akCss/icons/yuShuHos/jx_zaixianbg.png'}), React.createElement("span", null, "在线办公"));
                        break;
                    case "院长管理系统":
                        str = React.createElement("a", {Vm: new alinkFile.ui.ALinkVm(true), children: null, href: 'x#$$module/HospPerformance/Director/performance_director_Appraisal_DeptResult'}, React.createElement("img", {src: '../lib/akCss/icons/yuShuHos/jx_bumen.png'}), React.createElement("span", null, "院长管理系统"));
                        break;
                    case "部门管理系统":
                        str = React.createElement("a", {Vm: new alinkFile.ui.ALinkVm(true), children: null, href: 'x#$$module/HospPerformance/Department/performance_department_Appraisal_DeptResult'}, React.createElement("img", {src: '../lib/akCss/icons/yuShuHos/jx_yuanzhang.png'}), React.createElement("span", null, "部门管理系统"));
                        break;
                }
                return str;
            };
            HosWorkBenchPageVm.prototype.selectNav = function (val, flag) {
                var str;
                switch (val) {
                    case "核心系统":
                        if (flag) {
                            str = React.createElement("ul", {className: "nav-item"}, React.createElement("li", null, "核心系统"), React.createElement("li", null, React.createElement("a", {Vm: new alinkFile.ui.ALinkVm(true), href: "x#$$module/HospPerformance/Core/performance_core_Appraisal_Item", children: null}, " 考核项目")), React.createElement("li", null, React.createElement("a", {Vm: new alinkFile.ui.ALinkVm(true), href: "x#$$module/HospPerformance/Core/performance_core_Appraisal_Template", children: null}, " 考核模板")), React.createElement("li", null, React.createElement("a", {Vm: new alinkFile.ui.ALinkVm(true), href: "x#$$module/HospPerformance/Core/performance_core_Appraisal", children: null}, " 考核管理")));
                        }
                        else {
                            str = React.createElement("ul", {className: "nav"}, React.createElement("li", null, "核心系统"), React.createElement("li", {className: "nav-item"}, React.createElement("a", {Vm: new alinkFile.ui.ALinkVm(true), href: "x#$$module/HospPerformance/Core/performance_core_Appraisal_Item", children: null}, " 考核项目")), React.createElement("li", {className: "nav-item"}, React.createElement("a", {Vm: new alinkFile.ui.ALinkVm(true), href: "x#$$module/HospPerformance/Core/performance_core_Appraisal_Template", children: null}, " 考核模板")), React.createElement("li", {className: "nav-item"}, React.createElement("a", {Vm: new alinkFile.ui.ALinkVm(true), href: "x#$$module/HospPerformance/Core/performance_core_Appraisal", children: null}, " 考核管理")));
                        }
                        break;
                    case "医务管理系统":
                        if (flag) {
                            str = React.createElement("ul", {className: "nav-item"}, React.createElement("li", null, "医务管理"), React.createElement("li", null, React.createElement("a", {Vm: new alinkFile.ui.ALinkVm(true), href: "x#$$module/HospPerformance/MedicalManage/performance_medical_WardRound", children: null}, " 业务管理")), React.createElement("li", null, React.createElement("a", {Vm: new alinkFile.ui.ALinkVm(true), href: "x#$$module/HospPerformance/MedicalManage/performance_medical_Appraisal", children: null}, " 绩效考核")), React.createElement("li", null, React.createElement("a", {Vm: new alinkFile.ui.ALinkVm(true), href: "x#$$module/HospPerformance/MedicalManage/performance_medical_Appraisal_UserResult", children: null}, " 业绩档案")));
                        }
                        else {
                            str = React.createElement("ul", {className: "nav"}, React.createElement("li", null, "医务管理"), React.createElement("li", {className: "nav-item"}, React.createElement("a", {Vm: new alinkFile.ui.ALinkVm(true), href: "x#$$module/HospPerformance/MedicalManage/performance_medical_WardRound", children: null}, " 业务管理")), React.createElement("li", {className: "nav-item"}, React.createElement("a", {Vm: new alinkFile.ui.ALinkVm(true), href: "x#$$module/HospPerformance/MedicalManage/performance_medical_Appraisal", children: null}, " 绩效考核")), React.createElement("li", {className: "nav-item"}, React.createElement("a", {Vm: new alinkFile.ui.ALinkVm(true), href: "x#$$module/HospPerformance/MedicalManage/performance_medical_Appraisal_UserResult", children: null}, " 业绩档案")));
                        }
                        break;
                    case "护理管理系统":
                        if (flag) {
                            str = React.createElement("ul", {className: "nav-item"}, React.createElement("li", null, "护理管理"), React.createElement("li", null, React.createElement("a", {Vm: new alinkFile.ui.ALinkVm(true), href: "x#$$module/HospPerformance/Nurs/performance_nurs_Appraisal_Care", children: null}, " 绩效考核")), React.createElement("li", null, React.createElement("a", {Vm: new alinkFile.ui.ALinkVm(true), href: "x#$$module/HospPerformance/Nurs/performance_nurs_Appraisal_UserResult", children: null}, " 业绩档案")));
                        }
                        else {
                            str = React.createElement("ul", {className: "nav"}, React.createElement("li", null, "护理管理"), React.createElement("li", {className: "nav-item"}, React.createElement("a", {Vm: new alinkFile.ui.ALinkVm(true), href: "x#$$module/HospPerformance/Nurs/performance_nurs_Appraisal_Care", children: null}, " 绩效考核")), React.createElement("li", {className: "nav-item"}, React.createElement("a", {Vm: new alinkFile.ui.ALinkVm(true), href: "x#$$module/HospPerformance/Nurs/performance_nurs_Appraisal_UserResult", children: null}, " 业绩档案")));
                        }
                        break;
                    case "科教管理系统":
                        if (flag) {
                            str = React.createElement("ul", {className: "nav-item"}, React.createElement("li", null, "科教管理"), React.createElement("li", null, React.createElement("a", {Vm: new alinkFile.ui.ALinkVm(true), href: "x#$$module/HospPerformance/Hosp/performance_hosp_Research_Project", children: null}, " 业务管理")), React.createElement("li", null, React.createElement("a", {Vm: new alinkFile.ui.ALinkVm(true), href: "x#$$module/HospPerformance/Hosp/performance_hosp_Appraisal_Science", children: null}, " 绩效考核")), React.createElement("li", null, React.createElement("a", {Vm: new alinkFile.ui.ALinkVm(true), href: "x#$$module/HospPerformance/Hosp/performance_hosp_Appraisal_UserResult", children: null}, " 业绩档案")));
                        }
                        else {
                            str = React.createElement("ul", {className: "nav"}, React.createElement("li", null, "科教管理"), React.createElement("li", {className: "nav-item"}, React.createElement("a", {Vm: new alinkFile.ui.ALinkVm(true), href: "x#$$module/HospPerformance/Hosp/performance_hosp_Research_Project", children: null}, " 业务管理")), React.createElement("li", {className: "nav-item"}, React.createElement("a", {Vm: new alinkFile.ui.ALinkVm(true), href: "x#$$module/HospPerformance/Hosp/performance_hosp_Appraisal_Science", children: null}, " 绩效考核")), React.createElement("li", {className: "nav-item"}, React.createElement("a", {Vm: new alinkFile.ui.ALinkVm(true), href: "x#$$module/HospPerformance/Hosp/performance_hosp_Appraisal_UserResult", children: null}, " 业绩档案")));
                        }
                        break;
                    case "人事管理系统":
                        if (flag) {
                            str = React.createElement("ul", {className: "nav-item"}, React.createElement("li", null, "人事管理"), React.createElement("li", null, React.createElement("a", {Vm: new alinkFile.ui.ALinkVm(true), href: "x#$$module/HospPerformance/HumanResource/MRP_Department", children: null}, " 部门管理")), React.createElement("li", null, React.createElement("a", {Vm: new alinkFile.ui.ALinkVm(true), href: "x#$$module/HospPerformance/HumanResource/Ataw_UsersDetail", children: null}, " 人员管理")), React.createElement("li", null, React.createElement("a", {Vm: new alinkFile.ui.ALinkVm(true), href: "x#$$module/HospPerformance/HumanResource/performance_hr_Salary_Item", children: null}, " 薪资项目")));
                        }
                        else {
                            str = React.createElement("ul", {className: "nav"}, React.createElement("li", null, "人事管理"), React.createElement("li", {className: "nav-item"}, React.createElement("a", {Vm: new alinkFile.ui.ALinkVm(true), href: "x#$$module/HospPerformance/HumanResource/MRP_Department", children: null}, " 部门管理")), React.createElement("li", {className: "nav-item"}, React.createElement("a", {Vm: new alinkFile.ui.ALinkVm(true), href: "x#$$module/HospPerformance/HumanResource/Ataw_UsersDetail", children: null}, " 人员管理")), React.createElement("li", {className: "nav-item"}, React.createElement("a", {Vm: new alinkFile.ui.ALinkVm(true), href: "x#$$module/HospPerformance/HumanResource/performance_hr_Salary_Item", children: null}, " 薪资项目")));
                        }
                        break;
                    case "总务管理系统":
                        if (flag) {
                            str = React.createElement("ul", {className: "nav-item"}, React.createElement("li", null, "总务管理"), React.createElement("li", null, React.createElement("a", {Vm: new alinkFile.ui.ALinkVm(true), href: "x#$$module/HospPerformance/GeneralAffairs/performance_affairs_Type_Tree", children: null}, " 业务管理")), React.createElement("li", null, React.createElement("a", {Vm: new alinkFile.ui.ALinkVm(true), href: "x#$$module/HospPerformance/GeneralAffairs/performance_affairs_Appraisal", children: null}, " 绩效考核")));
                        }
                        else {
                            str = React.createElement("ul", {className: "nav"}, React.createElement("li", null, "总务管理"), React.createElement("li", {className: "nav-item"}, React.createElement("a", {Vm: new alinkFile.ui.ALinkVm(true), href: "x#$$module/HospPerformance/GeneralAffairs/performance_affairs_Type_Tree", children: null}, " 业务管理")), React.createElement("li", {className: "nav-item"}, React.createElement("a", {Vm: new alinkFile.ui.ALinkVm(true), href: "x#$$module/HospPerformance/GeneralAffairs/performance_affairs_Appraisal", children: null}, " 绩效考核")));
                        }
                        break;
                    case "在线办公":
                        if (flag) {
                            str = React.createElement("ul", {className: "nav-item"}, React.createElement("li", null, "在线办公"), React.createElement("li", null, React.createElement("a", {Vm: new alinkFile.ui.ALinkVm(true), href: "x#$$module/ExtraWork/extraWork", children: null}, " 日常事务")), React.createElement("li", null, React.createElement("a", {Vm: new alinkFile.ui.ALinkVm(true), href: "x#$$module/OfficialDocument/officialDocument", children: null}, " 综合事务")), React.createElement("li", null, React.createElement("a", {Vm: new alinkFile.ui.ALinkVm(true), href: "x#$$module/ExtraWork/adminExtraWork", children: null}, " 日常事务管理 ")));
                        }
                        else {
                            str = React.createElement("ul", {className: "nav"}, React.createElement("li", null, "在线办公"), React.createElement("li", {className: "nav-item"}, React.createElement("a", {Vm: new alinkFile.ui.ALinkVm(true), href: "x#$$module/ExtraWork/extraWork", children: null}, " 日常事务")), React.createElement("li", {className: "nav-item"}, React.createElement("a", {Vm: new alinkFile.ui.ALinkVm(true), href: "x#$$module/OfficialDocument/officialDocument", children: null}, " 综合事务")), React.createElement("li", {className: "nav-item"}, React.createElement("a", {Vm: new alinkFile.ui.ALinkVm(true), href: "x#$$module/ExtraWork/adminExtraWork", children: null}, " 日常事务管理")));
                        }
                        break;
                    case "院长管理系统":
                        if (flag) {
                            str = React.createElement("ul", {className: "nav-item"}, React.createElement("li", null, "院长管理系统"), React.createElement("li", null, React.createElement("a", {Vm: new alinkFile.ui.ALinkVm(true), href: "x#$$module/HospPerformance/Director/performance_director_Appraisal_DeptResult", children: null}, " 部门考核统计")), React.createElement("li", null, React.createElement("a", {Vm: new alinkFile.ui.ALinkVm(true), href: "x#$$module/HospPerformance/Director/performance_director_Appraisal_UserResult", children: null}, " 员工考核统计")));
                        }
                        else {
                            str = React.createElement("ul", {className: "nav"}, React.createElement("li", null, "院长管理系统"), React.createElement("li", {className: "nav-item"}, React.createElement("a", {Vm: new alinkFile.ui.ALinkVm(true), href: "x#$$module/HospPerformance/Director/performance_director_Appraisal_DeptResult", children: null}, " 部门考核统计")), React.createElement("li", {className: "nav-item"}, React.createElement("a", {Vm: new alinkFile.ui.ALinkVm(true), href: "x#$$module/HospPerformance/Director/performance_director_Appraisal_UserResult", children: null}, " 员工考核统计")));
                        }
                        break;
                    case "部门管理系统":
                        if (flag) {
                            str = React.createElement("ul", {className: "nav-item"}, React.createElement("li", null, "部门管理系统"), React.createElement("li", null, React.createElement("a", {Vm: new alinkFile.ui.ALinkVm(true), href: "x#$$module/HospPerformance/Department/performance_department_Appraisal_DeptResult", children: null}, " 部门考核统计")), React.createElement("li", null, React.createElement("a", {Vm: new alinkFile.ui.ALinkVm(true), href: "x#$$module/HospPerformance/Department/performance_department_Appraisal_UserResult", children: null}, " 员工考核统计")));
                        }
                        else {
                            str = React.createElement("ul", {className: "nav"}, React.createElement("li", null, "部门管理系统"), React.createElement("li", {className: "nav-item"}, React.createElement("a", {Vm: new alinkFile.ui.ALinkVm(true), href: "x#$$module/HospPerformance/Department/performance_department_Appraisal_DeptResult", children: null}, " 部门考核统计")), React.createElement("li", {className: "nav-item"}, React.createElement("a", {Vm: new alinkFile.ui.ALinkVm(true), href: "x#$$module/HospPerformance/Department/performance_department_Appraisal_UserResult", children: null}, " 员工考核统计")));
                        }
                        break;
                }
                return str;
            };
            HosWorkBenchPageVm.prototype.init = function (config) {
            };
            HosWorkBenchPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                //工作流
                this.WorkBenchObj.WorkflowItemObj.loadData(function () {
                    callback();
                });
                if (window["SysAtawObj"]) {
                    if (window["SysAtawObj"]["NickName"]) {
                        this.NickName = window["SysAtawObj"]["NickName"];
                    }
                }
                else {
                    this.NickName = "{未知用户}";
                }
                urlFile.Core.AkPost("/right/Menu/GetAllTree?regname=MenuTreeCodeTable", {}, function (a) {
                    var _treeObj = a;
                    _this.DataMenuList = [];
                    _this.DataNavList = [];
                    var flag = true;
                    if (_treeObj.Children.length == 1) {
                        flag = false;
                    }
                    _treeObj.Children.map(function (a) {
                        var str = _this.selectMenu(a.CODE_TEXT);
                        if (str != "") {
                            _this.DataMenuList.push(str);
                        }
                        var navselect = _this.selectNav(a.CODE_TEXT, flag);
                        if (navselect != "") {
                            _this.DataNavList.push(navselect);
                        }
                    });
                    urlFile.Core.AkPost("/HospPerformance/WorkBench/GetWorkBenchData", {}, function (a) {
                        if (a) {
                            var _data = a.Data;
                            _this.RowData = _data;
                            _this.RowData.Name = _data.Name;
                            _this.RowData.JobTitle = _data.JobTitle;
                            _this.RowData.DeptMent = _data.DeptMent;
                            _this.RowData.FID = _data.FID;
                            _this.RowData.Notice = _data.Notice;
                            // this.FeedPage = []
                            _this.RowList = [];
                            _this.RowData.Notice.map(function (data, index) {
                                var masterData = { RowData: data };
                                var Data = new detailRowFile.HosWorkRowDomDom.HosWorkRowDomDomVm(masterData);
                                _this.RowList.push(Data);
                            });
                            if (callback) {
                                callback();
                            }
                        }
                    }, { async: false });
                }, { async: false });
            };
            return HosWorkBenchPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        HosWorkBenchPage.HosWorkBenchPageVm = HosWorkBenchPageVm;
        var HosWorkBenchPageStates = (function (_super) {
            __extends(HosWorkBenchPageStates, _super);
            function HosWorkBenchPageStates() {
                _super.apply(this, arguments);
            }
            return HosWorkBenchPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        HosWorkBenchPage.HosWorkBenchPageStates = HosWorkBenchPageStates;
        var HosWorkBenchPageProps = (function (_super) {
            __extends(HosWorkBenchPageProps, _super);
            function HosWorkBenchPageProps() {
                _super.apply(this, arguments);
            }
            return HosWorkBenchPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        HosWorkBenchPage.HosWorkBenchPageProps = HosWorkBenchPageProps;
        iocFile.Core.Ioc.Current().RegisterType("HosWorkBenchPage", basewedPageFile.Web.BaseWebPageVm, HosWorkBenchPageVm);
    })(HosWorkBenchPage = exports.HosWorkBenchPage || (exports.HosWorkBenchPage = {}));
});
