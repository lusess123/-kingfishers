var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/Ioc", "./../../../01core/Url", "./../../../04page/BaseWebPage", "./../../../05tool/Pagination", "react", "./../../../01core/Event", "./../../../05tool/Button", "./insertSearchFormDom", "./insertTableDom"], function (require, exports, iocFile, urlFile, basewedPageFile, pagination, React, eventFile, buttonFile, searchFormFile, gridFormFile) {
    "use strict";
    var DepartmentInsertPage;
    (function (DepartmentInsertPage) {
        var DepartmentInsertPageAction = (function (_super) {
            __extends(DepartmentInsertPageAction, _super);
            function DepartmentInsertPageAction() {
                _super.apply(this, arguments);
            }
            return DepartmentInsertPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        DepartmentInsertPage.DepartmentInsertPageAction = DepartmentInsertPageAction;
        var DepartmentInsertPageReact = (function (_super) {
            __extends(DepartmentInsertPageReact, _super);
            function DepartmentInsertPageReact() {
                _super.apply(this, arguments);
                this.state = new DepartmentInsertPageStates();
            }
            DepartmentInsertPageReact.prototype.pSender = function () {
                return (React.createElement("div", {className: "container-fluid ui-dpt-insert"}, React.createElement("div", {className: "row-fluid"}, React.createElement("div", {className: "YSm-handle ui-dpt-search"}, this._tDom(this.props.Vm.SearchFormVm, { nullNode: React.createElement("span", null, "没有搜索区") })), React.createElement("div", {"classNameui-dpt-insertlist": true}, React.createElement("div", {className: "acs-grids"}, React.createElement("div", {className: "button-bar clearfix"}, this.createButtons()), React.createElement("div", {className: "topPager ui-pager"}, this._tDom(this.props.Vm.PaginationVm)), this._tDom(this.props.Vm.GridFormVm), React.createElement("div", {className: "bottomPager ui-pager"}, this._tDom(this.props.Vm.PaginationVm)))))));
            };
            DepartmentInsertPageReact.prototype.createButtons = function () {
                var _this = this;
                return React.createElement("div", {className: "btn-group"}, this.props.Vm.PageBtnList.map(function (btn) {
                    return _this._tDom(btn);
                }), this.props.Vm.DataBtnList.map(function (btn) {
                    return _this._tDom(btn);
                }));
            };
            return DepartmentInsertPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        DepartmentInsertPage.DepartmentInsertPageReact = DepartmentInsertPageReact;
        var DepartmentInsertPageVm = (function (_super) {
            __extends(DepartmentInsertPageVm, _super);
            function DepartmentInsertPageVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = DepartmentInsertPageReact;
                this.CheckBoxList = new Array();
                this.DataBtnList = new Array();
                this.PageBtnList = new Array();
                this.UniId = "";
                this.UniId = eventFile.App.getUniId().toString();
                this.initBtnList();
                var searchConfig = { UniId: this.UniId };
                //this.SearchFormVm = new searchFormFile.AnomalySearchFormDom.AnomalySearchFormDomVm(searchConfig);
                this.SearchFormVm = new searchFormFile.InsertSearchFormDom.InsertSearchFormDomVm(searchConfig);
                if (config) {
                    this.init(config);
                }
                this.listenAppEvent("medical/base/anomaly/list/loadpagedata", this.UniId, function (pageIndex) {
                    _this.loadPageData(pageIndex);
                });
                this.listenAppEvent("medical/base/anomaly/list/Sreach", this.UniId, function (code) {
                    _this.loadPageData(0, code);
                });
                this.listenAppEvent("medical/base/anomaly/rowbtnclick", this.UniId, function (btnName, fid) {
                    _this[btnName + "Opt"](fid);
                });
            }
            DepartmentInsertPageVm.prototype.initBtnList = function () {
                var _this = this;
                var btnVm = new buttonFile.ui.ButtonVm();
                btnVm.DisplayName = "录入";
                btnVm.KindCss = "btn-sm btn-primary";
                btnVm.NoEnable = false;
                this.PageBtnList.push(btnVm);
                //var btnVm1 = new buttonFile.ui.ButtonVm();
                //btnVm1.DisplayName = "删除";
                //btnVm1.NoEnable = true;
                //var btnVm3 = new buttonFile.ui.ButtonVm();
                //btnVm3.DisplayName = "详情";
                //btnVm3.NoEnable = true;
                //this.DataBtnList.push(btnVm1);
                //this.DataBtnList.push(btnVm3);
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
            DepartmentInsertPageVm.prototype.buttonClickCommond = function (obj) {
                switch (obj.DisplayName) {
                    case "录入":
                        var _list = this.getSelectValues();
                        var _ids = _list.map(function (n) { return n.ExamCode; }).join(",");
                        this.insertOpt(_ids);
                        break;
                    //case "详情":
                    //    var _list = this.getSelectValues();
                    //    var _ids = _list.map((n) => n.FID).join(",");
                    //    this.viewOpt(_ids);
                    //    break;
                    //case "删除":
                    //    var _list = this.getSelectValues();
                    //    var _ids = _list.map((n) => n.FID).join(",");
                    //    this.delOpt(_ids);
                    //    break;
                    default:
                        break;
                }
            };
            DepartmentInsertPageVm.prototype.getSelectValues = function () {
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
            DepartmentInsertPageVm.prototype.insertOpt = function (vals) {
                //urlFile.Core.AkUrl.Current().openUrl("$panelAnomalyinsertpage$", true);
                if (vals.split(',').length > 1) {
                    alert("只支持单个录入！");
                }
                else {
                    urlFile.Core.AkUrl.Current().openUrl("$DepartmentEntryPage$#$DepartmentEntryPage$" + vals + "$", false);
                }
            };
            //public delOpt(vals: string) {
            //    if (confirm("你确定要删除 所选中的数据吗 ？？")) {
            //        //urlFile.Core.AkPost("/MedicalCenter/Anomaly/RemoveAnomalies", { fids: vals }, (data) => {
            //        //    var _data = data.Content;
            //        //    if (_data == "ok") {
            //        //        this.loadPageData(0);
            //        //    }
            //        //});
            //        console.log("删除");
            //    }
            //}
            DepartmentInsertPageVm.prototype.init = function (config) {
                var _this = this;
                this.PagerListData = config.PagerListdata;
                this.PaginationVm = new pagination.tool.PaginationVm();
                var pager = this.PagerListData.Pager;
                this.PaginationVm.PageNo = pager.PageNo;
                this.PaginationVm.PageSize = pager.PageSize;
                this.PaginationVm.TotalCount = pager.TotalCount;
                this.PaginationVm.PageClickEvent = function (pageIndex) {
                    _this.loadPageData(pageIndex);
                };
                var gridFormConfig = { Data: this.PagerListData.List, UniId: this.UniId };
                this.GridFormVm = new gridFormFile.InsertGridFormDom.InsertGridFormDomVm(gridFormConfig);
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
                this.forceUpdate("");
            };
            DepartmentInsertPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                //urlFile.Core.AkPost("/MedicalCenter/Anomaly/SearchAnomalies", {}, (a) => {
                //this.PagerListData = { Pager: { PageSize:3,PageNo: 1 }, List:[] }
                var data = this.PagerListData;
                //var pageConfig: DepartInsertConfig = { PagerListdata: { Pager: { PageNo: 4, PageSize: 1, TableName: "", TotalCount: 2, DataTime: new Date, IsASC: false, SortName: "" }, List: [] } };
                //var datatable = {
                //    FID: "85963046",
                //    Name: "akdfjaskdf",
                //    IDCard: "438952306054",
                //    ExamCode: "5346778980",
                //    RecordID: "248590679078",
                //    Unit: "54346554",
                //    State: "3956094654"
                //}
                urlFile.Core.AkPost("/MedicalCenter/Result/getList", {}, function (a) {
                    if (a) {
                        var pageConfig = { PagerListdata: { Pager: { PageNo: 4, PageSize: 1, TableName: "", TotalCount: 2, DataTime: new Date, IsASC: false, SortName: "" }, List: [] } };
                        pageConfig.PagerListdata.List = a.Data.ListData;
                        pageConfig.PagerListdata.Pager = a.Data.Pager;
                        _this.init(pageConfig);
                    }
                });
                if (callback) {
                    callback();
                }
            };
            DepartmentInsertPageVm.prototype.checkCheckBox = function (val, checkDom) {
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
            DepartmentInsertPageVm.prototype.allCheckChecked = function (val, checkDom) {
                if (!window["isHand"]) {
                    this.GridFormVm.RowList.forEach(function (row) {
                        var chk = row.SingleCheckboxVm;
                        chk.reactDataValueSet(val);
                    });
                }
            };
            DepartmentInsertPageVm.prototype.loadPageData = function (pageIndex, code) {
                var _this = this;
                this.GridFormVm.RowList = [];
                this.AllCheck.vmDataValueSet("false");
                this.AllCheck.forceUpdate("");
                var _page = { PageNo: pageIndex };
                urlFile.Core.AkPost("/MedicalCenter/Result/getList", {
                    pager: JSON.stringify(_page),
                    simpleCode: this.SearchFormVm.SearchSimpleCode,
                    code: this.SearchFormVm.SearchName
                }, function (a) {
                    // var _data: dataFile.Anomaly.AbnomalPagerListData= a.Data;
                    // document.title = this.Title = "菜单列表，第" + (pageIndex + 1) + "页，总共" + _data.Pager.TotalCount + "条";
                    // this.getData(_data);
                    //this.PagerListData = _data;
                    var pageConfig = { PagerListdata: { Pager: { PageNo: 4, PageSize: 1, TableName: "", TotalCount: 2, DataTime: new Date, IsASC: false, SortName: "" }, List: [] } };
                    pageConfig.PagerListdata.List = a.Data.ListData;
                    pageConfig.PagerListdata.Pager = a.Data.Pager;
                    _this.init(pageConfig);
                    //this.IsChange = true;
                    // var _d0: Date = new Date();
                    //this.forceUpdate("");
                    // this.GridFormVm.forceUpdate("");
                });
            };
            return DepartmentInsertPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        DepartmentInsertPage.DepartmentInsertPageVm = DepartmentInsertPageVm;
        var DepartmentInsertPageStates = (function (_super) {
            __extends(DepartmentInsertPageStates, _super);
            function DepartmentInsertPageStates() {
                _super.apply(this, arguments);
            }
            return DepartmentInsertPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        DepartmentInsertPage.DepartmentInsertPageStates = DepartmentInsertPageStates;
        var DepartmentInsertPageProps = (function (_super) {
            __extends(DepartmentInsertPageProps, _super);
            function DepartmentInsertPageProps() {
                _super.apply(this, arguments);
            }
            return DepartmentInsertPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        DepartmentInsertPage.DepartmentInsertPageProps = DepartmentInsertPageProps;
        iocFile.Core.Ioc.Current().RegisterType("DepartmentInsertPage", basewedPageFile.Web.BaseWebPageVm, DepartmentInsertPageVm);
    })(DepartmentInsertPage = exports.DepartmentInsertPage || (exports.DepartmentInsertPage = {}));
});
