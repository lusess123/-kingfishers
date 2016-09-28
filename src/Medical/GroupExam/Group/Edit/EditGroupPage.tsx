import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
//import domFile = require("./../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import basewedPageFile = require("./../../../../04page/BaseWebPage");
import React = require("react");
import ReactDOM = require("react-dom");
import SingleCheckBox = require("./../../../../02col/02Mulite/SingleCheckBox");
import combo = require("./../../../../02col/02Mulite/Combo");
import pagination = require("./../../../../05tool/Pagination");
import EditGroupMaster = require("./EditGroupMaster");
import EditGroupTable = require("./EditGroupTable");
import DataFile = require("./../Data")
import buttonFile = require("./../../../../05tool/Button");
import singleCheckFile = require("./../../../../02col/02Mulite/SingleCheckBox");
import treeSelectorFile = require("./../../../../02col/03selector/TreeSelector");
import eventFile = require("./../../../../01core/Event");

export module EditGroupPage {
    export class EditGroupPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class EditGroupPageReact extends basewedPageFile.Web.BaseWebPageReact<EditGroupPageProps, EditGroupPageStates, EditGroupPageAction> implements domCore.IReact {

        public state = new EditGroupPageStates();
        public pSender(): React.ReactElement<any> {
            return <div>
                <div className="col-xl-3 col-lg-3 col-md-3">{ this.props.Vm.EditGroupMasterVm.intoDom()}</div>
                <div className="col-xl-9 col-lg-9 col-md-9">
                    {this._initBtnGroup() }
                    {this.props.Vm.EditGroupTableVm.intoDom() }
                    {this.props.Vm.PaginationVm.intoDom()}
                </div>
            </div>;
        }

  
        public _initBtnGroup(): React.ReactElement<any> {
            return <div className="YSm-table-btngroup">               
                    {this.props.Vm.initButtons() }
                <a className="btn btn-sm btn-primary" onClick={() => { this.props.Vm.EditOpt("batch"); } }>添加批次</a>
                <a className="btn btn-sm btn-danger" onClick={() => { this.props.Vm.getMoney(); } }>￥结算</a>
            </div>;
        }
    }

    export interface IReactEditGroupPageVm extends basewedPageFile.Web.BaseWebPageVm {
        ComboVm: combo.ui.ComboVm;
        SingleCheckBoxVm: SingleCheckBox.ui.SingleCheckBoxVm;

    }

    export interface IEditGroupPageConfig {
        Data: DataFile.Group.PagerListBatchData;

    }
    export class EditGroupPageVm extends basewedPageFile.Web.BaseWebPageVm implements IReactEditGroupPageVm {
        public ReactType = EditGroupPageReact;
        public ComboVm :combo.ui.ComboVm;
        public SingleCheckBoxVm = new SingleCheckBox.ui.SingleCheckBoxVm();
        public EditGroupMasterVm: EditGroupMaster.EditGroupMaster.EditGroupMasterVm;
        public EditGroupTableVm: EditGroupTable.EditGroupTable.EditGroupTableVm;
        public Data: DataFile.Group.IBatch[];
        public DataBtnList = new Array<buttonFile.ui.ButtonVm>();
        public CheckBoxList = new Array<singleCheckFile.ui.SingleCheckBoxVm>();
        public treeSelectorFile: treeSelectorFile.ui.TreeSingleSelectorVm;
        public AllCheck: singleCheckFile.ui.SingleCheckBoxVm;
        public PaginationVm: pagination.tool.PaginationVm;
        public PagerListData: DataFile.Group.PagerListBatchData;
        public flag: boolean = true;
        public Unid: string;
        public ReservationNumber: string;
        protected pIsHullAutoHide: boolean = true;

        public constructor(config?: IEditGroupPageConfig) {
            super();
            this.UniId = eventFile.App.getUniId().toString();
            this.treeSelectorFile = new treeSelectorFile.ui.TreeSingleSelectorVm();
            this.treeSelectorFile.RegName = "";
            this.PaginationVm = new pagination.tool.PaginationVm();
            this.PaginationVm.PageNo = 0;
            this.PaginationVm.PageSize = 0;
            this.PaginationVm.TotalCount = 0;
            this.PaginationVm.isPartHidden = true;
            this.listenAppEvent("Edit/EditGroupPage/loadPageData", this.UniId, (unId: string) => {
                this.loadPageData(0,unId)
            });
            this.listenAppEvent("Manage/EditGroupPage/InitPageData", this.UniId, (flag: boolean) => {
                this.flag = flag;
                this.InitPage(flag)

            });
        }
        public initButtons(): React.ReactElement<any> {
            return  <div className="btn-group btn-group-sm">
                    {this.createButton("管理") }
                    {this.createButton("分组") }
                    {this.createButton("人员") }
                    {this.createButton("应收款管理") }
                    {this.createButton("删除") }
            </div>
        }
        private getSelectValues() {
            var _list: any = [];

            this.EditGroupTableVm.RowList.forEach((r) => {
                var ck = r.SingleCheckVm;
                if (ck.vmDataValueGet() == "true") {
                    _list.push(r.RowData);
                }
            });

            console.log(_list);
            return _list;
        }
        private createButton(displayName: string): React.ReactElement<any> {
            var btnVm = new buttonFile.ui.ButtonVm();
            btnVm.DisplayName = displayName;
            btnVm.NoEnable = true;
            btnVm.KindCss = " btn-primary-outline ";
            this.DataBtnList.push(btnVm);
            btnVm.ClickFun = (a) => {
                this.buttonClickCommond(a);
            };
            return btnVm.intoDom();
        }
        public buttonClickCommond(obj: buttonFile.ui.ButtonVm) {
            switch (obj.DisplayName) {
                case "管理":
                    var _list = this.getSelectValues();
                    if (_list.length >1 )
                    {
                        alert("只能选择一个体检批次");
                        return
                    }
                    var _ids = _list.map((n) => n.FID).join(",");
                    this.BatchOpt(_ids);
                    break;
                case "分组":
                    var _list = this.getSelectValues();
                    if (_list.length > 1) {
                        alert("只能选择一个体检批次");
                        return
                    }
                    var _ids = _list.map((n) => n.FID).join(",");
                    this.GroupOpt(_ids);
                    break;
                case "人员":
                    var _list = this.getSelectValues();
                    if (_list.length > 1) {
                        alert("只能选择一个体检批次");
                        return
                    }
                    var _ids = _list.map((n) => n.FID).join(",");
                    this.MemberOpt(_ids);
                    break;
                case "删除":
                    var _list = this.getSelectValues();
                    var _ids = _list.map((n) => n.FID).join(",");
                    if (_list.length > 1) {
                        alert("只能选择一个体检批次");
                        return
                    }
                    this.delOpt(_ids);
                    break;
                case "应收款管理":
                    var _list = this.getSelectValues();
                    var _ids = _list.map((n) => n.FID).join(",");
                    if (_list.length > 1) {
                        alert("只能选择一个体检批次");
                        return
                    }
                    this.ManageOpt(_ids);
                    break;
                default:
                    break;
            }
        }
        public getMoney()
        {
            if (confirm("你确定要结算 所选中的数据吗 ？？")) {
                var _list = this.getSelectValues();
                var _ids = _list.map((n) => n.FID).join(",");
                if (_list.length != 1)
                {
                    alert("请选择一个体检批次");
                    return;
                } 
                urlFile.Core.AkPost("/MedicalCenter/NewGroup/BalanceByBatch", { fid: _ids }, (data) => {
                    var _data = data.Data;
                    if (_data == "fail") {
                        alert("结算失败，已经结算！");
                        return;
                    }
                    else
                    {
                        alert("结算成功！");
                        this.loadPageData(0, this.Unid);
                    }
                });

            }
        }
        public EditOpt(vals: string) {
           var IsSccuss = this.EditGroupMasterVm.legal();
           var data = this.EditGroupMasterVm.RowData;
           data.FID = data.Unit;
           if (this.flag) {
               data.flag ="select"
           }
           else
           {
               data.flag = "input"
           }
           var postData = [];
           postData.push(data)

           var jsonData = JSON.stringify(data);                   
           if (IsSccuss)
           {
               urlFile.Core.AkPost("/MedicalCenter/NewGroup/AddOrModifyUnitByBatch", { unit: jsonData }, (data) => {
                   if (data) {
                        var _data = data.Data;
                        this.Unid = _data;
                        var New = this.ReservationNumber + "," + this.Unid + "|" +"EditPage"
                        urlFile.Core.AkUrl.Current().openUrl("$winBatchNewPage$" + New + "$", true);
                       }
                   });               
           }    
        }
        public GroupOpt(vals: string) {
            vals = "GroupRule" + "," + vals
            urlFile.Core.AkUrl.Current().openUrl("$$module/Medical/Base/medical_Unit_Reservation#$GroupManagePage$" + vals + "$", false);
        }
        public MemberOpt(vals: string) {
            vals = "PersonalManage" + "," + vals
            urlFile.Core.AkUrl.Current().openUrl("$$module/Medical/Base/medical_Unit_Reservation#$GroupManagePage$" + vals + "$", false);
        }  
        public BatchOpt(vals: string) {
            vals = "BatchDetail" + "," + vals
            urlFile.Core.AkUrl.Current().openUrl("$$module/Medical/Base/medical_Unit_Reservation#$GroupManagePage$" + vals + "$", false);
        }  
        public ManageOpt(vals: string) {
            vals = "AccountManage" + "," + vals
            urlFile.Core.AkUrl.Current().openUrl("$$module/Medical/Base/medical_Unit_Reservation#$GroupManagePage$" + vals + "$", false);
        }          
        public delOpt(vals: string)
        {
            if (confirm("你确定要删除 所选中的数据吗 ？？")) {
                urlFile.Core.AkPost("/MedicalCenter/NewGroup/RemoveBatchUnit", { fids: vals }, (data) => {
                    var _data = data.Content;
                    if (_data == "ok") {
                        this.loadPageData(0,this.Unid);
                    }
                });

            }
        }
        protected ReceivePageSend(config: basewedPageFile.Web.IPageActor, obj: any) {
            super.ReceivePageSend(config, obj);

            switch (config.FromModulename) {
                case "BATCHEDITPAGE":
                    if (obj.BatchData) {
                        this.loadPageData(0,this.Unid)
                    }
                    break; 
                default:
                    break;
            }
        }
        public checkCheckBox(val: string, checkDom: domFile.Core.DomVm): void {
            var rowList = this.EditGroupTableVm.RowList;
            window["isHand"] = true;
            var isCheck = false;
            var isAllCheck = true;
            var checkedCount = 0;
            if (val == "true") {
                isCheck = true;
            }
            rowList.forEach((row) => {
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
            this.DataBtnList.forEach((btn) => {
                btn.NoEnable = isCheck ? false : true;
                btn.forceUpdate("");
            });

            this.AllCheck.vmDataValueSet(isAllCheck ? "true" : "false");

            this.AllCheck.forceUpdate("", () => {
                window["isHand"] = false;
            });

        }
        public allCheckChecked(val: string, checkDom: domFile.Core.DomVm): void {

            if (!window["isHand"]) {

                this.EditGroupTableVm.RowList.forEach((row) => {
                    var chk = row.SingleCheckVm;
                    chk.reactDataValueSet(val);
                });
            }
        }
        private init(unid?: string, data?: any) {
            this.Unid = unid
            data.Unit = unid
            var config1 = { RowData: data, UniId: this.UniId, IsSelectOpt: true }
            this.EditGroupMasterVm = new EditGroupMaster.EditGroupMaster.EditGroupMasterVm(config1);
            this.PagerListData = data.ItemList;
            this.PaginationVm = new pagination.tool.PaginationVm();
            if (this.PagerListData != null) {
                var pager = this.PagerListData.Pager;
                this.PaginationVm.PageNo = pager.PageNo;
                this.PaginationVm.PageSize = pager.PageSize;
                this.PaginationVm.TotalCount = pager.TotalCount;
                this.PaginationVm.isPartHidden = true;
                this.PaginationVm.PageClickEvent = (pageIndex) => {
                    this.loadPageData(pageIndex, this.Unid);
                }
            }
            else
            {     
                this.PaginationVm.PageNo = 0;
                this.PaginationVm.PageSize =0;
                this.PaginationVm.TotalCount =0;
                this.PaginationVm.isPartHidden = true;
            }
            if (data.ItemList != null) {
                var config2 = { ListData: data.ItemList.ListData }
                this.EditGroupTableVm = new EditGroupTable.EditGroupTable.EditGroupTableVm(config2);
                this.EditGroupTableVm.RowList.forEach((row) => {
                    this.CheckBoxList.push(row.SingleCheckVm);
                    row.SingleCheckVm.ChangeEventFun = (val, col) => {
                        this.checkCheckBox(val, col);
                        return true;
                    };
                });
                this.AllCheck = this.EditGroupTableVm.AllCheck;
                this.AllCheck.ChangeEventFun = (val, col) => {
                    this.allCheckChecked(val, col);
                    return true;
                };
            }
            else
            {
                config2 = { ListData: [] }
                this.EditGroupTableVm = new EditGroupTable.EditGroupTable.EditGroupTableVm(config2);
            }
        }
        public InitPage(flag:boolean) {
            var config1 = { RowData: {}, UniId: this.UniId, IsSelectOpt: flag }
            this.EditGroupMasterVm = new EditGroupMaster.EditGroupMaster.EditGroupMasterVm(config1);
            var config2 = { ListData: [] }
            this.EditGroupTableVm = new EditGroupTable.EditGroupTable.EditGroupTableVm(config2);
            this.EditGroupTableVm.RowList.forEach((row) => {
                this.CheckBoxList.push(row.SingleCheckVm);
                row.SingleCheckVm.ChangeEventFun = (val, col) => {
                    this.checkCheckBox(val, col);
                    return true;
                };
            });
            this.AllCheck = this.EditGroupTableVm.AllCheck;
            this.AllCheck.ChangeEventFun = (val, col) => {
                this.allCheckChecked(val, col);
                return true
            };
            this.EditGroupTableVm.IsChange = true;
            this.EditGroupMasterVm.IsMulit = true;
            this.IsChange = true;
            this.forceUpdate("");

        }

        public loadPageData(pageIndex: number, unid: string) {
            var Unit = this.Param2;
            var NumberS = this.Param1;

            var data = this.EditGroupMasterVm.RowData;
            if (Unit != "" || Unit != undefined)
            {
                var _page = { PageNo: pageIndex };
                urlFile.Core.AkPost("/MedicalCenter/NewGroup/FechBatchUnit",
                    {
                        pager: JSON.stringify(_page),
                        unitid: unid,
                        number: NumberS

                    },
                    (a) => {
                        var data = a.Data[0]
                        this.init(unid, data)
                        this.EditGroupTableVm.IsChange = true;
                        this.EditGroupMasterVm.IsMulit = true;
                        this.IsChange = true
                        this.forceUpdate("");
                    });
            }
        }
        protected loadPage(callback?: () => any) {

            var Unit = this.Param2;
            var NumberS = this.Param1;
            this.ReservationNumber  =  NumberS
            if (Unit != "" || Unit != undefined) {
                var _page = { PageNo: 0 };
                urlFile.Core.AkPost("/MedicalCenter/NewGroup/FechBatchUnit",
                    {
                        pager: JSON.stringify(_page),
                        unitid: Unit,
                        number: NumberS
                    },
                    (a) => {
                        var data = a.Data[0]
                        this.init(Unit, data)
                        if (callback) {
                            callback();
                        }
                    });
            }


        }

    }
    export class EditGroupPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class EditGroupPageProps extends basewedPageFile.Web.BaseWebPageProps<EditGroupPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("EditGROUPPAGE", basewedPageFile.Web.BaseWebPageVm, EditGroupPageVm);

}