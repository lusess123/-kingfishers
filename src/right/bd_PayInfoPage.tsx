import domFile = require("./../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import iocFile = require("./../01core/Ioc");
 
  
import domCore = domFile.Core;
import utilFile = require("./../01core/Util");
//import iocFile = require("./../01core/Ioc"); 
import urlFile = require("./../01core/Url");
import basewedPageFile = require("./../04page/BaseWebPage");

export module bd_PayInfoPage {

    export class bd_PayInfoPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class bd_PayInfoPageReact extends basewedPageFile.Web.BaseWebPageReact<bd_PayInfoPageProps, bd_PayInfoPageStates, bd_PayInfoPageAction> implements domCore.IReact {

        public state = new bd_PayInfoPageStates();

        public sendLineData(a: bd_PayInfoPageData): any {
            return <tr>
                <td>
                    <a>
                        <i className="ACT-CHECK-SINGLE icon-check-empty "></i>
                    </a>
                    <span>{a.rn}</span>
                    <a className="root-add ACT-ROW-ExpandDetail"></a>
                </td>
                <td className="aks-td AKJS ACT_HIDDEN">{a.FID}</td>
                <td>{a.FlowNumber}</td>
                <td>{a.ApplyUserId}</td>
                <td>{a.TotalAmount}</td>
                <td>{a.InvoiceBank}</td>
                <td>{a.ExpireDate}</td>
                <td>{a.DiscountDays}</td>
                <td>{a.PriceType}</td>
                <td>{a.PriceType}</td>
                <td>{a.PayType}</td>
                <td>{a.FBankType}</td>
                <td>{a.PayRate}</td>
                <td>{a.FAcceptkind}</td>
                <td>{a.PaperCount}</td>
                <td>{a.Commissions}</td>
                <td>{a.FDepartmentID}</td>
                <td>{a.CommissionsType}</td>
                <td>{a.DiscountInterest}</td>
                <td>{a.PayAmount}</td>
                <td>{a.Payee}</td>
                <td>{a.PayeeAccount}</td>
                <td>{a.OpeningBankName}</td>
            </tr>
        }

        protected pInstall(): void {
            super.pInstall();
            this.props.Vm.getEmit("React").addListener("pageLoadEnd", () => {
                $(ReactDOM.findDOMNode(this))["AtawSelector"]({ regName: "232dd" });
            })
        }

        public pSender(): React.ReactElement<any> {

            var buttonLine = <div>按钮行</div>

            var table = <table className=" table table-bordered table-striped table-hover table-condensed">
                <thead>
                    <tr>
                        <th className="ACT-BTN-CONTAINER well" colSpan="1000">
                            {buttonLine}
                        </th>
                    </tr>
                    <tr className="ACT-HEADER MEMBER">
                        <th className="thCheckAll">
                            <input type="checkbox"/>
                        </th>
                        <th  className="aks-td AKJS ACT_HIDDEN">
                            <span>FID</span></th> <th>
                            <span>流水号</span>
                        </th> <th>
                            <span>申请人</span>  </th>
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
                            <span>手续费</span></th>
                        <th>
                            <span>手续费类别</span></th>
                        <th>
                            <span>贴现利率</span></th>
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
                        <span>流水号: </span>
                        <input type="text"/>
                    </li>

                    <li className="search_Module_row col-md-6"><span>申请人: </span><div className="ACT-TEST"></div></li>


                    <li className="search_Module_row col-md-6"><span>承兑行类别: </span>
                        <select>
                            <option value="-1">--请选择--</option>
                            <option  value="0">国行</option>
                            <option  value="1">商行</option>
                            <option value="2">其他</option>
                        </select>
                    </li>

                    <li className="search_Module_row col-md-6"><span>承兑方式: </span>
                        <select>
                            <option value="-1">--请选择--</option>
                            <option  value="0">买断</option>
                            <option value="1">带票</option>
                            <option  value="2">其他</option>
                        </select>
                    </li>

                    <li className="search_Module_row col-md-6"><span>申请区域: </span>
                    </li>
                    <li className="search_Module_row searchBtnBar col-md-12 acs-search-line">
                        <button className="MySearch btn btn-primary icon-search mr5" title="搜索s"></button>
                        <button className="btn btn-warning icon-trash" title="清空"></button>
                    </li>

                </ul>
            </div>;

            return <div className="ui-body-bg pd0">
                <div className="ConditionDiv mt10 mb10 ">
                    {searchfrom}
                </div>
                <div className="atawNormalRow">
                    <div className=" TopPager">
                        分页条
                    </div>

                    <div className='columnGroup panel-default acs-colgroup table-responsive ask-form'>
                        {table}
                    </div>
                </div>
            </div>;
        }



    }

    export interface bd_PayInfoPageData {
        FID: string;
        rn: string;
        FDepartmentID: string;
        FlowNumber: string;
        BdPayInfoWfId: string;
        TotalAmount: number | void; //decimal?  
        InvoiceBank: string;
        ExpireDate: string | void;   //时间
        DiscountDays: number | void;
        DiscountInterest: number | void;
        PriceType: number | void;
        PriceRate: number | void;
        PayType: number | void;
        PaperCount: number | void;
        PayRate: number | void;
        Commissions: number | void;
        CommissionsType: number | void;
        PayAmount: number | void;
        Payee: string
        PayeeAccount: string
        OpeningBankName: string
        OpeningBankNumber: string
        Remark: string
        BdPayInfoWfStatus: string
        DraftImage: string
        BdPayInfoStepName: string
        BdPayInfoWfTime: string | void; //时间
        BdPayInfoWfIsEnd: string
        BdPayInfoIsApplyWf: string
        ApplyUserId: string
        AuditorId: string
        GeneralManagerId: string
        PayUserId: string
        DEFAULTVAL: string
        DefaultValAll: string
        OpeningBankCity: string
        PayNoteType: number | void;
        PayRemark: string
        BankImgSplit: string
        FAcceptkind: string;
        FBankType: string;
    }

    export interface KVData {
        CODE_VALUE: string;
        CODE_TEXT: string;
        CODE_INDEX: string;
    }

    export interface Ibd_PayInfoPageConfig { }

    export class bd_PayInfoPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = bd_PayInfoPageReact;

        public ListData: bd_PayInfoPageData[] = [];

        public MRPUserCodeData: KVData[] = [];
        public PriceType: KVData[] = [];
        public BankType: KVData[] = [];
        public AccpectKind: KVData[] = [];
        public BiDaDepertmentCodeTable: KVData[] = [];
        public CommissionType: KVData[] = [];
        public BDGroupName: KVData[] = [];


        public constructor(config?: Ibd_PayInfoPageConfig) {
            super();

        }

        private init(config: Ibd_PayInfoPageConfig) { }

        protected loadPage(callback?: Function) {
            urlFile.Core.AkPost("/module/module", { xml: "module/BiDa/business/bd_PayInfo", ds: "", pageStyle: "List" }, (a) => {
                debugger
                this.ListData = a.Data.bd_PayInfo;
                this.MRPUserCodeData = a.Data.MRPUserCodeData;
                this.PriceType = a.Data.PriceType;
                this.BankType = a.Data.BankType;
                this.AccpectKind = a.Data.AccpectKind;
                this.BiDaDepertmentCodeTable = a.Data.BiDaDepertmentCodeTable;
                this.CommissionType = a.Data.CommissionType;
                this.BDGroupName = a.Data.BDGroupName;






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
    }


    export class bd_PayInfoPageStates extends basewedPageFile.Web.BaseWebPageStates { }

    export class bd_PayInfoPageProps extends basewedPageFile.Web.BaseWebPageProps<bd_PayInfoPageVm> { }

    iocFile.Core.Ioc.Current().RegisterType("BD_PAYINFOPAGE", basewedPageFile.Web.BaseWebPageVm, bd_PayInfoPageVm);
}