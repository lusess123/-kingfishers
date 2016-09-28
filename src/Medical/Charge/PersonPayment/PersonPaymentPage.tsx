import domFile = require("./../../../01core/0Dom");
import iocFile = require("./../../../01core/Ioc");
//import domFile = require("./../01core/0Dom"); 
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import eventFile = require("./../../../01core/event");
//import iocFile = require("./../01core/Ioc"); 
import urlFile = require("./../../../01core/Url");
import basewedPageFile = require("./../../../04page/BaseWebPage");
import React = require("react");
import ReactDOM = require("react-dom");

import Form = require("./PersonPaymentGridFormDom");
import RowBtn = require("./PersonPaymentRowBtnDom");
import Search = require("./PersonPaymentSearchFormDom");

import pagination = require("./../../../05tool/Pagination");


export module PersonPaymentPage {
    export class PersonPaymentPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string; public Id: string; public Vm: any;
    }

    export class PersonPaymentPageReact extends basewedPageFile.Web.BaseWebPageReact<PersonPaymentPageProps, PersonPaymentPageStates, PersonPaymentPageAction> implements domCore.IReact {
        public state = new PersonPaymentPageStates();

        public pSender(): React.ReactElement<any> {
            return <div className="YSm-tab-content">
                {this.props.Vm.searchform.intoDom() }
                <div className="YSm-table">

                    <div className="YSm-table-btngroup">
                        <div className="btn-group">
                            <a className="btn btn-sm btn-danger" onClick={() => { this.props.Vm.payment() } }>￥缴费</a>
                            </div>
                        <div className="btn-group m-l">
                            <a type="button" className="btn btn-sm btn-primary-outline" onClick={() => {
                                this.props.Vm.delete()
                            } }>删除</a>
                            <a type="button" className="btn btn-sm btn-primary-outline" onClick={() => {
                                this.props.Vm.refund()
                            } }>个人退款</a>
                            <a type="button" className="btn btn-sm btn-primary-outline" onClick={() => {
                                this.props.Vm.Detail()
                            } }>项目详情</a>
                            <a type="button" className="btn btn-sm btn-primary-outline" onClick={() => {
                                this.props.Vm.Print()
                            } }>打印收费票据</a>
                        </div>
                    </div>

                    <div className="table-responsive">
                        {this.props.Vm.table.intoDom() }
                    </div>
                    {this.props.Vm.pagertion.intoDom() }
                </div>
            </div>;
        }

        //public _initPager(): React.ReactElement<any> {
        //    var pagerVm = new pagination.tool.PaginationVm();
        //    pagerVm.PageNo = 0;
        //    pagerVm.PageSize = 5;
        //    pagerVm.TotalCount = 20;
        //    pagerVm.isPartHidden = true;
        //    return pagerVm.intoDom()
        //}
    }

    export interface IReactPersonPaymentPageVm extends basewedPageFile.Web.BaseWebPageVm {

    }

    export interface IPersonPaymentPageConfig {
    }

    export class PersonPaymentPageVm extends basewedPageFile.Web.BaseWebPageVm implements IReactPersonPaymentPageVm {

        public ReactType = PersonPaymentPageReact;
        public table: Form.PersonPaymentGridFormDom.PersonPaymentGridFormDomVm;
        public rowbtn: RowBtn.PersonPaymentRowBtnDom.PersonPaymentRowBtnDomVm;
        public searchform: Search.PersonPaymentSearchFormDom.PersonPaymentSearchFormDomVm;
        public DataList: Form.PersonPaymentGridFormDom.IPersonPaymentGridFormDomConfig;
        public pagertion: pagination.tool.PaginationVm;
        
        public constructor(config?: IPersonPaymentPageConfig) {
            super();
            this.UniId = eventFile.App.getUniId().toString();
            this.listenAppEvent("Medical/charge/PersonPayment/Search", this.UniId, (a) => {

                urlFile.Core.AkPost("/MedicalCenter/MemberCharge/List", { code: a }, (a) => {
                    if (a) {
                        this.DataList = { Data: [] }
                        this.DataList.Data = a.Data.ListData;
                        this.table = new Form.PersonPaymentGridFormDom.PersonPaymentGridFormDomVm(this.DataList);
                        this.table.IsChange = true;
                        this.table.IsMulit = true;
                        //this.table.RowItemList.forEach((a) => { a.IsChange = true; })

                        this.pagertion.PageNo = a.Data.Pager.PageNo;
                        this.pagertion.PageSize = a.Data.Pager.PageSize;
                        this.pagertion.TotalCount = a.Data.Pager.TotalCount;
                        this.pagertion.isPartHidden = true;
                        this.pagertion.IsChange = true;
                        this.forceUpdate("");
                    }
                })
            })
        }

        private init(config: IPersonPaymentPageConfig) { }

        protected loadPage(callback?: () => any) {
            
     
            urlFile.Core.AkPost("/MedicalCenter/MemberCharge/List", {}, (data) => {

                if (data) {
                    this.DataList = { Data: [] }

                    this.DataList.Data = data.Data.ListData;
                    this.table = new Form.PersonPaymentGridFormDom.PersonPaymentGridFormDomVm(this.DataList);
                    this.rowbtn = new RowBtn.PersonPaymentRowBtnDom.PersonPaymentRowBtnDomVm();
                    var config = { Unid: this.UniId }
                    this.searchform = new Search.PersonPaymentSearchFormDom.PersonPaymentSearchFormDomVm(config);

                    this.pagertion = new pagination.tool.PaginationVm();

                    this.pagertion.PageNo = data.Data.Pager.PageNo;
                    this.pagertion.PageSize = data.Data.Pager.PageSize;
                    this.pagertion.TotalCount = data.Data.Pager.TotalCount;
                    this.pagertion.isPartHidden = true;


                    this.pagertion.PageClickEvent = (pageIndex) => {
                        this.loadPageData(pageIndex);
                    }
                }
                if (callback) { callback(); }
            })

        }


        public loadPageData(pageIndex: number) {
            //this.GridFormVm.RowList = [];
            //this.AllCheck.vmDataValueSet("false");
            //this.AllCheck.forceUpdate("");
            var _page = { PageNo: pageIndex };
            urlFile.Core.AkPost("/MedicalCenter/MemberCharge/List",
                {
                    pager: JSON.stringify(_page),
                    //unit: this.SearchFormVm.SearchName
                },
                (a) => {
                    this.DataList = { Data: [] }
                    this.DataList.Data = a.Data.ListData;
                    this.table = new Form.PersonPaymentGridFormDom.PersonPaymentGridFormDomVm(this.DataList);
                    this.table.IsChange = true;
                    this.table.IsMulit = true;
                    //this.table.RowItemList.forEach((a) => { a.IsChange = true; })

                    this.pagertion.PageNo = a.Data.Pager.PageNo;
                    this.pagertion.PageSize = a.Data.Pager.PageSize;
                    this.pagertion.TotalCount = a.Data.Pager.TotalCount;
                    this.pagertion.isPartHidden = true;
                    this.pagertion.IsChange = true;
                    this.forceUpdate("");
                });
        }

        public payment() {
            this.Util((value: string, status: string) => {
                if (status == "0") {
                    urlFile.Core.AkUrl.Current().openUrl("$PERSONPAYMENTPAGE$#$PERSONCHARGEPAGE$" + value + "$", false);
                } else if (status == "1") {
                    alert("已缴费");
                } else if (status == "2") {
                    alert("已退款")
                }
            })
        }


        public Util(Fun: IActionEvent) {
            var val = 0;
            var value = "";
            var status = ""
            this.table.List.forEach((a, index) => {
                if (a.isSelect == "1") {
                    value = a.FID;
                    status = a.ChargeStatus;
                    val++;
                } else if (a.isSelect == "2") {
                    alert("已经退款了")
                }
            })
            if (val > 1) {
                alert("不支持多选");
            } else if (val == 0) {
                alert("请选着一条数据");
            }
            else {
                Fun(value, status);
            }
        }

        public delete() {


            if (confirm("确定删除？")) {
                this.Util((value, status) => {
                    urlFile.Core.AkPost("/MedicalCenter/MemberCharge/RemoveData", { FID: value }, (a) => {
                        if (a) {
                            utilFile.Core.Util.Noty("数据删除成功！");
                            urlFile.Core.AkUrl.Current().openUrl("$eee$", true);
                            urlFile.Core.AkUrl.Current().openUrl("$PERSONPAYMENTPAGE$", true);
                        }

                    })
                })
            }
        }

        public refund() {

            this.Util((value: string, status: string) => {
                if (status == "2") {
                    alert("已退款")
                } else if (status != "0") {
                    //先查看是否所有的项目是否检查
                    urlFile.Core.AkPost("/MedicalCenter/MemberCharge/refund", { value: value }, (a) => {
                        if (a.Data == false) {
                            //弹出退费框  PERSONREFUNDPAGE
                            urlFile.Core.AkUrl.Current().openUrl("$winPERSONREFUNDPAGE$" + value + "$", true);
                        } else {
                            alert("已经完成部分检查，无法退款");
                        }
                    })
                }
                else {
                    alert("未交费缴费");
                }
            });



        }

        public Detail() {
            this.Util((value: string, status: string) => {
                urlFile.Core.AkUrl.Current().openUrl("$winPERSONITEMDETAILPAGE$" + value + "$", true);
            });
        }

        public Print() {
            this.Util((value: string, status: string) => {
                if (status == "1") {
                    var ids = value;
                    window.open("/MedicalCenter/PrintInsheet/FeeBillPrint?ids=" + ids);
                }
                else
                {
                    alert("未缴费或者退款不能打印")
                }
            });
        }

        protected ReceivePageSend(config: basewedPageFile.Web.IPageActor, obj: any) {
            super.ReceivePageSend(config, obj);
            switch (config.FromModulename) {
                case "PERSONREFUNDPAGE":
                    if (obj.success) {
                        urlFile.Core.AkUrl.Current().refresh();
                    }
                    break;
                default:
                    break;
            }

        }

    }

    export class PersonPaymentPageStates extends basewedPageFile.Web.BaseWebPageStates {

    }

    export class PersonPaymentPageProps extends basewedPageFile.Web.BaseWebPageProps<PersonPaymentPageVm> { }

    export interface IActionEvent {
        (value: string, status: string): void
    }


    iocFile.Core.Ioc.Current().RegisterType("PERSONPAYMENTPAGE", basewedPageFile.Web.BaseWebPageVm, PersonPaymentPageVm);
}
