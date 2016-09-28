import domFile = require("./../../01core/0Dom");
import iocFile = require("./../../01core/Ioc");
//import domFile = require("./../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../01core/Util");
//import iocFile = require("./../01core/Ioc"); 
import urlFile = require("./../../01core/Url");
import basewedPageFile = require("./../../04page/BaseWebPage");
import PaginationFile = require("./../../05tool/Pagination")
import ImageData = require("./../bdPayInfo/ImageData");
import Sea = require("./../../10Sea/sea");
import reus = require("./../../10Sea/Reus");
import picPreViewFile = require("./../../05tool/PicPreView");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module BDPayApply {

    export class BDPayApplyAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class BDPayApplyReact extends basewedPageFile.Web.BaseWebPageReact<BDPayApplyProps, BDPayApplyStates, BDPayApplyAction> implements domCore.IReact {

        public state = new BDPayApplyStates();
        private Fun_ImageShow(src: string, e: React.MouseEvent): void {
            picPreViewFile.PicPreView.showImageByDom($(e.target), src);
        };
        private  clickImgFun(src:string):void 
        {

        }

        public sendLineData(a: BDPayApplyData): any {
            return <tr>
                <td>
                    <a  onClick={() => { this.fun_chagneChenck(a) } }>
                        <i className={a.Chenck ? " ACT-CHECK-SINGLE icon-check " : "ACT-CHECK-SINGLE icon-check-empty "}></i>
                        </a>
                    <span>{a.rn}</span>

                    </td>
                <td><img width='38' height='38'  src={a.DraftImage} onClick={(e) => { this.Fun_ImageShow(a.DraftImageSrc, e) } }></img></td>
                <td className="aks-td AKJS ACT_HIDDEN">{a.FID}</td>
                <td>{a.FlowNumber}</td>
                <td><span dangerouslySetInnerHTML={{ __html: a.ApplyUserId }} ></span></td>
                <td>{a.ApproveStatus}</td>
                <td><span dangerouslySetInnerHTML={{ __html: a.ApproveUserId }} ></span></td>
                <td>{a.ReviewStatus}</td>
                <td><span dangerouslySetInnerHTML={{ __html: a.ReviewUserId }} ></span></td>
                <td>{a.FBankType}</td>
                <td>{a.FAcceptkind}</td>
                <td>{a.FDepartmentID}</td>
                <td>{a.bd_Pay_Apply_WF_STATUS}</td>
                <td>{a.PrintState}</td>
                <td>{a.bd_Pay_Apply_WF_IS_END}</td>
                <td>{a.bd_Pay_Apply_IS_APPLY_WF}</td>
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
        // <a className="ACT-ROW-BTN ACT-BT-OutExcel btn btn-default btn-xs" onClick={() => { this.fun_import() } }>
        //            <span>导出到excel</span>
        //</a>
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
                        <th><span>票面图片</span></th>
                        <th  className="aks-td AKJS ACT_HIDDEN">
                            <span>FID</span></th> <th>
                            <span>流水号</span>
                                </th> <th>
                            <span>申请人</span>  </th>
                        <th>
                            <span>初审状态</span></th>
                        <th>
                            <span>初审人</span></th>
                        <th>
                            <span>复核状态</span></th>
                        <th>
                            <span>复核人</span></th>
                        <th>
                            <span>承兑行类别</span></th>
                        <th>
                            <span>承兑方式</span> </th>
                        <th>
                            <span>申请区域</span></th>
                        <th>
                            <span>流程状态</span></th>
                        <th>
                            <span>打印状态</span></th>
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
                            <input className="form-control ask-input input-border  search_Module_text" placeholder=".." type="text" value={this.props.Vm.Search_FlowNumber} onChange={(a) => { this.FlowNumberChange(a) } } /></span>
                        </li>

                    <li className="search_Module_row col-md-6"><label className="search_Module_lab col-md-5 ta2">申请人: </label>
                        <span className="col-md-7 AKJS ACT_CONTROL ACT-SELECTBOX-PARENT SEARCH-CONTROL ACT_POST"><div className="ACT-TEST"></div></span></li>
                    <li className="search_Module_row col-md-6">
                        <label className="search_Module_lab col-md-5 ta2">承兑行类别: </label>
                        <span className="col-md-7 AKJS ACT_CONTROL SEARCH-CONTROL ACT_POST">
                            <select onChange={(a) => { this.FBankTypeChange(a) } } value={this.props.Vm.Search_FBankType1}>
                            <option value="-1">--请选择--</option>
                            <option value="1">国股</option>
                            <option value="2">商行</option>
                            <option value="3">其他</option>
                            </select></span>
                        </li>

                    <li className="search_Module_row col-md-6" >
                        <label className="search_Module_lab col-md-5 ta2">承兑方式: </label>
                        <span className="col-md-7 AKJS ACT_CONTROL SEARCH-CONTROL ACT_POST">
                            <select onChange={(a) => { this.FAcceptkindChange(a) } } value={this.props.Vm.Search_FAcceptkind1}>
                            <option value="-1">--请选择--</option>
                            <option  value="1">买断</option>
                            <option value="2">带票</option>
                            <option  value="3">其他</option>
                            </select></span>
                        </li>

                    <li className="search_Module_row col-md-6">
                        <label className="search_Module_lab col-md-5 ta2">申请区域: </label>
                        <span className="col-md-7 AKJS ACT_CONTROL SEARCH-CONTROL ACT_POST"><div className="ACT-TEST2"></div></span>
                        </li>
                    <li className="search_Module_row col-md-6" >
                        <label className="search_Module_lab col-md-5 ta2">打印状态: </label>
                        <span className="col-md-7 AKJS ACT_CONTROL SEARCH-CONTROL ACT_POST">
                            <select onChange={(a) => { this.PrintTypeChange(a) } } value={this.props.Vm.Search_PrintType1}>
                            <option value="-1">--请选择--</option>
                            <option  value="1">已打印</option>
                            <option value="2">未打印</option>
                            </select></span>
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
                    </div>
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
        public PrintTypeChange(a: React.FormEvent) {
            var val = a.target["value"];
            this.props.Vm.Search_PrintType = val;
            this.props.Vm.Search_PrintType1 = val;
            this.forceUpdate();
        }

        public Search() {
            var dd = {
                "bd_Pay_Apply_SEARCH":this.postSearchData(),
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
            this.props.Vm.Search_PrintType = undefined;
            this.props.Vm.Search_PrintType1 = "-1";

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
                //var ds = null;
                var dd = {
                    "bd_Pay_Apply_SEARCH": this.postSearchData(), "PAGER": [
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

        public postSearchData() {
            var _ds = [];
            var ds = new Object;
            if (this.props.Vm.Search_ApplyUserId) {
                // ds.push({ "ApplyUserId": this.props.Vm.Search_ApplyUserId })
                ds["ApplyUserId"] = this.props.Vm.Search_ApplyUserId;
            }

            if (this.props.Vm.Search_FAcceptkind&&this.props.Vm.Search_FAcceptkind!="-1") {
                //ds.push({ "FAcceptkind": this.props.Vm.Search_FAcceptkind })
                ds["FAcceptkind"] = this.props.Vm.Search_FAcceptkind;
            }

            if (this.props.Vm.Search_FBankType&&this.props.Vm.Search_FBankType!="-1") {
                // ds.push({ "FBankType": this.props.Vm.Search_FBankType })
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
            if (this.props.Vm.Search_PrintType &&this.props.Vm.Search_PrintType!="-1") {
                //ds.push({ "PrintState": this.props.Vm.Search_PrintType });
                ds["PrintState"] = this.props.Vm.Search_PrintType;
            }
            _ds.push(ds);
            return _ds;
        }
       
        public fun_chagneChenck(a: BDPayApplyData) {
            this.props.Vm.fun_changeCheck(a);
        }
        //导入
        //public fun_import() {
        //    var dd = this.getCheckData();
        //    alert(dd)
        //}
        //打印
        public fun_Print() {
            //if (this.props.Vm.isPrint) {
            if(this.props.Vm.hasCheck){
                var dd = this.getCheckData();
                //areas/report/preport.aspx?s=PayApplyReportSource&id=20160603115202053AAA939418ABBC4F2E8337EC2FCB9957D8
                window.open("/areas/report/preport.aspx?s=DraftElementReportSource&id=" + dd.join(","));
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
            //if (this.props.Vm.isDelete) {
            if(this.props.Vm.hasCheck){
                var _datas = [];
                this.props.Vm.ListData.map((a) => {
                    if (a.Chenck) {
                        var _data = { "OperationName": "Delete", "KeyValue": a.FID, "Data": null };
                        _datas.push(_data);
                    }
                })

                var _datastr = { "bd_Pay_Apply_OPERATION": _datas };

                if (confirm("你确定要删除吗？")) {
                    urlFile.Core.AkPost("/module/ModuleMerge", { xml: "module/BiDa/business/bd_Pay_Apply.xml", ds: JSON.stringify(_datastr) }, (a) => {
                        if (a.res != "0") {
                            
                            var dd = {
                                "bd_Pay_Apply_SEARCH":this.postSearchData(), "PAGER": [
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

            //if (this.props.Vm.isDetail) {
            if(this.props.Vm.hasCheck){
                var dd = this.getCheckData();
                var config: reus.IOpenPage = { ids: dd, pageStyle: "Detail", xml: "module/BiDa/business/bd_Pay_Apply.xml" }
                reus.Reus.OpenWinPage(config);
            } else {
                alert("按钮不可用");
            }
        }

        //编辑
        public fun_Edit() {
            //if (this.props.Vm.isUpdate) {
            if(this.props.Vm.hasCheck){
                var dd = this.getCheckData();
                var config: reus.IOpenPage = { ids: dd, pageStyle: "Update", xml: "module/BiDa/business/bd_Pay_Apply.xml" }
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

    export interface BDPayApplyData {
        Chenck: boolean;
        FID: string;
        rn: string;
        FlowNumber: string; //流水号
        bd_Pay_Apply_WF_ID: string;   //流程编号
        ApproveStatus: number; //审批状态
        ReviewStatus: number;//复核状态
        PayStatus: number;//打款状态
        ApproveUserId: string; //审批人
        PayUserId: string; //打款人
        ReviewUserId: string;//复核人
        PrintState: string;//打印状态
        bd_Pay_Apply_WF_STATUS: string;//流程状态
        bd_Pay_Apply_STEP_NAME: string;//步骤名称
        bd_Pay_Apply_WF_TIME: string;//流程时间
        bd_Pay_Apply_WF_IS_END: string;//是否完成
        bd_Pay_Apply_IS_APPLY_WF: string;//应用到工作流
        ApplyUserId: string;//ApplyUserId 申请人
        FAcceptkind: string; //承兑方式
        FBankType: string; //承兑行类别
        FDepartmentID: string; //申请区域
        FControlUnitID: string;//组织机构
        DraftImage: string; //票面图片
        DraftImageSrc: string;
        BUTTON_RIGHT: string;
    }

    export interface KVData {
        CODE_VALUE: string;
        CODE_TEXT: string;
        CODE_INDEX: string;
    }

    export interface BDPayApplyConfig { }

    export class BDPayApplyVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = BDPayApplyReact;

        public ListData: BDPayApplyData[] = [];
        public hasCheck: boolean;


        public PrintState: KVData[] = []; //打印状态
        public ApplyUser: KVData[] = []; //申请人
        public BankType: KVData[] = [];  //承兑行类别
        public AccepType: KVData[] = []; //承兑方式
        public Department: KVData[] = [];//申请区域
        public ControlUnit: KVData[] = [];//组织机构
        public DraftImage: KVData[] = [];//票面图片
        public buttonArray: ButtonKV[] = [];
        public MRPUserCodeDataStr: string;//插件名
        public iDaDepartmentCodeDataStr: string;

        public Pagetion: PaginationFile.tool.PaginationVm;
        public isAllCheck: boolean = false;

        //搜索的选项
        public Search_FlowNumber: string;//流水号
        public Search_ApplyUserId: string;//申请人
        public Search_FBankType: string;//承兑行类别
        public Search_FBankType1: string;
        public Search_FAcceptkind: string;//承兑方式
        public Search_FAcceptkind1: string;
        public Search_FDepartmentID: string;//申请区域
        public Search_PrintType: string;//打印状态
        public Search_PrintType1: string;//打印状态
        public OpenPageData: reus.IOpenPage;
        public iamgeutil: ImageData.ImageUtil = new ImageData.ImageUtil;
        public PaginationData: PaginationFile.tool.Pagination;

        public isUpdate: boolean = false;
        public isPrint: boolean = false;
        public isDelete: boolean = false;
        public isDetail: boolean = false;

        public FIDs: string;

        public constructor(config?: BDPayApplyConfig) {
            super();
        }

        private init(config: BDPayApplyConfig) { }

        protected loadPage(callback?: Function) {

            this.Pagetion = new PaginationFile.tool.PaginationVm({ IsBidaStyle: true });

            urlFile.Core.AkPost("/module/module", { xml: "module/BiDa/business/bd_Pay_Apply", ds: "", pageStyle: "List" }, (a) => {

                this.PaginationData = a.Data.bd_Pay_Apply_PAGER[0];
                this.PaginationData.PageNo = a.Data.bd_Pay_Apply_PAGER[0].PageIndex;
                this.ListData = a.Data.bd_Pay_Apply;
                this.PrintState = a.Data.PrintState;
                this.ApplyUser = a.Data.MRPUserCodeData;
                this.BankType = a.Data.BankType;
                this.AccepType = a.Data.AcceptKind;
                this.Department = a.Data.BiDaDepartmentCodeTable;
                this.ControlUnit = a.Data.BDGroupName;
                this.ListData.map((a) => {
                    var imageSrc = a.DraftImage;
                    a.DraftImage = this.iamgeutil.GetImageHref(a.DraftImage);
                    a.DraftImageSrc = this.iamgeutil.GetImageSrc(imageSrc);
                    a.Chenck = false;
                    if (this.PrintState) {
                        this.PrintState.map((b) => {
                            if (b.CODE_VALUE == a.PrintState) {
                                a.PrintState = b.CODE_TEXT;
                            }
                        });
                    }
                    if (this.BankType) {
                        this.BankType.map((b) => {
                            if (b.CODE_VALUE == a.FBankType) {
                                a.FBankType = b.CODE_TEXT;
                            }
                        });
                    }
                    if (this.AccepType) {
                        this.AccepType.map((b) => {
                            if (b.CODE_VALUE == a.FAcceptkind) {
                                a.FAcceptkind = b.CODE_TEXT;
                            }
                        });
                    }
                    if (this.ApplyUser) {
                        this.ApplyUser.map((b) => {
                            if (b.CODE_VALUE == a.ApplyUserId) {
                                a.ApplyUserId = b.CODE_TEXT;
                            }
                            if (b.CODE_VALUE == a.ApproveUserId) {
                                a.ApproveUserId = b.CODE_TEXT;
                            }
                            if (b.CODE_VALUE == a.ReviewUserId) {
                                a.ReviewUserId = b.CODE_TEXT;
                            }
                        });
                    }
                    if (this.Department) {
                        this.Department.map((b) => {
                            if (b.CODE_VALUE == a.FDepartmentID) {
                                a.FDepartmentID = b.CODE_TEXT;
                            }
                        });
                    }
                    if (this.ControlUnit) {
                        this.ControlUnit.map((b) => {
                            if (b.CODE_VALUE == a.FControlUnitID) {
                                a.FControlUnitID = b.CODE_TEXT;
                            }
                        });
                    }

                });
                a.Forms.bd_Pay_Apply_SEARCH.Columns.map((b) => {
                    if (b.Name == "FDepartmentID") {
                        this.iDaDepartmentCodeDataStr = b.Options.RegName;
                    }

                    if (b.Name == "ApplyUserId") {
                        this.MRPUserCodeDataStr = b.Options.RegName;
                    }
                })
                if (callback) {
                    callback(() => {
                        this.getEmit("React").emit("pageLoadEnd");
                    });
                }
               
            })

        }       
        public fun_changeCheck(a: BDPayApplyData) {
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
            urlFile.Core.AkPost("/module/SearchForm", { xml: "module/BiDa/business/bd_Pay_Apply.xml", form: "bd_Pay_Apply", pageStyle: "List", ds: ds }, (a) => {
                

                this.PaginationData = a.Data.bd_Pay_Apply_PAGER[0];
                this.PaginationData.PageNo = a.Data.bd_Pay_Apply_PAGER[0].PageIndex;
                this.ListData = a.Data.bd_Pay_Apply;
                this.PrintState = a.Data.PrintState;
                this.ApplyUser = a.Data.MRPUserCodeData;
                this.BankType = a.Data.BankType;
                this.AccepType = a.Data.AcceptKind;
                this.Department = a.Data.BiDaDepartmentCodeTable;
                this.ControlUnit = a.Data.BDGroupName;
                this.ListData.map((a) => {
                    a.Chenck = false;

                    var imageSrc = a.DraftImage;
                    a.DraftImage = this.iamgeutil.GetImageHref(a.DraftImage);
                    a.DraftImageSrc = this.iamgeutil.GetImageSrc(imageSrc);

                    if (this.PrintState) {
                        this.PrintState.map((b) => {
                            if (b.CODE_VALUE == a.PrintState) {
                                a.PrintState = b.CODE_TEXT;
                            }
                        });
                    }
                    if (this.BankType) {
                        this.BankType.map((b) => {
                            if (b.CODE_VALUE == a.FBankType) {
                                a.FBankType = b.CODE_TEXT;
                            }
                        });
                    }
                    if (this.AccepType) {
                        this.AccepType.map((b) => {
                            if (b.CODE_VALUE == a.FAcceptkind) {
                                a.FAcceptkind = b.CODE_TEXT;
                            }
                        });
                    }
                    if (this.ApplyUser) {
                        this.ApplyUser.map((b) => {
                            if (b.CODE_VALUE == a.ApplyUserId) {

                                a.ApplyUserId = b.CODE_TEXT;
                            }
                            if (b.CODE_VALUE == a.ApproveUserId) {
                                a.ApproveUserId = b.CODE_TEXT;
                            }
                            if (b.CODE_VALUE == a.ReviewUserId) {
                                a.ReviewUserId = b.CODE_TEXT;
                            }
                        });
                    }
                    if (this.Department) {
                        this.Department.map((b) => {
                            if (b.CODE_VALUE == a.FDepartmentID) {
                                a.FDepartmentID = b.CODE_TEXT;
                            }
                        });
                    }
                    if (this.ControlUnit) {
                        this.ControlUnit.map((b) => {
                            if (b.CODE_VALUE == a.FControlUnitID) {
                                a.FControlUnitID = b.CODE_TEXT;
                            }
                        });
                    }

                });
                a.Forms.bd_Pay_Apply_SEARCH.Columns.map((b) => {
                    if (b.Name == "FDepartmentID") {
                        this.iDaDepartmentCodeDataStr = b.Options.RegName;
                    }

                    if (b.Name == "ApplyUserId") {
                        this.MRPUserCodeDataStr = b.Options.RegName;
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

    export class BDPayApplyStates extends basewedPageFile.Web.BaseWebPageStates { }

    export class BDPayApplyProps extends basewedPageFile.Web.BaseWebPageProps<BDPayApplyVm> { }

    iocFile.Core.Ioc.Current().RegisterType("BDPayApply", basewedPageFile.Web.BaseWebPageVm, BDPayApplyVm);
}