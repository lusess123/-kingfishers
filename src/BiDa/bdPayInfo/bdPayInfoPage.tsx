import domFile = require("./../../01core/0Dom");
import iocFile = require("./../../01core/Ioc");
//import domFile = require("./../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../01core/Util");
//import iocFile = require("./../01core/Ioc"); 
import urlFile = require("./../../01core/Url");
import basewedPageFile = require("./../../04page/BaseWebPage");
import PaginationFile = require("./../../05tool/Pagination")

import Sea = require("./../../10Sea/sea");

import ImageData = require("./ImageData");

import picPreViewFile = require("./../../05tool/PicPreView");

import reus = require("./../../10Sea/Reus");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module bd_PayInfoPage {

    export class bd_PayInfoPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class bd_PayInfoPageReact extends basewedPageFile.Web.BaseWebPageReact<bd_PayInfoPageProps, bd_PayInfoPageStates, bd_PayInfoPageAction> implements domCore.IReact {

        public state = new bd_PayInfoPageStates();


        private Fun_ImageShow(src: string, e: React.MouseEvent): void {
            picPreViewFile.PicPreView.showImageByDom($(e.target), src);
        };

        public sendLineData(a: bd_PayInfoPageData): any {
            return <tr>
                <td>
                    <a  onClick={() => { this.fun_chagneChenck(a) } }>
                        <i className={a.Chenck ? " ACT-CHECK-SINGLE icon-check " : "ACT-CHECK-SINGLE icon-check-empty "}></i>
                    </a>
                    <span>{a.rn}</span>

                </td>
                <td className="aks-td AKJS ACT_HIDDEN">{a.FID}</td>
                <td>{a.FlowNumber}</td>
                <td><span dangerouslySetInnerHTML={{ __html: a.ApplyUserId }} ></span></td>
                <td><span className={a.isTotalAmountChange ? " acs-weight " : ""}>{a.TotalAmount}</span></td>
                <td><span className={a.isInvoiceBankChange ? " acs-weight " : ""}>{a.InvoiceBank}</span></td>
                <td><span className={a.isExpireDateChange ? " acs-weight " : ""}>{a.ExpireDate}</span></td>
                <td><span className={a.isDiscountDaysChange ? " acs-weight " : ""}>{a.DiscountDays}</span></td>
                <td><span className={a.isPriceTypeChange ? " acs-weight " : ""}>{a.PriceType}</span></td>
                <td><span className={a.isPriceRateChange ? " acs-weight " : ""}>{a.PriceRate}</span></td>
                <td><span className={a.isPayTypeChange ? " acs-weight " : ""}>{a.PayType}</span></td>
                <td>{a.FBankType}</td>
                <td><span className={a.isPayRateChange ? " acs-weight " : ""}>{a.PayRate}</span></td>
                <td>{a.FAcceptkind}</td>
                <td><span className={a.isPaperCountChange ? " acs-weight " : ""}>{a.PaperCount}</span></td>
                <td><span className={a.isCommissionsChange ? " acs-weight " : ""}>{a.Commissions}</span></td>
                <td>{a.FDepartmentID}</td>
                <td><span className={a.isCommissionsTypeChange ? " acs-weight " : ""}>{a.CommissionsType}</span></td>
                <td><span className={a.isDiscountInterestChange ? " acs-weight " : ""}>{a.DiscountInterest}</span></td>
                <td><span className={a.isPayAmountChange ? " acs-weight " : ""}>{a.PayAmount}</span></td>
                <td><span className={a.isPayeeChange ? " acs-weight " : ""}>{a.Payee}</span></td>
                <td><span className={a.isPayeeAccountChange ? " acs-weight " : ""}>{a.PayeeAccount}</span></td>
                <td><span className={a.isOpeningBankNameChange ? " acs-weight " : ""}>{a.OpeningBankName}</span></td>
                <td><span className={a.isOpeningBankCityChange ? " acs-weight " : ""}>{a.OpeningBankCity}</span></td>
                <td><span className={a.isOpeningBankNumberChange ? " acs-weight " : ""}>{a.OpeningBankNumber}</span></td>
                <td>{a.bd_PayInfo_WF_STATUS}</td>
                <td><img width='38' height='38'  src={a.DraftImage} onClick={(e) => { this.Fun_ImageShow(a.DraftImageSrc, e) } }></img></td>
                <td><img  width='38' height='38'  src={a.BankImgSplit} onClick={(e) => { this.Fun_ImageShow(a.BankImgSplitSrc, e) } }></img></td>
                <td>{a.bd_PayInfo_WF_IS_END}</td>
                <td>{a.bd_PayInfo_IS_APPLY_WF}</td>
                <td>{a.FControlUnitID}</td>
            </tr>
        }

        protected pInstall(): void {
            super.pInstall();
            this.props.Vm.getEmit("React").addListener("pageLoadEnd", () => {
                if ($.fn.AtawSelector) {
                    var _$dom1 = $(ReactDOM.findDOMNode(this)).find(".ACT-TEST");
                    if (!_$dom1.AtawControl()) {
                        _$dom1["AtawSelector"]({ RegName: "MRPUserCodeData" });
                    }
                    var _obj = _$dom1.AtawControl();
                    _obj.event_change(() => {
                        var _val = _obj.dataValue();
                        this.props.Vm.Search_ApplyUserId = _val;
                        console.log(this);
                    });

                    //$(ReactDOM.findDOMNode(this)).find(".ACT-TEST2")["AtawMultiSelector"]({ RegName: "BiDaDepartmentCodeTable" });

                    var _$dom2 = $(ReactDOM.findDOMNode(this)).find(".ACT-TEST2");
                    if (!_$dom2.AtawControl()) {
                        _$dom2["AtawMultiSelector"]({ RegName: "BiDaDepartmentCodeTable" });
                    }
                    var _obj2 = _$dom2.AtawControl();

                    _obj2.event_change(() => {
                        var _val = _obj2.dataValue();
                        this.props.Vm.Search_FDepartmentID = _val;
                        console.log(this);
                    });

                }
            })
        }

        public pSender(): React.ReactElement<any> {

            var buttonLine = <div className="ButtonBar ta1">

                <a className= {this.props.Vm.hasCheck ? "ACT-BUTTON-DATA ACT-ROW-BTN ACT-BT-Print btn btn-default btn-xs" : "ACT-BUTTON-DATA ACT-ROW-BTN ACT-BT-Delete btn-danger btn btn-default btn-xs acs-btn-disabled"}
                    onClick={() => {
                        this.fun_Print()
                    } }>
                    <span>打印</span>
                </a>

                <a className={this.props.Vm.hasCheck ? "ACT-BUTTON-DATA ACT-ROW-BTN ACT-BT-Delete btn-danger btn btn-default btn-xs" : "ACT-BUTTON-DATA ACT-ROW-BTN ACT-BT-Delete btn-danger btn btn-default btn-xs acs-btn-disabled"}    onClick={() => { this.fun_Delete() } }>
                    <span>
                        <i className="icon-trash icon-white">
                            删除
                        </i></span>
                </a>

                <a className={this.props.Vm.hasCheck ? "ACT-BUTTON-DATA ACT-ROW-BTN ACT-BT-Detail btn-info btn btn-default btn-xs" : "ACT-BUTTON-DATA ACT-ROW-BTN ACT-BT-Delete btn-danger btn btn-default btn-xs acs-btn-disabled"}    onClick={() => { this.fun_Detail() } }>
                    <span><i className="icon-table ">详情</i></span>
                </a>
                <a className={this.props.Vm.hasCheck ? "ACT-BUTTON-DATA ACT-ROW-BTN ACT-BT-Update btn-warning btn btn-default btn-xs" : "ACT-BUTTON-DATA ACT-ROW-BTN ACT-BT-Delete btn-danger btn btn-default btn-xs acs-btn-disabled"}    onClick={() => { this.fun_Edit() } }>
                    <span><i className="icon-edit icon-white"></i>编辑</span>
                </a>

            </div>

            var table = <table className=" table table-bordered table-striped table-hover table-condensed">
                <thead>
                    <tr>
                        <th className="ACT-BTN-CONTAINER well" colSpan="1000">
                            {buttonLine}
                        </th>
                    </tr>
                    <tr className="ACT-HEADER MEMBER">
                        <th className="thCheckAll">
                            <input type="checkbox" onClick={() => { this.onAllCheck() } }/>
                        </th>
                        <th  className="aks-td AKJS ACT_HIDDEN">
                            <span>FID</span></th>
                        <th>
                            <span>流水号</span></th>
                        <th>
                            <span>申请人</span></th>
                        <th>
                            <span>总金额</span></th>
                        <th>
                            <span>开票行</span></th>
                        <th>
                            <span>到期日</span></th>
                        <th>
                            <span>帖现天数</span></th>
                        <th>
                            <span>报价类别</span></th>
                        <th>
                            <span>报价利率</span> </th>
                        <th>
                            <span>打款类别</span></th>
                        <th>
                            <span>承兑行类别	</span></th>
                        <th>
                            <span>打款利率</span></th>
                        <th>
                            <span>承兑方式</span></th>
                        <th>
                            <span>张数</span></th>
                        <th>
                            <span>手续费</span> </th>
                        <th>
                            <span>申请区域</span></th>
                        <th>
                            <span>手续费类别</span></th>
                        <th>
                            <span>贴现利率</span></th>
                        <th>
                            <span>划款金额</span></th>
                        <th>
                            <span>收款单位</span></th>
                        <th>
                            <span>收款单位账号</span></th>
                        <th>
                            <span>开户行</span></th>
                        <th>
                            <span>开户行地区</span></th>
                        <th>
                            <span>开户行行号</span></th>
                        <th>
                            <span>流程状态</span></th>
                        <th>
                            <span>票面图片</span></th>
                        <th>
                            <span>银行转账截图</span> </th>
                        <th>
                            <span>是否完成</span></th>
                        <th>
                            <span>应用到工作流</span></th>
                        <th>
                            <span>组织机构</span></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.Vm.ListData.map((a) => {
                            return this.sendLineData(a);
                        })
                    }
                </tbody>

            </table>;




            var searchfrom = <div className="searchCriteriaUlDiv ask-search panel-green">
                <ul className="searchCriteriaUl clear">
                    <li className="search_Module_row col-md-6">
                        <label className="search_Module_lab col-md-5 ta2">流水号: </label>
                        <span className="col-md-7 AKJS ACT_CONTROL SEARCH-CONTROL ACT_POST">
                            <input className="form-control ask-input input-border  search_Module_text" placeholder=".." type="text" value={this.props.Vm.Search_FlowNumber} onChange={(a) => { this.FlowNumberChange(a) } } />
                        </span>
                    </li>

                    <li className="search_Module_row col-md-6">
                        <label className="search_Module_lab col-md-5 ta2">申请人: </label>
                        <span className="col-md-7 AKJS ACT_CONTROL ACT-SELECTBOX-PARENT SEARCH-CONTROL ACT_POST">
                            <div className="ACT-TEST"></div>
                        </span></li>


                    <li className="search_Module_row col-md-6">
                        <label className="search_Module_lab col-md-5 ta2">承兑行类别: </label>
                        <span className="col-md-7 AKJS ACT_CONTROL SEARCH-CONTROL ACT_POST">
                            <select onChange={(a) => { this.FBankTypeChange(a) } } value={this.props.Vm.Search_FBankType1}>
                                <option value="-1">--请选择--</option>
                                <option value="1">国股</option>
                                <option value="2">商行</option>
                                <option value="3">其他</option>
                            </select>
                        </span>
                    </li>

                    <li className="search_Module_row col-md-6" >
                        <label className="search_Module_lab col-md-5 ta2">承兑方式: </label>
                        <span className="col-md-7 AKJS ACT_CONTROL SEARCH-CONTROL ACT_POST">
                            <select onChange={(a) => { this.FAcceptkindChange(a) } } value={this.props.Vm.Search_FAcceptkind1}>
                                <option value="-1">--请选择--</option>
                                <option  value="1">买断</option>
                                <option value="2">带票</option>
                                <option  value="3">其他</option>
                            </select>
                        </span>
                    </li>

                    <li className="search_Module_row col-md-6">
                        <label className="search_Module_lab col-md-5 ta2">申请区域: </label>
                        <span className="col-md-7 AKJS ACT_CONTROL SEARCH-CONTROL ACT_POST">
                            <div className="ACT-TEST2"></div>
                        </span>
                    </li>
                    <li className="search_Module_row searchBtnBar col-md-12 acs-search-line">
                        <button className="MySearch btn btn-primary icon-search mr5" title="搜索" onClick={() => {
                            this.Search();
                        } }></button>
                        <button className="btn btn-warning icon-trash" title="清空" onClick={() => { this.Clear() } }></button>
                    </li>

                </ul>
            </div>;

            return <div className="ui-body-bg pd0">
                <form className="tabbable fn-bottom AKJS">
                    <div className="ConditionDiv mt10 mb10 ">
                        {searchfrom}
                    </div>
                    <div className="atawNormalRow">
                        <div className=" TopPager">
                            {this._initPagination() }
                        </div>

                        <div className='columnGroup panel-default acs-colgroup table-responsive ask-form'>
                            {table}
                        </div>
                        <div className="  Pager pull-right ">
                            {this._initPagination() }
                        </div>
                    </div>
                </form>
            </div>;
        }

        public FlowNumberChange(a: React.FormEvent) {
            var val = a.target["value"];
            this.props.Vm.Search_FlowNumber = val;
            this.forceUpdate();
        }

        public FBankTypeChange(a: React.FormEvent) {
            var val = a.target["value"];
            this.props.Vm.Search_FBankType = val;
            this.props.Vm.Search_FBankType1 = val;
            this.forceUpdate();
        }

        public FAcceptkindChange(a: React.FormEvent) {
            var val = a.target["value"];
            this.props.Vm.Search_FAcceptkind = val;
            this.props.Vm.Search_FAcceptkind1 = val;
            this.forceUpdate();
        }


        public Search() {


            var dd = {
                "bd_PayInfo_SEARCH": this.postData(),
                "PAGER": [
                    {
                        "PageSize": 10,
                        "PageIndex": 0,
                        "IsASC": true,
                        "SortName": "",
                        "DataTime": "2016-05-31 16:52:49.900"
                    }]
            }
            this.fun_Sreach(JSON.stringify(dd));
        }

        //清除
        public Clear() {
            this.props.Vm.Search_FlowNumber = undefined;
            this.props.Vm.Search_FBankType = undefined;
            this.props.Vm.Search_FBankType1 = "-1";
            this.props.Vm.Search_FAcceptkind = undefined;
            this.props.Vm.Search_FAcceptkind1 = "-1";


            this.props.Vm.Search_ApplyUserId = undefined;
            this.props.Vm.Search_FDepartmentID = undefined;


            var _$dom1 = $(ReactDOM.findDOMNode(this)).find(".ACT-TEST");
            var _obj = _$dom1.AtawControl();
            _obj.$JObjText.val("");
            _obj.dataValue("");

            var _$dom2 = $(ReactDOM.findDOMNode(this)).find(".ACT-TEST2");
            var _obj2 = _$dom2.AtawControl();
            _obj2.$JObjText.val("");
            _obj2.dataValue("");

            var dd = {
                "bd_PayInfo_SEARCH": [{}], "PAGER": [
                    {
                        "PageSize": this.props.Vm.PaginationData.PageSize,
                        "PageIndex": 0,
                        "IsASC": true,
                        "SortName": "",
                        "DataTime": "2016-05-31 16:52:49.900"
                    }
                ]
            }
            this.fun_Sreach(JSON.stringify(dd));
        }


        public _initPagination() {
            this.props.Vm.Pagetion.PageNo = this.props.Vm.PaginationData.PageNo;
            this.props.Vm.Pagetion.PageSize = this.props.Vm.PaginationData.PageSize;
            this.props.Vm.Pagetion.TotalCount = this.props.Vm.PaginationData.TotalCount;

            this.props.Vm.Pagetion.PageClickEvent = (pageIndex) => {
                

                var dd = {
                    "bd_PayInfo_SEARCH": this.postData(), "PAGER": [
                        {
                            "PageSize": this.props.Vm.PaginationData.PageSize,
                            "PageIndex": pageIndex,
                            "IsASC": true,
                            "SortName": "",
                            "DataTime": "2016-05-31 16:52:49.900"
                        }
                    ]
                }
                this.fun_Sreach(JSON.stringify(dd));
            }
            return this.props.Vm.Pagetion.intoDom();
        }

        public postData()
        {
            var _ds = [];
            var ds = new Object;
            
            if (this.props.Vm.Search_ApplyUserId) {
                //ds.push({ "ApplyUserId": this.props.Vm.Search_ApplyUserId })
                ds["ApplyUserId"] = this.props.Vm.Search_ApplyUserId;
            }

            if (this.props.Vm.Search_FAcceptkind && this.props.Vm.Search_FAcceptkind!="-1") {
                //ds.push({ "FAcceptkind": this.props.Vm.Search_FAcceptkind })
                ds["FAcceptkind"] = this.props.Vm.Search_FAcceptkind;
            }

            if (this.props.Vm.Search_FBankType && this.props.Vm.Search_FBankType!="-1") {
                //ds.push({ "FBankType": this.props.Vm.Search_FBankType })
                ds["FBankType"] = this.props.Vm.Search_FBankType;
            }

            if (this.props.Vm.Search_FDepartmentID) {
                //ds.push({ "FDepartmentID": this.props.Vm.Search_FDepartmentID })
                ds["FDepartmentID"] = this.props.Vm.Search_FDepartmentID;
            }

            if (this.props.Vm.Search_FlowNumber) {
                //ds.push({ "FlowNumber": this.props.Vm.Search_FlowNumber })
                ds["FlowNumber"] = this.props.Vm.Search_FlowNumber;
            }
            _ds.push(ds);
            return _ds;
        }

        public fun_chagneChenck(a: bd_PayInfoPageData) {
            this.props.Vm.fun_changeCheck(a);
        }

        //导入
        public fun_import() {
            var dd = this.getCheckData();
            alert(dd)
        }
        //打印
        public fun_Print() {
            if (this.props.Vm.hasCheck) {
                var dd = this.getCheckData();
                window.open("/areas/report/preport.aspx?s=PayApplyReportSource&id=" + dd.join(","));
            } else {
                alert("按钮不可用");
            }
        }

        public onAllCheck() {
            this.props.Vm.ListData.map((a) => {
                a.Chenck = !this.props.Vm.isAllCheck;
            })
            this.props.Vm.hasCheck = !this.props.Vm.isAllCheck;
            this.props.Vm.isAllCheck = !this.props.Vm.isAllCheck;
            this.forceUpdate();
        }

        //删除
        public fun_Delete() {
            if (this.props.Vm.hasCheck) {
                var _datas = [];
                this.props.Vm.ListData.map((a) => {
                    if (a.Chenck) {
                        var _data = { "OperationName": "Delete", "KeyValue": a.FID, "Data": null };
                        _datas.push(_data);
                    }
                })

                var _datastr = { "bd_PayInfo_OPERATION": _datas };

                if (confirm("你确定要删除吗？")) {
                    urlFile.Core.AkPost("/module/ModuleMerge", { xml: "module/BiDa/business/bd_PayInfo.xml", ds: JSON.stringify(_datastr) }, (a) => {
                        if (a.res != "0") {
                            //重新加载页面

                            var ds = [];
                            if (this.props.Vm.Search_ApplyUserId) {
                                ds.push({ "ApplyUserId": this.props.Vm.Search_ApplyUserId })
                            }

                            if (this.props.Vm.Search_FAcceptkind) {
                                ds.push({ "FAcceptkind": this.props.Vm.Search_FAcceptkind })
                            }

                            if (this.props.Vm.Search_FBankType) {
                                ds.push({ "FBankType": this.props.Vm.Search_FBankType })
                            }

                            if (this.props.Vm.Search_FDepartmentID) {
                                ds.push({ "FDepartmentID": this.props.Vm.Search_FDepartmentID })
                            }

                            if (this.props.Vm.Search_FlowNumber) {
                                ds.push({ "FlowNumber": this.props.Vm.Search_FlowNumber })
                            }
                            var dd = {
                                "bd_PayInfo_SEARCH": this.postData(), "PAGER": [
                                    {
                                        "PageSize": this.props.Vm.PaginationData.PageSize,
                                        "PageIndex": this.props.Vm.PaginationData.PageNo,
                                        "IsASC": true,
                                        "SortName": "",
                                        "DataTime": "2016-05-31 16:52:49.900"
                                    }
                                ]
                            }
                            this.fun_Sreach(JSON.stringify(dd));
                        }
                    })
                }
            } else {
                alert("按钮不可用");
            }
        }




        //详情
        public fun_Detail() {
            if (this.props.Vm.hasCheck) {
                var dd = this.getCheckData();
                var config: reus.IOpenPage = { ids: dd, pageStyle: "Detail", xml: "module/BiDa/business/bd_PayInfo.xml" }
                reus.Reus.OpenWinPage(config);
            } else {
                alert("按钮不可用");
            }
        }

        //编辑
        public fun_Edit() {
            if (this.props.Vm.hasCheck) {
                var dd = this.getCheckData();
                var config: reus.IOpenPage = { ids: dd, pageStyle: "Update", xml: "module/BiDa/business/bd_PayInfo.xml" }
                reus.Reus.OpenWinPage(config);
            } else {
                alert("按钮不可用");
            }
        }

        public getCheckData() {
            // this.props.Vm.FIDs = "";
            var dd = [];
            this.props.Vm.ListData.map((a) => {
                if (a.Chenck) {
                    dd.push(a.FID);
                }
            })
            return dd;
        }

        public fun_Sreach(ds: string) {
            this.props.Vm.fun_Sreach(ds);
        }
    }

    export interface bd_PayInfoPageData {
        Chenck: boolean;
        FID: string;
        rn: string;
        FDepartmentID: string;
        FlowNumber: string;//流水号
        BdPayInfoWfId: string;
        TotalAmount: number; //decimal?  总金额
        isTotalAmountChange: boolean;
        InvoiceBank: string;//开票行
        isInvoiceBankChange: boolean;
        ExpireDate: string;   //时间到期日
        isExpireDateChange: boolean;
        DiscountDays: number | void;//贴现天数
        isDiscountDaysChange: boolean;
        DiscountInterest: number | void;
        isDiscountInterestChange: boolean;
        PriceType: string;//报价类别
        isPriceTypeChange: boolean;
        PriceRate: number | void;//报价利率
        isPriceRateChange: boolean;
        PayType: string;//打款类别
        isPayTypeChange: boolean;
        PaperCount: number | void;//张数
        isPaperCountChange: boolean;
        PayRate: number | void;//打款利率
        isPayRateChange: boolean;
        Commissions: number | void;//手续费
        isCommissionsChange: boolean;
        CommissionsType: string;//手续费类别
        isCommissionsTypeChange: boolean;
        PayAmount: number | void;//划款金额
        isPayAmountChange: boolean;
        Payee: string//收款单位
        isPayeeChange: boolean
        PayeeAccount: string//收款单位账号
        isPayeeAccountChange: boolean;
        OpeningBankName: string//开户行
        isOpeningBankNameChange: boolean;
        OpeningBankNumber: string//开户行行号
        isOpeningBankNumberChange: boolean;
        Remark: string//备注
        BdPayInfoWfStatus: string
        DraftImage: string//票面图片
        DraftImageSrc: string;
        BdPayInfoStepName: string
        BdPayInfoWfTime: string | void; //时间
        BdPayInfoWfIsEnd: string
        BdPayInfoIsApplyWf: string
        ApplyUserId: string//申请人
        AuditorId: string
        GeneralManagerId: string
        PayUserId: string
        DEFAULTVAL: string
        DefaultValAll: string
        OpeningBankCity: string
        isOpeningBankCityChange: boolean;
        PayNoteType: number | void;
        PayRemark: string//出款账户备注
        BankImgSplit: string//银行转账截图
        BankImgSplitSrc: string;
        FAcceptkind: string;
        FBankType: string;
        bd_PayInfo_WF_STATUS: string;//流程状态
        bd_PayInfo_IS_APPLY_WF: string;//应用到工作流
        bd_PayInfo_WF_IS_END: string;//是否完成
        FControlUnitID: string;//组织机构
        BUTTON_RIGHT: string;
    }

    export interface KVData {
        CODE_VALUE: string;
        CODE_TEXT: string;
        CODE_INDEX: string;
    }

    export interface Ibd_PayInfoPageConfig { }

    export class bd_PayInfoPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = bd_PayInfoPageReact;

        public defaultVal: bd_PayInfoPageData;

        public ListData: bd_PayInfoPageData[] = [];
        public hasCheck: boolean;
        public MRPUserCodeData: KVData[] = [];
        public PriceType: KVData[] = [];
        public BankType: KVData[] = [];
        public AcceptKind: KVData[] = [];
        public BiDaDepartmentCodeTable: KVData[] = [];
        public CommissionsType: KVData[] = [];
        public BDGroupName: KVData[] = [];

        public buttonArray: ButtonKV[] = [];

        public MRPUserCodeDataStr: string;//插件名
        public iDaDepartmentCodeDataStr: string;

        public Pagetion: PaginationFile.tool.PaginationVm;
        public isAllCheck: boolean = false;

        public Search_FlowNumber: string;//流水号
        public Search_ApplyUserId: string;//申请人
        public Search_FBankType: string;//承兑行类别
        public Search_FBankType1: string;//承兑行类别
        public Search_FAcceptkind: string;//承兑方式
        public Search_FAcceptkind1: string;//承兑方式
        public Search_FDepartmentID: string;//申请区域

        public OpenPageData: reus.IOpenPage;

        public isUpdate: boolean = false;
        public isPrint: boolean = false;
        public isDelete: boolean = false;
        public isDetail: boolean = false;

        public ra: number;

        public iamgeutil: ImageData.ImageUtil = new ImageData.ImageUtil;

        public PaginationData: PaginationFile.tool.Pagination;

        public FIDs: string;

        public constructor(config?: Ibd_PayInfoPageConfig) {
            super();
        }

        private init(config: Ibd_PayInfoPageConfig) { }

        protected loadPage(callback?: Function) {

            this.Pagetion = new PaginationFile.tool.PaginationVm({ IsBidaStyle: true });

            urlFile.Core.AkPost("/module/module", { xml: "module/BiDa/business/bd_PayInfo", ds: "", pageStyle: "List" }, (a) => {

                this.PaginationData = a.Data.bd_PayInfo_PAGER[0];
                this.PaginationData.PageNo = a.Data.bd_PayInfo_PAGER[0].PageIndex;

                this.ListData = a.Data.bd_PayInfo;
                this.MRPUserCodeData = a.Data.MRPUserCodeData;
                this.PriceType = a.Data.PriceType;
                this.BankType = a.Data.BankType;
                this.AcceptKind = a.Data.AcceptKind;
                this.BiDaDepartmentCodeTable = a.Data.BiDaDepartmentCodeTable;
                this.CommissionsType = a.Data.CommissionsType;
                this.BDGroupName = a.Data.BDGroupName;


                a.Forms.bd_PayInfo_SEARCH.Columns.map((b) => {
                    if (b.Name == "FDepartmentID") {
                        this.iDaDepartmentCodeDataStr = b.Options.RegName;
                    }

                    if (b.Name == "ApplyUserId") {
                        this.MRPUserCodeDataStr = b.Options.RegName;
                    }
                })

                this.ListData.map((a) => {

                    this.defaultVal = $.parseJSON(a.DefaultValAll);
                    if (this.defaultVal) {
                        if (this.defaultVal.TotalAmount && this.defaultVal.TotalAmount != a.TotalAmount) {
                            a.isTotalAmountChange = true;
                        }
                        //InvoiceBank
                        if (this.defaultVal.InvoiceBank && this.defaultVal.InvoiceBank != a.InvoiceBank) {
                            a.isInvoiceBankChange = true;
                        }
                        //ExpireDate
                        if (this.defaultVal.ExpireDate && this.defaultVal.ExpireDate != a.ExpireDate) {
                            a.isExpireDateChange = true;
                        }
                        //DiscountDays
                        if (this.defaultVal.DiscountDays && this.defaultVal.DiscountDays != a.DiscountDays) {
                            a.isDiscountDaysChange = true;
                        }
                        //PriceType
                        if (this.defaultVal.PriceType && this.defaultVal.PriceType != a.PriceType) {
                            a.isPriceTypeChange = true;
                        }
                        //PriceRate
                        if (this.defaultVal.PriceRate && this.defaultVal.PriceRate != a.PriceRate) {
                            a.isPriceRateChange = true;
                        }
                        //PayType
                        if (this.defaultVal.PayType && this.defaultVal.PayType != a.PayType) {
                            a.isPayTypeChange = true;
                        }
                        //PayRate
                        if (this.defaultVal.PayRate && this.defaultVal.PayRate != a.PayRate) {
                            a.isPayRateChange = true;
                        }
                        //PaperCount
                        if (this.defaultVal.PaperCount && this.defaultVal.PaperCount != a.PaperCount) {
                            a.isPaperCountChange = true;
                        }
                        //DiscountInterest
                        if (this.defaultVal.DiscountInterest && this.defaultVal.DiscountInterest != a.DiscountInterest) {
                            a.isDiscountInterestChange = true;
                        }
                        //Commissions
                        if (this.defaultVal.Commissions && this.defaultVal.Commissions != a.Commissions) {
                            a.isCommissionsChange = true;
                        }
                        //CommissionsType
                        if (this.defaultVal.CommissionsType && this.defaultVal.CommissionsType != a.CommissionsType) {
                            a.isCommissionsTypeChange = true;
                        }
                        //PayAmount
                        if (this.defaultVal.PayAmount && this.defaultVal.PayAmount != a.PayAmount) {
                            a.isPayAmountChange = true;
                        }
                        //Payee
                        if (this.defaultVal.Payee && this.defaultVal.Payee != a.Payee) {
                            a.isPayeeChange = true;
                        }
                        //PayeeAccount
                        if (this.defaultVal.PayeeAccount && this.defaultVal.PayeeAccount != a.PayeeAccount) {
                            a.isPayeeAccountChange = true;
                        }
                        //OpeningBankName
                        if (this.defaultVal.OpeningBankName && this.defaultVal.OpeningBankName != a.OpeningBankName) {
                            a.isOpeningBankNameChange = true;
                        }
                        //OpeningBankCity
                        if (this.defaultVal.OpeningBankCity && this.defaultVal.OpeningBankCity != a.OpeningBankCity) {
                            a.isOpeningBankCityChange = true;
                        }
                        //OpeningBankNumber
                        if (this.defaultVal.OpeningBankNumber && this.defaultVal.OpeningBankNumber != a.OpeningBankNumber) {
                            a.isOpeningBankNumberChange = true;
                        }
                    }
                    //图片转换
                    var DraftImage = a.DraftImage;
                    a.DraftImage = this.iamgeutil.GetImageHref(DraftImage);
                    a.DraftImageSrc = this.iamgeutil.GetImageSrc(DraftImage);

                    var BankImgSplit = a.BankImgSplit;
                    a.BankImgSplit = this.iamgeutil.GetImageHref(BankImgSplit);
                    a.BankImgSplitSrc = this.iamgeutil.GetImageSrc(BankImgSplit);

                    if (a.ExpireDate) {
                        a.ExpireDate = utilFile.Core.Util.DateFormat(new Date(Date.parse(a.ExpireDate.replace(/\-/g, "/"))), "yyyy年MM月dd日")
                    }

                    a.Chenck = false;


                    if (this.MRPUserCodeData) {
                        this.MRPUserCodeData.map((b) => {
                            if (b.CODE_VALUE == a.ApplyUserId) {
                                a.ApplyUserId = b.CODE_TEXT;
                            }
                        })
                    }


                    if (this.PriceType) {
                        this.PriceType.map((b) => {
                            if (b.CODE_VALUE == a.PriceType) {
                                a.PriceType = b.CODE_TEXT;
                            }

                            if (b.CODE_VALUE == a.PayType) {
                                a.PayType = b.CODE_TEXT;
                            }

                        })
                    }


                    if (this.BankType) {
                        this.BankType.map((b) => {
                            if (b.CODE_VALUE == a.FBankType) {
                                a.FBankType = b.CODE_TEXT;
                            }
                        })
                    }

                    if (this.AcceptKind) {
                        this.AcceptKind.map((b) => {
                            if (b.CODE_VALUE == a.FAcceptkind) {
                                a.FAcceptkind = b.CODE_TEXT;
                            }
                        })
                    }

                    if (this.BiDaDepartmentCodeTable) {
                        this.BiDaDepartmentCodeTable.map((b) => {
                            if (b.CODE_VALUE == a.FDepartmentID) {
                                a.FDepartmentID = b.CODE_TEXT;
                            }
                        })
                    }

                    ////CommissionType

                    if (this.CommissionsType) {
                        this.CommissionsType.map((b) => {
                            if (b.CODE_VALUE == a.CommissionsType) {
                                a.CommissionsType = b.CODE_TEXT;
                            }
                        })
                    }
                    //BDGroupName

                    if (this.BDGroupName) {
                        this.BDGroupName.map((b) => {
                            if (b.CODE_VALUE == a.FControlUnitID) {
                                a.FControlUnitID = b.CODE_TEXT;
                            }
                        })
                    }


                })


                if (callback) {
                    callback(() => {
                        this.getEmit("React").emit("pageLoadEnd");
                    });
                }
                // this.forceUpdate("");
                //this.forceUpdate("", () => {
                //    this.getEmit("React").emit("pageLoadEnd");
                //    //$(ReactDOM.findDOMNode(this)).find("ACT_TEST").
                //});
            })

        }

        public fun_changeCheck(a: bd_PayInfoPageData) {

            var str = [];

            a.Chenck = !a.Chenck;
            this.hasCheck = false;
            this.ListData.map((b) => {
                if (b.Chenck) {
                    str.push(b.BUTTON_RIGHT);
                    this.hasCheck = true;
                }
            })

            var strArray = this.Fun_ButtonRight(str);
            if (strArray.length > 0) {
                strArray.map((a) => {
                    if (a == "Update") {
                        this.isUpdate = true;
                    }

                    if (a == "Detail") {
                        this.isDetail = true;
                    }

                    if (a == "Delete") {
                        this.isDelete = true;
                    }

                    if (a == "Print") {
                        this.isPrint = true;
                    }
                })
            } else {
                this.isUpdate = false;
                this.isDelete = false;
                this.isPrint = false;
                this.isDetail = false;
            }

            this.forceUpdate("");
        }

        public fun_Sreach(ds: string) {
            urlFile.Core.AkPost("/module/SearchForm", { xml: "module/BiDa/business/bd_PayInfo.xml", form: "bd_PayInfo", pageStyle: "List", ds: ds }, (a) => {
                this.PaginationData = a.Data.bd_PayInfo_PAGER[0];
                this.PaginationData.PageNo = a.Data.bd_PayInfo_PAGER[0].PageIndex;

                this.ListData = a.Data.bd_PayInfo;
                this.MRPUserCodeData = a.Data.MRPUserCodeData;
                this.PriceType = a.Data.PriceType;
                this.BankType = a.Data.BankType;
                this.AcceptKind = a.Data.AcceptKind;
                this.BiDaDepartmentCodeTable = a.Data.BiDaDepartmentCodeTable;
                this.CommissionsType = a.Data.CommissionsType;
                this.BDGroupName = a.Data.BDGroupName;



                a.Forms.bd_PayInfo_SEARCH.Columns.map((b) => {


                    if (b.Name == "FDepartmentID") {
                        this.iDaDepartmentCodeDataStr = b.Options.RegName;
                    }

                    if (b.Name == "ApplyUserId") {
                        this.MRPUserCodeDataStr = b.Options.RegName;
                    }
                })

                this.ListData.map((a) => {

                    this.defaultVal = $.parseJSON(a.DefaultValAll);
                    if (this.defaultVal) {
                        if (this.defaultVal.TotalAmount && this.defaultVal.TotalAmount != a.TotalAmount) {
                            a.isTotalAmountChange = true;
                        }
                        //InvoiceBank
                        if (this.defaultVal.InvoiceBank && this.defaultVal.InvoiceBank != a.InvoiceBank) {
                            a.isInvoiceBankChange = true;
                        }
                        //ExpireDate
                        if (this.defaultVal.ExpireDate && this.defaultVal.ExpireDate != a.ExpireDate) {
                            a.isExpireDateChange = true;
                        }
                        //DiscountDays
                        if (this.defaultVal.DiscountDays && this.defaultVal.DiscountDays != a.DiscountDays) {
                            a.isDiscountDaysChange = true;
                        }
                        //PriceType
                        if (this.defaultVal.PriceType && this.defaultVal.PriceType != a.PriceType) {
                            a.isPriceTypeChange = true;
                        }
                        //PriceRate
                        if (this.defaultVal.PriceRate && this.defaultVal.PriceRate != a.PriceRate) {
                            a.isPriceRateChange = true;
                        }
                        //PayType
                        if (this.defaultVal.PayType && this.defaultVal.PayType != a.PayType) {
                            a.isPayTypeChange = true;
                        }
                        //PayRate
                        if (this.defaultVal.PayRate && this.defaultVal.PayRate != a.PayRate) {
                            a.isPayRateChange = true;
                        }
                        //PaperCount
                        if (this.defaultVal.PaperCount && this.defaultVal.PaperCount != a.PaperCount) {
                            a.isPaperCountChange = true;
                        }
                        //DiscountInterest
                        if (this.defaultVal.DiscountInterest && this.defaultVal.DiscountInterest != a.DiscountInterest) {
                            a.isDiscountInterestChange = true;
                        }
                        //Commissions
                        if (this.defaultVal.Commissions && this.defaultVal.Commissions != a.Commissions) {
                            a.isCommissionsChange = true;
                        }
                        //CommissionsType
                        if (this.defaultVal.CommissionsType && this.defaultVal.CommissionsType != a.CommissionsType) {
                            a.isCommissionsTypeChange = true;
                        }
                        //PayAmount
                        if (this.defaultVal.PayAmount && this.defaultVal.PayAmount != a.PayAmount) {
                            a.isPayAmountChange = true;
                        }
                        //Payee
                        if (this.defaultVal.Payee && this.defaultVal.Payee != a.Payee) {
                            a.isPayeeChange = true;
                        }
                        //PayeeAccount
                        if (this.defaultVal.PayeeAccount && this.defaultVal.PayeeAccount != a.PayeeAccount) {
                            a.isPayeeAccountChange = true;
                        }
                        //OpeningBankName
                        if (this.defaultVal.OpeningBankName && this.defaultVal.OpeningBankName != a.OpeningBankName) {
                            a.isOpeningBankNameChange = true;
                        }
                        //OpeningBankCity
                        if (this.defaultVal.OpeningBankCity && this.defaultVal.OpeningBankCity != a.OpeningBankCity) {
                            a.isOpeningBankCityChange = true;
                        }
                        //OpeningBankNumber
                        if (this.defaultVal.OpeningBankNumber && this.defaultVal.OpeningBankNumber != a.OpeningBankNumber) {
                            a.isOpeningBankNumberChange = true;
                        }
                    }


                    //a.DraftImage = this.iamgeutil.GetImageHref(a.DraftImage);
                    //a.BankImgSplit = this.iamgeutil.GetImageHref(a.BankImgSplit);
                    var DraftImage = a.DraftImage;
                    a.DraftImage = this.iamgeutil.GetImageHref(DraftImage);
                    a.DraftImageSrc = this.iamgeutil.GetImageSrc(DraftImage);

                    var BankImgSplit = a.BankImgSplit;
                    a.BankImgSplit = this.iamgeutil.GetImageHref(BankImgSplit);
                    a.BankImgSplitSrc = this.iamgeutil.GetImageSrc(BankImgSplit);

                    if (a.ExpireDate) {
                        a.ExpireDate = utilFile.Core.Util.DateFormat(new Date(Date.parse(a.ExpireDate.replace(/\-/g, "/"))), "yyyy年MM月dd日")
                    }

                    a.Chenck = false;

                    if (this.MRPUserCodeData) {
                        this.MRPUserCodeData.map((b) => {
                            if (b.CODE_VALUE == a.ApplyUserId) {
                                a.ApplyUserId = b.CODE_TEXT;
                            }
                        })
                    }


                    if (this.PriceType) {
                        this.PriceType.map((b) => {
                            if (b.CODE_VALUE == a.PriceType) {
                                a.PriceType = b.CODE_TEXT;
                            }

                            if (b.CODE_VALUE == a.PayType) {
                                a.PayType = b.CODE_TEXT;
                            }

                        })
                    }


                    if (this.BankType) {
                        this.BankType.map((b) => {
                            if (b.CODE_VALUE == a.FBankType) {
                                a.FBankType = b.CODE_TEXT;
                            }
                        })
                    }

                    if (this.AcceptKind) {
                        this.AcceptKind.map((b) => {
                            if (b.CODE_VALUE == a.FAcceptkind) {
                                a.FAcceptkind = b.CODE_TEXT;
                            }
                        })
                    }

                    if (this.BiDaDepartmentCodeTable) {
                        this.BiDaDepartmentCodeTable.map((b) => {
                            if (b.CODE_VALUE == a.FDepartmentID) {
                                a.FDepartmentID = b.CODE_TEXT;
                            }
                        })
                    }

                    ////CommissionType

                    if (this.CommissionsType) {
                        this.CommissionsType.map((b) => {
                            if (b.CODE_VALUE == a.CommissionsType) {
                                a.CommissionsType = b.CODE_TEXT;
                            }
                        })
                    }
                    //BDGroupName

                    if (this.BDGroupName) {
                        this.BDGroupName.map((b) => {
                            if (b.CODE_VALUE == a.FControlUnitID) {
                                a.FControlUnitID = b.CODE_TEXT;
                            }
                        })
                    }

                })

                this.forceUpdate("");
            })
        }


        public Fun_ButtonRight(ButtonRight: string[]) {
            var _temp = [];
            ButtonRight.map((a) => {
                var _rights = a.split("|");
                if (_temp.length == 0) {
                    _temp = _rights;
                }
                else {
                    _temp = utilFile.Core.Util.intersection(_rights, _temp);
                }
            })
            return _temp;
        }



    }

    export interface ButtonKV {
        ButtonName: string;
        Num: number;
    }

    export class bd_PayInfoPageStates extends basewedPageFile.Web.BaseWebPageStates { }

    export class bd_PayInfoPageProps extends basewedPageFile.Web.BaseWebPageProps<bd_PayInfoPageVm> { }

    iocFile.Core.Ioc.Current().RegisterType("BDPAYINFOPAGE", basewedPageFile.Web.BaseWebPageVm, bd_PayInfoPageVm);
}