var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/Ioc", "react", "./../../../../01core/Url", "./../../../../04page/BaseWebPage", "./CombinationExamItemSearchDow", "./CombinationExamItemGridFromDow", "./../../../../05tool/Pagination", "./../../../../05tool/Button", "./../../../../01core/Event"], function (require, exports, iocFile, React, urlFile, basewedPageFile, searchFormFile, gridFormFile, pagination, buttonFile, eventFile) {
    "use strict";
    var CombinationExamItemListPage;
    (function (CombinationExamItemListPage) {
        var CombinationExamItemListPageAction = (function (_super) {
            __extends(CombinationExamItemListPageAction, _super);
            function CombinationExamItemListPageAction() {
                _super.apply(this, arguments);
            }
            return CombinationExamItemListPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        CombinationExamItemListPage.CombinationExamItemListPageAction = CombinationExamItemListPageAction;
        var CombinationExamItemListPageReact = (function (_super) {
            __extends(CombinationExamItemListPageReact, _super);
            function CombinationExamItemListPageReact() {
                _super.apply(this, arguments);
                this.state = new CombinationExamItemListPageStates();
            }
            CombinationExamItemListPageReact.prototype.pSender = function () {
                var _ff = React.createElement("div", {className: "row acsScroll acsMargin3"}, React.createElement("div", {className: "main acs-fixed-top"}, this.props.Vm.SearchFormVm.intoDom(), React.createElement("div", {className: "acs-grids"}, React.createElement("div", {className: "button-bar"}, this.createButtons()), this.props.Vm.PaginationVm.intoDom(), this.props.Vm.GridFormVm.intoDom(), this.props.Vm.PaginationVm.intoDom())));
                return _ff;
            };
            CombinationExamItemListPageReact.prototype.createButtons = function () {
                return React.createElement("ul", {className: "button-group radius"}, this.props.Vm.PageBtnList.map(function (btn) {
                    return React.createElement("li", null, btn.intoDom());
                }), this.props.Vm.DataBtnList.map(function (btn) {
                    return React.createElement("li", null, btn.intoDom());
                }));
            };
            return CombinationExamItemListPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        CombinationExamItemListPage.CombinationExamItemListPageReact = CombinationExamItemListPageReact;
        var CombinationExamItemListPageVm = (function (_super) {
            __extends(CombinationExamItemListPageVm, _super);
            function CombinationExamItemListPageVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = CombinationExamItemListPageReact;
                this.CheckBoxList = new Array();
                this.DataBtnList = new Array();
                this.PageBtnList = new Array();
                this.UniId = "";
                this.UniId = eventFile.App.getUniId().toString();
                var searchConfig = { UniId: this.UniId };
                this.SearchFormVm = new searchFormFile.CombinationExamItemSearchDow.CombinationExamItemSearchDowVm(searchConfig);
                this.initBtnList();
                this.listenAppEvent("loadpagedata", this.UniId, function (pageIndex) {
                    _this.loadPageData(pageIndex);
                });
            }
            CombinationExamItemListPageVm.prototype.insertOpt = function () {
                urlFile.Core.AkUrl.Current().openUrl("$panelCombinationExamIteminsertpage$", true);
            };
            CombinationExamItemListPageVm.prototype.viewOpt = function (vals) {
                urlFile.Core.AkUrl.Current().openUrl("$panelCombinationExamItemdetailpage$" + vals + "$", true);
            };
            CombinationExamItemListPageVm.prototype.updateOpt = function (vals) {
                urlFile.Core.AkUrl.Current().openUrl("$panelCombinationExamItemUPDATEPAGE$" + vals + "$", true);
            };
            CombinationExamItemListPageVm.prototype.delOpt = function (vals) {
                urlFile.Core.AkUrl.Current().openUrl("$panelroleupdate$" + vals + "$", true);
            };
            CombinationExamItemListPageVm.prototype.getSelectValues = function () {
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
            CombinationExamItemListPageVm.prototype.buttonClickCommond = function (obj) {
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
            CombinationExamItemListPageVm.prototype.initBtnList = function () {
                var _this = this;
                var btnVm = new buttonFile.ui.ButtonVm();
                btnVm.DisplayName = "新增";
                btnVm.NoEnable = false;
                this.PageBtnList.push(btnVm);
                var btnVm1 = new buttonFile.ui.ButtonVm();
                btnVm1.DisplayName = "删除";
                btnVm1.NoEnable = true;
                var btnVm2 = new buttonFile.ui.ButtonVm();
                btnVm2.DisplayName = "编辑";
                btnVm2.NoEnable = true;
                var btnVm3 = new buttonFile.ui.ButtonVm();
                btnVm3.DisplayName = "详情";
                btnVm3.NoEnable = true;
                this.DataBtnList.push(btnVm1);
                this.DataBtnList.push(btnVm2);
                this.DataBtnList.push(btnVm3);
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
            CombinationExamItemListPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                urlFile.Core.AkPost("/core/WebService/Method?resolver=JsonMethod", { json: "CombinationExamItemListData.json" }, function (a) {
                    _this.PagerListData = a;
                    _this.PaginationVm = new pagination.tool.PaginationVm();
                    var pager = _this.PagerListData.Pager;
                    _this.PaginationVm.PageNo = pager.PageNo;
                    _this.PaginationVm.PageSize = pager.PageSize;
                    _this.PaginationVm.TotalCount = pager.TotalCount;
                    var gridFormConfig = { Data: _this.PagerListData.ListData };
                    _this.GridFormVm = new gridFormFile.CombinationExamItemGridFromDow.CombinationExamItemGridFromDowVm(gridFormConfig);
                    _this.GridFormVm.RowList.forEach(function (row) {
                        _this.CheckBoxList.push(row.SingleCheckVm);
                        row.SingleCheckVm.ChangeEventFun = function (val, col) {
                            _this.checkCheckBox(val, col);
                            return true;
                        };
                    });
                    _this.AllCheck = _this.GridFormVm.AllCheck;
                    _this.AllCheck.ChangeEventFun = function (val, col) {
                        _this.allCheckChecked(val, col);
                        return true;
                    };
                    if (callback) {
                        callback();
                    }
                });
            };
            CombinationExamItemListPageVm.prototype.checkCheckBox = function (val, checkDom) {
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
            CombinationExamItemListPageVm.prototype.allCheckChecked = function (val, checkDom) {
                if (!window["isHand"]) {
                    //this.CheckBoxList.forEach((chk) => {
                    //    chk.reactDataValueSet(val);
                    //});
                    this.GridFormVm.RowList.forEach(function (row) {
                        var chk = row.SingleCheckVm;
                        chk.reactDataValueSet(val);
                    });
                }
            };
            CombinationExamItemListPageVm.prototype.loadPageData = function (pageIndex) {
            };
            return CombinationExamItemListPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        CombinationExamItemListPage.CombinationExamItemListPageVm = CombinationExamItemListPageVm;
        var CombinationExamItemListPageStates = (function (_super) {
            __extends(CombinationExamItemListPageStates, _super);
            function CombinationExamItemListPageStates() {
                _super.apply(this, arguments);
            }
            return CombinationExamItemListPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        CombinationExamItemListPage.CombinationExamItemListPageStates = CombinationExamItemListPageStates;
        var CombinationExamItemListPageProps = (function (_super) {
            __extends(CombinationExamItemListPageProps, _super);
            function CombinationExamItemListPageProps() {
                _super.apply(this, arguments);
            }
            return CombinationExamItemListPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        CombinationExamItemListPage.CombinationExamItemListPageProps = CombinationExamItemListPageProps;
        iocFile.Core.Ioc.Current().RegisterType("CombinationExamItemLISTPAGE", basewedPageFile.Web.BaseWebPageVm, CombinationExamItemListPageVm);
    })(CombinationExamItemListPage = exports.CombinationExamItemListPage || (exports.CombinationExamItemListPage = {}));
});
