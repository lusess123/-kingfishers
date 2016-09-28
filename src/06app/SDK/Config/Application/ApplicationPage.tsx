/// <reference path="../../../../05tool/pagination.tsx" />
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
//import domFile = require("./../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
//import iocFile = require("./../01core/Ioc");

import eventFile = require("./../../../../01core/Event");
import urlFile = require("./../../../../01core/Url");
import basewedPageFile = require("./../../../../04page/BaseWebPage");
import React = require("react");
import ReactDOM = require("react-dom");
import ConfigData = require("./../Data");
import RadioFile = require("./../../../../02col/01single/Radio");

import EditSpanFile = require("./../../../../05tool/EditSpan");
import ESpan = EditSpanFile.EditSpan.EditSpanReact;
import ESpanVm = EditSpanFile.EditSpan.EditSpanVm;

import AppSettingFrom = require("./AppSettingGridFrom");
import ServerList = require("./ServerListDom");

export module ApplicationPage {
    export class ApplicationPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class ApplicationPageReact extends basewedPageFile.Web.BaseWebPageReact<ApplicationPageProps, ApplicationPageStates, ApplicationPageAction> implements domCore.IReact {

        public state = new ApplicationPageStates();

        public pSender(): React.ReactElement<any> {

            var app = this.props.Vm.Application

            return <div>
                <div className="well"><h6 className="Hu-title Hs-fw ">基础设置</h6><span></span></div>
                <div className="col-lg-12 col-md-12 Hu-dashed-line p-a">
                {this.psenderRaido("是否支持移动端", "IsSupportMobile", app.IsSupportMobile) }
                {this.psenderRaido("是否支持报表", "IsSupportReport", app.IsSupportReport) }
                {this.psenderRaido("是否显示帮助中心", "PageHelpStack", app.PageHelpStack) }
                {this.psenderRaido("是否推送签到消息", "SignStack", app.SignStack) }
                {this.psenderRaido("是否开启日志记录", "HasLogger", app.HasLogger) }
                {this.psenderRaido("是否开启异常堆栈信息提示", "ExceptionStack", app.ExceptionStack) }
                {this.psenderRaido("是否根据XML新增或更新数据库", "IsMigration", app.IsMigration) }
                    </div>
                <div className="col-lg-12 col-md-12 p-a">
                    <p className="m-b-0 Hs-fw ">分布式缓存</p>
                    <div className="col-lg-4 col-md-4">
                        <label className="form-control-label text-right pull-left">基本设置：</label>
                        {this.psenderString("Init", app.Memcached.Init, "AtawApplicationConfig/Memcached/@Init") }
                        {this.psenderString("Min", app.Memcached.Min, "AtawApplicationConfig/Memcached/@Min") }
                        {this.psenderString("Max", app.Memcached.Max, "AtawApplicationConfig/Memcached/@Max") }
                    </div>

                    <div className="col-lg-12 col-md-12">
                        <label className="form-control-label text-right pull-left">服务列表：</label>
                        <div>
                            {this.props.Vm.ServerList.intoDom() }
                        </div>
                    </div>
                </div>

                <div className="text-center"><a className="btn btn-primary btn-sm"  onClick={() => { this.props.Vm.submitClick() } }>保存</a></div>

                {this.props.Vm.AppSettFrom.intoDom() }

                <div className="text-center"><a className="btn btn-primary btn-sm"  onClick={() => { this.props.Vm.submitClick() } }>保存</a></div>

            </div>;
        }

        public psenderRaido(Text: string, name: string, value: boolean) {
            return <div className="col-lg-4 col-md-4">
                <label className="form-control-label text-right ">{Text}</label>
                {this.props.Vm.RadioSender(name, value) }
            </div>
        }

        public psenderString(Text: string, value: string, Xpath: string) {
            return <div className="pull-left">
                <label className="form-control-label text-right ">{Text}</label>{this.props.Vm.psenderAppSetting(Text, value, Xpath) }
            </div>
        }


    }

    export interface IReactApplicationPageVm extends basewedPageFile.Web.BaseWebPageVm {
        Application: ConfigData.ConfigData.ApplictionData;
        RadioSender: (Name: string, Value: boolean) => {};
        submitClick: Function;
        psenderAppSetting: (Text: string, Key: string, Val: string) => {};
        AppSettFrom: AppSettingFrom.AppSettingGridFrom.AppSettingGridFromVm;
        ServerList: ServerList.ServerListDom.ServerListDomVm;
    }

    export interface IApplicationPageConfig {

    }

    export class ApplicationPageVm extends basewedPageFile.Web.BaseWebPageVm implements IReactApplicationPageVm {
        public ReactType = ApplicationPageReact;
        public Title: string = "ApplicationPage页面;";
        public Radio: RadioFile.ui.RadioVm;
        public EditText: EditSpanFile.EditSpan.EditSpanVm;
        public Application: ConfigData.ConfigData.ApplictionData;
        public ServerList: ServerList.ServerListDom.ServerListDomVm;
        public submits: Array<ConfigData.ConfigData.submit> = [];
        public AppSettFrom: AppSettingFrom.AppSettingGridFrom.AppSettingGridFromVm;
        public constructor(config?: IApplicationPageConfig) {
            super();
        }

        private init(config: IApplicationPageConfig) {
        }

        protected loadPage(callback?: () => any) {
            this.UniId = eventFile.App.getUniId().toString();

            urlFile.Core.AkPost("/Dev/App/GetApplicationXml", {}, (a) => {
                this.Application = a;
                var config: AppSettingFrom.AppSettingGridFrom.IAppSettingGridFromConfig = { Data: this.Application.AppSettings, Unid: this.UniId }
                this.AppSettFrom = new AppSettingFrom.AppSettingGridFrom.AppSettingGridFromVm(config);

                var serverConfig: ServerList.ServerListDom.IServerListDomConfig = { ServerList: this.Application.Memcached.ServerList }
                this.ServerList = new ServerList.ServerListDom.ServerListDomVm(serverConfig);


                if (callback) {
                    callback();
                }
            })

        }

        public RadioSender(Name: string, Value: boolean) {
            this.Radio = new RadioFile.ui.RadioVm();

            this.Radio.ItemList = ConfigData.ConfigData.RodioData;

            var Xpath = 'AtawApplicationConfig/' + Name;

            if (Value) {
                this.Radio.SelectText = "是";
            } else {
                this.Radio.SelectText = "否";
            }

            this.Radio.ChangeEventFun = (val, col) => {
                var isVal;
                isVal = val == "0" ? "true" : "false"
                if (this.Application[Name] != (val == "0" ? true : false)) {
                    this.AddSubmit(Name, isVal, Xpath);
                } else {
                    this.SubSubmit(Name, isVal);
                }
                return true;
            }
            return this.Radio.intoDom();
        }

        public psenderAppSetting(Name: string, Value: string, Xpath: string) {

            var config: EditSpanFile.EditSpan.IEditSpanVm = {
                Content: Value, ChangeEvent: (v, ischage) => {
                    if (v.OriContent != v.Content) {
                        this.AddSubmit(Name, v.Content, Xpath);
                    } else {
                        this.SubSubmit(Name, v.Content);
                    }
                }
            }

            this.EditText = new EditSpanFile.EditSpan.EditSpanVm(config);

            return this.EditText.intoDom();
        }

        public submitClick() {

            var submit = this.AppSettFrom.submitClick();

            var ServerList = this.ServerList.submitClick();

            var submitData: ConfigData.ConfigData.submitData = { submits: this.submits, Appsettings: submit, ServerList: ServerList }

            urlFile.Core.AkPost("/Dev/App/SaveApplicationXml", { submit: JSON.stringify(submitData) }, (a) => {
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


    export class ApplicationPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class ApplicationPageProps extends basewedPageFile.Web.BaseWebPageProps<IReactApplicationPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("SQAPPLICATIONPAGE", basewedPageFile.Web.BaseWebPageVm, ApplicationPageVm);

}

