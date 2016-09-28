import domFile = require("./../../../01core/0Dom");
import iocFile = require("./../../../01core/Ioc");
//import domFile = require("./../01core/0Dom"); 
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
//import iocFile = require("./../01core/Ioc"); 
import urlFile = require("./../../../01core/Url");
import basewedPageFile = require("./../../../04page/BaseWebPage");
import React = require("react");
import ReactDOM = require("react-dom");

import Form = require("./TeamPayMentGridFormDom");
import RowBtn = require("./TeamPayMentRowBtnDom");
import Search = require("./TeamPayMentSearchFromDom");

import pagination = require("./../../../05tool/Pagination");


export module TeamPayMentPage {
    export class TeamPayMentPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string; public Id: string; public Vm: any;
    }

    export class TeamPayMentPageReact extends basewedPageFile.Web.BaseWebPageReact<TeamPayMentPageProps, TeamPayMentPageStates, TeamPayMentPageAction> implements domCore.IReact {
        public state = new TeamPayMentPageStates();

        public pSender(): React.ReactElement<any> {
            return <div className="YSm-tab-content">
                {this.props.Vm.searchform.intoDom() }
                <div className="YSm-table">
                    <div className="YSm-table-btngroup">
                        <div className="btn-group">
                        <a className="btn btn-sm btn-danger" onClick={() => { this.props.Vm.payment() } }>￥缴费</a>
                    </div>   
                        <div className="btn-group m-l">
                            <a className="btn btn-sm btn-primary-outline" onClick={() => { this.props.Vm.refund() } }>团体退款</a>
                            <a type="button" className="btn btn-sm btn-primary-outline"
                                onClick={() => { this.props.Vm.delete() } }>删除</a>
                            <a className="btn btn-sm btn-primary-outline" onClick={() => { this.props.Vm.Detail() } }>批次详情</a>
                        </div>

                        
                    </div>
                    <div className="table-responsive">
                        {this.props.Vm.table.intoDom() }
                    </div>
                    {this.props.Vm.pagetion.intoDom() }
                </div>
            </div>;
        }

        //public _initPager(): React.ReactElement<any> {
        //    var pagerVm = new pagination.tool.PaginationVm();
        //    pagerVm.PageNo = 0;
        //    pagerVm.PageSize = 5;
        //    pagerVm.TotalCount = 20;
        //    pagerVm.isPartHidden = true;
        //    return pagerVm.intoDom();
        //}
    }

    export interface IReactTeamPayMentPageVm extends basewedPageFile.Web.BaseWebPageVm {

    }

    export interface ITeamPayMentPageConfig {
    }

    export class TeamPayMentPageVm extends basewedPageFile.Web.BaseWebPageVm implements IReactTeamPayMentPageVm {

        public ReactType = TeamPayMentPageReact;
        public table: Form.TeamPayMentGridFormDom.TeamPayMentGridFormDomVm;
        public rowbtn: RowBtn.TeamPayMentRowBtnDom.TeamPayMentRowBtnDomVm;
        public searchform: Search.TeamPayMentSearchFormDom.TeamPayMentSearchFormDomVm;
        public DataList: Form.TeamPayMentGridFormDom.ITeamPayMentGridFormDomConfig;
        public pagetion: pagination.tool.PaginationVm;

        public constructor(config?: ITeamPayMentPageConfig) {
            super();

            var data: Form.TeamPayMentGridFormDom.ITeamPayMentGridFormDomConfig = { Data: [] }
            this.listenAppEvent("Medical/charge/TeamPayment/Search", this.UniId, (a) => {
                urlFile.Core.AkPost("/MedicalCenter/TeamCharge/List", { code: a }, (a) => {
                    if (a) {
                        this.DataList = { Data: [] }
                        this.DataList.Data = a.Data.ListData;
                        this.table = new Form.TeamPayMentGridFormDom.TeamPayMentGridFormDomVm(this.DataList);
                        this.table.IsChange = true;
                        this.table.IsMulit = true;
                        //this.table.RowItemList.forEach((a) => { a.IsChange = true; })

                        this.pagetion.PageNo = a.Data.Pager.PageNo;
                        this.pagetion.PageSize = a.Data.Pager.PageSize;
                        this.pagetion.TotalCount = a.Data.Pager.TotalCount;
                        this.pagetion.isPartHidden = true;
                        this.pagetion.IsChange = true;
                        this.forceUpdate("");
                    }
                })
            })
        }

        private init(config: ITeamPayMentPageConfig) { }

        protected loadPage(callback?: () => any) {

            urlFile.Core.AkPost("/MedicalCenter/TeamCharge/List", {}, (data) => {

                if (data) {
                    this.DataList = { Data: [] };
                    this.DataList.Data = data.Data.ListData;
                    this.table = new Form.TeamPayMentGridFormDom.TeamPayMentGridFormDomVm(this.DataList);
                    this.rowbtn = new RowBtn.TeamPayMentRowBtnDom.TeamPayMentRowBtnDomVm();

                    var config: Search.TeamPayMentSearchFormDom.ITeamPayMentSearchFormDomConfig = {
                        Unid: this.UniId
                    }
                    this.searchform = new Search.TeamPayMentSearchFormDom.TeamPayMentSearchFormDomVm(config);

                    this.pagetion = new pagination.tool.PaginationVm();

                    this.pagetion.PageNo = data.Data.Pager.PageNo;
                    this.pagetion.PageSize = data.Data.Pager.PageSize;
                    this.pagetion.TotalCount = data.Data.Pager.TotalCount;
                    this.pagetion.PageClickEvent = (pageIndex) => {
                        this.loadPageData(pageIndex);
                    }

                    this.pagetion.isPartHidden = true;
                }
                if (callback) { callback(); }
            })

        }

        public loadPageData(pageIndex: number) {
            //this.GridFormVm.RowList = [];
            //this.AllCheck.vmDataValueSet("false");
            //this.AllCheck.forceUpdate("");
            var _page = { PageNo: pageIndex };
            urlFile.Core.AkPost("/MedicalCenter/TeamCharge/List",
                {
                    pager: JSON.stringify(_page),
                    //unit: this.SearchFormVm.SearchName
                },
                (a) => {

                    this.DataList = { Data: [] }
                    this.DataList.Data = a.Data.ListData;
                    this.table = new Form.TeamPayMentGridFormDom.TeamPayMentGridFormDomVm(this.DataList);
                    this.pagetion.PageNo = a.Data.Pager.PageNo;
                    this.pagetion.PageSize = a.Data.Pager.PageSize;
                    this.pagetion.TotalCount = a.Data.Pager.TotalCount;
                    this.pagetion.isPartHidden = true;
                    this.pagetion.IsChange = true;
                    this.table.IsMulit = true;
                    this.table.IsChange = true;
                    this.forceUpdate("");
                });
        }

        public payment() {
            this.util((value, status) => {
                if (status == "0") {
                    urlFile.Core.AkUrl.Current().openUrl("$TeamPayMentPAGE$#$TEAMCHARGEPAGE$" + value + "$", false);
                } else {
                    alert("已缴费");
                }
            })
        }

        public util(Util: (val: string, status: string) => any) {
            var val = 0;
            var value = "";
            var status = "";
            this.table.List.forEach((a, index) => {
                if (a.isSelect == "1") {
                    value = a.FID.toString();
                    status = a.ChargeStatus;
                    val++;
                }
            })
            if (val > 1) {
                alert("不支持多选");
            } else if (val == 0) {
                alert("请选着一条数据");
            } else {
                Util(value, status);
            }

        }

        public delete() {

            if (confirm("确定删除？")) {
                this.util((value, status) => {
                    urlFile.Core.AkPost("/MedicalCenter/TeamCharge/RemoveData", { BatchFID: value }, (a) => {
                        if (a) {
                            utilFile.Core.Util.Noty("数据删除成功！");
                            urlFile.Core.AkUrl.Current().openUrl("$eee$", true);
                            urlFile.Core.AkUrl.Current().openUrl("$TeamPayMentPAGE$", true);
                        }

                    })
                })
            }
        }

        public Detail() {



            this.util((value, status) => {

                urlFile.Core.AkUrl.Current().openUrl("$winTEAMDETAILPAGE$" + value + "$", true);

            })
        }
        //TEAMREFUNDPAGE
        protected ReceivePageSend(config: basewedPageFile.Web.IPageActor, obj: any) {
            super.ReceivePageSend(config, obj);
            switch (config.FromModulename) {
                case "TEAMREFUNDPAGE":
                    if (obj.success) {
                        urlFile.Core.AkUrl.Current().refresh();
                    }
                    break;
                default:
                    break;
            }

        }


        public refund() {
            this.util((value, status) => {
                if (status == "1") {
                    urlFile.Core.AkPost("/MedicalCenter/TeamCharge/refund", { BatchFID: value }, (a) => {
                   
                        if (a.Content == "empty") {
                            alert("无法退款")
                        } else if (a.Content == "UnPaid") {
                            alert("无法退款")
                        } else {
                            urlFile.Core.AkUrl.Current().openUrl("$winTEAMREFUNDPAGE$" + value + "$" + a.Content + "$", true);
                        }
                    })
                } else {
                    alert("无法退款");
                }
            })
        }
    }

    export class TeamPayMentPageStates extends basewedPageFile.Web.BaseWebPageStates {

    }

    export class TeamPayMentPageProps extends basewedPageFile.Web.BaseWebPageProps<TeamPayMentPageVm> { }



    iocFile.Core.Ioc.Current().RegisterType("TeamPayMentPAGE", basewedPageFile.Web.BaseWebPageVm, TeamPayMentPageVm);
}
