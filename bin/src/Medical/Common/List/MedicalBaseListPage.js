var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/Ioc", "./../../../01core/Url", "./../../../04page/BaseWebPage", "react", "./../../../05tool/Button", "./../../../01core/Event"], function (require, exports, iocFile, urlFile, basewedPageFile, React, buttonFile, eventFile) {
    "use strict";
    var MedicalBaseListPage;
    (function (MedicalBaseListPage) {
        var MedicalBaseListPageAction = (function (_super) {
            __extends(MedicalBaseListPageAction, _super);
            function MedicalBaseListPageAction() {
                _super.apply(this, arguments);
            }
            return MedicalBaseListPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        MedicalBaseListPage.MedicalBaseListPageAction = MedicalBaseListPageAction;
        var MedicalBaseListPageReact = (function (_super) {
            __extends(MedicalBaseListPageReact, _super);
            function MedicalBaseListPageReact() {
                _super.apply(this, arguments);
            }
            MedicalBaseListPageReact.prototype.pSender = function () {
                var _ff = React.createElement("div", {className: "acsScroll"}, React.createElement("div", {className: "col-lg-10 col-md-12 col-sm-12 col-xs-12 Hm-center-content"}, this.props.Vm.SearchFormVm.intoDom(), React.createElement("div", {className: "acs-grids"}, React.createElement("div", {className: "button-bar"}, this.createButtons()), React.createElement("div", {className: "topPager"}, this.props.Vm.PaginationVm.intoDom()), this.props.Vm.GridFormVm.intoDom(), React.createElement("div", {className: "bottomPager"}, this.props.Vm.PaginationVm.intoDom()))));
                return _ff;
            };
            MedicalBaseListPageReact.prototype.createButtons = function () {
                return React.createElement("div", {className: "btn-group"}, this.props.Vm.PageBtnList.map(function (btn) {
                    return btn.intoDom();
                }), this.props.Vm.DataBtnList.map(function (btn) {
                    return btn.intoDom();
                }));
            };
            return MedicalBaseListPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        MedicalBaseListPage.MedicalBaseListPageReact = MedicalBaseListPageReact;
        var MedicalBaseListPageVm = (function (_super) {
            __extends(MedicalBaseListPageVm, _super);
            function MedicalBaseListPageVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = MedicalBaseListPageReact;
                this.CheckBoxList = new Array();
                this.DataBtnList = new Array();
                this.PageBtnList = new Array();
                this.UniId = "";
                this.PageSign = "";
                this.UniId = eventFile.App.getUniId().toString();
                this.initBtnList();
                this.initSearchVm();
                if (config) {
                    this.init(config);
                }
                this.listenAppEvent("loadpagedata", this.UniId, function (pageIndex) {
                    _this.loadPageData(pageIndex);
                });
            }
            MedicalBaseListPageVm.prototype.init = function (config) {
                var _this = this;
                this.initGridVm(config);
                this.PaginationVm.PageClickEvent = function (pageIndex) {
                    _this.loadPageData(pageIndex);
                };
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
            MedicalBaseListPageVm.prototype.initSearchVm = function (config) {
            };
            MedicalBaseListPageVm.prototype.initGridVm = function (config) {
            };
            MedicalBaseListPageVm.prototype.initBtnList = function () {
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
            MedicalBaseListPageVm.prototype.buttonClickCommond = function (obj) {
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
            MedicalBaseListPageVm.prototype.getSelectValues = function () {
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
            MedicalBaseListPageVm.prototype.insertOpt = function (vals) {
                var url = "$panel" + this.PageSign + "insertpage$";
                urlFile.Core.AkUrl.Current().openUrl(url, true);
            };
            MedicalBaseListPageVm.prototype.viewOpt = function (vals) {
                var url = "$panel" + this.PageSign + "detailpage$" + vals + "$";
                urlFile.Core.AkUrl.Current().openUrl(url, true);
            };
            MedicalBaseListPageVm.prototype.updateOpt = function (vals) {
                var url = "$panel" + this.PageSign + "updatepage$" + vals + "$";
                urlFile.Core.AkUrl.Current().openUrl(url, false);
            };
            MedicalBaseListPageVm.prototype.delOpt = function (vals) {
            };
            MedicalBaseListPageVm.prototype.loadPage = function (callback) {
                if (callback) {
                    callback();
                }
            };
            MedicalBaseListPageVm.prototype.loadPageData = function (pageIndex) {
            };
            MedicalBaseListPageVm.prototype.checkCheckBox = function (val, checkDom) {
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
            MedicalBaseListPageVm.prototype.allCheckChecked = function (val, checkDom) {
                if (!window["isHand"]) {
                    this.GridFormVm.RowList.forEach(function (row) {
                        var chk = row.SingleCheckVm;
                        chk.reactDataValueSet(val);
                    });
                }
            };
            return MedicalBaseListPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        MedicalBaseListPage.MedicalBaseListPageVm = MedicalBaseListPageVm;
        var MedicalBaseListPageStates = (function (_super) {
            __extends(MedicalBaseListPageStates, _super);
            function MedicalBaseListPageStates() {
                _super.apply(this, arguments);
            }
            return MedicalBaseListPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        MedicalBaseListPage.MedicalBaseListPageStates = MedicalBaseListPageStates;
        var MedicalBaseListPageProps = (function (_super) {
            __extends(MedicalBaseListPageProps, _super);
            function MedicalBaseListPageProps() {
                _super.apply(this, arguments);
            }
            return MedicalBaseListPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        MedicalBaseListPage.MedicalBaseListPageProps = MedicalBaseListPageProps;
        iocFile.Core.Ioc.Current().RegisterType("MEDICALBASELISTPAGE", basewedPageFile.Web.BaseWebPageVm, MedicalBaseListPageVm);
    })(MedicalBaseListPage = exports.MedicalBaseListPage || (exports.MedicalBaseListPage = {}));
});
