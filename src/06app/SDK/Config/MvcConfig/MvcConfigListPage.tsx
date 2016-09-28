import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import ConfigData = require("./MvcData");
import AppSettingFrom = require("./MvcConfigGridFrom");
import utilFile = require("./../../../../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import basewedPageFile = require("./../../../../04page/BaseWebPage");
import eventFile = require("./../../../../01core/Event");
import React = require("react");
import ReactDOM = require("react-dom");
import ServerList = require("./ServerListDom");
import EditSpanFile = require("./../../../../05tool/EditSpan");
import ESpan = EditSpanFile.EditSpan.EditSpanReact;
import ESpanVm = EditSpanFile.EditSpan.EditSpanVm;

import data = require("./Data");

export module MvcConfigPage {
    export class MvcConfigPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class MvcConfigPageReact extends basewedPageFile.Web.BaseWebPageReact<MvcConfigPageProps, MvcConfigPageStates, MvcConfigPageAction> implements domCore.IReact {

        public state = new MvcConfigPageStates();
        public pSender(): React.ReactElement<any> {
            var Mvc = this.props.Vm.MvcConfig;
            return <div>
                <div className="well"><h6 className="Hu-title Hs-fw ">基础设置</h6><span></span></div>
                <form className="m-a clearfix">
                    <div className="col-lg-12 col-md-12 Hu-dashed-line p-a">
                        <label className="form-control-label text-right">应用程序名：</label>
                        <ESpan children={null} Vm={new ESpanVm({ Content: Mvc.AppName }) }></ESpan>
                    </div>
                    <div className="col-lg-12 col-md-12 Hu-dashed-line p-a">
                        <p className="m-b Hs-fw ">路由配置集合</p>
                        <table className="table  table-hover">
                            {this._initThead() }
                            {this._initTbody() }
                        </table>
                    </div>
                </form>             
                <div className="text-center"><a className="btn btn-primary btn-sm"  onClick={() => { this.props.Vm.submitClick() } }>保存</a></div>
            </div>;
        }


        private _initThead(): React.ReactElement<any> {
            return <thead>
                <tr>
                    <th></th>
                    <th><ESpan children={null} Vm={new ESpanVm({ Content: "路由配置名称" }) }></ESpan></th>
                    <th><ESpan children={null} Vm={new ESpanVm({ Content: "控制器名称" }) }></ESpan></th>
                    <th><ESpan children={null} Vm={new ESpanVm({ Content: "方法名称" }) }></ESpan></th>
                    <th><ESpan children={null} Vm={new ESpanVm({ Content: "Area名称" }) }></ESpan></th>
                    <th><ESpan children={null} Vm={new ESpanVm({ Content: "参数" }) }></ESpan></th>
                    <th><ESpan children={null} Vm={new ESpanVm({ Content: "命名空间" }) }></ESpan></th>
                </tr>
            </thead>;
        }

        private _initTbody(): React.ReactElement<any> {
            var config = this.props.Vm.MvcConfig.DataRoutes;
          

            return <tbody>
                
                {
                    config.map((a) =>
                   {
                    return<tr>
                        <td><i className="fa fa-circle-o Hu-pointer"></i></td>
                        <td><ESpan children={null} Vm={new ESpanVm({ Content: a.Name }) }></ESpan></td>                       
                        <td><ESpan children={null} Vm={new ESpanVm({ Content: a.ControlName }) }></ESpan></td>
                        <td><ESpan children={null} Vm={new ESpanVm({ Content:a.AreaName  }) }></ESpan></td>
                        <td><ESpan children={null} Vm={new ESpanVm({ Content: a.ActionName }) }></ESpan></td>
                        <td><ESpan children={null} Vm={new ESpanVm({ Content: a.Param }) }></ESpan></td>
                        <td><ESpan children={null} Vm={new ESpanVm({ Content: a.NameSpace, Type: "textarea" }) }></ESpan></td>
                    </tr>
                     })
                }
            </tbody>

        }


    }

    export interface IReactMvcConfigPageVm extends basewedPageFile.Web.BaseWebPageVm {
        MvcConfig: ConfigData.ConfigData.MvcConfigData;
        Config: ConfigData.ConfigData.RoutesDate;
        MvcConfigFrom: AppSettingFrom.MvcConfigGridFrom.MvcConfigGridFromVm;
        submitClick: Function;
    }

    export interface IMvcConfigPageConfig {


    }
    export class MvcConfigPageVm extends basewedPageFile.Web.BaseWebPageVm implements IReactMvcConfigPageVm {
        public ReactType = MvcConfigPageReact;
        public MvcConfigFrom: AppSettingFrom.MvcConfigGridFrom.MvcConfigGridFromVm;
        public Config: ConfigData.ConfigData.RoutesDate;       
        public Title: string = "MvcConfigPage页面;";
        public submits: Array<ConfigData.ConfigData.submit> = [];
        public MvcConfig: ConfigData.ConfigData.MvcConfigData;
        public ServerList: ServerList.ServerListDom.ServerListDomVm;
        public constructor(config?: IMvcConfigPageConfig) {
            super();

        }

        private init(config: IMvcConfigPageConfig) {
        }

        protected loadPage(callback?: () => any) {
            this.UniId = eventFile.App.getUniId().toString();

            urlFile.Core.AkPost("/Dev/App/GetMvcConfigXml", {}, (a) => {
                this.MvcConfig = a;
                this.Config = a;
                var config: AppSettingFrom.MvcConfigGridFrom.IMvcConfigGridFromConfig = { Data: this.MvcConfig.DataRoutes };
                this.MvcConfigFrom = new AppSettingFrom.MvcConfigGridFrom.MvcConfigGridFromVm(config);
                var serverConfig: ServerList.ServerListDom.IServerListDomConfig = { ServerList: this.MvcConfig.Routes.RegName }
                this.ServerList = new ServerList.ServerListDom.ServerListDomVm(serverConfig);


                if (callback) {
                    callback(); 

                }
            })           
        }
        public submitClick() {

            //var submit = this.MvcConfigFrom.submitClick();
            //var s = this.MvcConfig.DataRoutes;
            //var ServerList = this.ServerList.submitClick();

            //var submitData: ConfigData.ConfigData.submitData = { submits: this.submits, Appsettings: submit, ServerList: ServerList }
            var submitData = this.MvcConfig;
           // var Submit = {}
            urlFile.Core.AkPost("/Dev/App/SaveMvcConfigXml", { submit: JSON.stringify(submitData) }, (a) => {
                if (a) {
                    utilFile.Core.Util.ToggleLoading(true);
                    urlFile.Core.AkUrl.Current().refresh();
                }
            })

        }
        //向集合中添加
        public AddSubmit(Name: string, Val: string, Xpath: string) {
            var isAdd = true;
            var submit: ConfigData.ConfigData.submit = { Xpath: Xpath, Text: Name, Value: Val }
            this.submits.map((a) => {
                if (a.Text == Name) {
                    isAdd = false;
                }
            })
            if (isAdd) {

                this.submits.push(submit);
            }
        }
        //向集合中删去
        public SubSubmit(name: string, val: any) {
            if (this.submits.length == 0) return;
            else {
                this.submits.forEach((a, number) => {
                    if (a.Text = name) {
                        this.submits.splice(number, 1);
                    }
                })
            }
        }
    }

    export class MvcConfigPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class MvcConfigPageProps extends basewedPageFile.Web.BaseWebPageProps<IReactMvcConfigPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("MVCCONFIGLISTPAGE", basewedPageFile.Web.BaseWebPageVm, MvcConfigPageVm);

}
