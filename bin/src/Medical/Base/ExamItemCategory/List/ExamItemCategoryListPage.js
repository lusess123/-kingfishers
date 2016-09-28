var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/Ioc", "react", "./../../../../01core/Url", "./../../../../04page/BaseWebPage", "./../../../../05tool/Pagination", "./../../../../05tool/Button", "./../../../../01core/Event", "./ExamItemCategoryGridFormDom"], function (require, exports, iocFile, React, urlFile, basewedPageFile, pagination, buttonFile, eventFile, gridFormFile) {
    "use strict";
    var ExamItemCategoryListPage;
    (function (ExamItemCategoryListPage) {
        var ExamItemCategoryListPageAction = (function (_super) {
            __extends(ExamItemCategoryListPageAction, _super);
            function ExamItemCategoryListPageAction() {
                _super.apply(this, arguments);
            }
            return ExamItemCategoryListPageAction;
        }(basewedPageFile.Web.BaseWebPageAction));
        ExamItemCategoryListPage.ExamItemCategoryListPageAction = ExamItemCategoryListPageAction;
        var ExamItemCategoryListPageReact = (function (_super) {
            __extends(ExamItemCategoryListPageReact, _super);
            function ExamItemCategoryListPageReact() {
                _super.apply(this, arguments);
                this.state = new ExamItemCategoryListPageStates();
            }
            ExamItemCategoryListPageReact.prototype.pSender = function () {
                var bb = React.createElement("div", {className: "acsScroll"}, React.createElement("div", {className: "col-lg-10 col-md-12 col-sm-12 col-xs-12 Hm-center-content"}, React.createElement("div", {className: "acs-grids"}, React.createElement("div", {className: "button-bar"}, this.props.Vm.initButtons()), React.createElement("div", {className: "topPager"}, this.props.Vm.PaginationVm.intoDom()), this.props.Vm.GridFormVm.intoDom(), React.createElement("div", {className: "bottomPager"}, " ", this.props.Vm.PaginationVm.intoDom()))));
                return bb;
            };
            ExamItemCategoryListPageReact.prototype.createButtons = function () {
                return React.createElement("ul", {className: "button-group radius"}, this.props.Vm.PageBtnList.map(function (a) {
                    return React.createElement("li", null, a.intoDom());
                }), this.props.Vm.DataBtnList.map(function (a) {
                    return React.createElement("li", null, a.intoDom());
                }));
            };
            return ExamItemCategoryListPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        ExamItemCategoryListPage.ExamItemCategoryListPageReact = ExamItemCategoryListPageReact;
        var ExamItemCategoryListPageVm = (function (_super) {
            __extends(ExamItemCategoryListPageVm, _super);
            function ExamItemCategoryListPageVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = ExamItemCategoryListPageReact;
                this.PageBtnList = new Array();
                this.DataBtnList = new Array();
                this.UniId = "";
                this.CheckBoxList = new Array();
                this.UniId = eventFile.App.getUniId().toString();
                this.listenAppEvent("loadpagedata", this.UniId, function (pageIndex) {
                    _this.loadPageData(pageIndex);
                });
                this.listenAppEvent("medical/base/user/rowbtnclick", this.UniId, function (btnName, fid) {
                    _this[btnName + "Opt"](fid);
                });
            }
            ExamItemCategoryListPageVm.prototype.init = function (config) {
                var _this = this;
                this.PagerListData = config.PagerListData;
                this.PaginationVm = new pagination.tool.PaginationVm();
                var pager = this.PagerListData.Pager;
                this.PaginationVm.PageNo = pager.PageNo;
                this.PaginationVm.PageSize = pager.PageSize;
                this.PaginationVm.TotalCount = pager.TotalCount;
                this.PaginationVm.PageClickEvent = function (pageIndex) {
                    _this.loadPageData(pageIndex);
                };
                var gridFormConfig = { Data: this.PagerListData.ListData, UniId: this.UniId };
                this.GridFormVm = new gridFormFile.ExamItemCategoryGridFormDom.ExamItemCategoryGridFormDomVm(gridFormConfig);
                this.GridFormVm.RowList.forEach(function (row) {
                    _this.CheckBoxList.push(row.SingleCheckVm);
                    row.SingleCheckVm.ChangeEventFun = function (val, col) {
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
            ExamItemCategoryListPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                urlFile.Core.AkPost("/MedicalCenter/ExamItemCategory/SearchExamItemCategory", {}, function (a) {
                    var pageConfig = { PagerListData: a.Data };
                    _this.init(pageConfig);
                    if (callback) {
                        callback();
                    }
                });
            };
            ExamItemCategoryListPageVm.prototype.initButtons = function () {
                return React.createElement("div", {className: "btn-group"}, this.createButton("新增"), this.createButton("删除"), this.createButton("详情"), this.createButton("编辑"));
            };
            ExamItemCategoryListPageVm.prototype.createButton = function (displayName) {
                var _this = this;
                var btnVm = new buttonFile.ui.ButtonVm();
                btnVm.DisplayName = displayName;
                if (displayName == "删除" || displayName == "详情" || displayName == "编辑") {
                    btnVm.NoEnable = true;
                }
                if (displayName != "新增") {
                    this.DataBtnList.push(btnVm);
                }
                btnVm.ClickFun = function (a) {
                    _this.buttonClickCommond(a);
                };
                return btnVm.intoDom();
            };
            ExamItemCategoryListPageVm.prototype.insertOpt = function () {
                urlFile.Core.AkUrl.Current().openUrl("$panelExamItemCategoryInsertPage$", true);
            };
            ExamItemCategoryListPageVm.prototype.viewOpt = function (vals) {
                urlFile.Core.AkUrl.Current().openUrl("$panelEXAMITEMCATEGORYDETAILPAGE$" + vals + "$", true);
            };
            ExamItemCategoryListPageVm.prototype.updateOpt = function (vals) {
                urlFile.Core.AkUrl.Current().openUrl("$panelExamItemCategoryUpdatePage$" + vals + "$", true);
            };
            ExamItemCategoryListPageVm.prototype.delOpt = function (vals) {
                var _this = this;
                if (confirm("你确定要删除 所选中的数据吗 ??")) {
                    urlFile.Core.AkPost("/MedicalCenter/ExamItemCategory/RemoveExamItemCategory", { fids: vals }, function (data) {
                        var _data = data.Content;
                        if (_data == "ok") {
                            _this.loadPageData(0);
                        }
                    });
                }
            };
            ExamItemCategoryListPageVm.prototype.buttonClickCommond = function (obj) {
                switch (obj.DisplayName) {
                    case "新增":
                        this.insertOpt();
                        break;
                    case "详情":
                        var _list = this.getSelectValues();
                        var _ids = _list.map(function (n) { return n.FID; }).join(",");
                        this.viewOpt(_ids);
                        break;
                    case "编辑":
                        var _list = this.getSelectValues();
                        var _ids = _list.map(function (n) { return n.FID; }).join(",");
                        this.updateOpt(_ids);
                        break;
                    case "删除":
                        var _list = this.getSelectValues();
                        var _ids = _list.map(function (n) { return n.FID; }).join(",");
                        this.delOpt(_ids);
                        break;
                    default:
                        break;
                }
            };
            ExamItemCategoryListPageVm.prototype.getSelectValues = function () {
                var _list = [];
                this.GridFormVm.RowList.forEach(function (r) {
                    var ck = r.SingleCheckVm;
                    if (ck.vmDataValueGet() == "true") {
                        _list.push(r.RowData);
                    }
                });
                console.log(_list);
                return _list;
            };
            ExamItemCategoryListPageVm.prototype.checkCheckBox = function (val, checkDom) {
                var rowList = this.GridFormVm.RowList;
                window["isHand"] = true;
                var isCheck = false;
                var isAllCheck = true;
                var checkedCount = 0;
                if (val == "true") {
                    isCheck = true;
                }
                rowList.forEach(function (row) {
                    var chk = row.SingleCheckVm;
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
            ExamItemCategoryListPageVm.prototype.allCheckChecked = function (val, checkDom) {
                if (!window["isHand"]) {
                    this.GridFormVm.RowList.forEach(function (row) {
                        var chk = row.SingleCheckVm;
                        chk.reactDataValueSet(val);
                    });
                }
            };
            ExamItemCategoryListPageVm.prototype.loadPageData = function (pageIndex) {
                var _this = this;
                this.GridFormVm.RowList = [];
                this.AllCheck.vmDataValueSet("false");
                this.AllCheck.forceUpdate("");
                var _page = { PageNo: pageIndex };
                urlFile.Core.AkPost("/MedicalCenter/ExamItemCategory/SearchExamItemCategory", {
                    pager: JSON.stringify(_page)
                }, function (a) {
                    var pageConfig = { PagerListData: a.Data };
                    _this.init(pageConfig);
                    _this.IsChange = true;
                    _this.forceUpdate("");
                });
            };
            return ExamItemCategoryListPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        ExamItemCategoryListPage.ExamItemCategoryListPageVm = ExamItemCategoryListPageVm;
        var ExamItemCategoryListPageStates = (function (_super) {
            __extends(ExamItemCategoryListPageStates, _super);
            function ExamItemCategoryListPageStates() {
                _super.apply(this, arguments);
            }
            return ExamItemCategoryListPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        ExamItemCategoryListPage.ExamItemCategoryListPageStates = ExamItemCategoryListPageStates;
        var ExamItemCategoryListPageProps = (function (_super) {
            __extends(ExamItemCategoryListPageProps, _super);
            function ExamItemCategoryListPageProps() {
                _super.apply(this, arguments);
            }
            return ExamItemCategoryListPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        ExamItemCategoryListPage.ExamItemCategoryListPageProps = ExamItemCategoryListPageProps;
        iocFile.Core.Ioc.Current().RegisterType("EXAMITEMCATEGORYLISTPAGE", basewedPageFile.Web.BaseWebPageVm, ExamItemCategoryListPageVm);
    })(ExamItemCategoryListPage = exports.ExamItemCategoryListPage || (exports.ExamItemCategoryListPage = {}));
});
