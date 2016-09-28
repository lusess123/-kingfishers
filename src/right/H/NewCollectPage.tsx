

import domFile = require("./../../01core/0Dom");import React = require("react");
  
import iocFile = require("./../../01core/Ioc");
 
  
import domCore = domFile.Core;
import utilFile = require("./../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../01core/Url");
import basewedPageFile = require("./../../04page/BaseWebPage");
import treeFile = require("./../../05tool/tree");

export module NewCollect {
    export class NewCollectAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class NewCollectReact extends basewedPageFile.Web.BaseWebPageReact<NewCollectProps, NewCollectStates, NewCollectAction> implements domCore.IReact {

        public state = new NewCollectStates();
        public pSender(): React.ReactElement<any> {
            return <div className="acs-collect-panel">
                    <h6 className="acs-collect-title">新增书签</h6>
                         <div className="acsPaddingT1 clearfix">
                              <div className="left"><span>名称：</span></div>                           
                              <div className="left acsWidthP85"><input type="text"></input></div> 
                          </div>
                          <div className="acsPaddingT1 clearfix">
                              <div className="left"><span>地址：</span></div>
                              <div className="left acsWidthP85"><input type="text"></input></div>
                            </div>
                    <div className="acs-folder-box">{this.props.Vm.TreeObj.intoDom()}
                       </div>
                    <div className="acs-collect-btn">
                          <div className="left"><a className="button tiny default">新建文件夹</a></div>
                          <div className="right">
                              <a className="button tiny default acs-btn-save">保存</a>
                              <a className="button tiny default">取消</a>                           
                         </div>                                                        
                   </div> 
                </div>;
        }

        public fun_TreeNodeShow() {
            this.props.Vm.IsTreeNodeShow = !this.props.Vm.IsTreeNodeShow;
            this.forceUpdate();
        }




    }
    export class NewCollectVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = NewCollectReact;
        public TreeObj: treeFile.ui.TreeVm;

        public IsTreeNodeShow: boolean;

        public constructor()
        {
            super();
            this.TreeObj = new treeFile.ui.TreeVm();

            this.TreeObj.initTreeVm(
                {
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
                                { CODE_VALUE: "$rightPage$", CODE_TEXT: "权限配置" },
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
                                { CODE_VALUE: "$$module/AllControls/AllControls$", CODE_TEXT: "配置页面" }
                            ]
                        }
                    ]
                }
            );

        }

    }
    export class NewCollectStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class NewCollectProps extends basewedPageFile.Web.BaseWebPageProps<NewCollectVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("NEWCOLLECTPAGE", basewedPageFile.Web.BaseWebPageVm, NewCollectVm);

}