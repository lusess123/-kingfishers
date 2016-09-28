var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/Ioc", "./../../01core/Util", "./../../01core/Url", "./../../04page/BaseWebPage", "react", "./../../05tool/Button", "./examOrderInsertMaster", "./examOrderGridFormDom", "./examOrderGridRowMaster", "./newExamOrder/ExamPackagePickListDom", "./../../05tool/Picker/PickDom", "./../../01core/Event"], function (require, exports, iocFile, utilFile, urlFile, basewedPageFile, React, buttonFile, insertFile, gridFormFile, gridRowFile, pickLeftDomFile, PickDomFile, eventFile) {
    "use strict";
    var ExamOrderPage;
    (function (ExamOrderPage) {
        var ExamOrderPageAction = (function (_super) {
            __extends(ExamOrderPageAction, _super);
            function ExamOrderPageAction() {
                _super.apply(this, arguments);
            }
            return ExamOrderPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        ExamOrderPage.ExamOrderPageAction = ExamOrderPageAction;
        var ExamOrderPageReact = (function (_super) {
            __extends(ExamOrderPageReact, _super);
            function ExamOrderPageReact() {
                _super.apply(this, arguments);
                this.state = new ExamOrderPageStates();
            }
            ExamOrderPageReact.prototype.pSender = function () {
                var bottom = this._initBottom();
                //var header = this.initHeader();
                var button = this._initBtns();
                var insertForm = this.initInsertForm();
                var initHandle = this._initHandle();
                return (React.createElement("div", null, initHandle, insertForm, button, this.props.Vm.GridFormVm.intoDom(), bottom, React.createElement("div", {className: "Hf-overflow", style: { height: 1, width: 1 }}, this.props.Vm.PickDomObj.intoDom())));
            };
            ExamOrderPageReact.prototype._initHandle = function () {
                var _this = this;
                return React.createElement("div", {className: "YSm-handle clearfix"}, React.createElement("div", {className: "col-lg-6 col-md-6 YSm-search"}, React.createElement("input", {className: "col-lg-11 col-md-10 YSu-border-blue", type: "text", placeholder: "输入身份证、档案号查询", value: this.props.Vm.SearchID, onChange: function (e) { _this.fun_linkName(e); }}), React.createElement("a", {className: "col-lg-1 col-md-2 btn btn-primary", onClick: function () { _this.fun_SearchBtn(); }}, "查询")));
            };
            //public initBottom(): React.ReactElement<any> {
            //    return (
            //        <div className="col-lg-12 col-md-12  clearfix text-center">
            //                <a className="btn btn-danger-outline"  onClick={() => { this.fun_Submit(); } }>确认预约</a>
            //                <a className="btn btn-danger"  onClick={() => { this.fun_Open(); } }>开单</a>
            //        </div>
            //    )
            //}
            ExamOrderPageReact.prototype._initBottom = function () {
                var _this = this;
                return React.createElement("div", {className: (this.props.Vm.Is10 ? " col-lg-12 col-md-12 Hg-default-left " : " col-lg-10 col-md-10 ") + "YSm-fixed-bottom"}, React.createElement("div", {className: "col-lg-12 col-md-12 clearfix"}, React.createElement("div", {className: "pull-left"}, React.createElement("span", null, "合计检查", React.createElement("b", null, this.props.Vm.ExamItemCount), "项， 总费用", React.createElement("strong", null, this.props.Vm.ExamPrice), "元")), React.createElement("div", {className: "pull-right"}, React.createElement("a", {className: "btn btn-danger-outline", onClick: function () { _this.fun_Submit(); }}, "确认预约"), React.createElement("a", {className: "btn btn-danger", onClick: function () { _this.fun_Open(); }}, "开单"))));
            };
            ExamOrderPageReact.prototype._initBtns = function () {
                var _this = this;
                return (React.createElement("div", {className: "YSm-table-btngroup"}, React.createElement("div", {className: "btn-group btn-group-sm"}, this.props.Vm.BtnList.map(function (btn) {
                    return _this._tDom(btn);
                }))));
            };
            ExamOrderPageReact.prototype.fun_linkName = function (e) {
                var _val = e.target["value"];
                this.props.Vm.SearchID = _val;
                this.forceUpdate();
            };
            ExamOrderPageReact.prototype.fun_SearchBtn = function () {
                this.props.Vm.Search(this.props.Vm.SearchID);
            };
            ExamOrderPageReact.prototype.fun_Submit = function () {
                this.props.Vm.submit();
            };
            ExamOrderPageReact.prototype.fun_Open = function () {
                this.props.Vm.Open();
            };
            ExamOrderPageReact.prototype.initInsertForm = function () {
                var _insertForm = this.createInsertForm();
                return _insertForm;
            };
            //public _initPager(): React.ReactElement<any> {
            //    var pagerVm = new pagination.tool.PaginationVm();
            //    var pager = this.props.Vm.ListData.Pager;
            //    pagerVm.PageNo = pager.PageNo;
            //    pagerVm.PageSize = pager.PageSize;
            //    pagerVm.TotalCount = pager.TotalCount;
            //    pagerVm.PageClickEvent = (pageIndex) => {
            //        this.props.Vm.loadPageData(pageIndex);
            //    }
            //    return pagerVm.intoDom();
            //}
            //public createGridRow(data: any, index: number): React.ReactElement<any> {
            //    var rowVm = new examOrderDomFile.ExamOrderGridRow.ExamOrderGridRowVm();
            //    rowVm.RowData = data;
            //    rowVm.ExamObj = this.props.Vm;
            //    rowVm.RowNumber = index < 9 ? "0" + (index + 1) : (index + 1).toString();
            //    this.props.Vm.RowList.push(rowVm);
            //    rowVm.SingleCheckboxVm.ChangeEventFun = ((val, col) => {
            //        this.props.Vm.checkCheckBox(val, col);
            //        rowVm.forceUpdate("");
            //        return true;
            //    })
            //    return rowVm.intoDom();
            //}
            ExamOrderPageReact.prototype.createInsertForm = function () {
                return this.props.Vm.InsertMaster.intoDom();
            };
            return ExamOrderPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        ExamOrderPage.ExamOrderPageReact = ExamOrderPageReact;
        var ExamOrderPageVm = (function (_super) {
            __extends(ExamOrderPageVm, _super);
            function ExamOrderPageVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = ExamOrderPageReact;
                this.BtnList = new Array();
                this.CheckBoxList = new Array();
                this.ExamItemCount = 0;
                this.ExamPrice = "0";
                this.IsItemSelected = false;
                this.pIsHullAutoHide = true;
                this.IsPackageSelected = true; //是否选择套餐
                this.Is10 = true;
                //this.AllCheck = new singleCheckFile.ui.SingleCheckBoxVm();
                //this.AllCheck.ChangeEventFun = ((val, col) => {
                //    this.allCheckChecked(val, col);
                //    return true;
                //});
                this.listenPageButtom();
                this.initBtnList();
                this.GridFormVm = new gridFormFile.ExamOrderGridFormDom.ExamOrderGridFormDomVm();
                this.UniId = eventFile.App.getUniId().toString();
                var _itemList = [];
                var _LeftDomVmObj = new pickLeftDomFile.ExamPackagePickListDom.ExamPackagePickListDomVm({ UniId: this.UniId });
                this.PickDomObj = new PickDomFile.PickDom.PickDomVm({
                    UniId: this.UniId,
                    PickItemList: _itemList,
                    PickerContainer: {
                        UniId: this.UniId,
                        IsSingle: true,
                        LeftDomVmObj: _LeftDomVmObj,
                        IsPickSelectHide: true,
                        SetSureCustomerObjFun: function (items) {
                            return _LeftDomVmObj.getObjByItems(items);
                        }
                    }
                });
                this.listenAppEvent("ExamPackageItemsDisplay", this.UniId, function (item) {
                    //alert(item.Key);
                    _this.IsPackageSelected = true;
                    urlFile.Core.AkPost("/MedicalCenter/PackageSelector/FetchPackageExamItems", { packageId: item.Key }, function (data) {
                        var _data = data.Data;
                        if (_data) {
                            _this.GridFormVm.RowList = [];
                            _data.forEach(function (rowData, index) {
                                var rowConfig = { RowData: rowData };
                                var rowVm = new gridRowFile.ExamOrderGridRow.ExamOrderGridRowVm(rowConfig);
                                _this.GridFormVm.RowList.push(rowVm);
                            });
                            _this.IsItemSelected = true;
                            _this.ExamItemCount = _this.GridFormVm.RowList.length;
                            _this.ExamPrice = _this.ExamItemCount > 0 ? _this.GridFormVm.RowList[0].RowData.PackagePrice : "0";
                            _this.GridFormVm.IsChange = true;
                            _this.forceUpdate("");
                        }
                    });
                });
                this.listenAppEvent("picker-sure", this.UniId, function (items) {
                    _this.IsPackageSelected = false;
                    var _list = [];
                    items.forEach(function (a) {
                        _list.push(a.Key);
                    });
                    urlFile.Core.AkPost("/MedicalCenter/PackageSelector/FetchExamItems", { itemIds: _list.join(",") }, function (data) {
                        var _data = data.Data;
                        if (_data) {
                            _this.initAddGridForm(_data, _data.Price);
                            _this.GridFormVm.IsChange = true;
                            _this.forceUpdate("");
                        }
                    });
                });
            }
            ExamOrderPageVm.prototype.listenPageButtom = function () {
                var _this = this;
                this.listenAppEvent("pageButtom", "page", function (is10) {
                    if (_this.Is10 != is10) {
                        _this.Is10 = is10;
                        _this.forceUpdate("");
                    }
                });
            };
            ExamOrderPageVm.prototype.initAddGridForm = function (data, Fee) {
                var _this = this;
                if (data) {
                    this.GridFormVm.RowList = [];
                    var totalPrice = 0;
                    data.forEach(function (rowData, index) {
                        var rowConfig = { RowData: rowData };
                        var rowVm = new gridRowFile.ExamOrderGridRow.ExamOrderGridRowVm(rowConfig);
                        _this.GridFormVm.RowList.push(rowVm);
                        totalPrice += parseFloat(rowData.Price);
                    });
                    this.ExamPrice = totalPrice.toString();
                    this.ExamItemCount = this.GridFormVm.RowList.length;
                }
            };
            ExamOrderPageVm.prototype.initGridForm = function (data, Fee) {
                var _this = this;
                if (data) {
                    this.GridFormVm.RowList = [];
                    var totalPrice = 0;
                    data.forEach(function (rowData, index) {
                        var rowConfig = { RowData: rowData };
                        var rowVm = new gridRowFile.ExamOrderGridRow.ExamOrderGridRowVm(rowConfig);
                        _this.GridFormVm.RowList.push(rowVm);
                        totalPrice += parseFloat(rowData.Price);
                    });
                    this.IsItemSelected = true;
                    this.ExamItemCount = this.GridFormVm.RowList.length;
                    if (Fee == null) {
                        Fee = 0;
                    }
                    this.ExamPrice = this.ExamItemCount == 0 ? "0" : Fee.toString();
                    this.ExamItemCount = this.GridFormVm.RowList.length;
                }
            };
            ExamOrderPageVm.prototype.initBtnList = function () {
                var _this = this;
                var btnVm = new buttonFile.ui.ButtonVm();
                btnVm.DisplayName = "选择项目";
                //btnVm.IconCss = "plus";
                btnVm.KindCss = "btn-primary";
                btnVm.NoEnable = false;
                this.BtnList.push(btnVm);
                //var btnVm1 = new buttonFile.ui.ButtonVm();
                //btnVm1.DisplayName = "删除";
                //btnVm1.KindCss = "btn-primary-outline";
                //btnVm1.NoEnable = true;
                //var btnVm2 = new buttonFile.ui.ButtonVm();
                //btnVm2.DisplayName = "编辑";
                //btnVm2.KindCss = "btn-primary-outline";
                //btnVm2.NoEnable = true;
                //var btnVm3 = new buttonFile.ui.ButtonVm();
                //btnVm3.DisplayName = "详情";
                //btnVm3.KindCss = "btn-primary-outline";
                //btnVm3.NoEnable = true;
                //this.BtnList.push(btnVm1);
                //this.BtnList.push(btnVm2);
                //this.BtnList.push(btnVm3);
                //this.BtnList.forEach((btn) => {
                //    btn.ClickFun = (a) => {
                //        this.buttonClickCommond(a);
                //    };
                //});
                btnVm.ClickFun = function (a) {
                    _this.buttonClickCommond(a);
                };
                //var btnVm1 = new buttonFile.ui.ButtonVm();
                //btnVm1.DisplayName = "删除";
                //btnVm1.NoEnable = true;
                //var btnVm2 = new buttonFile.ui.ButtonVm();
                //btnVm2.DisplayName = "编辑";
                //btnVm2.NoEnable = true;
                //var btnVm3 = new buttonFile.ui.ButtonVm();
                //btnVm3.DisplayName = "详情";
                //btnVm3.NoEnable = true;
                //this.BtnList.push(btnVm1);
                //this.BtnList.push(btnVm2);
                //this.BtnList.push(btnVm3);
                //this.BtnList.forEach((btn) => {
                //    btn.ClickFun = (a) => {
                //        this.buttonClickCommond(a);
                //    };
                //});
            };
            ExamOrderPageVm.prototype.buttonClickCommond = function (obj) {
                switch (obj.DisplayName) {
                    case "选择项目":
                        this.selectOpt();
                        break;
                    default:
                        break;
                }
            };
            //public getSelectValues() {
            //    var _list: data.ExamOrder.IExamListData[] = [];
            //    this.RowList.forEach((r) => {
            //        var ck = r.SingleCheckboxVm;
            //        if (ck.vmDataValueGet() == "true") {
            //            _list.push(r.RowData);
            //        }
            //    });
            //    console.log(_list);
            //    return _list;
            //}
            //public checkCheckBox(val: string, checkDom: domFile.Core.DomVm): void {
            //    window["isHand"] = true;
            //    var isCheck = false;
            //    var isAllCheck = true;
            //    var checkCount = 0;
            //    if (val == "true") {
            //        isCheck = true;
            //    }
            //    this.RowList.forEach((row) => {
            //        var chk = row.SingleCheckboxVm;
            //        var _val = chk.dataValue();
            //        if (_val == "true" && checkDom != chk) {
            //            isCheck = true;
            //            checkCount++;
            //        }
            //        if (checkDom == chk) {
            //            if (val == "true") {
            //                checkCount++;
            //            }
            //        }
            //    });
            //    isAllCheck = this.RowList.length == checkCount ? true : false;
            //    this.AllCheck.vmDataValueSet(isAllCheck ? "true" : "false");
            //    this.AllCheck.forceUpdate("", () => {
            //        window["isHand"] = false;
            //    })
            //}
            //public allCheckChecked(val: string, checkDom: domFile.Core.DomVm): void {
            //    if (!window["isHand"]) {
            //        this.CheckBoxList.forEach((chk) => {
            //            chk.reactDataValueSet(val);
            //        });
            //        this.RowList.forEach((row) => {
            //            var chk = row.SingleCheckboxVm;
            //            chk.reactDataValueSet(val);
            //        })
            //    }
            //}
            ExamOrderPageVm.prototype.init = function (config) {
            };
            ExamOrderPageVm.prototype.loadPageData = function (pageIndex) {
                var _page = { PageNo: pageIndex };
            };
            ExamOrderPageVm.prototype.getData = function (model) {
                if (!model) {
                    this.ListData = { List: [], Pager: { PageNo: 0, PageSize: 10, TotalCount: 100 } };
                    var data = this.ListData;
                }
                else {
                    this.ListData = { Pager: null, List: [] };
                    this.ListData.Pager = model.Pager;
                    this.ListData.List = model.List;
                }
            };
            ExamOrderPageVm.prototype.Search = function (val) {
                var _this = this;
                if (val != "" && val != null) {
                    urlFile.Core.AkPost("/MedicalCenter/Reservation/SearchMemberReservation", { searchText: val }, function (data) {
                        var _data = data.Data;
                        if (_data) {
                            if (_data.MemberData == null) {
                                alert("查询无结果！");
                                urlFile.Core.AkUrl.Current().openUrl("$eee$", true);
                                urlFile.Core.AkUrl.Current().openUrl("$ExamOrderPage$", true);
                                _this.forceUpdate("");
                                return;
                            }
                            var Iconfig = {
                                data: _data,
                                flag: "new"
                            };
                            _this.InsertMaster = new insertFile.ExamInsert.ExamInsertVm(Iconfig);
                            _this.initGridForm(_data.ReservationData.ItemListData, _data.ReservationData.ExamFee);
                            _this.InsertMaster.IsChange = true;
                            _this.GridFormVm.IsChange = true;
                            _this.forceUpdate("");
                        }
                    });
                }
                else {
                    alert("请输入查询内容！");
                    return;
                }
            };
            ExamOrderPageVm.prototype.submit = function () {
                var _this = this;
                //var postData = [];
                //var masterRow = this.InsertMaster;
                //var resultcommonData = masterRow.RowData;
                //postData.push(resultcommonData);
                //var jsonData = JSON.stringify(postData);
                var masterRow = this.InsertMaster;
                var data = masterRow.getData();
                data.ReservationData.ExamFee = this.ExamPrice;
                var itemList = [];
                this.GridFormVm.RowList.forEach(function (a) {
                    itemList.push(a.RowData);
                });
                data.ReservationData.ItemListData = itemList;
                if (data.ReservationData.ItemListData.length == 0) {
                    alert("请选择项目！");
                    return;
                }
                var _isSuccess = masterRow.legal();
                if (_isSuccess) {
                    urlFile.Core.AkPost("/MedicalCenter/Reservation/AddMemberReservation", {
                        reservation: JSON.stringify(data)
                    }, function (a) {
                        if (a.Content == "ok") {
                            utilFile.Core.Util.Noty("预约成功");
                            urlFile.Core.AkUrl.Current().openUrl("$eee$", true);
                            urlFile.Core.AkUrl.Current().openUrl("$ExamOrderPage$", true);
                            _this.forceUpdate("");
                        }
                        else {
                            utilFile.Core.Util.Noty("数据新增失败");
                        }
                    });
                }
            };
            ExamOrderPageVm.prototype.Open = function () {
                var masterRow = this.InsertMaster;
                var data = masterRow.getData();
                data.ReservationData.ExamFee = this.ExamPrice;
                var itemList = [];
                this.GridFormVm.RowList.forEach(function (a) {
                    itemList.push(a.RowData);
                });
                data.ReservationData.ItemListData = itemList;
                if (data.ReservationData.ItemListData.length == 0) {
                    alert("请选择项目！");
                    return;
                }
                var _isSuccess = masterRow.legal();
                if (_isSuccess) {
                    urlFile.Core.AkPost("/MedicalCenter/Reservation/MemberExamRegister", {
                        registerInfo: JSON.stringify(data)
                    }, function (a) {
                        if (a.Content == "ok") {
                            utilFile.Core.Util.Noty("开单成功！");
                            urlFile.Core.AkUrl.Current().openUrl("$eee$", true);
                            urlFile.Core.AkUrl.Current().openUrl("$ExamOrderPage$", true);
                        }
                    });
                }
            };
            ExamOrderPageVm.prototype.loadPage = function (callback) {
                var Iconfig = {
                    flag: "new"
                };
                this.getData();
                this.InsertMaster = new insertFile.ExamInsert.ExamInsertVm(Iconfig);
                urlFile.Core.AkPost("", {}, function (a) {
                    if (callback) {
                        callback();
                    }
                });
            };
            ExamOrderPageVm.prototype.selectOpt = function () {
                this.PickDomObj.modalObj.open();
                this.emitAppEvent("PackageorItemChecked", this.UniId, this.IsPackageSelected);
            };
            //删除
            ExamOrderPageVm.prototype.delOpt = function (vals) {
                var _this = this;
                if (confirm("你确定要删除 所选中的数据吗 ？？")) {
                    urlFile.Core.AkPost("/MedicalCenter/Unit/RemoveUnits", { fids: vals }, function (data) {
                        var _data = data.Content;
                        if (_data == "ok") {
                            _this.loadPageData(0);
                        }
                    });
                }
            };
            //详情
            ExamOrderPageVm.prototype.detailOpt = function (vals) {
                //urlFile.Core.AkUrl.Current().openUrl("", true);
                alert("你点击了详情");
            };
            //编辑
            ExamOrderPageVm.prototype.editOpt = function (vals) {
                //urlFile.Core.AkUrl.Current().openUrl("", true);
                alert("你点击了编辑");
            };
            return ExamOrderPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        ExamOrderPage.ExamOrderPageVm = ExamOrderPageVm;
        var ExamOrderPageStates = (function (_super) {
            __extends(ExamOrderPageStates, _super);
            function ExamOrderPageStates() {
                _super.apply(this, arguments);
            }
            return ExamOrderPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        ExamOrderPage.ExamOrderPageStates = ExamOrderPageStates;
        var ExamOrderPageProps = (function (_super) {
            __extends(ExamOrderPageProps, _super);
            function ExamOrderPageProps() {
                _super.apply(this, arguments);
            }
            return ExamOrderPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        ExamOrderPage.ExamOrderPageProps = ExamOrderPageProps;
        iocFile.Core.Ioc.Current().RegisterType("ExamOrderPage", basewedPageFile.Web.BaseWebPageVm, ExamOrderPageVm);
    })(ExamOrderPage = exports.ExamOrderPage || (exports.ExamOrderPage = {}));
});
