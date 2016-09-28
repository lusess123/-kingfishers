var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/Ioc", "./../../01core/Util", "./../../01core/Url", "./../../04page/BaseWebPage", "./../../05tool/Pagination", "react", "./../../05tool/Button", "./../../02col/02Mulite/SingleCheckBox", "./AppointmentGridRowMaster"], function (require, exports, iocFile, utilFile, urlFile, basewedPageFile, pagination, React, buttonFile, singleCheckFile, AppointmentDomFile) {
    "use strict";
    var AppointmentPage;
    (function (AppointmentPage) {
        var AppointmentPageAction = (function (_super) {
            __extends(AppointmentPageAction, _super);
            function AppointmentPageAction() {
                _super.apply(this, arguments);
            }
            return AppointmentPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        AppointmentPage.AppointmentPageAction = AppointmentPageAction;
        var AppointmentPageReact = (function (_super) {
            __extends(AppointmentPageReact, _super);
            function AppointmentPageReact() {
                _super.apply(this, arguments);
                this.state = new AppointmentPageStates();
            }
            AppointmentPageReact.prototype.pSender = function () {
                var quantity = this._initQuantity();
                var header = this.initHeader();
                var body = this.initBody();
                var handle = this._initHandle();
                var groupBtn = this.initBtns();
                var pager = this._initPager();
                return React.createElement("div", null, quantity, handle, React.createElement("div", {className: "YSm-table"}, groupBtn, React.createElement("div", {className: "table-responsive"}, React.createElement("table", {className: "table table-striped table-bordered table-hover"}, header, body), pager)));
            };
            AppointmentPageReact.prototype._initQuantity = function () {
                return React.createElement("div", {className: "YSm-quantity clearfix"}, React.createElement("div", {className: "col-lg-4 col-md-4 col-sm-4 col-xs-12 "}, React.createElement("div", {className: "panel panel-danger"}, React.createElement("p", null, "总预约量："), React.createElement("h2", null, "25666"))), React.createElement("div", {className: "col-lg-4 col-md-4 col-sm-4 col-xs-12 "}, React.createElement("div", {className: "panel panel-info"}, React.createElement("p", null, "今日预约量："), React.createElement("h2", null, "5666"))), React.createElement("div", {className: "col-lg-4 col-md-4 col-sm-4 col-xs-12"}, React.createElement("div", {className: "panel panel-success"}, React.createElement("p", null, "我的预约量："), React.createElement("h2", null, "66"))));
            };
            AppointmentPageReact.prototype._initHandle = function () {
                var _this = this;
                return React.createElement("div", {className: "YSm-handle"}, React.createElement("div", {className: "col-lg-6 col-md-6 YSm-search"}, React.createElement("input", {className: "col-lg-11 col-md-10 YSu-border-blue ", type: "text", placeholder: "输入身份证、体检号、档案号查询"}), React.createElement("a", {className: "col-lg-1 col-md-2 btn btn-primary"}, "查询")), React.createElement("a", {className: "btn btn-primary", onClick: function () { _this.props.Vm.newOpt(); }}, React.createElement("i", {className: "fa fa-plus"}), "新增预约"), React.createElement("a", {href: "", className: "YSu-link"}, "历史数据查询"));
            };
            AppointmentPageReact.prototype.initHeader = function () {
                return (React.createElement("thead", {className: "thead-default"}, React.createElement("tr", null, React.createElement("th", null, React.createElement("i", {className: "fa fa-square-o"}, this.props.Vm.AllCheck.intoDom())), React.createElement("th", null, "预约人"), React.createElement("th", null, "身份证"), React.createElement("th", null, "来检时间"), React.createElement("th", null, "预约套餐"), React.createElement("th", null, "预约项目"))));
            };
            AppointmentPageReact.prototype.initBtns = function () {
                return (React.createElement("div", {className: "YSm-table-btngroup"}, React.createElement("a", {className: "btn btn-sm btn-primary"}, this._createBtn("登记")), React.createElement("div", {className: "btn-group btn-group-sm"}, React.createElement("button", {type: "button", className: "btn btn-primary-outline"}, this._createBtn("删除")), React.createElement("button", {type: "button", className: "btn btn-primary-outline"}, this._createBtn("编辑")))));
            };
            AppointmentPageReact.prototype._createBtn = function (displayName) {
                var _this = this;
                var btnVm = new buttonFile.ui.ButtonVm();
                btnVm.DisplayName = displayName;
                if (displayName == "删除" || displayName == "编辑") {
                    btnVm.NoEnable = false;
                }
                if (displayName != "登记") {
                    this.props.Vm.BtnList.push(btnVm);
                }
                btnVm.ClickFun = function (a) {
                    _this.props.Vm.btnClickCommond(a);
                };
                return btnVm.intoDom();
            };
            AppointmentPageReact.prototype._initPager = function () {
                var _this = this;
                var pagerVm = new pagination.tool.PaginationVm();
                var pager = this.props.Vm.ListData.Pager;
                pagerVm.PageNo = pager.PageNo;
                pagerVm.PageSize = pager.PageSize;
                pagerVm.TotalCount = pager.TotalCount;
                pagerVm.PageClickEvent = function (pageIndex) {
                    _this.props.Vm.loadPageData(pageIndex);
                };
                return pagerVm.intoDom();
            };
            AppointmentPageReact.prototype.creatSingleCheckBox = function (obj) {
                var _this = this;
                var singleCheckVm = new singleCheckFile.ui.SingleCheckBoxVm();
                singleCheckVm.Tag = obj;
                this.props.Vm.CheckBoxList.push(singleCheckVm);
                singleCheckVm.ChangeEventFun = (function (val, col) {
                    _this.props.Vm.checkCheckBox(val, col);
                    return true;
                });
                return singleCheckVm.intoDom();
            };
            AppointmentPageReact.prototype.creatGridRow = function (data, index) {
                var _this = this;
                var rowVm = new AppointmentDomFile.AppointmentGridRow.AppointmentGridRowVm();
                rowVm.RowData = data;
                rowVm.AppointObj = this.props.Vm;
                rowVm.RowNumber = index < 9 ? "0" + (index + 1) : (index + 1).toString();
                this.props.Vm.RowList.push(rowVm);
                rowVm.SingleCheckboxVm.ChangeEventFun = (function (val, col) {
                    _this.props.Vm.checkCheckBox(val, col);
                    rowVm.forceUpdate("");
                    return true;
                });
                return rowVm.intoDom();
            };
            AppointmentPageReact.prototype.initBody = function () {
                var _this = this;
                return (React.createElement("tbody", null, this.props.Vm.ListData.List.map(function (data, index) {
                    var rowVm = _this.creatGridRow(data, index);
                    return [rowVm];
                })));
            };
            return AppointmentPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        AppointmentPage.AppointmentPageReact = AppointmentPageReact;
        var AppointmentPageVm = (function (_super) {
            __extends(AppointmentPageVm, _super);
            function AppointmentPageVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = AppointmentPageReact;
                this.RowList = new Array();
                this.CheckBoxList = new Array();
                this.BtnList = new Array();
                this.AllCheck = new singleCheckFile.ui.SingleCheckBoxVm();
                this.AllCheck.ChangeEventFun = (function (val, col) {
                    _this.allCheckChecked(val, col);
                    return true;
                });
            }
            AppointmentPageVm.prototype.getSelectValues = function () {
                var _list = [];
                this.RowList.forEach(function (r) {
                    var ck = r.SingleCheckboxVm;
                    if (ck.vmDataValueGet() == "true") {
                        _list.push(r.RowData);
                    }
                });
                console.log(_list);
                return _list;
            };
            AppointmentPageVm.prototype.checkCheckBox = function (val, checkDom) {
                window["isHand"] = true;
                var isCheck = false;
                var isAllCheck = true;
                var checkCount = 0;
                if (val == "true") {
                    isCheck = true;
                }
                this.RowList.forEach(function (row) {
                    var chk = row.SingleCheckboxVm;
                    var _val = chk.dataValue();
                    if (_val == "true" && checkDom != chk) {
                        isCheck = true;
                        checkCount++;
                    }
                    if (checkDom == chk) {
                        if (val == "true") {
                            checkCount++;
                        }
                    }
                });
                isAllCheck = this.RowList.length == checkCount ? true : false;
                this.AllCheck.vmDataValueSet(isAllCheck ? "true" : "false");
                this.AllCheck.forceUpdate("", function () {
                    window["isHand"] = false;
                });
            };
            AppointmentPageVm.prototype.allCheckChecked = function (val, checkDom) {
                if (!window["isHand"]) {
                    this.CheckBoxList.forEach(function (chk) {
                        chk.reactDataValueSet(val);
                    });
                    this.RowList.forEach(function (row) {
                        var chk = row.SingleCheckboxVm;
                        chk.reactDataValueSet(val);
                    });
                }
            };
            AppointmentPageVm.prototype.init = function (config) {
            };
            //登记
            AppointmentPageVm.prototype.newOpt = function () {
                urlFile.Core.AkUrl.Current().openUrl("$ExamOrderPage$", false);
            };
            AppointmentPageVm.prototype.editOpt = function (vals) {
                //urlFile.Core.AkUrl.Current().openUrl("$ExamOrderPage$", +vals +"$"，false);
                alert("您点击了编辑");
            };
            AppointmentPageVm.prototype.delOpt = function (vals) {
                if (confirm("您确定要删除您选中的数据吗？")) {
                    utilFile.Core.Util.Noty("数据删除成功!");
                }
            };
            AppointmentPageVm.prototype.btnClickCommond = function (obj) {
                switch (obj.DisplayName) {
                    case "登记":
                        this.newOpt();
                        break;
                    case "删除":
                        var _list = this.getSelectValues();
                        var _ids = _list.map(function (a) { a.FID; }).join(",");
                        this.delOpt(_ids);
                        break;
                    case "编辑":
                        var _list = this.getSelectValues();
                        var _ids = _list.map(function (a) { a.FID; }).join(",");
                        this.editOpt(_ids);
                        break;
                    default:
                        break;
                }
            };
            AppointmentPageVm.prototype.getData = function (model) {
                if (!model) {
                    this.ListData = { List: [], Pager: { PageNo: 0, PageSize: 10, TotalCount: 100 } };
                    var data = this.ListData;
                    var datatable1 = { FID: "00000001", ReservationNumber: "201606211708000001", MemberId: "000001", ExamDate: "2016-06-30", ExamPackage: "体检套餐A", ExamItem: "项目A，项目B， 项目C，项目D" };
                    var datatable2 = { FID: "00000002", ReservationNumber: "201606211708000002", MemberId: "000002", ExamDate: "2016-07-08", ExamPackage: "体检套餐B", ExamItem: "项目A，项目B， 项目C，项目D" };
                    var datatable3 = { FID: "00000003", ReservationNumber: "201606211708000003", MemberId: "000003", ExamDate: "2016-06-25", ExamPackage: "体检套餐C", ExamItem: "项目A，项目B， 项目C，项目D" };
                    var datatable4 = { FID: "00000004", ReservationNumber: "201606211708000004", MemberId: "000004", ExamDate: "2016-06-26", ExamPackage: "体检套餐A", ExamItem: "项目A，项目B， 项目C，项目D" };
                    var datatable5 = { FID: "00000005", ReservationNumber: "201606211708000005", MemberId: "000005", ExamDate: "2016-06-28", ExamPackage: "体检套餐D", ExamItem: "项目A，项目B， 项目C，项目D" };
                    data.List.push(datatable1);
                    data.List.push(datatable2);
                    data.List.push(datatable3);
                    data.List.push(datatable4);
                    data.List.push(datatable5);
                }
                else {
                    this.ListData = { Pager: null, List: [] };
                    this.ListData.Pager = model.Pager;
                    this.ListData.List = model.List;
                }
            };
            AppointmentPageVm.prototype.loadPageData = function (pageIndex) {
                var _page = { PageNo: pageIndex };
            };
            AppointmentPageVm.prototype.loadPage = function (callback) {
                this.getData();
                urlFile.Core.AkPost("", {}, function (a) {
                    //var _data: Data.Appointment.AppointmentPagerListData = a.data;
                    //this.getData(_data);
                    if (callback) {
                        callback();
                    }
                });
            };
            return AppointmentPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        AppointmentPage.AppointmentPageVm = AppointmentPageVm;
        var AppointmentPageStates = (function (_super) {
            __extends(AppointmentPageStates, _super);
            function AppointmentPageStates() {
                _super.apply(this, arguments);
            }
            return AppointmentPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        AppointmentPage.AppointmentPageStates = AppointmentPageStates;
        var AppointmentPageProps = (function (_super) {
            __extends(AppointmentPageProps, _super);
            function AppointmentPageProps() {
                _super.apply(this, arguments);
            }
            return AppointmentPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        AppointmentPage.AppointmentPageProps = AppointmentPageProps;
        iocFile.Core.Ioc.Current().RegisterType("AppointmentPage", basewedPageFile.Web.BaseWebPageVm, AppointmentPageVm);
    })(AppointmentPage = exports.AppointmentPage || (exports.AppointmentPage = {}));
});
