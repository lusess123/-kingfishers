import domFile = require("./../../01core/0Dom");
import iocFile = require("./../../01core/Ioc");
//import domFile = require("./../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../01core/Url");
import basewedPageFile = require("./../../04page/BaseWebPage");

import treeFile = require("./../../05tool/Tree");
import singleCheckBoxFile = require("./../../02col/02Mulite/SingleCheckBox");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module TreeTestPage {
    export class TreeTestPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class TreeTestPageReact extends basewedPageFile.Web.BaseWebPageReact<TreeTestPageProps, TreeTestPageStates, TreeTestPageAction> implements domCore.IReact {

        public state = new TreeTestPageStates();
        public pSender(): React.ReactElement<any> {
            return <div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                    {this.props.Vm.TreeObj.intoDom()}
                </div>
                <div className="col-lg-8 col-md-8 col-sm-6 col-xs-6">
                    <h1>是否多选: {this.props.Vm.IsMulitTreeCkObj.intoDom() }</h1>
                    <h1>被勾选时：<span>关联父：{this.props.Vm.YesParentCkObj.intoDom() }</span><span>关联子：{this.props.Vm.YesChildCkObj.intoDom() }</span></h1>
                    <h1>取消勾选时：<span>关联父：{this.props.Vm.NoParentCkObj.intoDom() }</span><span>关联子：{this.props.Vm.NoChildCkObj.intoDom() }</span></h1>
                </div>
                  </div>;
        }






    }
    export interface ITreeTestPageConfig {


    }
    export class TreeTestPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = TreeTestPageReact;
        public TreeObj: treeFile.ui.TreeVm;
        public YesParentCkObj: singleCheckBoxFile.ui.SingleCheckBoxVm;
        public YesChildCkObj: singleCheckBoxFile.ui.SingleCheckBoxVm;

        public NoParentCkObj: singleCheckBoxFile.ui.SingleCheckBoxVm;
        public NoChildCkObj: singleCheckBoxFile.ui.SingleCheckBoxVm;

        public  IsMulitTreeCkObj: singleCheckBoxFile.ui.SingleCheckBoxVm;

        public constructor(config?: ITreeTestPageConfig) {
            super();

        }

        protected loadPage(callback?: () => any) {

            this.TreeObj = new treeFile.ui.TreeVm({ IsMultiSelect:true });

            this.TreeObj.initTreeVm({
                CODE_VALUE: "0", CODE_TEXT: "根",
                Children: [
                    {
                        CODE_VALUE: "key1", CODE_TEXT: "基础信息",
                        Children: [
                            { CODE_VALUE: "$userinfo$", CODE_TEXT: "用户信息", }
                        ]
                    },
                    {
                        CODE_VALUE: "key2", CODE_TEXT: "权限管理",
                        Children: [
                            { CODE_VALUE: "$menu$", CODE_TEXT: "基础菜单" },
                            { CODE_VALUE: "$group$", CODE_TEXT: "组织机构" },
                            { CODE_VALUE: "$role$", CODE_TEXT: "角色管理" },
                            { CODE_VALUE: "$UserManagerPage$", CODE_TEXT: "用户管理" },
                            { CODE_VALUE: "$rightPage$", CODE_TEXT: "权限配置原型" },
                            { CODE_VALUE: "$rightMainPage$", CODE_TEXT: "权限配置页面" },
                        ]
                    },
                    {
                        CODE_VALUE: "key3", CODE_TEXT: "SDK学习案例",
                        Children: [
                            { CODE_VALUE: "$allcolpage$", CODE_TEXT: "所有的控件" },
                            { CODE_VALUE: "$BASELISTPAGE$", CODE_TEXT: "列表组件" },
                            { CODE_VALUE: "$BASEMDPAGE$", CODE_TEXT: "主从表测试" },
                            { CODE_VALUE: "$test1$", CODE_TEXT: "定时器组件" },
                            { CODE_VALUE: "$ORGLISTPAGE$", CODE_TEXT: "组织机构2" },
                            { CODE_VALUE: "$$module/AllControls/AllControls$", CODE_TEXT: "配置页面" },
                            {
                                CODE_VALUE: "key4", CODE_TEXT: "团队成员",
                                Children: [
                                    { CODE_VALUE: "$zykTestPage$", CODE_TEXT: "郑瑜琨" },
                                    { CODE_VALUE: "$sjTestPage$", CODE_TEXT: "沈君" }]
                            }
                        ]
                    }
                ]
            });
            this.YesParentCkObj = new singleCheckBoxFile.ui.SingleCheckBoxVm();
            this.YesChildCkObj = new singleCheckBoxFile.ui.SingleCheckBoxVm();
            this.NoParentCkObj = new singleCheckBoxFile.ui.SingleCheckBoxVm();
            this.NoChildCkObj = new singleCheckBoxFile.ui.SingleCheckBoxVm();

            this.IsMulitTreeCkObj = new singleCheckBoxFile.ui.SingleCheckBoxVm();
            this.IsMulitTreeCkObj.dataValueSet(this.TreeObj.IsMultiSelect?"true":"false");

            this.YesParentCkObj.ChangeEventFun = (val, col) => {
                this.TreeObj.IsYesParent = val == "true";
                return true;
            };
            this.YesChildCkObj.ChangeEventFun = (val, col) => {
                this.TreeObj.IsYesChild = val == "true";
                return true;
            };
            this.NoParentCkObj.ChangeEventFun = (val, col) => {
                this.TreeObj.IsNoParent = val == "true";
                return true;
            };
            this.NoChildCkObj.ChangeEventFun = (val, col) => {
                this.TreeObj.IsNoChild = val == "true";
                return true;
            };

            this.IsMulitTreeCkObj.ChangeEventFun = (val, col) => {
                this.TreeObj.IsMultiSelect = val == "true";
                return true;
            };

            if (callback) {
                callback();
            }
        }

       

    }
    export class TreeTestPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class TreeTestPageProps extends basewedPageFile.Web.BaseWebPageProps<TreeTestPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("TREETESTPAGE", basewedPageFile.Web.BaseWebPageVm, TreeTestPageVm);

}
