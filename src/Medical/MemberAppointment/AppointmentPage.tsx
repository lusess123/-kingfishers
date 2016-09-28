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
import Data = require("./Data");
import buttonFile = require("./../../05tool/Button");
import singleCheckFile = require("./../../02col/02Mulite/SingleCheckBox");
import AppointmentDomFile = require("./AppointmentGridRowMaster");

export module AppointmentPage {
    export class AppointmentPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class AppointmentPageReact extends basewedPageFile.Web.BaseWebPageReact<AppointmentPageProps, AppointmentPageStates, AppointmentPageAction> implements domCore.IReact {

        public state = new AppointmentPageStates();

        public pSender(): React.ReactElement<any> {
            var quantity = this._initQuantity();
            var header = this.initHeader();
            var body = this.initBody();
            var handle = this._initHandle();
            var groupBtn = this.initBtns();
            var pager = this._initPager();
            return <div>
                {quantity}
                {handle}
                <div className="YSm-table">
                    {groupBtn}
                    <div className="table-responsive">
                        <table className="table table-striped table-bordered table-hover">
                            {header}
                            {body}
                        </table>
                        {pager}
                    </div>
                   
                </div>
            </div>;
        }

        public _initQuantity(): React.ReactElement<any> {
            return <div className="YSm-quantity clearfix">
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 ">
                    <div className="panel panel-danger">
                        <p>总预约量：</p>
                        <h2>25666</h2>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 ">
                    <div className="panel panel-info">
                        <p>今日预约量：</p>
                        <h2>5666</h2>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div className="panel panel-success">
                        <p>我的预约量：</p>
                        <h2>66</h2>
                    </div>
                </div>
            </div>;
        }

        public _initHandle(): React.ReactElement<any> {
            return <div className="YSm-handle">
                <div className="col-lg-6 col-md-6 YSm-search">
                    <input className="col-lg-11 col-md-10 YSu-border-blue " type="text" placeholder="输入身份证、体检号、档案号查询" />
                    <a className="col-lg-1 col-md-2 btn btn-primary">查询</a>
                </div>
                <a className="btn btn-primary" onClick={() => { this.props.Vm.newOpt() } }><i className="fa fa-plus"></i>新增预约</a>
                <a href="" className="YSu-link">历史数据查询</a>
            </div>;
        }
        public initHeader(): React.ReactElement<any> {
            return (
                <thead className="thead-default">
                    <tr>
                        <th><i className="fa fa-square-o">{this.props.Vm.AllCheck.intoDom()}</i></th>
                        <th>预约人</th>
                        <th>身份证</th>
                        <th>来检时间</th>
                        <th>预约套餐</th>
                        <th>预约项目</th>
                    </tr>
                </thead>  
                )
        }
        public initBtns(): React.ReactElement<any> {
            return (
                <div className="YSm-table-btngroup">
                    <a className="btn btn-sm btn-primary">{this._createBtn("登记")}</a>
                    <div className="btn-group btn-group-sm">
                        <button type="button" className="btn btn-primary-outline">{this._createBtn("删除") }</button>
                        <button type="button" className="btn btn-primary-outline">{this._createBtn("编辑")}</button>
                    </div>
                </div>
                )
        }
        private _createBtn(displayName: string): React.ReactElement<any> {
            var btnVm = new buttonFile.ui.ButtonVm();
            btnVm.DisplayName = displayName;
            if (displayName == "删除" || displayName == "编辑") {
                btnVm.NoEnable = false;
            }
            if (displayName != "登记") {
                this.props.Vm.BtnList.push(btnVm);
            }
            btnVm.ClickFun = (a) => {
                this.props.Vm.btnClickCommond(a);
            }
            return btnVm.intoDom();
        }
        public _initPager(): React.ReactElement<any> {
            var pagerVm = new pagination.tool.PaginationVm();
            var pager = this.props.Vm.ListData.Pager;
            pagerVm.PageNo = pager.PageNo;
            pagerVm.PageSize = pager.PageSize;
            pagerVm.TotalCount = pager.TotalCount;

            pagerVm.PageClickEvent = (pageIndex) => {
                this.props.Vm.loadPageData(pageIndex);
            }
            return pagerVm.intoDom();
        }
        public creatSingleCheckBox(obj?: any): React.ReactElement<any> {
            var singleCheckVm = new singleCheckFile.ui.SingleCheckBoxVm();
            singleCheckVm.Tag = obj;
            this.props.Vm.CheckBoxList.push(singleCheckVm);
            singleCheckVm.ChangeEventFun = ((val, col) => {
                this.props.Vm.checkCheckBox(val, col);
                return true;
            });
            return singleCheckVm.intoDom();
        }
        public creatGridRow(data: any, index: number): React.ReactElement<any> {
            var rowVm = new AppointmentDomFile.AppointmentGridRow.AppointmentGridRowVm();
            rowVm.RowData = data;
            rowVm.AppointObj = this.props.Vm;
            rowVm.RowNumber = index < 9 ? "0" + (index + 1) : (index + 1).toString();
            this.props.Vm.RowList.push(rowVm);
            rowVm.SingleCheckboxVm.ChangeEventFun = ((val, col) => {
                this.props.Vm.checkCheckBox(val, col);
                rowVm.forceUpdate("");
                return true;
            })
            return rowVm.intoDom();
        }
        public initBody(): React.ReactElement<any> {
            return (
                <tbody>
                    {this.props.Vm.ListData.List.map((data, index) => {
                        var rowVm = this.creatGridRow(data, index);
                        return [rowVm];
                    }) }
                </tbody>  
                )
        }
        
        
    }
    export interface IAppointmentPagerData {
        Pager: pagination.tool.Pagination;
        List: Array<IAppointmentData>;
    }
    export interface IAppointmentData {
        FID: string;
        ReservationNumber: string; //预约编号
        MemberId: string; //个人ID
        ExamDate: string;  // 体检时间
        ExamPackage: string; //体检套餐
        ExamItem: string; //体检项目
    }
    export interface IAppointmentPageConfig {
        
        data: IAppointmentPagerData;
    }
    export class AppointmentPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = AppointmentPageReact;
        public ListData: IAppointmentPagerData;
        public RowList = new Array<AppointmentDomFile.AppointmentGridRow.AppointmentGridRowVm>();
        public AllCheck: singleCheckFile.ui.SingleCheckBoxVm;
        public CheckBoxList = new Array<singleCheckFile.ui.SingleCheckBoxVm>();
        public BtnList = new Array<buttonFile.ui.ButtonVm>();
        public constructor(config?: IAppointmentPageConfig) {
            super();
            this.AllCheck = new singleCheckFile.ui.SingleCheckBoxVm();
            this.AllCheck.ChangeEventFun = ((val, col) => {
                this.allCheckChecked(val, col);
                return true;
            });
        }
        public getSelectValues() {
            var _list: IAppointmentData[] = [];
            this.RowList.forEach((r) => {
                var ck = r.SingleCheckboxVm;
                if (ck.vmDataValueGet() == "true") {
                    _list.push(r.RowData);
                }
            });
            console.log(_list);
            return _list;
        }
        public checkCheckBox(val: string, checkDom: domFile.Core.DomVm): void {
            window["isHand"] = true;
            var isCheck = false;
            var isAllCheck = true;
            var checkCount = 0;
            if (val == "true") {
                isCheck = true;
            }
            this.RowList.forEach((row) => {
                var chk = row.SingleCheckboxVm;
                var _val = chk.dataValue();
                if (_val == "true" && checkDom != chk) {
                    isCheck = true;
                    checkCount++;
                }
                if (checkDom == chk) {
                    if (val == "true") {
                        checkCount++;
                    }
                }
            });
            isAllCheck = this.RowList.length == checkCount ? true : false;

            this.AllCheck.vmDataValueSet(isAllCheck ? "true" : "false");
            this.AllCheck.forceUpdate("", () => {
                window["isHand"] = false;
            })
        }
        public allCheckChecked(val: string, checkDom: domFile.Core.DomVm): void {
            if (!window["isHand"]) {
                this.CheckBoxList.forEach((chk) => {
                    chk.reactDataValueSet(val);
                });
                this.RowList.forEach((row) => {
                    var chk = row.SingleCheckboxVm;
                    chk.reactDataValueSet(val);
                })
            }
        }
        private init(config: IAppointmentPageConfig) {
        }
        //登记
        public newOpt() {
            urlFile.Core.AkUrl.Current().openUrl("$ExamOrderPage$", false);
        }
        public editOpt(vals) {
            //urlFile.Core.AkUrl.Current().openUrl("$ExamOrderPage$", +vals +"$"，false);
            alert("您点击了编辑");
        }
        public delOpt(vals: string) {
            if (confirm("您确定要删除您选中的数据吗？")) {
                utilFile.Core.Util.Noty("数据删除成功!");
            }
        }
        public btnClickCommond(obj: buttonFile.ui.ButtonVm) {
            switch (obj.DisplayName) {
                case "登记":
                    this.newOpt();
                    break;
                case "删除":
                    var _list = this.getSelectValues();
                    var _ids = _list.map((a) => { a.FID }).join(",");
                    this.delOpt(_ids);
                    break;
                case "编辑":
                    var _list = this.getSelectValues();
                    var _ids = _list.map((a) => { a.FID }).join(",");
                    this.editOpt(_ids);
                    break;
                default:
                    break;

            }
        }
        public getData(model?: Data.Appointment.AppointmentPagerListData): void {
            if (!model) {
                this.ListData = { List: [], Pager: { PageNo: 0, PageSize: 10, TotalCount: 100 } };
                var data = this.ListData;
                var datatable1 = { FID: "00000001", ReservationNumber: "201606211708000001", MemberId: "000001", ExamDate: "2016-06-30", ExamPackage: "体检套餐A", ExamItem: "项目A，项目B， 项目C，项目D" };
                var datatable2 = { FID: "00000002", ReservationNumber: "201606211708000002", MemberId: "000002", ExamDate: "2016-07-08", ExamPackage: "体检套餐B", ExamItem: "项目A，项目B， 项目C，项目D" };
                var datatable3 = { FID: "00000003", ReservationNumber: "201606211708000003", MemberId: "000003", ExamDate: "2016-06-25", ExamPackage: "体检套餐C", ExamItem: "项目A，项目B， 项目C，项目D" };
                var datatable4 = { FID: "00000004", ReservationNumber: "201606211708000004", MemberId: "000004", ExamDate: "2016-06-26", ExamPackage: "体检套餐A", ExamItem: "项目A，项目B， 项目C，项目D" };
                var datatable5 = { FID: "00000005", ReservationNumber: "201606211708000005", MemberId: "000005", ExamDate: "2016-06-28", ExamPackage: "体检套餐D", ExamItem: "项目A，项目B， 项目C，项目D" };
                data.List.push(datatable1);
                data.List.push(datatable2);
                data.List.push(datatable3);
                data.List.push(datatable4);
                data.List.push(datatable5);
            } else {
                this.ListData = { Pager: null, List: [] };
                this.ListData.Pager = model.Pager;
                this.ListData.List = model.List;
            }
        }
        public loadPageData(pageIndex: number) {
            var _page = { PageNo: pageIndex };
        }
        protected loadPage(callback?: () => any) {
            
            this.getData();
            urlFile.Core.AkPost("", {}, (a) => {
                //var _data: Data.Appointment.AppointmentPagerListData = a.data;
                //this.getData(_data);

                if (callback) {
                    callback();
                }
            })
        }

    }
    export class AppointmentPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class AppointmentPageProps extends basewedPageFile.Web.BaseWebPageProps<AppointmentPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("AppointmentPage", basewedPageFile.Web.BaseWebPageVm, AppointmentPageVm);

}

