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

import thFile = require("./../../../../09Web/dom/ThDom");
import ThDom = thFile.Web.ThDomReact;
import TextFile = require("./../../../../02col/01single/Text");
import Text = TextFile.ui.TextReact;
import TextVm = TextFile.ui.TextVm;
import radioFile = require("./../../../../02col/01single/Radio");
import radio = radioFile.ui.RadioReact;
import radioVm = radioFile.ui.RadioVm;
import dataFile = require("./../data");

import ItemTitleRow = require("./UpdateSalaryTitleRow");

import UpdateSalartRow = require("./UpdateSalaryRow");

export module UpdateSalaryPage {
    export class UpdateSalaryPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class UpdateSalaryPageReact extends basewedPageFile.Web.BaseWebPageReact<UpdateSalaryPageProps, UpdateSalaryPageStates, UpdateSalaryPageAction> implements domCore.IReact {

        public state = new UpdateSalaryPageStates();
        public pSender(): React.ReactElement<any> {
            return <div className="p-a-md">
                {this._initMoneyDetial() }
                {this._initTable() }
            </div>;
        }

        public _initMoneyDetial(): React.ReactElement<any> {
            return <div className="clearfix YSm-detail-money">
                <ul className="nav nav-pills pull-left">
                    <li className="nav-item"><label>薪资主题：</label><span>{this.props.Vm.PageData.SalaryData.Title}</span></li>
                    <li className="nav-item"><label>薪资套账：</label><span>{this.props.Vm.PageData.SalaryData.TemplateName}</span></li>
                    <li className="nav-item"><label>薪资月份：</label><span>{this.props.Vm.PageData.SalaryData.Month}</span></li>
                    <li className="nav-item"><label>人员总数：</label><span>{this.props.Vm.PageData.SalaryData.UserNumbers}</span></li>
                    <li className="nav-item"><label>薪资总额：</label><span>{this.props.Vm.PageData.SalaryData.SalaryTotal}</span></li>
                </ul>
                <div className="pull-right">
                    <a className="btn btn-sm btn-primary"  onClick={() => { this.Submit() } }>保存</a>
                </div>
            </div>;
        }

        public Submit() {
            this.props.Vm.Submit();
        }

        //public _initForm(): React.ReactElement<any> {
        //    return <form className="clearfix">
        //        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 form-group  form-inline clearfix">
        //            <label className="col-md-5 col-sm-3 form-control-label text-right">编号/姓名：</label>
        //            <div className="col-md-7 col-sm-9">{this.props.Vm.TextObj.intoDom() }</div>
        //        </div>
        //    </form>;
        //}

        public _initTable(): React.ReactElement<any> {
            var theader = <thead className="thead-default">
                {this.initHeader() }
            </thead>
            var tbody = this.initBody();

            var table = <table className="table table-striped table-bordered table-hover">{theader}{tbody}</table>;
            return <div className="table-responsive"  onScroll={(e) => { this.fun_Scroll(e); } }>{table}</div>;


        }
        private fun_Scroll(e: React.UIEvent) {
            var _$obj = $(e.target);
            this.props.Vm.ScrollAuto(_$obj.scrollLeft());
        }
        public initHeader(): React.ReactElement<any> {
            return <tr>
                <th>员工编号</th>
                <th>姓名</th>
                <th>日期</th>
                {this.props.Vm.ItemTitleList.map(r => {
                    return r.intoDom();
                }) }
            </tr>
        };
        public initBody(): React.ReactElement<any> {
            return <tbody>
                {this.props.Vm.SalartRowList.map(r => {
                    return r.intoDom()
                }) }
            </tbody>;
        };

        private getThDomVM(w?: number) {
            var _ther = new thFile.Web.ThDomVm();
            if (w) {
                _ther.Width = w;
            }
            return _ther;
        }

    }

    export interface IReactUpdateSalaryPageVm extends basewedPageFile.Web.BaseWebPageVm {
        ScrollAuto(left: number);
        TextObj: TextFile.ui.TextVm;
        RadioObj: radioFile.ui.RadioVm;
        PageData: dataFile.Data.ISalaryPageData;
        ItemTitleList: ItemTitleRow.UpdateSalaryTitleRow.UpdateSalaryTitleRowVm[];
        RowList: dataFile.Data.ISalaryItemSet[];
        UserList: dataFile.Data.IUsersData[];
        SalartRowList: UpdateSalartRow.UpdateSalaryRow.UpdateSalaryRowVm[];
        ItemList: dataFile.Data.SalaryItemValueOrCount[];
        Submit(): void;
    }

    export interface IUpdateSalaryPageConfig {
        SalaryPageData: dataFile.Data.ISalaryPageData;

    }
    export class UpdateSalaryPageVm extends basewedPageFile.Web.BaseWebPageVm implements IReactUpdateSalaryPageVm {
        public ReactType = UpdateSalaryPageReact;

        public IsAcsRelative: boolean = false;
        public LeftNum: number = 0;
        public TextObj: TextVm = new TextFile.ui.TextVm();
        public RadioObj: radioVm = new radioFile.ui.RadioVm();
        public PageData: dataFile.Data.ISalaryPageData;
        public ItemList: dataFile.Data.SalaryItemValueOrCount[] = [];
        public ItemTitleList: ItemTitleRow.UpdateSalaryTitleRow.UpdateSalaryTitleRowVm[] = [];
        public RowList: dataFile.Data.ISalaryItemSet[] = [];
        public UserList: dataFile.Data.IUsersData[] = [];
        public SalartRowList: UpdateSalartRow.UpdateSalaryRow.UpdateSalaryRowVm[] = [];
        public SubmitData: dataFile.Data.ISalaryItemSet[];
        public Month: string;
        public fid: string;

        public constructor(config?: IUpdateSalaryPageConfig) {
            super();
            this.RadioObj.ItemList = [{ Value: "0", Text: "在职" }, { Value: "1", Text: "离职" }]
            this.listenAppEvent("SendToPage", this.UniId, (_data: dataFile.Data.ISingleItemDate) => {
                var _config: dataFile.Data.ISalaryItemSet = { UserID: _data.UserID, SalaryItemValue: [] };
                _config.SalaryItemValue.push(_data.SalaryItemValue);
                this.SubmitData.map(s => {
                    if (s.UserID.UserId == _data.UserID.UserId) {
                        s.SalaryItemValue = s.SalaryItemValue.filter(row => {
                            return row.SalaryItemID.FID != _data.SalaryItemValue.SalaryItemID.FID

                        })
                    }
                })
                this.SubmitData.map(s => {
                    if (s.UserID.UserId == _data.UserID.UserId) {
                        s.SalaryItemValue.push(_data.SalaryItemValue);
                    }
                })
                this.IsMulit = true;
                this.IsChange = true;
                this.forceUpdate("");
            });
        }

        public ScrollAuto(left: number) {
            this.IsAcsRelative = left > 0;
            this.LeftNum = left;
            this.forceUpdate("");
        }


        private init(config: IUpdateSalaryPageConfig) {
            if (config) {
                this.PageData = config.SalaryPageData;
                this.ItemList = config.SalaryPageData.ItemList;
                this.RowList = config.SalaryPageData.SalaryItemSet;
                this.UserList = config.SalaryPageData.UserList;
                this.SubmitData = config.SalaryPageData.SalaryItemSet;
            }
            this.ItemList.map(a => {
                if (a.Type != "绩效项") {
                    var config: ItemTitleRow.UpdateSalaryTitleRow.IUpdateSalaryTitleRowConfig = { Data: a, Unid: this.UniId };
                    var _row = new ItemTitleRow.UpdateSalaryTitleRow.UpdateSalaryTitleRowVm(config);
                    _row.IsChange = true;
                    _row.IsMulit = true;
                    this.ItemTitleList.push(_row);
                }
            })
            this.RowList.map(a => {
                this.UserList.map(b => {
                    if (a.UserID == b.UserId) {
                        var _config: UpdateSalartRow.UpdateSalaryRow.IUpdateSalaryRowConfig = { Data: this.ItemList, UserData: b, DataValue: a, Unid: this.UniId, Month: this.PageData.SalaryData.Month };
                        var _rowDom = new UpdateSalartRow.UpdateSalaryRow.UpdateSalaryRowVm(_config);
                        _rowDom.IsChange = true;
                        _rowDom.IsMulit = true;
                        this.SalartRowList.push(_rowDom);
                    }

                })


            })


        }
        protected loadPage(callback?: () => any) {
            this.fid = this.Param1;
            urlFile.Core.AkPost("/HospPerformance/HumanResource/GetSalaryDetail", { fid: this.Param1 }, (a) => {
                var config: IUpdateSalaryPageConfig = { SalaryPageData: a.Data }
                this.init(config);
                if (callback) {
                    callback();
                }
            });
        }
        public Submit() {
            var data = this.SubmitData;
            var _jsonData = JSON.stringify(data);
            //alert(_jsonData);
            urlFile.Core.AkPost("/HospPerformance/HumanResource/UpdateSalary", { fid: this.fid, data: _jsonData }, (res) => {
                if (res) {
                    alert("修改成功");
                    utilFile.Core.Util.Noty("数据修改成功");
                    //urlFile.Core.AkUrl.Current().openUrl('', false, () => { })
                    //页面刷新
                    urlFile.Core.AkUrl.Current().openUrl(
                        "$$module/HospPerformance/HumanResource/performance_hr_Salary",
                        false,
                        () => { });
                } else {
                    alert("修改失败");
                }

            });
        }


    }
    export class UpdateSalaryPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class UpdateSalaryPageProps extends basewedPageFile.Web.BaseWebPageProps<IReactUpdateSalaryPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("UpdateSalaryPage", basewedPageFile.Web.BaseWebPageVm, UpdateSalaryPageVm);

}
