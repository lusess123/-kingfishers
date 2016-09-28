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
import NewGroupMaster = require("./NewGroupMaster");
import NewGroupTable = require("./NewGroupTable");
import DataFile = require("./../Data")
import buttonFile = require("./../../../../05tool/Button");
import singleCheckFile = require("./../../../../02col/02Mulite/SingleCheckBox");
import treeSelectorFile = require("./../../../../02col/03selector/TreeSelector");
import eventFile = require("./../../../../01core/Event");

export module NewGroupPage {
    export class NewGroupPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class NewGroupPageReact extends basewedPageFile.Web.BaseWebPageReact<NewGroupPageProps, NewGroupPageStates, NewGroupPageAction> implements domCore.IReact {

        public state = new NewGroupPageStates();
        public pSender(): React.ReactElement<any> {
            return <div>
                <div className="col-xl-3 col-lg-3 col-md-3">{ this.props.Vm.NewGroupMasterVm.intoDom()}</div>
                <div className="col-xl-9 col-lg-9 col-md-9">
                    {this._initBtnGroup() }
                    {this.props.Vm.NewGroupTableVm.intoDom() }
                    {this.props.Vm.PaginationVm.intoDom()}
                </div>
            </div>;
        }

  
        public _initBtnGroup(): React.ReactElement<any> {
            return <div className="YSm-table-btngroup">               
                    {this.props.Vm.initButtons() }
                <a className="btn btn-sm btn-primary" onClick={() => { this.props.Vm.newOpt("batch"); } }>添加批次</a>
            </div>;
        }
    }

    export interface IReactNewGroupPageVm extends basewedPageFile.Web.BaseWebPageVm {
        ComboVm: combo.ui.ComboVm;
        SingleCheckBoxVm: SingleCheckBox.ui.SingleCheckBoxVm;

    }

    export interface INewGroupPageConfig {
        Data: DataFile.Group.PagerListBatchData;

    }
    export class NewGroupPageVm extends basewedPageFile.Web.BaseWebPageVm implements IReactNewGroupPageVm {
        public ReactType = NewGroupPageReact;
        public ComboVm :combo.ui.ComboVm;
        public SingleCheckBoxVm = new SingleCheckBox.ui.SingleCheckBoxVm();
        public NewGroupMasterVm: NewGroupMaster.NewGroupMaster.NewGroupMasterVm;
        public NewGroupTableVm: NewGroupTable.NewGroupTable.NewGroupTableVm;
        public Data: DataFile.Group.IBatch[];
        public DataBtnList = new Array<buttonFile.ui.ButtonVm>();
        public CheckBoxList = new Array<singleCheckFile.ui.SingleCheckBoxVm>();
        public treeSelectorFile: treeSelectorFile.ui.TreeSingleSelectorVm;
        public AllCheck: singleCheckFile.ui.SingleCheckBoxVm;
        public PaginationVm: pagination.tool.PaginationVm;
        public PagerListData: DataFile.Group.PagerListBatchData;
        public flag: boolean = true;
        public Unid: string;
        public ReservationNumber: string = "New";
        protected pIsHullAutoHide: boolean = true;

        public constructor(config?: INewGroupPageConfig) {
            super();
            this.UniId = eventFile.App.getUniId().toString();
            this.treeSelectorFile = new treeSelectorFile.ui.TreeSingleSelectorVm();
            this.treeSelectorFile.RegName = "";
            this.PaginationVm = new pagination.tool.PaginationVm();
            this.PaginationVm.PageNo = 0;
            this.PaginationVm.PageSize = 0;
            this.PaginationVm.TotalCount = 0;
            this.PaginationVm.isPartHidden = true;
            this.listenAppEvent("New/NewGroupPage/loadPageData", this.UniId, (unId: string) => {
                this.loadPageData(0,unId)
            });
            this.listenAppEvent("Manage/NewGroupPage/InitPageData", this.UniId, (flag: boolean) => {
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

            this.NewGroupTableVm.RowList.forEach((r) => {
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
        public newOpt(vals: string) {
           var IsSccuss = this.NewGroupMasterVm.legal();
           var data = this.NewGroupMasterVm.RowData;
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
                        var New = this.ReservationNumber + "," + this.Unid + "|" + "NewPage"
                        urlFile.Core.AkUrl.Current().openUrl("$winBatchNewPage$" + New + "$", true);
                       }
                   });               
           }    
        }
        public GroupOpt(vals: string) {
            vals = "GroupRule" + "," + vals
            urlFile.Core.AkUrl.Current().openUrl("$NewGroupPage$#$GroupManagePage$" + vals + "$", false);
        }
        public MemberOpt(vals: string) {
            vals = "PersonalManage" + "," + vals
            urlFile.Core.AkUrl.Current().openUrl("$NewGroupPage$#$GroupManagePage$" + vals + "$", false);
        }  
        public BatchOpt(vals: string) {
            vals = "BatchDetail" + "," + vals
            urlFile.Core.AkUrl.Current().openUrl("$NewGroupPage$#$GroupManagePage$" + vals + "$", false);
        }  
        public ManageOpt(vals: string) {
            vals = "AccountManage" + "," + vals
            urlFile.Core.AkUrl.Current().openUrl("$NewGroupPage$#$GroupManagePage$" + vals + "$", false);
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
                case "BATCHNEWPAGE":
                    if (obj.BatchData) {
                        this.ReservationNumber = obj.num;
                        this.loadPageData(0,this.Unid)
                    }
                    break; 
                default:
                    break;
            }
        }
        public checkCheckBox(val: string, checkDom: domFile.Core.DomVm): void {
            var rowList = this.NewGroupTableVm.RowList;
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

                this.NewGroupTableVm.RowList.forEach((row) => {
                    var chk = row.SingleCheckVm;
                    chk.reactDataValueSet(val);
                });
            }
        }
        private init(unid?: string, data?: any) {
            this.Unid = unid
            data.Unit = unid
            var config1 = { RowData: data, UniId: this.UniId, IsSelectOpt: true }
            this.NewGroupMasterVm = new NewGroupMaster.NewGroupMaster.NewGroupMasterVm(config1);
            this.PagerListData = data.ItemList;
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
            else {
                this.PaginationVm.PageNo = 0;
                this.PaginationVm.PageSize = 0;
                this.PaginationVm.TotalCount = 0;
                this.PaginationVm.isPartHidden = true;
            }
            if (data.ItemList != null) {
                var config2 = { ListData: data.ItemList.ListData }

                this.NewGroupTableVm = new NewGroupTable.NewGroupTable.NewGroupTableVm(config2);
                this.NewGroupTableVm.RowList.forEach((row) => {
                    this.CheckBoxList.push(row.SingleCheckVm);
                    row.SingleCheckVm.ChangeEventFun = (val, col) => {
                        this.checkCheckBox(val, col);
                        return true;
                    };
                });
                this.AllCheck = this.NewGroupTableVm.AllCheck;
                this.AllCheck.ChangeEventFun = (val, col) => {
                    this.allCheckChecked(val, col);
                    return true;
                };
            }
            else
            {
                config2 = { ListData: [] }
                this.NewGroupTableVm = new NewGroupTable.NewGroupTable.NewGroupTableVm(config2);
            }
        }
        public InitPage(flag:boolean) {
            var config1 = { RowData: {}, UniId: this.UniId, IsSelectOpt: flag }
            this.NewGroupMasterVm = new NewGroupMaster.NewGroupMaster.NewGroupMasterVm(config1);
            var config2 = { ListData: [] }
            this.NewGroupTableVm = new NewGroupTable.NewGroupTable.NewGroupTableVm(config2);
            this.NewGroupTableVm.RowList.forEach((row) => {
                this.CheckBoxList.push(row.SingleCheckVm);
                row.SingleCheckVm.ChangeEventFun = (val, col) => {
                    this.checkCheckBox(val, col);
                    return true;
                };
            });
            this.AllCheck = this.NewGroupTableVm.AllCheck;
            this.AllCheck.ChangeEventFun = (val, col) => {
                this.allCheckChecked(val, col);
                return true
            };
            this.NewGroupTableVm.IsChange = true;
            this.NewGroupMasterVm.IsMulit = true;
            this.IsChange = true;
            this.forceUpdate("");

        }

        public loadPageData(pageIndex: number, unid: string) {
            var data = this.NewGroupMasterVm.RowData;
            if (data.Unit != "" || data.Unit != undefined)
            {
                var _page = { PageNo: pageIndex };
                urlFile.Core.AkPost("/MedicalCenter/NewGroup/FechBatchUnit",
                    {
                        pager: JSON.stringify(_page),
                        unitid: unid,
                        number: this.ReservationNumber
                    },
                    (a) => {
                        var data = a.Data[0]
                        this.init(unid, data)
                        this.NewGroupTableVm.IsChange = true;
                        this.NewGroupMasterVm.IsMulit = true;
                        this.IsChange = true
                        this.forceUpdate("");
                    });
            }
        }
        protected loadPage(callback?: () => any) {
            var config1 = { RowData: [], UniId: this.UniId, IsSelectOpt: true }
            this.NewGroupMasterVm = new NewGroupMaster.NewGroupMaster.NewGroupMasterVm(config1);
            var config2 = { ListData: []}
            this.NewGroupTableVm = new NewGroupTable.NewGroupTable.NewGroupTableVm(config2);
            this.NewGroupTableVm.RowList.forEach((row) => {
                this.CheckBoxList.push(row.SingleCheckVm);
                row.SingleCheckVm.ChangeEventFun = (val, col) => {
                    this.checkCheckBox(val, col);
                    return true;
                };
            });
            this.AllCheck = this.NewGroupTableVm.AllCheck;
            this.AllCheck.ChangeEventFun = (val, col) => {
                this.allCheckChecked(val, col);
                return true
            };
            if (callback) {
                callback();
            }
        }

    }
    export class NewGroupPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class NewGroupPageProps extends basewedPageFile.Web.BaseWebPageProps<NewGroupPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("NEWGROUPPAGE", basewedPageFile.Web.BaseWebPageVm, NewGroupPageVm);

}