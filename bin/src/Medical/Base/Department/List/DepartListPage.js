var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/Ioc", "react", "./../../../../01core/Url", "./../../../../04page/BaseWebPage", "./../../../../05tool/Pagination", "./../../../../05tool/Button", "./../../../../01core/Event", "./DepartmentSearchFormDom", "./DepartGirdFormDom"], function (require, exports, iocFile, React, urlFile, basewedPageFile, pagination, buttonFile, eventFile, searchForm, gridFormFile) {
    "use strict";
    var Department;
    (function (Department) {
        var DepartmentPageAction = (function (_super) {
            __extends(DepartmentPageAction, _super);
            function DepartmentPageAction() {
                _super.apply(this, arguments);
            }
            return DepartmentPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        Department.DepartmentPageAction = DepartmentPageAction;
        var DepartmentPageReact = (function (_super) {
            __extends(DepartmentPageReact, _super);
            function DepartmentPageReact() {
                _super.apply(this, arguments);
                this.state = new DepartmentStates();
            }
            DepartmentPageReact.prototype.pSender = function () {
                var b = React.createElement("div", {className: "acsScroll"}, React.createElement("div", {className: "col-lg-10 col-md-12 col-sm-12 col-xs-12 Hm-center-content"}, this.props.Vm.SearchFormVm.intoDom(), React.createElement("div", {className: "acs-grids"}, React.createElement("div", {className: "button-bar"}, this.props.Vm.initButtons()), React.createElement("div", {className: "topPager"}, this.props.Vm.PaginationVm.intoDom()), this.props.Vm.GridFormVm.intoDom(), React.createElement("div", {className: "bottomPager"}, " ", this.props.Vm.PaginationVm.intoDom()))));
                return b;
            };
            DepartmentPageReact.prototype.initButtons = function () {
                return React.createElement("ul", {className: "button-group radius"}, this.props.Vm.PageBtnList.map(function (a) {
                    return React.createElement("li", null, a.intoDom());
                }), this.props.Vm.DataBtnList.map(function (a) {
                    return React.createElement("li", null, a.intoDom());
                }));
            };
            return DepartmentPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        Department.DepartmentPageReact = DepartmentPageReact;
        var DepartmentPageVm = (function (_super) {
            __extends(DepartmentPageVm, _super);
            function DepartmentPageVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = DepartmentPageReact;
                this.UniId = "";
                this.CheckBoxList = new Array();
                this.PageBtnList = new Array();
                this.DataBtnList = new Array();
                this.UniId = eventFile.App.getUniId().toString();
                var searchConfig = { UniId: this.UniId };
                this.SearchFormVm = new searchForm.DepartmentSearchFormDom.DepartmentSearchFormDomVm(searchConfig);
                this.listenAppEvent("loadpagedata", this.UniId, function (pageIndex) {
                    _this.loadPageData(pageIndex);
                });
                this.listenAppEvent("medical/base/department/rowbtnclick", this.UniId, function (btnName, fid) {
                    _this[btnName + "Opt"](fid);
                });
            }
            DepartmentPageVm.prototype.init = function (config) {
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
                this.GridFormVm = new gridFormFile.DepartGirdFormDom.DepartGridFormDomVm(gridFormConfig);
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
            DepartmentPageVm.prototype.buttonClickCommond = function (obj) {
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
            DepartmentPageVm.prototype.getSelectValues = function () {
                var _list = [];
                this.GridFormVm.RowList.forEach(function (r) {
                    var ch = r.SingleCheckVm;
                    if (ch.vmDataValueGet() == "true") {
                        _list.push(r.RowData);
                    }
                });
                console.log(_list);
                return _list;
            };
            //新增
            DepartmentPageVm.prototype.insertOpt = function (val) {
                urlFile.Core.AkUrl.Current().openUrl("$paneldepartmentinsertpage$", true);
            };
            //详情
            DepartmentPageVm.prototype.viewOpt = function (val) {
                urlFile.Core.AkUrl.Current().openUrl("$paneldepartdetailpage$" + val + "$", true);
            };
            //编辑
            DepartmentPageVm.prototype.updateOpt = function (val) {
                urlFile.Core.AkUrl.Current().openUrl("$paneldepartupdatepage$" + val + "$", true);
            };
            //删除
            DepartmentPageVm.prototype.delOpt = function (val) {
                var _this = this;
                if (confirm("你确定要删除 所选中的数据吗 ??")) {
                    urlFile.Core.AkPost("/MedicalCenter/Department/RemoveDepartment", { fids: val }, function (data) {
                        var _data = data.Content;
                        if (_data == "ok") {
                            _this.loadPageData(0);
                        }
                    });
                }
            };
            DepartmentPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                urlFile.Core.AkPost("/MedicalCenter/Department/SearchDepartment", {}, function (a) {
                    var pageConfig = { PagerListData: a.Data };
                    _this.init(pageConfig);
                    if (callback) {
                        callback();
                    }
                });
            };
            DepartmentPageVm.prototype.initButtons = function () {
                return React.createElement("div", {className: "btn-group"}, this.createButton("新增"), this.createButton("删除"), this.createButton("详情"), this.createButton("编辑"));
            };
            DepartmentPageVm.prototype.createButton = function (displayName) {
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
            DepartmentPageVm.prototype.checkCheckBox = function (val, checkDom) {
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
            DepartmentPageVm.prototype.allCheckChecked = function (val, checkDom) {
                if (!window["isHand"]) {
                    this.GridFormVm.RowList.forEach(function (row) {
                        var chk = row.SingleCheckVm;
                        chk.reactDataValueSet(val);
                    });
                }
            };
            DepartmentPageVm.prototype.loadPageData = function (pageIndex) {
                var _this = this;
                this.GridFormVm.RowList = [];
                this.AllCheck.vmDataValueSet("false");
                this.AllCheck.forceUpdate("");
                var _page = { PageNo: pageIndex };
                urlFile.Core.AkPost("/MedicalCenter/Department/SearchDepartment", {
                    pager: JSON.stringify(_page)
                }, function (a) {
                    var pageConfig = { PagerListData: a.Data };
                    _this.init(pageConfig);
                    _this.IsChange = true;
                    _this.forceUpdate("");
                });
            };
            return DepartmentPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        Department.DepartmentPageVm = DepartmentPageVm;
        var DepartmentStates = (function (_super) {
            __extends(DepartmentStates, _super);
            function DepartmentStates() {
                _super.apply(this, arguments);
            }
            return DepartmentStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        Department.DepartmentStates = DepartmentStates;
        var DepartmentProps = (function (_super) {
            __extends(DepartmentProps, _super);
            function DepartmentProps() {
                _super.apply(this, arguments);
            }
            return DepartmentProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        Department.DepartmentProps = DepartmentProps;
        iocFile.Core.Ioc.Current().RegisterType("DEPARTMENTPAGE", basewedPageFile.Web.BaseWebPageVm, DepartmentPageVm);
    })(Department = exports.Department || (exports.Department = {}));
});
