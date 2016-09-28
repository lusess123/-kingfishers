var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/Ioc", "./../../../../01core/Url", "./../../../../04page/BaseWebPage", "react", "./../../../../02col/02Mulite/SingleCheckBox", "./../../../../05tool/Pagination", "./NewGroupMaster", "./NewGroupTable", "./../../../../05tool/Button", "./../../../../02col/03selector/TreeSelector", "./../../../../01core/Event"], function (require, exports, iocFile, urlFile, basewedPageFile, React, SingleCheckBox, pagination, NewGroupMaster, NewGroupTable, buttonFile, treeSelectorFile, eventFile) {
    "use strict";
    var NewGroupPage;
    (function (NewGroupPage) {
        var NewGroupPageAction = (function (_super) {
            __extends(NewGroupPageAction, _super);
            function NewGroupPageAction() {
                _super.apply(this, arguments);
            }
            return NewGroupPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        NewGroupPage.NewGroupPageAction = NewGroupPageAction;
        var NewGroupPageReact = (function (_super) {
            __extends(NewGroupPageReact, _super);
            function NewGroupPageReact() {
                _super.apply(this, arguments);
                this.state = new NewGroupPageStates();
            }
            NewGroupPageReact.prototype.pSender = function () {
                return React.createElement("div", null, React.createElement("div", {className: "col-xl-3 col-lg-3 col-md-3"}, this.props.Vm.NewGroupMasterVm.intoDom()), React.createElement("div", {className: "col-xl-9 col-lg-9 col-md-9"}, this._initBtnGroup(), this.props.Vm.NewGroupTableVm.intoDom(), this.props.Vm.PaginationVm.intoDom()));
            };
            NewGroupPageReact.prototype._initBtnGroup = function () {
                var _this = this;
                return React.createElement("div", {className: "YSm-table-btngroup"}, this.props.Vm.initButtons(), React.createElement("a", {className: "btn btn-sm btn-primary", onClick: function () { _this.props.Vm.newOpt("batch"); }}, "添加批次"));
            };
            return NewGroupPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        NewGroupPage.NewGroupPageReact = NewGroupPageReact;
        var NewGroupPageVm = (function (_super) {
            __extends(NewGroupPageVm, _super);
            function NewGroupPageVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = NewGroupPageReact;
                this.SingleCheckBoxVm = new SingleCheckBox.ui.SingleCheckBoxVm();
                this.DataBtnList = new Array();
                this.CheckBoxList = new Array();
                this.flag = true;
                this.ReservationNumber = "New";
                this.pIsHullAutoHide = true;
                this.UniId = eventFile.App.getUniId().toString();
                this.treeSelectorFile = new treeSelectorFile.ui.TreeSingleSelectorVm();
                this.treeSelectorFile.RegName = "";
                this.PaginationVm = new pagination.tool.PaginationVm();
                this.PaginationVm.PageNo = 0;
                this.PaginationVm.PageSize = 0;
                this.PaginationVm.TotalCount = 0;
                this.PaginationVm.isPartHidden = true;
                this.listenAppEvent("New/NewGroupPage/loadPageData", this.UniId, function (unId) {
                    _this.loadPageData(0, unId);
                });
                this.listenAppEvent("Manage/NewGroupPage/InitPageData", this.UniId, function (flag) {
                    _this.flag = flag;
                    _this.InitPage(flag);
                });
            }
            NewGroupPageVm.prototype.initButtons = function () {
                return React.createElement("div", {className: "btn-group btn-group-sm"}, this.createButton("管理"), this.createButton("分组"), this.createButton("人员"), this.createButton("应收款管理"), this.createButton("删除"));
            };
            NewGroupPageVm.prototype.getSelectValues = function () {
                var _list = [];
                this.NewGroupTableVm.RowList.forEach(function (r) {
                    var ck = r.SingleCheckVm;
                    if (ck.vmDataValueGet() == "true") {
                        _list.push(r.RowData);
                    }
                });
                console.log(_list);
                return _list;
            };
            NewGroupPageVm.prototype.createButton = function (displayName) {
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
            NewGroupPageVm.prototype.buttonClickCommond = function (obj) {
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
            NewGroupPageVm.prototype.getMoney = function () {
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
            NewGroupPageVm.prototype.newOpt = function (vals) {
                var _this = this;
                var IsSccuss = this.NewGroupMasterVm.legal();
                var data = this.NewGroupMasterVm.RowData;
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
                            var New = _this.ReservationNumber + "," + _this.Unid + "|" + "NewPage";
                            urlFile.Core.AkUrl.Current().openUrl("$winBatchNewPage$" + New + "$", true);
                        }
                    });
                }
            };
            NewGroupPageVm.prototype.GroupOpt = function (vals) {
                vals = "GroupRule" + "," + vals;
                urlFile.Core.AkUrl.Current().openUrl("$NewGroupPage$#$GroupManagePage$" + vals + "$", false);
            };
            NewGroupPageVm.prototype.MemberOpt = function (vals) {
                vals = "PersonalManage" + "," + vals;
                urlFile.Core.AkUrl.Current().openUrl("$NewGroupPage$#$GroupManagePage$" + vals + "$", false);
            };
            NewGroupPageVm.prototype.BatchOpt = function (vals) {
                vals = "BatchDetail" + "," + vals;
                urlFile.Core.AkUrl.Current().openUrl("$NewGroupPage$#$GroupManagePage$" + vals + "$", false);
            };
            NewGroupPageVm.prototype.ManageOpt = function (vals) {
                vals = "AccountManage" + "," + vals;
                urlFile.Core.AkUrl.Current().openUrl("$NewGroupPage$#$GroupManagePage$" + vals + "$", false);
            };
            NewGroupPageVm.prototype.delOpt = function (vals) {
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
            NewGroupPageVm.prototype.ReceivePageSend = function (config, obj) {
                _super.prototype.ReceivePageSend.call(this, config, obj);
                switch (config.FromModulename) {
                    case "BATCHNEWPAGE":
                        if (obj.BatchData) {
                            this.ReservationNumber = obj.num;
                            this.loadPageData(0, this.Unid);
                        }
                        break;
                    default:
                        break;
                }
            };
            NewGroupPageVm.prototype.checkCheckBox = function (val, checkDom) {
                var rowList = this.NewGroupTableVm.RowList;
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
            NewGroupPageVm.prototype.allCheckChecked = function (val, checkDom) {
                if (!window["isHand"]) {
                    this.NewGroupTableVm.RowList.forEach(function (row) {
                        var chk = row.SingleCheckVm;
                        chk.reactDataValueSet(val);
                    });
                }
            };
            NewGroupPageVm.prototype.init = function (unid, data) {
                var _this = this;
                this.Unid = unid;
                data.Unit = unid;
                var config1 = { RowData: data, UniId: this.UniId, IsSelectOpt: true };
                this.NewGroupMasterVm = new NewGroupMaster.NewGroupMaster.NewGroupMasterVm(config1);
                this.PagerListData = data.ItemList;
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
                    this.NewGroupTableVm = new NewGroupTable.NewGroupTable.NewGroupTableVm(config2);
                    this.NewGroupTableVm.RowList.forEach(function (row) {
                        _this.CheckBoxList.push(row.SingleCheckVm);
                        row.SingleCheckVm.ChangeEventFun = function (val, col) {
                            _this.checkCheckBox(val, col);
                            return true;
                        };
                    });
                    this.AllCheck = this.NewGroupTableVm.AllCheck;
                    this.AllCheck.ChangeEventFun = function (val, col) {
                        _this.allCheckChecked(val, col);
                        return true;
                    };
                }
                else {
                    config2 = { ListData: [] };
                    this.NewGroupTableVm = new NewGroupTable.NewGroupTable.NewGroupTableVm(config2);
                }
            };
            NewGroupPageVm.prototype.InitPage = function (flag) {
                var _this = this;
                var config1 = { RowData: {}, UniId: this.UniId, IsSelectOpt: flag };
                this.NewGroupMasterVm = new NewGroupMaster.NewGroupMaster.NewGroupMasterVm(config1);
                var config2 = { ListData: [] };
                this.NewGroupTableVm = new NewGroupTable.NewGroupTable.NewGroupTableVm(config2);
                this.NewGroupTableVm.RowList.forEach(function (row) {
                    _this.CheckBoxList.push(row.SingleCheckVm);
                    row.SingleCheckVm.ChangeEventFun = function (val, col) {
                        _this.checkCheckBox(val, col);
                        return true;
                    };
                });
                this.AllCheck = this.NewGroupTableVm.AllCheck;
                this.AllCheck.ChangeEventFun = function (val, col) {
                    _this.allCheckChecked(val, col);
                    return true;
                };
                this.NewGroupTableVm.IsChange = true;
                this.NewGroupMasterVm.IsMulit = true;
                this.IsChange = true;
                this.forceUpdate("");
            };
            NewGroupPageVm.prototype.loadPageData = function (pageIndex, unid) {
                var _this = this;
                var data = this.NewGroupMasterVm.RowData;
                if (data.Unit != "" || data.Unit != undefined) {
                    var _page = { PageNo: pageIndex };
                    urlFile.Core.AkPost("/MedicalCenter/NewGroup/FechBatchUnit", {
                        pager: JSON.stringify(_page),
                        unitid: unid,
                        number: this.ReservationNumber
                    }, function (a) {
                        var data = a.Data[0];
                        _this.init(unid, data);
                        _this.NewGroupTableVm.IsChange = true;
                        _this.NewGroupMasterVm.IsMulit = true;
                        _this.IsChange = true;
                        _this.forceUpdate("");
                    });
                }
            };
            NewGroupPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                var config1 = { RowData: [], UniId: this.UniId, IsSelectOpt: true };
                this.NewGroupMasterVm = new NewGroupMaster.NewGroupMaster.NewGroupMasterVm(config1);
                var config2 = { ListData: [] };
                this.NewGroupTableVm = new NewGroupTable.NewGroupTable.NewGroupTableVm(config2);
                this.NewGroupTableVm.RowList.forEach(function (row) {
                    _this.CheckBoxList.push(row.SingleCheckVm);
                    row.SingleCheckVm.ChangeEventFun = function (val, col) {
                        _this.checkCheckBox(val, col);
                        return true;
                    };
                });
                this.AllCheck = this.NewGroupTableVm.AllCheck;
                this.AllCheck.ChangeEventFun = function (val, col) {
                    _this.allCheckChecked(val, col);
                    return true;
                };
                if (callback) {
                    callback();
                }
            };
            return NewGroupPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        NewGroupPage.NewGroupPageVm = NewGroupPageVm;
        var NewGroupPageStates = (function (_super) {
            __extends(NewGroupPageStates, _super);
            function NewGroupPageStates() {
                _super.apply(this, arguments);
            }
            return NewGroupPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        NewGroupPage.NewGroupPageStates = NewGroupPageStates;
        var NewGroupPageProps = (function (_super) {
            __extends(NewGroupPageProps, _super);
            function NewGroupPageProps() {
                _super.apply(this, arguments);
            }
            return NewGroupPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        NewGroupPage.NewGroupPageProps = NewGroupPageProps;
        iocFile.Core.Ioc.Current().RegisterType("NEWGROUPPAGE", basewedPageFile.Web.BaseWebPageVm, NewGroupPageVm);
    })(NewGroupPage = exports.NewGroupPage || (exports.NewGroupPage = {}));
});
