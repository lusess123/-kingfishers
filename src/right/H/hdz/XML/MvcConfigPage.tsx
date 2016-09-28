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
            return <div>
                <div className="well"><h6 className="Hu-title Hs-fw ">基础设置</h6><span></span></div>
                <form className="m-a clearfix">
                    <div className="col-lg-12 col-md-12 Hu-dashed-line p-a">
                            <label className="form-control-label text-right">应用程序名：</label>
                            <ESpan children={null} Vm={new ESpanVm({ Content: "MvcConfig" }) }></ESpan>
                        </div>
                    <div className="col-lg-12 col-md-12 Hu-dashed-line p-a">
                    <p className="m-b Hs-fw ">路由配置集合</p>
                        <table className="table  table-hover">
                           {this._initThead()}
                           {this._initTbody()}
                        </table>
                    </div>
                    </form>
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
             return <tbody>
                 <tr>
                     <td><i className="fa fa-circle-o Hu-pointer"></i></td>
                     <td><ESpan children={null} Vm={new ESpanVm({ Content: "MRP" }) }></ESpan></td>
                     <td><ESpan children={null} Vm={new ESpanVm({ Content: "Home" }) }></ESpan></td>
                     <td><ESpan children={null} Vm={new ESpanVm({ Content: "Login" }) }></ESpan></td>
                     <td><ESpan children={null} Vm={new ESpanVm({ Content: " " }) }></ESpan></td>
                     <td><ESpan children={null} Vm={new ESpanVm({ Content: "ataw" }) }></ESpan></td>
                     <td><ESpan children={null} Vm={new ESpanVm({ Content: "Ataw.MRP.Web.Controllers", Type: "textarea" }) }></ESpan></td>
                 </tr>
                 <tr>
                     <td><i className="fa fa-circle-o Hu-pointer"></i></td>
                     <td><ESpan children={null} Vm={new ESpanVm({ Content: "UISDK" }) }></ESpan></td>
                     <td><ESpan children={null} Vm={new ESpanVm({ Content: "Home" }) }></ESpan></td>
                     <td><ESpan children={null} Vm={new ESpanVm({ Content: "Index" }) }></ESpan></td>
                     <td><ESpan children={null} Vm={new ESpanVm({ Content: " " }) }></ESpan></td>
                     <td><ESpan children={null} Vm={new ESpanVm({ Content: " " }) }></ESpan></td>
                     <td><ESpan children={null} Vm={new ESpanVm({ Content: "UISdk.Controllers" }) }></ESpan></td>
                 </tr>
                 <tr>
                     <td><i className="fa fa-circle-o Hu-pointer"></i></td>
                     <td><ESpan children={null} Vm={new ESpanVm({ Content: "AMALL" }) }></ESpan></td>
                     <td><ESpan children={null} Vm={new ESpanVm({ Content: "Home" }) }></ESpan></td>
                     <td><ESpan children={null} Vm={new ESpanVm({ Content: "AmallIndex" }) }></ESpan></td>
                     <td><ESpan children={null} Vm={new ESpanVm({ Content: "AmallPortal" }) }></ESpan></td>
                     <td><ESpan children={null} Vm={new ESpanVm({ Content: " " }) }></ESpan></td>
                     <td><ESpan children={null} Vm={new ESpanVm({ Content: "Ataw.AMALL.Portal.Web.Controllers", Type: "textarea" }) }></ESpan></td>
                 </tr>
                 <tr>
                     <td><i className="fa fa-circle-o Hu-pointer"></i></td>
                     <td><ESpan children={null} Vm={new ESpanVm({ Content: "Right" }) }></ESpan></td>
                     <td><ESpan children={null} Vm={new ESpanVm({ Content: "Home" }) }></ESpan></td>
                     <td><ESpan children={null} Vm={new ESpanVm({ Content: "Login" }) }></ESpan></td>
                     <td><ESpan children={null} Vm={new ESpanVm({ Content: "Right" }) }></ESpan></td>
                     <td><ESpan children={null} Vm={new ESpanVm({ Content: "" }) }></ESpan></td>
                     <td><ESpan children={null} Vm={new ESpanVm({ Content: "Ataw.Right.Web.Controllers", Type: "textarea" }) }></ESpan></td>
                 </tr>
                 <tr>
                     <td><i className="fa fa-circle-o Hu-pointer"></i></td>
                     <td><ESpan children={null} Vm={new ESpanVm({ Content: "Estate" }) }></ESpan></td>
                     <td><ESpan children={null} Vm={new ESpanVm({ Content: "Home" }) }></ESpan></td>
                     <td><ESpan children={null} Vm={new ESpanVm({ Content: "Login" }) }></ESpan></td>
                     <td><ESpan children={null} Vm={new ESpanVm({ Content: "Estate" }) }></ESpan></td>
                     <td><ESpan children={null} Vm={new ESpanVm({ Content: "1" }) }></ESpan></td>
                     <td><ESpan children={null} Vm={new ESpanVm({ Content: "Estate.Manage.Web.Controllers", Type: "textarea" }) }></ESpan></td>
                 </tr>
                 <tr>
                     <td><i className="fa fa-circle Hu-pointer"></i></td>
                     <td><ESpan children={null} Vm={new ESpanVm({ Content: "RightCloud" }) }></ESpan></td>
                     <td><ESpan children={null} Vm={new ESpanVm({ Content: "Auth" }) }></ESpan></td>
                     <td><ESpan children={null} Vm={new ESpanVm({ Content: "Index" }) }></ESpan></td>
                     <td><ESpan children={null} Vm={new ESpanVm({ Content: "RightCloud" }) }></ESpan></td>
                     <td><ESpan children={null} Vm={new ESpanVm({ Content: "1" }) }></ESpan></td>
                     <td><ESpan children={null} Vm={new ESpanVm({ Content: "Ataw.RightCloud.Web" }) }></ESpan></td>
                 </tr>
                     
                 </tbody>
        
        }


    }

    export interface IReactMvcConfigPageVm extends basewedPageFile.Web.BaseWebPageVm {

    }

    export interface IMvcConfigPageConfig {


    }
    export class MvcConfigPageVm extends basewedPageFile.Web.BaseWebPageVm implements IReactMvcConfigPageVm {
        public ReactType = MvcConfigPageReact;
        public Title: string = "MvcConfigPage页面;";
        

        public constructor(config?: IMvcConfigPageConfig) {
            super();

        }

        private init(config: IMvcConfigPageConfig) {
        }

        protected loadPage(callback?: () => any) {
            if (callback) {
                callback();
            }
        }

    }
    export class MvcConfigPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class MvcConfigPageProps extends basewedPageFile.Web.BaseWebPageProps<IReactMvcConfigPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("MVCCONFIGPAGE", basewedPageFile.Web.BaseWebPageVm, MvcConfigPageVm);

}
