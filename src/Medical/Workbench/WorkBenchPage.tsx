import domFile = require("./../../01core/0Dom");
import iocFile = require("./../../01core/Ioc");
//import domFile = require("./../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../01core/Url");
import basewedPageFile = require("./../../04page/BaseWebPage");
import React = require("react");
import Data = require("./../Base/Anomaly/Data");

import ReactDOM = require("react-dom");

export module WorkBenchPage {
    export class WorkBenchPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class WorkBenchPageReact extends basewedPageFile.Web.BaseWebPageReact<WorkBenchPageProps, WorkBenchPageStates, WorkBenchPageAction> implements domCore.IReact {
        public state = new WorkBenchPageStates(); public pSender(): React.ReactElement<any> {
            return <div className="YSm-workbench clearfix">
                <div className="pull-left YSm-workbench-left">
                    <ul className="nav nav-pills clearfix">
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => { this.props.Vm.fun_personregister() } }><img className="img"   src={ this.props.Vm.Data.personregister == "1" ? "/ts/lib/akCss/images/YSWork_pdj_on.png" : "/ts/lib/akCss/images/YSWork_pdj_disabled.png"}/>
                                <span>个人登记</span>
                            </a></li>
                        <li className="nav-item"><a className="nav-link"  onClick={() => { this.props.Vm.fun_personprint() } }>
                            <img className="img"   src={this.props.Vm.Data.personprint == "1" ? "/ts/lib/akCss/images/YSWork_pzyd_on.png" : "/ts/lib/akCss/images/YSWork_pzyd_disabled.png"}/>
                            <span>打印指引单</span>
                        </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => { this.props.Vm.fun_personchagre() } }>
                                <img className="img"   src={this.props.Vm.Data.personcharge == "1" ? "/ts/lib/akCss/images/YSWork_pjf_on.png" : "/ts/lib/akCss/images/YSWork_pjf_disabled.png"}/><span>个人缴费</span>
                            </a>
                        </li>
                    </ul>
                    <ul className="nav nav-pills clearfix">
                        <li className="nav-item">
                            <a className="nav-link YSs-workbench-blue" onClick={() => { this.props.Vm.fun_temregister() } }>

                                <img className="img"   src={this.props.Vm.Data.teamregister == "1" ? "/ts/lib/akCss/images/YSWork_gdj_on.png" : "/ts/lib/akCss/images/YSWork_gdj_disabled.png"}/><span>团体登记</span></a></li>
                        <li className="nav-item">
                            <a className="nav-link YSs-workbench-blue" onClick={() => { this.props.Vm.fun_teamprint() } }>
                                <img className="img"   src={this.props.Vm.Data.teamprint == "1" ? "/ts/lib/akCss/images/YSWork_pzyd_on.png" : "/ts/lib/akCss/images/YSWork_pzyd_disabled.png"}/><span>打印指引单</span></a></li>
                    </ul>
                </div>
                <div className="pull-right YSm-workbench-right">
                    <ul className="nav nav-pills clearfix">
                        <li className="nav-item">
                            <a className="nav-link"  onClick={() => { this.props.Vm.fun_officeinpit() } }>
                                <img className="img"   src={this.props.Vm.Data.officeinput == "1" ? "/ts/lib/akCss/images/YSWork_olr_on.png" : "/ts/lib/akCss/images/YSWork_olr_disabled.png"}/><span>科室录入</span></a></li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => { this.props.Vm.fun_review() } }>
                                <img className="img"   src={this.props.Vm.Data.review == "1" ? "/ts/lib/akCss/images/YSWork_zj_on.png" : "/ts/lib/akCss/images/YSWork_zj_disabled.png"}/><span>总检</span></a></li>
                        <li className="nav-item" onClick={() => { this.props.Vm.fun_printMedical() } }>
                            <a className="nav-link"><img className="img"   src={this.props.Vm.Data.printMedical == "1" ? "/ts/lib/akCss/images/YSWork_cbg_on.png" : "/ts/lib/akCss/images/YSWork_cbg_disabled.png"}/><span>打印体检报告</span></a></li>
                    </ul>
                </div>
                <div className="YSu-workbench-red"></div>
                <div className="YSu-workbench-blue"></div>
            </div>;;
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();
            var $img = $(".img");
            $img.hover(function () {
                $(this).attr("src", $(this).attr("src").replace("_on", "_over"));
            }, function () {
                $(this).attr("src", $(this).attr("src").replace("_over", "_on"));
            });
        }
    }

    export interface IReactWorkBenchPageVm extends basewedPageFile.Web.BaseWebPageVm { }

    export interface IWorkBenchPageConfig { }

    export class WorkBenchPageVm extends basewedPageFile.Web.BaseWebPageVm implements IReactWorkBenchPageVm {

        public ReactType = WorkBenchPageReact;
        public Data: Data.Anomaly.IWorkBenchData = { officeinput: "0", personcharge: "0", personprint: "0", personregister: "0", printMedical: "0", review: "0", teamprint: "0", teamregister: "0" };
        protected pIsHullAutoHide: boolean = true;
        public constructor(config?: IWorkBenchPageConfig) {
            super();
            //this.Data.officeinput = "1";
            //this.Data.personcharge = "1";
            //this.Data.personprint = "1";
            //this.Data.personregister = "1";
            //this.Data.printMedical = "1";
            //this.Data.teamprint = "1";
            //this.Data.teamregister = "1";
            //this.Data.review = "1";
        }

        public fun_officeinpit() {
            if (this.Data.officeinput == "1") {
                urlFile.Core.AkUrl.Current().openUrl("$DepartmentEntryPage$", false);
            } else {
                alert("抱歉，您没有使用的权限")
            }
        }

        public fun_personchagre() {
            if (this.Data.personcharge == "1") {
                urlFile.Core.AkUrl.Current().openUrl("$PERSONPAYMENTPAGE$", false);
            } else {
                alert("抱歉，您没有使用的权限")
            }
        }

        public fun_personprint() {
            if (this.Data.personprint == "1") {
                urlFile.Core.AkUrl.Current().openUrl("$$module/Medical/Base/medical_Member_PrintGuidelines", false);
            } else {
                alert("抱歉，您没有使用的权限")
            }

        }

        public fun_personregister() {
            if (this.Data.personregister == "1") {
                urlFile.Core.AkUrl.Current().openUrl("$ExamOrderPage$", false);
            } else {
                alert("抱歉，您没有使用的权限")
            }
        }

        public fun_printMedical() {
            if (this.Data.printMedical == "1") {
                urlFile.Core.AkUrl.Current().openUrl("$DetectionListPage$", false);
            } else {
                alert("抱歉，您没有使用的权限")
            }

        }

        public fun_temregister() {
            if (this.Data.teamregister == "1") {
                urlFile.Core.AkUrl.Current().openUrl("$GroupListPage$", false);
            } else {
                alert("抱歉，您没有使用的权限")
            }

        }

        public fun_teamprint() {
            if (this.Data.teamprint == "1") {
                urlFile.Core.AkUrl.Current().openUrl("$$module/Medical/Base/medical_Exam_PrintGuidelines", false);
            } else {
                alert("抱歉，您没有使用的权限")
            }

        }

        public fun_review() {
            if (this.Data.review == "1") {
                urlFile.Core.AkUrl.Current().openUrl("$DetectionListPage$", false);
            } else {
                alert("抱歉，您没有使用的权限")
            }

        }

        private init(config: IWorkBenchPageConfig) { }

        protected loadPage(callback?: () => any) {
            urlFile.Core.AkPost("/MedicalCenter/Users/getRight", {}, (a) => {
                switch (a) {
                    case "admin":
                    case "ALL":
                        this.Data.officeinput = "1";
                        this.Data.personcharge = "1";
                        this.Data.personprint = "1";
                        this.Data.personregister = "1";
                        this.Data.printMedical = "1";
                        this.Data.teamprint = "1";
                        this.Data.teamregister = "1";
                        this.Data.review = "1";
                        break;
                    case "lrys":
                        this.Data.officeinput = "1";
                        this.Data.personcharge = "0";
                        this.Data.personprint = "0";
                        this.Data.personregister = "0";
                        this.Data.printMedical = "0";
                        this.Data.teamprint = "0";
                        this.Data.teamregister = "0";
                        this.Data.review = "0";
                        break;
                    case "zjys":
                        this.Data.officeinput = "0";
                        this.Data.personcharge = "0";
                        this.Data.personprint = "0";
                        this.Data.personregister = "0";
                        this.Data.printMedical = "0";
                        this.Data.teamprint = "0";
                        this.Data.teamregister = "0";
                        this.Data.review = "1";
                        break;
                    case "jd":
                        this.Data.officeinput = "0";
                        this.Data.personcharge = "0";
                        this.Data.personprint = "1";
                        this.Data.personregister = "1";
                        this.Data.printMedical = "0";
                        this.Data.teamprint = "1";
                        this.Data.teamregister = "1";
                        this.Data.review = "0";
                        break;
                    case "sf":
                        this.Data.officeinput = "0";
                        this.Data.personcharge = "1";
                        this.Data.personprint = "0";
                        this.Data.personregister = "0";
                        this.Data.printMedical = "0";
                        this.Data.teamprint = "0";
                        this.Data.teamregister = "0";
                        this.Data.review = "0";
                        break;
                    case "null":
                        this.Data.officeinput = "0";
                        this.Data.personcharge = "0";
                        this.Data.personprint = "0";
                        this.Data.personregister = "0";
                        this.Data.printMedical = "0";
                        this.Data.teamprint = "0";
                        this.Data.teamregister = "0";
                        this.Data.review = "0";
                        break;
                }
                this.IsMulit = true;
                this.forceUpdate("");
            })
            if (callback) {
                callback();
            }
        }
    }

    export class WorkBenchPageStates extends basewedPageFile.Web.BaseWebPageStates { }

    export class WorkBenchPageProps extends basewedPageFile.Web.BaseWebPageProps<WorkBenchPageVm> { }

    iocFile.Core.Ioc.Current().RegisterType("WORKBENCHPAGE", basewedPageFile.Web.BaseWebPageVm, WorkBenchPageVm);
}