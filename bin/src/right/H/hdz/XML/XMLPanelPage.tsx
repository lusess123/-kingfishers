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

import ComboFile = require("./../../../../02col/02Mulite/Combo");
import Combo = ComboFile.ui.ComboReact;
import ComboVm = ComboFile.ui.ComboVm;

import data = require("./Data");


export module XMLPanelPage {
    export class XMLPanelPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class XMLPanelPageReact extends basewedPageFile.Web.BaseWebPageReact<XMLPanelPageProps, XMLPanelPageStates, XMLPanelPageAction> implements domCore.IReact {

        public state = new XMLPanelPageStates();
        public pSender(): React.ReactElement<any> {
            return <div>
                <p>表单集合，配置页面的表单，可配置多个，包含一般表单、MVC表单、Script表单</p>

                {this._initBaseForm()}

                {this._initMVCForm()}

            </div>;
        }

        private _initBaseForm(): React.ReactElement<any> {
            return <div className="Hu-dashed-line clearfix">
                <p className="m-b-0 Hs-fw">一般表单</p>
                <div className="col-lg-3 col-md-3">
                    <label className="form-control-label text-right">标题：</label>
                    <ESpan children={null} Vm={new ESpanVm({ Content: "操作面板" }) }></ESpan>
                </div>
                <div className="col-lg-3 col-md-3">
                    <label className="form-control-label text-right">名称：</label>
                    <ESpan children={null} Vm={new ESpanVm({ Content: "发布版1" }) }></ESpan>
                </div>
                <div className="col-lg-3 col-md-3">
                    <label className="form-control-label text-right pull-left">展示形式：</label>
                    <div className="col-lg-8 col-md-8">{this.props.Vm.ComboObj.intoDom() }</div>
                </div>
                <div className="col-lg-3 col-md-3">
                    <label className="form-control-label text-right pull-left">占行：</label>
                    <div className="col-lg-8 col-md-8">{this.props.Vm.ComboZObj.intoDom() }</div>
                </div>
                <div className="col-lg-12 col-md-12">
                    <p className="m-b-0 Hs-fw">Sea表单：</p>
                    <div className="col-lg-3 col-md-3">
                        <label className="form-control-label text-right">mrc名称：</label>
                        <ESpan children={null} Vm={new ESpanVm({ Content: "publishermrc" }) }></ESpan>
                    </div>
                    <div className="col-lg-3 col-md-3">
                        <label className="form-control-label text-right">模块名称：</label>
                        <ESpan children={null} Vm={new ESpanVm({ Content: "发布版" }) }></ESpan>
                    </div>
                </div>
            </div>;
        }

        private _initMVCForm(): React.ReactElement<any> {
            return <div className="clearfix">
                <p className="m-b-0 m-t Hs-fw">MVC表单</p>
                <div className="col-lg-3 col-md-3">
                    <label className="form-control-label text-right">标题：</label>
                    <ESpan children={null} Vm={new ESpanVm({ Content: "" }) }></ESpan>
                </div>
                <div className="col-lg-3 col-md-3">
                    <label className="form-control-label text-right">名称：</label>
                    <ESpan children={null} Vm={new ESpanVm({ Content: "welcome" }) }></ESpan>
                </div>
                <div className="col-lg-3 col-md-3">
                    <label className="form-control-label text-right pull-left">展示形式：</label>
                    <div className="col-lg-8 col-md-8">{this.props.Vm.ComboObj.intoDom() }</div>
                </div>
                <div className="col-lg-3 col-md-3">
                    <label className="form-control-label text-right pull-left">占行：</label>
                    <div className="col-lg-8 col-md-8">{this.props.Vm.ComboZObj.intoDom() }</div>
                </div>
                <div className="col-lg-12 col-md-12">
                    <p className="m-b-0 Hs-fw">路由设置：</p>
                    <div className="col-lg-3 col-md-3">
                        <label className="form-control-label text-right">控制器名称：</label>
                        <ESpan children={null} Vm={new ESpanVm({ Content: "Desk" }) }></ESpan>
                    </div>
                    <div className="col-lg-3 col-md-3">
                        <label className="form-control-label text-right">方法名称：</label>
                        <ESpan children={null} Vm={new ESpanVm({ Content: "Desk" }) }></ESpan>
                    </div>
                    <div className="col-lg-3 col-md-3">
                        <label className="form-control-label text-right">Area名称：</label>
                        <ESpan children={null} Vm={new ESpanVm({ Content: "ERepair" }) }></ESpan>
                    </div>
                    <div className="col-lg-3 col-md-3">
                        <label className="form-control-label text-right">命名空间：</label>
                        <ESpan children={null} Vm={new ESpanVm({ Content: "ERepair.Manage.Web.Controllers", Type: "textarea"}) }></ESpan>
                    </div>
                </div>
            </div>;
        }


    }

    export interface IReactXMLPanelPageVm extends basewedPageFile.Web.BaseWebPageVm {
        ComboObj: ComboFile.ui.ComboVm;
        ComboZObj: ComboFile.ui.ComboVm;
    }

    export interface IXMLPanelPageConfig {


    }
    export class XMLPanelPageVm extends basewedPageFile.Web.BaseWebPageVm implements IReactXMLPanelPageVm {
        public ReactType = XMLPanelPageReact;
        public Title: string = "XMLPanelPage页面;";

        public ComboObj: ComboFile.ui.ComboVm = new ComboFile.ui.ComboVm();
        public ComboZObj: ComboFile.ui.ComboVm = new ComboFile.ui.ComboVm();
       

        public constructor(config?: IXMLPanelPageConfig) {
            super();

            this.ComboObj.ItemList = data.ApplicationData.ShowKindData;
            this.ComboObj.SelectText = "Tile";
            this.ComboZObj.ItemList = data.ApplicationData.ShowTypeData;
            this.ComboZObj.SelectText = "0";
        }

        private init(config: IXMLPanelPageConfig) {
        }

        protected loadPage(callback?: () => any) {
            if (callback) {
                callback();
            }
        }

    }
    export class XMLPanelPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class XMLPanelPageProps extends basewedPageFile.Web.BaseWebPageProps<IReactXMLPanelPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("XMLPANELPAGE", basewedPageFile.Web.BaseWebPageVm, XMLPanelPageVm);

}
