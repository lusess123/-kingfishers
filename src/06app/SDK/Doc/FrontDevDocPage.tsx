import domFile = require("./../../../01core/0Dom");
import iocFile = require("./../../../01core/Ioc");
//import domFile = require("./../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import basewedPageFile = require("./../../../04page/BaseWebPage");
import React = require("react");
import ReactDOM = require("react-dom");

export module FrontDevDocPage {
    export class FrontDevDocPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }
   

    export class FrontDevDocPageReact extends basewedPageFile.Web.BaseWebPageReact<FrontDevDocPageProps, FrontDevDocPageStates, FrontDevDocPageAction> implements domCore.IReact {

        private fun_isShowClick() {
            this.props.Vm.IsShowPanel = !this.props.Vm.IsShowPanel;
            this.forceUpdate();
        }

        public state = new FrontDevDocPageStates();
        public pSender(): React.ReactElement<any> {
            return <div>
                <div className="panel">
                    <div className="panel-title Hu-pointer" onClick={() => { this.fun_isShowClick(); } }>
                        <i className={(this.props.Vm.IsShowPanel ? " icon-caret-right fa fa-caret-square-o-right" : " icon-caret-down fa fa-caret-square-o-down") }></i>
                        <span className="Hu-title Hs-fw m-x ">浏览器扩展程序安装</span></div>
                    <div className={"Hc-list-item " + (this.props.Vm.IsShowPanel ? "hide" : "") }>
                        <p className="Hs-fw">1.安装一个谷歌访问助手<a className="m-x" href="http://192.168.66.3:5001/%E8%B0%B7%E6%AD%8C%E8%AE%BF%E9%97%AE%E5%8A%A9%E6%89%8B2.1.9.crx">点击下载</a></p>
                        <div className="m-x-md">
                        <p>安装步骤：</p>
                        <p>第一步、打开我们的chrome浏览器，然后单击右上角的那个菜单工具图标。</p>
                        <p>第二步、在弹出的菜单中，选择【更多工具】-->【扩展程序】进入扩展程序管理界面。</p>
                        <p>第三步、把下载好的后缀为“.crx”的文件拖入这个界面。</p>
                        <p>第四步、界面弹出提示是否要新增这个扩展程序，单击【添加】即可。</p>
                        <p>第五步、现在我们看到这个扩展程序已经安装上来了，只要把这个程序后面的【启用】的勾打上就是了。</p>
                        </div>
                    <p className="Hs-fw">2.安装Clear Cache清理缓存</p>
                    <p className="Hs-fw">3.安装JsonView访问Json类型文件</p>
                    <p className="Hs-fw">4.安装React Developer Tools</p>
                    <p className="Hs-fw">5.安装react-detector</p>
                        <div className="m-x-md">
                         <p>添加扩展程序步骤：</p>
                         <p>第一步、单击右上角菜单按钮选择【更多工具】-->【扩展程序】进入扩展程序界面。</p>
                         <p>第二步、单击【获取更多扩展程序】链接进入【Chrome网上应用店】。</p>
                         <p>第三步、在左侧功能区【搜索框】中输入对应扩展程序名称，下方选择【扩展程序】。</p>
                         <p>第四步、在右侧搜索结果中选择对应扩展程序，单击【+添加至CHROME】。</p>
                         <p>第五步、界面弹出提示是否添加扩展程序，单击【添加扩展程序】，查看扩展程序界面扩展程序是否启用，如未启用则单击【启用】。 </p>
                        </div>
                </div>
             </div>
            </div>;
        }






    }

    export interface IReactFrontDevDocPageVm extends basewedPageFile.Web.BaseWebPageVm {

        IsShowPanel: boolean;
    }

    export interface IFrontDevDocPageConfig {


    }
    export class FrontDevDocPageVm extends basewedPageFile.Web.BaseWebPageVm implements IReactFrontDevDocPageVm {
        public ReactType = FrontDevDocPageReact;
        public Title: string = "FrontDevDocPage页面;";

        IsShowPanel: boolean = false;

        public constructor(config?: IFrontDevDocPageConfig) {
            super();

        }

        private init(config: IFrontDevDocPageConfig) {
        }

        protected loadPage(callback?: () => any) {
            if (callback) {
                callback();
            }
        }

    }
    export class FrontDevDocPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class FrontDevDocPageProps extends basewedPageFile.Web.BaseWebPageProps<IReactFrontDevDocPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("FRONTDEVDOCPAGE", basewedPageFile.Web.BaseWebPageVm, FrontDevDocPageVm);

}
