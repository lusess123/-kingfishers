import domFile = require("./../../01core/0Dom");
import iocFile = require("./../../01core/Ioc");
//import domFile = require("./../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../01core/Url");
import basewedPageFile = require("./../../04page/BaseWebPage");
import tabDomFile = require("./../../05tool/TabDom");
import React = require("react");
import ReactDOM = require("react-dom");
import AllFile = require("./Plug/AllDom");
import InitializeFile = require("./Plug/InitializeDom");
import AssemblyFile = require("./Plug/AssemblyDom");
import RegisterFile = require("./Plug/RegisterDom");


export module FileReadPluginPage {
    export class FileReadPluginPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class FileReadPluginPageReact extends basewedPageFile.Web.BaseWebPageReact<FileReadPluginPageProps, FileReadPluginPageStates, FileReadPluginPageAction> implements domCore.IReact {

        public state = new FileReadPluginPageStates();
        public pSender(): React.ReactElement<any> {
            return <div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 Hm-workflow">
                        { this.props.Vm.TabDomObj.intoDom() }
                    </div>
                </div>;
        }

    }

   export interface IReactFileReadPluginPageVm extends basewedPageFile.Web.BaseWebPageVm{
       TabDomObj: tabDomFile.TabDom.TabDomVm;
       AllObj: AllFile.AllDom.AllDomVm;
       InitializeObj: InitializeFile.InitializeDom.InitializeDomVm;
       AssemblyObj: AssemblyFile.AssemblyDom.AssemblyDomVm;
       RegisterObj: RegisterFile.RegisterDom.RegisterDomVm;
   }

   export interface IFileReadPluginPageConfig  {
    
            
    }
    export class FileReadPluginPageVm extends basewedPageFile.Web.BaseWebPageVm  implements IReactFileReadPluginPageVm {
        public ReactType = FileReadPluginPageReact;
        public  Title:string = "FileReadPluginPage页面;";

        public TabDomObj: tabDomFile.TabDom.TabDomVm;
        public AllObj: AllFile.AllDom.AllDomVm;
        public InitializeObj: InitializeFile.InitializeDom.InitializeDomVm;
        public AssemblyObj: AssemblyFile.AssemblyDom.AssemblyDomVm;
        public RegisterObj: RegisterFile.RegisterDom.RegisterDomVm;

       public constructor(config?:IFileReadPluginPageConfig){
            super();

            this.AllObj = new AllFile.AllDom.AllDomVm();
            this.InitializeObj=new InitializeFile.InitializeDom.InitializeDomVm();
            this.AssemblyObj=new AssemblyFile.AssemblyDom.AssemblyDomVm();
            this.RegisterObj= new RegisterFile.RegisterDom.RegisterDomVm();
            this.TabDomObj = new tabDomFile.TabDom.TabDomVm({
                Items: [
                    {
                        Name: "all",
                        Title: "全部",
                        IsActive: false,
                        //ReloadFun: (vm) => {
                        //    utilFile.Core.Util.Cast<feedFile.Feed.FeedVm>(vm.DomObj).sysPage_load(() => {
                        //        vm.DomObj.forceUpdate("");
                        //    });
                        //},
                        DomObj: this.AllObj
                    },
                    {
                        Name: "initialize",
                        Title: "初始化",
                        IsActive: false,
                        //ReloadFun: (vm) => {
                        //    utilFile.Core.Util.Cast<feedFile.Feed.FeedVm>(vm.DomObj).sysPage_load(() => {
                        //        vm.DomObj.forceUpdate("");
                        //    });
                        //},
                        DomObj: this.InitializeObj
                    },
                    {
                        Name: "assembly",
                        Title: "程序集",
                        IsActive: true,
                        //ReloadFun: (vm) => {
                        //    utilFile.Core.Util.Cast<feedFile.Feed.FeedVm>(vm.DomObj).sysPage_load(() => {
                        //        vm.DomObj.forceUpdate("");
                        //    });
                        //},
                        DomObj: this.AssemblyObj
                    },
                    {
                        Name: "register",
                        Title: "注册",
                        IsActive: false,
                        //ReloadFun: (vm) => {
                        //    utilFile.Core.Util.Cast<feedFile.Feed.FeedVm>(vm.DomObj).sysPage_load(() => {
                        //        vm.DomObj.forceUpdate("");
                        //    });
                        //},
                        DomObj: this.RegisterObj
                    }
                     
                ]
            });
        }
       
            private init(config:IFileReadPluginPageConfig)
            {
            }

      protected loadPage(callback?: () => any) {
            if (callback) {
                callback();
            }
        }

    }
    export class FileReadPluginPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class FileReadPluginPageProps extends basewedPageFile.Web.BaseWebPageProps<IReactFileReadPluginPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("FILEREADPLUGINPAGE", basewedPageFile.Web.BaseWebPageVm, FileReadPluginPageVm);
    
}