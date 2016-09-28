var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/Ioc", "./../../../../01core/Url", "./../../../../04page/BaseWebPage", "react", "./../../../../02col/02Mulite/SingleCheckBox", "./../../../../05tool/Pagination", "./EditGroupMaster", "./EditGroupTable", "./../../../../05tool/Button", "./../../../../02col/03selector/TreeSelector", "./../../../../01core/Event"], function (require, exports, iocFile, urlFile, basewedPageFile, React, SingleCheckBox, pagination, EditGroupMaster, EditGroupTable, buttonFile, treeSelectorFile, eventFile) {
    "use strict";
    var EditGroupPage;
    (function (EditGroupPage) {
        var EditGroupPageAction = (function (_super) {
            __extends(EditGroupPageAction, _super);
            function EditGroupPageAction() {
                _super.apply(this, arguments);
            }
            return EditGroupPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        EditGroupPage.EditGroupPageAction = EditGroupPageAction;
        var EditGroupPageReact = (function (_super) {
            __extends(EditGroupPageReact, _super);
            function EditGroupPageReact() {
                _super.apply(this, arguments);
                this.state = new EditGroupPageStates();
            }
            EditGroupPageReact.prototype.pSender = function () {
                return React.createElement("div", null, React.createElement("div", {className: "col-xl-3 col-lg-3 col-md-3"}, this.props.Vm.EditGroupMasterVm.intoDom()), React.createElement("div", {className: "col-xl-9 col-lg-9 col-md-9"}, this._initBtnGroup(), this.props.Vm.EditGroupTableVm.intoDom(), this.props.Vm.PaginationVm.intoDom()));
            };
            EditGroupPageReact.prototype._initBtnGroup = function () {
                var _this = this;
                return React.createElement("div", {className: "YSm-table-btngroup"}, this.props.Vm.initButtons(), React.createElement("a", {className: "btn btn-sm btn-primary", onClick: function () { _this.props.Vm.EditOpt("batch"); }}, "添加批次"), React.createElement("a", {className: "btn btn-sm btn-danger", onClick: function () { _this.props.Vm.getMoney(); }}, "￥结算"));
            };
            return EditGroupPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        EditGroupPage.EditGroupPageReact = EditGroupPageReact;
        var EditGroupPageVm = (function (_super) {
            __extends(EditGroupPageVm, _super);
            function EditGroupPageVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = EditGroupPageReact;
                this.SingleCheckBoxVm = new SingleCheckBox.ui.SingleCheckBoxVm();
                this.DataBtnList = new Array();
                this.CheckBoxList = new Array();
                this.flag = true;
                this.pIsHullAutoHide = true;
                this.UniId = eventFile.App.getUniId().toString();
                this.treeSelectorFile = new treeSelectorFile.ui.TreeSingleSelectorVm();
                this.treeSelectorFile.RegName = "";
                this.PaginationVm = new pagination.tool.PaginationVm();
                this.PaginationVm.PageNo = 0;
                this.PaginationVm.PageSize = 0;
                this.PaginationVm.TotalCount = 0;
                this.PaginationVm.isPartHidden = true;
                this.listenAppEvent("Edit/EditGroupPage/loadPageData", this.UniId, function (unId) {
                    _this.loadPageData(0, unId);
                });
                this.listenAppEvent("Manage/EditGroupPage/InitPageData", this.UniId, function (flag) {
                    _this.flag = flag;
                    _this.InitPage(flag);
                });
            }
            EditGroupPageVm.prototype.initButtons = function () {
                return React.createElement("div", {className: "btn-group btn-group-sm"}, this.createButton("管理"), this.createButton("分组"), this.createButton("人员"), this.createButton("应收款管理"), this.createButton("删除"));
            };
            EditGroupPageVm.prototype.getSelectValues = function () {
                var _list = [];
                this.EditGroupTableVm.RowList.forEach(function (r) {
                    var ck = r.SingleCheckVm;
                    if (ck.vmDataValueGet() == "true") {
                        _list.push(r.RowData);
                    }
                });
                console.log(_list);
                return _list;
            };
            EditGroupPageVm.prototype.createButton = function (displayName) {
                var _this = this;
                var btnVm = new buttonFile.ui.ButtonVm();
                btnVm.DisplayName = displayName;
                btnVm.NoEnable = true;
                btnVm.KindCss = " btn-primary-outline ";
                this.DataBtnList.push(btnVm);
                btnVm.ClickFun = function (a) {
                    _this.buttonClickCommond(a);
                };
                return btnVm.intoDom();
            };
            EditGroupPageVm.prototype.buttonClickCommond = function (obj) {
                switch (obj.DisplayName) {
                    case "管理":
                        var _list = this.getSelectValues();
                        if (_list.length > 1) {
                            alert("只能选择一个体检批次");
                            return;
                        }
                        var _ids = _list.map(function (n) { return n.FID; }).join(",");
                        this.BatchOpt(_ids);
                        break;
                    case "分组":
                        var _list = this.getSelectValues();
                        if (_list.length > 1) {
                            alert("只能选择一个体检批次");
                            return;
                        }
                        var _ids = _list.map(function (n) { return n.FID; }).join(",");
                        this.GroupOpt(_ids);
                        break;
                    case "人员":
                        var _list = this.getSelectValues();
                        if (_list.length > 1) {
                            alert("只能选择一个体检批次");
                            return;
                        }
                        var _ids = _list.map(function (n) { return n.FID; }).join(",");
                        this.MemberOpt(_ids);
                        break;
                    case "删除":
                        var _list = this.getSelectValues();
                        var _ids = _list.map(function (n) { return n.FID; }).join(",");
                        if (_list.length > 1) {
                            alert("只能选择一个体检批次");
                            return;
                        }
                        this.delOpt(_ids);
                        break;
                    case "应收款管理":
                        var _list = this.getSelectValues();
                        var _ids = _list.map(function (n) { return n.FID; }).join(",");
                        if (_list.length > 1) {
                            alert("只能选择一个体检批次");
                            return;
                        }
                        this.ManageOpt(_ids);
                        break;
                    default:
                        break;
                }
            };
            EditGroupPageVm.prototype.getMoney = function () {
                var _this = this;
                if (confirm("你确定要结算 所选中的数据吗 ？？")) {
                    var _list = this.getSelectValues();
                    var _ids = _list.map(function (n) { return n.FID; }).join(",");
                    if (_list.length != 1) {
                        alert("请选择一个体检批次");
                        return;
                    }
                    urlFile.Core.AkPost("/MedicalCenter/NewGroup/BalanceByBatch", { fid: _ids }, function (data) {
                        var _data = data.Data;
                        if (_data == "fail") {
                            alert("结算失败，已经结算！");
                            return;
                        }
                        else {
                            alert("结算成功！");
                            _this.loadPageData(0, _this.Unid);
                        }
                    });
                }
            };
            EditGroupPageVm.prototype.EditOpt = function (vals) {
                var _this = this;
                var IsSccuss = this.EditGroupMasterVm.legal();
                var data = this.EditGroupMasterVm.RowData;
                data.FID = data.Unit;
                if (this.flag) {
                    data.flag = "select";
                }
                else {
                    data.flag = "input";
                }
                var postData = [];
                postData.push(data);
                var jsonData = JSON.stringify(data);
                if (IsSccuss) {
                    urlFile.Core.AkPost("/MedicalCenter/NewGroup/AddOrModifyUnitByBatch", { unit: jsonData }, function (data) {
                        if (data) {
                            var _data = data.Data;
                            _this.Unid = _data;
                            var New = _this.ReservationNumber + "," + _this.Unid + "|" + "EditPage";
                            urlFile.Core.AkUrl.Current().openUrl("$winBatchNewPage$" + New + "$", true);
                        }
                    });
                }
            };
            EditGroupPageVm.prototype.GroupOpt = function (vals) {
                vals = "GroupRule" + "," + vals;
                urlFile.Core.AkUrl.Current().openUrl("$$module/Medical/Base/medical_Unit_Reservation#$GroupManagePage$" + vals + "$", false);
            };
            EditGroupPageVm.prototype.MemberOpt = function (vals) {
                vals = "PersonalManage" + "," + vals;
                urlFile.Core.AkUrl.Current().openUrl("$$module/Medical/Base/medical_Unit_Reservation#$GroupManagePage$" + vals + "$", false);
            };
            EditGroupPageVm.prototype.BatchOpt = function (vals) {
                vals = "BatchDetail" + "," + vals;
                urlFile.Core.AkUrl.Current().openUrl("$$module/Medical/Base/medical_Unit_Reservation#$GroupManagePage$" + vals + "$", false);
            };
            EditGroupPageVm.prototype.ManageOpt = function (vals) {
                vals = "AccountManage" + "," + vals;
                urlFile.Core.AkUrl.Current().openUrl("$$module/Medical/Base/medical_Unit_Reservation#$GroupManagePage$" + vals + "$", false);
            };
            EditGroupPageVm.prototype.delOpt = function (vals) {
                var _this = this;
                if (confirm("你确定要删除 所选中的数据吗 ？？")) {
                    urlFile.Core.AkPost("/MedicalCenter/NewGroup/RemoveBatchUnit", { fids: vals }, function (data) {
                        var _data = data.Content;
                        if (_data == "ok") {
                            _this.loadPageData(0, _this.Unid);
                        }
                    });
                }
            };
            EditGroupPageVm.prototype.ReceivePageSend = function (config, obj) {
                _super.prototype.ReceivePageSend.call(this, config, obj);
                switch (config.FromModulename) {
                    case "BATCHEDITPAGE":
                        if (obj.BatchData) {
                            this.loadPageData(0, this.Unid);
                        }
                        break;
                    default:
                        break;
                }
            };
            EditGroupPageVm.prototype.checkCheckBox = function (val, checkDom) {
                var rowList = this.EditGroupTableVm.RowList;
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
            EditGroupPageVm.prototype.allCheckChecked = function (val, checkDom) {
                if (!window["isHand"]) {
                    this.EditGroupTableVm.RowList.forEach(function (row) {
                        var chk = row.SingleCheckVm;
                        chk.reactDataValueSet(val);
                    });
                }
            };
            EditGroupPageVm.prototype.init = function (unid, data) {
                var _this = this;
                this.Unid = unid;
                data.Unit = unid;
                var config1 = { RowData: data, UniId: this.UniId, IsSelectOpt: true };
                this.EditGroupMasterVm = new EditGroupMaster.EditGroupMaster.EditGroupMasterVm(config1);
                this.PagerListData = data.ItemList;
                this.PaginationVm = new pagination.tool.PaginationVm();
                if (this.PagerListData != null) {
                    var pager = this.PagerListData.Pager;
                    this.PaginationVm.PageNo = pager.PageNo;
                    this.PaginationVm.PageSize = pager.PageSize;
                    this.PaginationVm.TotalCount = pager.TotalCount;
                    this.PaginationVm.isPartHidden = true;
                    this.PaginationVm.PageClickEvent = function (pageIndex) {
                        _this.loadPageData(pageIndex, _this.Unid);
                    };
                }
                else {
                    this.PaginationVm.PageNo = 0;
                    this.PaginationVm.PageSize = 0;
                    this.PaginationVm.TotalCount = 0;
                    this.PaginationVm.isPartHidden = true;
                }
                if (data.ItemList != null) {
                    var config2 = { ListData: data.ItemList.ListData };
                    this.EditGroupTableVm = new EditGroupTable.EditGroupTable.EditGroupTableVm(config2);
                    this.EditGroupTableVm.RowList.forEach(function (row) {
                        _this.CheckBoxList.push(row.SingleCheckVm);
                        row.SingleCheckVm.ChangeEventFun = function (val, col) {
                            _this.checkCheckBox(val, col);
                            return true;
                        };
                    });
                    this.AllCheck = this.EditGroupTableVm.AllCheck;
                    this.AllCheck.ChangeEventFun = function (val, col) {
                        _this.allCheckChecked(val, col);
                        return true;
                    };
                }
                else {
                    config2 = { ListData: [] };
                    this.EditGroupTableVm = new EditGroupTable.EditGroupTable.EditGroupTableVm(config2);
                }
            };
            EditGroupPageVm.prototype.InitPage = function (flag) {
                var _this = this;
                var config1 = { RowData: {}, UniId: this.UniId, IsSelectOpt: flag };
                this.EditGroupMasterVm = new EditGroupMaster.EditGroupMaster.EditGroupMasterVm(config1);
                var config2 = { ListData: [] };
                this.EditGroupTableVm = new EditGroupTable.EditGroupTable.EditGroupTableVm(config2);
                this.EditGroupTableVm.RowList.forEach(function (row) {
                    _this.CheckBoxList.push(row.SingleCheckVm);
                    row.SingleCheckVm.ChangeEventFun = function (val, col) {
                        _this.checkCheckBox(val, col);
                        return true;
                    };
                });
                this.AllCheck = this.EditGroupTableVm.AllCheck;
                this.AllCheck.ChangeEventFun = function (val, col) {
                    _this.allCheckChecked(val, col);
                    return true;
                };
                this.EditGroupTableVm.IsChange = true;
                this.EditGroupMasterVm.IsMulit = true;
                this.IsChange = true;
                this.forceUpdate("");
            };
            EditGroupPageVm.prototype.loadPageData = function (pageIndex, unid) {
                var _this = this;
                var Unit = this.Param2;
                var NumberS = this.Param1;
                var data = this.EditGroupMasterVm.RowData;
                if (Unit != "" || Unit != undefined) {
                    var _page = { PageNo: pageIndex };
                    urlFile.Core.AkPost("/MedicalCenter/NewGroup/FechBatchUnit", {
                        pager: JSON.stringify(_page),
                        unitid: unid,
                        number: NumberS
                    }, function (a) {
                        var data = a.Data[0];
                        _this.init(unid, data);
                        _this.EditGroupTableVm.IsChange = true;
                        _this.EditGroupMasterVm.IsMulit = true;
                        _this.IsChange = true;
                        _this.forceUpdate("");
                    });
                }
            };
            EditGroupPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                var Unit = this.Param2;
                var NumberS = this.Param1;
                this.ReservationNumber = NumberS;
                if (Unit != "" || Unit != undefined) {
                    var _page = { PageNo: 0 };
                    urlFile.Core.AkPost("/MedicalCenter/NewGroup/FechBatchUnit", {
                        pager: JSON.stringify(_page),
                        unitid: Unit,
                        number: NumberS
                    }, function (a) {
                        var data = a.Data[0];
                        _this.init(Unit, data);
                        if (callback) {
                            callback();
                        }
                    });
                }
            };
            return EditGroupPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        EditGroupPage.EditGroupPageVm = EditGroupPageVm;
        var EditGroupPageStates = (function (_super) {
            __extends(EditGroupPageStates, _super);
            function EditGroupPageStates() {
                _super.apply(this, arguments);
            }
            return EditGroupPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        EditGroupPage.EditGroupPageStates = EditGroupPageStates;
        var EditGroupPageProps = (function (_super) {
            __extends(EditGroupPageProps, _super);
            function EditGroupPageProps() {
                _super.apply(this, arguments);
            }
            return EditGroupPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        EditGroupPage.EditGroupPageProps = EditGroupPageProps;
        iocFile.Core.Ioc.Current().RegisterType("EditGROUPPAGE", basewedPageFile.Web.BaseWebPageVm, EditGroupPageVm);
    })(EditGroupPage = exports.EditGroupPage || (exports.EditGroupPage = {}));
});
