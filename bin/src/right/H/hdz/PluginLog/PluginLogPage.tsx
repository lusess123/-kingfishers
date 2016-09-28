import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
//import domFile = require("./../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import basewedPageFile = require("./../../../../04page/BaseWebPage");
import React = require("react");
import ReactDOM = require("react-dom");
import tabDomFile = require("./../../../../05tool/TabDom");
import dataFile = require("./Data");
import timePointFile = require("./TimePointDom");
import dllInfoFile = require("./DllInfoDom");


export module PluginLogPage {
    export class PluginLogPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class PluginLogPageReact extends basewedPageFile.Web.BaseWebPageReact<PluginLogPageProps, PluginLogPageStates, PluginLogPageAction> implements domCore.IReact {

        public state = new PluginLogPageStates();
        public pSender(): React.ReactElement<any> {
            return <div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 Hm-workflow">
                    {this.props.Vm.TabDomObj.intoDom()}
                </div>
            </div>;
        }






    }

    export interface IReactPluginLogPageVm extends basewedPageFile.Web.BaseWebPageVm {
        TabDomObj: tabDomFile.TabDom.TabDomVm;
        TimePointDomObj: timePointFile.TimePointDom.TimePointDomVm;
        DllInfoDomObj: dllInfoFile.DllInfoDom.DllInfoDomVm;
    }

    export interface IPluginLogPageConfig {


    }
    export class PluginLogPageVm extends basewedPageFile.Web.BaseWebPageVm implements IReactPluginLogPageVm {
        public ReactType = PluginLogPageReact;
        public Title: string = "PluginLogPage页面;";

        public PluginLog: dataFile.Pluginlog.Pluginlog;
        public TabDomObj: tabDomFile.TabDom.TabDomVm;
        public TimePointDomObj: timePointFile.TimePointDom.TimePointDomVm;
        public DllInfoDomObj: dllInfoFile.DllInfoDom.DllInfoDomVm;


        public constructor(config?: IPluginLogPageConfig) {
            super();
            
        }

        private init(config: IPluginLogPageConfig) {
        }

        protected loadPage(callback?: () => any) {
            urlFile.Core.AkPost("/core/WebService/Method?resolver=JsonMethod",
                { json: "dev/PluginLogData.json" }, (a) => {

                    this.PluginLog = a;

                    var TimePointRowConfig: timePointFile.TimePointDom.ITimePointDomConfig = { TimePointRowList: this.PluginLog.TimePointList };

                    this.TimePointDomObj = new timePointFile.TimePointDom.TimePointDomVm(TimePointRowConfig);

                    var DllInfoRowConfig: dllInfoFile.DllInfoDom.IDllInfoDomConfig = { DllInfoRowList: this.PluginLog.DllInfoList };

                    this.DllInfoDomObj = new dllInfoFile.DllInfoDom.DllInfoDomVm(DllInfoRowConfig);

                  

                    this.TabDomObj = new tabDomFile.TabDom.TabDomVm({
                        Items: [
                            {
                                Name: "timePoint",
                                Title: "时间",
                                IsActive: true,
                                //ReloadFun: (vm) => {
                                //    utilFile.Core.Util.Cast<feedFile.Feed.FeedVm>(vm.DomObj).sysPage_load(() => {
                                //        vm.DomObj.forceUpdate("");
                                //    });
                                //},
                                DomObj: this.TimePointDomObj
                            },
                            {
                                Name: "dllInfo",
                                Title: "dll程序集信息",
                                IsActive: false,
                                //ReloadFun: (vm) => {
                                //    utilFile.Core.Util.Cast<feedFile.Feed.FeedVm>(vm.DomObj).sysPage_load(() => {
                                //        vm.DomObj.forceUpdate("");
                                //    });
                                //},
                                DomObj: this.DllInfoDomObj
                            }

                        ]
                    });

                    if (callback) {
                        callback();
                    }
                });

        }

    }
    export class PluginLogPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class PluginLogPageProps extends basewedPageFile.Web.BaseWebPageProps<IReactPluginLogPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("PLUGINLOGPAGE", basewedPageFile.Web.BaseWebPageVm, PluginLogPageVm);

}
