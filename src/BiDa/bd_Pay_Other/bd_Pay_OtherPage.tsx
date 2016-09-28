import domFile = require("./../../01core/0Dom");
import iocFile = require("./../../01core/Ioc");
//import domFile = require("./../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../01core/Util");
//import iocFile = require("./../01core/Ioc"); 
import urlFile = require("./../../01core/Url");
import basewedPageFile = require("./../../04page/BaseWebPage");
import PaginationFile = require("./../../05tool/Pagination");
import eventFile = require("./../../01core/Event");
import toolTreeFile = require("./../../05tool/Tree");
import reus = require("./../../10Sea/Reus");
import Sea = require("./../../10Sea/sea");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module bd_Pay_OtherPage {
    export class bd_Pay_OtherPageAction extends basewedPageFile.Web.BaseWebPageStates{
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class bd_Pay_OtherPageReact extends basewedPageFile.Web.BaseWebPageReact<bd_Pay_OtherPageProps, bd_Pay_OtherPageStates, bd_Pay_OtherPageAction> implements domCore.IReact {

        public state = new bd_Pay_OtherPageStates();

        public sendLineData(a:bd_Pay_OtherPageData): any {
            return <tr>
                <td>
                    <a onClick={() => { this.fun_chagneChenck(a) } }>
                        <i className={a.Chenck ? "ACT-CHECK-SINGLE icon-check" :"ACT-CHECK-SINGLE icon-check-empty"}></i>
                    </a>
                    <span>{a.rn}</span>
                </td>
                <td className="aks-td AKJS ACT_HIDDEN">{a.FID}</td>
                <td>{a.FlowNumber}</td>
                <td><span dangerouslySetInnerHTML={{ __html: a.ApplyUserId }} ></span></td>
                <td>{a.Payee}</td>
                <td>{a.Account}</td>
                <td>{a.OpeningBankName}</td>
                <td>{a.OpeningBankCity}</td>
                <td>{a.Amount}</td>
                <td>{a.FBankType}</td>
                <td>{a.FAcceptkind}</td>
                <td>{a.FDepartmentID}</td>
                <td>{a.bd_Pay_Other_WF_STATUS}</td>
                <td>{a.bd_Pay_Other_WF_IS_END}</td>
                <td>{a.bd_Pay_Other_IS_APPLY_WF}</td>
                <td>{a.FControlUnitID}</td>
                </tr>
        }
        //选择框搜索
        protected pInstall(): void{
            super.pInstall();
            //申请人
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
                    //申请区域
                    var _$dom2 = $(ReactDOM.findDOMNode(this)).find(".ACT-TEST2");
                    if (!_$dom2.AtawControl()) {
                        _$dom2["AtawMultiSelector"]({ RegName: "BiDaDepartmentCodeTable" });
                    }
                    var _Obj2 = _$dom2.AtawControl();

                    _Obj2.event_change(() => {
                        var _val = _Obj2.dataValue();
                        this.props.Vm.Search_FDepartmentID = _val;
                        console.log(this);
                    });
                }  
            })
        }

        public pSender(): React.ReactElement<any> {
            var buttonLine = <div className="ButtonBar ta1">

                <a className={this.props.Vm.hasCheck ? "ACT-BUTTON-DATA ACT-ROW-BTN ACT-BT-Delete btn-danger btn btn-default btn-xs" : "ACT-BUTTON-DATA ACT-ROW-BTN ACT-BT-Delete btn-danger btn btn-default btn-xs acs-btn-disabled"}    onClick={() => { this.fun_Delete() } }>
                    <span>
                        <i className="icon-trash icon-white">删除</i></span>
                </a>

                <a className={this.props.Vm.hasCheck ? "ACT-BUTTON-DATA ACT-ROW-BTN ACT-BT-Detail btn-info btn btn-default btn-xs" : "ACT-BUTTON-DATA ACT-ROW-BTN ACT-BT-Delete btn-danger btn btn-default btn-xs acs-btn-disabled"}    onClick={() => { this.fun_Detail() } }>
                    <span><i className="icon-table ">详情</i></span>
                    </a>

                    <a className={this.props.Vm.hasCheck ? "ACT-BUTTON-DATA ACT-ROW-BTN ACT-BT-Update btn-warning btn btn-default btn-xs" : "ACT-BUTTON-DATA ACT-ROW-BTN ACT-BT-Delete btn-danger btn btn-default btn-xs acs-btn-disabled"}    onClick={() => { this.fun_Edit() } }>
                        <span><i className="icon-edit icon-white"></i>编辑</span>
                    </a>
            </div>

            var table = <table className ="table table-bordered table-striped table-hover table-condensed">
                <thead>
                    <tr>
                        <th className ="ACT-BTN-CONTAINER well" colSpan="1000">
                            {buttonLine}
                        </th>
                    </tr>
                    <tr className="ACT-HEADER MEMBER">
                        <th className="thCheckAll">
                            <input type="checkbox"  onClick={() => { this.onAllCheck()}}/>
                        </th>
                        <th className="aks-td AKJS ACT_HIDDEN">
                            <span>FID</span>
                        </th>
                        <th>
                            <span>流水号</span></th>
                        <th>
                            <span>申请人</span></th>
                        <th>
                            <span>收款方</span></th>
                        <th>
                            <span>卡号</span></th>
                        <th>
                            <span>开户行</span></th>
                        <th>
                            <span>开户行地区</span></th>
                        <th>
                            <span>金额</span></th>
                        <th>
                            <span>承兑行类别</span></th>
                        <th>
                            <span>承兑方式</span></th>
                        <th>
                            <span>申请区域</span></th>
                        <th>
                            <span>流程状态</span></th>
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
                    <li className ="search_Module_row col-md-6">
                        <label className="search_Module_lab col-md-5 ta2">流水号: </label>
                        <span className="col-md-7 AKJS ACT_CONTROL SEARCH-CONTROL ACT_POST">
                            <input className="form-control ask-input input-border  search_Module_text"  placeholder=".." type="text" value={this.props.Vm.Search_FlowNumber} onChange={(a) => { this.FlowNumberChange(a) } }/>
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
                            <select onChange={(a) => { this.FBankTypeChange(a) } } value ={this.props.Vm.Search_FBankTypes}>
                            <option value="-1">--请选择--</option>
                            <option  value="1">国股</option>
                            <option  value="2">商行</option>
                            <option value="3">其他</option>
                        </select>
                            </span>
                    </li>

                    <li className="search_Module_row col-md-6">
                        <label className="search_Module_lab col-md-5 ta2">承兑方式: </label>
                        <span className="col-md-7 AKJS ACT_CONTROL SEARCH-CONTROL ACT_POST">
                            <select onChange={(a) => { this.FAcceptkindChange(a) } } value={this.props.Vm.Search_FAcceptkinds}>
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
                            this.Search();} }></button>
                        <button className="btn btn-warning icon-trash" title="清空" onClick={() => {
                            this.Empty(); } }></button>
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

        //流水号
        public FlowNumberChange(a: React.FormEvent) {
            var val = a.target["value"];
            this.props.Vm.Search_FlowNumber = val;
            this.props.Vm.Search_FAcceptkinds = val;
            this.forceUpdate();
        }
        //承兑行类别
        public FBankTypeChange(a: React.FormEvent) {
            var _val = a.target["value"];
            this.props.Vm.Search_FBankType = _val;
            this.props.Vm.Search_FBankTypes = _val;
            this.forceUpdate();
        }
        //承兑方式
        public FAcceptkindChange(a: React.FormEvent) {
            var val = a.target["value"];
            this.props.Vm.Search_FAcceptkind = val;
            this.props.Vm.Search_FAcceptkinds = val;
            this.forceUpdate();
        }

        //清空
        public Empty() {
            this.props.Vm.Search_FlowNumber = undefined;//流水号
            this.props.Vm.Search_FBankType = undefined;//承兑行类别
            this.props.Vm.Search_FBankTypes = "-1";
            this.props.Vm.Search_FAcceptkind = undefined;//承兑方式
            this.props.Vm.Search_FAcceptkinds = "-1";
            this.props.Vm.Search_ApplyUserId = undefined; //申请人
            this.props.Vm.Search_FDepartmentID = undefined;//申请区域

            var _$a = $(ReactDOM.findDOMNode(this)).find(".ACT-TEST");
            var _a1 = _$a.AtawControl();
            _a1.$JObjText.val("");
            _a1.dataValue("");
            var _$b = $(ReactDOM.findDOMNode(this)).find(".ACT-TEST2");
            var _b1 = _$b.AtawControl();
            _b1.$JObjText.val("");
            _b1.dataValue("");
            var dd = {
                "bd_Pay_Other_SEARCH": [
                    {
                        "FlowNumber_LIKE": "",
                        "ApplyUserId": "",
                        "FBankType": "",
                        "FAcceptkind": "",
                        "FDepartmentID": ""
                    }],

                "Pager": [
                    {
                        "PageSize": 10,
                        "PageIndex": 0,
                        "IsASC": false,
                        "SortName": "",
                        "DataTime": "2016-06-1 09:36:49.900"
                    }]}
            this.fun_Sreach(JSON.stringify(dd));
        }

        //搜索
        public Search() {
                var dd = {
                    "bd_Pay_Other_SEARCH": this.postData(),
                    "Pager": [
                        {
                            "PageSize": 10,
                            "PageIndex": 0,
                            "IsASC": true,
                            "SortName": "",
                            "DataTime": "2016-06-1 09:36:49.900"
                        }]
                }
                this.fun_Sreach(JSON.stringify(dd));
        }

        public postData() {
            var _ds = [];
            var ds = new Object;
            if (this.props.Vm.Search_ApplyUserId) {
                ds["ApplyUserId"] = this.props.Vm.Search_ApplyUserId;
            }
            if (this.props.Vm.Search_FAcceptkind && this.props.Vm.Search_FAcceptkind !="-1")  {
                ds["FAcceptkind"] = this.props.Vm.Search_FAcceptkind;
            }
            if (this.props.Vm.Search_FBankType && this.props.Vm.Search_FBankType != "-1") {
                ds["FBankType"] = this.props.Vm.Search_FBankType;
            }
            if (this.props.Vm.Search_FDepartmentID) {
                ds["FDepartmentID"] = this.props.Vm.Search_FDepartmentID;
            }
            if (this.props.Vm.Search_FlowNumber) {
                ds["FlowNumber"] = this.props.Vm.Search_FlowNumber;
            }
            _ds.push(ds);
            return _ds;
        }

        //分页
        private _initPagination() {
            this.props.Vm.Pagetion.PageNo = this.props.Vm.PaginationData.PageNo;
            this.props.Vm.Pagetion.PageSize = this.props.Vm.PaginationData.PageSize;
            this.props.Vm.Pagetion.TotalCount = this.props.Vm.PaginationData.TotalCount;

            this.props.Vm.Pagetion.PageClickEvent = (pageIndex) => {

                var dd = {
                    "bd_Pay_Other_SEARCH": this.postData(), "PAGER": [
                        {
                            "PageSize": this.props.Vm.PaginationData.PageSize,
                            "PageIndex": pageIndex,
                            "IsASC": true,
                            "SortName": "",
                            "DataTime": "2016-05-31 16:52:49.900"
                        } ] }
                this.fun_Sreach(JSON.stringify(dd));
            }
            return this.props.Vm.Pagetion.intoDom();
        }

        public fun_chagneChenck(a: bd_Pay_OtherPageData) {
            this.props.Vm.fun_changeCheck(a);
        }

        //导出
        //public fun_import() {
        //    var dd = this.getCheckData();
        //    alert(dd);
        //}
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
                var _datastr = { "bd_Pay_Other_OPERATION": _datas };

                if (confirm("你确定要删除吗？")) {
                    urlFile.Core.AkPost("/module/ModuleMerge", { xml: "module/BiDa/business/bd_Pay_Other.xml", ds: JSON.stringify(_datastr) }, (a) => {
                        if (a.res != "0") {

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
                                    "bd_Pay_Other_SEARCH": this.postData(), "PAGER": [{
                                        "PageSize": this.props.Vm.PaginationData.PageSize,
                                        "PageIndex": this.props.Vm.PaginationData.PageNo,
                                        "IsASC": true,
                                        "SortName": "",
                                        "DataTime": "2016-05-31 16:52:49.900"
                                    }
                                    ]
                                }
                                //重新加载页面
                                this.fun_Sreach(JSON.stringify(dd));
                            }
                        });
                } else {
                    alert("按钮不可用")
                }
            }
        }
        //全选
        public onAllCheck() {
            this.props.Vm.ListData.map((a) => {
                a.Chenck = !this.props.Vm.isAllCheck;
            })
            this.props.Vm.hasCheck = !this.props.Vm.isAllCheck;
            this.props.Vm.isAllCheck = !this.props.Vm.isAllCheck;
            this.forceUpdate();
        }

        //详情
        public fun_Detail() {
            if (this.props.Vm.hasCheck) {
                var dd = this.getCheckData();
                var config: reus.IOpenPage = { ids: dd, pageStyle: "Detail", xml:"module/BiDa/business/bd_Pay_Other.xml"}
                reus.Reus.OpenWinPage(config);
            } else {
                alert("按钮不可用");
            }
        }

        //编辑
        public fun_Edit() {
            if (this.props.Vm.hasCheck) {
                var dd = this.getCheckData();
                var config: reus.IOpenPage = { ids: dd, pageStyle: "Update", xml: "module/BiDa/business/bd_Pay_Other.xml" }
                reus.Reus.OpenWinPage(config);
            } else {
                alert("按钮不可用");
            }
        }
        //选中
        public getCheckData() {
            var dd = [];
            this.props.Vm.ListData.map((a) => {
                if (a.Chenck) {
                    dd.push(a.FID);
                }
            })
            return dd;
        }
        //搜索
        public fun_Sreach(ds:string) {
            this.props.Vm.fun_Sreach(ds);
        }

    }
    export interface bd_Pay_OtherPageData {
        Chenck: boolean;
        FID: string;
        rn: string;
        FlowNumber: string;//流水号
        ApplyUserId: string;//申请人
        Account: string;//卡号
        Payee: string;//收款方
        OpeningBankName: string;//开户行
        OpeningBankCity: string;//开户行地区
        Amount: string;//金额
        Remark: string;//备注
        bd_Pay_Other_WF_STATUS: string;//流程状态,暂定类型为string
        bd_Pay_Other_WF_IS_END: boolean;//是否完成
        bd_Pay_Other_IS_APPLY_WF: string; //应用到工作流,暂定类型为string
        bd_Pay_Other_STEP_NAME: string;//步骤名称,,暂定类型为string
        bd_Pay_Other_WF_TIME: string|void; //流程时间
        CREATE_ID: string;//创建人
        CREATE_TIME: string|void; //创建时间
        UPDATE_ID: string;//最后编辑人
        UPDATE_TIME: string|void; //最后编辑时间
        FControlUnitID: string;//组织机构
        FDepartmentID: string;//申请区域
        FBankType: string//承兑行类别
        isFBankType: boolean;
        FAcceptkind: string//承兑方式
        isFAcceptkind: boolean;
        BUTTON_RIGHT: string;//权限
        DefaultValAll: string

    }
    export interface KVData {
        CODE_VALUE: string;
        CODE_TEXT: string;
        CODE_INDEX: string;
    }

    export interface pagerData {
        pager: PaginationFile.tool.Pagination;
    }
    export interface Ibd_Pay_OtherPageConfig { }

    export class bd_Pay_OtherPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = bd_Pay_OtherPageReact;

        public ListData: bd_Pay_OtherPageData[] = [];

        //转化
        public BankType: KVData[] = [];
        public MRPUserCodeData: KVData[] = [];
        public BDGroupName: KVData[] = [];
        public PriceType: KVData[] = [];
        public AcceptKind: KVData[] = [];

        public MRPUserCodeDataStr: string;//申请人       
        public iDaDepartmentCodeDataStr: string;//部门

        public Pagetion: PaginationFile.tool.PaginationVm;
        public PageData: pagerData;
        public NaviTree: toolTreeFile.ui.TreeVm;
        public PaginationData: PaginationFile.tool.Pagination;

        public BiDaDepartmentCodeTable: KVData[] = [];

        public hasCheck: boolean;
        public isAllCheck: boolean = false;
        public FIDs: string;

        //搜索
        public Search_FlowNumber: string;//流水号
        public Search_ApplyUserId: string;//申请人
        public Search_FBankType: string;//承兑行类别
        public Search_FBankTypes: string;
        public Search_FAcceptkind: string;//承兑方式
        public Search_FAcceptkinds: string;
        public Search_FDepartmentID: string;//申请区域

        public defaultVal: bd_Pay_OtherPageData;

        public isUpdate: boolean = false;
        public isDetail: boolean = false;
        public isDelete: boolean = false;

        public constructor(config?: Ibd_Pay_OtherPageConfig) {
            super();
        }
        private init(config: Ibd_Pay_OtherPageConfig) { }

        public loadPage(callback?: Function) {
            this.Pagetion = new PaginationFile.tool.PaginationVm({ IsBidaStyle: true });
            urlFile.Core.AkPost("/module/module", { xml: "module/BiDa/business/bd_Pay_Other.xml", ds: "", pageStyle: "List" }, (a) => {

                this.PaginationData = a.Data.bd_Pay_Other_PAGER[0];
                this.PaginationData.PageNo = a.Data.bd_Pay_Other_PAGER[0].PageIndex;

                this.ListData = a.Data.bd_Pay_Other;
                this.MRPUserCodeData = a.Data.MRPUserCodeData;
                this.PriceType = a.Data.PriceType;
                this.BankType = a.Data.BankType;
                this.AcceptKind = a.Data.AcceptKind;
                this.BDGroupName = a.Data.BDGroupName;
                this.BiDaDepartmentCodeTable = a.Data.BiDaDepartmentCodeTable;

                 //事件转化
                this.ListData.map((a) => {
                    a.Chenck = false;
                    if (this.MRPUserCodeData) {
                        this.MRPUserCodeData.map((b) => {
                            if (b.CODE_VALUE == a.ApplyUserId) {
                                a.ApplyUserId = b.CODE_TEXT;
                            }
                        })
                    }
                    if (this.BDGroupName) {
                        this.BDGroupName.map((b) => {
                            if (b.CODE_VALUE == a.FControlUnitID) {
                                a.FControlUnitID = b.CODE_TEXT;
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
                    if (this.AcceptKind) {
                        this.AcceptKind.map((b) => {
                            if (b.CODE_VALUE == a.FAcceptkind) {
                                a.FAcceptkind = b.CODE_TEXT;
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
  
                })
                if (callback) {
                    callback(() => {
                        this.getEmit("React").emit("pageLoadEnd");
                    });
                }
            })
        }
        public fun_changeCheck(a: bd_Pay_OtherPageData) {
            var str = [];
            var strArray = this.fun_ButtonRight(str); 
            if (strArray.length > 0) {
                strArray.map((a) => {
                    if (a == "Update") {
                        this.isUpdate = true;
                    }
                    if (a == "Detail") {
                        this.isDelete = true;
                    }
                    if (a == "Deelte") {
                        this.isDelete = true;
                    }
                })
            } else {
                this.isDelete = false;
                this.isDetail = false;
                this.isUpdate = false;

            }
            a.Chenck = !a.Chenck;
            this.hasCheck = false;
            this.ListData.map((b) => {
                if (b.Chenck) {
                    str.push(b.BUTTON_RIGHT);
                    this.hasCheck = true
                }
            })
            this.forceUpdate("");
        }
        public fun_ButtonRight(ButtonRight: string[]) {                                
            var _temp = [];
            ButtonRight.map((a) => {
                var _rights = a.split("|");
                if (_temp.length == 0) {
                    _temp = _rights;
                } else {
                    _temp = utilFile.Core.Util.intersection(_rights, _temp);
                }
            })
            return _temp;
        }
        //分页数据重新载入
        public fun_Sreach(ds: string) {
            urlFile.Core.AkPost("/module/SearchForm", { xml: "module/BiDa/business/bd_Pay_Other.xml", form: "bd_Pay_Other", pageStyle: "List", ds: ds }, (a) => {
                //debugger
                this.PaginationData = a.Data.bd_Pay_Other_PAGER[0];
                this.PaginationData.PageNo = a.Data.bd_Pay_Other_PAGER[0].PageIndex;

                this.ListData = a.Data.bd_Pay_Other;
                this.MRPUserCodeData = a.Data.MRPUserCodeData;
                this.PriceType = a.Data.PriceType;
                this.BankType = a.Data.BankType;
                this.AcceptKind = a.Data.AcceptKind;
                this.BDGroupName = a.Data.BDGroupName;

                this.ListData.map((a) => {
                    a.Chenck = false;
                    this.defaultVal = $.parseJSON(a.DefaultValAll);
                    if (this.defaultVal) {
                        if (this.defaultVal.FAcceptkind && this.defaultVal.FAcceptkind != a.FAcceptkind)
                        { a.isFAcceptkind = true;}
                    }
                    if (this.defaultVal) {
                        if (this.defaultVal.FBankType && this.defaultVal.FBankType != a.FBankType)
                        { a.isFBankType = true; }
                    }

                    //申请人
                    if (this.MRPUserCodeData) {
                        this.MRPUserCodeData.map((b) => {
                            if (b.CODE_VALUE == a.ApplyUserId) {
                                a.ApplyUserId = b.CODE_TEXT;
                            }
                        })
                    }
             
                //承兑行类别
                    if (this.BankType) {
                        this.BankType.map((b) => {
                            if (b.CODE_VALUE == a.FBankType) {
                                a.FBankType = b.CODE_TEXT;
                            }
                        })
                    }

                //承兑方式
                    if (this.AcceptKind) {
                        this.AcceptKind.map((b) => {
                            if (b.CODE_VALUE == a.FAcceptkind) {
                                a.FAcceptkind = b.CODE_TEXT;
                            }
                        })
                    }

                //申请区域
                    if (this.BiDaDepartmentCodeTable) {
                        this.BiDaDepartmentCodeTable.map((b) => {
                            if (b.CODE_VALUE == a.FDepartmentID) {
                                a.FDepartmentID = b.CODE_TEXT;
                            }
                        })
                    }
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
    }
    export class bd_Pay_OtherPageStates extends basewedPageFile.Web.BaseWebPageStates { }
    export class bd_Pay_OtherPageProps extends basewedPageFile.Web.BaseWebPageProps<bd_Pay_OtherPageVm> { }
    iocFile.Core.Ioc.Current().RegisterType("BD_PAY_OTHERPAGE", basewedPageFile.Web.BaseWebPageVm, bd_Pay_OtherPageVm);
}