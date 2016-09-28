import domFile = require("./../../01core/0Dom");
import iocFile = require("./../../01core/Ioc");
//import domFile = require("./../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../01core/Url");
import basewedPageFile = require("./../../04page/BaseWebPage");
import pagination = require("./../../05tool/Pagination");
import React = require("react");
import ReactDOM = require("react-dom");
import buttonFile = require("./../../05tool/Button");
import singleCheckFile = require("./../../02col/02Mulite/SingleCheckBox");
import examOrderDomFile = require("./examOrderGridRowMaster");
//import textFile = require("./../../02col/01single/Text");
//import comboFile = require("./../../02col/02Mulite/Combo");
//import dateFile = require("./../../02col/01single/Date");
import data = require("./data");
import insertFile = require("./examOrderInsertMaster");
import gridFormFile = require("./examOrderGridFormDom");
import gridRowFile = require("./examOrderGridRowMaster");
import pickLeftDomFile = require("./newExamOrder/ExamPackagePickListDom");
import PickDomFile = require("./../../05tool/Picker/PickDom");
import eventFile = require("./../../01core/Event");

export module ExamOrderPage {
    export class ExamOrderPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }
    export class ExamOrderPageReact extends basewedPageFile.Web.BaseWebPageReact<ExamOrderPageProps, ExamOrderPageStates, ExamOrderPageAction> implements domCore.IReact {
        public state = new ExamOrderPageStates();
        public pSender(): React.ReactElement<any> {
            var bottom = this._initBottom();
            //var header = this.initHeader();
            var button = this._initBtns();
            var insertForm = this.initInsertForm();
           // var initHandle = this._initHandle();
            return (
                <div>
                    {insertForm}
                    {button}
                    {this.props.Vm.GridFormVm.intoDom() }
                    {bottom}
                    <div className="Hf-overflow" style={{ height: 1, width: 1 }}>{this.props.Vm.PickDomObj.intoDom() }
                    </div>
                </div>
            )
        }
        public _initHandle(): React.ReactElement<any> {
            return <div className="YSm-handle clearfix">
                <div className="col-lg-6 col-md-6 YSm-search">
                    <input className="col-lg-11 col-md-10 YSu-border-blue" type="text" placeholder="输入身份证、档案号查询" value={this.props.Vm.SearchID} onChange={(e) => { this.fun_linkName(e); } } />
                    <a className="col-lg-1 col-md-2 btn btn-primary" onClick={() => { this.fun_SearchBtn(); } }>查询</a>
                </div>
            </div>;
        }
        //public initBottom(): React.ReactElement<any> {
        //    return (
        //        <div className="col-lg-12 col-md-12  clearfix text-center">
        //                <a className="btn btn-danger-outline"  onClick={() => { this.fun_Submit(); } }>确认预约</a>
        //                <a className="btn btn-danger"  onClick={() => { this.fun_Open(); } }>开单</a>
        //        </div>
        //    )
        //}

        public _initBottom(): React.ReactElement<any> {
            return <div className={(this.props.Vm.Is10 ? " col-lg-12 col-md-12 Hg-default-left " : " col-lg-10 col-md-10 ") + "YSm-fixed-bottom"}>
                <div className="col-lg-12 col-md-12 clearfix">
                    <div className="pull-left">
                        <span>合计检查<b>{this.props.Vm.ExamItemCount}</b>项， 总费用<strong>{this.props.Vm.ExamPrice}</strong>元</span>
                    </div>
                    <div className="pull-right">
                        <a className="btn btn-danger-outline"  onClick={() => { this.fun_Submit(); } }>修改预约</a>
                        <a className="btn btn-danger" onClick={() => { this.fun_Open(); } }>开单</a>
                    </div>
                </div>
            </div>;
        }


        public _initBtns(): React.ReactElement<any> {
            return (
                <div className="YSm-table-btngroup">
                    <div className="btn-group btn-group-sm">
                        {this.props.Vm.BtnList.map((btn) => {
                            return this._tDom(btn);
                        }) }
                    </div>
                </div>
            )
        }

        private fun_linkName(e) {
            var _val = e.target["value"];
            this.props.Vm.SearchID = _val;
            this.forceUpdate();
        }
        public fun_SearchBtn() {
            this.props.Vm.Search(this.props.Vm.SearchID);
        }
        public fun_Submit() {
            this.props.Vm.submit();
        }
        public fun_Open() {
            this.props.Vm.Open();
        }
        public initInsertForm(): React.ReactElement<any> {
            var _insertForm = this.createInsertForm();
            return _insertForm;
        }

        public createInsertForm(): React.ReactElement<any> {
            return this.props.Vm.InsertMaster.intoDom();
        }
    }

    export interface IExamOrderPageConfig {
        Is10: boolean;

    }

    export interface IPickItemDomConfig {
        Text: string;
        Key: string;

    }

    export class ExamOrderPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = ExamOrderPageReact;
        public BtnList = new Array<buttonFile.ui.ButtonVm>();
        public ListData: data.ExamOrder.IExamPagerData;
        public AllCheck: singleCheckFile.ui.SingleCheckBoxVm;
        public CheckBoxList = new Array<singleCheckFile.ui.SingleCheckBoxVm>();
        public InsertMaster: insertFile.ExamInsert.ExamInsertVm;
        public GridFormVm: gridFormFile.ExamOrderGridFormDom.ExamOrderGridFormDomVm;
        public SearchID: string;
        public PickDomObj: PickDomFile.PickDom.PickDomVm;
        public UniId: string;
        public ExamItemCount: number = 0;
        public ExamPrice: string = "0";
        public IsItemSelected: boolean = false;
        protected pIsHullAutoHide: boolean = true;
        public IsPackageSelected: boolean = true; //是否选择套餐

        public Is10: boolean = true;

        public constructor(config?: IExamOrderPageConfig) {
            super();
            this.listenPageButtom();
            this.initBtnList();
            this.GridFormVm = new gridFormFile.ExamOrderGridFormDom.ExamOrderGridFormDomVm();
            this.UniId = eventFile.App.getUniId().toString();

            var _itemList: IPickItemDomConfig[] = [];

            var _LeftDomVmObj = new pickLeftDomFile.ExamPackagePickListDom.ExamPackagePickListDomVm({ UniId: this.UniId });
            this.PickDomObj = new PickDomFile.PickDom.PickDomVm(
                {

                    UniId: this.UniId,
                    PickItemList: _itemList,
                    PickerContainer:
                    {
                        UniId: this.UniId,
                        IsSingle: true,
                        LeftDomVmObj: _LeftDomVmObj,
                        IsPickSelectHide: true,
                        SetSureCustomerObjFun: (items) => {
                            return _LeftDomVmObj.getObjByItems(items);
                        }
                    }
                }
            );

            this.listenAppEvent("ExamPackageItemsDisplay", this.UniId, (item: IPickItemDomConfig) => {
                //alert(item.Key);
                this.IsPackageSelected = true;
                urlFile.Core.AkPost("/MedicalCenter/PackageSelector/FetchPackageExamItems", { packageId: item.Key }, (data) => {
                    var _data = data.Data;
                    if (_data) {
                        this.GridFormVm.RowList = [];
                        _data.forEach((rowData, index) => {
                            var rowConfig = { RowData: rowData };
                            var rowVm = new gridRowFile.ExamOrderGridRow.ExamOrderGridRowVm(rowConfig);
                            this.GridFormVm.RowList.push(rowVm);
                        });
                        this.IsItemSelected = true;
                        this.ExamItemCount = this.GridFormVm.RowList.length;
                        this.ExamPrice = this.ExamItemCount > 0 ? this.GridFormVm.RowList[0].RowData.PackagePrice : "0";

                        this.GridFormVm.IsChange = true;
                        this.forceUpdate("");

                    }
                });
            });

            this.listenAppEvent("picker-sure", this.UniId, (items: IPickItemDomConfig[]) => {
                this.IsPackageSelected = false;
                var _list = [];
                items.forEach(a => {
                    _list.push(a.Key);
                });
                urlFile.Core.AkPost("/MedicalCenter/PackageSelector/FetchExamItems", { itemIds: _list.join(",") }, (data) => {
                    var _data = data.Data;
                    if (_data) {
                        this.initAddGridForm(_data, _data.Price);
                        this.GridFormVm.IsChange = true;
                        this.forceUpdate("");

                    }
                });
            });

        }

        public listenPageButtom() {
            this.listenAppEvent("pageButtom", "page", (is10: boolean) => {
                if (this.Is10 != is10) {
                    this.Is10 = is10;
                    this.forceUpdate("");
                }
            });
        }
        private initAddGridForm(data: data.ExamOrder.IMemberExamItemData[], Fee: number) {
            if (data) {
                this.GridFormVm.RowList = [];
                var totalPrice = 0;
                data.forEach((rowData, index) => {
                    var rowConfig = { RowData: rowData };
                    var rowVm = new gridRowFile.ExamOrderGridRow.ExamOrderGridRowVm(rowConfig);
                    this.GridFormVm.RowList.push(rowVm);
                    totalPrice += parseFloat(rowData.Price);
                });
                this.ExamPrice = totalPrice.toString();
                this.ExamItemCount = this.GridFormVm.RowList.length;
            }
        }
        private initGridForm(data: data.ExamOrder.IMemberExamItemData[], Fee: number) {
            if (data) {
                this.GridFormVm.RowList = [];
                var totalPrice = 0;
                data.forEach((rowData, index) => {
                    var rowConfig = { RowData: rowData };
                    var rowVm = new gridRowFile.ExamOrderGridRow.ExamOrderGridRowVm(rowConfig);
                    this.GridFormVm.RowList.push(rowVm);
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
        }

        private initBtnList() {
            var btnVm = new buttonFile.ui.ButtonVm();
            btnVm.DisplayName = "选择项目";
            //btnVm.IconCss = "plus";
            btnVm.KindCss = "btn-primary";
            btnVm.NoEnable = false;
            this.BtnList.push(btnVm);;

            btnVm.ClickFun = (a) => {
                this.buttonClickCommond(a);
            };
        }

        public buttonClickCommond(obj: buttonFile.ui.ButtonVm) {
            switch (obj.DisplayName) {
                case "选择项目":
                    this.selectOpt();
                    break;
                default:
                    break;
            }
        }


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
        private init(config: IExamOrderPageConfig) {
        }
        public loadPageData(pageIndex: number) {
            var _page = { PageNo: pageIndex };
        }
        public getData(model?: data.ExamOrder.ExamOrderPagerListData): void {
            if (!model) {
                this.ListData = { List: [], Pager: { PageNo: 0, PageSize: 10, TotalCount: 100 } };
                var data = this.ListData;
                //var dt1 = { mealID: "ss", ItemCode: "dsdfsd", DepartmentId: "dd78926", Discount: "4561", FID: "d456d", Price: "dd8863", Remark: "d78545d", ReservationAmount: "dd458421" };
                //var dt2 = { mealID: "s0001", ItemCode: "dd4546d", DepartmentId: "456781dd", Discount: "02319", FID: "d456d", Price: "d7328d", Remark: "dd24288", ReservationAmount: "dd54321" };
                //var dt3 = { mealID: "ss00002", ItemCode: "456789dd", DepartmentId: "d5418d", Discount: "7891564879", FID: "d87815d", Price: "d28425d", Remark: "d45785d", ReservationAmount: "dd423788" };
                //var dt4 = { mealID: "s0050s", ItemCode: "dd87972", DepartmentId: "dd223189", Discount: "1308", FID: "d123457d", Price: "dd78589", Remark: "dd57584", ReservationAmount: "dd45321" };
                //var dt5 = { mealID: "ss56465", ItemCode: "dd451789", DepartmentId: "d123457d", Discount: "748970", FID: "d89651d", Price: "dd24998", Remark: "dd784578", ReservationAmount: "dd78424" };
                //data.List.push(dt1);
                //data.List.push(dt2);
                //data.List.push(dt3);
                //data.List.push(dt4);
                //data.List.push(dt5);
            } else {
                this.ListData = { Pager: null, List: [] };
                this.ListData.Pager = model.Pager;
                this.ListData.List = model.List;
            }
        }
        public Search(val: string) {
            urlFile.Core.AkPost("/MedicalCenter/Reservation/SearchReservationByNumber", { searchText: val }, (data) => {
                var _data = data.Data;
                if (_data) {

                    if (_data.MemberData == null) {
                        alert("查询无结果！")
                        urlFile.Core.AkUrl.Current().openUrl("$eee$", true);
                        urlFile.Core.AkUrl.Current().openUrl("$ExamOrderPage$", true);
                        this.forceUpdate("");
                        return;
                    }
                    var Iconfig: insertFile.ExamInsert.IExamInsertConfig = {
                        data: _data
                    }

                    this.InsertMaster = new insertFile.ExamInsert.ExamInsertVm(Iconfig);
                    this.initGridForm(_data.ReservationData.ItemListData, _data.ReservationData.ExamFee);
                    this.InsertMaster.IsChange = true;
                    this.GridFormVm.IsChange = true;
                    this.forceUpdate("");
                }
            });
        }
        public submit() {
            //var postData = [];
            //var masterRow = this.InsertMaster;
            //var resultcommonData = masterRow.RowData;
            //postData.push(resultcommonData);
            //var jsonData = JSON.stringify(postData);
            var masterRow = this.InsertMaster;
            var data = masterRow.getData();
            data.ReservationData.ExamFee = this.ExamPrice;
            var itemList = [];
            this.GridFormVm.RowList.forEach((a) => {
                itemList.push(a.RowData);
            });
            data.ReservationData.ItemListData = itemList;
            if (data.ReservationData.ItemListData.length == 0) {
                alert("请选择项目！");
                return;
            }
            var _isSuccess = masterRow.legal();
            if (_isSuccess) {
                urlFile.Core.AkPost("/MedicalCenter/Reservation/ModifyMemberReservation",
                    {
                        reservation: JSON.stringify(data)
                    },
                    (a) => {
                        if (a.Content == "ok") {
                            utilFile.Core.Util.Noty("修改成功");
                        }
                        else {
                            utilFile.Core.Util.Noty("数据新增失败");
                        }


                    });
            }
        }
        public Open() {
            var masterRow = this.InsertMaster;
            var data = masterRow.getData();
            data.ReservationData.ExamFee = this.ExamPrice;
            var itemList = [];
            this.GridFormVm.RowList.forEach((a) => {
                itemList.push(a.RowData);
            });
            data.ReservationData.ItemListData = itemList;
            if (data.ReservationData.ItemListData.length == 0) {
                alert("请选择项目！");
                return;
            }
            var _isSuccess = masterRow.legal();
            if (_isSuccess) {
                urlFile.Core.AkPost("/MedicalCenter/Reservation/MemberExamRegister",
                    {
                        registerInfo: JSON.stringify(data)
                    },
                    (a) => {
                        if (a.Content == "ok") {
                            utilFile.Core.Util.Noty("开单成功！");
                            //window.open("/MedicalCenter/PrintInsheet/MemberFinshPrints?ids=" + a.Data[0]);
                        }


                    });
            }
        }
        protected loadPage(callback?: () => any) {

            urlFile.Core.AkPost("/MedicalCenter/Reservation/SearchReservationByNumber", { searchText: this.Param1 }, (data) => {
                var _data = data.Data;
                if (_data) {

                    var Iconfig: insertFile.ExamInsert.IExamInsertConfig = {
                        data: _data,
                        flag:"edit"
                    }

                    this.InsertMaster = new insertFile.ExamInsert.ExamInsertVm(Iconfig);
                    this.initGridForm(_data.ReservationData.ItemListData, _data.ReservationData.ExamFee);
                    if (callback)
                    {
                        callback()
                    }
                }
            });
        }

        public selectOpt() {

            this.PickDomObj.modalObj.open();
            this.emitAppEvent("PackageorItemChecked", this.UniId, this.IsPackageSelected);
        }

        //删除
        public delOpt(vals: string) {
            if (confirm("你确定要删除 所选中的数据吗 ？？")) {
                urlFile.Core.AkPost("/MedicalCenter/Unit/RemoveUnits", { fids: vals }, (data) => {
                    var _data = data.Content;
                    if (_data == "ok") {
                        this.loadPageData(0);
                    }
                });

            }
        }
        //详情
        public detailOpt(vals: string) {
            //urlFile.Core.AkUrl.Current().openUrl("", true);
            alert("你点击了详情");
        }
        //编辑
        public editOpt(vals: string) {
            //urlFile.Core.AkUrl.Current().openUrl("", true);
            alert("你点击了编辑");
        }
        //public btnClickCommond(obj: buttonFile.ui.ButtonVm) {
        //    switch (obj.DisplayName) {
        //        case "新增":
        //            this.newOpt();
        //            break;
        //        case "删除":
        //            var _list = this.getSelectValues();
        //            var _ids = _list.map((a) => { a.FID }).join(",");
        //            this.delOpt(_ids);
        //            break;
        //        case "详情":
        //            var _list = this.getSelectValues();
        //            var _ids = _list.map((a) => { a.FID }).join(",");
        //            this.detailOpt(_ids);
        //            break;
        //        case "编辑":
        //            var _list = this.getSelectValues();
        //            var _ids = _list.map((a) => { a.FID }).join(",");
        //            this.editOpt(_ids);
        //            break;
        //        default:
        //            break;
        //    }
        //}
    }
    export class ExamOrderPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class ExamOrderPageProps extends basewedPageFile.Web.BaseWebPageProps<ExamOrderPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("EditExamOrderPage", basewedPageFile.Web.BaseWebPageVm, ExamOrderPageVm);
}