

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
import ConfigData = require("./../Data");
import EditSpanFile = require("./../../../../05tool/EditSpan");
import ESpan = EditSpanFile.EditSpan.EditSpanReact;
import ESpanVm = EditSpanFile.EditSpan.EditSpanVm;
import eventFile = require("./../../../../01core/Event");
import MvcSettingFrom = require("./MvcSettingGridFrom");
export module MvcConfigPage {
    export class MvcConfigPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class MvcConfigPageReact extends basewedPageFile.Web.BaseWebPageReact<MvcConfigPageProps, MvcConfigPageStates, MvcConfigPageAction> implements domCore.IReact {

        public state = new MvcConfigPageStates();
        public pSender(): React.ReactElement<any> {
            var m = this.props.Vm.Mvc;
            return <div>
                <div className="well"><h6 className="Hu-title Hs-fw ">基础设置</h6><span></span></div>
                    <div className="col-lg-4 col-md-4">
                    <label className="form-control-label text-right pull-left">应用程序名：</label>
                    {this.psenderString(m.AppName) }
                    </div>
                    <div className="col-lg-12 col-md-12 Hu-dashed-line p-a">
                        <p className="m-b Hs-fw ">路由配置集合</p>
                    </div>
                    {this.props.Vm.MvcSettFrom.intoDom() }

                    <div className="text-center"><a className="btn btn-primary btn-sm"  onClick={() => { this.props.Vm.submitClick() } }>保存</a></div>
            </div>;
        }

        public psenderString(value: string) {
            return <div className="pull-left">
                <label className="form-control-label text-right ">{Text}</label>{this.props.Vm.psenderAppSetting(value) }
            </div>
        }
    }


       

    export interface IReactMvcConfigPageVm extends basewedPageFile.Web.BaseWebPageVm {
        Mvc: ConfigData.ConfigData.MvcData;
        MvcSettFrom: MvcSettingFrom.MvcSettingGridFrom.MvcSettingGridFromVm;
        submitClick: Function;
        psenderAppSetting: (Val: string) => {};
    }

    export interface IMvcConfigPageConfig {


    }
    export class MvcConfigPageVm extends basewedPageFile.Web.BaseWebPageVm implements IReactMvcConfigPageVm {
        public ReactType = MvcConfigPageReact;
        public Title: string = "MvcPage页面;";
        public Mvc: ConfigData.ConfigData.MvcData;
        public submits: Array<ConfigData.ConfigData.submit> = [];
        public MvcSettFrom: MvcSettingFrom.MvcSettingGridFrom.MvcSettingGridFromVm;
        public EditText: EditSpanFile.EditSpan.EditSpanVm;
        public Routes:Array<ConfigData.ConfigData.RoutesData>;
        public Route:ConfigData.ConfigData.RoutesData;
        public constructor(config?: IMvcConfigPageConfig) {
            super();

        }

        private init(config: IMvcConfigPageConfig) {
        }

        protected loadPage(callback?: () => any) {
            this.UniId = eventFile.App.getUniId().toString();

            urlFile.Core.AkPost("/Dev/App/GetMvcXml", {}, (a) => {
                this.Mvc = a;
                var config: MvcSettingFrom.MvcSettingGridFrom.IMvcSettingGridFromConfig = {Routes:this.Mvc.Routes ,Data: this.Mvc.DataRoutes }
                this.MvcSettFrom = new MvcSettingFrom.MvcSettingGridFrom.MvcSettingGridFromVm(config);

                if (callback) {
                    callback();
                }
            })

        }

        public psenderAppSetting( Val: string) {
            if (Val == "" || Val == null) Val = "空";

            var config: EditSpanFile.EditSpan.IEditSpanVm = {
                Content: Val, ChangeEvent: (v, ischage) => {
                        this.Mvc.AppName = v.Content;
                    }                
            }

            this.EditText = new EditSpanFile.EditSpan.EditSpanVm(config);
            return this.EditText.intoDom();
        }

        public submitClick() {

            var submit = this.MvcSettFrom.submitClick();
            var checkTrue=0;
            submit.map(a=>{
                if(a.IsUser)
                    checkTrue++;
            })            
            if(checkTrue>1){
             alert("只能选择一个");
                return false; 
            }
            var submitData: ConfigData.ConfigData.MvcsubmitData = { Routes:this.Routes, AppName: this.Mvc.AppName, DataRoutes: submit }
            
            var Submit = {}
            urlFile.Core.AkPost("/Dev/App/SaveMvcXml", { submit: JSON.stringify(submitData) }, (a) => {
                if (a) {
                    utilFile.Core.Util.ToggleLoading(true);
                    urlFile.Core.AkUrl.Current().refresh();
                }
            })
        }



    }
    export class MvcConfigPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class MvcConfigPageProps extends basewedPageFile.Web.BaseWebPageProps<IReactMvcConfigPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("MVCPAGE", basewedPageFile.Web.BaseWebPageVm, MvcConfigPageVm);

}

