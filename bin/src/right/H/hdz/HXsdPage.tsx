import domFile = require("./../../../01core/0Dom");
import iocFile = require("./../../../01core/Ioc");
//import domFile = require("./../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import basewedPageFile = require("./../../../04page/BaseWebPage");
import React = require("react");
import ReactDOM = require("react-dom");

import treeFile = require("./../../../05tool/Tree");
import TreeReact = treeFile.ui.TreeReact;
import TreeNodeVm = treeFile.ui.TreeNodeVm;

export module HXsdPage {
    export class HXsdPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class HXsdPageReact extends basewedPageFile.Web.BaseWebPageReact<HXsdPageProps, HXsdPageStates, HXsdPageAction> implements domCore.IReact {

        public state = new HXsdPageStates();
        public pSender(): React.ReactElement<any> {
           // this.props.Vm.treeObj.NNodeTplFun = (node) => { return this.createTreeNodeTpl(node); }
            return <div>
                <ul className="col-lg-3 col-md-3 col-sm-3 Hm-xsd-list">
                    <li>图标说明：</li>
                    <li><i className="xsd-icon-qjjd fa-2x"></i><span>全局简单类型</span></li>
                    <li><i className="xsd-icon-qjfz fa-2x"></i><span>全局复杂类型</span></li>
                    <li><i className="xsd-icon-jg fa-2x"></i><span>架构文档</span></li>
                    <li><i className="xsd-icon-inc fa-2x"></i><span></span></li>
                    <li><i className="xsd-icon-qjtxz fa-2x"></i><span>全局特性组</span></li>
                    <li><i className="xsd-icon-qjtx fa-2x"></i><span>全局特性</span></li>
                    <li><i className="xsd-icon-jgqjmx3 fa-2x"></i><span></span></li>
                    <li><i className="xsd-icon-qjmx2 fa-2x"></i><span></span></li>
                    <li><i className="xsd-icon-qjmx1 fa-2x"></i><span>全局元素</span></li>
                </ul>
                <div className="col-lg-6 col-md-6 col-sm-6">{this.props.Vm.treeObj.intoDom() }</div>
                
            </div>;
        }

        public createTreeNodeTpl(node: TreeNodeVm): React.ReactElement<any>[] {
            if (node.IsRoot) {
                return null;
            } else {
                return [(
                    <span className={"Hu-note Hu-pointer" + (this.props.Vm.NoteIsHidden ? " Hu-note-expend" : "") }
                        title="JavaScript是一门为你的网站添加交互功能的编程语言。（例如：游戏，响应按钮点击或者表单数据提交，动态样式，动画等）。本文帮助你开始这门激动人心的语言并且告诉你什么是它可以实现的。"
                        onClick={() => { this.fun_NoteClick(node); } }>
                        JavaScript是一门为你的网站添加交互功能的编程语言。（例如：游戏，响应按钮点击或者表单数据提交，动态样式，动画等）。本文帮助你开始这门激动人心的语言并且告诉你什么是它可以实现的。
                    </span>
                )];
            }
        }

        private fun_NoteClick(node: TreeNodeVm)
        {
            this.props.Vm.NoteIsHidden = !this.props.Vm.NoteIsHidden;
        
            this.props.Vm.treeObj.IsChange = true;
            node.IsChange = true;
            this.props.Vm.treeObj.forceUpdate("");
            this.forceUpdate();
        }

    }

    export interface IReactHXsdPageVm extends basewedPageFile.Web.BaseWebPageVm {

        treeObj: treeFile.ui.TreeVm;

        StyleName: string;

        NoteIsHidden: boolean;
    }

    export interface IHXsdPageConfig {
        StyleName?: string;
        NoteIsHidden: boolean;
    }
    export class HXsdPageVm extends basewedPageFile.Web.BaseWebPageVm implements IReactHXsdPageVm {
        public ReactType = HXsdPageReact;
        public Title: string = "HXsdPage页面;";

        public StyleName: string;
        public treeObj: treeFile.ui.TreeVm;
        public NoteIsHidden: boolean = false;


        public fun_NoteClick(node: TreeNodeVm)
        {
            this.NoteIsHidden = !this.NoteIsHidden;
            //this.treeObj.forceUpdate("");
            this.treeObj.IsChange = true;
            node.IsChange = true;
            this.treeObj.forceUpdate("");

            this.forceUpdate("");
        }

        public constructor(config?: IHXsdPageConfig) {
            super();
            if (config) {
                if (config.StyleName) {
                    this.StyleName = config.StyleName;
                }
            }

            
           
            this.treeObj = new treeFile.ui.TreeVm(
                {
                    StyleName: this.StyleName ? this.StyleName : "Base",
                    NNodeTplFun: (node) => {
                        if (node.IsRoot) {
                            return null;
                        } else {
                            return [(
                                <span className={"Hu-note Hu-pointer" + (this.NoteIsHidden ? " Hu-note-expend" : "") }
                                    title="JavaScript是一门为你的网站添加交互功能的编程语言。（例如：游戏，响应按钮点击或者表单数据提交，动态样式，动画等）。本文帮助你开始这门激动人心的语言并且告诉你什么是它可以实现的。"
                                    onClick={() => { this.fun_NoteClick(node); } }>
                                    JavaScript是一门为你的网站添加交互功能的编程语言。（例如：游戏，响应按钮点击或者表单数据提交，动态样式，动画等）。本文帮助你开始这门激动人心的语言并且告诉你什么是它可以实现的。
                                </span>
                            )];
                        }
                    }
                }
            );
            this.treeObj.initTreeVm(
                {
                    CODE_VALUE: "0", CODE_TEXT: "根",
                    Children: [

                        {
                            CODE_VALUE: "key1", CODE_TEXT: " MvcConfig.xsd", ExtData: { Icon: "xsd-icon-jg", RightValue: "" },
                            Children: [
                                { CODE_VALUE: "key", CODE_TEXT: "include-> DataRoute.xsd", ExtData: { Icon: "xsd-icon-inc", RightValue: "" } },
                                {
                                    CODE_VALUE: "key2", CODE_TEXT: "dataroutes", ExtData: { Icon: "xsd-icon-qjfz", RightValue: "" },
                                    Children: [
                                        { CODE_VALUE: "key22", CODE_TEXT: "DataRoute routesInfo", ExtData: { Icon: "xsd-icon-qjys", RightValue: "" } },
                                        { CODE_VALUE: "key23", CODE_TEXT: "Name xs:string", ExtData: { Icon: "xsd-icon-qjtx", RightValue: "" } }
                                    ]

                                },
                                {
                                    CODE_VALUE: "key3", CODE_TEXT: "routes", ExtData: { Icon: "xsd-icon-qjfz", RightValue: "" },
                                    Children: [
                                        { CODE_VALUE: "key32", CODE_TEXT: "RegName xs:string", ExtData: { Icon: "xsd-icon-qjys", RightValue: "" } }
                                    ]
                                },
                                {
                                    CODE_VALUE: "key4", CODE_TEXT: "AtawMvcConfig", ExtData: { Icon: "xsd-icon-qjys", RightValue: "" },
                                    Children: [
                                        { CODE_VALUE: "key42", CODE_TEXT: "AppName xs:string", ExtData: { Icon: "xsd-icon-qjys", RightValue: "" } },
                                        { CODE_VALUE: "key43", CODE_TEXT: "DataRoutes dataroutes", ExtData: { Icon: "xsd-icon-qjys", RightValue: "" } },
                                        { CODE_VALUE: "key44", CODE_TEXT: "Routes routes", ExtData: { Icon: "xsd-icon-qjys", RightValue: "" } }
                                    ]
                                },
                            ]
                        },
                        {
                            CODE_VALUE: "key5", CODE_TEXT: " DataRoute.xsd", ExtData: { Icon: "xsd-icon-jg", RightValue: "" },
                            Children: [
                                {
                                    CODE_VALUE: "key6", CODE_TEXT: "routesInfo", ExtData: { Icon: "xsd-icon-qjfz", RightValue: "" },
                                    Children: [
                                        { CODE_VALUE: "key62", CODE_TEXT: "ControlName xs:string", ExtData: { Icon: "xsd-icon-qjys", RightValue: "" } },
                                        { CODE_VALUE: "key63", CODE_TEXT: "ActionName xs:string", ExtData: { Icon: "xsd-icon-qjys", RightValue: "" } },
                                        { CODE_VALUE: "key64", CODE_TEXT: "AreaName xs:string", ExtData: { Icon: "xsd-icon-qjys", RightValue: "" } },
                                        { CODE_VALUE: "key65", CODE_TEXT: "Param xs:string", ExtData: { Icon: "xsd-icon-qjys", RightValue: "" } },
                                        { CODE_VALUE: "key66", CODE_TEXT: "Name xs:string", ExtData: { Icon: "xsd-icon-qjtx", RightValue: "" } }
                                    ]

                                }
                            ]
                        }
                    ]

                }
            );

         
            

        }

        private init(config: IHXsdPageConfig) {
        }


        protected loadPage(callback?: () => any) {


            if (callback) {
                callback();
            }
        }

    }
    export class HXsdPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class HXsdPageProps extends basewedPageFile.Web.BaseWebPageProps<IReactHXsdPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("HXsdPage", basewedPageFile.Web.BaseWebPageVm, HXsdPageVm);

}
