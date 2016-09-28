import domFile = require("./../../01core/0Dom");
import iocFile = require("./../../01core/Ioc");
//import domFile = require("./../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../01core/Url");
import basewedPageFile = require("./../../04page/BaseWebPage");
import React = require("react");
import ReactDOM = require("react-dom");
import treeFile = require("./../../05tool/tree");
import TreeReact = treeFile.ui.TreeReact;
import TreeNodeVm = treeFile.ui.TreeNodeVm;
import alinkFile = require("./../../05tool/ALink");
import FeedPage = require("./../../06app/Feed/FeedPage");
import ALink = alinkFile.ui.ALinkReact;
import RowData = require("./Data");
import detailRowFile = require("./HosWorkRowDom")
import doorFile = require("./../../06app/Feed/Door");
import workBenchFile = require("./../../06app/Feed/WorkBench/WorkBench");
export module HosWorkBenchPage {
    export class HosWorkBenchPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }
    export class HosWorkBenchPageReact extends basewedPageFile.Web.BaseWebPageReact<HosWorkBenchPageProps, HosWorkBenchPageStates, HosWorkBenchPageAction> implements domCore.IReact {
        public state = new HosWorkBenchPageStates();
        public pSender(): React.ReactElement<any> {
            return <div className="YSm-hosworkbench clearfix">
                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12">
                    {this._initList() }
                    {this._initShortCut() }
                    {this._initFeedList() }
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    {this._initBasicInfo()}
                    {this._initInform() }
                </div>
            </div>;
        }
 
        public _initList(): React.ReactElement<any> {
            return <div className="panel panel-default text-center YSm-hosworkbench-list YSm-hosworkbench-border ">
                {this.props.Vm.DataMenuList.map((a) => {
                    return a
                }) }
            </div>;
        }

        public _initShortCut(): React.ReactElement<any> {
            return <div className="panel panel-default YSm-shortcut YSm-hosworkbench-border">
                <div className="panel-heading"><h3 className="YSu-title">快捷入口</h3></div>
                <div className="panel-body">
                    <div className="nav nav-pills clearfix">
                        {this.props.Vm.DataNavList.map((a) => {
                            return a
                        }) }
                    </div>                 
                </div>

            </div>;
        }

        public _initBasicInfo(): React.ReactElement<any> {
            return <div className="YSm-basic-info YSm-hosworkbench-border">
                <div className="pull-left">
                    <big>{this.props.Vm.NickName }</big>
                    <p>{this.props.Vm.RowData.DeptMent }</p>
                    <p>{this.props.Vm.RowData.JobTitle }</p>
                </div>
                <div className="pull-right">
                 <div ref="date" id="showDate"></div>
                </div>
            </div>;
        }

        public _initInform(): React.ReactElement<any> {
            return <div className="panel panel-default YSm-inform  YSm-hosworkbench-border">
                <div className="panel-heading"><h3 className="YSu-title">公告通知</h3></div>
                    <div className="panel-body">
                    <ul className="nav">
                        {this.props.Vm.RowList.map((_row) =>
                        {
                            return _row.intoDom();
                        })
                        }
                        </ul>
                    </div>
            </div>;
        }

        public _initFeedList(): React.ReactElement<any> {
            return <div className="panel panel-default YSm-inform  YSm-hosworkbench-border">
                <div className="panel-heading"><h3 className="YSu-title">在线办公</h3></div>
                 <div className="Hc-modals-list" >
                    {this._tDom(this.props.Vm.DoorObj) }
                    {this.props.Vm.WorkBenchObj.intoDom() }
                </div>;
            </div>;
        }
        protected pComponentDidMount(): void {
            super.pComponentDidMount();
            var _val = this.props.Vm.reactDataValueGet(); var __this = this;
            utilFile.Core.Util.AsyncJs(["/AtawStatic/lib/03Extend/showDate/showDate.js", "/AtawStatic/lib/03Extend/showDate/showDate.css"], function () {
                var _$dom = __this.fGetDateDom();
                _$dom.MyDigitClock({
                    fontColor: "#488bff",
                    fontWeight: "bold",
                    timeFormat: '<div class="showDate_time">{HH}:{MM}:{SS}</div>'
                });
            });
            //  __this.fGetDateDom().addClass("runcode");
        }; private fGetDateDom(): JQuery {
            var _reactObj = this.refs["date"];
            var _dom = ReactDOM.findDOMNode(_reactObj);
            var _$dom = $(_dom);
            return _$dom;
        }

    }
    export interface IReactHosWorkBenchPageVm extends basewedPageFile.Web.BaseWebPageVm {
        DataMenuList: Array<String>;
        DataNavList: Array<String>;
        RowData: RowData.Data.IWorkBenchData;
        RowList: Array<detailRowFile.HosWorkRowDomDom.HosWorkRowDomDomVm>;
       // FeedPage: Array<FeedPage.FeedPage.FeedPageVm>;
        NickName: string;
        DoorObj: doorFile.Door.DoorVm;
        WorkBenchObj: workBenchFile.WorkBench.WorkBenchVm;

    }
    export interface IHosWorkBenchPageConfig {
    }
    export class HosWorkBenchPageVm extends basewedPageFile.Web.BaseWebPageVm implements IReactHosWorkBenchPageVm {
        public ReactType = HosWorkBenchPageReact;
        public DataMenuList = new Array<String>();
        public DataNavList = new Array<String>();
        public RowData: RowData.Data.IWorkBenchData = { FID: "", Name: "", DeptMent: "", JobTitle: "", Notice: []};
        public RowList = new Array<detailRowFile.HosWorkRowDomDom.HosWorkRowDomDomVm>();
      //  public FeedPage = new Array<FeedPage.FeedPage.FeedPageVm>();
        public NickName: string = "";
        public a: string = "";
        //工作流
        public DoorObj: doorFile.Door.DoorVm;
        public WorkBenchObj: workBenchFile.WorkBench.WorkBenchVm;
        public constructor(config?: IHosWorkBenchPageConfig) {
            super();
            this.WorkBenchObj = new workBenchFile.WorkBench.WorkBenchVm();
        }
        public selectMenu(val: string)
        {
            var str: any;
            switch (val)
            {
                case "核心系统":
                    str = <a  Vm={new alinkFile.ui.ALinkVm(true) } children={null} href ='x#$$module/HospPerformance/Core/performance_core_Appraisal_Category_Tree'><img src='../lib/akCss/icons/yuShuHos/jx_hexin.png' /><span>核心业务</span></a>;
                    break;
                case "医务管理系统":
                    str = <a  Vm={new alinkFile.ui.ALinkVm(true) } children={null} href ='x#$$module/HospPerformance/MedicalManage/performance_medical_WardRound'><img src='../lib/akCss/icons/yuShuHos/jx_yiwu.png' /><span>医务管理</span></a>;
                    break;
                case "护理管理系统":
                    str = <a   Vm={new alinkFile.ui.ALinkVm(true) }children={null}href='x#$$module/HospPerformance/Nurs/performance_nurs_Appraisal_Care'><img src='../lib/akCss/icons/yuShuHos/jx_huli.png' /><span>护理管理</span></a>;
                    break;
                case "科教管理系统":
                    str = <a  Vm={new alinkFile.ui.ALinkVm(true) }children={null} href='x#$$module/HospPerformance/Hosp/performance_hosp_Research_Project'><img src='../lib/akCss/icons/yuShuHos/jx_kejiao.png' /><span>科教管理</span></a>;
                    break;
                case "人事管理系统":
                    str = <a Vm={new alinkFile.ui.ALinkVm(true) }children={null}  href='x#$$module/HospPerformance/HumanResource/performance_hr_Department'><img src='../lib/akCss/icons/yuShuHos/jx_reshi.png' /><span>人事管理</span></a>;
                    break;
                case "总务管理系统":
                    str = <a  Vm={new alinkFile.ui.ALinkVm(true) } children={null}  href='x#$$module/HospPerformance/GeneralAffairs/performance_affairs_Type_Tree'><img src='../lib/akCss/icons/yuShuHos/jx_zongwu.png' /><span>总务管理</span></a>;
                    break;
                case "在线办公":
                    str = <a  Vm={new alinkFile.ui.ALinkVm(true) } children={null}  href='x#$$module/ExtraWork/extraWork'><img src='../lib/akCss/icons/yuShuHos/jx_zongwu.png' /><span>在线办公</span></a>;
                    break;
            }
            return str;
        }
        public selectNav(val: string, flag: boolean)
        {
            var str: any;
            switch (val) {
                case "核心系统":
                    if (flag) {
                        str = <ul className="nav-item">
                            <li>核心系统</li>
                            <li><a  Vm={new alinkFile.ui.ALinkVm(true) } href="x#$$module/HospPerformance/Core/performance_core_Appraisal_Item" children={null}> 考核项目</a></li>
                            <li><a Vm={new alinkFile.ui.ALinkVm(true) } href="x#$$module/HospPerformance/Core/performance_core_Appraisal_Template" children={null}> 考核模板</a></li>
                            <li><a  Vm={new alinkFile.ui.ALinkVm(true) } href="x#$$module/HospPerformance/Core/performance_core_Appraisal" children={null}> 考核管理</a></li>
                        </ul>
                    }
                    else
                    {
                        str = <ul className="nav">
                            <li>核心系统</li>
                            <li className="nav-item"><a Vm={new alinkFile.ui.ALinkVm(true) } href="x#$$module/HospPerformance/Core/performance_core_Appraisal_Item" children={null}> 考核项目</a></li>
                            <li className="nav-item"><a  Vm={new alinkFile.ui.ALinkVm(true) } href="x#$$module/HospPerformance/Core/performance_core_Appraisal_Template" children={null}> 考核模板</a></li>
                            <li className="nav-item"><a  Vm={new alinkFile.ui.ALinkVm(true) } href="x#$$module/HospPerformance/Core/performance_core_Appraisal" children={null}> 考核管理</a></li>
                        </ul>
                    }

                    break;
                case "医务管理系统":
                    if (flag) {
                        str = <ul className="nav-item">
                            <li>医务管理</li>
                            <li><a  Vm={new alinkFile.ui.ALinkVm(true) } href="x#$$module/HospPerformance/MedicalManage/performance_medical_WardRound" children={null}> 业务管理</a></li>
                            <li><a  Vm={new alinkFile.ui.ALinkVm(true) } href="x#$$module/HospPerformance/MedicalManage/performance_medical_Appraisal" children={null}> 绩效考核</a></li>
                            <li><a  Vm={new alinkFile.ui.ALinkVm(true) } href="x#$$module/HospPerformance/MedicalManage/performance_medical_Appraisal_UserResult" children={null}> 业绩档案</a></li>
                        </ul>
                    }
                    else {
                        str = <ul className="nav">
                            <li>医务管理</li>
                            <li className="nav-item"><a  Vm={new alinkFile.ui.ALinkVm(true) } href="x#$$module/HospPerformance/MedicalManage/performance_medical_WardRound" children={null}> 业务管理</a></li>
                            <li className="nav-item"><a  Vm={new alinkFile.ui.ALinkVm(true) } href="x#$$module/HospPerformance/MedicalManage/performance_medical_Appraisal" children={null}> 绩效考核</a></li>
                            <li className="nav-item"><a  Vm={new alinkFile.ui.ALinkVm(true) } href="x#$$module/HospPerformance/MedicalManage/performance_medical_Appraisal_UserResult" children={null}> 业绩档案</a></li>
                        </ul>
                    }
                    break;
                case "护理管理系统":
                    if (flag) {
                        str = <ul className="nav-item">
                            <li>护理管理</li>
                            <li><a  Vm={new alinkFile.ui.ALinkVm(true) } href="x#$$module/HospPerformance/Nurs/performance_nurs_Appraisal_Care" children={null}> 绩效考核</a></li>
                            <li><a  Vm={new alinkFile.ui.ALinkVm(true) } href="x#$$module/HospPerformance/Nurs/performance_nurs_Appraisal_UserResult" children={null}> 业绩档案</a></li>
                        </ul>
                    }
                    else {
                        str = <ul className="nav">
                            <li>护理管理</li>
                            <li className="nav-item"><a  Vm={new alinkFile.ui.ALinkVm(true) } href="x#$$module/HospPerformance/Nurs/performance_nurs_Appraisal_Care" children={null}> 绩效考核</a></li>
                            <li className="nav-item"><a  Vm={new alinkFile.ui.ALinkVm(true) } href="x#$$module/HospPerformance/Nurs/performance_nurs_Appraisal_UserResult" children={null}> 业绩档案</a></li>
                        </ul>
                    }
                    break;
                case "科教管理系统":
                    if (flag) {
                        str = <ul className="nav-item">
                            <li>科教管理</li>
                            <li><a  Vm={new alinkFile.ui.ALinkVm(true) } href="x#$$module/HospPerformance/Hosp/performance_hosp_Research_Project" children={null}> 业务管理</a></li>
                            <li><a  Vm={new alinkFile.ui.ALinkVm(true) } href="x#$$module/HospPerformance/Hosp/performance_hosp_Appraisal_Science" children={null}> 绩效考核</a></li>
                            <li><a  Vm={new alinkFile.ui.ALinkVm(true) } href="x#$$module/HospPerformance/Hosp/performance_hosp_Appraisal_UserResult" children={null}> 业绩档案</a></li>
                        </ul>
                    }
                    else {
                        str = <ul className="nav">
                            <li>科教管理</li>
                            <li  className="nav-item"><a  Vm={new alinkFile.ui.ALinkVm(true) } href="x#$$module/HospPerformance/Hosp/performance_hosp_Research_Project" children={null}> 业务管理</a></li>
                            <li className="nav-item"><a  Vm={new alinkFile.ui.ALinkVm(true) } href="x#$$module/HospPerformance/Hosp/performance_hosp_Appraisal_Science" children={null}> 绩效考核</a></li>
                            <li className="nav-item"><a  Vm={new alinkFile.ui.ALinkVm(true) } href="x#$$module/HospPerformance/Hosp/performance_hosp_Appraisal_UserResult" children={null}> 业绩档案</a></li>
                        </ul>
                    }
                    break;
                case "人事管理系统":
                    if (flag) {
                        str = <ul className="nav-item">
                            <li>人事管理</li>
                            <li><a  Vm={new alinkFile.ui.ALinkVm(true) } href="x#$$module/HospPerformance/HumanResource/performance_hr_Department" children={null}> 部门信息管理</a></li>
                            <li><a  Vm={new alinkFile.ui.ALinkVm(true) } href="x#$$module/HospPerformance/HumanResource/Ataw_UsersDetail" children={null}> 人员信息管理</a></li>
                            <li><a  Vm={new alinkFile.ui.ALinkVm(true) } href="x#$$module/HospPerformance/HumanResource/performance_hr_Salary_Grade" children={null}> 薪资层级管理</a></li>
                        </ul>
                    }
                    else {
                        str = <ul className="nav">
                            <li>人事管理</li>
                            <li className="nav-item"><a Vm={new alinkFile.ui.ALinkVm(true) } href="x#$$module/HospPerformance/HumanResource/performance_hr_Department" children={null}> 部门信息管理</a></li>
                            <li className="nav-item"><a Vm={new alinkFile.ui.ALinkVm(true) } href="x#$$module/HospPerformance/HumanResource/Ataw_UsersDetail" children={null}> 人员信息管理</a></li>
                            <li className="nav-item"><a Vm={new alinkFile.ui.ALinkVm(true) } href="x#$$module/HospPerformance/HumanResource/performance_hr_Salary_Grade" children={null}> 薪资层级管理</a></li>
                        </ul>
                    }
                    break;
                case "总务管理系统":
                    if (flag) {
                        str = <ul className="nav-item">
                            <li>总务管理</li>
                            <li><a  Vm={new alinkFile.ui.ALinkVm(true) } href="x#$$module/HospPerformance/GeneralAffairs/performance_affairs_Type_Tree" children={null}> 业务管理</a></li>
                            <li><a  Vm={new alinkFile.ui.ALinkVm(true) } href="x#$$module/HospPerformance/GeneralAffairs/performance_affairs_Appraisal" children={null}> 绩效考核</a></li>
                        </ul>
                    }
                    else {
                        str = <ul className="nav">
                            <li>总务管理</li>
                            <li className="nav-item"><a  Vm={new alinkFile.ui.ALinkVm(true) } href="x#$$module/HospPerformance/GeneralAffairs/performance_affairs_Type_Tree" children={null}> 业务管理</a></li>
                            <li className="nav-item"><a  Vm={new alinkFile.ui.ALinkVm(true) } href="x#$$module/HospPerformance/GeneralAffairs/performance_affairs_Appraisal" children={null}> 绩效考核</a></li>
                        </ul>
                    }
                    break;
                case "在线办公":
                    if (flag) {
                        str = <ul className="nav-item">
                            <li>在线办公</li>
                            <li><a  Vm={new alinkFile.ui.ALinkVm(true) } href="x#$$module/ExtraWork/extraWork" children={null}> 日常事务</a></li>
                            <li><a  Vm={new alinkFile.ui.ALinkVm(true) } href="x#$$module/OfficialDocument/officialDocument" children={null}> 综合事务</a></li>
                            <li><a  Vm={new alinkFile.ui.ALinkVm(true) } href="x#$$module/ExtraWork/adminExtraWork" children={null}> 日常事务管理 </a></li>
                        </ul>
                    }
                    else {
                        str = <ul className="nav">
                            <li>在线办公</li>
                            <li className="nav-item"><a  Vm={new alinkFile.ui.ALinkVm(true) } href="x#$$module/ExtraWork/extraWork" children={null}> 日常事务</a></li>
                            <li className="nav-item"><a  Vm={new alinkFile.ui.ALinkVm(true) } href="x#$$module/OfficialDocument/officialDocument" children={null}> 综合事务</a></li>
                            <li><a  Vm={new alinkFile.ui.ALinkVm(true) } href="x#$$module/ExtraWork/adminExtraWork" children={null}> 日常事务管理</a></li>
                        </ul>
                    }
                    break;

            }
            return str;    
        }
        private init(config: IHosWorkBenchPageConfig) {
        }
        protected loadPage(callback?: () => any) {
            //工作流
            this.WorkBenchObj.WorkflowItemObj.loadData(() => {
                callback();
            });
            if (window["SysAtawObj"]) {
                if (window["SysAtawObj"]["NickName"]) {
                    this.NickName = window["SysAtawObj"]["NickName"];
                }

            }
            else {
                this.NickName = "{未知用户}";
            }
            urlFile.Core.AkPost("/right/Menu/GetAllTree?regname=MenuTreeCodeTable", {}, (a: any) => {
                var _treeObj: treeFile.ui.ITreeCodeTableModel = a;
                this.DataMenuList = []
                this.DataNavList = []
                var flag = true;
                if (_treeObj.Children.length == 1)
                {
                    flag = false;
                }
                _treeObj.Children.map((a) => {
                    var str = this.selectMenu(a.CODE_TEXT);

                    if (str != "")
                    {
                        this.DataMenuList.push(str);
                    }
                    var navselect = this.selectNav(a.CODE_TEXT, flag);
                    if (navselect != "")
                    {
                        this.DataNavList.push(navselect)
                    }
                })
                urlFile.Core.AkPost("/HospPerformance/WorkBench/GetWorkBenchData", {}, (a: any) => {
                    if (a)
                    {
                        var _data: RowData.Data.IWorkBenchData = a.Data;
                        this.RowData = _data
                        this.RowData.Name = _data.Name;
                        this.RowData.JobTitle = _data.JobTitle;
                        this.RowData.DeptMent = _data.DeptMent;
                        this.RowData.FID = _data.FID
                        this.RowData.Notice = _data.Notice;
                       // this.FeedPage = []
                        this.RowList = []
                        this.RowData.Notice.map((data, index) => {
                            var masterData = { RowData:data };
                            var Data = new detailRowFile.HosWorkRowDomDom.HosWorkRowDomDomVm(masterData)
                            this.RowList.push(Data)
                        });
                        if (callback) {
                            callback();

                        }
                    }
                })

            })
        }
    }
    export class HosWorkBenchPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }
    export class HosWorkBenchPageProps extends basewedPageFile.Web.BaseWebPageProps<IReactHosWorkBenchPageVm>{
    }
    iocFile.Core.Ioc.Current().RegisterType("HosWorkBenchPage", basewedPageFile.Web.BaseWebPageVm, HosWorkBenchPageVm);
}

