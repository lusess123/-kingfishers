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

import EditSpanFile = require("./../../../../05tool/EditSpan");
import ESpan = EditSpanFile.EditSpan.EditSpanReact;
import ESpanVm = EditSpanFile.EditSpan.EditSpanVm;

import RadioFile = require("./../../../../02col/01single/Radio");
import Radio = RadioFile.ui.RadioReact;
import RadioVm = RadioFile.ui.RadioVm;

import data = require("./Data");
export module ApplicationPage {
    export class ApplicationPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class ApplicationPageReact extends basewedPageFile.Web.BaseWebPageReact<ApplicationPageProps, ApplicationPageStates, ApplicationPageAction> implements domCore.IReact {

        public state = new ApplicationPageStates();
        public pSender(): React.ReactElement<any> {
            return <div>
                <div>
                    <div className="well"><h6 className="Hu-title Hs-fw ">基础设置</h6><span></span></div>
                    <form className="m-a clearfix">
                        <div className="col-lg-12 col-md-12">
                            <label className={"form-control-label text-right"  }>应用程序名：</label>
                            <ESpan children={null} Vm={new ESpanVm({ Content: "haa", ChangeEvent: () => { this.props.Vm.changerEvent() },ClassName:this.props.Vm.isAppNameEdit }) }></ESpan>
                        </div>
                        <div className="col-lg-12 col-md-12 Hu-dashed-line p-a">
                            <div className="col-lg-4 col-md-4">
                                <label className="form-control-label text-right pull-left">是否支持报表：</label>
                                {this.props.Vm.RadioObj.intoDom() }
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <label className="form-control-label text-right pull-left">日志记录：</label>
                                {this.props.Vm.RadioDObj.intoDom() }
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <label className="form-control-label text-right pull-left">异常堆栈信息的提示：</label>
                                {this.props.Vm.RadioEObj.intoDom() }
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <label className="form-control-label text-right pull-left">帮助中心：</label>
                                {this.props.Vm.RadioFObj.intoDom() }
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <label className="form-control-label text-right pull-left">签到推送：</label>
                                {this.props.Vm.RadioGObj.intoDom() }
                            </div>
                        </div>
                        {this._initMemcached() }

                        {this._initDB() }


                    </form>
                    <div className="text-center"><a className="btn btn-primary btn-sm">保存</a></div>
                </div>
            </div>;
        }

        private _initMemcached(): React.ReactElement<any> {
            return <div className="col-lg-12 col-md-12 Hu-dashed-line p-a">
                <p className="m-b-0 Hs-fw ">分布式缓存</p>
                <div className="col-lg-4 col-md-4">
                    <label className="form-control-label text-right pull-left">基本设置：</label>
                    <div className="Hg-w80  pull-left">
                        <div className="">
                            <label className="form-control-label text-right">Init：</label>
                            <ESpan children={null} Vm={new ESpanVm({ Content: "50"}) }></ESpan>
                        </div>
                        <div className="">
                            <label className="form-control-label text-right">Min：</label>
                            <ESpan children={null} Vm={new ESpanVm({ Content: "50" }) }></ESpan>
                        </div>
                        <div className="">
                            <label className="form-control-label text-right">Max：</label>
                            <ESpan children={null} Vm={new ESpanVm({ Content: "250" }) }></ESpan>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 col-md-12">
                    <label className="form-control-label text-right pull-left">服务列表：</label>
                    <div className="Hg-w80 pull-left">
                        <div>
                            <label className="form-control-label text-right">服务地址1：</label>
                            <ESpan children={null} Vm={new ESpanVm({ Content: "127.0.0.1:11211" }) }></ESpan>
                        </div>
                        <div>
                            <label className="form-control-label text-right">服务地址2：</label>
                            <ESpan children={null} Vm={new ESpanVm({ Content: "192.168.68.90:11211" }) }></ESpan>
                        </div>
                        <div>
                            <label className="form-control-label text-right">服务地址3：</label>
                            <ESpan children={null} Vm={new ESpanVm({ Content: "192.168.68.90:11211" }) }></ESpan>
                        </div>
                    </div>
                </div>
            </div>;
        }

        private _initDB(): React.ReactElement<any> {
            return <div className="col-lg-12 col-md-12 Hu-dashed-line p-a">
                <div className="col-lg-12 col-md-12">
                    <label className="form-control-label text-right pull-left">反向生产数据库：</label>
                    {this.props.Vm.RadioDBObj.intoDom() }
                </div>
                <table className="table  table-hover">
                    {this._initDBThead() }
                    {this._initDBTbody() }
                </table>
            </div>

        }


        private _initDBThead(): React.ReactElement<any> {
            return <thead>
                <tr>
                    <th></th>
                    <th><ESpan children={null} Vm={new ESpanVm({ Content: "Key" }) }></ESpan></th>
                    <th><ESpan children={null} Vm={new ESpanVm({ Content: "Vaule" }) }></ESpan></th>
                    <th><ESpan children={null} Vm={new ESpanVm({ Content: "NeedParse" }) }></ESpan></th>
                </tr>
            </thead>;
        }

        private _initDBTbody(): React.ReactElement<any> {
            return <tbody>
                <tr>
                    <td><ESpan children={null} Vm={new ESpanVm({ Content: "设置1" }) }></ESpan></td>
                    <td><ESpan children={null} Vm={new ESpanVm({ Content: "MultiLog" }) }></ESpan></td>
                    <td>{this.props.Vm.RadioHObj.intoDom() }</td>
                    <td>{this.props.Vm.RadioIObj.intoDom() }</td>
                </tr>
                <tr>
                    <td><ESpan children={null} Vm={new ESpanVm({ Content: "设置2" }) }></ESpan></td>
                    <td><ESpan children={null} Vm={new ESpanVm({ Content: "GeneratorXMLPath" }) }></ESpan></td>
                    <td><ESpan children={null} Vm={new ESpanVm({ Content: "E:\form.xml" }) }></ESpan></td>
                    <td>{this.props.Vm.RadioJObj.intoDom() }</td>
                </tr>
                <tr>
                    <td><ESpan children={null} Vm={new ESpanVm({ Content: "设置3" }) }></ESpan></td>
                    <td><ESpan children={null} Vm={new ESpanVm({ Content: "SisenMessNotifyUrl" }) }></ESpan></td>
                    <td><ESpan children={null} Vm={new ESpanVm({ Content: "http://192.168.66.11:8524/workflow/WebServer/SisenMessSingle", Type: "textarea" }) }></ESpan></td>
                    <td>{this.props.Vm.RadioKObj.intoDom() }</td>
                </tr>
                <tr>
                    <td><ESpan children={null} Vm={new ESpanVm({ Content: "设置4" }) }></ESpan></td>
                    <td><ESpan children={null} Vm={new ESpanVm({ Content: "SMTPPort" }) }></ESpan></td>
                    <td><ESpan children={null} Vm={new ESpanVm({ Content: "25" }) }></ESpan></td>
                    <td>{this.props.Vm.RadioLObj.intoDom() }</td>
                </tr>
            </tbody>;
        }
    

        public fun_addDBRow() {
            this.props.Vm.DBRowHidden = !this.props.Vm.DBRowHidden;
            this.forceUpdate();
        }


    }

    export interface IReactApplicationPageVm extends basewedPageFile.Web.BaseWebPageVm {
        RadioObj: RadioFile.ui.RadioVm;
        RadioDObj: RadioFile.ui.RadioVm;
        RadioEObj: RadioFile.ui.RadioVm;
        RadioFObj: RadioFile.ui.RadioVm;
        RadioGObj: RadioFile.ui.RadioVm;
        RadioDBObj: RadioFile.ui.RadioVm;
        RadioHObj: RadioFile.ui.RadioVm;
        RadioIObj: RadioFile.ui.RadioVm;
        RadioJObj: RadioFile.ui.RadioVm;
        RadioKObj: RadioFile.ui.RadioVm;
        RadioLObj: RadioFile.ui.RadioVm;
        RadioMObj: RadioFile.ui.RadioVm;
        DBRowHidden: boolean;
        changerEvent: any;
        isAppNameEdit: string;
    }

    export interface IApplicationPageConfig {


    }
    export class ApplicationPageVm extends basewedPageFile.Web.BaseWebPageVm implements IReactApplicationPageVm {
        public ReactType = ApplicationPageReact;
        public Title: string = "ApplicationPage页面;";

        public RadioObj: RadioFile.ui.RadioVm = new RadioFile.ui.RadioVm();

        public RadioDObj: RadioFile.ui.RadioVm = new RadioFile.ui.RadioVm();
        public RadioEObj: RadioFile.ui.RadioVm = new RadioFile.ui.RadioVm();
        public RadioFObj: RadioFile.ui.RadioVm = new RadioFile.ui.RadioVm();
        public RadioGObj: RadioFile.ui.RadioVm = new RadioFile.ui.RadioVm();
        public RadioDBObj: RadioFile.ui.RadioVm = new RadioFile.ui.RadioVm();
        public RadioHObj: RadioFile.ui.RadioVm = new RadioFile.ui.RadioVm();
        public RadioIObj: RadioFile.ui.RadioVm = new RadioFile.ui.RadioVm();
        public RadioJObj: RadioFile.ui.RadioVm = new RadioFile.ui.RadioVm();
        public RadioKObj: RadioFile.ui.RadioVm = new RadioFile.ui.RadioVm();
        public RadioLObj: RadioFile.ui.RadioVm = new RadioFile.ui.RadioVm();
        public RadioMObj: RadioFile.ui.RadioVm = new RadioFile.ui.RadioVm();

        public isAppNameEdit: string = "";
        public DBRowHidden: boolean = false;

        public constructor(config?: IApplicationPageConfig) {
            super();

            this.RadioObj.ItemList = data.ApplicationData.IsSupportReportData;
            this.RadioObj.SelectText = "否";
            this.RadioDObj.ItemList = data.ApplicationData.HasLoggerData;
            this.RadioDObj.SelectText = "关闭";
            this.RadioEObj.ItemList = data.ApplicationData.ExceptionStackData;
            this.RadioEObj.SelectText = "关闭";
            this.RadioFObj.ItemList = data.ApplicationData.PageHelpStackData;
            this.RadioFObj.SelectText = "关闭";
            this.RadioGObj.ItemList = data.ApplicationData.SignStackData;
            this.RadioGObj.SelectText = "关闭";
            this.RadioHObj.ItemList = data.ApplicationData.RodioHData;
            this.RadioHObj.SelectText = "否";
            this.RadioIObj.ItemList = data.ApplicationData.RodioIData;
            this.RadioIObj.SelectText = "否";
            this.RadioJObj.ItemList = data.ApplicationData.RodioJData;
            this.RadioJObj.SelectText = "否";
            this.RadioKObj.ItemList = data.ApplicationData.RodioKData;
            this.RadioKObj.SelectText = "是";
            this.RadioLObj.ItemList = data.ApplicationData.RodioLData;
            this.RadioLObj.SelectText = "否";
            this.RadioMObj.ItemList = data.ApplicationData.RodioMData;
            this.RadioMObj.SelectText = "是";
            this.RadioDBObj.ItemList = data.ApplicationData.MigrationData;
            this.RadioDBObj.SelectText = "否";

        }

        public changerEvent() {
            this.isAppNameEdit = "Hs-edit";
        }

        private init(config: IApplicationPageConfig) {
        }

        protected loadPage(callback?: () => any) {
            if (callback) {
                callback();
            }
        }

    }
    export class ApplicationPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class ApplicationPageProps extends basewedPageFile.Web.BaseWebPageProps<IReactApplicationPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("_APPLICATIONPAGE", basewedPageFile.Web.BaseWebPageVm, ApplicationPageVm);

}

