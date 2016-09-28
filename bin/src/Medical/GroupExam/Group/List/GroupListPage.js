var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/Ioc", "./../../../../01core/Util", "./../../../../01core/Url", "./../../../../04page/BaseWebPage", "react", "./GroupSearchDow", "./GroupGridFromDow", "./../../../../05tool/Pagination", "./../../../../05tool/Button"], function (require, exports, iocFile, utilFile, urlFile, basewedPageFile, React, searchFormFile, gridFormFile, pagination, buttonFile) {
    "use strict";
    var GroupListPage;
    (function (GroupListPage) {
        var GroupListPageAction = (function (_super) {
            __extends(GroupListPageAction, _super);
            function GroupListPageAction() {
                _super.apply(this, arguments);
            }
            return GroupListPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        GroupListPage.GroupListPageAction = GroupListPageAction;
        var GroupListPageReact = (function (_super) {
            __extends(GroupListPageReact, _super);
            function GroupListPageReact() {
                _super.apply(this, arguments);
                this.state = new GroupListPageStates();
            }
            GroupListPageReact.prototype.pSender = function () {
                return React.createElement("div", null, this.props.Vm.SearchFormVm.intoDom(), React.createElement("div", {className: "YSm-table"}, this._initBtnGroup(), this.props.Vm.GridFormFileVm.intoDom(), this.props.Vm.PaginationVm.intoDom()));
            };
            GroupListPageReact.prototype._initQuantity = function () {
                return React.createElement("div", {className: "YSm-quantity clearfix"}, React.createElement("div", {className: "col-lg-4 col-md-4 col-sm-4 col-xs-12 "}, React.createElement("div", {className: "panel panel-danger"}, React.createElement("p", null, "已预约单位："), React.createElement("h2", null, this.props.Vm.rowData.RegisterNum))), React.createElement("div", {className: "col-lg-4 col-md-4 col-sm-4 col-xs-12 "}, React.createElement("div", {className: "panel panel-info"}, React.createElement("p", null, "已登记单位："), React.createElement("h2", null, this.props.Vm.rowData.MedicalNum))), React.createElement("div", {className: "col-lg-4 col-md-4 col-sm-4 col-xs-12"}, React.createElement("div", {className: "panel panel-success"}, React.createElement("p", null, "已完成："), React.createElement("h2", null, this.props.Vm.rowData.OverMedicalNum))));
            };
            GroupListPageReact.prototype._initBtnGroup = function () {
                return React.createElement("div", {className: "YSm-table-btngroup"}, this.createButtons());
            };
            GroupListPageReact.prototype.createButtons = function () {
                var _this = this;
                return React.createElement("div", {className: "btn-group btn-group-sm"}, this.props.Vm.DataBtnList.map(function (btn) {
                    return _this._tDom(btn);
                }));
            };
            return GroupListPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        GroupListPage.GroupListPageReact = GroupListPageReact;
        var GroupListPageVm = (function (_super) {
            __extends(GroupListPageVm, _super);
            function GroupListPageVm(config) {
                _super.call(this);
                this.ReactType = GroupListPageReact;
                this.CheckBoxList = new Array();
                this.DataBtnList = new Array();
                this.pIsHullAutoHide = true;
                this.regsigerFlag = false;
                var searchConfig = { UniId: "" };
                this.PaginationVm = new pagination.tool.PaginationVm();
                this.PaginationVm.PageNo = 0;
                this.PaginationVm.PageSize = 0;
                this.PaginationVm.TotalCount = 0;
                this.PaginationVm.isPartHidden = true;
                this.initBtnList();
            }
            GroupListPageVm.prototype.ReceivePageSend = function (config, obj) {
                _super.prototype.ReceivePageSend.call(this, config, obj);
                switch (config.FromModulename) {
                    case "INITGROUPTREEPAGE":
                        if (obj.BatchData) {
                            this.loadPageData(0, obj.BatchData.batchId);
                            this.batchId = obj.BatchData.batchId;
                        }
                        break;
                    default:
                        break;
                }
            };
            GroupListPageVm.prototype.initBtnList = function () {
                var _this = this;
                var btnVm1 = new buttonFile.ui.ButtonVm();
                btnVm1.DisplayName = "登记";
                btnVm1.NoEnable = false;
                btnVm1.KindCss = "btn-primary-outline";
                this.DataBtnList.push(btnVm1);
                this.DataBtnList.forEach(function (btn) {
                    btn.ClickFun = function (a) {
                        _this.buttonClickCommond(a);
                    };
                });
            };
            GroupListPageVm.prototype.buttonClickCommond = function (obj) {
                switch (obj.DisplayName) {
                    case "登记":
                        if (!this.regsigerFlag) {
                            alert("请选择批次！");
                            return;
                        }
                        var _list = this.getSelectValues();
                        var _ids = _list.map(function (n) { return n.FID; }).join(",");
                        this.Resiger(_ids);
                        this.regsigerFlag = false;
                        break;
                    default:
                        break;
                }
            };
            GroupListPageVm.prototype.Resiger = function (vals) {
                if (confirm("你确定要登记 该批次的数据吗 ？？")) {
                    urlFile.Core.AkPost("/MedicalCenter/NewGroup/ResigerBatchGroup", { fids: this.batchId }, function (data) {
                        var _data = data.Content;
                        if (_data == "ok") {
                            utilFile.Core.Util.Noty("登记成功！");
                            urlFile.Core.AkUrl.Current().openUrl("$$module/Medical/Base/medical_Exam_PrintGuidelines", false);
                        }
                    });
                }
            };
            GroupListPageVm.prototype.getSelectValues = function () {
                var _list = [];
                this.GridFormFileVm.RowList.forEach(function (r) {
                    var ck = r.SingleCheckVm;
                    if (ck.vmDataValueGet() == "true") {
                        _list.push(r.RowData);
                    }
                });
                console.log(_list);
                return _list;
            };
            //public checkCheckBox(val: string, checkDom: domFile.Core.DomVm): void {
            //    var rowList = this.GridFormFileVm.RowList;
            //    window["isHand"] = true;
            //    var isCheck = false;
            //    var isAllCheck = true;
            //    var checkedCount = 0;
            //    if (val == "true") {
            //        isCheck = true;
            //    }
            //    rowList.forEach((row) => {
            //        var chk = row.SingleCheckVm;
            //        var _val = chk.dataValue();
            //        if (_val == "true" && checkDom != chk) {
            //            isCheck = true;
            //            checkedCount++;
            //        }
            //        if (checkDom == chk) {
            //            if (val == "true") {
            //                checkedCount++;
            //            }
            //        }
            //    });
            //    isAllCheck = rowList.length == checkedCount ? true : false;
            //    this.DataBtnList.forEach((btn) => {
            //        btn.NoEnable = isCheck ? false : true;
            //        btn.forceUpdate("");
            //    });
            //    this.AllCheck.vmDataValueSet(isAllCheck ? "true" : "false");
            //    this.AllCheck.forceUpdate("", () => {
            //        window["isHand"] = false;
            //    });
            //}
            //public allCheckChecked(val: string, checkDom: domFile.Core.DomVm): void {
            //    if (!window["isHand"]) {
            //        this.GridFormFileVm.RowList.forEach((row) => {
            //            var chk = row.SingleCheckVm;
            //            chk.reactDataValueSet(val);
            //        });
            //        this.GridFormFileVm.IsChange = true
            //    }
            //}
            GroupListPageVm.prototype.init = function (config) {
                var _this = this;
                this.PagerListData = config.Data;
                this.PaginationVm = new pagination.tool.PaginationVm();
                var pager = this.PagerListData.Pager;
                this.PaginationVm.PageNo = pager.PageNo;
                this.PaginationVm.PageSize = pager.PageSize;
                this.PaginationVm.TotalCount = pager.TotalCount;
                this.PaginationVm.isPartHidden = true;
                this.PaginationVm.IsChange = true;
                this.PaginationVm.PageClickEvent = function (pageIndex) {
                    _this.loadPageData(pageIndex, _this.batchId);
                };
                var data = config.Data.ListData;
                if (data.length > 0) {
                    this.regsigerFlag = true;
                }
                var gridFormConfig = { Data: data, UniId: this.UniId };
                this.GridFormFileVm = new gridFormFile.GroupGridFromDow.GroupGridFromDowVm(gridFormConfig);
                //this.GridFormFileVm.RowList.forEach((row) => {
                //    this.CheckBoxList.push(row.SingleCheckVm);
                //    row.SingleCheckVm.ChangeEventFun = (val, col) => {
                //        this.checkCheckBox(val, col);
                //        return true;
                //    };
                //});
                //this.AllCheck = this.GridFormFileVm.AllCheck;
                //this.AllCheck.ChangeEventFun = (val, col) => {
                //    this.allCheckChecked(val, col);
                //    return true;
                //};
                this.GridFormFileVm.IsChange = true;
                this.forceUpdate("");
            };
            GroupListPageVm.prototype.loadPageData = function (pageIndex, batchid) {
                var _this = this;
                var _page = { PageNo: pageIndex };
                urlFile.Core.AkPost("/MedicalCenter/NewGroup/FechBatchMemberData", {
                    pager: JSON.stringify(_page),
                    fids: batchid
                }, function (a) {
                    _this.init(a);
                    //var data = a.Data.ListData;
                    //var gridFormConfig = { Data: data, UniId: this.UniId };
                    //this.GridFormFileVm = new gridFormFile.GroupGridFromDow.GroupGridFromDowVm(gridFormConfig);
                    //this.GridFormFileVm.RowList.forEach((row) => {
                    //    this.CheckBoxList.push(row.SingleCheckVm);
                    //    row.SingleCheckVm.ChangeEventFun = (val, col) => {
                    //        this.checkCheckBox(val, col);
                    //        return true;
                    //    };
                    //});
                    //this.AllCheck = this.GridFormFileVm.AllCheck;
                    //this.AllCheck.ChangeEventFun = (val, col) => {
                    //    this.allCheckChecked(val, col);
                    //    return true;
                    //};
                    //this.GridFormFileVm.IsChange = true;
                    //this.forceUpdate("");
                });
            };
            GroupListPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                urlFile.Core.AkPost("/MedicalCenter/UnitExam/getNum", {}, function (a) {
                    //this.rowData = a.Data[0];
                    _this.SearchFormVm = new searchFormFile.GroupSearchDow.GroupSearchDowVm();
                    _this.GridFormFileVm = new gridFormFile.GroupGridFromDow.GroupGridFromDowVm();
                    if (callback) {
                        callback();
                    }
                });
            };
            return GroupListPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        GroupListPage.GroupListPageVm = GroupListPageVm;
        var GroupListPageStates = (function (_super) {
            __extends(GroupListPageStates, _super);
            function GroupListPageStates() {
                _super.apply(this, arguments);
            }
            return GroupListPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        GroupListPage.GroupListPageStates = GroupListPageStates;
        var GroupListPageProps = (function (_super) {
            __extends(GroupListPageProps, _super);
            function GroupListPageProps() {
                _super.apply(this, arguments);
            }
            return GroupListPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        GroupListPage.GroupListPageProps = GroupListPageProps;
        iocFile.Core.Ioc.Current().RegisterType("GROUPLISTPAGE", basewedPageFile.Web.BaseWebPageVm, GroupListPageVm);
    })(GroupListPage = exports.GroupListPage || (exports.GroupListPage = {}));
});
