import domFile = require("./../../01core/0Dom");import React = require("react");
  
import iocFile = require("./../../01core/Ioc");
 
  
import domCore = domFile.Core;
import utilFile = require("./../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../01core/Url");
import basewedPageFile = require("./../../04page/BaseWebPage");
import baseTreeFile = require("./../../02col/03selector/BaseTree");

export module GroupRightDetailPage {
    export class GroupRightDetailPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class GroupRightDetailPageReact extends basewedPageFile.Web.BaseWebPageReact<GroupRightDetailPageProps, GroupRightDetailPageStates, GroupRightDetailPageAction> implements domCore.IReact {

        private fun_grantRight()
        {
            this.props.Vm.fun_grantRight();
        }
        public state = new GroupRightDetailPageStates();
        public pSender(): React.ReactElement<any> {
            return <div className="">
                <div className="Hm-modals Hg-overflow-auto" >
                {!this.props.Vm.RightTreeObj ? "正在载入权限树" : this.props.Vm.RightTreeObj.intoDom() }                
                </div>
                <br/>
                <br/>
                <div className="text-center"><a  className="btn btn-sm btn-primary" onClick={() => { this.fun_grantRight(); } }>点击分配权限</a></div>
                </div>;
        }

    }
    export interface IGroupRightDetailPageConfig {
        RightTree: baseTreeFile.ui.IBaseTreeVm;
    }
    export class GroupRightDetailPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = GroupRightDetailPageReact;
        public RightTreeObj: baseTreeFile.ui.BaseTreeVm;

        public constructor(config?: IGroupRightDetailPageConfig) {
            super();
            if (config) {
                this.RightTreeObj = new baseTreeFile.ui.BaseTreeVm(config.RightTree);
            }
        }

        public fun_grantRight()
        {
            urlFile.Core.AkUrl.Current().openUrl("$panelGROUPGRANT$"+this.Param1+"$");
        }

        protected loadPage(callback?: () => any) {

            this.RightTreeObj = new baseTreeFile.ui.BaseTreeVm(
                {
                    RegName: "RightByOrgIdCodeTable-" + this.Param1,
                    NullReactFun: (vm) => {
                        return <div>该组织未分配权限</div>;
                    }
                });
            if (callback) {
                callback();
            }
        }



    }
    export class GroupRightDetailPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class GroupRightDetailPageProps extends basewedPageFile.Web.BaseWebPageProps<GroupRightDetailPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("GROUPRIGHTDETAILPAGE`", basewedPageFile.Web.BaseWebPageVm, GroupRightDetailPageVm);

}

