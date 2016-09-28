import domFile = require("./../../01core/0Dom");
import iocFile = require("./../../01core/Ioc");
//import domFile = require("./../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../01core/Url");
import basewedPageFile = require("./../../04page/BaseWebPage");
import React = require("react");
import ReactDOM = require("react-dom");

export module Workflow {
    export class WorkflowAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class WorkflowReact extends basewedPageFile.Web.BaseWebPageReact<WorkflowProps, WorkflowStates, WorkflowAction> implements domCore.IReact {

        public state = new WorkflowStates();

        private IsNoFirst = false;

        protected pInstall(): void {
            //   if (this.props.Vm.getRegName() == "pick") debugger;
            // alert("安装");
            super.pInstall();
            this.initPage();

        };
        protected pUnInstall(vm?: domFile.Core.DomVm): void {
            super.pUnInstall(vm);
        }
        public pSender(): React.ReactElement<any> {

            return (
                <div className="clearfix">
                    <div className="ACT-PAGE-NAVI col-md-3  hide">导航</div>
                    <div className="ACT-PAGE-MAIN col-md-12">内容</div>
                </div>
            );



        }
        private initPage() {
            //--------------
            switch (this.props.Vm.Type) {
                case "inst":
                    // _url = "/workflow/WorkFlowInst/InstForm";
                    this.loadWorkflowInstProcessR(this.props.Vm.PageObj);
                    break;
                case "insthis":
                    // _url = "/workflow/MyHistory/HistoryForm";
                    this.loadWorkflowInstHisR(this.props.Vm.PageObj);
                    break;
                case "detail":
                    // _url = "/workflow/WorkFlowInst/DetailForm";
                    this.loadWorkflowInstDetailR(this.props.Vm.PageObj);
                    break;
                default:
                    break;
            }
            var _$dom = $(ReactDOM.findDOMNode(this)).find(".ACT-PAGE-MAIN");
            if (_$dom.length > 0) {
                this.setWorkflowMapCurrentStep(_$dom, this.props.Vm.PageObj);
            }
        }
        private toLeftNaviShow() {
            var _$Maindom = $(ReactDOM.findDOMNode(this)).find(".ACT-PAGE-MAIN");
            _$Maindom.removeClass("col-md-12");
            _$Maindom.addClass("col-md-9");

            var _$Navidom = $(ReactDOM.findDOMNode(this)).find(".ACT-PAGE-NAVI");
            _$Navidom.removeClass("hide");


        }

        private toClearNaviShow() {
            var _$Navidom = $(ReactDOM.findDOMNode(this)).find(".ACT-PAGE-NAVI");
            _$Navidom.find(".ACT_TREENAVI").each((i, e) => {
                $(e).clear();
            })
            _$Navidom.clear();
            _$Navidom.addClass("hide");
        }

        private loadWorkflowInstProcessR(res) {
            var _$dom = $(ReactDOM.findDOMNode(this)).find(".ACT-PAGE-MAIN");
            if (_$dom.length > 0) {
                _$dom.html("");
                _$dom["AtawViewPage"](res);

            }
        }


        private loadWorkflowInstDetailR(res) {
            var _$dom = $(ReactDOM.findDOMNode(this)).find(".ACT-PAGE-MAIN");
            if (_$dom.length > 0) {
                _$dom.html("");
                res.NoSubmitBtn = true;
                _$dom["AtawViewPage"](res);
                //_$dom.AtawControl().$Submit.css("display", "none");
                _$dom.find(".ACT-SUBIMT-BTN").hide();
            }
        }

        private loadWorkflowInstHisR(res) {
            var _$dom = $(ReactDOM.findDOMNode(this)).find(".ACT-PAGE-MAIN");
            if (_$dom.length > 0) {
                _$dom.html("");
                _$dom.append("<p>" + res.Title + "</p>");
                res.NoSubmitBtn = true;
                _$dom["AtawViewPage"](res);
                //_$dom.AtawControl().$Submit.css("display", "none");
                _$dom.find(".ACT-SUBIMT-BTN").hide();
            }
        }

        private setWorkflowMapCurrentStep($div: JQuery, resObj: any) {
            if (resObj.ExtData.ProcessModel && resObj.ExtData.ProcessModel.DetailModel && resObj.ExtData.ProcessModel.DetailModel.MapModel.CurrentStep.DisplayName) {
                $div.append("<p class='hide ACT-STEP-NAME'>" + resObj.ExtData.ProcessModel.DetailModel.MapModel.CurrentStep.DisplayName + "</p>");
            }
        }

        protected pComponentDidMount() {

            super.pComponentDidMount();
            //alert("载入");
            this.initPage();


        }




    }

    export interface IReactWorkflowVm extends basewedPageFile.Web.BaseWebPageVm {
        Wid: string;
        Type: string;
        PageObj: any;
    }

    export interface IWorkflowConfig {


    }
    export class WorkflowVm extends basewedPageFile.Web.BaseWebPageVm implements IReactWorkflowVm {
        public ReactType = WorkflowReact;
        public Wid: string;
        public Type: string;

        public IsV1: boolean = true;
        public PageObj: any;
        private fUrl: string;
        private SignUrl: string;
        private HaveSave: boolean;
        private HaveBack: boolean;
        private HaveUnlock: boolean;

        public constructor(config?: IWorkflowConfig) {
            super();
            //if (window["IsV1"]) {
                this.IsV1 = window["IsV1"];
           // }
        }

        private init(config: IWorkflowConfig) {
        }

        private fGetUrl(): string {
            var _url: string = ""
            switch (this.Type) {
                case "inst":
                    _url = "/workflow/WorkFlowInst/InstForm";
                    break;
                case "insthis":
                    _url = "/workflow/MyHistory/HistoryForm";
                    break;
                case "detail":
                    _url = "/workflow/WorkFlowInst/DetailForm";
                    break;
                default:
                    break;


            }
            return _url;
        }

        private fInstCallBack(res: any) {
            if (res.ExtData) {
                res.ExtData.DeskShortcutHref = this.SignUrl;
            } else {
                res.ExtData = { DeskShortcutHref: this.SignUrl }
            }
            if (res.ExtData.FormType === "1") {
                // alert("操作");
                res["AtawSubmitSetting"] = {
                    befortPostDataFun:  (data, page)=> {
                        page.AtawSubmitSetting.Url = "/Workflow/MyWork/ProcessAsk?id=" + this.Wid;
                        //+ "&ds=" + $.toJSON(data)
                        return true;
                    }
                };
                res["MvcFormUrlSetFun"] =  (mvcForm) =>{
                    return mvcForm.Url + "?id=" + this.Wid;
                };
                res["NoChangeCheckFun"] = function () {
                    return true;
                }
                res.OtherButtonList = [];
                if (res.ExtData && res.ExtData.HaveSave == "1") {
                    this.HaveSave = true;
                    res.OtherButtonList.push({
                        Txt: "保存",
                        Url: "/Workflow/MyWork/ProcessSave?id=" + this.Wid
                    });

                }
                if (res.ExtData && res.ExtData.HaveBack == "1") {
                    this.HaveBack = true;
                    res.OtherButtonList.push({
                        NoSubmit: true,
                        Txt: "回退",
                        Url: "/Workflow/MyWork/Back?id=" + this.Wid
                    });

                }
                if (res.ExtData && res.ExtData.HaveUnlock == "1") {
                    this.HaveUnlock = true;
                    res.OtherButtonList.push({
                        NoSubmit: true,
                        Txt: "解锁",
                        Url: "/Workflow/MyWork/Unlock?id=" + this.Wid
                    });

                }
                //this.R.loadWorkflowInstProcessR(res, this.Wid);

            } else {
                // alert("不能操作");
                res["AtawSubmitSetting"] = { befortPostDataFun: function (data, page) { alert(page.RegName); return true; } };
                res["MvcFormUrlSetFun"] =  (mvcForm)=> {
                    return mvcForm.Url + "?id=" + this.Wid;
                }
                //this.R.loadWorkflowInstDetailR(res);
            }
            //_this.loadMenu();
        };
        private fInstHisCallBack(res: any) {
            if (res.ExtData) {
                res.ExtData.DeskShortcutHref = this.SignUrl;
            } else {
                res.ExtData = {
                    DeskShortcutHref: this.SignUrl
                }
            }
            res["AtawSubmitSetting"] = {
                befortPostDataFun: function (data, page) {
                    alert(page.RegName);
                    return true;
                }
            };
            res["MvcFormUrlSetFun"] = function (mvcForm) {
                return mvcForm.Url + "?id=" + this.Wid;
            }
        }
        private fDetailCallBack(res: any) {
            res["AtawSubmitSetting"] =
                {
                    befortPostDataFun:
                    function (data, page) {
                        alert(page.RegName);
                        return true;
                    }
                };
            res["MvcFormUrlSetFun"] =  (mvcForm) =>{
                return mvcForm.Url + "?id=" + this.Wid;
            }
        }

        protected loadPage(callback?: () => any) {

            var _url: string = this.fGetUrl();
            urlFile.Core.AkPost(_url, { id: this.Wid }, (a: any) => {
                switch (this.Type) {
                    case "inst":
                        this.fInstCallBack(a);
                        break;
                    case "insthis":
                        this.fInstHisCallBack(a);
                        break;
                    case "detail":
                        this.fDetailCallBack(a);
                        break;
                    default:
                        break;


                }
                this.PageObj = a;
                this.Title = a.Title;
                if (callback) {
                    callback();
                }
            });


        }

        public Reset(p1?: string, p2?: string, p3?: string) {
            super.Reset(p1, p2, p3);
            if (p1 && p1 != "") {
                this.Type = p1;
            }

            if (p3 && p3 != "") {
                this.Wid = p3;
            }




        }

    }
    export class WorkflowStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class WorkflowProps extends basewedPageFile.Web.BaseWebPageProps<IReactWorkflowVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("WORKFLOW", basewedPageFile.Web.BaseWebPageVm, WorkflowVm);

}
