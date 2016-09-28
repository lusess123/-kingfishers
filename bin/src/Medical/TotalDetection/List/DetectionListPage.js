var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/Ioc", "./../../../01core/Url", "./../../../04page/BaseWebPage", "./../../../05tool/Pagination", "react", "./../../../01core/Event", "./../../../05tool/Button", "./DetectionSearchFormDom", "./DetectionGridDom"], function (require, exports, iocFile, urlFile, basewedPageFile, pagination, React, eventFile, buttonFile, searchFormFile, gridFormFile) {
    "use strict";
    var DetectionListPage;
    (function (DetectionListPage) {
        var DetectionListPageAction = (function (_super) {
            __extends(DetectionListPageAction, _super);
            function DetectionListPageAction() {
                _super.apply(this, arguments);
            }
            return DetectionListPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        DetectionListPage.DetectionListPageAction = DetectionListPageAction;
        var DetectionListPageReact = (function (_super) {
            __extends(DetectionListPageReact, _super);
            function DetectionListPageReact() {
                _super.apply(this, arguments);
                this.state = new DetectionListPageStates();
            }
            DetectionListPageReact.prototype.pSender = function () {
                var ff = React.createElement("div", {className: "container-fluid ui-dpt-insert"}, React.createElement("div", {className: "row-fluid"}, React.createElement("div", {className: "YSm-handle ui-dpt-search"}, this._tDom(this.props.Vm.SearchFormVm, { nullNode: React.createElement("span", null, "没有搜索区") })), React.createElement("div", {className: "ui-dpt-insertlist"}, React.createElement("div", null, this.createButtons(), this.props.Vm.GridFormVm.intoDom(), React.createElement("div", {className: "bottomPager ui-pager"}, this.props.Vm.PaginationVm.intoDom())))));
                return ff;
            };
            DetectionListPageReact.prototype.fun_Print = function () {
                this.props.Vm.btnPrint();
            };
            DetectionListPageReact.prototype.createButtons = function () {
                var _this = this;
                return React.createElement("div", {className: "YSm-table-btngroup"}, this.props.Vm.PageBtnList.map(function (btn) {
                    return _this._tDom(btn);
                }), this.props.Vm.DataBtnList.map(function (btn) {
                    return _this._tDom(btn);
                }), React.createElement("a", {className: "YSu-link", onClick: function () { _this.fun_Print(); }}, "打印体检报告"));
            };
            return DetectionListPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        DetectionListPage.DetectionListPageReact = DetectionListPageReact;
        var DetectionListPageVm = (function (_super) {
            __extends(DetectionListPageVm, _super);
            function DetectionListPageVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = DetectionListPageReact;
                this.CheckBoxList = new Array();
                this.DataBtnList = new Array();
                this.PageBtnList = new Array();
                this.UniId = "";
                this.UniId = eventFile.App.getUniId().toString();
                this.initBtnList();
                var searchConfig = { UniId: this.UniId };
                this.SearchFormVm = new searchFormFile.DetectionSearchFormDom.DetectionSearchFormDomVm(searchConfig);
                if (config) {
                    this.init(config);
                }
                this.listenAppEvent("medical/base/anomaly/list/loadpagedata", this.UniId, function (pageIndex, name) {
                    _this.loadPageData(pageIndex, name);
                });
                this.listenAppEvent("medical/base/anomaly/rowbtnclick", this.UniId, function (btnName, fid) {
                    _this[btnName + "Opt"](fid);
                });
            }
            DetectionListPageVm.prototype.initBtnList = function () {
                var _this = this;
                var btnVm = new buttonFile.ui.ButtonVm();
                btnVm.DisplayName = "总检";
                btnVm.NoEnable = false;
                btnVm.KindCss = "btn-sm btn-primary";
                this.PageBtnList.push(btnVm);
                var btnVm1 = new buttonFile.ui.ButtonVm();
                btnVm1.DisplayName = "强制总检";
                btnVm1.NoEnable = true;
                btnVm1.KindCss = "btn-sm btn-danger";
                this.DataBtnList.push(btnVm1);
                var btnVm2 = new buttonFile.ui.ButtonVm();
                btnVm2.DisplayName = "审核";
                btnVm2.NoEnable = false;
                btnVm2.KindCss = "btn-sm btn-primary";
                this.PageBtnList.push(btnVm2);
                var btnVm3 = new buttonFile.ui.ButtonVm();
                btnVm3.DisplayName = "详情";
                btnVm3.NoEnable = false;
                btnVm3.KindCss = "btn-sm btn-primary";
                this.PageBtnList.push(btnVm3);
                this.PageBtnList.forEach(function (btn) {
                    btn.ClickFun = function (a) {
                        _this.buttonClickCommond(a);
                    };
                });
                this.DataBtnList.forEach(function (btn) {
                    btn.ClickFun = function (a) {
                        _this.buttonClickCommond(a);
                    };
                });
            };
            DetectionListPageVm.prototype.buttonClickCommond = function (obj) {
                switch (obj.DisplayName) {
                    case "总检":
                        var _list = this.getSelectValues();
                        var isEnd = false;
                        if (_list.length != 1) {
                            alert("请选中一条数据");
                            return;
                        }
                        //_list.forEach((a) => {
                        //    if (a.Status == "6") {
                        //        isEnd = true;
                        //    }
                        //})
                        //if (!isEnd) {
                        //var _ids = _list.map((n) => n.FID).join(",");
                        this.totalOpt(_list[0].FID, _list[0].Status);
                        //} else {
                        //    alert("项目中有已经完成了，请重新选中")
                        //}
                        break;
                    case "强制总检":
                        var _list = this.getSelectValues();
                        //var _ids = _list.map((n) => n.FID).join(",");
                        this.coerceOpt(_list[0].FID, _list[0].Status);
                        break;
                    case "审核":
                        var _list = this.getSelectValues();
                        if (_list.length != 1) {
                            alert("请选中一条数据");
                            return;
                        }
                        this.Checked(_list[0].FID, _list[0].Status);
                        break;
                    case "详情":
                        var _list = this.getSelectValues();
                        if (_list.length != 1) {
                            alert("请选中一条数据");
                            return;
                        }
                        this.Detail(_list[0].FID, _list[0].Status);
                        break;
                    default:
                        break;
                }
            };
            DetectionListPageVm.prototype.btnPrint = function () {
                var _list = this.getSelectValues();
                for (var i = 0; i < _list.length; i++) {
                    if (_list[i].Status != "8") {
                        alert("未审查，不打印");
                        return;
                    }
                }
                var _ids = _list.map(function (n) { return n.ExamNumber; }).join(",");
                if (_list.length > 0) {
                    window.open("/MedicalCenter/PrintInsheet/TotalInsPrint?ids=" + _ids);
                }
                else {
                    alert("打印按钮不可用");
                }
            };
            DetectionListPageVm.prototype.getSelectValues = function () {
                //var _list: dataFile.Anomaly.IAnomalyData[] = [];
                var _list = [];
                this.GridFormVm.RowList.forEach(function (r) {
                    var ck = r.SingleCheckboxVm;
                    if (ck.vmDataValueGet() == "true") {
                        _list.push(r.RowData);
                    }
                });
                console.log(_list);
                return _list;
            };
            DetectionListPageVm.prototype.totalOpt = function (vals, status) {
                if (vals) {
                    if (status == "7") {
                        alert("已退款,不能进行总检");
                    }
                    else if (status == "6") {
                        alert("已总检");
                    }
                    else if (status == "8") {
                        alert("已审查,不能进行总检");
                    }
                    else if (status == "5") {
                        urlFile.Core.AkUrl.Current().openUrl("$DetectionListPage$#$DetectionInsertPage$" + vals + "$dd$", false);
                    }
                    else {
                        alert("该记录没有体检完成");
                    }
                }
                else {
                    alert("请选中一条数据！");
                }
                //alert("总检")
            };
            DetectionListPageVm.prototype.Checked = function (vals, Status) {
                //逻辑
                if (Status == "7") {
                    alert("已退款,不能进行审核！");
                }
                else if (Status == "5") {
                    alert("未总检,不能进行审核！");
                }
                else if (Status == "8") {
                    alert("已审核");
                }
                else if (Status == "6") {
                    var isChecked = true;
                    urlFile.Core.AkUrl.Current().openUrl("$DetectionListPage$#$DetectionInsertPage$" + vals + "$check$", false);
                }
                else {
                    alert("该记录没有体检完成");
                }
            };
            DetectionListPageVm.prototype.Detail = function (vals, Status) {
                var isChecked = true;
                urlFile.Core.AkUrl.Current().openUrl("$DetectionListPage$#$DetectionInsertPage$" + vals + "$true$", false);
            };
            DetectionListPageVm.prototype.coerceOpt = function (vals, status) {
                if (status == "7") {
                    alert("已退款");
                }
                else if (status == "6") {
                    alert("已总检");
                }
                else if (status == "8") {
                    alert("已审查");
                }
                else if (confirm("你确定要强制总检吗？")) {
                    urlFile.Core.AkUrl.Current().openUrl("$DetectionListPage$#$DetectionInsertPage$" + vals + "$dd$", false);
                }
                //alert("强制总检")
            };
            DetectionListPageVm.prototype.init = function (config) {
                var _this = this;
                var searchConfig = { UniId: this.UniId };
                //this.SearchFormVm = new searchFormFile.DetectionSearchFormDom.DetectionSearchFormDomVm(searchConfig);
                this.PagerListData = config.PagerListdata;
                this.PaginationVm = new pagination.tool.PaginationVm();
                var pager = this.PagerListData.Pager;
                this.PaginationVm.PageNo = pager.PageNo;
                this.PaginationVm.PageSize = pager.PageSize;
                this.PaginationVm.TotalCount = pager.TotalCount;
                this.PaginationVm.isPartHidden = true;
                this.PaginationVm.PageClickEvent = function (pageIndex) {
                    _this.loadPageData(pageIndex);
                };
                var gridFormConfig = { Data: this.PagerListData.ListData, UniId: this.UniId };
                this.GridFormVm = new gridFormFile.DetectionGridFormDom.DetectionGridFormDomVm(gridFormConfig);
                this.GridFormVm.RowList.forEach(function (row) {
                    _this.CheckBoxList.push(row.SingleCheckboxVm);
                    row.SingleCheckboxVm.ChangeEventFun = function (val, col) {
                        _this.checkCheckBox(val, col);
                        return true;
                    };
                });
                this.AllCheck = this.GridFormVm.AllCheck;
                this.AllCheck.ChangeEventFun = function (val, col) {
                    _this.allCheckChecked(val, col);
                    return true;
                };
            };
            DetectionListPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                urlFile.Core.AkPost("/MedicalCenter/TotalDetection/List", {}, function (a) {
                    var pageConfig = { PagerListdata: a.Data };
                    _this.init(pageConfig);
                    if (callback) {
                        callback();
                    }
                });
            };
            DetectionListPageVm.prototype.checkCheckBox = function (val, checkDom) {
                var rowList = this.GridFormVm.RowList;
                window["isHand"] = true;
                var isCheck = false;
                var isAllCheck = true;
                var checkedCount = 0;
                if (val == "true") {
                    isCheck = true;
                }
                rowList.forEach(function (row) {
                    var chk = row.SingleCheckboxVm;
                    var _val = chk.dataValue();
                    if (_val == "true" && checkDom != chk) {
                        isCheck = true;
                        checkedCount++;
                    }
                    if (checkDom == chk) {
                        if (val == "true") {
                            checkedCount++;
                        }
                    }
                });
                isAllCheck = rowList.length == checkedCount ? true : false;
                this.DataBtnList.forEach(function (btn) {
                    btn.NoEnable = isCheck ? false : true;
                    btn.forceUpdate("");
                });
                this.AllCheck.vmDataValueSet(isAllCheck ? "true" : "false");
                this.AllCheck.forceUpdate("", function () {
                    window["isHand"] = false;
                });
            };
            DetectionListPageVm.prototype.allCheckChecked = function (val, checkDom) {
                if (!window["isHand"]) {
                    this.GridFormVm.RowList.forEach(function (row) {
                        var chk = row.SingleCheckboxVm;
                        chk.reactDataValueSet(val);
                    });
                }
            };
            DetectionListPageVm.prototype.loadPageData = function (pageIndex, Code) {
                var _this = this;
                this.GridFormVm.RowList = [];
                this.AllCheck.vmDataValueSet("false");
                this.AllCheck.forceUpdate("");
                var _page = { PageNo: pageIndex };
                urlFile.Core.AkPost("/MedicalCenter/TotalDetection/List", {
                    page: JSON.stringify(_page),
                    unit: this.SearchFormVm.SearchName,
                    Code: Code
                }, function (a) {
                    var pageConfig = { PagerListdata: a.Data };
                    _this.init(pageConfig);
                    //this.PaginationVm.PageNo = a.Data.Pager.PageNo;
                    //this.PaginationVm.PageSize = a.Data.Pager.PageSize;
                    //this.PaginationVm.TotalCount = a.Data.Pager.TotalCount;
                    _this.PaginationVm.isPartHidden = true;
                    _this.PaginationVm.IsChange = true;
                    _this.IsChange = true;
                    _this.forceUpdate("");
                });
            };
            return DetectionListPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        DetectionListPage.DetectionListPageVm = DetectionListPageVm;
        var DetectionListPageStates = (function (_super) {
            __extends(DetectionListPageStates, _super);
            function DetectionListPageStates() {
                _super.apply(this, arguments);
            }
            return DetectionListPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        DetectionListPage.DetectionListPageStates = DetectionListPageStates;
        var DetectionListPageProps = (function (_super) {
            __extends(DetectionListPageProps, _super);
            function DetectionListPageProps() {
                _super.apply(this, arguments);
            }
            return DetectionListPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        DetectionListPage.DetectionListPageProps = DetectionListPageProps;
        iocFile.Core.Ioc.Current().RegisterType("DetectionListPage", basewedPageFile.Web.BaseWebPageVm, DetectionListPageVm);
    })(DetectionListPage = exports.DetectionListPage || (exports.DetectionListPage = {}));
});
